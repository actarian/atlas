/**
 * @license atlas v0.1.0
 * (c) 2020 Luca Zampetti
 * License: ISC
 */

(function (factory) {
	typeof define === 'function' && define.amd ? define('app', factory) :
	factory();
}((function () { 'use strict';

	var GtmService =
	/*#__PURE__*/
	function () {
	  function GtmService() {}

	  // Id da dare al tag script delle pagine con filtri.
	  // Questo indica a Highway di non eseguire il PageView. Sarà il controller a farlo
	  GtmService.pageView = function pageView(pathname) {
	    var obj = {
	      event: 'PageViewCustomEvent',
	      title: document.title,
	      href: window.location.href,
	      pathname: pathname || window.location.pathname,
	      hostname: window.location.hostname
	    };
	    Object.assign(obj, window.dataLayerData);
	    return GtmService.push(obj);
	  };

	  GtmService.pageViewFilters = function pageViewFilters(cat, filters) {
	    var values = [];
	    var any = false;

	    var _loop = function _loop(key) {
	      var textValue = '';
	      var filterValue = filters[key].value;

	      if (filterValue) {
	        var selectedOption = filters[key].options.find(function (option) {
	          return option.value === filterValue;
	        });

	        if (selectedOption) {
	          textValue = selectedOption.key;
	        }
	      }

	      if (textValue) any = true;
	      var name = filters[key].key
	      /* se array di filtri */
	      || key
	      /* se oggetto filtro */
	      ;
	      if (name) name = encodeURIComponent(name) + '-';
	      values.push(name + encodeURIComponent(textValue));
	    };

	    for (var key in filters) {
	      _loop(key);
	    }

	    var pathname = any ? "?cat=" + cat + "&s=" + values.join('_') : '';
	    GtmService.pageView(window.location.pathname + pathname);
	  };

	  GtmService.push = function push(event) {
	    console.log('GtmService.dataLayer', event);
	    var dataLayer = window.dataLayer || [];
	    return dataLayer.push(event);
	  };

	  return GtmService;
	}();
	GtmService.FILTERS_SCRIPT_ID = 'script-listing';

	//import { of } from "rxjs";
	var ITEMS_PER_PAGE = 20;
	var GTM_CAT = 'ricerca-avanzata';

	var AdvancedSearchCtrl =
	/*#__PURE__*/
	function () {
	  function AdvancedSearchCtrl($scope, $timeout, LocationService, ApiService) {
	    this.$scope = $scope;
	    this.$timeout = $timeout;
	    this.locationService = LocationService;
	    this.apiService = ApiService; //this.items = [];

	    this.filteredItems = [];
	    this.filters = window.filters || [];
	    this.selectedFilters = [];
	    this.items = window.items || [];
	    this.initialFilters = window.initialFilters || null;
	    this.deserializeFilters(this.initialFilters);
	    this.applyFilters(false); // !!!
	    //this.apiService.advancedSearch.get().subscribe(
	    //	// this.fakeSearch$().subscribe(
	    //	success => {
	    //		let items = success.data;
	    //		this.items = items;
	    //		this.applyFilters();
	    //	}
	    //);
	  }

	  var _proto = AdvancedSearchCtrl.prototype;

	  _proto.deserializeFilters = function deserializeFilters() {
	    var locationFilters = this.locationService.deserialize('filters') || this.initialFilters || {}; // console.log('AdvancedSearchCtrl.deserializeFilters', filters);

	    this.filters.forEach(function (filter) {
	      //if (filter.type === 'minimal') {
	      //	filter.doFilter = (item, value) => {
	      //		let has = false;
	      //		(item.minimals || [item]).forEach(x => {
	      //			has = has || x.features.indexOf(value) !== -1;
	      //		});
	      //		return has;
	      //	};
	      //} else {
	      filter.doFilter = function (item, value) {
	        return item.features.indexOf(value) !== -1;
	      }; //}
	      //switch (filter.key) {
	      //	case 'finish':
	      //		filter.doFilter = (item, value) => {
	      //			let has = false;
	      //			const size = this.filters.find(x => x.key == 'size' && x.value !== null);
	      //			item.minimals.forEach(x => {
	      //				has = has || (x.finish.id === value && (!size || x.size.id === size.value));
	      //			});
	      //			return has;
	      //		};
	      //		break;
	      //	case 'size':
	      //		filter.doFilter = (item, value) => {
	      //			let has = false;
	      //			const finish = this.filters.find(x => x.key == 'finish' && x.value !== null);
	      //			item.minimals.forEach(x => {
	      //				has = has || (x.size.id === value && (!finish || x.finish.id === finish.value));
	      //			});
	      //			return has;
	      //		};
	      //		break;
	      //	default:
	      //		filter.doFilter = (item, value) => {
	      //			return item.features.indexOf(value) !== -1;
	      //		};
	      //}

	      /*
	      filter.options.unshift({
	      	label: filter.placeholder,
	      	value: null,
	      });
	      */


	      var selectedOption = filter.options.find(function (o) {
	        return Boolean(o.value === (locationFilters[filter.key] || null));
	      });

	      if (selectedOption) {
	        filter.value = selectedOption.value;
	        filter.placeholder = selectedOption.label;
	      } else {
	        filter.value = null;
	        filter.placeholder = null;
	      } // console.log(x, filters[x], filter.value);

	    });
	    return this.filters;
	  };

	  _proto.serializeFilters = function serializeFilters() {
	    var filters = {};
	    var any = false;
	    this.filters.forEach(function (filter) {
	      if (filter.value !== null) {
	        filters[filter.key] = filter.value;
	        any = true;
	      }
	    });

	    if (!any) {
	      filters = this.initialFilters ? {} : null;
	    } // console.log('AdvancedSearchCtrl.serializeFilters', filters);


	    this.locationService.serialize('filters', filters);
	    return filters;
	  };

	  _proto.applyFilters = function applyFilters(serialize) {
	    var _this = this;

	    // console.log('AdvancedSearchCtrl.applyFilters', this.filters);
	    if (serialize !== false) this.serializeFilters();
	    var selectedFilters = this.filters.filter(function (x) {
	      return x.value !== null;
	    }); //const finishFilter = this.filters.find(x => x.key == 'finish' && x.value !== null);
	    //const sizeFilter = this.filters.find(x => x.key == 'size' && x.value !== null);

	    var filteredItems;

	    if (selectedFilters.length) {
	      filteredItems = this.items.map(function (x) {
	        // duplico i prodotti e minimal
	        var item = Object.assign({}, x);
	        item.minimals = Array.from(x.minimals);
	        return item;
	      }).filter(function (item) {
	        // filtro tutti i minimal con tutti i filtri contemporeamente
	        selectedFilters.forEach(function (filter) {
	          item.minimals = item.minimals.filter(function (minimal) {
	            return filter.doFilter(minimal, filter.value);
	          });
	        });
	        return item.minimals.length > 0;
	      }); //item.minimals = item.minimals.filter(x => {
	      //	let has = true;
	      //	has = has && (!finishFilter || x.finish.id === finishFilter.value) && (!sizeFilter || x.size.id === sizeFilter.value);
	      //	return has;
	      //});
	    } else {
	      filteredItems = this.items.slice();
	    }

	    this.selectedFilters = selectedFilters;
	    this.filteredItems = [];
	    this.visibleItems = [];
	    this.maxItems = ITEMS_PER_PAGE;
	    this.$timeout(function () {
	      _this.filteredItems = filteredItems;
	      _this.visibleItems = filteredItems.slice(0, _this.maxItems);

	      _this.updateFilterStates(filteredItems);
	    }, 50);
	    GtmService.pageViewFilters(GTM_CAT, this.filters);
	  };

	  _proto.updateFilterStates = function updateFilterStates(brands) {
	    var _this2 = this;

	    this.filters.forEach(function (filter) {
	      filter.options.forEach(function (option) {
	        var has = false;

	        if (option.value) {
	          for (var _iterator = _this2.filteredItems, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	            var _ref;

	            if (_isArray) {
	              if (_i >= _iterator.length) break;
	              _ref = _iterator[_i++];
	            } else {
	              _i = _iterator.next();
	              if (_i.done) break;
	              _ref = _i.value;
	            }

	            var item = _ref;

	            for (var _iterator2 = item.minimals, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
	              var _ref2;

	              if (_isArray2) {
	                if (_i2 >= _iterator2.length) break;
	                _ref2 = _iterator2[_i2++];
	              } else {
	                _i2 = _iterator2.next();
	                if (_i2.done) break;
	                _ref2 = _i2.value;
	              }

	              var minimal = _ref2;

	              if (filter.doFilter(minimal, option.value)) {
	                has = true;
	                break;
	              }
	            }

	            if (has) break;
	          }
	        } else {
	          has = true;
	        }

	        option.disabled = !has;
	      }); // console.log(filter.options);
	    });
	  };

	  _proto.setFilter = function setFilter(item, filter) {
	    filter.value = item.value;
	    filter.placeholder = item.label;
	    this.applyFilters();
	    this.$scope.$broadcast('onCloseDropdown');
	  };

	  _proto.removeFilter = function removeFilter(filter) {
	    filter.value = null;
	    filter.placeholder = null;
	    this.applyFilters();
	  };

	  _proto.removeAll = function removeAll() {
	    this.filters.forEach(function (filter) {
	      filter.value = null;
	      filter.placeholder = null;
	    });
	    this.applyFilters();
	  };

	  _proto.onScroll = function onScroll(event) {
	    var _this3 = this;

	    if (event.rect.bottom < event.windowRect.bottom) {
	      // console.log('more!');
	      if (!this.busy && this.maxItems < this.filteredItems.length) {
	        this.$timeout(function () {
	          _this3.busy = true;

	          _this3.$timeout(function () {
	            _this3.maxItems += ITEMS_PER_PAGE;
	            _this3.visibleItems = _this3.filteredItems.slice(0, _this3.maxItems);
	            _this3.busy = false; // console.log(this.visibleItems.length);
	          }, 1000);
	        }, 0);
	      }
	    }
	  } //fakeSearch$(count = 2000) {
	  //	const items = [];
	  //	const collections = ['Marvel Dream', 'Marvel Edge', 'Boost'];
	  //	const tiles = ['Imperial White', 'Royal Calacatta', 'Elegant Sable', 'Gris Supreme', 'Absolute Brown', 'Agata Azul', 'Gold Onyx', 'Red Luxury', 'Gris Clair'];
	  //	const finishes = this.filters.find(x => x.key === 'finish').options;
	  //	const sizes = this.filters.find(x => x.key === 'size').options;
	  //	let UID = 1;
	  //	while (items.length < count) {
	  //		const collectionIndex = Math.floor(Math.random() * collections.length);
	  //		const collectionName = collections[collectionIndex];
	  //		const tileIndex = Math.floor(Math.random() * tiles.length);
	  //		const tileName = tiles[tileIndex];
	  //		const tileImage = `img/advanced-search/tile-0${tileIndex+1}.jpg`;
	  //		const minimals = [];
	  //		const count = 1 + Math.floor(Math.random() * 15);
	  //		while (minimals.length < count) {
	  //			const finish = finishes[Math.floor(Math.random() * finishes.length)];
	  //			const size = sizes[Math.floor(Math.random() * sizes.length)];
	  //			minimals.push({
	  //				id: minimals.length + 1,
	  //				url: '#',
	  //				finish: {
	  //					id: finish.value,
	  //					name: finish.label
	  //				},
	  //				size: {
	  //					id: size.value,
	  //					name: size.label
	  //				},
	  //			});
	  //		}
	  //		const features = [];
	  //		this.filters.forEach(filter => {
	  //			if (filter.key !== 'finish' && filter.key !== 'size') {
	  //				features.push(filter.options[Math.floor(Math.random() * filter.options.length)].value);
	  //			}
	  //		});
	  //		items.push({
	  //			id: UID++,
	  //			collection: {
	  //				id: collectionIndex + 1,
	  //				name: collectionName,
	  //			},
	  //			tile: {
	  //				id: tileIndex + 1,
	  //				name: tileName,
	  //				image: tileImage
	  //			},
	  //			minimals,
	  //			features,
	  //		});
	  //	}
	  //	// console.log(JSON.stringify(items));
	  //	return of({ data: items });
	  //}
	  ;

	  return AdvancedSearchCtrl;
	}();

	AdvancedSearchCtrl.$inject = ['$scope', '$timeout', 'LocationService', 'ApiService'];

	var GTM_CAT$1 = 'collezioni';

	var Collections01Ctrl =
	/*#__PURE__*/
	function () {
	  function Collections01Ctrl($scope, $timeout, LocationService) {
	    this.$scope = $scope;
	    this.$timeout = $timeout;
	    this.locationService = LocationService;
	    this.filters = window.filters || {};
	    this.brands = window.brands || [];
	    this.initialFilters = window.initialFilters || null;
	    this.deserializeFilters(this.initialFilters);
	    this.applyFilters(false); // this.filteredReferences = this.references.slice();
	    // this.updateFilterStates();
	    // console.log(this.filters);
	    // console.log(this.brands);
	  }

	  var _proto = Collections01Ctrl.prototype;

	  _proto.test = function test() {
	    this.test = true;
	    this.applyFilters(false);
	  };

	  _proto.deserializeFilters = function deserializeFilters(initialFilter) {
	    var _this = this;

	    var locationFilters = this.locationService.deserialize('filters') || initialFilter || {}; // console.log('CollectionsCtrl.deserializeFilters', filters);

	    Object.keys(this.filters).forEach(function (x) {
	      var filter = _this.filters[x];

	      switch (x) {
	        case 'collections':
	          filter.doFilter = function (item, value) {
	            return item.id === value;
	          };

	          break;

	        default:
	          filter.doFilter = function (item, value) {
	            return item.features.indexOf(value) !== -1;
	          };

	      }

	      filter.options.unshift({
	        label: filter.placeholder,
	        value: null
	      });
	      var selectedOption = filter.options.find(function (o) {
	        return Boolean(o.value === (locationFilters[x] || null));
	      });
	      filter.value = selectedOption.value;
	      filter.placeholder = selectedOption.label;
	    });
	    return filters;
	  };

	  _proto.serializeFilters = function serializeFilters() {
	    var _this2 = this;

	    var filters = {};
	    var any = false;
	    Object.keys(this.filters).forEach(function (x) {
	      var filter = _this2.filters[x];

	      if (filter.value !== null) {
	        filters[x] = filter.value;
	        any = true;
	      }
	    });

	    if (!any) {
	      filters = this.initialFilters ? {} : null;
	    } // console.log('CollectionsCtrl.serializeFilters', filters);


	    this.locationService.serialize('filters', filters);
	    return filters;
	  };

	  _proto.applyFilters = function applyFilters(serialize) {
	    var _this3 = this;

	    /*
	    const filters = Object.keys(this.filters).map((x) => {
	    	return Object.assign({ type: x }, this.filters[x]);
	    }).filter(x => x.value !== null);
	    */
	    if (serialize !== false) this.serializeFilters();

	    var _this$getFilteredBran = this.getFilteredBrands(),
	        filteredBrands = _this$getFilteredBran.filteredBrands,
	        resultCounts = _this$getFilteredBran.resultCounts,
	        totalCounts = _this$getFilteredBran.totalCounts; // console.log(filteredBrands, filters);


	    if (this.test) {
	      filteredBrands.forEach(function (brand) {
	        return brand.collections.forEach(function (collection) {
	          collection.size = 1 + Math.floor(Math.random() * 6);

	          if (collection.size < 4) {
	            collection.size = 1;
	          } else if (collection.size < 6) {
	            collection.size = 2;
	          } else {
	            collection.size = 3;
	          }
	        });
	      });
	    }
	    /*
	    const order = [3, 2, 2, 1, 1, 1];
	    let i = 0;
	    filteredBrands.forEach(brand => {
	    	brand.collections.sort((a, b) => {
	    		const size = order[i % order.length];
	    		console.log(size);
	    		if (a.size === size) {
	    			i++;
	    			return -1;
	    		}
	    		if (b.size === size) {
	    			i++;
	    			return 1;
	    		}
	    		return 0;
	    	});
	    	// console.log(brand.collections.map(x => x.size).join(','));
	    });
	    */


	    filteredBrands.forEach(function (brand) {
	      brand.collections = _this3.getSortedPattern(brand.collections);
	    });
	    this.filteredBrands = [];
	    this.$timeout(function () {
	      _this3.filteredBrands = filteredBrands;
	      _this3.resultCounts = resultCounts;
	      _this3.totalCounts = totalCounts;

	      _this3.updateFilterStates(); // delayer for image update

	    }, 50);
	    GtmService.pageViewFilters(GTM_CAT$1, this.filters);
	  };

	  _proto.getSortedSize = function getSortedSize(items) {
	    items.sort(function (a, b) {
	      return b.size - a.size;
	    }); // console.log(items.map(x => x.size).join(','));

	    return items;
	  };

	  _proto.getSortedPattern = function getSortedPattern(items) {
	    var order = [3, 2, 1, 2, 1, 1, 1, 2, 3, 1, 2, 1];
	    var sorted = [],
	        i = 0;

	    var _loop = function _loop() {
	      var size = order[i % order.length];
	      var item = items.find(function (x) {
	        return x.size === size;
	      });

	      if (item) {
	        items.splice(items.indexOf(item), 1);
	        sorted.push(item);
	      } else {
	        sorted.push(items.shift());
	      }

	      i++;
	    };

	    while (items.length) {
	      _loop();
	    }

	    console.log(sorted.map(function (x) {
	      return x.size;
	    }).join(','));
	    return sorted;
	  };

	  _proto.getFilteredBrands = function getFilteredBrands(skipFilter) {
	    var _this4 = this;

	    var filters = Object.keys(this.filters).map(function (x) {
	      return _this4.filters[x];
	    }).filter(function (x) {
	      return x.value !== null;
	    });
	    var filteredBrands = filters.length ? [] : this.brands;
	    var resultCounts = 0,
	        totalCounts = 0;

	    if (filters.length) {
	      this.brands.map(function (x) {
	        return Object.assign({}, x);
	      }).forEach(function (brand) {
	        var filteredCollections = [];
	        brand.collections.forEach(function (collection) {
	          var has = true;
	          filters.forEach(function (filter) {
	            if (filter !== skipFilter) {
	              has = has && filter.doFilter(collection, filter.value);
	            }
	          });

	          if (has) {
	            filteredCollections.push(collection);
	            resultCounts++;
	          }

	          totalCounts++;
	        }); // console.log(has, collection, filters);

	        if (filteredCollections.length) {
	          brand.collections = filteredCollections;
	          filteredBrands.push(brand);
	        }
	      });
	    }

	    return {
	      filteredBrands: filteredBrands,
	      resultCounts: resultCounts,
	      totalCounts: totalCounts
	    };
	  };

	  _proto.updateFilterStates = function updateFilterStates() {
	    var _this5 = this;

	    Object.keys(this.filters).forEach(function (x) {
	      var filter = _this5.filters[x];

	      var _this5$getFilteredBra = _this5.getFilteredBrands(filter),
	          filteredBrands = _this5$getFilteredBra.filteredBrands,
	          resultCounts = _this5$getFilteredBra.resultCounts,
	          totalCounts = _this5$getFilteredBra.totalCounts;

	      var collections = [].concat.apply([], filteredBrands.map(function (x) {
	        return x.collections;
	      }));
	      filter.options.forEach(function (option) {
	        var has = false;

	        if (option.value) {
	          var i = 0;

	          while (i < collections.length && !has) {
	            var collection = collections[i];
	            has = filter.doFilter(collection, option.value);
	            i++;
	          }
	        } else {
	          has = true;
	        }

	        option.disabled = !has;
	      }); // console.log(filter.options);
	    });
	  };

	  _proto.setFilter = function setFilter(item, filter) {
	    item = item || filter.options[0];
	    filter.value = item.value;
	    filter.placeholder = item.label;
	    this.applyFilters();
	    this.$scope.$broadcast('onCloseDropdown');
	  };

	  _proto.removeFilter = function removeFilter(filter) {
	    this.setFilter(null, filter);
	  };

	  return Collections01Ctrl;
	}();

	Collections01Ctrl.$inject = ['$scope', '$timeout', 'LocationService'];

	var GTM_CAT$2 = 'collezioni';

	var CollectionsCtrl =
	/*#__PURE__*/
	function () {
	  function CollectionsCtrl($scope, $timeout, LocationService) {
	    this.$scope = $scope;
	    this.$timeout = $timeout;
	    this.locationService = LocationService;
	    this.filters = window.filters || {};
	    this.brands = window.brands || []; // sorting alphabetically

	    /*
	    this.brands.forEach(brand => {
	    	if (brand.collections) {
	    		brand.collections.sort(function(a, b) {
	    			if (a.title < b.title) { return -1; }
	    			if (a.title > b.title) { return 1; }
	    			return 0;
	    		})
	    	}
	    });
	    */

	    this.initialFilters = window.initialFilters || null;
	    this.deserializeFilters(this.initialFilters);
	    this.applyFilters(false); // this.filteredReferences = this.references.slice();
	    // this.updateFilterStates();
	    // console.log(this.filters);
	    // console.log(this.brands);
	  }

	  var _proto = CollectionsCtrl.prototype;

	  _proto.deserializeFilters = function deserializeFilters(initialFilter) {
	    var _this = this;

	    var locationFilters = this.locationService.deserialize('filters') || initialFilter || {}; // console.log('CollectionsCtrl.deserializeFilters', filters);

	    Object.keys(this.filters).forEach(function (x) {
	      var filter = _this.filters[x];

	      switch (x) {
	        case 'collections':
	          filter.doFilter = function (item, value) {
	            return item.id === value;
	          };

	          break;

	        default:
	          filter.doFilter = function (item, value) {
	            return item.features.indexOf(value) !== -1;
	          };

	      }

	      filter.options.unshift({
	        label: filter.placeholder,
	        value: null
	      });
	      var selectedOption = filter.options.find(function (o) {
	        return Boolean(o.value === (locationFilters[x] || null));
	      });
	      filter.value = selectedOption.value;
	      filter.placeholder = selectedOption.label;
	    });
	    return filters;
	  };

	  _proto.serializeFilters = function serializeFilters() {
	    var _this2 = this;

	    var filters = {};
	    var any = false;
	    Object.keys(this.filters).forEach(function (x) {
	      var filter = _this2.filters[x];

	      if (filter.value !== null) {
	        filters[x] = filter.value;
	        any = true;
	      }
	    });

	    if (!any) {
	      filters = this.initialFilters ? {} : null;
	    } // console.log('CollectionsCtrl.serializeFilters', filters);


	    this.locationService.serialize('filters', filters);
	    return filters;
	  };

	  _proto.applyFilters = function applyFilters(serialize) {
	    var _this3 = this;

	    /*
	    const filters = Object.keys(this.filters).map((x) => {
	    	return Object.assign({ type: x }, this.filters[x]);
	    }).filter(x => x.value !== null);
	    */
	    if (serialize !== false) this.serializeFilters();

	    var _this$getFilteredBran = this.getFilteredBrands(),
	        filteredBrands = _this$getFilteredBran.filteredBrands,
	        resultCounts = _this$getFilteredBran.resultCounts,
	        totalCounts = _this$getFilteredBran.totalCounts; // console.log(filteredBrands, filters);


	    this.filteredBrands = [];
	    this.$timeout(function () {
	      _this3.filteredBrands = filteredBrands;
	      _this3.resultCounts = resultCounts;
	      _this3.totalCounts = totalCounts;

	      _this3.updateFilterStates(); // delayer for image update

	    }, 50);
	    GtmService.pageViewFilters(GTM_CAT$2, this.filters);
	  };

	  _proto.getFilteredBrands = function getFilteredBrands(skipFilter) {
	    var _this4 = this;

	    var filters = Object.keys(this.filters).map(function (x) {
	      return _this4.filters[x];
	    }).filter(function (x) {
	      return x.value !== null;
	    });
	    var filteredBrands = [];
	    var resultCounts = 0;
	    var totalCounts = this.brands.reduce(function (total, brand) {
	      return total + brand.collections.length;
	    }, 0);
	    var looks = this.filters.looks.options.filter(function (x) {
	      return x.value;
	    });
	    this.brands.map(function (x) {
	      return Object.assign({}, x);
	    }).forEach(function (brand) {
	      var collections = [];
	      brand.looks = looks.map(function (x) {
	        var look = Object.assign({}, x);
	        look.collections = brand.collections.filter(function (collection) {
	          var has = _this4.filters.looks.doFilter(collection, look.value);

	          filters.forEach(function (filter) {
	            if (filter !== skipFilter) {
	              has = has && filter.doFilter(collection, filter.value);
	            }
	          });

	          if (has && collections.indexOf(collection) === -1) {
	            collections.push(collection);
	          }

	          return has;
	        });
	        return look;
	      }); // .filter(x => x.collections.length)
	      // console.log(has, collection, filters);

	      resultCounts += collections.length;

	      if (brand.looks.length) {
	        filteredBrands.push(brand);
	      }
	    });
	    return {
	      filteredBrands: filteredBrands,
	      resultCounts: resultCounts,
	      totalCounts: totalCounts
	    };
	  };

	  _proto.updateFilterStates = function updateFilterStates() {
	    var _this5 = this;

	    Object.keys(this.filters).forEach(function (x) {
	      var filter = _this5.filters[x];

	      var _this5$getFilteredBra = _this5.getFilteredBrands(filter),
	          filteredBrands = _this5$getFilteredBra.filteredBrands,
	          resultCounts = _this5$getFilteredBra.resultCounts,
	          totalCounts = _this5$getFilteredBra.totalCounts;

	      var collections = [].concat.apply([], filteredBrands.map(function (x) {
	        return x.collections;
	      }));
	      filter.options.forEach(function (option) {
	        var has = false;

	        if (option.value) {
	          var i = 0;

	          while (i < collections.length && !has) {
	            var collection = collections[i];
	            has = filter.doFilter(collection, option.value);
	            i++;
	          }
	        } else {
	          has = true;
	        }

	        option.disabled = !has;
	      }); // console.log(filter.options);
	    });
	  };

	  _proto.setFilter = function setFilter(item, filter) {
	    item = item || filter.options[0];
	    filter.value = item.value;
	    filter.placeholder = item.label;
	    this.applyFilters();
	    this.$scope.$broadcast('onCloseDropdown');
	  };

	  _proto.removeFilter = function removeFilter(filter) {
	    this.setFilter(null, filter);
	  };

	  return CollectionsCtrl;
	}();

	CollectionsCtrl.$inject = ['$scope', '$timeout', 'LocationService'];

	var ContactsCtrl =
	/*#__PURE__*/
	function () {
	  function ContactsCtrl($scope, $location, $timeout, $http, StateService) {
	    this.$scope = $scope;
	    this.$location = $location;
	    this.$timeout = $timeout;
	    this.$http = $http;
	    this.data = window.data || {};
	    this.model = {};

	    if (this.$location.search() && this.$location.search().email) {
	      this.model.email = this.$location.search().email;
	    }

	    this.state = StateService.getState();
	    this.state.ready();
	  }

	  var _proto = ContactsCtrl.prototype;

	  _proto.setProvinces = function setProvinces() {
	    var _this = this;

	    this.$timeout(function () {
	      _this.provinces = _this.data.provinces.filter(function (x) {
	        return x.idstato === _this.model.country;
	      });
	    });
	  };

	  _proto.onSubmit = function onSubmit() {
	    var _this2 = this;

	    console.log('ContactsCtrl.onSubmit', this.model);

	    if (this.state.busy()) {
	      this.$http.post('/WS/wsForms.asmx/SaveForm', {
	        datamodel: this.model
	      }).then(function (success) {
	        _this2.state.success();

	        _this2.$scope.$emit('formsubmit');
	      }, function (error) {
	        _this2.error = error;

	        _this2.state.error(error);
	      })
	      /*.finally(() => {
	      				this.state.ready();
	      			})*/
	      ;
	      /*
	      this.$timeout(() => {
	      	this.state.ready();
	      }, 2000);
	      */
	    }
	  };

	  _proto.onInvalid = function onInvalid() {
	    this.$scope.$broadcast('onInvalid');
	  };

	  return ContactsCtrl;
	}();

	ContactsCtrl.$inject = ['$scope', '$location', '$timeout', '$http', 'StateService'];

	var AppearDirective =
	/*#__PURE__*/
	function () {
	  function AppearDirective(DomService) {
	    this.domService = DomService;
	    this.restrict = 'A';
	  }

	  var _proto = AppearDirective.prototype;

	  _proto.link = function link(scope, element, attributes, controller) {
	    var node = element[0];

	    if (window.matchMedia('print').matches) {
	      return node.classList.add('appeared');
	    }

	    var section = this.getSection(node);
	    element.index = [].slice.call(section.querySelectorAll('[appear]')).indexOf(node);
	    var subscription = this.domService.appear$(node).subscribe(function (event) {
	      // -0.05
	      // console.log(event.rect.top);
	      var rect = event.rect;
	      var x = rect.left;
	      var y = 0; // event.rect.top;

	      var index = Math.floor(y / 320) * Math.floor(window.innerWidth / 320) + Math.floor(x / 320);
	      var timeout = index * 50;
	      setTimeout(function () {
	        if (node.classList) {
	          node.classList.add('appeared');
	        }
	      }, timeout); // (i - firstVisibleIndex));

	      /*
	      if (index > 0) {
	      	setTimeout(() => {
	      		node.classList.add('appeared');
	      	}, timeout); // (i - firstVisibleIndex));
	      } else {
	      	node.classList.add('appeared');
	      }
	      */
	    });

	    var onBeforePrint = function onBeforePrint() {
	      node.classList.add('appeared', 'print');
	      subscription.unsubscribe();
	    };

	    window.addEventListener('beforeprint', onBeforePrint);
	    scope.$on('$destroy', function () {
	      window.removeEventListener('beforeprint', onBeforePrint);
	      subscription.unsubscribe();
	    });
	  };

	  _proto.getSection = function getSection(node) {
	    var section = node.parentNode;
	    var p = node;

	    while (p) {
	      p = p.parentNode;

	      if (p && p.classList && p.classList.contains('section')) {
	        section = p;
	        p = null;
	      }
	    }

	    return section;
	  };

	  AppearDirective.factory = function factory(DomService) {
	    return new AppearDirective(DomService);
	  };

	  return AppearDirective;
	}();
	AppearDirective.factory.$inject = ['DomService'];

	var HasDropdownDirective =
	/*#__PURE__*/
	function () {
	  function HasDropdownDirective($timeout) {
	    this.$timeout = $timeout;
	    this.restrict = 'A';
	    this.scope = false;
	  }

	  var _proto = HasDropdownDirective.prototype;

	  _proto.link = function link(scope, element, attributes, controller) {
	    var _this = this;

	    var node = element[0];
	    var uid = HasDropdownDirective.dropDownUid++;
	    var opened = null;
	    var consumer = attributes.hasDropdownConsumer !== undefined ? scope.$eval(attributes.hasDropdownConsumer) : null; // scope.hasDropdown = null;
	    // console.log(attributes.hasDropdown);

	    var trigger = attributes.hasDropdown !== '' ? node.querySelector(attributes.hasDropdown) : node;

	    var onClick = function onClick(event) {
	      // console.log(trigger, node, attributes.hasDropdown);
	      if (opened === null) {
	        openDropdown();
	      } else if (trigger !== node) {
	        closeDropdown();
	      }
	    };

	    var onDocumentClick = function onDocumentClick(event) {
	      var clickedInside = node === event.target || node.contains(event.target); // || !document.contains(event.target)

	      if (!clickedInside) {
	        closeDropdown();
	      }
	    };

	    var onShowHide = function onShowHide(value) {
	      /*
	      if (uid === 4) {
	      	console.log('onShowHide', scope.hasDropdown, uid);
	      }
	      */
	      if (scope.hasDropdown === uid) {
	        node.classList.add('opened');
	      } else {
	        node.classList.remove('opened');
	      }
	    };

	    scope.$watch('hasDropdown', onShowHide);

	    var openDropdown = function openDropdown() {
	      if (opened === null) {
	        opened = true;
	        addDocumentListeners();

	        if (consumer) {
	          var dropdown = node.querySelector('[dropdown]');
	          consumer.onDroppedIn(dropdown).then(function (success) {// console.log('success');
	          });
	          /*
	          if (scope.hasDropdown === uid) {
	          	// consumer.onDroppedOut(dropdown);
	          } else {
	          	consumer.onDroppedIn(dropdown);
	          }
	          // console.log(consumer, dropdown);
	          */
	        }

	        _this.$timeout(function () {
	          scope.hasDropdown = uid;
	          /*
	          if (scope.hasDropdown === uid) {
	          	// scope.hasDropdown = null;
	          } else {
	          	scope.hasDropdown = uid;
	          }
	          */
	        });
	      }
	    };

	    var closeDropdown = function closeDropdown() {
	      if (opened !== null) {
	        removeDocumentListeners();

	        _this.$timeout(function () {
	          opened = null;

	          if (consumer) {
	            var dropdown = node.querySelector('[dropdown]');
	            consumer.onDroppedOut(dropdown); // console.log(consumer, dropdown);
	          }

	          if (scope.hasDropdown === uid) {
	            scope.hasDropdown = null;
	          }
	        });
	      }
	    };

	    scope.$on('onCloseDropdown', closeDropdown);
	    scope.$on('onNavigateOut', closeDropdown);
	    scope.$on('onNavigationTransitionIn', closeDropdown);

	    var addListeners = function addListeners() {
	      trigger.addEventListener('click', onClick);
	    };

	    var addDocumentListeners = function addDocumentListeners() {
	      document.addEventListener('click', onDocumentClick);
	    };

	    var removeListeners = function removeListeners() {
	      trigger.removeEventListener('click', onClick);
	    };

	    var removeDocumentListeners = function removeDocumentListeners() {
	      document.removeEventListener('click', onDocumentClick);
	    };

	    addListeners();
	    scope.$on('$destroy', function () {
	      removeListeners();
	      removeDocumentListeners();
	    });
	  };

	  HasDropdownDirective.factory = function factory($timeout) {
	    return new HasDropdownDirective($timeout);
	  };

	  return HasDropdownDirective;
	}();
	HasDropdownDirective.dropDownUid = 0;
	HasDropdownDirective.factory.$inject = ['$timeout'];

	var AutocompleteDirective =
	/*#__PURE__*/
	function () {
	  function AutocompleteDirective($timeout) {
	    this.$timeout = $timeout;
	    this.restrict = 'A';
	    this.scope = {
	      filter: '=selectWithAutocomplete',
	      handler: '=',
	      onSetItem: '=?',
	      onRemoveItem: '=?'
	    };
	    this.template = "\n\t\t<div class=\"dropdown\">\n\t\t\t<ul class=\"nav nav--select\">\n\t\t\t\t<li ng-repeat=\"item in items track by $index\" ng-class=\"{ active: item.value == filter.value, disabled: item.disabled }\">\n\t\t\t\t\t<span class=\"option\" ng-class=\"{ 'option--picture': item.image }\" ng-click=\"setItem(item)\">\n\t\t\t\t\t\t<img ng-src=\"{{item.image}}\" ng-if=\"item.image\" />\n\t\t\t\t\t\t<span ng-bind=\"item.label\"></span>\n\t\t\t\t\t</span>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<label class=\"label\" ng-bind=\"filter.label\"></label>\n\t\t<div class=\"control control--select\" ng-class=\"{ selected: filter.value }\">\n\t\t\t<div class=\"input\">\n\t\t\t\t<svg class=\"icon icon--close\" ng-if=\"filter.value\" ng-click=\"removeItem()\"><use xlink:href=\"#close\"></use></svg>\n\t\t\t\t<input type=\"text\" class=\"value\" ng-model=\"autocomplete.query\" ng-model-options=\"{ debounce: 200 }\" ng-disabled=\"filter.value\" placeholder=\"{{filter.placeholder}}\" ng-change=\"onChange($event)\" ng-click=\"onClick($event)\"></input>\n\t\t\t\t<svg class=\"icon icon--search\"><use xlink:href=\"#search\"></use></svg>\n\t\t\t\t<!-- <svg class=\"icon icon--arrow-down\"><use xlink:href=\"#arrow-down\"></use></svg> -->\n\t\t\t</div>\n\t\t</div>\n\t\t";
	  }

	  var _proto = AutocompleteDirective.prototype;

	  _proto.link = function link(scope, element, attributes, controller) {
	    var _this = this;

	    var node = element[0];
	    var input = node.querySelector('input');
	    var uid = HasDropdownDirective.dropDownUid++;
	    var autocomplete = scope.autocomplete = {
	      query: null
	    };
	    var filter = scope.filter;
	    scope.items = scope.filter.options;
	    node.initialFocus = null; // scope.$parent.hasDropdown = null;

	    scope.setItem = function (item) {
	      filter.value = item.value;
	      autocomplete.query = null;

	      if (scope.handler) {
	        scope.handler.setFilter(item, filter);
	      }
	    };

	    scope.removeItem = function (item) {
	      filter.value = null;
	      autocomplete.query = null;

	      if (scope.handler) {
	        scope.handler.removeFilter(filter);
	      }
	    };

	    scope.onChange = function (event) {
	      autocomplete.results = filter.options.filter(function (x) {
	        return x.label.toLowerCase().indexOf(autocomplete.query.toLowerCase()) !== -1;
	      });

	      if (autocomplete.results) {
	        scope.items = autocomplete.results;
	        scope.$parent.hasDropdown = uid;
	        node.initialFocus = true;
	      } else {
	        scope.items = filter.options;
	        scope.$parent.hasDropdown = null;
	      } // console.log('onChange', autocomplete.query, autocomplete.results);

	    };

	    var onClickInput = function onClickInput(event) {
	      event.stopPropagation(); // console.log('onClickInput', event);
	    };

	    var onClick = function onClick(event) {
	      var clickedInside = node === event.target || node.contains(event.target); // || !document.contains(event.target)

	      if (clickedInside) {
	        node.initialFocus = true;

	        _this.$timeout(function () {
	          if (scope.$parent.hasDropdown === uid) {
	            scope.$parent.hasDropdown = null;
	          } else {
	            scope.$parent.hasDropdown = uid;
	          }

	          scope.items = filter.options;
	          autocomplete.query = null;
	          autocomplete.results = [];
	        }); // console.log(node, clickedInside, scope.$parent.hasDropdown);

	      } else if (node.initialFocus !== null) {
	        node.initialFocus = false;

	        _this.$timeout(function () {
	          if (scope.$parent.hasDropdown === uid) {
	            scope.$parent.hasDropdown = null;
	            scope.items = filter.options;
	            autocomplete.query = null;
	            autocomplete.results = [];
	          }
	        });
	      }
	    };

	    scope.$parent.$watch('hasDropdown', function (value) {
	      // console.log('hasDropdown', value, uid);
	      if (scope.$parent.hasDropdown === uid) {
	        node.classList.add('opened');
	      } else {
	        node.classList.remove('opened');
	      }
	    });

	    var addListeners = function addListeners() {
	      input.addEventListener('click', onClickInput);
	      document.addEventListener('click', onClick); // element.on('click', onClick);
	    };

	    var removeListeners = function removeListeners() {
	      input.removeEventListener('click', onClickInput);
	      document.removeEventListener('click', onClick); // element.off('click', onClick);
	    };

	    addListeners();
	    scope.$on('$destroy', function () {
	      removeListeners();
	    });
	  };

	  AutocompleteDirective.factory = function factory($timeout) {
	    return new AutocompleteDirective($timeout);
	  };

	  return AutocompleteDirective;
	}();
	AutocompleteDirective.factory.$inject = ['$timeout'];

	var CookiesDirective =
	/*#__PURE__*/
	function () {
	  function CookiesDirective($timeout, StorageService) {
	    this.$timeout = $timeout;
	    this.storage = StorageService;
	    this.restrict = 'A';
	  }

	  var _proto = CookiesDirective.prototype;

	  _proto.link = function link(scope, element, attributes, controller) {
	    var _this = this;

	    var node = element[0];
	    var cookiesAccepted = this.storage.get('cookiesAccepted');

	    if (cookiesAccepted) {
	      node.classList.add('cookies-accepted');
	    }

	    scope.onAcceptCookies = function (event) {
	      _this.storage.set('cookiesAccepted', true); // accept();


	      TweenMax.to(node, 0.5, {
	        bottom: '-100%',
	        ease: Power2.easeInOut,
	        delay: 0.15,
	        onComplete: function onComplete() {
	          node.classList.add('cookies-accepted');
	        }
	      });
	    };
	  };

	  CookiesDirective.factory = function factory($timeout, StorageService) {
	    return new CookiesDirective($timeout, StorageService);
	  };

	  return CookiesDirective;
	}();
	CookiesDirective.factory.$inject = ['$timeout', 'CookieService'];

	var FRAGMENT_SHADER = "\n#ifdef GL_ES\nprecision highp float;\n#endif\n\nuniform vec2 u_resolution;\nuniform vec2 u_mouse;\nuniform float u_time;\nuniform float u_pow;\nuniform float u_top;\nuniform float u_strength;\nuniform sampler2D u_texture;\nuniform vec2 u_textureResolution;\n\nfloat random(vec2 st) {\n\treturn fract(sin(dot(st.xy + cos(u_time), vec2(12.9898 , 78.233))) * (43758.5453123));\n}\n\nvoid main() {\n\tvec2 st = gl_FragCoord.xy / u_resolution.xy;\n\tfloat rr = u_resolution.x / u_resolution.y;\n\tfloat tr = u_textureResolution.x / u_textureResolution.y;\n\tif (tr > rr) {\n\t\tst.x = ((st.x - 0.5) * rr / tr) + 0.5;\n\t} else {\n\t\tst.y = ((st.y - 0.5) / rr * tr) + 0.5;\n\t}\n\tfloat top = u_top / u_resolution.y;\n\tvec2 mx = u_mouse / u_resolution;\n\tvec2 dx = vec2(cos(u_time * 0.5), sin(u_time * 0.6)) * 4.0 * u_strength;\n\n\tfloat noise = random(st) * 0.08;\n\n\tfloat c = cos((st.x + dx.x - mx.x * 0.4) * 6.0 + 2.0 * dx.y);\n\tfloat s = sin((st.y + top + dx.y - mx.y * 0.2) * 3.0 + 1.0 * dx.x);\n\tfloat b = (length(vec2(c + s, c)) + 2.0) * u_strength;\n\n\tfloat center = length(st - 0.5);\n\tvec2 sty = vec2(st.x, st.y + top);\n\tfloat scale = 0.95 * (1.0 - b * center * u_pow);\n\tvec2 stb = (sty - 0.5) * scale + 0.5;\n\n\tvec3 video = texture2D(u_texture, stb).rgb;\n\tvec3 bulge = vec3(b);\n\n\tvec3 color = vec3(0.0);\n\tcolor = vec3(video - noise);\n\t// color = vec3(video);\n\t// color = vec3(video - bulge * 0.1 - noise);\n\t// color = vec3(bulge);\n\t// color = vec3(noise);\n\t// color = vec3(center);\n\t// color = vec3(u_pow * center);\n\t// color = vec3(bulge - noise) * length(st - 0.5) * u_pow;\n\n\tgl_FragColor = vec4(color, 1.0);\n}\n";

	var GlslCanvasDirective =
	/*#__PURE__*/
	function () {
	  /*
	  removed "node_modules/glsl-canvas-js/dist/glsl-canvas.js",
	  from gulpfile.config.json
	  */
	  function GlslCanvasDirective(DomService) {
	    this.domService = DomService;
	    this.restrict = 'A';
	  }

	  var _proto = GlslCanvasDirective.prototype;

	  _proto.link = function link(scope, element, attributes, controller) {
	    console.log('GlslCanvasDirective.link');
	    var node = element[0];
	    var canvas = new GlslCanvas(node, {
	      fragmentString: FRAGMENT_SHADER
	    }); // const canvas = new GlslCanvas(node);

	    canvas.setTexture('u_texture', attributes.glslCanvas, {
	      repeat: true
	    });
	    canvas.setUniform('u_pow', 1.0);
	    canvas.setUniform('u_top', 0.0);
	    canvas.setUniform('u_strength', attributes.withVideo !== undefined ? 0.1 : 0.05);
	    var pow = {
	      pow: 1.0
	    };
	    var tween;

	    var onOver = function onOver(event) {
	      // console.log('onOver');
	      if (tween) {
	        tween.kill();
	      }

	      tween = TweenMax.to(pow, 3, {
	        pow: 0.0,
	        ease: Expo.easeOut,
	        // Back.easeOut.config(1.7),
	        // Elastic.easeOut.config(1, 0.3),
	        overwrite: 'all',
	        onUpdate: function onUpdate() {
	          // console.log(pow.pow);
	          canvas.setUniform('u_pow', pow.pow);
	        }
	      });
	    };

	    var onOut = function onOut(event) {
	      // console.log('onOut');
	      if (tween) {
	        tween.kill();
	      }

	      tween = TweenMax.to(pow, 3, {
	        pow: 1.0,
	        ease: Expo.easeOut,
	        // Back.easeOut.config(1.7),
	        // Elastic.easeOut.config(1, 0.3),
	        overwrite: 'all',
	        onUpdate: function onUpdate() {
	          // console.log(pow.pow);
	          canvas.setUniform('u_pow', pow.pow);
	        }
	      });
	    };

	    node.addEventListener('mouseover', onOver);
	    node.addEventListener('mouseout', onOut);
	    var subscription = this.domService.raf$().subscribe(function (scroll) {
	      canvas.setUniform('u_top', window.scrollY || window.scrollTop || 0);
	    });
	    canvas.on('error', function (error) {
	      console.log(error);
	    });
	    scope.$on('$destroy', function () {
	      if (tween) {
	        tween.kill();
	      }

	      node.removeEventListener('mouseover', onOver);
	      node.removeEventListener('mouseout', onOut);
	      subscription.unsubscribe();
	      canvas.destroy();
	    });
	  };

	  GlslCanvasDirective.factory = function factory(DomService) {
	    return new GlslCanvasDirective(DomService);
	  };

	  return GlslCanvasDirective;
	}();
	GlslCanvasDirective.factory.$inject = ['DomService'];

	var HilightDirective =
	/*#__PURE__*/
	function () {
	  function HilightDirective() {
	    this.restrict = 'A';
	  }

	  var _proto = HilightDirective.prototype;

	  _proto.link = function link(scope, element, attributes, controller) {
	    var node = element[0];
	    var hilight, query;

	    var update = function update() {
	      if (hilight) {
	        if (query) {
	          var index = hilight.toLowerCase().indexOf(query);

	          if (index !== -1) {
	            node.innerHTML = hilight.substring(0, index) + "<span class=\"hilight\">" + hilight.substring(index, index + query.length) + "</span>" + hilight.substring(index + query.length, hilight.length);
	          } else {
	            node.innerHTML = hilight;
	          }
	        } else {
	          node.innerHTML = hilight;
	        }
	      } // console.log(hilight, query, node.innerHTML);

	    };

	    scope.$watch(attributes.hilight, function (current, previous) {
	      // console.log('HilightDirective.hilight', current, previous);
	      hilight = current;
	      update();
	    });
	    scope.$watch(attributes.query, function (current, previous) {
	      // console.log('HilightDirective.query', current, previous);
	      query = current;
	      update();
	    });
	    return;
	  };

	  HilightDirective.factory = function factory() {
	    return new HilightDirective();
	  };

	  return HilightDirective;
	}();
	HilightDirective.factory.$inject = [];

	var HrefDirective =
	/*#__PURE__*/
	function () {
	  function HrefDirective() {
	    this.restrict = 'A';
	  }

	  var _proto = HrefDirective.prototype;

	  _proto.link = function link(scope, element, attributes, controller) {

	    var node = element[0];

	    var onClick = function onClick() {
	      window.location.href = node.getAttribute('href')
	      /* attributes.href mantiene il valore iniziale */
	      ;
	    };

	    {
	      if (attributes.routerDisabled === undefined) {
	        scope.$emit('onHrefNode', node);
	      } else {
	        // console.log(attributes.routerDisabled, node);
	        node.addEventListener('click', onClick);
	      }

	      return;
	    }
	  };

	  _proto.getDomain = function getDomain(text) {
	    var domainRegexp = /([[a-zA-Z0-9-_]+\.]*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,11})/;
	    var matches = text.match(domainRegexp);
	    return matches && matches.length > 1 ? matches[1] : null;
	  };

	  _proto.getMarket = function getMarket(text) {
	    var marketRegexp = /(^|[^\/])\/([^\/]+)/;
	    var matches = text.match(marketRegexp);
	    return matches && matches.length > 2 ? matches[2] : null;
	  };

	  HrefDirective.factory = function factory() {
	    return new HrefDirective();
	  };

	  return HrefDirective;
	}();
	HrefDirective.factory.$inject = [];

	var LastItemDirective =
	/*#__PURE__*/
	function () {
	  function LastItemDirective($timeout) {
	    this.$timeout = $timeout;
	    this.restrict = 'A';
	  }

	  var _proto = LastItemDirective.prototype;

	  _proto.link = function link(scope, element, attributes, controller) {
	    if (scope.$last === true) {
	      this.$timeout(function () {
	        scope.$emit('lastItem', element);
	      });
	    }
	  };

	  LastItemDirective.factory = function factory($timeout) {
	    return new LastItemDirective($timeout);
	  };

	  return LastItemDirective;
	}();
	LastItemDirective.factory.$inject = ['$timeout'];

	var LazyScriptDirective =
	/*#__PURE__*/
	function () {
	  function LazyScriptDirective() {
	    this.restrict = 'A';
	    this.scope = false;
	  }

	  var _proto = LazyScriptDirective.prototype;

	  _proto.link = function link(scope, element, attributes, controller) {
	    // if (attributes.type === 'text/javascript-lazy') {
	    if (attributes.src !== undefined) {
	      fetch(attributes.src, {
	        mode: 'no-cors'
	      }).then(function (response) {
	        var code = response.text();

	        try {
	          new Function(code)();
	        } catch (error) {
	          console.log('LazyScriptDirective.error', error);
	        }
	      });
	    } else {
	      var code = element.text();

	      try {
	        new Function(code)();
	      } catch (error) {
	        console.log('LazyScriptDirective.error', error);
	      }
	    } // }
	    // scope.$on('$destroy', () => {});

	  };

	  LazyScriptDirective.factory = function factory() {
	    return new LazyScriptDirective();
	  };

	  return LazyScriptDirective;
	}();
	LazyScriptDirective.factory.$inject = [];

	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0

	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.

	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */
	/* global Reflect, Promise */

	var extendStatics = function(d, b) {
	    extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return extendStatics(d, b);
	};

	function __extends(d, b) {
	    extendStatics(d, b);
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}

	/** PURE_IMPORTS_START  PURE_IMPORTS_END */
	function isFunction(x) {
	    return typeof x === 'function';
	}

	/** PURE_IMPORTS_START  PURE_IMPORTS_END */
	var _enable_super_gross_mode_that_will_cause_bad_things = false;
	var config = {
	    Promise: undefined,
	    set useDeprecatedSynchronousErrorHandling(value) {
	        if (value) {
	            var error = /*@__PURE__*/ new Error();
	            /*@__PURE__*/ console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
	        }
	        _enable_super_gross_mode_that_will_cause_bad_things = value;
	    },
	    get useDeprecatedSynchronousErrorHandling() {
	        return _enable_super_gross_mode_that_will_cause_bad_things;
	    },
	};

	/** PURE_IMPORTS_START  PURE_IMPORTS_END */
	function hostReportError(err) {
	    setTimeout(function () { throw err; }, 0);
	}

	/** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */
	var empty = {
	    closed: true,
	    next: function (value) { },
	    error: function (err) {
	        if (config.useDeprecatedSynchronousErrorHandling) {
	            throw err;
	        }
	        else {
	            hostReportError(err);
	        }
	    },
	    complete: function () { }
	};

	/** PURE_IMPORTS_START  PURE_IMPORTS_END */
	var isArray = /*@__PURE__*/ (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();

	/** PURE_IMPORTS_START  PURE_IMPORTS_END */
	function isObject(x) {
	    return x !== null && typeof x === 'object';
	}

	/** PURE_IMPORTS_START  PURE_IMPORTS_END */
	var UnsubscriptionErrorImpl = /*@__PURE__*/ (function () {
	    function UnsubscriptionErrorImpl(errors) {
	        Error.call(this);
	        this.message = errors ?
	            errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
	        this.name = 'UnsubscriptionError';
	        this.errors = errors;
	        return this;
	    }
	    UnsubscriptionErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
	    return UnsubscriptionErrorImpl;
	})();
	var UnsubscriptionError = UnsubscriptionErrorImpl;

	/** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_UnsubscriptionError PURE_IMPORTS_END */
	var Subscription = /*@__PURE__*/ (function () {
	    function Subscription(unsubscribe) {
	        this.closed = false;
	        this._parentOrParents = null;
	        this._subscriptions = null;
	        if (unsubscribe) {
	            this._unsubscribe = unsubscribe;
	        }
	    }
	    Subscription.prototype.unsubscribe = function () {
	        var errors;
	        if (this.closed) {
	            return;
	        }
	        var _a = this, _parentOrParents = _a._parentOrParents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
	        this.closed = true;
	        this._parentOrParents = null;
	        this._subscriptions = null;
	        if (_parentOrParents instanceof Subscription) {
	            _parentOrParents.remove(this);
	        }
	        else if (_parentOrParents !== null) {
	            for (var index = 0; index < _parentOrParents.length; ++index) {
	                var parent_1 = _parentOrParents[index];
	                parent_1.remove(this);
	            }
	        }
	        if (isFunction(_unsubscribe)) {
	            try {
	                _unsubscribe.call(this);
	            }
	            catch (e) {
	                errors = e instanceof UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
	            }
	        }
	        if (isArray(_subscriptions)) {
	            var index = -1;
	            var len = _subscriptions.length;
	            while (++index < len) {
	                var sub = _subscriptions[index];
	                if (isObject(sub)) {
	                    try {
	                        sub.unsubscribe();
	                    }
	                    catch (e) {
	                        errors = errors || [];
	                        if (e instanceof UnsubscriptionError) {
	                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
	                        }
	                        else {
	                            errors.push(e);
	                        }
	                    }
	                }
	            }
	        }
	        if (errors) {
	            throw new UnsubscriptionError(errors);
	        }
	    };
	    Subscription.prototype.add = function (teardown) {
	        var subscription = teardown;
	        if (!teardown) {
	            return Subscription.EMPTY;
	        }
	        switch (typeof teardown) {
	            case 'function':
	                subscription = new Subscription(teardown);
	            case 'object':
	                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
	                    return subscription;
	                }
	                else if (this.closed) {
	                    subscription.unsubscribe();
	                    return subscription;
	                }
	                else if (!(subscription instanceof Subscription)) {
	                    var tmp = subscription;
	                    subscription = new Subscription();
	                    subscription._subscriptions = [tmp];
	                }
	                break;
	            default: {
	                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
	            }
	        }
	        var _parentOrParents = subscription._parentOrParents;
	        if (_parentOrParents === null) {
	            subscription._parentOrParents = this;
	        }
	        else if (_parentOrParents instanceof Subscription) {
	            if (_parentOrParents === this) {
	                return subscription;
	            }
	            subscription._parentOrParents = [_parentOrParents, this];
	        }
	        else if (_parentOrParents.indexOf(this) === -1) {
	            _parentOrParents.push(this);
	        }
	        else {
	            return subscription;
	        }
	        var subscriptions = this._subscriptions;
	        if (subscriptions === null) {
	            this._subscriptions = [subscription];
	        }
	        else {
	            subscriptions.push(subscription);
	        }
	        return subscription;
	    };
	    Subscription.prototype.remove = function (subscription) {
	        var subscriptions = this._subscriptions;
	        if (subscriptions) {
	            var subscriptionIndex = subscriptions.indexOf(subscription);
	            if (subscriptionIndex !== -1) {
	                subscriptions.splice(subscriptionIndex, 1);
	            }
	        }
	    };
	    Subscription.EMPTY = (function (empty) {
	        empty.closed = true;
	        return empty;
	    }(new Subscription()));
	    return Subscription;
	}());
	function flattenUnsubscriptionErrors(errors) {
	    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError) ? err.errors : err); }, []);
	}

	/** PURE_IMPORTS_START  PURE_IMPORTS_END */
	var rxSubscriber = /*@__PURE__*/ (function () {
	    return typeof Symbol === 'function'
	        ? /*@__PURE__*/ Symbol('rxSubscriber')
	        : '@@rxSubscriber_' + /*@__PURE__*/ Math.random();
	})();

	/** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */
	var Subscriber = /*@__PURE__*/ (function (_super) {
	    __extends(Subscriber, _super);
	    function Subscriber(destinationOrNext, error, complete) {
	        var _this = _super.call(this) || this;
	        _this.syncErrorValue = null;
	        _this.syncErrorThrown = false;
	        _this.syncErrorThrowable = false;
	        _this.isStopped = false;
	        switch (arguments.length) {
	            case 0:
	                _this.destination = empty;
	                break;
	            case 1:
	                if (!destinationOrNext) {
	                    _this.destination = empty;
	                    break;
	                }
	                if (typeof destinationOrNext === 'object') {
	                    if (destinationOrNext instanceof Subscriber) {
	                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
	                        _this.destination = destinationOrNext;
	                        destinationOrNext.add(_this);
	                    }
	                    else {
	                        _this.syncErrorThrowable = true;
	                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
	                    }
	                    break;
	                }
	            default:
	                _this.syncErrorThrowable = true;
	                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
	                break;
	        }
	        return _this;
	    }
	    Subscriber.prototype[rxSubscriber] = function () { return this; };
	    Subscriber.create = function (next, error, complete) {
	        var subscriber = new Subscriber(next, error, complete);
	        subscriber.syncErrorThrowable = false;
	        return subscriber;
	    };
	    Subscriber.prototype.next = function (value) {
	        if (!this.isStopped) {
	            this._next(value);
	        }
	    };
	    Subscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            this.isStopped = true;
	            this._error(err);
	        }
	    };
	    Subscriber.prototype.complete = function () {
	        if (!this.isStopped) {
	            this.isStopped = true;
	            this._complete();
	        }
	    };
	    Subscriber.prototype.unsubscribe = function () {
	        if (this.closed) {
	            return;
	        }
	        this.isStopped = true;
	        _super.prototype.unsubscribe.call(this);
	    };
	    Subscriber.prototype._next = function (value) {
	        this.destination.next(value);
	    };
	    Subscriber.prototype._error = function (err) {
	        this.destination.error(err);
	        this.unsubscribe();
	    };
	    Subscriber.prototype._complete = function () {
	        this.destination.complete();
	        this.unsubscribe();
	    };
	    Subscriber.prototype._unsubscribeAndRecycle = function () {
	        var _parentOrParents = this._parentOrParents;
	        this._parentOrParents = null;
	        this.unsubscribe();
	        this.closed = false;
	        this.isStopped = false;
	        this._parentOrParents = _parentOrParents;
	        return this;
	    };
	    return Subscriber;
	}(Subscription));
	var SafeSubscriber = /*@__PURE__*/ (function (_super) {
	    __extends(SafeSubscriber, _super);
	    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
	        var _this = _super.call(this) || this;
	        _this._parentSubscriber = _parentSubscriber;
	        var next;
	        var context = _this;
	        if (isFunction(observerOrNext)) {
	            next = observerOrNext;
	        }
	        else if (observerOrNext) {
	            next = observerOrNext.next;
	            error = observerOrNext.error;
	            complete = observerOrNext.complete;
	            if (observerOrNext !== empty) {
	                context = Object.create(observerOrNext);
	                if (isFunction(context.unsubscribe)) {
	                    _this.add(context.unsubscribe.bind(context));
	                }
	                context.unsubscribe = _this.unsubscribe.bind(_this);
	            }
	        }
	        _this._context = context;
	        _this._next = next;
	        _this._error = error;
	        _this._complete = complete;
	        return _this;
	    }
	    SafeSubscriber.prototype.next = function (value) {
	        if (!this.isStopped && this._next) {
	            var _parentSubscriber = this._parentSubscriber;
	            if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
	                this.__tryOrUnsub(this._next, value);
	            }
	            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            var _parentSubscriber = this._parentSubscriber;
	            var useDeprecatedSynchronousErrorHandling = config.useDeprecatedSynchronousErrorHandling;
	            if (this._error) {
	                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
	                    this.__tryOrUnsub(this._error, err);
	                    this.unsubscribe();
	                }
	                else {
	                    this.__tryOrSetError(_parentSubscriber, this._error, err);
	                    this.unsubscribe();
	                }
	            }
	            else if (!_parentSubscriber.syncErrorThrowable) {
	                this.unsubscribe();
	                if (useDeprecatedSynchronousErrorHandling) {
	                    throw err;
	                }
	                hostReportError(err);
	            }
	            else {
	                if (useDeprecatedSynchronousErrorHandling) {
	                    _parentSubscriber.syncErrorValue = err;
	                    _parentSubscriber.syncErrorThrown = true;
	                }
	                else {
	                    hostReportError(err);
	                }
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.complete = function () {
	        var _this = this;
	        if (!this.isStopped) {
	            var _parentSubscriber = this._parentSubscriber;
	            if (this._complete) {
	                var wrappedComplete = function () { return _this._complete.call(_this._context); };
	                if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
	                    this.__tryOrUnsub(wrappedComplete);
	                    this.unsubscribe();
	                }
	                else {
	                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
	                    this.unsubscribe();
	                }
	            }
	            else {
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
	        try {
	            fn.call(this._context, value);
	        }
	        catch (err) {
	            this.unsubscribe();
	            if (config.useDeprecatedSynchronousErrorHandling) {
	                throw err;
	            }
	            else {
	                hostReportError(err);
	            }
	        }
	    };
	    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
	        if (!config.useDeprecatedSynchronousErrorHandling) {
	            throw new Error('bad call');
	        }
	        try {
	            fn.call(this._context, value);
	        }
	        catch (err) {
	            if (config.useDeprecatedSynchronousErrorHandling) {
	                parent.syncErrorValue = err;
	                parent.syncErrorThrown = true;
	                return true;
	            }
	            else {
	                hostReportError(err);
	                return true;
	            }
	        }
	        return false;
	    };
	    SafeSubscriber.prototype._unsubscribe = function () {
	        var _parentSubscriber = this._parentSubscriber;
	        this._context = null;
	        this._parentSubscriber = null;
	        _parentSubscriber.unsubscribe();
	    };
	    return SafeSubscriber;
	}(Subscriber));

	/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
	var OuterSubscriber = /*@__PURE__*/ (function (_super) {
	    __extends(OuterSubscriber, _super);
	    function OuterSubscriber() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.destination.next(innerValue);
	    };
	    OuterSubscriber.prototype.notifyError = function (error, innerSub) {
	        this.destination.error(error);
	    };
	    OuterSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.destination.complete();
	    };
	    return OuterSubscriber;
	}(Subscriber));

	/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
	var InnerSubscriber = /*@__PURE__*/ (function (_super) {
	    __extends(InnerSubscriber, _super);
	    function InnerSubscriber(parent, outerValue, outerIndex) {
	        var _this = _super.call(this) || this;
	        _this.parent = parent;
	        _this.outerValue = outerValue;
	        _this.outerIndex = outerIndex;
	        _this.index = 0;
	        return _this;
	    }
	    InnerSubscriber.prototype._next = function (value) {
	        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
	    };
	    InnerSubscriber.prototype._error = function (error) {
	        this.parent.notifyError(error, this);
	        this.unsubscribe();
	    };
	    InnerSubscriber.prototype._complete = function () {
	        this.parent.notifyComplete(this);
	        this.unsubscribe();
	    };
	    return InnerSubscriber;
	}(Subscriber));

	/** PURE_IMPORTS_START  PURE_IMPORTS_END */
	var subscribeToArray = function (array) {
	    return function (subscriber) {
	        for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
	            subscriber.next(array[i]);
	        }
	        subscriber.complete();
	    };
	};

	/** PURE_IMPORTS_START _hostReportError PURE_IMPORTS_END */
	var subscribeToPromise = function (promise) {
	    return function (subscriber) {
	        promise.then(function (value) {
	            if (!subscriber.closed) {
	                subscriber.next(value);
	                subscriber.complete();
	            }
	        }, function (err) { return subscriber.error(err); })
	            .then(null, hostReportError);
	        return subscriber;
	    };
	};

	/** PURE_IMPORTS_START  PURE_IMPORTS_END */
	function getSymbolIterator() {
	    if (typeof Symbol !== 'function' || !Symbol.iterator) {
	        return '@@iterator';
	    }
	    return Symbol.iterator;
	}
	var iterator = /*@__PURE__*/ getSymbolIterator();

	/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */
	var subscribeToIterable = function (iterable) {
	    return function (subscriber) {
	        var iterator$1 = iterable[iterator]();
	        do {
	            var item = iterator$1.next();
	            if (item.done) {
	                subscriber.complete();
	                break;
	            }
	            subscriber.next(item.value);
	            if (subscriber.closed) {
	                break;
	            }
	        } while (true);
	        if (typeof iterator$1.return === 'function') {
	            subscriber.add(function () {
	                if (iterator$1.return) {
	                    iterator$1.return();
	                }
	            });
	        }
	        return subscriber;
	    };
	};

	/** PURE_IMPORTS_START  PURE_IMPORTS_END */
	var observable = /*@__PURE__*/ (function () { return typeof Symbol === 'function' && Symbol.observable || '@@observable'; })();

	/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */
	var subscribeToObservable = function (obj) {
	    return function (subscriber) {
	        var obs = obj[observable]();
	        if (typeof obs.subscribe !== 'function') {
	            throw new TypeError('Provided object does not correctly implement Symbol.observable');
	        }
	        else {
	            return obs.subscribe(subscriber);
	        }
	    };
	};

	/** PURE_IMPORTS_START  PURE_IMPORTS_END */
	var isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });

	/** PURE_IMPORTS_START  PURE_IMPORTS_END */
	function isPromise(value) {
	    return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
	}

	/** PURE_IMPORTS_START _subscribeToArray,_subscribeToPromise,_subscribeToIterable,_subscribeToObservable,_isArrayLike,_isPromise,_isObject,_symbol_iterator,_symbol_observable PURE_IMPORTS_END */
	var subscribeTo = function (result) {
	    if (!!result && typeof result[observable] === 'function') {
	        return subscribeToObservable(result);
	    }
	    else if (isArrayLike(result)) {
	        return subscribeToArray(result);
	    }
	    else if (isPromise(result)) {
	        return subscribeToPromise(result);
	    }
	    else if (!!result && typeof result[iterator] === 'function') {
	        return subscribeToIterable(result);
	    }
	    else {
	        var value = isObject(result) ? 'an invalid object' : "'" + result + "'";
	        var msg = "You provided " + value + " where a stream was expected."
	            + ' You can provide an Observable, Promise, Array, or Iterable.';
	        throw new TypeError(msg);
	    }
	};

	/** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */
	function canReportError(observer) {
	    while (observer) {
	        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
	        if (closed_1 || isStopped) {
	            return false;
	        }
	        else if (destination && destination instanceof Subscriber) {
	            observer = destination;
	        }
	        else {
	            observer = null;
	        }
	    }
	    return true;
	}

	/** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */
	function toSubscriber(nextOrObserver, error, complete) {
	    if (nextOrObserver) {
	        if (nextOrObserver instanceof Subscriber) {
	            return nextOrObserver;
	        }
	        if (nextOrObserver[rxSubscriber]) {
	            return nextOrObserver[rxSubscriber]();
	        }
	    }
	    if (!nextOrObserver && !error && !complete) {
	        return new Subscriber(empty);
	    }
	    return new Subscriber(nextOrObserver, error, complete);
	}

	/** PURE_IMPORTS_START  PURE_IMPORTS_END */
	function noop() { }

	/** PURE_IMPORTS_START _noop PURE_IMPORTS_END */
	function pipeFromArray(fns) {
	    if (!fns) {
	        return noop;
	    }
	    if (fns.length === 1) {
	        return fns[0];
	    }
	    return function piped(input) {
	        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
	    };
	}

	/** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */
	var Observable = /*@__PURE__*/ (function () {
	    function Observable(subscribe) {
	        this._isScalar = false;
	        if (subscribe) {
	            this._subscribe = subscribe;
	        }
	    }
	    Observable.prototype.lift = function (operator) {
	        var observable = new Observable();
	        observable.source = this;
	        observable.operator = operator;
	        return observable;
	    };
	    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
	        var operator = this.operator;
	        var sink = toSubscriber(observerOrNext, error, complete);
	        if (operator) {
	            sink.add(operator.call(sink, this.source));
	        }
	        else {
	            sink.add(this.source || (config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
	                this._subscribe(sink) :
	                this._trySubscribe(sink));
	        }
	        if (config.useDeprecatedSynchronousErrorHandling) {
	            if (sink.syncErrorThrowable) {
	                sink.syncErrorThrowable = false;
	                if (sink.syncErrorThrown) {
	                    throw sink.syncErrorValue;
	                }
	            }
	        }
	        return sink;
	    };
	    Observable.prototype._trySubscribe = function (sink) {
	        try {
	            return this._subscribe(sink);
	        }
	        catch (err) {
	            if (config.useDeprecatedSynchronousErrorHandling) {
	                sink.syncErrorThrown = true;
	                sink.syncErrorValue = err;
	            }
	            if (canReportError(sink)) {
	                sink.error(err);
	            }
	            else {
	                console.warn(err);
	            }
	        }
	    };
	    Observable.prototype.forEach = function (next, promiseCtor) {
	        var _this = this;
	        promiseCtor = getPromiseCtor(promiseCtor);
	        return new promiseCtor(function (resolve, reject) {
	            var subscription;
	            subscription = _this.subscribe(function (value) {
	                try {
	                    next(value);
	                }
	                catch (err) {
	                    reject(err);
	                    if (subscription) {
	                        subscription.unsubscribe();
	                    }
	                }
	            }, reject, resolve);
	        });
	    };
	    Observable.prototype._subscribe = function (subscriber) {
	        var source = this.source;
	        return source && source.subscribe(subscriber);
	    };
	    Observable.prototype[observable] = function () {
	        return this;
	    };
	    Observable.prototype.pipe = function () {
	        var operations = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            operations[_i] = arguments[_i];
	        }
	        if (operations.length === 0) {
	            return this;
	        }
	        return pipeFromArray(operations)(this);
	    };
	    Observable.prototype.toPromise = function (promiseCtor) {
	        var _this = this;
	        promiseCtor = getPromiseCtor(promiseCtor);
	        return new promiseCtor(function (resolve, reject) {
	            var value;
	            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
	        });
	    };
	    Observable.create = function (subscribe) {
	        return new Observable(subscribe);
	    };
	    return Observable;
	}());
	function getPromiseCtor(promiseCtor) {
	    if (!promiseCtor) {
	        promiseCtor =  Promise;
	    }
	    if (!promiseCtor) {
	        throw new Error('no Promise impl found');
	    }
	    return promiseCtor;
	}

	/** PURE_IMPORTS_START _InnerSubscriber,_subscribeTo,_Observable PURE_IMPORTS_END */
	function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, innerSubscriber) {
	    if (innerSubscriber === void 0) {
	        innerSubscriber = new InnerSubscriber(outerSubscriber, outerValue, outerIndex);
	    }
	    if (innerSubscriber.closed) {
	        return undefined;
	    }
	    if (result instanceof Observable) {
	        return result.subscribe(innerSubscriber);
	    }
	    return subscribeTo(result)(innerSubscriber);
	}

	/** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
	function audit(durationSelector) {
	    return function auditOperatorFunction(source) {
	        return source.lift(new AuditOperator(durationSelector));
	    };
	}
	var AuditOperator = /*@__PURE__*/ (function () {
	    function AuditOperator(durationSelector) {
	        this.durationSelector = durationSelector;
	    }
	    AuditOperator.prototype.call = function (subscriber, source) {
	        return source.subscribe(new AuditSubscriber(subscriber, this.durationSelector));
	    };
	    return AuditOperator;
	}());
	var AuditSubscriber = /*@__PURE__*/ (function (_super) {
	    __extends(AuditSubscriber, _super);
	    function AuditSubscriber(destination, durationSelector) {
	        var _this = _super.call(this, destination) || this;
	        _this.durationSelector = durationSelector;
	        _this.hasValue = false;
	        return _this;
	    }
	    AuditSubscriber.prototype._next = function (value) {
	        this.value = value;
	        this.hasValue = true;
	        if (!this.throttled) {
	            var duration = void 0;
	            try {
	                var durationSelector = this.durationSelector;
	                duration = durationSelector(value);
	            }
	            catch (err) {
	                return this.destination.error(err);
	            }
	            var innerSubscription = subscribeToResult(this, duration);
	            if (!innerSubscription || innerSubscription.closed) {
	                this.clearThrottle();
	            }
	            else {
	                this.add(this.throttled = innerSubscription);
	            }
	        }
	    };
	    AuditSubscriber.prototype.clearThrottle = function () {
	        var _a = this, value = _a.value, hasValue = _a.hasValue, throttled = _a.throttled;
	        if (throttled) {
	            this.remove(throttled);
	            this.throttled = null;
	            throttled.unsubscribe();
	        }
	        if (hasValue) {
	            this.value = null;
	            this.hasValue = false;
	            this.destination.next(value);
	        }
	    };
	    AuditSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
	        this.clearThrottle();
	    };
	    AuditSubscriber.prototype.notifyComplete = function () {
	        this.clearThrottle();
	    };
	    return AuditSubscriber;
	}(OuterSubscriber));

	/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */
	var Action = /*@__PURE__*/ (function (_super) {
	    __extends(Action, _super);
	    function Action(scheduler, work) {
	        return _super.call(this) || this;
	    }
	    Action.prototype.schedule = function (state, delay) {
	        return this;
	    };
	    return Action;
	}(Subscription));

	/** PURE_IMPORTS_START tslib,_Action PURE_IMPORTS_END */
	var AsyncAction = /*@__PURE__*/ (function (_super) {
	    __extends(AsyncAction, _super);
	    function AsyncAction(scheduler, work) {
	        var _this = _super.call(this, scheduler, work) || this;
	        _this.scheduler = scheduler;
	        _this.work = work;
	        _this.pending = false;
	        return _this;
	    }
	    AsyncAction.prototype.schedule = function (state, delay) {
	        if (delay === void 0) {
	            delay = 0;
	        }
	        if (this.closed) {
	            return this;
	        }
	        this.state = state;
	        var id = this.id;
	        var scheduler = this.scheduler;
	        if (id != null) {
	            this.id = this.recycleAsyncId(scheduler, id, delay);
	        }
	        this.pending = true;
	        this.delay = delay;
	        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
	        return this;
	    };
	    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
	        if (delay === void 0) {
	            delay = 0;
	        }
	        return setInterval(scheduler.flush.bind(scheduler, this), delay);
	    };
	    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
	        if (delay === void 0) {
	            delay = 0;
	        }
	        if (delay !== null && this.delay === delay && this.pending === false) {
	            return id;
	        }
	        clearInterval(id);
	        return undefined;
	    };
	    AsyncAction.prototype.execute = function (state, delay) {
	        if (this.closed) {
	            return new Error('executing a cancelled action');
	        }
	        this.pending = false;
	        var error = this._execute(state, delay);
	        if (error) {
	            return error;
	        }
	        else if (this.pending === false && this.id != null) {
	            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
	        }
	    };
	    AsyncAction.prototype._execute = function (state, delay) {
	        var errored = false;
	        var errorValue = undefined;
	        try {
	            this.work(state);
	        }
	        catch (e) {
	            errored = true;
	            errorValue = !!e && e || new Error(e);
	        }
	        if (errored) {
	            this.unsubscribe();
	            return errorValue;
	        }
	    };
	    AsyncAction.prototype._unsubscribe = function () {
	        var id = this.id;
	        var scheduler = this.scheduler;
	        var actions = scheduler.actions;
	        var index = actions.indexOf(this);
	        this.work = null;
	        this.state = null;
	        this.pending = false;
	        this.scheduler = null;
	        if (index !== -1) {
	            actions.splice(index, 1);
	        }
	        if (id != null) {
	            this.id = this.recycleAsyncId(scheduler, id, null);
	        }
	        this.delay = null;
	    };
	    return AsyncAction;
	}(Action));

	var Scheduler = /*@__PURE__*/ (function () {
	    function Scheduler(SchedulerAction, now) {
	        if (now === void 0) {
	            now = Scheduler.now;
	        }
	        this.SchedulerAction = SchedulerAction;
	        this.now = now;
	    }
	    Scheduler.prototype.schedule = function (work, delay, state) {
	        if (delay === void 0) {
	            delay = 0;
	        }
	        return new this.SchedulerAction(this, work).schedule(state, delay);
	    };
	    Scheduler.now = function () { return Date.now(); };
	    return Scheduler;
	}());

	/** PURE_IMPORTS_START tslib,_Scheduler PURE_IMPORTS_END */
	var AsyncScheduler = /*@__PURE__*/ (function (_super) {
	    __extends(AsyncScheduler, _super);
	    function AsyncScheduler(SchedulerAction, now) {
	        if (now === void 0) {
	            now = Scheduler.now;
	        }
	        var _this = _super.call(this, SchedulerAction, function () {
	            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
	                return AsyncScheduler.delegate.now();
	            }
	            else {
	                return now();
	            }
	        }) || this;
	        _this.actions = [];
	        _this.active = false;
	        _this.scheduled = undefined;
	        return _this;
	    }
	    AsyncScheduler.prototype.schedule = function (work, delay, state) {
	        if (delay === void 0) {
	            delay = 0;
	        }
	        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
	            return AsyncScheduler.delegate.schedule(work, delay, state);
	        }
	        else {
	            return _super.prototype.schedule.call(this, work, delay, state);
	        }
	    };
	    AsyncScheduler.prototype.flush = function (action) {
	        var actions = this.actions;
	        if (this.active) {
	            actions.push(action);
	            return;
	        }
	        var error;
	        this.active = true;
	        do {
	            if (error = action.execute(action.state, action.delay)) {
	                break;
	            }
	        } while (action = actions.shift());
	        this.active = false;
	        if (error) {
	            while (action = actions.shift()) {
	                action.unsubscribe();
	            }
	            throw error;
	        }
	    };
	    return AsyncScheduler;
	}(Scheduler));

	/** PURE_IMPORTS_START _AsyncAction,_AsyncScheduler PURE_IMPORTS_END */
	var async = /*@__PURE__*/ new AsyncScheduler(AsyncAction);

	/** PURE_IMPORTS_START _isArray PURE_IMPORTS_END */
	function isNumeric(val) {
	    return !isArray(val) && (val - parseFloat(val) + 1) >= 0;
	}

	/** PURE_IMPORTS_START  PURE_IMPORTS_END */
	function isScheduler(value) {
	    return value && typeof value.schedule === 'function';
	}

	/** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric,_util_isScheduler PURE_IMPORTS_END */
	function timer(dueTime, periodOrScheduler, scheduler) {
	    if (dueTime === void 0) {
	        dueTime = 0;
	    }
	    var period = -1;
	    if (isNumeric(periodOrScheduler)) {
	        period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
	    }
	    else if (isScheduler(periodOrScheduler)) {
	        scheduler = periodOrScheduler;
	    }
	    if (!isScheduler(scheduler)) {
	        scheduler = async;
	    }
	    return new Observable(function (subscriber) {
	        var due = isNumeric(dueTime)
	            ? dueTime
	            : (+dueTime - scheduler.now());
	        return scheduler.schedule(dispatch, due, {
	            index: 0, period: period, subscriber: subscriber
	        });
	    });
	}
	function dispatch(state) {
	    var index = state.index, period = state.period, subscriber = state.subscriber;
	    subscriber.next(index);
	    if (subscriber.closed) {
	        return;
	    }
	    else if (period === -1) {
	        return subscriber.complete();
	    }
	    state.index = index + 1;
	    this.schedule(state, period);
	}

	/** PURE_IMPORTS_START _scheduler_async,_audit,_observable_timer PURE_IMPORTS_END */
	function auditTime(duration, scheduler) {
	    if (scheduler === void 0) {
	        scheduler = async;
	    }
	    return audit(function () { return timer(duration, scheduler); });
	}

	/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */
	function scheduleArray(input, scheduler) {
	    return new Observable(function (subscriber) {
	        var sub = new Subscription();
	        var i = 0;
	        sub.add(scheduler.schedule(function () {
	            if (i === input.length) {
	                subscriber.complete();
	                return;
	            }
	            subscriber.next(input[i++]);
	            if (!subscriber.closed) {
	                sub.add(this.schedule());
	            }
	        }));
	        return sub;
	    });
	}

	/** PURE_IMPORTS_START _Observable,_util_subscribeToArray,_scheduled_scheduleArray PURE_IMPORTS_END */
	function fromArray(input, scheduler) {
	    if (!scheduler) {
	        return new Observable(subscribeToArray(input));
	    }
	    else {
	        return scheduleArray(input, scheduler);
	    }
	}

	/** PURE_IMPORTS_START tslib,_util_isScheduler,_util_isArray,_OuterSubscriber,_util_subscribeToResult,_fromArray PURE_IMPORTS_END */
	var NONE = {};
	function combineLatest() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i] = arguments[_i];
	    }
	    var resultSelector = null;
	    var scheduler = null;
	    if (isScheduler(observables[observables.length - 1])) {
	        scheduler = observables.pop();
	    }
	    if (typeof observables[observables.length - 1] === 'function') {
	        resultSelector = observables.pop();
	    }
	    if (observables.length === 1 && isArray(observables[0])) {
	        observables = observables[0];
	    }
	    return fromArray(observables, scheduler).lift(new CombineLatestOperator(resultSelector));
	}
	var CombineLatestOperator = /*@__PURE__*/ (function () {
	    function CombineLatestOperator(resultSelector) {
	        this.resultSelector = resultSelector;
	    }
	    CombineLatestOperator.prototype.call = function (subscriber, source) {
	        return source.subscribe(new CombineLatestSubscriber(subscriber, this.resultSelector));
	    };
	    return CombineLatestOperator;
	}());
	var CombineLatestSubscriber = /*@__PURE__*/ (function (_super) {
	    __extends(CombineLatestSubscriber, _super);
	    function CombineLatestSubscriber(destination, resultSelector) {
	        var _this = _super.call(this, destination) || this;
	        _this.resultSelector = resultSelector;
	        _this.active = 0;
	        _this.values = [];
	        _this.observables = [];
	        return _this;
	    }
	    CombineLatestSubscriber.prototype._next = function (observable) {
	        this.values.push(NONE);
	        this.observables.push(observable);
	    };
	    CombineLatestSubscriber.prototype._complete = function () {
	        var observables = this.observables;
	        var len = observables.length;
	        if (len === 0) {
	            this.destination.complete();
	        }
	        else {
	            this.active = len;
	            this.toRespond = len;
	            for (var i = 0; i < len; i++) {
	                var observable = observables[i];
	                this.add(subscribeToResult(this, observable, observable, i));
	            }
	        }
	    };
	    CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
	        if ((this.active -= 1) === 0) {
	            this.destination.complete();
	        }
	    };
	    CombineLatestSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        var values = this.values;
	        var oldVal = values[outerIndex];
	        var toRespond = !this.toRespond
	            ? 0
	            : oldVal === NONE ? --this.toRespond : this.toRespond;
	        values[outerIndex] = innerValue;
	        if (toRespond === 0) {
	            if (this.resultSelector) {
	                this._tryResultSelector(values);
	            }
	            else {
	                this.destination.next(values.slice());
	            }
	        }
	    };
	    CombineLatestSubscriber.prototype._tryResultSelector = function (values) {
	        var result;
	        try {
	            result = this.resultSelector.apply(this, values);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return CombineLatestSubscriber;
	}(OuterSubscriber));

	/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_observable PURE_IMPORTS_END */
	function scheduleObservable(input, scheduler) {
	    return new Observable(function (subscriber) {
	        var sub = new Subscription();
	        sub.add(scheduler.schedule(function () {
	            var observable$1 = input[observable]();
	            sub.add(observable$1.subscribe({
	                next: function (value) { sub.add(scheduler.schedule(function () { return subscriber.next(value); })); },
	                error: function (err) { sub.add(scheduler.schedule(function () { return subscriber.error(err); })); },
	                complete: function () { sub.add(scheduler.schedule(function () { return subscriber.complete(); })); },
	            }));
	        }));
	        return sub;
	    });
	}

	/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */
	function schedulePromise(input, scheduler) {
	    return new Observable(function (subscriber) {
	        var sub = new Subscription();
	        sub.add(scheduler.schedule(function () {
	            return input.then(function (value) {
	                sub.add(scheduler.schedule(function () {
	                    subscriber.next(value);
	                    sub.add(scheduler.schedule(function () { return subscriber.complete(); }));
	                }));
	            }, function (err) {
	                sub.add(scheduler.schedule(function () { return subscriber.error(err); }));
	            });
	        }));
	        return sub;
	    });
	}

	/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_iterator PURE_IMPORTS_END */
	function scheduleIterable(input, scheduler) {
	    if (!input) {
	        throw new Error('Iterable cannot be null');
	    }
	    return new Observable(function (subscriber) {
	        var sub = new Subscription();
	        var iterator$1;
	        sub.add(function () {
	            if (iterator$1 && typeof iterator$1.return === 'function') {
	                iterator$1.return();
	            }
	        });
	        sub.add(scheduler.schedule(function () {
	            iterator$1 = input[iterator]();
	            sub.add(scheduler.schedule(function () {
	                if (subscriber.closed) {
	                    return;
	                }
	                var value;
	                var done;
	                try {
	                    var result = iterator$1.next();
	                    value = result.value;
	                    done = result.done;
	                }
	                catch (err) {
	                    subscriber.error(err);
	                    return;
	                }
	                if (done) {
	                    subscriber.complete();
	                }
	                else {
	                    subscriber.next(value);
	                    this.schedule();
	                }
	            }));
	        }));
	        return sub;
	    });
	}

	/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */
	function isInteropObservable(input) {
	    return input && typeof input[observable] === 'function';
	}

	/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */
	function isIterable(input) {
	    return input && typeof input[iterator] === 'function';
	}

	/** PURE_IMPORTS_START _scheduleObservable,_schedulePromise,_scheduleArray,_scheduleIterable,_util_isInteropObservable,_util_isPromise,_util_isArrayLike,_util_isIterable PURE_IMPORTS_END */
	function scheduled(input, scheduler) {
	    if (input != null) {
	        if (isInteropObservable(input)) {
	            return scheduleObservable(input, scheduler);
	        }
	        else if (isPromise(input)) {
	            return schedulePromise(input, scheduler);
	        }
	        else if (isArrayLike(input)) {
	            return scheduleArray(input, scheduler);
	        }
	        else if (isIterable(input) || typeof input === 'string') {
	            return scheduleIterable(input, scheduler);
	        }
	    }
	    throw new TypeError((input !== null && typeof input || input) + ' is not observable');
	}

	/** PURE_IMPORTS_START _Observable,_util_subscribeTo,_scheduled_scheduled PURE_IMPORTS_END */
	function from(input, scheduler) {
	    if (!scheduler) {
	        if (input instanceof Observable) {
	            return input;
	        }
	        return new Observable(subscribeTo(input));
	    }
	    else {
	        return scheduled(input, scheduler);
	    }
	}

	/** PURE_IMPORTS_START _util_isScheduler,_fromArray,_scheduled_scheduleArray PURE_IMPORTS_END */
	function of() {
	    var args = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        args[_i] = arguments[_i];
	    }
	    var scheduler = args[args.length - 1];
	    if (isScheduler(scheduler)) {
	        args.pop();
	        return scheduleArray(args, scheduler);
	    }
	    else {
	        return fromArray(args);
	    }
	}

	/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
	function map(project, thisArg) {
	    return function mapOperation(source) {
	        if (typeof project !== 'function') {
	            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
	        }
	        return source.lift(new MapOperator(project, thisArg));
	    };
	}
	var MapOperator = /*@__PURE__*/ (function () {
	    function MapOperator(project, thisArg) {
	        this.project = project;
	        this.thisArg = thisArg;
	    }
	    MapOperator.prototype.call = function (subscriber, source) {
	        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
	    };
	    return MapOperator;
	}());
	var MapSubscriber = /*@__PURE__*/ (function (_super) {
	    __extends(MapSubscriber, _super);
	    function MapSubscriber(destination, project, thisArg) {
	        var _this = _super.call(this, destination) || this;
	        _this.project = project;
	        _this.count = 0;
	        _this.thisArg = thisArg || _this;
	        return _this;
	    }
	    MapSubscriber.prototype._next = function (value) {
	        var result;
	        try {
	            result = this.project.call(this.thisArg, value, this.count++);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return MapSubscriber;
	}(Subscriber));

	/** PURE_IMPORTS_START tslib,_util_subscribeToResult,_OuterSubscriber,_InnerSubscriber,_map,_observable_from PURE_IMPORTS_END */
	function mergeMap(project, resultSelector, concurrent) {
	    if (concurrent === void 0) {
	        concurrent = Number.POSITIVE_INFINITY;
	    }
	    if (typeof resultSelector === 'function') {
	        return function (source) { return source.pipe(mergeMap(function (a, i) { return from(project(a, i)).pipe(map(function (b, ii) { return resultSelector(a, b, i, ii); })); }, concurrent)); };
	    }
	    else if (typeof resultSelector === 'number') {
	        concurrent = resultSelector;
	    }
	    return function (source) { return source.lift(new MergeMapOperator(project, concurrent)); };
	}
	var MergeMapOperator = /*@__PURE__*/ (function () {
	    function MergeMapOperator(project, concurrent) {
	        if (concurrent === void 0) {
	            concurrent = Number.POSITIVE_INFINITY;
	        }
	        this.project = project;
	        this.concurrent = concurrent;
	    }
	    MergeMapOperator.prototype.call = function (observer, source) {
	        return source.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));
	    };
	    return MergeMapOperator;
	}());
	var MergeMapSubscriber = /*@__PURE__*/ (function (_super) {
	    __extends(MergeMapSubscriber, _super);
	    function MergeMapSubscriber(destination, project, concurrent) {
	        if (concurrent === void 0) {
	            concurrent = Number.POSITIVE_INFINITY;
	        }
	        var _this = _super.call(this, destination) || this;
	        _this.project = project;
	        _this.concurrent = concurrent;
	        _this.hasCompleted = false;
	        _this.buffer = [];
	        _this.active = 0;
	        _this.index = 0;
	        return _this;
	    }
	    MergeMapSubscriber.prototype._next = function (value) {
	        if (this.active < this.concurrent) {
	            this._tryNext(value);
	        }
	        else {
	            this.buffer.push(value);
	        }
	    };
	    MergeMapSubscriber.prototype._tryNext = function (value) {
	        var result;
	        var index = this.index++;
	        try {
	            result = this.project(value, index);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.active++;
	        this._innerSub(result, value, index);
	    };
	    MergeMapSubscriber.prototype._innerSub = function (ish, value, index) {
	        var innerSubscriber = new InnerSubscriber(this, value, index);
	        var destination = this.destination;
	        destination.add(innerSubscriber);
	        var innerSubscription = subscribeToResult(this, ish, undefined, undefined, innerSubscriber);
	        if (innerSubscription !== innerSubscriber) {
	            destination.add(innerSubscription);
	        }
	    };
	    MergeMapSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.active === 0 && this.buffer.length === 0) {
	            this.destination.complete();
	        }
	        this.unsubscribe();
	    };
	    MergeMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.destination.next(innerValue);
	    };
	    MergeMapSubscriber.prototype.notifyComplete = function (innerSub) {
	        var buffer = this.buffer;
	        this.remove(innerSub);
	        this.active--;
	        if (buffer.length > 0) {
	            this._next(buffer.shift());
	        }
	        else if (this.active === 0 && this.hasCompleted) {
	            this.destination.complete();
	        }
	    };
	    return MergeMapSubscriber;
	}(OuterSubscriber));

	/** PURE_IMPORTS_START  PURE_IMPORTS_END */
	function identity(x) {
	    return x;
	}

	/** PURE_IMPORTS_START _mergeMap,_util_identity PURE_IMPORTS_END */
	function mergeAll(concurrent) {
	    if (concurrent === void 0) {
	        concurrent = Number.POSITIVE_INFINITY;
	    }
	    return mergeMap(identity, concurrent);
	}

	/** PURE_IMPORTS_START _mergeAll PURE_IMPORTS_END */
	function concatAll() {
	    return mergeAll(1);
	}

	/** PURE_IMPORTS_START _of,_operators_concatAll PURE_IMPORTS_END */
	function concat() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i] = arguments[_i];
	    }
	    return concatAll()(of.apply(void 0, observables));
	}

	/** PURE_IMPORTS_START tslib,_Subscriber,_scheduler_async PURE_IMPORTS_END */
	function debounceTime(dueTime, scheduler) {
	    if (scheduler === void 0) {
	        scheduler = async;
	    }
	    return function (source) { return source.lift(new DebounceTimeOperator(dueTime, scheduler)); };
	}
	var DebounceTimeOperator = /*@__PURE__*/ (function () {
	    function DebounceTimeOperator(dueTime, scheduler) {
	        this.dueTime = dueTime;
	        this.scheduler = scheduler;
	    }
	    DebounceTimeOperator.prototype.call = function (subscriber, source) {
	        return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
	    };
	    return DebounceTimeOperator;
	}());
	var DebounceTimeSubscriber = /*@__PURE__*/ (function (_super) {
	    __extends(DebounceTimeSubscriber, _super);
	    function DebounceTimeSubscriber(destination, dueTime, scheduler) {
	        var _this = _super.call(this, destination) || this;
	        _this.dueTime = dueTime;
	        _this.scheduler = scheduler;
	        _this.debouncedSubscription = null;
	        _this.lastValue = null;
	        _this.hasValue = false;
	        return _this;
	    }
	    DebounceTimeSubscriber.prototype._next = function (value) {
	        this.clearDebounce();
	        this.lastValue = value;
	        this.hasValue = true;
	        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
	    };
	    DebounceTimeSubscriber.prototype._complete = function () {
	        this.debouncedNext();
	        this.destination.complete();
	    };
	    DebounceTimeSubscriber.prototype.debouncedNext = function () {
	        this.clearDebounce();
	        if (this.hasValue) {
	            var lastValue = this.lastValue;
	            this.lastValue = null;
	            this.hasValue = false;
	            this.destination.next(lastValue);
	        }
	    };
	    DebounceTimeSubscriber.prototype.clearDebounce = function () {
	        var debouncedSubscription = this.debouncedSubscription;
	        if (debouncedSubscription !== null) {
	            this.remove(debouncedSubscription);
	            debouncedSubscription.unsubscribe();
	            this.debouncedSubscription = null;
	        }
	    };
	    return DebounceTimeSubscriber;
	}(Subscriber));
	function dispatchNext(subscriber) {
	    subscriber.debouncedNext();
	}

	/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
	function defaultIfEmpty(defaultValue) {
	    if (defaultValue === void 0) {
	        defaultValue = null;
	    }
	    return function (source) { return source.lift(new DefaultIfEmptyOperator(defaultValue)); };
	}
	var DefaultIfEmptyOperator = /*@__PURE__*/ (function () {
	    function DefaultIfEmptyOperator(defaultValue) {
	        this.defaultValue = defaultValue;
	    }
	    DefaultIfEmptyOperator.prototype.call = function (subscriber, source) {
	        return source.subscribe(new DefaultIfEmptySubscriber(subscriber, this.defaultValue));
	    };
	    return DefaultIfEmptyOperator;
	}());
	var DefaultIfEmptySubscriber = /*@__PURE__*/ (function (_super) {
	    __extends(DefaultIfEmptySubscriber, _super);
	    function DefaultIfEmptySubscriber(destination, defaultValue) {
	        var _this = _super.call(this, destination) || this;
	        _this.defaultValue = defaultValue;
	        _this.isEmpty = true;
	        return _this;
	    }
	    DefaultIfEmptySubscriber.prototype._next = function (value) {
	        this.isEmpty = false;
	        this.destination.next(value);
	    };
	    DefaultIfEmptySubscriber.prototype._complete = function () {
	        if (this.isEmpty) {
	            this.destination.next(this.defaultValue);
	        }
	        this.destination.complete();
	    };
	    return DefaultIfEmptySubscriber;
	}(Subscriber));

	/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
	var EMPTY = /*@__PURE__*/ new Observable(function (subscriber) { return subscriber.complete(); });
	function empty$1(scheduler) {
	    return scheduler ? emptyScheduled(scheduler) : EMPTY;
	}
	function emptyScheduled(scheduler) {
	    return new Observable(function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });
	}

	/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
	function throwError(error, scheduler) {
	    if (!scheduler) {
	        return new Observable(function (subscriber) { return subscriber.error(error); });
	    }
	    else {
	        return new Observable(function (subscriber) { return scheduler.schedule(dispatch$1, 0, { error: error, subscriber: subscriber }); });
	    }
	}
	function dispatch$1(_a) {
	    var error = _a.error, subscriber = _a.subscriber;
	    subscriber.error(error);
	}

	/** PURE_IMPORTS_START _observable_empty,_observable_of,_observable_throwError PURE_IMPORTS_END */
	var Notification = /*@__PURE__*/ (function () {
	    function Notification(kind, value, error) {
	        this.kind = kind;
	        this.value = value;
	        this.error = error;
	        this.hasValue = kind === 'N';
	    }
	    Notification.prototype.observe = function (observer) {
	        switch (this.kind) {
	            case 'N':
	                return observer.next && observer.next(this.value);
	            case 'E':
	                return observer.error && observer.error(this.error);
	            case 'C':
	                return observer.complete && observer.complete();
	        }
	    };
	    Notification.prototype.do = function (next, error, complete) {
	        var kind = this.kind;
	        switch (kind) {
	            case 'N':
	                return next && next(this.value);
	            case 'E':
	                return error && error(this.error);
	            case 'C':
	                return complete && complete();
	        }
	    };
	    Notification.prototype.accept = function (nextOrObserver, error, complete) {
	        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
	            return this.observe(nextOrObserver);
	        }
	        else {
	            return this.do(nextOrObserver, error, complete);
	        }
	    };
	    Notification.prototype.toObservable = function () {
	        var kind = this.kind;
	        switch (kind) {
	            case 'N':
	                return of(this.value);
	            case 'E':
	                return throwError(this.error);
	            case 'C':
	                return empty$1();
	        }
	        throw new Error('unexpected notification kind value');
	    };
	    Notification.createNext = function (value) {
	        if (typeof value !== 'undefined') {
	            return new Notification('N', value);
	        }
	        return Notification.undefinedValueNotification;
	    };
	    Notification.createError = function (err) {
	        return new Notification('E', undefined, err);
	    };
	    Notification.createComplete = function () {
	        return Notification.completeNotification;
	    };
	    Notification.completeNotification = new Notification('C');
	    Notification.undefinedValueNotification = new Notification('N', undefined);
	    return Notification;
	}());

	/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
	function distinctUntilChanged(compare, keySelector) {
	    return function (source) { return source.lift(new DistinctUntilChangedOperator(compare, keySelector)); };
	}
	var DistinctUntilChangedOperator = /*@__PURE__*/ (function () {
	    function DistinctUntilChangedOperator(compare, keySelector) {
	        this.compare = compare;
	        this.keySelector = keySelector;
	    }
	    DistinctUntilChangedOperator.prototype.call = function (subscriber, source) {
	        return source.subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
	    };
	    return DistinctUntilChangedOperator;
	}());
	var DistinctUntilChangedSubscriber = /*@__PURE__*/ (function (_super) {
	    __extends(DistinctUntilChangedSubscriber, _super);
	    function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
	        var _this = _super.call(this, destination) || this;
	        _this.keySelector = keySelector;
	        _this.hasKey = false;
	        if (typeof compare === 'function') {
	            _this.compare = compare;
	        }
	        return _this;
	    }
	    DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
	        return x === y;
	    };
	    DistinctUntilChangedSubscriber.prototype._next = function (value) {
	        var key;
	        try {
	            var keySelector = this.keySelector;
	            key = keySelector ? keySelector(value) : value;
	        }
	        catch (err) {
	            return this.destination.error(err);
	        }
	        var result = false;
	        if (this.hasKey) {
	            try {
	                var compare = this.compare;
	                result = compare(this.key, key);
	            }
	            catch (err) {
	                return this.destination.error(err);
	            }
	        }
	        else {
	            this.hasKey = true;
	        }
	        if (!result) {
	            this.key = key;
	            this.destination.next(value);
	        }
	    };
	    return DistinctUntilChangedSubscriber;
	}(Subscriber));

	/** PURE_IMPORTS_START  PURE_IMPORTS_END */
	var ArgumentOutOfRangeErrorImpl = /*@__PURE__*/ (function () {
	    function ArgumentOutOfRangeErrorImpl() {
	        Error.call(this);
	        this.message = 'argument out of range';
	        this.name = 'ArgumentOutOfRangeError';
	        return this;
	    }
	    ArgumentOutOfRangeErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
	    return ArgumentOutOfRangeErrorImpl;
	})();
	var ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;

	/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
	function filter(predicate, thisArg) {
	    return function filterOperatorFunction(source) {
	        return source.lift(new FilterOperator(predicate, thisArg));
	    };
	}
	var FilterOperator = /*@__PURE__*/ (function () {
	    function FilterOperator(predicate, thisArg) {
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	    }
	    FilterOperator.prototype.call = function (subscriber, source) {
	        return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
	    };
	    return FilterOperator;
	}());
	var FilterSubscriber = /*@__PURE__*/ (function (_super) {
	    __extends(FilterSubscriber, _super);
	    function FilterSubscriber(destination, predicate, thisArg) {
	        var _this = _super.call(this, destination) || this;
	        _this.predicate = predicate;
	        _this.thisArg = thisArg;
	        _this.count = 0;
	        return _this;
	    }
	    FilterSubscriber.prototype._next = function (value) {
	        var result;
	        try {
	            result = this.predicate.call(this.thisArg, value, this.count++);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (result) {
	            this.destination.next(value);
	        }
	    };
	    return FilterSubscriber;
	}(Subscriber));

	/** PURE_IMPORTS_START  PURE_IMPORTS_END */
	var EmptyErrorImpl = /*@__PURE__*/ (function () {
	    function EmptyErrorImpl() {
	        Error.call(this);
	        this.message = 'no elements in sequence';
	        this.name = 'EmptyError';
	        return this;
	    }
	    EmptyErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
	    return EmptyErrorImpl;
	})();
	var EmptyError = EmptyErrorImpl;

	/** PURE_IMPORTS_START tslib,_util_EmptyError,_Subscriber PURE_IMPORTS_END */
	function throwIfEmpty(errorFactory) {
	    if (errorFactory === void 0) {
	        errorFactory = defaultErrorFactory;
	    }
	    return function (source) {
	        return source.lift(new ThrowIfEmptyOperator(errorFactory));
	    };
	}
	var ThrowIfEmptyOperator = /*@__PURE__*/ (function () {
	    function ThrowIfEmptyOperator(errorFactory) {
	        this.errorFactory = errorFactory;
	    }
	    ThrowIfEmptyOperator.prototype.call = function (subscriber, source) {
	        return source.subscribe(new ThrowIfEmptySubscriber(subscriber, this.errorFactory));
	    };
	    return ThrowIfEmptyOperator;
	}());
	var ThrowIfEmptySubscriber = /*@__PURE__*/ (function (_super) {
	    __extends(ThrowIfEmptySubscriber, _super);
	    function ThrowIfEmptySubscriber(destination, errorFactory) {
	        var _this = _super.call(this, destination) || this;
	        _this.errorFactory = errorFactory;
	        _this.hasValue = false;
	        return _this;
	    }
	    ThrowIfEmptySubscriber.prototype._next = function (value) {
	        this.hasValue = true;
	        this.destination.next(value);
	    };
	    ThrowIfEmptySubscriber.prototype._complete = function () {
	        if (!this.hasValue) {
	            var err = void 0;
	            try {
	                err = this.errorFactory();
	            }
	            catch (e) {
	                err = e;
	            }
	            this.destination.error(err);
	        }
	        else {
	            return this.destination.complete();
	        }
	    };
	    return ThrowIfEmptySubscriber;
	}(Subscriber));
	function defaultErrorFactory() {
	    return new EmptyError();
	}

	/** PURE_IMPORTS_START tslib,_Subscriber,_util_ArgumentOutOfRangeError,_observable_empty PURE_IMPORTS_END */
	function take(count) {
	    return function (source) {
	        if (count === 0) {
	            return empty$1();
	        }
	        else {
	            return source.lift(new TakeOperator(count));
	        }
	    };
	}
	var TakeOperator = /*@__PURE__*/ (function () {
	    function TakeOperator(total) {
	        this.total = total;
	        if (this.total < 0) {
	            throw new ArgumentOutOfRangeError;
	        }
	    }
	    TakeOperator.prototype.call = function (subscriber, source) {
	        return source.subscribe(new TakeSubscriber(subscriber, this.total));
	    };
	    return TakeOperator;
	}());
	var TakeSubscriber = /*@__PURE__*/ (function (_super) {
	    __extends(TakeSubscriber, _super);
	    function TakeSubscriber(destination, total) {
	        var _this = _super.call(this, destination) || this;
	        _this.total = total;
	        _this.count = 0;
	        return _this;
	    }
	    TakeSubscriber.prototype._next = function (value) {
	        var total = this.total;
	        var count = ++this.count;
	        if (count <= total) {
	            this.destination.next(value);
	            if (count === total) {
	                this.destination.complete();
	                this.unsubscribe();
	            }
	        }
	    };
	    return TakeSubscriber;
	}(Subscriber));

	/** PURE_IMPORTS_START _util_EmptyError,_filter,_take,_defaultIfEmpty,_throwIfEmpty,_util_identity PURE_IMPORTS_END */
	function first(predicate, defaultValue) {
	    var hasDefaultValue = arguments.length >= 2;
	    return function (source) { return source.pipe(predicate ? filter(function (v, i) { return predicate(v, i, source); }) : identity, take(1), hasDefaultValue ? defaultIfEmpty(defaultValue) : throwIfEmpty(function () { return new EmptyError(); })); };
	}

	/** PURE_IMPORTS_START  PURE_IMPORTS_END */
	var ObjectUnsubscribedErrorImpl = /*@__PURE__*/ (function () {
	    function ObjectUnsubscribedErrorImpl() {
	        Error.call(this);
	        this.message = 'object unsubscribed';
	        this.name = 'ObjectUnsubscribedError';
	        return this;
	    }
	    ObjectUnsubscribedErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
	    return ObjectUnsubscribedErrorImpl;
	})();
	var ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;

	/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */
	var SubjectSubscription = /*@__PURE__*/ (function (_super) {
	    __extends(SubjectSubscription, _super);
	    function SubjectSubscription(subject, subscriber) {
	        var _this = _super.call(this) || this;
	        _this.subject = subject;
	        _this.subscriber = subscriber;
	        _this.closed = false;
	        return _this;
	    }
	    SubjectSubscription.prototype.unsubscribe = function () {
	        if (this.closed) {
	            return;
	        }
	        this.closed = true;
	        var subject = this.subject;
	        var observers = subject.observers;
	        this.subject = null;
	        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
	            return;
	        }
	        var subscriberIndex = observers.indexOf(this.subscriber);
	        if (subscriberIndex !== -1) {
	            observers.splice(subscriberIndex, 1);
	        }
	    };
	    return SubjectSubscription;
	}(Subscription));

	/** PURE_IMPORTS_START tslib,_Observable,_Subscriber,_Subscription,_util_ObjectUnsubscribedError,_SubjectSubscription,_internal_symbol_rxSubscriber PURE_IMPORTS_END */
	var SubjectSubscriber = /*@__PURE__*/ (function (_super) {
	    __extends(SubjectSubscriber, _super);
	    function SubjectSubscriber(destination) {
	        var _this = _super.call(this, destination) || this;
	        _this.destination = destination;
	        return _this;
	    }
	    return SubjectSubscriber;
	}(Subscriber));
	var Subject = /*@__PURE__*/ (function (_super) {
	    __extends(Subject, _super);
	    function Subject() {
	        var _this = _super.call(this) || this;
	        _this.observers = [];
	        _this.closed = false;
	        _this.isStopped = false;
	        _this.hasError = false;
	        _this.thrownError = null;
	        return _this;
	    }
	    Subject.prototype[rxSubscriber] = function () {
	        return new SubjectSubscriber(this);
	    };
	    Subject.prototype.lift = function (operator) {
	        var subject = new AnonymousSubject(this, this);
	        subject.operator = operator;
	        return subject;
	    };
	    Subject.prototype.next = function (value) {
	        if (this.closed) {
	            throw new ObjectUnsubscribedError();
	        }
	        if (!this.isStopped) {
	            var observers = this.observers;
	            var len = observers.length;
	            var copy = observers.slice();
	            for (var i = 0; i < len; i++) {
	                copy[i].next(value);
	            }
	        }
	    };
	    Subject.prototype.error = function (err) {
	        if (this.closed) {
	            throw new ObjectUnsubscribedError();
	        }
	        this.hasError = true;
	        this.thrownError = err;
	        this.isStopped = true;
	        var observers = this.observers;
	        var len = observers.length;
	        var copy = observers.slice();
	        for (var i = 0; i < len; i++) {
	            copy[i].error(err);
	        }
	        this.observers.length = 0;
	    };
	    Subject.prototype.complete = function () {
	        if (this.closed) {
	            throw new ObjectUnsubscribedError();
	        }
	        this.isStopped = true;
	        var observers = this.observers;
	        var len = observers.length;
	        var copy = observers.slice();
	        for (var i = 0; i < len; i++) {
	            copy[i].complete();
	        }
	        this.observers.length = 0;
	    };
	    Subject.prototype.unsubscribe = function () {
	        this.isStopped = true;
	        this.closed = true;
	        this.observers = null;
	    };
	    Subject.prototype._trySubscribe = function (subscriber) {
	        if (this.closed) {
	            throw new ObjectUnsubscribedError();
	        }
	        else {
	            return _super.prototype._trySubscribe.call(this, subscriber);
	        }
	    };
	    Subject.prototype._subscribe = function (subscriber) {
	        if (this.closed) {
	            throw new ObjectUnsubscribedError();
	        }
	        else if (this.hasError) {
	            subscriber.error(this.thrownError);
	            return Subscription.EMPTY;
	        }
	        else if (this.isStopped) {
	            subscriber.complete();
	            return Subscription.EMPTY;
	        }
	        else {
	            this.observers.push(subscriber);
	            return new SubjectSubscription(this, subscriber);
	        }
	    };
	    Subject.prototype.asObservable = function () {
	        var observable = new Observable();
	        observable.source = this;
	        return observable;
	    };
	    Subject.create = function (destination, source) {
	        return new AnonymousSubject(destination, source);
	    };
	    return Subject;
	}(Observable));
	var AnonymousSubject = /*@__PURE__*/ (function (_super) {
	    __extends(AnonymousSubject, _super);
	    function AnonymousSubject(destination, source) {
	        var _this = _super.call(this) || this;
	        _this.destination = destination;
	        _this.source = source;
	        return _this;
	    }
	    AnonymousSubject.prototype.next = function (value) {
	        var destination = this.destination;
	        if (destination && destination.next) {
	            destination.next(value);
	        }
	    };
	    AnonymousSubject.prototype.error = function (err) {
	        var destination = this.destination;
	        if (destination && destination.error) {
	            this.destination.error(err);
	        }
	    };
	    AnonymousSubject.prototype.complete = function () {
	        var destination = this.destination;
	        if (destination && destination.complete) {
	            this.destination.complete();
	        }
	    };
	    AnonymousSubject.prototype._subscribe = function (subscriber) {
	        var source = this.source;
	        if (source) {
	            return this.source.subscribe(subscriber);
	        }
	        else {
	            return Subscription.EMPTY;
	        }
	    };
	    return AnonymousSubject;
	}(Subject));

	/** PURE_IMPORTS_START _Observable,_util_isScheduler,_operators_mergeAll,_fromArray PURE_IMPORTS_END */
	function merge() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i] = arguments[_i];
	    }
	    var concurrent = Number.POSITIVE_INFINITY;
	    var scheduler = null;
	    var last = observables[observables.length - 1];
	    if (isScheduler(last)) {
	        scheduler = observables.pop();
	        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
	            concurrent = observables.pop();
	        }
	    }
	    else if (typeof last === 'number') {
	        concurrent = observables.pop();
	    }
	    if (scheduler === null && observables.length === 1 && observables[0] instanceof Observable) {
	        return observables[0];
	    }
	    return mergeAll(concurrent)(fromArray(observables, scheduler));
	}

	/** PURE_IMPORTS_START tslib,_Subscriber,_Notification PURE_IMPORTS_END */
	var ObserveOnSubscriber = /*@__PURE__*/ (function (_super) {
	    __extends(ObserveOnSubscriber, _super);
	    function ObserveOnSubscriber(destination, scheduler, delay) {
	        if (delay === void 0) {
	            delay = 0;
	        }
	        var _this = _super.call(this, destination) || this;
	        _this.scheduler = scheduler;
	        _this.delay = delay;
	        return _this;
	    }
	    ObserveOnSubscriber.dispatch = function (arg) {
	        var notification = arg.notification, destination = arg.destination;
	        notification.observe(destination);
	        this.unsubscribe();
	    };
	    ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
	        var destination = this.destination;
	        destination.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
	    };
	    ObserveOnSubscriber.prototype._next = function (value) {
	        this.scheduleMessage(Notification.createNext(value));
	    };
	    ObserveOnSubscriber.prototype._error = function (err) {
	        this.scheduleMessage(Notification.createError(err));
	        this.unsubscribe();
	    };
	    ObserveOnSubscriber.prototype._complete = function () {
	        this.scheduleMessage(Notification.createComplete());
	        this.unsubscribe();
	    };
	    return ObserveOnSubscriber;
	}(Subscriber));
	var ObserveOnMessage = /*@__PURE__*/ (function () {
	    function ObserveOnMessage(notification, destination) {
	        this.notification = notification;
	        this.destination = destination;
	    }
	    return ObserveOnMessage;
	}());

	/** PURE_IMPORTS_START tslib,_Subject,_util_ObjectUnsubscribedError PURE_IMPORTS_END */
	var BehaviorSubject = /*@__PURE__*/ (function (_super) {
	    __extends(BehaviorSubject, _super);
	    function BehaviorSubject(_value) {
	        var _this = _super.call(this) || this;
	        _this._value = _value;
	        return _this;
	    }
	    Object.defineProperty(BehaviorSubject.prototype, "value", {
	        get: function () {
	            return this.getValue();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    BehaviorSubject.prototype._subscribe = function (subscriber) {
	        var subscription = _super.prototype._subscribe.call(this, subscriber);
	        if (subscription && !subscription.closed) {
	            subscriber.next(this._value);
	        }
	        return subscription;
	    };
	    BehaviorSubject.prototype.getValue = function () {
	        if (this.hasError) {
	            throw this.thrownError;
	        }
	        else if (this.closed) {
	            throw new ObjectUnsubscribedError();
	        }
	        else {
	            return this._value;
	        }
	    };
	    BehaviorSubject.prototype.next = function (value) {
	        _super.prototype.next.call(this, this._value = value);
	    };
	    return BehaviorSubject;
	}(Subject));

	/** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */
	var QueueAction = /*@__PURE__*/ (function (_super) {
	    __extends(QueueAction, _super);
	    function QueueAction(scheduler, work) {
	        var _this = _super.call(this, scheduler, work) || this;
	        _this.scheduler = scheduler;
	        _this.work = work;
	        return _this;
	    }
	    QueueAction.prototype.schedule = function (state, delay) {
	        if (delay === void 0) {
	            delay = 0;
	        }
	        if (delay > 0) {
	            return _super.prototype.schedule.call(this, state, delay);
	        }
	        this.delay = delay;
	        this.state = state;
	        this.scheduler.flush(this);
	        return this;
	    };
	    QueueAction.prototype.execute = function (state, delay) {
	        return (delay > 0 || this.closed) ?
	            _super.prototype.execute.call(this, state, delay) :
	            this._execute(state, delay);
	    };
	    QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
	        if (delay === void 0) {
	            delay = 0;
	        }
	        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
	            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
	        }
	        return scheduler.flush(this);
	    };
	    return QueueAction;
	}(AsyncAction));

	/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */
	var QueueScheduler = /*@__PURE__*/ (function (_super) {
	    __extends(QueueScheduler, _super);
	    function QueueScheduler() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    return QueueScheduler;
	}(AsyncScheduler));

	/** PURE_IMPORTS_START _QueueAction,_QueueScheduler PURE_IMPORTS_END */
	var queue = /*@__PURE__*/ new QueueScheduler(QueueAction);

	/** PURE_IMPORTS_START tslib,_Subject,_scheduler_queue,_Subscription,_operators_observeOn,_util_ObjectUnsubscribedError,_SubjectSubscription PURE_IMPORTS_END */
	var ReplaySubject = /*@__PURE__*/ (function (_super) {
	    __extends(ReplaySubject, _super);
	    function ReplaySubject(bufferSize, windowTime, scheduler) {
	        if (bufferSize === void 0) {
	            bufferSize = Number.POSITIVE_INFINITY;
	        }
	        if (windowTime === void 0) {
	            windowTime = Number.POSITIVE_INFINITY;
	        }
	        var _this = _super.call(this) || this;
	        _this.scheduler = scheduler;
	        _this._events = [];
	        _this._infiniteTimeWindow = false;
	        _this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
	        _this._windowTime = windowTime < 1 ? 1 : windowTime;
	        if (windowTime === Number.POSITIVE_INFINITY) {
	            _this._infiniteTimeWindow = true;
	            _this.next = _this.nextInfiniteTimeWindow;
	        }
	        else {
	            _this.next = _this.nextTimeWindow;
	        }
	        return _this;
	    }
	    ReplaySubject.prototype.nextInfiniteTimeWindow = function (value) {
	        var _events = this._events;
	        _events.push(value);
	        if (_events.length > this._bufferSize) {
	            _events.shift();
	        }
	        _super.prototype.next.call(this, value);
	    };
	    ReplaySubject.prototype.nextTimeWindow = function (value) {
	        this._events.push(new ReplayEvent(this._getNow(), value));
	        this._trimBufferThenGetEvents();
	        _super.prototype.next.call(this, value);
	    };
	    ReplaySubject.prototype._subscribe = function (subscriber) {
	        var _infiniteTimeWindow = this._infiniteTimeWindow;
	        var _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();
	        var scheduler = this.scheduler;
	        var len = _events.length;
	        var subscription;
	        if (this.closed) {
	            throw new ObjectUnsubscribedError();
	        }
	        else if (this.isStopped || this.hasError) {
	            subscription = Subscription.EMPTY;
	        }
	        else {
	            this.observers.push(subscriber);
	            subscription = new SubjectSubscription(this, subscriber);
	        }
	        if (scheduler) {
	            subscriber.add(subscriber = new ObserveOnSubscriber(subscriber, scheduler));
	        }
	        if (_infiniteTimeWindow) {
	            for (var i = 0; i < len && !subscriber.closed; i++) {
	                subscriber.next(_events[i]);
	            }
	        }
	        else {
	            for (var i = 0; i < len && !subscriber.closed; i++) {
	                subscriber.next(_events[i].value);
	            }
	        }
	        if (this.hasError) {
	            subscriber.error(this.thrownError);
	        }
	        else if (this.isStopped) {
	            subscriber.complete();
	        }
	        return subscription;
	    };
	    ReplaySubject.prototype._getNow = function () {
	        return (this.scheduler || queue).now();
	    };
	    ReplaySubject.prototype._trimBufferThenGetEvents = function () {
	        var now = this._getNow();
	        var _bufferSize = this._bufferSize;
	        var _windowTime = this._windowTime;
	        var _events = this._events;
	        var eventsCount = _events.length;
	        var spliceCount = 0;
	        while (spliceCount < eventsCount) {
	            if ((now - _events[spliceCount].time) < _windowTime) {
	                break;
	            }
	            spliceCount++;
	        }
	        if (eventsCount > _bufferSize) {
	            spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
	        }
	        if (spliceCount > 0) {
	            _events.splice(0, spliceCount);
	        }
	        return _events;
	    };
	    return ReplaySubject;
	}(Subject));
	var ReplayEvent = /*@__PURE__*/ (function () {
	    function ReplayEvent(time, value) {
	        this.time = time;
	        this.value = value;
	    }
	    return ReplayEvent;
	}());

	/** PURE_IMPORTS_START _ReplaySubject PURE_IMPORTS_END */
	function shareReplay(configOrBufferSize, windowTime, scheduler) {
	    var config;
	    if (configOrBufferSize && typeof configOrBufferSize === 'object') {
	        config = configOrBufferSize;
	    }
	    else {
	        config = {
	            bufferSize: configOrBufferSize,
	            windowTime: windowTime,
	            refCount: false,
	            scheduler: scheduler
	        };
	    }
	    return function (source) { return source.lift(shareReplayOperator(config)); };
	}
	function shareReplayOperator(_a) {
	    var _b = _a.bufferSize, bufferSize = _b === void 0 ? Number.POSITIVE_INFINITY : _b, _c = _a.windowTime, windowTime = _c === void 0 ? Number.POSITIVE_INFINITY : _c, useRefCount = _a.refCount, scheduler = _a.scheduler;
	    var subject;
	    var refCount = 0;
	    var subscription;
	    var hasError = false;
	    var isComplete = false;
	    return function shareReplayOperation(source) {
	        refCount++;
	        if (!subject || hasError) {
	            hasError = false;
	            subject = new ReplaySubject(bufferSize, windowTime, scheduler);
	            subscription = source.subscribe({
	                next: function (value) { subject.next(value); },
	                error: function (err) {
	                    hasError = true;
	                    subject.error(err);
	                },
	                complete: function () {
	                    isComplete = true;
	                    subscription = undefined;
	                    subject.complete();
	                },
	            });
	        }
	        var innerSub = subject.subscribe(this);
	        this.add(function () {
	            refCount--;
	            innerSub.unsubscribe();
	            if (subscription && !isComplete && useRefCount && refCount === 0) {
	                subscription.unsubscribe();
	                subscription = undefined;
	                subject = undefined;
	            }
	        });
	    };
	}

	/** PURE_IMPORTS_START _observable_concat,_util_isScheduler PURE_IMPORTS_END */
	function startWith() {
	    var array = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        array[_i] = arguments[_i];
	    }
	    var scheduler = array[array.length - 1];
	    if (isScheduler(scheduler)) {
	        array.pop();
	        return function (source) { return concat(array, source, scheduler); };
	    }
	    else {
	        return function (source) { return concat(array, source); };
	    }
	}

	/** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
	function takeUntil(notifier) {
	    return function (source) { return source.lift(new TakeUntilOperator(notifier)); };
	}
	var TakeUntilOperator = /*@__PURE__*/ (function () {
	    function TakeUntilOperator(notifier) {
	        this.notifier = notifier;
	    }
	    TakeUntilOperator.prototype.call = function (subscriber, source) {
	        var takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
	        var notifierSubscription = subscribeToResult(takeUntilSubscriber, this.notifier);
	        if (notifierSubscription && !takeUntilSubscriber.seenValue) {
	            takeUntilSubscriber.add(notifierSubscription);
	            return source.subscribe(takeUntilSubscriber);
	        }
	        return takeUntilSubscriber;
	    };
	    return TakeUntilOperator;
	}());
	var TakeUntilSubscriber = /*@__PURE__*/ (function (_super) {
	    __extends(TakeUntilSubscriber, _super);
	    function TakeUntilSubscriber(destination) {
	        var _this = _super.call(this, destination) || this;
	        _this.seenValue = false;
	        return _this;
	    }
	    TakeUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.seenValue = true;
	        this.complete();
	    };
	    TakeUntilSubscriber.prototype.notifyComplete = function () {
	    };
	    return TakeUntilSubscriber;
	}(OuterSubscriber));

	/** PURE_IMPORTS_START tslib,_Subscriber,_util_noop,_util_isFunction PURE_IMPORTS_END */
	function tap(nextOrObserver, error, complete) {
	    return function tapOperatorFunction(source) {
	        return source.lift(new DoOperator(nextOrObserver, error, complete));
	    };
	}
	var DoOperator = /*@__PURE__*/ (function () {
	    function DoOperator(nextOrObserver, error, complete) {
	        this.nextOrObserver = nextOrObserver;
	        this.error = error;
	        this.complete = complete;
	    }
	    DoOperator.prototype.call = function (subscriber, source) {
	        return source.subscribe(new TapSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
	    };
	    return DoOperator;
	}());
	var TapSubscriber = /*@__PURE__*/ (function (_super) {
	    __extends(TapSubscriber, _super);
	    function TapSubscriber(destination, observerOrNext, error, complete) {
	        var _this = _super.call(this, destination) || this;
	        _this._tapNext = noop;
	        _this._tapError = noop;
	        _this._tapComplete = noop;
	        _this._tapError = error || noop;
	        _this._tapComplete = complete || noop;
	        if (isFunction(observerOrNext)) {
	            _this._context = _this;
	            _this._tapNext = observerOrNext;
	        }
	        else if (observerOrNext) {
	            _this._context = observerOrNext;
	            _this._tapNext = observerOrNext.next || noop;
	            _this._tapError = observerOrNext.error || noop;
	            _this._tapComplete = observerOrNext.complete || noop;
	        }
	        return _this;
	    }
	    TapSubscriber.prototype._next = function (value) {
	        try {
	            this._tapNext.call(this._context, value);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(value);
	    };
	    TapSubscriber.prototype._error = function (err) {
	        try {
	            this._tapError.call(this._context, err);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.error(err);
	    };
	    TapSubscriber.prototype._complete = function () {
	        try {
	            this._tapComplete.call(this._context);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        return this.destination.complete();
	    };
	    return TapSubscriber;
	}(Subscriber));

	var Rect =
	/*#__PURE__*/
	function () {
	  function Rect(rect) {
	    this.top = 0;
	    this.right = 0;
	    this.bottom = 0;
	    this.left = 0;
	    this.width = 0;
	    this.height = 0;
	    this.set(rect);
	  }

	  Rect.contains = function contains(rect, left, top) {
	    return rect.top <= top && top <= rect.bottom && rect.left <= left && left <= rect.right;
	  };

	  Rect.intersectRect = function intersectRect(r1, r2) {
	    return !(r2.left > r1.right || r2.right < r1.left || r2.top > r1.bottom || r2.bottom < r1.top);
	  };

	  Rect.fromNode = function fromNode(node) {
	    if (!node) {
	      return;
	    }

	    var rect = node.rect_ || (node.rect_ = new Rect());
	    var rects = node.getClientRects();

	    if (!rects.length) {
	      // console.log(rects, node);
	      return rect;
	    }

	    var boundingRect = node.getBoundingClientRect(); // rect.top: boundingRect.top + defaultView.pageYOffset,
	    // rect.left: boundingRect.left + defaultView.pageXOffset,

	    rect.top = boundingRect.top;
	    rect.left = boundingRect.left;
	    rect.width = boundingRect.width;
	    rect.height = boundingRect.height;
	    rect.setCenter();
	    return rect;
	  };

	  var _proto = Rect.prototype;

	  _proto.set = function set(rect) {
	    if (rect) {
	      Object.assign(this, rect);
	      this.right = this.left + this.width;
	      this.bottom = this.top + this.height;
	    }

	    this.setCenter();
	  };

	  _proto.setCenter = function setCenter() {
	    var center = this.center || (this.center = {});
	    center.top = this.top + this.height / 2;
	    center.left = this.left + this.width / 2;
	    center.x = center.left;
	    center.y = center.top;
	  };

	  _proto.contains = function contains(left, top) {
	    return Rect.contains(this, left, top);
	  };

	  _proto.intersect = function intersect(rect) {
	    return Rect.intersectRect(this, rect);
	  };

	  _proto.intersection = function intersection(rect) {
	    var intersection = this.intersection_ || (this.intersection_ = {
	      center: {}
	    });
	    intersection.center.x = (this.center.x - rect.center.x) / (rect.width / 2);
	    intersection.center.y = (this.center.y - rect.center.y) / (rect.height / 2);
	    var dx = this.left > rect.left ? 0 : Math.abs(rect.left - this.left);
	    var dy = this.top > rect.top ? 0 : Math.abs(rect.top - this.top);
	    var x = dx ? 1 - dx / this.width : (rect.left + rect.width - this.left) / this.width;
	    var y = dy ? 1 - dy / this.height : (rect.top + rect.height - this.top) / this.height;
	    intersection.x = x;
	    intersection.y = y;
	    return intersection;
	  };

	  _proto.intersection___ = function intersection___(rect) {
	    var center = {
	      x: (this.center.x - rect.center.x) / (rect.width / 2),
	      y: (this.center.y - rect.center.y) / (rect.height / 2)
	    };

	    if (this.intersect(rect)) {
	      var dx = this.left > rect.left ? 0 : Math.abs(rect.left - this.left);
	      var dy = this.top > rect.top ? 0 : Math.abs(rect.top - this.top);
	      var x = dx ? 1 - dx / this.width : (rect.left + rect.width - this.left) / this.width;
	      var y = dy ? 1 - dy / this.height : (rect.top + rect.height - this.top) / this.height;
	      x = Math.min(1, x);
	      y = Math.min(1, y);
	      return {
	        x: x,
	        y: y,
	        center: center
	      };
	    } else {
	      return {
	        x: 0,
	        y: 0,
	        center: center
	      };
	    }
	  };

	  return Rect;
	}();

	var LazyDirective =
	/*#__PURE__*/
	function () {
	  // src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy lazy-src="
	  function LazyDirective(DomService) {
	    this.domService = DomService;
	    this.restrict = 'A';
	    this.scope = {
	      src: "@?",
	      srcset: "@?",
	      backgroundSrc: "@?"
	    };
	  }

	  var _proto = LazyDirective.prototype;

	  _proto.link = function link(scope, element, attributes, controller) {
	    var _this = this;

	    var image = element[0];

	    if (window.matchMedia('print').matches) {
	      return this.immediate(scope, image);
	    }

	    image.classList.remove('lazying', 'lazyed');
	    var subscription = this.domService.appear$(image).subscribe(function (event) {
	      if ((image.width > 0 || image.height > 0 || !image.classList.contains('nav--primary--image')) && !image.classList.contains('lazying')) {
	        image.classList.add('lazying');

	        _this.onAppearsInViewport(image, scope, attributes);
	      }
	    });

	    var onBeforePrint = function onBeforePrint() {
	      _this.immediate(scope, image);

	      subscription.unsubscribe();
	    };

	    window.addEventListener('beforeprint', onBeforePrint);
	    scope.$on('$destroy', function () {
	      window.removeEventListener('beforeprint', onBeforePrint);
	      subscription.unsubscribe();
	    });
	  };

	  _proto.immediate = function immediate(scope, image) {
	    // this.onAppearsInViewport(image, scope, attributes);
	    if (!image.classList.contains('lazyed')) {
	      var src = this.getThronSrc(image, scope.src);
	      image.src = src;
	      image.removeAttribute('data-src');
	      image.classList.remove('lazying');
	      image.classList.add('lazyed');
	      scope.$emit('lazyImage', image);
	    }
	  };

	  _proto.getThronSrc = function getThronSrc(image, src) {
	    var node = image.parentNode;
	    var splitted = src.split('/std/');

	    if (splitted.length > 1) {
	      // Contenuto Thron
	      if (splitted[1].match(/^0x0\//)) {
	        // se non sono state richieste dimensioni specifiche, imposto le dimensioni necessarie alla pagina
	        // src = splitted[0] + '/std/' + Math.floor(image.width * 1.1).toString() + 'x' + Math.floor(image.height * 1.1).toString() + splitted[1].substr(3);
	        src = splitted[0] + '/std/' + Math.floor(node.offsetWidth * 1.1).toString() + 'x0' + splitted[1].substr(3);
	        /*
	        if (node.offsetWidth >= node.offsetHeight) {
	        	src = splitted[0] + '/std/' + Math.floor(node.offsetWidth * 1.1).toString() + 'x0' + splitted[1].substr(3);
	        } else {
	        	src = splitted[0] + '/std/0x' + Math.floor(node.offsetHeight * 1.1).toString() + splitted[1].substr(3);
	        }
	        */

	        if (!src.match(/[&?]scalemode=?/)) {
	          src += src.indexOf('?') !== -1 ? '&' : '?'; // src += 'scalemode=auto';
	        }
	      } //if (window.devicePixelRatio > 1) {
	      //	src += src.indexOf('?') !== -1 ? '&' : '?';
	      //	src += 'dpr=' + Math.floor(window.devicePixelRatio * 100).toString();
	      //}

	    }

	    return src;
	  };

	  _proto.onAppearsInViewport = function onAppearsInViewport(image, scope, attributes) {
	    if (scope.srcset) {
	      // attributes.$set('srcset', scope.srcset);
	      image.setAttribute('srcset', scope.srcset);
	      image.removeAttribute('data-srcset');

	      if (scope.src) {
	        // attributes.$set('src', scope.src);
	        image.setAttribute('src', this.getThronSrc(image, scope.src));
	        image.removeAttribute('data-src');
	      }

	      image.classList.remove('lazying');
	      image.classList.add('lazyed');
	    } else if (scope.src) {
	      var src = this.getThronSrc(image, scope.src);
	      image.removeAttribute('data-src');
	      this.onImagePreload(image, src, function (srcOrUndefined) {
	        // image.setAttribute('src', src);
	        image.classList.remove('lazying');
	        image.classList.add('lazyed');
	        scope.$emit('lazyImage', image);
	      });
	    } else if (scope.backgroundSrc) {
	      image.setStyle('background-image', "url(" + this.getThronSrc(image, scope.backgroundSrc) + ")");
	      image.removeAttribute('data-background-src');
	      image.classList.remove('lazying');
	      image.classList.add('lazyed');
	    }
	  };

	  _proto.lazy$ = function lazy$(node) {
	    return this.domService.rafAndRect$().pipe(map(function (datas) {
	      var windowRect = datas[1];
	      var rect = Rect.fromNode(node);
	      var intersection = rect.intersection(windowRect);
	      return intersection;
	    }));
	  };

	  _proto.onImagePreload = function onImagePreload(image, src, callback) {
	    // const img = new Image();
	    image.onload = function () {
	      image.onload = image.onerror = null;

	      if (typeof callback === 'function') {
	        // setTimeout(() => {
	        callback(image.src); // }, 10);
	      }
	    };

	    image.onerror = function (e) {
	      image.onload = image.onerror = null;
	      GtmService.push({
	        event: 'img error',
	        imageurl: image.src,
	        pageurl: window.location.href
	      });
	      image.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAAC/CAMAAAA1kLK0AAAATlBMVEX////MzMyZmZn39/fHx8fPz8+Ojo7FxcXDw8Pn5+fS0tLq6url5eX8/PyUlJTi4uLX19fv7++JiYm9vb3d3d2FhYWtra2qqqqAgICdnZ2sCR5lAAAJUElEQVR4nO2d6YKzKgyGa7VaN1zqdL7e/42eigERkGobrM7J+2umM3V5DEkICKeQxHUKT6SnCASIQIAIBIhAgAgEiECACASIQIAIBIhAgAgEiECACASIQIAIBIhAgAgEiECACASIQIAIBIhAgAgEiECACASIQIAIBIhAgAgE6NsgynFcvvzqhXwNRBk2RVdnQRBEXM8fsrormm/x+AqIsqnqAO5+Iv5ZXTVfgLE9iLDoIegIpjiCutj8srYFUaaZG8III0s3tYtNQTT1MgqCRd1sd20bgkiDZDmFQUmQbnV1m4Go5owhimTYsP612ub6NgKRWm60v/lL1nVF+lQfSi+BjUcUbWIVm4BogshkUKdmlCybtL4YNKJgA1+xAYiwjjQKQZc78qYw7/T4GtX+r9I7CK1VPCm8zpfKppsakf/24RtEmUWT+8nyhdlBmU9jbZT5TSs8g2jUm4lWWnhYT7/t1VP4BVFdlRtJ1jf0sEsUFFefkdQriFrJoK7v+btQPUZSY1+hciJ/IErF30XR26cJlfYRBd4chT8QoWLUyUdGXSlG8T7QF/IGIlSf44fnCFXb8nW9nkAoHJLuY3suu8Q3CU8gVA45xgFz3zbhB0Sp+Aek4yvNI/LhMf2AUJwbij30Ki8jXaxjKvIC4qIGDDQS42GjC9oxpXyA6Cb9pSseCdlviTq0Ywp5AJFqFTkfJBL0zig+iMaoTCKSkK0jwe6BoYMoFUcp/QTa81PSduTQgQ5ClqOiskjwScgEJULugGGDaFTbTT2QkCdALk8ggyind17IegReFB3pojYOZBAicgrDHUngeUzR+HBjKC6IUDwtmQWPfgKNhMzfE9RLRwWRiZse22+FT6IRZpYhHbAXKgiRQkw8ugcSonFgJhOoIKRnnLgxfD8xdm5xjtcLE4Q0CC1WpmPsQIqiInIgmgQmiMvcczJINGnuUPr6ksTx8LqhiCCkQZgNQCdR/cQOtffF58IzCUQQtcOX6ySK+OxQ/NqXiH4oWqKNB0LkEPbUN9VyTCcJ9tokRA0TLZfAA1FFzmarZ1ZOEgtMAhwS2oQaPBCBPWRIGSTaj0wiFSEU6fLRQMh6zGxXSM+sUgeJ9qUTFN07LHeJBgK6W66ekG4T+c/w+PtIwTQSr01iwQnXCAuEeECW0Zfq9tTQGrQcM29Zy36vWV1n19/nj2rjuE1lugJZosHpjWOBEJd1MS8raBlj7dAa9HzipnjFJmBKY2ETtRZXcJlF/9YNIIGAmGFz4hceH+wkNNVsJpbElljkOOUbwgKRzYf1AQSExFf9juvUg8Zs8B42ECJxwemMI4EIHcEMQJxjfuc2EmpzStnoKtj5kha3dgaEDNg4d4ADonG4cAHizHQS3EbK2/33936TE9CbhyTx4J9l8QwIETdQAigSiAKuyZYRShBAQqny83/vemf6jKD3Yvj/5gwkYsD6y+wgIM2OCow7QAIBNSNr5j+CMEkMNjL4Bdbeh6/n8AUGR8tmQICTwBnhQAIhQpn1b0okGDymkllxEpBZnSHInmrwmHBpdWwHcXL3btYJB4RIp6wOXAUBUVTJrCYkzv8GM7+z0bvy3+wgRK0YI6XCARG60t0JCCOfuPJbz8EGHj/c8zX8V/bg36/nnKX0lii3gAJCBA1rajAFYWZWnEQqQwt/vDc2hM+6aa6z4VP0QFHCBg4IuCJ7T1ADcW75GedIxNzPCAsR3TE7COjxoszcxwFROYKGAWIweINEMYkVj+l37CBE2MBIsnFAQGNNrF5LA8Gu8HmqeUwgEfPsNGELQJSJwzWtFA6I2hE9DR8hn1+a2Eiw3/7nql0A4oRYwf0CiP6EIaeh5xODn+BtIzwmCBHQrX/UQMT9Z+mPlmNCPsEjBA8r8RIQrvRlpbYHwfrPungmx2xFF2OJj/gTIMzMSpD4v4GYyazy+P8CgvsI3sGcyTEH93FMH7E+aii9Kp1EdeCosT6P+B1IDDZgqd4dNI9YlVkm/YcBpJEaiasgcT1mZrm+rxGKctzQz0h0Egfta6zrfXIfGU1q2zoJzUUcpve5ph5xZrf+01LYvp1EvsRH7K8esaJCdRZD3c3PQ7UQo3rXvgaxvwrV8polN4lhqLv4B7//OKt3DhD7q1kurmJzPdoh3uVi/FsnIXLMVyD2V8VeOq4h72so24d3QNEOmVUyJZEyN4g9jmssG+kaG8cZ/Ftx76uSjLXcu+SzJA4z0rVo7FMl8ZBDnfUw9snbea5XapgLxB7HPpeMhk9JMGuo1at3srZ9lNHwBfMjdLVX819NEuAxDzM/4vWMGVMxs3k5g0Q7B2KfM2bC+VA2B+JpFExdaisfZoxZSVhAlPucQ+WYVTcPoh//VmfVDTmm4jF5POgHQi0gdjqrzjHt0QWCwxjnWQ6ZVa5lVo11WsBO51k6Zt5e9MmkDg2ZlUKCt5aGmSB2O/N2fi524Hw5Q9O/IbPSs21znuVu52LPz87PL9kKDRZlkDDw7nd2vnxfA2dNGaNmNZV4M3qH72vICi5OgqNHUU2iB77DN3iw37NykpAv8Ozxna75t/zek4uE+Msu3/IbTQL57U6TRIpuEH7eBMZaKCrXqndCpSSEc55e/t8N/0R6ZgXa/bvhttUCPpOVxP5XC7CsH/Gp9MzqdIz1I4wVRT6X6SeOsKKIvsYMhoyK7iHWmPGxKNB07SLZy933qkPqOlRoB1bHO6SD2Ps6VGPjQFyodyShLAe495XJFNvFy39HjyltY/dr1SnPD6kf2ksncYTVC5X1LL2ROMZ6ln6WIh2j6HFWOFXWvI0s74q/KWUd5MOseassFPXx4uBCoWIQx1kFebJOOnIN81DrYtNK6cqBae18cWTaTQFE+2tITXdLeetEYX1Vj4F9hcqJfILQ9uDpVp8qrP/GHjy0K9MofZ+uevk+Xdlf2qfrRDu3Kaew7uU3++/lX93L72Tf3fEyt7ujudflX9ndsdf8fp+12O+z+x/s99mLdoCVoj2BpWiXaCnaN1w5I+0kL1U2FY+SBg7+WV29zrjw9RUQvcqw6bfIDkTYeP7Qh9LGsWuyV30NBKgMpb5EAPRtELsRgQARCBCBABEIEIEAEQgQgQARCBCBABEIEIEAEQgQgQARCBCBABEIEIEAEQgQgQARCBCBABEIEIEAEQgQgQARCBCBABEIEIEAPUGQuP4DT2RwhyUkgc4AAAAASUVORK5CYII='; // setTimeout(() => {

	      callback(); // }, 10);
	    };

	    image.src = src;
	  };

	  LazyDirective.factory = function factory(DomService) {
	    return new LazyDirective(DomService);
	  };

	  return LazyDirective;
	}();
	LazyDirective.factory.$inject = ['DomService'];

	var MediaDirective =
	/*#__PURE__*/
	function () {
	  function MediaDirective($timeout, WishlistService) {
	    this.$timeout = $timeout;
	    this.wishlistService = WishlistService;
	    this.restrict = 'A';
	    this.transclude = true;
	    this.template = "<div class=\"media\">\n\t<ng-transclude></ng-transclude>\n</div>\n<div class=\"overlay\" ng-click=\"onOverlay()\"></div>\n<div class=\"share-buttons\">\n<div class=\"btn btn--pinterest\" ng-click=\"onPin($event)\" ng-if=\"onPin\">\n\t<svg class=\"icon icon--pinterest\"><use xlink:href=\"#pinterest\"></use></svg>\n</div>\n<div class=\"btn btn--wishlist\" ng-class=\"{ active: wishlistActive, activated: wishlistActivated, deactivated: wishlistDeactivated }\" ng-click=\"onClickWishlist($event)\">\n\t<svg class=\"icon icon--wishlist\" ng-if=\"!wishlistActive\"><use xlink:href=\"#wishlist\"></use></svg>\n\t<svg class=\"icon icon--wishlist\" ng-if=\"wishlistActive\"><use xlink:href=\"#wishlist-added\"></use></svg>\n</div></div>";
	    this.scope = {
	      item: '=?media'
	    };
	  }

	  var _proto = MediaDirective.prototype;

	  _proto.link = function link(scope, element, attributes, controller) {
	    var _this = this;

	    scope.item = scope.item || {};
	    var node = element[0];
	    var img = node.querySelector('img');

	    if (img) {
	      var pageTitle = document.title;

	      scope.onPin = function (event) {
	        event.preventDefault();
	        event.stopPropagation();
	        var pin = {
	          url: window.location.href,
	          media: img.src,
	          description: img.title || pageTitle
	        }; // console.log('MediaDirective.onPin', pin);

	        GtmService.push({
	          event: 'Pinterest',
	          wish_name: scope.item.name || scope.item.coId,
	          wish_type: scope.item.typeName || scope.item.type
	        });
	        PinUtils.pinOne(pin);
	      };
	    }

	    scope.$watch(function () {
	      return _this.wishlistService.has(scope.item);
	    }, function (current, previous) {
	      // console.log(current, previous, node);
	      if (scope.wishlistActive !== current) {
	        scope.wishlistActive = current;

	        if (current) {
	          scope.wishlistActivated = true;

	          _this.$timeout(function () {
	            scope.wishlistActivated = false;
	          }, 2000);
	        } else {
	          scope.wishlistDeactivated = true;

	          _this.$timeout(function () {
	            scope.wishlistDeactivated = false;
	          }, 2000);
	        }
	      }
	    });

	    scope.onClickWishlist = function (event) {
	      event.preventDefault();
	      event.stopPropagation();

	      _this.wishlistService.toggle(scope.item).then(function (has) {
	        console.log('MediaDirective.onClickWishlist', has);
	      }, function (error) {
	        console.log(error);
	      });
	    };

	    scope.onOverlay = function (event) {
	      var btnGallery = node.nextElementSibling && node.nextElementSibling.querySelector('.btn--gallery');

	      if (btnGallery !== null) {
	        // console.log(btnGallery);
	        btnGallery.click();
	        return;
	      }

	      if (node.classList.contains('picture--vertical') || node.classList.contains('picture--horizontal') || node.classList.contains('picture--square')) {
	        _this.$timeout(function () {
	          var index = 0;
	          var items = Array.from(document.querySelectorAll('.picture--vertical[media], .picture--vertical[video], .picture--horizontal[media], .picture--horizontal[video], .picture--square[media], .picture--square[video]')).map(function (itemNode, i) {
	            if (itemNode == node) {
	              index = i;
	            }

	            var item = {};
	            item.type = itemNode.hasAttribute('media') ? 'media' : 'video';

	            if (item.type === 'media') {
	              var _img = itemNode.querySelector('img');

	              if (_img) {
	                item.src = _img.getAttribute('data-src-zoom') || _img.getAttribute('src') || _img.getAttribute('data-src');
	                item.title = _img.getAttribute('alt');
	                var wishlist = itemNode.getAttribute('media');

	                if (wishlist) {
	                  item.wishlist = _this.eval(wishlist); // JSON.parse(wishlist.indexOf('"') === -1 ? wishlist.split(/[^\d\W]+/g).join('"') : wishlist);
	                }
	              } else {
	                console.log(itemNode, _img);
	              }
	            } else {
	              var video = itemNode.querySelector('video');
	              var sources = video.querySelectorAll('source');
	              item.poster = video.getAttribute('poster');
	              item.src = sources[sources.length - 1].getAttribute('src');
	              item.title = video.getAttribute('alt');

	              var _wishlist = itemNode.getAttribute('video');

	              if (_wishlist) {
	                item.wishlist = _this.eval(_wishlist); // JSON.parse(wishlist.indexOf('"') === -1 ? wishlist.split(/[^\d\W]+/g).join('"') : wishlist);
	              }
	            }

	            return item;
	          });
	          scope.$root.gallery = {
	            index: index,
	            items: items
	          };
	        });
	      } // event.preventDefault();
	      // event.stopPropagation();

	    };

	    scope.$on('$destroy', function () {});
	  };

	  _proto.eval = function _eval(string) {
	    return new Function("() => {\n\t\t\treturn " + string + ";\n\t\t}")();
	  };

	  MediaDirective.factory = function factory($timeout, WishlistService) {
	    return new MediaDirective($timeout, WishlistService);
	  };

	  return MediaDirective;
	}();
	MediaDirective.factory.$inject = ['$timeout', 'WishlistService'];

	/* global window, document, angular, Muuri, TweenMax, TimelineMax */
	var MuuriDirective =
	/*#__PURE__*/
	function () {
	  function MuuriDirective() {
	    this.restrict = 'A';
	  }

	  var _proto = MuuriDirective.prototype;

	  _proto.link = function link(scope, element, attributes, controller) {
	    var _this = this;

	    var node = element[0];

	    if (window.matchMedia('print').matches) {
	      node.classList.add('printable');
	      return;
	    }

	    var onBeforePrint = function onBeforePrint() {
	      if (element.muuri) {
	        element.muuri.destroy();
	      }

	      node.classList.add('printable');
	    };

	    window.addEventListener('beforeprint', onBeforePrint);
	    scope.$on('lastItem', function (slide) {
	      // console.log('MuuriDirective.lastItem', slide);
	      _this.onMuuri(scope, element, attributes);
	    });
	    scope.$on('lazyImage', function (slide) {
	      // console.log('lazyImage', element.muuri);
	      return;
	    });
	    scope.$on('$destroy', function () {
	      window.removeEventListener('beforeprint', onBeforePrint);

	      if (element.muuri) {
	        element.muuri.destroy();
	      }
	    });
	    setTimeout(function () {
	      _this.onMuuri(scope, element, attributes);
	    }, 1);
	  };

	  _proto.onMuuri = function onMuuri(scope, element, attributes) {
	    if (element.muuri) {
	      var node = element[0]; // const items = scope.$eval(attributes.muuri);

	      var previousItems = element.muuri.getItems().map(function (x) {
	        return x.getElement();
	      }); // console.log('MuuriDirective.previousItems', previousItems);

	      var items = Array.from(node.querySelectorAll('.listing__item')); // console.log('MuuriDirective.newItems', items);

	      var newItems = items.filter(function (x) {
	        return previousItems.indexOf(x) === -1;
	      });
	      var removeItems = previousItems.filter(function (x) {
	        return items.indexOf(x) === -1;
	      });
	      element.muuri.remove(removeItems);
	      element.muuri.add(newItems); // element.muuri.refreshItems(items).layout();
	    } else {
	      element.muuri = new Muuri(element[0], {
	        layoutDuration: 0,
	        // 400,
	        layoutEasing: 'ease',
	        layout: {
	          fillGaps: true,
	          horizontal: false,
	          alignRight: false,
	          alignBottom: false,
	          rounding: false
	        }
	      });
	      element.addClass('muuri-init');
	      scope.$emit('onMuuri');
	    }
	  };

	  MuuriDirective.factory = function factory() {
	    return new MuuriDirective();
	  };

	  return MuuriDirective;
	}();
	MuuriDirective.factory.$inject = [];

	// Workaround for Edge 16+, which only implemented object-fit for <img> tags
	// TODO: Keep an eye on Edge to determine which version has full final support
	var edgeVersion = window.navigator.userAgent.match(/Edge\/(\d{2})\./);
	var edgePartialSupport = edgeVersion ? parseInt(edgeVersion[1], 10) >= 16 : false; // If the browser does support object-fit, we don't need to continue

	var hasSupport = 'objectFit' in document.documentElement.style !== false;

	var ObjectFitDirective =
	/*#__PURE__*/
	function () {
	  function ObjectFitDirective(DomService) {
	    this.domService = DomService;
	    this.restrict = 'A';
	  }

	  var _proto = ObjectFitDirective.prototype;

	  _proto.link = function link(scope, element, attributes, controller) {
	    var _this = this;

	    var node = element[0]; // console.log('ObjectFitDirective', node);
	    // if the page is being rendered on the server, don't continue

	    if (typeof window === 'undefined') {
	      return;
	    }

	    if (hasSupport && !edgePartialSupport) {
	      return;
	    }

	    this.polyfill(node);
	    /*
	    	if (typeof node === 'undefined' || node instanceof Event) {
	    		// If left blank, or a default event, all node on the page will be polyfilled.
	    		node = document.querySelectorAll('[data-object-fit]');
	    	} else if (node && node.nodeName) {
	    		// If it's a single node, wrap it in an array so it works.
	    		node = [node];
	    	} else if (typeof node === 'object' && node.length && node[0].nodeName) {
	    		// If it's an array of DOM nodes (e.g. a jQuery selector), it's fine as-is.
	    		node = node;
	    	} else {
	    		// Otherwise, if it's invalid or an incorrect type, return false to let people know.
	    		return false;
	    	}
	    */

	    var polyfill = function polyfill() {
	      _this.polyfill(node);
	    };

	    window.addEventListener('resize', polyfill);
	    scope.$on('$destroy', function () {
	      window.removeEventListener('resize', polyfill);
	    });
	  };

	  _proto.polyfill = function polyfill(node) {
	    var _this2 = this;

	    var nodeName = node.nodeName.toLowerCase();

	    var objectFit = function objectFit() {
	      _this2.objectFit(node);
	    };

	    if (nodeName === 'img') {
	      if (edgePartialSupport) {
	        return; // Edge supports object-fit for images (but nothing else), so no need to polyfill
	      }

	      if (node.complete) {
	        this.objectFit(node);
	      } else {
	        node.addEventListener('load', objectFit);
	      }
	    } else if (nodeName === 'video') {
	      if (node.readyState > 0) {
	        this.objectFit(node);
	      } else {
	        node.addEventListener('loadedmetadata', objectFit);
	      }
	    } else {
	      this.objectFit(node);
	    }
	  };

	  _proto.objectFit = function objectFit(node) {
	    console.log('ObjectFitDirective.objectFit', node); // IE 10- data polyfill

	    var fit = node.dataset ? node.dataset.objectFit : node.getAttribute('data-object-fit');
	    var position = node.dataset ? node.dataset.objectPosition : node.getAttribute('data-object-position'); // Default fallbacks

	    fit = fit || 'cover';
	    position = position || '50% 50%'; // If necessary, make the parent container work with absolutely positioned elements

	    var parentNode = node.parentNode;
	    this.checkParentContainer(parentNode); // Check for any pre-set CSS which could mess up image calculations

	    this.checkMediaProperties(node); // Reset any pre-set width/height CSS and handle fit positioning

	    node.style.position = 'absolute';
	    node.style.width = 'auto';
	    node.style.height = 'auto'; // `scale-down` chooses either `none` or `contain`, whichever is smaller

	    if (fit === 'scale-down') {
	      if (node.clientWidth < parentNode.clientWidth && node.clientHeight < parentNode.clientHeight) {
	        fit = 'none';
	      } else {
	        fit = 'contain';
	      }
	    } // `none` (width/height auto) and `fill` (100%) and are straightforward


	    if (fit === 'none') {
	      this.setPosition('x', node, position);
	      this.setPosition('y', node, position);
	      return;
	    }

	    if (fit === 'fill') {
	      node.style.width = '100%';
	      node.style.height = '100%';
	      this.setPosition('x', node, position);
	      this.setPosition('y', node, position);
	      return;
	    } // `cover` and `contain` must figure out which side needs covering, and add CSS positioning & centering


	    node.style.height = '100%';

	    if (fit === 'cover' && node.clientWidth > parentNode.clientWidth || fit === 'contain' && node.clientWidth < parentNode.clientWidth) {
	      node.style.top = '0';
	      node.style.marginTop = '0';
	      this.setPosition('x', node, position);
	    } else {
	      node.style.width = '100%';
	      node.style.height = 'auto';
	      node.style.left = '0';
	      node.style.marginLeft = '0';
	      this.setPosition('y', node, position);
	    }
	  };

	  _proto.checkParentContainer = function checkParentContainer(parentNode) {
	    var styles = window.getComputedStyle(parentNode, null);
	    var position = styles.getPropertyValue('position');
	    var overflow = styles.getPropertyValue('overflow');
	    var display = styles.getPropertyValue('display');

	    if (!position || position === 'static') {
	      parentNode.style.position = 'relative';
	    }

	    if (overflow !== 'hidden') {
	      parentNode.style.overflow = 'hidden';
	    } // Guesstimating that people want the parent to act like full width/height wrapper here.
	    // Mostly attempts to target <picture> elements, which default to inline.


	    if (!display || display === 'inline') {
	      parentNode.style.display = 'block';
	    }

	    if (parentNode.clientHeight === 0) {
	      parentNode.style.height = '100%';
	    } // Add a CSS class hook, in case people need to override styles for any reason.


	    if (parentNode.className.indexOf('object-fit-polyfill') === -1) {
	      parentNode.className = parentNode.className + ' object-fit-polyfill';
	    }
	  };

	  _proto.checkMediaProperties = function checkMediaProperties(node) {
	    var styles = window.getComputedStyle(node, null);
	    var constraints = {
	      'max-width': 'none',
	      'max-height': 'none',
	      'min-width': '0px',
	      'min-height': '0px',
	      top: 'auto',
	      right: 'auto',
	      bottom: 'auto',
	      left: 'auto',
	      'margin-top': '0px',
	      'margin-right': '0px',
	      'margin-bottom': '0px',
	      'margin-left': '0px'
	    };

	    for (var property in constraints) {
	      var constraint = styles.getPropertyValue(property);

	      if (constraint !== constraints[property]) {
	        node.style[property] = constraints[property];
	      }
	    }
	  };

	  _proto.setPosition = function setPosition(axis, node, objectPosition) {
	    var position, other, start, end, side;
	    objectPosition = objectPosition.split(' ');

	    if (objectPosition.length < 2) {
	      objectPosition[1] = objectPosition[0];
	    }

	    if (axis === 'x') {
	      position = objectPosition[0];
	      other = objectPosition[1];
	      start = 'left';
	      end = 'right';
	      side = node.clientWidth;
	    } else if (axis === 'y') {
	      position = objectPosition[1];
	      other = objectPosition[0];
	      start = 'top';
	      end = 'bottom';
	      side = node.clientHeight;
	    } else {
	      return; // Neither x or y axis specified
	    }

	    if (position === start || other === start) {
	      node.style[start] = '0';
	      return;
	    }

	    if (position === end || other === end) {
	      node.style[end] = '0';
	      return;
	    }

	    if (position === 'center' || position === '50%') {
	      node.style[start] = '50%';
	      node.style['margin-' + start] = side / -2 + 'px';
	      return;
	    } // Percentage values (e.g., 30% 10%)


	    if (position.indexOf('%') !== -1) {
	      position = parseInt(position);

	      if (position < 50) {
	        node.style[start] = position + '%';
	        node.style['margin-' + start] = side * (position / -100) + 'px';
	      } else {
	        position = 100 - position;
	        node.style[end] = position + '%';
	        node.style['margin-' + end] = side * (position / -100) + 'px';
	      }

	      return;
	    } else {
	      // Length-based values (e.g. 10px / 10em)
	      node.style[start] = position;
	    }

	    node.style.position = 'absolute';
	  };

	  ObjectFitDirective.factory = function factory(DomService) {
	    return new ObjectFitDirective(DomService);
	  };

	  return ObjectFitDirective;
	}();
	ObjectFitDirective.factory.$inject = ['DomService'];

	var OverOnDirective =
	/*#__PURE__*/
	function () {
	  function OverOnDirective() {
	    this.restrict = 'A';
	  }

	  var _proto = OverOnDirective.prototype;

	  _proto.link = function link(scope, element, attributes, controller) {
	    var node = element[0];
	    var selector = attributes.overOn;
	    var target = node.querySelector(selector);

	    var onOver = function onOver(event) {
	      node.classList.add('over');
	    };

	    var onOut = function onOut(event) {
	      node.classList.remove('over');
	    };

	    if (target) {
	      target.addEventListener('mouseover', onOver);
	      target.addEventListener('mouseleave', onOut);
	      scope.$on('$destroy', function () {
	        target.removeEventListener('mouseover', onOver);
	        target.removeEventListener('mouseleave', onOut);
	      });
	    }
	  };

	  OverOnDirective.factory = function factory() {
	    return new OverOnDirective();
	  };

	  return OverOnDirective;
	}();
	OverOnDirective.factory.$inject = [];

	var isEdge = window.navigator.userAgent.indexOf('Edge') !== -1;

	var ParallaxDirective =
	/*#__PURE__*/
	function () {
	  function ParallaxDirective(DomService) {
	    this.domService = DomService;
	    this.restrict = 'A';
	  }

	  var _proto = ParallaxDirective.prototype;

	  _proto.link = function link(scope, element, attributes, controller) {
	    return false; // !!! rimosso effetto parallasse
	  };

	  _proto.units = function units(value, decimals) {
	    if (decimals === void 0) {
	      decimals = 4;
	    }

	    var pow = Math.pow(10, decimals) / 10;
	    return Math.round(value * pow) / pow;
	  };

	  _proto.parallax$ = function parallax$(node, parallax) {
	    var _this = this;

	    return this.domService.rafAndRect$().pipe(map(function (datas) {
	      var windowRect = datas[1];
	      var rect = Rect.fromNode(node);
	      var intersection = rect.intersection(windowRect);

	      if (intersection.y > 0) {
	        return Math.min(1, Math.max(-1, intersection.center.y)); // intersection.center.y;
	      } else {
	        return null;
	      }
	    }), filter(function (y) {
	      return y !== null;
	    }), distinctUntilChanged(), map(function (y) {
	      var direction = 1; // i % 2 === 0 ? 1 : -1;

	      var s = (100 + parallax * 2) / 100;
	      var p = -50 + y * parallax * direction; // .toFixed(3);
	      // const y = Math.min(1, Math.max(-1, intersection.center.y));
	      // const s = (100 + parallax * 2) / 100;
	      // const p = (-50 + (y * parallax * direction)); // .toFixed(3);

	      return {
	        s: _this.units(s),
	        p: _this.units(p)
	      };
	    }));
	  };

	  ParallaxDirective.factory = function factory(DomService) {
	    return new ParallaxDirective(DomService);
	  };

	  return ParallaxDirective;
	}();
	ParallaxDirective.factory.$inject = ['DomService'];

	var ScrollToDirective =
	/*#__PURE__*/
	function () {
	  function ScrollToDirective(DomService) {
	    this.domService = DomService;
	    this.restrict = 'A';
	  }

	  var _proto = ScrollToDirective.prototype;

	  _proto.link = function link(scope, element, attributes, controller) {
	    var _this = this;

	    var onClick = function onClick() {
	      var selector = attributes.scrollTo;
	      var target = document.querySelector(selector);

	      if (target) {
	        var top = target.getBoundingClientRect().top + _this.domService.scrollTop - Number(attributes.offset || 0);

	        if (!'scrollBehavior' in document.documentElement.style) {
	          window.scrollTo(0, top);
	        } else {
	          window.scrollTo({
	            top: top,
	            behavior: 'smooth'
	          });
	        }
	      }
	    };

	    var addListeners = function addListeners() {
	      element.on('click', onClick);
	    };

	    var removeListeners = function removeListeners() {
	      element.off('click', onClick);
	    };

	    scope.$on('$destroy', function () {
	      removeListeners();
	    });
	    addListeners();
	  };

	  ScrollToDirective.factory = function factory(DomService) {
	    return new ScrollToDirective(DomService);
	  };

	  return ScrollToDirective;
	}();
	ScrollToDirective.factory.$inject = ['DomService'];

	var ScrollDirective =
	/*#__PURE__*/
	function () {
	  // @Output() public scroll = new EventEmitter();
	  function ScrollDirective($timeout, DomService) {
	    this.$timeout = $timeout;
	    this.domService = DomService; // this.require = 'ngModel';

	    this.restrict = 'A';
	  }

	  var _proto = ScrollDirective.prototype;

	  _proto.link = function link(scope, element, attributes, controller) {
	    var _this = this;

	    if (attributes.scroll !== undefined) {
	      var node = element[0];
	      this.$timeout(function () {
	        var previous;

	        var subscription = _this.domService.scrollIntersection$(node).pipe(distinctUntilChanged(function (a, b) {
	          var differs = b.scroll.scrollTop !== previous;
	          previous = b.scroll.scrollTop;
	          return !differs;
	        })).subscribe(function (event) {
	          var callback = scope.$eval(attributes.scroll, {
	            $event: event
	          });

	          if (typeof callback === 'function') {
	            callback(event); // scope.$eval(attributes.scroll, { $event: event });
	          }
	        });

	        scope.$on('$destroy', function () {
	          subscription.unsubscribe();
	        });
	      });
	    }
	    /*
	    const callback = scope.$eval(attributes.scroll);
	    if (typeof callback === 'function') {
	    	const subscription = this.domService.scroll$().subscribe(event => callback(event));
	    	scope.$on('$destroy', () => {
	    		subscription.unsubscribe();
	    	});
	    }
	    */

	  };

	  ScrollDirective.factory = function factory($timeout, DomService) {
	    return new ScrollDirective($timeout, DomService);
	  };

	  return ScrollDirective;
	}();
	ScrollDirective.factory.$inject = ['$timeout', 'DomService'];

	var StickyDirective =
	/*#__PURE__*/
	function () {
	  function StickyDirective($timeout, DomService) {
	    this.$timeout = $timeout;
	    this.domService = DomService;
	    this.restrict = 'A';
	  }

	  var _proto = StickyDirective.prototype;

	  _proto.link = function link(scope, element, attributes, controller) {
	    var _this = this;

	    var node = element[0];
	    var content = node.querySelector('[sticky-content]');

	    var onClick = function onClick(event) {
	      var isChild = _this.domService.traverseUp(event.target, function (node) {
	        return node.classList && node.classList.contains('form__group');
	      });

	      if (isChild && window.innerWidth > 860) {
	        // console.log('StickyDirective.onClick');
	        var top = _this.domService.scrollTop + node.getBoundingClientRect().top;
	        window.scroll({
	          top: top,
	          left: 0,
	          behavior: 'smooth'
	        });
	      }
	    };

	    this.$timeout(function () {
	      var subscription = _this.scroll$(element, attributes).subscribe();

	      content.addEventListener('click', onClick);
	      scope.$on('$destroy', function () {
	        subscription.unsubscribe();
	        content.removeEventListener('click', onClick);
	      });
	    });
	  };

	  _proto.scroll$ = function scroll$(element, attributes) {
	    var node = element[0];
	    var content = node.querySelector('[sticky-content]');
	    var stickyTop = parseInt(attributes.sticky) || 0;
	    return this.domService.scroll$().pipe(tap(function (scroll) {
	      var rect = Rect.fromNode(node); // const maxtop = node.offsetHeight - content.offsetHeight;
	      // top = Math.max(0, Math.min(maxtop, top - rect.top));

	      var maxTop = Math.max(0, stickyTop - rect.top); // content.setAttribute('style', `transform: translateY(${maxTop}px);`);
	      // console.log(maxTop, stickyTop, rect.top);

	      var sticky = maxTop > 0;

	      if (sticky !== element.sticky) {
	        element.sticky = sticky;

	        if (sticky) {
	          node.classList.add('sticky');
	        } else {
	          node.classList.remove('sticky');
	        }
	      }
	    }));
	  };

	  _proto.scroll$_ = function scroll$_(element, attributes) {
	    var node = element[0];
	    var content = node.querySelector('[sticky-content]');
	    var stickyTop = parseInt(attributes.sticky) || 0;
	    return this.domService.raf$().pipe(tap(function (datas) {
	      var rect = Rect.fromNode(node); // const maxtop = node.offsetHeight - content.offsetHeight;
	      // top = Math.max(0, Math.min(maxtop, top - rect.top));

	      var maxTop = Math.max(0, stickyTop - rect.top);
	      content.setAttribute('style', "transform: translateY(" + maxTop + "px);");
	      var sticky = maxTop > 0;

	      if (sticky !== element.sticky) {
	        element.sticky = sticky;

	        if (sticky) {
	          node.classList.add('sticky');
	        } else {
	          node.classList.remove('sticky');
	        }
	      }
	    }));
	  };

	  StickyDirective.factory = function factory($timeout, DomService) {
	    return new StickyDirective($timeout, DomService);
	  };

	  return StickyDirective;
	}();
	StickyDirective.factory.$inject = ['$timeout', 'DomService'];

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  return Constructor;
	}

	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}

	var DEFAULT_SWIPER_OPTIONS = {
	  slidesPerView: 'auto',
	  spaceBetween: 1,
	  centeredSlides: true,
	  loop: false,
	  loopAdditionalSlides: 100,
	  speed: 600,
	  autoplay: 5000,
	  keyboardControl: true,
	  mousewheelControl: false,
	  onSlideClick: function onSlideClick(swiper) {
	    angular.element(swiper.clickedSlide).scope().clicked(angular.element(swiper.clickedSlide).scope().$index);
	  },
	  pagination: {
	    el: '.swiper-pagination',
	    clickable: true
	  },
	  navigation: {
	    nextEl: '.swiper-button-next',
	    prevEl: '.swiper-button-prev'
	  },
	  keyboard: {
	    enabled: true,
	    onlyInViewport: true
	  }
	};
	var SwiperDirective =
	/*#__PURE__*/
	function () {
	  function SwiperDirective() {
	    this.restrict = 'A';
	    this.options = DEFAULT_SWIPER_OPTIONS;
	  }

	  var _proto = SwiperDirective.prototype;

	  _proto.link = function link(scope, element, attributes, controller) {
	    var _this = this;

	    var node = element[0];

	    if (window.matchMedia('print').matches) {
	      return;
	    }

	    var onBeforePrint = function onBeforePrint() {
	      if (element.swiper) {
	        element.swiper.destroy();
	      }
	    };

	    window.addEventListener('beforeprint', onBeforePrint);
	    TweenMax.set(node, {
	      opacity: 0
	    });
	    scope.$on('lastItem', function (slide) {
	      _this.onSwiper(scope, element, attributes);
	    });
	    scope.$on('$destroy', function () {
	      window.removeEventListener('beforeprint', onBeforePrint);

	      if (element.swiper) {
	        element.swiper.destroy();
	      }
	    });
	    scope.$watch('$viewContentLoaded', function () {
	      _this.onSwiper(scope, element, attributes);
	    });
	    scope.$on('onResize', function ($scope) {
	      _this.onResize(scope, element, attributes);
	    });
	    this.linked(scope, element, attributes, controller);
	  };

	  _proto.linked = function linked(scope, element, attributes, controller) {// console.log('linked not overrided');
	  };

	  _proto.onResize = function onResize(scope, element, attributes) {
	    if (element.swiper) {
	      Array.from(element[0].querySelectorAll('.swiper-slide')).forEach(function (node) {
	        return node.setAttribute('style', '');
	      });
	      element.swiper.update();
	    }
	  };

	  _proto.onSwiper = function onSwiper(scope, element, attributes) {
	    var node = element[0]; //const initialSlide = attributes.initialSlide !== undefined ? +attributes.initialSlide : 0;

	    if (element.swiper) {
	      element.swiper.update();
	    } else {
	      //this.options.initialSlide = initialSlide;
	      var swiper_;
	      var on = this.options.on || (this.options.on = {});
	      var callback = on.init;

	      if (!on.init || !on.init.swiperDirectiveInit) {
	        on.init = function () {
	          var _this2 = this;

	          TweenMax.to(node, 0.4, {
	            opacity: 1,
	            ease: Power2.easeOut
	          });
	          setTimeout(function () {
	            if (typeof callback === 'function') {
	              callback.apply(_this2, [swiper_, element, scope]);
	            }
	          }, 1);
	        };

	        on.init.swiperDirectiveInit = true;
	      }

	      if (attributes.noLoop !== undefined) {
	        this.options.loop = false;
	      } // console.log('attributes.noLoop', attributes.noLoop);


	      TweenMax.set(node, {
	        opacity: 1
	      });
	      swiper_ = new Swiper(element, this.options);
	      element.swiper = swiper_;
	      element.swiper._opening = true;
	      element.addClass('swiper-init');
	    }
	  };

	  SwiperDirective.factory = function factory() {
	    return new SwiperDirective();
	  };

	  return SwiperDirective;
	}();
	SwiperDirective.factory.$inject = [];
	var SwiperGalleryHeroDirective =
	/*#__PURE__*/
	function (_SwiperDirective) {
	  _inheritsLoose(SwiperGalleryHeroDirective, _SwiperDirective);

	  function SwiperGalleryHeroDirective() {
	    var _this3;

	    _this3 = _SwiperDirective.call(this) || this;
	    _this3.options = {
	      slidesPerView: 'auto',
	      centeredSlides: true,
	      spaceBetween: 30,
	      loop: true,
	      keyboardControl: true,
	      mousewheelControl: false,
	      on: {
	        init: function init() {
	          var swiper = this;
	          setTimeout(function () {
	            swiper.update();
	          });
	        }
	      },
	      onSlideClick: function onSlideClick(swiper) {
	        angular.element(swiper.clickedSlide).scope().clicked(angular.element(swiper.clickedSlide).scope().$index);
	      },
	      pagination: {
	        el: '.swiper-pagination',
	        clickable: true
	      },
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev'
	      },
	      keyboard: {
	        enabled: true,
	        onlyInViewport: true
	      }
	    };
	    return _this3;
	  }

	  var _proto2 = SwiperGalleryHeroDirective.prototype;

	  _proto2.onResize = function onResize(scope, element, attributes) {
	    if (element.swiper) {
	      Array.from(element[0].querySelectorAll('.swiper-slide')).forEach(function (node) {
	        return node.setAttribute('style', '');
	      });
	      element.swiper.params.slidesPerView = scope.zoomed ? 1 : 'auto';
	      element.swiper.update();

	      if (element.swiper._opening) {
	        element.swiper._opening = false;
	        var initialSlide = attributes.initialSlide !== undefined ? +attributes.initialSlide : 0;

	        if (initialSlide) {
	          element.swiper.slideTo(initialSlide, 0);
	        }
	      }
	    } // console.log('SwiperGalleryDirective.onResize', scope.$id, scope.zoomed, attributes.index);

	  };

	  SwiperGalleryHeroDirective.factory = function factory() {
	    return new SwiperGalleryHeroDirective();
	  };

	  return SwiperGalleryHeroDirective;
	}(SwiperDirective);
	SwiperGalleryHeroDirective.factory.$inject = [];
	var SwiperGalleryDirective =
	/*#__PURE__*/
	function (_SwiperDirective2) {
	  _inheritsLoose(SwiperGalleryDirective, _SwiperDirective2);

	  function SwiperGalleryDirective() {
	    var _this4;

	    _this4 = _SwiperDirective2.call(this) || this;
	    _this4.options = {
	      slidesPerView: 'auto',
	      loopAdditionalSlides: 100,
	      loop: true,
	      centeredSlides: false,
	      // watchOverflow: true,
	      spaceBetween: 1,
	      // speed: 600,
	      // autoplay: 5,
	      keyboardControl: true,
	      mousewheelControl: false,
	      on: {
	        init: function init() {
	          var swiper = this;
	          setTimeout(function () {
	            swiper.update();
	          });
	        }
	      },
	      onSlideClick: function onSlideClick(swiper) {
	        angular.element(swiper.clickedSlide).scope().clicked(angular.element(swiper.clickedSlide).scope().$index);
	      },
	      pagination: {
	        el: '.swiper-pagination',
	        clickable: true
	      },
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev'
	      },
	      keyboard: {
	        enabled: true,
	        onlyInViewport: true
	      }
	    };
	    return _this4;
	  }

	  var _proto3 = SwiperGalleryDirective.prototype;

	  _proto3.onResize = function onResize(scope, element, attributes) {
	    if (element.swiper) {
	      Array.from(element[0].querySelectorAll('.swiper-slide')).forEach(function (node) {
	        return node.setAttribute('style', '');
	      });
	      element.swiper.params.slidesPerView = scope.zoomed ? 1 : 'auto';
	      element.swiper.update();

	      if (element.swiper._opening) {
	        element.swiper._opening = false;
	        var initialSlide = attributes.initialSlide !== undefined ? +attributes.initialSlide : 0;

	        if (initialSlide) {
	          element.swiper.slideTo(initialSlide, 0);
	        }
	      }
	    } // console.log('SwiperGalleryDirective.onResize', scope.$id, scope.zoomed, attributes.index);

	  };

	  SwiperGalleryDirective.factory = function factory() {
	    return new SwiperGalleryDirective();
	  };

	  return SwiperGalleryDirective;
	}(SwiperDirective);
	SwiperGalleryDirective.factory.$inject = [];
	var SwiperHeroDirective =
	/*#__PURE__*/
	function (_SwiperDirective3) {
	  _inheritsLoose(SwiperHeroDirective, _SwiperDirective3);

	  function SwiperHeroDirective() {
	    var _this5;

	    _this5 = _SwiperDirective3.call(this) || this;
	    var swiper_, element_, scope_;
	    _this5.options = {
	      speed: 600,
	      parallax: true,

	      /*
	      autoplay: {
	      	delay: 10000,
	      },
	      */
	      spaceBetween: 0,
	      keyboardControl: true,
	      mousewheelControl: false,
	      onSlideClick: function onSlideClick(swiper) {
	        angular.element(swiper.clickedSlide).scope().clicked(angular.element(swiper.clickedSlide).scope().$index);
	      },
	      on: {
	        init: function init(swiper, element, scope) {
	          // console.log('SwiperHeroDirective.init');
	          if (!swiper_) {
	            swiper_ = swiper;
	            element_ = element;
	            scope_ = scope;
	          }

	          scope_.$on('onThronCanPlay', function ($scope, id) {
	            // console.log('SwiperHeroDirective.onThronCanPlay', id);
	            _this5.toggleVideo(element, scope, id);
	          });
	          scope_.$on('onThronComplete', function ($scope, id) {
	            // console.log('SwiperHeroDirective.onThronComplete', id);
	            _this5.next(swiper_);
	          });
	          /*
	          if (swiper_.autoplay) {
	          	swiper_.autoplay.start();
	          }
	          */
	        },
	        slideChangeTransitionStart: function slideChangeTransitionStart() {
	          // console.log('SwiperHeroDirective.slideChangeTransitionStart');
	          if (element_) {
	            _this5.toggleVideo(element_, scope_);
	          }
	        },
	        slideChangeTransitionEnd: function slideChangeTransitionEnd() {
	          // console.log('SwiperHeroDirective.slideChangeTransitionEnd');
	          if (element_) {
	            // this.toggleVideo(element_, scope_);
	            _this5.checkAutoplay(element_, scope_, swiper_);
	          }
	        }
	      },
	      pagination: {
	        el: '.swiper-pagination',
	        clickable: true
	      },
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev'
	      },
	      keyboard: {
	        enabled: true,
	        onlyInViewport: true
	      }
	    };
	    return _this5;
	  }

	  var _proto4 = SwiperHeroDirective.prototype;

	  _proto4.toggleVideo = function toggleVideo(element, scope, id) {
	    var slides = Array.from(element[0].querySelectorAll('.swiper-slide'));
	    slides.forEach(function (slide) {
	      var node = slide.querySelector('video, [data-thron]');

	      if (node) {
	        if (slide.classList.contains('swiper-slide-active')) {
	          // console.log('playing node', node);
	          if (node.hasAttribute('data-thron')) {
	            // console.log(id, node.id, id === node.id);
	            if (id && id === node.id) {
	              scope.$broadcast('playThron', node.id);
	            } else if (!id) {
	              scope.$broadcast('playThron', node.id);
	            }
	          } else {
	            node.play();
	          }
	        } else {
	          if (node.hasAttribute('data-thron')) {
	            scope.$broadcast('pauseThron', node.id);
	          } else {
	            node.pause();
	          }
	        }
	      }
	    });
	  };

	  _proto4.checkAutoplay = function checkAutoplay(element, scope, swiper) {
	    var _this6 = this;

	    var video = element[0].querySelector('.swiper-slide-active video, .swiper-slide-active [data-thron]');

	    if (!video) {
	      setTimeout(function () {
	        _this6.next(swiper); // swiper.slideNext();

	      }, 5000);
	    }
	  };

	  _proto4.next = function next(swiper) {
	    if (swiper.realIndex == swiper.slides.length - 1) {
	      swiper.slideTo(0);
	    } else {
	      swiper.slideNext();
	    }
	  };

	  SwiperHeroDirective.factory = function factory() {
	    return new SwiperHeroDirective();
	  };

	  return SwiperHeroDirective;
	}(SwiperDirective);
	SwiperHeroDirective.factory.$inject = [];
	var SwiperFocusDirective =
	/*#__PURE__*/
	function (_SwiperDirective4) {
	  _inheritsLoose(SwiperFocusDirective, _SwiperDirective4);

	  function SwiperFocusDirective() {
	    var _this7;

	    _this7 = _SwiperDirective4.call(this) || this;
	    _this7.options = {
	      speed: 600,
	      spaceBetween: 0,
	      keyboardControl: true,
	      mousewheelControl: false,
	      onSlideClick: function onSlideClick(swiper) {
	        angular.element(swiper.clickedSlide).scope().clicked(angular.element(swiper.clickedSlide).scope().$index);
	      },
	      on: {
	        init: function init() {
	          var swiper = this;
	          var container = swiper.$el[0];
	          var tabs = Array.from(container.querySelectorAll('.btn--tab'));
	          tabs.forEach(function (tab, i) {
	            return i === 0 ? tab.classList.add('active') : tab.classList.remove('active');
	          });
	        },
	        slideChange: function slideChange() {
	          var swiper = this;
	          var container = swiper.$el[0];
	          var tabs = Array.from(container.querySelectorAll('.btn--tab'));
	          tabs.forEach(function (tab, i) {
	            return i === swiper.activeIndex ? tab.classList.add('active') : tab.classList.remove('active');
	          });
	        }
	      },
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev'
	      },
	      keyboard: {
	        enabled: true,
	        onlyInViewport: true
	      }
	    };
	    return _this7;
	  }

	  var _proto5 = SwiperFocusDirective.prototype;

	  _proto5.linked = function linked(scope, element, attributes, controller) {
	    var node = element[0];
	    var tabs = Array.from(node.querySelectorAll('.btn--tab'));

	    var onOver = function onOver(event) {
	      var index = tabs.indexOf(event.currentTarget);
	      element.swiper.slideTo(index, 1000, function () {// console.log('swiper.complete');
	      });
	    };

	    tabs.forEach(function (tab) {
	      tab.addEventListener('mouseover', onOver);
	    });
	    scope.$on('$destroy', function () {
	      tabs.forEach(function (tab) {
	        tab.removeEventListener('mouseover', onOver);
	      });
	    });
	  };

	  SwiperFocusDirective.factory = function factory() {
	    return new SwiperFocusDirective();
	  };

	  return SwiperFocusDirective;
	}(SwiperDirective);
	SwiperFocusDirective.factory.$inject = [];
	var SwiperProjectsDirective =
	/*#__PURE__*/
	function (_SwiperDirective5) {
	  _inheritsLoose(SwiperProjectsDirective, _SwiperDirective5);

	  function SwiperProjectsDirective() {
	    var _this8;

	    _this8 = _SwiperDirective5.call(this) || this;
	    _this8.options = {
	      speed: 600,
	      // parallax: true,
	      // autoplay: 5000,
	      // loop: true,
	      spaceBetween: 0,
	      keyboardControl: true,
	      mousewheelControl: false,
	      onSlideClick: function onSlideClick(swiper) {
	        angular.element(swiper.clickedSlide).scope().clicked(angular.element(swiper.clickedSlide).scope().$index);
	      },
	      pagination: {
	        el: '.swiper-pagination',
	        clickable: true
	      },
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev'
	      },
	      keyboard: {
	        enabled: true,
	        onlyInViewport: true
	      }
	    };
	    return _this8;
	  }

	  SwiperProjectsDirective.factory = function factory() {
	    return new SwiperProjectsDirective();
	  };

	  return SwiperProjectsDirective;
	}(SwiperDirective);
	SwiperProjectsDirective.factory.$inject = [];
	var SwiperReferencesDirective =
	/*#__PURE__*/
	function (_SwiperDirective6) {
	  _inheritsLoose(SwiperReferencesDirective, _SwiperDirective6);

	  function SwiperReferencesDirective() {
	    var _this9;

	    _this9 = _SwiperDirective6.call(this) || this;
	    _this9.options = {
	      speed: 600,
	      spaceBetween: 0,
	      keyboardControl: true,
	      mousewheelControl: false,
	      onSlideClick: function onSlideClick(swiper) {
	        angular.element(swiper.clickedSlide).scope().clicked(angular.element(swiper.clickedSlide).scope().$index);
	      },
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev'
	      },
	      keyboard: {
	        enabled: true,
	        onlyInViewport: true
	      }
	    };
	    return _this9;
	  }

	  SwiperReferencesDirective.factory = function factory() {
	    return new SwiperReferencesDirective();
	  };

	  return SwiperReferencesDirective;
	}(SwiperDirective);
	SwiperReferencesDirective.factory.$inject = [];
	var SwiperTileDirective =
	/*#__PURE__*/
	function (_SwiperDirective7) {
	  _inheritsLoose(SwiperTileDirective, _SwiperDirective7);

	  function SwiperTileDirective() {
	    var _this10;

	    _this10 = _SwiperDirective7.call(this) || this;
	    _this10.options = {
	      speed: 600,
	      parallax: true,
	      autoplay: 5000,
	      // loop: true,
	      spaceBetween: 60,
	      keyboardControl: true,
	      mousewheelControl: false,
	      onSlideClick: function onSlideClick(swiper) {
	        angular.element(swiper.clickedSlide).scope().clicked(angular.element(swiper.clickedSlide).scope().$index);
	      },
	      pagination: {
	        el: '.swiper-pagination',
	        clickable: true,
	        dynamicBullets: true
	      },
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev'
	      },
	      keyboard: {
	        enabled: true,
	        onlyInViewport: true
	      }
	    };
	    return _this10;
	  }

	  SwiperTileDirective.factory = function factory() {
	    return new SwiperTileDirective();
	  };

	  return SwiperTileDirective;
	}(SwiperDirective);
	SwiperTileDirective.factory.$inject = [];
	var SwiperTimelineDirective =
	/*#__PURE__*/
	function (_SwiperDirective8) {
	  _inheritsLoose(SwiperTimelineDirective, _SwiperDirective8);

	  function SwiperTimelineDirective() {
	    var _this11;

	    _this11 = _SwiperDirective8.call(this) || this;
	    _this11.options = {
	      slidesPerView: 1,
	      spaceBetween: 60,
	      speed: 600,
	      autoplay: 5000,
	      keyboardControl: true,
	      mousewheelControl: false,
	      on: {
	        init: function init() {
	          var swiper = this;
	          var container = swiper.$el[0];
	          var lis = Array.from(container.querySelectorAll('.nav--timeline>li'));
	          lis.forEach(function (x, i) {
	            x.addEventListener('click', function () {
	              swiper.slideTo(i, 600);
	            });
	          });
	        },
	        slideChange: function slideChange() {
	          var swiper = this;
	          var container = swiper.$el[0];
	          var lis = Array.from(container.querySelectorAll('.nav--timeline>li'));
	          lis.forEach(function (x, i) {
	            if (i === swiper.activeIndex) {
	              x.classList.add('active');
	            } else {
	              x.classList.remove('active');
	            }
	          });
	        }
	      },
	      pagination: {
	        el: '.swiper-pagination',
	        dynamicBullets: true
	      },
	      keyboard: {
	        enabled: true,
	        onlyInViewport: true
	      }
	    };
	    return _this11;
	  }

	  SwiperTimelineDirective.factory = function factory() {
	    return new SwiperTimelineDirective();
	  };

	  return SwiperTimelineDirective;
	}(SwiperDirective);
	SwiperTimelineDirective.factory.$inject = [];

	var ID = 0;

	var ThronDirective =
	/*#__PURE__*/
	function () {
	  function ThronDirective() {
	    this.restrict = 'A';
	  }

	  var _proto = ThronDirective.prototype;

	  _proto.link = function link(scope, element, attributes, controller) {
	    var THRON = window.THRONContentExperience || window.THRONPlayer;

	    if (!THRON) {
	      return;
	    }

	    var node = element[0];
	    node.id = "thron-" + ++ID;
	    var player = THRON(node.id, {
	      media: node.getAttribute('data-thron'),
	      loop: node.hasAttribute('loop'),
	      autoplay: node.hasAttribute('autoplay'),
	      muted: true,
	      displayLinked: 'close',
	      noSkin: true // lockBitrate: 'max',

	    });

	    var onReady = function onReady() {
	      // console.log('ThronDirective.onReady', node.id);
	      var mediaContainer = player.mediaContainer();
	      var video = mediaContainer.querySelector('video');
	      video.setAttribute('playsinline', 'true');
	      scope.$emit('onThronReady', node.id); // video.setAttribute('autoplay', 'true');
	    };

	    var onCanPlay = function onCanPlay() {
	      // console.log('ThronDirective.onCanPlay', node.id);
	      scope.$emit('onThronCanPlay', node.id);
	    };

	    var onPlaying = function onPlaying() {
	      player.off('playing', onPlaying);
	      var qualities = player.qualityLevels(); // console.log('ThronDirective.onPlaying', node.id, qualities);

	      if (qualities.length) {
	        var highestQuality = qualities[qualities.length - 1].index;
	        var lowestQuality = qualities[0].index;
	        player.currentQuality(highestQuality); // console.log('ThronDirective.onPlaying', node.id, 'currentQuality', player.currentQuality());
	      }
	    };

	    var onComplete = function onComplete() {
	      // console.log('ThronDirective.onComplete', node.id);
	      scope.$emit('onThronComplete', node.id);
	    };

	    var playVideo = function playVideo() {
	      var status = player.status(); // console.log('ThronDirective.playVideo', node.id, status);

	      if (status && !status.playing) {
	        player.play();
	      }
	    };

	    var pauseVideo = function pauseVideo() {
	      var status = player.status(); // console.log('ThronDirective.pauseVideo', node.id, status);

	      if (status && status.playing) {
	        player.pause();
	      }
	    };

	    player.on('ready', onReady);
	    player.on('canPlay', onCanPlay);
	    player.on('playing', onPlaying);
	    player.on('complete', onComplete);
	    scope.$on('playThron', function ($scope, id) {
	      // console.log('ThronDirective.playThron', id, node.id, id === node.id);
	      if (id === node.id) {
	        playVideo();
	      }
	    });
	    scope.$on('pauseThron', function ($scope, id) {
	      // console.log('ThronDirective.pauseThron', id, node.id, id === node.id);
	      if (id === node.id) {
	        pauseVideo();
	      }
	    });
	    scope.$on('$destroy', function () {
	      player.off('ready', onReady);
	      player.off('canPlay', onCanPlay);
	      player.off('playing', onPlaying);
	      player.off('complete', onComplete);
	    });
	  };

	  ThronDirective.factory = function factory() {
	    return new ThronDirective();
	  };

	  return ThronDirective;
	}();
	ThronDirective.factory.$inject = [];

	var VideoDirective =
	/*#__PURE__*/
	function () {
	  function VideoDirective($timeout, WishlistService) {
	    this.$timeout = $timeout;
	    this.wishlistService = WishlistService;
	    this.restrict = 'A';
	    this.transclude = true;
	    this.template = "<div class=\"media\">\n\t<ng-transclude></ng-transclude>\n</div>\n<div class=\"overlay\" ng-click=\"onOverlay($event)\"></div>\n<div class=\"btn btn--play\" ng-class=\"{ playing: playing }\">\n\t<svg class=\"icon icon--play-progress-background\"><use xlink:href=\"#play-progress\"></use></svg>\n\t<svg class=\"icon icon--play-progress\" viewBox=\"0 0 196 196\">\n\t\t<path xmlns=\"http://www.w3.org/2000/svg\" stroke-width=\"2px\" stroke-dasharray=\"1\" stroke-dashoffset=\"1\" pathLength=\"1\" stroke-linecap=\"square\" d=\"M195.5,98c0,53.8-43.7,97.5-97.5,97.5S0.5,151.8,0.5,98S44.2,0.5,98,0.5S195.5,44.2,195.5,98z\"/>\n\t</svg>\n\t<svg class=\"icon icon--play\" ng-if=\"!playing\"><use xlink:href=\"#play\"></use></svg>\n\t<svg class=\"icon icon--play\" ng-if=\"playing\"><use xlink:href=\"#pause\"></use></svg>\n</div><div class=\"btn btn--pinterest\" ng-click=\"onPin()\" ng-if=\"onPin\">\n<svg class=\"icon icon--pinterest\"><use xlink:href=\"#pinterest\"></use></svg>\n</div>\n<div class=\"btn btn--wishlist\" ng-class=\"{ active: wishlistActive, activated: wishlistActivated, deactivated: wishlistDeactivated }\" ng-click=\"onClickWishlist($event)\">\n\t<svg class=\"icon icon--wishlist\" ng-if=\"!wishlistActive\"><use xlink:href=\"#wishlist\"></use></svg>\n\t<svg class=\"icon icon--wishlist\" ng-if=\"wishlistActive\"><use xlink:href=\"#wishlist-added\"></use></svg>\n</div>\n<div class=\"btn btn--zoom\" ng-click=\"onClickZoom($event)\">\n\t<svg class=\"icon icon--zoom\"><use xlink:href=\"#zoom\"></use></svg>\n</div>";
	    this.scope = {
	      item: '=?video'
	    };
	  }

	  var _proto = VideoDirective.prototype;

	  _proto.link = function link(scope, element, attributes, controller) {
	    var _this = this;

	    scope.item = scope.item || {};
	    var node = element[0];
	    var video = node.querySelector('video');

	    if (video) {
	      var pageTitle = document.title;

	      scope.onPin = function () {
	        var pin = {
	          url: window.location.href,
	          media: video.poster,
	          description: video.title || pageTitle
	        };
	        GtmService.push({
	          event: 'Pinterest',
	          wish_name: scope.item.name || scope.item.coId,
	          wish_type: scope.item.typeName || scope.item.type
	        }); // console.log('VideoDirective.onPin', pin);

	        PinUtils.pinOne(pin);
	      };
	    }

	    var progress = node.querySelector('.icon--play-progress path');
	    scope.item = scope.item || {};

	    scope.onOverlay = function (event) {
	      if (video) {
	        if (video.paused) {
	          var gallery = document.querySelector('.section--gallery');
	          video.muted = gallery ? false : true;
	          video.play();
	        } else {
	          video.pause();
	        }
	      }
	      /*
	      event.preventDefault();
	      event.stopImmediatePropagation();
	      */

	    };

	    var onPlay = function onPlay() {
	      _this.$timeout(function () {
	        scope.playing = true;
	      });
	    };

	    var onPlayGtm = function onPlayGtm() {
	      var sources = video.querySelectorAll('source');

	      if (sources.length) {
	        var src = sources[sources.length - 1].getAttribute('src');
	        if (src) GtmService.push({
	          event: 'video play',
	          video_name: src
	        });
	      }
	    };

	    var onPause = function onPause() {
	      _this.$timeout(function () {
	        scope.playing = false;
	      });
	    };

	    var onEnded = function onEnded() {
	      _this.$timeout(function () {
	        scope.playing = false;
	      });
	    };

	    var onTimeUpdate = function onTimeUpdate() {
	      // console.log(video.currentTime, video.duration);
	      progress.style.strokeDashoffset = video.currentTime / video.duration;
	    };

	    scope.$watch(function () {
	      return _this.wishlistService.has(scope.item);
	    }, function (current, previous) {
	      // console.log(current, previous, node);
	      if (scope.wishlistActive !== current) {
	        scope.wishlistActive = current;

	        if (current) {
	          scope.wishlistActivated = true;

	          _this.$timeout(function () {
	            scope.wishlistActivated = false;
	          }, 2000);
	        } else {
	          scope.wishlistDeactivated = true;

	          _this.$timeout(function () {
	            scope.wishlistDeactivated = false;
	          }, 2000);
	        }
	      }
	    });

	    scope.onClickWishlist = function (event) {
	      _this.wishlistService.toggle(scope.item).then(function (has) {
	        console.log('VideoDirective.onClickWishlist', has);
	      }, function (error) {
	        console.log(error);
	      }); // event.preventDefault();
	      // event.stopPropagation();

	    };

	    scope.onClickZoom = function (event) {
	      if (scope.$root.gallery) {
	        _this.$timeout(function () {
	          scope.$root.gallery = null;
	        });
	      } else if (node.classList.contains('picture--vertical') || node.classList.contains('picture--horizontal') || node.classList.contains('picture--square')) {
	        _this.$timeout(function () {
	          var index = 0;
	          var items = Array.from(document.querySelectorAll('.picture--vertical[media], .picture--vertical[video], .picture--horizontal[media], .picture--horizontal[video], .picture--square[media], .picture--square[video]')).map(function (itemNode, i) {
	            if (itemNode == node) {
	              index = i;
	            }

	            var item = {};
	            item.type = itemNode.hasAttribute('media') ? 'media' : 'video';

	            if (item.type === 'media') {
	              var img = itemNode.querySelector('img');
	              item.src = img.getAttribute('src') || img.getAttribute('data-src');
	              item.title = img.getAttribute('alt');
	              var wishlist = itemNode.getAttribute('media');

	              if (wishlist) {
	                item.wishlist = _this.eval(wishlist); // JSON.parse(wishlist.indexOf('"') === -1 ? wishlist.split(/[^\d\W]+/g).join('"') : wishlist);
	              }
	            } else {
	              var _video = itemNode.querySelector('video');

	              var sources = _video.querySelectorAll('source');

	              item.poster = _video.getAttribute('poster');
	              item.src = sources[sources.length - 1].getAttribute('src');
	              item.title = _video.getAttribute('alt');

	              var _wishlist = itemNode.getAttribute('video');

	              if (_wishlist) {
	                item.wishlist = _this.eval(_wishlist); // JSON.parse(wishlist.indexOf('"') === -1 ? wishlist.split(/[^\d\W]+/g).join('"') : wishlist);
	              }
	            }

	            return item;
	          });
	          scope.$root.gallery = {
	            index: index,
	            items: items
	          };
	        });
	      } // event.preventDefault();
	      // event.stopPropagation();

	    };

	    if (video) {
	      video.addEventListener('play', onPlay);
	      video.addEventListener('play', onPlayGtm);
	      video.addEventListener('pause', onPause);
	      video.addEventListener('ended', onEnded);
	      video.addEventListener('timeupdate', onTimeUpdate);
	    }

	    scope.$on('$destroy', function () {
	      if (video) {
	        // console.log('VideoDirective.$destroy');
	        video.removeEventListener('play', onPlay);
	        video.removeEventListener('play', onPlayGtm);
	        video.removeEventListener('pause', onPause);
	        video.removeEventListener('ended', onEnded);
	        video.removeEventListener('timeupdate', onTimeUpdate);
	      }
	    });
	  };

	  _proto.eval = function _eval(string) {
	    return new Function("() => {\n\t\t\treturn " + string + ";\n\t\t}")();
	  };

	  VideoDirective.factory = function factory($timeout, WishlistService) {
	    return new VideoDirective($timeout, WishlistService);
	  };

	  return VideoDirective;
	}();
	VideoDirective.factory.$inject = ['$timeout', 'WishlistService'];

	var VisibilityDirective =
	/*#__PURE__*/
	function () {
	  function VisibilityDirective(DomService) {
	    this.domService = DomService;
	    this.restrict = 'A';
	  }

	  var _proto = VisibilityDirective.prototype;

	  _proto.link = function link(scope, element, attributes, controller) {
	    var node = element[0];
	    var subscription = this.domService.firstVisibility$(node).subscribe(function (visible) {
	      // console.log('visibility', attributes.visibility, node.classList);
	      var gtmEvent = {
	        event: 'ElementVisibilityCustomEvent',
	        element: attributes.visibility,
	        classes: node.getAttribute('class')
	      }; // console.log(gtmEvent);

	      GtmService.push(gtmEvent);
	    });
	    scope.$on('$destroy', function () {
	      subscription.unsubscribe();
	    });
	  };

	  VisibilityDirective.factory = function factory(DomService) {
	    return new VisibilityDirective(DomService);
	  };

	  return VisibilityDirective;
	}();
	VisibilityDirective.factory.$inject = ['DomService'];

	var WishlistDirective =
	/*#__PURE__*/
	function () {
	  function WishlistDirective($timeout, WishlistService) {
	    this.$timeout = $timeout;
	    this.wishlistService = WishlistService;
	    this.restrict = 'E';
	    this.scope = {
	      item: '='
	    };
	    this.transclude = true;
	    this.template = "<div class=\"btn btn--wishlist\" ng-class=\"{ active: wishlistActive, activated: wishlistActivated, deactivated: wishlistDeactivated }\" ng-click=\"onClickWishlist($event)\">\n\t\t<svg class=\"icon icon--wishlist\" ng-if=\"!wishlistActive\"><use xlink:href=\"#wishlist\"></use></svg>\n\t\t<svg class=\"icon icon--wishlist\" ng-if=\"wishlistActive\"><use xlink:href=\"#wishlist-added\"></use></svg>\n\t\t<ng-transclude></ng-transclude>\n\t</div>";
	  }

	  var _proto = WishlistDirective.prototype;

	  _proto.link = function link(scope, element, attributes, controller) {
	    var _this = this;

	    var node = element[0];
	    scope.item = scope.item || {};
	    scope.$watch(function () {
	      return _this.wishlistService.has(scope.item);
	    }, function (current, previous) {
	      // console.log(current, previous, node);
	      if (scope.wishlistActive !== current) {
	        scope.wishlistActive = current;

	        if (current) {
	          scope.wishlistActivated = true;

	          _this.$timeout(function () {
	            scope.wishlistActivated = false;
	          }, 2000);
	        } else {
	          scope.wishlistDeactivated = true;

	          _this.$timeout(function () {
	            scope.wishlistDeactivated = false;
	          }, 2000);
	        }
	      }
	    });

	    scope.onClickWishlist = function (event) {
	      _this.wishlistService.toggle(scope.item).then(function (has) {
	        console.log('WishlistDirective.onClickWishlist', has);
	      }, function (error) {
	        console.log(error);
	      });

	      event.preventDefault();
	      event.stopPropagation();
	    };

	    scope.$on('$destroy', function () {});
	  };

	  WishlistDirective.factory = function factory($timeout, WishlistService) {
	    return new WishlistDirective($timeout, WishlistService);
	  };

	  return WishlistDirective;
	}();
	WishlistDirective.factory.$inject = ['$timeout', 'WishlistService'];

	// let INDEX = 0;
	var WorldDirective =
	/*#__PURE__*/
	function () {
	  // src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy lazy-src="
	  function WorldDirective($timeout, DomService) {
	    this.$timeout = $timeout;
	    this.domService = DomService;
	    this.restrict = 'A';
	  }

	  var _proto = WorldDirective.prototype;

	  _proto.link = function link(scope, element, attributes, controller) {
	    var _this = this;

	    var node = element[0];
	    var img = node.querySelector('img');
	    var nodePoints = node.querySelector('.points');

	    var
	    /*onEnter*/
	    onClick = function onClick(event) {
	      event.stopImmediatePropagation();
	      Array.from(node.querySelectorAll('.world__point')).forEach(function (x) {
	        if (x === event.currentTarget) {
	          x.classList.add('active');
	        } else {
	          x.classList.remove('active');
	        }
	      });
	    };

	    img.onload = function () {
	      var offices = window.offices;
	      var w = node.offsetWidth;
	      var h = node.offsetHeight;
	      var points = offices.forEach(function (x) {
	        var position = x.position;
	        var latitude = position.latitude;
	        var top = h * 1.169 / 180 * (-latitude + 90);
	        var longitude = position.longitude;
	        var left = w / 360 * (longitude + 180) - 30;

	        var pointNode = _this.makePoint(x);

	        TweenMax.set(pointNode, {
	          top: top / h * 100 + '%',
	          left: left / w * 100 + '%'
	        });
	        nodePoints.appendChild(pointNode);
	        node.addEventListener('click', onClick);
	        pointNode.addEventListener('click', onClick); //pointNode.addEventListener('mouseenter', onEnter);
	        //const pointInfoNode = pointNode.querySelector('.world__info');
	        //pointInfoNode.addEventListener('mouseleave', onLeave);
	      });
	    };

	    scope.$on('$destroy', function () {
	      node.removeEventListener('click', onClick);
	      Array.from(node.querySelectorAll('.world__point')).forEach(function (node) {
	        node.removeEventListener('click', onClick);
	      }); //Array.from(node.querySelectorAll('.world__point')).forEach(node => {
	      //	node.removeEventListener('mouseenter', onEnter);
	      //});
	      //Array.from(node.querySelectorAll('.world__point .world__info')).forEach(node => {
	      //	node.removeEventListener('mouseleave', onLeave);
	      //});
	    });
	  };

	  _proto.makePoint = function makePoint(point) {
	    var pointNode = document.createElement('div');
	    pointNode.classList.add('world__point');

	    if (point.headquarter) {
	      pointNode.classList.add('world__point--headquarter');
	    }

	    var cta = point.url ? "\n\t\t<div class=\"group group--cta\">\n\t\t\t<a href=\"" + point.url + "\" class=\"btn btn--link\"><span>" + window.BOMLabels.More_info + "</span></a>\n\t\t</div>\n\t\t" : '';
	    pointNode.innerHTML = "\n\t\t<div class=\"world__info\">\n\t\t\t<div><span class=\"city\">" + point.city + "</span> <span class=\"country\">" + point.country + "</span></div>\n\t\t\t<div class=\"abstract\">" + point.abstract + "</div>\n\t\t\t" + cta + "\n\t\t</div>\n\t\t";
	    return pointNode;
	  };

	  WorldDirective.factory = function factory($timeout, DomService) {
	    return new WorldDirective($timeout, DomService);
	  };

	  return WorldDirective;
	}();
	WorldDirective.factory.$inject = ['$timeout', 'DomService'];

	var ZoomableDirective =
	/*#__PURE__*/
	function () {
	  // src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy lazy-src="
	  function ZoomableDirective($timeout, DomService) {
	    this.$timeout = $timeout;
	    this.domService = DomService;
	    this.restrict = 'A';
	  }

	  var _proto = ZoomableDirective.prototype;

	  _proto.link = function link(scope, element, attributes, controller) {
	    var _this = this;

	    var triggers, rect;
	    var node = element[0];
	    var content = node.querySelector('.zoomable__content');

	    var onClose = function onClose() {
	      if (node.classList.contains('zoomed')) {
	        _this.zoomOut(scope, node, content, rect);

	        if (attributes.zoomed !== undefined) {
	          _this.$timeout(function () {
	            scope.$root.gallery = null;
	          });
	        }
	      }
	    };

	    var onOpen = function onOpen() {
	      if (!node.classList.contains('zoomed')) {
	        rect = Rect.fromNode(node);

	        _this.zoomIn(scope, node, content, rect);
	      }
	    };

	    var onClick = function onClick() {
	      // const slides = Array.from(node.querySelectorAll('.swiper-slide'));
	      if (node.classList.contains('zoomed')) {
	        _this.zoomOut(scope, node, content, rect);

	        if (attributes.zoomed !== undefined) {
	          _this.$timeout(function () {
	            scope.$root.gallery = null;
	          });
	        }
	      } else {
	        rect = Rect.fromNode(node);

	        _this.zoomIn(scope, node, content, rect);
	      }
	    };

	    var addListeners = function addListeners() {
	      var close = node.querySelector('.zoomable__close');

	      if (close) {
	        close.addEventListener('click', onClose);
	      }

	      triggers = Array.from(node.querySelectorAll('.zoomable__trigger')); // console.log('ZoomableDirective', node, content, triggers);

	      triggers.forEach(function (x) {
	        return x.addEventListener('click', onClick);
	      });
	    };

	    var removeListeners = function removeListeners() {
	      var close = node.querySelector('.zoomable__close');

	      if (close) {
	        close.removeEventListener('click', onClose);
	      }

	      if (triggers) {
	        triggers.forEach(function (x) {
	          return x.removeEventListener('click', onClick);
	        });
	      }
	    };

	    scope.$on('lastItem', function ($scope, item) {
	      // console.log('lastItem');
	      removeListeners();
	      addListeners();
	    });
	    this.$timeout(function () {
	      addListeners();
	    });
	    scope.$on('$destroy', function () {
	      triggers.forEach(function (x) {
	        return x.removeEventListener('click', onClick);
	      });
	    });
	    console.log('ZoomableDirective', scope.$id);

	    scope.onZoom = function (item) {
	      var rect = Rect.fromNode(content);
	      console.log('ZoomableDirective.onZoom', scope.zoomed);
	      TweenMax.set(node, {
	        height: rect.height
	      });

	      _this.$timeout(function () {
	        scope.zoomed = !scope.zoomed;
	      });
	      /*
	      TweenMax.to(u, 0.50, {
	      	scaleX: 1,
	      	transformOrigin: '0 50%',
	      	delay: 0,
	      	ease: Power3.easeInOut,
	      	overwrite: 'all',
	      	onComplete: () => {
	      		TweenMax.set(u, { transformOrigin: '100% 50%', scaleX: 1 });
	      		TweenMax.to(u, 0.50, {
	      			scaleX: 0,
	      			transformOrigin: '100% 50%',
	      			delay: 1.0,
	      			ease: Power3.easeInOut,
	      			overwrite: 'all',
	      			onComplete: () => {
	      				animate();
	      			}
	      		});
	      	}
	      });
	      */

	    };

	    if (attributes.zoomed !== undefined) {
	      onOpen();
	    }
	  };

	  _proto.zoomIn = function zoomIn(scope, node, content, rect) {
	    // TweenMax.set(node, { height: rect.height });
	    // TweenMax.set(content, { left: rect.left, top: rect.top, width: rect.width, height: rect.height });
	    node.classList.add('zoomed');
	    scope.zoomed = true; // TweenMax.set(content, { left: 0, top: 0, width: '100%', height: '100%' });

	    setTimeout(function () {
	      scope.$broadcast('onResize', scope.zoomed);
	    }, 1); // scope.$emit('onDroppinIn', true);
	  };

	  _proto.zoomOut = function zoomOut(scope, node, content, rect) {
	    // TweenMax.set(node, { height: 'auto' });
	    // TweenMax.set(content, { clearProps: 'all' });
	    node.classList.remove('zoomed');
	    scope.zoomed = false;
	    setTimeout(function () {
	      scope.$broadcast('onResize', scope.zoomed);
	    }, 1); // scope.$emit('onDroppinIn', false);
	  };

	  _proto.zoomInAnimated = function zoomInAnimated(scope, node, content, rect) {
	    TweenMax.set(node, {
	      height: rect.height
	    });
	    TweenMax.set(content, {
	      left: rect.left,
	      top: rect.top,
	      width: rect.width,
	      height: rect.height
	    });
	    node.classList.add('zoomed');
	    scope.$emit('onDroppinIn', true);
	    TweenMax.to(content, 0.3, {
	      left: 0,
	      top: 0,
	      width: '100%',
	      height: '100%',
	      ease: Expo.easeInOut,
	      // ease: CustomEase.create('custom', 'M0,0,C0.596,0,0.346,1,1,1'),
	      onUpdate: function onUpdate() {
	        // window.dispatchEvent(new Event('resize'));
	        // slides.forEach(x => x.style.width = content.style.width);
	        scope.$broadcast('onResize');
	      },
	      onComplete: function onComplete() {// scope.$broadcast('onResize');
	      }
	    });
	  };

	  _proto.zoomOutAnimated = function zoomOutAnimated(scope, node, content, rect) {
	    TweenMax.to(content, 0.3, {
	      left: rect.left,
	      top: rect.top,
	      width: rect.width,
	      height: rect.height,
	      ease: Expo.easeInOut,
	      // ease: CustomEase.create('custom', 'M0,0,C0.596,0,0.346,1,1,1'),
	      onUpdate: function onUpdate() {
	        scope.$broadcast('onResize');
	      },
	      onComplete: function onComplete() {
	        TweenMax.set(node, {
	          height: 'auto'
	        });
	        TweenMax.set(content, {
	          left: rect.left,
	          top: rect.top,
	          width: rect.width,
	          height: rect.height
	        });
	        node.classList.remove('zoomed');
	        scope.$emit('onDroppinIn', false);
	      }
	    });
	  };

	  ZoomableDirective.factory = function factory($timeout, DomService) {
	    return new ZoomableDirective($timeout, DomService);
	  };

	  return ZoomableDirective;
	}();
	ZoomableDirective.factory.$inject = ['$timeout', 'DomService'];

	var GTM_EVENT = 'ricerca-homepage';

	var EffectsCtrl =
	/*#__PURE__*/
	function () {
	  function EffectsCtrl($scope, $timeout, LocationService) {
	    this.$scope = $scope;
	    this.$timeout = $timeout;
	    this.locationService = LocationService;
	    this.collectionsUrl = window.collectionsUrl;
	    this.filters = window.filters || {};
	    this.collections = this.filters.collections || {
	      options: []
	    };
	    this.looks = this.filters.looks || {
	      options: []
	    };
	  }

	  var _proto = EffectsCtrl.prototype;

	  _proto.setFilter = function setFilter(item, filter) {
	    filter = filter || window.filters.collections;
	    this.$scope.$broadcast('onCloseDropdown');
	    item = item || filter.options[0];
	    filter.value = item.value;

	    if (filter === this.looks) {
	      this.track('collections-_look-Effetto' + item.key);
	    } else {
	      if (filter === this.collections) {
	        this.track('collections-' + item.key + '-');
	      }
	    }

	    this.navToCollections();
	  };

	  _proto.navToCollections = function navToCollections() {
	    var _this = this;

	    var filters = {};
	    var any = false;
	    Object.keys(this.filters).forEach(function (x) {
	      var filter = _this.filters[x];

	      if (filter.value !== null) {
	        filters[x] = filter.value;
	        any = true;
	      }
	    });

	    if (!any) {
	      filters = this.initialFilters ? {} : null;
	    }

	    var serialized = this.locationService.serialize_('filters', filters);
	    window.location.href = this.collectionsUrl + '?q=' + serialized;
	  };

	  _proto.track = function track(queryhp) {
	    GtmService.push({
	      "queryhp": queryhp,
	      "event": GTM_EVENT
	    });
	  };

	  return EffectsCtrl;
	}();

	EffectsCtrl.$inject = ['$scope', '$timeout', 'LocationService'];

	/** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */
	var AnimationFrameAction = /*@__PURE__*/ (function (_super) {
	    __extends(AnimationFrameAction, _super);
	    function AnimationFrameAction(scheduler, work) {
	        var _this = _super.call(this, scheduler, work) || this;
	        _this.scheduler = scheduler;
	        _this.work = work;
	        return _this;
	    }
	    AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
	        if (delay === void 0) {
	            delay = 0;
	        }
	        if (delay !== null && delay > 0) {
	            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
	        }
	        scheduler.actions.push(this);
	        return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(function () { return scheduler.flush(null); }));
	    };
	    AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
	        if (delay === void 0) {
	            delay = 0;
	        }
	        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
	            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
	        }
	        if (scheduler.actions.length === 0) {
	            cancelAnimationFrame(id);
	            scheduler.scheduled = undefined;
	        }
	        return undefined;
	    };
	    return AnimationFrameAction;
	}(AsyncAction));

	/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */
	var AnimationFrameScheduler = /*@__PURE__*/ (function (_super) {
	    __extends(AnimationFrameScheduler, _super);
	    function AnimationFrameScheduler() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    AnimationFrameScheduler.prototype.flush = function (action) {
	        this.active = true;
	        this.scheduled = undefined;
	        var actions = this.actions;
	        var error;
	        var index = -1;
	        var count = actions.length;
	        action = action || actions.shift();
	        do {
	            if (error = action.execute(action.state, action.delay)) {
	                break;
	            }
	        } while (++index < count && (action = actions.shift()));
	        this.active = false;
	        if (error) {
	            while (++index < count && (action = actions.shift())) {
	                action.unsubscribe();
	            }
	            throw error;
	        }
	    };
	    return AnimationFrameScheduler;
	}(AsyncScheduler));

	/** PURE_IMPORTS_START _AnimationFrameAction,_AnimationFrameScheduler PURE_IMPORTS_END */
	var animationFrame = /*@__PURE__*/ new AnimationFrameScheduler(AnimationFrameAction);

	/** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */
	function fromEvent(target, eventName, options, resultSelector) {
	    if (isFunction(options)) {
	        resultSelector = options;
	        options = undefined;
	    }
	    if (resultSelector) {
	        return fromEvent(target, eventName, options).pipe(map(function (args) { return isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
	    }
	    return new Observable(function (subscriber) {
	        function handler(e) {
	            if (arguments.length > 1) {
	                subscriber.next(Array.prototype.slice.call(arguments));
	            }
	            else {
	                subscriber.next(e);
	            }
	        }
	        setupSubscription(target, eventName, handler, subscriber, options);
	    });
	}
	function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
	    var unsubscribe;
	    if (isEventTarget(sourceObj)) {
	        var source_1 = sourceObj;
	        sourceObj.addEventListener(eventName, handler, options);
	        unsubscribe = function () { return source_1.removeEventListener(eventName, handler, options); };
	    }
	    else if (isJQueryStyleEventEmitter(sourceObj)) {
	        var source_2 = sourceObj;
	        sourceObj.on(eventName, handler);
	        unsubscribe = function () { return source_2.off(eventName, handler); };
	    }
	    else if (isNodeStyleEventEmitter(sourceObj)) {
	        var source_3 = sourceObj;
	        sourceObj.addListener(eventName, handler);
	        unsubscribe = function () { return source_3.removeListener(eventName, handler); };
	    }
	    else if (sourceObj && sourceObj.length) {
	        for (var i = 0, len = sourceObj.length; i < len; i++) {
	            setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
	        }
	    }
	    else {
	        throw new TypeError('Invalid event target');
	    }
	    subscriber.add(unsubscribe);
	}
	function isNodeStyleEventEmitter(sourceObj) {
	    return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
	}
	function isJQueryStyleEventEmitter(sourceObj) {
	    return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
	}
	function isEventTarget(sourceObj) {
	    return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
	}

	/** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric PURE_IMPORTS_END */
	function interval(period, scheduler) {
	    if (period === void 0) {
	        period = 0;
	    }
	    if (scheduler === void 0) {
	        scheduler = async;
	    }
	    if (!isNumeric(period) || period < 0) {
	        period = 0;
	    }
	    if (!scheduler || typeof scheduler.schedule !== 'function') {
	        scheduler = async;
	    }
	    return new Observable(function (subscriber) {
	        subscriber.add(scheduler.schedule(dispatch$2, period, { subscriber: subscriber, counter: 0, period: period }));
	        return subscriber;
	    });
	}
	function dispatch$2(state) {
	    var subscriber = state.subscriber, counter = state.counter, period = state.period;
	    subscriber.next(counter);
	    this.schedule({ subscriber: subscriber, counter: counter + 1, period: period }, period);
	}

	var GTM_CAT$3 = 'faq';

	var FaqCtrl =
	/*#__PURE__*/
	function () {
	  function FaqCtrl($scope, $timeout, DomService, ApiService) {
	    var _this = this;

	    this.$scope = $scope;
	    this.$timeout = $timeout;
	    this.domService = DomService;
	    this.apiService = ApiService;
	    this.faqCategories = window.faqCategories || [];
	    this.faqCategories.forEach(function (x) {
	      if (!x.items) x.items = [];
	    }); // eliminare!
	    //this.faqCategories.forEach(x => x.items.forEach(i => Math.random() > 0.5 ? delete i.url : null));
	    //

	    this.filteredFaqCategories = this.faqCategories.slice();
	    this.flags = {};
	    this.unsubscribe = new Subject();
	    $scope.$watch('$viewContentLoaded', function () {
	      _this.search$().pipe(takeUntil(_this.unsubscribe)).subscribe(function (filteredFaqCategories) {
	        _this.$timeout(function () {
	          _this.filteredFaqCategories = [];

	          _this.$timeout(function () {
	            _this.filteredFaqCategories = filteredFaqCategories;
	          }, 50);
	        });
	      });
	    });
	    $scope.$on('destroy', function () {
	      // console.log('destroy');
	      _this.unsubscribe.next();

	      _this.unsubscribe.complete();
	    });
	  }

	  var _proto = FaqCtrl.prototype;

	  _proto.isOpen = function isOpen(id) {
	    return this.flags[id];
	  };

	  _proto.toggle = function toggle(id) {
	    var flag = !this.flags[id];
	    var node = document.querySelector("#faq--" + id + " > .group--content");

	    if (flag) {
	      TweenMax.set(node, {
	        opacity: 0,
	        maxHeight: 'none',
	        display: 'block'
	      });
	      var offsetHeight = node.offsetHeight + 20;
	      TweenMax.set(node, {
	        maxHeight: 0
	      });
	      TweenMax.to(node, 0.35, {
	        opacity: 1,
	        maxHeight: offsetHeight,
	        overwrite: 'all',
	        onComplete: function onComplete() {}
	      });
	    } else {
	      TweenMax.to(node, 0.35, {
	        opacity: 0,
	        maxHeight: 0,
	        overwrite: 'all',
	        onComplete: function onComplete() {
	          TweenMax.set(node, {
	            display: 'none'
	          });
	        }
	      });
	    }

	    this.flags[id] = flag;
	  };

	  _proto.navTo = function navTo(category, event) {
	    event.preventDefault();
	    event.stopImmediatePropagation();

	    if (!category.slug) {
	      throw 'Missing category slug';
	    }

	    var node = document.querySelector("#" + category.slug);
	    var top = this.domService.scrollTop + node.getBoundingClientRect().top - 100;
	    window.scroll({
	      top: top,
	      left: 0,
	      behavior: 'smooth'
	    });
	  };

	  _proto.search$ = function search$() {
	    var _this2 = this;

	    var node = document.querySelector('#faq-search');
	    return fromEvent(node, 'input').pipe(debounceTime(1000), map(function (event) {
	      return event.target.value.toLowerCase();
	    }), map(function (query) {
	      _this2.query = query;

	      _this2.faqCategories.forEach(function (x) {
	        return x.items.forEach(function (i) {
	          return i.opened = false;
	        });
	      });

	      if (query !== '') {
	        var fakeFilter = {
	          '': {
	            value: query,
	            options: [{
	              value: query,
	              key: query
	            }]
	          }
	        };
	        GtmService.pageViewFilters(GTM_CAT$3, fakeFilter);

	        var filteredFaqCategories = _this2.faqCategories.map(function (x) {
	          return Object.assign({}, x);
	        }).filter(function (category) {
	          var items = category.items.filter(function (item) {
	            var hasTitle = item.title.toLowerCase().indexOf(query) !== -1;
	            var hasAbstract = item.abstract.toLowerCase().indexOf(query) !== -1;
	            item.opened = hasAbstract;
	            _this2.flags[item.id] = item.opened;
	            return hasTitle || hasAbstract;
	          });

	          if (items.length) {
	            category.items = items;
	          } else if (category.title.toLowerCase().indexOf(query) !== -1) {
	            items = category.items;
	          }

	          return items.length;
	        }); // console.log('FaqCtrl.search$', query, filteredFaqCategories);

	        /*
	        const node = document.querySelector('.section--faq');
	        const top = node.getBoundingClientRect().top;
	        window.scrollTo(0, top);
	        */


	        return filteredFaqCategories;
	      } else {
	        _this2.flags = {};
	        return _this2.faqCategories.slice();
	      }
	    }), shareReplay());
	  };

	  return FaqCtrl;
	}();

	FaqCtrl.$inject = ['$scope', '$timeout', 'DomService', 'ApiService'];

	function ImageWithFeatures() {
	  return function (images, features) {
	    if (!images) {
	      return null;
	    }

	    if (!images.length) {
	      return null;
	    }

	    if (images.length === 1 || !features || features[0] === null) {
	      return images[0].url;
	    }

	    var image = images.find(function (image) {
	      var has = true;
	      features.forEach(function (f) {
	        return has = has && image.features.indexOf(f) !== -1;
	      });
	      return has;
	    });

	    if (image) {
	      return image.url;
	    } else {
	      return images[0].url;
	    }
	  };
	}

	function NotInFilter($filter) {
	  return function (array, filters, element) {
	    if (filters) {
	      return $filter('filter')(array, function (item) {
	        for (var i = 0; i < filters.length; i++) {
	          if (filters[i][element] === item[element]) return false;
	        }

	        return true;
	      });
	    }
	  };
	}

	function TrustedFilter($sce) {
	  return function (url) {
	    return $sce.trustAsResourceUrl(url);
	  };
	}

	var ControlMessagesDirective =
	/*#__PURE__*/
	function () {
	  function ControlMessagesDirective() {
	    this.restrict = 'E';
	    this.templateUrl = 'templates/forms/messages.html';
	    this.transclude = {
	      'message': '?messageItems'
	    };
	  }

	  var _proto = ControlMessagesDirective.prototype;

	  _proto.link = function link(scope, element, attributes, model) {};

	  ControlMessagesDirective.factory = function factory() {
	    return new ControlMessagesDirective();
	  };

	  return ControlMessagesDirective;
	}();
	ControlMessagesDirective.factory.$inject = [];

	var formatLabel = function formatLabel(string, prepend, expression) {
	  if (string === void 0) {
	    string = '';
	  }

	  if (prepend === void 0) {
	    prepend = '';
	  }

	  if (expression === void 0) {
	    expression = undefined;
	  }

	  var splitted = string.split(',');

	  if (splitted.length > 1) {
	    var formatted = splitted.shift();
	    splitted.forEach(function (value, index) {
	      if (expression) {
	        formatted = formatted.split('{' + index + '}').join('\' + ' + prepend + value + ' + \'');
	      } else {
	        formatted = formatted.split('{' + index + '}').join(prepend + value);
	      }
	    });

	    if (expression) {
	      return '\'' + formatted + '\'';
	    } else {
	      return formatted;
	    }
	  } else {
	    return prepend + string;
	  }
	};

	var uniqueId = 0;
	var errorElements = [],
	    to;

	var ControlDirective =
	/*#__PURE__*/
	function () {
	  function ControlDirective($parse, DomService) {
	    var _this = this;

	    this.$parse = $parse;
	    this.domService = DomService;
	    this.restrict = 'A';

	    this.templateUrl = function (element, attributes) {
	      var template = 'templates/forms/text.html';

	      switch (attributes.control) {
	        case 'checkbox':
	          template = 'templates/forms/checkbox.html';
	          break;

	        case 'password':
	          template = 'templates/forms/password.html';
	          break;

	        case 'select':
	          template = 'templates/forms/select.html';
	          break;

	        case 'textarea':
	          template = 'templates/forms/textarea.html';
	          break;
	      }

	      return template;
	    };

	    this.scope = {
	      ngModel: '=',
	      required: '=',
	      form: '@',
	      title: '@',
	      placeholder: '@',
	      source: '=?',
	      key: '@?',
	      label: '@?'
	    };
	    this.require = 'ngModel';
	    this.transclude = true;
	    this.link = {
	      pre: function pre(scope, element, attributes, controller, transclude) {
	        _this.linkMethod(scope, element, attributes, controller, transclude);
	      }
	    };
	  }

	  var _proto = ControlDirective.prototype;

	  _proto.linkMethod = function linkMethod(scope, element, attributes, controller, transclude) {
	    var _this2 = this;

	    var label = scope.label = scope.label ? scope.label : 'name';
	    var key = scope.key = scope.key ? scope.key : 'id';

	    if (attributes.control === 'select') {
	      var filter = attributes.filter ? '| ' + attributes.filter : '';
	      var optionLabel = formatLabel(label, 'item.', true);

	      scope.getOptions = function () {
	        return attributes.number ? 'item.' + key + ' as ' + optionLabel + ' disable when item.disabled for item in source ' + filter : optionLabel + ' disable when item.disabled for item in source ' + filter + ' track by item.' + key;
	      };
	    }

	    var type = scope.type = attributes.control;
	    var form = scope.form = scope.form || 'form';
	    var title = scope.title = scope.title || 'untitled';
	    var placeholder = scope.placeholder = scope.placeholder || title;
	    var field = scope.field = title.replace(/[^0-9a-zA-Z]/g, "").split(' ').join('') + ++uniqueId;
	    scope.format = attributes.format || null;
	    scope.precision = attributes.precision || null;
	    scope.validate = attributes.validate || attributes.control;
	    scope.minLength = attributes.minLength || 0;
	    scope.maxLength = attributes.maxLength || Number.POSITIVE_INFINITY;
	    scope.min = attributes.min || null;
	    scope.max = attributes.max || null;
	    scope.options = this.$parse(attributes.options)(scope) || {};
	    scope.focus = false;
	    scope.visible = false;

	    scope.onChange = function (model) {
	      // console.log('ControlDirective.onChange');
	      _this2.$parse(attributes.onChange)(scope.$parent);
	    };

	    scope.onFilter = function (model) {
	      _this2.$parse(attributes.onFilter)(scope.$parent);
	    };

	    scope.getType = function () {
	      var type = 'text';

	      switch (attributes.control) {
	        case 'password':
	          type = scope.visible ? 'text' : 'password';
	          break;

	        default:
	          type = attributes.control;
	      }

	      return type;
	    };

	    scope.onFocus = function () {
	      scope.focus = true; // console.log('ControlDirective.onFocus', scope.focus);
	    };

	    scope.onBlur = function () {
	      scope.focus = false; // console.log('ControlDirective.onBlur', scope.focus);

	      _this2.scrollToError();
	    };

	    scope.getClasses = function () {
	      var field = _this2.$parse(scope.form + '.' + scope.field)(scope.$parent);

	      if (field) {
	        var focus = scope.focus;
	        var success = field.$valid;

	        var _form = _this2.$parse(scope.form)(scope.$parent);

	        var error = field.$invalid && (_form.$submitted || field.$touched);
	        var empty = !field.$viewValue;

	        if (error) {
	          _this2.onError(element);

	          if (scope.error !== error) {
	            scope.error = error;

	            _this2.scrollToError();
	          }
	        } else {
	          scope.error = false;
	        }

	        return {
	          focus: focus,
	          success: success,
	          error: error,
	          empty: empty
	        };
	      }
	    };

	    scope.getMessages = function () {
	      var form = _this2.$parse(scope.form)(scope.$parent);

	      var field = _this2.$parse(scope.form + '.' + scope.field)(scope.$parent);

	      return (form.$submitted || field.$touched) && field.$error;
	    };

	    scope.toggleVisibility = function () {
	      scope.visible = !scope.visible;
	    };

	    scope.$on('onInvalid', function () {
	      _this2.scrollToError();
	    });
	  };

	  _proto.onError = function onError(element) {
	    if (errorElements.indexOf(element) === -1) {
	      errorElements.push(element);
	    }
	  };

	  _proto.scrollToError = function scrollToError() {
	    var _this3 = this;

	    if (errorElements.length) {
	      if (to) {
	        clearTimeout(to);
	      }

	      to = setTimeout(function () {
	        var top = errorElements.reduce(function (previous, current, index, array) {
	          var node = current[0];
	          return Math.min(previous, node.getBoundingClientRect().top);
	        }, Number.POSITIVE_INFINITY);
	        window.scroll({
	          top: _this3.domService.scrollTop + top - 100,
	          left: 0,
	          behavior: 'smooth'
	        });
	        errorElements = [];
	      }, 100);
	    }
	  };

	  _proto.link = function link(scope, element, attributes, controller) {};

	  ControlDirective.factory = function factory($parse, DomService) {
	    return new ControlDirective($parse, DomService);
	  };

	  return ControlDirective;
	}();
	ControlDirective.factory.$inject = ['$parse', 'DomService'];

	var ValidateDirective =
	/*#__PURE__*/
	function () {
	  function ValidateDirective($filter) {
	    this.$filter = $filter;
	    this.require = 'ngModel';
	  }

	  var _proto = ValidateDirective.prototype;

	  _proto.link = function link(scope, element, attributes, model) {
	    var type = attributes.validate;
	    var format = attributes.format || '';
	    var precision = attributes.precision || 2;

	    switch (type) {
	      case 'date':
	      case 'datetime':
	      case 'datetime-local':
	        model.$formatters.push(function (value) {
	          if (value) {
	            return $filter('date')(value, format);
	          } else {
	            return null;
	          }
	        });
	        break;

	      case 'number':
	        model.$parsers.unshift(function (value) {
	          var valid = false;

	          if (value !== undefined && value !== "") {
	            valid = String(value).indexOf(Number(value).toString()) !== -1; // isFinite(value); //

	            value = Number(value);
	            model.$setValidity('number', valid);

	            if (valid) {
	              model.$setValidity('positive', value >= 0.01);

	              if (attributes.min !== undefined) {
	                model.$setValidity('range', value >= Number(attributes.min));
	              }

	              if (attributes.max !== undefined) {
	                model.$setValidity('range', value <= Number(attributes.max));
	              }
	            }
	          } else {
	            valid = true;
	            value = Number(value);
	            model.$setValidity('number', true);
	            model.$setValidity('positive', true);

	            if (attributes.min !== undefined) {
	              model.$setValidity('range', true);
	            }

	            if (attributes.max !== undefined) {
	              model.$setValidity('range', true);
	            }
	          }

	          return value;
	        });
	        model.$formatters.push(function (value) {
	          if (value) {
	            return $filter('number')(value, precision) + ' ' + format;
	          } else {
	            return null;
	          }
	        });
	        break;

	      case 'anynumber':
	        model.$parsers.unshift(function (value) {
	          var valid = false;

	          if (value !== undefined && value !== "") {
	            valid = String(value).indexOf(Number(value).toString()) !== -1; // isFinite(value); //

	            value = Number(value);
	            model.$setValidity('number', valid);

	            if (valid) {
	              if (attributes.min !== undefined) {
	                model.$setValidity('range', value >= Number(attributes.min));
	              }

	              if (attributes.max !== undefined) {
	                model.$setValidity('range', value <= Number(attributes.max));
	              }
	            }
	          } else {
	            valid = true;
	            value = Number(value);
	            model.$setValidity('number', true);

	            if (attributes.min !== undefined) {
	              model.$setValidity('range', true);
	            }

	            if (attributes.max !== undefined) {
	              model.$setValidity('range', true);
	            }
	          }

	          return value;
	        });
	        model.$formatters.push(function (value) {
	          if (value || value === 0) {
	            return $filter('number')(value, precision) + ' ' + format;
	          } else {
	            return null;
	          }
	        });
	        break;
	    }

	    var onFocus = function onFocus() {

	      if (format) {
	        element[0].value = model.$modelValue || null;

	        if (!model.$modelValue) {
	          model.$setViewValue(null);
	        }
	      }
	    };

	    var doBlur = function doBlur() {
	      if (format && !model.$invalid) {
	        switch (type) {
	          case 'date':
	          case 'datetime':
	          case 'datetime-local':
	            element[0].value = model.$modelValue ? $filter('date')(model.$modelValue, format) : ' ';
	            break;

	          default:
	            element[0].value = model.$modelValue ? $filter('number')(model.$modelValue, precision) + ' ' + format : ' ';
	            break;
	        }
	      }
	    };

	    var onBlur = function onBlur() {
	      doBlur();
	    };

	    var addListeners = function addListeners() {
	      element.on('focus', onFocus);
	      element.on('blur', onBlur);
	    };

	    var removeListeners = function removeListeners() {
	      element.off('focus', onFocus);
	      element.off('blur', onBlur);
	    };

	    scope.$on('$destroy', function () {
	      removeListeners();
	    });
	    addListeners();
	  };

	  ValidateDirective.factory = function factory($filter) {
	    return new ValidateDirective($filter);
	  };

	  return ValidateDirective;
	}();
	ValidateDirective.factory.$inject = ['$filter'];

	var ITEMS_PER_PAGE$1 = 9;
	var GTM_CAT$4 = 'gallerie';

	var GalleriesCtrl =
	/*#__PURE__*/
	function () {
	  function GalleriesCtrl($scope, $timeout, LocationService) {
	    this.$scope = $scope;
	    this.$timeout = $timeout;
	    this.locationService = LocationService;
	    this.filters = window.filters || {};
	    this.galleries = window.galleries || [];
	    this.initialFilters = window.initialFilters || null;
	    this.filteredItems = []; // !!! FAKE
	    //if (this.galleries.length > 0) {
	    //	while (this.galleries.length < 100) {
	    //		this.galleries = this.galleries.concat(this.galleries);
	    //	}
	    //}
	    // !!! FAKE

	    this.deserializeFilters(this.initialFilters);
	    this.applyFilters(false);
	  }

	  var _proto = GalleriesCtrl.prototype;

	  _proto.deserializeFilters = function deserializeFilters(initialFilter) {
	    var _this = this;

	    var locationFilters = this.locationService.deserialize('filters') || initialFilter || {};
	    Object.keys(this.filters).forEach(function (x) {
	      var filter = _this.filters[x];

	      switch (x) {
	        case 'collections':
	          // probabilmente verrà aggiunto
	          filter.doFilter = function (item, value) {
	            return item.id === value;
	          };

	          break;

	        default:
	          filter.doFilter = function (item, value) {
	            return item.features.indexOf(value) !== -1;
	          };

	      }

	      filter.options.unshift({
	        label: filter.placeholder,
	        value: null
	      });
	      var selectedOption = filter.options.find(function (o) {
	        return Boolean(o.value === (locationFilters[x] || null));
	      });
	      filter.value = selectedOption.value;
	      filter.placeholder = selectedOption.label;
	    });
	    return filters;
	  };

	  _proto.serializeFilters = function serializeFilters() {
	    var _this2 = this;

	    var filters = {};
	    var any = false;
	    Object.keys(this.filters).forEach(function (x) {
	      var filter = _this2.filters[x];

	      if (filter.value !== null) {
	        filters[x] = filter.value;
	        any = true;
	      }
	    });

	    if (!any) {
	      filters = this.initialFilters ? {} : null;
	    } // console.log('ReferenceCtrl.serializeFilters', filters);


	    this.locationService.serialize('filters', filters);
	    return filters;
	  };

	  _proto.applyFilters = function applyFilters(serialize) {
	    var _this3 = this;

	    if (serialize !== false) this.serializeFilters();

	    var _this$getFilteredItem = this.getFilteredItems(this.galleries),
	        filteredItems = _this$getFilteredItem.filteredItems;

	    this.filteredItems = [];
	    this.visibleItems = [];
	    this.maxItems = ITEMS_PER_PAGE$1;
	    this.$timeout(function () {
	      _this3.filteredItems = filteredItems;
	      _this3.visibleItems = filteredItems.slice(0, _this3.maxItems);

	      _this3.updateFilterStates(_this3.galleries); // delayer for image update

	    }, 50);
	    GtmService.pageViewFilters(GTM_CAT$4, this.filters);
	  };

	  _proto.getFilteredItems = function getFilteredItems(items, skipFilter) {
	    var _this4 = this;

	    var filters = Object.keys(this.filters).map(function (x) {
	      return _this4.filters[x];
	    }).filter(function (x) {
	      return x.value !== null;
	    });
	    var filteredItems = items.slice();

	    if (filters.length) {
	      filteredItems = filteredItems.filter(function (item) {
	        var has = true;
	        filters.forEach(function (filter) {
	          if (filter !== skipFilter) {
	            has = has && filter.doFilter(item, filter.value);
	          }
	        });
	        return has;
	      });
	    }

	    return {
	      filteredItems: filteredItems
	    };
	  };

	  _proto.updateFilterStates = function updateFilterStates(items) {
	    var _this5 = this;

	    Object.keys(this.filters).forEach(function (x) {
	      var filter = _this5.filters[x];

	      var _this5$getFilteredIte = _this5.getFilteredItems(items, filter),
	          filteredItems = _this5$getFilteredIte.filteredItems;

	      filter.options.forEach(function (option) {
	        var has = false;

	        if (option.value) {
	          var i = 0;

	          while (i < filteredItems.length && !has) {
	            var item = filteredItems[i];
	            has = filter.doFilter(item, option.value);
	            i++;
	          }
	        } else {
	          has = true;
	        }

	        option.disabled = !has;
	      });
	    });
	  };

	  _proto.setFilter = function setFilter(item, filter) {
	    item = item || filter.options[0];
	    filter.value = item.value;
	    filter.placeholder = item.label;
	    this.applyFilters();
	    this.$scope.$broadcast('onCloseDropdown');
	  };

	  _proto.removeFilter = function removeFilter(filter) {
	    this.setFilter(null, filter);
	  };

	  _proto.onScroll = function onScroll(event) {
	    var _this6 = this;

	    if (event.rect.bottom < event.windowRect.bottom) {
	      // console.log('more!');
	      if (!this.busy && this.maxItems < this.filteredItems.length) {
	        this.$timeout(function () {
	          _this6.busy = true;

	          _this6.$timeout(function () {
	            _this6.maxItems += ITEMS_PER_PAGE$1;
	            _this6.visibleItems = _this6.filteredItems.slice(0, _this6.maxItems);
	            _this6.busy = false; // console.log(this.visibleItems.length);
	          }, 1000);
	        }, 0);
	      }
	    }
	  };

	  return GalleriesCtrl;
	}();

	GalleriesCtrl.$inject = ['$scope', '$timeout', 'LocationService'];

	var GtmCollectionDirective =
	/*#__PURE__*/
	function () {
	  function GtmCollectionDirective() {
	    this.restrict = 'A';
	    this.scope = {
	      item: '=gtmCollection'
	    };
	  }

	  var _proto = GtmCollectionDirective.prototype;

	  _proto.link = function link(scope, element, attributes, controller) {
	    var node = element[0];

	    var onClick = function onClick() {
	      var actionField = {
	        list: scope.item.list
	      };
	      var product = Object.assign({}, scope.item);
	      delete product.list;
	      GtmService.push({
	        event: 'collectionClick',
	        ecommerce: {
	          click: {
	            actionField: actionField,
	            products: [product]
	          }
	        }
	      });
	    };

	    node.addEventListener('click', onClick);
	    scope.$on('$destroy', function () {
	      return node.removeEventListener('click', onClick);
	    });
	  };

	  GtmCollectionDirective.factory = function factory() {
	    return new GtmCollectionDirective();
	  };

	  return GtmCollectionDirective;
	}();
	GtmCollectionDirective.factory.$inject = [];

	var gtmDealerLocatorDirective =
	/*#__PURE__*/
	function () {
	  function gtmDealerLocatorDirective() {
	    this.restrict = 'A';
	    this.scope = {
	      label: '=gtmDealerLocator'
	    };
	  }

	  var _proto = gtmDealerLocatorDirective.prototype;

	  _proto.link = function link(scope, element, attributes, controller) {
	    var node = element[0];

	    var onClick = function onClick() {
	      GtmService.push({
	        event: 'dealerlocator',
	        action: 'sidebar-click',
	        label: scope.label
	      });
	    };

	    node.addEventListener('click', onClick);
	    scope.$on('$destroy', function () {
	      return node.removeEventListener('click', onClick);
	    });
	  };

	  gtmDealerLocatorDirective.factory = function factory() {
	    return new gtmDealerLocatorDirective();
	  };

	  return gtmDealerLocatorDirective;
	}();
	gtmDealerLocatorDirective.factory.$inject = [];

	var GtmFormDirective =
	/*#__PURE__*/
	function () {
	  function GtmFormDirective() {
	    this.restrict = 'A';
	  }

	  var _proto = GtmFormDirective.prototype;

	  _proto.link = function link(scope, element, attributes, controller) {
	    var form_name = attributes["gtmFormName"];

	    if (form_name) {
	      scope.$root.$on('formsubmit', function () {
	        var obj = {
	          event: 'formsubmit',
	          form_name: form_name
	        }; // Task ID 34904 problema tracciamento form

	        if (scope.c && scope.c.data && scope.c.model) {
	          var elem;

	          try {
	            if (scope.c.model.contactType) {
	              elem = scope.c.data.contactTypes.filter(function (_) {
	                return scope.c.model.contactType === _.id;
	              });
	              if (elem.length) obj.contactType = elem[0].key;
	            }
	          } catch (e) {}

	          try {
	            if (scope.c.model.contactReason) {
	              elem = scope.c.data.contactReasons.filter(function (_) {
	                return scope.c.model.contactReason === _.id;
	              });
	              if (elem.length) obj.contactReason = elem[0].key;
	            }
	          } catch (e) {}

	          try {
	            if (scope.c.model.qualification) {
	              elem = scope.c.data.qualification.filter(function (_) {
	                return scope.c.model.qualification === _.id;
	              });
	              if (elem.length) obj.qualifica = elem[0].key;
	            }
	          } catch (e) {}
	        }

	        GtmService.push(obj);
	      });
	    }
	  };

	  GtmFormDirective.factory = function factory() {
	    return new GtmFormDirective();
	  };

	  return GtmFormDirective;
	}();
	GtmFormDirective.factory.$inject = [];

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var highway = createCommonjsModule(function (module, exports) {
	(function webpackUniversalModuleDefinition(root, factory) {
		module.exports = factory();
	})(window, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId]) {
	/******/ 			return installedModules[moduleId].exports;
	/******/ 		}
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			i: moduleId,
	/******/ 			l: false,
	/******/ 			exports: {}
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.l = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// define getter function for harmony exports
	/******/ 	__webpack_require__.d = function(exports, name, getter) {
	/******/ 		if(!__webpack_require__.o(exports, name)) {
	/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
	/******/ 		}
	/******/ 	};
	/******/
	/******/ 	// define __esModule on exports
	/******/ 	__webpack_require__.r = function(exports) {
	/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
	/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	/******/ 		}
	/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
	/******/ 	};
	/******/
	/******/ 	// create a fake namespace object
	/******/ 	// mode & 1: value is a module id, require it
	/******/ 	// mode & 2: merge all properties of value into the ns
	/******/ 	// mode & 4: return value when already ns object
	/******/ 	// mode & 8|1: behave like require
	/******/ 	__webpack_require__.t = function(value, mode) {
	/******/ 		if(mode & 1) value = __webpack_require__(value);
	/******/ 		if(mode & 8) return value;
	/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
	/******/ 		var ns = Object.create(null);
	/******/ 		__webpack_require__.r(ns);
	/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
	/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
	/******/ 		return ns;
	/******/ 	};
	/******/
	/******/ 	// getDefaultExport function for compatibility with non-harmony modules
	/******/ 	__webpack_require__.n = function(module) {
	/******/ 		var getter = module && module.__esModule ?
	/******/ 			function getDefault() { return module['default']; } :
	/******/ 			function getModuleExports() { return module; };
	/******/ 		__webpack_require__.d(getter, 'a', getter);
	/******/ 		return getter;
	/******/ 	};
	/******/
	/******/ 	// Object.prototype.hasOwnProperty.call
	/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(__webpack_require__.s = 123);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var O = 'object';
	var check = function (it) {
	  return it && it.Math == Math && it;
	};

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	module.exports =
	  // eslint-disable-next-line no-undef
	  check(typeof globalThis == O && globalThis) ||
	  check(typeof window == O && window) ||
	  check(typeof self == O && self) ||
	  check(typeof global == O && global) ||
	  // eslint-disable-next-line no-new-func
	  Function('return this')();

	/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(81)));

	/***/ }),
	/* 1 */
	/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(0);
	var shared = __webpack_require__(16);
	var uid = __webpack_require__(25);
	var NATIVE_SYMBOL = __webpack_require__(58);

	var Symbol = global.Symbol;
	var store = shared('wks');

	module.exports = function (name) {
	  return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name]
	    || (NATIVE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};


	/***/ }),
	/* 2 */
	/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};


	/***/ }),
	/* 3 */
	/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(4);

	module.exports = function (it) {
	  if (!isObject(it)) {
	    throw TypeError(String(it) + ' is not an object');
	  } return it;
	};


	/***/ }),
	/* 4 */
	/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


	/***/ }),
	/* 5 */
	/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;

	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


	/***/ }),
	/* 6 */
	/***/ (function(module, exports, __webpack_require__) {

	var DESCRIPTORS = __webpack_require__(7);
	var IE8_DOM_DEFINE = __webpack_require__(53);
	var anObject = __webpack_require__(3);
	var toPrimitive = __webpack_require__(35);

	var nativeDefineProperty = Object.defineProperty;

	// `Object.defineProperty` method
	// https://tc39.github.io/ecma262/#sec-object.defineproperty
	exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return nativeDefineProperty(O, P, Attributes);
	  } catch (error) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


	/***/ }),
	/* 7 */
	/***/ (function(module, exports, __webpack_require__) {

	var fails = __webpack_require__(2);

	// Thank's IE8 for his funny defineProperty
	module.exports = !fails(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


	/***/ }),
	/* 8 */
	/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(0);
	var getOwnPropertyDescriptor = __webpack_require__(22).f;
	var hide = __webpack_require__(9);
	var redefine = __webpack_require__(10);
	var setGlobal = __webpack_require__(37);
	var copyConstructorProperties = __webpack_require__(55);
	var isForced = __webpack_require__(41);

	/*
	  options.target      - name of the target object
	  options.global      - target is the global object
	  options.stat        - export as static methods of target
	  options.proto       - export as prototype methods of target
	  options.real        - real prototype method for the `pure` version
	  options.forced      - export even if the native feature is available
	  options.bind        - bind methods to the target, required for the `pure` version
	  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
	  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
	  options.sham        - add a flag to not completely full polyfills
	  options.enumerable  - export as enumerable property
	  options.noTargetGet - prevent calling a getter on target
	*/
	module.exports = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
	  if (GLOBAL) {
	    target = global;
	  } else if (STATIC) {
	    target = global[TARGET] || setGlobal(TARGET, {});
	  } else {
	    target = (global[TARGET] || {}).prototype;
	  }
	  if (target) for (key in source) {
	    sourceProperty = source[key];
	    if (options.noTargetGet) {
	      descriptor = getOwnPropertyDescriptor(target, key);
	      targetProperty = descriptor && descriptor.value;
	    } else targetProperty = target[key];
	    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    // contained in target
	    if (!FORCED && targetProperty !== undefined) {
	      if (typeof sourceProperty === typeof targetProperty) continue;
	      copyConstructorProperties(sourceProperty, targetProperty);
	    }
	    // add a flag to not completely full polyfills
	    if (options.sham || (targetProperty && targetProperty.sham)) {
	      hide(sourceProperty, 'sham', true);
	    }
	    // extend global
	    redefine(target, key, sourceProperty, options);
	  }
	};


	/***/ }),
	/* 9 */
	/***/ (function(module, exports, __webpack_require__) {

	var DESCRIPTORS = __webpack_require__(7);
	var definePropertyModule = __webpack_require__(6);
	var createPropertyDescriptor = __webpack_require__(23);

	module.exports = DESCRIPTORS ? function (object, key, value) {
	  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


	/***/ }),
	/* 10 */
	/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(0);
	var shared = __webpack_require__(16);
	var hide = __webpack_require__(9);
	var has = __webpack_require__(5);
	var setGlobal = __webpack_require__(37);
	var nativeFunctionToString = __webpack_require__(54);
	var InternalStateModule = __webpack_require__(14);

	var getInternalState = InternalStateModule.get;
	var enforceInternalState = InternalStateModule.enforce;
	var TEMPLATE = String(nativeFunctionToString).split('toString');

	shared('inspectSource', function (it) {
	  return nativeFunctionToString.call(it);
	});

	(module.exports = function (O, key, value, options) {
	  var unsafe = options ? !!options.unsafe : false;
	  var simple = options ? !!options.enumerable : false;
	  var noTargetGet = options ? !!options.noTargetGet : false;
	  if (typeof value == 'function') {
	    if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);
	    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
	  }
	  if (O === global) {
	    if (simple) O[key] = value;
	    else setGlobal(key, value);
	    return;
	  } else if (!unsafe) {
	    delete O[key];
	  } else if (!noTargetGet && O[key]) {
	    simple = true;
	  }
	  if (simple) O[key] = value;
	  else hide(O, key, value);
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, 'toString', function toString() {
	  return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);
	});


	/***/ }),
	/* 11 */
	/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


	/***/ }),
	/* 12 */
	/***/ (function(module, exports) {

	// `RequireObjectCoercible` abstract operation
	// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on " + it);
	  return it;
	};


	/***/ }),
	/* 13 */
	/***/ (function(module, exports, __webpack_require__) {

	// toObject with fallback for non-array-like ES3 strings
	var IndexedObject = __webpack_require__(52);
	var requireObjectCoercible = __webpack_require__(12);

	module.exports = function (it) {
	  return IndexedObject(requireObjectCoercible(it));
	};


	/***/ }),
	/* 14 */
	/***/ (function(module, exports, __webpack_require__) {

	var NATIVE_WEAK_MAP = __webpack_require__(82);
	var global = __webpack_require__(0);
	var isObject = __webpack_require__(4);
	var hide = __webpack_require__(9);
	var objectHas = __webpack_require__(5);
	var sharedKey = __webpack_require__(24);
	var hiddenKeys = __webpack_require__(18);

	var WeakMap = global.WeakMap;
	var set, get, has;

	var enforce = function (it) {
	  return has(it) ? get(it) : set(it, {});
	};

	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject(it) || (state = get(it)).type !== TYPE) {
	      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
	    } return state;
	  };
	};

	if (NATIVE_WEAK_MAP) {
	  var store = new WeakMap();
	  var wmget = store.get;
	  var wmhas = store.has;
	  var wmset = store.set;
	  set = function (it, metadata) {
	    wmset.call(store, it, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return wmget.call(store, it) || {};
	  };
	  has = function (it) {
	    return wmhas.call(store, it);
	  };
	} else {
	  var STATE = sharedKey('state');
	  hiddenKeys[STATE] = true;
	  set = function (it, metadata) {
	    hide(it, STATE, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return objectHas(it, STATE) ? it[STATE] : {};
	  };
	  has = function (it) {
	    return objectHas(it, STATE);
	  };
	}

	module.exports = {
	  set: set,
	  get: get,
	  has: has,
	  enforce: enforce,
	  getterFor: getterFor
	};


	/***/ }),
	/* 15 */
	/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(27);

	var min = Math.min;

	// `ToLength` abstract operation
	// https://tc39.github.io/ecma262/#sec-tolength
	module.exports = function (argument) {
	  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};


	/***/ }),
	/* 16 */
	/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(0);
	var setGlobal = __webpack_require__(37);
	var IS_PURE = __webpack_require__(17);

	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || setGlobal(SHARED, {});

	(module.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.1.3',
	  mode: IS_PURE ? 'pure' : 'global',
	  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
	});


	/***/ }),
	/* 17 */
	/***/ (function(module, exports) {

	module.exports = false;


	/***/ }),
	/* 18 */
	/***/ (function(module, exports) {

	module.exports = {};


	/***/ }),
	/* 19 */
	/***/ (function(module, exports, __webpack_require__) {

	var requireObjectCoercible = __webpack_require__(12);

	// `ToObject` abstract operation
	// https://tc39.github.io/ecma262/#sec-toobject
	module.exports = function (argument) {
	  return Object(requireObjectCoercible(argument));
	};


	/***/ }),
	/* 20 */
	/***/ (function(module, exports, __webpack_require__) {

	var defineProperty = __webpack_require__(6).f;
	var has = __webpack_require__(5);
	var wellKnownSymbol = __webpack_require__(1);

	var TO_STRING_TAG = wellKnownSymbol('toStringTag');

	module.exports = function (it, TAG, STATIC) {
	  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
	    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
	  }
	};


	/***/ }),
	/* 21 */
	/***/ (function(module, exports) {

	module.exports = {};


	/***/ }),
	/* 22 */
	/***/ (function(module, exports, __webpack_require__) {

	var DESCRIPTORS = __webpack_require__(7);
	var propertyIsEnumerableModule = __webpack_require__(51);
	var createPropertyDescriptor = __webpack_require__(23);
	var toIndexedObject = __webpack_require__(13);
	var toPrimitive = __webpack_require__(35);
	var has = __webpack_require__(5);
	var IE8_DOM_DEFINE = __webpack_require__(53);

	var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
	exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return nativeGetOwnPropertyDescriptor(O, P);
	  } catch (error) { /* empty */ }
	  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
	};


	/***/ }),
	/* 23 */
	/***/ (function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


	/***/ }),
	/* 24 */
	/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(16);
	var uid = __webpack_require__(25);

	var keys = shared('keys');

	module.exports = function (key) {
	  return keys[key] || (keys[key] = uid(key));
	};


	/***/ }),
	/* 25 */
	/***/ (function(module, exports) {

	var id = 0;
	var postfix = Math.random();

	module.exports = function (key) {
	  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
	};


	/***/ }),
	/* 26 */
	/***/ (function(module, exports, __webpack_require__) {

	var path = __webpack_require__(38);
	var global = __webpack_require__(0);

	var aFunction = function (variable) {
	  return typeof variable == 'function' ? variable : undefined;
	};

	module.exports = function (namespace, method) {
	  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
	    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
	};


	/***/ }),
	/* 27 */
	/***/ (function(module, exports) {

	var ceil = Math.ceil;
	var floor = Math.floor;

	// `ToInteger` abstract operation
	// https://tc39.github.io/ecma262/#sec-tointeger
	module.exports = function (argument) {
	  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
	};


	/***/ }),
	/* 28 */
	/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(3);
	var defineProperties = __webpack_require__(86);
	var enumBugKeys = __webpack_require__(40);
	var hiddenKeys = __webpack_require__(18);
	var html = __webpack_require__(61);
	var documentCreateElement = __webpack_require__(36);
	var sharedKey = __webpack_require__(24);
	var IE_PROTO = sharedKey('IE_PROTO');

	var PROTOTYPE = 'prototype';
	var Empty = function () { /* empty */ };

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = documentCreateElement('iframe');
	  var length = enumBugKeys.length;
	  var lt = '<';
	  var script = 'script';
	  var gt = '>';
	  var js = 'java' + script + ':';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe);
	  iframe.src = String(js);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
	  return createDict();
	};

	// `Object.create` method
	// https://tc39.github.io/ecma262/#sec-object.create
	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : defineProperties(result, Properties);
	};

	hiddenKeys[IE_PROTO] = true;


	/***/ }),
	/* 29 */
	/***/ (function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(30);

	// optional / simple context binding
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 0: return function () {
	      return fn.call(that);
	    };
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


	/***/ }),
	/* 30 */
	/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') {
	    throw TypeError(String(it) + ' is not a function');
	  } return it;
	};


	/***/ }),
	/* 31 */
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(8);
	var DESCRIPTORS = __webpack_require__(7);
	var objectDefinePropertyModile = __webpack_require__(6);

	// `Object.defineProperty` method
	// https://tc39.github.io/ecma262/#sec-object.defineproperty
	$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
	  defineProperty: objectDefinePropertyModile.f
	});


	/***/ }),
	/* 32 */
	/***/ (function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(10);
	var toString = __webpack_require__(106);

	var ObjectPrototype = Object.prototype;

	// `Object.prototype.toString` method
	// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
	if (toString !== ObjectPrototype.toString) {
	  redefine(ObjectPrototype, 'toString', toString, { unsafe: true });
	}


	/***/ }),
	/* 33 */
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(8);
	var IS_PURE = __webpack_require__(17);
	var global = __webpack_require__(0);
	var path = __webpack_require__(38);
	var redefineAll = __webpack_require__(70);
	var setToStringTag = __webpack_require__(20);
	var setSpecies = __webpack_require__(71);
	var isObject = __webpack_require__(4);
	var aFunction = __webpack_require__(30);
	var anInstance = __webpack_require__(47);
	var classof = __webpack_require__(11);
	var iterate = __webpack_require__(46);
	var checkCorrectnessOfIteration = __webpack_require__(69);
	var speciesConstructor = __webpack_require__(72);
	var task = __webpack_require__(73).set;
	var microtask = __webpack_require__(107);
	var promiseResolve = __webpack_require__(108);
	var hostReportErrors = __webpack_require__(109);
	var newPromiseCapabilityModule = __webpack_require__(75);
	var perform = __webpack_require__(110);
	var userAgent = __webpack_require__(74);
	var InternalStateModule = __webpack_require__(14);
	var isForced = __webpack_require__(41);
	var wellKnownSymbol = __webpack_require__(1);

	var SPECIES = wellKnownSymbol('species');
	var PROMISE = 'Promise';
	var getInternalState = InternalStateModule.get;
	var setInternalState = InternalStateModule.set;
	var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
	var PromiseConstructor = global[PROMISE];
	var TypeError = global.TypeError;
	var document = global.document;
	var process = global.process;
	var $fetch = global.fetch;
	var versions = process && process.versions;
	var v8 = versions && versions.v8 || '';
	var newPromiseCapability = newPromiseCapabilityModule.f;
	var newGenericPromiseCapability = newPromiseCapability;
	var IS_NODE = classof(process) == 'process';
	var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
	var UNHANDLED_REJECTION = 'unhandledrejection';
	var REJECTION_HANDLED = 'rejectionhandled';
	var PENDING = 0;
	var FULFILLED = 1;
	var REJECTED = 2;
	var HANDLED = 1;
	var UNHANDLED = 2;
	var Internal, OwnPromiseCapability, PromiseWrapper;

	var FORCED = isForced(PROMISE, function () {
	  // correct subclassing with @@species support
	  var promise = PromiseConstructor.resolve(1);
	  var empty = function () { /* empty */ };
	  var FakePromise = (promise.constructor = {})[SPECIES] = function (exec) {
	    exec(empty, empty);
	  };
	  // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	  return !((IS_NODE || typeof PromiseRejectionEvent == 'function')
	    && (!IS_PURE || promise['finally'])
	    && promise.then(empty) instanceof FakePromise
	    // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
	    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
	    // we can't detect it synchronously, so just check versions
	    && v8.indexOf('6.6') !== 0
	    && userAgent.indexOf('Chrome/66') === -1);
	});

	var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
	  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
	});

	// helpers
	var isThenable = function (it) {
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};

	var notify = function (promise, state, isReject) {
	  if (state.notified) return;
	  state.notified = true;
	  var chain = state.reactions;
	  microtask(function () {
	    var value = state.value;
	    var ok = state.state == FULFILLED;
	    var index = 0;
	    // variable length - can't use forEach
	    while (chain.length > index) {
	      var reaction = chain[index++];
	      var handler = ok ? reaction.ok : reaction.fail;
	      var resolve = reaction.resolve;
	      var reject = reaction.reject;
	      var domain = reaction.domain;
	      var result, then, exited;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
	            state.rejection = HANDLED;
	          }
	          if (handler === true) result = value;
	          else {
	            if (domain) domain.enter();
	            result = handler(value); // can throw
	            if (domain) {
	              domain.exit();
	              exited = true;
	            }
	          }
	          if (result === reaction.promise) {
	            reject(TypeError('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (error) {
	        if (domain && !exited) domain.exit();
	        reject(error);
	      }
	    }
	    state.reactions = [];
	    state.notified = false;
	    if (isReject && !state.rejection) onUnhandled(promise, state);
	  });
	};

	var dispatchEvent = function (name, promise, reason) {
	  var event, handler;
	  if (DISPATCH_EVENT) {
	    event = document.createEvent('Event');
	    event.promise = promise;
	    event.reason = reason;
	    event.initEvent(name, false, true);
	    global.dispatchEvent(event);
	  } else event = { promise: promise, reason: reason };
	  if (handler = global['on' + name]) handler(event);
	  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
	};

	var onUnhandled = function (promise, state) {
	  task.call(global, function () {
	    var value = state.value;
	    var IS_UNHANDLED = isUnhandled(state);
	    var result;
	    if (IS_UNHANDLED) {
	      result = perform(function () {
	        if (IS_NODE) {
	          process.emit('unhandledRejection', value, promise);
	        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
	      if (result.error) throw result.value;
	    }
	  });
	};

	var isUnhandled = function (state) {
	  return state.rejection !== HANDLED && !state.parent;
	};

	var onHandleUnhandled = function (promise, state) {
	  task.call(global, function () {
	    if (IS_NODE) {
	      process.emit('rejectionHandled', promise);
	    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
	  });
	};

	var bind = function (fn, promise, state, unwrap) {
	  return function (value) {
	    fn(promise, state, value, unwrap);
	  };
	};

	var internalReject = function (promise, state, value, unwrap) {
	  if (state.done) return;
	  state.done = true;
	  if (unwrap) state = unwrap;
	  state.value = value;
	  state.state = REJECTED;
	  notify(promise, state, true);
	};

	var internalResolve = function (promise, state, value, unwrap) {
	  if (state.done) return;
	  state.done = true;
	  if (unwrap) state = unwrap;
	  try {
	    if (promise === value) throw TypeError("Promise can't be resolved itself");
	    var then = isThenable(value);
	    if (then) {
	      microtask(function () {
	        var wrapper = { done: false };
	        try {
	          then.call(value,
	            bind(internalResolve, promise, wrapper, state),
	            bind(internalReject, promise, wrapper, state)
	          );
	        } catch (error) {
	          internalReject(promise, wrapper, error, state);
	        }
	      });
	    } else {
	      state.value = value;
	      state.state = FULFILLED;
	      notify(promise, state, false);
	    }
	  } catch (error) {
	    internalReject(promise, { done: false }, error, state);
	  }
	};

	// constructor polyfill
	if (FORCED) {
	  // 25.4.3.1 Promise(executor)
	  PromiseConstructor = function Promise(executor) {
	    anInstance(this, PromiseConstructor, PROMISE);
	    aFunction(executor);
	    Internal.call(this);
	    var state = getInternalState(this);
	    try {
	      executor(bind(internalResolve, this, state), bind(internalReject, this, state));
	    } catch (error) {
	      internalReject(this, state, error);
	    }
	  };
	  // eslint-disable-next-line no-unused-vars
	  Internal = function Promise(executor) {
	    setInternalState(this, {
	      type: PROMISE,
	      done: false,
	      notified: false,
	      parent: false,
	      reactions: [],
	      rejection: false,
	      state: PENDING,
	      value: undefined
	    });
	  };
	  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
	    // `Promise.prototype.then` method
	    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
	    then: function then(onFulfilled, onRejected) {
	      var state = getInternalPromiseState(this);
	      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = IS_NODE ? process.domain : undefined;
	      state.parent = true;
	      state.reactions.push(reaction);
	      if (state.state != PENDING) notify(this, state, false);
	      return reaction.promise;
	    },
	    // `Promise.prototype.catch` method
	    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
	    'catch': function (onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  OwnPromiseCapability = function () {
	    var promise = new Internal();
	    var state = getInternalState(promise);
	    this.promise = promise;
	    this.resolve = bind(internalResolve, promise, state);
	    this.reject = bind(internalReject, promise, state);
	  };
	  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
	    return C === PromiseConstructor || C === PromiseWrapper
	      ? new OwnPromiseCapability(C)
	      : newGenericPromiseCapability(C);
	  };

	  // wrap fetch result
	  if (!IS_PURE && typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
	    // eslint-disable-next-line no-unused-vars
	    fetch: function fetch(input) {
	      return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
	    }
	  });
	}

	$({ global: true, wrap: true, forced: FORCED }, {
	  Promise: PromiseConstructor
	});

	setToStringTag(PromiseConstructor, PROMISE, false, true);
	setSpecies(PROMISE);

	PromiseWrapper = path[PROMISE];

	// statics
	$({ target: PROMISE, stat: true, forced: FORCED }, {
	  // `Promise.reject` method
	  // https://tc39.github.io/ecma262/#sec-promise.reject
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this);
	    capability.reject.call(undefined, r);
	    return capability.promise;
	  }
	});

	$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
	  // `Promise.resolve` method
	  // https://tc39.github.io/ecma262/#sec-promise.resolve
	  resolve: function resolve(x) {
	    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
	  }
	});

	$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
	  // `Promise.all` method
	  // https://tc39.github.io/ecma262/#sec-promise.all
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform(function () {
	      var $promiseResolve = aFunction(C.resolve);
	      var values = [];
	      var counter = 0;
	      var remaining = 1;
	      iterate(iterable, function (promise) {
	        var index = counter++;
	        var alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        $promiseResolve.call(C, promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  },
	  // `Promise.race` method
	  // https://tc39.github.io/ecma262/#sec-promise.race
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var reject = capability.reject;
	    var result = perform(function () {
	      var $promiseResolve = aFunction(C.resolve);
	      iterate(iterable, function (promise) {
	        $promiseResolve.call(C, promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});


	/***/ }),
	/* 34 */
	/***/ (function(module, exports, __webpack_require__) {

	var regexpFlags = __webpack_require__(76);

	var nativeExec = RegExp.prototype.exec;
	// This always refers to the native implementation, because the
	// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
	// which loads this file before patching the method.
	var nativeReplace = String.prototype.replace;

	var patchedExec = nativeExec;

	var UPDATES_LAST_INDEX_WRONG = (function () {
	  var re1 = /a/;
	  var re2 = /b*/g;
	  nativeExec.call(re1, 'a');
	  nativeExec.call(re2, 'a');
	  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
	})();

	// nonparticipating capturing group, copied from es5-shim's String#split patch.
	var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

	var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

	if (PATCH) {
	  patchedExec = function exec(str) {
	    var re = this;
	    var lastIndex, reCopy, match, i;

	    if (NPCG_INCLUDED) {
	      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
	    }
	    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

	    match = nativeExec.call(re, str);

	    if (UPDATES_LAST_INDEX_WRONG && match) {
	      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
	    }
	    if (NPCG_INCLUDED && match && match.length > 1) {
	      // Fix browsers whose `exec` methods don't consistently return `undefined`
	      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
	      nativeReplace.call(match[0], reCopy, function () {
	        for (i = 1; i < arguments.length - 2; i++) {
	          if (arguments[i] === undefined) match[i] = undefined;
	        }
	      });
	    }

	    return match;
	  };
	}

	module.exports = patchedExec;


	/***/ }),
	/* 35 */
	/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(4);

	// `ToPrimitive` abstract operation
	// https://tc39.github.io/ecma262/#sec-toprimitive
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (input, PREFERRED_STRING) {
	  if (!isObject(input)) return input;
	  var fn, val;
	  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
	  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
	  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


	/***/ }),
	/* 36 */
	/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(0);
	var isObject = __webpack_require__(4);

	var document = global.document;
	// typeof document.createElement is 'object' in old IE
	var EXISTS = isObject(document) && isObject(document.createElement);

	module.exports = function (it) {
	  return EXISTS ? document.createElement(it) : {};
	};


	/***/ }),
	/* 37 */
	/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(0);
	var hide = __webpack_require__(9);

	module.exports = function (key, value) {
	  try {
	    hide(global, key, value);
	  } catch (error) {
	    global[key] = value;
	  } return value;
	};


	/***/ }),
	/* 38 */
	/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(0);


	/***/ }),
	/* 39 */
	/***/ (function(module, exports, __webpack_require__) {

	var internalObjectKeys = __webpack_require__(56);
	var enumBugKeys = __webpack_require__(40);

	var hiddenKeys = enumBugKeys.concat('length', 'prototype');

	// `Object.getOwnPropertyNames` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return internalObjectKeys(O, hiddenKeys);
	};


	/***/ }),
	/* 40 */
	/***/ (function(module, exports) {

	// IE8- don't enum bug keys
	module.exports = [
	  'constructor',
	  'hasOwnProperty',
	  'isPrototypeOf',
	  'propertyIsEnumerable',
	  'toLocaleString',
	  'toString',
	  'valueOf'
	];


	/***/ }),
	/* 41 */
	/***/ (function(module, exports, __webpack_require__) {

	var fails = __webpack_require__(2);

	var replacement = /#|\.prototype\./;

	var isForced = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value == POLYFILL ? true
	    : value == NATIVE ? false
	    : typeof detection == 'function' ? fails(detection)
	    : !!detection;
	};

	var normalize = isForced.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced.data = {};
	var NATIVE = isForced.NATIVE = 'N';
	var POLYFILL = isForced.POLYFILL = 'P';

	module.exports = isForced;


	/***/ }),
	/* 42 */
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(8);
	var createIteratorConstructor = __webpack_require__(93);
	var getPrototypeOf = __webpack_require__(43);
	var setPrototypeOf = __webpack_require__(44);
	var setToStringTag = __webpack_require__(20);
	var hide = __webpack_require__(9);
	var redefine = __webpack_require__(10);
	var wellKnownSymbol = __webpack_require__(1);
	var IS_PURE = __webpack_require__(17);
	var Iterators = __webpack_require__(21);
	var IteratorsCore = __webpack_require__(65);

	var IteratorPrototype = IteratorsCore.IteratorPrototype;
	var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
	var ITERATOR = wellKnownSymbol('iterator');
	var KEYS = 'keys';
	var VALUES = 'values';
	var ENTRIES = 'entries';

	var returnThis = function () { return this; };

	module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
	  createIteratorConstructor(IteratorConstructor, NAME, next);

	  var getIterationMethod = function (KIND) {
	    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
	    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
	    switch (KIND) {
	      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
	      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
	      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
	    } return function () { return new IteratorConstructor(this); };
	  };

	  var TO_STRING_TAG = NAME + ' Iterator';
	  var INCORRECT_VALUES_NAME = false;
	  var IterablePrototype = Iterable.prototype;
	  var nativeIterator = IterablePrototype[ITERATOR]
	    || IterablePrototype['@@iterator']
	    || DEFAULT && IterablePrototype[DEFAULT];
	  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
	  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
	  var CurrentIteratorPrototype, methods, KEY;

	  // fix native
	  if (anyNativeIterator) {
	    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
	    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
	      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
	        if (setPrototypeOf) {
	          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
	        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
	          hide(CurrentIteratorPrototype, ITERATOR, returnThis);
	        }
	      }
	      // Set @@toStringTag to native iterators
	      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
	      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
	    }
	  }

	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
	    INCORRECT_VALUES_NAME = true;
	    defaultIterator = function values() { return nativeIterator.call(this); };
	  }

	  // define iterator
	  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
	    hide(IterablePrototype, ITERATOR, defaultIterator);
	  }
	  Iterators[NAME] = defaultIterator;

	  // export additional methods
	  if (DEFAULT) {
	    methods = {
	      values: getIterationMethod(VALUES),
	      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
	      entries: getIterationMethod(ENTRIES)
	    };
	    if (FORCED) for (KEY in methods) {
	      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
	        redefine(IterablePrototype, KEY, methods[KEY]);
	      }
	    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
	  }

	  return methods;
	};


	/***/ }),
	/* 43 */
	/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__(5);
	var toObject = __webpack_require__(19);
	var sharedKey = __webpack_require__(24);
	var CORRECT_PROTOTYPE_GETTER = __webpack_require__(66);

	var IE_PROTO = sharedKey('IE_PROTO');
	var ObjectPrototype = Object.prototype;

	// `Object.getPrototypeOf` method
	// https://tc39.github.io/ecma262/#sec-object.getprototypeof
	module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectPrototype : null;
	};


	/***/ }),
	/* 44 */
	/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(3);
	var aPossiblePrototype = __webpack_require__(94);

	// `Object.setPrototypeOf` method
	// https://tc39.github.io/ecma262/#sec-object.setprototypeof
	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
	  var CORRECT_SETTER = false;
	  var test = {};
	  var setter;
	  try {
	    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
	    setter.call(test, []);
	    CORRECT_SETTER = test instanceof Array;
	  } catch (error) { /* empty */ }
	  return function setPrototypeOf(O, proto) {
	    anObject(O);
	    aPossiblePrototype(proto);
	    if (CORRECT_SETTER) setter.call(O, proto);
	    else O.__proto__ = proto;
	    return O;
	  };
	}() : undefined);


	/***/ }),
	/* 45 */
	/***/ (function(module, exports, __webpack_require__) {

	var DESCRIPTORS = __webpack_require__(7);
	var defineProperty = __webpack_require__(6).f;

	var FunctionPrototype = Function.prototype;
	var FunctionPrototypeToString = FunctionPrototype.toString;
	var nameRE = /^\s*function ([^ (]*)/;
	var NAME = 'name';

	// Function instances `.name` property
	// https://tc39.github.io/ecma262/#sec-function-instances-name
	if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
	  defineProperty(FunctionPrototype, NAME, {
	    configurable: true,
	    get: function () {
	      try {
	        return FunctionPrototypeToString.call(this).match(nameRE)[1];
	      } catch (error) {
	        return '';
	      }
	    }
	  });
	}


	/***/ }),
	/* 46 */
	/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(3);
	var isArrayIteratorMethod = __webpack_require__(99);
	var toLength = __webpack_require__(15);
	var bind = __webpack_require__(29);
	var getIteratorMethod = __webpack_require__(100);
	var callWithSafeIterationClosing = __webpack_require__(101);

	var Result = function (stopped, result) {
	  this.stopped = stopped;
	  this.result = result;
	};

	var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
	  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
	  var iterator, iterFn, index, length, result, step;

	  if (IS_ITERATOR) {
	    iterator = iterable;
	  } else {
	    iterFn = getIteratorMethod(iterable);
	    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
	    // optimisation for array iterators
	    if (isArrayIteratorMethod(iterFn)) {
	      for (index = 0, length = toLength(iterable.length); length > index; index++) {
	        result = AS_ENTRIES
	          ? boundFunction(anObject(step = iterable[index])[0], step[1])
	          : boundFunction(iterable[index]);
	        if (result && result instanceof Result) return result;
	      } return new Result(false);
	    }
	    iterator = iterFn.call(iterable);
	  }

	  while (!(step = iterator.next()).done) {
	    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
	    if (result && result instanceof Result) return result;
	  } return new Result(false);
	};

	iterate.stop = function (result) {
	  return new Result(true, result);
	};


	/***/ }),
	/* 47 */
	/***/ (function(module, exports) {

	module.exports = function (it, Constructor, name) {
	  if (!(it instanceof Constructor)) {
	    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
	  } return it;
	};


	/***/ }),
	/* 48 */
	/***/ (function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(9);
	var redefine = __webpack_require__(10);
	var fails = __webpack_require__(2);
	var wellKnownSymbol = __webpack_require__(1);
	var regexpExec = __webpack_require__(34);

	var SPECIES = wellKnownSymbol('species');

	var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
	  // #replace needs built-in support for named groups.
	  // #match works fine because it just return the exec results, even if it has
	  // a "grops" property.
	  var re = /./;
	  re.exec = function () {
	    var result = [];
	    result.groups = { a: '7' };
	    return result;
	  };
	  return ''.replace(re, '$<a>') !== '7';
	});

	// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
	// Weex JS has frozen built-in prototypes, so use try / catch wrapper
	var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
	  var re = /(?:)/;
	  var originalExec = re.exec;
	  re.exec = function () { return originalExec.apply(this, arguments); };
	  var result = 'ab'.split(re);
	  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
	});

	module.exports = function (KEY, length, exec, sham) {
	  var SYMBOL = wellKnownSymbol(KEY);

	  var DELEGATES_TO_SYMBOL = !fails(function () {
	    // String methods call symbol-named RegEp methods
	    var O = {};
	    O[SYMBOL] = function () { return 7; };
	    return ''[KEY](O) != 7;
	  });

	  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
	    // Symbol-named RegExp methods call .exec
	    var execCalled = false;
	    var re = /a/;
	    re.exec = function () { execCalled = true; return null; };

	    if (KEY === 'split') {
	      // RegExp[@@split] doesn't call the regex's exec method, but first creates
	      // a new one. We need to return the patched regex when creating the new one.
	      re.constructor = {};
	      re.constructor[SPECIES] = function () { return re; };
	    }

	    re[SYMBOL]('');
	    return !execCalled;
	  });

	  if (
	    !DELEGATES_TO_SYMBOL ||
	    !DELEGATES_TO_EXEC ||
	    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
	    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
	  ) {
	    var nativeRegExpMethod = /./[SYMBOL];
	    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
	      if (regexp.exec === regexpExec) {
	        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
	          // The native String method already delegates to @@method (this
	          // polyfilled function), leasing to infinite recursion.
	          // We avoid it by directly calling the native @@method method.
	          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
	        }
	        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
	      }
	      return { done: false };
	    });
	    var stringMethod = methods[0];
	    var regexMethod = methods[1];

	    redefine(String.prototype, KEY, stringMethod);
	    redefine(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function (string, arg) { return regexMethod.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function (string) { return regexMethod.call(string, this); }
	    );
	    if (sham) hide(RegExp.prototype[SYMBOL], 'sham', true);
	  }
	};


	/***/ }),
	/* 49 */
	/***/ (function(module, exports, __webpack_require__) {

	var charAt = __webpack_require__(77).charAt;

	// `AdvanceStringIndex` abstract operation
	// https://tc39.github.io/ecma262/#sec-advancestringindex
	module.exports = function (S, index, unicode) {
	  return index + (unicode ? charAt(S, index).length : 1);
	};


	/***/ }),
	/* 50 */
	/***/ (function(module, exports, __webpack_require__) {

	var classof = __webpack_require__(11);
	var regexpExec = __webpack_require__(34);

	// `RegExpExec` abstract operation
	// https://tc39.github.io/ecma262/#sec-regexpexec
	module.exports = function (R, S) {
	  var exec = R.exec;
	  if (typeof exec === 'function') {
	    var result = exec.call(R, S);
	    if (typeof result !== 'object') {
	      throw TypeError('RegExp exec method returned something other than an Object or null');
	    }
	    return result;
	  }

	  if (classof(R) !== 'RegExp') {
	    throw TypeError('RegExp#exec called on incompatible receiver');
	  }

	  return regexpExec.call(R, S);
	};



	/***/ }),
	/* 51 */
	/***/ (function(module, exports, __webpack_require__) {

	var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

	// Nashorn ~ JDK8 bug
	var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

	// `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
	exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : nativePropertyIsEnumerable;


	/***/ }),
	/* 52 */
	/***/ (function(module, exports, __webpack_require__) {

	var fails = __webpack_require__(2);
	var classof = __webpack_require__(11);

	var split = ''.split;

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	module.exports = fails(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins
	  return !Object('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classof(it) == 'String' ? split.call(it, '') : Object(it);
	} : Object;


	/***/ }),
	/* 53 */
	/***/ (function(module, exports, __webpack_require__) {

	var DESCRIPTORS = __webpack_require__(7);
	var fails = __webpack_require__(2);
	var createElement = __webpack_require__(36);

	// Thank's IE8 for his funny defineProperty
	module.exports = !DESCRIPTORS && !fails(function () {
	  return Object.defineProperty(createElement('div'), 'a', {
	    get: function () { return 7; }
	  }).a != 7;
	});


	/***/ }),
	/* 54 */
	/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(16);

	module.exports = shared('native-function-to-string', Function.toString);


	/***/ }),
	/* 55 */
	/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__(5);
	var ownKeys = __webpack_require__(83);
	var getOwnPropertyDescriptorModule = __webpack_require__(22);
	var definePropertyModule = __webpack_require__(6);

	module.exports = function (target, source) {
	  var keys = ownKeys(source);
	  var defineProperty = definePropertyModule.f;
	  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
	  }
	};


	/***/ }),
	/* 56 */
	/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__(5);
	var toIndexedObject = __webpack_require__(13);
	var indexOf = __webpack_require__(84).indexOf;
	var hiddenKeys = __webpack_require__(18);

	module.exports = function (object, names) {
	  var O = toIndexedObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~indexOf(result, key) || result.push(key);
	  }
	  return result;
	};


	/***/ }),
	/* 57 */
	/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;


	/***/ }),
	/* 58 */
	/***/ (function(module, exports, __webpack_require__) {

	var fails = __webpack_require__(2);

	module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
	  // Chrome 38 Symbol has incorrect toString conversion
	  // eslint-disable-next-line no-undef
	  return !String(Symbol());
	});


	/***/ }),
	/* 59 */
	/***/ (function(module, exports, __webpack_require__) {

	var classof = __webpack_require__(11);

	// `IsArray` abstract operation
	// https://tc39.github.io/ecma262/#sec-isarray
	module.exports = Array.isArray || function isArray(arg) {
	  return classof(arg) == 'Array';
	};


	/***/ }),
	/* 60 */
	/***/ (function(module, exports, __webpack_require__) {

	var internalObjectKeys = __webpack_require__(56);
	var enumBugKeys = __webpack_require__(40);

	// `Object.keys` method
	// https://tc39.github.io/ecma262/#sec-object.keys
	module.exports = Object.keys || function keys(O) {
	  return internalObjectKeys(O, enumBugKeys);
	};


	/***/ }),
	/* 61 */
	/***/ (function(module, exports, __webpack_require__) {

	var getBuiltIn = __webpack_require__(26);

	module.exports = getBuiltIn('document', 'documentElement');


	/***/ }),
	/* 62 */
	/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(1);


	/***/ }),
	/* 63 */
	/***/ (function(module, exports, __webpack_require__) {

	var path = __webpack_require__(38);
	var has = __webpack_require__(5);
	var wrappedWellKnownSymbolModule = __webpack_require__(62);
	var defineProperty = __webpack_require__(6).f;

	module.exports = function (NAME) {
	  var Symbol = path.Symbol || (path.Symbol = {});
	  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
	    value: wrappedWellKnownSymbolModule.f(NAME)
	  });
	};


	/***/ }),
	/* 64 */
	/***/ (function(module, exports, __webpack_require__) {

	var toIndexedObject = __webpack_require__(13);
	var addToUnscopables = __webpack_require__(92);
	var Iterators = __webpack_require__(21);
	var InternalStateModule = __webpack_require__(14);
	var defineIterator = __webpack_require__(42);

	var ARRAY_ITERATOR = 'Array Iterator';
	var setInternalState = InternalStateModule.set;
	var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

	// `Array.prototype.entries` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.entries
	// `Array.prototype.keys` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.keys
	// `Array.prototype.values` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.values
	// `Array.prototype[@@iterator]` method
	// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
	// `CreateArrayIterator` internal method
	// https://tc39.github.io/ecma262/#sec-createarrayiterator
	module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
	  setInternalState(this, {
	    type: ARRAY_ITERATOR,
	    target: toIndexedObject(iterated), // target
	    index: 0,                          // next index
	    kind: kind                         // kind
	  });
	// `%ArrayIteratorPrototype%.next` method
	// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
	}, function () {
	  var state = getInternalState(this);
	  var target = state.target;
	  var kind = state.kind;
	  var index = state.index++;
	  if (!target || index >= target.length) {
	    state.target = undefined;
	    return { value: undefined, done: true };
	  }
	  if (kind == 'keys') return { value: index, done: false };
	  if (kind == 'values') return { value: target[index], done: false };
	  return { value: [index, target[index]], done: false };
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values%
	// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
	// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
	Iterators.Arguments = Iterators.Array;

	// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');


	/***/ }),
	/* 65 */
	/***/ (function(module, exports, __webpack_require__) {

	var getPrototypeOf = __webpack_require__(43);
	var hide = __webpack_require__(9);
	var has = __webpack_require__(5);
	var wellKnownSymbol = __webpack_require__(1);
	var IS_PURE = __webpack_require__(17);

	var ITERATOR = wellKnownSymbol('iterator');
	var BUGGY_SAFARI_ITERATORS = false;

	var returnThis = function () { return this; };

	// `%IteratorPrototype%` object
	// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
	var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

	if ([].keys) {
	  arrayIterator = [].keys();
	  // Safari 8 has buggy iterators w/o `next`
	  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
	  else {
	    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
	    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
	  }
	}

	if (IteratorPrototype == undefined) IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);

	module.exports = {
	  IteratorPrototype: IteratorPrototype,
	  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
	};


	/***/ }),
	/* 66 */
	/***/ (function(module, exports, __webpack_require__) {

	var fails = __webpack_require__(2);

	module.exports = !fails(function () {
	  function F() { /* empty */ }
	  F.prototype.constructor = null;
	  return Object.getPrototypeOf(new F()) !== F.prototype;
	});


	/***/ }),
	/* 67 */
	/***/ (function(module, exports, __webpack_require__) {

	var hiddenKeys = __webpack_require__(18);
	var isObject = __webpack_require__(4);
	var has = __webpack_require__(5);
	var defineProperty = __webpack_require__(6).f;
	var uid = __webpack_require__(25);
	var FREEZING = __webpack_require__(98);

	var METADATA = uid('meta');
	var id = 0;

	var isExtensible = Object.isExtensible || function () {
	  return true;
	};

	var setMetadata = function (it) {
	  defineProperty(it, METADATA, { value: {
	    objectID: 'O' + ++id, // object ID
	    weakData: {}          // weak collections IDs
	  } });
	};

	var fastKey = function (it, create) {
	  // return a primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, METADATA)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMetadata(it);
	  // return object ID
	  } return it[METADATA].objectID;
	};

	var getWeakData = function (it, create) {
	  if (!has(it, METADATA)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMetadata(it);
	  // return the store of weak collections IDs
	  } return it[METADATA].weakData;
	};

	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
	  return it;
	};

	var meta = module.exports = {
	  REQUIRED: false,
	  fastKey: fastKey,
	  getWeakData: getWeakData,
	  onFreeze: onFreeze
	};

	hiddenKeys[METADATA] = true;


	/***/ }),
	/* 68 */
	/***/ (function(module, exports, __webpack_require__) {

	var classofRaw = __webpack_require__(11);
	var wellKnownSymbol = __webpack_require__(1);

	var TO_STRING_TAG = wellKnownSymbol('toStringTag');
	// ES3 wrong here
	var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (error) { /* empty */ }
	};

	// getting tag from ES6+ `Object.prototype.toString`
	module.exports = function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
	    // builtinTag case
	    : CORRECT_ARGUMENTS ? classofRaw(O)
	    // ES3 arguments fallback
	    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
	};


	/***/ }),
	/* 69 */
	/***/ (function(module, exports, __webpack_require__) {

	var wellKnownSymbol = __webpack_require__(1);

	var ITERATOR = wellKnownSymbol('iterator');
	var SAFE_CLOSING = false;

	try {
	  var called = 0;
	  var iteratorWithReturn = {
	    next: function () {
	      return { done: !!called++ };
	    },
	    'return': function () {
	      SAFE_CLOSING = true;
	    }
	  };
	  iteratorWithReturn[ITERATOR] = function () {
	    return this;
	  };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(iteratorWithReturn, function () { throw 2; });
	} catch (error) { /* empty */ }

	module.exports = function (exec, SKIP_CLOSING) {
	  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
	  var ITERATION_SUPPORT = false;
	  try {
	    var object = {};
	    object[ITERATOR] = function () {
	      return {
	        next: function () {
	          return { done: ITERATION_SUPPORT = true };
	        }
	      };
	    };
	    exec(object);
	  } catch (error) { /* empty */ }
	  return ITERATION_SUPPORT;
	};


	/***/ }),
	/* 70 */
	/***/ (function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(10);

	module.exports = function (target, src, options) {
	  for (var key in src) redefine(target, key, src[key], options);
	  return target;
	};


	/***/ }),
	/* 71 */
	/***/ (function(module, exports, __webpack_require__) {

	var getBuiltIn = __webpack_require__(26);
	var definePropertyModule = __webpack_require__(6);
	var wellKnownSymbol = __webpack_require__(1);
	var DESCRIPTORS = __webpack_require__(7);

	var SPECIES = wellKnownSymbol('species');

	module.exports = function (CONSTRUCTOR_NAME) {
	  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
	  var defineProperty = definePropertyModule.f;

	  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
	    defineProperty(Constructor, SPECIES, {
	      configurable: true,
	      get: function () { return this; }
	    });
	  }
	};


	/***/ }),
	/* 72 */
	/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(3);
	var aFunction = __webpack_require__(30);
	var wellKnownSymbol = __webpack_require__(1);

	var SPECIES = wellKnownSymbol('species');

	// `SpeciesConstructor` abstract operation
	// https://tc39.github.io/ecma262/#sec-speciesconstructor
	module.exports = function (O, defaultConstructor) {
	  var C = anObject(O).constructor;
	  var S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
	};


	/***/ }),
	/* 73 */
	/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(0);
	var fails = __webpack_require__(2);
	var classof = __webpack_require__(11);
	var bind = __webpack_require__(29);
	var html = __webpack_require__(61);
	var createElement = __webpack_require__(36);

	var location = global.location;
	var set = global.setImmediate;
	var clear = global.clearImmediate;
	var process = global.process;
	var MessageChannel = global.MessageChannel;
	var Dispatch = global.Dispatch;
	var counter = 0;
	var queue = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var defer, channel, port;

	var run = function (id) {
	  // eslint-disable-next-line no-prototype-builtins
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};

	var runner = function (id) {
	  return function () {
	    run(id);
	  };
	};

	var listener = function (event) {
	  run(event.data);
	};

	var post = function (id) {
	  // old engines have not location.origin
	  global.postMessage(id + '', location.protocol + '//' + location.host);
	};

	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!set || !clear) {
	  set = function setImmediate(fn) {
	    var args = [];
	    var i = 1;
	    while (arguments.length > i) args.push(arguments[i++]);
	    queue[++counter] = function () {
	      // eslint-disable-next-line no-new-func
	      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clear = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (classof(process) == 'process') {
	    defer = function (id) {
	      process.nextTick(runner(id));
	    };
	  // Sphere (JS game engine) Dispatch API
	  } else if (Dispatch && Dispatch.now) {
	    defer = function (id) {
	      Dispatch.now(runner(id));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = bind(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts && !fails(post)) {
	    defer = post;
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if (ONREADYSTATECHANGE in createElement('script')) {
	    defer = function (id) {
	      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function (id) {
	      setTimeout(runner(id), 0);
	    };
	  }
	}

	module.exports = {
	  set: set,
	  clear: clear
	};


	/***/ }),
	/* 74 */
	/***/ (function(module, exports, __webpack_require__) {

	var getBuiltIn = __webpack_require__(26);

	module.exports = getBuiltIn('navigator', 'userAgent') || '';


	/***/ }),
	/* 75 */
	/***/ (function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(30);

	var PromiseCapability = function (C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject = aFunction(reject);
	};

	// 25.4.1.5 NewPromiseCapability(C)
	module.exports.f = function (C) {
	  return new PromiseCapability(C);
	};


	/***/ }),
	/* 76 */
	/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(3);

	// `RegExp.prototype.flags` getter implementation
	// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
	module.exports = function () {
	  var that = anObject(this);
	  var result = '';
	  if (that.global) result += 'g';
	  if (that.ignoreCase) result += 'i';
	  if (that.multiline) result += 'm';
	  if (that.dotAll) result += 's';
	  if (that.unicode) result += 'u';
	  if (that.sticky) result += 'y';
	  return result;
	};


	/***/ }),
	/* 77 */
	/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(27);
	var requireObjectCoercible = __webpack_require__(12);

	// `String.prototype.{ codePointAt, at }` methods implementation
	var createMethod = function (CONVERT_TO_STRING) {
	  return function ($this, pos) {
	    var S = String(requireObjectCoercible($this));
	    var position = toInteger(pos);
	    var size = S.length;
	    var first, second;
	    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
	    first = S.charCodeAt(position);
	    return first < 0xD800 || first > 0xDBFF || position + 1 === size
	      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
	        ? CONVERT_TO_STRING ? S.charAt(position) : first
	        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
	  };
	};

	module.exports = {
	  // `String.prototype.codePointAt` method
	  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
	  codeAt: createMethod(false),
	  // `String.prototype.at` method
	  // https://github.com/mathiasbynens/String.prototype.at
	  charAt: createMethod(true)
	};


	/***/ }),
	/* 78 */
	/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var runtime = (function (exports) {

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined$1; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  exports.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };

	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  exports.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  exports.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  exports.awrap = function(arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration.
	          result.value = unwrapped;
	          resolve(result);
	        }, function(error) {
	          // If a rejected Promise was yielded, throw the rejection back
	          // into the async generator function so it can be handled there.
	          return invoke("throw", error, resolve, reject);
	        });
	      }
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  exports.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  exports.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );

	    return exports.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;

	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);

	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }

	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined$1) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;

	      if (context.method === "throw") {
	        // Note: ["return"] must be used for ES3 parsing compatibility.
	        if (delegate.iterator["return"]) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined$1;
	          maybeInvokeDelegate(delegate, context);

	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }

	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    var info = record.arg;

	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;

	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;

	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined$1;
	      }

	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }

	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[toStringTagSymbol] = "Generator";

	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  exports.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined$1;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  exports.values = values;

	  function doneResult() {
	    return { value: undefined$1, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined$1;
	      this.done = false;
	      this.delegate = null;

	      this.method = "next";
	      this.arg = undefined$1;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined$1;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined$1;
	        }

	        return !! caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined$1;
	      }

	      return ContinueSentinel;
	    }
	  };

	  // Regardless of whether this script is executing as a CommonJS module
	  // or not, return the runtime object so that we can declare the variable
	  // regeneratorRuntime in the outer scope, which allows this module to be
	  // injected easily by `bin/regenerator --include-runtime script.js`.
	  return exports;

	}(
	  // If this script is executing as a CommonJS module, use module.exports
	  // as the regeneratorRuntime namespace. Otherwise create a new empty
	  // object. Either way, the resulting object will be used to initialize
	  // the regeneratorRuntime variable at the top of this file.
	    module.exports 
	));

	try {
	  regeneratorRuntime = runtime;
	} catch (accidentalStrictMode) {
	  // This module should not be running in strict mode, so the above
	  // assignment should always work unless something is misconfigured. Just
	  // in case runtime.js accidentally runs in strict mode, we can escape
	  // strict mode using a global Function call. This could conceivably fail
	  // if a Content Security Policy forbids using Function, but in that case
	  // the proper solution is to fix the accidental strict mode problem. If
	  // you've misconfigured your bundler to force strict mode and applied a
	  // CSP to forbid Function, and you're not willing to fix either of those
	  // problems, please detail your unique predicament in a GitHub issue.
	  Function("r", "regeneratorRuntime = r")(runtime);
	}


	/***/ }),
	/* 79 */
	/***/ (function(module, exports) {

	function E () {
	  // Keep this empty so it's easier to inherit from
	  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
	}

	E.prototype = {
	  on: function (name, callback, ctx) {
	    var e = this.e || (this.e = {});

	    (e[name] || (e[name] = [])).push({
	      fn: callback,
	      ctx: ctx
	    });

	    return this;
	  },

	  once: function (name, callback, ctx) {
	    var self = this;
	    function listener () {
	      self.off(name, listener);
	      callback.apply(ctx, arguments);
	    }
	    listener._ = callback;
	    return this.on(name, listener, ctx);
	  },

	  emit: function (name) {
	    var data = [].slice.call(arguments, 1);
	    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
	    var i = 0;
	    var len = evtArr.length;

	    for (i; i < len; i++) {
	      evtArr[i].fn.apply(evtArr[i].ctx, data);
	    }

	    return this;
	  },

	  off: function (name, callback) {
	    var e = this.e || (this.e = {});
	    var evts = e[name];
	    var liveEvents = [];

	    if (evts && callback) {
	      for (var i = 0, len = evts.length; i < len; i++) {
	        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
	          liveEvents.push(evts[i]);
	      }
	    }

	    // Remove event from queue to prevent memory leak
	    // Suggested by https://github.com/lazd
	    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

	    (liveEvents.length)
	      ? e[name] = liveEvents
	      : delete e[name];

	    return this;
	  }
	};

	module.exports = E;
	module.exports.TinyEmitter = E;


	/***/ }),
	/* 80 */
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(8);
	var global = __webpack_require__(0);
	var IS_PURE = __webpack_require__(17);
	var DESCRIPTORS = __webpack_require__(7);
	var NATIVE_SYMBOL = __webpack_require__(58);
	var fails = __webpack_require__(2);
	var has = __webpack_require__(5);
	var isArray = __webpack_require__(59);
	var isObject = __webpack_require__(4);
	var anObject = __webpack_require__(3);
	var toObject = __webpack_require__(19);
	var toIndexedObject = __webpack_require__(13);
	var toPrimitive = __webpack_require__(35);
	var createPropertyDescriptor = __webpack_require__(23);
	var nativeObjectCreate = __webpack_require__(28);
	var objectKeys = __webpack_require__(60);
	var getOwnPropertyNamesModule = __webpack_require__(39);
	var getOwnPropertyNamesExternal = __webpack_require__(87);
	var getOwnPropertySymbolsModule = __webpack_require__(57);
	var getOwnPropertyDescriptorModule = __webpack_require__(22);
	var definePropertyModule = __webpack_require__(6);
	var propertyIsEnumerableModule = __webpack_require__(51);
	var hide = __webpack_require__(9);
	var redefine = __webpack_require__(10);
	var shared = __webpack_require__(16);
	var sharedKey = __webpack_require__(24);
	var hiddenKeys = __webpack_require__(18);
	var uid = __webpack_require__(25);
	var wellKnownSymbol = __webpack_require__(1);
	var wrappedWellKnownSymbolModule = __webpack_require__(62);
	var defineWellKnownSymbol = __webpack_require__(63);
	var setToStringTag = __webpack_require__(20);
	var InternalStateModule = __webpack_require__(14);
	var $forEach = __webpack_require__(88).forEach;

	var HIDDEN = sharedKey('hidden');
	var SYMBOL = 'Symbol';
	var PROTOTYPE = 'prototype';
	var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
	var setInternalState = InternalStateModule.set;
	var getInternalState = InternalStateModule.getterFor(SYMBOL);
	var ObjectPrototype = Object[PROTOTYPE];
	var $Symbol = global.Symbol;
	var JSON = global.JSON;
	var nativeJSONStringify = JSON && JSON.stringify;
	var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
	var nativeDefineProperty = definePropertyModule.f;
	var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
	var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
	var AllSymbols = shared('symbols');
	var ObjectPrototypeSymbols = shared('op-symbols');
	var StringToSymbolRegistry = shared('string-to-symbol-registry');
	var SymbolToStringRegistry = shared('symbol-to-string-registry');
	var WellKnownSymbolsStore = shared('wks');
	var QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDescriptor = DESCRIPTORS && fails(function () {
	  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
	    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (O, P, Attributes) {
	  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
	  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
	  nativeDefineProperty(O, P, Attributes);
	  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
	    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
	  }
	} : nativeDefineProperty;

	var wrap = function (tag, description) {
	  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
	  setInternalState(symbol, {
	    type: SYMBOL,
	    tag: tag,
	    description: description
	  });
	  if (!DESCRIPTORS) symbol.description = description;
	  return symbol;
	};

	var isSymbol = NATIVE_SYMBOL && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return Object(it) instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(O, P, Attributes) {
	  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
	  anObject(O);
	  var key = toPrimitive(P, true);
	  anObject(Attributes);
	  if (has(AllSymbols, key)) {
	    if (!Attributes.enumerable) {
	      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
	      O[HIDDEN][key] = true;
	    } else {
	      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
	      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
	    } return setSymbolDescriptor(O, key, Attributes);
	  } return nativeDefineProperty(O, key, Attributes);
	};

	var $defineProperties = function defineProperties(O, Properties) {
	  anObject(O);
	  var properties = toIndexedObject(Properties);
	  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
	  $forEach(keys, function (key) {
	    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
	  });
	  return O;
	};

	var $create = function create(O, Properties) {
	  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
	};

	var $propertyIsEnumerable = function propertyIsEnumerable(V) {
	  var P = toPrimitive(V, true);
	  var enumerable = nativePropertyIsEnumerable.call(this, P);
	  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
	  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
	};

	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
	  var it = toIndexedObject(O);
	  var key = toPrimitive(P, true);
	  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
	  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
	  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
	    descriptor.enumerable = true;
	  }
	  return descriptor;
	};

	var $getOwnPropertyNames = function getOwnPropertyNames(O) {
	  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
	  var result = [];
	  $forEach(names, function (key) {
	    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
	  });
	  return result;
	};

	var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
	  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
	  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
	  var result = [];
	  $forEach(names, function (key) {
	    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
	      result.push(AllSymbols[key]);
	    }
	  });
	  return result;
	};

	// `Symbol` constructor
	// https://tc39.github.io/ecma262/#sec-symbol-constructor
	if (!NATIVE_SYMBOL) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
	    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
	    var tag = uid(description);
	    var setter = function (value) {
	      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
	    };
	    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
	    return wrap(tag, description);
	  };

	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return getInternalState(this).tag;
	  });

	  propertyIsEnumerableModule.f = $propertyIsEnumerable;
	  definePropertyModule.f = $defineProperty;
	  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
	  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
	  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

	  if (DESCRIPTORS) {
	    // https://github.com/tc39/proposal-Symbol-description
	    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
	      configurable: true,
	      get: function description() {
	        return getInternalState(this).description;
	      }
	    });
	    if (!IS_PURE) {
	      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
	    }
	  }

	  wrappedWellKnownSymbolModule.f = function (name) {
	    return wrap(wellKnownSymbol(name), name);
	  };
	}

	$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
	  Symbol: $Symbol
	});

	$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
	  defineWellKnownSymbol(name);
	});

	$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
	  // `Symbol.for` method
	  // https://tc39.github.io/ecma262/#sec-symbol.for
	  'for': function (key) {
	    var string = String(key);
	    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
	    var symbol = $Symbol(string);
	    StringToSymbolRegistry[string] = symbol;
	    SymbolToStringRegistry[symbol] = string;
	    return symbol;
	  },
	  // `Symbol.keyFor` method
	  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
	    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
	  },
	  useSetter: function () { USE_SETTER = true; },
	  useSimple: function () { USE_SETTER = false; }
	});

	$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
	  // `Object.create` method
	  // https://tc39.github.io/ecma262/#sec-object.create
	  create: $create,
	  // `Object.defineProperty` method
	  // https://tc39.github.io/ecma262/#sec-object.defineproperty
	  defineProperty: $defineProperty,
	  // `Object.defineProperties` method
	  // https://tc39.github.io/ecma262/#sec-object.defineproperties
	  defineProperties: $defineProperties,
	  // `Object.getOwnPropertyDescriptor` method
	  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
	});

	$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
	  // `Object.getOwnPropertyNames` method
	  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // `Object.getOwnPropertySymbols` method
	  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
	// https://bugs.chromium.org/p/v8/issues/detail?id=3443
	$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
	  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
	    return getOwnPropertySymbolsModule.f(toObject(it));
	  }
	});

	// `JSON.stringify` method behavior with symbols
	// https://tc39.github.io/ecma262/#sec-json.stringify
	JSON && $({ target: 'JSON', stat: true, forced: !NATIVE_SYMBOL || fails(function () {
	  var symbol = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  return nativeJSONStringify([symbol]) != '[null]'
	    // WebKit converts symbol values to JSON as null
	    || nativeJSONStringify({ a: symbol }) != '{}'
	    // V8 throws on boxed symbols
	    || nativeJSONStringify(Object(symbol)) != '{}';
	}) }, {
	  stringify: function stringify(it) {
	    var args = [it];
	    var index = 1;
	    var replacer, $replacer;
	    while (arguments.length > index) args.push(arguments[index++]);
	    $replacer = replacer = args[1];
	    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    if (!isArray(replacer)) replacer = function (key, value) {
	      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return nativeJSONStringify.apply(JSON, args);
	  }
	});

	// `Symbol.prototype[@@toPrimitive]` method
	// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
	if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) hide($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// `Symbol.prototype[@@toStringTag]` property
	// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
	setToStringTag($Symbol, SYMBOL);

	hiddenKeys[HIDDEN] = true;


	/***/ }),
	/* 81 */
	/***/ (function(module, exports) {

	var g;

	// This works in non-strict mode
	g = (function() {
		return this;
	})();

	try {
		// This works if eval is allowed (see CSP)
		g = g || new Function("return this")();
	} catch (e) {
		// This works if the window reference is available
		if (typeof window === "object") g = window;
	}

	// g can still be undefined, but nothing to do about it...
	// We return undefined, instead of nothing here, so it's
	// easier to handle this case. if(!global) { ...}

	module.exports = g;


	/***/ }),
	/* 82 */
	/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(0);
	var nativeFunctionToString = __webpack_require__(54);

	var WeakMap = global.WeakMap;

	module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));


	/***/ }),
	/* 83 */
	/***/ (function(module, exports, __webpack_require__) {

	var getBuiltIn = __webpack_require__(26);
	var getOwnPropertyNamesModule = __webpack_require__(39);
	var getOwnPropertySymbolsModule = __webpack_require__(57);
	var anObject = __webpack_require__(3);

	// all object keys, includes non-enumerable and symbols
	module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = getOwnPropertyNamesModule.f(anObject(it));
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
	  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
	};


	/***/ }),
	/* 84 */
	/***/ (function(module, exports, __webpack_require__) {

	var toIndexedObject = __webpack_require__(13);
	var toLength = __webpack_require__(15);
	var toAbsoluteIndex = __webpack_require__(85);

	// `Array.prototype.{ indexOf, includes }` methods implementation
	var createMethod = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	module.exports = {
	  // `Array.prototype.includes` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
	  includes: createMethod(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod(false)
	};


	/***/ }),
	/* 85 */
	/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(27);

	var max = Math.max;
	var min = Math.min;

	// Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
	module.exports = function (index, length) {
	  var integer = toInteger(index);
	  return integer < 0 ? max(integer + length, 0) : min(integer, length);
	};


	/***/ }),
	/* 86 */
	/***/ (function(module, exports, __webpack_require__) {

	var DESCRIPTORS = __webpack_require__(7);
	var definePropertyModule = __webpack_require__(6);
	var anObject = __webpack_require__(3);
	var objectKeys = __webpack_require__(60);

	// `Object.defineProperties` method
	// https://tc39.github.io/ecma262/#sec-object.defineproperties
	module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = objectKeys(Properties);
	  var length = keys.length;
	  var index = 0;
	  var key;
	  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
	  return O;
	};


	/***/ }),
	/* 87 */
	/***/ (function(module, exports, __webpack_require__) {

	var toIndexedObject = __webpack_require__(13);
	var nativeGetOwnPropertyNames = __webpack_require__(39).f;

	var toString = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return nativeGetOwnPropertyNames(it);
	  } catch (error) {
	    return windowNames.slice();
	  }
	};

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]'
	    ? getWindowNames(it)
	    : nativeGetOwnPropertyNames(toIndexedObject(it));
	};


	/***/ }),
	/* 88 */
	/***/ (function(module, exports, __webpack_require__) {

	var bind = __webpack_require__(29);
	var IndexedObject = __webpack_require__(52);
	var toObject = __webpack_require__(19);
	var toLength = __webpack_require__(15);
	var arraySpeciesCreate = __webpack_require__(89);

	var push = [].push;

	// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
	var createMethod = function (TYPE) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  return function ($this, callbackfn, that, specificCreate) {
	    var O = toObject($this);
	    var self = IndexedObject(O);
	    var boundFunction = bind(callbackfn, that, 3);
	    var length = toLength(self.length);
	    var index = 0;
	    var create = specificCreate || arraySpeciesCreate;
	    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
	    var value, result;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      value = self[index];
	      result = boundFunction(value, index, O);
	      if (TYPE) {
	        if (IS_MAP) target[index] = result; // map
	        else if (result) switch (TYPE) {
	          case 3: return true;              // some
	          case 5: return value;             // find
	          case 6: return index;             // findIndex
	          case 2: push.call(target, value); // filter
	        } else if (IS_EVERY) return false;  // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
	  };
	};

	module.exports = {
	  // `Array.prototype.forEach` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
	  forEach: createMethod(0),
	  // `Array.prototype.map` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.map
	  map: createMethod(1),
	  // `Array.prototype.filter` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
	  filter: createMethod(2),
	  // `Array.prototype.some` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.some
	  some: createMethod(3),
	  // `Array.prototype.every` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.every
	  every: createMethod(4),
	  // `Array.prototype.find` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.find
	  find: createMethod(5),
	  // `Array.prototype.findIndex` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
	  findIndex: createMethod(6)
	};


	/***/ }),
	/* 89 */
	/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(4);
	var isArray = __webpack_require__(59);
	var wellKnownSymbol = __webpack_require__(1);

	var SPECIES = wellKnownSymbol('species');

	// `ArraySpeciesCreate` abstract operation
	// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
	module.exports = function (originalArray, length) {
	  var C;
	  if (isArray(originalArray)) {
	    C = originalArray.constructor;
	    // cross-realm fallback
	    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
	    else if (isObject(C)) {
	      C = C[SPECIES];
	      if (C === null) C = undefined;
	    }
	  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
	};


	/***/ }),
	/* 90 */
	/***/ (function(module, exports, __webpack_require__) {
	// `Symbol.prototype.description` getter
	// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

	var $ = __webpack_require__(8);
	var DESCRIPTORS = __webpack_require__(7);
	var global = __webpack_require__(0);
	var has = __webpack_require__(5);
	var isObject = __webpack_require__(4);
	var defineProperty = __webpack_require__(6).f;
	var copyConstructorProperties = __webpack_require__(55);

	var NativeSymbol = global.Symbol;

	if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
	  // Safari 12 bug
	  NativeSymbol().description !== undefined
	)) {
	  var EmptyStringDescriptionStore = {};
	  // wrap Symbol constructor for correct work with undefined description
	  var SymbolWrapper = function Symbol() {
	    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
	    var result = this instanceof SymbolWrapper
	      ? new NativeSymbol(description)
	      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
	      : description === undefined ? NativeSymbol() : NativeSymbol(description);
	    if (description === '') EmptyStringDescriptionStore[result] = true;
	    return result;
	  };
	  copyConstructorProperties(SymbolWrapper, NativeSymbol);
	  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
	  symbolPrototype.constructor = SymbolWrapper;

	  var symbolToString = symbolPrototype.toString;
	  var native = String(NativeSymbol('test')) == 'Symbol(test)';
	  var regexp = /^Symbol\((.*)\)[^)]+$/;
	  defineProperty(symbolPrototype, 'description', {
	    configurable: true,
	    get: function description() {
	      var symbol = isObject(this) ? this.valueOf() : this;
	      var string = symbolToString.call(symbol);
	      if (has(EmptyStringDescriptionStore, symbol)) return '';
	      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
	      return desc === '' ? undefined : desc;
	    }
	  });

	  $({ global: true, forced: true }, {
	    Symbol: SymbolWrapper
	  });
	}


	/***/ }),
	/* 91 */
	/***/ (function(module, exports, __webpack_require__) {

	var defineWellKnownSymbol = __webpack_require__(63);

	// `Symbol.iterator` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.iterator
	defineWellKnownSymbol('iterator');


	/***/ }),
	/* 92 */
	/***/ (function(module, exports, __webpack_require__) {

	var wellKnownSymbol = __webpack_require__(1);
	var create = __webpack_require__(28);
	var hide = __webpack_require__(9);

	var UNSCOPABLES = wellKnownSymbol('unscopables');
	var ArrayPrototype = Array.prototype;

	// Array.prototype[@@unscopables]
	// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
	if (ArrayPrototype[UNSCOPABLES] == undefined) {
	  hide(ArrayPrototype, UNSCOPABLES, create(null));
	}

	// add a key to Array.prototype[@@unscopables]
	module.exports = function (key) {
	  ArrayPrototype[UNSCOPABLES][key] = true;
	};


	/***/ }),
	/* 93 */
	/***/ (function(module, exports, __webpack_require__) {

	var IteratorPrototype = __webpack_require__(65).IteratorPrototype;
	var create = __webpack_require__(28);
	var createPropertyDescriptor = __webpack_require__(23);
	var setToStringTag = __webpack_require__(20);
	var Iterators = __webpack_require__(21);

	var returnThis = function () { return this; };

	module.exports = function (IteratorConstructor, NAME, next) {
	  var TO_STRING_TAG = NAME + ' Iterator';
	  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
	  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
	  Iterators[TO_STRING_TAG] = returnThis;
	  return IteratorConstructor;
	};


	/***/ }),
	/* 94 */
	/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(4);

	module.exports = function (it) {
	  if (!isObject(it) && it !== null) {
	    throw TypeError("Can't set " + String(it) + ' as a prototype');
	  } return it;
	};


	/***/ }),
	/* 95 */
	/***/ (function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(10);

	var DatePrototype = Date.prototype;
	var INVALID_DATE = 'Invalid Date';
	var TO_STRING = 'toString';
	var nativeDateToString = DatePrototype[TO_STRING];
	var getTime = DatePrototype.getTime;

	// `Date.prototype.toString` method
	// https://tc39.github.io/ecma262/#sec-date.prototype.tostring
	if (new Date(NaN) + '' != INVALID_DATE) {
	  redefine(DatePrototype, TO_STRING, function toString() {
	    var value = getTime.call(this);
	    // eslint-disable-next-line no-self-compare
	    return value === value ? nativeDateToString.call(this) : INVALID_DATE;
	  });
	}


	/***/ }),
	/* 96 */
	/***/ (function(module, exports, __webpack_require__) {

	var collection = __webpack_require__(97);
	var collectionStrong = __webpack_require__(103);

	// `Map` constructor
	// https://tc39.github.io/ecma262/#sec-map-objects
	module.exports = collection('Map', function (get) {
	  return function Map() { return get(this, arguments.length ? arguments[0] : undefined); };
	}, collectionStrong, true);


	/***/ }),
	/* 97 */
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(8);
	var global = __webpack_require__(0);
	var isForced = __webpack_require__(41);
	var redefine = __webpack_require__(10);
	var InternalMetadataModule = __webpack_require__(67);
	var iterate = __webpack_require__(46);
	var anInstance = __webpack_require__(47);
	var isObject = __webpack_require__(4);
	var fails = __webpack_require__(2);
	var checkCorrectnessOfIteration = __webpack_require__(69);
	var setToStringTag = __webpack_require__(20);
	var inheritIfRequired = __webpack_require__(102);

	module.exports = function (CONSTRUCTOR_NAME, wrapper, common, IS_MAP, IS_WEAK) {
	  var NativeConstructor = global[CONSTRUCTOR_NAME];
	  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
	  var Constructor = NativeConstructor;
	  var ADDER = IS_MAP ? 'set' : 'add';
	  var exported = {};

	  var fixMethod = function (KEY) {
	    var nativeMethod = NativePrototype[KEY];
	    redefine(NativePrototype, KEY,
	      KEY == 'add' ? function add(a) {
	        nativeMethod.call(this, a === 0 ? 0 : a);
	        return this;
	      } : KEY == 'delete' ? function (a) {
	        return IS_WEAK && !isObject(a) ? false : nativeMethod.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a) {
	        return IS_WEAK && !isObject(a) ? undefined : nativeMethod.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a) {
	        return IS_WEAK && !isObject(a) ? false : nativeMethod.call(this, a === 0 ? 0 : a);
	      } : function set(a, b) {
	        nativeMethod.call(this, a === 0 ? 0 : a, b);
	        return this;
	      }
	    );
	  };

	  // eslint-disable-next-line max-len
	  if (isForced(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
	    new NativeConstructor().entries().next();
	  })))) {
	    // create collection constructor
	    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
	    InternalMetadataModule.REQUIRED = true;
	  } else if (isForced(CONSTRUCTOR_NAME, true)) {
	    var instance = new Constructor();
	    // early implementations not supports chaining
	    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
	    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
	    // most early implementations doesn't supports iterables, most modern - not close it correctly
	    // eslint-disable-next-line no-new
	    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
	    // for early implementations -0 and +0 not the same
	    var BUGGY_ZERO = !IS_WEAK && fails(function () {
	      // V8 ~ Chromium 42- fails only with 5+ elements
	      var $instance = new NativeConstructor();
	      var index = 5;
	      while (index--) $instance[ADDER](index, index);
	      return !$instance.has(-0);
	    });

	    if (!ACCEPT_ITERABLES) {
	      Constructor = wrapper(function (dummy, iterable) {
	        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
	        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
	        if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
	        return that;
	      });
	      Constructor.prototype = NativePrototype;
	      NativePrototype.constructor = Constructor;
	    }

	    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }

	    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

	    // weak collections should not contains .clear method
	    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
	  }

	  exported[CONSTRUCTOR_NAME] = Constructor;
	  $({ global: true, forced: Constructor != NativeConstructor }, exported);

	  setToStringTag(Constructor, CONSTRUCTOR_NAME);

	  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

	  return Constructor;
	};


	/***/ }),
	/* 98 */
	/***/ (function(module, exports, __webpack_require__) {

	var fails = __webpack_require__(2);

	module.exports = !fails(function () {
	  return Object.isExtensible(Object.preventExtensions({}));
	});


	/***/ }),
	/* 99 */
	/***/ (function(module, exports, __webpack_require__) {

	var wellKnownSymbol = __webpack_require__(1);
	var Iterators = __webpack_require__(21);

	var ITERATOR = wellKnownSymbol('iterator');
	var ArrayPrototype = Array.prototype;

	// check on default Array iterator
	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
	};


	/***/ }),
	/* 100 */
	/***/ (function(module, exports, __webpack_require__) {

	var classof = __webpack_require__(68);
	var Iterators = __webpack_require__(21);
	var wellKnownSymbol = __webpack_require__(1);

	var ITERATOR = wellKnownSymbol('iterator');

	module.exports = function (it) {
	  if (it != undefined) return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};


	/***/ }),
	/* 101 */
	/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(3);

	// call something on iterator step with safe closing on error
	module.exports = function (iterator, fn, value, ENTRIES) {
	  try {
	    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (error) {
	    var returnMethod = iterator['return'];
	    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
	    throw error;
	  }
	};


	/***/ }),
	/* 102 */
	/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(4);
	var setPrototypeOf = __webpack_require__(44);

	// makes subclassing work correct for wrapped built-ins
	module.exports = function ($this, dummy, Wrapper) {
	  var NewTarget, NewTargetPrototype;
	  if (
	    // it can work only with native `setPrototypeOf`
	    setPrototypeOf &&
	    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
	    typeof (NewTarget = dummy.constructor) == 'function' &&
	    NewTarget !== Wrapper &&
	    isObject(NewTargetPrototype = NewTarget.prototype) &&
	    NewTargetPrototype !== Wrapper.prototype
	  ) setPrototypeOf($this, NewTargetPrototype);
	  return $this;
	};


	/***/ }),
	/* 103 */
	/***/ (function(module, exports, __webpack_require__) {

	var defineProperty = __webpack_require__(6).f;
	var create = __webpack_require__(28);
	var redefineAll = __webpack_require__(70);
	var bind = __webpack_require__(29);
	var anInstance = __webpack_require__(47);
	var iterate = __webpack_require__(46);
	var defineIterator = __webpack_require__(42);
	var setSpecies = __webpack_require__(71);
	var DESCRIPTORS = __webpack_require__(7);
	var fastKey = __webpack_require__(67).fastKey;
	var InternalStateModule = __webpack_require__(14);

	var setInternalState = InternalStateModule.set;
	var internalStateGetterFor = InternalStateModule.getterFor;

	module.exports = {
	  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      anInstance(that, C, CONSTRUCTOR_NAME);
	      setInternalState(that, {
	        type: CONSTRUCTOR_NAME,
	        index: create(null),
	        first: undefined,
	        last: undefined,
	        size: 0
	      });
	      if (!DESCRIPTORS) that.size = 0;
	      if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
	    });

	    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

	    var define = function (that, key, value) {
	      var state = getInternalState(that);
	      var entry = getEntry(that, key);
	      var previous, index;
	      // change existing entry
	      if (entry) {
	        entry.value = value;
	      // create new entry
	      } else {
	        state.last = entry = {
	          index: index = fastKey(key, true),
	          key: key,
	          value: value,
	          previous: previous = state.last,
	          next: undefined,
	          removed: false
	        };
	        if (!state.first) state.first = entry;
	        if (previous) previous.next = entry;
	        if (DESCRIPTORS) state.size++;
	        else that.size++;
	        // add to index
	        if (index !== 'F') state.index[index] = entry;
	      } return that;
	    };

	    var getEntry = function (that, key) {
	      var state = getInternalState(that);
	      // fast case
	      var index = fastKey(key);
	      var entry;
	      if (index !== 'F') return state.index[index];
	      // frozen object case
	      for (entry = state.first; entry; entry = entry.next) {
	        if (entry.key == key) return entry;
	      }
	    };

	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear() {
	        var that = this;
	        var state = getInternalState(that);
	        var data = state.index;
	        var entry = state.first;
	        while (entry) {
	          entry.removed = true;
	          if (entry.previous) entry.previous = entry.previous.next = undefined;
	          delete data[entry.index];
	          entry = entry.next;
	        }
	        state.first = state.last = undefined;
	        if (DESCRIPTORS) state.size = 0;
	        else that.size = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function (key) {
	        var that = this;
	        var state = getInternalState(that);
	        var entry = getEntry(that, key);
	        if (entry) {
	          var next = entry.next;
	          var prev = entry.previous;
	          delete state.index[entry.index];
	          entry.removed = true;
	          if (prev) prev.next = next;
	          if (next) next.previous = prev;
	          if (state.first == entry) state.first = next;
	          if (state.last == entry) state.last = prev;
	          if (DESCRIPTORS) state.size--;
	          else that.size--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /* , that = undefined */) {
	        var state = getInternalState(this);
	        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
	        var entry;
	        while (entry = entry ? entry.next : state.first) {
	          boundFunction(entry.value, entry.key, this);
	          // revert to the last existing entry
	          while (entry && entry.removed) entry = entry.previous;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key) {
	        return !!getEntry(this, key);
	      }
	    });

	    redefineAll(C.prototype, IS_MAP ? {
	      // 23.1.3.6 Map.prototype.get(key)
	      get: function get(key) {
	        var entry = getEntry(this, key);
	        return entry && entry.value;
	      },
	      // 23.1.3.9 Map.prototype.set(key, value)
	      set: function set(key, value) {
	        return define(this, key === 0 ? 0 : key, value);
	      }
	    } : {
	      // 23.2.3.1 Set.prototype.add(value)
	      add: function add(value) {
	        return define(this, value = value === 0 ? 0 : value, value);
	      }
	    });
	    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
	      get: function () {
	        return getInternalState(this).size;
	      }
	    });
	    return C;
	  },
	  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
	    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
	    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
	    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
	      setInternalState(this, {
	        type: ITERATOR_NAME,
	        target: iterated,
	        state: getInternalCollectionState(iterated),
	        kind: kind,
	        last: undefined
	      });
	    }, function () {
	      var state = getInternalIteratorState(this);
	      var kind = state.kind;
	      var entry = state.last;
	      // revert to the last existing entry
	      while (entry && entry.removed) entry = entry.previous;
	      // get next entry
	      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
	        // or finish the iteration
	        state.target = undefined;
	        return { value: undefined, done: true };
	      }
	      // return step by kind
	      if (kind == 'keys') return { value: entry.key, done: false };
	      if (kind == 'values') return { value: entry.value, done: false };
	      return { value: [entry.key, entry.value], done: false };
	    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(CONSTRUCTOR_NAME);
	  }
	};


	/***/ }),
	/* 104 */
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(8);
	var fails = __webpack_require__(2);
	var toObject = __webpack_require__(19);
	var nativeGetPrototypeOf = __webpack_require__(43);
	var CORRECT_PROTOTYPE_GETTER = __webpack_require__(66);

	var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });

	// `Object.getPrototypeOf` method
	// https://tc39.github.io/ecma262/#sec-object.getprototypeof
	$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
	  getPrototypeOf: function getPrototypeOf(it) {
	    return nativeGetPrototypeOf(toObject(it));
	  }
	});



	/***/ }),
	/* 105 */
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(8);
	var setPrototypeOf = __webpack_require__(44);

	// `Object.setPrototypeOf` method
	// https://tc39.github.io/ecma262/#sec-object.setprototypeof
	$({ target: 'Object', stat: true }, {
	  setPrototypeOf: setPrototypeOf
	});


	/***/ }),
	/* 106 */
	/***/ (function(module, exports, __webpack_require__) {

	var classof = __webpack_require__(68);
	var wellKnownSymbol = __webpack_require__(1);

	var TO_STRING_TAG = wellKnownSymbol('toStringTag');
	var test = {};

	test[TO_STRING_TAG] = 'z';

	// `Object.prototype.toString` method implementation
	// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
	module.exports = String(test) !== '[object z]' ? function toString() {
	  return '[object ' + classof(this) + ']';
	} : test.toString;


	/***/ }),
	/* 107 */
	/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(0);
	var getOwnPropertyDescriptor = __webpack_require__(22).f;
	var classof = __webpack_require__(11);
	var macrotask = __webpack_require__(73).set;
	var userAgent = __webpack_require__(74);

	var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
	var process = global.process;
	var Promise = global.Promise;
	var IS_NODE = classof(process) == 'process';
	// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
	var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
	var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

	var flush, head, last, notify, toggle, node, promise;

	// modern engines have queueMicrotask method
	if (!queueMicrotask) {
	  flush = function () {
	    var parent, fn;
	    if (IS_NODE && (parent = process.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (error) {
	        if (head) notify();
	        else last = undefined;
	        throw error;
	      }
	    } last = undefined;
	    if (parent) parent.enter();
	  };

	  // Node.js
	  if (IS_NODE) {
	    notify = function () {
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
	  } else if (MutationObserver && !/(iphone|ipod|ipad).*applewebkit/i.test(userAgent)) {
	    toggle = true;
	    node = document.createTextNode('');
	    new MutationObserver(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function () {
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise && Promise.resolve) {
	    // Promise.resolve without an argument throws an error in LG WebOS 2
	    promise = Promise.resolve(undefined);
	    notify = function () {
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function () {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	}

	module.exports = queueMicrotask || function (fn) {
	  var task = { fn: fn, next: undefined };
	  if (last) last.next = task;
	  if (!head) {
	    head = task;
	    notify();
	  } last = task;
	};


	/***/ }),
	/* 108 */
	/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(3);
	var isObject = __webpack_require__(4);
	var newPromiseCapability = __webpack_require__(75);

	module.exports = function (C, x) {
	  anObject(C);
	  if (isObject(x) && x.constructor === C) return x;
	  var promiseCapability = newPromiseCapability.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};


	/***/ }),
	/* 109 */
	/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(0);

	module.exports = function (a, b) {
	  var console = global.console;
	  if (console && console.error) {
	    arguments.length === 1 ? console.error(a) : console.error(a, b);
	  }
	};


	/***/ }),
	/* 110 */
	/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return { error: false, value: exec() };
	  } catch (error) {
	    return { error: true, value: error };
	  }
	};


	/***/ }),
	/* 111 */
	/***/ (function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(10);
	var anObject = __webpack_require__(3);
	var fails = __webpack_require__(2);
	var flags = __webpack_require__(76);

	var TO_STRING = 'toString';
	var RegExpPrototype = RegExp.prototype;
	var nativeToString = RegExpPrototype[TO_STRING];

	var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
	// FF44- RegExp#toString has a wrong name
	var INCORRECT_NAME = nativeToString.name != TO_STRING;

	// `RegExp.prototype.toString` method
	// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
	if (NOT_GENERIC || INCORRECT_NAME) {
	  redefine(RegExp.prototype, TO_STRING, function toString() {
	    var R = anObject(this);
	    var p = String(R.source);
	    var rf = R.flags;
	    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
	    return '/' + p + '/' + f;
	  }, { unsafe: true });
	}


	/***/ }),
	/* 112 */
	/***/ (function(module, exports, __webpack_require__) {

	var charAt = __webpack_require__(77).charAt;
	var InternalStateModule = __webpack_require__(14);
	var defineIterator = __webpack_require__(42);

	var STRING_ITERATOR = 'String Iterator';
	var setInternalState = InternalStateModule.set;
	var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

	// `String.prototype[@@iterator]` method
	// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
	defineIterator(String, 'String', function (iterated) {
	  setInternalState(this, {
	    type: STRING_ITERATOR,
	    string: String(iterated),
	    index: 0
	  });
	// `%StringIteratorPrototype%.next` method
	// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
	}, function next() {
	  var state = getInternalState(this);
	  var string = state.string;
	  var index = state.index;
	  var point;
	  if (index >= string.length) return { value: undefined, done: true };
	  point = charAt(string, index);
	  state.index += point.length;
	  return { value: point, done: false };
	});


	/***/ }),
	/* 113 */
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(8);
	var createHTML = __webpack_require__(114);
	var forcedStringHTMLMethod = __webpack_require__(115);

	// `String.prototype.anchor` method
	// https://tc39.github.io/ecma262/#sec-string.prototype.anchor
	$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('anchor') }, {
	  anchor: function anchor(name) {
	    return createHTML(this, 'a', 'name', name);
	  }
	});


	/***/ }),
	/* 114 */
	/***/ (function(module, exports, __webpack_require__) {

	var requireObjectCoercible = __webpack_require__(12);

	var quot = /"/g;

	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	// https://tc39.github.io/ecma262/#sec-createhtml
	module.exports = function (string, tag, attribute, value) {
	  var S = String(requireObjectCoercible(string));
	  var p1 = '<' + tag;
	  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};


	/***/ }),
	/* 115 */
	/***/ (function(module, exports, __webpack_require__) {

	var fails = __webpack_require__(2);

	// check the existence of a method, lowercase
	// of a tag and escaping quotes in arguments
	module.exports = function (METHOD_NAME) {
	  return fails(function () {
	    var test = ''[METHOD_NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  });
	};


	/***/ }),
	/* 116 */
	/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(0);
	var DOMIterables = __webpack_require__(117);
	var ArrayIteratorMethods = __webpack_require__(64);
	var hide = __webpack_require__(9);
	var wellKnownSymbol = __webpack_require__(1);

	var ITERATOR = wellKnownSymbol('iterator');
	var TO_STRING_TAG = wellKnownSymbol('toStringTag');
	var ArrayValues = ArrayIteratorMethods.values;

	for (var COLLECTION_NAME in DOMIterables) {
	  var Collection = global[COLLECTION_NAME];
	  var CollectionPrototype = Collection && Collection.prototype;
	  if (CollectionPrototype) {
	    // some Chrome versions have non-configurable methods on DOMTokenList
	    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
	      hide(CollectionPrototype, ITERATOR, ArrayValues);
	    } catch (error) {
	      CollectionPrototype[ITERATOR] = ArrayValues;
	    }
	    if (!CollectionPrototype[TO_STRING_TAG]) hide(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
	    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
	      // some Chrome versions have non-configurable methods on DOMTokenList
	      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
	        hide(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
	      } catch (error) {
	        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
	      }
	    }
	  }
	}


	/***/ }),
	/* 117 */
	/***/ (function(module, exports) {

	// iterable DOM collections
	// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
	module.exports = {
	  CSSRuleList: 0,
	  CSSStyleDeclaration: 0,
	  CSSValueList: 0,
	  ClientRectList: 0,
	  DOMRectList: 0,
	  DOMStringList: 0,
	  DOMTokenList: 1,
	  DataTransferItemList: 0,
	  FileList: 0,
	  HTMLAllCollection: 0,
	  HTMLCollection: 0,
	  HTMLFormElement: 0,
	  HTMLSelectElement: 0,
	  MediaList: 0,
	  MimeTypeArray: 0,
	  NamedNodeMap: 0,
	  NodeList: 1,
	  PaintRequestList: 0,
	  Plugin: 0,
	  PluginArray: 0,
	  SVGLengthList: 0,
	  SVGNumberList: 0,
	  SVGPathSegList: 0,
	  SVGPointList: 0,
	  SVGStringList: 0,
	  SVGTransformList: 0,
	  SourceBufferList: 0,
	  StyleSheetList: 0,
	  TextTrackCueList: 0,
	  TextTrackList: 0,
	  TouchList: 0
	};


	/***/ }),
	/* 118 */
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(8);
	var exec = __webpack_require__(34);

	$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
	  exec: exec
	});


	/***/ }),
	/* 119 */
	/***/ (function(module, exports, __webpack_require__) {

	var fixRegExpWellKnownSymbolLogic = __webpack_require__(48);
	var anObject = __webpack_require__(3);
	var toLength = __webpack_require__(15);
	var requireObjectCoercible = __webpack_require__(12);
	var advanceStringIndex = __webpack_require__(49);
	var regExpExec = __webpack_require__(50);

	// @@match logic
	fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
	  return [
	    // `String.prototype.match` method
	    // https://tc39.github.io/ecma262/#sec-string.prototype.match
	    function match(regexp) {
	      var O = requireObjectCoercible(this);
	      var matcher = regexp == undefined ? undefined : regexp[MATCH];
	      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	    },
	    // `RegExp.prototype[@@match]` method
	    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
	    function (regexp) {
	      var res = maybeCallNative(nativeMatch, regexp, this);
	      if (res.done) return res.value;

	      var rx = anObject(regexp);
	      var S = String(this);

	      if (!rx.global) return regExpExec(rx, S);

	      var fullUnicode = rx.unicode;
	      rx.lastIndex = 0;
	      var A = [];
	      var n = 0;
	      var result;
	      while ((result = regExpExec(rx, S)) !== null) {
	        var matchStr = String(result[0]);
	        A[n] = matchStr;
	        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
	        n++;
	      }
	      return n === 0 ? null : A;
	    }
	  ];
	});


	/***/ }),
	/* 120 */
	/***/ (function(module, exports, __webpack_require__) {

	var fixRegExpWellKnownSymbolLogic = __webpack_require__(48);
	var anObject = __webpack_require__(3);
	var toObject = __webpack_require__(19);
	var toLength = __webpack_require__(15);
	var toInteger = __webpack_require__(27);
	var requireObjectCoercible = __webpack_require__(12);
	var advanceStringIndex = __webpack_require__(49);
	var regExpExec = __webpack_require__(50);

	var max = Math.max;
	var min = Math.min;
	var floor = Math.floor;
	var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
	var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

	var maybeToString = function (it) {
	  return it === undefined ? it : String(it);
	};

	// @@replace logic
	fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative) {
	  return [
	    // `String.prototype.replace` method
	    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
	    function replace(searchValue, replaceValue) {
	      var O = requireObjectCoercible(this);
	      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
	      return replacer !== undefined
	        ? replacer.call(searchValue, O, replaceValue)
	        : nativeReplace.call(String(O), searchValue, replaceValue);
	    },
	    // `RegExp.prototype[@@replace]` method
	    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
	    function (regexp, replaceValue) {
	      var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
	      if (res.done) return res.value;

	      var rx = anObject(regexp);
	      var S = String(this);

	      var functionalReplace = typeof replaceValue === 'function';
	      if (!functionalReplace) replaceValue = String(replaceValue);

	      var global = rx.global;
	      if (global) {
	        var fullUnicode = rx.unicode;
	        rx.lastIndex = 0;
	      }
	      var results = [];
	      while (true) {
	        var result = regExpExec(rx, S);
	        if (result === null) break;

	        results.push(result);
	        if (!global) break;

	        var matchStr = String(result[0]);
	        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
	      }

	      var accumulatedResult = '';
	      var nextSourcePosition = 0;
	      for (var i = 0; i < results.length; i++) {
	        result = results[i];

	        var matched = String(result[0]);
	        var position = max(min(toInteger(result.index), S.length), 0);
	        var captures = [];
	        // NOTE: This is equivalent to
	        //   captures = result.slice(1).map(maybeToString)
	        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
	        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
	        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
	        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
	        var namedCaptures = result.groups;
	        if (functionalReplace) {
	          var replacerArgs = [matched].concat(captures, position, S);
	          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
	          var replacement = String(replaceValue.apply(undefined, replacerArgs));
	        } else {
	          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
	        }
	        if (position >= nextSourcePosition) {
	          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
	          nextSourcePosition = position + matched.length;
	        }
	      }
	      return accumulatedResult + S.slice(nextSourcePosition);
	    }
	  ];

	  // https://tc39.github.io/ecma262/#sec-getsubstitution
	  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
	    var tailPos = position + matched.length;
	    var m = captures.length;
	    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
	    if (namedCaptures !== undefined) {
	      namedCaptures = toObject(namedCaptures);
	      symbols = SUBSTITUTION_SYMBOLS;
	    }
	    return nativeReplace.call(replacement, symbols, function (match, ch) {
	      var capture;
	      switch (ch.charAt(0)) {
	        case '$': return '$';
	        case '&': return matched;
	        case '`': return str.slice(0, position);
	        case "'": return str.slice(tailPos);
	        case '<':
	          capture = namedCaptures[ch.slice(1, -1)];
	          break;
	        default: // \d\d?
	          var n = +ch;
	          if (n === 0) return match;
	          if (n > m) {
	            var f = floor(n / 10);
	            if (f === 0) return match;
	            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
	            return match;
	          }
	          capture = captures[n - 1];
	      }
	      return capture === undefined ? '' : capture;
	    });
	  }
	});


	/***/ }),
	/* 121 */
	/***/ (function(module, exports, __webpack_require__) {

	var fixRegExpWellKnownSymbolLogic = __webpack_require__(48);
	var isRegExp = __webpack_require__(122);
	var anObject = __webpack_require__(3);
	var requireObjectCoercible = __webpack_require__(12);
	var speciesConstructor = __webpack_require__(72);
	var advanceStringIndex = __webpack_require__(49);
	var toLength = __webpack_require__(15);
	var callRegExpExec = __webpack_require__(50);
	var regexpExec = __webpack_require__(34);
	var fails = __webpack_require__(2);

	var arrayPush = [].push;
	var min = Math.min;
	var MAX_UINT32 = 0xFFFFFFFF;

	// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
	var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

	// @@split logic
	fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
	  var internalSplit;
	  if (
	    'abbc'.split(/(b)*/)[1] == 'c' ||
	    'test'.split(/(?:)/, -1).length != 4 ||
	    'ab'.split(/(?:ab)*/).length != 2 ||
	    '.'.split(/(.?)(.?)/).length != 4 ||
	    '.'.split(/()()/).length > 1 ||
	    ''.split(/.?/).length
	  ) {
	    // based on es5-shim implementation, need to rework it
	    internalSplit = function (separator, limit) {
	      var string = String(requireObjectCoercible(this));
	      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
	      if (lim === 0) return [];
	      if (separator === undefined) return [string];
	      // If `separator` is not a regex, use native split
	      if (!isRegExp(separator)) {
	        return nativeSplit.call(string, separator, lim);
	      }
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var match, lastIndex, lastLength;
	      while (match = regexpExec.call(separatorCopy, string)) {
	        lastIndex = separatorCopy.lastIndex;
	        if (lastIndex > lastLastIndex) {
	          output.push(string.slice(lastLastIndex, match.index));
	          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
	          lastLength = match[0].length;
	          lastLastIndex = lastIndex;
	          if (output.length >= lim) break;
	        }
	        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
	      }
	      if (lastLastIndex === string.length) {
	        if (lastLength || !separatorCopy.test('')) output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output.length > lim ? output.slice(0, lim) : output;
	    };
	  // Chakra, V8
	  } else if ('0'.split(undefined, 0).length) {
	    internalSplit = function (separator, limit) {
	      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
	    };
	  } else internalSplit = nativeSplit;

	  return [
	    // `String.prototype.split` method
	    // https://tc39.github.io/ecma262/#sec-string.prototype.split
	    function split(separator, limit) {
	      var O = requireObjectCoercible(this);
	      var splitter = separator == undefined ? undefined : separator[SPLIT];
	      return splitter !== undefined
	        ? splitter.call(separator, O, limit)
	        : internalSplit.call(String(O), separator, limit);
	    },
	    // `RegExp.prototype[@@split]` method
	    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
	    //
	    // NOTE: This cannot be properly polyfilled in engines that don't support
	    // the 'y' flag.
	    function (regexp, limit) {
	      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
	      if (res.done) return res.value;

	      var rx = anObject(regexp);
	      var S = String(this);
	      var C = speciesConstructor(rx, RegExp);

	      var unicodeMatching = rx.unicode;
	      var flags = (rx.ignoreCase ? 'i' : '') +
	                  (rx.multiline ? 'm' : '') +
	                  (rx.unicode ? 'u' : '') +
	                  (SUPPORTS_Y ? 'y' : 'g');

	      // ^(? + rx + ) is needed, in combination with some S slicing, to
	      // simulate the 'y' flag.
	      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
	      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
	      if (lim === 0) return [];
	      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
	      var p = 0;
	      var q = 0;
	      var A = [];
	      while (q < S.length) {
	        splitter.lastIndex = SUPPORTS_Y ? q : 0;
	        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
	        var e;
	        if (
	          z === null ||
	          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
	        ) {
	          q = advanceStringIndex(S, q, unicodeMatching);
	        } else {
	          A.push(S.slice(p, q));
	          if (A.length === lim) return A;
	          for (var i = 1; i <= z.length - 1; i++) {
	            A.push(z[i]);
	            if (A.length === lim) return A;
	          }
	          q = p = e;
	        }
	      }
	      A.push(S.slice(p));
	      return A;
	    }
	  ];
	}, !SUPPORTS_Y);


	/***/ }),
	/* 122 */
	/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(4);
	var classof = __webpack_require__(11);
	var wellKnownSymbol = __webpack_require__(1);

	var MATCH = wellKnownSymbol('match');

	// `IsRegExp` abstract operation
	// https://tc39.github.io/ecma262/#sec-isregexp
	module.exports = function (it) {
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
	};


	/***/ }),
	/* 123 */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	__webpack_require__.r(__webpack_exports__);

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
	var es_symbol = __webpack_require__(80);

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
	var es_symbol_description = __webpack_require__(90);

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
	var es_symbol_iterator = __webpack_require__(91);

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
	var es_array_iterator = __webpack_require__(64);

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.date.to-string.js
	var es_date_to_string = __webpack_require__(95);

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
	var es_function_name = __webpack_require__(45);

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.map.js
	var es_map = __webpack_require__(96);

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.define-property.js
	var es_object_define_property = __webpack_require__(31);

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-prototype-of.js
	var es_object_get_prototype_of = __webpack_require__(104);

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.set-prototype-of.js
	var es_object_set_prototype_of = __webpack_require__(105);

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
	var es_object_to_string = __webpack_require__(32);

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
	var es_promise = __webpack_require__(33);

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
	var es_regexp_to_string = __webpack_require__(111);

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
	var es_string_iterator = __webpack_require__(112);

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.anchor.js
	var es_string_anchor = __webpack_require__(113);

	// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
	var web_dom_collections_iterator = __webpack_require__(116);

	// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
	var runtime = __webpack_require__(78);

	// EXTERNAL MODULE: ./node_modules/tiny-emitter/index.js
	var tiny_emitter = __webpack_require__(79);
	var tiny_emitter_default = /*#__PURE__*/__webpack_require__.n(tiny_emitter);

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
	var es_regexp_exec = __webpack_require__(118);

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
	var es_string_match = __webpack_require__(119);

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
	var es_string_replace = __webpack_require__(120);

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
	var es_string_split = __webpack_require__(121);

	// CONCATENATED MODULE: ./src/renderer.js






	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

	function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	/**
	 * @file Highway default renderer that handle DOM stuffs.
	 * @author Anthony Du Pont <bulldog@dogstudio.co>
	 */
	var Renderer =
	/*#__PURE__*/
	function () {
	  /**
	   * @arg {object} properties — Set of properties (slug, page, view,...)
	   * @constructor
	   */
	  function Renderer(properties) {
	    _classCallCheck(this, Renderer);

	    // We get the view.
	    this.wrap = document.querySelector('[data-router-wrapper]'); // We save properties of the renderer

	    this.properties = properties; // We get our transition we will use later to show/hide our view.

	    this.Transition = properties.transition ? new properties.transition.class(this.wrap, properties.transition.name) : null;
	  }
	  /**
	   * Renderer initialization.
	   */


	  _createClass(Renderer, [{
	    key: "setup",
	    value: function setup() {
	      // These both methods have to be called at least once on first load.
	      this.onEnter && this.onEnter();
	      this.onEnterCompleted && this.onEnterCompleted();
	    }
	    /**
	     * Add view in DOM, then remove previous view
	     */

	  }, {
	    key: "add",
	    value: function add() {
	      // We setup the DOM for our [data-router-view]
	      this.wrap.insertAdjacentHTML('beforeend', this.properties.view.outerHTML);
	    }
	    /**
	     * Update document informations
	     */

	  }, {
	    key: "update",
	    value: function update() {
	      // Now we update all the informations in the DOM we need!
	      // We update the title
	      document.title = this.properties.page.title;
	    }
	    /**
	     * Add the view in DOM and play an `in` transition if one is defined.
	     *
	     * @param {object} datas - Set of datas
	     * @return {object} Promise
	     */

	  }, {
	    key: "show",
	    value: function show(datas) {
	      var _this = this;

	      return new Promise(
	      /*#__PURE__*/
	      function () {
	        var _ref = _asyncToGenerator(
	        /*#__PURE__*/
	        regeneratorRuntime.mark(function _callee(resolve) {
	          return regeneratorRuntime.wrap(function _callee$(_context) {
	            while (1) {
	              switch (_context.prev = _context.next) {
	                case 0:
	                  // Update DOM.
	                  _this.update(); // The `onEnter` method if set is called everytime the view is appended
	                  // to the DOM. This let you do some crazy stuffs at this right moment.


	                  _this.onEnter && _this.onEnter(); // The transition is set in your custom renderer with a getter called
	                  // `transition` that should return the transition object you want to
	                  // apply to you view. We call the `in` step of this one right now!

	                  _context.t0 = _this.Transition;

	                  if (!_context.t0) {
	                    _context.next = 6;
	                    break;
	                  }

	                  _context.next = 6;
	                  return _this.Transition.show(datas);

	                case 6:
	                  // The `onEnterCompleted` method if set in your custom renderer is called
	                  // everytime a transition is over if set. Otherwise it's called right after
	                  // the `onEnter` method.
	                  _this.onEnterCompleted && _this.onEnterCompleted(); // We resolve the Promise.

	                  resolve();

	                case 8:
	                case "end":
	                  return _context.stop();
	              }
	            }
	          }, _callee);
	        }));

	        return function (_x) {
	          return _ref.apply(this, arguments);
	        };
	      }());
	    }
	    /**
	     * Play an `out` transition if one is defined and remove the view from DOM.
	     *
	     * @param {object} datas - Set of datas
	     * @return {object} Promise
	     */

	  }, {
	    key: "hide",
	    value: function hide(datas) {
	      var _this2 = this;

	      return new Promise(
	      /*#__PURE__*/
	      function () {
	        var _ref2 = _asyncToGenerator(
	        /*#__PURE__*/
	        regeneratorRuntime.mark(function _callee2(resolve) {
	          return regeneratorRuntime.wrap(function _callee2$(_context2) {
	            while (1) {
	              switch (_context2.prev = _context2.next) {
	                case 0:
	                  // The `onLeave` method if set in your custom renderer is called everytime
	                  // before a view will be removed from the DOM. This let you do some stuffs
	                  // right before the view isn't available anymore.
	                  _this2.onLeave && _this2.onLeave(); // We call the `out` step of your transition right now!

	                  _context2.t0 = _this2.Transition;

	                  if (!_context2.t0) {
	                    _context2.next = 5;
	                    break;
	                  }

	                  _context2.next = 5;
	                  return _this2.Transition.hide(datas);

	                case 5:
	                  // The `onLeaveCompleted` method if set in your custom renderer is called
	                  // everytime a view is completely removed from the DOM.
	                  _this2.onLeaveCompleted && _this2.onLeaveCompleted(); // Resolve Promise

	                  resolve();

	                case 7:
	                case "end":
	                  return _context2.stop();
	              }
	            }
	          }, _callee2);
	        }));

	        return function (_x2) {
	          return _ref2.apply(this, arguments);
	        };
	      }());
	    }
	  }]);

	  return Renderer;
	}();


	// CONCATENATED MODULE: ./src/helpers.js








	function helpers_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function helpers_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function helpers_createClass(Constructor, protoProps, staticProps) { if (protoProps) helpers_defineProperties(Constructor.prototype, protoProps); if (staticProps) helpers_defineProperties(Constructor, staticProps); return Constructor; }

	/**
	 * @file Highway helper methods used all acrosse the script.
	 * @author Anthony Du Pont <bulldog@dogstudio.co>
	 */
	// Dependencies
	 // Constants

	var PARSER = new window.DOMParser(); // Highway Helpers

	var helpers_Helpers =
	/*#__PURE__*/
	function () {
	  /**
	   * @arg {object} renderers — List of renderers
	   * @arg {object} transitions — List of transitions
	   * @constructor
	   */
	  function Helpers(renderers, transitions) {
	    helpers_classCallCheck(this, Helpers);

	    this.renderers = renderers;
	    this.transitions = transitions;
	  }
	  /**
	   * Get origin of an URL
	   *
	   * @arg    {string} url — URL to match
	   * @return {string} Origin of URL or `null`
	   * @static
	   */


	  helpers_createClass(Helpers, [{
	    key: "getOrigin",
	    value: function getOrigin(url) {
	      var match = url.match(/(https?:\/\/[\w\-.]+)/);
	      return match ? match[1].replace(/https?:\/\//, '') : null;
	    }
	    /**
	     * Get pathname of an URL
	     *
	     * @arg    {string} url — URL to match
	     * @return {string} Pathname of URL or `null`
	     * @static
	     */

	  }, {
	    key: "getPathname",
	    value: function getPathname(url) {
	      var match = url.match(/https?:\/\/.*?(\/[\w_\-./]+)/);
	      return match ? match[1] : '/';
	    }
	    /**
	     * Get anchor in an URL
	     *
	     * @arg    {string} url — URL to match
	     * @return {string} Anchor in URL or `null`
	     * @static
	     */

	  }, {
	    key: "getAnchor",
	    value: function getAnchor(url) {
	      var match = url.match(/(#.*)$/);
	      return match ? match[1] : null;
	    }
	    /**
	     * Get search in URL.
	     *
	     * @arg    {string} url — URL to match
	     * @return {object} Search in URL formatted as an object or `null`
	     * @static
	     */

	  }, {
	    key: "getParams",
	    value: function getParams(url) {
	      var match = url.match(/\?([\w_\-.=&]+)/);

	      if (!match) {
	        return null;
	      }

	      var search = match[1].split('&');
	      var object = {};

	      for (var i = 0; i < search.length; i++) {
	        var part = search[i].split('=');
	        var key = part[0];
	        var value = part[1];
	        object[key] = value;
	      }

	      return object;
	    }
	    /**
	     * Get page's DOM from page HTML
	     *
	     * @arg    {string} page — Page HTML
	     * @return {string} Page DOM
	     * @static
	     */

	  }, {
	    key: "getDOM",
	    value: function getDOM(page) {
	      return typeof page === 'string' ? PARSER.parseFromString(page, 'text/html') : page;
	    }
	    /**
	     * Get view element from page DOM
	     *
	     * @arg    {string} page — Page DOM
	     * @return {object} View element or `null`
	     * @static
	     */

	  }, {
	    key: "getView",
	    value: function getView(page) {
	      return page.querySelector('[data-router-view]');
	    }
	    /**
	     * Get view's slug from view element
	     *
	     * @arg    {string} view — [data-router-view] DOM
	     * @return {string} Page slug or `null`
	     * @static
	     */

	  }, {
	    key: "getSlug",
	    value: function getSlug(view) {
	      return view.getAttribute('data-router-view');
	    }
	    /**
	     * Get page renderer
	     *
	     * @arg    {string} slug — Renderer's slug
	     * @return {object} Single renderer or default one
	     * @static
	     */

	  }, {
	    key: "getRenderer",
	    value: function getRenderer(slug) {
	      // Return Default
	      if (!this.renderers) {
	        return Promise.resolve(Renderer);
	      } // Return Renderer


	      if (slug in this.renderers) {
	        var renderer = this.renderers[slug];

	        if (typeof renderer === 'function' && !Renderer.isPrototypeOf(renderer)) {
	          return Promise.resolve(renderer()).then(function (_ref) {
	            var cons = _ref.default;
	            return cons;
	          });
	        }

	        if (typeof renderer.then === 'function') {
	          return Promise.resolve(renderer).then(function (_ref2) {
	            var cons = _ref2.default;
	            return cons;
	          });
	        }

	        return Promise.resolve(renderer);
	      } // Return Default


	      return Promise.resolve(Renderer);
	    }
	    /**
	     * Get page transition
	     *
	     * @arg    {string} slug — Transition slug
	     * @return {object} Single transition or `null`
	     * @static
	     */

	  }, {
	    key: "getTransition",
	    value: function getTransition(slug) {
	      if (!this.transitions) {
	        return null;
	      }

	      if (slug in this.transitions) {
	        // Return Transition
	        return {
	          class: this.transitions[slug],
	          name: slug
	        };
	      }

	      if ('default' in this.transitions) {
	        // Return Transition
	        return {
	          class: this.transitions['default'],
	          name: 'default'
	        };
	      }

	      return null;
	    }
	    /**
	     * Get all required properties for a context.
	     *
	     * @arg    {object} context – DOM context
	     * @return {object} Properties
	     */

	  }, {
	    key: "getProperties",
	    value: function getProperties(context) {
	      var page = this.getDOM(context);
	      var view = this.getView(page);
	      var slug = this.getSlug(view);
	      var renderer = this.getRenderer(slug, this.renderers);
	      var transition = this.getTransition(slug, this.transitions);
	      return {
	        page: page,
	        view: view,
	        slug: slug,
	        renderer: renderer,
	        transition: transition
	      };
	    }
	    /**
	     * Get state of an URL.
	     *
	     * @arg    {string} url — URL to decompose
	     * @return {object} State
	     */

	  }, {
	    key: "getLocation",
	    value: function getLocation(url) {
	      return {
	        href: url,
	        anchor: this.getAnchor(url),
	        origin: this.getOrigin(url),
	        params: this.getParams(url),
	        pathname: this.getPathname(url)
	      };
	    }
	  }]);

	  return Helpers;
	}();


	// CONCATENATED MODULE: ./src/core.js


















	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function core_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

	function core_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { core_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { core_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

	function core_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function core_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function core_createClass(Constructor, protoProps, staticProps) { if (protoProps) core_defineProperties(Constructor.prototype, protoProps); if (staticProps) core_defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	/**
	 * @file Highway core that handle all history stuffs.
	 * @author Anthony Du Pont <bulldog@dogstudio.co>
	 */



	var core_Core =
	/*#__PURE__*/
	function (_Emitter) {
	  _inherits(Core, _Emitter);

	  /**
	   * @arg {object} opts — User options
	   * @arg {object} opts.renderers — List of renderers
	   * @arg {object} opts.transitions — List of transitions
	   * @extends Emitter
	   * @constructor
	   */
	  function Core() {
	    var _this;

	    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	        renderers = _ref.renderers,
	        transitions = _ref.transitions;

	    core_classCallCheck(this, Core);

	    // Extends the Emitter constructor in order to be able to use its features
	    // and send custom events all along the script.
	    _this = _possibleConstructorReturn(this, _getPrototypeOf(Core).call(this)); // Helpers.

	    _this.Helpers = new helpers_Helpers(renderers, transitions); // Prep contextual transition info.

	    _this.Transitions = transitions;
	    _this.Contextual = false; // Properties & state.

	    _this.location = _this.Helpers.getLocation(window.location.href);
	    _this.properties = _this.Helpers.getProperties(document.cloneNode(true)); // Status variables.

	    _this.popping = false;
	    _this.running = false; // Trigger Element

	    _this.trigger = null; // Cache

	    _this.cache = new Map();

	    _this.cache.set(_this.location.href, _this.properties); // Get the page renderer and properly setup it.


	    _this.properties.renderer.then(function (Renderer) {
	      _this.From = new Renderer(_this.properties);

	      _this.From.setup();
	    }); // Events variables.


	    _this._navigate = _this.navigate.bind(_assertThisInitialized(_this)); // Listen the `popstate` on the window to run the router each time an
	    // history entry changes. Basically everytime the backward/forward arrows
	    // are triggered by the user.

	    window.addEventListener('popstate', _this.popState.bind(_assertThisInitialized(_this))); // Get all elligible links.

	    _this.links = document.querySelectorAll('a:not([target]):not([data-router-disabled])'); // Event attachement

	    _this.attach(_this.links);

	    return _this;
	  }
	  /**
	   * Attach `click` event on links.
	   *
	   * @param {(array|nodeList)} links - Links to use
	   */


	  core_createClass(Core, [{
	    key: "attach",
	    value: function attach(links) {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = links[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var link = _step.value;
	          link.addEventListener('click', this._navigate);
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return != null) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    }
	    /**
	     * Detach `click` event on links.
	     *
	     * @param {(array|nodeList)} links - Links to use
	     */

	  }, {
	    key: "detach",
	    value: function detach(links) {
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;

	      try {
	        for (var _iterator2 = links[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var link = _step2.value;
	          link.removeEventListener('click', this._navigate);
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
	            _iterator2.return();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }
	    }
	    /**
	     * Click method called on `click` event.
	     *
	     * @arg {object} e - `click` event
	     */

	  }, {
	    key: "navigate",
	    value: function navigate(e) {
	      if (!(e.metaKey || e.ctrlKey)) {
	        // Prevent default `click`
	        e.preventDefault(); // Check to see if this navigation will use a contextual transition

	        var contextual = e.currentTarget.hasAttribute('data-transition') ? e.currentTarget.dataset.transition : false; // We have to redirect to our `href` using Highway
	        // There we set up the contextual transition, so this and Core.redirect can pass in either transition name or false

	        this.redirect(e.currentTarget.href, contextual, e.currentTarget);
	      }
	    }
	    /**
	     * Redirect to URL
	     *
	     * @param {string} href - URL
	     * @param {(object|boolean)} contextual - If the transition is changing on the fly
	     * @param {(object|string)} trigger - The trigger element or a string
	     */

	  }, {
	    key: "redirect",
	    value: function redirect(href) {
	      var contextual = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	      var trigger = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'script';
	      // Save Trigger Element
	      this.trigger = trigger; // When our URL is different from the current location `href` and no other
	      // navigation is running for the moment we are allowed to start a new one.
	      // But if the URL containes anchors or if the origin is different we force
	      // the hard reloading of the page to avoid serious errors.

	      if (!this.running && href !== this.location.href) {
	        // We temporary store the future location.
	        var location = this.Helpers.getLocation(href); // Set contextual transition values if applicable

	        this.Contextual = false;

	        if (contextual) {
	          this.Contextual = this.Transitions['contextual'][contextual].prototype;
	          this.Contextual.name = contextual;
	        }

	        if (location.origin !== this.location.origin || location.anchor && location.pathname === this.location.pathname) {
	          // We redirect when origins are differents or when there is an anchor.
	          window.location.href = href;
	        } else {
	          this.location = location; // Now all our conditions are passed we can update our location and do
	          // what we need to do before fetching it.

	          this.beforeFetch();
	        }
	      }
	    }
	    /**
	     * Watch history entry changes.
	     */

	  }, {
	    key: "popState",
	    value: function popState() {
	      // Save Trigger Element
	      this.trigger = 'popstate'; // A contextual transition only effects the transition when a certain link is clicked, not when navigating via browser buttons

	      this.Contextual = false; // We temporary store the future location.

	      var location = this.Helpers.getLocation(window.location.href); // When users navigate using the browser buttons we check if the locations
	      // have no anchors and that our locations are different.

	      if (this.location.pathname !== location.pathname || !this.location.anchor && !location.anchor) {
	        this.popping = true;
	        this.location = location; // If everything is fine we can save our location and do what we need to
	        // do before fetching it.

	        this.beforeFetch();
	      } else {
	        // Update Location
	        this.location = location;
	      }
	    }
	    /**
	     * Update DOM on `click` event.
	     */

	  }, {
	    key: "pushState",
	    value: function pushState() {
	      if (!this.popping) {
	        window.history.pushState(this.location, '', this.location.href);
	      }
	    }
	    /**
	     * Fetch the page from URL
	     *
	     * @return {string} Fetch response
	     */

	  }, {
	    key: "fetch",
	    value: function (_fetch) {
	      function fetch() {
	        return _fetch.apply(this, arguments);
	      }

	      fetch.toString = function () {
	        return _fetch.toString();
	      };

	      return fetch;
	    }(
	    /*#__PURE__*/
	    core_asyncToGenerator(
	    /*#__PURE__*/
	    regeneratorRuntime.mark(function _callee() {
	      var response;
	      return regeneratorRuntime.wrap(function _callee$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              _context.next = 2;
	              return fetch(this.location.href, {
	                mode: 'same-origin',
	                method: 'GET',
	                headers: {
	                  'X-Requested-With': 'Highway'
	                },
	                credentials: 'same-origin'
	              });

	            case 2:
	              response = _context.sent;

	              if (!(response.status >= 200 && response.status < 300)) {
	                _context.next = 5;
	                break;
	              }

	              return _context.abrupt("return", response.text());

	            case 5:
	              window.location.href = this.location.href;

	            case 6:
	            case "end":
	              return _context.stop();
	          }
	        }
	      }, _callee, this);
	    })))
	    /**
	     * Do some tests before HTTP requests to optimize pipeline.
	     */

	  }, {
	    key: "beforeFetch",
	    value: function () {
	      var _beforeFetch = core_asyncToGenerator(
	      /*#__PURE__*/
	      regeneratorRuntime.mark(function _callee2() {
	        var datas, results;
	        return regeneratorRuntime.wrap(function _callee2$(_context2) {
	          while (1) {
	            switch (_context2.prev = _context2.next) {
	              case 0:
	                // Push State
	                this.pushState(); // We lock the navigation to avoid multiples clicks that could overload the
	                // navigation process meaning that if the a navigation is running the user
	                // cannot trigger a new one while the previous one is running.

	                this.running = true; // We emit an event right before hiding the current view to create a hook
	                // for developers that want to do stuffs when an elligible link is clicked.

	                this.emit('NAVIGATE_OUT', {
	                  from: {
	                    page: this.From.properties.page,
	                    view: this.From.properties.view
	                  },
	                  trigger: this.trigger,
	                  location: this.location
	                }); // Transition Datas

	                datas = {
	                  trigger: this.trigger,
	                  contextual: this.Contextual
	                }; // We have to verify our cache in order to save some HTTPRequests. If we
	                // don't use any caching system everytime we would come back to a page we
	                // already saw we will have to fetch it again and it's pointless.

	                if (!this.cache.has(this.location.href)) {
	                  _context2.next = 10;
	                  break;
	                }

	                _context2.next = 7;
	                return this.From.hide(datas);

	              case 7:
	                // Get Properties
	                this.properties = this.cache.get(this.location.href);
	                _context2.next = 15;
	                break;

	              case 10:
	                _context2.next = 12;
	                return Promise.all([this.fetch(), this.From.hide(datas)]);

	              case 12:
	                results = _context2.sent;
	                // Now everything went fine we can extract the properties of the view we
	                // successfully fetched and keep going.
	                this.properties = this.Helpers.getProperties(results[0]); // We cache our result
	                // eslint-disable-next-line

	                this.cache.set(this.location.href, this.properties);

	              case 15:
	                this.afterFetch();

	              case 16:
	              case "end":
	                return _context2.stop();
	            }
	          }
	        }, _callee2, this);
	      }));

	      function beforeFetch() {
	        return _beforeFetch.apply(this, arguments);
	      }

	      return beforeFetch;
	    }()
	    /**
	     * Push page in DOM
	     */

	  }, {
	    key: "afterFetch",
	    value: function () {
	      var _afterFetch = core_asyncToGenerator(
	      /*#__PURE__*/
	      regeneratorRuntime.mark(function _callee3() {
	        var Renderer;
	        return regeneratorRuntime.wrap(function _callee3$(_context3) {
	          while (1) {
	            switch (_context3.prev = _context3.next) {
	              case 0:
	                _context3.next = 2;
	                return this.properties.renderer;

	              case 2:
	                Renderer = _context3.sent;
	                this.To = new Renderer(this.properties);
	                this.To.add(); // We then emit a now event right before the view is shown to create a hook
	                // for developers who want to make stuff before the view is visible.

	                this.emit('NAVIGATE_IN', {
	                  to: {
	                    page: this.To.properties.page,
	                    view: this.To.wrap.lastElementChild
	                  },
	                  trigger: this.trigger,
	                  location: this.location
	                }); // We wait for the view transition to be over before resetting some variables
	                // and reattaching the events to all the new elligible links in our DOM.

	                _context3.next = 8;
	                return this.To.show({
	                  trigger: this.trigger,
	                  contextual: this.Contextual
	                });

	              case 8:
	                this.popping = false;
	                this.running = false; // Detach Event on Links

	                this.detach(this.links); // Get all elligible links.

	                this.links = document.querySelectorAll('a:not([target]):not([data-router-disabled])'); // Attach Event on Links

	                this.attach(this.links); // Finally we emit a last event to create a hook for developers who want to
	                // make stuff when the navigation has ended.

	                this.emit('NAVIGATE_END', {
	                  to: {
	                    page: this.To.properties.page,
	                    view: this.To.wrap.lastElementChild
	                  },
	                  from: {
	                    page: this.From.properties.page,
	                    view: this.From.properties.view
	                  },
	                  trigger: this.trigger,
	                  location: this.location
	                }); // Last but not least we swap the From and To renderers for future navigations.

	                this.From = this.To; // Reset Trigger

	                this.trigger = null;

	              case 16:
	              case "end":
	                return _context3.stop();
	            }
	          }
	        }, _callee3, this);
	      }));

	      function afterFetch() {
	        return _afterFetch.apply(this, arguments);
	      }

	      return afterFetch;
	    }()
	  }]);

	  return Core;
	}(tiny_emitter_default.a);


	// CONCATENATED MODULE: ./src/transition.js





	function transition_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function transition_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function transition_createClass(Constructor, protoProps, staticProps) { if (protoProps) transition_defineProperties(Constructor.prototype, protoProps); if (staticProps) transition_defineProperties(Constructor, staticProps); return Constructor; }

	/**
	 * @file Highway default transition that handle DOM animations.
	 * @author Anthony Du Pont <bulldog@dogstudio.co>
	 */
	var Transition =
	/*#__PURE__*/
	function () {
	  /**
	   * @arg {object} wrap — [data-router-wrapper] node
	   * @arg {object} name — Transition name
	   * @constructor
	   */
	  function Transition(wrap, name) {
	    transition_classCallCheck(this, Transition);

	    // The [data-router-wrapper] is the only main information we need since the role of
	    // the transition is to show/hide the required DOM elements.
	    this.wrap = wrap; // Save transition name for later.

	    this.name = name;
	  }
	  /**
	   * Add the view in DOM and play an `in` transition if one is defined.
	   *
	   * @return {object} Promise
	   * @param {object} datas - Set of datas
	   */


	  transition_createClass(Transition, [{
	    key: "show",
	    value: function show(_ref) {
	      var _this = this;

	      var trigger = _ref.trigger,
	          contextual = _ref.contextual;
	      // Get View
	      var to = this.wrap.lastElementChild;
	      var from = this.wrap.firstElementChild; // Promise

	      return new Promise(function (resolve) {
	        // The `in` method in encapsulated in the `show` method make transition
	        // code easier to write. This way you don't have to define any Promise
	        // in your transition code and focus on the transition itself.
	        if (!contextual) {
	          // Change Attributes
	          to.setAttribute('data-transition-in', _this.name);
	          to.removeAttribute('data-transition-out', _this.name); // Call transition attached to the view.

	          _this.in && _this.in({
	            to: to,
	            from: from,
	            trigger: trigger,
	            done: resolve
	          });
	        } else {
	          // Change Attributes
	          to.setAttribute('data-transition-in', contextual.name);
	          to.removeAttribute('data-transition-out', contextual.name); // Call the contextual transition.

	          contextual.in && contextual.in({
	            to: to,
	            from: from,
	            trigger: trigger,
	            done: resolve
	          });
	        }
	      });
	    }
	    /**
	     * Play an `out` transition if one is defined and remove the view from DOM.
	     *
	     * @return {object} Promise
	     * @param {object} datas - Set of datas
	     */

	  }, {
	    key: "hide",
	    value: function hide(_ref2) {
	      var _this2 = this;

	      var trigger = _ref2.trigger,
	          contextual = _ref2.contextual;
	      // Get view
	      var from = this.wrap.firstElementChild; // Promise

	      return new Promise(function (resolve) {
	        // The `out` method in encapsulated in the `hide` method make transition
	        // code easier to write. This way you don't have to define any Promise
	        // in your transition code and focus on the transition itself.
	        if (!contextual) {
	          // Change Attributes
	          from.setAttribute('data-transition-out', _this2.name);
	          from.removeAttribute('data-transition-in', _this2.name); // Call the transition attached to the view.

	          _this2.out && _this2.out({
	            from: from,
	            trigger: trigger,
	            done: resolve
	          });
	        } else {
	          // Change Attributes
	          from.setAttribute('data-transition-out', contextual.name);
	          from.removeAttribute('data-transition-in', contextual.name); // Call the contextual transition.

	          contextual.out && contextual.out({
	            from: from,
	            trigger: trigger,
	            done: resolve
	          });
	        }
	      });
	    }
	  }]);

	  return Transition;
	}();


	// CONCATENATED MODULE: ./src/highway.js
	/**
	 * @file Highway object containing all parts of the script.
	 * @author Anthony Du Pont <bulldog@dogstudio.co>
	 */



	 // Highway Version

	console.log('Highway v2.1.3'); // Export Highway

	/* harmony default export */ var highway = __webpack_exports__["default"] = ({
	  Core: core_Core,
	  Helpers: helpers_Helpers,
	  Renderer: Renderer,
	  Transition: Transition
	});

	/***/ })
	/******/ ]);
	});
	});

	var Highway = unwrapExports(highway);

	var DomService =
	/*#__PURE__*/
	function () {
	  function DomService() {
	    this.secondaryScroll$_ = DomService.secondaryScroll$_;
	  }

	  var _proto = DomService.prototype;

	  _proto.traverseUp = function traverseUp(node, callback, i) {
	    if (i === void 0) {
	      i = 0;
	    }

	    if (!node) {
	      return;
	    }

	    var result = callback(node, i);

	    if (result) {
	      return result;
	    }

	    return this.traverseUp(node.parentNode, callback, i + 1);
	  };

	  _proto.traverseDown = function traverseDown(node, callback, i) {
	    if (i === void 0) {
	      i = 0;
	    }

	    if (!node) {
	      return;
	    }

	    var result = callback(node, i);

	    if (result) {
	      return result;
	    }

	    if (node.nodeType === 1) {
	      var j = 0,
	          t = node.childNodes.length;

	      while (j < t && !result) {
	        result = this.traverseDown(node.childNodes[j], callback, i + 1);
	        j++;
	      }
	    }

	    return result;
	  };

	  _proto.hasWebglSupport = function hasWebglSupport() {
	    if (this.isIE()) {
	      return false;
	    }

	    if (!this.hasWebgl()) {
	      return false;
	    }

	    return true;
	  };

	  _proto.isIE = function isIE() {
	    var ua = window.navigator.userAgent;
	    var msie = ua.indexOf('MSIE ');

	    if (msie > 0) {
	      // IE 10 or older => return version number
	      return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	    }

	    var trident = ua.indexOf('Trident/');

	    if (trident > 0) {
	      // IE 11 => return version number
	      var rv = ua.indexOf('rv:');
	      return 'msie' + parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	    }

	    var edge = ua.indexOf('Edge/');

	    if (edge > 0) {
	      // Edge (IE 12+) => return version number
	      return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	    } // other browser


	    return false;
	  };

	  _proto.hasWebgl = function hasWebgl() {
	    return false;
	  };

	  _proto.getOuterHeight = function getOuterHeight(node) {
	    var height = node.clientHeight;
	    var computedStyle = window.getComputedStyle(node);
	    height += parseInt(computedStyle.marginTop, 10);
	    height += parseInt(computedStyle.marginBottom, 10);
	    height += parseInt(computedStyle.borderTopWidth, 10);
	    height += parseInt(computedStyle.borderBottomWidth, 10);
	    return height;
	  };

	  _proto.getOuterWidth = function getOuterWidth(node) {
	    var width = node.clientWidth;
	    var computedStyle = window.getComputedStyle(node);
	    width += parseInt(computedStyle.marginLeft, 10);
	    width += parseInt(computedStyle.marginRight, 10);
	    width += parseInt(computedStyle.borderLeftWidth, 10);
	    width += parseInt(computedStyle.borderRightWidth, 10);
	    return width;
	  };

	  _proto.raf$ = function raf$() {
	    return DomService.raf$;
	  };

	  _proto.windowRect$ = function windowRect$() {
	    return DomService.windowRect$;
	  };

	  _proto.rafAndRect$ = function rafAndRect$() {
	    return DomService.rafAndRect$;
	  };

	  _proto.scroll$ = function scroll$() {
	    return DomService.scroll$;
	  };

	  _proto.secondaryScroll$ = function secondaryScroll$(target) {
	    return DomService.secondaryScroll$(target);
	  };

	  _proto.scrollAndRect$ = function scrollAndRect$() {
	    return DomService.scrollAndRect$;
	  };

	  _proto.smoothScroll$ = function smoothScroll$(selector, friction) {
	    var _this = this;

	    if (friction === void 0) {
	      friction = 20;
	    }

	    var body = document.querySelector('body');
	    var node = document.querySelector(selector); // const outerHeight = this.getOuterHeight(node);
	    /*
	    const onWheel = (event) => {
	    	down = true;
	    }
	    const onDown = () => {
	    	down = true;
	    }
	    const onUp = () => {
	    	down = false;
	    }
	    document.addEventListener('wheel', onWheel);
	    document.addEventListener('touchstart', onDown);
	    document.addEventListener('touchend', onUp);
	    */

	    /*
	    document.addEventListener('touchstart', () => {
	    	console.log('touchstart');
	    	body.classList.add('down');
	    	down = true;
	    }, {passive:true});
	    document.addEventListener('touchend', () => {
	    	body.classList.remove('down');
	    	down = false;
	    });
	    console.log(window);
	    */

	    return this.raf$().pipe(map(function () {
	      var outerHeight = _this.getOuterHeight(node); // console.log(window.DocumentTouch);
	      // console.log(document instanceof DocumentTouch);
	      // console.log(navigator.msMaxTouchPoints);


	      if (body.offsetHeight !== outerHeight) {
	        // margin ?
	        body.style = "height: " + outerHeight + "px";
	      }

	      var nodeTop = node.top || 0;
	      var top =  Math.round((nodeTop + (-_this.scrollTop - nodeTop) / friction) * 100) / 100;

	      if (node.top !== top) {
	        node.top = top;
	        node.style = "position: fixed; width: 100%; transform: translateY(" + top + "px)";
	        return top;
	      } else {
	        return null;
	      }
	    }), filter(function (x) {
	      return x !== null;
	    }), shareReplay());
	  }
	  /*
	  // trackpad
	  window.onwheel = function(e) {
	    e.preventDefault();
	    if (e.ctrlKey) {
	      zoom += e.deltaY;
	    } else {
	      offsetX += e.deltaX * 2;
	      offsetY -= e.deltaY * 2;
	    }
	  };
	  */
	  ;

	  _proto.rafIntersection$ = function rafIntersection$(node) {
	    return this.rafAndRect$().pipe(map(function (datas) {
	      // const scrollTop = datas[0];
	      var windowRect = datas[1];
	      var rect = Rect.fromNode(node);

	      if (rect.height) {
	        var intersection = rect.intersection(windowRect);
	        var response = DomService.rafIntersection_;
	        response.scroll = datas[0];
	        response.windowRect = datas[1];
	        response.rect = rect;
	        response.intersection = intersection;
	        return response;
	      }
	    }), filter(function (response) {
	      return response !== undefined;
	    }));
	  };

	  _proto.scrollIntersection$ = function scrollIntersection$(node) {
	    var o = this.scrollAndRect$().pipe(map(function (datas) {
	      // const scrollTop = datas[0];
	      var windowRect = datas[1];
	      var rect = Rect.fromNode(node);

	      if (rect.height) {
	        var intersection = rect.intersection(windowRect);
	        var response = DomService.scrollIntersection_;
	        response.scroll = datas[0];
	        response.windowRect = datas[1];
	        response.rect = rect;
	        response.intersection = intersection;
	        return response;
	      }
	    }), filter(function (response) {
	      return response !== undefined;
	    }));
	    DomService.secondaryScroll$_.next({
	      target: window
	    });
	    return o;
	  };

	  _proto.appear$ = function appear$(node, value) {
	    if (value === void 0) {
	      value = 0.0;
	    }

	    // -0.5
	    return this.scrollIntersection$(node).pipe(filter(function (x) {
	      return x.intersection.y > value;
	    }), first());
	  };

	  _proto.visibility$ = function visibility$(node, value) {
	    if (value === void 0) {
	      value = 0.5;
	    }

	    return this.scrollIntersection$(node).pipe(map(function (x) {
	      return x.intersection.y > value;
	    }), distinctUntilChanged());
	  };

	  _proto.firstVisibility$ = function firstVisibility$(node, value) {
	    if (value === void 0) {
	      value = 0.5;
	    }

	    return this.visibility$(node, value).pipe(filter(function (visible) {
	      return visible;
	    }), first());
	  };

	  _proto.addCustomRules = function addCustomRules() {
	    var sheet = this.addCustomSheet();
	    var body = document.querySelector('body');
	    var scrollBarWidth = window.innerWidth - body.clientWidth;
	    var rule = "body.droppin-in { padding-right: " + scrollBarWidth + "px; }";
	    sheet.insertRule(rule, 0);
	    rule = "body.droppin-in header { width: calc(100% - " + scrollBarWidth + "px); }";
	    sheet.insertRule(rule, 1);
	    rule = "body.droppin-in menu--product { width: calc(100% - " + scrollBarWidth + "px); }";
	    sheet.insertRule(rule, 2);
	  };

	  _proto.addCustomSheet = function addCustomSheet() {
	    var style = document.createElement('style');
	    style.appendChild(document.createTextNode(''));
	    document.head.appendChild(style);
	    return style.sheet;
	  };

	  DomService.factory = function factory() {
	    return new DomService();
	  };

	  DomService.getScrollTop = function getScrollTop(node) {
	    if (node === document || node === window) {
	      return this.getScrollTop(document.scrollingElement || document.documentElement || document.body);
	    }

	    return node.pageYOffset || node.scrollY || node.scrollTop || 0;
	  };

	  DomService.getScrollLeft = function getScrollLeft(node) {
	    if (node === document || node === window) {
	      return this.getScrollLeft(document.scrollingElement || document.documentElement || document.body);
	    }

	    return node.pageXOffset || node.scrollX || node.scrollLeft || 0;
	  };

	  DomService.secondaryScroll$ = function secondaryScroll$(target) {
	    return fromEvent(target, 'scroll').pipe(tap(function (event) {
	      return DomService.secondaryScroll$_.next(event);
	    }));
	  };

	  _createClass(DomService, [{
	    key: "scrollTop",
	    get: function get() {
	      return DomService.getScrollTop(window);
	    }
	  }, {
	    key: "scrollLeft",
	    get: function get() {
	      return DomService.getScrollLeft(window);
	    }
	  }]);

	  return DomService;
	}();
	DomService.factory.$inject = [];
	DomService.rafIntersection_ = {};
	DomService.scrollIntersection_ = {};
	DomService.raf$ = interval(0, animationFrame);

	DomService.windowRect$ = function () {
	  var windowRect = new Rect({
	    width: window.innerWidth,
	    height: window.innerHeight
	  });
	  return fromEvent(window, 'resize').pipe(map(function (originalEvent) {
	    windowRect.width = window.innerWidth;
	    windowRect.height = window.innerHeight;
	    return windowRect;
	  }), startWith(windowRect), shareReplay());
	}();

	DomService.rafAndRect$ = combineLatest(DomService.raf$, DomService.windowRect$).pipe(shareReplay());

	DomService.mainScroll$ = function () {
	  var target = window;
	  return fromEvent(target, 'scroll').pipe(shareReplay());
	}();

	DomService.secondaryScroll$_ = new Subject();

	DomService.scroll$ = function () {
	  var target = window;
	  var previousTop = DomService.getScrollTop(target);
	  var event = {
	    scrollTop: previousTop,
	    scrollLeft: DomService.getScrollLeft(target),
	    direction: 0,
	    originalEvent: null
	  };
	  return merge(DomService.mainScroll$, DomService.secondaryScroll$_).pipe(auditTime(1000 / 60), map(function (originalEvent) {
	    event.scrollTop = DomService.getScrollTop(originalEvent.target);
	    event.scrollLeft = DomService.getScrollLeft(originalEvent.target);
	    var diff = event.scrollTop - previousTop;
	    event.direction = diff ? diff / Math.abs(diff) : 0;
	    previousTop = event.scrollTop;
	    event.originalEvent = originalEvent;
	    return event;
	  }), startWith(event), shareReplay());
	}();

	DomService.scrollAndRect$ = combineLatest(DomService.scroll$, DomService.windowRect$).pipe(shareReplay());

	var first$1 = true;

	var CustomRenderer =
	/*#__PURE__*/
	function (_Highway$Renderer) {
	  _inheritsLoose(CustomRenderer, _Highway$Renderer);

	  function CustomRenderer() {
	    return _Highway$Renderer.apply(this, arguments) || this;
	  }

	  var _proto = CustomRenderer.prototype;

	  _proto.update = function update() {
	    this.updateMeta();
	    this.updateGTMData();
	    this.pageView();
	    this.updateBrand();
	    this.updateSearchQuery();
	    this.updateMarketsAndLanguages();
	  };

	  _proto.updateMeta = function updateMeta() {
	    var page = this.properties.page;
	    document.title = page.title;
	  };

	  _proto.updateBrand = function updateBrand() {
	    var page = this.properties.page;
	    var body = page.querySelector('body');
	    var brand = /(["'])(\\?.)*?\1/.exec(body.getAttribute('ng-init') || '');
	    brand = brand ? brand[0].replace(/\'/g, '') : 'atlas-concorde'; // console.log(brand);

	    CustomRenderer.$timeout(function () {
	      var scope = CustomRenderer.scope;
	      scope.root.brand = brand; // console.log('CustomRenderer.update', scope);
	    });
	  };

	  _proto.updateSearchQuery = function updateSearchQuery() {
	    var page = this.properties.page;
	    var dataSearch = Array.from(page.querySelectorAll('[data-search]'));

	    if (dataSearch.length) {
	      var pageDataSearch = Array.from(document.querySelectorAll('[data-search]'));
	      pageDataSearch.forEach(function (node) {
	        node.setAttribute('data-search', dataSearch[0].getAttribute('data-search'));
	      });
	    }
	  };

	  _proto.updateMarketsAndLanguages = function updateMarketsAndLanguages() {
	    var page = this.properties.page;
	    var marketSelector = page.getElementById('market-selector');

	    if (marketSelector != null) {
	      try {
	        var marketUrls = angular.fromJson(marketSelector.getAttribute('data-markets'));
	        CustomRenderer.scope.root.marketUrls = marketUrls;
	      } catch (e) {}
	    }
	    /*
	    const marketsAndLanguages = Array.from(page.querySelectorAll('.nav--markets__secondary > li > a'));
	    const anchors = Array.from(document.querySelectorAll('.nav--markets__secondary > li > a'));
	    anchors.forEach(a => {
	    	const marketAndLanguage = marketsAndLanguages.find(x => x.id === a.id);
	    	if (marketAndLanguage) {
	    		a.href = marketAndLanguage.href;
	    		console.log('updateMarketsAndLanguages', marketAndLanguage.id, marketAndLanguage.href);
	    	}
	    });
	    */

	  };

	  _proto.pageView = function pageView() {
	    var page = this.properties.page;

	    if (!page.getElementById(GtmService.FILTERS_SCRIPT_ID)) {
	      GtmService.pageView();
	    }
	  };

	  _proto.updateGTMData = function updateGTMData() {
	    var page = this.properties.page;
	    var script = page.getElementById("gtm-page-data");

	    if (script && script.text) {
	      try {
	        new Function(script.text)();
	      } catch (error) {}
	    }
	  } // This method in the renderer is run when the data-router-view is added to the DOM Tree.
	  ;

	  _proto.onEnter = function onEnter() {
	    // console.log('onEnter');
	    if (!first$1) {
	      CustomRenderer.$timeout(function () {
	        var $compile = CustomRenderer.$compile;
	        var view = Array.from(document.querySelectorAll('.view')).pop(); // console.log(view.childNodes);

	        var element = angular.element(view.childNodes);
	        var $scope = CustomRenderer.scope;
	        $scope.root.menuOpened = false;
	        $scope.root.menuProductOpened = false;
	        var $newScope = $scope.$new();
	        var content = $compile(element)($newScope);
	        CustomRenderer.$newScope = $newScope;
	        CustomRenderer.content = content;
	        /*
	        scope.$on('$destroy', (event) => {
	        	console.log('.view -> $destroy', event);
	        });
	        */
	        // element.append(content);
	      });
	    }
	  } // This method in the renderer is run when transition to hide the data-router-view is called.
	  ;

	  _proto.onLeave = function onLeave() {
	    // console.log('onLeave', first);
	    if (first$1) {
	      first$1 = false;
	      var view = Array.from(document.querySelectorAll('.view')).shift();
	      var element = angular.element(view.childNodes);
	      /*
	      scope.$on('$destroy', (event) => {
	      	console.log('.view -> $destroy', event);
	      });
	      */
	    }
	  } // This method in the renderer is run when the transition to display the data-router-view is done.
	  ;

	  _proto.onEnterCompleted = function onEnterCompleted() {} // console.log('onEnterCompleted');

	  /*
	  if (first) {
	  	first = false;
	  }
	  */
	  // This method in the renderer is run when the data-router-view is removed from the DOM Tree.
	  ;

	  _proto.onLeaveCompleted = function onLeaveCompleted() {// console.log('onLeaveCompleted');
	  };

	  CustomRenderer.$destroy = function $destroy(from) {
	    // console.log('CustomRenderer.destroy', this.content, this.$newScope);
	    if (CustomRenderer.scope && CustomRenderer.scope.$root && CustomRenderer.scope.$root.first) {
	      CustomRenderer.$timeout(function () {
	        CustomRenderer.scope.$root.first = null;
	      });
	    } else {
	      if (this.content) {
	        this.content.remove();
	        this.content = null;
	      }

	      if (this.$newScope) {
	        this.$newScope.$destroy();
	        this.$newScope = null;
	      }

	      from.remove();
	    }
	  };

	  CustomRenderer.collectScopes = function collectScopes(scope, scopes) {
	    scopes = scopes || [];

	    if (scope) {
	      var child = scope && scope.$$childHead;

	      while (child) {
	        scopes.push(child);
	        scopes = this.collectScopes(child, scopes);
	        child = child.$$nextSibling;
	      } // console.log(scopes);

	    }

	    return scopes;
	  };

	  return CustomRenderer;
	}(Highway.Renderer);

	var PageTransition =
	/*#__PURE__*/
	function (_Highway$Transition) {
	  _inheritsLoose(PageTransition, _Highway$Transition);

	  function PageTransition() {
	    return _Highway$Transition.apply(this, arguments) || this;
	  }

	  var _proto = PageTransition.prototype;

	  _proto.in = function _in(_ref) {
	    var from = _ref.from,
	        to = _ref.to,
	        done = _ref.done;
	    // console.log('PageTransition.in');
	    var loader = document.querySelector('.loader--cube');
	    TweenMax.to(loader, 0.45, {
	      opacity: 0,
	      ease: Power2.easeInOut,
	      onComplete: function onComplete() {
	        TweenMax.set(loader, {
	          display: 'none'
	        });
	      }
	    });
	    TweenMax.set(to, {
	      opacity: 0,
	      minHeight: from.offsetHeight
	    });
	    CustomRenderer.$destroy(from);

	    if (PageTransition.origin) {
	      var left = PageTransition.origin.x / window.innerWidth * 100;
	      var top = PageTransition.origin.y;
	      TweenMax.set(to, {
	        scale: 1.1,
	        transformOrigin: left + "% " + top + "px"
	      });
	    } // console.log(PageTransition.origin);


	    TweenMax.to(to, 0.6, {
	      scale: 1,
	      opacity: 1,
	      delay: 0.1,
	      // 0.250,
	      // overwrite: 'all',
	      ease: Power2.easeInOut,
	      onComplete: function onComplete() {
	        setTimeout(function () {
	          TweenMax.set(to, {
	            clearProps: 'all'
	          });
	          TweenMax.set(to, {
	            minHeight: 0,
	            opacity: 1
	          });
	        }, 50); // ci sono estensioni che bloccano questo genere di script

	        if (addthis.layers && addthis.layers.refresh) {
	          addthis.layers.refresh();
	        }

	        done();
	      }
	    });
	  };

	  _proto.out = function out(_ref2) {
	    var from = _ref2.from,
	        trigger = _ref2.trigger,
	        done = _ref2.done;
	    // console.log('PageTransition.out');
	    var loader = document.querySelector('.loader--cube');
	    TweenMax.set(loader, {
	      opacity: 0,
	      display: 'block'
	    });
	    TweenMax.to(loader, 0.45, {
	      opacity: 1,
	      ease: Power2.easeInOut
	    });
	    var headerMenu = document.querySelector('.header__menu');

	    if (headerMenu) {
	      headerMenu.classList.remove('opened');
	      /*
	      TweenMax.to(headerMenu, 0.3, {
	      	maxHeight: 0,
	      	delay: 0,
	      	onComplete: () => {
	      		TweenMax.set(headerMenu, { clearProps: 'all' });
	      		// headerMenu.classList.remove('opened');
	      	}
	      });
	      */
	    }

	    var left = 50;
	    var top = DomService.getScrollTop(window);

	    if (trigger instanceof HTMLElement) {
	      var rect = Rect.fromNode(trigger);
	      PageTransition.origin = rect.center;
	      top += rect.center.y;
	      left = rect.center.x / window.innerWidth * 100;
	    }

	    TweenMax.set(from, {
	      transformOrigin: left + "% " + top + "px"
	    });
	    TweenMax.to(from, 0.6, {
	      scale: 1.1,
	      opacity: 0,
	      delay: 0,
	      // 0.150,
	      // overwrite: 'all',
	      ease: Power2.easeInOut,
	      onComplete: function onComplete() {
	        setTimeout(done, 500);
	      }
	    });
	  };

	  return PageTransition;
	}(Highway.Transition);

	// Import Quicklink
	// See: https://github.com/GoogleChromeLabs/quicklink
	// import Quicklink from 'quicklink/dist/quicklink.mjs';

	var HighwayDirective =
	/*#__PURE__*/
	function () {
	  function HighwayDirective($compile, $timeout) {
	    this.$compile = $compile;
	    this.$timeout = $timeout;
	    this.restrict = 'A';
	    this.link$ = new Subject();
	  }

	  var _proto = HighwayDirective.prototype;

	  _proto.onLink$ = function onLink$() {
	    return this.link$.pipe(debounceTime(50));
	  };

	  _proto.link = function link(scope, element, attributes, controller) {
	    var _this = this;

	    this.$timeout(function () {
	      _this.init(scope, element, attributes, controller);
	    });
	  };

	  _proto.init = function init(scope, element, attributes, controller) {
	    var _this2 = this;

	    CustomRenderer.$compile = this.$compile;
	    CustomRenderer.$timeout = this.$timeout;
	    CustomRenderer.scope = scope;
	    var wasProduct = false;

	    var onProductMenu = function onProductMenu() {
	      setTimeout(function () {
	        var top = 0;
	        var sectionProduct = element[0].querySelector('.section--product');

	        if (wasProduct && sectionProduct && window.innerWidth > 860) {
	          var anchors = Array.from(sectionProduct.querySelectorAll('a'));
	          var selectedAnchor = anchors.find(function (x) {
	            return window.location.href.lastIndexOf(x.href) === window.location.href.length - x.href.length;
	          }); // console.log(anchors, selectedAnchor);

	          if (selectedAnchor && anchors.indexOf(selectedAnchor) !== 0) {
	            var sectionProductTop = sectionProduct.getBoundingClientRect().top;
	            top = sectionProductTop + DomService.getScrollTop(window);
	          }
	        }

	        window.scrollTo(0, top); // console.log('wasProduct', wasProduct);
	        // console.log(wasProduct, sectionProduct);

	        wasProduct = Boolean(sectionProduct); // console.log('isProduct', wasProduct);
	      }, 100);
	    };
	    /*
	    Highway.Core.prototype.pushState_ = Highway.Core.prototype.pushState;
	    Highway.Core.prototype.pushState = () => {};
	    */


	    var H = new Highway.Core({
	      renderers: {
	        view: CustomRenderer
	      },
	      transitions: {
	        view: PageTransition
	      }
	    });
	    this.H = H;
	    CustomRenderer.H = H;
	    scope.$on('onHrefNode', function ($scope, node) {
	      _this2.link$.next();
	    });
	    var subscription = this.onLink$().subscribe(function (x) {
	      // console.log('onLinks$');
	      H.detach(H.links);
	      var links = document.querySelectorAll('a:not([target]):not([data-router-disabled])');
	      H.links = links;
	      H.attach(links);
	      /*
	      links.forEach(x => {
	      	x.classList.remove('active');
	      	if (x.href === location.href) {
	      		x.classList.add('active');
	      	}
	      });
	      */
	    });
	    var properties = H.cache.get(H.location.href);
	    properties.view = scope.$root.firstView;
	    H.cache.set(H.location.href, properties);
	    H.on('NAVIGATE_OUT', function (_ref) {
	      var to = _ref.to,
	          trigger = _ref.trigger,
	          location = _ref.location;
	      scope.$broadcast('onNavigateOut', location);
	    });
	    H.on('NAVIGATE_IN', function (_ref2) {
	      var to = _ref2.to,
	          trigger = _ref2.trigger,
	          location = _ref2.location;
	      // console.log('NAVIGATE_IN');
	      H.detach(H.links);
	      onProductMenu();
	    });
	    /*
	    H.on('NAVIGATE_END', ({ to, trigger, location }) => {
	    	console.log('NAVIGATE_END', document.title);
	    	// H.pushState_();
	    });
	    */

	    scope.$on('$destroy', function () {
	      // H.destroy();
	      subscription.unsubscribe();
	    });
	    /*
	    const pushState = history.pushState;
	    history.pushState = (...args) => {
	    	console.log('pushState', args, document.title);
	    	return pushState.apply(history, args);
	    };
	    */

	    setTimeout(onProductMenu, 1000);

	    if (!H.properties.page.getElementById(GtmService.FILTERS_SCRIPT_ID)) {
	      GtmService.pageView();
	    }
	  };

	  HighwayDirective.factory = function factory($compile, $timeout) {
	    return new HighwayDirective($compile, $timeout);
	  };

	  return HighwayDirective;
	}();
	HighwayDirective.factory.$inject = ['$compile', '$timeout'];

	var ITEMS_PER_PAGE$2 = 9;

	var MagazineCtrl =
	/*#__PURE__*/
	function () {
	  function MagazineCtrl($scope, $timeout, LocationService) {
	    this.$scope = $scope;
	    this.$timeout = $timeout;
	    this.locationService = LocationService;
	    this.magazine = window.magazine || []; // !!! FAKE
	    //while (this.magazine.length < 100) {
	    //	this.magazine = this.magazine.concat(this.magazine);
	    //}
	    // !!! FAKE

	    this.maxItems = 0;
	    this.visibleItems = [];
	  }

	  var _proto = MagazineCtrl.prototype;

	  _proto.onScroll = function onScroll(event) {
	    var _this = this;

	    if (event.rect.bottom < event.windowRect.bottom) {
	      // console.log('more!');
	      if (!this.busy && this.maxItems < this.magazine.length) {
	        this.$timeout(function () {
	          _this.busy = true;

	          _this.$timeout(function () {
	            _this.maxItems += ITEMS_PER_PAGE$2;
	            _this.visibleItems = _this.magazine.slice(0, _this.maxItems);
	            _this.busy = false; // console.log(this.visibleItems.length);
	          }, 1000);
	        }, 0);
	      }
	    }
	  };

	  return MagazineCtrl;
	}();

	MagazineCtrl.$inject = ['$scope', '$timeout', 'LocationService'];

	var MoodboardDropdownDirective =
	/*#__PURE__*/
	function () {
	  function MoodboardDropdownDirective($compile) {
	    this.$compile = $compile;
	    this.restrict = 'A';
	    this.template = "\n<span has-dropdown=\".moodboard__value\">\n\t<span class=\"dropdown\">\n\t\t<ul class=\"nav nav--select\">\n\t\t\t<li ng-repeat=\"item in filter.options track by $index\" ng-class=\"{ active: filter.value == item.value, disabled: item.disabled }\">\n\t\t\t\t<span class=\"option\" ng-class=\"{ 'option--picture': item.image }\" ng-click=\"setFilter(item, filter)\">\n\t\t\t\t\t<img ng-src=\"{{item.image}}\" ng-if=\"item.image\" />\n\t\t\t\t\t<span ng-bind=\"item.label\"></span>\n\t\t\t\t</span>\n\t\t\t</li>\n\t\t</ul>\n\t</span>\n\t<span class=\"moodboard__value\" ng-class=\"{ active: filter.value }\">\n\t\t<span class=\"moodboard__underline\"></span>\n\t\t<span class=\"moodboard__text\">{{filter.placeholder}}</span>\n\t</span>\n</span>\n"; // this.require = 'ngModel';

	    this.scope = {
	      filter: '=?moodboardDropdown'
	    };
	  }

	  var _proto = MoodboardDropdownDirective.prototype;

	  _proto.link = function link(scope, element, attributes, controller) {
	    var _this = this;

	    // console.log('MoodboardDropdownDirective', this.filter);
	    var filter = scope.filter;

	    if (filter.value) {
	      filter.placeholder = filter.options.find(function (x) {
	        return x.value === filter.value;
	      }).label;
	    }

	    scope.setFilter = function (item, filter) {
	      item = item || filter.options[0];
	      filter.value = item.value;
	      filter.placeholder = item.label;

	      if (typeof filter.doFilter === 'function') {
	        filter.doFilter(item, item.value);
	      }

	      scope.$broadcast('onCloseDropdown');
	    };

	    scope.removeFilter = function (filter) {
	      _this.setFilter(null, filter);
	    };

	    scope.$on('$destroy', function () {});
	  };

	  MoodboardDropdownDirective.factory = function factory($compile) {
	    return new MoodboardDropdownDirective($compile);
	  };

	  return MoodboardDropdownDirective;
	}();
	MoodboardDropdownDirective.factory.$inject = ['$compile'];

	var MoodboardSearchDirective =
	/*#__PURE__*/
	function () {
	  function MoodboardSearchDirective($compile) {
	    this.$compile = $compile;
	    this.restrict = 'A';
	    this.scope = {
	      filters: '=moodboardSearch',
	      model: '=model'
	    };
	  }

	  var _proto = MoodboardSearchDirective.prototype;

	  _proto.link = function link(scope, element, attributes, controller) {
	    var _this = this;

	    scope.filters = scope.filters || {};
	    var node = element[0];
	    var html = node.innerText;
	    var keys = Object.keys(scope.filters);
	    keys.forEach(function (x) {
	      // console.log(x);
	      html = html.replace("$" + x + "$", "<span class=\"moodboard__dropdown " + x + "\" moodboard-dropdown=\"filters." + x + "\" ng-click=\"animateOff()\"></span>");
	    }); // console.log('MoodboardSearchDirective', html);

	    node.innerHTML = html;
	    this.$compile(element.contents())(scope);
	    var hasFilter = Object.keys(scope.filters).map(function (x) {
	      return scope.filters[x];
	    }).find(function (x) {
	      return x.value !== null;
	    }) !== undefined;

	    if (!hasFilter) {
	      this.animateUnderlines(node);
	    }

	    scope.animateOff = function () {
	      _this.animateOff(node);
	    };

	    scope.$on('$destroy', function () {});
	  };

	  _proto.animateUnderlines = function animateUnderlines(node) {
	    this.animated = true;
	    var values = Array.from(node.querySelectorAll('.moodboard__underline'));
	    values.forEach(function (x) {
	      TweenMax.set(x, {
	        transformOrigin: '0 50%',
	        scaleX: 0
	      });
	    });
	    var i = -1;

	    var animate = function animate() {
	      i++;
	      i = i % values.length;
	      var u = values[i];
	      TweenMax.set(u, {
	        transformOrigin: '0 50%',
	        scaleX: 0
	      });
	      TweenMax.to(u, 0.50, {
	        scaleX: 1,
	        transformOrigin: '0 50%',
	        delay: 0,
	        ease: Power3.easeInOut,
	        overwrite: 'all',
	        onComplete: function onComplete() {
	          TweenMax.set(u, {
	            transformOrigin: '100% 50%',
	            scaleX: 1
	          });
	          TweenMax.to(u, 0.50, {
	            scaleX: 0,
	            transformOrigin: '100% 50%',
	            delay: 1.0,
	            ease: Power3.easeInOut,
	            overwrite: 'all',
	            onComplete: function onComplete() {
	              animate();
	            }
	          });
	        }
	      });
	    };

	    animate();
	  };

	  _proto.animateOff = function animateOff(node) {
	    if (this.animated) {
	      this.animated = false; // console.log('animateOff');
	      // TweenMax.killAll();

	      var values = Array.from(node.querySelectorAll('.moodboard__underline'));
	      TweenMax.set(values, {
	        transformOrigin: '0 50%',
	        scaleX: 0
	      });
	      TweenMax.to(values, 0.50, {
	        scaleX: 1,
	        transformOrigin: '0 50%',
	        delay: 0,
	        ease: Power3.easeInOut,
	        overwrite: 'all'
	      });
	    }
	  };

	  MoodboardSearchDirective.factory = function factory($compile) {
	    return new MoodboardSearchDirective($compile);
	  };

	  return MoodboardSearchDirective;
	}();
	MoodboardSearchDirective.factory.$inject = ['$compile'];

	var MoodboardSectionCtrl = function MoodboardSectionCtrl($scope, $timeout, LocationService, ApiService) {
	  var _this = this;

	  this.$scope = $scope;
	  this.$timeout = $timeout;
	  this.locationService = LocationService;
	  this.apiService = ApiService;
	  this.filters = window.filters || {};
	  Object.keys(this.filters).forEach(function (key) {
	    var filter = _this.filters[key];
	    filter.options.forEach(function (option) {
	      var value = {};
	      value[key] = option.value;

	      var q = _this.locationService.getSerialization('filters', value);

	      option.query = "?q=" + q; // console.log(option.query, option.value);
	    });
	  });
	};

	MoodboardSectionCtrl.$inject = ['$scope', '$timeout', 'LocationService', 'ApiService'];

	var GTM_CAT$5 = 'moodboard';
	var MOOD_TYPES = Object.freeze({
	  Tile: 1,
	  Horizontal: 2,
	  Vertical: 3,
	  Card: 4,
	  Decor: 5
	});
	var ITEMS_PER_PAGE$3 = 20;

	var MoodboardCtrl =
	/*#__PURE__*/
	function () {
	  function MoodboardCtrl($scope, $timeout, LocationService, ApiService) {
	    this.$scope = $scope;
	    this.$timeout = $timeout;
	    this.locationService = LocationService;
	    this.apiService = ApiService;
	    this.filters = window.filters || {};
	    this.filteredItems = [];
	    this.initialFilters = window.initialFilters || null;
	    this.moodTypes = MOOD_TYPES;
	    this.deserializeFilters(this.initialFilters);
	    this.applyFilters(false);
	  }

	  var _proto = MoodboardCtrl.prototype;

	  _proto.deserializeFilters = function deserializeFilters() {
	    var _this = this;

	    var locationFilters = this.locationService.deserialize('filters') || this.initialFilters || {}; // console.log('MoodboardCtrl.deserializeFilters', filters);

	    Object.keys(this.filters).forEach(function (x) {
	      var filter = _this.filters[x];

	      switch (x) {
	        default:
	          filter.doFilter = function (item, value) {
	            // console.log(item, value);
	            _this.applyFilters(item, value);
	          };

	      }

	      filter.options.unshift({
	        label: filter.placeholder,
	        value: null
	      });
	      var selectedOption = filter.options.find(function (o) {
	        return Boolean(o.value === (locationFilters[x] || null));
	      });
	      filter.value = selectedOption.value;
	      filter.placeholder = selectedOption.label; // console.log(x, filters[x], filter.value);
	    });
	    return filters;
	  };

	  _proto.serializeFilters = function serializeFilters() {
	    var _this2 = this;

	    var filters = {};
	    var any = false;
	    Object.keys(this.filters).forEach(function (x) {
	      var filter = _this2.filters[x];

	      if (filter.value !== null) {
	        filters[x] = filter.value;
	        any = true;
	      }
	    });

	    if (!any) {
	      filters = this.initialFilters ? {} : null;
	    } // console.log('MoodboardCtrl.serializeFilters', filters);


	    this.locationService.serialize('filters', filters);
	    return filters;
	  };

	  _proto.applyFilters = function applyFilters(serialize) {
	    var _this3 = this;

	    // console.log('MoodboardCtrl.applyFilters', this.filters);
	    if (serialize !== false) this.serializeFilters();
	    var me = this;
	    var filters = {};
	    var anyFilter = false;
	    Object.keys(this.filters).map(function (key) {
	      var v = me.filters[key].value;

	      if (v !== null) {
	        filters[key] = v;
	        anyFilter = true;
	      }
	    });

	    if (anyFilter) {
	      this.apiService.moodboard.filter(filters).pipe(first()).subscribe(function (success) {
	        var items = success.data;
	        _this3.filteredItems = [];
	        _this3.visibleItems = [];
	        _this3.maxItems = ITEMS_PER_PAGE$3;

	        _this3.$timeout(function () {
	          _this3.filteredItems = items;
	          _this3.visibleItems = items.slice(0, _this3.maxItems);
	        }, 50);
	      }, function (error) {
	        return console.log('MoodboardCtrl.applyFilters.error', error);
	      });
	    }

	    GtmService.pageViewFilters(GTM_CAT$5, this.filters);
	  };

	  _proto.onScroll = function onScroll(event) {
	    var _this4 = this;

	    if (event.rect.bottom < event.windowRect.bottom) {
	      // console.log('more!');
	      if (!this.busy && this.maxItems < this.filteredItems.length) {
	        this.$timeout(function () {
	          _this4.busy = true;

	          _this4.$timeout(function () {
	            _this4.maxItems += ITEMS_PER_PAGE$3;
	            _this4.visibleItems = _this4.filteredItems.slice(0, _this4.maxItems);
	            _this4.busy = false; // console.log(this.visibleItems.length);
	          }, 1000);
	        }, 0);
	      }
	    }
	  };

	  return MoodboardCtrl;
	}();

	MoodboardCtrl.$inject = ['$scope', '$timeout', 'LocationService', 'ApiService'];

	var ITEMS_PER_PAGE$4 = 9;
	var GTM_CAT$6 = 'news';

	var NewsCtrl =
	/*#__PURE__*/
	function () {
	  function NewsCtrl($scope, $timeout, LocationService) {
	    this.$scope = $scope;
	    this.$timeout = $timeout;
	    this.locationService = LocationService;
	    this.filters = window.filters || {};
	    this.news = window.news || [];
	    this.initialFilters = window.initialFilters || null;
	    this.filteredItems = []; //// !!! FAKE
	    //while (this.news.length < 100) {
	    //	this.news = this.news.concat(this.news);
	    //}
	    //// !!! FAKE

	    this.deserializeFilters(this.initialFilters);
	    this.applyFilters(false);
	  }

	  var _proto = NewsCtrl.prototype;

	  _proto.deserializeFilters = function deserializeFilters(initialFilter) {
	    var _this = this;

	    var locationFilters = this.locationService.deserialize('filters') || initialFilter || {};
	    Object.keys(this.filters).forEach(function (x) {
	      var filter = _this.filters[x];

	      switch (x) {
	        case 'categories':
	          filter.doFilter = function (item, value) {
	            return item.categoryId === value;
	          };

	          break;

	        case 'years':
	          filter.doFilter = function (item, value) {
	            return item.year === value;
	          };

	          break;
	      }

	      filter.options.unshift({
	        label: _this.filters[x].placeholder,
	        value: null
	      });
	      var selectedOption = filter.options.find(function (o) {
	        return Boolean(o.value === (locationFilters[x] || null));
	      });
	      filter.value = selectedOption.value;
	      filter.placeholder = selectedOption.label;
	    });
	    return filters;
	  };

	  _proto.serializeFilters = function serializeFilters() {
	    var _this2 = this;

	    var filters = {};
	    var any = false;
	    Object.keys(this.filters).forEach(function (x) {
	      var filter = _this2.filters[x];

	      if (filter.value !== null) {
	        filters[x] = filter.value;
	        any = true;
	      }
	    });

	    if (!any) {
	      filters = this.initialFilters ? {} : null;
	    } // console.log('ReferenceCtrl.serializeFilters', filters);


	    this.locationService.serialize('filters', filters);
	    return filters;
	  };

	  _proto.applyFilters = function applyFilters(serialize) {
	    var _this3 = this;

	    if (serialize !== false) this.serializeFilters();

	    var _this$getFilteredItem = this.getFilteredItems(this.news),
	        filteredItems = _this$getFilteredItem.filteredItems; // console.log(filteredItems, filters);


	    this.filteredItems = [];
	    this.visibleItems = [];
	    this.maxItems = ITEMS_PER_PAGE$4;
	    this.$timeout(function () {
	      _this3.filteredItems = filteredItems;
	      _this3.visibleItems = filteredItems.slice(0, _this3.maxItems);

	      _this3.updateFilterStates(_this3.news); // delayer for image update

	    }, 50);
	    GtmService.pageViewFilters(GTM_CAT$6, this.filters);
	  };

	  _proto.getFilteredItems = function getFilteredItems(items, skipFilter) {
	    var _this4 = this;

	    var filters = Object.keys(this.filters).map(function (x) {
	      return _this4.filters[x];
	    }).filter(function (x) {
	      return x.value !== null;
	    });
	    var filteredItems = items.slice();

	    if (filters.length) {
	      filteredItems = filteredItems.filter(function (item) {
	        var has = true;
	        filters.forEach(function (filter) {
	          if (filter !== skipFilter) {
	            has = has && filter.doFilter(item, filter.value);
	          }
	        });
	        return has;
	      });
	    }

	    return {
	      filteredItems: filteredItems
	    };
	  };

	  _proto.updateFilterStates = function updateFilterStates(items) {
	    var _this5 = this;

	    Object.keys(this.filters).forEach(function (x) {
	      var filter = _this5.filters[x];

	      var _this5$getFilteredIte = _this5.getFilteredItems(items, filter),
	          filteredItems = _this5$getFilteredIte.filteredItems;

	      filter.options.forEach(function (option) {
	        var has = false;

	        if (option.value) {
	          var i = 0;

	          while (i < filteredItems.length && !has) {
	            var item = filteredItems[i];
	            has = filter.doFilter(item, option.value);
	            i++;
	          }
	        } else {
	          has = true;
	        }

	        option.disabled = !has;
	      });
	    });
	  };

	  _proto.setFilter = function setFilter(item, filter) {
	    item = item || filter.options[0];
	    filter.value = item.value;
	    filter.placeholder = item.label;
	    this.applyFilters();
	    this.$scope.$broadcast('onCloseDropdown');
	  };

	  _proto.removeFilter = function removeFilter(filter) {
	    this.setFilter(null, filter);
	  };

	  _proto.onScroll = function onScroll(event) {
	    var _this6 = this;

	    if (event.rect.bottom < event.windowRect.bottom) {
	      // console.log('more!');
	      if (!this.busy && this.maxItems < this.filteredItems.length) {
	        this.$timeout(function () {
	          _this6.busy = true;

	          _this6.$timeout(function () {
	            _this6.maxItems += ITEMS_PER_PAGE$4;
	            _this6.visibleItems = _this6.filteredItems.slice(0, _this6.maxItems);
	            _this6.busy = false; // console.log(this.visibleItems.length);
	          }, 1000);
	        }, 0);
	      }
	    }
	  };

	  return NewsCtrl;
	}();

	NewsCtrl.$inject = ['$scope', '$timeout', 'LocationService'];

	var GTM_CAT$7 = 'references';

	var ReferencesCtrl =
	/*#__PURE__*/
	function () {
	  function ReferencesCtrl($scope, $timeout, LocationService) {
	    this.$scope = $scope;
	    this.$timeout = $timeout;
	    this.locationService = LocationService;
	    this.filters = window.filters || {};
	    this.references = window.references || [];
	    this.initialFilters = window.initialFilters || null;
	    this.deserializeFilters(this.initialFilters);
	    this.applyFilters(false);
	  }

	  var _proto = ReferencesCtrl.prototype;

	  _proto.deserializeFilters = function deserializeFilters(initialFilter) {
	    var _this = this;

	    var locationFilters = this.locationService.deserialize('filters') || initialFilter || {};
	    Object.keys(this.filters).forEach(function (x) {
	      var filter = _this.filters[x];

	      switch (x) {
	        case 'collections':
	          filter.doFilter = function (item, value) {
	            return item.collections.indexOf(value) !== -1;
	          };

	          break;

	        case 'countries':
	          filter.doFilter = function (item, value) {
	            return item.countryId === value;
	          };

	          break;

	        default:
	          filter.doFilter = function (item, value) {
	            return item.features.indexOf(value) !== -1;
	          };

	      }

	      filter.options.unshift({
	        label: _this.filters[x].placeholder,
	        value: null
	      });
	      var selectedOption = filter.options.find(function (o) {
	        return Boolean(o.value === (locationFilters[x] || null));
	      });
	      filter.value = selectedOption.value;
	      filter.placeholder = selectedOption.label;
	    });
	    return filters;
	  };

	  _proto.serializeFilters = function serializeFilters() {
	    var _this2 = this;

	    var filters = {};
	    var any = false;
	    Object.keys(this.filters).forEach(function (x) {
	      var filter = _this2.filters[x];

	      if (filter.value !== null) {
	        filters[x] = filter.value;
	        any = true;
	      }
	    });

	    if (!any) {
	      filters = this.initialFilters ? {} : null;
	    } // console.log('ReferenceCtrl.serializeFilters', filters);


	    this.locationService.serialize('filters', filters);
	    return filters;
	  };

	  _proto.applyFilters = function applyFilters(serialize) {
	    var _this3 = this;

	    if (serialize !== false) this.serializeFilters();

	    var _this$getFilteredItem = this.getFilteredItems(this.references),
	        filteredItems = _this$getFilteredItem.filteredItems;

	    this.filteredReferences = [];
	    this.$timeout(function () {
	      _this3.filteredReferences = filteredItems;

	      _this3.updateFilterStates(_this3.references, filteredItems); // delayer for image update

	    }, 50);
	    GtmService.pageViewFilters(GTM_CAT$7, this.filters);
	  };

	  _proto.getFilteredItems = function getFilteredItems(items, skipFilter) {
	    var _this4 = this;

	    var filters = Object.keys(this.filters).map(function (x) {
	      return _this4.filters[x];
	    }).filter(function (x) {
	      return x.value !== null;
	    });
	    var filteredItems = items.slice();

	    if (filters.length) {
	      filteredItems = filteredItems.filter(function (item) {
	        var has = true;
	        filters.forEach(function (filter) {
	          if (filter !== skipFilter) {
	            has = has && filter.doFilter(item, filter.value);
	          }
	        });
	        return has;
	      });
	    }

	    return {
	      filteredItems: filteredItems
	    };
	  };

	  _proto.updateFilterStates = function updateFilterStates(items) {
	    var _this5 = this;

	    Object.keys(this.filters).forEach(function (x) {
	      var filter = _this5.filters[x];

	      var _this5$getFilteredIte = _this5.getFilteredItems(items, filter),
	          filteredItems = _this5$getFilteredIte.filteredItems;

	      filter.options.forEach(function (option) {
	        var has = false;

	        if (option.value) {
	          var i = 0;

	          while (i < filteredItems.length && !has) {
	            var item = filteredItems[i];
	            has = filter.doFilter(item, option.value);
	            i++;
	          }
	        } else {
	          has = true;
	        }

	        option.disabled = !has;
	      });
	    });
	  };

	  _proto.setFilter = function setFilter(item, filter) {
	    item = item || filter.options[0];
	    filter.value = item.value;
	    filter.placeholder = item.label;
	    this.applyFilters();
	    this.$scope.$broadcast('onCloseDropdown');
	  };

	  _proto.removeFilter = function removeFilter(filter) {
	    this.setFilter(null, filter);
	  };

	  return ReferencesCtrl;
	}();

	ReferencesCtrl.$inject = ['$scope', '$timeout', 'LocationService'];

	var RootCtrl =
	/*#__PURE__*/
	function () {
	  function RootCtrl($scope, $timeout, DomService, ApiService, WishlistService) {
	    var _this = this;

	    this.$scope = $scope;
	    this.$timeout = $timeout;
	    this.domService = DomService;
	    this.apiService = ApiService;
	    this.wishlistService = WishlistService;
	    this.unsubscribe = new Subject();
	    this.wishlistService.count$.pipe(takeUntil(this.unsubscribe)).subscribe(function (count) {
	      _this.wishlistCount = count;
	    });
	    $scope.$on('onMuuri', function () {
	      _this.domService.secondaryScroll$_.next({
	        target: window
	      });
	    });
	    $scope.$on('destroy', function () {
	      // console.log('destroy');
	      _this.unsubscribe.next();

	      _this.unsubscribe.complete();
	    });
	  }

	  var _proto = RootCtrl.prototype;

	  _proto.onSearch = function onSearch(query) {
	    // console.log('onSearch', query);
	    this.searchOpened = false;
	    var url = document.querySelector('[data-search]').getAttribute('data-search');
	    window.location.href = url.replace('##query##', query);
	  };

	  _proto.onScroll = function onScroll(event) {
	    var _this2 = this;

	    var scrolled = event.scroll.scrollTop > 40;
	    var direction = event.scroll.direction;

	    if (this.droppedIn) {
	      this.$scope.$broadcast('onCloseDropdown');
	    }

	    if (event.scroll.direction) {
	      if (direction && (this.direction !== direction || this.scrolled !== scrolled)) {
	        this.$timeout(function () {
	          _this2.scrolled = scrolled;
	          _this2.direction = direction;
	        }, 1);
	      }
	    }
	  };

	  _proto.onInit = function onInit(brand) {
	    var _this3 = this;

	    this.brand = brand;
	    this.webglEnabled = false; // this.domService.hasWebglSupport();

	    this.domService.addCustomRules();
	    /*
	    this.domService.smoothScroll$('.page').subscribe((top) => {
	    	// console.log(top);
	    });
	    */

	    this.$timeout(function () {
	      _this3.init = true;
	      var view = document.querySelector('.view');
	      TweenMax.to(view, 0.6, {
	        opacity: 1,
	        delay: 0,
	        overwrite: 'all'
	      });
	    }, 1000);
	    this.$scope.$on('onDroppinIn', function (scope, droppinIn) {
	      // console.log('onDroppinIn', droppinIn);
	      _this3.$timeout(function () {
	        _this3.droppinIn = droppinIn;
	      });
	    });
	  };

	  _proto.getClasses = function getClasses() {
	    var classes = {};
	    classes[this.brand] = true;

	    if (this.init) {
	      classes.init = true;
	    }

	    if (this.direction === -1) {
	      classes['scrolled-up'] = true;
	    }

	    if (this.direction === 1) {
	      classes['scrolled-down'] = true;
	    }

	    if (this.droppinIn || this.menuOpened || this.menuProductOpened) {
	      classes['droppin-in'] = true;
	    }

	    if (this.domService.isIE()) {
	      classes[this.domService.isIE()] = true;
	    }

	    return classes;
	  };

	  _proto.closeNav = function closeNav() {
	    var node = document.querySelector(".section--submenu.active");
	    return this.onDroppedOut(node);
	  };

	  _proto.openNav = function openNav(nav) {
	    var node = document.querySelector("#nav-" + nav + " .section--submenu");
	    return this.onDroppedIn(node);
	  };

	  _proto.toggleNav = function toggleNav(id) {
	    var _this4 = this;

	    this.nav = this.nav === id ? null : id;
	    this.closeNav().then(function () {
	      if (_this4.nav) {
	        _this4.openNav(_this4.nav);
	      }
	    });
	  };

	  _proto.onDroppedOut = function onDroppedOut(node) {
	    // console.log('onDroppedOut', node);
	    if (node) {
	      this.droppedIn = false;

	      if (this.droppinIn) {
	        TweenMax.set(node, {
	          height: 0
	        });
	        return Promise.resolve();
	      } else {
	        TweenMax.set(node, {
	          overflow: 'hidden'
	        });
	        TweenMax.to(node, 0.6, {
	          height: 0,
	          ease: Expo.easeOut,
	          overwrite: 'all',
	          onComplete: function onComplete() {
	            delete node.style.overflow;
	            return Promise.resolve();
	          }
	        });
	      }
	    } else {
	      return Promise.resolve();
	    }
	    /*
	    return new Promise((resolve, reject) => {
	    	if (node) {
	    		const items = [].slice.call(node.querySelectorAll('.submenu__item'));
	    		TweenMax.staggerTo(items.reverse(), 0.25, {
	    			opacity: 0,
	    			stagger: 0.05,
	    			delay: 0.0,
	    			onComplete: () => {
	    				TweenMax.to(node, 0.2, {
	    					maxHeight: 0,
	    					ease: Expo.easeOut,
	    					delay: 0.0,
	    					onComplete: () => {
	    						resolve();
	    					}
	    				});
	    			}
	    		});
	    	} else {
	    		resolve();
	    	}
	    });
	    */

	  };

	  _proto.onDroppedIn = function onDroppedIn(node) {
	    var _this5 = this;

	    // console.log('onDroppedIn', node);
	    return new Promise(function (resolve, reject) {
	      _this5.droppedIn = true;
	      _this5.droppinIn = true;
	      var items = [].slice.call(node.querySelectorAll('.submenu__item'));
	      TweenMax.set(items, {
	        opacity: 0
	      });
	      TweenMax.set(node, {
	        height: 'auto'
	      });
	      var mh = node.offsetHeight;
	      TweenMax.set(node, {
	        height: 0,
	        overflow: 'hidden'
	      });
	      TweenMax.to(node, 0.8, {
	        height: mh,
	        ease: Expo.easeOut,
	        delay: 0.0,
	        overwrite: 'all',
	        onComplete: function onComplete() {
	          delete node.style.overflow;
	          TweenMax.set(node, {
	            height: 'auto'
	          }); // TweenMax.set(node, { clearProps: 'all' });

	          if (items.length === 0) {
	            _this5.droppinIn = false;
	          }
	        }
	      });

	      if (items.length) {
	        TweenMax.staggerTo(items, 0.35, {
	          opacity: 1,
	          stagger: 0.07,
	          delay: 0.5,
	          onComplete: function onComplete() {
	            _this5.droppinIn = false;
	          }
	        });
	      }
	    });
	  };

	  _proto.toggleBrand = function toggleBrand(event) {
	    var brands = ['atlas-concorde', 'atlas-concorde-solution', 'atlas-concorde-usa', 'atlas-concorde-russia'];
	    var i = (brands.indexOf(this.brand) + 1) % brands.length;
	    this.brand = brands[i];
	    event.preventDefault();
	    event.stopImmediatePropagation();
	  };

	  _proto.toggleMenuProduct = function toggleMenuProduct() {
	    this.menuProductOpened = !this.menuProductOpened;

	    if (!this.menuProductOpened) {
	      var results = document.querySelector('.section--filters');
	      var bottom = this.domService.scrollTop + results.getBoundingClientRect().bottom;
	      setTimeout(function () {
	        window.scroll(0, bottom - 80); // console.log('toggleMenuProduct', results, bottom, this.domService.scrollTop);
	      }, 500);
	    }
	  };

	  _proto.pad = function pad(index) {
	    return index < 10 ? '0' + index : index;
	  };

	  _proto.hasHash = function hasHash(hash) {
	    return window.location.hash.indexOf(hash) !== -1;
	  };

	  return RootCtrl;
	}();

	RootCtrl.$inject = ['$scope', '$timeout', 'DomService', 'ApiService', 'WishlistService'];

	var API_DEV = window.location.port === '6001' || window.location.host === 'actarian.github.io';
	var API_HREF = API_DEV ? 'https://atlasconcorde.wslabs.it' : '';

	var ApiService =
	/*#__PURE__*/
	function () {
	  function ApiService($http) {
	    var _this = this;

	    this.http = $http;
	    var api = {
	      advancedSearch: {
	        get: function get() {
	          return from($http.get('data/advanced-search.json')); // return from($http.get(API_HREF + '/api/advanced-search/json'));
	        }
	      },
	      wishlist: {
	        get: function get() {
	          if (!API_DEV) {
	            return from(_this.$http.post('', _this.wishlist));
	          } else {
	            return from(_this.$http.get('data/moodboard.json').then(function (success) {
	              if (success.data) {
	                return success.data;
	              }
	            }));
	          }
	        },
	        toggle: function toggle(item) {
	          item.added = !item.added;
	          return Promise.resolve(item);
	        },
	        clearAll: function clearAll() {
	          return Promise.resolve();
	        }
	      },
	      moodboard: {
	        filter: function filter(filters) {
	          if (!API_DEV) {
	            return from($http.post('', filters));
	          } else {
	            return from($http.get('data/moodboard.json'));
	          }
	        }
	      },
	      storeLocator: {
	        all: function all() {
	          if (!API_DEV) {
	            return $http.get(API_HREF + '/api/store/json');
	          } else {
	            return $http.get('data/store-locator.json');
	          }
	        }
	      }
	    };
	    Object.assign(this, api);
	  }

	  ApiService.factory = function factory($http) {
	    return new ApiService($http);
	  };

	  return ApiService;
	}();
	ApiService.factory.$inject = ['$http'];
	ApiService.API_DEV = API_DEV;

	var WishlistService =
	/*#__PURE__*/
	function () {
	  function WishlistService($http, PromiseService, StorageService, ApiService) {
	    this.$http = $http;
	    this.promise = PromiseService;
	    this.storage = StorageService;
	    this.api = ApiService;
	    this.count$ = WishlistService.count$;
	    var count = this.wishlist.length; // console.log('WishlistService', this.storage);
	  }

	  var _proto = WishlistService.prototype;

	  _proto.indexOf = function indexOf(item) {
	    if (item) {
	      var index = this.wishlist.reduce(function (p, c, i) {
	        if (p === -1) {
	          return c.id === item.id && c.coId === item.coId ? i : p;
	        } else {
	          return p;
	        }
	      }, -1);
	      return index;
	    } else {
	      return -1;
	    }
	  };

	  _proto.has = function has(item) {
	    return this.indexOf(item) !== -1;
	  };

	  _proto.add = function add(item) {
	    var _this = this;

	    return this.promise.make(function (promise) {
	      var wishlist = _this.wishlist;
	      GtmService.push({
	        event: 'addWishlist',
	        wish_name: item.name || item.coId,
	        wish_type: item.typeName || item.type
	      });
	      wishlist.push({
	        id: item.id,
	        coId: item.coId,
	        type: item.type,
	        typeName: item.typeName,
	        name: item.name
	      });
	      _this.wishlist = wishlist;
	      promise.resolve(true);
	    });
	  };

	  _proto.remove = function remove(item) {
	    var _this2 = this;

	    return this.promise.make(function (promise) {
	      var index = _this2.indexOf(item);

	      var wishlist = _this2.wishlist;
	      GtmService.push({
	        event: 'removeWishlist',
	        wish_name: wishlist[index].name || wishlist[index].coId,
	        wish_type: wishlist[index].typeName || wishlist[index].type
	      });
	      wishlist.splice(index, 1);
	      _this2.wishlist = wishlist;
	      promise.resolve(false);
	    });
	  };

	  _proto.toggle = function toggle(item) {
	    if (this.has(item)) {
	      return this.remove(item);
	    } else {
	      return this.add(item);
	    }
	  };

	  _proto.clearAll = function clearAll() {
	    var _this3 = this;

	    return from(this.promise.make(function (promise) {
	      var wishlist = [];
	      _this3.wishlist = wishlist;
	      promise.resolve(wishlist);
	    }));
	  };

	  _proto.get = function get() {
	    var _this4 = this;

	    if (!API_DEV) {
	      return from(this.$http.post('', this.wishlist).then(function (success) {
	        return success;
	      }));
	    } else {
	      return from(this.$http.get('data/moodboard.json').then(function (success) {
	        if (success.data) {
	          _this4.wishlist = success.data;
	        }

	        return success;
	      }));
	    }
	  };

	  WishlistService.factory = function factory($http, PromiseService, StorageService, ApiService) {
	    return new WishlistService($http, PromiseService, StorageService, ApiService);
	  };

	  _createClass(WishlistService, [{
	    key: "wishlist",
	    get: function get() {
	      if (!this.wishlist_) {
	        var wishlist = this.storage.get('wishlist');
	        this.wishlist_ = wishlist || [];
	        WishlistService.count$.next(this.wishlist_.length);
	      }

	      return this.wishlist_;
	    },
	    set: function set(wishlist) {
	      this.wishlist_ = wishlist || [];
	      this.storage.set('wishlist', this.wishlist_);
	      WishlistService.count$.next(this.wishlist_.length);
	    }
	  }]);

	  return WishlistService;
	}();
	WishlistService.count$ = new BehaviorSubject(0);
	WishlistService.factory.$inject = ['$http', 'PromiseService', 'LocalStorageService', 'ApiService'];

	var LocationService =
	/*#__PURE__*/
	function () {
	  function LocationService($location) {
	    this.$location = $location;
	  }

	  var _proto = LocationService.prototype;

	  _proto.get = function get(key) {
	    return this.$location.search()[key];
	  };

	  _proto.set = function set(keyOrValue, value) {
	    if (typeof keyOrValue === 'string') {
	      this.$location.search(keyOrValue, value).replace();
	    } else {
	      this.$location.search(keyOrValue).replace();
	    }
	  };

	  _proto.deserialize_ = function deserialize_(key, serialized) {
	    var value = null; // console.log(serialized);

	    if (serialized) {
	      var json = window.atob(serialized);
	      value = JSON.parse(json);
	    } // console.log(value);


	    if (key && value) {
	      value = value[key];
	    }

	    return value || null;
	  };

	  _proto.serialize_ = function serialize_(keyOrValue, value, q) {
	    q = q || {};
	    var serialized = null;

	    if (typeof keyOrValue === 'string') {
	      q[keyOrValue] = value;
	    } else {
	      q = keyOrValue;
	    }

	    var json = JSON.stringify(q);
	    serialized = window.btoa(json);
	    return serialized;
	  };

	  _proto.deserialize = function deserialize(key) {
	    var serialized = this.get('q');
	    return this.deserialize_(key, serialized);
	  };

	  _proto.serialize = function serialize(keyOrValue, value) {
	    var q = this.deserialize();
	    var serialized = this.serialize_(keyOrValue, value, q);
	    this.set('q', serialized);
	  };

	  _proto.getSerialization = function getSerialization(keyOrValue, value) {
	    var serialized = null;
	    var q = {};

	    if (typeof keyOrValue === 'string') {
	      q[keyOrValue] = value;
	    } else {
	      q = keyOrValue;
	    }

	    var json = JSON.stringify(q);
	    serialized = window.btoa(json);
	    return serialized;
	  };

	  LocationService.factory = function factory($location) {
	    return new LocationService($location);
	  };

	  return LocationService;
	}();
	LocationService.factory.$inject = ['$location'];

	var PromiseService =
	/*#__PURE__*/
	function () {
	  function PromiseService($q) {
	    this.$q = $q;
	  }

	  var _proto = PromiseService.prototype;

	  _proto.make = function make(callback) {
	    if (typeof callback !== 'function') {
	      throw 'promise resolve callback missing';
	    }

	    var deferred = this.$q.defer();
	    callback(deferred);
	    return deferred.promise;
	  };

	  _proto.all = function all(promises) {
	    return this.$q.all(promises);
	  };

	  PromiseService.factory = function factory($q) {
	    return new PromiseService($q);
	  };

	  return PromiseService;
	}();
	PromiseService.factory.$inject = ['$q'];

	var DELAY = 3000;
	var State =
	/*#__PURE__*/
	function () {
	  function State($timeout, $rootScope) {
	    this.$timeout = $timeout;
	    this.$rootScope = $rootScope;
	    this.idle();
	  }

	  var _proto = State.prototype;

	  _proto.idle = function idle() {
	    this.isBusy = false;
	    this.isError = false;
	    this.isErroring = false;
	    this.isSuccess = false;
	    this.isSuccessing = false;
	    this.button = null;
	    this.errors = [];
	  };

	  _proto.busy = function busy() {
	    if (!this.isBusy) {
	      this.isBusy = true;
	      this.isError = false;
	      this.isErroring = false;
	      this.isSuccess = false;
	      this.isSuccessing = false;
	      this.errors = [];
	      return true;
	    } else {
	      return false;
	    }
	  };

	  _proto.classes = function classes(addons) {
	    var classes = {
	      ready: this.isReady,
	      busy: this.isBusy,
	      successing: this.isSuccessing,
	      success: this.isSuccess,
	      errorring: this.isErroring,
	      error: this.isError
	    };

	    if (addons) {
	      Object.keys(addons).forEach(function (key) {
	        classes[addons[key]] = classes[key];
	      });
	    }

	    return classes;
	  };

	  _proto.enabled = function enabled() {
	    return !this.isBusy && !this.isErroring && !this.isSuccessing;
	  };

	  _proto.error = function error(_error) {
	    var _this = this;

	    console.log('State.error', _error);
	    this.isBusy = false;
	    this.isError = true;
	    this.isErroring = true;
	    this.isSuccess = false;
	    this.isSuccessing = false;
	    this.errors.push(_error);
	    this.$timeout(function () {
	      _this.isErroring = false;
	    }, DELAY);
	  };

	  _proto.errorMessage = function errorMessage() {
	    return this.isError ? this.errors[this.errors.length - 1] : null;
	  };

	  _proto.labels = function labels(addons) {
	    var defaults = {
	      ready: 'submit',
	      busy: 'sending',
	      error: 'error',
	      success: 'success'
	    };

	    if (addons) {
	      angular.extend(defaults, addons);
	    }

	    var label = defaults.ready;

	    if (this.isBusy) {
	      label = defaults.busy;
	    } else if (this.isSuccess) {
	      label = defaults.success;
	    } else if (this.isError) {
	      label = defaults.error;
	    }

	    return label;
	  };

	  _proto.ready = function ready() {
	    this.idle();
	    this.isReady = true;
	    this.$rootScope.$broadcast('$thisReady', this);
	  };

	  _proto.submitClass = function submitClass() {
	    return {
	      busy: this.isBusy,
	      ready: this.isReady,
	      successing: this.isSuccessing,
	      success: this.isSuccess,
	      errorring: this.isErroring,
	      error: this.isError
	    };
	  };

	  _proto.success = function success() {
	    var _this2 = this;

	    this.isBusy = false;
	    this.isError = false;
	    this.isErroring = false;
	    this.isSuccess = true;
	    this.isSuccessing = true;
	    this.errors = [];
	    this.$timeout(function () {
	      _this2.isSuccessing = false;
	    }, DELAY);
	  };

	  return State;
	}();

	var StateService =
	/*#__PURE__*/
	function () {
	  function StateService($timeout, $rootScope) {
	    this.$timeout = $timeout;
	    this.$rootScope = $rootScope;
	  }

	  var _proto2 = StateService.prototype;

	  _proto2.getState = function getState() {
	    return new State(this.$timeout, this.$rootScope);
	  };

	  StateService.factory = function factory($timeout, $rootScope) {
	    return new StateService($timeout, $rootScope);
	  };

	  return StateService;
	}();
	StateService.factory.$inject = ['$timeout', '$rootScope'];

	var TIMEOUT = 5 * 60 * 1000; // five minutes

	var CookieService =
	/*#__PURE__*/
	function () {
	  function CookieService(PromiseService) {
	    this.promise = PromiseService;
	  }

	  var _proto = CookieService.prototype;

	  _proto.delete = function _delete(name) {
	    setter(name, '', -1);
	  };

	  _proto.exist = function exist(name) {
	    return document.cookie.indexOf(';' + name + '=') !== -1 || document.cookie.indexOf(name + '=') === 0;
	  };

	  _proto.get = function get(name) {
	    var cookieName = name + "=";
	    var ca = document.cookie.split(';');

	    for (var i = 0; i < ca.length; i++) {
	      var c = ca[i];

	      while (c.charAt(0) == ' ') {
	        c = c.substring(1, c.length);
	      }

	      if (c.indexOf(cookieName) === 0) {
	        var value = c.substring(cookieName.length, c.length);
	        var model = null;

	        try {
	          model = JSON.parse(decodeURIComponent(atob(value)));
	        } catch (e) {
	          console.log('CookieService.get.error parsing', key, e);
	        }

	        return model;
	      }
	    }

	    return null;
	  };

	  _proto.on = function on(name) {
	    var _this = this;

	    return this.promise.make(function (promise) {
	      var i,
	          interval = 1000,
	          elapsed = 0,
	          timeout = TIMEOUT;

	      var checkCookie = function checkCookie() {
	        if (elapsed > timeout) {
	          promise.reject('timeout');
	        } else {
	          var c = _this.get(name);

	          if (c) {
	            promise.resolve(c);
	          } else {
	            elapsed += interval;
	            i = setTimeout(checkCookie, interval);
	          }
	        }
	      };

	      checkCookie();
	    });
	  };

	  _proto.set = function set(name, value, days) {
	    try {
	      var cache = [];
	      var json = JSON.stringify(value, function (key, value) {
	        if (key === 'pool') {
	          return;
	        }

	        if (typeof value === 'object' && value !== null) {
	          if (cache.indexOf(value) !== -1) {
	            // Circular reference found, discard key
	            return;
	          }

	          cache.push(value);
	        }

	        return value;
	      });
	      this.setter(name, btoa(encodeURIComponent(json)), days);
	    } catch (e) {
	      console.log('CookieService.error serializing', name, value, e);
	    }
	  };

	  _proto.setter = function setter(name, value, days) {
	    var expires;

	    if (days) {
	      var date = new Date();
	      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
	      expires = '; expires=' + date.toGMTString();
	    } else {
	      expires = '';
	    }

	    document.cookie = name + '=' + value + expires + '; path=/';
	  };

	  CookieService.factory = function factory(PromiseService) {
	    return new CookieService(PromiseService);
	  };

	  return CookieService;
	}();
	CookieService.factory.$inject = ['PromiseService'];
	var LocalStorageService =
	/*#__PURE__*/
	function () {
	  function LocalStorageService(PromiseService) {
	    this.promise = PromiseService;
	  }

	  var _proto2 = LocalStorageService.prototype;

	  _proto2.delete = function _delete(name) {
	    window.localStorage.removeItem(name);
	  };

	  _proto2.exist = function exist(name) {
	    return window.localStorage[name] !== undefined;
	  };

	  _proto2.get = function get(name) {
	    var value = null;

	    if (window.localStorage[name] !== undefined) {
	      try {
	        value = JSON.parse(window.localStorage[name]);
	      } catch (e) {
	        console.log('LocalStorageService.get.error parsing', name, e);
	      }
	    }

	    return value;
	  };

	  _proto2.set = function set(name, value) {
	    try {
	      var cache = [];
	      var json = JSON.stringify(value, function (key, value) {
	        if (key === 'pool') {
	          return;
	        }

	        if (typeof value === 'object' && value !== null) {
	          if (cache.indexOf(value) !== -1) {
	            // Circular reference found, discard key
	            return;
	          }

	          cache.push(value);
	        }

	        return value;
	      });
	      window.localStorage.setItem(name, json);
	    } catch (e) {
	      console.log('LocalStorageService.set.error serializing', name, value, e);
	    }
	  };

	  _proto2.on = function on(name) {
	    return this.promise.make(function (promise) {
	      var i,
	          timeout = TIMEOUT;

	      var storageEvent = function storageEvent(e) {
	        if (i) {
	          clearTimeout(i);
	        }

	        if (e.originalEvent.key == name) {
	          try {
	            var value = JSON.parse(e.originalEvent.newValue); // , e.originalEvent.oldValue

	            promise.resolve(value);
	          } catch (error) {
	            console.log('LocalStorageService.on.error parsing', name, error);
	            promise.reject('error parsing ' + name);
	          }
	        }
	      };

	      angular.element(window).on('storage', storageEvent);
	      i = setTimeout(function () {
	        promise.reject('timeout');
	      }, timeout);
	    });
	  };

	  LocalStorageService.isLocalStorageSupported = function isLocalStorageSupported() {
	    var supported = false;

	    try {
	      supported = 'localStorage' in window && window.localStorage !== null;

	      if (supported) {
	        window.localStorage.setItem('test', '1');
	        window.localStorage.removeItem('test');
	      } else {
	        supported = false;
	      }
	    } catch (e) {
	      supported = false;
	    }

	    return supported;
	  };

	  LocalStorageService.factory = function factory(PromiseService) {
	    if (LocalStorageService.isLocalStorageSupported()) {
	      return new LocalStorageService(PromiseService);
	    } else {
	      return new CookieService(PromiseService);
	    }
	  };

	  return LocalStorageService;
	}();
	LocalStorageService.factory.$inject = ['PromiseService'];
	var SessionStorageService =
	/*#__PURE__*/
	function () {
	  function SessionStorageService(PromiseService) {
	    this.promise = PromiseService;
	  }

	  var _proto3 = SessionStorageService.prototype;

	  _proto3.delete = function _delete(name) {
	    window.sessionStorage.removeItem(name);
	  };

	  _proto3.exist = function exist(name) {
	    return window.sessionStorage[name] !== undefined;
	  };

	  _proto3.get = function get(name) {
	    var value = null;

	    if (window.sessionStorage[name] !== undefined) {
	      try {
	        value = JSON.parse(window.sessionStorage[name]);
	      } catch (e) {
	        console.log('SessionStorageService.get.error parsing', name, e);
	      }
	    }

	    return value;
	  };

	  _proto3.set = function set(name, value) {
	    try {
	      var cache = [];
	      var json = JSON.stringify(value, function (key, value) {
	        if (key === 'pool') {
	          return;
	        }

	        if (typeof value === 'object' && value !== null) {
	          if (cache.indexOf(value) !== -1) {
	            // Circular reference found, discard key
	            return;
	          }

	          cache.push(value);
	        }

	        return value;
	      });
	      window.sessionStorage.setItem(name, json);
	    } catch (e) {
	      console.log('SessionStorageService.set.error serializing', name, value, e);
	    }
	  };

	  _proto3.on = function on(name) {
	    return this.promise.make(function (promise) {
	      var i,
	          timeout = TIMEOUT;

	      var storageEvent = function storageEvent(e) {
	        if (i) {
	          clearTimeout(i);
	        }

	        if (e.originalEvent.key == name) {
	          try {
	            var value = JSON.parse(e.originalEvent.newValue); // , e.originalEvent.oldValue

	            promise.resolve(value);
	          } catch (error) {
	            console.log('SessionStorageService.on.error parsing', name, error);
	            promise.reject('error parsing ' + name);
	          }
	        }
	      };

	      angular.element(window).on('storage', storageEvent);
	      i = setTimeout(function () {
	        promise.reject('timeout');
	      }, timeout);
	    });
	  };

	  SessionStorageService.isSessionStorageSupported = function isSessionStorageSupported() {
	    var supported = false;

	    try {
	      supported = 'sessionStorage' in window && window.sessionStorage !== null;

	      if (supported) {
	        window.sessionStorage.setItem('test', '1');
	        window.localsessionStorageStorage.removeItem('test');
	      } else {
	        supported = false;
	      }
	    } catch (e) {
	      supported = false;
	    }

	    return supported;
	  };

	  SessionStorageService.factory = function factory(PromiseService) {
	    if (SessionStorageService.isSessionStorageSupported()) {
	      return new SessionStorageService(PromiseService);
	    } else {
	      return new CookieService(PromiseService);
	    }
	  };

	  return SessionStorageService;
	}();
	SessionStorageService.factory.$inject = ['PromiseService'];

	var GTM_CAT$8 = 'store-locator';
	var ZOOM_LEVEL = 13;
	var MAX_DISTANCE = 100;
	var GOOGLE_MAPS = null;

	var StoreLocatorCtrl =
	/*#__PURE__*/
	function () {
	  function StoreLocatorCtrl($scope, $timeout, DomService, ApiService) {
	    var _this = this;

	    this.$scope = $scope;
	    this.$timeout = $timeout;
	    this.domService = DomService;
	    this.apiService = ApiService;
	    this.model = {};
	    this.apiKey = window.apiKey || 'AIzaSyC9ZjpjjpaaDRZYkK5sjeyJahSUzKckgOM';
	    this.busyFind = false;
	    this.busyLocation = false;
	    this.visibleStores = [];
	    this.mapBoundsChanged$ = new Subject(); //
	    // When the window has finished loading create our google map below

	    if (GOOGLE_MAPS !== null) {
	      this.initMap();
	    } else {
	      window.onGoogleMapsLoaded = function () {
	        GOOGLE_MAPS = google.maps;

	        _this.initMap();
	      };

	      var script = document.createElement('script');
	      script.setAttribute('type', 'text/javascript');
	      script.setAttribute('src', "https://maps.googleapis.com/maps/api/js?key=" + this.apiKey + "&libraries=geometry&callback=onGoogleMapsLoaded");
	      (document.getElementsByTagName('head')[0] || document.documentElement).appendChild(script);
	      /*
	      google.maps.event.addDomListener(window, 'load', () => {
	      	GOOGLE_MAPS = google.maps;
	      	this.initMap();
	      });
	      */
	    } //


	    this.unsubscribe = new Subject();
	    this.mapBoundsChanged$.pipe(debounceTime(1000), takeUntil(this.unsubscribe)).subscribe(function (bounds) {
	      _this.findNearStores(_this.stores, bounds.getCenter(), bounds);
	    });
	    this.domService.secondaryScroll$(document.querySelector('.section--stores')).pipe(takeUntil(this.unsubscribe)).subscribe(function (event) {});
	    $scope.$on('destroy', function () {
	      // console.log('destroy');
	      _this.unsubscribe.next();

	      _this.unsubscribe.complete();
	    });
	  }

	  var _proto = StoreLocatorCtrl.prototype;

	  _proto.initMap = function initMap() {
	    var _this2 = this;

	    // Basic options for a simple Google Map
	    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
	    var mapOptions = {
	      // How zoomed in you want the map to start at (always required)
	      zoom: 7,
	      // The latitude and longitude to center the map (always required)
	      center: new google.maps.LatLng(41.4632232, 14.3898072),
	      // New York
	      // How you would like to style the map.
	      // This is where you would paste any style found on Snazzy Maps.
	      styles: [{
	        "featureType": "administrative",
	        "elementType": "geometry.fill",
	        "stylers": [{
	          "visibility": "on"
	        }]
	      }, {
	        "featureType": "administrative",
	        "elementType": "labels.text.fill",
	        "stylers": [{
	          "color": "#444444"
	        }]
	      }, {
	        "featureType": "landscape",
	        "elementType": "all",
	        "stylers": [{
	          "color": "#f2f2f2"
	        }]
	      }, {
	        "featureType": "poi",
	        "elementType": "all",
	        "stylers": [{
	          "visibility": "off"
	        }]
	      }, {
	        "featureType": "road",
	        "elementType": "all",
	        "stylers": [{
	          "saturation": -100
	        }, {
	          "lightness": 45
	        }]
	      }, {
	        "featureType": "road.highway",
	        "elementType": "all",
	        "stylers": [{
	          "visibility": "simplified"
	        }]
	      }, {
	        "featureType": "road.arterial",
	        "elementType": "labels.icon",
	        "stylers": [{
	          "visibility": "off"
	        }]
	      }, {
	        "featureType": "transit",
	        "elementType": "all",
	        "stylers": [{
	          "visibility": "off"
	        }]
	      }, {
	        "featureType": "water",
	        "elementType": "all",
	        "stylers": [{
	          "color": "#ffffff"
	        }, {
	          "visibility": "on"
	        }]
	      }]
	    }; // Get the HTML DOM element that will contain your map
	    // We are using a div with id="map" seen below in the <body>

	    var mapElement = document.getElementById('map');

	    if (!mapElement) {
	      return;
	    } // Create the Google Map using our element and options defined above


	    var map = new google.maps.Map(mapElement, mapOptions);
	    map.addListener('bounds_changed', function () {
	      _this2.mapBoundsChanged$.next(map.getBounds());
	    });
	    this.$timeout(function () {
	      _this2.map = map;
	    }); // console.log('timeout');
	  };

	  _proto.calculateDistance = function calculateDistance(lat1, lon1, lat2, lon2, unit) {
	    if (lat1 == lat2 && lon1 == lon2) {
	      return 0;
	    } else {
	      var radlat1 = Math.PI * lat1 / 180;
	      var radlat2 = Math.PI * lat2 / 180;
	      var theta = lon1 - lon2;
	      var radtheta = Math.PI * theta / 180;
	      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);

	      if (dist > 1) {
	        dist = 1;
	      }

	      dist = Math.acos(dist);
	      dist = dist * 180 / Math.PI;
	      dist = dist * 60 * 1.1515;

	      if (unit == "K") {
	        dist = dist * 1.609344;
	      }

	      if (unit == "N") {
	        dist = dist * 0.8684;
	      }

	      return dist;
	    }
	  };

	  _proto.addMarkers = function addMarkers(stores) {
	    var _this3 = this;

	    var markers = stores.map(function (store) {
	      var position = new google.maps.LatLng(store.latitude, store.longitude);
	      var content = "<div class=\"marker__content\">\n\t\t\t\t<div class=\"title\"><span>" + store.name + "</span></div>\n\t\t\t\t<div class=\"group group--info\">\n\t\t\t\t\t<div class=\"address\">\n\t\t\t\t\t\t" + store.address + "<br>\n\t\t\t\t\t\t" + store.zip + " " + store.citta + " " + store.cod_provincia + " " + store.stato + "<br>\n\t\t\t\t\t\t<!--store.tel-->\n\t\t\t\t\t\t<!--store.email-->\n\t\t\t\t\t\t<!--store.webSite-->\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"distance\">" + window.BOMLabels.store_locator_approx + " <b>" + Math.floor(store.distance) + " km</b></div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"group group--cta\">\n\t\t\t\t\t<!--store.pageurl-->\n\t\t\t\t\t<a id=\"locator-marker\" href=\"https://www.google.it/maps/dir/" + _this3.position.lat() + "," + _this3.position.lng() + "/" + store.name + "/@" + store.latitude + "," + store.longitude + "/\" target=\"_blank\" class=\"btn btn--link\"><span>" + window.BOMLabels.store_locator_reach_store + "</span></a>\n\t\t\t\t</div>\n\t\t\t</div>";
	      if (store.tel) content = content.replace('<!--store.tel-->', "<span>" + store.tel + "<br></span>");
	      if (store.email) content = content.replace('<!--store.email-->', "<span><a href=\"/atlas/mailto:" + store.email + "\">" + store.email + "</a><br></span>");
	      if (store.webSite) content = content.replace('<!--store.webSite-->', "<span><a target=\"_blank\" href=\"" + store.webSite + "\">" + store.webSite + "</a></span>");
	      if (store.pageurl) content = content.replace('<!--store.pageurl-->', "<a id=\"locator-marker\" href=\"" + store.pageurl + "\" target=\"_blank\" class=\"btn btn--link\"><span>" + window.BOMLabels.More_info + "</span></a>");
	      var marker = new google.maps.Marker({
	        position: position,
	        // map: this.map,
	        icon: store.importante ? '/img/store-locator/store-primary.png' : '/img/store-locator/store-secondary.png',
	        title: store.name,
	        store: store,
	        content: content
	      });
	      marker.addListener('click', function () {
	        _this3.setMarkerWindow(marker.position, content);

	        _this3.scrollToStore(store);

	        GtmService.push({
	          event: 'dealerlocator',
	          action: 'marker-click',
	          label: store.name
	        });
	      });
	      store.marker = marker;
	      /*
	      marker.addListener('mouseout', () => {
	      	this.setMarkerWindow(null);
	      });
	      */

	      return marker;
	      /*
	      function panTo(e) {
	      	if (current !== marker) {
	      		current = marker;
	      		var ll = new google.maps.LatLng(latlng[0], latlng[1]);
	      		map.panTo(ll);
	      		onMarkerDidSelect();
	      	}
	      }
	      node.addEventListener('click', panTo);
	      node.addEventListener('mouseover', panTo);
	      */
	    });
	    var markerCluster = new MarkerClusterer(this.map, markers, {
	      imagePath: '/img/store-locator/cluster-'
	    });
	    var styles = markerCluster.getStyles();
	    styles.forEach(function (style) {
	      return style.textColor = '#ffffff';
	    });
	    markerCluster.setStyles(styles); // console.log('StoreLocatorCtrl.searchPosition', position, stores);

	    this.markers = markers;
	    this.markerCluster = markerCluster;
	  };

	  _proto.getGeolocation = function getGeolocation(map) {
	    var _this4 = this;

	    this.error = null;
	    this.busyLocation = true;
	    var position = this.map.getCenter(); // Try HTML5 geolocation.

	    if (navigator.geolocation) {
	      navigator.geolocation.getCurrentPosition(function (location) {
	        // console.log(location.coords);
	        position = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);

	        _this4.setInfoWindow(position, 1);

	        _this4.searchPosition(position).finally(function () {
	          return _this4.busyLocation = false;
	        });

	        _this4.map.setCenter(position);

	        _this4.map.setZoom(ZOOM_LEVEL);
	      }, function () {
	        _this4.setInfoWindow(position, 2);

	        _this4.searchPosition(position).finally(function () {
	          return _this4.busyLocation = false;
	        });
	      });
	    } else {
	      // Browser doesn't support Geolocation
	      this.setInfoWindow(position, 3);
	      this.searchPosition(position).finally(function () {
	        return _this4.busyLocation = false;
	      });
	    }
	  };

	  _proto.loadStoresByPosition = function loadStoresByPosition(position) {
	    var _this5 = this;

	    return this.apiService.storeLocator.position(position).then(function (success) {
	      var stores = success.data;
	      _this5.stores = stores; // console.log('StoreLocatorCtrl.loadStoresByPosition', position, stores);

	      _this5.addMarkers(stores);
	    });
	  };

	  _proto.loadAllStores = function loadAllStores() {
	    var _this6 = this;

	    if (this.stores) {
	      return Promise.resolve(this.stores);
	    }

	    return this.apiService.storeLocator.all().then(function (success) {
	      var stores = success.data;
	      stores.forEach(function (store) {
	        return store.distance = _this6.calculateDistance(store.latitude, store.longitude, _this6.position.lat(), _this6.position.lng(), 'K');
	      });

	      _this6.addMarkers(stores);

	      _this6.stores = stores;
	      return stores;
	    });
	  };

	  _proto.fitBounds = function fitBounds(stores) {
	    if (stores.length) {
	      var bounds = new google.maps.LatLngBounds();
	      stores.forEach(function (store) {
	        var position = new google.maps.LatLng(store.latitude, store.longitude);
	        bounds.extend(position);
	      });
	      this.map.fitBounds(bounds); // console.log('fitBounds');
	    }
	  };

	  _proto.findNearStores = function findNearStores(stores, position, bounds) {
	    var _this7 = this;

	    var distance = MAX_DISTANCE;
	    /* Km */

	    if (bounds) {
	      var northEast = bounds.getNorthEast();
	      var meters = google.maps.geometry.spherical.computeDistanceBetween(position, northEast);
	      distance = Math.max(distance, meters / 1000);
	      console.log('distance', distance);
	    }

	    if (stores) {
	      stores.forEach(function (store) {
	        store.distance = _this7.calculateDistance(store.latitude, store.longitude, position.lat(), position.lng(), 'K'); // store.visible = (store.cod_stato == window.userCountry || !window.userCountry) && store.distance <= distance;

	        store.visible = store.distance <= distance;

	        if (store.visible) {
	          if (store.removed) _this7.markerCluster.addMarker(store.marker);
	          delete store.removed;
	        } else {
	          _this7.markerCluster.removeMarker(store.marker);

	          store.removed = true;
	        }
	      });
	      stores = stores.slice();
	      stores.sort(function (a, b) {
	        return a.distance * (a.importante ? 0.5 : 1) - b.distance * (b.importante ? 0.5 : 1);
	      });
	      var visibleStores = stores.filter(function (store) {
	        return store.visible;
	      }).slice(0, 50);
	      this.$timeout(function () {
	        _this7.visibleStores = visibleStores;
	      }, 1); // console.log('findNearStores', visibleStores);

	      return visibleStores;
	    }
	  };

	  _proto.searchPosition = function searchPosition(position, bounds) {
	    var _this8 = this;
	    this.position = position;

	    if (bounds) {
	      // this.map.setCenter(bounds.getCenter(), this.map.getBoundsZoomLevel(bounds)); // getBoundsZoomLevel old api
	      this.map.fitBounds(bounds);
	    } else {
	      this.map.setCenter(position);
	      this.map.setZoom(ZOOM_LEVEL);
	    }

	    this.setInfoWindow(position, 1);
	    return this.loadAllStores().then(function (stores) {
	      var visibleStores = _this8.findNearStores(stores, position, bounds);
	      /*
	      if (visibleStores) {
	      	this.fitBounds(visibleStores);
	      }
	      */

	    });
	  };

	  _proto.panTo = function panTo(store) {
	    var position = new google.maps.LatLng(store.latitude, store.longitude);
	    this.map.setZoom(ZOOM_LEVEL);
	    this.map.panTo(position);
	    var marker = this.markers.find(function (x) {
	      return x.store === store;
	    });
	    this.setMarkerWindow(marker.position, marker.content);
	  };

	  _proto.onSubmit = function onSubmit() {
	    var _this9 = this;

	    this.error = null;
	    this.busyFind = true;
	    var fakeFilter = {
	      '': {
	        value: this.model.address,
	        options: [{
	          value: this.model.address,
	          key: this.model.address
	        }]
	      }
	    };
	    GtmService.pageViewFilters(GTM_CAT$8, fakeFilter);
	    var geocoder = this.geocoder || new google.maps.Geocoder();
	    this.geocoder = geocoder;
	    geocoder.geocode({
	      address: this.model.address
	    }, function (results, status) {
	      _this9.model = {};

	      if (status == 'OK') {
	        var viewport = results[0].geometry.viewport; // const position = results[0].geometry.location;

	        _this9.searchPosition(viewport.getCenter(), viewport).finally(function () {
	          return _this9.busyFind = false;
	        });
	      } else {
	        _this9.$timeout(function () {
	          var message = 'Geocode was not successful for the following reason: ' + status; // console.log('StoreLocatorCtrl.onSubmit.error', message);

	          _this9.error = {
	            message: message
	          };
	          _this9.busyFind = false;
	        });
	      }
	    });
	  };

	  _proto.setInfoWindow = function setInfoWindow(position, mode) {
	  };

	  _proto.setMarkerWindow = function setMarkerWindow(position, content) {
	    if (position) {
	      var markerWindow = this.markerWindow || new google.maps.InfoWindow({
	        pixelOffset: new google.maps.Size(0, -35)
	      });
	      this.markerWindow = markerWindow;
	      markerWindow.setPosition(position);
	      markerWindow.setContent(content);
	      markerWindow.open(this.map);
	    } else {
	      if (this.markerWindow) {
	        this.markerWindow.close();
	      }
	    }
	  };

	  _proto.scrollToStore = function scrollToStore(store) {
	    var storesNode = document.querySelector('.section--stores');
	    var storeNode = document.querySelector("#store-" + store.id_SF); // console.log(storesNode, storeNode);

	    storesNode.scrollTo(0, storeNode.offsetTop);
	  };

	  return StoreLocatorCtrl;
	}();

	StoreLocatorCtrl.$inject = ['$scope', '$timeout', 'DomService', 'ApiService'];

	var GTM_CAT$9 = 'stores';

	var StoresCtrl =
	/*#__PURE__*/
	function () {
	  function StoresCtrl($scope, $timeout, LocationService) {
	    this.$scope = $scope;
	    this.$timeout = $timeout;
	    this.locationService = LocationService;
	    this.filters = window.filters || {};
	    this.stores = window.stores || [];
	    this.initialFilters = window.initialFilters || null;
	    this.deserializeFilters(this.initialFilters);
	    this.applyFilters(false);
	  }

	  var _proto = StoresCtrl.prototype;

	  _proto.deserializeFilters = function deserializeFilters(initialFilter) {
	    var _this = this;

	    var locationFilters = this.locationService.deserialize('filters') || initialFilter || {};
	    Object.keys(this.filters).forEach(function (x) {
	      var filter = _this.filters[x];

	      switch (x) {
	        case 'collections':
	          filter.doFilter = function (item, value) {
	            return item.collections.indexOf(value) !== -1;
	          };

	          break;

	        case 'countries':
	          filter.doFilter = function (item, value) {
	            return item.stato === value;
	          };

	          break;

	        default:
	          filter.doFilter = function (item, value) {
	            return item.features.indexOf(value) !== -1;
	          };

	      }

	      filter.options.unshift({
	        label: _this.filters[x].placeholder,
	        value: null
	      });
	      var selectedOption = filter.options.find(function (o) {
	        return Boolean(o.value === (locationFilters[x] || null));
	      });
	      filter.value = selectedOption.value;
	      filter.placeholder = selectedOption.label;
	    });
	    return filters;
	  };

	  _proto.serializeFilters = function serializeFilters() {
	    var _this2 = this;

	    var filters = {};
	    var any = false;
	    Object.keys(this.filters).forEach(function (x) {
	      var filter = _this2.filters[x];

	      if (filter.value !== null) {
	        filters[x] = filter.value;
	        any = true;
	      }
	    });

	    if (!any) {
	      filters = this.initialFilters ? {} : null;
	    } // console.log('StoresCtrl.serializeFilters', filters);


	    this.locationService.serialize('filters', filters);
	    return filters;
	  };

	  _proto.applyFilters = function applyFilters(serialize) {
	    var _this3 = this;

	    if (serialize !== false) this.serializeFilters();
	    var filters = Object.keys(this.filters).map(function (x) {
	      return _this3.filters[x];
	    }).filter(function (x) {
	      return x.value !== null;
	    });
	    var filteredStores = this.stores.slice(); // console.log(filteredStores);

	    if (filters.length) {
	      filteredStores = filteredStores.filter(function (store) {
	        var has = true;
	        filters.forEach(function (filter) {
	          has = has && filter.doFilter(store, filter.value);
	        });
	        return has;
	      });
	    } // console.log(filteredStores, filters);


	    this.filteredStores = [];
	    this.$timeout(function () {
	      _this3.filteredStores = filteredStores;

	      _this3.updateFilterStates(filteredStores); // delayer for image update

	    }, 50);
	    GtmService.pageViewFilters(GTM_CAT$9, this.filters);
	  };

	  _proto.updateFilterStates = function updateFilterStates(stores) {
	    var _this4 = this;

	    // console.log('updateFilterStores', stores);
	    Object.keys(this.filters).forEach(function (x) {
	      var filter = _this4.filters[x];
	      filter.options.forEach(function (option) {
	        var has = false;

	        if (option.value) {
	          var i = 0;

	          while (i < stores.length && !has) {
	            var store = stores[i];
	            has = filter.doFilter(store, option.value);
	            i++;
	          }
	        } else {
	          has = true;
	        }

	        option.disabled = !has;
	      }); // console.log(filter.options);
	    });
	  };

	  _proto.setFilter = function setFilter(item, filter) {
	    item = item || filter.options[0];
	    filter.value = item.value;
	    filter.placeholder = item.label;
	    this.applyFilters();
	    this.$scope.$broadcast('onCloseDropdown');
	  };

	  _proto.removeFilter = function removeFilter(filter) {
	    this.setFilter(null, filter);
	  };

	  return StoresCtrl;
	}();

	StoresCtrl.$inject = ['$scope', '$timeout', 'LocationService'];

	var MOOD_TYPES$1 = Object.freeze({
	  Tile: 1,
	  Horizontal: 2,
	  Vertical: 3,
	  Card: 4,
	  Decor: 5
	});
	var ITEMS_PER_PAGE$5 = 20;

	var WishlistCtrl =
	/*#__PURE__*/
	function () {
	  function WishlistCtrl($scope, $timeout, WishlistService) {
	    var _this = this;

	    this.$scope = $scope;
	    this.$timeout = $timeout;
	    this.wishlistService = WishlistService;
	    this.items = [];
	    this.moodTypes = MOOD_TYPES$1;
	    this.unsubscribe = new Subject();
	    this.wishlistService.count$.pipe(takeUntil(this.unsubscribe)).subscribe(function (count) {
	      return _this.count = count;
	    });
	    $scope.$on('destroy', function () {
	      // console.log('destroy');
	      _this.unsubscribe.next();

	      _this.unsubscribe.complete();
	    });
	    this.load();
	  }

	  var _proto = WishlistCtrl.prototype;

	  _proto.load = function load() {
	    var _this2 = this;

	    this.wishlistService.get().pipe(takeUntil(this.unsubscribe)).subscribe(function (success) {
	      // console.log('WishlistCtrl.load', success);
	      if (success) {
	        var items = success.data.slice();
	        var wishlist = _this2.wishlistService.wishlist;
	        items.forEach(function (item) {
	          var index = _this2.wishlistService.indexOf(item);

	          if (index >= 0) {
	            item.name = wishlist[index].name;
	            item.typeName = wishlist[index].typeName;
	          }
	        });
	        /* FAKE */

	        /*
	        while (items.length < 200) {
	        	items = items.concat(items);
	        }
	        items.sort((a, b) => Math.random() > 0.5 ? 1 : -1);
	        */

	        /* FAKE */

	        _this2.items = [];
	        _this2.visibleItems = [];
	        _this2.maxItems = ITEMS_PER_PAGE$5;

	        _this2.$timeout(function () {
	          _this2.items = items;
	          _this2.visibleItems = items.slice(0, _this2.maxItems);
	        }, 50);
	      }
	    }, function (error) {
	      return console.log('WishlistCtrl.load.error', error);
	    });
	  };

	  _proto.clearAll = function clearAll() {
	    var _this3 = this;

	    this.wishlistService.clearAll().pipe(takeUntil(this.unsubscribe)).subscribe(function (success) {
	      _this3.items = [];
	      _this3.visibleItems = [];
	      _this3.maxItems = ITEMS_PER_PAGE$5;
	    }, function (error) {
	      return console.log('WishlistCtrl.clearAll.error', error);
	    });
	  };

	  _proto.onScroll = function onScroll(event) {
	    var _this4 = this;

	    if (event.rect.bottom < event.windowRect.bottom) {
	      // console.log('more!');
	      if (!this.busy && this.maxItems < this.items.length) {
	        this.$timeout(function () {
	          _this4.busy = true;

	          _this4.$timeout(function () {
	            _this4.maxItems += ITEMS_PER_PAGE$5;
	            _this4.visibleItems = _this4.items.slice(0, _this4.maxItems);
	            _this4.busy = false; // console.log(this.visibleItems.length);
	          }, 1000);
	        }, 0);
	      }
	    }
	  };

	  _proto.print = function print() {
	    return window.print();
	    /*
	    const iframe = document.createElement('iframe');
	    iframe.onload = function() {
	    	console.log('onload');
	    	this.contentWindow.print();
	    	iframe.parentNode.removeChild(iframe);
	    };
	    iframe.style.width = '768px';
	    iframe.src = window.location.href + '?printable';
	    document.body.appendChild(iframe);
	    */
	  };

	  return WishlistCtrl;
	}();

	WishlistCtrl.$inject = ['$scope', '$timeout', 'WishlistService'];

	var MODULE_NAME = 'app';
	var app = angular.module(MODULE_NAME, ['ngSanitize', 'jsonFormatter']);
	app.config(['$locationProvider', function ($locationProvider) {
	  $locationProvider.html5Mode(true).hashPrefix('*');
	}]).config(['$compileProvider', function ($compileProvider) {
	  $compileProvider.debugInfoEnabled(false);
	}]);
	app.factory('ApiService', ApiService.factory).factory('DomService', DomService.factory).factory('LocationService', LocationService.factory).factory('PromiseService', PromiseService.factory).factory('StateService', StateService.factory).factory('CookieService', CookieService.factory).factory('LocalStorageService', LocalStorageService.factory).factory('SessionStorageService', SessionStorageService.factory).factory('WishlistService', WishlistService.factory);
	app.directive('appear', AppearDirective.factory).directive('control', ControlDirective.factory).directive('controlMessages', ControlMessagesDirective.factory).directive('cookies', CookiesDirective.factory).directive('glslCanvas', GlslCanvasDirective.factory).directive('gtmCollection', GtmCollectionDirective.factory).directive('gtmDealerLocator', gtmDealerLocatorDirective.factory).directive('gtmForm', GtmFormDirective.factory).directive('hasDropdown', HasDropdownDirective.factory).directive('highway', HighwayDirective.factory).directive('hilight', HilightDirective.factory).directive('href', HrefDirective.factory).directive('lastItem', LastItemDirective.factory).directive('lazy', LazyDirective.factory).directive('lazyScript', LazyScriptDirective.factory).directive('thron', ThronDirective.factory).directive('media', MediaDirective.factory).directive('moodboardDropdown', MoodboardDropdownDirective.factory).directive('moodboardSearch', MoodboardSearchDirective.factory).directive('muuri', MuuriDirective.factory).directive('parallax', ParallaxDirective.factory).directive('objectFit', ObjectFitDirective.factory).directive('overOn', OverOnDirective.factory).directive('scroll', ScrollDirective.factory).directive('scrollTo', ScrollToDirective.factory).directive('selectWithAutocomplete', AutocompleteDirective.factory).directive('sticky', StickyDirective.factory).directive('swiperGallery', SwiperGalleryDirective.factory).directive('swiperGalleryHero', SwiperGalleryHeroDirective.factory).directive('swiperHero', SwiperHeroDirective.factory).directive('swiperFocus', SwiperFocusDirective.factory).directive('swiperProjects', SwiperProjectsDirective.factory).directive('swiperReferences', SwiperReferencesDirective.factory).directive('swiperTile', SwiperTileDirective.factory).directive('swiperTimeline', SwiperTimelineDirective.factory) // .directive('transition', TransitionDirective.factory)
	.directive('validate', ValidateDirective.factory).directive('video', VideoDirective.factory).directive('visibility', VisibilityDirective.factory).directive('wishlist', WishlistDirective.factory).directive('world', WorldDirective.factory).directive('zoomable', ZoomableDirective.factory);
	app.controller('RootCtrl', RootCtrl).controller('AdvancedSearchCtrl', AdvancedSearchCtrl).controller('CollectionsCtrl', CollectionsCtrl).controller('Collections01Ctrl', Collections01Ctrl).controller('EffectsCtrl', EffectsCtrl).controller('ContactsCtrl', ContactsCtrl).controller('FaqCtrl', FaqCtrl).controller('GalleriesCtrl', GalleriesCtrl).controller('MagazineCtrl', MagazineCtrl).controller('MoodboardCtrl', MoodboardCtrl).controller('MoodboardSectionCtrl', MoodboardSectionCtrl).controller('NewsCtrl', NewsCtrl).controller('ReferencesCtrl', ReferencesCtrl).controller('StoreLocatorCtrl', StoreLocatorCtrl).controller('StoresCtrl', StoresCtrl).controller('WishlistCtrl', WishlistCtrl);
	app.filter('imageWithFeatures', [ImageWithFeatures]).filter('notIn', ['$filter', NotInFilter]).filter('trusted', ['$sce', TrustedFilter]); // app.run(['$compile', '$timeout', '$rootScope', function($compile, $timeout, $rootScope) {}]);

	app.run(['$compile', '$timeout', '$rootScope', function ($compile, $timeout, $rootScope) {
	  $rootScope.first = true;
	  $rootScope.firstView = document.querySelector('.view').cloneNode(true); // console.log('$rootScope.firstView', $rootScope.firstView);
	}]);

	angular.bootstrap(document, [MODULE_NAME]);

})));
//# sourceMappingURL=app.js.map
