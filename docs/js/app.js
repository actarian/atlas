(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

(function webpackUniversalModuleDefinition(root, factory) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof2(exports)) === 'object' && (typeof module === "undefined" ? "undefined" : _typeof2(module)) === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define("Highway", [], factory);else if ((typeof exports === "undefined" ? "undefined" : _typeof2(exports)) === 'object') exports["Highway"] = factory();else root["Highway"] = factory();
})(window, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && _typeof2(value) === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) {
          __webpack_require__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
        }
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 61);
      /******/
    }(
    /************************************************************************/

    /******/
    [
    /* 0 */

    /***/
    function (module, exports, __webpack_require__) {
      var store = __webpack_require__(27)('wks');

      var uid = __webpack_require__(15);

      var _Symbol = __webpack_require__(1).Symbol;

      var USE_SYMBOL = typeof _Symbol == 'function';

      var $exports = module.exports = function (name) {
        return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
      };

      $exports.store = store;
      /***/
    },
    /* 1 */

    /***/
    function (module, exports) {
      // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
      var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
      : Function('return this')();
      if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

      /***/
    },
    /* 2 */

    /***/
    function (module, exports) {
      module.exports = function (it) {
        return _typeof2(it) === 'object' ? it !== null : typeof it === 'function';
      };
      /***/

    },
    /* 3 */

    /***/
    function (module, exports, __webpack_require__) {
      var isObject = __webpack_require__(2);

      module.exports = function (it) {
        if (!isObject(it)) throw TypeError(it + ' is not an object!');
        return it;
      };
      /***/

    },
    /* 4 */

    /***/
    function (module, exports, __webpack_require__) {
      // Thank's IE8 for his funny defineProperty
      module.exports = !__webpack_require__(7)(function () {
        return Object.defineProperty({}, 'a', {
          get: function get() {
            return 7;
          }
        }).a != 7;
      });
      /***/
    },
    /* 5 */

    /***/
    function (module, exports, __webpack_require__) {
      var anObject = __webpack_require__(3);

      var IE8_DOM_DEFINE = __webpack_require__(36);

      var toPrimitive = __webpack_require__(25);

      var dP = Object.defineProperty;
      exports.f = __webpack_require__(4) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPrimitive(P, true);
        anObject(Attributes);
        if (IE8_DOM_DEFINE) try {
          return dP(O, P, Attributes);
        } catch (e) {
          /* empty */
        }
        if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
        if ('value' in Attributes) O[P] = Attributes.value;
        return O;
      };
      /***/
    },
    /* 6 */

    /***/
    function (module, exports, __webpack_require__) {
      var dP = __webpack_require__(5);

      var createDesc = __webpack_require__(19);

      module.exports = __webpack_require__(4) ? function (object, key, value) {
        return dP.f(object, key, createDesc(1, value));
      } : function (object, key, value) {
        object[key] = value;
        return object;
      };
      /***/
    },
    /* 7 */

    /***/
    function (module, exports) {
      module.exports = function (exec) {
        try {
          return !!exec();
        } catch (e) {
          return true;
        }
      };
      /***/

    },
    /* 8 */

    /***/
    function (module, exports, __webpack_require__) {
      var global = __webpack_require__(1);

      var hide = __webpack_require__(6);

      var has = __webpack_require__(9);

      var SRC = __webpack_require__(15)('src');

      var TO_STRING = 'toString';
      var $toString = Function[TO_STRING];
      var TPL = ('' + $toString).split(TO_STRING);

      __webpack_require__(11).inspectSource = function (it) {
        return $toString.call(it);
      };

      (module.exports = function (O, key, val, safe) {
        var isFunction = typeof val == 'function';
        if (isFunction) has(val, 'name') || hide(val, 'name', key);
        if (O[key] === val) return;
        if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));

        if (O === global) {
          O[key] = val;
        } else if (!safe) {
          delete O[key];
          hide(O, key, val);
        } else if (O[key]) {
          O[key] = val;
        } else {
          hide(O, key, val);
        } // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative

      })(Function.prototype, TO_STRING, function toString() {
        return typeof this == 'function' && this[SRC] || $toString.call(this);
      });
      /***/
    },
    /* 9 */

    /***/
    function (module, exports) {
      var hasOwnProperty = {}.hasOwnProperty;

      module.exports = function (it, key) {
        return hasOwnProperty.call(it, key);
      };
      /***/

    },
    /* 10 */

    /***/
    function (module, exports, __webpack_require__) {
      var global = __webpack_require__(1);

      var core = __webpack_require__(11);

      var hide = __webpack_require__(6);

      var redefine = __webpack_require__(8);

      var ctx = __webpack_require__(12);

      var PROTOTYPE = 'prototype';

      var $export = function $export(type, name, source) {
        var IS_FORCED = type & $export.F;
        var IS_GLOBAL = type & $export.G;
        var IS_STATIC = type & $export.S;
        var IS_PROTO = type & $export.P;
        var IS_BIND = type & $export.B;
        var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
        var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
        var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
        var key, own, out, exp;
        if (IS_GLOBAL) source = name;

        for (key in source) {
          // contains in native
          own = !IS_FORCED && target && target[key] !== undefined; // export native or passed

          out = (own ? target : source)[key]; // bind timers to global for call from export context

          exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out; // extend global

          if (target) redefine(target, key, out, type & $export.U); // export

          if (exports[key] != out) hide(exports, key, exp);
          if (IS_PROTO && expProto[key] != out) expProto[key] = out;
        }
      };

      global.core = core; // type bitmap

      $export.F = 1; // forced

      $export.G = 2; // global

      $export.S = 4; // static

      $export.P = 8; // proto

      $export.B = 16; // bind

      $export.W = 32; // wrap

      $export.U = 64; // safe

      $export.R = 128; // real proto method for `library`

      module.exports = $export;
      /***/
    },
    /* 11 */

    /***/
    function (module, exports) {
      var core = module.exports = {
        version: '2.5.7'
      };
      if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

      /***/
    },
    /* 12 */

    /***/
    function (module, exports, __webpack_require__) {
      // optional / simple context binding
      var aFunction = __webpack_require__(20);

      module.exports = function (fn, that, length) {
        aFunction(fn);
        if (that === undefined) return fn;

        switch (length) {
          case 1:
            return function (a) {
              return fn.call(that, a);
            };

          case 2:
            return function (a, b) {
              return fn.call(that, a, b);
            };

          case 3:
            return function (a, b, c) {
              return fn.call(that, a, b, c);
            };
        }

        return function ()
        /* ...args */
        {
          return fn.apply(that, arguments);
        };
      };
      /***/

    },
    /* 13 */

    /***/
    function (module, exports, __webpack_require__) {
      // to indexed object, toObject with fallback for non-array-like ES3 strings
      var IObject = __webpack_require__(64);

      var defined = __webpack_require__(21);

      module.exports = function (it) {
        return IObject(defined(it));
      };
      /***/

    },
    /* 14 */

    /***/
    function (module, exports) {
      var toString = {}.toString;

      module.exports = function (it) {
        return toString.call(it).slice(8, -1);
      };
      /***/

    },
    /* 15 */

    /***/
    function (module, exports) {
      var id = 0;
      var px = Math.random();

      module.exports = function (key) {
        return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
      };
      /***/

    },
    /* 16 */

    /***/
    function (module, exports) {
      module.exports = false;
      /***/
    },
    /* 17 */

    /***/
    function (module, exports) {
      module.exports = {};
      /***/
    },
    /* 18 */

    /***/
    function (module, exports, __webpack_require__) {
      var def = __webpack_require__(5).f;

      var has = __webpack_require__(9);

      var TAG = __webpack_require__(0)('toStringTag');

      module.exports = function (it, tag, stat) {
        if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
          configurable: true,
          value: tag
        });
      };
      /***/

    },
    /* 19 */

    /***/
    function (module, exports) {
      module.exports = function (bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value: value
        };
      };
      /***/

    },
    /* 20 */

    /***/
    function (module, exports) {
      module.exports = function (it) {
        if (typeof it != 'function') throw TypeError(it + ' is not a function!');
        return it;
      };
      /***/

    },
    /* 21 */

    /***/
    function (module, exports) {
      // 7.2.1 RequireObjectCoercible(argument)
      module.exports = function (it) {
        if (it == undefined) throw TypeError("Can't call method on  " + it);
        return it;
      };
      /***/

    },
    /* 22 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var LIBRARY = __webpack_require__(16);

      var global = __webpack_require__(1);

      var ctx = __webpack_require__(12);

      var classof = __webpack_require__(39);

      var $export = __webpack_require__(10);

      var isObject = __webpack_require__(2);

      var aFunction = __webpack_require__(20);

      var anInstance = __webpack_require__(28);

      var forOf = __webpack_require__(29);

      var speciesConstructor = __webpack_require__(68);

      var task = __webpack_require__(42).set;

      var microtask = __webpack_require__(70)();

      var newPromiseCapabilityModule = __webpack_require__(44);

      var perform = __webpack_require__(71);

      var userAgent = __webpack_require__(72);

      var promiseResolve = __webpack_require__(73);

      var PROMISE = 'Promise';
      var TypeError = global.TypeError;
      var process = global.process;
      var versions = process && process.versions;
      var v8 = versions && versions.v8 || '';
      var $Promise = global[PROMISE];
      var isNode = classof(process) == 'process';

      var empty = function empty() {
        /* empty */
      };

      var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
      var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;
      var USE_NATIVE = !!function () {
        try {
          // correct subclassing with @@species support
          var promise = $Promise.resolve(1);

          var FakePromise = (promise.constructor = {})[__webpack_require__(0)('species')] = function (exec) {
            exec(empty, empty);
          }; // unhandled rejections tracking support, NodeJS Promise without it fails @@species test


          return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
          // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
          // we can't detect it synchronously, so just check versions
          && v8.indexOf('6.6') !== 0 && userAgent.indexOf('Chrome/66') === -1;
        } catch (e) {
          /* empty */
        }
      }(); // helpers

      var isThenable = function isThenable(it) {
        var then;
        return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
      };

      var notify = function notify(promise, isReject) {
        if (promise._n) return;
        promise._n = true;
        var chain = promise._c;
        microtask(function () {
          var value = promise._v;
          var ok = promise._s == 1;
          var i = 0;

          var run = function run(reaction) {
            var handler = ok ? reaction.ok : reaction.fail;
            var resolve = reaction.resolve;
            var reject = reaction.reject;
            var domain = reaction.domain;
            var result, then, exited;

            try {
              if (handler) {
                if (!ok) {
                  if (promise._h == 2) onHandleUnhandled(promise);
                  promise._h = 1;
                }

                if (handler === true) result = value;else {
                  if (domain) domain.enter();
                  result = handler(value); // may throw

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
            } catch (e) {
              if (domain && !exited) domain.exit();
              reject(e);
            }
          };

          while (chain.length > i) {
            run(chain[i++]);
          } // variable length - can't use forEach


          promise._c = [];
          promise._n = false;
          if (isReject && !promise._h) onUnhandled(promise);
        });
      };

      var onUnhandled = function onUnhandled(promise) {
        task.call(global, function () {
          var value = promise._v;
          var unhandled = isUnhandled(promise);
          var result, handler, console;

          if (unhandled) {
            result = perform(function () {
              if (isNode) {
                process.emit('unhandledRejection', value, promise);
              } else if (handler = global.onunhandledrejection) {
                handler({
                  promise: promise,
                  reason: value
                });
              } else if ((console = global.console) && console.error) {
                console.error('Unhandled promise rejection', value);
              }
            }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

            promise._h = isNode || isUnhandled(promise) ? 2 : 1;
          }

          promise._a = undefined;
          if (unhandled && result.e) throw result.v;
        });
      };

      var isUnhandled = function isUnhandled(promise) {
        return promise._h !== 1 && (promise._a || promise._c).length === 0;
      };

      var onHandleUnhandled = function onHandleUnhandled(promise) {
        task.call(global, function () {
          var handler;

          if (isNode) {
            process.emit('rejectionHandled', promise);
          } else if (handler = global.onrejectionhandled) {
            handler({
              promise: promise,
              reason: promise._v
            });
          }
        });
      };

      var $reject = function $reject(value) {
        var promise = this;
        if (promise._d) return;
        promise._d = true;
        promise = promise._w || promise; // unwrap

        promise._v = value;
        promise._s = 2;
        if (!promise._a) promise._a = promise._c.slice();
        notify(promise, true);
      };

      var $resolve = function $resolve(value) {
        var promise = this;
        var then;
        if (promise._d) return;
        promise._d = true;
        promise = promise._w || promise; // unwrap

        try {
          if (promise === value) throw TypeError("Promise can't be resolved itself");

          if (then = isThenable(value)) {
            microtask(function () {
              var wrapper = {
                _w: promise,
                _d: false
              }; // wrap

              try {
                then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
              } catch (e) {
                $reject.call(wrapper, e);
              }
            });
          } else {
            promise._v = value;
            promise._s = 1;
            notify(promise, false);
          }
        } catch (e) {
          $reject.call({
            _w: promise,
            _d: false
          }, e); // wrap
        }
      }; // constructor polyfill


      if (!USE_NATIVE) {
        // 25.4.3.1 Promise(executor)
        $Promise = function Promise(executor) {
          anInstance(this, $Promise, PROMISE, '_h');
          aFunction(executor);
          Internal.call(this);

          try {
            executor(ctx($resolve, this, 1), ctx($reject, this, 1));
          } catch (err) {
            $reject.call(this, err);
          }
        }; // eslint-disable-next-line no-unused-vars


        Internal = function Promise(executor) {
          this._c = []; // <- awaiting reactions

          this._a = undefined; // <- checked in isUnhandled reactions

          this._s = 0; // <- state

          this._d = false; // <- done

          this._v = undefined; // <- value

          this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled

          this._n = false; // <- notify
        };

        Internal.prototype = __webpack_require__(30)($Promise.prototype, {
          // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
          then: function then(onFulfilled, onRejected) {
            var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
            reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
            reaction.fail = typeof onRejected == 'function' && onRejected;
            reaction.domain = isNode ? process.domain : undefined;

            this._c.push(reaction);

            if (this._a) this._a.push(reaction);
            if (this._s) notify(this, false);
            return reaction.promise;
          },
          // 25.4.5.1 Promise.prototype.catch(onRejected)
          'catch': function _catch(onRejected) {
            return this.then(undefined, onRejected);
          }
        });

        OwnPromiseCapability = function OwnPromiseCapability() {
          var promise = new Internal();
          this.promise = promise;
          this.resolve = ctx($resolve, promise, 1);
          this.reject = ctx($reject, promise, 1);
        };

        newPromiseCapabilityModule.f = newPromiseCapability = function newPromiseCapability(C) {
          return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
        };
      }

      $export($export.G + $export.W + $export.F * !USE_NATIVE, {
        Promise: $Promise
      });

      __webpack_require__(18)($Promise, PROMISE);

      __webpack_require__(45)(PROMISE);

      Wrapper = __webpack_require__(11)[PROMISE]; // statics

      $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
        // 25.4.4.5 Promise.reject(r)
        reject: function reject(r) {
          var capability = newPromiseCapability(this);
          var $$reject = capability.reject;
          $$reject(r);
          return capability.promise;
        }
      });
      $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
        // 25.4.4.6 Promise.resolve(x)
        resolve: function resolve(x) {
          return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
        }
      });
      $export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(46)(function (iter) {
        $Promise.all(iter)['catch'](empty);
      })), PROMISE, {
        // 25.4.4.1 Promise.all(iterable)
        all: function all(iterable) {
          var C = this;
          var capability = newPromiseCapability(C);
          var resolve = capability.resolve;
          var reject = capability.reject;
          var result = perform(function () {
            var values = [];
            var index = 0;
            var remaining = 1;
            forOf(iterable, false, function (promise) {
              var $index = index++;
              var alreadyCalled = false;
              values.push(undefined);
              remaining++;
              C.resolve(promise).then(function (value) {
                if (alreadyCalled) return;
                alreadyCalled = true;
                values[$index] = value;
                --remaining || resolve(values);
              }, reject);
            });
            --remaining || resolve(values);
          });
          if (result.e) reject(result.v);
          return capability.promise;
        },
        // 25.4.4.4 Promise.race(iterable)
        race: function race(iterable) {
          var C = this;
          var capability = newPromiseCapability(C);
          var reject = capability.reject;
          var result = perform(function () {
            forOf(iterable, false, function (promise) {
              C.resolve(promise).then(capability.resolve, reject);
            });
          });
          if (result.e) reject(result.v);
          return capability.promise;
        }
      });
      /***/
    },
    /* 23 */

    /***/
    function (module, exports, __webpack_require__) {
      // 19.1.2.14 / 15.2.3.14 Object.keys(O)
      var $keys = __webpack_require__(51);

      var enumBugKeys = __webpack_require__(33);

      module.exports = Object.keys || function keys(O) {
        return $keys(O, enumBugKeys);
      };
      /***/

    },
    /* 24 */

    /***/
    function (module, exports, __webpack_require__) {
      var isObject = __webpack_require__(2);

      var document = __webpack_require__(1).document; // typeof document.createElement is 'object' in old IE


      var is = isObject(document) && isObject(document.createElement);

      module.exports = function (it) {
        return is ? document.createElement(it) : {};
      };
      /***/

    },
    /* 25 */

    /***/
    function (module, exports, __webpack_require__) {
      // 7.1.1 ToPrimitive(input [, PreferredType])
      var isObject = __webpack_require__(2); // instead of the ES6 spec version, we didn't implement @@toPrimitive case
      // and the second argument - flag - preferred type is a string


      module.exports = function (it, S) {
        if (!isObject(it)) return it;
        var fn, val;
        if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
        if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
        if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
        throw TypeError("Can't convert object to primitive value");
      };
      /***/

    },
    /* 26 */

    /***/
    function (module, exports) {
      exports.f = {}.propertyIsEnumerable;
      /***/
    },
    /* 27 */

    /***/
    function (module, exports, __webpack_require__) {
      var core = __webpack_require__(11);

      var global = __webpack_require__(1);

      var SHARED = '__core-js_shared__';
      var store = global[SHARED] || (global[SHARED] = {});
      (module.exports = function (key, value) {
        return store[key] || (store[key] = value !== undefined ? value : {});
      })('versions', []).push({
        version: core.version,
        mode: __webpack_require__(16) ? 'pure' : 'global',
        copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
      });
      /***/
    },
    /* 28 */

    /***/
    function (module, exports) {
      module.exports = function (it, Constructor, name, forbiddenField) {
        if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
          throw TypeError(name + ': incorrect invocation!');
        }

        return it;
      };
      /***/

    },
    /* 29 */

    /***/
    function (module, exports, __webpack_require__) {
      var ctx = __webpack_require__(12);

      var call = __webpack_require__(65);

      var isArrayIter = __webpack_require__(66);

      var anObject = __webpack_require__(3);

      var toLength = __webpack_require__(40);

      var getIterFn = __webpack_require__(67);

      var BREAK = {};
      var RETURN = {};

      var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
        var iterFn = ITERATOR ? function () {
          return iterable;
        } : getIterFn(iterable);
        var f = ctx(fn, that, entries ? 2 : 1);
        var index = 0;
        var length, step, iterator, result;
        if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!'); // fast case for arrays with default iterator

        if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
          result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
          if (result === BREAK || result === RETURN) return result;
        } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
          result = call(iterator, f, step.value, entries);
          if (result === BREAK || result === RETURN) return result;
        }
      };

      exports.BREAK = BREAK;
      exports.RETURN = RETURN;
      /***/
    },
    /* 30 */

    /***/
    function (module, exports, __webpack_require__) {
      var redefine = __webpack_require__(8);

      module.exports = function (target, src, safe) {
        for (var key in src) {
          redefine(target, key, src[key], safe);
        }

        return target;
      };
      /***/

    },
    /* 31 */

    /***/
    function (module, exports, __webpack_require__) {
      var META = __webpack_require__(15)('meta');

      var isObject = __webpack_require__(2);

      var has = __webpack_require__(9);

      var setDesc = __webpack_require__(5).f;

      var id = 0;

      var isExtensible = Object.isExtensible || function () {
        return true;
      };

      var FREEZE = !__webpack_require__(7)(function () {
        return isExtensible(Object.preventExtensions({}));
      });

      var setMeta = function setMeta(it) {
        setDesc(it, META, {
          value: {
            i: 'O' + ++id,
            // object ID
            w: {} // weak collections IDs

          }
        });
      };

      var fastKey = function fastKey(it, create) {
        // return primitive with prefix
        if (!isObject(it)) return _typeof2(it) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

        if (!has(it, META)) {
          // can't set metadata to uncaught frozen object
          if (!isExtensible(it)) return 'F'; // not necessary to add metadata

          if (!create) return 'E'; // add missing metadata

          setMeta(it); // return object ID
        }

        return it[META].i;
      };

      var getWeak = function getWeak(it, create) {
        if (!has(it, META)) {
          // can't set metadata to uncaught frozen object
          if (!isExtensible(it)) return true; // not necessary to add metadata

          if (!create) return false; // add missing metadata

          setMeta(it); // return hash weak collections IDs
        }

        return it[META].w;
      }; // add metadata on freeze-family methods calling


      var onFreeze = function onFreeze(it) {
        if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
        return it;
      };

      var meta = module.exports = {
        KEY: META,
        NEED: false,
        fastKey: fastKey,
        getWeak: getWeak,
        onFreeze: onFreeze
      };
      /***/
    },
    /* 32 */

    /***/
    function (module, exports, __webpack_require__) {
      var shared = __webpack_require__(27)('keys');

      var uid = __webpack_require__(15);

      module.exports = function (key) {
        return shared[key] || (shared[key] = uid(key));
      };
      /***/

    },
    /* 33 */

    /***/
    function (module, exports) {
      // IE 8- don't enum bug keys
      module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');
      /***/
    },
    /* 34 */

    /***/
    function (module, exports, __webpack_require__) {
      // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
      var anObject = __webpack_require__(3);

      var dPs = __webpack_require__(84);

      var enumBugKeys = __webpack_require__(33);

      var IE_PROTO = __webpack_require__(32)('IE_PROTO');

      var Empty = function Empty() {
        /* empty */
      };

      var PROTOTYPE = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype

      var _createDict = function createDict() {
        // Thrash, waste and sodomy: IE GC bug
        var iframe = __webpack_require__(24)('iframe');

        var i = enumBugKeys.length;
        var lt = '<';
        var gt = '>';
        var iframeDocument;
        iframe.style.display = 'none';

        __webpack_require__(43).appendChild(iframe);

        iframe.src = 'javascript:'; // eslint-disable-line no-script-url
        // createDict = iframe.contentWindow.Object;
        // html.removeChild(iframe);

        iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
        iframeDocument.close();
        _createDict = iframeDocument.F;

        while (i--) {
          delete _createDict[PROTOTYPE][enumBugKeys[i]];
        }

        return _createDict();
      };

      module.exports = Object.create || function create(O, Properties) {
        var result;

        if (O !== null) {
          Empty[PROTOTYPE] = anObject(O);
          result = new Empty();
          Empty[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

          result[IE_PROTO] = O;
        } else result = _createDict();

        return Properties === undefined ? result : dPs(result, Properties);
      };
      /***/

    },
    /* 35 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var hide = __webpack_require__(6);

      var redefine = __webpack_require__(8);

      var fails = __webpack_require__(7);

      var defined = __webpack_require__(21);

      var wks = __webpack_require__(0);

      module.exports = function (KEY, length, exec) {
        var SYMBOL = wks(KEY);
        var fns = exec(defined, SYMBOL, ''[KEY]);
        var strfn = fns[0];
        var rxfn = fns[1];

        if (fails(function () {
          var O = {};

          O[SYMBOL] = function () {
            return 7;
          };

          return ''[KEY](O) != 7;
        })) {
          redefine(String.prototype, KEY, strfn);
          hide(RegExp.prototype, SYMBOL, length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
          // 21.2.5.11 RegExp.prototype[@@split](string, limit)
          ? function (string, arg) {
            return rxfn.call(string, this, arg);
          } // 21.2.5.6 RegExp.prototype[@@match](string)
          // 21.2.5.9 RegExp.prototype[@@search](string)
          : function (string) {
            return rxfn.call(string, this);
          });
        }
      };
      /***/

    },
    /* 36 */

    /***/
    function (module, exports, __webpack_require__) {
      module.exports = !__webpack_require__(4) && !__webpack_require__(7)(function () {
        return Object.defineProperty(__webpack_require__(24)('div'), 'a', {
          get: function get() {
            return 7;
          }
        }).a != 7;
      });
      /***/
    },
    /* 37 */

    /***/
    function (module, exports, __webpack_require__) {
      // Works with __proto__ only. Old v8 can't work with null proto objects.

      /* eslint-disable no-proto */
      var isObject = __webpack_require__(2);

      var anObject = __webpack_require__(3);

      var check = function check(O, proto) {
        anObject(O);
        if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
      };

      module.exports = {
        set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
        function (test, buggy, set) {
          try {
            set = __webpack_require__(12)(Function.call, __webpack_require__(38).f(Object.prototype, '__proto__').set, 2);
            set(test, []);
            buggy = !(test instanceof Array);
          } catch (e) {
            buggy = true;
          }

          return function setPrototypeOf(O, proto) {
            check(O, proto);
            if (buggy) O.__proto__ = proto;else set(O, proto);
            return O;
          };
        }({}, false) : undefined),
        check: check
      };
      /***/
    },
    /* 38 */

    /***/
    function (module, exports, __webpack_require__) {
      var pIE = __webpack_require__(26);

      var createDesc = __webpack_require__(19);

      var toIObject = __webpack_require__(13);

      var toPrimitive = __webpack_require__(25);

      var has = __webpack_require__(9);

      var IE8_DOM_DEFINE = __webpack_require__(36);

      var gOPD = Object.getOwnPropertyDescriptor;
      exports.f = __webpack_require__(4) ? gOPD : function getOwnPropertyDescriptor(O, P) {
        O = toIObject(O);
        P = toPrimitive(P, true);
        if (IE8_DOM_DEFINE) try {
          return gOPD(O, P);
        } catch (e) {
          /* empty */
        }
        if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
      };
      /***/
    },
    /* 39 */

    /***/
    function (module, exports, __webpack_require__) {
      // getting tag from 19.1.3.6 Object.prototype.toString()
      var cof = __webpack_require__(14);

      var TAG = __webpack_require__(0)('toStringTag'); // ES3 wrong here


      var ARG = cof(function () {
        return arguments;
      }()) == 'Arguments'; // fallback for IE11 Script Access Denied error

      var tryGet = function tryGet(it, key) {
        try {
          return it[key];
        } catch (e) {
          /* empty */
        }
      };

      module.exports = function (it) {
        var O, T, B;
        return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
        : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T // builtinTag case
        : ARG ? cof(O) // ES3 arguments fallback
        : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
      };
      /***/

    },
    /* 40 */

    /***/
    function (module, exports, __webpack_require__) {
      // 7.1.15 ToLength
      var toInteger = __webpack_require__(41);

      var min = Math.min;

      module.exports = function (it) {
        return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
      };
      /***/

    },
    /* 41 */

    /***/
    function (module, exports) {
      // 7.1.4 ToInteger
      var ceil = Math.ceil;
      var floor = Math.floor;

      module.exports = function (it) {
        return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
      };
      /***/

    },
    /* 42 */

    /***/
    function (module, exports, __webpack_require__) {
      var ctx = __webpack_require__(12);

      var invoke = __webpack_require__(69);

      var html = __webpack_require__(43);

      var cel = __webpack_require__(24);

      var global = __webpack_require__(1);

      var process = global.process;
      var setTask = global.setImmediate;
      var clearTask = global.clearImmediate;
      var MessageChannel = global.MessageChannel;
      var Dispatch = global.Dispatch;
      var counter = 0;
      var queue = {};
      var ONREADYSTATECHANGE = 'onreadystatechange';
      var defer, channel, port;

      var run = function run() {
        var id = +this; // eslint-disable-next-line no-prototype-builtins

        if (queue.hasOwnProperty(id)) {
          var fn = queue[id];
          delete queue[id];
          fn();
        }
      };

      var listener = function listener(event) {
        run.call(event.data);
      }; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


      if (!setTask || !clearTask) {
        setTask = function setImmediate(fn) {
          var args = [];
          var i = 1;

          while (arguments.length > i) {
            args.push(arguments[i++]);
          }

          queue[++counter] = function () {
            // eslint-disable-next-line no-new-func
            invoke(typeof fn == 'function' ? fn : Function(fn), args);
          };

          defer(counter);
          return counter;
        };

        clearTask = function clearImmediate(id) {
          delete queue[id];
        }; // Node.js 0.8-


        if (__webpack_require__(14)(process) == 'process') {
          defer = function defer(id) {
            process.nextTick(ctx(run, id, 1));
          }; // Sphere (JS game engine) Dispatch API

        } else if (Dispatch && Dispatch.now) {
          defer = function defer(id) {
            Dispatch.now(ctx(run, id, 1));
          }; // Browsers with MessageChannel, includes WebWorkers

        } else if (MessageChannel) {
          channel = new MessageChannel();
          port = channel.port2;
          channel.port1.onmessage = listener;
          defer = ctx(port.postMessage, port, 1); // Browsers with postMessage, skip WebWorkers
          // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
        } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
          defer = function defer(id) {
            global.postMessage(id + '', '*');
          };

          global.addEventListener('message', listener, false); // IE8-
        } else if (ONREADYSTATECHANGE in cel('script')) {
          defer = function defer(id) {
            html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
              html.removeChild(this);
              run.call(id);
            };
          }; // Rest old browsers

        } else {
          defer = function defer(id) {
            setTimeout(ctx(run, id, 1), 0);
          };
        }
      }

      module.exports = {
        set: setTask,
        clear: clearTask
      };
      /***/
    },
    /* 43 */

    /***/
    function (module, exports, __webpack_require__) {
      var document = __webpack_require__(1).document;

      module.exports = document && document.documentElement;
      /***/
    },
    /* 44 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict"; // 25.4.1.5 NewPromiseCapability(C)

      var aFunction = __webpack_require__(20);

      function PromiseCapability(C) {
        var resolve, reject;
        this.promise = new C(function ($$resolve, $$reject) {
          if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
          resolve = $$resolve;
          reject = $$reject;
        });
        this.resolve = aFunction(resolve);
        this.reject = aFunction(reject);
      }

      module.exports.f = function (C) {
        return new PromiseCapability(C);
      };
      /***/

    },
    /* 45 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var global = __webpack_require__(1);

      var dP = __webpack_require__(5);

      var DESCRIPTORS = __webpack_require__(4);

      var SPECIES = __webpack_require__(0)('species');

      module.exports = function (KEY) {
        var C = global[KEY];
        if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
          configurable: true,
          get: function get() {
            return this;
          }
        });
      };
      /***/

    },
    /* 46 */

    /***/
    function (module, exports, __webpack_require__) {
      var ITERATOR = __webpack_require__(0)('iterator');

      var SAFE_CLOSING = false;

      try {
        var riter = [7][ITERATOR]();

        riter['return'] = function () {
          SAFE_CLOSING = true;
        }; // eslint-disable-next-line no-throw-literal


        Array.from(riter, function () {
          throw 2;
        });
      } catch (e) {
        /* empty */
      }

      module.exports = function (exec, skipClosing) {
        if (!skipClosing && !SAFE_CLOSING) return false;
        var safe = false;

        try {
          var arr = [7];
          var iter = arr[ITERATOR]();

          iter.next = function () {
            return {
              done: safe = true
            };
          };

          arr[ITERATOR] = function () {
            return iter;
          };

          exec(arr);
        } catch (e) {
          /* empty */
        }

        return safe;
      };
      /***/

    },
    /* 47 */

    /***/
    function (module, exports) {
      /**
       * Copyright (c) 2014-present, Facebook, Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */
      !function (global) {
        "use strict";

        var Op = Object.prototype;
        var hasOwn = Op.hasOwnProperty;
        var undefined; // More compressible than void 0.

        var $Symbol = typeof Symbol === "function" ? Symbol : {};
        var iteratorSymbol = $Symbol.iterator || "@@iterator";
        var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
        var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
        var inModule = _typeof2(module) === "object";
        var runtime = global.regeneratorRuntime;

        if (runtime) {
          if (inModule) {
            // If regeneratorRuntime is defined globally and we're in a module,
            // make the exports object identical to regeneratorRuntime.
            module.exports = runtime;
          } // Don't bother evaluating the rest of this file if the runtime was
          // already defined globally.


          return;
        } // Define the runtime globally (as expected by generated code) as either
        // module.exports (if we're in a module) or a new, empty object.


        runtime = global.regeneratorRuntime = inModule ? module.exports : {};

        function wrap(innerFn, outerFn, self, tryLocsList) {
          // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
          var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
          var generator = Object.create(protoGenerator.prototype);
          var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
          // .throw, and .return methods.

          generator._invoke = makeInvokeMethod(innerFn, self, context);
          return generator;
        }

        runtime.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
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
            return {
              type: "normal",
              arg: fn.call(obj, arg)
            };
          } catch (err) {
            return {
              type: "throw",
              arg: err
            };
          }
        }

        var GenStateSuspendedStart = "suspendedStart";
        var GenStateSuspendedYield = "suspendedYield";
        var GenStateExecuting = "executing";
        var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
        // breaking out of the dispatch switch statement.

        var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
        // .constructor.prototype properties for functions that return Generator
        // objects. For full spec compliance, you may wish to configure your
        // minifier not to mangle the names of these two functions.

        function Generator() {}

        function GeneratorFunction() {}

        function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
        // don't natively support it.


        var IteratorPrototype = {};

        IteratorPrototype[iteratorSymbol] = function () {
          return this;
        };

        var getProto = Object.getPrototypeOf;
        var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

        if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
          // This environment has a native %IteratorPrototype%; use it instead
          // of the polyfill.
          IteratorPrototype = NativeIteratorPrototype;
        }

        var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
        GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
        GeneratorFunctionPrototype.constructor = GeneratorFunction;
        GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
        // Iterator interface in terms of a single ._invoke method.

        function defineIteratorMethods(prototype) {
          ["next", "throw", "return"].forEach(function (method) {
            prototype[method] = function (arg) {
              return this._invoke(method, arg);
            };
          });
        }

        runtime.isGeneratorFunction = function (genFun) {
          var ctor = typeof genFun === "function" && genFun.constructor;
          return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
          // do is to check its .name property.
          (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
        };

        runtime.mark = function (genFun) {
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
        }; // Within the body of any async function, `await x` is transformed to
        // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
        // `hasOwn.call(value, "__await")` to determine if the yielded value is
        // meant to be awaited.


        runtime.awrap = function (arg) {
          return {
            __await: arg
          };
        };

        function AsyncIterator(generator) {
          function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);

            if (record.type === "throw") {
              reject(record.arg);
            } else {
              var result = record.arg;
              var value = result.value;

              if (value && _typeof2(value) === "object" && hasOwn.call(value, "__await")) {
                return Promise.resolve(value.__await).then(function (value) {
                  invoke("next", value, resolve, reject);
                }, function (err) {
                  invoke("throw", err, resolve, reject);
                });
              }

              return Promise.resolve(value).then(function (unwrapped) {
                // When a yielded Promise is resolved, its final value becomes
                // the .value of the Promise<{value,done}> result for the
                // current iteration. If the Promise is rejected, however, the
                // result for this iteration will be rejected with the same
                // reason. Note that rejections of yielded Promises are not
                // thrown back into the generator function, as is the case
                // when an awaited Promise is rejected. This difference in
                // behavior between yield and await is important, because it
                // allows the consumer to decide what to do with the yielded
                // rejection (swallow it and continue, manually .throw it back
                // into the generator, abandon iteration, whatever). With
                // await, by contrast, there is no opportunity to examine the
                // rejection reason outside the generator function, so the
                // only option is to throw it from the await expression, and
                // let the generator function handle the exception.
                result.value = unwrapped;
                resolve(result);
              }, reject);
            }
          }

          var previousPromise;

          function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
              return new Promise(function (resolve, reject) {
                invoke(method, arg, resolve, reject);
              });
            }

            return previousPromise = // If enqueue has been called before, then we want to wait until
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
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
          } // Define the unified helper method that is used to implement .next,
          // .throw, and .return (see defineIteratorMethods).


          this._invoke = enqueue;
        }

        defineIteratorMethods(AsyncIterator.prototype);

        AsyncIterator.prototype[asyncIteratorSymbol] = function () {
          return this;
        };

        runtime.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
        // AsyncIterator objects; they just return a Promise for the value of
        // the final result produced by the iterator.

        runtime.async = function (innerFn, outerFn, self, tryLocsList) {
          var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
          return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
          : iter.next().then(function (result) {
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
              } // Be forgiving, per 25.3.3.3.3 of the spec:
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
                state = context.done ? GenStateCompleted : GenStateSuspendedYield;

                if (record.arg === ContinueSentinel) {
                  continue;
                }

                return {
                  value: record.arg,
                  done: context.done
                };
              } else if (record.type === "throw") {
                state = GenStateCompleted; // Dispatch the exception by looping back around to the
                // context.dispatchException(context.arg) call above.

                context.method = "throw";
                context.arg = record.arg;
              }
            }
          };
        } // Call delegate.iterator[context.method](context.arg) and handle the
        // result, either by returning a { value, done } result from the
        // delegate iterator, or by modifying context.method and context.arg,
        // setting context.delegate to null, and returning the ContinueSentinel.


        function maybeInvokeDelegate(delegate, context) {
          var method = delegate.iterator[context.method];

          if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method always terminates the yield* loop.
            context.delegate = null;

            if (context.method === "throw") {
              if (delegate.iterator.return) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = "return";
                context.arg = undefined;
                maybeInvokeDelegate(delegate, context);

                if (context.method === "throw") {
                  // If maybeInvokeDelegate(context) changed context.method from
                  // "return" to "throw", let that override the TypeError below.
                  return ContinueSentinel;
                }
              }

              context.method = "throw";
              context.arg = new TypeError("The iterator does not provide a 'throw' method");
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

          if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
          }

          if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

            context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.

            if (context.method !== "return") {
              context.method = "next";
              context.arg = undefined;
            }
          } else {
            // Re-yield the result returned by the delegate method.
            return info;
          } // The delegate iterator is finished, so forget it and continue with
          // the outer generator.


          context.delegate = null;
          return ContinueSentinel;
        } // Define Generator.prototype.{next,throw,return} in terms of the
        // unified ._invoke helper method.


        defineIteratorMethods(Gp);
        Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
        // @@iterator function is called on it. Some browsers' implementations of the
        // iterator prototype chain incorrectly implement this, causing the Generator
        // object to not be returned from this call. This ensures that doesn't happen.
        // See https://github.com/facebook/regenerator/issues/274 for more details.

        Gp[iteratorSymbol] = function () {
          return this;
        };

        Gp.toString = function () {
          return "[object Generator]";
        };

        function pushTryEntry(locs) {
          var entry = {
            tryLoc: locs[0]
          };

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
          this.tryEntries = [{
            tryLoc: "root"
          }];
          tryLocsList.forEach(pushTryEntry, this);
          this.reset(true);
        }

        runtime.keys = function (object) {
          var keys = [];

          for (var key in object) {
            keys.push(key);
          }

          keys.reverse(); // Rather than returning an object with a next method, we keep
          // things simple and return the next function itself.

          return function next() {
            while (keys.length) {
              var key = keys.pop();

              if (key in object) {
                next.value = key;
                next.done = false;
                return next;
              }
            } // To avoid creating an additional object, we just hang the .value
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
              var i = -1,
                  next = function next() {
                while (++i < iterable.length) {
                  if (hasOwn.call(iterable, i)) {
                    next.value = iterable[i];
                    next.done = false;
                    return next;
                  }
                }

                next.value = undefined;
                next.done = true;
                return next;
              };

              return next.next = next;
            }
          } // Return an iterator with no values.


          return {
            next: doneResult
          };
        }

        runtime.values = values;

        function doneResult() {
          return {
            value: undefined,
            done: true
          };
        }

        Context.prototype = {
          constructor: Context,
          reset: function reset(skipTempReset) {
            this.prev = 0;
            this.next = 0; // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.

            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);

            if (!skipTempReset) {
              for (var name in this) {
                // Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                  this[name] = undefined;
                }
              }
            }
          },
          stop: function stop() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;

            if (rootRecord.type === "throw") {
              throw rootRecord.arg;
            }

            return this.rval;
          },
          dispatchException: function dispatchException(exception) {
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
                context.arg = undefined;
              }

              return !!caught;
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
          abrupt: function abrupt(type, arg) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];

              if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                var finallyEntry = entry;
                break;
              }
            }

            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
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
          complete: function complete(record, afterLoc) {
            if (record.type === "throw") {
              throw record.arg;
            }

            if (record.type === "break" || record.type === "continue") {
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
          finish: function finish(finallyLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];

              if (entry.finallyLoc === finallyLoc) {
                this.complete(entry.completion, entry.afterLoc);
                resetTryEntry(entry);
                return ContinueSentinel;
              }
            }
          },
          "catch": function _catch(tryLoc) {
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
            } // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.


            throw new Error("illegal catch attempt");
          },
          delegateYield: function delegateYield(iterable, resultName, nextLoc) {
            this.delegate = {
              iterator: values(iterable),
              resultName: resultName,
              nextLoc: nextLoc
            };

            if (this.method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              this.arg = undefined;
            }

            return ContinueSentinel;
          }
        };
      }( // In sloppy mode, unbound `this` refers to the global object, fallback to
      // Function constructor if we're in global strict mode. That is sadly a form
      // of indirect eval which violates Content Security Policy.
      function () {
        return this;
      }() || Function("return this")());
      /***/
    },
    /* 48 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict"; // 21.2.5.3 get RegExp.prototype.flags

      var anObject = __webpack_require__(3);

      module.exports = function () {
        var that = anObject(this);
        var result = '';
        if (that.global) result += 'g';
        if (that.ignoreCase) result += 'i';
        if (that.multiline) result += 'm';
        if (that.unicode) result += 'u';
        if (that.sticky) result += 'y';
        return result;
      };
      /***/

    },
    /* 49 */

    /***/
    function (module, exports, __webpack_require__) {
      var global = __webpack_require__(1);

      var core = __webpack_require__(11);

      var LIBRARY = __webpack_require__(16);

      var wksExt = __webpack_require__(50);

      var defineProperty = __webpack_require__(5).f;

      module.exports = function (name) {
        var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
        if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, {
          value: wksExt.f(name)
        });
      };
      /***/

    },
    /* 50 */

    /***/
    function (module, exports, __webpack_require__) {
      exports.f = __webpack_require__(0);
      /***/
    },
    /* 51 */

    /***/
    function (module, exports, __webpack_require__) {
      var has = __webpack_require__(9);

      var toIObject = __webpack_require__(13);

      var arrayIndexOf = __webpack_require__(81)(false);

      var IE_PROTO = __webpack_require__(32)('IE_PROTO');

      module.exports = function (object, names) {
        var O = toIObject(object);
        var i = 0;
        var result = [];
        var key;

        for (key in O) {
          if (key != IE_PROTO) has(O, key) && result.push(key);
        } // Don't enum bug & hidden keys


        while (names.length > i) {
          if (has(O, key = names[i++])) {
            ~arrayIndexOf(result, key) || result.push(key);
          }
        }

        return result;
      };
      /***/

    },
    /* 52 */

    /***/
    function (module, exports) {
      exports.f = Object.getOwnPropertySymbols;
      /***/
    },
    /* 53 */

    /***/
    function (module, exports, __webpack_require__) {
      // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
      var $keys = __webpack_require__(51);

      var hiddenKeys = __webpack_require__(33).concat('length', 'prototype');

      exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
        return $keys(O, hiddenKeys);
      };
      /***/

    },
    /* 54 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var addToUnscopables = __webpack_require__(87);

      var step = __webpack_require__(55);

      var Iterators = __webpack_require__(17);

      var toIObject = __webpack_require__(13); // 22.1.3.4 Array.prototype.entries()
      // 22.1.3.13 Array.prototype.keys()
      // 22.1.3.29 Array.prototype.values()
      // 22.1.3.30 Array.prototype[@@iterator]()


      module.exports = __webpack_require__(56)(Array, 'Array', function (iterated, kind) {
        this._t = toIObject(iterated); // target

        this._i = 0; // next index

        this._k = kind; // kind
        // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
      }, function () {
        var O = this._t;
        var kind = this._k;
        var index = this._i++;

        if (!O || index >= O.length) {
          this._t = undefined;
          return step(1);
        }

        if (kind == 'keys') return step(0, index);
        if (kind == 'values') return step(0, O[index]);
        return step(0, [index, O[index]]);
      }, 'values'); // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)

      Iterators.Arguments = Iterators.Array;
      addToUnscopables('keys');
      addToUnscopables('values');
      addToUnscopables('entries');
      /***/
    },
    /* 55 */

    /***/
    function (module, exports) {
      module.exports = function (done, value) {
        return {
          value: value,
          done: !!done
        };
      };
      /***/

    },
    /* 56 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var LIBRARY = __webpack_require__(16);

      var $export = __webpack_require__(10);

      var redefine = __webpack_require__(8);

      var hide = __webpack_require__(6);

      var Iterators = __webpack_require__(17);

      var $iterCreate = __webpack_require__(88);

      var setToStringTag = __webpack_require__(18);

      var getPrototypeOf = __webpack_require__(89);

      var ITERATOR = __webpack_require__(0)('iterator');

      var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`

      var FF_ITERATOR = '@@iterator';
      var KEYS = 'keys';
      var VALUES = 'values';

      var returnThis = function returnThis() {
        return this;
      };

      module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
        $iterCreate(Constructor, NAME, next);

        var getMethod = function getMethod(kind) {
          if (!BUGGY && kind in proto) return proto[kind];

          switch (kind) {
            case KEYS:
              return function keys() {
                return new Constructor(this, kind);
              };

            case VALUES:
              return function values() {
                return new Constructor(this, kind);
              };
          }

          return function entries() {
            return new Constructor(this, kind);
          };
        };

        var TAG = NAME + ' Iterator';
        var DEF_VALUES = DEFAULT == VALUES;
        var VALUES_BUG = false;
        var proto = Base.prototype;
        var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
        var $default = $native || getMethod(DEFAULT);
        var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
        var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
        var methods, key, IteratorPrototype; // Fix native

        if ($anyNative) {
          IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));

          if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
            // Set @@toStringTag to native iterators
            setToStringTag(IteratorPrototype, TAG, true); // fix for some old engines

            if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
          }
        } // fix Array#{values, @@iterator}.name in V8 / FF


        if (DEF_VALUES && $native && $native.name !== VALUES) {
          VALUES_BUG = true;

          $default = function values() {
            return $native.call(this);
          };
        } // Define iterator


        if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
          hide(proto, ITERATOR, $default);
        } // Plug for library


        Iterators[NAME] = $default;
        Iterators[TAG] = returnThis;

        if (DEFAULT) {
          methods = {
            values: DEF_VALUES ? $default : getMethod(VALUES),
            keys: IS_SET ? $default : getMethod(KEYS),
            entries: $entries
          };
          if (FORCED) for (key in methods) {
            if (!(key in proto)) redefine(proto, key, methods[key]);
          } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
        }

        return methods;
      };
      /***/

    },
    /* 57 */

    /***/
    function (module, exports, __webpack_require__) {
      var isObject = __webpack_require__(2);

      module.exports = function (it, TYPE) {
        if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
        return it;
      };
      /***/

    },
    /* 58 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      __webpack_require__(22);

      __webpack_require__(96);

      __webpack_require__(98);

      __webpack_require__(99);

      var _renderer = _interopRequireDefault(__webpack_require__(59));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

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
      } // Constants


      var PARSER = new window.DOMParser(); // Highway Helpers

      var Helpers =
      /*#__PURE__*/
      function () {
        /**
         * @arg {object} renderers — List of renderers
         * @arg {object} transitions — List of transitions
         * @constructor
         */
        function Helpers(renderers, transitions) {
          _classCallCheck(this, Helpers);

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


        _createClass(Helpers, [{
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
              return Promise.resolve(_renderer.default);
            } // Return Renderer


            if (slug in this.renderers) {
              var renderer = this.renderers[slug];

              if (typeof renderer === 'function' && !_renderer.default.isPrototypeOf(renderer)) {
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


            return Promise.resolve(_renderer.default);
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

      exports.default = Helpers;
      /***/
    },
    /* 59 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      __webpack_require__(47);

      __webpack_require__(22);

      __webpack_require__(60);

      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }

      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
              args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);

            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }

            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }

            _next(undefined);
          });
        };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

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
          _classCallCheck(this, Renderer); // We get the view.


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
                }, _callee, this);
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
                }, _callee2, this);
              }));

              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }());
          }
        }]);

        return Renderer;
      }();

      exports.default = Renderer;
      /***/
    },
    /* 60 */

    /***/
    function (module, exports, __webpack_require__) {
      var dP = __webpack_require__(5).f;

      var FProto = Function.prototype;
      var nameRE = /^\s*function ([^ (]*)/;
      var NAME = 'name'; // 19.2.4.2 name

      NAME in FProto || __webpack_require__(4) && dP(FProto, NAME, {
        configurable: true,
        get: function get() {
          try {
            return ('' + this).match(nameRE)[1];
          } catch (e) {
            return '';
          }
        }
      });
      /***/
    },
    /* 61 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      var _core = _interopRequireDefault(__webpack_require__(62));

      var _helpers = _interopRequireDefault(__webpack_require__(58));

      var _renderer = _interopRequireDefault(__webpack_require__(59));

      var _transition = _interopRequireDefault(__webpack_require__(100));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      /**
       * @file Highway object containing all parts of the script.
       * @author Anthony Du Pont <bulldog@dogstudio.co>
       */
      // Highway Version


      console.log('Highway v2.1.2'); // Export Highway

      var _default = {
        Core: _core.default,
        Helpers: _helpers.default,
        Renderer: _renderer.default,
        Transition: _transition.default
      };
      exports.default = _default;
      /***/
    },
    /* 62 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      __webpack_require__(63);

      __webpack_require__(22);

      __webpack_require__(47);

      __webpack_require__(74);

      __webpack_require__(76);

      __webpack_require__(78);

      __webpack_require__(79);

      __webpack_require__(86);

      __webpack_require__(54);

      __webpack_require__(91);

      var _tinyEmitter = _interopRequireDefault(__webpack_require__(95));

      var _helpers = _interopRequireDefault(__webpack_require__(58));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }

      function _typeof(obj) {
        if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
          _typeof = function _typeof(obj) {
            return _typeof2(obj);
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
          };
        }

        return _typeof(obj);
      }

      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }

      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
              args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);

            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }

            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }

            _next(undefined);
          });
        };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

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

      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }

        return _assertThisInitialized(self);
      }

      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
      }

      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        };

        return _setPrototypeOf(o, p);
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return self;
      }

      var Core =
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

          _classCallCheck(this, Core); // Extends the Emitter constructor in order to be able to use its features
          // and send custom events all along the script.


          _this = _possibleConstructorReturn(this, _getPrototypeOf(Core).call(this)); // Helpers.

          _this.Helpers = new _helpers.default(renderers, transitions); // Prep contextual transition info.

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


          _this._navigate = _this.navigate.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Listen the `popstate` on the window to run the router each time an
          // history entry changes. Basically everytime the backward/forward arrows
          // are triggered by the user.

          window.addEventListener('popstate', _this.popState.bind(_assertThisInitialized(_assertThisInitialized(_this)))); // Get all elligible links.

          _this.links = document.querySelectorAll('a:not([target]):not([data-router-disabled])'); // Event attachement

          _this.attach(_this.links);

          return _this;
        }
        /**
         * Attach `click` event on links.
         *
         * @param {(array|nodeList)} links - Links to use
         */


        _createClass(Core, [{
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
            var trigger = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'script'; // Save Trigger Element

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
          _asyncToGenerator(
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
            var _beforeFetch = _asyncToGenerator(
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
                      results = _context2.sent; // Now everything went fine we can extract the properties of the view we
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

            return function beforeFetch() {
              return _beforeFetch.apply(this, arguments);
            };
          }()
          /**
           * Push page in DOM
           */

        }, {
          key: "afterFetch",
          value: function () {
            var _afterFetch = _asyncToGenerator(
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

            return function afterFetch() {
              return _afterFetch.apply(this, arguments);
            };
          }()
        }]);

        return Core;
      }(_tinyEmitter.default);

      exports.default = Core;
      /***/
    },
    /* 63 */

    /***/
    function (module, exports, __webpack_require__) {
      // 19.1.3.19 Object.setPrototypeOf(O, proto)
      var $export = __webpack_require__(10);

      $export($export.S, 'Object', {
        setPrototypeOf: __webpack_require__(37).set
      });
      /***/
    },
    /* 64 */

    /***/
    function (module, exports, __webpack_require__) {
      // fallback for non-array-like ES3 and non-enumerable old V8 strings
      var cof = __webpack_require__(14); // eslint-disable-next-line no-prototype-builtins


      module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
        return cof(it) == 'String' ? it.split('') : Object(it);
      };
      /***/
    },
    /* 65 */

    /***/
    function (module, exports, __webpack_require__) {
      // call something on iterator step with safe closing on error
      var anObject = __webpack_require__(3);

      module.exports = function (iterator, fn, value, entries) {
        try {
          return entries ? fn(anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
        } catch (e) {
          var ret = iterator['return'];
          if (ret !== undefined) anObject(ret.call(iterator));
          throw e;
        }
      };
      /***/

    },
    /* 66 */

    /***/
    function (module, exports, __webpack_require__) {
      // check on default Array iterator
      var Iterators = __webpack_require__(17);

      var ITERATOR = __webpack_require__(0)('iterator');

      var ArrayProto = Array.prototype;

      module.exports = function (it) {
        return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
      };
      /***/

    },
    /* 67 */

    /***/
    function (module, exports, __webpack_require__) {
      var classof = __webpack_require__(39);

      var ITERATOR = __webpack_require__(0)('iterator');

      var Iterators = __webpack_require__(17);

      module.exports = __webpack_require__(11).getIteratorMethod = function (it) {
        if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
      };
      /***/

    },
    /* 68 */

    /***/
    function (module, exports, __webpack_require__) {
      // 7.3.20 SpeciesConstructor(O, defaultConstructor)
      var anObject = __webpack_require__(3);

      var aFunction = __webpack_require__(20);

      var SPECIES = __webpack_require__(0)('species');

      module.exports = function (O, D) {
        var C = anObject(O).constructor;
        var S;
        return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
      };
      /***/

    },
    /* 69 */

    /***/
    function (module, exports) {
      // fast apply, http://jsperf.lnkit.com/fast-apply/5
      module.exports = function (fn, args, that) {
        var un = that === undefined;

        switch (args.length) {
          case 0:
            return un ? fn() : fn.call(that);

          case 1:
            return un ? fn(args[0]) : fn.call(that, args[0]);

          case 2:
            return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);

          case 3:
            return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);

          case 4:
            return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
        }

        return fn.apply(that, args);
      };
      /***/

    },
    /* 70 */

    /***/
    function (module, exports, __webpack_require__) {
      var global = __webpack_require__(1);

      var macrotask = __webpack_require__(42).set;

      var Observer = global.MutationObserver || global.WebKitMutationObserver;
      var process = global.process;
      var Promise = global.Promise;
      var isNode = __webpack_require__(14)(process) == 'process';

      module.exports = function () {
        var head, last, notify;

        var flush = function flush() {
          var parent, fn;
          if (isNode && (parent = process.domain)) parent.exit();

          while (head) {
            fn = head.fn;
            head = head.next;

            try {
              fn();
            } catch (e) {
              if (head) notify();else last = undefined;
              throw e;
            }
          }

          last = undefined;
          if (parent) parent.enter();
        }; // Node.js


        if (isNode) {
          notify = function notify() {
            process.nextTick(flush);
          }; // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339

        } else if (Observer && !(global.navigator && global.navigator.standalone)) {
          var toggle = true;
          var node = document.createTextNode('');
          new Observer(flush).observe(node, {
            characterData: true
          }); // eslint-disable-line no-new

          notify = function notify() {
            node.data = toggle = !toggle;
          }; // environments with maybe non-completely correct, but existent Promise

        } else if (Promise && Promise.resolve) {
          // Promise.resolve without an argument throws an error in LG WebOS 2
          var promise = Promise.resolve(undefined);

          notify = function notify() {
            promise.then(flush);
          }; // for other environments - macrotask based on:
          // - setImmediate
          // - MessageChannel
          // - window.postMessag
          // - onreadystatechange
          // - setTimeout

        } else {
          notify = function notify() {
            // strange IE + webpack dev server bug - use .call(global)
            macrotask.call(global, flush);
          };
        }

        return function (fn) {
          var task = {
            fn: fn,
            next: undefined
          };
          if (last) last.next = task;

          if (!head) {
            head = task;
            notify();
          }

          last = task;
        };
      };
      /***/

    },
    /* 71 */

    /***/
    function (module, exports) {
      module.exports = function (exec) {
        try {
          return {
            e: false,
            v: exec()
          };
        } catch (e) {
          return {
            e: true,
            v: e
          };
        }
      };
      /***/

    },
    /* 72 */

    /***/
    function (module, exports, __webpack_require__) {
      var global = __webpack_require__(1);

      var navigator = global.navigator;
      module.exports = navigator && navigator.userAgent || '';
      /***/
    },
    /* 73 */

    /***/
    function (module, exports, __webpack_require__) {
      var anObject = __webpack_require__(3);

      var isObject = __webpack_require__(2);

      var newPromiseCapability = __webpack_require__(44);

      module.exports = function (C, x) {
        anObject(C);
        if (isObject(x) && x.constructor === C) return x;
        var promiseCapability = newPromiseCapability.f(C);
        var resolve = promiseCapability.resolve;
        resolve(x);
        return promiseCapability.promise;
      };
      /***/

    },
    /* 74 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      __webpack_require__(75);

      var anObject = __webpack_require__(3);

      var $flags = __webpack_require__(48);

      var DESCRIPTORS = __webpack_require__(4);

      var TO_STRING = 'toString';
      var $toString = /./[TO_STRING];

      var define = function define(fn) {
        __webpack_require__(8)(RegExp.prototype, TO_STRING, fn, true);
      }; // 21.2.5.14 RegExp.prototype.toString()


      if (__webpack_require__(7)(function () {
        return $toString.call({
          source: 'a',
          flags: 'b'
        }) != '/a/b';
      })) {
        define(function toString() {
          var R = anObject(this);
          return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
        }); // FF44- RegExp#toString has a wrong name
      } else if ($toString.name != TO_STRING) {
        define(function toString() {
          return $toString.call(this);
        });
      }
      /***/

    },
    /* 75 */

    /***/
    function (module, exports, __webpack_require__) {
      // 21.2.5.3 get RegExp.prototype.flags()
      if (__webpack_require__(4) && /./g.flags != 'g') __webpack_require__(5).f(RegExp.prototype, 'flags', {
        configurable: true,
        get: __webpack_require__(48)
      });
      /***/
    },
    /* 76 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict"; // B.2.3.2 String.prototype.anchor(name)

      __webpack_require__(77)('anchor', function (createHTML) {
        return function anchor(name) {
          return createHTML(this, 'a', 'name', name);
        };
      });
      /***/

    },
    /* 77 */

    /***/
    function (module, exports, __webpack_require__) {
      var $export = __webpack_require__(10);

      var fails = __webpack_require__(7);

      var defined = __webpack_require__(21);

      var quot = /"/g; // B.2.3.2.1 CreateHTML(string, tag, attribute, value)

      var createHTML = function createHTML(string, tag, attribute, value) {
        var S = String(defined(string));
        var p1 = '<' + tag;
        if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
        return p1 + '>' + S + '</' + tag + '>';
      };

      module.exports = function (NAME, exec) {
        var O = {};
        O[NAME] = exec(createHTML);
        $export($export.P + $export.F * fails(function () {
          var test = ''[NAME]('"');
          return test !== test.toLowerCase() || test.split('"').length > 3;
        }), 'String', O);
      };
      /***/

    },
    /* 78 */

    /***/
    function (module, exports, __webpack_require__) {
      __webpack_require__(49)('asyncIterator');
      /***/

    },
    /* 79 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict"; // ECMAScript 6 symbols shim

      var global = __webpack_require__(1);

      var has = __webpack_require__(9);

      var DESCRIPTORS = __webpack_require__(4);

      var $export = __webpack_require__(10);

      var redefine = __webpack_require__(8);

      var META = __webpack_require__(31).KEY;

      var $fails = __webpack_require__(7);

      var shared = __webpack_require__(27);

      var setToStringTag = __webpack_require__(18);

      var uid = __webpack_require__(15);

      var wks = __webpack_require__(0);

      var wksExt = __webpack_require__(50);

      var wksDefine = __webpack_require__(49);

      var enumKeys = __webpack_require__(80);

      var isArray = __webpack_require__(83);

      var anObject = __webpack_require__(3);

      var isObject = __webpack_require__(2);

      var toIObject = __webpack_require__(13);

      var toPrimitive = __webpack_require__(25);

      var createDesc = __webpack_require__(19);

      var _create = __webpack_require__(34);

      var gOPNExt = __webpack_require__(85);

      var $GOPD = __webpack_require__(38);

      var $DP = __webpack_require__(5);

      var $keys = __webpack_require__(23);

      var gOPD = $GOPD.f;
      var dP = $DP.f;
      var gOPN = gOPNExt.f;
      var $Symbol = global.Symbol;
      var $JSON = global.JSON;

      var _stringify = $JSON && $JSON.stringify;

      var PROTOTYPE = 'prototype';
      var HIDDEN = wks('_hidden');
      var TO_PRIMITIVE = wks('toPrimitive');
      var isEnum = {}.propertyIsEnumerable;
      var SymbolRegistry = shared('symbol-registry');
      var AllSymbols = shared('symbols');
      var OPSymbols = shared('op-symbols');
      var ObjectProto = Object[PROTOTYPE];
      var USE_NATIVE = typeof $Symbol == 'function';
      var QObject = global.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

      var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

      var setSymbolDesc = DESCRIPTORS && $fails(function () {
        return _create(dP({}, 'a', {
          get: function get() {
            return dP(this, 'a', {
              value: 7
            }).a;
          }
        })).a != 7;
      }) ? function (it, key, D) {
        var protoDesc = gOPD(ObjectProto, key);
        if (protoDesc) delete ObjectProto[key];
        dP(it, key, D);
        if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
      } : dP;

      var wrap = function wrap(tag) {
        var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);

        sym._k = tag;
        return sym;
      };

      var isSymbol = USE_NATIVE && _typeof2($Symbol.iterator) == 'symbol' ? function (it) {
        return _typeof2(it) == 'symbol';
      } : function (it) {
        return it instanceof $Symbol;
      };

      var $defineProperty = function defineProperty(it, key, D) {
        if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
        anObject(it);
        key = toPrimitive(key, true);
        anObject(D);

        if (has(AllSymbols, key)) {
          if (!D.enumerable) {
            if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
            it[HIDDEN][key] = true;
          } else {
            if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
            D = _create(D, {
              enumerable: createDesc(0, false)
            });
          }

          return setSymbolDesc(it, key, D);
        }

        return dP(it, key, D);
      };

      var $defineProperties = function defineProperties(it, P) {
        anObject(it);
        var keys = enumKeys(P = toIObject(P));
        var i = 0;
        var l = keys.length;
        var key;

        while (l > i) {
          $defineProperty(it, key = keys[i++], P[key]);
        }

        return it;
      };

      var $create = function create(it, P) {
        return P === undefined ? _create(it) : $defineProperties(_create(it), P);
      };

      var $propertyIsEnumerable = function propertyIsEnumerable(key) {
        var E = isEnum.call(this, key = toPrimitive(key, true));
        if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
        return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
      };

      var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
        it = toIObject(it);
        key = toPrimitive(key, true);
        if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
        var D = gOPD(it, key);
        if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
        return D;
      };

      var $getOwnPropertyNames = function getOwnPropertyNames(it) {
        var names = gOPN(toIObject(it));
        var result = [];
        var i = 0;
        var key;

        while (names.length > i) {
          if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
        }

        return result;
      };

      var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
        var IS_OP = it === ObjectProto;
        var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
        var result = [];
        var i = 0;
        var key;

        while (names.length > i) {
          if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
        }

        return result;
      }; // 19.4.1.1 Symbol([description])


      if (!USE_NATIVE) {
        $Symbol = function _Symbol2() {
          if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
          var tag = uid(arguments.length > 0 ? arguments[0] : undefined);

          var $set = function $set(value) {
            if (this === ObjectProto) $set.call(OPSymbols, value);
            if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
            setSymbolDesc(this, tag, createDesc(1, value));
          };

          if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, {
            configurable: true,
            set: $set
          });
          return wrap(tag);
        };

        redefine($Symbol[PROTOTYPE], 'toString', function toString() {
          return this._k;
        });
        $GOPD.f = $getOwnPropertyDescriptor;
        $DP.f = $defineProperty;
        __webpack_require__(53).f = gOPNExt.f = $getOwnPropertyNames;
        __webpack_require__(26).f = $propertyIsEnumerable;
        __webpack_require__(52).f = $getOwnPropertySymbols;

        if (DESCRIPTORS && !__webpack_require__(16)) {
          redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
        }

        wksExt.f = function (name) {
          return wrap(wks(name));
        };
      }

      $export($export.G + $export.W + $export.F * !USE_NATIVE, {
        Symbol: $Symbol
      });

      for (var es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
      'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {
        wks(es6Symbols[j++]);
      }

      for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) {
        wksDefine(wellKnownSymbols[k++]);
      }

      $export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
        // 19.4.2.1 Symbol.for(key)
        'for': function _for(key) {
          return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
        },
        // 19.4.2.5 Symbol.keyFor(sym)
        keyFor: function keyFor(sym) {
          if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');

          for (var key in SymbolRegistry) {
            if (SymbolRegistry[key] === sym) return key;
          }
        },
        useSetter: function useSetter() {
          setter = true;
        },
        useSimple: function useSimple() {
          setter = false;
        }
      });
      $export($export.S + $export.F * !USE_NATIVE, 'Object', {
        // 19.1.2.2 Object.create(O [, Properties])
        create: $create,
        // 19.1.2.4 Object.defineProperty(O, P, Attributes)
        defineProperty: $defineProperty,
        // 19.1.2.3 Object.defineProperties(O, Properties)
        defineProperties: $defineProperties,
        // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
        getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
        // 19.1.2.7 Object.getOwnPropertyNames(O)
        getOwnPropertyNames: $getOwnPropertyNames,
        // 19.1.2.8 Object.getOwnPropertySymbols(O)
        getOwnPropertySymbols: $getOwnPropertySymbols
      }); // 24.3.2 JSON.stringify(value [, replacer [, space]])

      $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
        var S = $Symbol(); // MS Edge converts symbol values to JSON as {}
        // WebKit converts symbol values to JSON as null
        // V8 throws on boxed symbols

        return _stringify([S]) != '[null]' || _stringify({
          a: S
        }) != '{}' || _stringify(Object(S)) != '{}';
      })), 'JSON', {
        stringify: function stringify(it) {
          var args = [it];
          var i = 1;
          var replacer, $replacer;

          while (arguments.length > i) {
            args.push(arguments[i++]);
          }

          $replacer = replacer = args[1];
          if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

          if (!isArray(replacer)) replacer = function replacer(key, value) {
            if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
            if (!isSymbol(value)) return value;
          };
          args[1] = replacer;
          return _stringify.apply($JSON, args);
        }
      }); // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)

      $Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(6)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf); // 19.4.3.5 Symbol.prototype[@@toStringTag]

      setToStringTag($Symbol, 'Symbol'); // 20.2.1.9 Math[@@toStringTag]

      setToStringTag(Math, 'Math', true); // 24.3.3 JSON[@@toStringTag]

      setToStringTag(global.JSON, 'JSON', true);
      /***/
    },
    /* 80 */

    /***/
    function (module, exports, __webpack_require__) {
      // all enumerable object keys, includes symbols
      var getKeys = __webpack_require__(23);

      var gOPS = __webpack_require__(52);

      var pIE = __webpack_require__(26);

      module.exports = function (it) {
        var result = getKeys(it);
        var getSymbols = gOPS.f;

        if (getSymbols) {
          var symbols = getSymbols(it);
          var isEnum = pIE.f;
          var i = 0;
          var key;

          while (symbols.length > i) {
            if (isEnum.call(it, key = symbols[i++])) result.push(key);
          }
        }

        return result;
      };
      /***/

    },
    /* 81 */

    /***/
    function (module, exports, __webpack_require__) {
      // false -> Array#indexOf
      // true  -> Array#includes
      var toIObject = __webpack_require__(13);

      var toLength = __webpack_require__(40);

      var toAbsoluteIndex = __webpack_require__(82);

      module.exports = function (IS_INCLUDES) {
        return function ($this, el, fromIndex) {
          var O = toIObject($this);
          var length = toLength(O.length);
          var index = toAbsoluteIndex(fromIndex, length);
          var value; // Array#includes uses SameValueZero equality algorithm
          // eslint-disable-next-line no-self-compare

          if (IS_INCLUDES && el != el) while (length > index) {
            value = O[index++]; // eslint-disable-next-line no-self-compare

            if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
          } else for (; length > index; index++) {
            if (IS_INCLUDES || index in O) {
              if (O[index] === el) return IS_INCLUDES || index || 0;
            }
          }
          return !IS_INCLUDES && -1;
        };
      };
      /***/

    },
    /* 82 */

    /***/
    function (module, exports, __webpack_require__) {
      var toInteger = __webpack_require__(41);

      var max = Math.max;
      var min = Math.min;

      module.exports = function (index, length) {
        index = toInteger(index);
        return index < 0 ? max(index + length, 0) : min(index, length);
      };
      /***/

    },
    /* 83 */

    /***/
    function (module, exports, __webpack_require__) {
      // 7.2.2 IsArray(argument)
      var cof = __webpack_require__(14);

      module.exports = Array.isArray || function isArray(arg) {
        return cof(arg) == 'Array';
      };
      /***/

    },
    /* 84 */

    /***/
    function (module, exports, __webpack_require__) {
      var dP = __webpack_require__(5);

      var anObject = __webpack_require__(3);

      var getKeys = __webpack_require__(23);

      module.exports = __webpack_require__(4) ? Object.defineProperties : function defineProperties(O, Properties) {
        anObject(O);
        var keys = getKeys(Properties);
        var length = keys.length;
        var i = 0;
        var P;

        while (length > i) {
          dP.f(O, P = keys[i++], Properties[P]);
        }

        return O;
      };
      /***/
    },
    /* 85 */

    /***/
    function (module, exports, __webpack_require__) {
      // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
      var toIObject = __webpack_require__(13);

      var gOPN = __webpack_require__(53).f;

      var toString = {}.toString;
      var windowNames = (typeof window === "undefined" ? "undefined" : _typeof2(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

      var getWindowNames = function getWindowNames(it) {
        try {
          return gOPN(it);
        } catch (e) {
          return windowNames.slice();
        }
      };

      module.exports.f = function getOwnPropertyNames(it) {
        return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
      };
      /***/

    },
    /* 86 */

    /***/
    function (module, exports, __webpack_require__) {
      var $iterators = __webpack_require__(54);

      var getKeys = __webpack_require__(23);

      var redefine = __webpack_require__(8);

      var global = __webpack_require__(1);

      var hide = __webpack_require__(6);

      var Iterators = __webpack_require__(17);

      var wks = __webpack_require__(0);

      var ITERATOR = wks('iterator');
      var TO_STRING_TAG = wks('toStringTag');
      var ArrayValues = Iterators.Array;
      var DOMIterables = {
        CSSRuleList: true,
        // TODO: Not spec compliant, should be false.
        CSSStyleDeclaration: false,
        CSSValueList: false,
        ClientRectList: false,
        DOMRectList: false,
        DOMStringList: false,
        DOMTokenList: true,
        DataTransferItemList: false,
        FileList: false,
        HTMLAllCollection: false,
        HTMLCollection: false,
        HTMLFormElement: false,
        HTMLSelectElement: false,
        MediaList: true,
        // TODO: Not spec compliant, should be false.
        MimeTypeArray: false,
        NamedNodeMap: false,
        NodeList: true,
        PaintRequestList: false,
        Plugin: false,
        PluginArray: false,
        SVGLengthList: false,
        SVGNumberList: false,
        SVGPathSegList: false,
        SVGPointList: false,
        SVGStringList: false,
        SVGTransformList: false,
        SourceBufferList: false,
        StyleSheetList: true,
        // TODO: Not spec compliant, should be false.
        TextTrackCueList: false,
        TextTrackList: false,
        TouchList: false
      };

      for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
        var NAME = collections[i];
        var explicit = DOMIterables[NAME];
        var Collection = global[NAME];
        var proto = Collection && Collection.prototype;
        var key;

        if (proto) {
          if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
          if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
          Iterators[NAME] = ArrayValues;
          if (explicit) for (key in $iterators) {
            if (!proto[key]) redefine(proto, key, $iterators[key], true);
          }
        }
      }
      /***/

    },
    /* 87 */

    /***/
    function (module, exports, __webpack_require__) {
      // 22.1.3.31 Array.prototype[@@unscopables]
      var UNSCOPABLES = __webpack_require__(0)('unscopables');

      var ArrayProto = Array.prototype;
      if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(6)(ArrayProto, UNSCOPABLES, {});

      module.exports = function (key) {
        ArrayProto[UNSCOPABLES][key] = true;
      };
      /***/

    },
    /* 88 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var create = __webpack_require__(34);

      var descriptor = __webpack_require__(19);

      var setToStringTag = __webpack_require__(18);

      var IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

      __webpack_require__(6)(IteratorPrototype, __webpack_require__(0)('iterator'), function () {
        return this;
      });

      module.exports = function (Constructor, NAME, next) {
        Constructor.prototype = create(IteratorPrototype, {
          next: descriptor(1, next)
        });
        setToStringTag(Constructor, NAME + ' Iterator');
      };
      /***/

    },
    /* 89 */

    /***/
    function (module, exports, __webpack_require__) {
      // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
      var has = __webpack_require__(9);

      var toObject = __webpack_require__(90);

      var IE_PROTO = __webpack_require__(32)('IE_PROTO');

      var ObjectProto = Object.prototype;

      module.exports = Object.getPrototypeOf || function (O) {
        O = toObject(O);
        if (has(O, IE_PROTO)) return O[IE_PROTO];

        if (typeof O.constructor == 'function' && O instanceof O.constructor) {
          return O.constructor.prototype;
        }

        return O instanceof Object ? ObjectProto : null;
      };
      /***/

    },
    /* 90 */

    /***/
    function (module, exports, __webpack_require__) {
      // 7.1.13 ToObject(argument)
      var defined = __webpack_require__(21);

      module.exports = function (it) {
        return Object(defined(it));
      };
      /***/

    },
    /* 91 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var strong = __webpack_require__(92);

      var validate = __webpack_require__(57);

      var MAP = 'Map'; // 23.1 Map Objects

      module.exports = __webpack_require__(93)(MAP, function (get) {
        return function Map() {
          return get(this, arguments.length > 0 ? arguments[0] : undefined);
        };
      }, {
        // 23.1.3.6 Map.prototype.get(key)
        get: function get(key) {
          var entry = strong.getEntry(validate(this, MAP), key);
          return entry && entry.v;
        },
        // 23.1.3.9 Map.prototype.set(key, value)
        set: function set(key, value) {
          return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
        }
      }, strong, true);
      /***/
    },
    /* 92 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var dP = __webpack_require__(5).f;

      var create = __webpack_require__(34);

      var redefineAll = __webpack_require__(30);

      var ctx = __webpack_require__(12);

      var anInstance = __webpack_require__(28);

      var forOf = __webpack_require__(29);

      var $iterDefine = __webpack_require__(56);

      var step = __webpack_require__(55);

      var setSpecies = __webpack_require__(45);

      var DESCRIPTORS = __webpack_require__(4);

      var fastKey = __webpack_require__(31).fastKey;

      var validate = __webpack_require__(57);

      var SIZE = DESCRIPTORS ? '_s' : 'size';

      var getEntry = function getEntry(that, key) {
        // fast case
        var index = fastKey(key);
        var entry;
        if (index !== 'F') return that._i[index]; // frozen object case

        for (entry = that._f; entry; entry = entry.n) {
          if (entry.k == key) return entry;
        }
      };

      module.exports = {
        getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
          var C = wrapper(function (that, iterable) {
            anInstance(that, C, NAME, '_i');
            that._t = NAME; // collection type

            that._i = create(null); // index

            that._f = undefined; // first entry

            that._l = undefined; // last entry

            that[SIZE] = 0; // size

            if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
          });
          redefineAll(C.prototype, {
            // 23.1.3.1 Map.prototype.clear()
            // 23.2.3.2 Set.prototype.clear()
            clear: function clear() {
              for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
                entry.r = true;
                if (entry.p) entry.p = entry.p.n = undefined;
                delete data[entry.i];
              }

              that._f = that._l = undefined;
              that[SIZE] = 0;
            },
            // 23.1.3.3 Map.prototype.delete(key)
            // 23.2.3.4 Set.prototype.delete(value)
            'delete': function _delete(key) {
              var that = validate(this, NAME);
              var entry = getEntry(that, key);

              if (entry) {
                var next = entry.n;
                var prev = entry.p;
                delete that._i[entry.i];
                entry.r = true;
                if (prev) prev.n = next;
                if (next) next.p = prev;
                if (that._f == entry) that._f = next;
                if (that._l == entry) that._l = prev;
                that[SIZE]--;
              }

              return !!entry;
            },
            // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
            // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
            forEach: function forEach(callbackfn
            /* , that = undefined */
            ) {
              validate(this, NAME);
              var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
              var entry;

              while (entry = entry ? entry.n : this._f) {
                f(entry.v, entry.k, this); // revert to the last existing entry

                while (entry && entry.r) {
                  entry = entry.p;
                }
              }
            },
            // 23.1.3.7 Map.prototype.has(key)
            // 23.2.3.7 Set.prototype.has(value)
            has: function has(key) {
              return !!getEntry(validate(this, NAME), key);
            }
          });
          if (DESCRIPTORS) dP(C.prototype, 'size', {
            get: function get() {
              return validate(this, NAME)[SIZE];
            }
          });
          return C;
        },
        def: function def(that, key, value) {
          var entry = getEntry(that, key);
          var prev, index; // change existing entry

          if (entry) {
            entry.v = value; // create new entry
          } else {
            that._l = entry = {
              i: index = fastKey(key, true),
              // <- index
              k: key,
              // <- key
              v: value,
              // <- value
              p: prev = that._l,
              // <- previous entry
              n: undefined,
              // <- next entry
              r: false // <- removed

            };
            if (!that._f) that._f = entry;
            if (prev) prev.n = entry;
            that[SIZE]++; // add to index

            if (index !== 'F') that._i[index] = entry;
          }

          return that;
        },
        getEntry: getEntry,
        setStrong: function setStrong(C, NAME, IS_MAP) {
          // add .keys, .values, .entries, [@@iterator]
          // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
          $iterDefine(C, NAME, function (iterated, kind) {
            this._t = validate(iterated, NAME); // target

            this._k = kind; // kind

            this._l = undefined; // previous
          }, function () {
            var that = this;
            var kind = that._k;
            var entry = that._l; // revert to the last existing entry

            while (entry && entry.r) {
              entry = entry.p;
            } // get next entry


            if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
              // or finish the iteration
              that._t = undefined;
              return step(1);
            } // return step by kind


            if (kind == 'keys') return step(0, entry.k);
            if (kind == 'values') return step(0, entry.v);
            return step(0, [entry.k, entry.v]);
          }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // add [@@species], 23.1.2.2, 23.2.2.2

          setSpecies(NAME);
        }
      };
      /***/
    },
    /* 93 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var global = __webpack_require__(1);

      var $export = __webpack_require__(10);

      var redefine = __webpack_require__(8);

      var redefineAll = __webpack_require__(30);

      var meta = __webpack_require__(31);

      var forOf = __webpack_require__(29);

      var anInstance = __webpack_require__(28);

      var isObject = __webpack_require__(2);

      var fails = __webpack_require__(7);

      var $iterDetect = __webpack_require__(46);

      var setToStringTag = __webpack_require__(18);

      var inheritIfRequired = __webpack_require__(94);

      module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
        var Base = global[NAME];
        var C = Base;
        var ADDER = IS_MAP ? 'set' : 'add';
        var proto = C && C.prototype;
        var O = {};

        var fixMethod = function fixMethod(KEY) {
          var fn = proto[KEY];
          redefine(proto, KEY, KEY == 'delete' ? function (a) {
            return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
          } : KEY == 'has' ? function has(a) {
            return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
          } : KEY == 'get' ? function get(a) {
            return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
          } : KEY == 'add' ? function add(a) {
            fn.call(this, a === 0 ? 0 : a);
            return this;
          } : function set(a, b) {
            fn.call(this, a === 0 ? 0 : a, b);
            return this;
          });
        };

        if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
          new C().entries().next();
        }))) {
          // create collection constructor
          C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
          redefineAll(C.prototype, methods);
          meta.NEED = true;
        } else {
          var instance = new C(); // early implementations not supports chaining

          var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false

          var THROWS_ON_PRIMITIVES = fails(function () {
            instance.has(1);
          }); // most early implementations doesn't supports iterables, most modern - not close it correctly

          var ACCEPT_ITERABLES = $iterDetect(function (iter) {
            new C(iter);
          }); // eslint-disable-line no-new
          // for early implementations -0 and +0 not the same

          var BUGGY_ZERO = !IS_WEAK && fails(function () {
            // V8 ~ Chromium 42- fails only with 5+ elements
            var $instance = new C();
            var index = 5;

            while (index--) {
              $instance[ADDER](index, index);
            }

            return !$instance.has(-0);
          });

          if (!ACCEPT_ITERABLES) {
            C = wrapper(function (target, iterable) {
              anInstance(target, C, NAME);
              var that = inheritIfRequired(new Base(), target, C);
              if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
              return that;
            });
            C.prototype = proto;
            proto.constructor = C;
          }

          if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
            fixMethod('delete');
            fixMethod('has');
            IS_MAP && fixMethod('get');
          }

          if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method

          if (IS_WEAK && proto.clear) delete proto.clear;
        }

        setToStringTag(C, NAME);
        O[NAME] = C;
        $export($export.G + $export.W + $export.F * (C != Base), O);
        if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
        return C;
      };
      /***/

    },
    /* 94 */

    /***/
    function (module, exports, __webpack_require__) {
      var isObject = __webpack_require__(2);

      var setPrototypeOf = __webpack_require__(37).set;

      module.exports = function (that, target, C) {
        var S = target.constructor;
        var P;

        if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
          setPrototypeOf(that, P);
        }

        return that;
      };
      /***/

    },
    /* 95 */

    /***/
    function (module, exports) {
      function E() {// Keep this empty so it's easier to inherit from
        // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
      }

      E.prototype = {
        on: function on(name, callback, ctx) {
          var e = this.e || (this.e = {});
          (e[name] || (e[name] = [])).push({
            fn: callback,
            ctx: ctx
          });
          return this;
        },
        once: function once(name, callback, ctx) {
          var self = this;

          function listener() {
            self.off(name, listener);
            callback.apply(ctx, arguments);
          }

          ;
          listener._ = callback;
          return this.on(name, listener, ctx);
        },
        emit: function emit(name) {
          var data = [].slice.call(arguments, 1);
          var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
          var i = 0;
          var len = evtArr.length;

          for (i; i < len; i++) {
            evtArr[i].fn.apply(evtArr[i].ctx, data);
          }

          return this;
        },
        off: function off(name, callback) {
          var e = this.e || (this.e = {});
          var evts = e[name];
          var liveEvents = [];

          if (evts && callback) {
            for (var i = 0, len = evts.length; i < len; i++) {
              if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
            }
          } // Remove event from queue to prevent memory leak
          // Suggested by https://github.com/lazd
          // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910


          liveEvents.length ? e[name] = liveEvents : delete e[name];
          return this;
        }
      };
      module.exports = E;
      /***/
    },
    /* 96 */

    /***/
    function (module, exports, __webpack_require__) {
      // @@split logic
      __webpack_require__(35)('split', 2, function (defined, SPLIT, $split) {
        'use strict';

        var isRegExp = __webpack_require__(97);

        var _split = $split;
        var $push = [].push;
        var $SPLIT = 'split';
        var LENGTH = 'length';
        var LAST_INDEX = 'lastIndex';

        if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
          var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
          // based on es5-shim implementation, need to rework it

          $split = function $split(separator, limit) {
            var string = String(this);
            if (separator === undefined && limit === 0) return []; // If `separator` is not a regex, use native split

            if (!isRegExp(separator)) return _split.call(string, separator, limit);
            var output = [];
            var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
            var lastLastIndex = 0;
            var splitLimit = limit === undefined ? 4294967295 : limit >>> 0; // Make `global` and avoid `lastIndex` issues by working with a copy

            var separatorCopy = new RegExp(separator.source, flags + 'g');
            var separator2, match, lastIndex, lastLength, i; // Doesn't need flags gy, but they don't hurt

            if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);

            while (match = separatorCopy.exec(string)) {
              // `separatorCopy.lastIndex` is not reliable cross-browser
              lastIndex = match.index + match[0][LENGTH];

              if (lastIndex > lastLastIndex) {
                output.push(string.slice(lastLastIndex, match.index)); // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
                // eslint-disable-next-line no-loop-func

                if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
                  for (i = 1; i < arguments[LENGTH] - 2; i++) {
                    if (arguments[i] === undefined) match[i] = undefined;
                  }
                });
                if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
                lastLength = match[0][LENGTH];
                lastLastIndex = lastIndex;
                if (output[LENGTH] >= splitLimit) break;
              }

              if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
            }

            if (lastLastIndex === string[LENGTH]) {
              if (lastLength || !separatorCopy.test('')) output.push('');
            } else output.push(string.slice(lastLastIndex));

            return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
          }; // Chakra, V8

        } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
          $split = function $split(separator, limit) {
            return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
          };
        } // 21.1.3.17 String.prototype.split(separator, limit)


        return [function split(separator, limit) {
          var O = defined(this);
          var fn = separator == undefined ? undefined : separator[SPLIT];
          return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
        }, $split];
      });
      /***/

    },
    /* 97 */

    /***/
    function (module, exports, __webpack_require__) {
      // 7.2.8 IsRegExp(argument)
      var isObject = __webpack_require__(2);

      var cof = __webpack_require__(14);

      var MATCH = __webpack_require__(0)('match');

      module.exports = function (it) {
        var isRegExp;
        return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
      };
      /***/

    },
    /* 98 */

    /***/
    function (module, exports, __webpack_require__) {
      // @@replace logic
      __webpack_require__(35)('replace', 2, function (defined, REPLACE, $replace) {
        // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
        return [function replace(searchValue, replaceValue) {
          'use strict';

          var O = defined(this);
          var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
          return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
        }, $replace];
      });
      /***/

    },
    /* 99 */

    /***/
    function (module, exports, __webpack_require__) {
      // @@match logic
      __webpack_require__(35)('match', 1, function (defined, MATCH, $match) {
        // 21.1.3.11 String.prototype.match(regexp)
        return [function match(regexp) {
          'use strict';

          var O = defined(this);
          var fn = regexp == undefined ? undefined : regexp[MATCH];
          return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
        }, $match];
      });
      /***/

    },
    /* 100 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      __webpack_require__(60);

      __webpack_require__(22);

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

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
          _classCallCheck(this, Transition); // The [data-router-wrapper] is the only main information we need since the role of
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


        _createClass(Transition, [{
          key: "show",
          value: function show(_ref) {
            var _this = this;

            var trigger = _ref.trigger,
                contextual = _ref.contextual; // Get View

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
                contextual = _ref2.contextual; // Get view

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

      exports.default = Transition;
      /***/
    }])
  );
});

},{}],2:[function(require,module,exports){
(function (global){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = typeof module !== "undefined" && module.exports && typeof global !== "undefined" ? global : void 0 || window; //helps ensure compatibility with AMD/RequireJS and CommonJS/Node


(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";

  _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (Animation, SimpleTimeline, TweenLite) {
    var _slice = function _slice(a) {
      //don't use [].slice because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
      var b = [],
          l = a.length,
          i;

      for (i = 0; i !== l; b.push(a[i++])) {
        ;
      }

      return b;
    },
        _applyCycle = function _applyCycle(vars, targets, i) {
      var alt = vars.cycle,
          p,
          val;

      for (p in alt) {
        val = alt[p];
        vars[p] = typeof val === "function" ? val(i, targets[i]) : val[i % val.length];
      }

      delete vars.cycle;
    },
        TweenMax = function TweenMax(target, duration, vars) {
      TweenLite.call(this, target, duration, vars);
      this._cycle = 0;
      this._yoyo = this.vars.yoyo === true || !!this.vars.yoyoEase;
      this._repeat = this.vars.repeat || 0;
      this._repeatDelay = this.vars.repeatDelay || 0;

      if (this._repeat) {
        this._uncache(true); //ensures that if there is any repeat, the totalDuration will get recalculated to accurately report it.

      }

      this.render = TweenMax.prototype.render; //speed optimization (avoid prototype lookup on this "hot" method)
    },
        _tinyNum = 0.0000000001,
        TweenLiteInternals = TweenLite._internals,
        _isSelector = TweenLiteInternals.isSelector,
        _isArray = TweenLiteInternals.isArray,
        p = TweenMax.prototype = TweenLite.to({}, 0.1, {}),
        _blankArray = [];

    TweenMax.version = "2.0.2";
    p.constructor = TweenMax;
    p.kill()._gc = false;
    TweenMax.killTweensOf = TweenMax.killDelayedCallsTo = TweenLite.killTweensOf;
    TweenMax.getTweensOf = TweenLite.getTweensOf;
    TweenMax.lagSmoothing = TweenLite.lagSmoothing;
    TweenMax.ticker = TweenLite.ticker;
    TweenMax.render = TweenLite.render;

    p.invalidate = function () {
      this._yoyo = this.vars.yoyo === true || !!this.vars.yoyoEase;
      this._repeat = this.vars.repeat || 0;
      this._repeatDelay = this.vars.repeatDelay || 0;
      this._yoyoEase = null;

      this._uncache(true);

      return TweenLite.prototype.invalidate.call(this);
    };

    p.updateTo = function (vars, resetDuration) {
      var curRatio = this.ratio,
          immediate = this.vars.immediateRender || vars.immediateRender,
          p;

      if (resetDuration && this._startTime < this._timeline._time) {
        this._startTime = this._timeline._time;

        this._uncache(false);

        if (this._gc) {
          this._enabled(true, false);
        } else {
          this._timeline.insert(this, this._startTime - this._delay); //ensures that any necessary re-sequencing of Animations in the timeline occurs to make sure the rendering order is correct.

        }
      }

      for (p in vars) {
        this.vars[p] = vars[p];
      }

      if (this._initted || immediate) {
        if (resetDuration) {
          this._initted = false;

          if (immediate) {
            this.render(0, true, true);
          }
        } else {
          if (this._gc) {
            this._enabled(true, false);
          }

          if (this._notifyPluginsOfEnabled && this._firstPT) {
            TweenLite._onPluginEvent("_onDisable", this); //in case a plugin like MotionBlur must perform some cleanup tasks

          }

          if (this._time / this._duration > 0.998) {
            //if the tween has finished (or come extremely close to finishing), we just need to rewind it to 0 and then render it again at the end which forces it to re-initialize (parsing the new vars). We allow tweens that are close to finishing (but haven't quite finished) to work this way too because otherwise, the values are so small when determining where to project the starting values that binary math issues creep in and can make the tween appear to render incorrectly when run backwards. 
            var prevTime = this._totalTime;
            this.render(0, true, false);
            this._initted = false;
            this.render(prevTime, true, false);
          } else {
            this._initted = false;

            this._init();

            if (this._time > 0 || immediate) {
              var inv = 1 / (1 - curRatio),
                  pt = this._firstPT,
                  endValue;

              while (pt) {
                endValue = pt.s + pt.c;
                pt.c *= inv;
                pt.s = endValue - pt.c;
                pt = pt._next;
              }
            }
          }
        }
      }

      return this;
    };

    p.render = function (time, suppressEvents, force) {
      if (!this._initted) if (this._duration === 0 && this.vars.repeat) {
        //zero duration tweens that render immediately have render() called from TweenLite's constructor, before TweenMax's constructor has finished setting _repeat, _repeatDelay, and _yoyo which are critical in determining totalDuration() so we need to call invalidate() which is a low-kb way to get those set properly.
        this.invalidate();
      }
      var totalDur = !this._dirty ? this._totalDuration : this.totalDuration(),
          prevTime = this._time,
          prevTotalTime = this._totalTime,
          prevCycle = this._cycle,
          duration = this._duration,
          prevRawPrevTime = this._rawPrevTime,
          isComplete,
          callback,
          pt,
          cycleDuration,
          r,
          type,
          pow,
          rawPrevTime,
          yoyoEase;

      if (time >= totalDur - 0.0000001 && time >= 0) {
        //to work around occasional floating point math artifacts.
        this._totalTime = totalDur;
        this._cycle = this._repeat;

        if (this._yoyo && (this._cycle & 1) !== 0) {
          this._time = 0;
          this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
        } else {
          this._time = duration;
          this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;
        }

        if (!this._reversed) {
          isComplete = true;
          callback = "onComplete";
          force = force || this._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
        }

        if (duration === 0) if (this._initted || !this.vars.lazy || force) {
          //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
          if (this._startTime === this._timeline._duration) {
            //if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
            time = 0;
          }

          if (prevRawPrevTime < 0 || time <= 0 && time >= -0.0000001 || prevRawPrevTime === _tinyNum && this.data !== "isPause") if (prevRawPrevTime !== time) {
            //note: when this.data is "isPause", it's a callback added by addPause() on a timeline that we should not be triggered when LEAVING its exact start time. In other words, tl.addPause(1).play(1) shouldn't pause.
            force = true;

            if (prevRawPrevTime > _tinyNum) {
              callback = "onReverseComplete";
            }
          }
          this._rawPrevTime = rawPrevTime = !suppressEvents || time || prevRawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
        }
      } else if (time < 0.0000001) {
        //to work around occasional floating point math artifacts, round super small values to 0.
        this._totalTime = this._time = this._cycle = 0;
        this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;

        if (prevTotalTime !== 0 || duration === 0 && prevRawPrevTime > 0) {
          callback = "onReverseComplete";
          isComplete = this._reversed;
        }

        if (time < 0) {
          this._active = false;
          if (duration === 0) if (this._initted || !this.vars.lazy || force) {
            //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
            if (prevRawPrevTime >= 0) {
              force = true;
            }

            this._rawPrevTime = rawPrevTime = !suppressEvents || time || prevRawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
          }
        }

        if (!this._initted) {
          //if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
          force = true;
        }
      } else {
        this._totalTime = this._time = time;

        if (this._repeat !== 0) {
          cycleDuration = duration + this._repeatDelay;
          this._cycle = this._totalTime / cycleDuration >> 0; //originally _totalTime % cycleDuration but floating point errors caused problems, so I normalized it. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

          if (this._cycle !== 0) if (this._cycle === this._totalTime / cycleDuration && prevTotalTime <= time) {
            this._cycle--; //otherwise when rendered exactly at the end time, it will act as though it is repeating (at the beginning)
          }
          this._time = this._totalTime - this._cycle * cycleDuration;
          if (this._yoyo) if ((this._cycle & 1) !== 0) {
            this._time = duration - this._time;
            yoyoEase = this._yoyoEase || this.vars.yoyoEase; //note: we don't set this._yoyoEase in _init() like we do other properties because it's TweenMax-specific and doing it here allows us to optimize performance (most tweens don't have a yoyoEase). Note that we also must skip the this.ratio calculation further down right after we _init() in this function, because we're doing it here.

            if (yoyoEase) {
              if (!this._yoyoEase) {
                if (yoyoEase === true && !this._initted) {
                  //if it's not initted and yoyoEase is true, this._ease won't have been populated yet so we must discern it here.
                  yoyoEase = this.vars.ease;
                  this._yoyoEase = yoyoEase = !yoyoEase ? TweenLite.defaultEase : yoyoEase instanceof Ease ? yoyoEase : typeof yoyoEase === "function" ? new Ease(yoyoEase, this.vars.easeParams) : Ease.map[yoyoEase] || TweenLite.defaultEase;
                } else {
                  this._yoyoEase = yoyoEase = yoyoEase === true ? this._ease : yoyoEase instanceof Ease ? yoyoEase : Ease.map[yoyoEase];
                }
              }

              this.ratio = yoyoEase ? 1 - yoyoEase.getRatio((duration - this._time) / duration) : 0;
            }
          }

          if (this._time > duration) {
            this._time = duration;
          } else if (this._time < 0) {
            this._time = 0;
          }
        }

        if (this._easeType && !yoyoEase) {
          r = this._time / duration;
          type = this._easeType;
          pow = this._easePower;

          if (type === 1 || type === 3 && r >= 0.5) {
            r = 1 - r;
          }

          if (type === 3) {
            r *= 2;
          }

          if (pow === 1) {
            r *= r;
          } else if (pow === 2) {
            r *= r * r;
          } else if (pow === 3) {
            r *= r * r * r;
          } else if (pow === 4) {
            r *= r * r * r * r;
          }

          if (type === 1) {
            this.ratio = 1 - r;
          } else if (type === 2) {
            this.ratio = r;
          } else if (this._time / duration < 0.5) {
            this.ratio = r / 2;
          } else {
            this.ratio = 1 - r / 2;
          }
        } else if (!yoyoEase) {
          this.ratio = this._ease.getRatio(this._time / duration);
        }
      }

      if (prevTime === this._time && !force && prevCycle === this._cycle) {
        if (prevTotalTime !== this._totalTime) if (this._onUpdate) if (!suppressEvents) {
          //so that onUpdate fires even during the repeatDelay - as long as the totalTime changed, we should trigger onUpdate.
          this._callback("onUpdate");
        }
        return;
      } else if (!this._initted) {
        this._init();

        if (!this._initted || this._gc) {
          //immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
          return;
        } else if (!force && this._firstPT && (this.vars.lazy !== false && this._duration || this.vars.lazy && !this._duration)) {
          //we stick it in the queue for rendering at the very end of the tick - this is a performance optimization because browsers invalidate styles and force a recalculation if you read, write, and then read style data (so it's better to read/read/read/write/write/write than read/write/read/write/read/write). The down side, of course, is that usually you WANT things to render immediately because you may have code running right after that which depends on the change. Like imagine running TweenLite.set(...) and then immediately after that, creating a nother tween that animates the same property to another value; the starting values of that 2nd tween wouldn't be accurate if lazy is true.
          this._time = prevTime;
          this._totalTime = prevTotalTime;
          this._rawPrevTime = prevRawPrevTime;
          this._cycle = prevCycle;
          TweenLiteInternals.lazyTweens.push(this);
          this._lazy = [time, suppressEvents];
          return;
        } //_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.


        if (this._time && !isComplete && !yoyoEase) {
          this.ratio = this._ease.getRatio(this._time / duration);
        } else if (isComplete && this._ease._calcEnd && !yoyoEase) {
          this.ratio = this._ease.getRatio(this._time === 0 ? 0 : 1);
        }
      }

      if (this._lazy !== false) {
        this._lazy = false;
      }

      if (!this._active) if (!this._paused && this._time !== prevTime && time >= 0) {
        this._active = true; //so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
      }

      if (prevTotalTime === 0) {
        if (this._initted === 2 && time > 0) {
          //this.invalidate();
          this._init(); //will just apply overwriting since _initted of (2) means it was a from() tween that had immediateRender:true

        }

        if (this._startAt) {
          if (time >= 0) {
            this._startAt.render(time, true, force);
          } else if (!callback) {
            callback = "_dummyGS"; //if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
          }
        }

        if (this.vars.onStart) if (this._totalTime !== 0 || duration === 0) if (!suppressEvents) {
          this._callback("onStart");
        }
      }

      pt = this._firstPT;

      while (pt) {
        if (pt.f) {
          pt.t[pt.p](pt.c * this.ratio + pt.s);
        } else {
          pt.t[pt.p] = pt.c * this.ratio + pt.s;
        }

        pt = pt._next;
      }

      if (this._onUpdate) {
        if (time < 0) if (this._startAt && this._startTime) {
          //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
          this._startAt.render(time, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.

        }
        if (!suppressEvents) if (this._totalTime !== prevTotalTime || callback) {
          this._callback("onUpdate");
        }
      }

      if (this._cycle !== prevCycle) if (!suppressEvents) if (!this._gc) if (this.vars.onRepeat) {
        this._callback("onRepeat");
      }
      if (callback) if (!this._gc || force) {
        //check gc because there's a chance that kill() could be called in an onUpdate
        if (time < 0 && this._startAt && !this._onUpdate && this._startTime) {
          //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
          this._startAt.render(time, true, force);
        }

        if (isComplete) {
          if (this._timeline.autoRemoveChildren) {
            this._enabled(false, false);
          }

          this._active = false;
        }

        if (!suppressEvents && this.vars[callback]) {
          this._callback(callback);
        }

        if (duration === 0 && this._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) {
          //the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
          this._rawPrevTime = 0;
        }
      }
    }; //---- STATIC FUNCTIONS -----------------------------------------------------------------------------------------------------------


    TweenMax.to = function (target, duration, vars) {
      return new TweenMax(target, duration, vars);
    };

    TweenMax.from = function (target, duration, vars) {
      vars.runBackwards = true;
      vars.immediateRender = vars.immediateRender != false;
      return new TweenMax(target, duration, vars);
    };

    TweenMax.fromTo = function (target, duration, fromVars, toVars) {
      toVars.startAt = fromVars;
      toVars.immediateRender = toVars.immediateRender != false && fromVars.immediateRender != false;
      return new TweenMax(target, duration, toVars);
    };

    TweenMax.staggerTo = TweenMax.allTo = function (targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
      stagger = stagger || 0;

      var delay = 0,
          a = [],
          finalComplete = function finalComplete() {
        if (vars.onComplete) {
          vars.onComplete.apply(vars.onCompleteScope || this, arguments);
        }

        onCompleteAll.apply(onCompleteAllScope || vars.callbackScope || this, onCompleteAllParams || _blankArray);
      },
          cycle = vars.cycle,
          fromCycle = vars.startAt && vars.startAt.cycle,
          l,
          copy,
          i,
          p;

      if (!_isArray(targets)) {
        if (typeof targets === "string") {
          targets = TweenLite.selector(targets) || targets;
        }

        if (_isSelector(targets)) {
          targets = _slice(targets);
        }
      }

      targets = targets || [];

      if (stagger < 0) {
        targets = _slice(targets);
        targets.reverse();
        stagger *= -1;
      }

      l = targets.length - 1;

      for (i = 0; i <= l; i++) {
        copy = {};

        for (p in vars) {
          copy[p] = vars[p];
        }

        if (cycle) {
          _applyCycle(copy, targets, i);

          if (copy.duration != null) {
            duration = copy.duration;
            delete copy.duration;
          }
        }

        if (fromCycle) {
          fromCycle = copy.startAt = {};

          for (p in vars.startAt) {
            fromCycle[p] = vars.startAt[p];
          }

          _applyCycle(copy.startAt, targets, i);
        }

        copy.delay = delay + (copy.delay || 0);

        if (i === l && onCompleteAll) {
          copy.onComplete = finalComplete;
        }

        a[i] = new TweenMax(targets[i], duration, copy);
        delay += stagger;
      }

      return a;
    };

    TweenMax.staggerFrom = TweenMax.allFrom = function (targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
      vars.runBackwards = true;
      vars.immediateRender = vars.immediateRender != false;
      return TweenMax.staggerTo(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
    };

    TweenMax.staggerFromTo = TweenMax.allFromTo = function (targets, duration, fromVars, toVars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
      toVars.startAt = fromVars;
      toVars.immediateRender = toVars.immediateRender != false && fromVars.immediateRender != false;
      return TweenMax.staggerTo(targets, duration, toVars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
    };

    TweenMax.delayedCall = function (delay, callback, params, scope, useFrames) {
      return new TweenMax(callback, 0, {
        delay: delay,
        onComplete: callback,
        onCompleteParams: params,
        callbackScope: scope,
        onReverseComplete: callback,
        onReverseCompleteParams: params,
        immediateRender: false,
        useFrames: useFrames,
        overwrite: 0
      });
    };

    TweenMax.set = function (target, vars) {
      return new TweenMax(target, 0, vars);
    };

    TweenMax.isTweening = function (target) {
      return TweenLite.getTweensOf(target, true).length > 0;
    };

    var _getChildrenOf = function _getChildrenOf(timeline, includeTimelines) {
      var a = [],
          cnt = 0,
          tween = timeline._first;

      while (tween) {
        if (tween instanceof TweenLite) {
          a[cnt++] = tween;
        } else {
          if (includeTimelines) {
            a[cnt++] = tween;
          }

          a = a.concat(_getChildrenOf(tween, includeTimelines));
          cnt = a.length;
        }

        tween = tween._next;
      }

      return a;
    },
        getAllTweens = TweenMax.getAllTweens = function (includeTimelines) {
      return _getChildrenOf(Animation._rootTimeline, includeTimelines).concat(_getChildrenOf(Animation._rootFramesTimeline, includeTimelines));
    };

    TweenMax.killAll = function (complete, tweens, delayedCalls, timelines) {
      if (tweens == null) {
        tweens = true;
      }

      if (delayedCalls == null) {
        delayedCalls = true;
      }

      var a = getAllTweens(timelines != false),
          l = a.length,
          allTrue = tweens && delayedCalls && timelines,
          isDC,
          tween,
          i;

      for (i = 0; i < l; i++) {
        tween = a[i];

        if (allTrue || tween instanceof SimpleTimeline || (isDC = tween.target === tween.vars.onComplete) && delayedCalls || tweens && !isDC) {
          if (complete) {
            tween.totalTime(tween._reversed ? 0 : tween.totalDuration());
          } else {
            tween._enabled(false, false);
          }
        }
      }
    };

    TweenMax.killChildTweensOf = function (parent, complete) {
      if (parent == null) {
        return;
      }

      var tl = TweenLiteInternals.tweenLookup,
          a,
          curParent,
          p,
          i,
          l;

      if (typeof parent === "string") {
        parent = TweenLite.selector(parent) || parent;
      }

      if (_isSelector(parent)) {
        parent = _slice(parent);
      }

      if (_isArray(parent)) {
        i = parent.length;

        while (--i > -1) {
          TweenMax.killChildTweensOf(parent[i], complete);
        }

        return;
      }

      a = [];

      for (p in tl) {
        curParent = tl[p].target.parentNode;

        while (curParent) {
          if (curParent === parent) {
            a = a.concat(tl[p].tweens);
          }

          curParent = curParent.parentNode;
        }
      }

      l = a.length;

      for (i = 0; i < l; i++) {
        if (complete) {
          a[i].totalTime(a[i].totalDuration());
        }

        a[i]._enabled(false, false);
      }
    };

    var _changePause = function _changePause(pause, tweens, delayedCalls, timelines) {
      tweens = tweens !== false;
      delayedCalls = delayedCalls !== false;
      timelines = timelines !== false;
      var a = getAllTweens(timelines),
          allTrue = tweens && delayedCalls && timelines,
          i = a.length,
          isDC,
          tween;

      while (--i > -1) {
        tween = a[i];

        if (allTrue || tween instanceof SimpleTimeline || (isDC = tween.target === tween.vars.onComplete) && delayedCalls || tweens && !isDC) {
          tween.paused(pause);
        }
      }
    };

    TweenMax.pauseAll = function (tweens, delayedCalls, timelines) {
      _changePause(true, tweens, delayedCalls, timelines);
    };

    TweenMax.resumeAll = function (tweens, delayedCalls, timelines) {
      _changePause(false, tweens, delayedCalls, timelines);
    };

    TweenMax.globalTimeScale = function (value) {
      var tl = Animation._rootTimeline,
          t = TweenLite.ticker.time;

      if (!arguments.length) {
        return tl._timeScale;
      }

      value = value || _tinyNum; //can't allow zero because it'll throw the math off

      tl._startTime = t - (t - tl._startTime) * tl._timeScale / value;
      tl = Animation._rootFramesTimeline;
      t = TweenLite.ticker.frame;
      tl._startTime = t - (t - tl._startTime) * tl._timeScale / value;
      tl._timeScale = Animation._rootTimeline._timeScale = value;
      return value;
    }; //---- GETTERS / SETTERS ----------------------------------------------------------------------------------------------------------


    p.progress = function (value, suppressEvents) {
      return !arguments.length ? this._time / this.duration() : this.totalTime(this.duration() * (this._yoyo && (this._cycle & 1) !== 0 ? 1 - value : value) + this._cycle * (this._duration + this._repeatDelay), suppressEvents);
    };

    p.totalProgress = function (value, suppressEvents) {
      return !arguments.length ? this._totalTime / this.totalDuration() : this.totalTime(this.totalDuration() * value, suppressEvents);
    };

    p.time = function (value, suppressEvents) {
      if (!arguments.length) {
        return this._time;
      }

      if (this._dirty) {
        this.totalDuration();
      }

      if (value > this._duration) {
        value = this._duration;
      }

      if (this._yoyo && (this._cycle & 1) !== 0) {
        value = this._duration - value + this._cycle * (this._duration + this._repeatDelay);
      } else if (this._repeat !== 0) {
        value += this._cycle * (this._duration + this._repeatDelay);
      }

      return this.totalTime(value, suppressEvents);
    };

    p.duration = function (value) {
      if (!arguments.length) {
        return this._duration; //don't set _dirty = false because there could be repeats that haven't been factored into the _totalDuration yet. Otherwise, if you create a repeated TweenMax and then immediately check its duration(), it would cache the value and the totalDuration would not be correct, thus repeats wouldn't take effect.
      }

      return Animation.prototype.duration.call(this, value);
    };

    p.totalDuration = function (value) {
      if (!arguments.length) {
        if (this._dirty) {
          //instead of Infinity, we use 999999999999 so that we can accommodate reverses
          this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat;
          this._dirty = false;
        }

        return this._totalDuration;
      }

      return this._repeat === -1 ? this : this.duration((value - this._repeat * this._repeatDelay) / (this._repeat + 1));
    };

    p.repeat = function (value) {
      if (!arguments.length) {
        return this._repeat;
      }

      this._repeat = value;
      return this._uncache(true);
    };

    p.repeatDelay = function (value) {
      if (!arguments.length) {
        return this._repeatDelay;
      }

      this._repeatDelay = value;
      return this._uncache(true);
    };

    p.yoyo = function (value) {
      if (!arguments.length) {
        return this._yoyo;
      }

      this._yoyo = value;
      return this;
    };

    return TweenMax;
  }, true);
  /*
   * ----------------------------------------------------------------
   * TimelineLite
   * ----------------------------------------------------------------
   */


  _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (Animation, SimpleTimeline, TweenLite) {
    var TimelineLite = function TimelineLite(vars) {
      SimpleTimeline.call(this, vars);
      this._labels = {};
      this.autoRemoveChildren = this.vars.autoRemoveChildren === true;
      this.smoothChildTiming = this.vars.smoothChildTiming === true;
      this._sortChildren = true;
      this._onUpdate = this.vars.onUpdate;
      var v = this.vars,
          val,
          p;

      for (p in v) {
        val = v[p];
        if (_isArray(val)) if (val.join("").indexOf("{self}") !== -1) {
          v[p] = this._swapSelfInParams(val);
        }
      }

      if (_isArray(v.tweens)) {
        this.add(v.tweens, 0, v.align, v.stagger);
      }
    },
        _tinyNum = 0.0000000001,
        TweenLiteInternals = TweenLite._internals,
        _internals = TimelineLite._internals = {},
        _isSelector = TweenLiteInternals.isSelector,
        _isArray = TweenLiteInternals.isArray,
        _lazyTweens = TweenLiteInternals.lazyTweens,
        _lazyRender = TweenLiteInternals.lazyRender,
        _globals = _gsScope._gsDefine.globals,
        _copy = function _copy(vars) {
      var copy = {},
          p;

      for (p in vars) {
        copy[p] = vars[p];
      }

      return copy;
    },
        _applyCycle = function _applyCycle(vars, targets, i) {
      var alt = vars.cycle,
          p,
          val;

      for (p in alt) {
        val = alt[p];
        vars[p] = typeof val === "function" ? val(i, targets[i]) : val[i % val.length];
      }

      delete vars.cycle;
    },
        _pauseCallback = _internals.pauseCallback = function () {},
        _slice = function _slice(a) {
      //don't use [].slice because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
      var b = [],
          l = a.length,
          i;

      for (i = 0; i !== l; b.push(a[i++])) {
        ;
      }

      return b;
    },
        p = TimelineLite.prototype = new SimpleTimeline();

    TimelineLite.version = "2.0.2";
    p.constructor = TimelineLite;
    p.kill()._gc = p._forcingPlayhead = p._hasPause = false;
    /* might use later...
    //translates a local time inside an animation to the corresponding time on the root/global timeline, factoring in all nesting and timeScales.
    function localToGlobal(time, animation) {
    	while (animation) {
    		time = (time / animation._timeScale) + animation._startTime;
    		animation = animation.timeline;
    	}
    	return time;
    }
    	//translates the supplied time on the root/global timeline into the corresponding local time inside a particular animation, factoring in all nesting and timeScales
    function globalToLocal(time, animation) {
    	var scale = 1;
    	time -= localToGlobal(0, animation);
    	while (animation) {
    		scale *= animation._timeScale;
    		animation = animation.timeline;
    	}
    	return time * scale;
    }
    */

    p.to = function (target, duration, vars, position) {
      var Engine = vars.repeat && _globals.TweenMax || TweenLite;
      return duration ? this.add(new Engine(target, duration, vars), position) : this.set(target, vars, position);
    };

    p.from = function (target, duration, vars, position) {
      return this.add((vars.repeat && _globals.TweenMax || TweenLite).from(target, duration, vars), position);
    };

    p.fromTo = function (target, duration, fromVars, toVars, position) {
      var Engine = toVars.repeat && _globals.TweenMax || TweenLite;
      return duration ? this.add(Engine.fromTo(target, duration, fromVars, toVars), position) : this.set(target, toVars, position);
    };

    p.staggerTo = function (targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
      var tl = new TimelineLite({
        onComplete: onCompleteAll,
        onCompleteParams: onCompleteAllParams,
        callbackScope: onCompleteAllScope,
        smoothChildTiming: this.smoothChildTiming
      }),
          cycle = vars.cycle,
          copy,
          i;

      if (typeof targets === "string") {
        targets = TweenLite.selector(targets) || targets;
      }

      targets = targets || [];

      if (_isSelector(targets)) {
        //senses if the targets object is a selector. If it is, we should translate it into an array.
        targets = _slice(targets);
      }

      stagger = stagger || 0;

      if (stagger < 0) {
        targets = _slice(targets);
        targets.reverse();
        stagger *= -1;
      }

      for (i = 0; i < targets.length; i++) {
        copy = _copy(vars);

        if (copy.startAt) {
          copy.startAt = _copy(copy.startAt);

          if (copy.startAt.cycle) {
            _applyCycle(copy.startAt, targets, i);
          }
        }

        if (cycle) {
          _applyCycle(copy, targets, i);

          if (copy.duration != null) {
            duration = copy.duration;
            delete copy.duration;
          }
        }

        tl.to(targets[i], duration, copy, i * stagger);
      }

      return this.add(tl, position);
    };

    p.staggerFrom = function (targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
      vars.immediateRender = vars.immediateRender != false;
      vars.runBackwards = true;
      return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
    };

    p.staggerFromTo = function (targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
      toVars.startAt = fromVars;
      toVars.immediateRender = toVars.immediateRender != false && fromVars.immediateRender != false;
      return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
    };

    p.call = function (callback, params, scope, position) {
      return this.add(TweenLite.delayedCall(0, callback, params, scope), position);
    };

    p.set = function (target, vars, position) {
      position = this._parseTimeOrLabel(position, 0, true);

      if (vars.immediateRender == null) {
        vars.immediateRender = position === this._time && !this._paused;
      }

      return this.add(new TweenLite(target, 0, vars), position);
    };

    TimelineLite.exportRoot = function (vars, ignoreDelayedCalls) {
      vars = vars || {};

      if (vars.smoothChildTiming == null) {
        vars.smoothChildTiming = true;
      }

      var tl = new TimelineLite(vars),
          root = tl._timeline,
          hasNegativeStart,
          time,
          tween,
          next;

      if (ignoreDelayedCalls == null) {
        ignoreDelayedCalls = true;
      }

      root._remove(tl, true);

      tl._startTime = 0;
      tl._rawPrevTime = tl._time = tl._totalTime = root._time;
      tween = root._first;

      while (tween) {
        next = tween._next;

        if (!ignoreDelayedCalls || !(tween instanceof TweenLite && tween.target === tween.vars.onComplete)) {
          time = tween._startTime - tween._delay;

          if (time < 0) {
            hasNegativeStart = 1;
          }

          tl.add(tween, time);
        }

        tween = next;
      }

      root.add(tl, 0);

      if (hasNegativeStart) {
        //calling totalDuration() will force the adjustment necessary to shift the children forward so none of them start before zero, and moves the timeline backwards the same amount, so the playhead is still aligned where it should be globally, but the timeline doesn't have illegal children that start before zero.
        tl.totalDuration();
      }

      return tl;
    };

    p.add = function (value, position, align, stagger) {
      var curTime, l, i, child, tl, beforeRawTime;

      if (typeof position !== "number") {
        position = this._parseTimeOrLabel(position, 0, true, value);
      }

      if (!(value instanceof Animation)) {
        if (value instanceof Array || value && value.push && _isArray(value)) {
          align = align || "normal";
          stagger = stagger || 0;
          curTime = position;
          l = value.length;

          for (i = 0; i < l; i++) {
            if (_isArray(child = value[i])) {
              child = new TimelineLite({
                tweens: child
              });
            }

            this.add(child, curTime);

            if (typeof child !== "string" && typeof child !== "function") {
              if (align === "sequence") {
                curTime = child._startTime + child.totalDuration() / child._timeScale;
              } else if (align === "start") {
                child._startTime -= child.delay();
              }
            }

            curTime += stagger;
          }

          return this._uncache(true);
        } else if (typeof value === "string") {
          return this.addLabel(value, position);
        } else if (typeof value === "function") {
          value = TweenLite.delayedCall(0, value);
        } else {
          throw "Cannot add " + value + " into the timeline; it is not a tween, timeline, function, or string.";
        }
      }

      SimpleTimeline.prototype.add.call(this, value, position);

      if (value._time) {
        //in case, for example, the _startTime is moved on a tween that has already rendered. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning.
        curTime = Math.max(0, Math.min(value.totalDuration(), (this.rawTime() - value._startTime) * value._timeScale));

        if (Math.abs(curTime - value._totalTime) > 0.00001) {
          //if an onComplete restarts the tween in a nested timeline, for example, there could be an endless loop without this logic (v2.0.2), like var masterTL = new TimelineMax({autoRemoveChildren: true}), tl = new TimelineMax(); tl.eventCallback("onComplete", function() { tl.restart() } );tl.fromTo('div', 1.1, { rotation: 0 }, { rotation: 360 }, 0);masterTL.add(tl);
          value.render(curTime, false, false);
        }
      } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.


      if (this._gc || this._time === this._duration) if (!this._paused) if (this._duration < this.duration()) {
        //in case any of the ancestors had completed but should now be enabled...
        tl = this;
        beforeRawTime = tl.rawTime() > value._startTime; //if the tween is placed on the timeline so that it starts BEFORE the current rawTime, we should align the playhead (move the timeline). This is because sometimes users will create a timeline, let it finish, and much later append a tween and expect it to run instead of jumping to its end state. While technically one could argue that it should jump to its end state, that's not what users intuitively expect.

        while (tl._timeline) {
          if (beforeRawTime && tl._timeline.smoothChildTiming) {
            tl.totalTime(tl._totalTime, true); //moves the timeline (shifts its startTime) if necessary, and also enables it.
          } else if (tl._gc) {
            tl._enabled(true, false);
          }

          tl = tl._timeline;
        }
      }
      return this;
    };

    p.remove = function (value) {
      if (value instanceof Animation) {
        this._remove(value, false);

        var tl = value._timeline = value.vars.useFrames ? Animation._rootFramesTimeline : Animation._rootTimeline; //now that it's removed, default it to the root timeline so that if it gets played again, it doesn't jump back into this timeline.

        value._startTime = (value._paused ? value._pauseTime : tl._time) - (!value._reversed ? value._totalTime : value.totalDuration() - value._totalTime) / value._timeScale; //ensure that if it gets played again, the timing is correct.

        return this;
      } else if (value instanceof Array || value && value.push && _isArray(value)) {
        var i = value.length;

        while (--i > -1) {
          this.remove(value[i]);
        }

        return this;
      } else if (typeof value === "string") {
        return this.removeLabel(value);
      }

      return this.kill(null, value);
    };

    p._remove = function (tween, skipDisable) {
      SimpleTimeline.prototype._remove.call(this, tween, skipDisable);

      var last = this._last;

      if (!last) {
        this._time = this._totalTime = this._duration = this._totalDuration = 0;
      } else if (this._time > this.duration()) {
        this._time = this._duration;
        this._totalTime = this._totalDuration;
      }

      return this;
    };

    p.append = function (value, offsetOrLabel) {
      return this.add(value, this._parseTimeOrLabel(null, offsetOrLabel, true, value));
    };

    p.insert = p.insertMultiple = function (value, position, align, stagger) {
      return this.add(value, position || 0, align, stagger);
    };

    p.appendMultiple = function (tweens, offsetOrLabel, align, stagger) {
      return this.add(tweens, this._parseTimeOrLabel(null, offsetOrLabel, true, tweens), align, stagger);
    };

    p.addLabel = function (label, position) {
      this._labels[label] = this._parseTimeOrLabel(position);
      return this;
    };

    p.addPause = function (position, callback, params, scope) {
      var t = TweenLite.delayedCall(0, _pauseCallback, params, scope || this);
      t.vars.onComplete = t.vars.onReverseComplete = callback;
      t.data = "isPause";
      this._hasPause = true;
      return this.add(t, position);
    };

    p.removeLabel = function (label) {
      delete this._labels[label];
      return this;
    };

    p.getLabelTime = function (label) {
      return this._labels[label] != null ? this._labels[label] : -1;
    };

    p._parseTimeOrLabel = function (timeOrLabel, offsetOrLabel, appendIfAbsent, ignore) {
      var clippedDuration, i; //if we're about to add a tween/timeline (or an array of them) that's already a child of this timeline, we should remove it first so that it doesn't contaminate the duration().

      if (ignore instanceof Animation && ignore.timeline === this) {
        this.remove(ignore);
      } else if (ignore && (ignore instanceof Array || ignore.push && _isArray(ignore))) {
        i = ignore.length;

        while (--i > -1) {
          if (ignore[i] instanceof Animation && ignore[i].timeline === this) {
            this.remove(ignore[i]);
          }
        }
      }

      clippedDuration = typeof timeOrLabel === "number" && !offsetOrLabel ? 0 : this.duration() > 99999999999 ? this.recent().endTime(false) : this._duration; //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.

      if (typeof offsetOrLabel === "string") {
        return this._parseTimeOrLabel(offsetOrLabel, appendIfAbsent && typeof timeOrLabel === "number" && this._labels[offsetOrLabel] == null ? timeOrLabel - clippedDuration : 0, appendIfAbsent);
      }

      offsetOrLabel = offsetOrLabel || 0;

      if (typeof timeOrLabel === "string" && (isNaN(timeOrLabel) || this._labels[timeOrLabel] != null)) {
        //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
        i = timeOrLabel.indexOf("=");

        if (i === -1) {
          if (this._labels[timeOrLabel] == null) {
            return appendIfAbsent ? this._labels[timeOrLabel] = clippedDuration + offsetOrLabel : offsetOrLabel;
          }

          return this._labels[timeOrLabel] + offsetOrLabel;
        }

        offsetOrLabel = parseInt(timeOrLabel.charAt(i - 1) + "1", 10) * Number(timeOrLabel.substr(i + 1));
        timeOrLabel = i > 1 ? this._parseTimeOrLabel(timeOrLabel.substr(0, i - 1), 0, appendIfAbsent) : clippedDuration;
      } else if (timeOrLabel == null) {
        timeOrLabel = clippedDuration;
      }

      return Number(timeOrLabel) + offsetOrLabel;
    };

    p.seek = function (position, suppressEvents) {
      return this.totalTime(typeof position === "number" ? position : this._parseTimeOrLabel(position), suppressEvents !== false);
    };

    p.stop = function () {
      return this.paused(true);
    };

    p.gotoAndPlay = function (position, suppressEvents) {
      return this.play(position, suppressEvents);
    };

    p.gotoAndStop = function (position, suppressEvents) {
      return this.pause(position, suppressEvents);
    };

    p.render = function (time, suppressEvents, force) {
      if (this._gc) {
        this._enabled(true, false);
      }

      var prevTime = this._time,
          totalDur = !this._dirty ? this._totalDuration : this.totalDuration(),
          prevStart = this._startTime,
          prevTimeScale = this._timeScale,
          prevPaused = this._paused,
          tween,
          isComplete,
          next,
          callback,
          internalForce,
          pauseTween,
          curTime;

      if (prevTime !== this._time) {
        //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
        time += this._time - prevTime;
      }

      if (time >= totalDur - 0.0000001 && time >= 0) {
        //to work around occasional floating point math artifacts.
        this._totalTime = this._time = totalDur;
        if (!this._reversed) if (!this._hasPausedChild()) {
          isComplete = true;
          callback = "onComplete";
          internalForce = !!this._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.

          if (this._duration === 0) if (time <= 0 && time >= -0.0000001 || this._rawPrevTime < 0 || this._rawPrevTime === _tinyNum) if (this._rawPrevTime !== time && this._first) {
            internalForce = true;

            if (this._rawPrevTime > _tinyNum) {
              callback = "onReverseComplete";
            }
          }
        }
        this._rawPrevTime = this._duration || !suppressEvents || time || this._rawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.

        time = totalDur + 0.0001; //to avoid occasional floating point rounding errors - sometimes child tweens/timelines were not being fully completed (their progress might be 0.999999999999998 instead of 1 because when _time - tween._startTime is performed, floating point errors would return a value that was SLIGHTLY off). Try (999999999999.7 - 999999999999) * 1 = 0.699951171875 instead of 0.7.
      } else if (time < 0.0000001) {
        //to work around occasional floating point math artifacts, round super small values to 0.
        this._totalTime = this._time = 0;

        if (prevTime !== 0 || this._duration === 0 && this._rawPrevTime !== _tinyNum && (this._rawPrevTime > 0 || time < 0 && this._rawPrevTime >= 0)) {
          callback = "onReverseComplete";
          isComplete = this._reversed;
        }

        if (time < 0) {
          this._active = false;

          if (this._timeline.autoRemoveChildren && this._reversed) {
            //ensures proper GC if a timeline is resumed after it's finished reversing.
            internalForce = isComplete = true;
            callback = "onReverseComplete";
          } else if (this._rawPrevTime >= 0 && this._first) {
            //when going back beyond the start, force a render so that zero-duration tweens that sit at the very beginning render their start values properly. Otherwise, if the parent timeline's playhead lands exactly at this timeline's startTime, and then moves backwards, the zero-duration tweens at the beginning would still be at their end state.
            internalForce = true;
          }

          this._rawPrevTime = time;
        } else {
          this._rawPrevTime = this._duration || !suppressEvents || time || this._rawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.

          if (time === 0 && isComplete) {
            //if there's a zero-duration tween at the very beginning of a timeline and the playhead lands EXACTLY at time 0, that tween will correctly render its end values, but we need to keep the timeline alive for one more render so that the beginning values render properly as the parent's playhead keeps moving beyond the begining. Imagine obj.x starts at 0 and then we do tl.set(obj, {x:100}).to(obj, 1, {x:200}) and then later we tl.reverse()...the goal is to have obj.x revert to 0. If the playhead happens to land on exactly 0, without this chunk of code, it'd complete the timeline and remove it from the rendering queue (not good).
            tween = this._first;

            while (tween && tween._startTime === 0) {
              if (!tween._duration) {
                isComplete = false;
              }

              tween = tween._next;
            }
          }

          time = 0; //to avoid occasional floating point rounding errors (could cause problems especially with zero-duration tweens at the very beginning of the timeline)

          if (!this._initted) {
            internalForce = true;
          }
        }
      } else {
        if (this._hasPause && !this._forcingPlayhead && !suppressEvents) {
          if (time >= prevTime) {
            tween = this._first;

            while (tween && tween._startTime <= time && !pauseTween) {
              if (!tween._duration) if (tween.data === "isPause" && !tween.ratio && !(tween._startTime === 0 && this._rawPrevTime === 0)) {
                pauseTween = tween;
              }
              tween = tween._next;
            }
          } else {
            tween = this._last;

            while (tween && tween._startTime >= time && !pauseTween) {
              if (!tween._duration) if (tween.data === "isPause" && tween._rawPrevTime > 0) {
                pauseTween = tween;
              }
              tween = tween._prev;
            }
          }

          if (pauseTween) {
            this._time = time = pauseTween._startTime;
            this._totalTime = time + this._cycle * (this._totalDuration + this._repeatDelay);
          }
        }

        this._totalTime = this._time = this._rawPrevTime = time;
      }

      if ((this._time === prevTime || !this._first) && !force && !internalForce && !pauseTween) {
        return;
      } else if (!this._initted) {
        this._initted = true;
      }

      if (!this._active) if (!this._paused && this._time !== prevTime && time > 0) {
        this._active = true; //so that if the user renders the timeline (as opposed to the parent timeline rendering it), it is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the timeline already finished but the user manually re-renders it as halfway done, for example.
      }
      if (prevTime === 0) if (this.vars.onStart) if (this._time !== 0 || !this._duration) if (!suppressEvents) {
        this._callback("onStart");
      }
      curTime = this._time;

      if (curTime >= prevTime) {
        tween = this._first;

        while (tween) {
          next = tween._next; //record it here because the value could change after rendering...

          if (curTime !== this._time || this._paused && !prevPaused) {
            //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
            break;
          } else if (tween._active || tween._startTime <= curTime && !tween._paused && !tween._gc) {
            if (pauseTween === tween) {
              this.pause();
            }

            if (!tween._reversed) {
              tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
            } else {
              tween.render((!tween._dirty ? tween._totalDuration : tween.totalDuration()) - (time - tween._startTime) * tween._timeScale, suppressEvents, force);
            }
          }

          tween = next;
        }
      } else {
        tween = this._last;

        while (tween) {
          next = tween._prev; //record it here because the value could change after rendering...

          if (curTime !== this._time || this._paused && !prevPaused) {
            //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
            break;
          } else if (tween._active || tween._startTime <= prevTime && !tween._paused && !tween._gc) {
            if (pauseTween === tween) {
              pauseTween = tween._prev; //the linked list is organized by _startTime, thus it's possible that a tween could start BEFORE the pause and end after it, in which case it would be positioned before the pause tween in the linked list, but we should render it before we pause() the timeline and cease rendering. This is only a concern when going in reverse.

              while (pauseTween && pauseTween.endTime() > this._time) {
                pauseTween.render(pauseTween._reversed ? pauseTween.totalDuration() - (time - pauseTween._startTime) * pauseTween._timeScale : (time - pauseTween._startTime) * pauseTween._timeScale, suppressEvents, force);
                pauseTween = pauseTween._prev;
              }

              pauseTween = null;
              this.pause();
            }

            if (!tween._reversed) {
              tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
            } else {
              tween.render((!tween._dirty ? tween._totalDuration : tween.totalDuration()) - (time - tween._startTime) * tween._timeScale, suppressEvents, force);
            }
          }

          tween = next;
        }
      }

      if (this._onUpdate) if (!suppressEvents) {
        if (_lazyTweens.length) {
          //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
          _lazyRender();
        }

        this._callback("onUpdate");
      }
      if (callback) if (!this._gc) if (prevStart === this._startTime || prevTimeScale !== this._timeScale) if (this._time === 0 || totalDur >= this.totalDuration()) {
        //if one of the tweens that was rendered altered this timeline's startTime (like if an onComplete reversed the timeline), it probably isn't complete. If it is, don't worry, because whatever call altered the startTime would complete if it was necessary at the new time. The only exception is the timeScale property. Also check _gc because there's a chance that kill() could be called in an onUpdate
        if (isComplete) {
          if (_lazyTweens.length) {
            //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onComplete on a timeline that reports/checks tweened values.
            _lazyRender();
          }

          if (this._timeline.autoRemoveChildren) {
            this._enabled(false, false);
          }

          this._active = false;
        }

        if (!suppressEvents && this.vars[callback]) {
          this._callback(callback);
        }
      }
    };

    p._hasPausedChild = function () {
      var tween = this._first;

      while (tween) {
        if (tween._paused || tween instanceof TimelineLite && tween._hasPausedChild()) {
          return true;
        }

        tween = tween._next;
      }

      return false;
    };

    p.getChildren = function (nested, tweens, timelines, ignoreBeforeTime) {
      ignoreBeforeTime = ignoreBeforeTime || -9999999999;
      var a = [],
          tween = this._first,
          cnt = 0;

      while (tween) {
        if (tween._startTime < ignoreBeforeTime) {//do nothing
        } else if (tween instanceof TweenLite) {
          if (tweens !== false) {
            a[cnt++] = tween;
          }
        } else {
          if (timelines !== false) {
            a[cnt++] = tween;
          }

          if (nested !== false) {
            a = a.concat(tween.getChildren(true, tweens, timelines));
            cnt = a.length;
          }
        }

        tween = tween._next;
      }

      return a;
    };

    p.getTweensOf = function (target, nested) {
      var disabled = this._gc,
          a = [],
          cnt = 0,
          tweens,
          i;

      if (disabled) {
        this._enabled(true, true); //getTweensOf() filters out disabled tweens, and we have to mark them as _gc = true when the timeline completes in order to allow clean garbage collection, so temporarily re-enable the timeline here.

      }

      tweens = TweenLite.getTweensOf(target);
      i = tweens.length;

      while (--i > -1) {
        if (tweens[i].timeline === this || nested && this._contains(tweens[i])) {
          a[cnt++] = tweens[i];
        }
      }

      if (disabled) {
        this._enabled(false, true);
      }

      return a;
    };

    p.recent = function () {
      return this._recent;
    };

    p._contains = function (tween) {
      var tl = tween.timeline;

      while (tl) {
        if (tl === this) {
          return true;
        }

        tl = tl.timeline;
      }

      return false;
    };

    p.shiftChildren = function (amount, adjustLabels, ignoreBeforeTime) {
      ignoreBeforeTime = ignoreBeforeTime || 0;
      var tween = this._first,
          labels = this._labels,
          p;

      while (tween) {
        if (tween._startTime >= ignoreBeforeTime) {
          tween._startTime += amount;
        }

        tween = tween._next;
      }

      if (adjustLabels) {
        for (p in labels) {
          if (labels[p] >= ignoreBeforeTime) {
            labels[p] += amount;
          }
        }
      }

      return this._uncache(true);
    };

    p._kill = function (vars, target) {
      if (!vars && !target) {
        return this._enabled(false, false);
      }

      var tweens = !target ? this.getChildren(true, true, false) : this.getTweensOf(target),
          i = tweens.length,
          changed = false;

      while (--i > -1) {
        if (tweens[i]._kill(vars, target)) {
          changed = true;
        }
      }

      return changed;
    };

    p.clear = function (labels) {
      var tweens = this.getChildren(false, true, true),
          i = tweens.length;
      this._time = this._totalTime = 0;

      while (--i > -1) {
        tweens[i]._enabled(false, false);
      }

      if (labels !== false) {
        this._labels = {};
      }

      return this._uncache(true);
    };

    p.invalidate = function () {
      var tween = this._first;

      while (tween) {
        tween.invalidate();
        tween = tween._next;
      }

      return Animation.prototype.invalidate.call(this);
      ;
    };

    p._enabled = function (enabled, ignoreTimeline) {
      if (enabled === this._gc) {
        var tween = this._first;

        while (tween) {
          tween._enabled(enabled, true);

          tween = tween._next;
        }
      }

      return SimpleTimeline.prototype._enabled.call(this, enabled, ignoreTimeline);
    };

    p.totalTime = function (time, suppressEvents, uncapped) {
      this._forcingPlayhead = true;
      var val = Animation.prototype.totalTime.apply(this, arguments);
      this._forcingPlayhead = false;
      return val;
    };

    p.duration = function (value) {
      if (!arguments.length) {
        if (this._dirty) {
          this.totalDuration(); //just triggers recalculation
        }

        return this._duration;
      }

      if (this.duration() !== 0 && value !== 0) {
        this.timeScale(this._duration / value);
      }

      return this;
    };

    p.totalDuration = function (value) {
      if (!arguments.length) {
        if (this._dirty) {
          var max = 0,
              tween = this._last,
              prevStart = 999999999999,
              prev,
              end;

          while (tween) {
            prev = tween._prev; //record it here in case the tween changes position in the sequence...

            if (tween._dirty) {
              tween.totalDuration(); //could change the tween._startTime, so make sure the tween's cache is clean before analyzing it.
            }

            if (tween._startTime > prevStart && this._sortChildren && !tween._paused && !this._calculatingDuration) {
              //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
              this._calculatingDuration = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add(), like _parseTimeOrLabel().

              this.add(tween, tween._startTime - tween._delay);
              this._calculatingDuration = 0;
            } else {
              prevStart = tween._startTime;
            }

            if (tween._startTime < 0 && !tween._paused) {
              //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
              max -= tween._startTime;

              if (this._timeline.smoothChildTiming) {
                this._startTime += tween._startTime / this._timeScale;
                this._time -= tween._startTime;
                this._totalTime -= tween._startTime;
                this._rawPrevTime -= tween._startTime;
              }

              this.shiftChildren(-tween._startTime, false, -9999999999);
              prevStart = 0;
            }

            end = tween._startTime + tween._totalDuration / tween._timeScale;

            if (end > max) {
              max = end;
            }

            tween = prev;
          }

          this._duration = this._totalDuration = max;
          this._dirty = false;
        }

        return this._totalDuration;
      }

      return value && this.totalDuration() ? this.timeScale(this._totalDuration / value) : this;
    };

    p.paused = function (value) {
      if (!value) {
        //if there's a pause directly at the spot from where we're unpausing, skip it.
        var tween = this._first,
            time = this._time;

        while (tween) {
          if (tween._startTime === time && tween.data === "isPause") {
            tween._rawPrevTime = 0; //remember, _rawPrevTime is how zero-duration tweens/callbacks sense directionality and determine whether or not to fire. If _rawPrevTime is the same as _startTime on the next render, it won't fire.
          }

          tween = tween._next;
        }
      }

      return Animation.prototype.paused.apply(this, arguments);
    };

    p.usesFrames = function () {
      var tl = this._timeline;

      while (tl._timeline) {
        tl = tl._timeline;
      }

      return tl === Animation._rootFramesTimeline;
    };

    p.rawTime = function (wrapRepeats) {
      return wrapRepeats && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(wrapRepeats) - this._startTime) * this._timeScale;
    };

    return TimelineLite;
  }, true);
  /*
   * ----------------------------------------------------------------
   * TimelineMax
   * ----------------------------------------------------------------
   */


  _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (TimelineLite, TweenLite, Ease) {
    var TimelineMax = function TimelineMax(vars) {
      TimelineLite.call(this, vars);
      this._repeat = this.vars.repeat || 0;
      this._repeatDelay = this.vars.repeatDelay || 0;
      this._cycle = 0;
      this._yoyo = this.vars.yoyo === true;
      this._dirty = true;
    },
        _tinyNum = 0.0000000001,
        TweenLiteInternals = TweenLite._internals,
        _lazyTweens = TweenLiteInternals.lazyTweens,
        _lazyRender = TweenLiteInternals.lazyRender,
        _globals = _gsScope._gsDefine.globals,
        _easeNone = new Ease(null, null, 1, 0),
        p = TimelineMax.prototype = new TimelineLite();

    p.constructor = TimelineMax;
    p.kill()._gc = false;
    TimelineMax.version = "2.0.2";

    p.invalidate = function () {
      this._yoyo = this.vars.yoyo === true;
      this._repeat = this.vars.repeat || 0;
      this._repeatDelay = this.vars.repeatDelay || 0;

      this._uncache(true);

      return TimelineLite.prototype.invalidate.call(this);
    };

    p.addCallback = function (callback, position, params, scope) {
      return this.add(TweenLite.delayedCall(0, callback, params, scope), position);
    };

    p.removeCallback = function (callback, position) {
      if (callback) {
        if (position == null) {
          this._kill(null, callback);
        } else {
          var a = this.getTweensOf(callback, false),
              i = a.length,
              time = this._parseTimeOrLabel(position);

          while (--i > -1) {
            if (a[i]._startTime === time) {
              a[i]._enabled(false, false);
            }
          }
        }
      }

      return this;
    };

    p.removePause = function (position) {
      return this.removeCallback(TimelineLite._internals.pauseCallback, position);
    };

    p.tweenTo = function (position, vars) {
      vars = vars || {};
      var copy = {
        ease: _easeNone,
        useFrames: this.usesFrames(),
        immediateRender: false,
        lazy: false
      },
          Engine = vars.repeat && _globals.TweenMax || TweenLite,
          duration,
          p,
          t;

      for (p in vars) {
        copy[p] = vars[p];
      }

      copy.time = this._parseTimeOrLabel(position);
      duration = Math.abs(Number(copy.time) - this._time) / this._timeScale || 0.001;
      t = new Engine(this, duration, copy);

      copy.onStart = function () {
        t.target.paused(true);

        if (t.vars.time !== t.target.time() && duration === t.duration() && !t.isFromTo) {
          //don't make the duration zero - if it's supposed to be zero, don't worry because it's already initting the tween and will complete immediately, effectively making the duration zero anyway. If we make duration zero, the tween won't run at all.
          t.duration(Math.abs(t.vars.time - t.target.time()) / t.target._timeScale).render(t.time(), true, true); //render() right away to ensure that things look right, especially in the case of .tweenTo(0).
        }

        if (vars.onStart) {
          //in case the user had an onStart in the vars - we don't want to overwrite it.
          vars.onStart.apply(vars.onStartScope || vars.callbackScope || t, vars.onStartParams || []); //don't use t._callback("onStart") or it'll point to the copy.onStart and we'll get a recursion error.
        }
      };

      return t;
    };

    p.tweenFromTo = function (fromPosition, toPosition, vars) {
      vars = vars || {};
      fromPosition = this._parseTimeOrLabel(fromPosition);
      vars.startAt = {
        onComplete: this.seek,
        onCompleteParams: [fromPosition],
        callbackScope: this
      };
      vars.immediateRender = vars.immediateRender !== false;
      var t = this.tweenTo(toPosition, vars);
      t.isFromTo = 1; //to ensure we don't mess with the duration in the onStart (we've got the start and end values here, so lock it in)

      return t.duration(Math.abs(t.vars.time - fromPosition) / this._timeScale || 0.001);
    };

    p.render = function (time, suppressEvents, force) {
      if (this._gc) {
        this._enabled(true, false);
      }

      var prevTime = this._time,
          totalDur = !this._dirty ? this._totalDuration : this.totalDuration(),
          dur = this._duration,
          prevTotalTime = this._totalTime,
          prevStart = this._startTime,
          prevTimeScale = this._timeScale,
          prevRawPrevTime = this._rawPrevTime,
          prevPaused = this._paused,
          prevCycle = this._cycle,
          tween,
          isComplete,
          next,
          callback,
          internalForce,
          cycleDuration,
          pauseTween,
          curTime;

      if (prevTime !== this._time) {
        //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
        time += this._time - prevTime;
      }

      if (time >= totalDur - 0.0000001 && time >= 0) {
        //to work around occasional floating point math artifacts.
        if (!this._locked) {
          this._totalTime = totalDur;
          this._cycle = this._repeat;
        }

        if (!this._reversed) if (!this._hasPausedChild()) {
          isComplete = true;
          callback = "onComplete";
          internalForce = !!this._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.

          if (this._duration === 0) if (time <= 0 && time >= -0.0000001 || prevRawPrevTime < 0 || prevRawPrevTime === _tinyNum) if (prevRawPrevTime !== time && this._first) {
            internalForce = true;

            if (prevRawPrevTime > _tinyNum) {
              callback = "onReverseComplete";
            }
          }
        }
        this._rawPrevTime = this._duration || !suppressEvents || time || this._rawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.

        if (this._yoyo && (this._cycle & 1) !== 0) {
          this._time = time = 0;
        } else {
          this._time = dur;
          time = dur + 0.0001; //to avoid occasional floating point rounding errors - sometimes child tweens/timelines were not being fully completed (their progress might be 0.999999999999998 instead of 1 because when _time - tween._startTime is performed, floating point errors would return a value that was SLIGHTLY off). Try (999999999999.7 - 999999999999) * 1 = 0.699951171875 instead of 0.7. We cannot do less then 0.0001 because the same issue can occur when the duration is extremely large like 999999999999 in which case adding 0.00000001, for example, causes it to act like nothing was added.
        }
      } else if (time < 0.0000001) {
        //to work around occasional floating point math artifacts, round super small values to 0.
        if (!this._locked) {
          this._totalTime = this._cycle = 0;
        }

        this._time = 0;

        if (prevTime !== 0 || dur === 0 && prevRawPrevTime !== _tinyNum && (prevRawPrevTime > 0 || time < 0 && prevRawPrevTime >= 0) && !this._locked) {
          //edge case for checking time < 0 && prevRawPrevTime >= 0: a zero-duration fromTo() tween inside a zero-duration timeline (yeah, very rare)
          callback = "onReverseComplete";
          isComplete = this._reversed;
        }

        if (time < 0) {
          this._active = false;

          if (this._timeline.autoRemoveChildren && this._reversed) {
            internalForce = isComplete = true;
            callback = "onReverseComplete";
          } else if (prevRawPrevTime >= 0 && this._first) {
            //when going back beyond the start, force a render so that zero-duration tweens that sit at the very beginning render their start values properly. Otherwise, if the parent timeline's playhead lands exactly at this timeline's startTime, and then moves backwards, the zero-duration tweens at the beginning would still be at their end state.
            internalForce = true;
          }

          this._rawPrevTime = time;
        } else {
          this._rawPrevTime = dur || !suppressEvents || time || this._rawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.

          if (time === 0 && isComplete) {
            //if there's a zero-duration tween at the very beginning of a timeline and the playhead lands EXACTLY at time 0, that tween will correctly render its end values, but we need to keep the timeline alive for one more render so that the beginning values render properly as the parent's playhead keeps moving beyond the begining. Imagine obj.x starts at 0 and then we do tl.set(obj, {x:100}).to(obj, 1, {x:200}) and then later we tl.reverse()...the goal is to have obj.x revert to 0. If the playhead happens to land on exactly 0, without this chunk of code, it'd complete the timeline and remove it from the rendering queue (not good).
            tween = this._first;

            while (tween && tween._startTime === 0) {
              if (!tween._duration) {
                isComplete = false;
              }

              tween = tween._next;
            }
          }

          time = 0; //to avoid occasional floating point rounding errors (could cause problems especially with zero-duration tweens at the very beginning of the timeline)

          if (!this._initted) {
            internalForce = true;
          }
        }
      } else {
        if (dur === 0 && prevRawPrevTime < 0) {
          //without this, zero-duration repeating timelines (like with a simple callback nested at the very beginning and a repeatDelay) wouldn't render the first time through.
          internalForce = true;
        }

        this._time = this._rawPrevTime = time;

        if (!this._locked) {
          this._totalTime = time;

          if (this._repeat !== 0) {
            cycleDuration = dur + this._repeatDelay;
            this._cycle = this._totalTime / cycleDuration >> 0; //originally _totalTime % cycleDuration but floating point errors caused problems, so I normalized it. (4 % 0.8 should be 0 but it gets reported as 0.79999999!)

            if (this._cycle !== 0) if (this._cycle === this._totalTime / cycleDuration && prevTotalTime <= time) {
              this._cycle--; //otherwise when rendered exactly at the end time, it will act as though it is repeating (at the beginning)
            }
            this._time = this._totalTime - this._cycle * cycleDuration;
            if (this._yoyo) if ((this._cycle & 1) !== 0) {
              this._time = dur - this._time;
            }

            if (this._time > dur) {
              this._time = dur;
              time = dur + 0.0001; //to avoid occasional floating point rounding error
            } else if (this._time < 0) {
              this._time = time = 0;
            } else {
              time = this._time;
            }
          }
        }

        if (this._hasPause && !this._forcingPlayhead && !suppressEvents) {
          time = this._time;

          if (time >= prevTime || this._repeat && prevCycle !== this._cycle) {
            tween = this._first;

            while (tween && tween._startTime <= time && !pauseTween) {
              if (!tween._duration) if (tween.data === "isPause" && !tween.ratio && !(tween._startTime === 0 && this._rawPrevTime === 0)) {
                pauseTween = tween;
              }
              tween = tween._next;
            }
          } else {
            tween = this._last;

            while (tween && tween._startTime >= time && !pauseTween) {
              if (!tween._duration) if (tween.data === "isPause" && tween._rawPrevTime > 0) {
                pauseTween = tween;
              }
              tween = tween._prev;
            }
          }

          if (pauseTween && pauseTween._startTime < dur) {
            this._time = time = pauseTween._startTime;
            this._totalTime = time + this._cycle * (this._totalDuration + this._repeatDelay);
          }
        }
      }

      if (this._cycle !== prevCycle) if (!this._locked) {
        /*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get transated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the TimelineMax work.
        */
        var backwards = this._yoyo && (prevCycle & 1) !== 0,
            wrap = backwards === (this._yoyo && (this._cycle & 1) !== 0),
            recTotalTime = this._totalTime,
            recCycle = this._cycle,
            recRawPrevTime = this._rawPrevTime,
            recTime = this._time;
        this._totalTime = prevCycle * dur;

        if (this._cycle < prevCycle) {
          backwards = !backwards;
        } else {
          this._totalTime += dur;
        }

        this._time = prevTime; //temporarily revert _time so that render() renders the children in the correct order. Without this, tweens won't rewind correctly. We could arhictect things in a "cleaner" way by splitting out the rendering queue into a separate method but for performance reasons, we kept it all inside this method.

        this._rawPrevTime = dur === 0 ? prevRawPrevTime - 0.0001 : prevRawPrevTime;
        this._cycle = prevCycle;
        this._locked = true; //prevents changes to totalTime and skips repeat/yoyo behavior when we recursively call render()

        prevTime = backwards ? 0 : dur;
        this.render(prevTime, suppressEvents, dur === 0);
        if (!suppressEvents) if (!this._gc) {
          if (this.vars.onRepeat) {
            this._cycle = recCycle; //in case the onRepeat alters the playhead or invalidates(), we shouldn't stay locked or use the previous cycle.

            this._locked = false;

            this._callback("onRepeat");
          }
        }

        if (prevTime !== this._time) {
          //in case there's a callback like onComplete in a nested tween/timeline that changes the playhead position, like via seek(), we should just abort.
          return;
        }

        if (wrap) {
          this._cycle = prevCycle; //if there's an onRepeat, we reverted this above, so make sure it's set properly again. We also unlocked in that scenario, so reset that too.

          this._locked = true;
          prevTime = backwards ? dur + 0.0001 : -0.0001;
          this.render(prevTime, true, false);
        }

        this._locked = false;

        if (this._paused && !prevPaused) {
          //if the render() triggered callback that paused this timeline, we should abort (very rare, but possible)
          return;
        }

        this._time = recTime;
        this._totalTime = recTotalTime;
        this._cycle = recCycle;
        this._rawPrevTime = recRawPrevTime;
      }

      if ((this._time === prevTime || !this._first) && !force && !internalForce && !pauseTween) {
        if (prevTotalTime !== this._totalTime) if (this._onUpdate) if (!suppressEvents) {
          //so that onUpdate fires even during the repeatDelay - as long as the totalTime changed, we should trigger onUpdate.
          this._callback("onUpdate");
        }
        return;
      } else if (!this._initted) {
        this._initted = true;
      }

      if (!this._active) if (!this._paused && this._totalTime !== prevTotalTime && time > 0) {
        this._active = true; //so that if the user renders the timeline (as opposed to the parent timeline rendering it), it is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the timeline already finished but the user manually re-renders it as halfway done, for example.
      }
      if (prevTotalTime === 0) if (this.vars.onStart) if (this._totalTime !== 0 || !this._totalDuration) if (!suppressEvents) {
        this._callback("onStart");
      }
      curTime = this._time;

      if (curTime >= prevTime) {
        tween = this._first;

        while (tween) {
          next = tween._next; //record it here because the value could change after rendering...

          if (curTime !== this._time || this._paused && !prevPaused) {
            //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
            break;
          } else if (tween._active || tween._startTime <= this._time && !tween._paused && !tween._gc) {
            if (pauseTween === tween) {
              this.pause();
            }

            if (!tween._reversed) {
              tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
            } else {
              tween.render((!tween._dirty ? tween._totalDuration : tween.totalDuration()) - (time - tween._startTime) * tween._timeScale, suppressEvents, force);
            }
          }

          tween = next;
        }
      } else {
        tween = this._last;

        while (tween) {
          next = tween._prev; //record it here because the value could change after rendering...

          if (curTime !== this._time || this._paused && !prevPaused) {
            //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
            break;
          } else if (tween._active || tween._startTime <= prevTime && !tween._paused && !tween._gc) {
            if (pauseTween === tween) {
              pauseTween = tween._prev; //the linked list is organized by _startTime, thus it's possible that a tween could start BEFORE the pause and end after it, in which case it would be positioned before the pause tween in the linked list, but we should render it before we pause() the timeline and cease rendering. This is only a concern when going in reverse.

              while (pauseTween && pauseTween.endTime() > this._time) {
                pauseTween.render(pauseTween._reversed ? pauseTween.totalDuration() - (time - pauseTween._startTime) * pauseTween._timeScale : (time - pauseTween._startTime) * pauseTween._timeScale, suppressEvents, force);
                pauseTween = pauseTween._prev;
              }

              pauseTween = null;
              this.pause();
            }

            if (!tween._reversed) {
              tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
            } else {
              tween.render((!tween._dirty ? tween._totalDuration : tween.totalDuration()) - (time - tween._startTime) * tween._timeScale, suppressEvents, force);
            }
          }

          tween = next;
        }
      }

      if (this._onUpdate) if (!suppressEvents) {
        if (_lazyTweens.length) {
          //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
          _lazyRender();
        }

        this._callback("onUpdate");
      }
      if (callback) if (!this._locked) if (!this._gc) if (prevStart === this._startTime || prevTimeScale !== this._timeScale) if (this._time === 0 || totalDur >= this.totalDuration()) {
        //if one of the tweens that was rendered altered this timeline's startTime (like if an onComplete reversed the timeline), it probably isn't complete. If it is, don't worry, because whatever call altered the startTime would complete if it was necessary at the new time. The only exception is the timeScale property. Also check _gc because there's a chance that kill() could be called in an onUpdate
        if (isComplete) {
          if (_lazyTweens.length) {
            //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onComplete on a timeline that reports/checks tweened values.
            _lazyRender();
          }

          if (this._timeline.autoRemoveChildren) {
            this._enabled(false, false);
          }

          this._active = false;
        }

        if (!suppressEvents && this.vars[callback]) {
          this._callback(callback);
        }
      }
    };

    p.getActive = function (nested, tweens, timelines) {
      if (nested == null) {
        nested = true;
      }

      if (tweens == null) {
        tweens = true;
      }

      if (timelines == null) {
        timelines = false;
      }

      var a = [],
          all = this.getChildren(nested, tweens, timelines),
          cnt = 0,
          l = all.length,
          i,
          tween;

      for (i = 0; i < l; i++) {
        tween = all[i];

        if (tween.isActive()) {
          a[cnt++] = tween;
        }
      }

      return a;
    };

    p.getLabelAfter = function (time) {
      if (!time) if (time !== 0) {
        //faster than isNan()
        time = this._time;
      }
      var labels = this.getLabelsArray(),
          l = labels.length,
          i;

      for (i = 0; i < l; i++) {
        if (labels[i].time > time) {
          return labels[i].name;
        }
      }

      return null;
    };

    p.getLabelBefore = function (time) {
      if (time == null) {
        time = this._time;
      }

      var labels = this.getLabelsArray(),
          i = labels.length;

      while (--i > -1) {
        if (labels[i].time < time) {
          return labels[i].name;
        }
      }

      return null;
    };

    p.getLabelsArray = function () {
      var a = [],
          cnt = 0,
          p;

      for (p in this._labels) {
        a[cnt++] = {
          time: this._labels[p],
          name: p
        };
      }

      a.sort(function (a, b) {
        return a.time - b.time;
      });
      return a;
    };

    p.invalidate = function () {
      this._locked = false; //unlock and set cycle in case invalidate() is called from inside an onRepeat

      return TimelineLite.prototype.invalidate.call(this);
    }; //---- GETTERS / SETTERS -------------------------------------------------------------------------------------------------------


    p.progress = function (value, suppressEvents) {
      return !arguments.length ? this._time / this.duration() || 0 : this.totalTime(this.duration() * (this._yoyo && (this._cycle & 1) !== 0 ? 1 - value : value) + this._cycle * (this._duration + this._repeatDelay), suppressEvents);
    };

    p.totalProgress = function (value, suppressEvents) {
      return !arguments.length ? this._totalTime / this.totalDuration() || 0 : this.totalTime(this.totalDuration() * value, suppressEvents);
    };

    p.totalDuration = function (value) {
      if (!arguments.length) {
        if (this._dirty) {
          TimelineLite.prototype.totalDuration.call(this); //just forces refresh
          //Instead of Infinity, we use 999999999999 so that we can accommodate reverses.

          this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat;
        }

        return this._totalDuration;
      }

      return this._repeat === -1 || !value ? this : this.timeScale(this.totalDuration() / value);
    };

    p.time = function (value, suppressEvents) {
      if (!arguments.length) {
        return this._time;
      }

      if (this._dirty) {
        this.totalDuration();
      }

      if (value > this._duration) {
        value = this._duration;
      }

      if (this._yoyo && (this._cycle & 1) !== 0) {
        value = this._duration - value + this._cycle * (this._duration + this._repeatDelay);
      } else if (this._repeat !== 0) {
        value += this._cycle * (this._duration + this._repeatDelay);
      }

      return this.totalTime(value, suppressEvents);
    };

    p.repeat = function (value) {
      if (!arguments.length) {
        return this._repeat;
      }

      this._repeat = value;
      return this._uncache(true);
    };

    p.repeatDelay = function (value) {
      if (!arguments.length) {
        return this._repeatDelay;
      }

      this._repeatDelay = value;
      return this._uncache(true);
    };

    p.yoyo = function (value) {
      if (!arguments.length) {
        return this._yoyo;
      }

      this._yoyo = value;
      return this;
    };

    p.currentLabel = function (value) {
      if (!arguments.length) {
        return this.getLabelBefore(this._time + 0.00000001);
      }

      return this.seek(value, true);
    };

    return TimelineMax;
  }, true);
  /*
   * ----------------------------------------------------------------
   * BezierPlugin
   * ----------------------------------------------------------------
   */


  (function () {
    var _RAD2DEG = 180 / Math.PI,
        _r1 = [],
        _r2 = [],
        _r3 = [],
        _corProps = {},
        _globals = _gsScope._gsDefine.globals,
        Segment = function Segment(a, b, c, d) {
      if (c === d) {
        //if c and d match, the final autoRotate value could lock at -90 degrees, so differentiate them slightly.
        c = d - (d - b) / 1000000;
      }

      if (a === b) {
        //if a and b match, the starting autoRotate value could lock at -90 degrees, so differentiate them slightly.
        b = a + (c - a) / 1000000;
      }

      this.a = a;
      this.b = b;
      this.c = c;
      this.d = d;
      this.da = d - a;
      this.ca = c - a;
      this.ba = b - a;
    },
        _correlate = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
        cubicToQuadratic = function cubicToQuadratic(a, b, c, d) {
      var q1 = {
        a: a
      },
          q2 = {},
          q3 = {},
          q4 = {
        c: d
      },
          mab = (a + b) / 2,
          mbc = (b + c) / 2,
          mcd = (c + d) / 2,
          mabc = (mab + mbc) / 2,
          mbcd = (mbc + mcd) / 2,
          m8 = (mbcd - mabc) / 8;
      q1.b = mab + (a - mab) / 4;
      q2.b = mabc + m8;
      q1.c = q2.a = (q1.b + q2.b) / 2;
      q2.c = q3.a = (mabc + mbcd) / 2;
      q3.b = mbcd - m8;
      q4.b = mcd + (d - mcd) / 4;
      q3.c = q4.a = (q3.b + q4.b) / 2;
      return [q1, q2, q3, q4];
    },
        _calculateControlPoints = function _calculateControlPoints(a, curviness, quad, basic, correlate) {
      var l = a.length - 1,
          ii = 0,
          cp1 = a[0].a,
          i,
          p1,
          p2,
          p3,
          seg,
          m1,
          m2,
          mm,
          cp2,
          qb,
          r1,
          r2,
          tl;

      for (i = 0; i < l; i++) {
        seg = a[ii];
        p1 = seg.a;
        p2 = seg.d;
        p3 = a[ii + 1].d;

        if (correlate) {
          r1 = _r1[i];
          r2 = _r2[i];
          tl = (r2 + r1) * curviness * 0.25 / (basic ? 0.5 : _r3[i] || 0.5);
          m1 = p2 - (p2 - p1) * (basic ? curviness * 0.5 : r1 !== 0 ? tl / r1 : 0);
          m2 = p2 + (p3 - p2) * (basic ? curviness * 0.5 : r2 !== 0 ? tl / r2 : 0);
          mm = p2 - (m1 + ((m2 - m1) * (r1 * 3 / (r1 + r2) + 0.5) / 4 || 0));
        } else {
          m1 = p2 - (p2 - p1) * curviness * 0.5;
          m2 = p2 + (p3 - p2) * curviness * 0.5;
          mm = p2 - (m1 + m2) / 2;
        }

        m1 += mm;
        m2 += mm;
        seg.c = cp2 = m1;

        if (i !== 0) {
          seg.b = cp1;
        } else {
          seg.b = cp1 = seg.a + (seg.c - seg.a) * 0.6; //instead of placing b on a exactly, we move it inline with c so that if the user specifies an ease like Back.easeIn or Elastic.easeIn which goes BEYOND the beginning, it will do so smoothly.
        }

        seg.da = p2 - p1;
        seg.ca = cp2 - p1;
        seg.ba = cp1 - p1;

        if (quad) {
          qb = cubicToQuadratic(p1, cp1, cp2, p2);
          a.splice(ii, 1, qb[0], qb[1], qb[2], qb[3]);
          ii += 4;
        } else {
          ii++;
        }

        cp1 = m2;
      }

      seg = a[ii];
      seg.b = cp1;
      seg.c = cp1 + (seg.d - cp1) * 0.4; //instead of placing c on d exactly, we move it inline with b so that if the user specifies an ease like Back.easeOut or Elastic.easeOut which goes BEYOND the end, it will do so smoothly.

      seg.da = seg.d - seg.a;
      seg.ca = seg.c - seg.a;
      seg.ba = cp1 - seg.a;

      if (quad) {
        qb = cubicToQuadratic(seg.a, cp1, seg.c, seg.d);
        a.splice(ii, 1, qb[0], qb[1], qb[2], qb[3]);
      }
    },
        _parseAnchors = function _parseAnchors(values, p, correlate, prepend) {
      var a = [],
          l,
          i,
          p1,
          p2,
          p3,
          tmp;

      if (prepend) {
        values = [prepend].concat(values);
        i = values.length;

        while (--i > -1) {
          if (typeof (tmp = values[i][p]) === "string") if (tmp.charAt(1) === "=") {
            values[i][p] = prepend[p] + Number(tmp.charAt(0) + tmp.substr(2)); //accommodate relative values. Do it inline instead of breaking it out into a function for speed reasons
          }
        }
      }

      l = values.length - 2;

      if (l < 0) {
        a[0] = new Segment(values[0][p], 0, 0, values[0][p]);
        return a;
      }

      for (i = 0; i < l; i++) {
        p1 = values[i][p];
        p2 = values[i + 1][p];
        a[i] = new Segment(p1, 0, 0, p2);

        if (correlate) {
          p3 = values[i + 2][p];
          _r1[i] = (_r1[i] || 0) + (p2 - p1) * (p2 - p1);
          _r2[i] = (_r2[i] || 0) + (p3 - p2) * (p3 - p2);
        }
      }

      a[i] = new Segment(values[i][p], 0, 0, values[i + 1][p]);
      return a;
    },
        bezierThrough = function bezierThrough(values, curviness, quadratic, basic, correlate, prepend) {
      var obj = {},
          props = [],
          first = prepend || values[0],
          i,
          p,
          a,
          j,
          r,
          l,
          seamless,
          last;
      correlate = typeof correlate === "string" ? "," + correlate + "," : _correlate;

      if (curviness == null) {
        curviness = 1;
      }

      for (p in values[0]) {
        props.push(p);
      } //check to see if the last and first values are identical (well, within 0.05). If so, make seamless by appending the second element to the very end of the values array and the 2nd-to-last element to the very beginning (we'll remove those segments later)


      if (values.length > 1) {
        last = values[values.length - 1];
        seamless = true;
        i = props.length;

        while (--i > -1) {
          p = props[i];

          if (Math.abs(first[p] - last[p]) > 0.05) {
            //build in a tolerance of +/-0.05 to accommodate rounding errors.
            seamless = false;
            break;
          }
        }

        if (seamless) {
          values = values.concat(); //duplicate the array to avoid contaminating the original which the user may be reusing for other tweens

          if (prepend) {
            values.unshift(prepend);
          }

          values.push(values[1]);
          prepend = values[values.length - 3];
        }
      }

      _r1.length = _r2.length = _r3.length = 0;
      i = props.length;

      while (--i > -1) {
        p = props[i];
        _corProps[p] = correlate.indexOf("," + p + ",") !== -1;
        obj[p] = _parseAnchors(values, p, _corProps[p], prepend);
      }

      i = _r1.length;

      while (--i > -1) {
        _r1[i] = Math.sqrt(_r1[i]);
        _r2[i] = Math.sqrt(_r2[i]);
      }

      if (!basic) {
        i = props.length;

        while (--i > -1) {
          if (_corProps[p]) {
            a = obj[props[i]];
            l = a.length - 1;

            for (j = 0; j < l; j++) {
              r = a[j + 1].da / _r2[j] + a[j].da / _r1[j] || 0;
              _r3[j] = (_r3[j] || 0) + r * r;
            }
          }
        }

        i = _r3.length;

        while (--i > -1) {
          _r3[i] = Math.sqrt(_r3[i]);
        }
      }

      i = props.length;
      j = quadratic ? 4 : 1;

      while (--i > -1) {
        p = props[i];
        a = obj[p];

        _calculateControlPoints(a, curviness, quadratic, basic, _corProps[p]); //this method requires that _parseAnchors() and _setSegmentRatios() ran first so that _r1, _r2, and _r3 values are populated for all properties


        if (seamless) {
          a.splice(0, j);
          a.splice(a.length - j, j);
        }
      }

      return obj;
    },
        _parseBezierData = function _parseBezierData(values, type, prepend) {
      type = type || "soft";
      var obj = {},
          inc = type === "cubic" ? 3 : 2,
          soft = type === "soft",
          props = [],
          a,
          b,
          c,
          d,
          cur,
          i,
          j,
          l,
          p,
          cnt,
          tmp;

      if (soft && prepend) {
        values = [prepend].concat(values);
      }

      if (values == null || values.length < inc + 1) {
        throw "invalid Bezier data";
      }

      for (p in values[0]) {
        props.push(p);
      }

      i = props.length;

      while (--i > -1) {
        p = props[i];
        obj[p] = cur = [];
        cnt = 0;
        l = values.length;

        for (j = 0; j < l; j++) {
          a = prepend == null ? values[j][p] : typeof (tmp = values[j][p]) === "string" && tmp.charAt(1) === "=" ? prepend[p] + Number(tmp.charAt(0) + tmp.substr(2)) : Number(tmp);
          if (soft) if (j > 1) if (j < l - 1) {
            cur[cnt++] = (a + cur[cnt - 2]) / 2;
          }
          cur[cnt++] = a;
        }

        l = cnt - inc + 1;
        cnt = 0;

        for (j = 0; j < l; j += inc) {
          a = cur[j];
          b = cur[j + 1];
          c = cur[j + 2];
          d = inc === 2 ? 0 : cur[j + 3];
          cur[cnt++] = tmp = inc === 3 ? new Segment(a, b, c, d) : new Segment(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
        }

        cur.length = cnt;
      }

      return obj;
    },
        _addCubicLengths = function _addCubicLengths(a, steps, resolution) {
      var inc = 1 / resolution,
          j = a.length,
          d,
          d1,
          s,
          da,
          ca,
          ba,
          p,
          i,
          inv,
          bez,
          index;

      while (--j > -1) {
        bez = a[j];
        s = bez.a;
        da = bez.d - s;
        ca = bez.c - s;
        ba = bez.b - s;
        d = d1 = 0;

        for (i = 1; i <= resolution; i++) {
          p = inc * i;
          inv = 1 - p;
          d = d1 - (d1 = (p * p * da + 3 * inv * (p * ca + inv * ba)) * p);
          index = j * resolution + i - 1;
          steps[index] = (steps[index] || 0) + d * d;
        }
      }
    },
        _parseLengthData = function _parseLengthData(obj, resolution) {
      resolution = resolution >> 0 || 6;
      var a = [],
          lengths = [],
          d = 0,
          total = 0,
          threshold = resolution - 1,
          segments = [],
          curLS = [],
          //current length segments array
      p,
          i,
          l,
          index;

      for (p in obj) {
        _addCubicLengths(obj[p], a, resolution);
      }

      l = a.length;

      for (i = 0; i < l; i++) {
        d += Math.sqrt(a[i]);
        index = i % resolution;
        curLS[index] = d;

        if (index === threshold) {
          total += d;
          index = i / resolution >> 0;
          segments[index] = curLS;
          lengths[index] = total;
          d = 0;
          curLS = [];
        }
      }

      return {
        length: total,
        lengths: lengths,
        segments: segments
      };
    },
        BezierPlugin = _gsScope._gsDefine.plugin({
      propName: "bezier",
      priority: -1,
      version: "1.3.8",
      API: 2,
      global: true,
      //gets called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
      init: function init(target, vars, tween) {
        this._target = target;

        if (vars instanceof Array) {
          vars = {
            values: vars
          };
        }

        this._func = {};
        this._mod = {};
        this._props = [];
        this._timeRes = vars.timeResolution == null ? 6 : parseInt(vars.timeResolution, 10);
        var values = vars.values || [],
            first = {},
            second = values[0],
            autoRotate = vars.autoRotate || tween.vars.orientToBezier,
            p,
            isFunc,
            i,
            j,
            prepend;
        this._autoRotate = autoRotate ? autoRotate instanceof Array ? autoRotate : [["x", "y", "rotation", autoRotate === true ? 0 : Number(autoRotate) || 0]] : null;

        for (p in second) {
          this._props.push(p);
        }

        i = this._props.length;

        while (--i > -1) {
          p = this._props[i];

          this._overwriteProps.push(p);

          isFunc = this._func[p] = typeof target[p] === "function";
          first[p] = !isFunc ? parseFloat(target[p]) : target[p.indexOf("set") || typeof target["get" + p.substr(3)] !== "function" ? p : "get" + p.substr(3)]();
          if (!prepend) if (first[p] !== values[0][p]) {
            prepend = first;
          }
        }

        this._beziers = vars.type !== "cubic" && vars.type !== "quadratic" && vars.type !== "soft" ? bezierThrough(values, isNaN(vars.curviness) ? 1 : vars.curviness, false, vars.type === "thruBasic", vars.correlate, prepend) : _parseBezierData(values, vars.type, first);
        this._segCount = this._beziers[p].length;

        if (this._timeRes) {
          var ld = _parseLengthData(this._beziers, this._timeRes);

          this._length = ld.length;
          this._lengths = ld.lengths;
          this._segments = ld.segments;
          this._l1 = this._li = this._s1 = this._si = 0;
          this._l2 = this._lengths[0];
          this._curSeg = this._segments[0];
          this._s2 = this._curSeg[0];
          this._prec = 1 / this._curSeg.length;
        }

        if (autoRotate = this._autoRotate) {
          this._initialRotations = [];

          if (!(autoRotate[0] instanceof Array)) {
            this._autoRotate = autoRotate = [autoRotate];
          }

          i = autoRotate.length;

          while (--i > -1) {
            for (j = 0; j < 3; j++) {
              p = autoRotate[i][j];
              this._func[p] = typeof target[p] === "function" ? target[p.indexOf("set") || typeof target["get" + p.substr(3)] !== "function" ? p : "get" + p.substr(3)] : false;
            }

            p = autoRotate[i][2];
            this._initialRotations[i] = (this._func[p] ? this._func[p].call(this._target) : this._target[p]) || 0;

            this._overwriteProps.push(p);
          }
        }

        this._startRatio = tween.vars.runBackwards ? 1 : 0; //we determine the starting ratio when the tween inits which is always 0 unless the tween has runBackwards:true (indicating it's a from() tween) in which case it's 1.

        return true;
      },
      //called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
      set: function set(v) {
        var segments = this._segCount,
            func = this._func,
            target = this._target,
            notStart = v !== this._startRatio,
            curIndex,
            inv,
            i,
            p,
            b,
            t,
            val,
            l,
            lengths,
            curSeg;

        if (!this._timeRes) {
          curIndex = v < 0 ? 0 : v >= 1 ? segments - 1 : segments * v >> 0;
          t = (v - curIndex * (1 / segments)) * segments;
        } else {
          lengths = this._lengths;
          curSeg = this._curSeg;
          v *= this._length;
          i = this._li; //find the appropriate segment (if the currently cached one isn't correct)

          if (v > this._l2 && i < segments - 1) {
            l = segments - 1;

            while (i < l && (this._l2 = lengths[++i]) <= v) {}

            this._l1 = lengths[i - 1];
            this._li = i;
            this._curSeg = curSeg = this._segments[i];
            this._s2 = curSeg[this._s1 = this._si = 0];
          } else if (v < this._l1 && i > 0) {
            while (i > 0 && (this._l1 = lengths[--i]) >= v) {}

            if (i === 0 && v < this._l1) {
              this._l1 = 0;
            } else {
              i++;
            }

            this._l2 = lengths[i];
            this._li = i;
            this._curSeg = curSeg = this._segments[i];
            this._s1 = curSeg[(this._si = curSeg.length - 1) - 1] || 0;
            this._s2 = curSeg[this._si];
          }

          curIndex = i; //now find the appropriate sub-segment (we split it into the number of pieces that was defined by "precision" and measured each one)

          v -= this._l1;
          i = this._si;

          if (v > this._s2 && i < curSeg.length - 1) {
            l = curSeg.length - 1;

            while (i < l && (this._s2 = curSeg[++i]) <= v) {}

            this._s1 = curSeg[i - 1];
            this._si = i;
          } else if (v < this._s1 && i > 0) {
            while (i > 0 && (this._s1 = curSeg[--i]) >= v) {}

            if (i === 0 && v < this._s1) {
              this._s1 = 0;
            } else {
              i++;
            }

            this._s2 = curSeg[i];
            this._si = i;
          }

          t = (i + (v - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
        }

        inv = 1 - t;
        i = this._props.length;

        while (--i > -1) {
          p = this._props[i];
          b = this._beziers[p][curIndex];
          val = (t * t * b.da + 3 * inv * (t * b.ca + inv * b.ba)) * t + b.a;

          if (this._mod[p]) {
            val = this._mod[p](val, target);
          }

          if (func[p]) {
            target[p](val);
          } else {
            target[p] = val;
          }
        }

        if (this._autoRotate) {
          var ar = this._autoRotate,
              b2,
              x1,
              y1,
              x2,
              y2,
              add,
              conv;
          i = ar.length;

          while (--i > -1) {
            p = ar[i][2];
            add = ar[i][3] || 0;
            conv = ar[i][4] === true ? 1 : _RAD2DEG;
            b = this._beziers[ar[i][0]];
            b2 = this._beziers[ar[i][1]];

            if (b && b2) {
              //in case one of the properties got overwritten.
              b = b[curIndex];
              b2 = b2[curIndex];
              x1 = b.a + (b.b - b.a) * t;
              x2 = b.b + (b.c - b.b) * t;
              x1 += (x2 - x1) * t;
              x2 += (b.c + (b.d - b.c) * t - x2) * t;
              y1 = b2.a + (b2.b - b2.a) * t;
              y2 = b2.b + (b2.c - b2.b) * t;
              y1 += (y2 - y1) * t;
              y2 += (b2.c + (b2.d - b2.c) * t - y2) * t;
              val = notStart ? Math.atan2(y2 - y1, x2 - x1) * conv + add : this._initialRotations[i];

              if (this._mod[p]) {
                val = this._mod[p](val, target); //for modProps
              }

              if (func[p]) {
                target[p](val);
              } else {
                target[p] = val;
              }
            }
          }
        }
      }
    }),
        p = BezierPlugin.prototype;

    BezierPlugin.bezierThrough = bezierThrough;
    BezierPlugin.cubicToQuadratic = cubicToQuadratic;
    BezierPlugin._autoCSS = true; //indicates that this plugin can be inserted into the "css" object using the autoCSS feature of TweenLite

    BezierPlugin.quadraticToCubic = function (a, b, c) {
      return new Segment(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
    };

    BezierPlugin._cssRegister = function () {
      var CSSPlugin = _globals.CSSPlugin;

      if (!CSSPlugin) {
        return;
      }

      var _internals = CSSPlugin._internals,
          _parseToProxy = _internals._parseToProxy,
          _setPluginRatio = _internals._setPluginRatio,
          CSSPropTween = _internals.CSSPropTween;

      _internals._registerComplexSpecialProp("bezier", {
        parser: function parser(t, e, prop, cssp, pt, plugin) {
          if (e instanceof Array) {
            e = {
              values: e
            };
          }

          plugin = new BezierPlugin();
          var values = e.values,
              l = values.length - 1,
              pluginValues = [],
              v = {},
              i,
              p,
              data;

          if (l < 0) {
            return pt;
          }

          for (i = 0; i <= l; i++) {
            data = _parseToProxy(t, values[i], cssp, pt, plugin, l !== i);
            pluginValues[i] = data.end;
          }

          for (p in e) {
            v[p] = e[p]; //duplicate the vars object because we need to alter some things which would cause problems if the user plans to reuse the same vars object for another tween.
          }

          v.values = pluginValues;
          pt = new CSSPropTween(t, "bezier", 0, 0, data.pt, 2);
          pt.data = data;
          pt.plugin = plugin;
          pt.setRatio = _setPluginRatio;

          if (v.autoRotate === 0) {
            v.autoRotate = true;
          }

          if (v.autoRotate && !(v.autoRotate instanceof Array)) {
            i = v.autoRotate === true ? 0 : Number(v.autoRotate);
            v.autoRotate = data.end.left != null ? [["left", "top", "rotation", i, false]] : data.end.x != null ? [["x", "y", "rotation", i, false]] : false;
          }

          if (v.autoRotate) {
            if (!cssp._transform) {
              cssp._enableTransforms(false);
            }

            data.autoRotate = cssp._target._gsTransform;
            data.proxy.rotation = data.autoRotate.rotation || 0;

            cssp._overwriteProps.push("rotation");
          }

          plugin._onInitTween(data.proxy, v, cssp._tween);

          return pt;
        }
      });
    };

    p._mod = function (lookup) {
      var op = this._overwriteProps,
          i = op.length,
          val;

      while (--i > -1) {
        val = lookup[op[i]];

        if (val && typeof val === "function") {
          this._mod[op[i]] = val;
        }
      }
    };

    p._kill = function (lookup) {
      var a = this._props,
          p,
          i;

      for (p in this._beziers) {
        if (p in lookup) {
          delete this._beziers[p];
          delete this._func[p];
          i = a.length;

          while (--i > -1) {
            if (a[i] === p) {
              a.splice(i, 1);
            }
          }
        }
      }

      a = this._autoRotate;

      if (a) {
        i = a.length;

        while (--i > -1) {
          if (lookup[a[i][2]]) {
            a.splice(i, 1);
          }
        }
      }

      return this._super._kill.call(this, lookup);
    };
  })();
  /*
   * ----------------------------------------------------------------
   * CSSPlugin
   * ----------------------------------------------------------------
   */


  _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (TweenPlugin, TweenLite) {
    /** @constructor **/
    var CSSPlugin = function CSSPlugin() {
      TweenPlugin.call(this, "css");
      this._overwriteProps.length = 0;
      this.setRatio = CSSPlugin.prototype.setRatio; //speed optimization (avoid prototype lookup on this "hot" method)
    },
        _globals = _gsScope._gsDefine.globals,
        _hasPriority,
        //turns true whenever a CSSPropTween instance is created that has a priority other than 0. This helps us discern whether or not we should spend the time organizing the linked list or not after a CSSPlugin's _onInitTween() method is called.
    _suffixMap,
        //we set this in _onInitTween() each time as a way to have a persistent variable we can use in other methods like _parse() without having to pass it around as a parameter and we keep _parse() decoupled from a particular CSSPlugin instance
    _cs,
        //computed style (we store this in a shared variable to conserve memory and make minification tighter
    _overwriteProps,
        //alias to the currently instantiating CSSPlugin's _overwriteProps array. We use this closure in order to avoid having to pass a reference around from method to method and aid in minification.
    _specialProps = {},
        p = CSSPlugin.prototype = new TweenPlugin("css");

    p.constructor = CSSPlugin;
    CSSPlugin.version = "2.0.2";
    CSSPlugin.API = 2;
    CSSPlugin.defaultTransformPerspective = 0;
    CSSPlugin.defaultSkewType = "compensated";
    CSSPlugin.defaultSmoothOrigin = true;
    p = "px"; //we'll reuse the "p" variable to keep file size down

    CSSPlugin.suffixMap = {
      top: p,
      right: p,
      bottom: p,
      left: p,
      width: p,
      height: p,
      fontSize: p,
      padding: p,
      margin: p,
      perspective: p,
      lineHeight: ""
    };

    var _numExp = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
        _relNumExp = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
        _valuesExp = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
        //finds all the values that begin with numbers or += or -= and then a number. Includes suffixes. We use this to split complex values apart like "1px 5px 20px rgb(255,102,51)"
    _NaNExp = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
        //also allows scientific notation and doesn't kill the leading -/+ in -= and +=
    _suffixExp = /(?:\d|\-|\+|=|#|\.)*/g,
        _opacityExp = /opacity *= *([^)]*)/i,
        _opacityValExp = /opacity:([^;]*)/i,
        _alphaFilterExp = /alpha\(opacity *=.+?\)/i,
        _rgbhslExp = /^(rgb|hsl)/,
        _capsExp = /([A-Z])/g,
        _camelExp = /-([a-z])/gi,
        _urlExp = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
        //for pulling out urls from url(...) or url("...") strings (some browsers wrap urls in quotes, some don't when reporting things like backgroundImage)
    _camelFunc = function _camelFunc(s, g) {
      return g.toUpperCase();
    },
        _horizExp = /(?:Left|Right|Width)/i,
        _ieGetMatrixExp = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
        _ieSetMatrixExp = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
        _commasOutsideParenExp = /,(?=[^\)]*(?:\(|$))/gi,
        //finds any commas that are not within parenthesis
    _complexExp = /[\s,\(]/i,
        //for testing a string to find if it has a space, comma, or open parenthesis (clues that it's a complex value)
    _DEG2RAD = Math.PI / 180,
        _RAD2DEG = 180 / Math.PI,
        _forcePT = {},
        _dummyElement = {
      style: {}
    },
        _doc = _gsScope.document || {
      createElement: function createElement() {
        return _dummyElement;
      }
    },
        _createElement = function _createElement(type, ns) {
      return _doc.createElementNS ? _doc.createElementNS(ns || "http://www.w3.org/1999/xhtml", type) : _doc.createElement(type);
    },
        _tempDiv = _createElement("div"),
        _tempImg = _createElement("img"),
        _internals = CSSPlugin._internals = {
      _specialProps: _specialProps
    },
        //provides a hook to a few internal methods that we need to access from inside other plugins
    _agent = (_gsScope.navigator || {}).userAgent || "",
        _autoRound,
        _reqSafariFix,
        //we won't apply the Safari transform fix until we actually come across a tween that affects a transform property (to maintain best performance).
    _isSafari,
        _isFirefox,
        //Firefox has a bug that causes 3D transformed elements to randomly disappear unless a repaint is forced after each update on each element.
    _isSafariLT6,
        //Safari (and Android 4 which uses a flavor of Safari) has a bug that prevents changes to "top" and "left" properties from rendering properly if changed on the same frame as a transform UNLESS we set the element's WebkitBackfaceVisibility to hidden (weird, I know). Doing this for Android 3 and earlier seems to actually cause other problems, though (fun!)
    _ieVers,
        _supportsOpacity = function () {
      //we set _isSafari, _ieVers, _isFirefox, and _supportsOpacity all in one function here to reduce file size slightly, especially in the minified version.
      var i = _agent.indexOf("Android"),
          a = _createElement("a");

      _isSafari = _agent.indexOf("Safari") !== -1 && _agent.indexOf("Chrome") === -1 && (i === -1 || parseFloat(_agent.substr(i + 8, 2)) > 3);
      _isSafariLT6 = _isSafari && parseFloat(_agent.substr(_agent.indexOf("Version/") + 8, 2)) < 6;
      _isFirefox = _agent.indexOf("Firefox") !== -1;

      if (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(_agent) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(_agent)) {
        _ieVers = parseFloat(RegExp.$1);
      }

      if (!a) {
        return false;
      }

      a.style.cssText = "top:1px;opacity:.55;";
      return /^0.55/.test(a.style.opacity);
    }(),
        _getIEOpacity = function _getIEOpacity(v) {
      return _opacityExp.test(typeof v === "string" ? v : (v.currentStyle ? v.currentStyle.filter : v.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
    },
        _log = function _log(s) {
      //for logging messages, but in a way that won't throw errors in old versions of IE.
      if (_gsScope.console) {
        console.log(s);
      }
    },
        _target,
        //when initting a CSSPlugin, we set this variable so that we can access it from within many other functions without having to pass it around as params
    _index,
        //when initting a CSSPlugin, we set this variable so that we can access it from within many other functions without having to pass it around as params
    _prefixCSS = "",
        //the non-camelCase vendor prefix like "-o-", "-moz-", "-ms-", or "-webkit-"
    _prefix = "",
        //camelCase vendor prefix like "O", "ms", "Webkit", or "Moz".
    // @private feed in a camelCase property name like "transform" and it will check to see if it is valid as-is or if it needs a vendor prefix. It returns the corrected camelCase property name (i.e. "WebkitTransform" or "MozTransform" or "transform" or null if no such property is found, like if the browser is IE8 or before, "transform" won't be found at all)
    _checkPropPrefix = function _checkPropPrefix(p, e) {
      e = e || _tempDiv;
      var s = e.style,
          a,
          i;

      if (s[p] !== undefined) {
        return p;
      }

      p = p.charAt(0).toUpperCase() + p.substr(1);
      a = ["O", "Moz", "ms", "Ms", "Webkit"];
      i = 5;

      while (--i > -1 && s[a[i] + p] === undefined) {}

      if (i >= 0) {
        _prefix = i === 3 ? "ms" : a[i];
        _prefixCSS = "-" + _prefix.toLowerCase() + "-";
        return _prefix + p;
      }

      return null;
    },
        _getComputedStyle = (typeof window !== "undefined" ? window : _doc.defaultView || {
      getComputedStyle: function getComputedStyle() {}
    }).getComputedStyle,

    /**
     * @private Returns the css style for a particular property of an element. For example, to get whatever the current "left" css value for an element with an ID of "myElement", you could do:
     * var currentLeft = CSSPlugin.getStyle( document.getElementById("myElement"), "left");
     *
     * @param {!Object} t Target element whose style property you want to query
     * @param {!string} p Property name (like "left" or "top" or "marginTop", etc.)
     * @param {Object=} cs Computed style object. This just provides a way to speed processing if you're going to get several properties on the same element in quick succession - you can reuse the result of the getComputedStyle() call.
     * @param {boolean=} calc If true, the value will not be read directly from the element's "style" property (if it exists there), but instead the getComputedStyle() result will be used. This can be useful when you want to ensure that the browser itself is interpreting the value.
     * @param {string=} dflt Default value that should be returned in the place of null, "none", "auto" or "auto auto".
     * @return {?string} The current property value
     */
    _getStyle = CSSPlugin.getStyle = function (t, p, cs, calc, dflt) {
      var rv;
      if (!_supportsOpacity) if (p === "opacity") {
        //several versions of IE don't use the standard "opacity" property - they use things like filter:alpha(opacity=50), so we parse that here.
        return _getIEOpacity(t);
      }

      if (!calc && t.style[p]) {
        rv = t.style[p];
      } else if (cs = cs || _getComputedStyle(t)) {
        rv = cs[p] || cs.getPropertyValue(p) || cs.getPropertyValue(p.replace(_capsExp, "-$1").toLowerCase());
      } else if (t.currentStyle) {
        rv = t.currentStyle[p];
      }

      return dflt != null && (!rv || rv === "none" || rv === "auto" || rv === "auto auto") ? dflt : rv;
    },

    /**
     * @private Pass the target element, the property name, the numeric value, and the suffix (like "%", "em", "px", etc.) and it will spit back the equivalent pixel number.
     * @param {!Object} t Target element
     * @param {!string} p Property name (like "left", "top", "marginLeft", etc.)
     * @param {!number} v Value
     * @param {string=} sfx Suffix (like "px" or "%" or "em")
     * @param {boolean=} recurse If true, the call is a recursive one. In some browsers (like IE7/8), occasionally the value isn't accurately reported initially, but if we run the function again it will take effect.
     * @return {number} value in pixels
     */
    _convertToPixels = _internals.convertToPixels = function (t, p, v, sfx, recurse) {
      if (sfx === "px" || !sfx && p !== "lineHeight") {
        return v;
      }

      if (sfx === "auto" || !v) {
        return 0;
      }

      var horiz = _horizExp.test(p),
          node = t,
          style = _tempDiv.style,
          neg = v < 0,
          precise = v === 1,
          pix,
          cache,
          time;

      if (neg) {
        v = -v;
      }

      if (precise) {
        v *= 100;
      }

      if (p === "lineHeight" && !sfx) {
        //special case of when a simple lineHeight (without a unit) is used. Set it to the value, read back the computed value, and then revert.
        cache = _getComputedStyle(t).lineHeight;
        t.style.lineHeight = v;
        pix = parseFloat(_getComputedStyle(t).lineHeight);
        t.style.lineHeight = cache;
      } else if (sfx === "%" && p.indexOf("border") !== -1) {
        pix = v / 100 * (horiz ? t.clientWidth : t.clientHeight);
      } else {
        style.cssText = "border:0 solid red;position:" + _getStyle(t, "position") + ";line-height:0;";

        if (sfx === "%" || !node.appendChild || sfx.charAt(0) === "v" || sfx === "rem") {
          node = t.parentNode || _doc.body;

          if (_getStyle(node, "display").indexOf("flex") !== -1) {
            //Edge and IE11 have a bug that causes offsetWidth to report as 0 if the container has display:flex and the child is position:relative. Switching to position: absolute solves it.
            style.position = "absolute";
          }

          cache = node._gsCache;
          time = TweenLite.ticker.frame;

          if (cache && horiz && cache.time === time) {
            //performance optimization: we record the width of elements along with the ticker frame so that we can quickly get it again on the same tick (seems relatively safe to assume it wouldn't change on the same tick)
            return cache.width * v / 100;
          }

          style[horiz ? "width" : "height"] = v + sfx;
        } else {
          style[horiz ? "borderLeftWidth" : "borderTopWidth"] = v + sfx;
        }

        node.appendChild(_tempDiv);
        pix = parseFloat(_tempDiv[horiz ? "offsetWidth" : "offsetHeight"]);
        node.removeChild(_tempDiv);

        if (horiz && sfx === "%" && CSSPlugin.cacheWidths !== false) {
          cache = node._gsCache = node._gsCache || {};
          cache.time = time;
          cache.width = pix / v * 100;
        }

        if (pix === 0 && !recurse) {
          pix = _convertToPixels(t, p, v, sfx, true);
        }
      }

      if (precise) {
        pix /= 100;
      }

      return neg ? -pix : pix;
    },
        _calculateOffset = _internals.calculateOffset = function (t, p, cs) {
      //for figuring out "top" or "left" in px when it's "auto". We need to factor in margin with the offsetLeft/offsetTop
      if (_getStyle(t, "position", cs) !== "absolute") {
        return 0;
      }

      var dim = p === "left" ? "Left" : "Top",
          v = _getStyle(t, "margin" + dim, cs);

      return t["offset" + dim] - (_convertToPixels(t, p, parseFloat(v), v.replace(_suffixExp, "")) || 0);
    },
        // @private returns at object containing ALL of the style properties in camelCase and their associated values.
    _getAllStyles = function _getAllStyles(t, cs) {
      var s = {},
          i,
          tr,
          p;

      if (cs = cs || _getComputedStyle(t, null)) {
        if (i = cs.length) {
          while (--i > -1) {
            p = cs[i];

            if (p.indexOf("-transform") === -1 || _transformPropCSS === p) {
              //Some webkit browsers duplicate transform values, one non-prefixed and one prefixed ("transform" and "WebkitTransform"), so we must weed out the extra one here.
              s[p.replace(_camelExp, _camelFunc)] = cs.getPropertyValue(p);
            }
          }
        } else {
          //some browsers behave differently - cs.length is always 0, so we must do a for...in loop.
          for (i in cs) {
            if (i.indexOf("Transform") === -1 || _transformProp === i) {
              //Some webkit browsers duplicate transform values, one non-prefixed and one prefixed ("transform" and "WebkitTransform"), so we must weed out the extra one here.
              s[i] = cs[i];
            }
          }
        }
      } else if (cs = t.currentStyle || t.style) {
        for (i in cs) {
          if (typeof i === "string" && s[i] === undefined) {
            s[i.replace(_camelExp, _camelFunc)] = cs[i];
          }
        }
      }

      if (!_supportsOpacity) {
        s.opacity = _getIEOpacity(t);
      }

      tr = _getTransform(t, cs, false);
      s.rotation = tr.rotation;
      s.skewX = tr.skewX;
      s.scaleX = tr.scaleX;
      s.scaleY = tr.scaleY;
      s.x = tr.x;
      s.y = tr.y;

      if (_supports3D) {
        s.z = tr.z;
        s.rotationX = tr.rotationX;
        s.rotationY = tr.rotationY;
        s.scaleZ = tr.scaleZ;
      }

      if (s.filters) {
        delete s.filters;
      }

      return s;
    },
        // @private analyzes two style objects (as returned by _getAllStyles()) and only looks for differences between them that contain tweenable values (like a number or color). It returns an object with a "difs" property which refers to an object containing only those isolated properties and values for tweening, and a "firstMPT" property which refers to the first MiniPropTween instance in a linked list that recorded all the starting values of the different properties so that we can revert to them at the end or beginning of the tween - we don't want the cascading to get messed up. The forceLookup parameter is an optional generic object with properties that should be forced into the results - this is necessary for className tweens that are overwriting others because imagine a scenario where a rollover/rollout adds/removes a class and the user swipes the mouse over the target SUPER fast, thus nothing actually changed yet and the subsequent comparison of the properties would indicate they match (especially when px rounding is taken into consideration), thus no tweening is necessary even though it SHOULD tween and remove those properties after the tween (otherwise the inline styles will contaminate things). See the className SpecialProp code for details.
    _cssDif = function _cssDif(t, s1, s2, vars, forceLookup) {
      var difs = {},
          style = t.style,
          val,
          p,
          mpt;

      for (p in s2) {
        if (p !== "cssText") if (p !== "length") if (isNaN(p)) if (s1[p] !== (val = s2[p]) || forceLookup && forceLookup[p]) if (p.indexOf("Origin") === -1) if (typeof val === "number" || typeof val === "string") {
          difs[p] = val === "auto" && (p === "left" || p === "top") ? _calculateOffset(t, p) : (val === "" || val === "auto" || val === "none") && typeof s1[p] === "string" && s1[p].replace(_NaNExp, "") !== "" ? 0 : val; //if the ending value is defaulting ("" or "auto"), we check the starting value and if it can be parsed into a number (a string which could have a suffix too, like 700px), then we swap in 0 for "" or "auto" so that things actually tween.

          if (style[p] !== undefined) {
            //for className tweens, we must remember which properties already existed inline - the ones that didn't should be removed when the tween isn't in progress because they were only introduced to facilitate the transition between classes.
            mpt = new MiniPropTween(style, p, style[p], mpt);
          }
        }
      }

      if (vars) {
        for (p in vars) {
          //copy properties (except className)
          if (p !== "className") {
            difs[p] = vars[p];
          }
        }
      }

      return {
        difs: difs,
        firstMPT: mpt
      };
    },
        _dimensions = {
      width: ["Left", "Right"],
      height: ["Top", "Bottom"]
    },
        _margins = ["marginLeft", "marginRight", "marginTop", "marginBottom"],

    /**
     * @private Gets the width or height of an element
     * @param {!Object} t Target element
     * @param {!string} p Property name ("width" or "height")
     * @param {Object=} cs Computed style object (if one exists). Just a speed optimization.
     * @return {number} Dimension (in pixels)
     */
    _getDimension = function _getDimension(t, p, cs) {
      if ((t.nodeName + "").toLowerCase() === "svg") {
        //Chrome no longer supports offsetWidth/offsetHeight on SVG elements.
        return (cs || _getComputedStyle(t))[p] || 0;
      } else if (t.getCTM && _isSVG(t)) {
        return t.getBBox()[p] || 0;
      }

      var v = parseFloat(p === "width" ? t.offsetWidth : t.offsetHeight),
          a = _dimensions[p],
          i = a.length;
      cs = cs || _getComputedStyle(t, null);

      while (--i > -1) {
        v -= parseFloat(_getStyle(t, "padding" + a[i], cs, true)) || 0;
        v -= parseFloat(_getStyle(t, "border" + a[i] + "Width", cs, true)) || 0;
      }

      return v;
    },
        // @private Parses position-related complex strings like "top left" or "50px 10px" or "70% 20%", etc. which are used for things like transformOrigin or backgroundPosition. Optionally decorates a supplied object (recObj) with the following properties: "ox" (offsetX), "oy" (offsetY), "oxp" (if true, "ox" is a percentage not a pixel value), and "oxy" (if true, "oy" is a percentage not a pixel value)
    _parsePosition = function _parsePosition(v, recObj) {
      if (v === "contain" || v === "auto" || v === "auto auto") {
        //note: Firefox uses "auto auto" as default whereas Chrome uses "auto".
        return v + " ";
      }

      if (v == null || v === "") {
        v = "0 0";
      }

      var a = v.split(" "),
          x = v.indexOf("left") !== -1 ? "0%" : v.indexOf("right") !== -1 ? "100%" : a[0],
          y = v.indexOf("top") !== -1 ? "0%" : v.indexOf("bottom") !== -1 ? "100%" : a[1],
          i;

      if (a.length > 3 && !recObj) {
        //multiple positions
        a = v.split(", ").join(",").split(",");
        v = [];

        for (i = 0; i < a.length; i++) {
          v.push(_parsePosition(a[i]));
        }

        return v.join(",");
      }

      if (y == null) {
        y = x === "center" ? "50%" : "0";
      } else if (y === "center") {
        y = "50%";
      }

      if (x === "center" || isNaN(parseFloat(x)) && (x + "").indexOf("=") === -1) {
        //remember, the user could flip-flop the values and say "bottom center" or "center bottom", etc. "center" is ambiguous because it could be used to describe horizontal or vertical, hence the isNaN(). If there's an "=" sign in the value, it's relative.
        x = "50%";
      }

      v = x + " " + y + (a.length > 2 ? " " + a[2] : "");

      if (recObj) {
        recObj.oxp = x.indexOf("%") !== -1;
        recObj.oyp = y.indexOf("%") !== -1;
        recObj.oxr = x.charAt(1) === "=";
        recObj.oyr = y.charAt(1) === "=";
        recObj.ox = parseFloat(x.replace(_NaNExp, ""));
        recObj.oy = parseFloat(y.replace(_NaNExp, ""));
        recObj.v = v;
      }

      return recObj || v;
    },

    /**
     * @private Takes an ending value (typically a string, but can be a number) and a starting value and returns the change between the two, looking for relative value indicators like += and -= and it also ignores suffixes (but make sure the ending value starts with a number or +=/-= and that the starting value is a NUMBER!)
     * @param {(number|string)} e End value which is typically a string, but could be a number
     * @param {(number|string)} b Beginning value which is typically a string but could be a number
     * @return {number} Amount of change between the beginning and ending values (relative values that have a "+=" or "-=" are recognized)
     */
    _parseChange = function _parseChange(e, b) {
      if (typeof e === "function") {
        e = e(_index, _target);
      }

      return typeof e === "string" && e.charAt(1) === "=" ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(b) || 0;
    },

    /**
     * @private Takes a value and a default number, checks if the value is relative, null, or numeric and spits back a normalized number accordingly. Primarily used in the _parseTransform() function.
     * @param {Object} v Value to be parsed
     * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
     * @return {number} Parsed value
     */
    _parseVal = function _parseVal(v, d) {
      if (typeof v === "function") {
        v = v(_index, _target);
      }

      var isRelative = typeof v === "string" && v.charAt(1) === "=";

      if (typeof v === "string" && v.charAt(v.length - 2) === "v") {
        //convert vw and vh into px-equivalents.
        v = (isRelative ? v.substr(0, 2) : 0) + window["inner" + (v.substr(-2) === "vh" ? "Height" : "Width")] * (parseFloat(isRelative ? v.substr(2) : v) / 100);
      }

      return v == null ? d : isRelative ? parseInt(v.charAt(0) + "1", 10) * parseFloat(v.substr(2)) + d : parseFloat(v) || 0;
    },

    /**
     * @private Translates strings like "40deg" or "40" or 40rad" or "+=40deg" or "270_short" or "-90_cw" or "+=45_ccw" to a numeric radian angle. Of course a starting/default value must be fed in too so that relative values can be calculated properly.
     * @param {Object} v Value to be parsed
     * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
     * @param {string=} p property name for directionalEnd (optional - only used when the parsed value is directional ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation). Property name would be "rotation", "rotationX", or "rotationY"
     * @param {Object=} directionalEnd An object that will store the raw end values for directional angles ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation.
     * @return {number} parsed angle in radians
     */
    _parseAngle = function _parseAngle(v, d, p, directionalEnd) {
      var min = 0.000001,
          cap,
          split,
          dif,
          result,
          isRelative;

      if (typeof v === "function") {
        v = v(_index, _target);
      }

      if (v == null) {
        result = d;
      } else if (typeof v === "number") {
        result = v;
      } else {
        cap = 360;
        split = v.split("_");
        isRelative = v.charAt(1) === "=";
        dif = (isRelative ? parseInt(v.charAt(0) + "1", 10) * parseFloat(split[0].substr(2)) : parseFloat(split[0])) * (v.indexOf("rad") === -1 ? 1 : _RAD2DEG) - (isRelative ? 0 : d);

        if (split.length) {
          if (directionalEnd) {
            directionalEnd[p] = d + dif;
          }

          if (v.indexOf("short") !== -1) {
            dif = dif % cap;

            if (dif !== dif % (cap / 2)) {
              dif = dif < 0 ? dif + cap : dif - cap;
            }
          }

          if (v.indexOf("_cw") !== -1 && dif < 0) {
            dif = (dif + cap * 9999999999) % cap - (dif / cap | 0) * cap;
          } else if (v.indexOf("ccw") !== -1 && dif > 0) {
            dif = (dif - cap * 9999999999) % cap - (dif / cap | 0) * cap;
          }
        }

        result = d + dif;
      }

      if (result < min && result > -min) {
        result = 0;
      }

      return result;
    },
        _colorLookup = {
      aqua: [0, 255, 255],
      lime: [0, 255, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, 255],
      navy: [0, 0, 128],
      white: [255, 255, 255],
      fuchsia: [255, 0, 255],
      olive: [128, 128, 0],
      yellow: [255, 255, 0],
      orange: [255, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [255, 0, 0],
      pink: [255, 192, 203],
      cyan: [0, 255, 255],
      transparent: [255, 255, 255, 0]
    },
        _hue = function _hue(h, m1, m2) {
      h = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
      return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * 255 + 0.5 | 0;
    },

    /**
     * @private Parses a color (like #9F0, #FF9900, rgb(255,51,153) or hsl(108, 50%, 10%)) into an array with 3 elements for red, green, and blue or if toHSL parameter is true, it will populate the array with hue, saturation, and lightness values. If a relative value is found in an hsl() or hsla() string, it will preserve those relative prefixes and all the values in the array will be strings instead of numbers (in all other cases it will be populated with numbers).
     * @param {(string|number)} v The value the should be parsed which could be a string like #9F0 or rgb(255,102,51) or rgba(255,0,0,0.5) or it could be a number like 0xFF00CC or even a named color like red, blue, purple, etc.
     * @param {(boolean)} toHSL If true, an hsl() or hsla() value will be returned instead of rgb() or rgba()
     * @return {Array.<number>} An array containing red, green, and blue (and optionally alpha) in that order, or if the toHSL parameter was true, the array will contain hue, saturation and lightness (and optionally alpha) in that order. Always numbers unless there's a relative prefix found in an hsl() or hsla() string and toHSL is true.
     */
    _parseColor = CSSPlugin.parseColor = function (v, toHSL) {
      var a, r, g, b, h, s, l, max, min, d, wasHSL;

      if (!v) {
        a = _colorLookup.black;
      } else if (typeof v === "number") {
        a = [v >> 16, v >> 8 & 255, v & 255];
      } else {
        if (v.charAt(v.length - 1) === ",") {
          //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
          v = v.substr(0, v.length - 1);
        }

        if (_colorLookup[v]) {
          a = _colorLookup[v];
        } else if (v.charAt(0) === "#") {
          if (v.length === 4) {
            //for shorthand like #9F0
            r = v.charAt(1);
            g = v.charAt(2);
            b = v.charAt(3);
            v = "#" + r + r + g + g + b + b;
          }

          v = parseInt(v.substr(1), 16);
          a = [v >> 16, v >> 8 & 255, v & 255];
        } else if (v.substr(0, 3) === "hsl") {
          a = wasHSL = v.match(_numExp);

          if (!toHSL) {
            h = Number(a[0]) % 360 / 360;
            s = Number(a[1]) / 100;
            l = Number(a[2]) / 100;
            g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
            r = l * 2 - g;

            if (a.length > 3) {
              a[3] = Number(a[3]);
            }

            a[0] = _hue(h + 1 / 3, r, g);
            a[1] = _hue(h, r, g);
            a[2] = _hue(h - 1 / 3, r, g);
          } else if (v.indexOf("=") !== -1) {
            //if relative values are found, just return the raw strings with the relative prefixes in place.
            return v.match(_relNumExp);
          }
        } else {
          a = v.match(_numExp) || _colorLookup.transparent;
        }

        a[0] = Number(a[0]);
        a[1] = Number(a[1]);
        a[2] = Number(a[2]);

        if (a.length > 3) {
          a[3] = Number(a[3]);
        }
      }

      if (toHSL && !wasHSL) {
        r = a[0] / 255;
        g = a[1] / 255;
        b = a[2] / 255;
        max = Math.max(r, g, b);
        min = Math.min(r, g, b);
        l = (max + min) / 2;

        if (max === min) {
          h = s = 0;
        } else {
          d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
          h *= 60;
        }

        a[0] = h + 0.5 | 0;
        a[1] = s * 100 + 0.5 | 0;
        a[2] = l * 100 + 0.5 | 0;
      }

      return a;
    },
        _formatColors = function _formatColors(s, toHSL) {
      var colors = s.match(_colorExp) || [],
          charIndex = 0,
          parsed = "",
          i,
          color,
          temp;

      if (!colors.length) {
        return s;
      }

      for (i = 0; i < colors.length; i++) {
        color = colors[i];
        temp = s.substr(charIndex, s.indexOf(color, charIndex) - charIndex);
        charIndex += temp.length + color.length;
        color = _parseColor(color, toHSL);

        if (color.length === 3) {
          color.push(1);
        }

        parsed += temp + (toHSL ? "hsla(" + color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : "rgba(" + color.join(",")) + ")";
      }

      return parsed + s.substr(charIndex);
    },
        _colorExp = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b"; //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.


    for (p in _colorLookup) {
      _colorExp += "|" + p + "\\b";
    }

    _colorExp = new RegExp(_colorExp + ")", "gi");

    CSSPlugin.colorStringFilter = function (a) {
      var combined = a[0] + " " + a[1],
          toHSL;

      if (_colorExp.test(combined)) {
        toHSL = combined.indexOf("hsl(") !== -1 || combined.indexOf("hsla(") !== -1;
        a[0] = _formatColors(a[0], toHSL);
        a[1] = _formatColors(a[1], toHSL);
      }

      _colorExp.lastIndex = 0;
    };

    if (!TweenLite.defaultStringFilter) {
      TweenLite.defaultStringFilter = CSSPlugin.colorStringFilter;
    }
    /**
     * @private Returns a formatter function that handles taking a string (or number in some cases) and returning a consistently formatted one in terms of delimiters, quantity of values, etc. For example, we may get boxShadow values defined as "0px red" or "0px 0px 10px rgb(255,0,0)" or "0px 0px 20px 20px #F00" and we need to ensure that what we get back is described with 4 numbers and a color. This allows us to feed it into the _parseComplex() method and split the values up appropriately. The neat thing about this _getFormatter() function is that the dflt defines a pattern as well as a default, so for example, _getFormatter("0px 0px 0px 0px #777", true) not only sets the default as 0px for all distances and #777 for the color, but also sets the pattern such that 4 numbers and a color will always get returned.
     * @param {!string} dflt The default value and pattern to follow. So "0px 0px 0px 0px #777" will ensure that 4 numbers and a color will always get returned.
     * @param {boolean=} clr If true, the values should be searched for color-related data. For example, boxShadow values typically contain a color whereas borderRadius don't.
     * @param {boolean=} collapsible If true, the value is a top/left/right/bottom style one that acts like margin or padding, where if only one value is received, it's used for all 4; if 2 are received, the first is duplicated for 3rd (bottom) and the 2nd is duplicated for the 4th spot (left), etc.
     * @return {Function} formatter function
     */


    var _getFormatter = function _getFormatter(dflt, clr, collapsible, multi) {
      if (dflt == null) {
        return function (v) {
          return v;
        };
      }

      var dColor = clr ? (dflt.match(_colorExp) || [""])[0] : "",
          dVals = dflt.split(dColor).join("").match(_valuesExp) || [],
          pfx = dflt.substr(0, dflt.indexOf(dVals[0])),
          sfx = dflt.charAt(dflt.length - 1) === ")" ? ")" : "",
          delim = dflt.indexOf(" ") !== -1 ? " " : ",",
          numVals = dVals.length,
          dSfx = numVals > 0 ? dVals[0].replace(_numExp, "") : "",
          _formatter2;

      if (!numVals) {
        return function (v) {
          return v;
        };
      }

      if (clr) {
        _formatter2 = function formatter(v) {
          var color, vals, i, a;

          if (typeof v === "number") {
            v += dSfx;
          } else if (multi && _commasOutsideParenExp.test(v)) {
            a = v.replace(_commasOutsideParenExp, "|").split("|");

            for (i = 0; i < a.length; i++) {
              a[i] = _formatter2(a[i]);
            }

            return a.join(",");
          }

          color = (v.match(_colorExp) || [dColor])[0];
          vals = v.split(color).join("").match(_valuesExp) || [];
          i = vals.length;

          if (numVals > i--) {
            while (++i < numVals) {
              vals[i] = collapsible ? vals[(i - 1) / 2 | 0] : dVals[i];
            }
          }

          return pfx + vals.join(delim) + delim + color + sfx + (v.indexOf("inset") !== -1 ? " inset" : "");
        };

        return _formatter2;
      }

      _formatter2 = function _formatter(v) {
        var vals, a, i;

        if (typeof v === "number") {
          v += dSfx;
        } else if (multi && _commasOutsideParenExp.test(v)) {
          a = v.replace(_commasOutsideParenExp, "|").split("|");

          for (i = 0; i < a.length; i++) {
            a[i] = _formatter2(a[i]);
          }

          return a.join(",");
        }

        vals = v.match(_valuesExp) || [];
        i = vals.length;

        if (numVals > i--) {
          while (++i < numVals) {
            vals[i] = collapsible ? vals[(i - 1) / 2 | 0] : dVals[i];
          }
        }

        return pfx + vals.join(delim) + sfx;
      };

      return _formatter2;
    },

    /**
     * @private returns a formatter function that's used for edge-related values like marginTop, marginLeft, paddingBottom, paddingRight, etc. Just pass a comma-delimited list of property names related to the edges.
     * @param {!string} props a comma-delimited list of property names in order from top to left, like "marginTop,marginRight,marginBottom,marginLeft"
     * @return {Function} a formatter function
     */
    _getEdgeParser = function _getEdgeParser(props) {
      props = props.split(",");
      return function (t, e, p, cssp, pt, plugin, vars) {
        var a = (e + "").split(" "),
            i;
        vars = {};

        for (i = 0; i < 4; i++) {
          vars[props[i]] = a[i] = a[i] || a[(i - 1) / 2 >> 0];
        }

        return cssp.parse(t, vars, pt, plugin);
      };
    },
        // @private used when other plugins must tween values first, like BezierPlugin or ThrowPropsPlugin, etc. That plugin's setRatio() gets called first so that the values are updated, and then we loop through the MiniPropTweens which handle copying the values into their appropriate slots so that they can then be applied correctly in the main CSSPlugin setRatio() method. Remember, we typically create a proxy object that has a bunch of uniquely-named properties that we feed to the sub-plugin and it does its magic normally, and then we must interpret those values and apply them to the css because often numbers must get combined/concatenated, suffixes added, etc. to work with css, like boxShadow could have 4 values plus a color.
    _setPluginRatio = _internals._setPluginRatio = function (v) {
      this.plugin.setRatio(v);
      var d = this.data,
          proxy = d.proxy,
          mpt = d.firstMPT,
          min = 0.000001,
          val,
          pt,
          i,
          str,
          p;

      while (mpt) {
        val = proxy[mpt.v];

        if (mpt.r) {
          val = mpt.r(val);
        } else if (val < min && val > -min) {
          val = 0;
        }

        mpt.t[mpt.p] = val;
        mpt = mpt._next;
      }

      if (d.autoRotate) {
        d.autoRotate.rotation = d.mod ? d.mod.call(this._tween, proxy.rotation, this.t, this._tween) : proxy.rotation; //special case for ModifyPlugin to hook into an auto-rotating bezier
      } //at the end, we must set the CSSPropTween's "e" (end) value dynamically here because that's what is used in the final setRatio() method. Same for "b" at the beginning.


      if (v === 1 || v === 0) {
        mpt = d.firstMPT;
        p = v === 1 ? "e" : "b";

        while (mpt) {
          pt = mpt.t;

          if (!pt.type) {
            pt[p] = pt.s + pt.xs0;
          } else if (pt.type === 1) {
            str = pt.xs0 + pt.s + pt.xs1;

            for (i = 1; i < pt.l; i++) {
              str += pt["xn" + i] + pt["xs" + (i + 1)];
            }

            pt[p] = str;
          }

          mpt = mpt._next;
        }
      }
    },

    /**
     * @private @constructor Used by a few SpecialProps to hold important values for proxies. For example, _parseToProxy() creates a MiniPropTween instance for each property that must get tweened on the proxy, and we record the original property name as well as the unique one we create for the proxy, plus whether or not the value needs to be rounded plus the original value.
     * @param {!Object} t target object whose property we're tweening (often a CSSPropTween)
     * @param {!string} p property name
     * @param {(number|string|object)} v value
     * @param {MiniPropTween=} next next MiniPropTween in the linked list
     * @param {boolean=} r if true, the tweened value should be rounded to the nearest integer
     */
    MiniPropTween = function MiniPropTween(t, p, v, next, r) {
      this.t = t;
      this.p = p;
      this.v = v;
      this.r = r;

      if (next) {
        next._prev = this;
        this._next = next;
      }
    },

    /**
     * @private Most other plugins (like BezierPlugin and ThrowPropsPlugin and others) can only tween numeric values, but CSSPlugin must accommodate special values that have a bunch of extra data (like a suffix or strings between numeric values, etc.). For example, boxShadow has values like "10px 10px 20px 30px rgb(255,0,0)" which would utterly confuse other plugins. This method allows us to split that data apart and grab only the numeric data and attach it to uniquely-named properties of a generic proxy object ({}) so that we can feed that to virtually any plugin to have the numbers tweened. However, we must also keep track of which properties from the proxy go with which CSSPropTween values and instances. So we create a linked list of MiniPropTweens. Each one records a target (the original CSSPropTween), property (like "s" or "xn1" or "xn2") that we're tweening and the unique property name that was used for the proxy (like "boxShadow_xn1" and "boxShadow_xn2") and whether or not they need to be rounded. That way, in the _setPluginRatio() method we can simply copy the values over from the proxy to the CSSPropTween instance(s). Then, when the main CSSPlugin setRatio() method runs and applies the CSSPropTween values accordingly, they're updated nicely. So the external plugin tweens the numbers, _setPluginRatio() copies them over, and setRatio() acts normally, applying css-specific values to the element.
     * This method returns an object that has the following properties:
     *  - proxy: a generic object containing the starting values for all the properties that will be tweened by the external plugin.  This is what we feed to the external _onInitTween() as the target
     *  - end: a generic object containing the ending values for all the properties that will be tweened by the external plugin. This is what we feed to the external plugin's _onInitTween() as the destination values
     *  - firstMPT: the first MiniPropTween in the linked list
     *  - pt: the first CSSPropTween in the linked list that was created when parsing. If shallow is true, this linked list will NOT attach to the one passed into the _parseToProxy() as the "pt" (4th) parameter.
     * @param {!Object} t target object to be tweened
     * @param {!(Object|string)} vars the object containing the information about the tweening values (typically the end/destination values) that should be parsed
     * @param {!CSSPlugin} cssp The CSSPlugin instance
     * @param {CSSPropTween=} pt the next CSSPropTween in the linked list
     * @param {TweenPlugin=} plugin the external TweenPlugin instance that will be handling tweening the numeric values
     * @param {boolean=} shallow if true, the resulting linked list from the parse will NOT be attached to the CSSPropTween that was passed in as the "pt" (4th) parameter.
     * @return An object containing the following properties: proxy, end, firstMPT, and pt (see above for descriptions)
     */
    _parseToProxy = _internals._parseToProxy = function (t, vars, cssp, pt, plugin, shallow) {
      var bpt = pt,
          start = {},
          end = {},
          transform = cssp._transform,
          oldForce = _forcePT,
          i,
          p,
          xp,
          mpt,
          firstPT;
      cssp._transform = null;
      _forcePT = vars;
      pt = firstPT = cssp.parse(t, vars, pt, plugin);
      _forcePT = oldForce; //break off from the linked list so the new ones are isolated.

      if (shallow) {
        cssp._transform = transform;

        if (bpt) {
          bpt._prev = null;

          if (bpt._prev) {
            bpt._prev._next = null;
          }
        }
      }

      while (pt && pt !== bpt) {
        if (pt.type <= 1) {
          p = pt.p;
          end[p] = pt.s + pt.c;
          start[p] = pt.s;

          if (!shallow) {
            mpt = new MiniPropTween(pt, "s", p, mpt, pt.r);
            pt.c = 0;
          }

          if (pt.type === 1) {
            i = pt.l;

            while (--i > 0) {
              xp = "xn" + i;
              p = pt.p + "_" + xp;
              end[p] = pt.data[xp];
              start[p] = pt[xp];

              if (!shallow) {
                mpt = new MiniPropTween(pt, xp, p, mpt, pt.rxp[xp]);
              }
            }
          }
        }

        pt = pt._next;
      }

      return {
        proxy: start,
        end: end,
        firstMPT: mpt,
        pt: firstPT
      };
    },

    /**
     * @constructor Each property that is tweened has at least one CSSPropTween associated with it. These instances store important information like the target, property, starting value, amount of change, etc. They can also optionally have a number of "extra" strings and numeric values named xs1, xn1, xs2, xn2, xs3, xn3, etc. where "s" indicates string and "n" indicates number. These can be pieced together in a complex-value tween (type:1) that has alternating types of data like a string, number, string, number, etc. For example, boxShadow could be "5px 5px 8px rgb(102, 102, 51)". In that value, there are 6 numbers that may need to tween and then pieced back together into a string again with spaces, suffixes, etc. xs0 is special in that it stores the suffix for standard (type:0) tweens, -OR- the first string (prefix) in a complex-value (type:1) CSSPropTween -OR- it can be the non-tweening value in a type:-1 CSSPropTween. We do this to conserve memory.
     * CSSPropTweens have the following optional properties as well (not defined through the constructor):
     *  - l: Length in terms of the number of extra properties that the CSSPropTween has (default: 0). For example, for a boxShadow we may need to tween 5 numbers in which case l would be 5; Keep in mind that the start/end values for the first number that's tweened are always stored in the s and c properties to conserve memory. All additional values thereafter are stored in xn1, xn2, etc.
     *  - xfirst: The first instance of any sub-CSSPropTweens that are tweening properties of this instance. For example, we may split up a boxShadow tween so that there's a main CSSPropTween of type:1 that has various xs* and xn* values associated with the h-shadow, v-shadow, blur, color, etc. Then we spawn a CSSPropTween for each of those that has a higher priority and runs BEFORE the main CSSPropTween so that the values are all set by the time it needs to re-assemble them. The xfirst gives us an easy way to identify the first one in that chain which typically ends at the main one (because they're all prepende to the linked list)
     *  - plugin: The TweenPlugin instance that will handle the tweening of any complex values. For example, sometimes we don't want to use normal subtweens (like xfirst refers to) to tween the values - we might want ThrowPropsPlugin or BezierPlugin some other plugin to do the actual tweening, so we create a plugin instance and store a reference here. We need this reference so that if we get a request to round values or disable a tween, we can pass along that request.
     *  - data: Arbitrary data that needs to be stored with the CSSPropTween. Typically if we're going to have a plugin handle the tweening of a complex-value tween, we create a generic object that stores the END values that we're tweening to and the CSSPropTween's xs1, xs2, etc. have the starting values. We store that object as data. That way, we can simply pass that object to the plugin and use the CSSPropTween as the target.
     *  - setRatio: Only used for type:2 tweens that require custom functionality. In this case, we call the CSSPropTween's setRatio() method and pass the ratio each time the tween updates. This isn't quite as efficient as doing things directly in the CSSPlugin's setRatio() method, but it's very convenient and flexible.
     * @param {!Object} t Target object whose property will be tweened. Often a DOM element, but not always. It could be anything.
     * @param {string} p Property to tween (name). For example, to tween element.width, p would be "width".
     * @param {number} s Starting numeric value
     * @param {number} c Change in numeric value over the course of the entire tween. For example, if element.width starts at 5 and should end at 100, c would be 95.
     * @param {CSSPropTween=} next The next CSSPropTween in the linked list. If one is defined, we will define its _prev as the new instance, and the new instance's _next will be pointed at it.
     * @param {number=} type The type of CSSPropTween where -1 = a non-tweening value, 0 = a standard simple tween, 1 = a complex value (like one that has multiple numbers in a comma- or space-delimited string like border:"1px solid red"), and 2 = one that uses a custom setRatio function that does all of the work of applying the values on each update.
     * @param {string=} n Name of the property that should be used for overwriting purposes which is typically the same as p but not always. For example, we may need to create a subtween for the 2nd part of a "clip:rect(...)" tween in which case "p" might be xs1 but "n" is still "clip"
     * @param {boolean=} r If true, the value(s) should be rounded
     * @param {number=} pr Priority in the linked list order. Higher priority CSSPropTweens will be updated before lower priority ones. The default priority is 0.
     * @param {string=} b Beginning value. We store this to ensure that it is EXACTLY what it was when the tween began without any risk of interpretation issues.
     * @param {string=} e Ending value. We store this to ensure that it is EXACTLY what the user defined at the end of the tween without any risk of interpretation issues.
     */
    CSSPropTween = _internals.CSSPropTween = function (t, p, s, c, next, type, n, r, pr, b, e) {
      this.t = t; //target

      this.p = p; //property

      this.s = s; //starting value

      this.c = c; //change value

      this.n = n || p; //name that this CSSPropTween should be associated to (usually the same as p, but not always - n is what overwriting looks at)

      if (!(t instanceof CSSPropTween)) {
        _overwriteProps.push(this.n);
      }

      this.r = !r ? r : typeof r === "function" ? r : Math.round; //round (boolean)

      this.type = type || 0; //0 = normal tween, -1 = non-tweening (in which case xs0 will be applied to the target's property, like tp.t[tp.p] = tp.xs0), 1 = complex-value SpecialProp, 2 = custom setRatio() that does all the work

      if (pr) {
        this.pr = pr;
        _hasPriority = true;
      }

      this.b = b === undefined ? s : b;
      this.e = e === undefined ? s + c : e;

      if (next) {
        this._next = next;
        next._prev = this;
      }
    },
        _addNonTweeningNumericPT = function _addNonTweeningNumericPT(target, prop, start, end, next, overwriteProp) {
      //cleans up some code redundancies and helps minification. Just a fast way to add a NUMERIC non-tweening CSSPropTween
      var pt = new CSSPropTween(target, prop, start, end - start, next, -1, overwriteProp);
      pt.b = start;
      pt.e = pt.xs0 = end;
      return pt;
    },

    /**
     * Takes a target, the beginning value and ending value (as strings) and parses them into a CSSPropTween (possibly with child CSSPropTweens) that accommodates multiple numbers, colors, comma-delimited values, etc. For example:
     * sp.parseComplex(element, "boxShadow", "5px 10px 20px rgb(255,102,51)", "0px 0px 0px red", true, "0px 0px 0px rgb(0,0,0,0)", pt);
     * It will walk through the beginning and ending values (which should be in the same format with the same number and type of values) and figure out which parts are numbers, what strings separate the numeric/tweenable values, and then create the CSSPropTweens accordingly. If a plugin is defined, no child CSSPropTweens will be created. Instead, the ending values will be stored in the "data" property of the returned CSSPropTween like: {s:-5, xn1:-10, xn2:-20, xn3:255, xn4:0, xn5:0} so that it can be fed to any other plugin and it'll be plain numeric tweens but the recomposition of the complex value will be handled inside CSSPlugin's setRatio().
     * If a setRatio is defined, the type of the CSSPropTween will be set to 2 and recomposition of the values will be the responsibility of that method.
     *
     * @param {!Object} t Target whose property will be tweened
     * @param {!string} p Property that will be tweened (its name, like "left" or "backgroundColor" or "boxShadow")
     * @param {string} b Beginning value
     * @param {string} e Ending value
     * @param {boolean} clrs If true, the value could contain a color value like "rgb(255,0,0)" or "#F00" or "red". The default is false, so no colors will be recognized (a performance optimization)
     * @param {(string|number|Object)} dflt The default beginning value that should be used if no valid beginning value is defined or if the number of values inside the complex beginning and ending values don't match
     * @param {?CSSPropTween} pt CSSPropTween instance that is the current head of the linked list (we'll prepend to this).
     * @param {number=} pr Priority in the linked list order. Higher priority properties will be updated before lower priority ones. The default priority is 0.
     * @param {TweenPlugin=} plugin If a plugin should handle the tweening of extra properties, pass the plugin instance here. If one is defined, then NO subtweens will be created for any extra properties (the properties will be created - just not additional CSSPropTween instances to tween them) because the plugin is expected to do so. However, the end values WILL be populated in the "data" property, like {s:100, xn1:50, xn2:300}
     * @param {function(number)=} setRatio If values should be set in a custom function instead of being pieced together in a type:1 (complex-value) CSSPropTween, define that custom function here.
     * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parseComplex() call.
     */
    _parseComplex = CSSPlugin.parseComplex = function (t, p, b, e, clrs, dflt, pt, pr, plugin, setRatio) {
      //DEBUG: _log("parseComplex: "+p+", b: "+b+", e: "+e);
      b = b || dflt || "";

      if (typeof e === "function") {
        e = e(_index, _target);
      }

      pt = new CSSPropTween(t, p, 0, 0, pt, setRatio ? 2 : 1, null, false, pr, b, e);
      e += ""; //ensures it's a string

      if (clrs && _colorExp.test(e + b)) {
        //if colors are found, normalize the formatting to rgba() or hsla().
        e = [b, e];
        CSSPlugin.colorStringFilter(e);
        b = e[0];
        e = e[1];
      }

      var ba = b.split(", ").join(",").split(" "),
          //beginning array
      ea = e.split(", ").join(",").split(" "),
          //ending array
      l = ba.length,
          autoRound = _autoRound !== false,
          i,
          xi,
          ni,
          bv,
          ev,
          bnums,
          enums,
          bn,
          hasAlpha,
          temp,
          cv,
          str,
          useHSL;

      if (e.indexOf(",") !== -1 || b.indexOf(",") !== -1) {
        if ((e + b).indexOf("rgb") !== -1 || (e + b).indexOf("hsl") !== -1) {
          //keep rgb(), rgba(), hsl(), and hsla() values together! (remember, we're splitting on spaces)
          ba = ba.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
          ea = ea.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
        } else {
          ba = ba.join(" ").split(",").join(", ").split(" ");
          ea = ea.join(" ").split(",").join(", ").split(" ");
        }

        l = ba.length;
      }

      if (l !== ea.length) {
        //DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
        ba = (dflt || "").split(" ");
        l = ba.length;
      }

      pt.plugin = plugin;
      pt.setRatio = setRatio;
      _colorExp.lastIndex = 0;

      for (i = 0; i < l; i++) {
        bv = ba[i];
        ev = ea[i] + "";
        bn = parseFloat(bv); //if the value begins with a number (most common). It's fine if it has a suffix like px

        if (bn || bn === 0) {
          pt.appendXtra("", bn, _parseChange(ev, bn), ev.replace(_relNumExp, ""), autoRound && ev.indexOf("px") !== -1 ? Math.round : false, true); //if the value is a color
        } else if (clrs && _colorExp.test(bv)) {
          str = ev.indexOf(")") + 1;
          str = ")" + (str ? ev.substr(str) : ""); //if there's a comma or ) at the end, retain it.

          useHSL = ev.indexOf("hsl") !== -1 && _supportsOpacity;
          temp = ev; //original string value so we can look for any prefix later.

          bv = _parseColor(bv, useHSL);
          ev = _parseColor(ev, useHSL);
          hasAlpha = bv.length + ev.length > 6;

          if (hasAlpha && !_supportsOpacity && ev[3] === 0) {
            //older versions of IE don't support rgba(), so if the destination alpha is 0, just use "transparent" for the end color
            pt["xs" + pt.l] += pt.l ? " transparent" : "transparent";
            pt.e = pt.e.split(ea[i]).join("transparent");
          } else {
            if (!_supportsOpacity) {
              //old versions of IE don't support rgba().
              hasAlpha = false;
            }

            if (useHSL) {
              pt.appendXtra(temp.substr(0, temp.indexOf("hsl")) + (hasAlpha ? "hsla(" : "hsl("), bv[0], _parseChange(ev[0], bv[0]), ",", false, true).appendXtra("", bv[1], _parseChange(ev[1], bv[1]), "%,", false).appendXtra("", bv[2], _parseChange(ev[2], bv[2]), hasAlpha ? "%," : "%" + str, false);
            } else {
              pt.appendXtra(temp.substr(0, temp.indexOf("rgb")) + (hasAlpha ? "rgba(" : "rgb("), bv[0], ev[0] - bv[0], ",", Math.round, true).appendXtra("", bv[1], ev[1] - bv[1], ",", Math.round).appendXtra("", bv[2], ev[2] - bv[2], hasAlpha ? "," : str, Math.round);
            }

            if (hasAlpha) {
              bv = bv.length < 4 ? 1 : bv[3];
              pt.appendXtra("", bv, (ev.length < 4 ? 1 : ev[3]) - bv, str, false);
            }
          }

          _colorExp.lastIndex = 0; //otherwise the test() on the RegExp could move the lastIndex and taint future results.
        } else {
          bnums = bv.match(_numExp); //gets each group of numbers in the beginning value string and drops them into an array
          //if no number is found, treat it as a non-tweening value and just append the string to the current xs.

          if (!bnums) {
            pt["xs" + pt.l] += pt.l || pt["xs" + pt.l] ? " " + ev : ev; //loop through all the numbers that are found and construct the extra values on the pt.
          } else {
            enums = ev.match(_relNumExp); //get each group of numbers in the end value string and drop them into an array. We allow relative values too, like +=50 or -=.5

            if (!enums || enums.length !== bnums.length) {
              //DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
              return pt;
            }

            ni = 0;

            for (xi = 0; xi < bnums.length; xi++) {
              cv = bnums[xi];
              temp = bv.indexOf(cv, ni);
              pt.appendXtra(bv.substr(ni, temp - ni), Number(cv), _parseChange(enums[xi], cv), "", autoRound && bv.substr(temp + cv.length, 2) === "px" ? Math.round : false, xi === 0);
              ni = temp + cv.length;
            }

            pt["xs" + pt.l] += bv.substr(ni);
          }
        }
      } //if there are relative values ("+=" or "-=" prefix), we need to adjust the ending value to eliminate the prefixes and combine the values properly.


      if (e.indexOf("=") !== -1) if (pt.data) {
        str = pt.xs0 + pt.data.s;

        for (i = 1; i < pt.l; i++) {
          str += pt["xs" + i] + pt.data["xn" + i];
        }

        pt.e = str + pt["xs" + i];
      }

      if (!pt.l) {
        pt.type = -1;
        pt.xs0 = pt.e;
      }

      return pt.xfirst || pt;
    },
        i = 9;

    p = CSSPropTween.prototype;
    p.l = p.pr = 0; //length (number of extra properties like xn1, xn2, xn3, etc.

    while (--i > 0) {
      p["xn" + i] = 0;
      p["xs" + i] = "";
    }

    p.xs0 = "";
    p._next = p._prev = p.xfirst = p.data = p.plugin = p.setRatio = p.rxp = null;
    /**
     * Appends and extra tweening value to a CSSPropTween and automatically manages any prefix and suffix strings. The first extra value is stored in the s and c of the main CSSPropTween instance, but thereafter any extras are stored in the xn1, xn2, xn3, etc. The prefixes and suffixes are stored in the xs0, xs1, xs2, etc. properties. For example, if I walk through a clip value like "rect(10px, 5px, 0px, 20px)", the values would be stored like this:
     * xs0:"rect(", s:10, xs1:"px, ", xn1:5, xs2:"px, ", xn2:0, xs3:"px, ", xn3:20, xn4:"px)"
     * And they'd all get joined together when the CSSPlugin renders (in the setRatio() method).
     * @param {string=} pfx Prefix (if any)
     * @param {!number} s Starting value
     * @param {!number} c Change in numeric value over the course of the entire tween. For example, if the start is 5 and the end is 100, the change would be 95.
     * @param {string=} sfx Suffix (if any)
     * @param {boolean=} r Round (if true).
     * @param {boolean=} pad If true, this extra value should be separated by the previous one by a space. If there is no previous extra and pad is true, it will automatically drop the space.
     * @return {CSSPropTween} returns itself so that multiple methods can be chained together.
     */

    p.appendXtra = function (pfx, s, c, sfx, r, pad) {
      var pt = this,
          l = pt.l;
      pt["xs" + l] += pad && (l || pt["xs" + l]) ? " " + pfx : pfx || "";
      if (!c) if (l !== 0 && !pt.plugin) {
        //typically we'll combine non-changing values right into the xs to optimize performance, but we don't combine them when there's a plugin that will be tweening the values because it may depend on the values being split apart, like for a bezier, if a value doesn't change between the first and second iteration but then it does on the 3rd, we'll run into trouble because there's no xn slot for that value!
        pt["xs" + l] += s + (sfx || "");
        return pt;
      }
      pt.l++;
      pt.type = pt.setRatio ? 2 : 1;
      pt["xs" + pt.l] = sfx || "";

      if (l > 0) {
        pt.data["xn" + l] = s + c;
        pt.rxp["xn" + l] = r; //round extra property (we need to tap into this in the _parseToProxy() method)

        pt["xn" + l] = s;

        if (!pt.plugin) {
          pt.xfirst = new CSSPropTween(pt, "xn" + l, s, c, pt.xfirst || pt, 0, pt.n, r, pt.pr);
          pt.xfirst.xs0 = 0; //just to ensure that the property stays numeric which helps modern browsers speed up processing. Remember, in the setRatio() method, we do pt.t[pt.p] = val + pt.xs0 so if pt.xs0 is "" (the default), it'll cast the end value as a string. When a property is a number sometimes and a string sometimes, it prevents the compiler from locking in the data type, slowing things down slightly.
        }

        return pt;
      }

      pt.data = {
        s: s + c
      };
      pt.rxp = {};
      pt.s = s;
      pt.c = c;
      pt.r = r;
      return pt;
    };
    /**
     * @constructor A SpecialProp is basically a css property that needs to be treated in a non-standard way, like if it may contain a complex value like boxShadow:"5px 10px 15px rgb(255, 102, 51)" or if it is associated with another plugin like ThrowPropsPlugin or BezierPlugin. Every SpecialProp is associated with a particular property name like "boxShadow" or "throwProps" or "bezier" and it will intercept those values in the vars object that's passed to the CSSPlugin and handle them accordingly.
     * @param {!string} p Property name (like "boxShadow" or "throwProps")
     * @param {Object=} options An object containing any of the following configuration options:
     *                      - defaultValue: the default value
     *                      - parser: A function that should be called when the associated property name is found in the vars. This function should return a CSSPropTween instance and it should ensure that it is properly inserted into the linked list. It will receive 4 paramters: 1) The target, 2) The value defined in the vars, 3) The CSSPlugin instance (whose _firstPT should be used for the linked list), and 4) A computed style object if one was calculated (this is a speed optimization that allows retrieval of starting values quicker)
     *                      - formatter: a function that formats any value received for this special property (for example, boxShadow could take "5px 5px red" and format it to "5px 5px 0px 0px red" so that both the beginning and ending values have a common order and quantity of values.)
     *                      - prefix: if true, we'll determine whether or not this property requires a vendor prefix (like Webkit or Moz or ms or O)
     *                      - color: set this to true if the value for this SpecialProp may contain color-related values like rgb(), rgba(), etc.
     *                      - priority: priority in the linked list order. Higher priority SpecialProps will be updated before lower priority ones. The default priority is 0.
     *                      - multi: if true, the formatter should accommodate a comma-delimited list of values, like boxShadow could have multiple boxShadows listed out.
     *                      - collapsible: if true, the formatter should treat the value like it's a top/right/bottom/left value that could be collapsed, like "5px" would apply to all, "5px, 10px" would use 5px for top/bottom and 10px for right/left, etc.
     *                      - keyword: a special keyword that can [optionally] be found inside the value (like "inset" for boxShadow). This allows us to validate beginning/ending values to make sure they match (if the keyword is found in one, it'll be added to the other for consistency by default).
     */


    var SpecialProp = function SpecialProp(p, options) {
      options = options || {};
      this.p = options.prefix ? _checkPropPrefix(p) || p : p;
      _specialProps[p] = _specialProps[this.p] = this;
      this.format = options.formatter || _getFormatter(options.defaultValue, options.color, options.collapsible, options.multi);

      if (options.parser) {
        this.parse = options.parser;
      }

      this.clrs = options.color;
      this.multi = options.multi;
      this.keyword = options.keyword;
      this.dflt = options.defaultValue;
      this.pr = options.priority || 0;
    },
        //shortcut for creating a new SpecialProp that can accept multiple properties as a comma-delimited list (helps minification). dflt can be an array for multiple values (we don't do a comma-delimited list because the default value may contain commas, like rect(0px,0px,0px,0px)). We attach this method to the SpecialProp class/object instead of using a private _createSpecialProp() method so that we can tap into it externally if necessary, like from another plugin.
    _registerComplexSpecialProp = _internals._registerComplexSpecialProp = function (p, options, defaults) {
      if (_typeof(options) !== "object") {
        options = {
          parser: defaults
        }; //to make backwards compatible with older versions of BezierPlugin and ThrowPropsPlugin
      }

      var a = p.split(","),
          d = options.defaultValue,
          i,
          temp;
      defaults = defaults || [d];

      for (i = 0; i < a.length; i++) {
        options.prefix = i === 0 && options.prefix;
        options.defaultValue = defaults[i] || d;
        temp = new SpecialProp(a[i], options);
      }
    },
        //creates a placeholder special prop for a plugin so that the property gets caught the first time a tween of it is attempted, and at that time it makes the plugin register itself, thus taking over for all future tweens of that property. This allows us to not mandate that things load in a particular order and it also allows us to log() an error that informs the user when they attempt to tween an external plugin-related property without loading its .js file.
    _registerPluginProp = _internals._registerPluginProp = function (p) {
      if (!_specialProps[p]) {
        var pluginName = p.charAt(0).toUpperCase() + p.substr(1) + "Plugin";

        _registerComplexSpecialProp(p, {
          parser: function parser(t, e, p, cssp, pt, plugin, vars) {
            var pluginClass = _globals.com.greensock.plugins[pluginName];

            if (!pluginClass) {
              _log("Error: " + pluginName + " js file not loaded.");

              return pt;
            }

            pluginClass._cssRegister();

            return _specialProps[p].parse(t, e, p, cssp, pt, plugin, vars);
          }
        });
      }
    };

    p = SpecialProp.prototype;
    /**
     * Alias for _parseComplex() that automatically plugs in certain values for this SpecialProp, like its property name, whether or not colors should be sensed, the default value, and priority. It also looks for any keyword that the SpecialProp defines (like "inset" for boxShadow) and ensures that the beginning and ending values have the same number of values for SpecialProps where multi is true (like boxShadow and textShadow can have a comma-delimited list)
     * @param {!Object} t target element
     * @param {(string|number|object)} b beginning value
     * @param {(string|number|object)} e ending (destination) value
     * @param {CSSPropTween=} pt next CSSPropTween in the linked list
     * @param {TweenPlugin=} plugin If another plugin will be tweening the complex value, that TweenPlugin instance goes here.
     * @param {function=} setRatio If a custom setRatio() method should be used to handle this complex value, that goes here.
     * @return {CSSPropTween=} First CSSPropTween in the linked list
     */

    p.parseComplex = function (t, b, e, pt, plugin, setRatio) {
      var kwd = this.keyword,
          i,
          ba,
          ea,
          l,
          bi,
          ei; //if this SpecialProp's value can contain a comma-delimited list of values (like boxShadow or textShadow), we must parse them in a special way, and look for a keyword (like "inset" for boxShadow) and ensure that the beginning and ending BOTH have it if the end defines it as such. We also must ensure that there are an equal number of values specified (we can't tween 1 boxShadow to 3 for example)

      if (this.multi) if (_commasOutsideParenExp.test(e) || _commasOutsideParenExp.test(b)) {
        ba = b.replace(_commasOutsideParenExp, "|").split("|");
        ea = e.replace(_commasOutsideParenExp, "|").split("|");
      } else if (kwd) {
        ba = [b];
        ea = [e];
      }

      if (ea) {
        l = ea.length > ba.length ? ea.length : ba.length;

        for (i = 0; i < l; i++) {
          b = ba[i] = ba[i] || this.dflt;
          e = ea[i] = ea[i] || this.dflt;

          if (kwd) {
            bi = b.indexOf(kwd);
            ei = e.indexOf(kwd);

            if (bi !== ei) {
              if (ei === -1) {
                //if the keyword isn't in the end value, remove it from the beginning one.
                ba[i] = ba[i].split(kwd).join("");
              } else if (bi === -1) {
                //if the keyword isn't in the beginning, add it.
                ba[i] += " " + kwd;
              }
            }
          }
        }

        b = ba.join(", ");
        e = ea.join(", ");
      }

      return _parseComplex(t, this.p, b, e, this.clrs, this.dflt, pt, this.pr, plugin, setRatio);
    };
    /**
     * Accepts a target and end value and spits back a CSSPropTween that has been inserted into the CSSPlugin's linked list and conforms with all the conventions we use internally, like type:-1, 0, 1, or 2, setting up any extra property tweens, priority, etc. For example, if we have a boxShadow SpecialProp and call:
     * this._firstPT = sp.parse(element, "5px 10px 20px rgb(2550,102,51)", "boxShadow", this);
     * It should figure out the starting value of the element's boxShadow, compare it to the provided end value and create all the necessary CSSPropTweens of the appropriate types to tween the boxShadow. The CSSPropTween that gets spit back should already be inserted into the linked list (the 4th parameter is the current head, so prepend to that).
     * @param {!Object} t Target object whose property is being tweened
     * @param {Object} e End value as provided in the vars object (typically a string, but not always - like a throwProps would be an object).
     * @param {!string} p Property name
     * @param {!CSSPlugin} cssp The CSSPlugin instance that should be associated with this tween.
     * @param {?CSSPropTween} pt The CSSPropTween that is the current head of the linked list (we'll prepend to it)
     * @param {TweenPlugin=} plugin If a plugin will be used to tween the parsed value, this is the plugin instance.
     * @param {Object=} vars Original vars object that contains the data for parsing.
     * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parse() call.
     */


    p.parse = function (t, e, p, cssp, pt, plugin, vars) {
      return this.parseComplex(t.style, this.format(_getStyle(t, this.p, _cs, false, this.dflt)), this.format(e), pt, plugin);
    };
    /**
     * Registers a special property that should be intercepted from any "css" objects defined in tweens. This allows you to handle them however you want without CSSPlugin doing it for you. The 2nd parameter should be a function that accepts 3 parameters:
     *  1) Target object whose property should be tweened (typically a DOM element)
     *  2) The end/destination value (could be a string, number, object, or whatever you want)
     *  3) The tween instance (you probably don't need to worry about this, but it can be useful for looking up information like the duration)
     *
     * Then, your function should return a function which will be called each time the tween gets rendered, passing a numeric "ratio" parameter to your function that indicates the change factor (usually between 0 and 1). For example:
     *
     * CSSPlugin.registerSpecialProp("myCustomProp", function(target, value, tween) {
     *      var start = target.style.width;
     *      return function(ratio) {
     *              target.style.width = (start + value * ratio) + "px";
     *              console.log("set width to " + target.style.width);
     *          }
     * }, 0);
     *
     * Then, when I do this tween, it will trigger my special property:
     *
     * TweenLite.to(element, 1, {css:{myCustomProp:100}});
     *
     * In the example, of course, we're just changing the width, but you can do anything you want.
     *
     * @param {!string} name Property name (or comma-delimited list of property names) that should be intercepted and handled by your function. For example, if I define "myCustomProp", then it would handle that portion of the following tween: TweenLite.to(element, 1, {css:{myCustomProp:100}})
     * @param {!function(Object, Object, Object, string):function(number)} onInitTween The function that will be called when a tween of this special property is performed. The function will receive 4 parameters: 1) Target object that should be tweened, 2) Value that was passed to the tween, 3) The tween instance itself (rarely used), and 4) The property name that's being tweened. Your function should return a function that should be called on every update of the tween. That function will receive a single parameter that is a "change factor" value (typically between 0 and 1) indicating the amount of change as a ratio. You can use this to determine how to set the values appropriately in your function.
     * @param {number=} priority Priority that helps the engine determine the order in which to set the properties (default: 0). Higher priority properties will be updated before lower priority ones.
     */


    CSSPlugin.registerSpecialProp = function (name, onInitTween, priority) {
      _registerComplexSpecialProp(name, {
        parser: function parser(t, e, p, cssp, pt, plugin, vars) {
          var rv = new CSSPropTween(t, p, 0, 0, pt, 2, p, false, priority);
          rv.plugin = plugin;
          rv.setRatio = onInitTween(t, e, cssp._tween, p);
          return rv;
        },
        priority: priority
      });
    }; //transform-related methods and properties


    CSSPlugin.useSVGTransformAttr = true; //Safari and Firefox both have some rendering bugs when applying CSS transforms to SVG elements, so default to using the "transform" attribute instead (users can override this).

    var _transformProps = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
        _transformProp = _checkPropPrefix("transform"),
        //the Javascript (camelCase) transform property, like msTransform, WebkitTransform, MozTransform, or OTransform.
    _transformPropCSS = _prefixCSS + "transform",
        _transformOriginProp = _checkPropPrefix("transformOrigin"),
        _supports3D = _checkPropPrefix("perspective") !== null,
        Transform = _internals.Transform = function () {
      this.perspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0;
      this.force3D = CSSPlugin.defaultForce3D === false || !_supports3D ? false : CSSPlugin.defaultForce3D || "auto";
    },
        _SVGElement = _gsScope.SVGElement,
        _useSVGTransformAttr,
        //Some browsers (like Firefox and IE) don't honor transform-origin properly in SVG elements, so we need to manually adjust the matrix accordingly. We feature detect here rather than always doing the conversion for certain browsers because they may fix the problem at some point in the future.
    _createSVG = function _createSVG(type, container, attributes) {
      var element = _doc.createElementNS("http://www.w3.org/2000/svg", type),
          reg = /([a-z])([A-Z])/g,
          p;

      for (p in attributes) {
        element.setAttributeNS(null, p.replace(reg, "$1-$2").toLowerCase(), attributes[p]);
      }

      container.appendChild(element);
      return element;
    },
        _docElement = _doc.documentElement || {},
        _forceSVGTransformAttr = function () {
      //IE and Android stock don't support CSS transforms on SVG elements, so we must write them to the "transform" attribute. We populate this variable in the _parseTransform() method, and only if/when we come across an SVG element
      var force = _ieVers || /Android/i.test(_agent) && !_gsScope.chrome,
          svg,
          rect,
          width;

      if (_doc.createElementNS && !force) {
        //IE8 and earlier doesn't support SVG anyway
        svg = _createSVG("svg", _docElement);
        rect = _createSVG("rect", svg, {
          width: 100,
          height: 50,
          x: 100
        });
        width = rect.getBoundingClientRect().width;
        rect.style[_transformOriginProp] = "50% 50%";
        rect.style[_transformProp] = "scaleX(0.5)";
        force = width === rect.getBoundingClientRect().width && !(_isFirefox && _supports3D); //note: Firefox fails the test even though it does support CSS transforms in 3D. Since we can't push 3D stuff into the transform attribute, we force Firefox to pass the test here (as long as it does truly support 3D).

        _docElement.removeChild(svg);
      }

      return force;
    }(),
        _parseSVGOrigin = function _parseSVGOrigin(e, local, decoratee, absolute, smoothOrigin, skipRecord) {
      var tm = e._gsTransform,
          m = _getMatrix(e, true),
          v,
          x,
          y,
          xOrigin,
          yOrigin,
          a,
          b,
          c,
          d,
          tx,
          ty,
          determinant,
          xOriginOld,
          yOriginOld;

      if (tm) {
        xOriginOld = tm.xOrigin; //record the original values before we alter them.

        yOriginOld = tm.yOrigin;
      }

      if (!absolute || (v = absolute.split(" ")).length < 2) {
        b = e.getBBox();

        if (b.x === 0 && b.y === 0 && b.width + b.height === 0) {
          //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.
          b = {
            x: parseFloat(e.hasAttribute("x") ? e.getAttribute("x") : e.hasAttribute("cx") ? e.getAttribute("cx") : 0) || 0,
            y: parseFloat(e.hasAttribute("y") ? e.getAttribute("y") : e.hasAttribute("cy") ? e.getAttribute("cy") : 0) || 0,
            width: 0,
            height: 0
          };
        }

        local = _parsePosition(local).split(" ");
        v = [(local[0].indexOf("%") !== -1 ? parseFloat(local[0]) / 100 * b.width : parseFloat(local[0])) + b.x, (local[1].indexOf("%") !== -1 ? parseFloat(local[1]) / 100 * b.height : parseFloat(local[1])) + b.y];
      }

      decoratee.xOrigin = xOrigin = parseFloat(v[0]);
      decoratee.yOrigin = yOrigin = parseFloat(v[1]);

      if (absolute && m !== _identity2DMatrix) {
        //if svgOrigin is being set, we must invert the matrix and determine where the absolute point is, factoring in the current transforms. Otherwise, the svgOrigin would be based on the element's non-transformed position on the canvas.
        a = m[0];
        b = m[1];
        c = m[2];
        d = m[3];
        tx = m[4];
        ty = m[5];
        determinant = a * d - b * c;

        if (determinant) {
          //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
          x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
          y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
          xOrigin = decoratee.xOrigin = v[0] = x;
          yOrigin = decoratee.yOrigin = v[1] = y;
        }
      }

      if (tm) {
        //avoid jump when transformOrigin is changed - adjust the x/y values accordingly
        if (skipRecord) {
          decoratee.xOffset = tm.xOffset;
          decoratee.yOffset = tm.yOffset;
          tm = decoratee;
        }

        if (smoothOrigin || smoothOrigin !== false && CSSPlugin.defaultSmoothOrigin !== false) {
          x = xOrigin - xOriginOld;
          y = yOrigin - yOriginOld; //originally, we simply adjusted the x and y values, but that would cause problems if, for example, you created a rotational tween part-way through an x/y tween. Managing the offset in a separate variable gives us ultimate flexibility.
          //tm.x -= x - (x * m[0] + y * m[2]);
          //tm.y -= y - (x * m[1] + y * m[3]);

          tm.xOffset += x * m[0] + y * m[2] - x;
          tm.yOffset += x * m[1] + y * m[3] - y;
        } else {
          tm.xOffset = tm.yOffset = 0;
        }
      }

      if (!skipRecord) {
        e.setAttribute("data-svg-origin", v.join(" "));
      }
    },
        _getBBoxHack = function _getBBoxHack(swapIfPossible) {
      //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
      var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
          oldParent = this.parentNode,
          oldSibling = this.nextSibling,
          oldCSS = this.style.cssText,
          bbox;

      _docElement.appendChild(svg);

      svg.appendChild(this);
      this.style.display = "block";

      if (swapIfPossible) {
        try {
          bbox = this.getBBox();
          this._originalGetBBox = this.getBBox;
          this.getBBox = _getBBoxHack;
        } catch (e) {}
      } else if (this._originalGetBBox) {
        bbox = this._originalGetBBox();
      }

      if (oldSibling) {
        oldParent.insertBefore(this, oldSibling);
      } else {
        oldParent.appendChild(this);
      }

      _docElement.removeChild(svg);

      this.style.cssText = oldCSS;
      return bbox;
    },
        _getBBox = function _getBBox(e) {
      try {
        return e.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
      } catch (error) {
        return _getBBoxHack.call(e, true);
      }
    },
        _isSVG = function _isSVG(e) {
      //reports if the element is an SVG on which getBBox() actually works
      return !!(_SVGElement && e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
    },
        _identity2DMatrix = [1, 0, 0, 1, 0, 0],
        _getMatrix = function _getMatrix(e, force2D) {
      var tm = e._gsTransform || new Transform(),
          rnd = 100000,
          style = e.style,
          isDefault,
          s,
          m,
          n,
          dec,
          none;

      if (_transformProp) {
        s = _getStyle(e, _transformPropCSS, null, true);
      } else if (e.currentStyle) {
        //for older versions of IE, we need to interpret the filter portion that is in the format: progid:DXImageTransform.Microsoft.Matrix(M11=6.123233995736766e-17, M12=-1, M21=1, M22=6.123233995736766e-17, sizingMethod='auto expand') Notice that we need to swap b and c compared to a normal matrix.
        s = e.currentStyle.filter.match(_ieGetMatrixExp);
        s = s && s.length === 4 ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), tm.x || 0, tm.y || 0].join(",") : "";
      }

      isDefault = !s || s === "none" || s === "matrix(1, 0, 0, 1, 0, 0)";

      if (_transformProp && ((none = !_getComputedStyle(e) || _getComputedStyle(e).display === "none") || !e.parentNode)) {
        //note: Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
        if (none) {
          //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
          n = style.display;
          style.display = "block";
        }

        if (!e.parentNode) {
          dec = 1; //flag

          _docElement.appendChild(e);
        }

        s = _getStyle(e, _transformPropCSS, null, true);
        isDefault = !s || s === "none" || s === "matrix(1, 0, 0, 1, 0, 0)";

        if (n) {
          style.display = n;
        } else if (none) {
          _removeProp(style, "display");
        }

        if (dec) {
          _docElement.removeChild(e);
        }
      }

      if (tm.svg || e.getCTM && _isSVG(e)) {
        if (isDefault && (style[_transformProp] + "").indexOf("matrix") !== -1) {
          //some browsers (like Chrome 40) don't correctly report transforms that are applied inline on an SVG element (they don't get included in the computed style), so we double-check here and accept matrix values
          s = style[_transformProp];
          isDefault = 0;
        }

        m = e.getAttribute("transform");

        if (isDefault && m) {
          m = e.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.

          s = "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + m.e + "," + m.f + ")";
          isDefault = 0;
        }
      }

      if (isDefault) {
        return _identity2DMatrix;
      } //split the matrix values out into an array (m for matrix)


      m = (s || "").match(_numExp) || [];
      i = m.length;

      while (--i > -1) {
        n = Number(m[i]);
        m[i] = (dec = n - (n |= 0)) ? (dec * rnd + (dec < 0 ? -0.5 : 0.5) | 0) / rnd + n : n; //convert strings to Numbers and round to 5 decimal places to avoid issues with tiny numbers. Roughly 20x faster than Number.toFixed(). We also must make sure to round before dividing so that values like 0.9999999999 become 1 to avoid glitches in browser rendering and interpretation of flipped/rotated 3D matrices. And don't just multiply the number by rnd, floor it, and then divide by rnd because the bitwise operations max out at a 32-bit signed integer, thus it could get clipped at a relatively low value (like 22,000.00000 for example).
      }

      return force2D && m.length > 6 ? [m[0], m[1], m[4], m[5], m[12], m[13]] : m;
    },

    /**
     * Parses the transform values for an element, returning an object with x, y, z, scaleX, scaleY, scaleZ, rotation, rotationX, rotationY, skewX, and skewY properties. Note: by default (for performance reasons), all skewing is combined into skewX and rotation but skewY still has a place in the transform object so that we can record how much of the skew is attributed to skewX vs skewY. Remember, a skewY of 10 looks the same as a rotation of 10 and skewX of -10.
     * @param {!Object} t target element
     * @param {Object=} cs computed style object (optional)
     * @param {boolean=} rec if true, the transform values will be recorded to the target element's _gsTransform object, like target._gsTransform = {x:0, y:0, z:0, scaleX:1...}
     * @param {boolean=} parse if true, we'll ignore any _gsTransform values that already exist on the element, and force a reparsing of the css (calculated style)
     * @return {object} object containing all of the transform properties/values like {x:0, y:0, z:0, scaleX:1...}
     */
    _getTransform = _internals.getTransform = function (t, cs, rec, parse) {
      if (t._gsTransform && rec && !parse) {
        return t._gsTransform; //if the element already has a _gsTransform, use that. Note: some browsers don't accurately return the calculated style for the transform (particularly for SVG), so it's almost always safest to just use the values we've already applied rather than re-parsing things.
      }

      var tm = rec ? t._gsTransform || new Transform() : new Transform(),
          invX = tm.scaleX < 0,
          //in order to interpret things properly, we need to know if the user applied a negative scaleX previously so that we can adjust the rotation and skewX accordingly. Otherwise, if we always interpret a flipped matrix as affecting scaleY and the user only wants to tween the scaleX on multiple sequential tweens, it would keep the negative scaleY without that being the user's intent.
      min = 0.00002,
          rnd = 100000,
          zOrigin = _supports3D ? parseFloat(_getStyle(t, _transformOriginProp, cs, false, "0 0 0").split(" ")[2]) || tm.zOrigin || 0 : 0,
          defaultTransformPerspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0,
          m,
          i,
          scaleX,
          scaleY,
          rotation,
          skewX;
      tm.svg = !!(t.getCTM && _isSVG(t));

      if (tm.svg) {
        _parseSVGOrigin(t, _getStyle(t, _transformOriginProp, cs, false, "50% 50%") + "", tm, t.getAttribute("data-svg-origin"));

        _useSVGTransformAttr = CSSPlugin.useSVGTransformAttr || _forceSVGTransformAttr;
      }

      m = _getMatrix(t);

      if (m !== _identity2DMatrix) {
        if (m.length === 16) {
          //we'll only look at these position-related 6 variables first because if x/y/z all match, it's relatively safe to assume we don't need to re-parse everything which risks losing important rotational information (like rotationX:180 plus rotationY:180 would look the same as rotation:180 - there's no way to know for sure which direction was taken based solely on the matrix3d() values)
          var a11 = m[0],
              a21 = m[1],
              a31 = m[2],
              a41 = m[3],
              a12 = m[4],
              a22 = m[5],
              a32 = m[6],
              a42 = m[7],
              a13 = m[8],
              a23 = m[9],
              a33 = m[10],
              a14 = m[12],
              a24 = m[13],
              a34 = m[14],
              a43 = m[11],
              angle = Math.atan2(a32, a33),
              t1,
              t2,
              t3,
              t4,
              cos,
              sin; //we manually compensate for non-zero z component of transformOrigin to work around bugs in Safari

          if (tm.zOrigin) {
            a34 = -tm.zOrigin;
            a14 = a13 * a34 - m[12];
            a24 = a23 * a34 - m[13];
            a34 = a33 * a34 + tm.zOrigin - m[14];
          } //note for possible future consolidation: rotationX: Math.atan2(a32, a33), rotationY: Math.atan2(-a31, Math.sqrt(a33 * a33 + a32 * a32)), rotation: Math.atan2(a21, a11), skew: Math.atan2(a12, a22). However, it doesn't seem to be quite as reliable as the full-on backwards rotation procedure.


          tm.rotationX = angle * _RAD2DEG; //rotationX

          if (angle) {
            cos = Math.cos(-angle);
            sin = Math.sin(-angle);
            t1 = a12 * cos + a13 * sin;
            t2 = a22 * cos + a23 * sin;
            t3 = a32 * cos + a33 * sin;
            a13 = a12 * -sin + a13 * cos;
            a23 = a22 * -sin + a23 * cos;
            a33 = a32 * -sin + a33 * cos;
            a43 = a42 * -sin + a43 * cos;
            a12 = t1;
            a22 = t2;
            a32 = t3;
          } //rotationY


          angle = Math.atan2(-a31, a33);
          tm.rotationY = angle * _RAD2DEG;

          if (angle) {
            cos = Math.cos(-angle);
            sin = Math.sin(-angle);
            t1 = a11 * cos - a13 * sin;
            t2 = a21 * cos - a23 * sin;
            t3 = a31 * cos - a33 * sin;
            a23 = a21 * sin + a23 * cos;
            a33 = a31 * sin + a33 * cos;
            a43 = a41 * sin + a43 * cos;
            a11 = t1;
            a21 = t2;
            a31 = t3;
          } //rotationZ


          angle = Math.atan2(a21, a11);
          tm.rotation = angle * _RAD2DEG;

          if (angle) {
            cos = Math.cos(angle);
            sin = Math.sin(angle);
            t1 = a11 * cos + a21 * sin;
            t2 = a12 * cos + a22 * sin;
            t3 = a13 * cos + a23 * sin;
            a21 = a21 * cos - a11 * sin;
            a22 = a22 * cos - a12 * sin;
            a23 = a23 * cos - a13 * sin;
            a11 = t1;
            a12 = t2;
            a13 = t3;
          }

          if (tm.rotationX && Math.abs(tm.rotationX) + Math.abs(tm.rotation) > 359.9) {
            //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
            tm.rotationX = tm.rotation = 0;
            tm.rotationY = 180 - tm.rotationY;
          } //skewX


          angle = Math.atan2(a12, a22); //scales

          tm.scaleX = (Math.sqrt(a11 * a11 + a21 * a21 + a31 * a31) * rnd + 0.5 | 0) / rnd;
          tm.scaleY = (Math.sqrt(a22 * a22 + a32 * a32) * rnd + 0.5 | 0) / rnd;
          tm.scaleZ = (Math.sqrt(a13 * a13 + a23 * a23 + a33 * a33) * rnd + 0.5 | 0) / rnd;
          a11 /= tm.scaleX;
          a12 /= tm.scaleY;
          a21 /= tm.scaleX;
          a22 /= tm.scaleY;

          if (Math.abs(angle) > min) {
            tm.skewX = angle * _RAD2DEG;
            a12 = 0; //unskews

            if (tm.skewType !== "simple") {
              tm.scaleY *= 1 / Math.cos(angle); //by default, we compensate the scale based on the skew so that the element maintains a similar proportion when skewed, so we have to alter the scaleY here accordingly to match the default (non-adjusted) skewing that CSS does (stretching more and more as it skews).
            }
          } else {
            tm.skewX = 0;
          }
          /* //for testing purposes
          var transform = "matrix3d(",
          	comma = ",",
          	zero = "0";
          a13 /= tm.scaleZ;
          a23 /= tm.scaleZ;
          a31 /= tm.scaleX;
          a32 /= tm.scaleY;
          a33 /= tm.scaleZ;
          transform += ((a11 < min && a11 > -min) ? zero : a11) + comma + ((a21 < min && a21 > -min) ? zero : a21) + comma + ((a31 < min && a31 > -min) ? zero : a31);
          transform += comma + ((a41 < min && a41 > -min) ? zero : a41) + comma + ((a12 < min && a12 > -min) ? zero : a12) + comma + ((a22 < min && a22 > -min) ? zero : a22);
          transform += comma + ((a32 < min && a32 > -min) ? zero : a32) + comma + ((a42 < min && a42 > -min) ? zero : a42) + comma + ((a13 < min && a13 > -min) ? zero : a13);
          transform += comma + ((a23 < min && a23 > -min) ? zero : a23) + comma + ((a33 < min && a33 > -min) ? zero : a33) + comma + ((a43 < min && a43 > -min) ? zero : a43) + comma;
          transform += a14 + comma + a24 + comma + a34 + comma + (tm.perspective ? (1 + (-a34 / tm.perspective)) : 1) + ")";
          console.log(transform);
          document.querySelector(".test").style[_transformProp] = transform;
          */


          tm.perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
          tm.x = a14;
          tm.y = a24;
          tm.z = a34;

          if (tm.svg) {
            tm.x -= tm.xOrigin - (tm.xOrigin * a11 - tm.yOrigin * a12);
            tm.y -= tm.yOrigin - (tm.yOrigin * a21 - tm.xOrigin * a22);
          }
        } else if (!_supports3D || parse || !m.length || tm.x !== m[4] || tm.y !== m[5] || !tm.rotationX && !tm.rotationY) {
          //sometimes a 6-element matrix is returned even when we performed 3D transforms, like if rotationX and rotationY are 180. In cases like this, we still need to honor the 3D transforms. If we just rely on the 2D info, it could affect how the data is interpreted, like scaleY might get set to -1 or rotation could get offset by 180 degrees. For example, do a TweenLite.to(element, 1, {css:{rotationX:180, rotationY:180}}) and then later, TweenLite.to(element, 1, {css:{rotationX:0}}) and without this conditional logic in place, it'd jump to a state of being unrotated when the 2nd tween starts. Then again, we need to honor the fact that the user COULD alter the transforms outside of CSSPlugin, like by manually applying new css, so we try to sense that by looking at x and y because if those changed, we know the changes were made outside CSSPlugin and we force a reinterpretation of the matrix values. Also, in Webkit browsers, if the element's "display" is "none", its calculated style value will always return empty, so if we've already recorded the values in the _gsTransform object, we'll just rely on those.
          var k = m.length >= 6,
              a = k ? m[0] : 1,
              b = m[1] || 0,
              c = m[2] || 0,
              d = k ? m[3] : 1;
          tm.x = m[4] || 0;
          tm.y = m[5] || 0;
          scaleX = Math.sqrt(a * a + b * b);
          scaleY = Math.sqrt(d * d + c * c);
          rotation = a || b ? Math.atan2(b, a) * _RAD2DEG : tm.rotation || 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).

          skewX = c || d ? Math.atan2(c, d) * _RAD2DEG + rotation : tm.skewX || 0;
          tm.scaleX = scaleX;
          tm.scaleY = scaleY;
          tm.rotation = rotation;
          tm.skewX = skewX;

          if (_supports3D) {
            tm.rotationX = tm.rotationY = tm.z = 0;
            tm.perspective = defaultTransformPerspective;
            tm.scaleZ = 1;
          }

          if (tm.svg) {
            tm.x -= tm.xOrigin - (tm.xOrigin * a + tm.yOrigin * c);
            tm.y -= tm.yOrigin - (tm.xOrigin * b + tm.yOrigin * d);
          }
        }

        if (Math.abs(tm.skewX) > 90 && Math.abs(tm.skewX) < 270) {
          if (invX) {
            tm.scaleX *= -1;
            tm.skewX += tm.rotation <= 0 ? 180 : -180;
            tm.rotation += tm.rotation <= 0 ? 180 : -180;
          } else {
            tm.scaleY *= -1;
            tm.skewX += tm.skewX <= 0 ? 180 : -180;
          }
        }

        tm.zOrigin = zOrigin; //some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 0 in these cases. The conditional logic here is faster than calling Math.abs(). Also, browsers tend to render a SLIGHTLY rotated object in a fuzzy way, so we need to snap to exactly 0 when appropriate.

        for (i in tm) {
          if (tm[i] < min) if (tm[i] > -min) {
            tm[i] = 0;
          }
        }
      } //DEBUG: _log("parsed rotation of " + t.getAttribute("id")+": "+(tm.rotationX)+", "+(tm.rotationY)+", "+(tm.rotation)+", scale: "+tm.scaleX+", "+tm.scaleY+", "+tm.scaleZ+", position: "+tm.x+", "+tm.y+", "+tm.z+", perspective: "+tm.perspective+ ", origin: "+ tm.xOrigin+ ","+ tm.yOrigin);


      if (rec) {
        t._gsTransform = tm; //record to the object's _gsTransform which we use so that tweens can control individual properties independently (we need all the properties to accurately recompose the matrix in the setRatio() method)

        if (tm.svg) {
          //if we're supposed to apply transforms to the SVG element's "transform" attribute, make sure there aren't any CSS transforms applied or they'll override the attribute ones. Also clear the transform attribute if we're using CSS, just to be clean.
          if (_useSVGTransformAttr && t.style[_transformProp]) {
            TweenLite.delayedCall(0.001, function () {
              //if we apply this right away (before anything has rendered), we risk there being no transforms for a brief moment and it also interferes with adjusting the transformOrigin in a tween with immediateRender:true (it'd try reading the matrix and it wouldn't have the appropriate data in place because we just removed it).
              _removeProp(t.style, _transformProp);
            });
          } else if (!_useSVGTransformAttr && t.getAttribute("transform")) {
            TweenLite.delayedCall(0.001, function () {
              t.removeAttribute("transform");
            });
          }
        }
      }

      return tm;
    },
        //for setting 2D transforms in IE6, IE7, and IE8 (must use a "filter" to emulate the behavior of modern day browser transforms)
    _setIETransformRatio = function _setIETransformRatio(v) {
      var t = this.data,
          //refers to the element's _gsTransform object
      ang = -t.rotation * _DEG2RAD,
          skew = ang + t.skewX * _DEG2RAD,
          rnd = 100000,
          a = (Math.cos(ang) * t.scaleX * rnd | 0) / rnd,
          b = (Math.sin(ang) * t.scaleX * rnd | 0) / rnd,
          c = (Math.sin(skew) * -t.scaleY * rnd | 0) / rnd,
          d = (Math.cos(skew) * t.scaleY * rnd | 0) / rnd,
          style = this.t.style,
          cs = this.t.currentStyle,
          filters,
          val;

      if (!cs) {
        return;
      }

      val = b; //just for swapping the variables an inverting them (reused "val" to avoid creating another variable in memory). IE's filter matrix uses a non-standard matrix configuration (angle goes the opposite way, and b and c are reversed and inverted)

      b = -c;
      c = -val;
      filters = cs.filter;
      style.filter = ""; //remove filters so that we can accurately measure offsetWidth/offsetHeight

      var w = this.t.offsetWidth,
          h = this.t.offsetHeight,
          clip = cs.position !== "absolute",
          m = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + b + ", M21=" + c + ", M22=" + d,
          ox = t.x + w * t.xPercent / 100,
          oy = t.y + h * t.yPercent / 100,
          dx,
          dy; //if transformOrigin is being used, adjust the offset x and y

      if (t.ox != null) {
        dx = (t.oxp ? w * t.ox * 0.01 : t.ox) - w / 2;
        dy = (t.oyp ? h * t.oy * 0.01 : t.oy) - h / 2;
        ox += dx - (dx * a + dy * b);
        oy += dy - (dx * c + dy * d);
      }

      if (!clip) {
        m += ", sizingMethod='auto expand')";
      } else {
        dx = w / 2;
        dy = h / 2; //translate to ensure that transformations occur around the correct origin (default is center).

        m += ", Dx=" + (dx - (dx * a + dy * b) + ox) + ", Dy=" + (dy - (dx * c + dy * d) + oy) + ")";
      }

      if (filters.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1) {
        style.filter = filters.replace(_ieSetMatrixExp, m);
      } else {
        style.filter = m + " " + filters; //we must always put the transform/matrix FIRST (before alpha(opacity=xx)) to avoid an IE bug that slices part of the object when rotation is applied with alpha.
      } //at the end or beginning of the tween, if the matrix is normal (1, 0, 0, 1) and opacity is 100 (or doesn't exist), remove the filter to improve browser performance.


      if (v === 0 || v === 1) if (a === 1) if (b === 0) if (c === 0) if (d === 1) if (!clip || m.indexOf("Dx=0, Dy=0") !== -1) if (!_opacityExp.test(filters) || parseFloat(RegExp.$1) === 100) if (filters.indexOf("gradient(" && filters.indexOf("Alpha")) === -1) {
        style.removeAttribute("filter");
      } //we must set the margins AFTER applying the filter in order to avoid some bugs in IE8 that could (in rare scenarios) cause them to be ignored intermittently (vibration).

      if (!clip) {
        var mult = _ieVers < 8 ? 1 : -1,
            //in Internet Explorer 7 and before, the box model is broken, causing the browser to treat the width/height of the actual rotated filtered image as the width/height of the box itself, but Microsoft corrected that in IE8. We must use a negative offset in IE8 on the right/bottom
        marg,
            prop,
            dif;
        dx = t.ieOffsetX || 0;
        dy = t.ieOffsetY || 0;
        t.ieOffsetX = Math.round((w - ((a < 0 ? -a : a) * w + (b < 0 ? -b : b) * h)) / 2 + ox);
        t.ieOffsetY = Math.round((h - ((d < 0 ? -d : d) * h + (c < 0 ? -c : c) * w)) / 2 + oy);

        for (i = 0; i < 4; i++) {
          prop = _margins[i];
          marg = cs[prop]; //we need to get the current margin in case it is being tweened separately (we want to respect that tween's changes)

          val = marg.indexOf("px") !== -1 ? parseFloat(marg) : _convertToPixels(this.t, prop, parseFloat(marg), marg.replace(_suffixExp, "")) || 0;

          if (val !== t[prop]) {
            dif = i < 2 ? -t.ieOffsetX : -t.ieOffsetY; //if another tween is controlling a margin, we cannot only apply the difference in the ieOffsets, so we essentially zero-out the dx and dy here in that case. We record the margin(s) later so that we can keep comparing them, making this code very flexible.
          } else {
            dif = i < 2 ? dx - t.ieOffsetX : dy - t.ieOffsetY;
          }

          style[prop] = (t[prop] = Math.round(val - dif * (i === 0 || i === 2 ? 1 : mult))) + "px";
        }
      }
    },

    /* translates a super small decimal to a string WITHOUT scientific notation
    _safeDecimal = function(n) {
    	var s = (n < 0 ? -n : n) + "",
    		a = s.split("e-");
    	return (n < 0 ? "-0." : "0.") + new Array(parseInt(a[1], 10) || 0).join("0") + a[0].split(".").join("");
    },
    */
    _setTransformRatio = _internals.set3DTransformRatio = _internals.setTransformRatio = function (v) {
      var t = this.data,
          //refers to the element's _gsTransform object
      style = this.t.style,
          angle = t.rotation,
          rotationX = t.rotationX,
          rotationY = t.rotationY,
          sx = t.scaleX,
          sy = t.scaleY,
          sz = t.scaleZ,
          x = t.x,
          y = t.y,
          z = t.z,
          isSVG = t.svg,
          perspective = t.perspective,
          force3D = t.force3D,
          skewY = t.skewY,
          skewX = t.skewX,
          t1,
          a11,
          a12,
          a13,
          a21,
          a22,
          a23,
          a31,
          a32,
          a33,
          a41,
          a42,
          a43,
          zOrigin,
          min,
          cos,
          sin,
          t2,
          transform,
          comma,
          zero,
          skew,
          rnd;

      if (skewY) {
        //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
        skewX += skewY;
        angle += skewY;
      } //check to see if we should render as 2D (and SVGs must use 2D when _useSVGTransformAttr is true)


      if (((v === 1 || v === 0) && force3D === "auto" && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !force3D) && !z && !perspective && !rotationY && !rotationX && sz === 1 || _useSVGTransformAttr && isSVG || !_supports3D) {
        //on the final render (which could be 0 for a from tween), if there are no 3D aspects, render in 2D to free up memory and improve performance especially on mobile devices. Check the tween's totalTime/totalDuration too in order to make sure it doesn't happen between repeats if it's a repeating tween.
        //2D
        if (angle || skewX || isSVG) {
          angle *= _DEG2RAD;
          skew = skewX * _DEG2RAD;
          rnd = 100000;
          a11 = Math.cos(angle) * sx;
          a21 = Math.sin(angle) * sx;
          a12 = Math.sin(angle - skew) * -sy;
          a22 = Math.cos(angle - skew) * sy;

          if (skew && t.skewType === "simple") {
            //by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
            t1 = Math.tan(skew - skewY * _DEG2RAD);
            t1 = Math.sqrt(1 + t1 * t1);
            a12 *= t1;
            a22 *= t1;

            if (skewY) {
              t1 = Math.tan(skewY * _DEG2RAD);
              t1 = Math.sqrt(1 + t1 * t1);
              a11 *= t1;
              a21 *= t1;
            }
          }

          if (isSVG) {
            x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12) + t.xOffset;
            y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22) + t.yOffset;

            if (_useSVGTransformAttr && (t.xPercent || t.yPercent)) {
              //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the matrix to simulate it.
              min = this.t.getBBox();
              x += t.xPercent * 0.01 * min.width;
              y += t.yPercent * 0.01 * min.height;
            }

            min = 0.000001;
            if (x < min) if (x > -min) {
              x = 0;
            }
            if (y < min) if (y > -min) {
              y = 0;
            }
          }

          transform = (a11 * rnd | 0) / rnd + "," + (a21 * rnd | 0) / rnd + "," + (a12 * rnd | 0) / rnd + "," + (a22 * rnd | 0) / rnd + "," + x + "," + y + ")";

          if (isSVG && _useSVGTransformAttr) {
            this.t.setAttribute("transform", "matrix(" + transform);
          } else {
            //some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 5 decimal places.
            style[_transformProp] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + transform;
          }
        } else {
          style[_transformProp] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + sx + ",0,0," + sy + "," + x + "," + y + ")";
        }

        return;
      }

      if (_isFirefox) {
        //Firefox has a bug (at least in v25) that causes it to render the transparent part of 32-bit PNG images as black when displayed inside an iframe and the 3D scale is very small and doesn't change sufficiently enough between renders (like if you use a Power4.easeInOut to scale from 0 to 1 where the beginning values only change a tiny amount to begin the tween before accelerating). In this case, we force the scale to be 0.00002 instead which is visually the same but works around the Firefox issue.
        min = 0.0001;

        if (sx < min && sx > -min) {
          sx = sz = 0.00002;
        }

        if (sy < min && sy > -min) {
          sy = sz = 0.00002;
        }

        if (perspective && !t.z && !t.rotationX && !t.rotationY) {
          //Firefox has a bug that causes elements to have an odd super-thin, broken/dotted black border on elements that have a perspective set but aren't utilizing 3D space (no rotationX, rotationY, or z).
          perspective = 0;
        }
      }

      if (angle || skewX) {
        angle *= _DEG2RAD;
        cos = a11 = Math.cos(angle);
        sin = a21 = Math.sin(angle);

        if (skewX) {
          angle -= skewX * _DEG2RAD;
          cos = Math.cos(angle);
          sin = Math.sin(angle);

          if (t.skewType === "simple") {
            //by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
            t1 = Math.tan((skewX - skewY) * _DEG2RAD);
            t1 = Math.sqrt(1 + t1 * t1);
            cos *= t1;
            sin *= t1;

            if (t.skewY) {
              t1 = Math.tan(skewY * _DEG2RAD);
              t1 = Math.sqrt(1 + t1 * t1);
              a11 *= t1;
              a21 *= t1;
            }
          }
        }

        a12 = -sin;
        a22 = cos;
      } else if (!rotationY && !rotationX && sz === 1 && !perspective && !isSVG) {
        //if we're only translating and/or 2D scaling, this is faster...
        style[_transformProp] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) translate3d(" : "translate3d(") + x + "px," + y + "px," + z + "px)" + (sx !== 1 || sy !== 1 ? " scale(" + sx + "," + sy + ")" : "");
        return;
      } else {
        a11 = a22 = 1;
        a12 = a21 = 0;
      } // KEY  INDEX   AFFECTS a[row][column]
      // a11  0       rotation, rotationY, scaleX
      // a21  1       rotation, rotationY, scaleX
      // a31  2       rotationY, scaleX
      // a41  3       rotationY, scaleX
      // a12  4       rotation, skewX, rotationX, scaleY
      // a22  5       rotation, skewX, rotationX, scaleY
      // a32  6       rotationX, scaleY
      // a42  7       rotationX, scaleY
      // a13  8       rotationY, rotationX, scaleZ
      // a23  9       rotationY, rotationX, scaleZ
      // a33  10      rotationY, rotationX, scaleZ
      // a43  11      rotationY, rotationX, perspective, scaleZ
      // a14  12      x, zOrigin, svgOrigin
      // a24  13      y, zOrigin, svgOrigin
      // a34  14      z, zOrigin
      // a44  15
      // rotation: Math.atan2(a21, a11)
      // rotationY: Math.atan2(a13, a33) (or Math.atan2(a13, a11))
      // rotationX: Math.atan2(a32, a33)


      a33 = 1;
      a13 = a23 = a31 = a32 = a41 = a42 = 0;
      a43 = perspective ? -1 / perspective : 0;
      zOrigin = t.zOrigin;
      min = 0.000001; //threshold below which browsers use scientific notation which won't work.

      comma = ",";
      zero = "0";
      angle = rotationY * _DEG2RAD;

      if (angle) {
        cos = Math.cos(angle);
        sin = Math.sin(angle);
        a31 = -sin;
        a41 = a43 * -sin;
        a13 = a11 * sin;
        a23 = a21 * sin;
        a33 = cos;
        a43 *= cos;
        a11 *= cos;
        a21 *= cos;
      }

      angle = rotationX * _DEG2RAD;

      if (angle) {
        cos = Math.cos(angle);
        sin = Math.sin(angle);
        t1 = a12 * cos + a13 * sin;
        t2 = a22 * cos + a23 * sin;
        a32 = a33 * sin;
        a42 = a43 * sin;
        a13 = a12 * -sin + a13 * cos;
        a23 = a22 * -sin + a23 * cos;
        a33 = a33 * cos;
        a43 = a43 * cos;
        a12 = t1;
        a22 = t2;
      }

      if (sz !== 1) {
        a13 *= sz;
        a23 *= sz;
        a33 *= sz;
        a43 *= sz;
      }

      if (sy !== 1) {
        a12 *= sy;
        a22 *= sy;
        a32 *= sy;
        a42 *= sy;
      }

      if (sx !== 1) {
        a11 *= sx;
        a21 *= sx;
        a31 *= sx;
        a41 *= sx;
      }

      if (zOrigin || isSVG) {
        if (zOrigin) {
          x += a13 * -zOrigin;
          y += a23 * -zOrigin;
          z += a33 * -zOrigin + zOrigin;
        }

        if (isSVG) {
          //due to bugs in some browsers, we need to manage the transform-origin of SVG manually
          x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12) + t.xOffset;
          y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22) + t.yOffset;
        }

        if (x < min && x > -min) {
          x = zero;
        }

        if (y < min && y > -min) {
          y = zero;
        }

        if (z < min && z > -min) {
          z = 0; //don't use string because we calculate perspective later and need the number.
        }
      } //optimized way of concatenating all the values into a string. If we do it all in one shot, it's slower because of the way browsers have to create temp strings and the way it affects memory. If we do it piece-by-piece with +=, it's a bit slower too. We found that doing it in these sized chunks works best overall:


      transform = t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix3d(" : "matrix3d(";
      transform += (a11 < min && a11 > -min ? zero : a11) + comma + (a21 < min && a21 > -min ? zero : a21) + comma + (a31 < min && a31 > -min ? zero : a31);
      transform += comma + (a41 < min && a41 > -min ? zero : a41) + comma + (a12 < min && a12 > -min ? zero : a12) + comma + (a22 < min && a22 > -min ? zero : a22);

      if (rotationX || rotationY || sz !== 1) {
        //performance optimization (often there's no rotationX or rotationY, so we can skip these calculations)
        transform += comma + (a32 < min && a32 > -min ? zero : a32) + comma + (a42 < min && a42 > -min ? zero : a42) + comma + (a13 < min && a13 > -min ? zero : a13);
        transform += comma + (a23 < min && a23 > -min ? zero : a23) + comma + (a33 < min && a33 > -min ? zero : a33) + comma + (a43 < min && a43 > -min ? zero : a43) + comma;
      } else {
        transform += ",0,0,0,0,1,0,";
      }

      transform += x + comma + y + comma + z + comma + (perspective ? 1 + -z / perspective : 1) + ")";
      style[_transformProp] = transform;
    };

    p = Transform.prototype;
    p.x = p.y = p.z = p.skewX = p.skewY = p.rotation = p.rotationX = p.rotationY = p.zOrigin = p.xPercent = p.yPercent = p.xOffset = p.yOffset = 0;
    p.scaleX = p.scaleY = p.scaleZ = 1;

    _registerComplexSpecialProp("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
      parser: function parser(t, e, parsingProp, cssp, pt, plugin, vars) {
        if (cssp._lastParsedTransform === vars) {
          return pt;
        } //only need to parse the transform once, and only if the browser supports it.


        cssp._lastParsedTransform = vars;
        var scaleFunc = vars.scale && typeof vars.scale === "function" ? vars.scale : 0,
            //if there's a function-based "scale" value, swap in the resulting numeric value temporarily. Otherwise, if it's called for both scaleX and scaleY independently, they may not match (like if the function uses Math.random()).
        swapFunc;

        if (typeof vars[parsingProp] === "function") {
          //whatever property triggers the initial parsing might be a function-based value in which case it already got called in parse(), thus we don't want to call it again in here. The most efficient way to avoid this is to temporarily swap the value directly into the vars object, and then after we do all our parsing in this function, we'll swap it back again.
          swapFunc = vars[parsingProp];
          vars[parsingProp] = e;
        }

        if (scaleFunc) {
          vars.scale = scaleFunc(_index, t);
        }

        var originalGSTransform = t._gsTransform,
            style = t.style,
            min = 0.000001,
            i = _transformProps.length,
            v = vars,
            endRotations = {},
            transformOriginString = "transformOrigin",
            m1 = _getTransform(t, _cs, true, v.parseTransform),
            orig = v.transform && (typeof v.transform === "function" ? v.transform(_index, _target) : v.transform),
            m2,
            copy,
            has3D,
            hasChange,
            dr,
            x,
            y,
            matrix,
            p;

        m1.skewType = v.skewType || m1.skewType || CSSPlugin.defaultSkewType;
        cssp._transform = m1;

        if ("rotationZ" in v) {
          v.rotation = v.rotationZ;
        }

        if (orig && typeof orig === "string" && _transformProp) {
          //for values like transform:"rotate(60deg) scale(0.5, 0.8)"
          copy = _tempDiv.style; //don't use the original target because it might be SVG in which case some browsers don't report computed style correctly.

          copy[_transformProp] = orig;
          copy.display = "block"; //if display is "none", the browser often refuses to report the transform properties correctly.

          copy.position = "absolute";

          if (orig.indexOf("%") !== -1) {
            //%-based translations will fail unless we set the width/height to match the original target...
            copy.width = _getStyle(t, "width");
            copy.height = _getStyle(t, "height");
          }

          _doc.body.appendChild(_tempDiv);

          m2 = _getTransform(_tempDiv, null, false);

          if (m1.skewType === "simple") {
            //the default _getTransform() reports the skewX/scaleY as if skewType is "compensated", thus we need to adjust that here if skewType is "simple".
            m2.scaleY *= Math.cos(m2.skewX * _DEG2RAD);
          }

          if (m1.svg) {
            //if it's an SVG element, x/y part of the matrix will be affected by whatever we use as the origin and the offsets, so compensate here...
            x = m1.xOrigin;
            y = m1.yOrigin;
            m2.x -= m1.xOffset;
            m2.y -= m1.yOffset;

            if (v.transformOrigin || v.svgOrigin) {
              //if this tween is altering the origin, we must factor that in here. The actual work of recording the transformOrigin values and setting up the PropTween is done later (still inside this function) so we cannot leave the changes intact here - we only want to update the x/y accordingly.
              orig = {};

              _parseSVGOrigin(t, _parsePosition(v.transformOrigin), orig, v.svgOrigin, v.smoothOrigin, true);

              x = orig.xOrigin;
              y = orig.yOrigin;
              m2.x -= orig.xOffset - m1.xOffset;
              m2.y -= orig.yOffset - m1.yOffset;
            }

            if (x || y) {
              matrix = _getMatrix(_tempDiv, true);
              m2.x -= x - (x * matrix[0] + y * matrix[2]);
              m2.y -= y - (x * matrix[1] + y * matrix[3]);
            }
          }

          _doc.body.removeChild(_tempDiv);

          if (!m2.perspective) {
            m2.perspective = m1.perspective; //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
          }

          if (v.xPercent != null) {
            m2.xPercent = _parseVal(v.xPercent, m1.xPercent);
          }

          if (v.yPercent != null) {
            m2.yPercent = _parseVal(v.yPercent, m1.yPercent);
          }
        } else if (_typeof(v) === "object") {
          //for values like scaleX, scaleY, rotation, x, y, skewX, and skewY or transform:{...} (object)
          m2 = {
            scaleX: _parseVal(v.scaleX != null ? v.scaleX : v.scale, m1.scaleX),
            scaleY: _parseVal(v.scaleY != null ? v.scaleY : v.scale, m1.scaleY),
            scaleZ: _parseVal(v.scaleZ, m1.scaleZ),
            x: _parseVal(v.x, m1.x),
            y: _parseVal(v.y, m1.y),
            z: _parseVal(v.z, m1.z),
            xPercent: _parseVal(v.xPercent, m1.xPercent),
            yPercent: _parseVal(v.yPercent, m1.yPercent),
            perspective: _parseVal(v.transformPerspective, m1.perspective)
          };
          dr = v.directionalRotation;

          if (dr != null) {
            if (_typeof(dr) === "object") {
              for (copy in dr) {
                v[copy] = dr[copy];
              }
            } else {
              v.rotation = dr;
            }
          }

          if (typeof v.x === "string" && v.x.indexOf("%") !== -1) {
            m2.x = 0;
            m2.xPercent = _parseVal(v.x, m1.xPercent);
          }

          if (typeof v.y === "string" && v.y.indexOf("%") !== -1) {
            m2.y = 0;
            m2.yPercent = _parseVal(v.y, m1.yPercent);
          }

          m2.rotation = _parseAngle("rotation" in v ? v.rotation : "shortRotation" in v ? v.shortRotation + "_short" : m1.rotation, m1.rotation, "rotation", endRotations);

          if (_supports3D) {
            m2.rotationX = _parseAngle("rotationX" in v ? v.rotationX : "shortRotationX" in v ? v.shortRotationX + "_short" : m1.rotationX || 0, m1.rotationX, "rotationX", endRotations);
            m2.rotationY = _parseAngle("rotationY" in v ? v.rotationY : "shortRotationY" in v ? v.shortRotationY + "_short" : m1.rotationY || 0, m1.rotationY, "rotationY", endRotations);
          }

          m2.skewX = _parseAngle(v.skewX, m1.skewX);
          m2.skewY = _parseAngle(v.skewY, m1.skewY);
        }

        if (_supports3D && v.force3D != null) {
          m1.force3D = v.force3D;
          hasChange = true;
        }

        has3D = m1.force3D || m1.z || m1.rotationX || m1.rotationY || m2.z || m2.rotationX || m2.rotationY || m2.perspective;

        if (!has3D && v.scale != null) {
          m2.scaleZ = 1; //no need to tween scaleZ.
        }

        while (--i > -1) {
          p = _transformProps[i];
          orig = m2[p] - m1[p];

          if (orig > min || orig < -min || v[p] != null || _forcePT[p] != null) {
            hasChange = true;
            pt = new CSSPropTween(m1, p, m1[p], orig, pt);

            if (p in endRotations) {
              pt.e = endRotations[p]; //directional rotations typically have compensated values during the tween, but we need to make sure they end at exactly what the user requested
            }

            pt.xs0 = 0; //ensures the value stays numeric in setRatio()

            pt.plugin = plugin;

            cssp._overwriteProps.push(pt.n);
          }
        }

        orig = v.transformOrigin;

        if (m1.svg && (orig || v.svgOrigin)) {
          x = m1.xOffset; //when we change the origin, in order to prevent things from jumping we adjust the x/y so we must record those here so that we can create PropTweens for them and flip them at the same time as the origin

          y = m1.yOffset;

          _parseSVGOrigin(t, _parsePosition(orig), m2, v.svgOrigin, v.smoothOrigin);

          pt = _addNonTweeningNumericPT(m1, "xOrigin", (originalGSTransform ? m1 : m2).xOrigin, m2.xOrigin, pt, transformOriginString); //note: if there wasn't a transformOrigin defined yet, just start with the destination one; it's wasteful otherwise, and it causes problems with fromTo() tweens. For example, TweenLite.to("#wheel", 3, {rotation:180, transformOrigin:"50% 50%", delay:1}); TweenLite.fromTo("#wheel", 3, {scale:0.5, transformOrigin:"50% 50%"}, {scale:1, delay:2}); would cause a jump when the from values revert at the beginning of the 2nd tween.

          pt = _addNonTweeningNumericPT(m1, "yOrigin", (originalGSTransform ? m1 : m2).yOrigin, m2.yOrigin, pt, transformOriginString);

          if (x !== m1.xOffset || y !== m1.yOffset) {
            pt = _addNonTweeningNumericPT(m1, "xOffset", originalGSTransform ? x : m1.xOffset, m1.xOffset, pt, transformOriginString);
            pt = _addNonTweeningNumericPT(m1, "yOffset", originalGSTransform ? y : m1.yOffset, m1.yOffset, pt, transformOriginString);
          }

          orig = "0px 0px"; //certain browsers (like firefox) completely botch transform-origin, so we must remove it to prevent it from contaminating transforms. We manage it ourselves with xOrigin and yOrigin
        }

        if (orig || _supports3D && has3D && m1.zOrigin) {
          //if anything 3D is happening and there's a transformOrigin with a z component that's non-zero, we must ensure that the transformOrigin's z-component is set to 0 so that we can manually do those calculations to get around Safari bugs. Even if the user didn't specifically define a "transformOrigin" in this particular tween (maybe they did it via css directly).
          if (_transformProp) {
            hasChange = true;
            p = _transformOriginProp;
            orig = (orig || _getStyle(t, p, _cs, false, "50% 50%")) + ""; //cast as string to avoid errors

            pt = new CSSPropTween(style, p, 0, 0, pt, -1, transformOriginString);
            pt.b = style[p];
            pt.plugin = plugin;

            if (_supports3D) {
              copy = m1.zOrigin;
              orig = orig.split(" ");
              m1.zOrigin = (orig.length > 2 && !(copy !== 0 && orig[2] === "0px") ? parseFloat(orig[2]) : copy) || 0; //Safari doesn't handle the z part of transformOrigin correctly, so we'll manually handle it in the _set3DTransformRatio() method.

              pt.xs0 = pt.e = orig[0] + " " + (orig[1] || "50%") + " 0px"; //we must define a z value of 0px specifically otherwise iOS 5 Safari will stick with the old one (if one was defined)!

              pt = new CSSPropTween(m1, "zOrigin", 0, 0, pt, -1, pt.n); //we must create a CSSPropTween for the _gsTransform.zOrigin so that it gets reset properly at the beginning if the tween runs backward (as opposed to just setting m1.zOrigin here)

              pt.b = copy;
              pt.xs0 = pt.e = m1.zOrigin;
            } else {
              pt.xs0 = pt.e = orig;
            } //for older versions of IE (6-8), we need to manually calculate things inside the setRatio() function. We record origin x and y (ox and oy) and whether or not the values are percentages (oxp and oyp).

          } else {
            _parsePosition(orig + "", m1);
          }
        }

        if (hasChange) {
          cssp._transformType = !(m1.svg && _useSVGTransformAttr) && (has3D || this._transformType === 3) ? 3 : 2; //quicker than calling cssp._enableTransforms();
        }

        if (swapFunc) {
          vars[parsingProp] = swapFunc;
        }

        if (scaleFunc) {
          vars.scale = scaleFunc;
        }

        return pt;
      },
      prefix: true
    });

    _registerComplexSpecialProp("boxShadow", {
      defaultValue: "0px 0px 0px 0px #999",
      prefix: true,
      color: true,
      multi: true,
      keyword: "inset"
    });

    _registerComplexSpecialProp("borderRadius", {
      defaultValue: "0px",
      parser: function parser(t, e, p, cssp, pt, plugin) {
        e = this.format(e);
        var props = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
            style = t.style,
            ea1,
            i,
            es2,
            bs2,
            bs,
            es,
            bn,
            en,
            w,
            h,
            esfx,
            bsfx,
            rel,
            hn,
            vn,
            em;
        w = parseFloat(t.offsetWidth);
        h = parseFloat(t.offsetHeight);
        ea1 = e.split(" ");

        for (i = 0; i < props.length; i++) {
          //if we're dealing with percentages, we must convert things separately for the horizontal and vertical axis!
          if (this.p.indexOf("border")) {
            //older browsers used a prefix
            props[i] = _checkPropPrefix(props[i]);
          }

          bs = bs2 = _getStyle(t, props[i], _cs, false, "0px");

          if (bs.indexOf(" ") !== -1) {
            bs2 = bs.split(" ");
            bs = bs2[0];
            bs2 = bs2[1];
          }

          es = es2 = ea1[i];
          bn = parseFloat(bs);
          bsfx = bs.substr((bn + "").length);
          rel = es.charAt(1) === "=";

          if (rel) {
            en = parseInt(es.charAt(0) + "1", 10);
            es = es.substr(2);
            en *= parseFloat(es);
            esfx = es.substr((en + "").length - (en < 0 ? 1 : 0)) || "";
          } else {
            en = parseFloat(es);
            esfx = es.substr((en + "").length);
          }

          if (esfx === "") {
            esfx = _suffixMap[p] || bsfx;
          }

          if (esfx !== bsfx) {
            hn = _convertToPixels(t, "borderLeft", bn, bsfx); //horizontal number (we use a bogus "borderLeft" property just because the _convertToPixels() method searches for the keywords "Left", "Right", "Top", and "Bottom" to determine of it's a horizontal or vertical property, and we need "border" in the name so that it knows it should measure relative to the element itself, not its parent.

            vn = _convertToPixels(t, "borderTop", bn, bsfx); //vertical number

            if (esfx === "%") {
              bs = hn / w * 100 + "%";
              bs2 = vn / h * 100 + "%";
            } else if (esfx === "em") {
              em = _convertToPixels(t, "borderLeft", 1, "em");
              bs = hn / em + "em";
              bs2 = vn / em + "em";
            } else {
              bs = hn + "px";
              bs2 = vn + "px";
            }

            if (rel) {
              es = parseFloat(bs) + en + esfx;
              es2 = parseFloat(bs2) + en + esfx;
            }
          }

          pt = _parseComplex(style, props[i], bs + " " + bs2, es + " " + es2, false, "0px", pt);
        }

        return pt;
      },
      prefix: true,
      formatter: _getFormatter("0px 0px 0px 0px", false, true)
    });

    _registerComplexSpecialProp("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
      defaultValue: "0px",
      parser: function parser(t, e, p, cssp, pt, plugin) {
        return _parseComplex(t.style, p, this.format(_getStyle(t, p, _cs, false, "0px 0px")), this.format(e), false, "0px", pt);
      },
      prefix: true,
      formatter: _getFormatter("0px 0px", false, true)
    });

    _registerComplexSpecialProp("backgroundPosition", {
      defaultValue: "0 0",
      parser: function parser(t, e, p, cssp, pt, plugin) {
        var bp = "background-position",
            cs = _cs || _getComputedStyle(t, null),
            bs = this.format((cs ? _ieVers ? cs.getPropertyValue(bp + "-x") + " " + cs.getPropertyValue(bp + "-y") : cs.getPropertyValue(bp) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
            //Internet Explorer doesn't report background-position correctly - we must query background-position-x and background-position-y and combine them (even in IE10). Before IE9, we must do the same with the currentStyle object and use camelCase
        es = this.format(e),
            ba,
            ea,
            i,
            pct,
            overlap,
            src;

        if (bs.indexOf("%") !== -1 !== (es.indexOf("%") !== -1) && es.split(",").length < 2) {
          src = _getStyle(t, "backgroundImage").replace(_urlExp, "");

          if (src && src !== "none") {
            ba = bs.split(" ");
            ea = es.split(" ");

            _tempImg.setAttribute("src", src); //set the temp IMG's src to the background-image so that we can measure its width/height


            i = 2;

            while (--i > -1) {
              bs = ba[i];
              pct = bs.indexOf("%") !== -1;

              if (pct !== (ea[i].indexOf("%") !== -1)) {
                overlap = i === 0 ? t.offsetWidth - _tempImg.width : t.offsetHeight - _tempImg.height;
                ba[i] = pct ? parseFloat(bs) / 100 * overlap + "px" : parseFloat(bs) / overlap * 100 + "%";
              }
            }

            bs = ba.join(" ");
          }
        }

        return this.parseComplex(t.style, bs, es, pt, plugin);
      },
      formatter: _parsePosition
    });

    _registerComplexSpecialProp("backgroundSize", {
      defaultValue: "0 0",
      formatter: function formatter(v) {
        v += ""; //ensure it's a string

        return v.substr(0, 2) === "co" ? v : _parsePosition(v.indexOf(" ") === -1 ? v + " " + v : v); //if set to something like "100% 100%", Safari typically reports the computed style as just "100%" (no 2nd value), but we should ensure that there are two values, so copy the first one. Otherwise, it'd be interpreted as "100% 0" (wrong). Also remember that it could be "cover" or "contain" which we can't tween but should be able to set.
      }
    });

    _registerComplexSpecialProp("perspective", {
      defaultValue: "0px",
      prefix: true
    });

    _registerComplexSpecialProp("perspectiveOrigin", {
      defaultValue: "50% 50%",
      prefix: true
    });

    _registerComplexSpecialProp("transformStyle", {
      prefix: true
    });

    _registerComplexSpecialProp("backfaceVisibility", {
      prefix: true
    });

    _registerComplexSpecialProp("userSelect", {
      prefix: true
    });

    _registerComplexSpecialProp("margin", {
      parser: _getEdgeParser("marginTop,marginRight,marginBottom,marginLeft")
    });

    _registerComplexSpecialProp("padding", {
      parser: _getEdgeParser("paddingTop,paddingRight,paddingBottom,paddingLeft")
    });

    _registerComplexSpecialProp("clip", {
      defaultValue: "rect(0px,0px,0px,0px)",
      parser: function parser(t, e, p, cssp, pt, plugin) {
        var b, cs, delim;

        if (_ieVers < 9) {
          //IE8 and earlier don't report a "clip" value in the currentStyle - instead, the values are split apart into clipTop, clipRight, clipBottom, and clipLeft. Also, in IE7 and earlier, the values inside rect() are space-delimited, not comma-delimited.
          cs = t.currentStyle;
          delim = _ieVers < 8 ? " " : ",";
          b = "rect(" + cs.clipTop + delim + cs.clipRight + delim + cs.clipBottom + delim + cs.clipLeft + ")";
          e = this.format(e).split(",").join(delim);
        } else {
          b = this.format(_getStyle(t, this.p, _cs, false, this.dflt));
          e = this.format(e);
        }

        return this.parseComplex(t.style, b, e, pt, plugin);
      }
    });

    _registerComplexSpecialProp("textShadow", {
      defaultValue: "0px 0px 0px #999",
      color: true,
      multi: true
    });

    _registerComplexSpecialProp("autoRound,strictUnits", {
      parser: function parser(t, e, p, cssp, pt) {
        return pt;
      }
    }); //just so that we can ignore these properties (not tween them)


    _registerComplexSpecialProp("border", {
      defaultValue: "0px solid #000",
      parser: function parser(t, e, p, cssp, pt, plugin) {
        var bw = _getStyle(t, "borderTopWidth", _cs, false, "0px"),
            end = this.format(e).split(" "),
            esfx = end[0].replace(_suffixExp, "");

        if (esfx !== "px") {
          //if we're animating to a non-px value, we need to convert the beginning width to that unit.
          bw = parseFloat(bw) / _convertToPixels(t, "borderTopWidth", 1, esfx) + esfx;
        }

        return this.parseComplex(t.style, this.format(bw + " " + _getStyle(t, "borderTopStyle", _cs, false, "solid") + " " + _getStyle(t, "borderTopColor", _cs, false, "#000")), end.join(" "), pt, plugin);
      },
      color: true,
      formatter: function formatter(v) {
        var a = v.split(" ");
        return a[0] + " " + (a[1] || "solid") + " " + (v.match(_colorExp) || ["#000"])[0];
      }
    });

    _registerComplexSpecialProp("borderWidth", {
      parser: _getEdgeParser("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
    }); //Firefox doesn't pick up on borderWidth set in style sheets (only inline).


    _registerComplexSpecialProp("float,cssFloat,styleFloat", {
      parser: function parser(t, e, p, cssp, pt, plugin) {
        var s = t.style,
            prop = "cssFloat" in s ? "cssFloat" : "styleFloat";
        return new CSSPropTween(s, prop, 0, 0, pt, -1, p, false, 0, s[prop], e);
      }
    }); //opacity-related


    var _setIEOpacityRatio = function _setIEOpacityRatio(v) {
      var t = this.t,
          //refers to the element's style property
      filters = t.filter || _getStyle(this.data, "filter") || "",
          val = this.s + this.c * v | 0,
          skip;

      if (val === 100) {
        //for older versions of IE that need to use a filter to apply opacity, we should remove the filter if opacity hits 1 in order to improve performance, but make sure there isn't a transform (matrix) or gradient in the filters.
        if (filters.indexOf("atrix(") === -1 && filters.indexOf("radient(") === -1 && filters.indexOf("oader(") === -1) {
          t.removeAttribute("filter");
          skip = !_getStyle(this.data, "filter"); //if a class is applied that has an alpha filter, it will take effect (we don't want that), so re-apply our alpha filter in that case. We must first remove it and then check.
        } else {
          t.filter = filters.replace(_alphaFilterExp, "");
          skip = true;
        }
      }

      if (!skip) {
        if (this.xn1) {
          t.filter = filters = filters || "alpha(opacity=" + val + ")"; //works around bug in IE7/8 that prevents changes to "visibility" from being applied properly if the filter is changed to a different alpha on the same frame.
        }

        if (filters.indexOf("pacity") === -1) {
          //only used if browser doesn't support the standard opacity style property (IE 7 and 8). We omit the "O" to avoid case-sensitivity issues
          if (val !== 0 || !this.xn1) {
            //bugs in IE7/8 won't render the filter properly if opacity is ADDED on the same frame/render as "visibility" changes (this.xn1 is 1 if this tween is an "autoAlpha" tween)
            t.filter = filters + " alpha(opacity=" + val + ")"; //we round the value because otherwise, bugs in IE7/8 can prevent "visibility" changes from being applied properly.
          }
        } else {
          t.filter = filters.replace(_opacityExp, "opacity=" + val);
        }
      }
    };

    _registerComplexSpecialProp("opacity,alpha,autoAlpha", {
      defaultValue: "1",
      parser: function parser(t, e, p, cssp, pt, plugin) {
        var b = parseFloat(_getStyle(t, "opacity", _cs, false, "1")),
            style = t.style,
            isAutoAlpha = p === "autoAlpha";

        if (typeof e === "string" && e.charAt(1) === "=") {
          e = (e.charAt(0) === "-" ? -1 : 1) * parseFloat(e.substr(2)) + b;
        }

        if (isAutoAlpha && b === 1 && _getStyle(t, "visibility", _cs) === "hidden" && e !== 0) {
          //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
          b = 0;
        }

        if (_supportsOpacity) {
          pt = new CSSPropTween(style, "opacity", b, e - b, pt);
        } else {
          pt = new CSSPropTween(style, "opacity", b * 100, (e - b) * 100, pt);
          pt.xn1 = isAutoAlpha ? 1 : 0; //we need to record whether or not this is an autoAlpha so that in the setRatio(), we know to duplicate the setting of the alpha in order to work around a bug in IE7 and IE8 that prevents changes to "visibility" from taking effect if the filter is changed to a different alpha(opacity) at the same time. Setting it to the SAME value first, then the new value works around the IE7/8 bug.

          style.zoom = 1; //helps correct an IE issue.

          pt.type = 2;
          pt.b = "alpha(opacity=" + pt.s + ")";
          pt.e = "alpha(opacity=" + (pt.s + pt.c) + ")";
          pt.data = t;
          pt.plugin = plugin;
          pt.setRatio = _setIEOpacityRatio;
        }

        if (isAutoAlpha) {
          //we have to create the "visibility" PropTween after the opacity one in the linked list so that they run in the order that works properly in IE8 and earlier
          pt = new CSSPropTween(style, "visibility", 0, 0, pt, -1, null, false, 0, b !== 0 ? "inherit" : "hidden", e === 0 ? "hidden" : "inherit");
          pt.xs0 = "inherit";

          cssp._overwriteProps.push(pt.n);

          cssp._overwriteProps.push(p);
        }

        return pt;
      }
    });

    var _removeProp = function _removeProp(s, p) {
      if (p) {
        if (s.removeProperty) {
          if (p.substr(0, 2) === "ms" || p.substr(0, 6) === "webkit") {
            //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
            p = "-" + p;
          }

          s.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
        } else {
          //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
          s.removeAttribute(p);
        }
      }
    },
        _setClassNameRatio = function _setClassNameRatio(v) {
      this.t._gsClassPT = this;

      if (v === 1 || v === 0) {
        this.t.setAttribute("class", v === 0 ? this.b : this.e);
        var mpt = this.data,
            //first MiniPropTween
        s = this.t.style;

        while (mpt) {
          if (!mpt.v) {
            _removeProp(s, mpt.p);
          } else {
            s[mpt.p] = mpt.v;
          }

          mpt = mpt._next;
        }

        if (v === 1 && this.t._gsClassPT === this) {
          this.t._gsClassPT = null;
        }
      } else if (this.t.getAttribute("class") !== this.e) {
        this.t.setAttribute("class", this.e);
      }
    };

    _registerComplexSpecialProp("className", {
      parser: function parser(t, e, p, cssp, pt, plugin, vars) {
        var b = t.getAttribute("class") || "",
            //don't use t.className because it doesn't work consistently on SVG elements; getAttribute("class") and setAttribute("class", value") is more reliable.
        cssText = t.style.cssText,
            difData,
            bs,
            cnpt,
            cnptLookup,
            mpt;
        pt = cssp._classNamePT = new CSSPropTween(t, p, 0, 0, pt, 2);
        pt.setRatio = _setClassNameRatio;
        pt.pr = -11;
        _hasPriority = true;
        pt.b = b;
        bs = _getAllStyles(t, _cs); //if there's a className tween already operating on the target, force it to its end so that the necessary inline styles are removed and the class name is applied before we determine the end state (we don't want inline styles interfering that were there just for class-specific values)

        cnpt = t._gsClassPT;

        if (cnpt) {
          cnptLookup = {};
          mpt = cnpt.data; //first MiniPropTween which stores the inline styles - we need to force these so that the inline styles don't contaminate things. Otherwise, there's a small chance that a tween could start and the inline values match the destination values and they never get cleaned.

          while (mpt) {
            cnptLookup[mpt.p] = 1;
            mpt = mpt._next;
          }

          cnpt.setRatio(1);
        }

        t._gsClassPT = pt;
        pt.e = e.charAt(1) !== "=" ? e : b.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + (e.charAt(0) === "+" ? " " + e.substr(2) : "");
        t.setAttribute("class", pt.e);
        difData = _cssDif(t, bs, _getAllStyles(t), vars, cnptLookup);
        t.setAttribute("class", b);
        pt.data = difData.firstMPT;
        t.style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).

        pt = pt.xfirst = cssp.parse(t, difData.difs, pt, plugin); //we record the CSSPropTween as the xfirst so that we can handle overwriting propertly (if "className" gets overwritten, we must kill all the properties associated with the className part of the tween, so we can loop through from xfirst to the pt itself)

        return pt;
      }
    });

    var _setClearPropsRatio = function _setClearPropsRatio(v) {
      if (v === 1 || v === 0) if (this.data._totalTime === this.data._totalDuration && this.data.data !== "isFromStart") {
        //this.data refers to the tween. Only clear at the END of the tween (remember, from() tweens make the ratio go from 1 to 0, so we can't just check that and if the tween is the zero-duration one that's created internally to render the starting values in a from() tween, ignore that because otherwise, for example, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in).
        var s = this.t.style,
            transformParse = _specialProps.transform.parse,
            a,
            p,
            i,
            clearTransform,
            transform;

        if (this.e === "all") {
          s.cssText = "";
          clearTransform = true;
        } else {
          a = this.e.split(" ").join("").split(",");
          i = a.length;

          while (--i > -1) {
            p = a[i];

            if (_specialProps[p]) {
              if (_specialProps[p].parse === transformParse) {
                clearTransform = true;
              } else {
                p = p === "transformOrigin" ? _transformOriginProp : _specialProps[p].p; //ensures that special properties use the proper browser-specific property name, like "scaleX" might be "-webkit-transform" or "boxShadow" might be "-moz-box-shadow"
              }
            }

            _removeProp(s, p);
          }
        }

        if (clearTransform) {
          _removeProp(s, _transformProp);

          transform = this.t._gsTransform;

          if (transform) {
            if (transform.svg) {
              this.t.removeAttribute("data-svg-origin");
              this.t.removeAttribute("transform");
            }

            delete this.t._gsTransform;
          }
        }
      }
    };

    _registerComplexSpecialProp("clearProps", {
      parser: function parser(t, e, p, cssp, pt) {
        pt = new CSSPropTween(t, p, 0, 0, pt, 2);
        pt.setRatio = _setClearPropsRatio;
        pt.e = e;
        pt.pr = -10;
        pt.data = cssp._tween;
        _hasPriority = true;
        return pt;
      }
    });

    p = "bezier,throwProps,physicsProps,physics2D".split(",");
    i = p.length;

    while (i--) {
      _registerPluginProp(p[i]);
    }

    p = CSSPlugin.prototype;
    p._firstPT = p._lastParsedTransform = p._transform = null; //gets called when the tween renders for the first time. This kicks everything off, recording start/end values, etc.

    p._onInitTween = function (target, vars, tween, index) {
      if (!target.nodeType) {
        //css is only for dom elements
        return false;
      }

      this._target = _target = target;
      this._tween = tween;
      this._vars = vars;
      _index = index;
      _autoRound = vars.autoRound;
      _hasPriority = false;
      _suffixMap = vars.suffixMap || CSSPlugin.suffixMap;
      _cs = _getComputedStyle(target, "");
      _overwriteProps = this._overwriteProps;
      var style = target.style,
          v,
          pt,
          pt2,
          first,
          last,
          next,
          zIndex,
          tpt,
          threeD;
      if (_reqSafariFix) if (style.zIndex === "") {
        v = _getStyle(target, "zIndex", _cs);

        if (v === "auto" || v === "") {
          //corrects a bug in [non-Android] Safari that prevents it from repainting elements in their new positions if they don't have a zIndex set. We also can't just apply this inside _parseTransform() because anything that's moved in any way (like using "left" or "top" instead of transforms like "x" and "y") can be affected, so it is best to ensure that anything that's tweening has a z-index. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly. Plus zIndex is less memory-intensive.
          this._addLazySet(style, "zIndex", 0);
        }
      }

      if (typeof vars === "string") {
        first = style.cssText;
        v = _getAllStyles(target, _cs);
        style.cssText = first + ";" + vars;
        v = _cssDif(target, v, _getAllStyles(target)).difs;

        if (!_supportsOpacity && _opacityValExp.test(vars)) {
          v.opacity = parseFloat(RegExp.$1);
        }

        vars = v;
        style.cssText = first;
      }

      if (vars.className) {
        //className tweens will combine any differences they find in the css with the vars that are passed in, so {className:"myClass", scale:0.5, left:20} would work.
        this._firstPT = pt = _specialProps.className.parse(target, vars.className, "className", this, null, null, vars);
      } else {
        this._firstPT = pt = this.parse(target, vars, null);
      }

      if (this._transformType) {
        threeD = this._transformType === 3;

        if (!_transformProp) {
          style.zoom = 1; //helps correct an IE issue.
        } else if (_isSafari) {
          _reqSafariFix = true; //if zIndex isn't set, iOS Safari doesn't repaint things correctly sometimes (seemingly at random).

          if (style.zIndex === "") {
            zIndex = _getStyle(target, "zIndex", _cs);

            if (zIndex === "auto" || zIndex === "") {
              this._addLazySet(style, "zIndex", 0);
            }
          } //Setting WebkitBackfaceVisibility corrects 3 bugs:
          // 1) [non-Android] Safari skips rendering changes to "top" and "left" that are made on the same frame/render as a transform update.
          // 2) iOS Safari sometimes neglects to repaint elements in their new positions. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly.
          // 3) Safari sometimes displayed odd artifacts when tweening the transform (or WebkitTransform) property, like ghosts of the edges of the element remained. Definitely a browser bug.
          //Note: we allow the user to override the auto-setting by defining WebkitBackfaceVisibility in the vars of the tween.


          if (_isSafariLT6) {
            this._addLazySet(style, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (threeD ? "visible" : "hidden"));
          }
        }

        pt2 = pt;

        while (pt2 && pt2._next) {
          pt2 = pt2._next;
        }

        tpt = new CSSPropTween(target, "transform", 0, 0, null, 2);

        this._linkCSSP(tpt, null, pt2);

        tpt.setRatio = _transformProp ? _setTransformRatio : _setIETransformRatio;
        tpt.data = this._transform || _getTransform(target, _cs, true);
        tpt.tween = tween;
        tpt.pr = -1; //ensures that the transforms get applied after the components are updated.

        _overwriteProps.pop(); //we don't want to force the overwrite of all "transform" tweens of the target - we only care about individual transform properties like scaleX, rotation, etc. The CSSPropTween constructor automatically adds the property to _overwriteProps which is why we need to pop() here.

      }

      if (_hasPriority) {
        //reorders the linked list in order of pr (priority)
        while (pt) {
          next = pt._next;
          pt2 = first;

          while (pt2 && pt2.pr > pt.pr) {
            pt2 = pt2._next;
          }

          if (pt._prev = pt2 ? pt2._prev : last) {
            pt._prev._next = pt;
          } else {
            first = pt;
          }

          if (pt._next = pt2) {
            pt2._prev = pt;
          } else {
            last = pt;
          }

          pt = next;
        }

        this._firstPT = first;
      }

      return true;
    };

    p.parse = function (target, vars, pt, plugin) {
      var style = target.style,
          p,
          sp,
          bn,
          en,
          bs,
          es,
          bsfx,
          esfx,
          isStr,
          rel;

      for (p in vars) {
        es = vars[p]; //ending value string

        if (typeof es === "function") {
          es = es(_index, _target);
        }

        sp = _specialProps[p]; //SpecialProp lookup.

        if (sp) {
          pt = sp.parse(target, es, p, this, pt, plugin, vars);
        } else if (p.substr(0, 2) === "--") {
          //for tweening CSS variables (which always start with "--"). To maximize performance and simplicity, we bypass CSSPlugin altogether and just add a normal property tween to the tween instance itself.
          this._tween._propLookup[p] = this._addTween.call(this._tween, target.style, "setProperty", _getComputedStyle(target).getPropertyValue(p) + "", es + "", p, false, p);
          continue;
        } else {
          bs = _getStyle(target, p, _cs) + "";
          isStr = typeof es === "string";

          if (p === "color" || p === "fill" || p === "stroke" || p.indexOf("Color") !== -1 || isStr && _rgbhslExp.test(es)) {
            //Opera uses background: to define color sometimes in addition to backgroundColor:
            if (!isStr) {
              es = _parseColor(es);
              es = (es.length > 3 ? "rgba(" : "rgb(") + es.join(",") + ")";
            }

            pt = _parseComplex(style, p, bs, es, true, "transparent", pt, 0, plugin);
          } else if (isStr && _complexExp.test(es)) {
            pt = _parseComplex(style, p, bs, es, true, null, pt, 0, plugin);
          } else {
            bn = parseFloat(bs);
            bsfx = bn || bn === 0 ? bs.substr((bn + "").length) : ""; //remember, bs could be non-numeric like "normal" for fontWeight, so we should default to a blank suffix in that case.

            if (bs === "" || bs === "auto") {
              if (p === "width" || p === "height") {
                bn = _getDimension(target, p, _cs);
                bsfx = "px";
              } else if (p === "left" || p === "top") {
                bn = _calculateOffset(target, p, _cs);
                bsfx = "px";
              } else {
                bn = p !== "opacity" ? 0 : 1;
                bsfx = "";
              }
            }

            rel = isStr && es.charAt(1) === "=";

            if (rel) {
              en = parseInt(es.charAt(0) + "1", 10);
              es = es.substr(2);
              en *= parseFloat(es);
              esfx = es.replace(_suffixExp, "");
            } else {
              en = parseFloat(es);
              esfx = isStr ? es.replace(_suffixExp, "") : "";
            }

            if (esfx === "") {
              esfx = p in _suffixMap ? _suffixMap[p] : bsfx; //populate the end suffix, prioritizing the map, then if none is found, use the beginning suffix.
            }

            es = en || en === 0 ? (rel ? en + bn : en) + esfx : vars[p]; //ensures that any += or -= prefixes are taken care of. Record the end value before normalizing the suffix because we always want to end the tween on exactly what they intended even if it doesn't match the beginning value's suffix.
            //if the beginning/ending suffixes don't match, normalize them...

            if (bsfx !== esfx) if (esfx !== "" || p === "lineHeight") if (en || en === 0) if (bn) {
              //note: if the beginning value (bn) is 0, we don't need to convert units!
              bn = _convertToPixels(target, p, bn, bsfx);

              if (esfx === "%") {
                bn /= _convertToPixels(target, p, 100, "%") / 100;

                if (vars.strictUnits !== true) {
                  //some browsers report only "px" values instead of allowing "%" with getComputedStyle(), so we assume that if we're tweening to a %, we should start there too unless strictUnits:true is defined. This approach is particularly useful for responsive designs that use from() tweens.
                  bs = bn + "%";
                }
              } else if (esfx === "em" || esfx === "rem" || esfx === "vw" || esfx === "vh") {
                bn /= _convertToPixels(target, p, 1, esfx); //otherwise convert to pixels.
              } else if (esfx !== "px") {
                en = _convertToPixels(target, p, en, esfx);
                esfx = "px"; //we don't use bsfx after this, so we don't need to set it to px too.
              }

              if (rel) if (en || en === 0) {
                es = en + bn + esfx; //the changes we made affect relative calculations, so adjust the end value here.
              }
            }

            if (rel) {
              en += bn;
            }

            if ((bn || bn === 0) && (en || en === 0)) {
              //faster than isNaN(). Also, previously we required en !== bn but that doesn't really gain much performance and it prevents _parseToProxy() from working properly if beginning and ending values match but need to get tweened by an external plugin anyway. For example, a bezier tween where the target starts at left:0 and has these points: [{left:50},{left:0}] wouldn't work properly because when parsing the last point, it'd match the first (current) one and a non-tweening CSSPropTween would be recorded when we actually need a normal tween (type:0) so that things get updated during the tween properly.
              pt = new CSSPropTween(style, p, bn, en - bn, pt, 0, p, _autoRound !== false && (esfx === "px" || p === "zIndex"), 0, bs, es);
              pt.xs0 = esfx; //DEBUG: _log("tween "+p+" from "+pt.b+" ("+bn+esfx+") to "+pt.e+" with suffix: "+pt.xs0);
            } else if (style[p] === undefined || !es && (es + "" === "NaN" || es == null)) {
              _log("invalid " + p + " tween value: " + vars[p]);
            } else {
              pt = new CSSPropTween(style, p, en || bn || 0, 0, pt, -1, p, false, 0, bs, es);
              pt.xs0 = es === "none" && (p === "display" || p.indexOf("Style") !== -1) ? bs : es; //intermediate value should typically be set immediately (end value) except for "display" or things like borderTopStyle, borderBottomStyle, etc. which should use the beginning value during the tween.
              //DEBUG: _log("non-tweening value "+p+": "+pt.xs0);
            }
          }
        }

        if (plugin) if (pt && !pt.plugin) {
          pt.plugin = plugin;
        }
      }

      return pt;
    }; //gets called every time the tween updates, passing the new ratio (typically a value between 0 and 1, but not always (for example, if an Elastic.easeOut is used, the value can jump above 1 mid-tween). It will always start and 0 and end at 1.


    p.setRatio = function (v) {
      var pt = this._firstPT,
          min = 0.000001,
          val,
          str,
          i; //at the end of the tween, we set the values to exactly what we received in order to make sure non-tweening values (like "position" or "float" or whatever) are set and so that if the beginning/ending suffixes (units) didn't match and we normalized to px, the value that the user passed in is used here. We check to see if the tween is at its beginning in case it's a from() tween in which case the ratio will actually go from 1 to 0 over the course of the tween (backwards).

      if (v === 1 && (this._tween._time === this._tween._duration || this._tween._time === 0)) {
        while (pt) {
          if (pt.type !== 2) {
            if (pt.r && pt.type !== -1) {
              val = pt.r(pt.s + pt.c);

              if (!pt.type) {
                pt.t[pt.p] = val + pt.xs0;
              } else if (pt.type === 1) {
                //complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
                i = pt.l;
                str = pt.xs0 + val + pt.xs1;

                for (i = 1; i < pt.l; i++) {
                  str += pt["xn" + i] + pt["xs" + (i + 1)];
                }

                pt.t[pt.p] = str;
              }
            } else {
              pt.t[pt.p] = pt.e;
            }
          } else {
            pt.setRatio(v);
          }

          pt = pt._next;
        }
      } else if (v || !(this._tween._time === this._tween._duration || this._tween._time === 0) || this._tween._rawPrevTime === -0.000001) {
        while (pt) {
          val = pt.c * v + pt.s;

          if (pt.r) {
            val = pt.r(val);
          } else if (val < min) if (val > -min) {
            val = 0;
          }

          if (!pt.type) {
            pt.t[pt.p] = val + pt.xs0;
          } else if (pt.type === 1) {
            //complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
            i = pt.l;

            if (i === 2) {
              pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2;
            } else if (i === 3) {
              pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3;
            } else if (i === 4) {
              pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4;
            } else if (i === 5) {
              pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4 + pt.xn4 + pt.xs5;
            } else {
              str = pt.xs0 + val + pt.xs1;

              for (i = 1; i < pt.l; i++) {
                str += pt["xn" + i] + pt["xs" + (i + 1)];
              }

              pt.t[pt.p] = str;
            }
          } else if (pt.type === -1) {
            //non-tweening value
            pt.t[pt.p] = pt.xs0;
          } else if (pt.setRatio) {
            //custom setRatio() for things like SpecialProps, external plugins, etc.
            pt.setRatio(v);
          }

          pt = pt._next;
        } //if the tween is reversed all the way back to the beginning, we need to restore the original values which may have different units (like % instead of px or em or whatever).

      } else {
        while (pt) {
          if (pt.type !== 2) {
            pt.t[pt.p] = pt.b;
          } else {
            pt.setRatio(v);
          }

          pt = pt._next;
        }
      }
    };
    /**
     * @private
     * Forces rendering of the target's transforms (rotation, scale, etc.) whenever the CSSPlugin's setRatio() is called.
     * Basically, this tells the CSSPlugin to create a CSSPropTween (type 2) after instantiation that runs last in the linked
     * list and calls the appropriate (3D or 2D) rendering function. We separate this into its own method so that we can call
     * it from other plugins like BezierPlugin if, for example, it needs to apply an autoRotation and this CSSPlugin
     * doesn't have any transform-related properties of its own. You can call this method as many times as you
     * want and it won't create duplicate CSSPropTweens.
     *
     * @param {boolean} threeD if true, it should apply 3D tweens (otherwise, just 2D ones are fine and typically faster)
     */


    p._enableTransforms = function (threeD) {
      this._transform = this._transform || _getTransform(this._target, _cs, true); //ensures that the element has a _gsTransform property with the appropriate values.

      this._transformType = !(this._transform.svg && _useSVGTransformAttr) && (threeD || this._transformType === 3) ? 3 : 2;
    };

    var lazySet = function lazySet(v) {
      this.t[this.p] = this.e;

      this.data._linkCSSP(this, this._next, null, true); //we purposefully keep this._next even though it'd make sense to null it, but this is a performance optimization, as this happens during the while (pt) {} loop in setRatio() at the bottom of which it sets pt = pt._next, so if we null it, the linked list will be broken in that loop.

    };
    /** @private Gives us a way to set a value on the first render (and only the first render). **/


    p._addLazySet = function (t, p, v) {
      var pt = this._firstPT = new CSSPropTween(t, p, 0, 0, this._firstPT, 2);
      pt.e = v;
      pt.setRatio = lazySet;
      pt.data = this;
    };
    /** @private **/


    p._linkCSSP = function (pt, next, prev, remove) {
      if (pt) {
        if (next) {
          next._prev = pt;
        }

        if (pt._next) {
          pt._next._prev = pt._prev;
        }

        if (pt._prev) {
          pt._prev._next = pt._next;
        } else if (this._firstPT === pt) {
          this._firstPT = pt._next;
          remove = true; //just to prevent resetting this._firstPT 5 lines down in case pt._next is null. (optimized for speed)
        }

        if (prev) {
          prev._next = pt;
        } else if (!remove && this._firstPT === null) {
          this._firstPT = pt;
        }

        pt._next = next;
        pt._prev = prev;
      }

      return pt;
    };

    p._mod = function (lookup) {
      var pt = this._firstPT;

      while (pt) {
        if (typeof lookup[pt.p] === "function") {
          //only gets called by RoundPropsPlugin (ModifyPlugin manages all the rendering internally for CSSPlugin properties that need modification). Remember, we handle rounding a bit differently in this plugin for performance reasons, leveraging "r" as an indicator that the value should be rounded internally.
          pt.r = lookup[pt.p];
        }

        pt = pt._next;
      }
    }; //we need to make sure that if alpha or autoAlpha is killed, opacity is too. And autoAlpha affects the "visibility" property.


    p._kill = function (lookup) {
      var copy = lookup,
          pt,
          p,
          xfirst;

      if (lookup.autoAlpha || lookup.alpha) {
        copy = {};

        for (p in lookup) {
          //copy the lookup so that we're not changing the original which may be passed elsewhere.
          copy[p] = lookup[p];
        }

        copy.opacity = 1;

        if (copy.autoAlpha) {
          copy.visibility = 1;
        }
      }

      if (lookup.className && (pt = this._classNamePT)) {
        //for className tweens, we need to kill any associated CSSPropTweens too; a linked list starts at the className's "xfirst".
        xfirst = pt.xfirst;

        if (xfirst && xfirst._prev) {
          this._linkCSSP(xfirst._prev, pt._next, xfirst._prev._prev); //break off the prev

        } else if (xfirst === this._firstPT) {
          this._firstPT = pt._next;
        }

        if (pt._next) {
          this._linkCSSP(pt._next, pt._next._next, xfirst._prev);
        }

        this._classNamePT = null;
      }

      pt = this._firstPT;

      while (pt) {
        if (pt.plugin && pt.plugin !== p && pt.plugin._kill) {
          //for plugins that are registered with CSSPlugin, we should notify them of the kill.
          pt.plugin._kill(lookup);

          p = pt.plugin;
        }

        pt = pt._next;
      }

      return TweenPlugin.prototype._kill.call(this, copy);
    }; //used by cascadeTo() for gathering all the style properties of each child element into an array for comparison.


    var _getChildStyles = function _getChildStyles(e, props, targets) {
      var children, i, child, type;

      if (e.slice) {
        i = e.length;

        while (--i > -1) {
          _getChildStyles(e[i], props, targets);
        }

        return;
      }

      children = e.childNodes;
      i = children.length;

      while (--i > -1) {
        child = children[i];
        type = child.type;

        if (child.style) {
          props.push(_getAllStyles(child));

          if (targets) {
            targets.push(child);
          }
        }

        if ((type === 1 || type === 9 || type === 11) && child.childNodes.length) {
          _getChildStyles(child, props, targets);
        }
      }
    };
    /**
     * Typically only useful for className tweens that may affect child elements, this method creates a TweenLite
     * and then compares the style properties of all the target's child elements at the tween's start and end, and
     * if any are different, it also creates tweens for those and returns an array containing ALL of the resulting
     * tweens (so that you can easily add() them to a TimelineLite, for example). The reason this functionality is
     * wrapped into a separate static method of CSSPlugin instead of being integrated into all regular className tweens
     * is because it creates entirely new tweens that may have completely different targets than the original tween,
     * so if they were all lumped into the original tween instance, it would be inconsistent with the rest of the API
     * and it would create other problems. For example:
     *  - If I create a tween of elementA, that tween instance may suddenly change its target to include 50 other elements (unintuitive if I specifically defined the target I wanted)
     *  - We can't just create new independent tweens because otherwise, what happens if the original/parent tween is reversed or pause or dropped into a TimelineLite for tight control? You'd expect that tween's behavior to affect all the others.
     *  - Analyzing every style property of every child before and after the tween is an expensive operation when there are many children, so this behavior shouldn't be imposed on all className tweens by default, especially since it's probably rare that this extra functionality is needed.
     *
     * @param {Object} target object to be tweened
     * @param {number} Duration in seconds (or frames for frames-based tweens)
     * @param {Object} Object containing the end values, like {className:"newClass", ease:Linear.easeNone}
     * @return {Array} An array of TweenLite instances
     */


    CSSPlugin.cascadeTo = function (target, duration, vars) {
      var tween = TweenLite.to(target, duration, vars),
          results = [tween],
          b = [],
          e = [],
          targets = [],
          _reservedProps = TweenLite._internals.reservedProps,
          i,
          difs,
          p,
          from;
      target = tween._targets || tween.target;

      _getChildStyles(target, b, targets);

      tween.render(duration, true, true);

      _getChildStyles(target, e);

      tween.render(0, true, true);

      tween._enabled(true);

      i = targets.length;

      while (--i > -1) {
        difs = _cssDif(targets[i], b[i], e[i]);

        if (difs.firstMPT) {
          difs = difs.difs;

          for (p in vars) {
            if (_reservedProps[p]) {
              difs[p] = vars[p];
            }
          }

          from = {};

          for (p in difs) {
            from[p] = b[i][p];
          }

          results.push(TweenLite.fromTo(targets[i], duration, from, difs));
        }
      }

      return results;
    };

    TweenPlugin.activate([CSSPlugin]);
    return CSSPlugin;
  }, true);
  /*
   * ----------------------------------------------------------------
   * RoundPropsPlugin
   * ----------------------------------------------------------------
   */


  (function () {
    var RoundPropsPlugin = _gsScope._gsDefine.plugin({
      propName: "roundProps",
      version: "1.7.0",
      priority: -1,
      API: 2,
      //called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
      init: function init(target, value, tween) {
        this._tween = tween;
        return true;
      }
    }),
        _getRoundFunc = function _getRoundFunc(v) {
      //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
      var p = v < 1 ? Math.pow(10, (v + "").length - 2) : 1; //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed()

      return function (n) {
        return (Math.round(n / v) * v * p | 0) / p;
      };
    },
        _roundLinkedList = function _roundLinkedList(node, mod) {
      while (node) {
        if (!node.f && !node.blob) {
          node.m = mod || Math.round;
        }

        node = node._next;
      }
    },
        p = RoundPropsPlugin.prototype;

    p._onInitAllProps = function () {
      var tween = this._tween,
          rp = tween.vars.roundProps,
          lookup = {},
          rpt = tween._propLookup.roundProps,
          pt,
          next,
          i,
          p;

      if (_typeof(rp) === "object" && !rp.push) {
        for (p in rp) {
          lookup[p] = _getRoundFunc(rp[p]);
        }
      } else {
        if (typeof rp === "string") {
          rp = rp.split(",");
        }

        i = rp.length;

        while (--i > -1) {
          lookup[rp[i]] = Math.round;
        }
      }

      for (p in lookup) {
        pt = tween._firstPT;

        while (pt) {
          next = pt._next; //record here, because it may get removed

          if (pt.pg) {
            pt.t._mod(lookup);
          } else if (pt.n === p) {
            if (pt.f === 2 && pt.t) {
              //a blob (text containing multiple numeric values)
              _roundLinkedList(pt.t._firstPT, lookup[p]);
            } else {
              this._add(pt.t, p, pt.s, pt.c, lookup[p]); //remove from linked list


              if (next) {
                next._prev = pt._prev;
              }

              if (pt._prev) {
                pt._prev._next = next;
              } else if (tween._firstPT === pt) {
                tween._firstPT = next;
              }

              pt._next = pt._prev = null;
              tween._propLookup[p] = rpt;
            }
          }

          pt = next;
        }
      }

      return false;
    };

    p._add = function (target, p, s, c, mod) {
      this._addTween(target, p, s, s + c, p, mod || Math.round);

      this._overwriteProps.push(p);
    };
  })();
  /*
   * ----------------------------------------------------------------
   * AttrPlugin
   * ----------------------------------------------------------------
   */


  (function () {
    _gsScope._gsDefine.plugin({
      propName: "attr",
      API: 2,
      version: "0.6.1",
      //called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
      init: function init(target, value, tween, index) {
        var p, end;

        if (typeof target.setAttribute !== "function") {
          return false;
        }

        for (p in value) {
          end = value[p];

          if (typeof end === "function") {
            end = end(index, target);
          }

          this._addTween(target, "setAttribute", target.getAttribute(p) + "", end + "", p, false, p);

          this._overwriteProps.push(p);
        }

        return true;
      }
    });
  })();
  /*
   * ----------------------------------------------------------------
   * DirectionalRotationPlugin
   * ----------------------------------------------------------------
   */


  _gsScope._gsDefine.plugin({
    propName: "directionalRotation",
    version: "0.3.1",
    API: 2,
    //called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
    init: function init(target, value, tween, index) {
      if (_typeof(value) !== "object") {
        value = {
          rotation: value
        };
      }

      this.finals = {};
      var cap = value.useRadians === true ? Math.PI * 2 : 360,
          min = 0.000001,
          p,
          v,
          start,
          end,
          dif,
          split;

      for (p in value) {
        if (p !== "useRadians") {
          end = value[p];

          if (typeof end === "function") {
            end = end(index, target);
          }

          split = (end + "").split("_");
          v = split[0];
          start = parseFloat(typeof target[p] !== "function" ? target[p] : target[p.indexOf("set") || typeof target["get" + p.substr(3)] !== "function" ? p : "get" + p.substr(3)]());
          end = this.finals[p] = typeof v === "string" && v.charAt(1) === "=" ? start + parseInt(v.charAt(0) + "1", 10) * Number(v.substr(2)) : Number(v) || 0;
          dif = end - start;

          if (split.length) {
            v = split.join("_");

            if (v.indexOf("short") !== -1) {
              dif = dif % cap;

              if (dif !== dif % (cap / 2)) {
                dif = dif < 0 ? dif + cap : dif - cap;
              }
            }

            if (v.indexOf("_cw") !== -1 && dif < 0) {
              dif = (dif + cap * 9999999999) % cap - (dif / cap | 0) * cap;
            } else if (v.indexOf("ccw") !== -1 && dif > 0) {
              dif = (dif - cap * 9999999999) % cap - (dif / cap | 0) * cap;
            }
          }

          if (dif > min || dif < -min) {
            this._addTween(target, p, start, start + dif, p);

            this._overwriteProps.push(p);
          }
        }
      }

      return true;
    },
    //called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
    set: function set(ratio) {
      var pt;

      if (ratio !== 1) {
        this._super.setRatio.call(this, ratio);
      } else {
        pt = this._firstPT;

        while (pt) {
          if (pt.f) {
            pt.t[pt.p](this.finals[pt.p]);
          } else {
            pt.t[pt.p] = this.finals[pt.p];
          }

          pt = pt._next;
        }
      }
    }
  })._autoCSS = true;
  /*
   * ----------------------------------------------------------------
   * EasePack
   * ----------------------------------------------------------------
   */

  _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (Ease) {
    var w = _gsScope.GreenSockGlobals || _gsScope,
        gs = w.com.greensock,
        _2PI = Math.PI * 2,
        _HALF_PI = Math.PI / 2,
        _class = gs._class,
        _create = function _create(n, f) {
      var C = _class("easing." + n, function () {}, true),
          p = C.prototype = new Ease();

      p.constructor = C;
      p.getRatio = f;
      return C;
    },
        _easeReg = Ease.register || function () {},
        //put an empty function in place just as a safety measure in case someone loads an OLD version of TweenLite.js where Ease.register doesn't exist.
    _wrap = function _wrap(name, EaseOut, EaseIn, EaseInOut, aliases) {
      var C = _class("easing." + name, {
        easeOut: new EaseOut(),
        easeIn: new EaseIn(),
        easeInOut: new EaseInOut()
      }, true);

      _easeReg(C, name);

      return C;
    },
        EasePoint = function EasePoint(time, value, next) {
      this.t = time;
      this.v = value;

      if (next) {
        this.next = next;
        next.prev = this;
        this.c = next.v - value;
        this.gap = next.t - time;
      }
    },
        //Back
    _createBack = function _createBack(n, f) {
      var C = _class("easing." + n, function (overshoot) {
        this._p1 = overshoot || overshoot === 0 ? overshoot : 1.70158;
        this._p2 = this._p1 * 1.525;
      }, true),
          p = C.prototype = new Ease();

      p.constructor = C;
      p.getRatio = f;

      p.config = function (overshoot) {
        return new C(overshoot);
      };

      return C;
    },
        Back = _wrap("Back", _createBack("BackOut", function (p) {
      return (p = p - 1) * p * ((this._p1 + 1) * p + this._p1) + 1;
    }), _createBack("BackIn", function (p) {
      return p * p * ((this._p1 + 1) * p - this._p1);
    }), _createBack("BackInOut", function (p) {
      return (p *= 2) < 1 ? 0.5 * p * p * ((this._p2 + 1) * p - this._p2) : 0.5 * ((p -= 2) * p * ((this._p2 + 1) * p + this._p2) + 2);
    })),
        //SlowMo
    SlowMo = _class("easing.SlowMo", function (linearRatio, power, yoyoMode) {
      power = power || power === 0 ? power : 0.7;

      if (linearRatio == null) {
        linearRatio = 0.7;
      } else if (linearRatio > 1) {
        linearRatio = 1;
      }

      this._p = linearRatio !== 1 ? power : 0;
      this._p1 = (1 - linearRatio) / 2;
      this._p2 = linearRatio;
      this._p3 = this._p1 + this._p2;
      this._calcEnd = yoyoMode === true;
    }, true),
        p = SlowMo.prototype = new Ease(),
        SteppedEase,
        ExpoScaleEase,
        RoughEase,
        _createElastic;

    p.constructor = SlowMo;

    p.getRatio = function (p) {
      var r = p + (0.5 - p) * this._p;

      if (p < this._p1) {
        return this._calcEnd ? 1 - (p = 1 - p / this._p1) * p : r - (p = 1 - p / this._p1) * p * p * p * r;
      } else if (p > this._p3) {
        return this._calcEnd ? p === 1 ? 0 : 1 - (p = (p - this._p3) / this._p1) * p : r + (p - r) * (p = (p - this._p3) / this._p1) * p * p * p; //added p === 1 ? 0 to avoid floating point rounding errors from affecting the final value, like 1 - 0.7 = 0.30000000000000004 instead of 0.3
      }

      return this._calcEnd ? 1 : r;
    };

    SlowMo.ease = new SlowMo(0.7, 0.7);

    p.config = SlowMo.config = function (linearRatio, power, yoyoMode) {
      return new SlowMo(linearRatio, power, yoyoMode);
    }; //SteppedEase


    SteppedEase = _class("easing.SteppedEase", function (steps, immediateStart) {
      steps = steps || 1;
      this._p1 = 1 / steps;
      this._p2 = steps + (immediateStart ? 0 : 1);
      this._p3 = immediateStart ? 1 : 0;
    }, true);
    p = SteppedEase.prototype = new Ease();
    p.constructor = SteppedEase;

    p.getRatio = function (p) {
      if (p < 0) {
        p = 0;
      } else if (p >= 1) {
        p = 0.999999999;
      }

      return ((this._p2 * p | 0) + this._p3) * this._p1;
    };

    p.config = SteppedEase.config = function (steps, immediateStart) {
      return new SteppedEase(steps, immediateStart);
    }; //ExpoScaleEase


    ExpoScaleEase = _class("easing.ExpoScaleEase", function (start, end, ease) {
      this._p1 = Math.log(end / start);
      this._p2 = end - start;
      this._p3 = start;
      this._ease = ease;
    }, true);
    p = ExpoScaleEase.prototype = new Ease();
    p.constructor = ExpoScaleEase;

    p.getRatio = function (p) {
      if (this._ease) {
        p = this._ease.getRatio(p);
      }

      return (this._p3 * Math.exp(this._p1 * p) - this._p3) / this._p2;
    };

    p.config = ExpoScaleEase.config = function (start, end, ease) {
      return new ExpoScaleEase(start, end, ease);
    }; //RoughEase


    RoughEase = _class("easing.RoughEase", function (vars) {
      vars = vars || {};
      var taper = vars.taper || "none",
          a = [],
          cnt = 0,
          points = (vars.points || 20) | 0,
          i = points,
          randomize = vars.randomize !== false,
          clamp = vars.clamp === true,
          template = vars.template instanceof Ease ? vars.template : null,
          strength = typeof vars.strength === "number" ? vars.strength * 0.4 : 0.4,
          x,
          y,
          bump,
          invX,
          obj,
          pnt;

      while (--i > -1) {
        x = randomize ? Math.random() : 1 / points * i;
        y = template ? template.getRatio(x) : x;

        if (taper === "none") {
          bump = strength;
        } else if (taper === "out") {
          invX = 1 - x;
          bump = invX * invX * strength;
        } else if (taper === "in") {
          bump = x * x * strength;
        } else if (x < 0.5) {
          //"both" (start)
          invX = x * 2;
          bump = invX * invX * 0.5 * strength;
        } else {
          //"both" (end)
          invX = (1 - x) * 2;
          bump = invX * invX * 0.5 * strength;
        }

        if (randomize) {
          y += Math.random() * bump - bump * 0.5;
        } else if (i % 2) {
          y += bump * 0.5;
        } else {
          y -= bump * 0.5;
        }

        if (clamp) {
          if (y > 1) {
            y = 1;
          } else if (y < 0) {
            y = 0;
          }
        }

        a[cnt++] = {
          x: x,
          y: y
        };
      }

      a.sort(function (a, b) {
        return a.x - b.x;
      });
      pnt = new EasePoint(1, 1, null);
      i = points;

      while (--i > -1) {
        obj = a[i];
        pnt = new EasePoint(obj.x, obj.y, pnt);
      }

      this._prev = new EasePoint(0, 0, pnt.t !== 0 ? pnt : pnt.next);
    }, true);
    p = RoughEase.prototype = new Ease();
    p.constructor = RoughEase;

    p.getRatio = function (p) {
      var pnt = this._prev;

      if (p > pnt.t) {
        while (pnt.next && p >= pnt.t) {
          pnt = pnt.next;
        }

        pnt = pnt.prev;
      } else {
        while (pnt.prev && p <= pnt.t) {
          pnt = pnt.prev;
        }
      }

      this._prev = pnt;
      return pnt.v + (p - pnt.t) / pnt.gap * pnt.c;
    };

    p.config = function (vars) {
      return new RoughEase(vars);
    };

    RoughEase.ease = new RoughEase(); //Bounce

    _wrap("Bounce", _create("BounceOut", function (p) {
      if (p < 1 / 2.75) {
        return 7.5625 * p * p;
      } else if (p < 2 / 2.75) {
        return 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
      } else if (p < 2.5 / 2.75) {
        return 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
      }

      return 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
    }), _create("BounceIn", function (p) {
      if ((p = 1 - p) < 1 / 2.75) {
        return 1 - 7.5625 * p * p;
      } else if (p < 2 / 2.75) {
        return 1 - (7.5625 * (p -= 1.5 / 2.75) * p + 0.75);
      } else if (p < 2.5 / 2.75) {
        return 1 - (7.5625 * (p -= 2.25 / 2.75) * p + 0.9375);
      }

      return 1 - (7.5625 * (p -= 2.625 / 2.75) * p + 0.984375);
    }), _create("BounceInOut", function (p) {
      var invert = p < 0.5;

      if (invert) {
        p = 1 - p * 2;
      } else {
        p = p * 2 - 1;
      }

      if (p < 1 / 2.75) {
        p = 7.5625 * p * p;
      } else if (p < 2 / 2.75) {
        p = 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
      } else if (p < 2.5 / 2.75) {
        p = 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
      } else {
        p = 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
      }

      return invert ? (1 - p) * 0.5 : p * 0.5 + 0.5;
    })); //CIRC


    _wrap("Circ", _create("CircOut", function (p) {
      return Math.sqrt(1 - (p = p - 1) * p);
    }), _create("CircIn", function (p) {
      return -(Math.sqrt(1 - p * p) - 1);
    }), _create("CircInOut", function (p) {
      return (p *= 2) < 1 ? -0.5 * (Math.sqrt(1 - p * p) - 1) : 0.5 * (Math.sqrt(1 - (p -= 2) * p) + 1);
    })); //Elastic


    _createElastic = function _createElastic(n, f, def) {
      var C = _class("easing." + n, function (amplitude, period) {
        this._p1 = amplitude >= 1 ? amplitude : 1; //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.

        this._p2 = (period || def) / (amplitude < 1 ? amplitude : 1);
        this._p3 = this._p2 / _2PI * (Math.asin(1 / this._p1) || 0);
        this._p2 = _2PI / this._p2; //precalculate to optimize
      }, true),
          p = C.prototype = new Ease();

      p.constructor = C;
      p.getRatio = f;

      p.config = function (amplitude, period) {
        return new C(amplitude, period);
      };

      return C;
    };

    _wrap("Elastic", _createElastic("ElasticOut", function (p) {
      return this._p1 * Math.pow(2, -10 * p) * Math.sin((p - this._p3) * this._p2) + 1;
    }, 0.3), _createElastic("ElasticIn", function (p) {
      return -(this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin((p - this._p3) * this._p2));
    }, 0.3), _createElastic("ElasticInOut", function (p) {
      return (p *= 2) < 1 ? -0.5 * (this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin((p - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (p -= 1)) * Math.sin((p - this._p3) * this._p2) * 0.5 + 1;
    }, 0.45)); //Expo


    _wrap("Expo", _create("ExpoOut", function (p) {
      return 1 - Math.pow(2, -10 * p);
    }), _create("ExpoIn", function (p) {
      return Math.pow(2, 10 * (p - 1)) - 0.001;
    }), _create("ExpoInOut", function (p) {
      return (p *= 2) < 1 ? 0.5 * Math.pow(2, 10 * (p - 1)) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
    })); //Sine


    _wrap("Sine", _create("SineOut", function (p) {
      return Math.sin(p * _HALF_PI);
    }), _create("SineIn", function (p) {
      return -Math.cos(p * _HALF_PI) + 1;
    }), _create("SineInOut", function (p) {
      return -0.5 * (Math.cos(Math.PI * p) - 1);
    }));

    _class("easing.EaseLookup", {
      find: function find(s) {
        return Ease.map[s];
      }
    }, true); //register the non-standard eases


    _easeReg(w.SlowMo, "SlowMo", "ease,");

    _easeReg(RoughEase, "RoughEase", "ease,");

    _easeReg(SteppedEase, "SteppedEase", "ease,");

    return Back;
  }, true);
});

if (_gsScope._gsDefine) {
  _gsScope._gsQueue.pop()();
} //necessary in case TweenLite was already loaded separately.

/*
 * ----------------------------------------------------------------
 * Base classes like TweenLite, SimpleTimeline, Ease, Ticker, etc.
 * ----------------------------------------------------------------
 */


(function (window, moduleName) {
  "use strict";

  var _exports = {},
      _doc = window.document,
      _globals = window.GreenSockGlobals = window.GreenSockGlobals || window,
      existingModule = _globals[moduleName];

  if (existingModule) {
    if (typeof module !== "undefined" && module.exports) {
      //node
      module.exports = existingModule;
    }

    return existingModule; //in case the core set of classes is already loaded, don't instantiate twice.
  }

  var _namespace = function _namespace(ns) {
    var a = ns.split("."),
        p = _globals,
        i;

    for (i = 0; i < a.length; i++) {
      p[a[i]] = p = p[a[i]] || {};
    }

    return p;
  },
      gs = _namespace("com.greensock"),
      _tinyNum = 0.0000000001,
      _slice = function _slice(a) {
    //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
    var b = [],
        l = a.length,
        i;

    for (i = 0; i !== l; b.push(a[i++])) {}

    return b;
  },
      _emptyFunc = function _emptyFunc() {},
      _isArray = function () {
    //works around issues in iframe environments where the Array global isn't shared, thus if the object originates in a different window/iframe, "(obj instanceof Array)" will evaluate false. We added some speed optimizations to avoid Object.prototype.toString.call() unless it's absolutely necessary because it's VERY slow (like 20x slower)
    var toString = Object.prototype.toString,
        array = toString.call([]);
    return function (obj) {
      return obj != null && (obj instanceof Array || _typeof(obj) === "object" && !!obj.push && toString.call(obj) === array);
    };
  }(),
      a,
      i,
      p,
      _ticker,
      _tickerActive,
      _defLookup = {},

  /**
   * @constructor
   * Defines a GreenSock class, optionally with an array of dependencies that must be instantiated first and passed into the definition.
   * This allows users to load GreenSock JS files in any order even if they have interdependencies (like CSSPlugin extends TweenPlugin which is
   * inside TweenLite.js, but if CSSPlugin is loaded first, it should wait to run its code until TweenLite.js loads and instantiates TweenPlugin
   * and then pass TweenPlugin to CSSPlugin's definition). This is all done automatically and internally.
   *
   * Every definition will be added to a "com.greensock" global object (typically window, but if a window.GreenSockGlobals object is found,
   * it will go there as of v1.7). For example, TweenLite will be found at window.com.greensock.TweenLite and since it's a global class that should be available anywhere,
   * it is ALSO referenced at window.TweenLite. However some classes aren't considered global, like the base com.greensock.core.Animation class, so
   * those will only be at the package like window.com.greensock.core.Animation. Again, if you define a GreenSockGlobals object on the window, everything
   * gets tucked neatly inside there instead of on the window directly. This allows you to do advanced things like load multiple versions of GreenSock
   * files and put them into distinct objects (imagine a banner ad uses a newer version but the main site uses an older one). In that case, you could
   * sandbox the banner one like:
   *
   * <script>
   *     var gs = window.GreenSockGlobals = {}; //the newer version we're about to load could now be referenced in a "gs" object, like gs.TweenLite.to(...). Use whatever alias you want as long as it's unique, "gs" or "banner" or whatever.
   * </script>
   * <script src="js/greensock/v1.7/TweenMax.js"></script>
   * <script>
   *     window.GreenSockGlobals = window._gsQueue = window._gsDefine = null; //reset it back to null (along with the special _gsQueue variable) so that the next load of TweenMax affects the window and we can reference things directly like TweenLite.to(...)
   * </script>
   * <script src="js/greensock/v1.6/TweenMax.js"></script>
   * <script>
   *     gs.TweenLite.to(...); //would use v1.7
   *     TweenLite.to(...); //would use v1.6
   * </script>
   *
   * @param {!string} ns The namespace of the class definition, leaving off "com.greensock." as that's assumed. For example, "TweenLite" or "plugins.CSSPlugin" or "easing.Back".
   * @param {!Array.<string>} dependencies An array of dependencies (described as their namespaces minus "com.greensock." prefix). For example ["TweenLite","plugins.TweenPlugin","core.Animation"]
   * @param {!function():Object} func The function that should be called and passed the resolved dependencies which will return the actual class for this definition.
   * @param {boolean=} global If true, the class will be added to the global scope (typically window unless you define a window.GreenSockGlobals object)
   */
  Definition = function Definition(ns, dependencies, func, global) {
    this.sc = _defLookup[ns] ? _defLookup[ns].sc : []; //subclasses

    _defLookup[ns] = this;
    this.gsClass = null;
    this.func = func;
    var _classes = [];

    this.check = function (init) {
      var i = dependencies.length,
          missing = i,
          cur,
          a,
          n,
          cl;

      while (--i > -1) {
        if ((cur = _defLookup[dependencies[i]] || new Definition(dependencies[i], [])).gsClass) {
          _classes[i] = cur.gsClass;
          missing--;
        } else if (init) {
          cur.sc.push(this);
        }
      }

      if (missing === 0 && func) {
        a = ("com.greensock." + ns).split(".");
        n = a.pop();
        cl = _namespace(a.join("."))[n] = this.gsClass = func.apply(func, _classes); //exports to multiple environments

        if (global) {
          _globals[n] = _exports[n] = cl; //provides a way to avoid global namespace pollution. By default, the main classes like TweenLite, Power1, Strong, etc. are added to window unless a GreenSockGlobals is defined. So if you want to have things added to a custom object instead, just do something like window.GreenSockGlobals = {} before loading any GreenSock files. You can even set up an alias like window.GreenSockGlobals = windows.gs = {} so that you can access everything like gs.TweenLite. Also remember that ALL classes are added to the window.com.greensock object (in their respective packages, like com.greensock.easing.Power1, com.greensock.TweenLite, etc.)

          if (typeof module !== "undefined" && module.exports) {
            //node
            if (ns === moduleName) {
              module.exports = _exports[moduleName] = cl;

              for (i in _exports) {
                cl[i] = _exports[i];
              }
            } else if (_exports[moduleName]) {
              _exports[moduleName][n] = cl;
            }
          } else if (typeof define === "function" && define.amd) {
            //AMD
            define((window.GreenSockAMDPath ? window.GreenSockAMDPath + "/" : "") + ns.split(".").pop(), [], function () {
              return cl;
            });
          }
        }

        for (i = 0; i < this.sc.length; i++) {
          this.sc[i].check();
        }
      }
    };

    this.check(true);
  },
      //used to create Definition instances (which basically registers a class that has dependencies).
  _gsDefine = window._gsDefine = function (ns, dependencies, func, global) {
    return new Definition(ns, dependencies, func, global);
  },
      //a quick way to create a class that doesn't have any dependencies. Returns the class, but first registers it in the GreenSock namespace so that other classes can grab it (other classes might be dependent on the class).
  _class = gs._class = function (ns, func, global) {
    func = func || function () {};

    _gsDefine(ns, [], function () {
      return func;
    }, global);

    return func;
  };

  _gsDefine.globals = _globals;
  /*
   * ----------------------------------------------------------------
   * Ease
   * ----------------------------------------------------------------
   */

  var _baseParams = [0, 0, 1, 1],
      Ease = _class("easing.Ease", function (func, extraParams, type, power) {
    this._func = func;
    this._type = type || 0;
    this._power = power || 0;
    this._params = extraParams ? _baseParams.concat(extraParams) : _baseParams;
  }, true),
      _easeMap = Ease.map = {},
      _easeReg = Ease.register = function (ease, names, types, create) {
    var na = names.split(","),
        i = na.length,
        ta = (types || "easeIn,easeOut,easeInOut").split(","),
        e,
        name,
        j,
        type;

    while (--i > -1) {
      name = na[i];
      e = create ? _class("easing." + name, null, true) : gs.easing[name] || {};
      j = ta.length;

      while (--j > -1) {
        type = ta[j];
        _easeMap[name + "." + type] = _easeMap[type + name] = e[type] = ease.getRatio ? ease : ease[type] || new ease();
      }
    }
  };

  p = Ease.prototype;
  p._calcEnd = false;

  p.getRatio = function (p) {
    if (this._func) {
      this._params[0] = p;
      return this._func.apply(null, this._params);
    }

    var t = this._type,
        pw = this._power,
        r = t === 1 ? 1 - p : t === 2 ? p : p < 0.5 ? p * 2 : (1 - p) * 2;

    if (pw === 1) {
      r *= r;
    } else if (pw === 2) {
      r *= r * r;
    } else if (pw === 3) {
      r *= r * r * r;
    } else if (pw === 4) {
      r *= r * r * r * r;
    }

    return t === 1 ? 1 - r : t === 2 ? r : p < 0.5 ? r / 2 : 1 - r / 2;
  }; //create all the standard eases like Linear, Quad, Cubic, Quart, Quint, Strong, Power0, Power1, Power2, Power3, and Power4 (each with easeIn, easeOut, and easeInOut)


  a = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"];
  i = a.length;

  while (--i > -1) {
    p = a[i] + ",Power" + i;

    _easeReg(new Ease(null, null, 1, i), p, "easeOut", true);

    _easeReg(new Ease(null, null, 2, i), p, "easeIn" + (i === 0 ? ",easeNone" : ""));

    _easeReg(new Ease(null, null, 3, i), p, "easeInOut");
  }

  _easeMap.linear = gs.easing.Linear.easeIn;
  _easeMap.swing = gs.easing.Quad.easeInOut; //for jQuery folks

  /*
   * ----------------------------------------------------------------
   * EventDispatcher
   * ----------------------------------------------------------------
   */

  var EventDispatcher = _class("events.EventDispatcher", function (target) {
    this._listeners = {};
    this._eventTarget = target || this;
  });

  p = EventDispatcher.prototype;

  p.addEventListener = function (type, callback, scope, useParam, priority) {
    priority = priority || 0;
    var list = this._listeners[type],
        index = 0,
        listener,
        i;

    if (this === _ticker && !_tickerActive) {
      _ticker.wake();
    }

    if (list == null) {
      this._listeners[type] = list = [];
    }

    i = list.length;

    while (--i > -1) {
      listener = list[i];

      if (listener.c === callback && listener.s === scope) {
        list.splice(i, 1);
      } else if (index === 0 && listener.pr < priority) {
        index = i + 1;
      }
    }

    list.splice(index, 0, {
      c: callback,
      s: scope,
      up: useParam,
      pr: priority
    });
  };

  p.removeEventListener = function (type, callback) {
    var list = this._listeners[type],
        i;

    if (list) {
      i = list.length;

      while (--i > -1) {
        if (list[i].c === callback) {
          list.splice(i, 1);
          return;
        }
      }
    }
  };

  p.dispatchEvent = function (type) {
    var list = this._listeners[type],
        i,
        t,
        listener;

    if (list) {
      i = list.length;

      if (i > 1) {
        list = list.slice(0); //in case addEventListener() is called from within a listener/callback (otherwise the index could change, resulting in a skip)
      }

      t = this._eventTarget;

      while (--i > -1) {
        listener = list[i];

        if (listener) {
          if (listener.up) {
            listener.c.call(listener.s || t, {
              type: type,
              target: t
            });
          } else {
            listener.c.call(listener.s || t);
          }
        }
      }
    }
  };
  /*
   * ----------------------------------------------------------------
   * Ticker
   * ----------------------------------------------------------------
   */


  var _reqAnimFrame = window.requestAnimationFrame,
      _cancelAnimFrame = window.cancelAnimationFrame,
      _getTime = Date.now || function () {
    return new Date().getTime();
  },
      _lastUpdate = _getTime(); //now try to determine the requestAnimationFrame and cancelAnimationFrame functions and if none are found, we'll use a setTimeout()/clearTimeout() polyfill.


  a = ["ms", "moz", "webkit", "o"];
  i = a.length;

  while (--i > -1 && !_reqAnimFrame) {
    _reqAnimFrame = window[a[i] + "RequestAnimationFrame"];
    _cancelAnimFrame = window[a[i] + "CancelAnimationFrame"] || window[a[i] + "CancelRequestAnimationFrame"];
  }

  _class("Ticker", function (fps, useRAF) {
    var _self = this,
        _startTime = _getTime(),
        _useRAF = useRAF !== false && _reqAnimFrame ? "auto" : false,
        _lagThreshold = 500,
        _adjustedLag = 33,
        _tickWord = "tick",
        //helps reduce gc burden
    _fps,
        _req,
        _id,
        _gap,
        _nextTime,
        _tick = function _tick(manual) {
      var elapsed = _getTime() - _lastUpdate,
          overlap,
          dispatch;

      if (elapsed > _lagThreshold) {
        _startTime += elapsed - _adjustedLag;
      }

      _lastUpdate += elapsed;
      _self.time = (_lastUpdate - _startTime) / 1000;
      overlap = _self.time - _nextTime;

      if (!_fps || overlap > 0 || manual === true) {
        _self.frame++;
        _nextTime += overlap + (overlap >= _gap ? 0.004 : _gap - overlap);
        dispatch = true;
      }

      if (manual !== true) {
        //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
        _id = _req(_tick);
      }

      if (dispatch) {
        _self.dispatchEvent(_tickWord);
      }
    };

    EventDispatcher.call(_self);
    _self.time = _self.frame = 0;

    _self.tick = function () {
      _tick(true);
    };

    _self.lagSmoothing = function (threshold, adjustedLag) {
      if (!arguments.length) {
        //if lagSmoothing() is called with no arguments, treat it like a getter that returns a boolean indicating if it's enabled or not. This is purposely undocumented and is for internal use.
        return _lagThreshold < 1 / _tinyNum;
      }

      _lagThreshold = threshold || 1 / _tinyNum; //zero should be interpreted as basically unlimited

      _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
    };

    _self.sleep = function () {
      if (_id == null) {
        return;
      }

      if (!_useRAF || !_cancelAnimFrame) {
        clearTimeout(_id);
      } else {
        _cancelAnimFrame(_id);
      }

      _req = _emptyFunc;
      _id = null;

      if (_self === _ticker) {
        _tickerActive = false;
      }
    };

    _self.wake = function (seamless) {
      if (_id !== null) {
        _self.sleep();
      } else if (seamless) {
        _startTime += -_lastUpdate + (_lastUpdate = _getTime());
      } else if (_self.frame > 10) {
        //don't trigger lagSmoothing if we're just waking up, and make sure that at least 10 frames have elapsed because of the iOS bug that we work around below with the 1.5-second setTimout().
        _lastUpdate = _getTime() - _lagThreshold + 5;
      }

      _req = _fps === 0 ? _emptyFunc : !_useRAF || !_reqAnimFrame ? function (f) {
        return setTimeout(f, (_nextTime - _self.time) * 1000 + 1 | 0);
      } : _reqAnimFrame;

      if (_self === _ticker) {
        _tickerActive = true;
      }

      _tick(2);
    };

    _self.fps = function (value) {
      if (!arguments.length) {
        return _fps;
      }

      _fps = value;
      _gap = 1 / (_fps || 60);
      _nextTime = this.time + _gap;

      _self.wake();
    };

    _self.useRAF = function (value) {
      if (!arguments.length) {
        return _useRAF;
      }

      _self.sleep();

      _useRAF = value;

      _self.fps(_fps);
    };

    _self.fps(fps); //a bug in iOS 6 Safari occasionally prevents the requestAnimationFrame from working initially, so we use a 1.5-second timeout that automatically falls back to setTimeout() if it senses this condition.


    setTimeout(function () {
      if (_useRAF === "auto" && _self.frame < 5 && (_doc || {}).visibilityState !== "hidden") {
        _self.useRAF(false);
      }
    }, 1500);
  });

  p = gs.Ticker.prototype = new gs.events.EventDispatcher();
  p.constructor = gs.Ticker;
  /*
   * ----------------------------------------------------------------
   * Animation
   * ----------------------------------------------------------------
   */

  var Animation = _class("core.Animation", function (duration, vars) {
    this.vars = vars = vars || {};
    this._duration = this._totalDuration = duration || 0;
    this._delay = Number(vars.delay) || 0;
    this._timeScale = 1;
    this._active = vars.immediateRender === true;
    this.data = vars.data;
    this._reversed = vars.reversed === true;

    if (!_rootTimeline) {
      return;
    }

    if (!_tickerActive) {
      //some browsers (like iOS 6 Safari) shut down JavaScript execution when the tab is disabled and they [occasionally] neglect to start up requestAnimationFrame again when returning - this code ensures that the engine starts up again properly.
      _ticker.wake();
    }

    var tl = this.vars.useFrames ? _rootFramesTimeline : _rootTimeline;
    tl.add(this, tl._time);

    if (this.vars.paused) {
      this.paused(true);
    }
  });

  _ticker = Animation.ticker = new gs.Ticker();
  p = Animation.prototype;
  p._dirty = p._gc = p._initted = p._paused = false;
  p._totalTime = p._time = 0;
  p._rawPrevTime = -1;
  p._next = p._last = p._onUpdate = p._timeline = p.timeline = null;
  p._paused = false; //some browsers (like iOS) occasionally drop the requestAnimationFrame event when the user switches to a different tab and then comes back again, so we use a 2-second setTimeout() to sense if/when that condition occurs and then wake() the ticker.

  var _checkTimeout = function _checkTimeout() {
    if (_tickerActive && _getTime() - _lastUpdate > 2000 && ((_doc || {}).visibilityState !== "hidden" || !_ticker.lagSmoothing())) {
      //note: if the tab is hidden, we should still wake if lagSmoothing has been disabled.
      _ticker.wake();
    }

    var t = setTimeout(_checkTimeout, 2000);

    if (t.unref) {
      // allows a node process to exit even if the timeout’s callback hasn't been invoked. Without it, the node process could hang as this function is called every two seconds.
      t.unref();
    }
  };

  _checkTimeout();

  p.play = function (from, suppressEvents) {
    if (from != null) {
      this.seek(from, suppressEvents);
    }

    return this.reversed(false).paused(false);
  };

  p.pause = function (atTime, suppressEvents) {
    if (atTime != null) {
      this.seek(atTime, suppressEvents);
    }

    return this.paused(true);
  };

  p.resume = function (from, suppressEvents) {
    if (from != null) {
      this.seek(from, suppressEvents);
    }

    return this.paused(false);
  };

  p.seek = function (time, suppressEvents) {
    return this.totalTime(Number(time), suppressEvents !== false);
  };

  p.restart = function (includeDelay, suppressEvents) {
    return this.reversed(false).paused(false).totalTime(includeDelay ? -this._delay : 0, suppressEvents !== false, true);
  };

  p.reverse = function (from, suppressEvents) {
    if (from != null) {
      this.seek(from || this.totalDuration(), suppressEvents);
    }

    return this.reversed(true).paused(false);
  };

  p.render = function (time, suppressEvents, force) {//stub - we override this method in subclasses.
  };

  p.invalidate = function () {
    this._time = this._totalTime = 0;
    this._initted = this._gc = false;
    this._rawPrevTime = -1;

    if (this._gc || !this.timeline) {
      this._enabled(true);
    }

    return this;
  };

  p.isActive = function () {
    var tl = this._timeline,
        //the 2 root timelines won't have a _timeline; they're always active.
    startTime = this._startTime,
        rawTime;
    return !tl || !this._gc && !this._paused && tl.isActive() && (rawTime = tl.rawTime(true)) >= startTime && rawTime < startTime + this.totalDuration() / this._timeScale - 0.0000001;
  };

  p._enabled = function (enabled, ignoreTimeline) {
    if (!_tickerActive) {
      _ticker.wake();
    }

    this._gc = !enabled;
    this._active = this.isActive();

    if (ignoreTimeline !== true) {
      if (enabled && !this.timeline) {
        this._timeline.add(this, this._startTime - this._delay);
      } else if (!enabled && this.timeline) {
        this._timeline._remove(this, true);
      }
    }

    return false;
  };

  p._kill = function (vars, target) {
    return this._enabled(false, false);
  };

  p.kill = function (vars, target) {
    this._kill(vars, target);

    return this;
  };

  p._uncache = function (includeSelf) {
    var tween = includeSelf ? this : this.timeline;

    while (tween) {
      tween._dirty = true;
      tween = tween.timeline;
    }

    return this;
  };

  p._swapSelfInParams = function (params) {
    var i = params.length,
        copy = params.concat();

    while (--i > -1) {
      if (params[i] === "{self}") {
        copy[i] = this;
      }
    }

    return copy;
  };

  p._callback = function (type) {
    var v = this.vars,
        callback = v[type],
        params = v[type + "Params"],
        scope = v[type + "Scope"] || v.callbackScope || this,
        l = params ? params.length : 0;

    switch (l) {
      //speed optimization; call() is faster than apply() so use it when there are only a few parameters (which is by far most common). Previously we simply did var v = this.vars; v[type].apply(v[type + "Scope"] || v.callbackScope || this, v[type + "Params"] || _blankArray);
      case 0:
        callback.call(scope);
        break;

      case 1:
        callback.call(scope, params[0]);
        break;

      case 2:
        callback.call(scope, params[0], params[1]);
        break;

      default:
        callback.apply(scope, params);
    }
  }; //----Animation getters/setters --------------------------------------------------------


  p.eventCallback = function (type, callback, params, scope) {
    if ((type || "").substr(0, 2) === "on") {
      var v = this.vars;

      if (arguments.length === 1) {
        return v[type];
      }

      if (callback == null) {
        delete v[type];
      } else {
        v[type] = callback;
        v[type + "Params"] = _isArray(params) && params.join("").indexOf("{self}") !== -1 ? this._swapSelfInParams(params) : params;
        v[type + "Scope"] = scope;
      }

      if (type === "onUpdate") {
        this._onUpdate = callback;
      }
    }

    return this;
  };

  p.delay = function (value) {
    if (!arguments.length) {
      return this._delay;
    }

    if (this._timeline.smoothChildTiming) {
      this.startTime(this._startTime + value - this._delay);
    }

    this._delay = value;
    return this;
  };

  p.duration = function (value) {
    if (!arguments.length) {
      this._dirty = false;
      return this._duration;
    }

    this._duration = this._totalDuration = value;

    this._uncache(true); //true in case it's a TweenMax or TimelineMax that has a repeat - we'll need to refresh the totalDuration.


    if (this._timeline.smoothChildTiming) if (this._time > 0) if (this._time < this._duration) if (value !== 0) {
      this.totalTime(this._totalTime * (value / this._duration), true);
    }
    return this;
  };

  p.totalDuration = function (value) {
    this._dirty = false;
    return !arguments.length ? this._totalDuration : this.duration(value);
  };

  p.time = function (value, suppressEvents) {
    if (!arguments.length) {
      return this._time;
    }

    if (this._dirty) {
      this.totalDuration();
    }

    return this.totalTime(value > this._duration ? this._duration : value, suppressEvents);
  };

  p.totalTime = function (time, suppressEvents, uncapped) {
    if (!_tickerActive) {
      _ticker.wake();
    }

    if (!arguments.length) {
      return this._totalTime;
    }

    if (this._timeline) {
      if (time < 0 && !uncapped) {
        time += this.totalDuration();
      }

      if (this._timeline.smoothChildTiming) {
        if (this._dirty) {
          this.totalDuration();
        }

        var totalDuration = this._totalDuration,
            tl = this._timeline;

        if (time > totalDuration && !uncapped) {
          time = totalDuration;
        }

        this._startTime = (this._paused ? this._pauseTime : tl._time) - (!this._reversed ? time : totalDuration - time) / this._timeScale;

        if (!tl._dirty) {
          //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
          this._uncache(false);
        } //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The startTime of that child would get pushed out, but one of the ancestors may have completed.


        if (tl._timeline) {
          while (tl._timeline) {
            if (tl._timeline._time !== (tl._startTime + tl._totalTime) / tl._timeScale) {
              tl.totalTime(tl._totalTime, true);
            }

            tl = tl._timeline;
          }
        }
      }

      if (this._gc) {
        this._enabled(true, false);
      }

      if (this._totalTime !== time || this._duration === 0) {
        if (_lazyTweens.length) {
          _lazyRender();
        }

        this.render(time, suppressEvents, false);

        if (_lazyTweens.length) {
          //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
          _lazyRender();
        }
      }
    }

    return this;
  };

  p.progress = p.totalProgress = function (value, suppressEvents) {
    var duration = this.duration();
    return !arguments.length ? duration ? this._time / duration : this.ratio : this.totalTime(duration * value, suppressEvents);
  };

  p.startTime = function (value) {
    if (!arguments.length) {
      return this._startTime;
    }

    if (value !== this._startTime) {
      this._startTime = value;
      if (this.timeline) if (this.timeline._sortChildren) {
        this.timeline.add(this, value - this._delay); //ensures that any necessary re-sequencing of Animations in the timeline occurs to make sure the rendering order is correct.
      }
    }

    return this;
  };

  p.endTime = function (includeRepeats) {
    return this._startTime + (includeRepeats != false ? this.totalDuration() : this.duration()) / this._timeScale;
  };

  p.timeScale = function (value) {
    if (!arguments.length) {
      return this._timeScale;
    }

    var pauseTime, t;
    value = value || _tinyNum; //can't allow zero because it'll throw the math off

    if (this._timeline && this._timeline.smoothChildTiming) {
      pauseTime = this._pauseTime;
      t = pauseTime || pauseTime === 0 ? pauseTime : this._timeline.totalTime();
      this._startTime = t - (t - this._startTime) * this._timeScale / value;
    }

    this._timeScale = value;
    t = this.timeline;

    while (t && t.timeline) {
      //must update the duration/totalDuration of all ancestor timelines immediately in case in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
      t._dirty = true;
      t.totalDuration();
      t = t.timeline;
    }

    return this;
  };

  p.reversed = function (value) {
    if (!arguments.length) {
      return this._reversed;
    }

    if (value != this._reversed) {
      this._reversed = value;
      this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, true);
    }

    return this;
  };

  p.paused = function (value) {
    if (!arguments.length) {
      return this._paused;
    }

    var tl = this._timeline,
        raw,
        elapsed;
    if (value != this._paused) if (tl) {
      if (!_tickerActive && !value) {
        _ticker.wake();
      }

      raw = tl.rawTime();
      elapsed = raw - this._pauseTime;

      if (!value && tl.smoothChildTiming) {
        this._startTime += elapsed;

        this._uncache(false);
      }

      this._pauseTime = value ? raw : null;
      this._paused = value;
      this._active = this.isActive();

      if (!value && elapsed !== 0 && this._initted && this.duration()) {
        raw = tl.smoothChildTiming ? this._totalTime : (raw - this._startTime) / this._timeScale;
        this.render(raw, raw === this._totalTime, true); //in case the target's properties changed via some other tween or manual update by the user, we should force a render.
      }
    }

    if (this._gc && !value) {
      this._enabled(true, false);
    }

    return this;
  };
  /*
   * ----------------------------------------------------------------
   * SimpleTimeline
   * ----------------------------------------------------------------
   */


  var SimpleTimeline = _class("core.SimpleTimeline", function (vars) {
    Animation.call(this, 0, vars);
    this.autoRemoveChildren = this.smoothChildTiming = true;
  });

  p = SimpleTimeline.prototype = new Animation();
  p.constructor = SimpleTimeline;
  p.kill()._gc = false;
  p._first = p._last = p._recent = null;
  p._sortChildren = false;

  p.add = p.insert = function (child, position, align, stagger) {
    var prevTween, st;
    child._startTime = Number(position || 0) + child._delay;
    if (child._paused) if (this !== child._timeline) {
      //we only adjust the _pauseTime if it wasn't in this timeline already. Remember, sometimes a tween will be inserted again into the same timeline when its startTime is changed so that the tweens in the TimelineLite/Max are re-ordered properly in the linked list (so everything renders in the proper order).
      child._pauseTime = this.rawTime() - (child._timeline.rawTime() - child._pauseTime);
    }

    if (child.timeline) {
      child.timeline._remove(child, true); //removes from existing timeline so that it can be properly added to this one.

    }

    child.timeline = child._timeline = this;

    if (child._gc) {
      child._enabled(true, true);
    }

    prevTween = this._last;

    if (this._sortChildren) {
      st = child._startTime;

      while (prevTween && prevTween._startTime > st) {
        prevTween = prevTween._prev;
      }
    }

    if (prevTween) {
      child._next = prevTween._next;
      prevTween._next = child;
    } else {
      child._next = this._first;
      this._first = child;
    }

    if (child._next) {
      child._next._prev = child;
    } else {
      this._last = child;
    }

    child._prev = prevTween;
    this._recent = child;

    if (this._timeline) {
      this._uncache(true);
    }

    return this;
  };

  p._remove = function (tween, skipDisable) {
    if (tween.timeline === this) {
      if (!skipDisable) {
        tween._enabled(false, true);
      }

      if (tween._prev) {
        tween._prev._next = tween._next;
      } else if (this._first === tween) {
        this._first = tween._next;
      }

      if (tween._next) {
        tween._next._prev = tween._prev;
      } else if (this._last === tween) {
        this._last = tween._prev;
      }

      tween._next = tween._prev = tween.timeline = null;

      if (tween === this._recent) {
        this._recent = this._last;
      }

      if (this._timeline) {
        this._uncache(true);
      }
    }

    return this;
  };

  p.render = function (time, suppressEvents, force) {
    var tween = this._first,
        next;
    this._totalTime = this._time = this._rawPrevTime = time;

    while (tween) {
      next = tween._next; //record it here because the value could change after rendering...

      if (tween._active || time >= tween._startTime && !tween._paused && !tween._gc) {
        if (!tween._reversed) {
          tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
        } else {
          tween.render((!tween._dirty ? tween._totalDuration : tween.totalDuration()) - (time - tween._startTime) * tween._timeScale, suppressEvents, force);
        }
      }

      tween = next;
    }
  };

  p.rawTime = function () {
    if (!_tickerActive) {
      _ticker.wake();
    }

    return this._totalTime;
  };
  /*
   * ----------------------------------------------------------------
   * TweenLite
   * ----------------------------------------------------------------
   */


  var TweenLite = _class("TweenLite", function (target, duration, vars) {
    Animation.call(this, duration, vars);
    this.render = TweenLite.prototype.render; //speed optimization (avoid prototype lookup on this "hot" method)

    if (target == null) {
      throw "Cannot tween a null target.";
    }

    this.target = target = typeof target !== "string" ? target : TweenLite.selector(target) || target;
    var isSelector = target.jquery || target.length && target !== window && target[0] && (target[0] === window || target[0].nodeType && target[0].style && !target.nodeType),
        overwrite = this.vars.overwrite,
        i,
        targ,
        targets;
    this._overwrite = overwrite = overwrite == null ? _overwriteLookup[TweenLite.defaultOverwrite] : typeof overwrite === "number" ? overwrite >> 0 : _overwriteLookup[overwrite];

    if ((isSelector || target instanceof Array || target.push && _isArray(target)) && typeof target[0] !== "number") {
      this._targets = targets = _slice(target); //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()

      this._propLookup = [];
      this._siblings = [];

      for (i = 0; i < targets.length; i++) {
        targ = targets[i];

        if (!targ) {
          targets.splice(i--, 1);
          continue;
        } else if (typeof targ === "string") {
          targ = targets[i--] = TweenLite.selector(targ); //in case it's an array of strings

          if (typeof targ === "string") {
            targets.splice(i + 1, 1); //to avoid an endless loop (can't imagine why the selector would return a string, but just in case)
          }

          continue;
        } else if (targ.length && targ !== window && targ[0] && (targ[0] === window || targ[0].nodeType && targ[0].style && !targ.nodeType)) {
          //in case the user is passing in an array of selector objects (like jQuery objects), we need to check one more level and pull things out if necessary. Also note that <select> elements pass all the criteria regarding length and the first child having style, so we must also check to ensure the target isn't an HTML node itself.
          targets.splice(i--, 1);
          this._targets = targets = targets.concat(_slice(targ));
          continue;
        }

        this._siblings[i] = _register(targ, this, false);
        if (overwrite === 1) if (this._siblings[i].length > 1) {
          _applyOverwrite(targ, this, null, 1, this._siblings[i]);
        }
      }
    } else {
      this._propLookup = {};
      this._siblings = _register(target, this, false);
      if (overwrite === 1) if (this._siblings.length > 1) {
        _applyOverwrite(target, this, null, 1, this._siblings);
      }
    }

    if (this.vars.immediateRender || duration === 0 && this._delay === 0 && this.vars.immediateRender !== false) {
      this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)

      this.render(Math.min(0, -this._delay)); //in case delay is negative
    }
  }, true),
      _isSelector = function _isSelector(v) {
    return v && v.length && v !== window && v[0] && (v[0] === window || v[0].nodeType && v[0].style && !v.nodeType); //we cannot check "nodeType" if the target is window from within an iframe, otherwise it will trigger a security error in some browsers like Firefox.
  },
      _autoCSS = function _autoCSS(vars, target) {
    var css = {},
        p;

    for (p in vars) {
      if (!_reservedProps[p] && (!(p in target) || p === "transform" || p === "x" || p === "y" || p === "width" || p === "height" || p === "className" || p === "border") && (!_plugins[p] || _plugins[p] && _plugins[p]._autoCSS)) {
        //note: <img> elements contain read-only "x" and "y" properties. We should also prioritize editing css width/height rather than the element's properties.
        css[p] = vars[p];
        delete vars[p];
      }
    }

    vars.css = css;
  };

  p = TweenLite.prototype = new Animation();
  p.constructor = TweenLite;
  p.kill()._gc = false; //----TweenLite defaults, overwrite management, and root updates ----------------------------------------------------

  p.ratio = 0;
  p._firstPT = p._targets = p._overwrittenProps = p._startAt = null;
  p._notifyPluginsOfEnabled = p._lazy = false;
  TweenLite.version = "2.0.2";
  TweenLite.defaultEase = p._ease = new Ease(null, null, 1, 1);
  TweenLite.defaultOverwrite = "auto";
  TweenLite.ticker = _ticker;
  TweenLite.autoSleep = 120;

  TweenLite.lagSmoothing = function (threshold, adjustedLag) {
    _ticker.lagSmoothing(threshold, adjustedLag);
  };

  TweenLite.selector = window.$ || window.jQuery || function (e) {
    var selector = window.$ || window.jQuery;

    if (selector) {
      TweenLite.selector = selector;
      return selector(e);
    }

    if (!_doc) {
      //in some dev environments (like Angular 6), GSAP gets loaded before the document is defined! So re-query it here if/when necessary.
      _doc = window.document;
    }

    return !_doc ? e : _doc.querySelectorAll ? _doc.querySelectorAll(e) : _doc.getElementById(e.charAt(0) === "#" ? e.substr(1) : e);
  };

  var _lazyTweens = [],
      _lazyLookup = {},
      _numbersExp = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
      _relExp = /[\+-]=-?[\.\d]/,
      //_nonNumbersExp = /(?:([\-+](?!(\d|=)))|[^\d\-+=e]|(e(?![\-+][\d])))+/ig,
  _setRatio = function _setRatio(v) {
    var pt = this._firstPT,
        min = 0.000001,
        val;

    while (pt) {
      val = !pt.blob ? pt.c * v + pt.s : v === 1 && this.end != null ? this.end : v ? this.join("") : this.start;

      if (pt.m) {
        val = pt.m.call(this._tween, val, this._target || pt.t, this._tween);
      } else if (val < min) if (val > -min && !pt.blob) {
        //prevents issues with converting very small numbers to strings in the browser
        val = 0;
      }

      if (!pt.f) {
        pt.t[pt.p] = val;
      } else if (pt.fp) {
        pt.t[pt.p](pt.fp, val);
      } else {
        pt.t[pt.p](val);
      }

      pt = pt._next;
    }
  },
      //compares two strings (start/end), finds the numbers that are different and spits back an array representing the whole value but with the changing values isolated as elements. For example, "rgb(0,0,0)" and "rgb(100,50,0)" would become ["rgb(", 0, ",", 50, ",0)"]. Notice it merges the parts that are identical (performance optimization). The array also has a linked list of PropTweens attached starting with _firstPT that contain the tweening data (t, p, s, c, f, etc.). It also stores the starting value as a "start" property so that we can revert to it if/when necessary, like when a tween rewinds fully. If the quantity of numbers differs between the start and end, it will always prioritize the end value(s). The pt parameter is optional - it's for a PropTween that will be appended to the end of the linked list and is typically for actually setting the value after all of the elements have been updated (with array.join("")).
  _blobDif = function _blobDif(start, end, filter, pt) {
    var a = [],
        charIndex = 0,
        s = "",
        color = 0,
        startNums,
        endNums,
        num,
        i,
        l,
        nonNumbers,
        currentNum;
    a.start = start;
    a.end = end;
    start = a[0] = start + ""; //ensure values are strings

    end = a[1] = end + "";

    if (filter) {
      filter(a); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.

      start = a[0];
      end = a[1];
    }

    a.length = 0;
    startNums = start.match(_numbersExp) || [];
    endNums = end.match(_numbersExp) || [];

    if (pt) {
      pt._next = null;
      pt.blob = 1;
      a._firstPT = a._applyPT = pt; //apply last in the linked list (which means inserting it first)
    }

    l = endNums.length;

    for (i = 0; i < l; i++) {
      currentNum = endNums[i];
      nonNumbers = end.substr(charIndex, end.indexOf(currentNum, charIndex) - charIndex);
      s += nonNumbers || !i ? nonNumbers : ","; //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.

      charIndex += nonNumbers.length;

      if (color) {
        //sense rgba() values and round them.
        color = (color + 1) % 5;
      } else if (nonNumbers.substr(-5) === "rgba(") {
        color = 1;
      }

      if (currentNum === startNums[i] || startNums.length <= i) {
        s += currentNum;
      } else {
        if (s) {
          a.push(s);
          s = "";
        }

        num = parseFloat(startNums[i]);
        a.push(num);
        a._firstPT = {
          _next: a._firstPT,
          t: a,
          p: a.length - 1,
          s: num,
          c: (currentNum.charAt(1) === "=" ? parseInt(currentNum.charAt(0) + "1", 10) * parseFloat(currentNum.substr(2)) : parseFloat(currentNum) - num) || 0,
          f: 0,
          m: color && color < 4 ? Math.round : 0
        }; //note: we don't set _prev because we'll never need to remove individual PropTweens from this list.
      }

      charIndex += currentNum.length;
    }

    s += end.substr(charIndex);

    if (s) {
      a.push(s);
    }

    a.setRatio = _setRatio;

    if (_relExp.test(end)) {
      //if the end string contains relative values, delete it so that on the final render (in _setRatio()), we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
      a.end = null;
    }

    return a;
  },
      //note: "funcParam" is only necessary for function-based getters/setters that require an extra parameter like getAttribute("width") and setAttribute("width", value). In this example, funcParam would be "width". Used by AttrPlugin for example.
  _addPropTween = function _addPropTween(target, prop, start, end, overwriteProp, mod, funcParam, stringFilter, index) {
    if (typeof end === "function") {
      end = end(index || 0, target);
    }

    var type = _typeof(target[prop]),
        getterName = type !== "function" ? "" : prop.indexOf("set") || typeof target["get" + prop.substr(3)] !== "function" ? prop : "get" + prop.substr(3),
        s = start !== "get" ? start : !getterName ? target[prop] : funcParam ? target[getterName](funcParam) : target[getterName](),
        isRelative = typeof end === "string" && end.charAt(1) === "=",
        pt = {
      t: target,
      p: prop,
      s: s,
      f: type === "function",
      pg: 0,
      n: overwriteProp || prop,
      m: !mod ? 0 : typeof mod === "function" ? mod : Math.round,
      pr: 0,
      c: isRelative ? parseInt(end.charAt(0) + "1", 10) * parseFloat(end.substr(2)) : parseFloat(end) - s || 0
    },
        blob;

    if (typeof s !== "number" || typeof end !== "number" && !isRelative) {
      if (funcParam || isNaN(s) || !isRelative && isNaN(end) || typeof s === "boolean" || typeof end === "boolean") {
        //a blob (string that has multiple numbers in it)
        pt.fp = funcParam;
        blob = _blobDif(s, isRelative ? parseFloat(pt.s) + pt.c + (pt.s + "").replace(/[0-9\-\.]/g, "") : end, stringFilter || TweenLite.defaultStringFilter, pt);
        pt = {
          t: blob,
          p: "setRatio",
          s: 0,
          c: 1,
          f: 2,
          pg: 0,
          n: overwriteProp || prop,
          pr: 0,
          m: 0
        }; //"2" indicates it's a Blob property tween. Needed for RoundPropsPlugin for example.
      } else {
        pt.s = parseFloat(s);

        if (!isRelative) {
          pt.c = parseFloat(end) - pt.s || 0;
        }
      }
    }

    if (pt.c) {
      //only add it to the linked list if there's a change.
      if (pt._next = this._firstPT) {
        pt._next._prev = pt;
      }

      this._firstPT = pt;
      return pt;
    }
  },
      _internals = TweenLite._internals = {
    isArray: _isArray,
    isSelector: _isSelector,
    lazyTweens: _lazyTweens,
    blobDif: _blobDif
  },
      //gives us a way to expose certain private values to other GreenSock classes without contaminating tha main TweenLite object.
  _plugins = TweenLite._plugins = {},
      _tweenLookup = _internals.tweenLookup = {},
      _tweenLookupNum = 0,
      _reservedProps = _internals.reservedProps = {
    ease: 1,
    delay: 1,
    overwrite: 1,
    onComplete: 1,
    onCompleteParams: 1,
    onCompleteScope: 1,
    useFrames: 1,
    runBackwards: 1,
    startAt: 1,
    onUpdate: 1,
    onUpdateParams: 1,
    onUpdateScope: 1,
    onStart: 1,
    onStartParams: 1,
    onStartScope: 1,
    onReverseComplete: 1,
    onReverseCompleteParams: 1,
    onReverseCompleteScope: 1,
    onRepeat: 1,
    onRepeatParams: 1,
    onRepeatScope: 1,
    easeParams: 1,
    yoyo: 1,
    immediateRender: 1,
    repeat: 1,
    repeatDelay: 1,
    data: 1,
    paused: 1,
    reversed: 1,
    autoCSS: 1,
    lazy: 1,
    onOverwrite: 1,
    callbackScope: 1,
    stringFilter: 1,
    id: 1,
    yoyoEase: 1
  },
      _overwriteLookup = {
    none: 0,
    all: 1,
    auto: 2,
    concurrent: 3,
    allOnStart: 4,
    preexisting: 5,
    "true": 1,
    "false": 0
  },
      _rootFramesTimeline = Animation._rootFramesTimeline = new SimpleTimeline(),
      _rootTimeline = Animation._rootTimeline = new SimpleTimeline(),
      _nextGCFrame = 30,
      _lazyRender = _internals.lazyRender = function () {
    var i = _lazyTweens.length,
        tween;
    _lazyLookup = {};

    while (--i > -1) {
      tween = _lazyTweens[i];

      if (tween && tween._lazy !== false) {
        tween.render(tween._lazy[0], tween._lazy[1], true);
        tween._lazy = false;
      }
    }

    _lazyTweens.length = 0;
  };

  _rootTimeline._startTime = _ticker.time;
  _rootFramesTimeline._startTime = _ticker.frame;
  _rootTimeline._active = _rootFramesTimeline._active = true;
  setTimeout(_lazyRender, 1); //on some mobile devices, there isn't a "tick" before code runs which means any lazy renders wouldn't run before the next official "tick".

  Animation._updateRoot = TweenLite.render = function () {
    var i, a, p;

    if (_lazyTweens.length) {
      //if code is run outside of the requestAnimationFrame loop, there may be tweens queued AFTER the engine refreshed, so we need to ensure any pending renders occur before we refresh again.
      _lazyRender();
    }

    _rootTimeline.render((_ticker.time - _rootTimeline._startTime) * _rootTimeline._timeScale, false, false);

    _rootFramesTimeline.render((_ticker.frame - _rootFramesTimeline._startTime) * _rootFramesTimeline._timeScale, false, false);

    if (_lazyTweens.length) {
      _lazyRender();
    }

    if (_ticker.frame >= _nextGCFrame) {
      //dump garbage every 120 frames or whatever the user sets TweenLite.autoSleep to
      _nextGCFrame = _ticker.frame + (parseInt(TweenLite.autoSleep, 10) || 120);

      for (p in _tweenLookup) {
        a = _tweenLookup[p].tweens;
        i = a.length;

        while (--i > -1) {
          if (a[i]._gc) {
            a.splice(i, 1);
          }
        }

        if (a.length === 0) {
          delete _tweenLookup[p];
        }
      } //if there are no more tweens in the root timelines, or if they're all paused, make the _timer sleep to reduce load on the CPU slightly


      p = _rootTimeline._first;
      if (!p || p._paused) if (TweenLite.autoSleep && !_rootFramesTimeline._first && _ticker._listeners.tick.length === 1) {
        while (p && p._paused) {
          p = p._next;
        }

        if (!p) {
          _ticker.sleep();
        }
      }
    }
  };

  _ticker.addEventListener("tick", Animation._updateRoot);

  var _register = function _register(target, tween, scrub) {
    var id = target._gsTweenID,
        a,
        i;

    if (!_tweenLookup[id || (target._gsTweenID = id = "t" + _tweenLookupNum++)]) {
      _tweenLookup[id] = {
        target: target,
        tweens: []
      };
    }

    if (tween) {
      a = _tweenLookup[id].tweens;
      a[i = a.length] = tween;

      if (scrub) {
        while (--i > -1) {
          if (a[i] === tween) {
            a.splice(i, 1);
          }
        }
      }
    }

    return _tweenLookup[id].tweens;
  },
      _onOverwrite = function _onOverwrite(overwrittenTween, overwritingTween, target, killedProps) {
    var func = overwrittenTween.vars.onOverwrite,
        r1,
        r2;

    if (func) {
      r1 = func(overwrittenTween, overwritingTween, target, killedProps);
    }

    func = TweenLite.onOverwrite;

    if (func) {
      r2 = func(overwrittenTween, overwritingTween, target, killedProps);
    }

    return r1 !== false && r2 !== false;
  },
      _applyOverwrite = function _applyOverwrite(target, tween, props, mode, siblings) {
    var i, changed, curTween, l;

    if (mode === 1 || mode >= 4) {
      l = siblings.length;

      for (i = 0; i < l; i++) {
        if ((curTween = siblings[i]) !== tween) {
          if (!curTween._gc) {
            if (curTween._kill(null, target, tween)) {
              changed = true;
            }
          }
        } else if (mode === 5) {
          break;
        }
      }

      return changed;
    } //NOTE: Add 0.0000000001 to overcome floating point errors that can cause the startTime to be VERY slightly off (when a tween's time() is set for example)


    var startTime = tween._startTime + _tinyNum,
        overlaps = [],
        oCount = 0,
        zeroDur = tween._duration === 0,
        globalStart;
    i = siblings.length;

    while (--i > -1) {
      if ((curTween = siblings[i]) === tween || curTween._gc || curTween._paused) {//ignore
      } else if (curTween._timeline !== tween._timeline) {
        globalStart = globalStart || _checkOverlap(tween, 0, zeroDur);

        if (_checkOverlap(curTween, globalStart, zeroDur) === 0) {
          overlaps[oCount++] = curTween;
        }
      } else if (curTween._startTime <= startTime) if (curTween._startTime + curTween.totalDuration() / curTween._timeScale > startTime) if (!((zeroDur || !curTween._initted) && startTime - curTween._startTime <= 0.0000000002)) {
        overlaps[oCount++] = curTween;
      }
    }

    i = oCount;

    while (--i > -1) {
      curTween = overlaps[i];
      l = curTween._firstPT; //we need to discern if there were property tweens originally; if they all get removed in the next line's _kill() call, the tween should be killed. See https://github.com/greensock/GreenSock-JS/issues/278

      if (mode === 2) if (curTween._kill(props, target, tween)) {
        changed = true;
      }

      if (mode !== 2 || !curTween._firstPT && curTween._initted && l) {
        if (mode !== 2 && !_onOverwrite(curTween, tween)) {
          continue;
        }

        if (curTween._enabled(false, false)) {
          //if all property tweens have been overwritten, kill the tween.
          changed = true;
        }
      }
    }

    return changed;
  },
      _checkOverlap = function _checkOverlap(tween, reference, zeroDur) {
    var tl = tween._timeline,
        ts = tl._timeScale,
        t = tween._startTime;

    while (tl._timeline) {
      t += tl._startTime;
      ts *= tl._timeScale;

      if (tl._paused) {
        return -100;
      }

      tl = tl._timeline;
    }

    t /= ts;
    return t > reference ? t - reference : zeroDur && t === reference || !tween._initted && t - reference < 2 * _tinyNum ? _tinyNum : (t += tween.totalDuration() / tween._timeScale / ts) > reference + _tinyNum ? 0 : t - reference - _tinyNum;
  }; //---- TweenLite instance methods -----------------------------------------------------------------------------


  p._init = function () {
    var v = this.vars,
        op = this._overwrittenProps,
        dur = this._duration,
        immediate = !!v.immediateRender,
        ease = v.ease,
        i,
        initPlugins,
        pt,
        p,
        startVars,
        l;

    if (v.startAt) {
      if (this._startAt) {
        this._startAt.render(-1, true); //if we've run a startAt previously (when the tween instantiated), we should revert it so that the values re-instantiate correctly particularly for relative tweens. Without this, a TweenLite.fromTo(obj, 1, {x:"+=100"}, {x:"-=100"}), for example, would actually jump to +=200 because the startAt would run twice, doubling the relative change.


        this._startAt.kill();
      }

      startVars = {};

      for (p in v.startAt) {
        //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, 1, from, to).fromTo(e, 1, to, from);
        startVars[p] = v.startAt[p];
      }

      startVars.data = "isStart";
      startVars.overwrite = false;
      startVars.immediateRender = true;
      startVars.lazy = immediate && v.lazy !== false;
      startVars.startAt = startVars.delay = null; //no nesting of startAt objects allowed (otherwise it could cause an infinite loop).

      startVars.onUpdate = v.onUpdate;
      startVars.onUpdateParams = v.onUpdateParams;
      startVars.onUpdateScope = v.onUpdateScope || v.callbackScope || this;
      this._startAt = TweenLite.to(this.target || {}, 0, startVars);

      if (immediate) {
        if (this._time > 0) {
          this._startAt = null; //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in TimelineLite/Max instances where immediateRender was false (which is the default in the convenience methods like from()).
        } else if (dur !== 0) {
          return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a TimelineLite or TimelineMax, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
        }
      }
    } else if (v.runBackwards && dur !== 0) {
      //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
      if (this._startAt) {
        this._startAt.render(-1, true);

        this._startAt.kill();

        this._startAt = null;
      } else {
        if (this._time !== 0) {
          //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0
          immediate = false;
        }

        pt = {};

        for (p in v) {
          //copy props into a new object and skip any reserved props, otherwise onComplete or onUpdate or onStart could fire. We should, however, permit autoCSS to go through.
          if (!_reservedProps[p] || p === "autoCSS") {
            pt[p] = v[p];
          }
        }

        pt.overwrite = 0;
        pt.data = "isFromStart"; //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.

        pt.lazy = immediate && v.lazy !== false;
        pt.immediateRender = immediate; //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)

        this._startAt = TweenLite.to(this.target, 0, pt);

        if (!immediate) {
          this._startAt._init(); //ensures that the initial values are recorded


          this._startAt._enabled(false); //no need to have the tween render on the next cycle. Disable it because we'll always manually control the renders of the _startAt tween.


          if (this.vars.immediateRender) {
            this._startAt = null;
          }
        } else if (this._time === 0) {
          return;
        }
      }
    }

    this._ease = ease = !ease ? TweenLite.defaultEase : ease instanceof Ease ? ease : typeof ease === "function" ? new Ease(ease, v.easeParams) : _easeMap[ease] || TweenLite.defaultEase;

    if (v.easeParams instanceof Array && ease.config) {
      this._ease = ease.config.apply(ease, v.easeParams);
    }

    this._easeType = this._ease._type;
    this._easePower = this._ease._power;
    this._firstPT = null;

    if (this._targets) {
      l = this._targets.length;

      for (i = 0; i < l; i++) {
        if (this._initProps(this._targets[i], this._propLookup[i] = {}, this._siblings[i], op ? op[i] : null, i)) {
          initPlugins = true;
        }
      }
    } else {
      initPlugins = this._initProps(this.target, this._propLookup, this._siblings, op, 0);
    }

    if (initPlugins) {
      TweenLite._onPluginEvent("_onInitAllProps", this); //reorders the array in order of priority. Uses a static TweenPlugin method in order to minimize file size in TweenLite

    }

    if (op) if (!this._firstPT) if (typeof this.target !== "function") {
      //if all tweening properties have been overwritten, kill the tween. If the target is a function, it's probably a delayedCall so let it live.
      this._enabled(false, false);
    }

    if (v.runBackwards) {
      pt = this._firstPT;

      while (pt) {
        pt.s += pt.c;
        pt.c = -pt.c;
        pt = pt._next;
      }
    }

    this._onUpdate = v.onUpdate;
    this._initted = true;
  };

  p._initProps = function (target, propLookup, siblings, overwrittenProps, index) {
    var p, i, initPlugins, plugin, pt, v;

    if (target == null) {
      return false;
    }

    if (_lazyLookup[target._gsTweenID]) {
      _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)

    }

    if (!this.vars.css) if (target.style) if (target !== window && target.nodeType) if (_plugins.css) if (this.vars.autoCSS !== false) {
      //it's so common to use TweenLite/Max to animate the css of DOM elements, we assume that if the target is a DOM element, that's what is intended (a convenience so that users don't have to wrap things in css:{}, although we still recommend it for a slight performance boost and better specificity). Note: we cannot check "nodeType" on the window inside an iframe.
      _autoCSS(this.vars, target);
    }

    for (p in this.vars) {
      v = this.vars[p];

      if (_reservedProps[p]) {
        if (v) if (v instanceof Array || v.push && _isArray(v)) if (v.join("").indexOf("{self}") !== -1) {
          this.vars[p] = v = this._swapSelfInParams(v, this);
        }
      } else if (_plugins[p] && (plugin = new _plugins[p]())._onInitTween(target, this.vars[p], this, index)) {
        //t - target 		[object]
        //p - property 		[string]
        //s - start			[number]
        //c - change		[number]
        //f - isFunction	[boolean]
        //n - name			[string]
        //pg - isPlugin 	[boolean]
        //pr - priority		[number]
        //m - mod           [function | 0]
        this._firstPT = pt = {
          _next: this._firstPT,
          t: plugin,
          p: "setRatio",
          s: 0,
          c: 1,
          f: 1,
          n: p,
          pg: 1,
          pr: plugin._priority,
          m: 0
        };
        i = plugin._overwriteProps.length;

        while (--i > -1) {
          propLookup[plugin._overwriteProps[i]] = this._firstPT;
        }

        if (plugin._priority || plugin._onInitAllProps) {
          initPlugins = true;
        }

        if (plugin._onDisable || plugin._onEnable) {
          this._notifyPluginsOfEnabled = true;
        }

        if (pt._next) {
          pt._next._prev = pt;
        }
      } else {
        propLookup[p] = _addPropTween.call(this, target, p, "get", v, p, 0, null, this.vars.stringFilter, index);
      }
    }

    if (overwrittenProps) if (this._kill(overwrittenProps, target)) {
      //another tween may have tried to overwrite properties of this tween before init() was called (like if two tweens start at the same time, the one created second will run first)
      return this._initProps(target, propLookup, siblings, overwrittenProps, index);
    }
    if (this._overwrite > 1) if (this._firstPT) if (siblings.length > 1) if (_applyOverwrite(target, this, propLookup, this._overwrite, siblings)) {
      this._kill(propLookup, target);

      return this._initProps(target, propLookup, siblings, overwrittenProps, index);
    }
    if (this._firstPT) if (this.vars.lazy !== false && this._duration || this.vars.lazy && !this._duration) {
      //zero duration tweens don't lazy render by default; everything else does.
      _lazyLookup[target._gsTweenID] = true;
    }
    return initPlugins;
  };

  p.render = function (time, suppressEvents, force) {
    var prevTime = this._time,
        duration = this._duration,
        prevRawPrevTime = this._rawPrevTime,
        isComplete,
        callback,
        pt,
        rawPrevTime;

    if (time >= duration - 0.0000001 && time >= 0) {
      //to work around occasional floating point math artifacts.
      this._totalTime = this._time = duration;
      this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;

      if (!this._reversed) {
        isComplete = true;
        callback = "onComplete";
        force = force || this._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
      }

      if (duration === 0) if (this._initted || !this.vars.lazy || force) {
        //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
        if (this._startTime === this._timeline._duration) {
          //if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
          time = 0;
        }

        if (prevRawPrevTime < 0 || time <= 0 && time >= -0.0000001 || prevRawPrevTime === _tinyNum && this.data !== "isPause") if (prevRawPrevTime !== time) {
          //note: when this.data is "isPause", it's a callback added by addPause() on a timeline that we should not be triggered when LEAVING its exact start time. In other words, tl.addPause(1).play(1) shouldn't pause.
          force = true;

          if (prevRawPrevTime > _tinyNum) {
            callback = "onReverseComplete";
          }
        }
        this._rawPrevTime = rawPrevTime = !suppressEvents || time || prevRawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
      }
    } else if (time < 0.0000001) {
      //to work around occasional floating point math artifacts, round super small values to 0.
      this._totalTime = this._time = 0;
      this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;

      if (prevTime !== 0 || duration === 0 && prevRawPrevTime > 0) {
        callback = "onReverseComplete";
        isComplete = this._reversed;
      }

      if (time < 0) {
        this._active = false;
        if (duration === 0) if (this._initted || !this.vars.lazy || force) {
          //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
          if (prevRawPrevTime >= 0 && !(prevRawPrevTime === _tinyNum && this.data === "isPause")) {
            force = true;
          }

          this._rawPrevTime = rawPrevTime = !suppressEvents || time || prevRawPrevTime === time ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
        }
      }

      if (!this._initted || this._startAt && this._startAt.progress()) {
        //if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately. Also, we check progress() because if startAt has already rendered at its end, we should force a render at its beginning. Otherwise, if you put the playhead directly on top of where a fromTo({immediateRender:false}) starts, and then move it backwards, the from() won't revert its values.
        force = true;
      }
    } else {
      this._totalTime = this._time = time;

      if (this._easeType) {
        var r = time / duration,
            type = this._easeType,
            pow = this._easePower;

        if (type === 1 || type === 3 && r >= 0.5) {
          r = 1 - r;
        }

        if (type === 3) {
          r *= 2;
        }

        if (pow === 1) {
          r *= r;
        } else if (pow === 2) {
          r *= r * r;
        } else if (pow === 3) {
          r *= r * r * r;
        } else if (pow === 4) {
          r *= r * r * r * r;
        }

        if (type === 1) {
          this.ratio = 1 - r;
        } else if (type === 2) {
          this.ratio = r;
        } else if (time / duration < 0.5) {
          this.ratio = r / 2;
        } else {
          this.ratio = 1 - r / 2;
        }
      } else {
        this.ratio = this._ease.getRatio(time / duration);
      }
    }

    if (this._time === prevTime && !force) {
      return;
    } else if (!this._initted) {
      this._init();

      if (!this._initted || this._gc) {
        //immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
        return;
      } else if (!force && this._firstPT && (this.vars.lazy !== false && this._duration || this.vars.lazy && !this._duration)) {
        this._time = this._totalTime = prevTime;
        this._rawPrevTime = prevRawPrevTime;

        _lazyTweens.push(this);

        this._lazy = [time, suppressEvents];
        return;
      } //_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.


      if (this._time && !isComplete) {
        this.ratio = this._ease.getRatio(this._time / duration);
      } else if (isComplete && this._ease._calcEnd) {
        this.ratio = this._ease.getRatio(this._time === 0 ? 0 : 1);
      }
    }

    if (this._lazy !== false) {
      //in case a lazy render is pending, we should flush it because the new render is occurring now (imagine a lazy tween instantiating and then immediately the user calls tween.seek(tween.duration()), skipping to the end - the end render would be forced, and then if we didn't flush the lazy render, it'd fire AFTER the seek(), rendering it at the wrong time.
      this._lazy = false;
    }

    if (!this._active) if (!this._paused && this._time !== prevTime && time >= 0) {
      this._active = true; //so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
    }

    if (prevTime === 0) {
      if (this._startAt) {
        if (time >= 0) {
          this._startAt.render(time, true, force);
        } else if (!callback) {
          callback = "_dummyGS"; //if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
        }
      }

      if (this.vars.onStart) if (this._time !== 0 || duration === 0) if (!suppressEvents) {
        this._callback("onStart");
      }
    }

    pt = this._firstPT;

    while (pt) {
      if (pt.f) {
        pt.t[pt.p](pt.c * this.ratio + pt.s);
      } else {
        pt.t[pt.p] = pt.c * this.ratio + pt.s;
      }

      pt = pt._next;
    }

    if (this._onUpdate) {
      if (time < 0) if (this._startAt && time !== -0.0001) {
        //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
        this._startAt.render(time, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.

      }
      if (!suppressEvents) if (this._time !== prevTime || isComplete || force) {
        this._callback("onUpdate");
      }
    }

    if (callback) if (!this._gc || force) {
      //check _gc because there's a chance that kill() could be called in an onUpdate
      if (time < 0 && this._startAt && !this._onUpdate && time !== -0.0001) {
        //-0.0001 is a special value that we use when looping back to the beginning of a repeated TimelineMax, in which case we shouldn't render the _startAt values.
        this._startAt.render(time, true, force);
      }

      if (isComplete) {
        if (this._timeline.autoRemoveChildren) {
          this._enabled(false, false);
        }

        this._active = false;
      }

      if (!suppressEvents && this.vars[callback]) {
        this._callback(callback);
      }

      if (duration === 0 && this._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) {
        //the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
        this._rawPrevTime = 0;
      }
    }
  };

  p._kill = function (vars, target, overwritingTween) {
    if (vars === "all") {
      vars = null;
    }

    if (vars == null) if (target == null || target === this.target) {
      this._lazy = false;
      return this._enabled(false, false);
    }
    target = typeof target !== "string" ? target || this._targets || this.target : TweenLite.selector(target) || target;
    var simultaneousOverwrite = overwritingTween && this._time && overwritingTween._startTime === this._startTime && this._timeline === overwritingTween._timeline,
        firstPT = this._firstPT,
        i,
        overwrittenProps,
        p,
        pt,
        propLookup,
        changed,
        killProps,
        record,
        killed;

    if ((_isArray(target) || _isSelector(target)) && typeof target[0] !== "number") {
      i = target.length;

      while (--i > -1) {
        if (this._kill(vars, target[i], overwritingTween)) {
          changed = true;
        }
      }
    } else {
      if (this._targets) {
        i = this._targets.length;

        while (--i > -1) {
          if (target === this._targets[i]) {
            propLookup = this._propLookup[i] || {};
            this._overwrittenProps = this._overwrittenProps || [];
            overwrittenProps = this._overwrittenProps[i] = vars ? this._overwrittenProps[i] || {} : "all";
            break;
          }
        }
      } else if (target !== this.target) {
        return false;
      } else {
        propLookup = this._propLookup;
        overwrittenProps = this._overwrittenProps = vars ? this._overwrittenProps || {} : "all";
      }

      if (propLookup) {
        killProps = vars || propLookup;
        record = vars !== overwrittenProps && overwrittenProps !== "all" && vars !== propLookup && (_typeof(vars) !== "object" || !vars._tempKill); //_tempKill is a super-secret way to delete a particular tweening property but NOT have it remembered as an official overwritten property (like in BezierPlugin)

        if (overwritingTween && (TweenLite.onOverwrite || this.vars.onOverwrite)) {
          for (p in killProps) {
            if (propLookup[p]) {
              if (!killed) {
                killed = [];
              }

              killed.push(p);
            }
          }

          if ((killed || !vars) && !_onOverwrite(this, overwritingTween, target, killed)) {
            //if the onOverwrite returned false, that means the user wants to override the overwriting (cancel it).
            return false;
          }
        }

        for (p in killProps) {
          if (pt = propLookup[p]) {
            if (simultaneousOverwrite) {
              //if another tween overwrites this one and they both start at exactly the same time, yet this tween has already rendered once (for example, at 0.001) because it's first in the queue, we should revert the values to where they were at 0 so that the starting values aren't contaminated on the overwriting tween.
              if (pt.f) {
                pt.t[pt.p](pt.s);
              } else {
                pt.t[pt.p] = pt.s;
              }

              changed = true;
            }

            if (pt.pg && pt.t._kill(killProps)) {
              changed = true; //some plugins need to be notified so they can perform cleanup tasks first
            }

            if (!pt.pg || pt.t._overwriteProps.length === 0) {
              if (pt._prev) {
                pt._prev._next = pt._next;
              } else if (pt === this._firstPT) {
                this._firstPT = pt._next;
              }

              if (pt._next) {
                pt._next._prev = pt._prev;
              }

              pt._next = pt._prev = null;
            }

            delete propLookup[p];
          }

          if (record) {
            overwrittenProps[p] = 1;
          }
        }

        if (!this._firstPT && this._initted && firstPT) {
          //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.
          this._enabled(false, false);
        }
      }
    }

    return changed;
  };

  p.invalidate = function () {
    if (this._notifyPluginsOfEnabled) {
      TweenLite._onPluginEvent("_onDisable", this);
    }

    this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null;
    this._notifyPluginsOfEnabled = this._active = this._lazy = false;
    this._propLookup = this._targets ? {} : [];
    Animation.prototype.invalidate.call(this);

    if (this.vars.immediateRender) {
      this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)

      this.render(Math.min(0, -this._delay)); //in case delay is negative.
    }

    return this;
  };

  p._enabled = function (enabled, ignoreTimeline) {
    if (!_tickerActive) {
      _ticker.wake();
    }

    if (enabled && this._gc) {
      var targets = this._targets,
          i;

      if (targets) {
        i = targets.length;

        while (--i > -1) {
          this._siblings[i] = _register(targets[i], this, true);
        }
      } else {
        this._siblings = _register(this.target, this, true);
      }
    }

    Animation.prototype._enabled.call(this, enabled, ignoreTimeline);

    if (this._notifyPluginsOfEnabled) if (this._firstPT) {
      return TweenLite._onPluginEvent(enabled ? "_onEnable" : "_onDisable", this);
    }
    return false;
  }; //----TweenLite static methods -----------------------------------------------------


  TweenLite.to = function (target, duration, vars) {
    return new TweenLite(target, duration, vars);
  };

  TweenLite.from = function (target, duration, vars) {
    vars.runBackwards = true;
    vars.immediateRender = vars.immediateRender != false;
    return new TweenLite(target, duration, vars);
  };

  TweenLite.fromTo = function (target, duration, fromVars, toVars) {
    toVars.startAt = fromVars;
    toVars.immediateRender = toVars.immediateRender != false && fromVars.immediateRender != false;
    return new TweenLite(target, duration, toVars);
  };

  TweenLite.delayedCall = function (delay, callback, params, scope, useFrames) {
    return new TweenLite(callback, 0, {
      delay: delay,
      onComplete: callback,
      onCompleteParams: params,
      callbackScope: scope,
      onReverseComplete: callback,
      onReverseCompleteParams: params,
      immediateRender: false,
      lazy: false,
      useFrames: useFrames,
      overwrite: 0
    });
  };

  TweenLite.set = function (target, vars) {
    return new TweenLite(target, 0, vars);
  };

  TweenLite.getTweensOf = function (target, onlyActive) {
    if (target == null) {
      return [];
    }

    target = typeof target !== "string" ? target : TweenLite.selector(target) || target;
    var i, a, j, t;

    if ((_isArray(target) || _isSelector(target)) && typeof target[0] !== "number") {
      i = target.length;
      a = [];

      while (--i > -1) {
        a = a.concat(TweenLite.getTweensOf(target[i], onlyActive));
      }

      i = a.length; //now get rid of any duplicates (tweens of arrays of objects could cause duplicates)

      while (--i > -1) {
        t = a[i];
        j = i;

        while (--j > -1) {
          if (t === a[j]) {
            a.splice(i, 1);
          }
        }
      }
    } else if (target._gsTweenID) {
      a = _register(target).concat();
      i = a.length;

      while (--i > -1) {
        if (a[i]._gc || onlyActive && !a[i].isActive()) {
          a.splice(i, 1);
        }
      }
    }

    return a || [];
  };

  TweenLite.killTweensOf = TweenLite.killDelayedCallsTo = function (target, onlyActive, vars) {
    if (_typeof(onlyActive) === "object") {
      vars = onlyActive; //for backwards compatibility (before "onlyActive" parameter was inserted)

      onlyActive = false;
    }

    var a = TweenLite.getTweensOf(target, onlyActive),
        i = a.length;

    while (--i > -1) {
      a[i]._kill(vars, target);
    }
  };
  /*
   * ----------------------------------------------------------------
   * TweenPlugin   (could easily be split out as a separate file/class, but included for ease of use (so that people don't need to include another script call before loading plugins which is easy to forget)
   * ----------------------------------------------------------------
   */


  var TweenPlugin = _class("plugins.TweenPlugin", function (props, priority) {
    this._overwriteProps = (props || "").split(",");
    this._propName = this._overwriteProps[0];
    this._priority = priority || 0;
    this._super = TweenPlugin.prototype;
  }, true);

  p = TweenPlugin.prototype;
  TweenPlugin.version = "1.19.0";
  TweenPlugin.API = 2;
  p._firstPT = null;
  p._addTween = _addPropTween;
  p.setRatio = _setRatio;

  p._kill = function (lookup) {
    var a = this._overwriteProps,
        pt = this._firstPT,
        i;

    if (lookup[this._propName] != null) {
      this._overwriteProps = [];
    } else {
      i = a.length;

      while (--i > -1) {
        if (lookup[a[i]] != null) {
          a.splice(i, 1);
        }
      }
    }

    while (pt) {
      if (lookup[pt.n] != null) {
        if (pt._next) {
          pt._next._prev = pt._prev;
        }

        if (pt._prev) {
          pt._prev._next = pt._next;
          pt._prev = null;
        } else if (this._firstPT === pt) {
          this._firstPT = pt._next;
        }
      }

      pt = pt._next;
    }

    return false;
  };

  p._mod = p._roundProps = function (lookup) {
    var pt = this._firstPT,
        val;

    while (pt) {
      val = lookup[this._propName] || pt.n != null && lookup[pt.n.split(this._propName + "_").join("")];

      if (val && typeof val === "function") {
        //some properties that are very plugin-specific add a prefix named after the _propName plus an underscore, so we need to ignore that extra stuff here.
        if (pt.f === 2) {
          pt.t._applyPT.m = val;
        } else {
          pt.m = val;
        }
      }

      pt = pt._next;
    }
  };

  TweenLite._onPluginEvent = function (type, tween) {
    var pt = tween._firstPT,
        changed,
        pt2,
        first,
        last,
        next;

    if (type === "_onInitAllProps") {
      //sorts the PropTween linked list in order of priority because some plugins need to render earlier/later than others, like MotionBlurPlugin applies its effects after all x/y/alpha tweens have rendered on each frame.
      while (pt) {
        next = pt._next;
        pt2 = first;

        while (pt2 && pt2.pr > pt.pr) {
          pt2 = pt2._next;
        }

        if (pt._prev = pt2 ? pt2._prev : last) {
          pt._prev._next = pt;
        } else {
          first = pt;
        }

        if (pt._next = pt2) {
          pt2._prev = pt;
        } else {
          last = pt;
        }

        pt = next;
      }

      pt = tween._firstPT = first;
    }

    while (pt) {
      if (pt.pg) if (typeof pt.t[type] === "function") if (pt.t[type]()) {
        changed = true;
      }
      pt = pt._next;
    }

    return changed;
  };

  TweenPlugin.activate = function (plugins) {
    var i = plugins.length;

    while (--i > -1) {
      if (plugins[i].API === TweenPlugin.API) {
        _plugins[new plugins[i]()._propName] = plugins[i];
      }
    }

    return true;
  }; //provides a more concise way to define plugins that have no dependencies besides TweenPlugin and TweenLite, wrapping common boilerplate stuff into one function (added in 1.9.0). You don't NEED to use this to define a plugin - the old way still works and can be useful in certain (rare) situations.


  _gsDefine.plugin = function (config) {
    if (!config || !config.propName || !config.init || !config.API) {
      throw "illegal plugin definition.";
    }

    var propName = config.propName,
        priority = config.priority || 0,
        overwriteProps = config.overwriteProps,
        map = {
      init: "_onInitTween",
      set: "setRatio",
      kill: "_kill",
      round: "_mod",
      mod: "_mod",
      initAll: "_onInitAllProps"
    },
        Plugin = _class("plugins." + propName.charAt(0).toUpperCase() + propName.substr(1) + "Plugin", function () {
      TweenPlugin.call(this, propName, priority);
      this._overwriteProps = overwriteProps || [];
    }, config.global === true),
        p = Plugin.prototype = new TweenPlugin(propName),
        prop;

    p.constructor = Plugin;
    Plugin.API = config.API;

    for (prop in map) {
      if (typeof config[prop] === "function") {
        p[map[prop]] = config[prop];
      }
    }

    Plugin.version = config.version;
    TweenPlugin.activate([Plugin]);
    return Plugin;
  }; //now run through all the dependencies discovered and if any are missing, log that to the console as a warning. This is why it's best to have TweenLite load last - it can check all the dependencies for you.


  a = window._gsQueue;

  if (a) {
    for (i = 0; i < a.length; i++) {
      a[i]();
    }

    for (p in _defLookup) {
      if (!_defLookup[p].func) {
        window.console.log("GSAP encountered missing dependency: " + p);
      }
    }
  }

  _tickerActive = false; //ensures that the first official animation forces a ticker.tick() to update the time when it is instantiated
})(typeof module !== "undefined" && module.exports && typeof global !== "undefined" ? global : void 0 || window, "TweenMax");

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Observable_1 = require("./internal/Observable");

exports.Observable = Observable_1.Observable;

var ConnectableObservable_1 = require("./internal/observable/ConnectableObservable");

exports.ConnectableObservable = ConnectableObservable_1.ConnectableObservable;

var groupBy_1 = require("./internal/operators/groupBy");

exports.GroupedObservable = groupBy_1.GroupedObservable;

var observable_1 = require("./internal/symbol/observable");

exports.observable = observable_1.observable;

var Subject_1 = require("./internal/Subject");

exports.Subject = Subject_1.Subject;

var BehaviorSubject_1 = require("./internal/BehaviorSubject");

exports.BehaviorSubject = BehaviorSubject_1.BehaviorSubject;

var ReplaySubject_1 = require("./internal/ReplaySubject");

exports.ReplaySubject = ReplaySubject_1.ReplaySubject;

var AsyncSubject_1 = require("./internal/AsyncSubject");

exports.AsyncSubject = AsyncSubject_1.AsyncSubject;

var asap_1 = require("./internal/scheduler/asap");

exports.asapScheduler = asap_1.asap;

var async_1 = require("./internal/scheduler/async");

exports.asyncScheduler = async_1.async;

var queue_1 = require("./internal/scheduler/queue");

exports.queueScheduler = queue_1.queue;

var animationFrame_1 = require("./internal/scheduler/animationFrame");

exports.animationFrameScheduler = animationFrame_1.animationFrame;

var VirtualTimeScheduler_1 = require("./internal/scheduler/VirtualTimeScheduler");

exports.VirtualTimeScheduler = VirtualTimeScheduler_1.VirtualTimeScheduler;
exports.VirtualAction = VirtualTimeScheduler_1.VirtualAction;

var Scheduler_1 = require("./internal/Scheduler");

exports.Scheduler = Scheduler_1.Scheduler;

var Subscription_1 = require("./internal/Subscription");

exports.Subscription = Subscription_1.Subscription;

var Subscriber_1 = require("./internal/Subscriber");

exports.Subscriber = Subscriber_1.Subscriber;

var Notification_1 = require("./internal/Notification");

exports.Notification = Notification_1.Notification;

var pipe_1 = require("./internal/util/pipe");

exports.pipe = pipe_1.pipe;

var noop_1 = require("./internal/util/noop");

exports.noop = noop_1.noop;

var identity_1 = require("./internal/util/identity");

exports.identity = identity_1.identity;

var isObservable_1 = require("./internal/util/isObservable");

exports.isObservable = isObservable_1.isObservable;

var ArgumentOutOfRangeError_1 = require("./internal/util/ArgumentOutOfRangeError");

exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;

var EmptyError_1 = require("./internal/util/EmptyError");

exports.EmptyError = EmptyError_1.EmptyError;

var ObjectUnsubscribedError_1 = require("./internal/util/ObjectUnsubscribedError");

exports.ObjectUnsubscribedError = ObjectUnsubscribedError_1.ObjectUnsubscribedError;

var UnsubscriptionError_1 = require("./internal/util/UnsubscriptionError");

exports.UnsubscriptionError = UnsubscriptionError_1.UnsubscriptionError;

var TimeoutError_1 = require("./internal/util/TimeoutError");

exports.TimeoutError = TimeoutError_1.TimeoutError;

var bindCallback_1 = require("./internal/observable/bindCallback");

exports.bindCallback = bindCallback_1.bindCallback;

var bindNodeCallback_1 = require("./internal/observable/bindNodeCallback");

exports.bindNodeCallback = bindNodeCallback_1.bindNodeCallback;

var combineLatest_1 = require("./internal/observable/combineLatest");

exports.combineLatest = combineLatest_1.combineLatest;

var concat_1 = require("./internal/observable/concat");

exports.concat = concat_1.concat;

var defer_1 = require("./internal/observable/defer");

exports.defer = defer_1.defer;

var empty_1 = require("./internal/observable/empty");

exports.empty = empty_1.empty;

var forkJoin_1 = require("./internal/observable/forkJoin");

exports.forkJoin = forkJoin_1.forkJoin;

var from_1 = require("./internal/observable/from");

exports.from = from_1.from;

var fromEvent_1 = require("./internal/observable/fromEvent");

exports.fromEvent = fromEvent_1.fromEvent;

var fromEventPattern_1 = require("./internal/observable/fromEventPattern");

exports.fromEventPattern = fromEventPattern_1.fromEventPattern;

var generate_1 = require("./internal/observable/generate");

exports.generate = generate_1.generate;

var iif_1 = require("./internal/observable/iif");

exports.iif = iif_1.iif;

var interval_1 = require("./internal/observable/interval");

exports.interval = interval_1.interval;

var merge_1 = require("./internal/observable/merge");

exports.merge = merge_1.merge;

var never_1 = require("./internal/observable/never");

exports.never = never_1.never;

var of_1 = require("./internal/observable/of");

exports.of = of_1.of;

var onErrorResumeNext_1 = require("./internal/observable/onErrorResumeNext");

exports.onErrorResumeNext = onErrorResumeNext_1.onErrorResumeNext;

var pairs_1 = require("./internal/observable/pairs");

exports.pairs = pairs_1.pairs;

var race_1 = require("./internal/observable/race");

exports.race = race_1.race;

var range_1 = require("./internal/observable/range");

exports.range = range_1.range;

var throwError_1 = require("./internal/observable/throwError");

exports.throwError = throwError_1.throwError;

var timer_1 = require("./internal/observable/timer");

exports.timer = timer_1.timer;

var using_1 = require("./internal/observable/using");

exports.using = using_1.using;

var zip_1 = require("./internal/observable/zip");

exports.zip = zip_1.zip;

var empty_2 = require("./internal/observable/empty");

exports.EMPTY = empty_2.EMPTY;

var never_2 = require("./internal/observable/never");

exports.NEVER = never_2.NEVER;

var config_1 = require("./internal/config");

exports.config = config_1.config;

},{"./internal/AsyncSubject":4,"./internal/BehaviorSubject":5,"./internal/Notification":7,"./internal/Observable":8,"./internal/ReplaySubject":11,"./internal/Scheduler":12,"./internal/Subject":13,"./internal/Subscriber":15,"./internal/Subscription":16,"./internal/config":17,"./internal/observable/ConnectableObservable":18,"./internal/observable/bindCallback":20,"./internal/observable/bindNodeCallback":21,"./internal/observable/combineLatest":22,"./internal/observable/concat":23,"./internal/observable/defer":24,"./internal/observable/empty":25,"./internal/observable/forkJoin":26,"./internal/observable/from":27,"./internal/observable/fromEvent":29,"./internal/observable/fromEventPattern":30,"./internal/observable/generate":34,"./internal/observable/iif":35,"./internal/observable/interval":36,"./internal/observable/merge":37,"./internal/observable/never":38,"./internal/observable/of":39,"./internal/observable/onErrorResumeNext":40,"./internal/observable/pairs":41,"./internal/observable/race":42,"./internal/observable/range":43,"./internal/observable/throwError":45,"./internal/observable/timer":46,"./internal/observable/using":47,"./internal/observable/zip":48,"./internal/operators/groupBy":84,"./internal/scheduler/VirtualTimeScheduler":161,"./internal/scheduler/animationFrame":162,"./internal/scheduler/asap":163,"./internal/scheduler/async":164,"./internal/scheduler/queue":165,"./internal/symbol/observable":167,"./internal/util/ArgumentOutOfRangeError":169,"./internal/util/EmptyError":170,"./internal/util/ObjectUnsubscribedError":172,"./internal/util/TimeoutError":173,"./internal/util/UnsubscriptionError":174,"./internal/util/identity":177,"./internal/util/isObservable":186,"./internal/util/noop":189,"./internal/util/pipe":191}],4:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subject_1 = require("./Subject");

var Subscription_1 = require("./Subscription");

var AsyncSubject = function (_super) {
  __extends(AsyncSubject, _super);

  function AsyncSubject() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.value = null;
    _this.hasNext = false;
    _this.hasCompleted = false;
    return _this;
  }

  AsyncSubject.prototype._subscribe = function (subscriber) {
    if (this.hasError) {
      subscriber.error(this.thrownError);
      return Subscription_1.Subscription.EMPTY;
    } else if (this.hasCompleted && this.hasNext) {
      subscriber.next(this.value);
      subscriber.complete();
      return Subscription_1.Subscription.EMPTY;
    }

    return _super.prototype._subscribe.call(this, subscriber);
  };

  AsyncSubject.prototype.next = function (value) {
    if (!this.hasCompleted) {
      this.value = value;
      this.hasNext = true;
    }
  };

  AsyncSubject.prototype.error = function (error) {
    if (!this.hasCompleted) {
      _super.prototype.error.call(this, error);
    }
  };

  AsyncSubject.prototype.complete = function () {
    this.hasCompleted = true;

    if (this.hasNext) {
      _super.prototype.next.call(this, this.value);
    }

    _super.prototype.complete.call(this);
  };

  return AsyncSubject;
}(Subject_1.Subject);

exports.AsyncSubject = AsyncSubject;

},{"./Subject":13,"./Subscription":16}],5:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subject_1 = require("./Subject");

var ObjectUnsubscribedError_1 = require("./util/ObjectUnsubscribedError");

var BehaviorSubject = function (_super) {
  __extends(BehaviorSubject, _super);

  function BehaviorSubject(_value) {
    var _this = _super.call(this) || this;

    _this._value = _value;
    return _this;
  }

  Object.defineProperty(BehaviorSubject.prototype, "value", {
    get: function get() {
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
    } else if (this.closed) {
      throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
    } else {
      return this._value;
    }
  };

  BehaviorSubject.prototype.next = function (value) {
    _super.prototype.next.call(this, this._value = value);
  };

  return BehaviorSubject;
}(Subject_1.Subject);

exports.BehaviorSubject = BehaviorSubject;

},{"./Subject":13,"./util/ObjectUnsubscribedError":172}],6:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = require("./Subscriber");

var InnerSubscriber = function (_super) {
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
}(Subscriber_1.Subscriber);

exports.InnerSubscriber = InnerSubscriber;

},{"./Subscriber":15}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var empty_1 = require("./observable/empty");

var of_1 = require("./observable/of");

var throwError_1 = require("./observable/throwError");

var NotificationKind;

(function (NotificationKind) {
  NotificationKind["NEXT"] = "N";
  NotificationKind["ERROR"] = "E";
  NotificationKind["COMPLETE"] = "C";
})(NotificationKind = exports.NotificationKind || (exports.NotificationKind = {}));

var Notification = function () {
  function Notification(kind, value, error) {
    this.kind = kind;
    this.value = value;
    this.error = error;
    this.hasValue = kind === "N";
  }

  Notification.prototype.observe = function (observer) {
    switch (this.kind) {
      case "N":
        return observer.next && observer.next(this.value);

      case "E":
        return observer.error && observer.error(this.error);

      case "C":
        return observer.complete && observer.complete();
    }
  };

  Notification.prototype.do = function (next, error, complete) {
    var kind = this.kind;

    switch (kind) {
      case "N":
        return next && next(this.value);

      case "E":
        return error && error(this.error);

      case "C":
        return complete && complete();
    }
  };

  Notification.prototype.accept = function (nextOrObserver, error, complete) {
    if (nextOrObserver && typeof nextOrObserver.next === 'function') {
      return this.observe(nextOrObserver);
    } else {
      return this.do(nextOrObserver, error, complete);
    }
  };

  Notification.prototype.toObservable = function () {
    var kind = this.kind;

    switch (kind) {
      case "N":
        return of_1.of(this.value);

      case "E":
        return throwError_1.throwError(this.error);

      case "C":
        return empty_1.empty();
    }

    throw new Error('unexpected notification kind value');
  };

  Notification.createNext = function (value) {
    if (typeof value !== 'undefined') {
      return new Notification("N", value);
    }

    return Notification.undefinedValueNotification;
  };

  Notification.createError = function (err) {
    return new Notification("E", undefined, err);
  };

  Notification.createComplete = function () {
    return Notification.completeNotification;
  };

  Notification.completeNotification = new Notification("C");
  Notification.undefinedValueNotification = new Notification("N", undefined);
  return Notification;
}();

exports.Notification = Notification;

},{"./observable/empty":25,"./observable/of":39,"./observable/throwError":45}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var canReportError_1 = require("./util/canReportError");

var toSubscriber_1 = require("./util/toSubscriber");

var observable_1 = require("../internal/symbol/observable");

var pipe_1 = require("./util/pipe");

var config_1 = require("./config");

var Observable = function () {
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
    var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);

    if (operator) {
      sink.add(operator.call(sink, this.source));
    } else {
      sink.add(this.source || config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
    }

    if (config_1.config.useDeprecatedSynchronousErrorHandling) {
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
    } catch (err) {
      if (config_1.config.useDeprecatedSynchronousErrorHandling) {
        sink.syncErrorThrown = true;
        sink.syncErrorValue = err;
      }

      if (canReportError_1.canReportError(sink)) {
        sink.error(err);
      } else {
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
        } catch (err) {
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

  Observable.prototype[observable_1.observable] = function () {
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

    return pipe_1.pipeFromArray(operations)(this);
  };

  Observable.prototype.toPromise = function (promiseCtor) {
    var _this = this;

    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function (resolve, reject) {
      var value;

      _this.subscribe(function (x) {
        return value = x;
      }, function (err) {
        return reject(err);
      }, function () {
        return resolve(value);
      });
    });
  };

  Observable.create = function (subscribe) {
    return new Observable(subscribe);
  };

  return Observable;
}();

exports.Observable = Observable;

function getPromiseCtor(promiseCtor) {
  if (!promiseCtor) {
    promiseCtor = config_1.config.Promise || Promise;
  }

  if (!promiseCtor) {
    throw new Error('no Promise impl found');
  }

  return promiseCtor;
}

},{"../internal/symbol/observable":167,"./config":17,"./util/canReportError":175,"./util/pipe":191,"./util/toSubscriber":198}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var config_1 = require("./config");

var hostReportError_1 = require("./util/hostReportError");

exports.empty = {
  closed: true,
  next: function next(value) {},
  error: function error(err) {
    if (config_1.config.useDeprecatedSynchronousErrorHandling) {
      throw err;
    } else {
      hostReportError_1.hostReportError(err);
    }
  },
  complete: function complete() {}
};

},{"./config":17,"./util/hostReportError":176}],10:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = require("./Subscriber");

var OuterSubscriber = function (_super) {
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
}(Subscriber_1.Subscriber);

exports.OuterSubscriber = OuterSubscriber;

},{"./Subscriber":15}],11:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subject_1 = require("./Subject");

var queue_1 = require("./scheduler/queue");

var Subscription_1 = require("./Subscription");

var observeOn_1 = require("./operators/observeOn");

var ObjectUnsubscribedError_1 = require("./util/ObjectUnsubscribedError");

var SubjectSubscription_1 = require("./SubjectSubscription");

var ReplaySubject = function (_super) {
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
    } else {
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
      throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
    } else if (this.isStopped || this.hasError) {
      subscription = Subscription_1.Subscription.EMPTY;
    } else {
      this.observers.push(subscriber);
      subscription = new SubjectSubscription_1.SubjectSubscription(this, subscriber);
    }

    if (scheduler) {
      subscriber.add(subscriber = new observeOn_1.ObserveOnSubscriber(subscriber, scheduler));
    }

    if (_infiniteTimeWindow) {
      for (var i = 0; i < len && !subscriber.closed; i++) {
        subscriber.next(_events[i]);
      }
    } else {
      for (var i = 0; i < len && !subscriber.closed; i++) {
        subscriber.next(_events[i].value);
      }
    }

    if (this.hasError) {
      subscriber.error(this.thrownError);
    } else if (this.isStopped) {
      subscriber.complete();
    }

    return subscription;
  };

  ReplaySubject.prototype._getNow = function () {
    return (this.scheduler || queue_1.queue).now();
  };

  ReplaySubject.prototype._trimBufferThenGetEvents = function () {
    var now = this._getNow();

    var _bufferSize = this._bufferSize;
    var _windowTime = this._windowTime;
    var _events = this._events;
    var eventsCount = _events.length;
    var spliceCount = 0;

    while (spliceCount < eventsCount) {
      if (now - _events[spliceCount].time < _windowTime) {
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
}(Subject_1.Subject);

exports.ReplaySubject = ReplaySubject;

var ReplayEvent = function () {
  function ReplayEvent(time, value) {
    this.time = time;
    this.value = value;
  }

  return ReplayEvent;
}();

},{"./Subject":13,"./SubjectSubscription":14,"./Subscription":16,"./operators/observeOn":99,"./scheduler/queue":165,"./util/ObjectUnsubscribedError":172}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Scheduler = function () {
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

  Scheduler.now = function () {
    return Date.now();
  };

  return Scheduler;
}();

exports.Scheduler = Scheduler;

},{}],13:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Observable_1 = require("./Observable");

var Subscriber_1 = require("./Subscriber");

var Subscription_1 = require("./Subscription");

var ObjectUnsubscribedError_1 = require("./util/ObjectUnsubscribedError");

var SubjectSubscription_1 = require("./SubjectSubscription");

var rxSubscriber_1 = require("../internal/symbol/rxSubscriber");

var SubjectSubscriber = function (_super) {
  __extends(SubjectSubscriber, _super);

  function SubjectSubscriber(destination) {
    var _this = _super.call(this, destination) || this;

    _this.destination = destination;
    return _this;
  }

  return SubjectSubscriber;
}(Subscriber_1.Subscriber);

exports.SubjectSubscriber = SubjectSubscriber;

var Subject = function (_super) {
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

  Subject.prototype[rxSubscriber_1.rxSubscriber] = function () {
    return new SubjectSubscriber(this);
  };

  Subject.prototype.lift = function (operator) {
    var subject = new AnonymousSubject(this, this);
    subject.operator = operator;
    return subject;
  };

  Subject.prototype.next = function (value) {
    if (this.closed) {
      throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
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
      throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
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
      throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
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
      throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
    } else {
      return _super.prototype._trySubscribe.call(this, subscriber);
    }
  };

  Subject.prototype._subscribe = function (subscriber) {
    if (this.closed) {
      throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
    } else if (this.hasError) {
      subscriber.error(this.thrownError);
      return Subscription_1.Subscription.EMPTY;
    } else if (this.isStopped) {
      subscriber.complete();
      return Subscription_1.Subscription.EMPTY;
    } else {
      this.observers.push(subscriber);
      return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
    }
  };

  Subject.prototype.asObservable = function () {
    var observable = new Observable_1.Observable();
    observable.source = this;
    return observable;
  };

  Subject.create = function (destination, source) {
    return new AnonymousSubject(destination, source);
  };

  return Subject;
}(Observable_1.Observable);

exports.Subject = Subject;

var AnonymousSubject = function (_super) {
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
    } else {
      return Subscription_1.Subscription.EMPTY;
    }
  };

  return AnonymousSubject;
}(Subject);

exports.AnonymousSubject = AnonymousSubject;

},{"../internal/symbol/rxSubscriber":168,"./Observable":8,"./SubjectSubscription":14,"./Subscriber":15,"./Subscription":16,"./util/ObjectUnsubscribedError":172}],14:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscription_1 = require("./Subscription");

var SubjectSubscription = function (_super) {
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
}(Subscription_1.Subscription);

exports.SubjectSubscription = SubjectSubscription;

},{"./Subscription":16}],15:[function(require,module,exports){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var isFunction_1 = require("./util/isFunction");

var Observer_1 = require("./Observer");

var Subscription_1 = require("./Subscription");

var rxSubscriber_1 = require("../internal/symbol/rxSubscriber");

var config_1 = require("./config");

var hostReportError_1 = require("./util/hostReportError");

var Subscriber = function (_super) {
  __extends(Subscriber, _super);

  function Subscriber(destinationOrNext, error, complete) {
    var _this = _super.call(this) || this;

    _this.syncErrorValue = null;
    _this.syncErrorThrown = false;
    _this.syncErrorThrowable = false;
    _this.isStopped = false;

    switch (arguments.length) {
      case 0:
        _this.destination = Observer_1.empty;
        break;

      case 1:
        if (!destinationOrNext) {
          _this.destination = Observer_1.empty;
          break;
        }

        if (_typeof(destinationOrNext) === 'object') {
          if (destinationOrNext instanceof Subscriber) {
            _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
            _this.destination = destinationOrNext;
            destinationOrNext.add(_this);
          } else {
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

  Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () {
    return this;
  };

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
    var _a = this,
        _parent = _a._parent,
        _parents = _a._parents;

    this._parent = null;
    this._parents = null;
    this.unsubscribe();
    this.closed = false;
    this.isStopped = false;
    this._parent = _parent;
    this._parents = _parents;
    return this;
  };

  return Subscriber;
}(Subscription_1.Subscription);

exports.Subscriber = Subscriber;

var SafeSubscriber = function (_super) {
  __extends(SafeSubscriber, _super);

  function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
    var _this = _super.call(this) || this;

    _this._parentSubscriber = _parentSubscriber;
    var next;
    var context = _this;

    if (isFunction_1.isFunction(observerOrNext)) {
      next = observerOrNext;
    } else if (observerOrNext) {
      next = observerOrNext.next;
      error = observerOrNext.error;
      complete = observerOrNext.complete;

      if (observerOrNext !== Observer_1.empty) {
        context = Object.create(observerOrNext);

        if (isFunction_1.isFunction(context.unsubscribe)) {
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

      if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
        this.__tryOrUnsub(this._next, value);
      } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
        this.unsubscribe();
      }
    }
  };

  SafeSubscriber.prototype.error = function (err) {
    if (!this.isStopped) {
      var _parentSubscriber = this._parentSubscriber;
      var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;

      if (this._error) {
        if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
          this.__tryOrUnsub(this._error, err);

          this.unsubscribe();
        } else {
          this.__tryOrSetError(_parentSubscriber, this._error, err);

          this.unsubscribe();
        }
      } else if (!_parentSubscriber.syncErrorThrowable) {
        this.unsubscribe();

        if (useDeprecatedSynchronousErrorHandling) {
          throw err;
        }

        hostReportError_1.hostReportError(err);
      } else {
        if (useDeprecatedSynchronousErrorHandling) {
          _parentSubscriber.syncErrorValue = err;
          _parentSubscriber.syncErrorThrown = true;
        } else {
          hostReportError_1.hostReportError(err);
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
        var wrappedComplete = function wrappedComplete() {
          return _this._complete.call(_this._context);
        };

        if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
          this.__tryOrUnsub(wrappedComplete);

          this.unsubscribe();
        } else {
          this.__tryOrSetError(_parentSubscriber, wrappedComplete);

          this.unsubscribe();
        }
      } else {
        this.unsubscribe();
      }
    }
  };

  SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
    try {
      fn.call(this._context, value);
    } catch (err) {
      this.unsubscribe();

      if (config_1.config.useDeprecatedSynchronousErrorHandling) {
        throw err;
      } else {
        hostReportError_1.hostReportError(err);
      }
    }
  };

  SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
    if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
      throw new Error('bad call');
    }

    try {
      fn.call(this._context, value);
    } catch (err) {
      if (config_1.config.useDeprecatedSynchronousErrorHandling) {
        parent.syncErrorValue = err;
        parent.syncErrorThrown = true;
        return true;
      } else {
        hostReportError_1.hostReportError(err);
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
}(Subscriber);

exports.SafeSubscriber = SafeSubscriber;

},{"../internal/symbol/rxSubscriber":168,"./Observer":9,"./Subscription":16,"./config":17,"./util/hostReportError":176,"./util/isFunction":181}],16:[function(require,module,exports){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var isArray_1 = require("./util/isArray");

var isObject_1 = require("./util/isObject");

var isFunction_1 = require("./util/isFunction");

var UnsubscriptionError_1 = require("./util/UnsubscriptionError");

var Subscription = function () {
  function Subscription(unsubscribe) {
    this.closed = false;
    this._parent = null;
    this._parents = null;
    this._subscriptions = null;

    if (unsubscribe) {
      this._unsubscribe = unsubscribe;
    }
  }

  Subscription.prototype.unsubscribe = function () {
    var hasErrors = false;
    var errors;

    if (this.closed) {
      return;
    }

    var _a = this,
        _parent = _a._parent,
        _parents = _a._parents,
        _unsubscribe = _a._unsubscribe,
        _subscriptions = _a._subscriptions;

    this.closed = true;
    this._parent = null;
    this._parents = null;
    this._subscriptions = null;
    var index = -1;
    var len = _parents ? _parents.length : 0;

    while (_parent) {
      _parent.remove(this);

      _parent = ++index < len && _parents[index] || null;
    }

    if (isFunction_1.isFunction(_unsubscribe)) {
      try {
        _unsubscribe.call(this);
      } catch (e) {
        hasErrors = true;
        errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
      }
    }

    if (isArray_1.isArray(_subscriptions)) {
      index = -1;
      len = _subscriptions.length;

      while (++index < len) {
        var sub = _subscriptions[index];

        if (isObject_1.isObject(sub)) {
          try {
            sub.unsubscribe();
          } catch (e) {
            hasErrors = true;
            errors = errors || [];

            if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
              errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
            } else {
              errors.push(e);
            }
          }
        }
      }
    }

    if (hasErrors) {
      throw new UnsubscriptionError_1.UnsubscriptionError(errors);
    }
  };

  Subscription.prototype.add = function (teardown) {
    var subscription = teardown;

    switch (_typeof(teardown)) {
      case 'function':
        subscription = new Subscription(teardown);

      case 'object':
        if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
          return subscription;
        } else if (this.closed) {
          subscription.unsubscribe();
          return subscription;
        } else if (!(subscription instanceof Subscription)) {
          var tmp = subscription;
          subscription = new Subscription();
          subscription._subscriptions = [tmp];
        }

        break;

      default:
        {
          if (!teardown) {
            return Subscription.EMPTY;
          }

          throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
    }

    if (subscription._addParent(this)) {
      var subscriptions = this._subscriptions;

      if (subscriptions) {
        subscriptions.push(subscription);
      } else {
        this._subscriptions = [subscription];
      }
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

  Subscription.prototype._addParent = function (parent) {
    var _a = this,
        _parent = _a._parent,
        _parents = _a._parents;

    if (_parent === parent) {
      return false;
    } else if (!_parent) {
      this._parent = parent;
      return true;
    } else if (!_parents) {
      this._parents = [parent];
      return true;
    } else if (_parents.indexOf(parent) === -1) {
      _parents.push(parent);

      return true;
    }

    return false;
  };

  Subscription.EMPTY = function (empty) {
    empty.closed = true;
    return empty;
  }(new Subscription());

  return Subscription;
}();

exports.Subscription = Subscription;

function flattenUnsubscriptionErrors(errors) {
  return errors.reduce(function (errs, err) {
    return errs.concat(err instanceof UnsubscriptionError_1.UnsubscriptionError ? err.errors : err);
  }, []);
}

},{"./util/UnsubscriptionError":174,"./util/isArray":178,"./util/isFunction":181,"./util/isObject":185}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _enable_super_gross_mode_that_will_cause_bad_things = false;
exports.config = {
  Promise: undefined,

  set useDeprecatedSynchronousErrorHandling(value) {
    if (value) {
      var error = new Error();
      console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
    } else if (_enable_super_gross_mode_that_will_cause_bad_things) {
      console.log('RxJS: Back to a better error behavior. Thank you. <3');
    }

    _enable_super_gross_mode_that_will_cause_bad_things = value;
  },

  get useDeprecatedSynchronousErrorHandling() {
    return _enable_super_gross_mode_that_will_cause_bad_things;
  }

};

},{}],18:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subject_1 = require("../Subject");

var Observable_1 = require("../Observable");

var Subscriber_1 = require("../Subscriber");

var Subscription_1 = require("../Subscription");

var refCount_1 = require("../operators/refCount");

var ConnectableObservable = function (_super) {
  __extends(ConnectableObservable, _super);

  function ConnectableObservable(source, subjectFactory) {
    var _this = _super.call(this) || this;

    _this.source = source;
    _this.subjectFactory = subjectFactory;
    _this._refCount = 0;
    _this._isComplete = false;
    return _this;
  }

  ConnectableObservable.prototype._subscribe = function (subscriber) {
    return this.getSubject().subscribe(subscriber);
  };

  ConnectableObservable.prototype.getSubject = function () {
    var subject = this._subject;

    if (!subject || subject.isStopped) {
      this._subject = this.subjectFactory();
    }

    return this._subject;
  };

  ConnectableObservable.prototype.connect = function () {
    var connection = this._connection;

    if (!connection) {
      this._isComplete = false;
      connection = this._connection = new Subscription_1.Subscription();
      connection.add(this.source.subscribe(new ConnectableSubscriber(this.getSubject(), this)));

      if (connection.closed) {
        this._connection = null;
        connection = Subscription_1.Subscription.EMPTY;
      } else {
        this._connection = connection;
      }
    }

    return connection;
  };

  ConnectableObservable.prototype.refCount = function () {
    return refCount_1.refCount()(this);
  };

  return ConnectableObservable;
}(Observable_1.Observable);

exports.ConnectableObservable = ConnectableObservable;
var connectableProto = ConnectableObservable.prototype;
exports.connectableObservableDescriptor = {
  operator: {
    value: null
  },
  _refCount: {
    value: 0,
    writable: true
  },
  _subject: {
    value: null,
    writable: true
  },
  _connection: {
    value: null,
    writable: true
  },
  _subscribe: {
    value: connectableProto._subscribe
  },
  _isComplete: {
    value: connectableProto._isComplete,
    writable: true
  },
  getSubject: {
    value: connectableProto.getSubject
  },
  connect: {
    value: connectableProto.connect
  },
  refCount: {
    value: connectableProto.refCount
  }
};

var ConnectableSubscriber = function (_super) {
  __extends(ConnectableSubscriber, _super);

  function ConnectableSubscriber(destination, connectable) {
    var _this = _super.call(this, destination) || this;

    _this.connectable = connectable;
    return _this;
  }

  ConnectableSubscriber.prototype._error = function (err) {
    this._unsubscribe();

    _super.prototype._error.call(this, err);
  };

  ConnectableSubscriber.prototype._complete = function () {
    this.connectable._isComplete = true;

    this._unsubscribe();

    _super.prototype._complete.call(this);
  };

  ConnectableSubscriber.prototype._unsubscribe = function () {
    var connectable = this.connectable;

    if (connectable) {
      this.connectable = null;
      var connection = connectable._connection;
      connectable._refCount = 0;
      connectable._subject = null;
      connectable._connection = null;

      if (connection) {
        connection.unsubscribe();
      }
    }
  };

  return ConnectableSubscriber;
}(Subject_1.SubjectSubscriber);

var RefCountOperator = function () {
  function RefCountOperator(connectable) {
    this.connectable = connectable;
  }

  RefCountOperator.prototype.call = function (subscriber, source) {
    var connectable = this.connectable;
    connectable._refCount++;
    var refCounter = new RefCountSubscriber(subscriber, connectable);
    var subscription = source.subscribe(refCounter);

    if (!refCounter.closed) {
      refCounter.connection = connectable.connect();
    }

    return subscription;
  };

  return RefCountOperator;
}();

var RefCountSubscriber = function (_super) {
  __extends(RefCountSubscriber, _super);

  function RefCountSubscriber(destination, connectable) {
    var _this = _super.call(this, destination) || this;

    _this.connectable = connectable;
    return _this;
  }

  RefCountSubscriber.prototype._unsubscribe = function () {
    var connectable = this.connectable;

    if (!connectable) {
      this.connection = null;
      return;
    }

    this.connectable = null;
    var refCount = connectable._refCount;

    if (refCount <= 0) {
      this.connection = null;
      return;
    }

    connectable._refCount = refCount - 1;

    if (refCount > 1) {
      this.connection = null;
      return;
    }

    var connection = this.connection;
    var sharedConnection = connectable._connection;
    this.connection = null;

    if (sharedConnection && (!connection || sharedConnection === connection)) {
      sharedConnection.unsubscribe();
    }
  };

  return RefCountSubscriber;
}(Subscriber_1.Subscriber);

},{"../Observable":8,"../Subject":13,"../Subscriber":15,"../Subscription":16,"../operators/refCount":110}],19:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Observable_1 = require("../Observable");

var asap_1 = require("../scheduler/asap");

var isNumeric_1 = require("../util/isNumeric");

var SubscribeOnObservable = function (_super) {
  __extends(SubscribeOnObservable, _super);

  function SubscribeOnObservable(source, delayTime, scheduler) {
    if (delayTime === void 0) {
      delayTime = 0;
    }

    if (scheduler === void 0) {
      scheduler = asap_1.asap;
    }

    var _this = _super.call(this) || this;

    _this.source = source;
    _this.delayTime = delayTime;
    _this.scheduler = scheduler;

    if (!isNumeric_1.isNumeric(delayTime) || delayTime < 0) {
      _this.delayTime = 0;
    }

    if (!scheduler || typeof scheduler.schedule !== 'function') {
      _this.scheduler = asap_1.asap;
    }

    return _this;
  }

  SubscribeOnObservable.create = function (source, delay, scheduler) {
    if (delay === void 0) {
      delay = 0;
    }

    if (scheduler === void 0) {
      scheduler = asap_1.asap;
    }

    return new SubscribeOnObservable(source, delay, scheduler);
  };

  SubscribeOnObservable.dispatch = function (arg) {
    var source = arg.source,
        subscriber = arg.subscriber;
    return this.add(source.subscribe(subscriber));
  };

  SubscribeOnObservable.prototype._subscribe = function (subscriber) {
    var delay = this.delayTime;
    var source = this.source;
    var scheduler = this.scheduler;
    return scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
      source: source,
      subscriber: subscriber
    });
  };

  return SubscribeOnObservable;
}(Observable_1.Observable);

exports.SubscribeOnObservable = SubscribeOnObservable;

},{"../Observable":8,"../scheduler/asap":163,"../util/isNumeric":184}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Observable_1 = require("../Observable");

var AsyncSubject_1 = require("../AsyncSubject");

var map_1 = require("../operators/map");

var canReportError_1 = require("../util/canReportError");

var isArray_1 = require("../util/isArray");

var isScheduler_1 = require("../util/isScheduler");

function bindCallback(callbackFunc, resultSelector, scheduler) {
  if (resultSelector) {
    if (isScheduler_1.isScheduler(resultSelector)) {
      scheduler = resultSelector;
    } else {
      return function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return bindCallback(callbackFunc, scheduler).apply(void 0, args).pipe(map_1.map(function (args) {
          return isArray_1.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
        }));
      };
    }
  }

  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var context = this;
    var subject;
    var params = {
      context: context,
      subject: subject,
      callbackFunc: callbackFunc,
      scheduler: scheduler
    };
    return new Observable_1.Observable(function (subscriber) {
      if (!scheduler) {
        if (!subject) {
          subject = new AsyncSubject_1.AsyncSubject();

          var handler = function handler() {
            var innerArgs = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              innerArgs[_i] = arguments[_i];
            }

            subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
            subject.complete();
          };

          try {
            callbackFunc.apply(context, args.concat([handler]));
          } catch (err) {
            if (canReportError_1.canReportError(subject)) {
              subject.error(err);
            } else {
              console.warn(err);
            }
          }
        }

        return subject.subscribe(subscriber);
      } else {
        var state = {
          args: args,
          subscriber: subscriber,
          params: params
        };
        return scheduler.schedule(dispatch, 0, state);
      }
    });
  };
}

exports.bindCallback = bindCallback;

function dispatch(state) {
  var _this = this;

  var self = this;
  var args = state.args,
      subscriber = state.subscriber,
      params = state.params;
  var callbackFunc = params.callbackFunc,
      context = params.context,
      scheduler = params.scheduler;
  var subject = params.subject;

  if (!subject) {
    subject = params.subject = new AsyncSubject_1.AsyncSubject();

    var handler = function handler() {
      var innerArgs = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        innerArgs[_i] = arguments[_i];
      }

      var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;

      _this.add(scheduler.schedule(dispatchNext, 0, {
        value: value,
        subject: subject
      }));
    };

    try {
      callbackFunc.apply(context, args.concat([handler]));
    } catch (err) {
      subject.error(err);
    }
  }

  this.add(subject.subscribe(subscriber));
}

function dispatchNext(state) {
  var value = state.value,
      subject = state.subject;
  subject.next(value);
  subject.complete();
}

function dispatchError(state) {
  var err = state.err,
      subject = state.subject;
  subject.error(err);
}

},{"../AsyncSubject":4,"../Observable":8,"../operators/map":88,"../util/canReportError":175,"../util/isArray":178,"../util/isScheduler":188}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Observable_1 = require("../Observable");

var AsyncSubject_1 = require("../AsyncSubject");

var map_1 = require("../operators/map");

var canReportError_1 = require("../util/canReportError");

var isScheduler_1 = require("../util/isScheduler");

var isArray_1 = require("../util/isArray");

function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
  if (resultSelector) {
    if (isScheduler_1.isScheduler(resultSelector)) {
      scheduler = resultSelector;
    } else {
      return function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return bindNodeCallback(callbackFunc, scheduler).apply(void 0, args).pipe(map_1.map(function (args) {
          return isArray_1.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
        }));
      };
    }
  }

  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var params = {
      subject: undefined,
      args: args,
      callbackFunc: callbackFunc,
      scheduler: scheduler,
      context: this
    };
    return new Observable_1.Observable(function (subscriber) {
      var context = params.context;
      var subject = params.subject;

      if (!scheduler) {
        if (!subject) {
          subject = params.subject = new AsyncSubject_1.AsyncSubject();

          var handler = function handler() {
            var innerArgs = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              innerArgs[_i] = arguments[_i];
            }

            var err = innerArgs.shift();

            if (err) {
              subject.error(err);
              return;
            }

            subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
            subject.complete();
          };

          try {
            callbackFunc.apply(context, args.concat([handler]));
          } catch (err) {
            if (canReportError_1.canReportError(subject)) {
              subject.error(err);
            } else {
              console.warn(err);
            }
          }
        }

        return subject.subscribe(subscriber);
      } else {
        return scheduler.schedule(dispatch, 0, {
          params: params,
          subscriber: subscriber,
          context: context
        });
      }
    });
  };
}

exports.bindNodeCallback = bindNodeCallback;

function dispatch(state) {
  var _this = this;

  var params = state.params,
      subscriber = state.subscriber,
      context = state.context;
  var callbackFunc = params.callbackFunc,
      args = params.args,
      scheduler = params.scheduler;
  var subject = params.subject;

  if (!subject) {
    subject = params.subject = new AsyncSubject_1.AsyncSubject();

    var handler = function handler() {
      var innerArgs = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        innerArgs[_i] = arguments[_i];
      }

      var err = innerArgs.shift();

      if (err) {
        _this.add(scheduler.schedule(dispatchError, 0, {
          err: err,
          subject: subject
        }));
      } else {
        var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;

        _this.add(scheduler.schedule(dispatchNext, 0, {
          value: value,
          subject: subject
        }));
      }
    };

    try {
      callbackFunc.apply(context, args.concat([handler]));
    } catch (err) {
      this.add(scheduler.schedule(dispatchError, 0, {
        err: err,
        subject: subject
      }));
    }
  }

  this.add(subject.subscribe(subscriber));
}

function dispatchNext(arg) {
  var value = arg.value,
      subject = arg.subject;
  subject.next(value);
  subject.complete();
}

function dispatchError(arg) {
  var err = arg.err,
      subject = arg.subject;
  subject.error(err);
}

},{"../AsyncSubject":4,"../Observable":8,"../operators/map":88,"../util/canReportError":175,"../util/isArray":178,"../util/isScheduler":188}],22:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var isScheduler_1 = require("../util/isScheduler");

var isArray_1 = require("../util/isArray");

var OuterSubscriber_1 = require("../OuterSubscriber");

var subscribeToResult_1 = require("../util/subscribeToResult");

var fromArray_1 = require("./fromArray");

var NONE = {};

function combineLatest() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  var resultSelector = null;
  var scheduler = null;

  if (isScheduler_1.isScheduler(observables[observables.length - 1])) {
    scheduler = observables.pop();
  }

  if (typeof observables[observables.length - 1] === 'function') {
    resultSelector = observables.pop();
  }

  if (observables.length === 1 && isArray_1.isArray(observables[0])) {
    observables = observables[0];
  }

  return fromArray_1.fromArray(observables, scheduler).lift(new CombineLatestOperator(resultSelector));
}

exports.combineLatest = combineLatest;

var CombineLatestOperator = function () {
  function CombineLatestOperator(resultSelector) {
    this.resultSelector = resultSelector;
  }

  CombineLatestOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new CombineLatestSubscriber(subscriber, this.resultSelector));
  };

  return CombineLatestOperator;
}();

exports.CombineLatestOperator = CombineLatestOperator;

var CombineLatestSubscriber = function (_super) {
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
    } else {
      this.active = len;
      this.toRespond = len;

      for (var i = 0; i < len; i++) {
        var observable = observables[i];
        this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
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
    var toRespond = !this.toRespond ? 0 : oldVal === NONE ? --this.toRespond : this.toRespond;
    values[outerIndex] = innerValue;

    if (toRespond === 0) {
      if (this.resultSelector) {
        this._tryResultSelector(values);
      } else {
        this.destination.next(values.slice());
      }
    }
  };

  CombineLatestSubscriber.prototype._tryResultSelector = function (values) {
    var result;

    try {
      result = this.resultSelector.apply(this, values);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    this.destination.next(result);
  };

  return CombineLatestSubscriber;
}(OuterSubscriber_1.OuterSubscriber);

exports.CombineLatestSubscriber = CombineLatestSubscriber;

},{"../OuterSubscriber":10,"../util/isArray":178,"../util/isScheduler":188,"../util/subscribeToResult":197,"./fromArray":28}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var of_1 = require("./of");

var concatAll_1 = require("../operators/concatAll");

function concat() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  return concatAll_1.concatAll()(of_1.of.apply(void 0, observables));
}

exports.concat = concat;

},{"../operators/concatAll":60,"./of":39}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Observable_1 = require("../Observable");

var from_1 = require("./from");

var empty_1 = require("./empty");

function defer(observableFactory) {
  return new Observable_1.Observable(function (subscriber) {
    var input;

    try {
      input = observableFactory();
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }

    var source = input ? from_1.from(input) : empty_1.empty();
    return source.subscribe(subscriber);
  });
}

exports.defer = defer;

},{"../Observable":8,"./empty":25,"./from":27}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Observable_1 = require("../Observable");

exports.EMPTY = new Observable_1.Observable(function (subscriber) {
  return subscriber.complete();
});

function empty(scheduler) {
  return scheduler ? emptyScheduled(scheduler) : exports.EMPTY;
}

exports.empty = empty;

function emptyScheduled(scheduler) {
  return new Observable_1.Observable(function (subscriber) {
    return scheduler.schedule(function () {
      return subscriber.complete();
    });
  });
}

exports.emptyScheduled = emptyScheduled;

},{"../Observable":8}],26:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Observable_1 = require("../Observable");

var isArray_1 = require("../util/isArray");

var empty_1 = require("./empty");

var subscribeToResult_1 = require("../util/subscribeToResult");

var OuterSubscriber_1 = require("../OuterSubscriber");

var map_1 = require("../operators/map");

function forkJoin() {
  var sources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }

  var resultSelector;

  if (typeof sources[sources.length - 1] === 'function') {
    resultSelector = sources.pop();
  }

  if (sources.length === 1 && isArray_1.isArray(sources[0])) {
    sources = sources[0];
  }

  if (sources.length === 0) {
    return empty_1.EMPTY;
  }

  if (resultSelector) {
    return forkJoin(sources).pipe(map_1.map(function (args) {
      return resultSelector.apply(void 0, args);
    }));
  }

  return new Observable_1.Observable(function (subscriber) {
    return new ForkJoinSubscriber(subscriber, sources);
  });
}

exports.forkJoin = forkJoin;

var ForkJoinSubscriber = function (_super) {
  __extends(ForkJoinSubscriber, _super);

  function ForkJoinSubscriber(destination, sources) {
    var _this = _super.call(this, destination) || this;

    _this.sources = sources;
    _this.completed = 0;
    _this.haveValues = 0;
    var len = sources.length;
    _this.values = new Array(len);

    for (var i = 0; i < len; i++) {
      var source = sources[i];
      var innerSubscription = subscribeToResult_1.subscribeToResult(_this, source, null, i);

      if (innerSubscription) {
        _this.add(innerSubscription);
      }
    }

    return _this;
  }

  ForkJoinSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.values[outerIndex] = innerValue;

    if (!innerSub._hasValue) {
      innerSub._hasValue = true;
      this.haveValues++;
    }
  };

  ForkJoinSubscriber.prototype.notifyComplete = function (innerSub) {
    var _a = this,
        destination = _a.destination,
        haveValues = _a.haveValues,
        values = _a.values;

    var len = values.length;

    if (!innerSub._hasValue) {
      destination.complete();
      return;
    }

    this.completed++;

    if (this.completed !== len) {
      return;
    }

    if (haveValues === len) {
      destination.next(values);
    }

    destination.complete();
  };

  return ForkJoinSubscriber;
}(OuterSubscriber_1.OuterSubscriber);

},{"../Observable":8,"../OuterSubscriber":10,"../operators/map":88,"../util/isArray":178,"../util/subscribeToResult":197,"./empty":25}],27:[function(require,module,exports){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Observable_1 = require("../Observable");

var isPromise_1 = require("../util/isPromise");

var isArrayLike_1 = require("../util/isArrayLike");

var isInteropObservable_1 = require("../util/isInteropObservable");

var isIterable_1 = require("../util/isIterable");

var fromArray_1 = require("./fromArray");

var fromPromise_1 = require("./fromPromise");

var fromIterable_1 = require("./fromIterable");

var fromObservable_1 = require("./fromObservable");

var subscribeTo_1 = require("../util/subscribeTo");

function from(input, scheduler) {
  if (!scheduler) {
    if (input instanceof Observable_1.Observable) {
      return input;
    }

    return new Observable_1.Observable(subscribeTo_1.subscribeTo(input));
  }

  if (input != null) {
    if (isInteropObservable_1.isInteropObservable(input)) {
      return fromObservable_1.fromObservable(input, scheduler);
    } else if (isPromise_1.isPromise(input)) {
      return fromPromise_1.fromPromise(input, scheduler);
    } else if (isArrayLike_1.isArrayLike(input)) {
      return fromArray_1.fromArray(input, scheduler);
    } else if (isIterable_1.isIterable(input) || typeof input === 'string') {
      return fromIterable_1.fromIterable(input, scheduler);
    }
  }

  throw new TypeError((input !== null && _typeof(input) || input) + ' is not observable');
}

exports.from = from;

},{"../Observable":8,"../util/isArrayLike":179,"../util/isInteropObservable":182,"../util/isIterable":183,"../util/isPromise":187,"../util/subscribeTo":192,"./fromArray":28,"./fromIterable":31,"./fromObservable":32,"./fromPromise":33}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Observable_1 = require("../Observable");

var Subscription_1 = require("../Subscription");

var subscribeToArray_1 = require("../util/subscribeToArray");

function fromArray(input, scheduler) {
  if (!scheduler) {
    return new Observable_1.Observable(subscribeToArray_1.subscribeToArray(input));
  } else {
    return new Observable_1.Observable(function (subscriber) {
      var sub = new Subscription_1.Subscription();
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
}

exports.fromArray = fromArray;

},{"../Observable":8,"../Subscription":16,"../util/subscribeToArray":193}],29:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Observable_1 = require("../Observable");

var isArray_1 = require("../util/isArray");

var isFunction_1 = require("../util/isFunction");

var map_1 = require("../operators/map");

var toString = Object.prototype.toString;

function fromEvent(target, eventName, options, resultSelector) {
  if (isFunction_1.isFunction(options)) {
    resultSelector = options;
    options = undefined;
  }

  if (resultSelector) {
    return fromEvent(target, eventName, options).pipe(map_1.map(function (args) {
      return isArray_1.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
    }));
  }

  return new Observable_1.Observable(function (subscriber) {
    function handler(e) {
      if (arguments.length > 1) {
        subscriber.next(Array.prototype.slice.call(arguments));
      } else {
        subscriber.next(e);
      }
    }

    setupSubscription(target, eventName, handler, subscriber, options);
  });
}

exports.fromEvent = fromEvent;

function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
  var unsubscribe;

  if (isEventTarget(sourceObj)) {
    var source_1 = sourceObj;
    sourceObj.addEventListener(eventName, handler, options);

    unsubscribe = function unsubscribe() {
      return source_1.removeEventListener(eventName, handler, options);
    };
  } else if (isJQueryStyleEventEmitter(sourceObj)) {
    var source_2 = sourceObj;
    sourceObj.on(eventName, handler);

    unsubscribe = function unsubscribe() {
      return source_2.off(eventName, handler);
    };
  } else if (isNodeStyleEventEmitter(sourceObj)) {
    var source_3 = sourceObj;
    sourceObj.addListener(eventName, handler);

    unsubscribe = function unsubscribe() {
      return source_3.removeListener(eventName, handler);
    };
  } else if (sourceObj && sourceObj.length) {
    for (var i = 0, len = sourceObj.length; i < len; i++) {
      setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
    }
  } else {
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

},{"../Observable":8,"../operators/map":88,"../util/isArray":178,"../util/isFunction":181}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Observable_1 = require("../Observable");

var isArray_1 = require("../util/isArray");

var isFunction_1 = require("../util/isFunction");

var map_1 = require("../operators/map");

function fromEventPattern(addHandler, removeHandler, resultSelector) {
  if (resultSelector) {
    return fromEventPattern(addHandler, removeHandler).pipe(map_1.map(function (args) {
      return isArray_1.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
    }));
  }

  return new Observable_1.Observable(function (subscriber) {
    var handler = function handler() {
      var e = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        e[_i] = arguments[_i];
      }

      return subscriber.next(e.length === 1 ? e[0] : e);
    };

    var retValue;

    try {
      retValue = addHandler(handler);
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }

    if (!isFunction_1.isFunction(removeHandler)) {
      return undefined;
    }

    return function () {
      return removeHandler(handler, retValue);
    };
  });
}

exports.fromEventPattern = fromEventPattern;

},{"../Observable":8,"../operators/map":88,"../util/isArray":178,"../util/isFunction":181}],31:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Observable_1 = require("../Observable");

var Subscription_1 = require("../Subscription");

var iterator_1 = require("../symbol/iterator");

var subscribeToIterable_1 = require("../util/subscribeToIterable");

function fromIterable(input, scheduler) {
  if (!input) {
    throw new Error('Iterable cannot be null');
  }

  if (!scheduler) {
    return new Observable_1.Observable(subscribeToIterable_1.subscribeToIterable(input));
  } else {
    return new Observable_1.Observable(function (subscriber) {
      var sub = new Subscription_1.Subscription();
      var iterator;
      sub.add(function () {
        if (iterator && typeof iterator.return === 'function') {
          iterator.return();
        }
      });
      sub.add(scheduler.schedule(function () {
        iterator = input[iterator_1.iterator]();
        sub.add(scheduler.schedule(function () {
          if (subscriber.closed) {
            return;
          }

          var value;
          var done;

          try {
            var result = iterator.next();
            value = result.value;
            done = result.done;
          } catch (err) {
            subscriber.error(err);
            return;
          }

          if (done) {
            subscriber.complete();
          } else {
            subscriber.next(value);
            this.schedule();
          }
        }));
      }));
      return sub;
    });
  }
}

exports.fromIterable = fromIterable;

},{"../Observable":8,"../Subscription":16,"../symbol/iterator":166,"../util/subscribeToIterable":194}],32:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Observable_1 = require("../Observable");

var Subscription_1 = require("../Subscription");

var observable_1 = require("../symbol/observable");

var subscribeToObservable_1 = require("../util/subscribeToObservable");

function fromObservable(input, scheduler) {
  if (!scheduler) {
    return new Observable_1.Observable(subscribeToObservable_1.subscribeToObservable(input));
  } else {
    return new Observable_1.Observable(function (subscriber) {
      var sub = new Subscription_1.Subscription();
      sub.add(scheduler.schedule(function () {
        var observable = input[observable_1.observable]();
        sub.add(observable.subscribe({
          next: function next(value) {
            sub.add(scheduler.schedule(function () {
              return subscriber.next(value);
            }));
          },
          error: function error(err) {
            sub.add(scheduler.schedule(function () {
              return subscriber.error(err);
            }));
          },
          complete: function complete() {
            sub.add(scheduler.schedule(function () {
              return subscriber.complete();
            }));
          }
        }));
      }));
      return sub;
    });
  }
}

exports.fromObservable = fromObservable;

},{"../Observable":8,"../Subscription":16,"../symbol/observable":167,"../util/subscribeToObservable":195}],33:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Observable_1 = require("../Observable");

var Subscription_1 = require("../Subscription");

var subscribeToPromise_1 = require("../util/subscribeToPromise");

function fromPromise(input, scheduler) {
  if (!scheduler) {
    return new Observable_1.Observable(subscribeToPromise_1.subscribeToPromise(input));
  } else {
    return new Observable_1.Observable(function (subscriber) {
      var sub = new Subscription_1.Subscription();
      sub.add(scheduler.schedule(function () {
        return input.then(function (value) {
          sub.add(scheduler.schedule(function () {
            subscriber.next(value);
            sub.add(scheduler.schedule(function () {
              return subscriber.complete();
            }));
          }));
        }, function (err) {
          sub.add(scheduler.schedule(function () {
            return subscriber.error(err);
          }));
        });
      }));
      return sub;
    });
  }
}

exports.fromPromise = fromPromise;

},{"../Observable":8,"../Subscription":16,"../util/subscribeToPromise":196}],34:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Observable_1 = require("../Observable");

var identity_1 = require("../util/identity");

var isScheduler_1 = require("../util/isScheduler");

function generate(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
  var resultSelector;
  var initialState;

  if (arguments.length == 1) {
    var options = initialStateOrOptions;
    initialState = options.initialState;
    condition = options.condition;
    iterate = options.iterate;
    resultSelector = options.resultSelector || identity_1.identity;
    scheduler = options.scheduler;
  } else if (resultSelectorOrObservable === undefined || isScheduler_1.isScheduler(resultSelectorOrObservable)) {
    initialState = initialStateOrOptions;
    resultSelector = identity_1.identity;
    scheduler = resultSelectorOrObservable;
  } else {
    initialState = initialStateOrOptions;
    resultSelector = resultSelectorOrObservable;
  }

  return new Observable_1.Observable(function (subscriber) {
    var state = initialState;

    if (scheduler) {
      return scheduler.schedule(dispatch, 0, {
        subscriber: subscriber,
        iterate: iterate,
        condition: condition,
        resultSelector: resultSelector,
        state: state
      });
    }

    do {
      if (condition) {
        var conditionResult = void 0;

        try {
          conditionResult = condition(state);
        } catch (err) {
          subscriber.error(err);
          return undefined;
        }

        if (!conditionResult) {
          subscriber.complete();
          break;
        }
      }

      var value = void 0;

      try {
        value = resultSelector(state);
      } catch (err) {
        subscriber.error(err);
        return undefined;
      }

      subscriber.next(value);

      if (subscriber.closed) {
        break;
      }

      try {
        state = iterate(state);
      } catch (err) {
        subscriber.error(err);
        return undefined;
      }
    } while (true);

    return undefined;
  });
}

exports.generate = generate;

function dispatch(state) {
  var subscriber = state.subscriber,
      condition = state.condition;

  if (subscriber.closed) {
    return undefined;
  }

  if (state.needIterate) {
    try {
      state.state = state.iterate(state.state);
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }
  } else {
    state.needIterate = true;
  }

  if (condition) {
    var conditionResult = void 0;

    try {
      conditionResult = condition(state.state);
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }

    if (!conditionResult) {
      subscriber.complete();
      return undefined;
    }

    if (subscriber.closed) {
      return undefined;
    }
  }

  var value;

  try {
    value = state.resultSelector(state.state);
  } catch (err) {
    subscriber.error(err);
    return undefined;
  }

  if (subscriber.closed) {
    return undefined;
  }

  subscriber.next(value);

  if (subscriber.closed) {
    return undefined;
  }

  return this.schedule(state);
}

},{"../Observable":8,"../util/identity":177,"../util/isScheduler":188}],35:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var defer_1 = require("./defer");

var empty_1 = require("./empty");

function iif(condition, trueResult, falseResult) {
  if (trueResult === void 0) {
    trueResult = empty_1.EMPTY;
  }

  if (falseResult === void 0) {
    falseResult = empty_1.EMPTY;
  }

  return defer_1.defer(function () {
    return condition() ? trueResult : falseResult;
  });
}

exports.iif = iif;

},{"./defer":24,"./empty":25}],36:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Observable_1 = require("../Observable");

var async_1 = require("../scheduler/async");

var isNumeric_1 = require("../util/isNumeric");

function interval(period, scheduler) {
  if (period === void 0) {
    period = 0;
  }

  if (scheduler === void 0) {
    scheduler = async_1.async;
  }

  if (!isNumeric_1.isNumeric(period) || period < 0) {
    period = 0;
  }

  if (!scheduler || typeof scheduler.schedule !== 'function') {
    scheduler = async_1.async;
  }

  return new Observable_1.Observable(function (subscriber) {
    subscriber.add(scheduler.schedule(dispatch, period, {
      subscriber: subscriber,
      counter: 0,
      period: period
    }));
    return subscriber;
  });
}

exports.interval = interval;

function dispatch(state) {
  var subscriber = state.subscriber,
      counter = state.counter,
      period = state.period;
  subscriber.next(counter);
  this.schedule({
    subscriber: subscriber,
    counter: counter + 1,
    period: period
  }, period);
}

},{"../Observable":8,"../scheduler/async":164,"../util/isNumeric":184}],37:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Observable_1 = require("../Observable");

var isScheduler_1 = require("../util/isScheduler");

var mergeAll_1 = require("../operators/mergeAll");

var fromArray_1 = require("./fromArray");

function merge() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  var concurrent = Number.POSITIVE_INFINITY;
  var scheduler = null;
  var last = observables[observables.length - 1];

  if (isScheduler_1.isScheduler(last)) {
    scheduler = observables.pop();

    if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
      concurrent = observables.pop();
    }
  } else if (typeof last === 'number') {
    concurrent = observables.pop();
  }

  if (scheduler === null && observables.length === 1 && observables[0] instanceof Observable_1.Observable) {
    return observables[0];
  }

  return mergeAll_1.mergeAll(concurrent)(fromArray_1.fromArray(observables, scheduler));
}

exports.merge = merge;

},{"../Observable":8,"../operators/mergeAll":93,"../util/isScheduler":188,"./fromArray":28}],38:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Observable_1 = require("../Observable");

var noop_1 = require("../util/noop");

exports.NEVER = new Observable_1.Observable(noop_1.noop);

function never() {
  return exports.NEVER;
}

exports.never = never;

},{"../Observable":8,"../util/noop":189}],39:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var isScheduler_1 = require("../util/isScheduler");

var fromArray_1 = require("./fromArray");

var empty_1 = require("./empty");

var scalar_1 = require("./scalar");

function of() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var scheduler = args[args.length - 1];

  if (isScheduler_1.isScheduler(scheduler)) {
    args.pop();
  } else {
    scheduler = undefined;
  }

  switch (args.length) {
    case 0:
      return empty_1.empty(scheduler);

    case 1:
      return scheduler ? fromArray_1.fromArray(args, scheduler) : scalar_1.scalar(args[0]);

    default:
      return fromArray_1.fromArray(args, scheduler);
  }
}

exports.of = of;

},{"../util/isScheduler":188,"./empty":25,"./fromArray":28,"./scalar":44}],40:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Observable_1 = require("../Observable");

var from_1 = require("./from");

var isArray_1 = require("../util/isArray");

var empty_1 = require("./empty");

function onErrorResumeNext() {
  var sources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }

  if (sources.length === 0) {
    return empty_1.EMPTY;
  }

  var first = sources[0],
      remainder = sources.slice(1);

  if (sources.length === 1 && isArray_1.isArray(first)) {
    return onErrorResumeNext.apply(void 0, first);
  }

  return new Observable_1.Observable(function (subscriber) {
    var subNext = function subNext() {
      return subscriber.add(onErrorResumeNext.apply(void 0, remainder).subscribe(subscriber));
    };

    return from_1.from(first).subscribe({
      next: function next(value) {
        subscriber.next(value);
      },
      error: subNext,
      complete: subNext
    });
  });
}

exports.onErrorResumeNext = onErrorResumeNext;

},{"../Observable":8,"../util/isArray":178,"./empty":25,"./from":27}],41:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Observable_1 = require("../Observable");

var Subscription_1 = require("../Subscription");

function pairs(obj, scheduler) {
  if (!scheduler) {
    return new Observable_1.Observable(function (subscriber) {
      var keys = Object.keys(obj);

      for (var i = 0; i < keys.length && !subscriber.closed; i++) {
        var key = keys[i];

        if (obj.hasOwnProperty(key)) {
          subscriber.next([key, obj[key]]);
        }
      }

      subscriber.complete();
    });
  } else {
    return new Observable_1.Observable(function (subscriber) {
      var keys = Object.keys(obj);
      var subscription = new Subscription_1.Subscription();
      subscription.add(scheduler.schedule(dispatch, 0, {
        keys: keys,
        index: 0,
        subscriber: subscriber,
        subscription: subscription,
        obj: obj
      }));
      return subscription;
    });
  }
}

exports.pairs = pairs;

function dispatch(state) {
  var keys = state.keys,
      index = state.index,
      subscriber = state.subscriber,
      subscription = state.subscription,
      obj = state.obj;

  if (!subscriber.closed) {
    if (index < keys.length) {
      var key = keys[index];
      subscriber.next([key, obj[key]]);
      subscription.add(this.schedule({
        keys: keys,
        index: index + 1,
        subscriber: subscriber,
        subscription: subscription,
        obj: obj
      }));
    } else {
      subscriber.complete();
    }
  }
}

exports.dispatch = dispatch;

},{"../Observable":8,"../Subscription":16}],42:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var isArray_1 = require("../util/isArray");

var fromArray_1 = require("./fromArray");

var OuterSubscriber_1 = require("../OuterSubscriber");

var subscribeToResult_1 = require("../util/subscribeToResult");

function race() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  if (observables.length === 1) {
    if (isArray_1.isArray(observables[0])) {
      observables = observables[0];
    } else {
      return observables[0];
    }
  }

  return fromArray_1.fromArray(observables, undefined).lift(new RaceOperator());
}

exports.race = race;

var RaceOperator = function () {
  function RaceOperator() {}

  RaceOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new RaceSubscriber(subscriber));
  };

  return RaceOperator;
}();

exports.RaceOperator = RaceOperator;

var RaceSubscriber = function (_super) {
  __extends(RaceSubscriber, _super);

  function RaceSubscriber(destination) {
    var _this = _super.call(this, destination) || this;

    _this.hasFirst = false;
    _this.observables = [];
    _this.subscriptions = [];
    return _this;
  }

  RaceSubscriber.prototype._next = function (observable) {
    this.observables.push(observable);
  };

  RaceSubscriber.prototype._complete = function () {
    var observables = this.observables;
    var len = observables.length;

    if (len === 0) {
      this.destination.complete();
    } else {
      for (var i = 0; i < len && !this.hasFirst; i++) {
        var observable = observables[i];
        var subscription = subscribeToResult_1.subscribeToResult(this, observable, observable, i);

        if (this.subscriptions) {
          this.subscriptions.push(subscription);
        }

        this.add(subscription);
      }

      this.observables = null;
    }
  };

  RaceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    if (!this.hasFirst) {
      this.hasFirst = true;

      for (var i = 0; i < this.subscriptions.length; i++) {
        if (i !== outerIndex) {
          var subscription = this.subscriptions[i];
          subscription.unsubscribe();
          this.remove(subscription);
        }
      }

      this.subscriptions = null;
    }

    this.destination.next(innerValue);
  };

  return RaceSubscriber;
}(OuterSubscriber_1.OuterSubscriber);

exports.RaceSubscriber = RaceSubscriber;

},{"../OuterSubscriber":10,"../util/isArray":178,"../util/subscribeToResult":197,"./fromArray":28}],43:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Observable_1 = require("../Observable");

function range(start, count, scheduler) {
  if (start === void 0) {
    start = 0;
  }

  return new Observable_1.Observable(function (subscriber) {
    if (count === undefined) {
      count = start;
      start = 0;
    }

    var index = 0;
    var current = start;

    if (scheduler) {
      return scheduler.schedule(dispatch, 0, {
        index: index,
        count: count,
        start: start,
        subscriber: subscriber
      });
    } else {
      do {
        if (index++ >= count) {
          subscriber.complete();
          break;
        }

        subscriber.next(current++);

        if (subscriber.closed) {
          break;
        }
      } while (true);
    }

    return undefined;
  });
}

exports.range = range;

function dispatch(state) {
  var start = state.start,
      index = state.index,
      count = state.count,
      subscriber = state.subscriber;

  if (index >= count) {
    subscriber.complete();
    return;
  }

  subscriber.next(start);

  if (subscriber.closed) {
    return;
  }

  state.index = index + 1;
  state.start = start + 1;
  this.schedule(state);
}

exports.dispatch = dispatch;

},{"../Observable":8}],44:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Observable_1 = require("../Observable");

function scalar(value) {
  var result = new Observable_1.Observable(function (subscriber) {
    subscriber.next(value);
    subscriber.complete();
  });
  result._isScalar = true;
  result.value = value;
  return result;
}

exports.scalar = scalar;

},{"../Observable":8}],45:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Observable_1 = require("../Observable");

function throwError(error, scheduler) {
  if (!scheduler) {
    return new Observable_1.Observable(function (subscriber) {
      return subscriber.error(error);
    });
  } else {
    return new Observable_1.Observable(function (subscriber) {
      return scheduler.schedule(dispatch, 0, {
        error: error,
        subscriber: subscriber
      });
    });
  }
}

exports.throwError = throwError;

function dispatch(_a) {
  var error = _a.error,
      subscriber = _a.subscriber;
  subscriber.error(error);
}

},{"../Observable":8}],46:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Observable_1 = require("../Observable");

var async_1 = require("../scheduler/async");

var isNumeric_1 = require("../util/isNumeric");

var isScheduler_1 = require("../util/isScheduler");

function timer(dueTime, periodOrScheduler, scheduler) {
  if (dueTime === void 0) {
    dueTime = 0;
  }

  var period = -1;

  if (isNumeric_1.isNumeric(periodOrScheduler)) {
    period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
  } else if (isScheduler_1.isScheduler(periodOrScheduler)) {
    scheduler = periodOrScheduler;
  }

  if (!isScheduler_1.isScheduler(scheduler)) {
    scheduler = async_1.async;
  }

  return new Observable_1.Observable(function (subscriber) {
    var due = isNumeric_1.isNumeric(dueTime) ? dueTime : +dueTime - scheduler.now();
    return scheduler.schedule(dispatch, due, {
      index: 0,
      period: period,
      subscriber: subscriber
    });
  });
}

exports.timer = timer;

function dispatch(state) {
  var index = state.index,
      period = state.period,
      subscriber = state.subscriber;
  subscriber.next(index);

  if (subscriber.closed) {
    return;
  } else if (period === -1) {
    return subscriber.complete();
  }

  state.index = index + 1;
  this.schedule(state, period);
}

},{"../Observable":8,"../scheduler/async":164,"../util/isNumeric":184,"../util/isScheduler":188}],47:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Observable_1 = require("../Observable");

var from_1 = require("./from");

var empty_1 = require("./empty");

function using(resourceFactory, observableFactory) {
  return new Observable_1.Observable(function (subscriber) {
    var resource;

    try {
      resource = resourceFactory();
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }

    var result;

    try {
      result = observableFactory(resource);
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }

    var source = result ? from_1.from(result) : empty_1.EMPTY;
    var subscription = source.subscribe(subscriber);
    return function () {
      subscription.unsubscribe();

      if (resource) {
        resource.unsubscribe();
      }
    };
  });
}

exports.using = using;

},{"../Observable":8,"./empty":25,"./from":27}],48:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var fromArray_1 = require("./fromArray");

var isArray_1 = require("../util/isArray");

var Subscriber_1 = require("../Subscriber");

var OuterSubscriber_1 = require("../OuterSubscriber");

var subscribeToResult_1 = require("../util/subscribeToResult");

var iterator_1 = require("../../internal/symbol/iterator");

function zip() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  var resultSelector = observables[observables.length - 1];

  if (typeof resultSelector === 'function') {
    observables.pop();
  }

  return fromArray_1.fromArray(observables, undefined).lift(new ZipOperator(resultSelector));
}

exports.zip = zip;

var ZipOperator = function () {
  function ZipOperator(resultSelector) {
    this.resultSelector = resultSelector;
  }

  ZipOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new ZipSubscriber(subscriber, this.resultSelector));
  };

  return ZipOperator;
}();

exports.ZipOperator = ZipOperator;

var ZipSubscriber = function (_super) {
  __extends(ZipSubscriber, _super);

  function ZipSubscriber(destination, resultSelector, values) {
    if (values === void 0) {
      values = Object.create(null);
    }

    var _this = _super.call(this, destination) || this;

    _this.iterators = [];
    _this.active = 0;
    _this.resultSelector = typeof resultSelector === 'function' ? resultSelector : null;
    _this.values = values;
    return _this;
  }

  ZipSubscriber.prototype._next = function (value) {
    var iterators = this.iterators;

    if (isArray_1.isArray(value)) {
      iterators.push(new StaticArrayIterator(value));
    } else if (typeof value[iterator_1.iterator] === 'function') {
      iterators.push(new StaticIterator(value[iterator_1.iterator]()));
    } else {
      iterators.push(new ZipBufferIterator(this.destination, this, value));
    }
  };

  ZipSubscriber.prototype._complete = function () {
    var iterators = this.iterators;
    var len = iterators.length;
    this.unsubscribe();

    if (len === 0) {
      this.destination.complete();
      return;
    }

    this.active = len;

    for (var i = 0; i < len; i++) {
      var iterator = iterators[i];

      if (iterator.stillUnsubscribed) {
        var destination = this.destination;
        destination.add(iterator.subscribe(iterator, i));
      } else {
        this.active--;
      }
    }
  };

  ZipSubscriber.prototype.notifyInactive = function () {
    this.active--;

    if (this.active === 0) {
      this.destination.complete();
    }
  };

  ZipSubscriber.prototype.checkIterators = function () {
    var iterators = this.iterators;
    var len = iterators.length;
    var destination = this.destination;

    for (var i = 0; i < len; i++) {
      var iterator = iterators[i];

      if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
        return;
      }
    }

    var shouldComplete = false;
    var args = [];

    for (var i = 0; i < len; i++) {
      var iterator = iterators[i];
      var result = iterator.next();

      if (iterator.hasCompleted()) {
        shouldComplete = true;
      }

      if (result.done) {
        destination.complete();
        return;
      }

      args.push(result.value);
    }

    if (this.resultSelector) {
      this._tryresultSelector(args);
    } else {
      destination.next(args);
    }

    if (shouldComplete) {
      destination.complete();
    }
  };

  ZipSubscriber.prototype._tryresultSelector = function (args) {
    var result;

    try {
      result = this.resultSelector.apply(this, args);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    this.destination.next(result);
  };

  return ZipSubscriber;
}(Subscriber_1.Subscriber);

exports.ZipSubscriber = ZipSubscriber;

var StaticIterator = function () {
  function StaticIterator(iterator) {
    this.iterator = iterator;
    this.nextResult = iterator.next();
  }

  StaticIterator.prototype.hasValue = function () {
    return true;
  };

  StaticIterator.prototype.next = function () {
    var result = this.nextResult;
    this.nextResult = this.iterator.next();
    return result;
  };

  StaticIterator.prototype.hasCompleted = function () {
    var nextResult = this.nextResult;
    return nextResult && nextResult.done;
  };

  return StaticIterator;
}();

var StaticArrayIterator = function () {
  function StaticArrayIterator(array) {
    this.array = array;
    this.index = 0;
    this.length = 0;
    this.length = array.length;
  }

  StaticArrayIterator.prototype[iterator_1.iterator] = function () {
    return this;
  };

  StaticArrayIterator.prototype.next = function (value) {
    var i = this.index++;
    var array = this.array;
    return i < this.length ? {
      value: array[i],
      done: false
    } : {
      value: null,
      done: true
    };
  };

  StaticArrayIterator.prototype.hasValue = function () {
    return this.array.length > this.index;
  };

  StaticArrayIterator.prototype.hasCompleted = function () {
    return this.array.length === this.index;
  };

  return StaticArrayIterator;
}();

var ZipBufferIterator = function (_super) {
  __extends(ZipBufferIterator, _super);

  function ZipBufferIterator(destination, parent, observable) {
    var _this = _super.call(this, destination) || this;

    _this.parent = parent;
    _this.observable = observable;
    _this.stillUnsubscribed = true;
    _this.buffer = [];
    _this.isComplete = false;
    return _this;
  }

  ZipBufferIterator.prototype[iterator_1.iterator] = function () {
    return this;
  };

  ZipBufferIterator.prototype.next = function () {
    var buffer = this.buffer;

    if (buffer.length === 0 && this.isComplete) {
      return {
        value: null,
        done: true
      };
    } else {
      return {
        value: buffer.shift(),
        done: false
      };
    }
  };

  ZipBufferIterator.prototype.hasValue = function () {
    return this.buffer.length > 0;
  };

  ZipBufferIterator.prototype.hasCompleted = function () {
    return this.buffer.length === 0 && this.isComplete;
  };

  ZipBufferIterator.prototype.notifyComplete = function () {
    if (this.buffer.length > 0) {
      this.isComplete = true;
      this.parent.notifyInactive();
    } else {
      this.destination.complete();
    }
  };

  ZipBufferIterator.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.buffer.push(innerValue);
    this.parent.checkIterators();
  };

  ZipBufferIterator.prototype.subscribe = function (value, index) {
    return subscribeToResult_1.subscribeToResult(this, this.observable, this, index);
  };

  return ZipBufferIterator;
}(OuterSubscriber_1.OuterSubscriber);

},{"../../internal/symbol/iterator":166,"../OuterSubscriber":10,"../Subscriber":15,"../util/isArray":178,"../util/subscribeToResult":197,"./fromArray":28}],49:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var OuterSubscriber_1 = require("../OuterSubscriber");

var subscribeToResult_1 = require("../util/subscribeToResult");

function audit(durationSelector) {
  return function auditOperatorFunction(source) {
    return source.lift(new AuditOperator(durationSelector));
  };
}

exports.audit = audit;

var AuditOperator = function () {
  function AuditOperator(durationSelector) {
    this.durationSelector = durationSelector;
  }

  AuditOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new AuditSubscriber(subscriber, this.durationSelector));
  };

  return AuditOperator;
}();

var AuditSubscriber = function (_super) {
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
      } catch (err) {
        return this.destination.error(err);
      }

      var innerSubscription = subscribeToResult_1.subscribeToResult(this, duration);

      if (!innerSubscription || innerSubscription.closed) {
        this.clearThrottle();
      } else {
        this.add(this.throttled = innerSubscription);
      }
    }
  };

  AuditSubscriber.prototype.clearThrottle = function () {
    var _a = this,
        value = _a.value,
        hasValue = _a.hasValue,
        throttled = _a.throttled;

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
}(OuterSubscriber_1.OuterSubscriber);

},{"../OuterSubscriber":10,"../util/subscribeToResult":197}],50:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var async_1 = require("../scheduler/async");

var audit_1 = require("./audit");

var timer_1 = require("../observable/timer");

function auditTime(duration, scheduler) {
  if (scheduler === void 0) {
    scheduler = async_1.async;
  }

  return audit_1.audit(function () {
    return timer_1.timer(duration, scheduler);
  });
}

exports.auditTime = auditTime;

},{"../observable/timer":46,"../scheduler/async":164,"./audit":49}],51:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var OuterSubscriber_1 = require("../OuterSubscriber");

var subscribeToResult_1 = require("../util/subscribeToResult");

function buffer(closingNotifier) {
  return function bufferOperatorFunction(source) {
    return source.lift(new BufferOperator(closingNotifier));
  };
}

exports.buffer = buffer;

var BufferOperator = function () {
  function BufferOperator(closingNotifier) {
    this.closingNotifier = closingNotifier;
  }

  BufferOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new BufferSubscriber(subscriber, this.closingNotifier));
  };

  return BufferOperator;
}();

var BufferSubscriber = function (_super) {
  __extends(BufferSubscriber, _super);

  function BufferSubscriber(destination, closingNotifier) {
    var _this = _super.call(this, destination) || this;

    _this.buffer = [];

    _this.add(subscribeToResult_1.subscribeToResult(_this, closingNotifier));

    return _this;
  }

  BufferSubscriber.prototype._next = function (value) {
    this.buffer.push(value);
  };

  BufferSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    var buffer = this.buffer;
    this.buffer = [];
    this.destination.next(buffer);
  };

  return BufferSubscriber;
}(OuterSubscriber_1.OuterSubscriber);

},{"../OuterSubscriber":10,"../util/subscribeToResult":197}],52:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = require("../Subscriber");

function bufferCount(bufferSize, startBufferEvery) {
  if (startBufferEvery === void 0) {
    startBufferEvery = null;
  }

  return function bufferCountOperatorFunction(source) {
    return source.lift(new BufferCountOperator(bufferSize, startBufferEvery));
  };
}

exports.bufferCount = bufferCount;

var BufferCountOperator = function () {
  function BufferCountOperator(bufferSize, startBufferEvery) {
    this.bufferSize = bufferSize;
    this.startBufferEvery = startBufferEvery;

    if (!startBufferEvery || bufferSize === startBufferEvery) {
      this.subscriberClass = BufferCountSubscriber;
    } else {
      this.subscriberClass = BufferSkipCountSubscriber;
    }
  }

  BufferCountOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new this.subscriberClass(subscriber, this.bufferSize, this.startBufferEvery));
  };

  return BufferCountOperator;
}();

var BufferCountSubscriber = function (_super) {
  __extends(BufferCountSubscriber, _super);

  function BufferCountSubscriber(destination, bufferSize) {
    var _this = _super.call(this, destination) || this;

    _this.bufferSize = bufferSize;
    _this.buffer = [];
    return _this;
  }

  BufferCountSubscriber.prototype._next = function (value) {
    var buffer = this.buffer;
    buffer.push(value);

    if (buffer.length == this.bufferSize) {
      this.destination.next(buffer);
      this.buffer = [];
    }
  };

  BufferCountSubscriber.prototype._complete = function () {
    var buffer = this.buffer;

    if (buffer.length > 0) {
      this.destination.next(buffer);
    }

    _super.prototype._complete.call(this);
  };

  return BufferCountSubscriber;
}(Subscriber_1.Subscriber);

var BufferSkipCountSubscriber = function (_super) {
  __extends(BufferSkipCountSubscriber, _super);

  function BufferSkipCountSubscriber(destination, bufferSize, startBufferEvery) {
    var _this = _super.call(this, destination) || this;

    _this.bufferSize = bufferSize;
    _this.startBufferEvery = startBufferEvery;
    _this.buffers = [];
    _this.count = 0;
    return _this;
  }

  BufferSkipCountSubscriber.prototype._next = function (value) {
    var _a = this,
        bufferSize = _a.bufferSize,
        startBufferEvery = _a.startBufferEvery,
        buffers = _a.buffers,
        count = _a.count;

    this.count++;

    if (count % startBufferEvery === 0) {
      buffers.push([]);
    }

    for (var i = buffers.length; i--;) {
      var buffer = buffers[i];
      buffer.push(value);

      if (buffer.length === bufferSize) {
        buffers.splice(i, 1);
        this.destination.next(buffer);
      }
    }
  };

  BufferSkipCountSubscriber.prototype._complete = function () {
    var _a = this,
        buffers = _a.buffers,
        destination = _a.destination;

    while (buffers.length > 0) {
      var buffer = buffers.shift();

      if (buffer.length > 0) {
        destination.next(buffer);
      }
    }

    _super.prototype._complete.call(this);
  };

  return BufferSkipCountSubscriber;
}(Subscriber_1.Subscriber);

},{"../Subscriber":15}],53:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var async_1 = require("../scheduler/async");

var Subscriber_1 = require("../Subscriber");

var isScheduler_1 = require("../util/isScheduler");

function bufferTime(bufferTimeSpan) {
  var length = arguments.length;
  var scheduler = async_1.async;

  if (isScheduler_1.isScheduler(arguments[arguments.length - 1])) {
    scheduler = arguments[arguments.length - 1];
    length--;
  }

  var bufferCreationInterval = null;

  if (length >= 2) {
    bufferCreationInterval = arguments[1];
  }

  var maxBufferSize = Number.POSITIVE_INFINITY;

  if (length >= 3) {
    maxBufferSize = arguments[2];
  }

  return function bufferTimeOperatorFunction(source) {
    return source.lift(new BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler));
  };
}

exports.bufferTime = bufferTime;

var BufferTimeOperator = function () {
  function BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
    this.bufferTimeSpan = bufferTimeSpan;
    this.bufferCreationInterval = bufferCreationInterval;
    this.maxBufferSize = maxBufferSize;
    this.scheduler = scheduler;
  }

  BufferTimeOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new BufferTimeSubscriber(subscriber, this.bufferTimeSpan, this.bufferCreationInterval, this.maxBufferSize, this.scheduler));
  };

  return BufferTimeOperator;
}();

var Context = function () {
  function Context() {
    this.buffer = [];
  }

  return Context;
}();

var BufferTimeSubscriber = function (_super) {
  __extends(BufferTimeSubscriber, _super);

  function BufferTimeSubscriber(destination, bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
    var _this = _super.call(this, destination) || this;

    _this.bufferTimeSpan = bufferTimeSpan;
    _this.bufferCreationInterval = bufferCreationInterval;
    _this.maxBufferSize = maxBufferSize;
    _this.scheduler = scheduler;
    _this.contexts = [];

    var context = _this.openContext();

    _this.timespanOnly = bufferCreationInterval == null || bufferCreationInterval < 0;

    if (_this.timespanOnly) {
      var timeSpanOnlyState = {
        subscriber: _this,
        context: context,
        bufferTimeSpan: bufferTimeSpan
      };

      _this.add(context.closeAction = scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
    } else {
      var closeState = {
        subscriber: _this,
        context: context
      };
      var creationState = {
        bufferTimeSpan: bufferTimeSpan,
        bufferCreationInterval: bufferCreationInterval,
        subscriber: _this,
        scheduler: scheduler
      };

      _this.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, closeState));

      _this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, creationState));
    }

    return _this;
  }

  BufferTimeSubscriber.prototype._next = function (value) {
    var contexts = this.contexts;
    var len = contexts.length;
    var filledBufferContext;

    for (var i = 0; i < len; i++) {
      var context_1 = contexts[i];
      var buffer = context_1.buffer;
      buffer.push(value);

      if (buffer.length == this.maxBufferSize) {
        filledBufferContext = context_1;
      }
    }

    if (filledBufferContext) {
      this.onBufferFull(filledBufferContext);
    }
  };

  BufferTimeSubscriber.prototype._error = function (err) {
    this.contexts.length = 0;

    _super.prototype._error.call(this, err);
  };

  BufferTimeSubscriber.prototype._complete = function () {
    var _a = this,
        contexts = _a.contexts,
        destination = _a.destination;

    while (contexts.length > 0) {
      var context_2 = contexts.shift();
      destination.next(context_2.buffer);
    }

    _super.prototype._complete.call(this);
  };

  BufferTimeSubscriber.prototype._unsubscribe = function () {
    this.contexts = null;
  };

  BufferTimeSubscriber.prototype.onBufferFull = function (context) {
    this.closeContext(context);
    var closeAction = context.closeAction;
    closeAction.unsubscribe();
    this.remove(closeAction);

    if (!this.closed && this.timespanOnly) {
      context = this.openContext();
      var bufferTimeSpan = this.bufferTimeSpan;
      var timeSpanOnlyState = {
        subscriber: this,
        context: context,
        bufferTimeSpan: bufferTimeSpan
      };
      this.add(context.closeAction = this.scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
    }
  };

  BufferTimeSubscriber.prototype.openContext = function () {
    var context = new Context();
    this.contexts.push(context);
    return context;
  };

  BufferTimeSubscriber.prototype.closeContext = function (context) {
    this.destination.next(context.buffer);
    var contexts = this.contexts;
    var spliceIndex = contexts ? contexts.indexOf(context) : -1;

    if (spliceIndex >= 0) {
      contexts.splice(contexts.indexOf(context), 1);
    }
  };

  return BufferTimeSubscriber;
}(Subscriber_1.Subscriber);

function dispatchBufferTimeSpanOnly(state) {
  var subscriber = state.subscriber;
  var prevContext = state.context;

  if (prevContext) {
    subscriber.closeContext(prevContext);
  }

  if (!subscriber.closed) {
    state.context = subscriber.openContext();
    state.context.closeAction = this.schedule(state, state.bufferTimeSpan);
  }
}

function dispatchBufferCreation(state) {
  var bufferCreationInterval = state.bufferCreationInterval,
      bufferTimeSpan = state.bufferTimeSpan,
      subscriber = state.subscriber,
      scheduler = state.scheduler;
  var context = subscriber.openContext();
  var action = this;

  if (!subscriber.closed) {
    subscriber.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, {
      subscriber: subscriber,
      context: context
    }));
    action.schedule(state, bufferCreationInterval);
  }
}

function dispatchBufferClose(arg) {
  var subscriber = arg.subscriber,
      context = arg.context;
  subscriber.closeContext(context);
}

},{"../Subscriber":15,"../scheduler/async":164,"../util/isScheduler":188}],54:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscription_1 = require("../Subscription");

var subscribeToResult_1 = require("../util/subscribeToResult");

var OuterSubscriber_1 = require("../OuterSubscriber");

function bufferToggle(openings, closingSelector) {
  return function bufferToggleOperatorFunction(source) {
    return source.lift(new BufferToggleOperator(openings, closingSelector));
  };
}

exports.bufferToggle = bufferToggle;

var BufferToggleOperator = function () {
  function BufferToggleOperator(openings, closingSelector) {
    this.openings = openings;
    this.closingSelector = closingSelector;
  }

  BufferToggleOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new BufferToggleSubscriber(subscriber, this.openings, this.closingSelector));
  };

  return BufferToggleOperator;
}();

var BufferToggleSubscriber = function (_super) {
  __extends(BufferToggleSubscriber, _super);

  function BufferToggleSubscriber(destination, openings, closingSelector) {
    var _this = _super.call(this, destination) || this;

    _this.openings = openings;
    _this.closingSelector = closingSelector;
    _this.contexts = [];

    _this.add(subscribeToResult_1.subscribeToResult(_this, openings));

    return _this;
  }

  BufferToggleSubscriber.prototype._next = function (value) {
    var contexts = this.contexts;
    var len = contexts.length;

    for (var i = 0; i < len; i++) {
      contexts[i].buffer.push(value);
    }
  };

  BufferToggleSubscriber.prototype._error = function (err) {
    var contexts = this.contexts;

    while (contexts.length > 0) {
      var context_1 = contexts.shift();
      context_1.subscription.unsubscribe();
      context_1.buffer = null;
      context_1.subscription = null;
    }

    this.contexts = null;

    _super.prototype._error.call(this, err);
  };

  BufferToggleSubscriber.prototype._complete = function () {
    var contexts = this.contexts;

    while (contexts.length > 0) {
      var context_2 = contexts.shift();
      this.destination.next(context_2.buffer);
      context_2.subscription.unsubscribe();
      context_2.buffer = null;
      context_2.subscription = null;
    }

    this.contexts = null;

    _super.prototype._complete.call(this);
  };

  BufferToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    outerValue ? this.closeBuffer(outerValue) : this.openBuffer(innerValue);
  };

  BufferToggleSubscriber.prototype.notifyComplete = function (innerSub) {
    this.closeBuffer(innerSub.context);
  };

  BufferToggleSubscriber.prototype.openBuffer = function (value) {
    try {
      var closingSelector = this.closingSelector;
      var closingNotifier = closingSelector.call(this, value);

      if (closingNotifier) {
        this.trySubscribe(closingNotifier);
      }
    } catch (err) {
      this._error(err);
    }
  };

  BufferToggleSubscriber.prototype.closeBuffer = function (context) {
    var contexts = this.contexts;

    if (contexts && context) {
      var buffer = context.buffer,
          subscription = context.subscription;
      this.destination.next(buffer);
      contexts.splice(contexts.indexOf(context), 1);
      this.remove(subscription);
      subscription.unsubscribe();
    }
  };

  BufferToggleSubscriber.prototype.trySubscribe = function (closingNotifier) {
    var contexts = this.contexts;
    var buffer = [];
    var subscription = new Subscription_1.Subscription();
    var context = {
      buffer: buffer,
      subscription: subscription
    };
    contexts.push(context);
    var innerSubscription = subscribeToResult_1.subscribeToResult(this, closingNotifier, context);

    if (!innerSubscription || innerSubscription.closed) {
      this.closeBuffer(context);
    } else {
      innerSubscription.context = context;
      this.add(innerSubscription);
      subscription.add(innerSubscription);
    }
  };

  return BufferToggleSubscriber;
}(OuterSubscriber_1.OuterSubscriber);

},{"../OuterSubscriber":10,"../Subscription":16,"../util/subscribeToResult":197}],55:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscription_1 = require("../Subscription");

var OuterSubscriber_1 = require("../OuterSubscriber");

var subscribeToResult_1 = require("../util/subscribeToResult");

function bufferWhen(closingSelector) {
  return function (source) {
    return source.lift(new BufferWhenOperator(closingSelector));
  };
}

exports.bufferWhen = bufferWhen;

var BufferWhenOperator = function () {
  function BufferWhenOperator(closingSelector) {
    this.closingSelector = closingSelector;
  }

  BufferWhenOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new BufferWhenSubscriber(subscriber, this.closingSelector));
  };

  return BufferWhenOperator;
}();

var BufferWhenSubscriber = function (_super) {
  __extends(BufferWhenSubscriber, _super);

  function BufferWhenSubscriber(destination, closingSelector) {
    var _this = _super.call(this, destination) || this;

    _this.closingSelector = closingSelector;
    _this.subscribing = false;

    _this.openBuffer();

    return _this;
  }

  BufferWhenSubscriber.prototype._next = function (value) {
    this.buffer.push(value);
  };

  BufferWhenSubscriber.prototype._complete = function () {
    var buffer = this.buffer;

    if (buffer) {
      this.destination.next(buffer);
    }

    _super.prototype._complete.call(this);
  };

  BufferWhenSubscriber.prototype._unsubscribe = function () {
    this.buffer = null;
    this.subscribing = false;
  };

  BufferWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.openBuffer();
  };

  BufferWhenSubscriber.prototype.notifyComplete = function () {
    if (this.subscribing) {
      this.complete();
    } else {
      this.openBuffer();
    }
  };

  BufferWhenSubscriber.prototype.openBuffer = function () {
    var closingSubscription = this.closingSubscription;

    if (closingSubscription) {
      this.remove(closingSubscription);
      closingSubscription.unsubscribe();
    }

    var buffer = this.buffer;

    if (this.buffer) {
      this.destination.next(buffer);
    }

    this.buffer = [];
    var closingNotifier;

    try {
      var closingSelector = this.closingSelector;
      closingNotifier = closingSelector();
    } catch (err) {
      return this.error(err);
    }

    closingSubscription = new Subscription_1.Subscription();
    this.closingSubscription = closingSubscription;
    this.add(closingSubscription);
    this.subscribing = true;
    closingSubscription.add(subscribeToResult_1.subscribeToResult(this, closingNotifier));
    this.subscribing = false;
  };

  return BufferWhenSubscriber;
}(OuterSubscriber_1.OuterSubscriber);

},{"../OuterSubscriber":10,"../Subscription":16,"../util/subscribeToResult":197}],56:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var OuterSubscriber_1 = require("../OuterSubscriber");

var InnerSubscriber_1 = require("../InnerSubscriber");

var subscribeToResult_1 = require("../util/subscribeToResult");

function catchError(selector) {
  return function catchErrorOperatorFunction(source) {
    var operator = new CatchOperator(selector);
    var caught = source.lift(operator);
    return operator.caught = caught;
  };
}

exports.catchError = catchError;

var CatchOperator = function () {
  function CatchOperator(selector) {
    this.selector = selector;
  }

  CatchOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
  };

  return CatchOperator;
}();

var CatchSubscriber = function (_super) {
  __extends(CatchSubscriber, _super);

  function CatchSubscriber(destination, selector, caught) {
    var _this = _super.call(this, destination) || this;

    _this.selector = selector;
    _this.caught = caught;
    return _this;
  }

  CatchSubscriber.prototype.error = function (err) {
    if (!this.isStopped) {
      var result = void 0;

      try {
        result = this.selector(err, this.caught);
      } catch (err2) {
        _super.prototype.error.call(this, err2);

        return;
      }

      this._unsubscribeAndRecycle();

      var innerSubscriber = new InnerSubscriber_1.InnerSubscriber(this, undefined, undefined);
      this.add(innerSubscriber);
      subscribeToResult_1.subscribeToResult(this, result, undefined, undefined, innerSubscriber);
    }
  };

  return CatchSubscriber;
}(OuterSubscriber_1.OuterSubscriber);

},{"../InnerSubscriber":6,"../OuterSubscriber":10,"../util/subscribeToResult":197}],57:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var combineLatest_1 = require("../observable/combineLatest");

function combineAll(project) {
  return function (source) {
    return source.lift(new combineLatest_1.CombineLatestOperator(project));
  };
}

exports.combineAll = combineAll;

},{"../observable/combineLatest":22}],58:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var isArray_1 = require("../util/isArray");

var combineLatest_1 = require("../observable/combineLatest");

var from_1 = require("../observable/from");

var none = {};

function combineLatest() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  var project = null;

  if (typeof observables[observables.length - 1] === 'function') {
    project = observables.pop();
  }

  if (observables.length === 1 && isArray_1.isArray(observables[0])) {
    observables = observables[0].slice();
  }

  return function (source) {
    return source.lift.call(from_1.from([source].concat(observables)), new combineLatest_1.CombineLatestOperator(project));
  };
}

exports.combineLatest = combineLatest;

},{"../observable/combineLatest":22,"../observable/from":27,"../util/isArray":178}],59:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var concat_1 = require("../observable/concat");

function concat() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  return function (source) {
    return source.lift.call(concat_1.concat.apply(void 0, [source].concat(observables)));
  };
}

exports.concat = concat;

},{"../observable/concat":23}],60:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var mergeAll_1 = require("./mergeAll");

function concatAll() {
  return mergeAll_1.mergeAll(1);
}

exports.concatAll = concatAll;

},{"./mergeAll":93}],61:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var mergeMap_1 = require("./mergeMap");

function concatMap(project, resultSelector) {
  return mergeMap_1.mergeMap(project, resultSelector, 1);
}

exports.concatMap = concatMap;

},{"./mergeMap":94}],62:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var concatMap_1 = require("./concatMap");

function concatMapTo(innerObservable, resultSelector) {
  return concatMap_1.concatMap(function () {
    return innerObservable;
  }, resultSelector);
}

exports.concatMapTo = concatMapTo;

},{"./concatMap":61}],63:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = require("../Subscriber");

function count(predicate) {
  return function (source) {
    return source.lift(new CountOperator(predicate, source));
  };
}

exports.count = count;

var CountOperator = function () {
  function CountOperator(predicate, source) {
    this.predicate = predicate;
    this.source = source;
  }

  CountOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new CountSubscriber(subscriber, this.predicate, this.source));
  };

  return CountOperator;
}();

var CountSubscriber = function (_super) {
  __extends(CountSubscriber, _super);

  function CountSubscriber(destination, predicate, source) {
    var _this = _super.call(this, destination) || this;

    _this.predicate = predicate;
    _this.source = source;
    _this.count = 0;
    _this.index = 0;
    return _this;
  }

  CountSubscriber.prototype._next = function (value) {
    if (this.predicate) {
      this._tryPredicate(value);
    } else {
      this.count++;
    }
  };

  CountSubscriber.prototype._tryPredicate = function (value) {
    var result;

    try {
      result = this.predicate(value, this.index++, this.source);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    if (result) {
      this.count++;
    }
  };

  CountSubscriber.prototype._complete = function () {
    this.destination.next(this.count);
    this.destination.complete();
  };

  return CountSubscriber;
}(Subscriber_1.Subscriber);

},{"../Subscriber":15}],64:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var OuterSubscriber_1 = require("../OuterSubscriber");

var subscribeToResult_1 = require("../util/subscribeToResult");

function debounce(durationSelector) {
  return function (source) {
    return source.lift(new DebounceOperator(durationSelector));
  };
}

exports.debounce = debounce;

var DebounceOperator = function () {
  function DebounceOperator(durationSelector) {
    this.durationSelector = durationSelector;
  }

  DebounceOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new DebounceSubscriber(subscriber, this.durationSelector));
  };

  return DebounceOperator;
}();

var DebounceSubscriber = function (_super) {
  __extends(DebounceSubscriber, _super);

  function DebounceSubscriber(destination, durationSelector) {
    var _this = _super.call(this, destination) || this;

    _this.durationSelector = durationSelector;
    _this.hasValue = false;
    _this.durationSubscription = null;
    return _this;
  }

  DebounceSubscriber.prototype._next = function (value) {
    try {
      var result = this.durationSelector.call(this, value);

      if (result) {
        this._tryNext(value, result);
      }
    } catch (err) {
      this.destination.error(err);
    }
  };

  DebounceSubscriber.prototype._complete = function () {
    this.emitValue();
    this.destination.complete();
  };

  DebounceSubscriber.prototype._tryNext = function (value, duration) {
    var subscription = this.durationSubscription;
    this.value = value;
    this.hasValue = true;

    if (subscription) {
      subscription.unsubscribe();
      this.remove(subscription);
    }

    subscription = subscribeToResult_1.subscribeToResult(this, duration);

    if (subscription && !subscription.closed) {
      this.add(this.durationSubscription = subscription);
    }
  };

  DebounceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.emitValue();
  };

  DebounceSubscriber.prototype.notifyComplete = function () {
    this.emitValue();
  };

  DebounceSubscriber.prototype.emitValue = function () {
    if (this.hasValue) {
      var value = this.value;
      var subscription = this.durationSubscription;

      if (subscription) {
        this.durationSubscription = null;
        subscription.unsubscribe();
        this.remove(subscription);
      }

      this.value = null;
      this.hasValue = false;

      _super.prototype._next.call(this, value);
    }
  };

  return DebounceSubscriber;
}(OuterSubscriber_1.OuterSubscriber);

},{"../OuterSubscriber":10,"../util/subscribeToResult":197}],65:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = require("../Subscriber");

var async_1 = require("../scheduler/async");

function debounceTime(dueTime, scheduler) {
  if (scheduler === void 0) {
    scheduler = async_1.async;
  }

  return function (source) {
    return source.lift(new DebounceTimeOperator(dueTime, scheduler));
  };
}

exports.debounceTime = debounceTime;

var DebounceTimeOperator = function () {
  function DebounceTimeOperator(dueTime, scheduler) {
    this.dueTime = dueTime;
    this.scheduler = scheduler;
  }

  DebounceTimeOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
  };

  return DebounceTimeOperator;
}();

var DebounceTimeSubscriber = function (_super) {
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
}(Subscriber_1.Subscriber);

function dispatchNext(subscriber) {
  subscriber.debouncedNext();
}

},{"../Subscriber":15,"../scheduler/async":164}],66:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = require("../Subscriber");

function defaultIfEmpty(defaultValue) {
  if (defaultValue === void 0) {
    defaultValue = null;
  }

  return function (source) {
    return source.lift(new DefaultIfEmptyOperator(defaultValue));
  };
}

exports.defaultIfEmpty = defaultIfEmpty;

var DefaultIfEmptyOperator = function () {
  function DefaultIfEmptyOperator(defaultValue) {
    this.defaultValue = defaultValue;
  }

  DefaultIfEmptyOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new DefaultIfEmptySubscriber(subscriber, this.defaultValue));
  };

  return DefaultIfEmptyOperator;
}();

var DefaultIfEmptySubscriber = function (_super) {
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
}(Subscriber_1.Subscriber);

},{"../Subscriber":15}],67:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var async_1 = require("../scheduler/async");

var isDate_1 = require("../util/isDate");

var Subscriber_1 = require("../Subscriber");

var Notification_1 = require("../Notification");

function delay(delay, scheduler) {
  if (scheduler === void 0) {
    scheduler = async_1.async;
  }

  var absoluteDelay = isDate_1.isDate(delay);
  var delayFor = absoluteDelay ? +delay - scheduler.now() : Math.abs(delay);
  return function (source) {
    return source.lift(new DelayOperator(delayFor, scheduler));
  };
}

exports.delay = delay;

var DelayOperator = function () {
  function DelayOperator(delay, scheduler) {
    this.delay = delay;
    this.scheduler = scheduler;
  }

  DelayOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new DelaySubscriber(subscriber, this.delay, this.scheduler));
  };

  return DelayOperator;
}();

var DelaySubscriber = function (_super) {
  __extends(DelaySubscriber, _super);

  function DelaySubscriber(destination, delay, scheduler) {
    var _this = _super.call(this, destination) || this;

    _this.delay = delay;
    _this.scheduler = scheduler;
    _this.queue = [];
    _this.active = false;
    _this.errored = false;
    return _this;
  }

  DelaySubscriber.dispatch = function (state) {
    var source = state.source;
    var queue = source.queue;
    var scheduler = state.scheduler;
    var destination = state.destination;

    while (queue.length > 0 && queue[0].time - scheduler.now() <= 0) {
      queue.shift().notification.observe(destination);
    }

    if (queue.length > 0) {
      var delay_1 = Math.max(0, queue[0].time - scheduler.now());
      this.schedule(state, delay_1);
    } else {
      this.unsubscribe();
      source.active = false;
    }
  };

  DelaySubscriber.prototype._schedule = function (scheduler) {
    this.active = true;
    var destination = this.destination;
    destination.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
      source: this,
      destination: this.destination,
      scheduler: scheduler
    }));
  };

  DelaySubscriber.prototype.scheduleNotification = function (notification) {
    if (this.errored === true) {
      return;
    }

    var scheduler = this.scheduler;
    var message = new DelayMessage(scheduler.now() + this.delay, notification);
    this.queue.push(message);

    if (this.active === false) {
      this._schedule(scheduler);
    }
  };

  DelaySubscriber.prototype._next = function (value) {
    this.scheduleNotification(Notification_1.Notification.createNext(value));
  };

  DelaySubscriber.prototype._error = function (err) {
    this.errored = true;
    this.queue = [];
    this.destination.error(err);
    this.unsubscribe();
  };

  DelaySubscriber.prototype._complete = function () {
    this.scheduleNotification(Notification_1.Notification.createComplete());
    this.unsubscribe();
  };

  return DelaySubscriber;
}(Subscriber_1.Subscriber);

var DelayMessage = function () {
  function DelayMessage(time, notification) {
    this.time = time;
    this.notification = notification;
  }

  return DelayMessage;
}();

},{"../Notification":7,"../Subscriber":15,"../scheduler/async":164,"../util/isDate":180}],68:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = require("../Subscriber");

var Observable_1 = require("../Observable");

var OuterSubscriber_1 = require("../OuterSubscriber");

var subscribeToResult_1 = require("../util/subscribeToResult");

function delayWhen(delayDurationSelector, subscriptionDelay) {
  if (subscriptionDelay) {
    return function (source) {
      return new SubscriptionDelayObservable(source, subscriptionDelay).lift(new DelayWhenOperator(delayDurationSelector));
    };
  }

  return function (source) {
    return source.lift(new DelayWhenOperator(delayDurationSelector));
  };
}

exports.delayWhen = delayWhen;

var DelayWhenOperator = function () {
  function DelayWhenOperator(delayDurationSelector) {
    this.delayDurationSelector = delayDurationSelector;
  }

  DelayWhenOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new DelayWhenSubscriber(subscriber, this.delayDurationSelector));
  };

  return DelayWhenOperator;
}();

var DelayWhenSubscriber = function (_super) {
  __extends(DelayWhenSubscriber, _super);

  function DelayWhenSubscriber(destination, delayDurationSelector) {
    var _this = _super.call(this, destination) || this;

    _this.delayDurationSelector = delayDurationSelector;
    _this.completed = false;
    _this.delayNotifierSubscriptions = [];
    _this.index = 0;
    return _this;
  }

  DelayWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.destination.next(outerValue);
    this.removeSubscription(innerSub);
    this.tryComplete();
  };

  DelayWhenSubscriber.prototype.notifyError = function (error, innerSub) {
    this._error(error);
  };

  DelayWhenSubscriber.prototype.notifyComplete = function (innerSub) {
    var value = this.removeSubscription(innerSub);

    if (value) {
      this.destination.next(value);
    }

    this.tryComplete();
  };

  DelayWhenSubscriber.prototype._next = function (value) {
    var index = this.index++;

    try {
      var delayNotifier = this.delayDurationSelector(value, index);

      if (delayNotifier) {
        this.tryDelay(delayNotifier, value);
      }
    } catch (err) {
      this.destination.error(err);
    }
  };

  DelayWhenSubscriber.prototype._complete = function () {
    this.completed = true;
    this.tryComplete();
    this.unsubscribe();
  };

  DelayWhenSubscriber.prototype.removeSubscription = function (subscription) {
    subscription.unsubscribe();
    var subscriptionIdx = this.delayNotifierSubscriptions.indexOf(subscription);

    if (subscriptionIdx !== -1) {
      this.delayNotifierSubscriptions.splice(subscriptionIdx, 1);
    }

    return subscription.outerValue;
  };

  DelayWhenSubscriber.prototype.tryDelay = function (delayNotifier, value) {
    var notifierSubscription = subscribeToResult_1.subscribeToResult(this, delayNotifier, value);

    if (notifierSubscription && !notifierSubscription.closed) {
      var destination = this.destination;
      destination.add(notifierSubscription);
      this.delayNotifierSubscriptions.push(notifierSubscription);
    }
  };

  DelayWhenSubscriber.prototype.tryComplete = function () {
    if (this.completed && this.delayNotifierSubscriptions.length === 0) {
      this.destination.complete();
    }
  };

  return DelayWhenSubscriber;
}(OuterSubscriber_1.OuterSubscriber);

var SubscriptionDelayObservable = function (_super) {
  __extends(SubscriptionDelayObservable, _super);

  function SubscriptionDelayObservable(source, subscriptionDelay) {
    var _this = _super.call(this) || this;

    _this.source = source;
    _this.subscriptionDelay = subscriptionDelay;
    return _this;
  }

  SubscriptionDelayObservable.prototype._subscribe = function (subscriber) {
    this.subscriptionDelay.subscribe(new SubscriptionDelaySubscriber(subscriber, this.source));
  };

  return SubscriptionDelayObservable;
}(Observable_1.Observable);

var SubscriptionDelaySubscriber = function (_super) {
  __extends(SubscriptionDelaySubscriber, _super);

  function SubscriptionDelaySubscriber(parent, source) {
    var _this = _super.call(this) || this;

    _this.parent = parent;
    _this.source = source;
    _this.sourceSubscribed = false;
    return _this;
  }

  SubscriptionDelaySubscriber.prototype._next = function (unused) {
    this.subscribeToSource();
  };

  SubscriptionDelaySubscriber.prototype._error = function (err) {
    this.unsubscribe();
    this.parent.error(err);
  };

  SubscriptionDelaySubscriber.prototype._complete = function () {
    this.unsubscribe();
    this.subscribeToSource();
  };

  SubscriptionDelaySubscriber.prototype.subscribeToSource = function () {
    if (!this.sourceSubscribed) {
      this.sourceSubscribed = true;
      this.unsubscribe();
      this.source.subscribe(this.parent);
    }
  };

  return SubscriptionDelaySubscriber;
}(Subscriber_1.Subscriber);

},{"../Observable":8,"../OuterSubscriber":10,"../Subscriber":15,"../util/subscribeToResult":197}],69:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = require("../Subscriber");

function dematerialize() {
  return function dematerializeOperatorFunction(source) {
    return source.lift(new DeMaterializeOperator());
  };
}

exports.dematerialize = dematerialize;

var DeMaterializeOperator = function () {
  function DeMaterializeOperator() {}

  DeMaterializeOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new DeMaterializeSubscriber(subscriber));
  };

  return DeMaterializeOperator;
}();

var DeMaterializeSubscriber = function (_super) {
  __extends(DeMaterializeSubscriber, _super);

  function DeMaterializeSubscriber(destination) {
    return _super.call(this, destination) || this;
  }

  DeMaterializeSubscriber.prototype._next = function (value) {
    value.observe(this.destination);
  };

  return DeMaterializeSubscriber;
}(Subscriber_1.Subscriber);

},{"../Subscriber":15}],70:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var OuterSubscriber_1 = require("../OuterSubscriber");

var subscribeToResult_1 = require("../util/subscribeToResult");

function distinct(keySelector, flushes) {
  return function (source) {
    return source.lift(new DistinctOperator(keySelector, flushes));
  };
}

exports.distinct = distinct;

var DistinctOperator = function () {
  function DistinctOperator(keySelector, flushes) {
    this.keySelector = keySelector;
    this.flushes = flushes;
  }

  DistinctOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new DistinctSubscriber(subscriber, this.keySelector, this.flushes));
  };

  return DistinctOperator;
}();

var DistinctSubscriber = function (_super) {
  __extends(DistinctSubscriber, _super);

  function DistinctSubscriber(destination, keySelector, flushes) {
    var _this = _super.call(this, destination) || this;

    _this.keySelector = keySelector;
    _this.values = new Set();

    if (flushes) {
      _this.add(subscribeToResult_1.subscribeToResult(_this, flushes));
    }

    return _this;
  }

  DistinctSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.values.clear();
  };

  DistinctSubscriber.prototype.notifyError = function (error, innerSub) {
    this._error(error);
  };

  DistinctSubscriber.prototype._next = function (value) {
    if (this.keySelector) {
      this._useKeySelector(value);
    } else {
      this._finalizeNext(value, value);
    }
  };

  DistinctSubscriber.prototype._useKeySelector = function (value) {
    var key;
    var destination = this.destination;

    try {
      key = this.keySelector(value);
    } catch (err) {
      destination.error(err);
      return;
    }

    this._finalizeNext(key, value);
  };

  DistinctSubscriber.prototype._finalizeNext = function (key, value) {
    var values = this.values;

    if (!values.has(key)) {
      values.add(key);
      this.destination.next(value);
    }
  };

  return DistinctSubscriber;
}(OuterSubscriber_1.OuterSubscriber);

exports.DistinctSubscriber = DistinctSubscriber;

},{"../OuterSubscriber":10,"../util/subscribeToResult":197}],71:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = require("../Subscriber");

function distinctUntilChanged(compare, keySelector) {
  return function (source) {
    return source.lift(new DistinctUntilChangedOperator(compare, keySelector));
  };
}

exports.distinctUntilChanged = distinctUntilChanged;

var DistinctUntilChangedOperator = function () {
  function DistinctUntilChangedOperator(compare, keySelector) {
    this.compare = compare;
    this.keySelector = keySelector;
  }

  DistinctUntilChangedOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
  };

  return DistinctUntilChangedOperator;
}();

var DistinctUntilChangedSubscriber = function (_super) {
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
    } catch (err) {
      return this.destination.error(err);
    }

    var result = false;

    if (this.hasKey) {
      try {
        var compare = this.compare;
        result = compare(this.key, key);
      } catch (err) {
        return this.destination.error(err);
      }
    } else {
      this.hasKey = true;
    }

    if (!result) {
      this.key = key;
      this.destination.next(value);
    }
  };

  return DistinctUntilChangedSubscriber;
}(Subscriber_1.Subscriber);

},{"../Subscriber":15}],72:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var distinctUntilChanged_1 = require("./distinctUntilChanged");

function distinctUntilKeyChanged(key, compare) {
  return distinctUntilChanged_1.distinctUntilChanged(function (x, y) {
    return compare ? compare(x[key], y[key]) : x[key] === y[key];
  });
}

exports.distinctUntilKeyChanged = distinctUntilKeyChanged;

},{"./distinctUntilChanged":71}],73:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ArgumentOutOfRangeError_1 = require("../util/ArgumentOutOfRangeError");

var filter_1 = require("./filter");

var throwIfEmpty_1 = require("./throwIfEmpty");

var defaultIfEmpty_1 = require("./defaultIfEmpty");

var take_1 = require("./take");

function elementAt(index, defaultValue) {
  if (index < 0) {
    throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError();
  }

  var hasDefaultValue = arguments.length >= 2;
  return function (source) {
    return source.pipe(filter_1.filter(function (v, i) {
      return i === index;
    }), take_1.take(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function () {
      return new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError();
    }));
  };
}

exports.elementAt = elementAt;

},{"../util/ArgumentOutOfRangeError":169,"./defaultIfEmpty":66,"./filter":79,"./take":131,"./throwIfEmpty":138}],74:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var fromArray_1 = require("../observable/fromArray");

var scalar_1 = require("../observable/scalar");

var empty_1 = require("../observable/empty");

var concat_1 = require("../observable/concat");

var isScheduler_1 = require("../util/isScheduler");

function endWith() {
  var array = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    array[_i] = arguments[_i];
  }

  return function (source) {
    var scheduler = array[array.length - 1];

    if (isScheduler_1.isScheduler(scheduler)) {
      array.pop();
    } else {
      scheduler = null;
    }

    var len = array.length;

    if (len === 1 && !scheduler) {
      return concat_1.concat(source, scalar_1.scalar(array[0]));
    } else if (len > 0) {
      return concat_1.concat(source, fromArray_1.fromArray(array, scheduler));
    } else {
      return concat_1.concat(source, empty_1.empty(scheduler));
    }
  };
}

exports.endWith = endWith;

},{"../observable/concat":23,"../observable/empty":25,"../observable/fromArray":28,"../observable/scalar":44,"../util/isScheduler":188}],75:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = require("../Subscriber");

function every(predicate, thisArg) {
  return function (source) {
    return source.lift(new EveryOperator(predicate, thisArg, source));
  };
}

exports.every = every;

var EveryOperator = function () {
  function EveryOperator(predicate, thisArg, source) {
    this.predicate = predicate;
    this.thisArg = thisArg;
    this.source = source;
  }

  EveryOperator.prototype.call = function (observer, source) {
    return source.subscribe(new EverySubscriber(observer, this.predicate, this.thisArg, this.source));
  };

  return EveryOperator;
}();

var EverySubscriber = function (_super) {
  __extends(EverySubscriber, _super);

  function EverySubscriber(destination, predicate, thisArg, source) {
    var _this = _super.call(this, destination) || this;

    _this.predicate = predicate;
    _this.thisArg = thisArg;
    _this.source = source;
    _this.index = 0;
    _this.thisArg = thisArg || _this;
    return _this;
  }

  EverySubscriber.prototype.notifyComplete = function (everyValueMatch) {
    this.destination.next(everyValueMatch);
    this.destination.complete();
  };

  EverySubscriber.prototype._next = function (value) {
    var result = false;

    try {
      result = this.predicate.call(this.thisArg, value, this.index++, this.source);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    if (!result) {
      this.notifyComplete(false);
    }
  };

  EverySubscriber.prototype._complete = function () {
    this.notifyComplete(true);
  };

  return EverySubscriber;
}(Subscriber_1.Subscriber);

},{"../Subscriber":15}],76:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var OuterSubscriber_1 = require("../OuterSubscriber");

var subscribeToResult_1 = require("../util/subscribeToResult");

function exhaust() {
  return function (source) {
    return source.lift(new SwitchFirstOperator());
  };
}

exports.exhaust = exhaust;

var SwitchFirstOperator = function () {
  function SwitchFirstOperator() {}

  SwitchFirstOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new SwitchFirstSubscriber(subscriber));
  };

  return SwitchFirstOperator;
}();

var SwitchFirstSubscriber = function (_super) {
  __extends(SwitchFirstSubscriber, _super);

  function SwitchFirstSubscriber(destination) {
    var _this = _super.call(this, destination) || this;

    _this.hasCompleted = false;
    _this.hasSubscription = false;
    return _this;
  }

  SwitchFirstSubscriber.prototype._next = function (value) {
    if (!this.hasSubscription) {
      this.hasSubscription = true;
      this.add(subscribeToResult_1.subscribeToResult(this, value));
    }
  };

  SwitchFirstSubscriber.prototype._complete = function () {
    this.hasCompleted = true;

    if (!this.hasSubscription) {
      this.destination.complete();
    }
  };

  SwitchFirstSubscriber.prototype.notifyComplete = function (innerSub) {
    this.remove(innerSub);
    this.hasSubscription = false;

    if (this.hasCompleted) {
      this.destination.complete();
    }
  };

  return SwitchFirstSubscriber;
}(OuterSubscriber_1.OuterSubscriber);

},{"../OuterSubscriber":10,"../util/subscribeToResult":197}],77:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var OuterSubscriber_1 = require("../OuterSubscriber");

var InnerSubscriber_1 = require("../InnerSubscriber");

var subscribeToResult_1 = require("../util/subscribeToResult");

var map_1 = require("./map");

var from_1 = require("../observable/from");

function exhaustMap(project, resultSelector) {
  if (resultSelector) {
    return function (source) {
      return source.pipe(exhaustMap(function (a, i) {
        return from_1.from(project(a, i)).pipe(map_1.map(function (b, ii) {
          return resultSelector(a, b, i, ii);
        }));
      }));
    };
  }

  return function (source) {
    return source.lift(new ExhaustMapOperator(project));
  };
}

exports.exhaustMap = exhaustMap;

var ExhaustMapOperator = function () {
  function ExhaustMapOperator(project) {
    this.project = project;
  }

  ExhaustMapOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new ExhaustMapSubscriber(subscriber, this.project));
  };

  return ExhaustMapOperator;
}();

var ExhaustMapSubscriber = function (_super) {
  __extends(ExhaustMapSubscriber, _super);

  function ExhaustMapSubscriber(destination, project) {
    var _this = _super.call(this, destination) || this;

    _this.project = project;
    _this.hasSubscription = false;
    _this.hasCompleted = false;
    _this.index = 0;
    return _this;
  }

  ExhaustMapSubscriber.prototype._next = function (value) {
    if (!this.hasSubscription) {
      this.tryNext(value);
    }
  };

  ExhaustMapSubscriber.prototype.tryNext = function (value) {
    var result;
    var index = this.index++;

    try {
      result = this.project(value, index);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    this.hasSubscription = true;

    this._innerSub(result, value, index);
  };

  ExhaustMapSubscriber.prototype._innerSub = function (result, value, index) {
    var innerSubscriber = new InnerSubscriber_1.InnerSubscriber(this, undefined, undefined);
    var destination = this.destination;
    destination.add(innerSubscriber);
    subscribeToResult_1.subscribeToResult(this, result, value, index, innerSubscriber);
  };

  ExhaustMapSubscriber.prototype._complete = function () {
    this.hasCompleted = true;

    if (!this.hasSubscription) {
      this.destination.complete();
    }

    this.unsubscribe();
  };

  ExhaustMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.destination.next(innerValue);
  };

  ExhaustMapSubscriber.prototype.notifyError = function (err) {
    this.destination.error(err);
  };

  ExhaustMapSubscriber.prototype.notifyComplete = function (innerSub) {
    var destination = this.destination;
    destination.remove(innerSub);
    this.hasSubscription = false;

    if (this.hasCompleted) {
      this.destination.complete();
    }
  };

  return ExhaustMapSubscriber;
}(OuterSubscriber_1.OuterSubscriber);

},{"../InnerSubscriber":6,"../OuterSubscriber":10,"../observable/from":27,"../util/subscribeToResult":197,"./map":88}],78:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var OuterSubscriber_1 = require("../OuterSubscriber");

var subscribeToResult_1 = require("../util/subscribeToResult");

function expand(project, concurrent, scheduler) {
  if (concurrent === void 0) {
    concurrent = Number.POSITIVE_INFINITY;
  }

  if (scheduler === void 0) {
    scheduler = undefined;
  }

  concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
  return function (source) {
    return source.lift(new ExpandOperator(project, concurrent, scheduler));
  };
}

exports.expand = expand;

var ExpandOperator = function () {
  function ExpandOperator(project, concurrent, scheduler) {
    this.project = project;
    this.concurrent = concurrent;
    this.scheduler = scheduler;
  }

  ExpandOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new ExpandSubscriber(subscriber, this.project, this.concurrent, this.scheduler));
  };

  return ExpandOperator;
}();

exports.ExpandOperator = ExpandOperator;

var ExpandSubscriber = function (_super) {
  __extends(ExpandSubscriber, _super);

  function ExpandSubscriber(destination, project, concurrent, scheduler) {
    var _this = _super.call(this, destination) || this;

    _this.project = project;
    _this.concurrent = concurrent;
    _this.scheduler = scheduler;
    _this.index = 0;
    _this.active = 0;
    _this.hasCompleted = false;

    if (concurrent < Number.POSITIVE_INFINITY) {
      _this.buffer = [];
    }

    return _this;
  }

  ExpandSubscriber.dispatch = function (arg) {
    var subscriber = arg.subscriber,
        result = arg.result,
        value = arg.value,
        index = arg.index;
    subscriber.subscribeToProjection(result, value, index);
  };

  ExpandSubscriber.prototype._next = function (value) {
    var destination = this.destination;

    if (destination.closed) {
      this._complete();

      return;
    }

    var index = this.index++;

    if (this.active < this.concurrent) {
      destination.next(value);

      try {
        var project = this.project;
        var result = project(value, index);

        if (!this.scheduler) {
          this.subscribeToProjection(result, value, index);
        } else {
          var state = {
            subscriber: this,
            result: result,
            value: value,
            index: index
          };
          var destination_1 = this.destination;
          destination_1.add(this.scheduler.schedule(ExpandSubscriber.dispatch, 0, state));
        }
      } catch (e) {
        destination.error(e);
      }
    } else {
      this.buffer.push(value);
    }
  };

  ExpandSubscriber.prototype.subscribeToProjection = function (result, value, index) {
    this.active++;
    var destination = this.destination;
    destination.add(subscribeToResult_1.subscribeToResult(this, result, value, index));
  };

  ExpandSubscriber.prototype._complete = function () {
    this.hasCompleted = true;

    if (this.hasCompleted && this.active === 0) {
      this.destination.complete();
    }

    this.unsubscribe();
  };

  ExpandSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this._next(innerValue);
  };

  ExpandSubscriber.prototype.notifyComplete = function (innerSub) {
    var buffer = this.buffer;
    var destination = this.destination;
    destination.remove(innerSub);
    this.active--;

    if (buffer && buffer.length > 0) {
      this._next(buffer.shift());
    }

    if (this.hasCompleted && this.active === 0) {
      this.destination.complete();
    }
  };

  return ExpandSubscriber;
}(OuterSubscriber_1.OuterSubscriber);

exports.ExpandSubscriber = ExpandSubscriber;

},{"../OuterSubscriber":10,"../util/subscribeToResult":197}],79:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = require("../Subscriber");

function filter(predicate, thisArg) {
  return function filterOperatorFunction(source) {
    return source.lift(new FilterOperator(predicate, thisArg));
  };
}

exports.filter = filter;

var FilterOperator = function () {
  function FilterOperator(predicate, thisArg) {
    this.predicate = predicate;
    this.thisArg = thisArg;
  }

  FilterOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
  };

  return FilterOperator;
}();

var FilterSubscriber = function (_super) {
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
    } catch (err) {
      this.destination.error(err);
      return;
    }

    if (result) {
      this.destination.next(value);
    }
  };

  return FilterSubscriber;
}(Subscriber_1.Subscriber);

},{"../Subscriber":15}],80:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = require("../Subscriber");

var Subscription_1 = require("../Subscription");

function finalize(callback) {
  return function (source) {
    return source.lift(new FinallyOperator(callback));
  };
}

exports.finalize = finalize;

var FinallyOperator = function () {
  function FinallyOperator(callback) {
    this.callback = callback;
  }

  FinallyOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new FinallySubscriber(subscriber, this.callback));
  };

  return FinallyOperator;
}();

var FinallySubscriber = function (_super) {
  __extends(FinallySubscriber, _super);

  function FinallySubscriber(destination, callback) {
    var _this = _super.call(this, destination) || this;

    _this.add(new Subscription_1.Subscription(callback));

    return _this;
  }

  return FinallySubscriber;
}(Subscriber_1.Subscriber);

},{"../Subscriber":15,"../Subscription":16}],81:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = require("../Subscriber");

function find(predicate, thisArg) {
  if (typeof predicate !== 'function') {
    throw new TypeError('predicate is not a function');
  }

  return function (source) {
    return source.lift(new FindValueOperator(predicate, source, false, thisArg));
  };
}

exports.find = find;

var FindValueOperator = function () {
  function FindValueOperator(predicate, source, yieldIndex, thisArg) {
    this.predicate = predicate;
    this.source = source;
    this.yieldIndex = yieldIndex;
    this.thisArg = thisArg;
  }

  FindValueOperator.prototype.call = function (observer, source) {
    return source.subscribe(new FindValueSubscriber(observer, this.predicate, this.source, this.yieldIndex, this.thisArg));
  };

  return FindValueOperator;
}();

exports.FindValueOperator = FindValueOperator;

var FindValueSubscriber = function (_super) {
  __extends(FindValueSubscriber, _super);

  function FindValueSubscriber(destination, predicate, source, yieldIndex, thisArg) {
    var _this = _super.call(this, destination) || this;

    _this.predicate = predicate;
    _this.source = source;
    _this.yieldIndex = yieldIndex;
    _this.thisArg = thisArg;
    _this.index = 0;
    return _this;
  }

  FindValueSubscriber.prototype.notifyComplete = function (value) {
    var destination = this.destination;
    destination.next(value);
    destination.complete();
    this.unsubscribe();
  };

  FindValueSubscriber.prototype._next = function (value) {
    var _a = this,
        predicate = _a.predicate,
        thisArg = _a.thisArg;

    var index = this.index++;

    try {
      var result = predicate.call(thisArg || this, value, index, this.source);

      if (result) {
        this.notifyComplete(this.yieldIndex ? index : value);
      }
    } catch (err) {
      this.destination.error(err);
    }
  };

  FindValueSubscriber.prototype._complete = function () {
    this.notifyComplete(this.yieldIndex ? -1 : undefined);
  };

  return FindValueSubscriber;
}(Subscriber_1.Subscriber);

exports.FindValueSubscriber = FindValueSubscriber;

},{"../Subscriber":15}],82:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var find_1 = require("../operators/find");

function findIndex(predicate, thisArg) {
  return function (source) {
    return source.lift(new find_1.FindValueOperator(predicate, source, true, thisArg));
  };
}

exports.findIndex = findIndex;

},{"../operators/find":81}],83:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var EmptyError_1 = require("../util/EmptyError");

var filter_1 = require("./filter");

var take_1 = require("./take");

var defaultIfEmpty_1 = require("./defaultIfEmpty");

var throwIfEmpty_1 = require("./throwIfEmpty");

var identity_1 = require("../util/identity");

function first(predicate, defaultValue) {
  var hasDefaultValue = arguments.length >= 2;
  return function (source) {
    return source.pipe(predicate ? filter_1.filter(function (v, i) {
      return predicate(v, i, source);
    }) : identity_1.identity, take_1.take(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function () {
      return new EmptyError_1.EmptyError();
    }));
  };
}

exports.first = first;

},{"../util/EmptyError":170,"../util/identity":177,"./defaultIfEmpty":66,"./filter":79,"./take":131,"./throwIfEmpty":138}],84:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = require("../Subscriber");

var Subscription_1 = require("../Subscription");

var Observable_1 = require("../Observable");

var Subject_1 = require("../Subject");

function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
  return function (source) {
    return source.lift(new GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector));
  };
}

exports.groupBy = groupBy;

var GroupByOperator = function () {
  function GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector) {
    this.keySelector = keySelector;
    this.elementSelector = elementSelector;
    this.durationSelector = durationSelector;
    this.subjectSelector = subjectSelector;
  }

  GroupByOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
  };

  return GroupByOperator;
}();

var GroupBySubscriber = function (_super) {
  __extends(GroupBySubscriber, _super);

  function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
    var _this = _super.call(this, destination) || this;

    _this.keySelector = keySelector;
    _this.elementSelector = elementSelector;
    _this.durationSelector = durationSelector;
    _this.subjectSelector = subjectSelector;
    _this.groups = null;
    _this.attemptedToUnsubscribe = false;
    _this.count = 0;
    return _this;
  }

  GroupBySubscriber.prototype._next = function (value) {
    var key;

    try {
      key = this.keySelector(value);
    } catch (err) {
      this.error(err);
      return;
    }

    this._group(value, key);
  };

  GroupBySubscriber.prototype._group = function (value, key) {
    var groups = this.groups;

    if (!groups) {
      groups = this.groups = new Map();
    }

    var group = groups.get(key);
    var element;

    if (this.elementSelector) {
      try {
        element = this.elementSelector(value);
      } catch (err) {
        this.error(err);
      }
    } else {
      element = value;
    }

    if (!group) {
      group = this.subjectSelector ? this.subjectSelector() : new Subject_1.Subject();
      groups.set(key, group);
      var groupedObservable = new GroupedObservable(key, group, this);
      this.destination.next(groupedObservable);

      if (this.durationSelector) {
        var duration = void 0;

        try {
          duration = this.durationSelector(new GroupedObservable(key, group));
        } catch (err) {
          this.error(err);
          return;
        }

        this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
      }
    }

    if (!group.closed) {
      group.next(element);
    }
  };

  GroupBySubscriber.prototype._error = function (err) {
    var groups = this.groups;

    if (groups) {
      groups.forEach(function (group, key) {
        group.error(err);
      });
      groups.clear();
    }

    this.destination.error(err);
  };

  GroupBySubscriber.prototype._complete = function () {
    var groups = this.groups;

    if (groups) {
      groups.forEach(function (group, key) {
        group.complete();
      });
      groups.clear();
    }

    this.destination.complete();
  };

  GroupBySubscriber.prototype.removeGroup = function (key) {
    this.groups.delete(key);
  };

  GroupBySubscriber.prototype.unsubscribe = function () {
    if (!this.closed) {
      this.attemptedToUnsubscribe = true;

      if (this.count === 0) {
        _super.prototype.unsubscribe.call(this);
      }
    }
  };

  return GroupBySubscriber;
}(Subscriber_1.Subscriber);

var GroupDurationSubscriber = function (_super) {
  __extends(GroupDurationSubscriber, _super);

  function GroupDurationSubscriber(key, group, parent) {
    var _this = _super.call(this, group) || this;

    _this.key = key;
    _this.group = group;
    _this.parent = parent;
    return _this;
  }

  GroupDurationSubscriber.prototype._next = function (value) {
    this.complete();
  };

  GroupDurationSubscriber.prototype._unsubscribe = function () {
    var _a = this,
        parent = _a.parent,
        key = _a.key;

    this.key = this.parent = null;

    if (parent) {
      parent.removeGroup(key);
    }
  };

  return GroupDurationSubscriber;
}(Subscriber_1.Subscriber);

var GroupedObservable = function (_super) {
  __extends(GroupedObservable, _super);

  function GroupedObservable(key, groupSubject, refCountSubscription) {
    var _this = _super.call(this) || this;

    _this.key = key;
    _this.groupSubject = groupSubject;
    _this.refCountSubscription = refCountSubscription;
    return _this;
  }

  GroupedObservable.prototype._subscribe = function (subscriber) {
    var subscription = new Subscription_1.Subscription();

    var _a = this,
        refCountSubscription = _a.refCountSubscription,
        groupSubject = _a.groupSubject;

    if (refCountSubscription && !refCountSubscription.closed) {
      subscription.add(new InnerRefCountSubscription(refCountSubscription));
    }

    subscription.add(groupSubject.subscribe(subscriber));
    return subscription;
  };

  return GroupedObservable;
}(Observable_1.Observable);

exports.GroupedObservable = GroupedObservable;

var InnerRefCountSubscription = function (_super) {
  __extends(InnerRefCountSubscription, _super);

  function InnerRefCountSubscription(parent) {
    var _this = _super.call(this) || this;

    _this.parent = parent;
    parent.count++;
    return _this;
  }

  InnerRefCountSubscription.prototype.unsubscribe = function () {
    var parent = this.parent;

    if (!parent.closed && !this.closed) {
      _super.prototype.unsubscribe.call(this);

      parent.count -= 1;

      if (parent.count === 0 && parent.attemptedToUnsubscribe) {
        parent.unsubscribe();
      }
    }
  };

  return InnerRefCountSubscription;
}(Subscription_1.Subscription);

},{"../Observable":8,"../Subject":13,"../Subscriber":15,"../Subscription":16}],85:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = require("../Subscriber");

function ignoreElements() {
  return function ignoreElementsOperatorFunction(source) {
    return source.lift(new IgnoreElementsOperator());
  };
}

exports.ignoreElements = ignoreElements;

var IgnoreElementsOperator = function () {
  function IgnoreElementsOperator() {}

  IgnoreElementsOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new IgnoreElementsSubscriber(subscriber));
  };

  return IgnoreElementsOperator;
}();

var IgnoreElementsSubscriber = function (_super) {
  __extends(IgnoreElementsSubscriber, _super);

  function IgnoreElementsSubscriber() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  IgnoreElementsSubscriber.prototype._next = function (unused) {};

  return IgnoreElementsSubscriber;
}(Subscriber_1.Subscriber);

},{"../Subscriber":15}],86:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = require("../Subscriber");

function isEmpty() {
  return function (source) {
    return source.lift(new IsEmptyOperator());
  };
}

exports.isEmpty = isEmpty;

var IsEmptyOperator = function () {
  function IsEmptyOperator() {}

  IsEmptyOperator.prototype.call = function (observer, source) {
    return source.subscribe(new IsEmptySubscriber(observer));
  };

  return IsEmptyOperator;
}();

var IsEmptySubscriber = function (_super) {
  __extends(IsEmptySubscriber, _super);

  function IsEmptySubscriber(destination) {
    return _super.call(this, destination) || this;
  }

  IsEmptySubscriber.prototype.notifyComplete = function (isEmpty) {
    var destination = this.destination;
    destination.next(isEmpty);
    destination.complete();
  };

  IsEmptySubscriber.prototype._next = function (value) {
    this.notifyComplete(false);
  };

  IsEmptySubscriber.prototype._complete = function () {
    this.notifyComplete(true);
  };

  return IsEmptySubscriber;
}(Subscriber_1.Subscriber);

},{"../Subscriber":15}],87:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var EmptyError_1 = require("../util/EmptyError");

var filter_1 = require("./filter");

var takeLast_1 = require("./takeLast");

var throwIfEmpty_1 = require("./throwIfEmpty");

var defaultIfEmpty_1 = require("./defaultIfEmpty");

var identity_1 = require("../util/identity");

function last(predicate, defaultValue) {
  var hasDefaultValue = arguments.length >= 2;
  return function (source) {
    return source.pipe(predicate ? filter_1.filter(function (v, i) {
      return predicate(v, i, source);
    }) : identity_1.identity, takeLast_1.takeLast(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function () {
      return new EmptyError_1.EmptyError();
    }));
  };
}

exports.last = last;

},{"../util/EmptyError":170,"../util/identity":177,"./defaultIfEmpty":66,"./filter":79,"./takeLast":132,"./throwIfEmpty":138}],88:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = require("../Subscriber");

function map(project, thisArg) {
  return function mapOperation(source) {
    if (typeof project !== 'function') {
      throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
    }

    return source.lift(new MapOperator(project, thisArg));
  };
}

exports.map = map;

var MapOperator = function () {
  function MapOperator(project, thisArg) {
    this.project = project;
    this.thisArg = thisArg;
  }

  MapOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
  };

  return MapOperator;
}();

exports.MapOperator = MapOperator;

var MapSubscriber = function (_super) {
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
    } catch (err) {
      this.destination.error(err);
      return;
    }

    this.destination.next(result);
  };

  return MapSubscriber;
}(Subscriber_1.Subscriber);

},{"../Subscriber":15}],89:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = require("../Subscriber");

function mapTo(value) {
  return function (source) {
    return source.lift(new MapToOperator(value));
  };
}

exports.mapTo = mapTo;

var MapToOperator = function () {
  function MapToOperator(value) {
    this.value = value;
  }

  MapToOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new MapToSubscriber(subscriber, this.value));
  };

  return MapToOperator;
}();

var MapToSubscriber = function (_super) {
  __extends(MapToSubscriber, _super);

  function MapToSubscriber(destination, value) {
    var _this = _super.call(this, destination) || this;

    _this.value = value;
    return _this;
  }

  MapToSubscriber.prototype._next = function (x) {
    this.destination.next(this.value);
  };

  return MapToSubscriber;
}(Subscriber_1.Subscriber);

},{"../Subscriber":15}],90:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = require("../Subscriber");

var Notification_1 = require("../Notification");

function materialize() {
  return function materializeOperatorFunction(source) {
    return source.lift(new MaterializeOperator());
  };
}

exports.materialize = materialize;

var MaterializeOperator = function () {
  function MaterializeOperator() {}

  MaterializeOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new MaterializeSubscriber(subscriber));
  };

  return MaterializeOperator;
}();

var MaterializeSubscriber = function (_super) {
  __extends(MaterializeSubscriber, _super);

  function MaterializeSubscriber(destination) {
    return _super.call(this, destination) || this;
  }

  MaterializeSubscriber.prototype._next = function (value) {
    this.destination.next(Notification_1.Notification.createNext(value));
  };

  MaterializeSubscriber.prototype._error = function (err) {
    var destination = this.destination;
    destination.next(Notification_1.Notification.createError(err));
    destination.complete();
  };

  MaterializeSubscriber.prototype._complete = function () {
    var destination = this.destination;
    destination.next(Notification_1.Notification.createComplete());
    destination.complete();
  };

  return MaterializeSubscriber;
}(Subscriber_1.Subscriber);

},{"../Notification":7,"../Subscriber":15}],91:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var reduce_1 = require("./reduce");

function max(comparer) {
  var max = typeof comparer === 'function' ? function (x, y) {
    return comparer(x, y) > 0 ? x : y;
  } : function (x, y) {
    return x > y ? x : y;
  };
  return reduce_1.reduce(max);
}

exports.max = max;

},{"./reduce":109}],92:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var merge_1 = require("../observable/merge");

function merge() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  return function (source) {
    return source.lift.call(merge_1.merge.apply(void 0, [source].concat(observables)));
  };
}

exports.merge = merge;

},{"../observable/merge":37}],93:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var mergeMap_1 = require("./mergeMap");

var identity_1 = require("../util/identity");

function mergeAll(concurrent) {
  if (concurrent === void 0) {
    concurrent = Number.POSITIVE_INFINITY;
  }

  return mergeMap_1.mergeMap(identity_1.identity, concurrent);
}

exports.mergeAll = mergeAll;

},{"../util/identity":177,"./mergeMap":94}],94:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var subscribeToResult_1 = require("../util/subscribeToResult");

var OuterSubscriber_1 = require("../OuterSubscriber");

var InnerSubscriber_1 = require("../InnerSubscriber");

var map_1 = require("./map");

var from_1 = require("../observable/from");

function mergeMap(project, resultSelector, concurrent) {
  if (concurrent === void 0) {
    concurrent = Number.POSITIVE_INFINITY;
  }

  if (typeof resultSelector === 'function') {
    return function (source) {
      return source.pipe(mergeMap(function (a, i) {
        return from_1.from(project(a, i)).pipe(map_1.map(function (b, ii) {
          return resultSelector(a, b, i, ii);
        }));
      }, concurrent));
    };
  } else if (typeof resultSelector === 'number') {
    concurrent = resultSelector;
  }

  return function (source) {
    return source.lift(new MergeMapOperator(project, concurrent));
  };
}

exports.mergeMap = mergeMap;

var MergeMapOperator = function () {
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
}();

exports.MergeMapOperator = MergeMapOperator;

var MergeMapSubscriber = function (_super) {
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
    } else {
      this.buffer.push(value);
    }
  };

  MergeMapSubscriber.prototype._tryNext = function (value) {
    var result;
    var index = this.index++;

    try {
      result = this.project(value, index);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    this.active++;

    this._innerSub(result, value, index);
  };

  MergeMapSubscriber.prototype._innerSub = function (ish, value, index) {
    var innerSubscriber = new InnerSubscriber_1.InnerSubscriber(this, undefined, undefined);
    var destination = this.destination;
    destination.add(innerSubscriber);
    subscribeToResult_1.subscribeToResult(this, ish, value, index, innerSubscriber);
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
    } else if (this.active === 0 && this.hasCompleted) {
      this.destination.complete();
    }
  };

  return MergeMapSubscriber;
}(OuterSubscriber_1.OuterSubscriber);

exports.MergeMapSubscriber = MergeMapSubscriber;

},{"../InnerSubscriber":6,"../OuterSubscriber":10,"../observable/from":27,"../util/subscribeToResult":197,"./map":88}],95:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var mergeMap_1 = require("./mergeMap");

function mergeMapTo(innerObservable, resultSelector, concurrent) {
  if (concurrent === void 0) {
    concurrent = Number.POSITIVE_INFINITY;
  }

  if (typeof resultSelector === 'function') {
    return mergeMap_1.mergeMap(function () {
      return innerObservable;
    }, resultSelector, concurrent);
  }

  if (typeof resultSelector === 'number') {
    concurrent = resultSelector;
  }

  return mergeMap_1.mergeMap(function () {
    return innerObservable;
  }, concurrent);
}

exports.mergeMapTo = mergeMapTo;

},{"./mergeMap":94}],96:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var subscribeToResult_1 = require("../util/subscribeToResult");

var OuterSubscriber_1 = require("../OuterSubscriber");

var InnerSubscriber_1 = require("../InnerSubscriber");

function mergeScan(accumulator, seed, concurrent) {
  if (concurrent === void 0) {
    concurrent = Number.POSITIVE_INFINITY;
  }

  return function (source) {
    return source.lift(new MergeScanOperator(accumulator, seed, concurrent));
  };
}

exports.mergeScan = mergeScan;

var MergeScanOperator = function () {
  function MergeScanOperator(accumulator, seed, concurrent) {
    this.accumulator = accumulator;
    this.seed = seed;
    this.concurrent = concurrent;
  }

  MergeScanOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new MergeScanSubscriber(subscriber, this.accumulator, this.seed, this.concurrent));
  };

  return MergeScanOperator;
}();

exports.MergeScanOperator = MergeScanOperator;

var MergeScanSubscriber = function (_super) {
  __extends(MergeScanSubscriber, _super);

  function MergeScanSubscriber(destination, accumulator, acc, concurrent) {
    var _this = _super.call(this, destination) || this;

    _this.accumulator = accumulator;
    _this.acc = acc;
    _this.concurrent = concurrent;
    _this.hasValue = false;
    _this.hasCompleted = false;
    _this.buffer = [];
    _this.active = 0;
    _this.index = 0;
    return _this;
  }

  MergeScanSubscriber.prototype._next = function (value) {
    if (this.active < this.concurrent) {
      var index = this.index++;
      var destination = this.destination;
      var ish = void 0;

      try {
        var accumulator = this.accumulator;
        ish = accumulator(this.acc, value, index);
      } catch (e) {
        return destination.error(e);
      }

      this.active++;

      this._innerSub(ish, value, index);
    } else {
      this.buffer.push(value);
    }
  };

  MergeScanSubscriber.prototype._innerSub = function (ish, value, index) {
    var innerSubscriber = new InnerSubscriber_1.InnerSubscriber(this, undefined, undefined);
    var destination = this.destination;
    destination.add(innerSubscriber);
    subscribeToResult_1.subscribeToResult(this, ish, value, index, innerSubscriber);
  };

  MergeScanSubscriber.prototype._complete = function () {
    this.hasCompleted = true;

    if (this.active === 0 && this.buffer.length === 0) {
      if (this.hasValue === false) {
        this.destination.next(this.acc);
      }

      this.destination.complete();
    }

    this.unsubscribe();
  };

  MergeScanSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    var destination = this.destination;
    this.acc = innerValue;
    this.hasValue = true;
    destination.next(innerValue);
  };

  MergeScanSubscriber.prototype.notifyComplete = function (innerSub) {
    var buffer = this.buffer;
    var destination = this.destination;
    destination.remove(innerSub);
    this.active--;

    if (buffer.length > 0) {
      this._next(buffer.shift());
    } else if (this.active === 0 && this.hasCompleted) {
      if (this.hasValue === false) {
        this.destination.next(this.acc);
      }

      this.destination.complete();
    }
  };

  return MergeScanSubscriber;
}(OuterSubscriber_1.OuterSubscriber);

exports.MergeScanSubscriber = MergeScanSubscriber;

},{"../InnerSubscriber":6,"../OuterSubscriber":10,"../util/subscribeToResult":197}],97:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var reduce_1 = require("./reduce");

function min(comparer) {
  var min = typeof comparer === 'function' ? function (x, y) {
    return comparer(x, y) < 0 ? x : y;
  } : function (x, y) {
    return x < y ? x : y;
  };
  return reduce_1.reduce(min);
}

exports.min = min;

},{"./reduce":109}],98:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ConnectableObservable_1 = require("../observable/ConnectableObservable");

function multicast(subjectOrSubjectFactory, selector) {
  return function multicastOperatorFunction(source) {
    var subjectFactory;

    if (typeof subjectOrSubjectFactory === 'function') {
      subjectFactory = subjectOrSubjectFactory;
    } else {
      subjectFactory = function subjectFactory() {
        return subjectOrSubjectFactory;
      };
    }

    if (typeof selector === 'function') {
      return source.lift(new MulticastOperator(subjectFactory, selector));
    }

    var connectable = Object.create(source, ConnectableObservable_1.connectableObservableDescriptor);
    connectable.source = source;
    connectable.subjectFactory = subjectFactory;
    return connectable;
  };
}

exports.multicast = multicast;

var MulticastOperator = function () {
  function MulticastOperator(subjectFactory, selector) {
    this.subjectFactory = subjectFactory;
    this.selector = selector;
  }

  MulticastOperator.prototype.call = function (subscriber, source) {
    var selector = this.selector;
    var subject = this.subjectFactory();
    var subscription = selector(subject).subscribe(subscriber);
    subscription.add(source.subscribe(subject));
    return subscription;
  };

  return MulticastOperator;
}();

exports.MulticastOperator = MulticastOperator;

},{"../observable/ConnectableObservable":18}],99:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = require("../Subscriber");

var Notification_1 = require("../Notification");

function observeOn(scheduler, delay) {
  if (delay === void 0) {
    delay = 0;
  }

  return function observeOnOperatorFunction(source) {
    return source.lift(new ObserveOnOperator(scheduler, delay));
  };
}

exports.observeOn = observeOn;

var ObserveOnOperator = function () {
  function ObserveOnOperator(scheduler, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    this.scheduler = scheduler;
    this.delay = delay;
  }

  ObserveOnOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
  };

  return ObserveOnOperator;
}();

exports.ObserveOnOperator = ObserveOnOperator;

var ObserveOnSubscriber = function (_super) {
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
    var notification = arg.notification,
        destination = arg.destination;
    notification.observe(destination);
    this.unsubscribe();
  };

  ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
    var destination = this.destination;
    destination.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
  };

  ObserveOnSubscriber.prototype._next = function (value) {
    this.scheduleMessage(Notification_1.Notification.createNext(value));
  };

  ObserveOnSubscriber.prototype._error = function (err) {
    this.scheduleMessage(Notification_1.Notification.createError(err));
    this.unsubscribe();
  };

  ObserveOnSubscriber.prototype._complete = function () {
    this.scheduleMessage(Notification_1.Notification.createComplete());
    this.unsubscribe();
  };

  return ObserveOnSubscriber;
}(Subscriber_1.Subscriber);

exports.ObserveOnSubscriber = ObserveOnSubscriber;

var ObserveOnMessage = function () {
  function ObserveOnMessage(notification, destination) {
    this.notification = notification;
    this.destination = destination;
  }

  return ObserveOnMessage;
}();

exports.ObserveOnMessage = ObserveOnMessage;

},{"../Notification":7,"../Subscriber":15}],100:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var from_1 = require("../observable/from");

var isArray_1 = require("../util/isArray");

var OuterSubscriber_1 = require("../OuterSubscriber");

var InnerSubscriber_1 = require("../InnerSubscriber");

var subscribeToResult_1 = require("../util/subscribeToResult");

function onErrorResumeNext() {
  var nextSources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    nextSources[_i] = arguments[_i];
  }

  if (nextSources.length === 1 && isArray_1.isArray(nextSources[0])) {
    nextSources = nextSources[0];
  }

  return function (source) {
    return source.lift(new OnErrorResumeNextOperator(nextSources));
  };
}

exports.onErrorResumeNext = onErrorResumeNext;

function onErrorResumeNextStatic() {
  var nextSources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    nextSources[_i] = arguments[_i];
  }

  var source = null;

  if (nextSources.length === 1 && isArray_1.isArray(nextSources[0])) {
    nextSources = nextSources[0];
  }

  source = nextSources.shift();
  return from_1.from(source, null).lift(new OnErrorResumeNextOperator(nextSources));
}

exports.onErrorResumeNextStatic = onErrorResumeNextStatic;

var OnErrorResumeNextOperator = function () {
  function OnErrorResumeNextOperator(nextSources) {
    this.nextSources = nextSources;
  }

  OnErrorResumeNextOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new OnErrorResumeNextSubscriber(subscriber, this.nextSources));
  };

  return OnErrorResumeNextOperator;
}();

var OnErrorResumeNextSubscriber = function (_super) {
  __extends(OnErrorResumeNextSubscriber, _super);

  function OnErrorResumeNextSubscriber(destination, nextSources) {
    var _this = _super.call(this, destination) || this;

    _this.destination = destination;
    _this.nextSources = nextSources;
    return _this;
  }

  OnErrorResumeNextSubscriber.prototype.notifyError = function (error, innerSub) {
    this.subscribeToNextSource();
  };

  OnErrorResumeNextSubscriber.prototype.notifyComplete = function (innerSub) {
    this.subscribeToNextSource();
  };

  OnErrorResumeNextSubscriber.prototype._error = function (err) {
    this.subscribeToNextSource();
    this.unsubscribe();
  };

  OnErrorResumeNextSubscriber.prototype._complete = function () {
    this.subscribeToNextSource();
    this.unsubscribe();
  };

  OnErrorResumeNextSubscriber.prototype.subscribeToNextSource = function () {
    var next = this.nextSources.shift();

    if (!!next) {
      var innerSubscriber = new InnerSubscriber_1.InnerSubscriber(this, undefined, undefined);
      var destination = this.destination;
      destination.add(innerSubscriber);
      subscribeToResult_1.subscribeToResult(this, next, undefined, undefined, innerSubscriber);
    } else {
      this.destination.complete();
    }
  };

  return OnErrorResumeNextSubscriber;
}(OuterSubscriber_1.OuterSubscriber);

},{"../InnerSubscriber":6,"../OuterSubscriber":10,"../observable/from":27,"../util/isArray":178,"../util/subscribeToResult":197}],101:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = require("../Subscriber");

function pairwise() {
  return function (source) {
    return source.lift(new PairwiseOperator());
  };
}

exports.pairwise = pairwise;

var PairwiseOperator = function () {
  function PairwiseOperator() {}

  PairwiseOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new PairwiseSubscriber(subscriber));
  };

  return PairwiseOperator;
}();

var PairwiseSubscriber = function (_super) {
  __extends(PairwiseSubscriber, _super);

  function PairwiseSubscriber(destination) {
    var _this = _super.call(this, destination) || this;

    _this.hasPrev = false;
    return _this;
  }

  PairwiseSubscriber.prototype._next = function (value) {
    if (this.hasPrev) {
      this.destination.next([this.prev, value]);
    } else {
      this.hasPrev = true;
    }

    this.prev = value;
  };

  return PairwiseSubscriber;
}(Subscriber_1.Subscriber);

},{"../Subscriber":15}],102:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var not_1 = require("../util/not");

var filter_1 = require("./filter");

function partition(predicate, thisArg) {
  return function (source) {
    return [filter_1.filter(predicate, thisArg)(source), filter_1.filter(not_1.not(predicate, thisArg))(source)];
  };
}

exports.partition = partition;

},{"../util/not":190,"./filter":79}],103:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var map_1 = require("./map");

function pluck() {
  var properties = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    properties[_i] = arguments[_i];
  }

  var length = properties.length;

  if (length === 0) {
    throw new Error('list of properties cannot be empty.');
  }

  return function (source) {
    return map_1.map(plucker(properties, length))(source);
  };
}

exports.pluck = pluck;

function plucker(props, length) {
  var mapper = function mapper(x) {
    var currentProp = x;

    for (var i = 0; i < length; i++) {
      var p = currentProp[props[i]];

      if (typeof p !== 'undefined') {
        currentProp = p;
      } else {
        return undefined;
      }
    }

    return currentProp;
  };

  return mapper;
}

},{"./map":88}],104:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subject_1 = require("../Subject");

var multicast_1 = require("./multicast");

function publish(selector) {
  return selector ? multicast_1.multicast(function () {
    return new Subject_1.Subject();
  }, selector) : multicast_1.multicast(new Subject_1.Subject());
}

exports.publish = publish;

},{"../Subject":13,"./multicast":98}],105:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var BehaviorSubject_1 = require("../BehaviorSubject");

var multicast_1 = require("./multicast");

function publishBehavior(value) {
  return function (source) {
    return multicast_1.multicast(new BehaviorSubject_1.BehaviorSubject(value))(source);
  };
}

exports.publishBehavior = publishBehavior;

},{"../BehaviorSubject":5,"./multicast":98}],106:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var AsyncSubject_1 = require("../AsyncSubject");

var multicast_1 = require("./multicast");

function publishLast() {
  return function (source) {
    return multicast_1.multicast(new AsyncSubject_1.AsyncSubject())(source);
  };
}

exports.publishLast = publishLast;

},{"../AsyncSubject":4,"./multicast":98}],107:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ReplaySubject_1 = require("../ReplaySubject");

var multicast_1 = require("./multicast");

function publishReplay(bufferSize, windowTime, selectorOrScheduler, scheduler) {
  if (selectorOrScheduler && typeof selectorOrScheduler !== 'function') {
    scheduler = selectorOrScheduler;
  }

  var selector = typeof selectorOrScheduler === 'function' ? selectorOrScheduler : undefined;
  var subject = new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler);
  return function (source) {
    return multicast_1.multicast(function () {
      return subject;
    }, selector)(source);
  };
}

exports.publishReplay = publishReplay;

},{"../ReplaySubject":11,"./multicast":98}],108:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var isArray_1 = require("../util/isArray");

var race_1 = require("../observable/race");

function race() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  return function raceOperatorFunction(source) {
    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
      observables = observables[0];
    }

    return source.lift.call(race_1.race.apply(void 0, [source].concat(observables)));
  };
}

exports.race = race;

},{"../observable/race":42,"../util/isArray":178}],109:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var scan_1 = require("./scan");

var takeLast_1 = require("./takeLast");

var defaultIfEmpty_1 = require("./defaultIfEmpty");

var pipe_1 = require("../util/pipe");

function reduce(accumulator, seed) {
  if (arguments.length >= 2) {
    return function reduceOperatorFunctionWithSeed(source) {
      return pipe_1.pipe(scan_1.scan(accumulator, seed), takeLast_1.takeLast(1), defaultIfEmpty_1.defaultIfEmpty(seed))(source);
    };
  }

  return function reduceOperatorFunction(source) {
    return pipe_1.pipe(scan_1.scan(function (acc, value, index) {
      return accumulator(acc, value, index + 1);
    }), takeLast_1.takeLast(1))(source);
  };
}

exports.reduce = reduce;

},{"../util/pipe":191,"./defaultIfEmpty":66,"./scan":117,"./takeLast":132}],110:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = require("../Subscriber");

function refCount() {
  return function refCountOperatorFunction(source) {
    return source.lift(new RefCountOperator(source));
  };
}

exports.refCount = refCount;

var RefCountOperator = function () {
  function RefCountOperator(connectable) {
    this.connectable = connectable;
  }

  RefCountOperator.prototype.call = function (subscriber, source) {
    var connectable = this.connectable;
    connectable._refCount++;
    var refCounter = new RefCountSubscriber(subscriber, connectable);
    var subscription = source.subscribe(refCounter);

    if (!refCounter.closed) {
      refCounter.connection = connectable.connect();
    }

    return subscription;
  };

  return RefCountOperator;
}();

var RefCountSubscriber = function (_super) {
  __extends(RefCountSubscriber, _super);

  function RefCountSubscriber(destination, connectable) {
    var _this = _super.call(this, destination) || this;

    _this.connectable = connectable;
    return _this;
  }

  RefCountSubscriber.prototype._unsubscribe = function () {
    var connectable = this.connectable;

    if (!connectable) {
      this.connection = null;
      return;
    }

    this.connectable = null;
    var refCount = connectable._refCount;

    if (refCount <= 0) {
      this.connection = null;
      return;
    }

    connectable._refCount = refCount - 1;

    if (refCount > 1) {
      this.connection = null;
      return;
    }

    var connection = this.connection;
    var sharedConnection = connectable._connection;
    this.connection = null;

    if (sharedConnection && (!connection || sharedConnection === connection)) {
      sharedConnection.unsubscribe();
    }
  };

  return RefCountSubscriber;
}(Subscriber_1.Subscriber);

},{"../Subscriber":15}],111:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = require("../Subscriber");

var empty_1 = require("../observable/empty");

function repeat(count) {
  if (count === void 0) {
    count = -1;
  }

  return function (source) {
    if (count === 0) {
      return empty_1.empty();
    } else if (count < 0) {
      return source.lift(new RepeatOperator(-1, source));
    } else {
      return source.lift(new RepeatOperator(count - 1, source));
    }
  };
}

exports.repeat = repeat;

var RepeatOperator = function () {
  function RepeatOperator(count, source) {
    this.count = count;
    this.source = source;
  }

  RepeatOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new RepeatSubscriber(subscriber, this.count, this.source));
  };

  return RepeatOperator;
}();

var RepeatSubscriber = function (_super) {
  __extends(RepeatSubscriber, _super);

  function RepeatSubscriber(destination, count, source) {
    var _this = _super.call(this, destination) || this;

    _this.count = count;
    _this.source = source;
    return _this;
  }

  RepeatSubscriber.prototype.complete = function () {
    if (!this.isStopped) {
      var _a = this,
          source = _a.source,
          count = _a.count;

      if (count === 0) {
        return _super.prototype.complete.call(this);
      } else if (count > -1) {
        this.count = count - 1;
      }

      source.subscribe(this._unsubscribeAndRecycle());
    }
  };

  return RepeatSubscriber;
}(Subscriber_1.Subscriber);

},{"../Subscriber":15,"../observable/empty":25}],112:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subject_1 = require("../Subject");

var OuterSubscriber_1 = require("../OuterSubscriber");

var subscribeToResult_1 = require("../util/subscribeToResult");

function repeatWhen(notifier) {
  return function (source) {
    return source.lift(new RepeatWhenOperator(notifier));
  };
}

exports.repeatWhen = repeatWhen;

var RepeatWhenOperator = function () {
  function RepeatWhenOperator(notifier) {
    this.notifier = notifier;
  }

  RepeatWhenOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new RepeatWhenSubscriber(subscriber, this.notifier, source));
  };

  return RepeatWhenOperator;
}();

var RepeatWhenSubscriber = function (_super) {
  __extends(RepeatWhenSubscriber, _super);

  function RepeatWhenSubscriber(destination, notifier, source) {
    var _this = _super.call(this, destination) || this;

    _this.notifier = notifier;
    _this.source = source;
    _this.sourceIsBeingSubscribedTo = true;
    return _this;
  }

  RepeatWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.sourceIsBeingSubscribedTo = true;
    this.source.subscribe(this);
  };

  RepeatWhenSubscriber.prototype.notifyComplete = function (innerSub) {
    if (this.sourceIsBeingSubscribedTo === false) {
      return _super.prototype.complete.call(this);
    }
  };

  RepeatWhenSubscriber.prototype.complete = function () {
    this.sourceIsBeingSubscribedTo = false;

    if (!this.isStopped) {
      if (!this.retries) {
        this.subscribeToRetries();
      }

      if (!this.retriesSubscription || this.retriesSubscription.closed) {
        return _super.prototype.complete.call(this);
      }

      this._unsubscribeAndRecycle();

      this.notifications.next();
    }
  };

  RepeatWhenSubscriber.prototype._unsubscribe = function () {
    var _a = this,
        notifications = _a.notifications,
        retriesSubscription = _a.retriesSubscription;

    if (notifications) {
      notifications.unsubscribe();
      this.notifications = null;
    }

    if (retriesSubscription) {
      retriesSubscription.unsubscribe();
      this.retriesSubscription = null;
    }

    this.retries = null;
  };

  RepeatWhenSubscriber.prototype._unsubscribeAndRecycle = function () {
    var _unsubscribe = this._unsubscribe;
    this._unsubscribe = null;

    _super.prototype._unsubscribeAndRecycle.call(this);

    this._unsubscribe = _unsubscribe;
    return this;
  };

  RepeatWhenSubscriber.prototype.subscribeToRetries = function () {
    this.notifications = new Subject_1.Subject();
    var retries;

    try {
      var notifier = this.notifier;
      retries = notifier(this.notifications);
    } catch (e) {
      return _super.prototype.complete.call(this);
    }

    this.retries = retries;
    this.retriesSubscription = subscribeToResult_1.subscribeToResult(this, retries);
  };

  return RepeatWhenSubscriber;
}(OuterSubscriber_1.OuterSubscriber);

},{"../OuterSubscriber":10,"../Subject":13,"../util/subscribeToResult":197}],113:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = require("../Subscriber");

function retry(count) {
  if (count === void 0) {
    count = -1;
  }

  return function (source) {
    return source.lift(new RetryOperator(count, source));
  };
}

exports.retry = retry;

var RetryOperator = function () {
  function RetryOperator(count, source) {
    this.count = count;
    this.source = source;
  }

  RetryOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new RetrySubscriber(subscriber, this.count, this.source));
  };

  return RetryOperator;
}();

var RetrySubscriber = function (_super) {
  __extends(RetrySubscriber, _super);

  function RetrySubscriber(destination, count, source) {
    var _this = _super.call(this, destination) || this;

    _this.count = count;
    _this.source = source;
    return _this;
  }

  RetrySubscriber.prototype.error = function (err) {
    if (!this.isStopped) {
      var _a = this,
          source = _a.source,
          count = _a.count;

      if (count === 0) {
        return _super.prototype.error.call(this, err);
      } else if (count > -1) {
        this.count = count - 1;
      }

      source.subscribe(this._unsubscribeAndRecycle());
    }
  };

  return RetrySubscriber;
}(Subscriber_1.Subscriber);

},{"../Subscriber":15}],114:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subject_1 = require("../Subject");

var OuterSubscriber_1 = require("../OuterSubscriber");

var subscribeToResult_1 = require("../util/subscribeToResult");

function retryWhen(notifier) {
  return function (source) {
    return source.lift(new RetryWhenOperator(notifier, source));
  };
}

exports.retryWhen = retryWhen;

var RetryWhenOperator = function () {
  function RetryWhenOperator(notifier, source) {
    this.notifier = notifier;
    this.source = source;
  }

  RetryWhenOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new RetryWhenSubscriber(subscriber, this.notifier, this.source));
  };

  return RetryWhenOperator;
}();

var RetryWhenSubscriber = function (_super) {
  __extends(RetryWhenSubscriber, _super);

  function RetryWhenSubscriber(destination, notifier, source) {
    var _this = _super.call(this, destination) || this;

    _this.notifier = notifier;
    _this.source = source;
    return _this;
  }

  RetryWhenSubscriber.prototype.error = function (err) {
    if (!this.isStopped) {
      var errors = this.errors;
      var retries = this.retries;
      var retriesSubscription = this.retriesSubscription;

      if (!retries) {
        errors = new Subject_1.Subject();

        try {
          var notifier = this.notifier;
          retries = notifier(errors);
        } catch (e) {
          return _super.prototype.error.call(this, e);
        }

        retriesSubscription = subscribeToResult_1.subscribeToResult(this, retries);
      } else {
        this.errors = null;
        this.retriesSubscription = null;
      }

      this._unsubscribeAndRecycle();

      this.errors = errors;
      this.retries = retries;
      this.retriesSubscription = retriesSubscription;
      errors.next(err);
    }
  };

  RetryWhenSubscriber.prototype._unsubscribe = function () {
    var _a = this,
        errors = _a.errors,
        retriesSubscription = _a.retriesSubscription;

    if (errors) {
      errors.unsubscribe();
      this.errors = null;
    }

    if (retriesSubscription) {
      retriesSubscription.unsubscribe();
      this.retriesSubscription = null;
    }

    this.retries = null;
  };

  RetryWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    var _unsubscribe = this._unsubscribe;
    this._unsubscribe = null;

    this._unsubscribeAndRecycle();

    this._unsubscribe = _unsubscribe;
    this.source.subscribe(this);
  };

  return RetryWhenSubscriber;
}(OuterSubscriber_1.OuterSubscriber);

},{"../OuterSubscriber":10,"../Subject":13,"../util/subscribeToResult":197}],115:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var OuterSubscriber_1 = require("../OuterSubscriber");

var subscribeToResult_1 = require("../util/subscribeToResult");

function sample(notifier) {
  return function (source) {
    return source.lift(new SampleOperator(notifier));
  };
}

exports.sample = sample;

var SampleOperator = function () {
  function SampleOperator(notifier) {
    this.notifier = notifier;
  }

  SampleOperator.prototype.call = function (subscriber, source) {
    var sampleSubscriber = new SampleSubscriber(subscriber);
    var subscription = source.subscribe(sampleSubscriber);
    subscription.add(subscribeToResult_1.subscribeToResult(sampleSubscriber, this.notifier));
    return subscription;
  };

  return SampleOperator;
}();

var SampleSubscriber = function (_super) {
  __extends(SampleSubscriber, _super);

  function SampleSubscriber() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.hasValue = false;
    return _this;
  }

  SampleSubscriber.prototype._next = function (value) {
    this.value = value;
    this.hasValue = true;
  };

  SampleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.emitValue();
  };

  SampleSubscriber.prototype.notifyComplete = function () {
    this.emitValue();
  };

  SampleSubscriber.prototype.emitValue = function () {
    if (this.hasValue) {
      this.hasValue = false;
      this.destination.next(this.value);
    }
  };

  return SampleSubscriber;
}(OuterSubscriber_1.OuterSubscriber);

},{"../OuterSubscriber":10,"../util/subscribeToResult":197}],116:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = require("../Subscriber");

var async_1 = require("../scheduler/async");

function sampleTime(period, scheduler) {
  if (scheduler === void 0) {
    scheduler = async_1.async;
  }

  return function (source) {
    return source.lift(new SampleTimeOperator(period, scheduler));
  };
}

exports.sampleTime = sampleTime;

var SampleTimeOperator = function () {
  function SampleTimeOperator(period, scheduler) {
    this.period = period;
    this.scheduler = scheduler;
  }

  SampleTimeOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new SampleTimeSubscriber(subscriber, this.period, this.scheduler));
  };

  return SampleTimeOperator;
}();

var SampleTimeSubscriber = function (_super) {
  __extends(SampleTimeSubscriber, _super);

  function SampleTimeSubscriber(destination, period, scheduler) {
    var _this = _super.call(this, destination) || this;

    _this.period = period;
    _this.scheduler = scheduler;
    _this.hasValue = false;

    _this.add(scheduler.schedule(dispatchNotification, period, {
      subscriber: _this,
      period: period
    }));

    return _this;
  }

  SampleTimeSubscriber.prototype._next = function (value) {
    this.lastValue = value;
    this.hasValue = true;
  };

  SampleTimeSubscriber.prototype.notifyNext = function () {
    if (this.hasValue) {
      this.hasValue = false;
      this.destination.next(this.lastValue);
    }
  };

  return SampleTimeSubscriber;
}(Subscriber_1.Subscriber);

function dispatchNotification(state) {
  var subscriber = state.subscriber,
      period = state.period;
  subscriber.notifyNext();
  this.schedule(state, period);
}

},{"../Subscriber":15,"../scheduler/async":164}],117:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = require("../Subscriber");

function scan(accumulator, seed) {
  var hasSeed = false;

  if (arguments.length >= 2) {
    hasSeed = true;
  }

  return function scanOperatorFunction(source) {
    return source.lift(new ScanOperator(accumulator, seed, hasSeed));
  };
}

exports.scan = scan;

var ScanOperator = function () {
  function ScanOperator(accumulator, seed, hasSeed) {
    if (hasSeed === void 0) {
      hasSeed = false;
    }

    this.accumulator = accumulator;
    this.seed = seed;
    this.hasSeed = hasSeed;
  }

  ScanOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed, this.hasSeed));
  };

  return ScanOperator;
}();

var ScanSubscriber = function (_super) {
  __extends(ScanSubscriber, _super);

  function ScanSubscriber(destination, accumulator, _seed, hasSeed) {
    var _this = _super.call(this, destination) || this;

    _this.accumulator = accumulator;
    _this._seed = _seed;
    _this.hasSeed = hasSeed;
    _this.index = 0;
    return _this;
  }

  Object.defineProperty(ScanSubscriber.prototype, "seed", {
    get: function get() {
      return this._seed;
    },
    set: function set(value) {
      this.hasSeed = true;
      this._seed = value;
    },
    enumerable: true,
    configurable: true
  });

  ScanSubscriber.prototype._next = function (value) {
    if (!this.hasSeed) {
      this.seed = value;
      this.destination.next(value);
    } else {
      return this._tryNext(value);
    }
  };

  ScanSubscriber.prototype._tryNext = function (value) {
    var index = this.index++;
    var result;

    try {
      result = this.accumulator(this.seed, value, index);
    } catch (err) {
      this.destination.error(err);
    }

    this.seed = result;
    this.destination.next(result);
  };

  return ScanSubscriber;
}(Subscriber_1.Subscriber);

},{"../Subscriber":15}],118:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = require("../Subscriber");

function sequenceEqual(compareTo, comparator) {
  return function (source) {
    return source.lift(new SequenceEqualOperator(compareTo, comparator));
  };
}

exports.sequenceEqual = sequenceEqual;

var SequenceEqualOperator = function () {
  function SequenceEqualOperator(compareTo, comparator) {
    this.compareTo = compareTo;
    this.comparator = comparator;
  }

  SequenceEqualOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new SequenceEqualSubscriber(subscriber, this.compareTo, this.comparator));
  };

  return SequenceEqualOperator;
}();

exports.SequenceEqualOperator = SequenceEqualOperator;

var SequenceEqualSubscriber = function (_super) {
  __extends(SequenceEqualSubscriber, _super);

  function SequenceEqualSubscriber(destination, compareTo, comparator) {
    var _this = _super.call(this, destination) || this;

    _this.compareTo = compareTo;
    _this.comparator = comparator;
    _this._a = [];
    _this._b = [];
    _this._oneComplete = false;

    _this.destination.add(compareTo.subscribe(new SequenceEqualCompareToSubscriber(destination, _this)));

    return _this;
  }

  SequenceEqualSubscriber.prototype._next = function (value) {
    if (this._oneComplete && this._b.length === 0) {
      this.emit(false);
    } else {
      this._a.push(value);

      this.checkValues();
    }
  };

  SequenceEqualSubscriber.prototype._complete = function () {
    if (this._oneComplete) {
      this.emit(this._a.length === 0 && this._b.length === 0);
    } else {
      this._oneComplete = true;
    }

    this.unsubscribe();
  };

  SequenceEqualSubscriber.prototype.checkValues = function () {
    var _c = this,
        _a = _c._a,
        _b = _c._b,
        comparator = _c.comparator;

    while (_a.length > 0 && _b.length > 0) {
      var a = _a.shift();

      var b = _b.shift();

      var areEqual = false;

      try {
        areEqual = comparator ? comparator(a, b) : a === b;
      } catch (e) {
        this.destination.error(e);
      }

      if (!areEqual) {
        this.emit(false);
      }
    }
  };

  SequenceEqualSubscriber.prototype.emit = function (value) {
    var destination = this.destination;
    destination.next(value);
    destination.complete();
  };

  SequenceEqualSubscriber.prototype.nextB = function (value) {
    if (this._oneComplete && this._a.length === 0) {
      this.emit(false);
    } else {
      this._b.push(value);

      this.checkValues();
    }
  };

  SequenceEqualSubscriber.prototype.completeB = function () {
    if (this._oneComplete) {
      this.emit(this._a.length === 0 && this._b.length === 0);
    } else {
      this._oneComplete = true;
    }
  };

  return SequenceEqualSubscriber;
}(Subscriber_1.Subscriber);

exports.SequenceEqualSubscriber = SequenceEqualSubscriber;

var SequenceEqualCompareToSubscriber = function (_super) {
  __extends(SequenceEqualCompareToSubscriber, _super);

  function SequenceEqualCompareToSubscriber(destination, parent) {
    var _this = _super.call(this, destination) || this;

    _this.parent = parent;
    return _this;
  }

  SequenceEqualCompareToSubscriber.prototype._next = function (value) {
    this.parent.nextB(value);
  };

  SequenceEqualCompareToSubscriber.prototype._error = function (err) {
    this.parent.error(err);
    this.unsubscribe();
  };

  SequenceEqualCompareToSubscriber.prototype._complete = function () {
    this.parent.completeB();
    this.unsubscribe();
  };

  return SequenceEqualCompareToSubscriber;
}(Subscriber_1.Subscriber);

},{"../Subscriber":15}],119:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var multicast_1 = require("./multicast");

var refCount_1 = require("./refCount");

var Subject_1 = require("../Subject");

function shareSubjectFactory() {
  return new Subject_1.Subject();
}

function share() {
  return function (source) {
    return refCount_1.refCount()(multicast_1.multicast(shareSubjectFactory)(source));
  };
}

exports.share = share;

},{"../Subject":13,"./multicast":98,"./refCount":110}],120:[function(require,module,exports){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ReplaySubject_1 = require("../ReplaySubject");

function shareReplay(configOrBufferSize, windowTime, scheduler) {
  var config;

  if (configOrBufferSize && _typeof(configOrBufferSize) === 'object') {
    config = configOrBufferSize;
  } else {
    config = {
      bufferSize: configOrBufferSize,
      windowTime: windowTime,
      refCount: false,
      scheduler: scheduler
    };
  }

  return function (source) {
    return source.lift(shareReplayOperator(config));
  };
}

exports.shareReplay = shareReplay;

function shareReplayOperator(_a) {
  var _b = _a.bufferSize,
      bufferSize = _b === void 0 ? Number.POSITIVE_INFINITY : _b,
      _c = _a.windowTime,
      windowTime = _c === void 0 ? Number.POSITIVE_INFINITY : _c,
      useRefCount = _a.refCount,
      scheduler = _a.scheduler;
  var subject;
  var refCount = 0;
  var subscription;
  var hasError = false;
  var isComplete = false;
  return function shareReplayOperation(source) {
    refCount++;

    if (!subject || hasError) {
      hasError = false;
      subject = new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler);
      subscription = source.subscribe({
        next: function next(value) {
          subject.next(value);
        },
        error: function error(err) {
          hasError = true;
          subject.error(err);
        },
        complete: function complete() {
          isComplete = true;
          subject.complete();
        }
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

},{"../ReplaySubject":11}],121:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = require("../Subscriber");

var EmptyError_1 = require("../util/EmptyError");

function single(predicate) {
  return function (source) {
    return source.lift(new SingleOperator(predicate, source));
  };
}

exports.single = single;

var SingleOperator = function () {
  function SingleOperator(predicate, source) {
    this.predicate = predicate;
    this.source = source;
  }

  SingleOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new SingleSubscriber(subscriber, this.predicate, this.source));
  };

  return SingleOperator;
}();

var SingleSubscriber = function (_super) {
  __extends(SingleSubscriber, _super);

  function SingleSubscriber(destination, predicate, source) {
    var _this = _super.call(this, destination) || this;

    _this.predicate = predicate;
    _this.source = source;
    _this.seenValue = false;
    _this.index = 0;
    return _this;
  }

  SingleSubscriber.prototype.applySingleValue = function (value) {
    if (this.seenValue) {
      this.destination.error('Sequence contains more than one element');
    } else {
      this.seenValue = true;
      this.singleValue = value;
    }
  };

  SingleSubscriber.prototype._next = function (value) {
    var index = this.index++;

    if (this.predicate) {
      this.tryNext(value, index);
    } else {
      this.applySingleValue(value);
    }
  };

  SingleSubscriber.prototype.tryNext = function (value, index) {
    try {
      if (this.predicate(value, index, this.source)) {
        this.applySingleValue(value);
      }
    } catch (err) {
      this.destination.error(err);
    }
  };

  SingleSubscriber.prototype._complete = function () {
    var destination = this.destination;

    if (this.index > 0) {
      destination.next(this.seenValue ? this.singleValue : undefined);
      destination.complete();
    } else {
      destination.error(new EmptyError_1.EmptyError());
    }
  };

  return SingleSubscriber;
}(Subscriber_1.Subscriber);

},{"../Subscriber":15,"../util/EmptyError":170}],122:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = require("../Subscriber");

function skip(count) {
  return function (source) {
    return source.lift(new SkipOperator(count));
  };
}

exports.skip = skip;

var SkipOperator = function () {
  function SkipOperator(total) {
    this.total = total;
  }

  SkipOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new SkipSubscriber(subscriber, this.total));
  };

  return SkipOperator;
}();

var SkipSubscriber = function (_super) {
  __extends(SkipSubscriber, _super);

  function SkipSubscriber(destination, total) {
    var _this = _super.call(this, destination) || this;

    _this.total = total;
    _this.count = 0;
    return _this;
  }

  SkipSubscriber.prototype._next = function (x) {
    if (++this.count > this.total) {
      this.destination.next(x);
    }
  };

  return SkipSubscriber;
}(Subscriber_1.Subscriber);

},{"../Subscriber":15}],123:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = require("../Subscriber");

var ArgumentOutOfRangeError_1 = require("../util/ArgumentOutOfRangeError");

function skipLast(count) {
  return function (source) {
    return source.lift(new SkipLastOperator(count));
  };
}

exports.skipLast = skipLast;

var SkipLastOperator = function () {
  function SkipLastOperator(_skipCount) {
    this._skipCount = _skipCount;

    if (this._skipCount < 0) {
      throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError();
    }
  }

  SkipLastOperator.prototype.call = function (subscriber, source) {
    if (this._skipCount === 0) {
      return source.subscribe(new Subscriber_1.Subscriber(subscriber));
    } else {
      return source.subscribe(new SkipLastSubscriber(subscriber, this._skipCount));
    }
  };

  return SkipLastOperator;
}();

var SkipLastSubscriber = function (_super) {
  __extends(SkipLastSubscriber, _super);

  function SkipLastSubscriber(destination, _skipCount) {
    var _this = _super.call(this, destination) || this;

    _this._skipCount = _skipCount;
    _this._count = 0;
    _this._ring = new Array(_skipCount);
    return _this;
  }

  SkipLastSubscriber.prototype._next = function (value) {
    var skipCount = this._skipCount;
    var count = this._count++;

    if (count < skipCount) {
      this._ring[count] = value;
    } else {
      var currentIndex = count % skipCount;
      var ring = this._ring;
      var oldValue = ring[currentIndex];
      ring[currentIndex] = value;
      this.destination.next(oldValue);
    }
  };

  return SkipLastSubscriber;
}(Subscriber_1.Subscriber);

},{"../Subscriber":15,"../util/ArgumentOutOfRangeError":169}],124:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var OuterSubscriber_1 = require("../OuterSubscriber");

var InnerSubscriber_1 = require("../InnerSubscriber");

var subscribeToResult_1 = require("../util/subscribeToResult");

function skipUntil(notifier) {
  return function (source) {
    return source.lift(new SkipUntilOperator(notifier));
  };
}

exports.skipUntil = skipUntil;

var SkipUntilOperator = function () {
  function SkipUntilOperator(notifier) {
    this.notifier = notifier;
  }

  SkipUntilOperator.prototype.call = function (destination, source) {
    return source.subscribe(new SkipUntilSubscriber(destination, this.notifier));
  };

  return SkipUntilOperator;
}();

var SkipUntilSubscriber = function (_super) {
  __extends(SkipUntilSubscriber, _super);

  function SkipUntilSubscriber(destination, notifier) {
    var _this = _super.call(this, destination) || this;

    _this.hasValue = false;
    var innerSubscriber = new InnerSubscriber_1.InnerSubscriber(_this, undefined, undefined);

    _this.add(innerSubscriber);

    _this.innerSubscription = innerSubscriber;
    subscribeToResult_1.subscribeToResult(_this, notifier, undefined, undefined, innerSubscriber);
    return _this;
  }

  SkipUntilSubscriber.prototype._next = function (value) {
    if (this.hasValue) {
      _super.prototype._next.call(this, value);
    }
  };

  SkipUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.hasValue = true;

    if (this.innerSubscription) {
      this.innerSubscription.unsubscribe();
    }
  };

  SkipUntilSubscriber.prototype.notifyComplete = function () {};

  return SkipUntilSubscriber;
}(OuterSubscriber_1.OuterSubscriber);

},{"../InnerSubscriber":6,"../OuterSubscriber":10,"../util/subscribeToResult":197}],125:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = require("../Subscriber");

function skipWhile(predicate) {
  return function (source) {
    return source.lift(new SkipWhileOperator(predicate));
  };
}

exports.skipWhile = skipWhile;

var SkipWhileOperator = function () {
  function SkipWhileOperator(predicate) {
    this.predicate = predicate;
  }

  SkipWhileOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new SkipWhileSubscriber(subscriber, this.predicate));
  };

  return SkipWhileOperator;
}();

var SkipWhileSubscriber = function (_super) {
  __extends(SkipWhileSubscriber, _super);

  function SkipWhileSubscriber(destination, predicate) {
    var _this = _super.call(this, destination) || this;

    _this.predicate = predicate;
    _this.skipping = true;
    _this.index = 0;
    return _this;
  }

  SkipWhileSubscriber.prototype._next = function (value) {
    var destination = this.destination;

    if (this.skipping) {
      this.tryCallPredicate(value);
    }

    if (!this.skipping) {
      destination.next(value);
    }
  };

  SkipWhileSubscriber.prototype.tryCallPredicate = function (value) {
    try {
      var result = this.predicate(value, this.index++);
      this.skipping = Boolean(result);
    } catch (err) {
      this.destination.error(err);
    }
  };

  return SkipWhileSubscriber;
}(Subscriber_1.Subscriber);

},{"../Subscriber":15}],126:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var fromArray_1 = require("../observable/fromArray");

var scalar_1 = require("../observable/scalar");

var empty_1 = require("../observable/empty");

var concat_1 = require("../observable/concat");

var isScheduler_1 = require("../util/isScheduler");

function startWith() {
  var array = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    array[_i] = arguments[_i];
  }

  return function (source) {
    var scheduler = array[array.length - 1];

    if (isScheduler_1.isScheduler(scheduler)) {
      array.pop();
    } else {
      scheduler = null;
    }

    var len = array.length;

    if (len === 1 && !scheduler) {
      return concat_1.concat(scalar_1.scalar(array[0]), source);
    } else if (len > 0) {
      return concat_1.concat(fromArray_1.fromArray(array, scheduler), source);
    } else {
      return concat_1.concat(empty_1.empty(scheduler), source);
    }
  };
}

exports.startWith = startWith;

},{"../observable/concat":23,"../observable/empty":25,"../observable/fromArray":28,"../observable/scalar":44,"../util/isScheduler":188}],127:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var SubscribeOnObservable_1 = require("../observable/SubscribeOnObservable");

function subscribeOn(scheduler, delay) {
  if (delay === void 0) {
    delay = 0;
  }

  return function subscribeOnOperatorFunction(source) {
    return source.lift(new SubscribeOnOperator(scheduler, delay));
  };
}

exports.subscribeOn = subscribeOn;

var SubscribeOnOperator = function () {
  function SubscribeOnOperator(scheduler, delay) {
    this.scheduler = scheduler;
    this.delay = delay;
  }

  SubscribeOnOperator.prototype.call = function (subscriber, source) {
    return new SubscribeOnObservable_1.SubscribeOnObservable(source, this.delay, this.scheduler).subscribe(subscriber);
  };

  return SubscribeOnOperator;
}();

},{"../observable/SubscribeOnObservable":19}],128:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var switchMap_1 = require("./switchMap");

var identity_1 = require("../util/identity");

function switchAll() {
  return switchMap_1.switchMap(identity_1.identity);
}

exports.switchAll = switchAll;

},{"../util/identity":177,"./switchMap":129}],129:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var OuterSubscriber_1 = require("../OuterSubscriber");

var InnerSubscriber_1 = require("../InnerSubscriber");

var subscribeToResult_1 = require("../util/subscribeToResult");

var map_1 = require("./map");

var from_1 = require("../observable/from");

function switchMap(project, resultSelector) {
  if (typeof resultSelector === 'function') {
    return function (source) {
      return source.pipe(switchMap(function (a, i) {
        return from_1.from(project(a, i)).pipe(map_1.map(function (b, ii) {
          return resultSelector(a, b, i, ii);
        }));
      }));
    };
  }

  return function (source) {
    return source.lift(new SwitchMapOperator(project));
  };
}

exports.switchMap = switchMap;

var SwitchMapOperator = function () {
  function SwitchMapOperator(project) {
    this.project = project;
  }

  SwitchMapOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new SwitchMapSubscriber(subscriber, this.project));
  };

  return SwitchMapOperator;
}();

var SwitchMapSubscriber = function (_super) {
  __extends(SwitchMapSubscriber, _super);

  function SwitchMapSubscriber(destination, project) {
    var _this = _super.call(this, destination) || this;

    _this.project = project;
    _this.index = 0;
    return _this;
  }

  SwitchMapSubscriber.prototype._next = function (value) {
    var result;
    var index = this.index++;

    try {
      result = this.project(value, index);
    } catch (error) {
      this.destination.error(error);
      return;
    }

    this._innerSub(result, value, index);
  };

  SwitchMapSubscriber.prototype._innerSub = function (result, value, index) {
    var innerSubscription = this.innerSubscription;

    if (innerSubscription) {
      innerSubscription.unsubscribe();
    }

    var innerSubscriber = new InnerSubscriber_1.InnerSubscriber(this, undefined, undefined);
    var destination = this.destination;
    destination.add(innerSubscriber);
    this.innerSubscription = subscribeToResult_1.subscribeToResult(this, result, value, index, innerSubscriber);
  };

  SwitchMapSubscriber.prototype._complete = function () {
    var innerSubscription = this.innerSubscription;

    if (!innerSubscription || innerSubscription.closed) {
      _super.prototype._complete.call(this);
    }

    this.unsubscribe();
  };

  SwitchMapSubscriber.prototype._unsubscribe = function () {
    this.innerSubscription = null;
  };

  SwitchMapSubscriber.prototype.notifyComplete = function (innerSub) {
    var destination = this.destination;
    destination.remove(innerSub);
    this.innerSubscription = null;

    if (this.isStopped) {
      _super.prototype._complete.call(this);
    }
  };

  SwitchMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.destination.next(innerValue);
  };

  return SwitchMapSubscriber;
}(OuterSubscriber_1.OuterSubscriber);

},{"../InnerSubscriber":6,"../OuterSubscriber":10,"../observable/from":27,"../util/subscribeToResult":197,"./map":88}],130:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var switchMap_1 = require("./switchMap");

function switchMapTo(innerObservable, resultSelector) {
  return resultSelector ? switchMap_1.switchMap(function () {
    return innerObservable;
  }, resultSelector) : switchMap_1.switchMap(function () {
    return innerObservable;
  });
}

exports.switchMapTo = switchMapTo;

},{"./switchMap":129}],131:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = require("../Subscriber");

var ArgumentOutOfRangeError_1 = require("../util/ArgumentOutOfRangeError");

var empty_1 = require("../observable/empty");

function take(count) {
  return function (source) {
    if (count === 0) {
      return empty_1.empty();
    } else {
      return source.lift(new TakeOperator(count));
    }
  };
}

exports.take = take;

var TakeOperator = function () {
  function TakeOperator(total) {
    this.total = total;

    if (this.total < 0) {
      throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError();
    }
  }

  TakeOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new TakeSubscriber(subscriber, this.total));
  };

  return TakeOperator;
}();

var TakeSubscriber = function (_super) {
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
}(Subscriber_1.Subscriber);

},{"../Subscriber":15,"../observable/empty":25,"../util/ArgumentOutOfRangeError":169}],132:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = require("../Subscriber");

var ArgumentOutOfRangeError_1 = require("../util/ArgumentOutOfRangeError");

var empty_1 = require("../observable/empty");

function takeLast(count) {
  return function takeLastOperatorFunction(source) {
    if (count === 0) {
      return empty_1.empty();
    } else {
      return source.lift(new TakeLastOperator(count));
    }
  };
}

exports.takeLast = takeLast;

var TakeLastOperator = function () {
  function TakeLastOperator(total) {
    this.total = total;

    if (this.total < 0) {
      throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError();
    }
  }

  TakeLastOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new TakeLastSubscriber(subscriber, this.total));
  };

  return TakeLastOperator;
}();

var TakeLastSubscriber = function (_super) {
  __extends(TakeLastSubscriber, _super);

  function TakeLastSubscriber(destination, total) {
    var _this = _super.call(this, destination) || this;

    _this.total = total;
    _this.ring = new Array();
    _this.count = 0;
    return _this;
  }

  TakeLastSubscriber.prototype._next = function (value) {
    var ring = this.ring;
    var total = this.total;
    var count = this.count++;

    if (ring.length < total) {
      ring.push(value);
    } else {
      var index = count % total;
      ring[index] = value;
    }
  };

  TakeLastSubscriber.prototype._complete = function () {
    var destination = this.destination;
    var count = this.count;

    if (count > 0) {
      var total = this.count >= this.total ? this.total : this.count;
      var ring = this.ring;

      for (var i = 0; i < total; i++) {
        var idx = count++ % total;
        destination.next(ring[idx]);
      }
    }

    destination.complete();
  };

  return TakeLastSubscriber;
}(Subscriber_1.Subscriber);

},{"../Subscriber":15,"../observable/empty":25,"../util/ArgumentOutOfRangeError":169}],133:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var OuterSubscriber_1 = require("../OuterSubscriber");

var subscribeToResult_1 = require("../util/subscribeToResult");

function takeUntil(notifier) {
  return function (source) {
    return source.lift(new TakeUntilOperator(notifier));
  };
}

exports.takeUntil = takeUntil;

var TakeUntilOperator = function () {
  function TakeUntilOperator(notifier) {
    this.notifier = notifier;
  }

  TakeUntilOperator.prototype.call = function (subscriber, source) {
    var takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
    var notifierSubscription = subscribeToResult_1.subscribeToResult(takeUntilSubscriber, this.notifier);

    if (notifierSubscription && !takeUntilSubscriber.seenValue) {
      takeUntilSubscriber.add(notifierSubscription);
      return source.subscribe(takeUntilSubscriber);
    }

    return takeUntilSubscriber;
  };

  return TakeUntilOperator;
}();

var TakeUntilSubscriber = function (_super) {
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

  TakeUntilSubscriber.prototype.notifyComplete = function () {};

  return TakeUntilSubscriber;
}(OuterSubscriber_1.OuterSubscriber);

},{"../OuterSubscriber":10,"../util/subscribeToResult":197}],134:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = require("../Subscriber");

function takeWhile(predicate, inclusive) {
  if (inclusive === void 0) {
    inclusive = false;
  }

  return function (source) {
    return source.lift(new TakeWhileOperator(predicate, inclusive));
  };
}

exports.takeWhile = takeWhile;

var TakeWhileOperator = function () {
  function TakeWhileOperator(predicate, inclusive) {
    this.predicate = predicate;
    this.inclusive = inclusive;
  }

  TakeWhileOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new TakeWhileSubscriber(subscriber, this.predicate, this.inclusive));
  };

  return TakeWhileOperator;
}();

var TakeWhileSubscriber = function (_super) {
  __extends(TakeWhileSubscriber, _super);

  function TakeWhileSubscriber(destination, predicate, inclusive) {
    var _this = _super.call(this, destination) || this;

    _this.predicate = predicate;
    _this.inclusive = inclusive;
    _this.index = 0;
    return _this;
  }

  TakeWhileSubscriber.prototype._next = function (value) {
    var destination = this.destination;
    var result;

    try {
      result = this.predicate(value, this.index++);
    } catch (err) {
      destination.error(err);
      return;
    }

    this.nextOrComplete(value, result);
  };

  TakeWhileSubscriber.prototype.nextOrComplete = function (value, predicateResult) {
    var destination = this.destination;

    if (Boolean(predicateResult)) {
      destination.next(value);
    } else {
      if (this.inclusive) {
        destination.next(value);
      }

      destination.complete();
    }
  };

  return TakeWhileSubscriber;
}(Subscriber_1.Subscriber);

},{"../Subscriber":15}],135:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = require("../Subscriber");

var noop_1 = require("../util/noop");

var isFunction_1 = require("../util/isFunction");

function tap(nextOrObserver, error, complete) {
  return function tapOperatorFunction(source) {
    return source.lift(new DoOperator(nextOrObserver, error, complete));
  };
}

exports.tap = tap;

var DoOperator = function () {
  function DoOperator(nextOrObserver, error, complete) {
    this.nextOrObserver = nextOrObserver;
    this.error = error;
    this.complete = complete;
  }

  DoOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new TapSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
  };

  return DoOperator;
}();

var TapSubscriber = function (_super) {
  __extends(TapSubscriber, _super);

  function TapSubscriber(destination, observerOrNext, error, complete) {
    var _this = _super.call(this, destination) || this;

    _this._tapNext = noop_1.noop;
    _this._tapError = noop_1.noop;
    _this._tapComplete = noop_1.noop;
    _this._tapError = error || noop_1.noop;
    _this._tapComplete = complete || noop_1.noop;

    if (isFunction_1.isFunction(observerOrNext)) {
      _this._context = _this;
      _this._tapNext = observerOrNext;
    } else if (observerOrNext) {
      _this._context = observerOrNext;
      _this._tapNext = observerOrNext.next || noop_1.noop;
      _this._tapError = observerOrNext.error || noop_1.noop;
      _this._tapComplete = observerOrNext.complete || noop_1.noop;
    }

    return _this;
  }

  TapSubscriber.prototype._next = function (value) {
    try {
      this._tapNext.call(this._context, value);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    this.destination.next(value);
  };

  TapSubscriber.prototype._error = function (err) {
    try {
      this._tapError.call(this._context, err);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    this.destination.error(err);
  };

  TapSubscriber.prototype._complete = function () {
    try {
      this._tapComplete.call(this._context);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    return this.destination.complete();
  };

  return TapSubscriber;
}(Subscriber_1.Subscriber);

},{"../Subscriber":15,"../util/isFunction":181,"../util/noop":189}],136:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var OuterSubscriber_1 = require("../OuterSubscriber");

var subscribeToResult_1 = require("../util/subscribeToResult");

exports.defaultThrottleConfig = {
  leading: true,
  trailing: false
};

function throttle(durationSelector, config) {
  if (config === void 0) {
    config = exports.defaultThrottleConfig;
  }

  return function (source) {
    return source.lift(new ThrottleOperator(durationSelector, config.leading, config.trailing));
  };
}

exports.throttle = throttle;

var ThrottleOperator = function () {
  function ThrottleOperator(durationSelector, leading, trailing) {
    this.durationSelector = durationSelector;
    this.leading = leading;
    this.trailing = trailing;
  }

  ThrottleOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new ThrottleSubscriber(subscriber, this.durationSelector, this.leading, this.trailing));
  };

  return ThrottleOperator;
}();

var ThrottleSubscriber = function (_super) {
  __extends(ThrottleSubscriber, _super);

  function ThrottleSubscriber(destination, durationSelector, _leading, _trailing) {
    var _this = _super.call(this, destination) || this;

    _this.destination = destination;
    _this.durationSelector = durationSelector;
    _this._leading = _leading;
    _this._trailing = _trailing;
    _this._hasValue = false;
    return _this;
  }

  ThrottleSubscriber.prototype._next = function (value) {
    this._hasValue = true;
    this._sendValue = value;

    if (!this._throttled) {
      if (this._leading) {
        this.send();
      } else {
        this.throttle(value);
      }
    }
  };

  ThrottleSubscriber.prototype.send = function () {
    var _a = this,
        _hasValue = _a._hasValue,
        _sendValue = _a._sendValue;

    if (_hasValue) {
      this.destination.next(_sendValue);
      this.throttle(_sendValue);
    }

    this._hasValue = false;
    this._sendValue = null;
  };

  ThrottleSubscriber.prototype.throttle = function (value) {
    var duration = this.tryDurationSelector(value);

    if (!!duration) {
      this.add(this._throttled = subscribeToResult_1.subscribeToResult(this, duration));
    }
  };

  ThrottleSubscriber.prototype.tryDurationSelector = function (value) {
    try {
      return this.durationSelector(value);
    } catch (err) {
      this.destination.error(err);
      return null;
    }
  };

  ThrottleSubscriber.prototype.throttlingDone = function () {
    var _a = this,
        _throttled = _a._throttled,
        _trailing = _a._trailing;

    if (_throttled) {
      _throttled.unsubscribe();
    }

    this._throttled = null;

    if (_trailing) {
      this.send();
    }
  };

  ThrottleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.throttlingDone();
  };

  ThrottleSubscriber.prototype.notifyComplete = function () {
    this.throttlingDone();
  };

  return ThrottleSubscriber;
}(OuterSubscriber_1.OuterSubscriber);

},{"../OuterSubscriber":10,"../util/subscribeToResult":197}],137:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = require("../Subscriber");

var async_1 = require("../scheduler/async");

var throttle_1 = require("./throttle");

function throttleTime(duration, scheduler, config) {
  if (scheduler === void 0) {
    scheduler = async_1.async;
  }

  if (config === void 0) {
    config = throttle_1.defaultThrottleConfig;
  }

  return function (source) {
    return source.lift(new ThrottleTimeOperator(duration, scheduler, config.leading, config.trailing));
  };
}

exports.throttleTime = throttleTime;

var ThrottleTimeOperator = function () {
  function ThrottleTimeOperator(duration, scheduler, leading, trailing) {
    this.duration = duration;
    this.scheduler = scheduler;
    this.leading = leading;
    this.trailing = trailing;
  }

  ThrottleTimeOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new ThrottleTimeSubscriber(subscriber, this.duration, this.scheduler, this.leading, this.trailing));
  };

  return ThrottleTimeOperator;
}();

var ThrottleTimeSubscriber = function (_super) {
  __extends(ThrottleTimeSubscriber, _super);

  function ThrottleTimeSubscriber(destination, duration, scheduler, leading, trailing) {
    var _this = _super.call(this, destination) || this;

    _this.duration = duration;
    _this.scheduler = scheduler;
    _this.leading = leading;
    _this.trailing = trailing;
    _this._hasTrailingValue = false;
    _this._trailingValue = null;
    return _this;
  }

  ThrottleTimeSubscriber.prototype._next = function (value) {
    if (this.throttled) {
      if (this.trailing) {
        this._trailingValue = value;
        this._hasTrailingValue = true;
      }
    } else {
      this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.duration, {
        subscriber: this
      }));

      if (this.leading) {
        this.destination.next(value);
      }
    }
  };

  ThrottleTimeSubscriber.prototype._complete = function () {
    if (this._hasTrailingValue) {
      this.destination.next(this._trailingValue);
      this.destination.complete();
    } else {
      this.destination.complete();
    }
  };

  ThrottleTimeSubscriber.prototype.clearThrottle = function () {
    var throttled = this.throttled;

    if (throttled) {
      if (this.trailing && this._hasTrailingValue) {
        this.destination.next(this._trailingValue);
        this._trailingValue = null;
        this._hasTrailingValue = false;
      }

      throttled.unsubscribe();
      this.remove(throttled);
      this.throttled = null;
    }
  };

  return ThrottleTimeSubscriber;
}(Subscriber_1.Subscriber);

function dispatchNext(arg) {
  var subscriber = arg.subscriber;
  subscriber.clearThrottle();
}

},{"../Subscriber":15,"../scheduler/async":164,"./throttle":136}],138:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var tap_1 = require("./tap");

var EmptyError_1 = require("../util/EmptyError");

exports.throwIfEmpty = function (errorFactory) {
  if (errorFactory === void 0) {
    errorFactory = defaultErrorFactory;
  }

  return tap_1.tap({
    hasValue: false,
    next: function next() {
      this.hasValue = true;
    },
    complete: function complete() {
      if (!this.hasValue) {
        throw errorFactory();
      }
    }
  });
};

function defaultErrorFactory() {
  return new EmptyError_1.EmptyError();
}

},{"../util/EmptyError":170,"./tap":135}],139:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var async_1 = require("../scheduler/async");

var scan_1 = require("./scan");

var defer_1 = require("../observable/defer");

var map_1 = require("./map");

function timeInterval(scheduler) {
  if (scheduler === void 0) {
    scheduler = async_1.async;
  }

  return function (source) {
    return defer_1.defer(function () {
      return source.pipe(scan_1.scan(function (_a, value) {
        var current = _a.current;
        return {
          value: value,
          current: scheduler.now(),
          last: current
        };
      }, {
        current: scheduler.now(),
        value: undefined,
        last: undefined
      }), map_1.map(function (_a) {
        var current = _a.current,
            last = _a.last,
            value = _a.value;
        return new TimeInterval(value, current - last);
      }));
    });
  };
}

exports.timeInterval = timeInterval;

var TimeInterval = function () {
  function TimeInterval(value, interval) {
    this.value = value;
    this.interval = interval;
  }

  return TimeInterval;
}();

exports.TimeInterval = TimeInterval;

},{"../observable/defer":24,"../scheduler/async":164,"./map":88,"./scan":117}],140:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var async_1 = require("../scheduler/async");

var TimeoutError_1 = require("../util/TimeoutError");

var timeoutWith_1 = require("./timeoutWith");

var throwError_1 = require("../observable/throwError");

function timeout(due, scheduler) {
  if (scheduler === void 0) {
    scheduler = async_1.async;
  }

  return timeoutWith_1.timeoutWith(due, throwError_1.throwError(new TimeoutError_1.TimeoutError()), scheduler);
}

exports.timeout = timeout;

},{"../observable/throwError":45,"../scheduler/async":164,"../util/TimeoutError":173,"./timeoutWith":141}],141:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var async_1 = require("../scheduler/async");

var isDate_1 = require("../util/isDate");

var OuterSubscriber_1 = require("../OuterSubscriber");

var subscribeToResult_1 = require("../util/subscribeToResult");

function timeoutWith(due, withObservable, scheduler) {
  if (scheduler === void 0) {
    scheduler = async_1.async;
  }

  return function (source) {
    var absoluteTimeout = isDate_1.isDate(due);
    var waitFor = absoluteTimeout ? +due - scheduler.now() : Math.abs(due);
    return source.lift(new TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler));
  };
}

exports.timeoutWith = timeoutWith;

var TimeoutWithOperator = function () {
  function TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler) {
    this.waitFor = waitFor;
    this.absoluteTimeout = absoluteTimeout;
    this.withObservable = withObservable;
    this.scheduler = scheduler;
  }

  TimeoutWithOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new TimeoutWithSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler));
  };

  return TimeoutWithOperator;
}();

var TimeoutWithSubscriber = function (_super) {
  __extends(TimeoutWithSubscriber, _super);

  function TimeoutWithSubscriber(destination, absoluteTimeout, waitFor, withObservable, scheduler) {
    var _this = _super.call(this, destination) || this;

    _this.absoluteTimeout = absoluteTimeout;
    _this.waitFor = waitFor;
    _this.withObservable = withObservable;
    _this.scheduler = scheduler;
    _this.action = null;

    _this.scheduleTimeout();

    return _this;
  }

  TimeoutWithSubscriber.dispatchTimeout = function (subscriber) {
    var withObservable = subscriber.withObservable;

    subscriber._unsubscribeAndRecycle();

    subscriber.add(subscribeToResult_1.subscribeToResult(subscriber, withObservable));
  };

  TimeoutWithSubscriber.prototype.scheduleTimeout = function () {
    var action = this.action;

    if (action) {
      this.action = action.schedule(this, this.waitFor);
    } else {
      this.add(this.action = this.scheduler.schedule(TimeoutWithSubscriber.dispatchTimeout, this.waitFor, this));
    }
  };

  TimeoutWithSubscriber.prototype._next = function (value) {
    if (!this.absoluteTimeout) {
      this.scheduleTimeout();
    }

    _super.prototype._next.call(this, value);
  };

  TimeoutWithSubscriber.prototype._unsubscribe = function () {
    this.action = null;
    this.scheduler = null;
    this.withObservable = null;
  };

  return TimeoutWithSubscriber;
}(OuterSubscriber_1.OuterSubscriber);

},{"../OuterSubscriber":10,"../scheduler/async":164,"../util/isDate":180,"../util/subscribeToResult":197}],142:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var async_1 = require("../scheduler/async");

var map_1 = require("./map");

function timestamp(scheduler) {
  if (scheduler === void 0) {
    scheduler = async_1.async;
  }

  return map_1.map(function (value) {
    return new Timestamp(value, scheduler.now());
  });
}

exports.timestamp = timestamp;

var Timestamp = function () {
  function Timestamp(value, timestamp) {
    this.value = value;
    this.timestamp = timestamp;
  }

  return Timestamp;
}();

exports.Timestamp = Timestamp;

},{"../scheduler/async":164,"./map":88}],143:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var reduce_1 = require("./reduce");

function toArrayReducer(arr, item, index) {
  if (index === 0) {
    return [item];
  }

  arr.push(item);
  return arr;
}

function toArray() {
  return reduce_1.reduce(toArrayReducer, []);
}

exports.toArray = toArray;

},{"./reduce":109}],144:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subject_1 = require("../Subject");

var OuterSubscriber_1 = require("../OuterSubscriber");

var subscribeToResult_1 = require("../util/subscribeToResult");

function window(windowBoundaries) {
  return function windowOperatorFunction(source) {
    return source.lift(new WindowOperator(windowBoundaries));
  };
}

exports.window = window;

var WindowOperator = function () {
  function WindowOperator(windowBoundaries) {
    this.windowBoundaries = windowBoundaries;
  }

  WindowOperator.prototype.call = function (subscriber, source) {
    var windowSubscriber = new WindowSubscriber(subscriber);
    var sourceSubscription = source.subscribe(windowSubscriber);

    if (!sourceSubscription.closed) {
      windowSubscriber.add(subscribeToResult_1.subscribeToResult(windowSubscriber, this.windowBoundaries));
    }

    return sourceSubscription;
  };

  return WindowOperator;
}();

var WindowSubscriber = function (_super) {
  __extends(WindowSubscriber, _super);

  function WindowSubscriber(destination) {
    var _this = _super.call(this, destination) || this;

    _this.window = new Subject_1.Subject();
    destination.next(_this.window);
    return _this;
  }

  WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.openWindow();
  };

  WindowSubscriber.prototype.notifyError = function (error, innerSub) {
    this._error(error);
  };

  WindowSubscriber.prototype.notifyComplete = function (innerSub) {
    this._complete();
  };

  WindowSubscriber.prototype._next = function (value) {
    this.window.next(value);
  };

  WindowSubscriber.prototype._error = function (err) {
    this.window.error(err);
    this.destination.error(err);
  };

  WindowSubscriber.prototype._complete = function () {
    this.window.complete();
    this.destination.complete();
  };

  WindowSubscriber.prototype._unsubscribe = function () {
    this.window = null;
  };

  WindowSubscriber.prototype.openWindow = function () {
    var prevWindow = this.window;

    if (prevWindow) {
      prevWindow.complete();
    }

    var destination = this.destination;
    var newWindow = this.window = new Subject_1.Subject();
    destination.next(newWindow);
  };

  return WindowSubscriber;
}(OuterSubscriber_1.OuterSubscriber);

},{"../OuterSubscriber":10,"../Subject":13,"../util/subscribeToResult":197}],145:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = require("../Subscriber");

var Subject_1 = require("../Subject");

function windowCount(windowSize, startWindowEvery) {
  if (startWindowEvery === void 0) {
    startWindowEvery = 0;
  }

  return function windowCountOperatorFunction(source) {
    return source.lift(new WindowCountOperator(windowSize, startWindowEvery));
  };
}

exports.windowCount = windowCount;

var WindowCountOperator = function () {
  function WindowCountOperator(windowSize, startWindowEvery) {
    this.windowSize = windowSize;
    this.startWindowEvery = startWindowEvery;
  }

  WindowCountOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new WindowCountSubscriber(subscriber, this.windowSize, this.startWindowEvery));
  };

  return WindowCountOperator;
}();

var WindowCountSubscriber = function (_super) {
  __extends(WindowCountSubscriber, _super);

  function WindowCountSubscriber(destination, windowSize, startWindowEvery) {
    var _this = _super.call(this, destination) || this;

    _this.destination = destination;
    _this.windowSize = windowSize;
    _this.startWindowEvery = startWindowEvery;
    _this.windows = [new Subject_1.Subject()];
    _this.count = 0;
    destination.next(_this.windows[0]);
    return _this;
  }

  WindowCountSubscriber.prototype._next = function (value) {
    var startWindowEvery = this.startWindowEvery > 0 ? this.startWindowEvery : this.windowSize;
    var destination = this.destination;
    var windowSize = this.windowSize;
    var windows = this.windows;
    var len = windows.length;

    for (var i = 0; i < len && !this.closed; i++) {
      windows[i].next(value);
    }

    var c = this.count - windowSize + 1;

    if (c >= 0 && c % startWindowEvery === 0 && !this.closed) {
      windows.shift().complete();
    }

    if (++this.count % startWindowEvery === 0 && !this.closed) {
      var window_1 = new Subject_1.Subject();
      windows.push(window_1);
      destination.next(window_1);
    }
  };

  WindowCountSubscriber.prototype._error = function (err) {
    var windows = this.windows;

    if (windows) {
      while (windows.length > 0 && !this.closed) {
        windows.shift().error(err);
      }
    }

    this.destination.error(err);
  };

  WindowCountSubscriber.prototype._complete = function () {
    var windows = this.windows;

    if (windows) {
      while (windows.length > 0 && !this.closed) {
        windows.shift().complete();
      }
    }

    this.destination.complete();
  };

  WindowCountSubscriber.prototype._unsubscribe = function () {
    this.count = 0;
    this.windows = null;
  };

  return WindowCountSubscriber;
}(Subscriber_1.Subscriber);

},{"../Subject":13,"../Subscriber":15}],146:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subject_1 = require("../Subject");

var async_1 = require("../scheduler/async");

var Subscriber_1 = require("../Subscriber");

var isNumeric_1 = require("../util/isNumeric");

var isScheduler_1 = require("../util/isScheduler");

function windowTime(windowTimeSpan) {
  var scheduler = async_1.async;
  var windowCreationInterval = null;
  var maxWindowSize = Number.POSITIVE_INFINITY;

  if (isScheduler_1.isScheduler(arguments[3])) {
    scheduler = arguments[3];
  }

  if (isScheduler_1.isScheduler(arguments[2])) {
    scheduler = arguments[2];
  } else if (isNumeric_1.isNumeric(arguments[2])) {
    maxWindowSize = arguments[2];
  }

  if (isScheduler_1.isScheduler(arguments[1])) {
    scheduler = arguments[1];
  } else if (isNumeric_1.isNumeric(arguments[1])) {
    windowCreationInterval = arguments[1];
  }

  return function windowTimeOperatorFunction(source) {
    return source.lift(new WindowTimeOperator(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler));
  };
}

exports.windowTime = windowTime;

var WindowTimeOperator = function () {
  function WindowTimeOperator(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
    this.windowTimeSpan = windowTimeSpan;
    this.windowCreationInterval = windowCreationInterval;
    this.maxWindowSize = maxWindowSize;
    this.scheduler = scheduler;
  }

  WindowTimeOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new WindowTimeSubscriber(subscriber, this.windowTimeSpan, this.windowCreationInterval, this.maxWindowSize, this.scheduler));
  };

  return WindowTimeOperator;
}();

var CountedSubject = function (_super) {
  __extends(CountedSubject, _super);

  function CountedSubject() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this._numberOfNextedValues = 0;
    return _this;
  }

  CountedSubject.prototype.next = function (value) {
    this._numberOfNextedValues++;

    _super.prototype.next.call(this, value);
  };

  Object.defineProperty(CountedSubject.prototype, "numberOfNextedValues", {
    get: function get() {
      return this._numberOfNextedValues;
    },
    enumerable: true,
    configurable: true
  });
  return CountedSubject;
}(Subject_1.Subject);

var WindowTimeSubscriber = function (_super) {
  __extends(WindowTimeSubscriber, _super);

  function WindowTimeSubscriber(destination, windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
    var _this = _super.call(this, destination) || this;

    _this.destination = destination;
    _this.windowTimeSpan = windowTimeSpan;
    _this.windowCreationInterval = windowCreationInterval;
    _this.maxWindowSize = maxWindowSize;
    _this.scheduler = scheduler;
    _this.windows = [];

    var window = _this.openWindow();

    if (windowCreationInterval !== null && windowCreationInterval >= 0) {
      var closeState = {
        subscriber: _this,
        window: window,
        context: null
      };
      var creationState = {
        windowTimeSpan: windowTimeSpan,
        windowCreationInterval: windowCreationInterval,
        subscriber: _this,
        scheduler: scheduler
      };

      _this.add(scheduler.schedule(dispatchWindowClose, windowTimeSpan, closeState));

      _this.add(scheduler.schedule(dispatchWindowCreation, windowCreationInterval, creationState));
    } else {
      var timeSpanOnlyState = {
        subscriber: _this,
        window: window,
        windowTimeSpan: windowTimeSpan
      };

      _this.add(scheduler.schedule(dispatchWindowTimeSpanOnly, windowTimeSpan, timeSpanOnlyState));
    }

    return _this;
  }

  WindowTimeSubscriber.prototype._next = function (value) {
    var windows = this.windows;
    var len = windows.length;

    for (var i = 0; i < len; i++) {
      var window_1 = windows[i];

      if (!window_1.closed) {
        window_1.next(value);

        if (window_1.numberOfNextedValues >= this.maxWindowSize) {
          this.closeWindow(window_1);
        }
      }
    }
  };

  WindowTimeSubscriber.prototype._error = function (err) {
    var windows = this.windows;

    while (windows.length > 0) {
      windows.shift().error(err);
    }

    this.destination.error(err);
  };

  WindowTimeSubscriber.prototype._complete = function () {
    var windows = this.windows;

    while (windows.length > 0) {
      var window_2 = windows.shift();

      if (!window_2.closed) {
        window_2.complete();
      }
    }

    this.destination.complete();
  };

  WindowTimeSubscriber.prototype.openWindow = function () {
    var window = new CountedSubject();
    this.windows.push(window);
    var destination = this.destination;
    destination.next(window);
    return window;
  };

  WindowTimeSubscriber.prototype.closeWindow = function (window) {
    window.complete();
    var windows = this.windows;
    windows.splice(windows.indexOf(window), 1);
  };

  return WindowTimeSubscriber;
}(Subscriber_1.Subscriber);

function dispatchWindowTimeSpanOnly(state) {
  var subscriber = state.subscriber,
      windowTimeSpan = state.windowTimeSpan,
      window = state.window;

  if (window) {
    subscriber.closeWindow(window);
  }

  state.window = subscriber.openWindow();
  this.schedule(state, windowTimeSpan);
}

function dispatchWindowCreation(state) {
  var windowTimeSpan = state.windowTimeSpan,
      subscriber = state.subscriber,
      scheduler = state.scheduler,
      windowCreationInterval = state.windowCreationInterval;
  var window = subscriber.openWindow();
  var action = this;
  var context = {
    action: action,
    subscription: null
  };
  var timeSpanState = {
    subscriber: subscriber,
    window: window,
    context: context
  };
  context.subscription = scheduler.schedule(dispatchWindowClose, windowTimeSpan, timeSpanState);
  action.add(context.subscription);
  action.schedule(state, windowCreationInterval);
}

function dispatchWindowClose(state) {
  var subscriber = state.subscriber,
      window = state.window,
      context = state.context;

  if (context && context.action && context.subscription) {
    context.action.remove(context.subscription);
  }

  subscriber.closeWindow(window);
}

},{"../Subject":13,"../Subscriber":15,"../scheduler/async":164,"../util/isNumeric":184,"../util/isScheduler":188}],147:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subject_1 = require("../Subject");

var Subscription_1 = require("../Subscription");

var OuterSubscriber_1 = require("../OuterSubscriber");

var subscribeToResult_1 = require("../util/subscribeToResult");

function windowToggle(openings, closingSelector) {
  return function (source) {
    return source.lift(new WindowToggleOperator(openings, closingSelector));
  };
}

exports.windowToggle = windowToggle;

var WindowToggleOperator = function () {
  function WindowToggleOperator(openings, closingSelector) {
    this.openings = openings;
    this.closingSelector = closingSelector;
  }

  WindowToggleOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new WindowToggleSubscriber(subscriber, this.openings, this.closingSelector));
  };

  return WindowToggleOperator;
}();

var WindowToggleSubscriber = function (_super) {
  __extends(WindowToggleSubscriber, _super);

  function WindowToggleSubscriber(destination, openings, closingSelector) {
    var _this = _super.call(this, destination) || this;

    _this.openings = openings;
    _this.closingSelector = closingSelector;
    _this.contexts = [];

    _this.add(_this.openSubscription = subscribeToResult_1.subscribeToResult(_this, openings, openings));

    return _this;
  }

  WindowToggleSubscriber.prototype._next = function (value) {
    var contexts = this.contexts;

    if (contexts) {
      var len = contexts.length;

      for (var i = 0; i < len; i++) {
        contexts[i].window.next(value);
      }
    }
  };

  WindowToggleSubscriber.prototype._error = function (err) {
    var contexts = this.contexts;
    this.contexts = null;

    if (contexts) {
      var len = contexts.length;
      var index = -1;

      while (++index < len) {
        var context_1 = contexts[index];
        context_1.window.error(err);
        context_1.subscription.unsubscribe();
      }
    }

    _super.prototype._error.call(this, err);
  };

  WindowToggleSubscriber.prototype._complete = function () {
    var contexts = this.contexts;
    this.contexts = null;

    if (contexts) {
      var len = contexts.length;
      var index = -1;

      while (++index < len) {
        var context_2 = contexts[index];
        context_2.window.complete();
        context_2.subscription.unsubscribe();
      }
    }

    _super.prototype._complete.call(this);
  };

  WindowToggleSubscriber.prototype._unsubscribe = function () {
    var contexts = this.contexts;
    this.contexts = null;

    if (contexts) {
      var len = contexts.length;
      var index = -1;

      while (++index < len) {
        var context_3 = contexts[index];
        context_3.window.unsubscribe();
        context_3.subscription.unsubscribe();
      }
    }
  };

  WindowToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    if (outerValue === this.openings) {
      var closingNotifier = void 0;

      try {
        var closingSelector = this.closingSelector;
        closingNotifier = closingSelector(innerValue);
      } catch (e) {
        return this.error(e);
      }

      var window_1 = new Subject_1.Subject();
      var subscription = new Subscription_1.Subscription();
      var context_4 = {
        window: window_1,
        subscription: subscription
      };
      this.contexts.push(context_4);
      var innerSubscription = subscribeToResult_1.subscribeToResult(this, closingNotifier, context_4);

      if (innerSubscription.closed) {
        this.closeWindow(this.contexts.length - 1);
      } else {
        innerSubscription.context = context_4;
        subscription.add(innerSubscription);
      }

      this.destination.next(window_1);
    } else {
      this.closeWindow(this.contexts.indexOf(outerValue));
    }
  };

  WindowToggleSubscriber.prototype.notifyError = function (err) {
    this.error(err);
  };

  WindowToggleSubscriber.prototype.notifyComplete = function (inner) {
    if (inner !== this.openSubscription) {
      this.closeWindow(this.contexts.indexOf(inner.context));
    }
  };

  WindowToggleSubscriber.prototype.closeWindow = function (index) {
    if (index === -1) {
      return;
    }

    var contexts = this.contexts;
    var context = contexts[index];
    var window = context.window,
        subscription = context.subscription;
    contexts.splice(index, 1);
    window.complete();
    subscription.unsubscribe();
  };

  return WindowToggleSubscriber;
}(OuterSubscriber_1.OuterSubscriber);

},{"../OuterSubscriber":10,"../Subject":13,"../Subscription":16,"../util/subscribeToResult":197}],148:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subject_1 = require("../Subject");

var OuterSubscriber_1 = require("../OuterSubscriber");

var subscribeToResult_1 = require("../util/subscribeToResult");

function windowWhen(closingSelector) {
  return function windowWhenOperatorFunction(source) {
    return source.lift(new WindowOperator(closingSelector));
  };
}

exports.windowWhen = windowWhen;

var WindowOperator = function () {
  function WindowOperator(closingSelector) {
    this.closingSelector = closingSelector;
  }

  WindowOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new WindowSubscriber(subscriber, this.closingSelector));
  };

  return WindowOperator;
}();

var WindowSubscriber = function (_super) {
  __extends(WindowSubscriber, _super);

  function WindowSubscriber(destination, closingSelector) {
    var _this = _super.call(this, destination) || this;

    _this.destination = destination;
    _this.closingSelector = closingSelector;

    _this.openWindow();

    return _this;
  }

  WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.openWindow(innerSub);
  };

  WindowSubscriber.prototype.notifyError = function (error, innerSub) {
    this._error(error);
  };

  WindowSubscriber.prototype.notifyComplete = function (innerSub) {
    this.openWindow(innerSub);
  };

  WindowSubscriber.prototype._next = function (value) {
    this.window.next(value);
  };

  WindowSubscriber.prototype._error = function (err) {
    this.window.error(err);
    this.destination.error(err);
    this.unsubscribeClosingNotification();
  };

  WindowSubscriber.prototype._complete = function () {
    this.window.complete();
    this.destination.complete();
    this.unsubscribeClosingNotification();
  };

  WindowSubscriber.prototype.unsubscribeClosingNotification = function () {
    if (this.closingNotification) {
      this.closingNotification.unsubscribe();
    }
  };

  WindowSubscriber.prototype.openWindow = function (innerSub) {
    if (innerSub === void 0) {
      innerSub = null;
    }

    if (innerSub) {
      this.remove(innerSub);
      innerSub.unsubscribe();
    }

    var prevWindow = this.window;

    if (prevWindow) {
      prevWindow.complete();
    }

    var window = this.window = new Subject_1.Subject();
    this.destination.next(window);
    var closingNotifier;

    try {
      var closingSelector = this.closingSelector;
      closingNotifier = closingSelector();
    } catch (e) {
      this.destination.error(e);
      this.window.error(e);
      return;
    }

    this.add(this.closingNotification = subscribeToResult_1.subscribeToResult(this, closingNotifier));
  };

  return WindowSubscriber;
}(OuterSubscriber_1.OuterSubscriber);

},{"../OuterSubscriber":10,"../Subject":13,"../util/subscribeToResult":197}],149:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var OuterSubscriber_1 = require("../OuterSubscriber");

var subscribeToResult_1 = require("../util/subscribeToResult");

function withLatestFrom() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  return function (source) {
    var project;

    if (typeof args[args.length - 1] === 'function') {
      project = args.pop();
    }

    var observables = args;
    return source.lift(new WithLatestFromOperator(observables, project));
  };
}

exports.withLatestFrom = withLatestFrom;

var WithLatestFromOperator = function () {
  function WithLatestFromOperator(observables, project) {
    this.observables = observables;
    this.project = project;
  }

  WithLatestFromOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
  };

  return WithLatestFromOperator;
}();

var WithLatestFromSubscriber = function (_super) {
  __extends(WithLatestFromSubscriber, _super);

  function WithLatestFromSubscriber(destination, observables, project) {
    var _this = _super.call(this, destination) || this;

    _this.observables = observables;
    _this.project = project;
    _this.toRespond = [];
    var len = observables.length;
    _this.values = new Array(len);

    for (var i = 0; i < len; i++) {
      _this.toRespond.push(i);
    }

    for (var i = 0; i < len; i++) {
      var observable = observables[i];

      _this.add(subscribeToResult_1.subscribeToResult(_this, observable, observable, i));
    }

    return _this;
  }

  WithLatestFromSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.values[outerIndex] = innerValue;
    var toRespond = this.toRespond;

    if (toRespond.length > 0) {
      var found = toRespond.indexOf(outerIndex);

      if (found !== -1) {
        toRespond.splice(found, 1);
      }
    }
  };

  WithLatestFromSubscriber.prototype.notifyComplete = function () {};

  WithLatestFromSubscriber.prototype._next = function (value) {
    if (this.toRespond.length === 0) {
      var args = [value].concat(this.values);

      if (this.project) {
        this._tryProject(args);
      } else {
        this.destination.next(args);
      }
    }
  };

  WithLatestFromSubscriber.prototype._tryProject = function (args) {
    var result;

    try {
      result = this.project.apply(this, args);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    this.destination.next(result);
  };

  return WithLatestFromSubscriber;
}(OuterSubscriber_1.OuterSubscriber);

},{"../OuterSubscriber":10,"../util/subscribeToResult":197}],150:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var zip_1 = require("../observable/zip");

function zip() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  return function zipOperatorFunction(source) {
    return source.lift.call(zip_1.zip.apply(void 0, [source].concat(observables)));
  };
}

exports.zip = zip;

},{"../observable/zip":48}],151:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var zip_1 = require("../observable/zip");

function zipAll(project) {
  return function (source) {
    return source.lift(new zip_1.ZipOperator(project));
  };
}

exports.zipAll = zipAll;

},{"../observable/zip":48}],152:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscription_1 = require("../Subscription");

var Action = function (_super) {
  __extends(Action, _super);

  function Action(scheduler, work) {
    return _super.call(this) || this;
  }

  Action.prototype.schedule = function (state, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    return this;
  };

  return Action;
}(Subscription_1.Subscription);

exports.Action = Action;

},{"../Subscription":16}],153:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var AsyncAction_1 = require("./AsyncAction");

var AnimationFrameAction = function (_super) {
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
    return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(function () {
      return scheduler.flush(null);
    }));
  };

  AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
      return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
    }

    if (scheduler.actions.length === 0) {
      cancelAnimationFrame(id);
      scheduler.scheduled = undefined;
    }

    return undefined;
  };

  return AnimationFrameAction;
}(AsyncAction_1.AsyncAction);

exports.AnimationFrameAction = AnimationFrameAction;

},{"./AsyncAction":157}],154:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var AsyncScheduler_1 = require("./AsyncScheduler");

var AnimationFrameScheduler = function (_super) {
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
}(AsyncScheduler_1.AsyncScheduler);

exports.AnimationFrameScheduler = AnimationFrameScheduler;

},{"./AsyncScheduler":158}],155:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Immediate_1 = require("../util/Immediate");

var AsyncAction_1 = require("./AsyncAction");

var AsapAction = function (_super) {
  __extends(AsapAction, _super);

  function AsapAction(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;

    _this.scheduler = scheduler;
    _this.work = work;
    return _this;
  }

  AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay !== null && delay > 0) {
      return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
    }

    scheduler.actions.push(this);
    return scheduler.scheduled || (scheduler.scheduled = Immediate_1.Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
  };

  AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
      return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
    }

    if (scheduler.actions.length === 0) {
      Immediate_1.Immediate.clearImmediate(id);
      scheduler.scheduled = undefined;
    }

    return undefined;
  };

  return AsapAction;
}(AsyncAction_1.AsyncAction);

exports.AsapAction = AsapAction;

},{"../util/Immediate":171,"./AsyncAction":157}],156:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var AsyncScheduler_1 = require("./AsyncScheduler");

var AsapScheduler = function (_super) {
  __extends(AsapScheduler, _super);

  function AsapScheduler() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AsapScheduler.prototype.flush = function (action) {
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

  return AsapScheduler;
}(AsyncScheduler_1.AsyncScheduler);

exports.AsapScheduler = AsapScheduler;

},{"./AsyncScheduler":158}],157:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Action_1 = require("./Action");

var AsyncAction = function (_super) {
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
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  };

  AsyncAction.prototype._execute = function (state, delay) {
    var errored = false;
    var errorValue = undefined;

    try {
      this.work(state);
    } catch (e) {
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
}(Action_1.Action);

exports.AsyncAction = AsyncAction;

},{"./Action":152}],158:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Scheduler_1 = require("../Scheduler");

var AsyncScheduler = function (_super) {
  __extends(AsyncScheduler, _super);

  function AsyncScheduler(SchedulerAction, now) {
    if (now === void 0) {
      now = Scheduler_1.Scheduler.now;
    }

    var _this = _super.call(this, SchedulerAction, function () {
      if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
        return AsyncScheduler.delegate.now();
      } else {
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
    } else {
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
}(Scheduler_1.Scheduler);

exports.AsyncScheduler = AsyncScheduler;

},{"../Scheduler":12}],159:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var AsyncAction_1 = require("./AsyncAction");

var QueueAction = function (_super) {
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
    return delay > 0 || this.closed ? _super.prototype.execute.call(this, state, delay) : this._execute(state, delay);
  };

  QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
      return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
    }

    return scheduler.flush(this);
  };

  return QueueAction;
}(AsyncAction_1.AsyncAction);

exports.QueueAction = QueueAction;

},{"./AsyncAction":157}],160:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var AsyncScheduler_1 = require("./AsyncScheduler");

var QueueScheduler = function (_super) {
  __extends(QueueScheduler, _super);

  function QueueScheduler() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return QueueScheduler;
}(AsyncScheduler_1.AsyncScheduler);

exports.QueueScheduler = QueueScheduler;

},{"./AsyncScheduler":158}],161:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var AsyncAction_1 = require("./AsyncAction");

var AsyncScheduler_1 = require("./AsyncScheduler");

var VirtualTimeScheduler = function (_super) {
  __extends(VirtualTimeScheduler, _super);

  function VirtualTimeScheduler(SchedulerAction, maxFrames) {
    if (SchedulerAction === void 0) {
      SchedulerAction = VirtualAction;
    }

    if (maxFrames === void 0) {
      maxFrames = Number.POSITIVE_INFINITY;
    }

    var _this = _super.call(this, SchedulerAction, function () {
      return _this.frame;
    }) || this;

    _this.maxFrames = maxFrames;
    _this.frame = 0;
    _this.index = -1;
    return _this;
  }

  VirtualTimeScheduler.prototype.flush = function () {
    var _a = this,
        actions = _a.actions,
        maxFrames = _a.maxFrames;

    var error, action;

    while ((action = actions[0]) && action.delay <= maxFrames) {
      actions.shift();
      this.frame = action.delay;

      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    }

    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }

      throw error;
    }
  };

  VirtualTimeScheduler.frameTimeFactor = 10;
  return VirtualTimeScheduler;
}(AsyncScheduler_1.AsyncScheduler);

exports.VirtualTimeScheduler = VirtualTimeScheduler;

var VirtualAction = function (_super) {
  __extends(VirtualAction, _super);

  function VirtualAction(scheduler, work, index) {
    if (index === void 0) {
      index = scheduler.index += 1;
    }

    var _this = _super.call(this, scheduler, work) || this;

    _this.scheduler = scheduler;
    _this.work = work;
    _this.index = index;
    _this.active = true;
    _this.index = scheduler.index = index;
    return _this;
  }

  VirtualAction.prototype.schedule = function (state, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (!this.id) {
      return _super.prototype.schedule.call(this, state, delay);
    }

    this.active = false;
    var action = new VirtualAction(this.scheduler, this.work);
    this.add(action);
    return action.schedule(state, delay);
  };

  VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    this.delay = scheduler.frame + delay;
    var actions = scheduler.actions;
    actions.push(this);
    actions.sort(VirtualAction.sortActions);
    return true;
  };

  VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    return undefined;
  };

  VirtualAction.prototype._execute = function (state, delay) {
    if (this.active === true) {
      return _super.prototype._execute.call(this, state, delay);
    }
  };

  VirtualAction.sortActions = function (a, b) {
    if (a.delay === b.delay) {
      if (a.index === b.index) {
        return 0;
      } else if (a.index > b.index) {
        return 1;
      } else {
        return -1;
      }
    } else if (a.delay > b.delay) {
      return 1;
    } else {
      return -1;
    }
  };

  return VirtualAction;
}(AsyncAction_1.AsyncAction);

exports.VirtualAction = VirtualAction;

},{"./AsyncAction":157,"./AsyncScheduler":158}],162:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var AnimationFrameAction_1 = require("./AnimationFrameAction");

var AnimationFrameScheduler_1 = require("./AnimationFrameScheduler");

exports.animationFrame = new AnimationFrameScheduler_1.AnimationFrameScheduler(AnimationFrameAction_1.AnimationFrameAction);

},{"./AnimationFrameAction":153,"./AnimationFrameScheduler":154}],163:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var AsapAction_1 = require("./AsapAction");

var AsapScheduler_1 = require("./AsapScheduler");

exports.asap = new AsapScheduler_1.AsapScheduler(AsapAction_1.AsapAction);

},{"./AsapAction":155,"./AsapScheduler":156}],164:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var AsyncAction_1 = require("./AsyncAction");

var AsyncScheduler_1 = require("./AsyncScheduler");

exports.async = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);

},{"./AsyncAction":157,"./AsyncScheduler":158}],165:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var QueueAction_1 = require("./QueueAction");

var QueueScheduler_1 = require("./QueueScheduler");

exports.queue = new QueueScheduler_1.QueueScheduler(QueueAction_1.QueueAction);

},{"./QueueAction":159,"./QueueScheduler":160}],166:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function getSymbolIterator() {
  if (typeof Symbol !== 'function' || !Symbol.iterator) {
    return '@@iterator';
  }

  return Symbol.iterator;
}

exports.getSymbolIterator = getSymbolIterator;
exports.iterator = getSymbolIterator();
exports.$$iterator = exports.iterator;

},{}],167:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observable = typeof Symbol === 'function' && Symbol.observable || '@@observable';

},{}],168:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rxSubscriber = typeof Symbol === 'function' ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random();
exports.$$rxSubscriber = exports.rxSubscriber;

},{}],169:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function ArgumentOutOfRangeErrorImpl() {
  Error.call(this);
  this.message = 'argument out of range';
  this.name = 'ArgumentOutOfRangeError';
  return this;
}

ArgumentOutOfRangeErrorImpl.prototype = Object.create(Error.prototype);
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;

},{}],170:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function EmptyErrorImpl() {
  Error.call(this);
  this.message = 'no elements in sequence';
  this.name = 'EmptyError';
  return this;
}

EmptyErrorImpl.prototype = Object.create(Error.prototype);
exports.EmptyError = EmptyErrorImpl;

},{}],171:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var nextHandle = 1;
var tasksByHandle = {};

function runIfPresent(handle) {
  var cb = tasksByHandle[handle];

  if (cb) {
    cb();
  }
}

exports.Immediate = {
  setImmediate: function setImmediate(cb) {
    var handle = nextHandle++;
    tasksByHandle[handle] = cb;
    Promise.resolve().then(function () {
      return runIfPresent(handle);
    });
    return handle;
  },
  clearImmediate: function clearImmediate(handle) {
    delete tasksByHandle[handle];
  }
};

},{}],172:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function ObjectUnsubscribedErrorImpl() {
  Error.call(this);
  this.message = 'object unsubscribed';
  this.name = 'ObjectUnsubscribedError';
  return this;
}

ObjectUnsubscribedErrorImpl.prototype = Object.create(Error.prototype);
exports.ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;

},{}],173:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function TimeoutErrorImpl() {
  Error.call(this);
  this.message = 'Timeout has occurred';
  this.name = 'TimeoutError';
  return this;
}

TimeoutErrorImpl.prototype = Object.create(Error.prototype);
exports.TimeoutError = TimeoutErrorImpl;

},{}],174:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function UnsubscriptionErrorImpl(errors) {
  Error.call(this);
  this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) {
    return i + 1 + ") " + err.toString();
  }).join('\n  ') : '';
  this.name = 'UnsubscriptionError';
  this.errors = errors;
  return this;
}

UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
exports.UnsubscriptionError = UnsubscriptionErrorImpl;

},{}],175:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = require("../Subscriber");

function canReportError(observer) {
  while (observer) {
    var _a = observer,
        closed_1 = _a.closed,
        destination = _a.destination,
        isStopped = _a.isStopped;

    if (closed_1 || isStopped) {
      return false;
    } else if (destination && destination instanceof Subscriber_1.Subscriber) {
      observer = destination;
    } else {
      observer = null;
    }
  }

  return true;
}

exports.canReportError = canReportError;

},{"../Subscriber":15}],176:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function hostReportError(err) {
  setTimeout(function () {
    throw err;
  });
}

exports.hostReportError = hostReportError;

},{}],177:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function identity(x) {
  return x;
}

exports.identity = identity;

},{}],178:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.isArray = Array.isArray || function (x) {
  return x && typeof x.length === 'number';
};

},{}],179:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.isArrayLike = function (x) {
  return x && typeof x.length === 'number' && typeof x !== 'function';
};

},{}],180:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function isDate(value) {
  return value instanceof Date && !isNaN(+value);
}

exports.isDate = isDate;

},{}],181:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function isFunction(x) {
  return typeof x === 'function';
}

exports.isFunction = isFunction;

},{}],182:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var observable_1 = require("../symbol/observable");

function isInteropObservable(input) {
  return input && typeof input[observable_1.observable] === 'function';
}

exports.isInteropObservable = isInteropObservable;

},{"../symbol/observable":167}],183:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var iterator_1 = require("../symbol/iterator");

function isIterable(input) {
  return input && typeof input[iterator_1.iterator] === 'function';
}

exports.isIterable = isIterable;

},{"../symbol/iterator":166}],184:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var isArray_1 = require("./isArray");

function isNumeric(val) {
  return !isArray_1.isArray(val) && val - parseFloat(val) + 1 >= 0;
}

exports.isNumeric = isNumeric;

},{"./isArray":178}],185:[function(require,module,exports){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

function isObject(x) {
  return x !== null && _typeof(x) === 'object';
}

exports.isObject = isObject;

},{}],186:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Observable_1 = require("../Observable");

function isObservable(obj) {
  return !!obj && (obj instanceof Observable_1.Observable || typeof obj.lift === 'function' && typeof obj.subscribe === 'function');
}

exports.isObservable = isObservable;

},{"../Observable":8}],187:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function isPromise(value) {
  return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}

exports.isPromise = isPromise;

},{}],188:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function isScheduler(value) {
  return value && typeof value.schedule === 'function';
}

exports.isScheduler = isScheduler;

},{}],189:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function noop() {}

exports.noop = noop;

},{}],190:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function not(pred, thisArg) {
  function notPred() {
    return !notPred.pred.apply(notPred.thisArg, arguments);
  }

  notPred.pred = pred;
  notPred.thisArg = thisArg;
  return notPred;
}

exports.not = not;

},{}],191:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var noop_1 = require("./noop");

function pipe() {
  var fns = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    fns[_i] = arguments[_i];
  }

  return pipeFromArray(fns);
}

exports.pipe = pipe;

function pipeFromArray(fns) {
  if (!fns) {
    return noop_1.noop;
  }

  if (fns.length === 1) {
    return fns[0];
  }

  return function piped(input) {
    return fns.reduce(function (prev, fn) {
      return fn(prev);
    }, input);
  };
}

exports.pipeFromArray = pipeFromArray;

},{"./noop":189}],192:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Observable_1 = require("../Observable");

var subscribeToArray_1 = require("./subscribeToArray");

var subscribeToPromise_1 = require("./subscribeToPromise");

var subscribeToIterable_1 = require("./subscribeToIterable");

var subscribeToObservable_1 = require("./subscribeToObservable");

var isArrayLike_1 = require("./isArrayLike");

var isPromise_1 = require("./isPromise");

var isObject_1 = require("./isObject");

var iterator_1 = require("../symbol/iterator");

var observable_1 = require("../symbol/observable");

exports.subscribeTo = function (result) {
  if (result instanceof Observable_1.Observable) {
    return function (subscriber) {
      if (result._isScalar) {
        subscriber.next(result.value);
        subscriber.complete();
        return undefined;
      } else {
        return result.subscribe(subscriber);
      }
    };
  } else if (!!result && typeof result[observable_1.observable] === 'function') {
    return subscribeToObservable_1.subscribeToObservable(result);
  } else if (isArrayLike_1.isArrayLike(result)) {
    return subscribeToArray_1.subscribeToArray(result);
  } else if (isPromise_1.isPromise(result)) {
    return subscribeToPromise_1.subscribeToPromise(result);
  } else if (!!result && typeof result[iterator_1.iterator] === 'function') {
    return subscribeToIterable_1.subscribeToIterable(result);
  } else {
    var value = isObject_1.isObject(result) ? 'an invalid object' : "'" + result + "'";
    var msg = "You provided " + value + " where a stream was expected." + ' You can provide an Observable, Promise, Array, or Iterable.';
    throw new TypeError(msg);
  }
};

},{"../Observable":8,"../symbol/iterator":166,"../symbol/observable":167,"./isArrayLike":179,"./isObject":185,"./isPromise":187,"./subscribeToArray":193,"./subscribeToIterable":194,"./subscribeToObservable":195,"./subscribeToPromise":196}],193:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.subscribeToArray = function (array) {
  return function (subscriber) {
    for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
      subscriber.next(array[i]);
    }

    if (!subscriber.closed) {
      subscriber.complete();
    }
  };
};

},{}],194:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var iterator_1 = require("../symbol/iterator");

exports.subscribeToIterable = function (iterable) {
  return function (subscriber) {
    var iterator = iterable[iterator_1.iterator]();

    do {
      var item = iterator.next();

      if (item.done) {
        subscriber.complete();
        break;
      }

      subscriber.next(item.value);

      if (subscriber.closed) {
        break;
      }
    } while (true);

    if (typeof iterator.return === 'function') {
      subscriber.add(function () {
        if (iterator.return) {
          iterator.return();
        }
      });
    }

    return subscriber;
  };
};

},{"../symbol/iterator":166}],195:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var observable_1 = require("../symbol/observable");

exports.subscribeToObservable = function (obj) {
  return function (subscriber) {
    var obs = obj[observable_1.observable]();

    if (typeof obs.subscribe !== 'function') {
      throw new TypeError('Provided object does not correctly implement Symbol.observable');
    } else {
      return obs.subscribe(subscriber);
    }
  };
};

},{"../symbol/observable":167}],196:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var hostReportError_1 = require("./hostReportError");

exports.subscribeToPromise = function (promise) {
  return function (subscriber) {
    promise.then(function (value) {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    }, function (err) {
      return subscriber.error(err);
    }).then(null, hostReportError_1.hostReportError);
    return subscriber;
  };
};

},{"./hostReportError":176}],197:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var InnerSubscriber_1 = require("../InnerSubscriber");

var subscribeTo_1 = require("./subscribeTo");

function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, destination) {
  if (destination === void 0) {
    destination = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
  }

  if (destination.closed) {
    return;
  }

  return subscribeTo_1.subscribeTo(result)(destination);
}

exports.subscribeToResult = subscribeToResult;

},{"../InnerSubscriber":6,"./subscribeTo":192}],198:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Subscriber_1 = require("../Subscriber");

var rxSubscriber_1 = require("../symbol/rxSubscriber");

var Observer_1 = require("../Observer");

function toSubscriber(nextOrObserver, error, complete) {
  if (nextOrObserver) {
    if (nextOrObserver instanceof Subscriber_1.Subscriber) {
      return nextOrObserver;
    }

    if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
      return nextOrObserver[rxSubscriber_1.rxSubscriber]();
    }
  }

  if (!nextOrObserver && !error && !complete) {
    return new Subscriber_1.Subscriber(Observer_1.empty);
  }

  return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}

exports.toSubscriber = toSubscriber;

},{"../Observer":9,"../Subscriber":15,"../symbol/rxSubscriber":168}],199:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var audit_1 = require("../internal/operators/audit");

exports.audit = audit_1.audit;

var auditTime_1 = require("../internal/operators/auditTime");

exports.auditTime = auditTime_1.auditTime;

var buffer_1 = require("../internal/operators/buffer");

exports.buffer = buffer_1.buffer;

var bufferCount_1 = require("../internal/operators/bufferCount");

exports.bufferCount = bufferCount_1.bufferCount;

var bufferTime_1 = require("../internal/operators/bufferTime");

exports.bufferTime = bufferTime_1.bufferTime;

var bufferToggle_1 = require("../internal/operators/bufferToggle");

exports.bufferToggle = bufferToggle_1.bufferToggle;

var bufferWhen_1 = require("../internal/operators/bufferWhen");

exports.bufferWhen = bufferWhen_1.bufferWhen;

var catchError_1 = require("../internal/operators/catchError");

exports.catchError = catchError_1.catchError;

var combineAll_1 = require("../internal/operators/combineAll");

exports.combineAll = combineAll_1.combineAll;

var combineLatest_1 = require("../internal/operators/combineLatest");

exports.combineLatest = combineLatest_1.combineLatest;

var concat_1 = require("../internal/operators/concat");

exports.concat = concat_1.concat;

var concatAll_1 = require("../internal/operators/concatAll");

exports.concatAll = concatAll_1.concatAll;

var concatMap_1 = require("../internal/operators/concatMap");

exports.concatMap = concatMap_1.concatMap;

var concatMapTo_1 = require("../internal/operators/concatMapTo");

exports.concatMapTo = concatMapTo_1.concatMapTo;

var count_1 = require("../internal/operators/count");

exports.count = count_1.count;

var debounce_1 = require("../internal/operators/debounce");

exports.debounce = debounce_1.debounce;

var debounceTime_1 = require("../internal/operators/debounceTime");

exports.debounceTime = debounceTime_1.debounceTime;

var defaultIfEmpty_1 = require("../internal/operators/defaultIfEmpty");

exports.defaultIfEmpty = defaultIfEmpty_1.defaultIfEmpty;

var delay_1 = require("../internal/operators/delay");

exports.delay = delay_1.delay;

var delayWhen_1 = require("../internal/operators/delayWhen");

exports.delayWhen = delayWhen_1.delayWhen;

var dematerialize_1 = require("../internal/operators/dematerialize");

exports.dematerialize = dematerialize_1.dematerialize;

var distinct_1 = require("../internal/operators/distinct");

exports.distinct = distinct_1.distinct;

var distinctUntilChanged_1 = require("../internal/operators/distinctUntilChanged");

exports.distinctUntilChanged = distinctUntilChanged_1.distinctUntilChanged;

var distinctUntilKeyChanged_1 = require("../internal/operators/distinctUntilKeyChanged");

exports.distinctUntilKeyChanged = distinctUntilKeyChanged_1.distinctUntilKeyChanged;

var elementAt_1 = require("../internal/operators/elementAt");

exports.elementAt = elementAt_1.elementAt;

var endWith_1 = require("../internal/operators/endWith");

exports.endWith = endWith_1.endWith;

var every_1 = require("../internal/operators/every");

exports.every = every_1.every;

var exhaust_1 = require("../internal/operators/exhaust");

exports.exhaust = exhaust_1.exhaust;

var exhaustMap_1 = require("../internal/operators/exhaustMap");

exports.exhaustMap = exhaustMap_1.exhaustMap;

var expand_1 = require("../internal/operators/expand");

exports.expand = expand_1.expand;

var filter_1 = require("../internal/operators/filter");

exports.filter = filter_1.filter;

var finalize_1 = require("../internal/operators/finalize");

exports.finalize = finalize_1.finalize;

var find_1 = require("../internal/operators/find");

exports.find = find_1.find;

var findIndex_1 = require("../internal/operators/findIndex");

exports.findIndex = findIndex_1.findIndex;

var first_1 = require("../internal/operators/first");

exports.first = first_1.first;

var groupBy_1 = require("../internal/operators/groupBy");

exports.groupBy = groupBy_1.groupBy;

var ignoreElements_1 = require("../internal/operators/ignoreElements");

exports.ignoreElements = ignoreElements_1.ignoreElements;

var isEmpty_1 = require("../internal/operators/isEmpty");

exports.isEmpty = isEmpty_1.isEmpty;

var last_1 = require("../internal/operators/last");

exports.last = last_1.last;

var map_1 = require("../internal/operators/map");

exports.map = map_1.map;

var mapTo_1 = require("../internal/operators/mapTo");

exports.mapTo = mapTo_1.mapTo;

var materialize_1 = require("../internal/operators/materialize");

exports.materialize = materialize_1.materialize;

var max_1 = require("../internal/operators/max");

exports.max = max_1.max;

var merge_1 = require("../internal/operators/merge");

exports.merge = merge_1.merge;

var mergeAll_1 = require("../internal/operators/mergeAll");

exports.mergeAll = mergeAll_1.mergeAll;

var mergeMap_1 = require("../internal/operators/mergeMap");

exports.mergeMap = mergeMap_1.mergeMap;

var mergeMap_2 = require("../internal/operators/mergeMap");

exports.flatMap = mergeMap_2.mergeMap;

var mergeMapTo_1 = require("../internal/operators/mergeMapTo");

exports.mergeMapTo = mergeMapTo_1.mergeMapTo;

var mergeScan_1 = require("../internal/operators/mergeScan");

exports.mergeScan = mergeScan_1.mergeScan;

var min_1 = require("../internal/operators/min");

exports.min = min_1.min;

var multicast_1 = require("../internal/operators/multicast");

exports.multicast = multicast_1.multicast;

var observeOn_1 = require("../internal/operators/observeOn");

exports.observeOn = observeOn_1.observeOn;

var onErrorResumeNext_1 = require("../internal/operators/onErrorResumeNext");

exports.onErrorResumeNext = onErrorResumeNext_1.onErrorResumeNext;

var pairwise_1 = require("../internal/operators/pairwise");

exports.pairwise = pairwise_1.pairwise;

var partition_1 = require("../internal/operators/partition");

exports.partition = partition_1.partition;

var pluck_1 = require("../internal/operators/pluck");

exports.pluck = pluck_1.pluck;

var publish_1 = require("../internal/operators/publish");

exports.publish = publish_1.publish;

var publishBehavior_1 = require("../internal/operators/publishBehavior");

exports.publishBehavior = publishBehavior_1.publishBehavior;

var publishLast_1 = require("../internal/operators/publishLast");

exports.publishLast = publishLast_1.publishLast;

var publishReplay_1 = require("../internal/operators/publishReplay");

exports.publishReplay = publishReplay_1.publishReplay;

var race_1 = require("../internal/operators/race");

exports.race = race_1.race;

var reduce_1 = require("../internal/operators/reduce");

exports.reduce = reduce_1.reduce;

var repeat_1 = require("../internal/operators/repeat");

exports.repeat = repeat_1.repeat;

var repeatWhen_1 = require("../internal/operators/repeatWhen");

exports.repeatWhen = repeatWhen_1.repeatWhen;

var retry_1 = require("../internal/operators/retry");

exports.retry = retry_1.retry;

var retryWhen_1 = require("../internal/operators/retryWhen");

exports.retryWhen = retryWhen_1.retryWhen;

var refCount_1 = require("../internal/operators/refCount");

exports.refCount = refCount_1.refCount;

var sample_1 = require("../internal/operators/sample");

exports.sample = sample_1.sample;

var sampleTime_1 = require("../internal/operators/sampleTime");

exports.sampleTime = sampleTime_1.sampleTime;

var scan_1 = require("../internal/operators/scan");

exports.scan = scan_1.scan;

var sequenceEqual_1 = require("../internal/operators/sequenceEqual");

exports.sequenceEqual = sequenceEqual_1.sequenceEqual;

var share_1 = require("../internal/operators/share");

exports.share = share_1.share;

var shareReplay_1 = require("../internal/operators/shareReplay");

exports.shareReplay = shareReplay_1.shareReplay;

var single_1 = require("../internal/operators/single");

exports.single = single_1.single;

var skip_1 = require("../internal/operators/skip");

exports.skip = skip_1.skip;

var skipLast_1 = require("../internal/operators/skipLast");

exports.skipLast = skipLast_1.skipLast;

var skipUntil_1 = require("../internal/operators/skipUntil");

exports.skipUntil = skipUntil_1.skipUntil;

var skipWhile_1 = require("../internal/operators/skipWhile");

exports.skipWhile = skipWhile_1.skipWhile;

var startWith_1 = require("../internal/operators/startWith");

exports.startWith = startWith_1.startWith;

var subscribeOn_1 = require("../internal/operators/subscribeOn");

exports.subscribeOn = subscribeOn_1.subscribeOn;

var switchAll_1 = require("../internal/operators/switchAll");

exports.switchAll = switchAll_1.switchAll;

var switchMap_1 = require("../internal/operators/switchMap");

exports.switchMap = switchMap_1.switchMap;

var switchMapTo_1 = require("../internal/operators/switchMapTo");

exports.switchMapTo = switchMapTo_1.switchMapTo;

var take_1 = require("../internal/operators/take");

exports.take = take_1.take;

var takeLast_1 = require("../internal/operators/takeLast");

exports.takeLast = takeLast_1.takeLast;

var takeUntil_1 = require("../internal/operators/takeUntil");

exports.takeUntil = takeUntil_1.takeUntil;

var takeWhile_1 = require("../internal/operators/takeWhile");

exports.takeWhile = takeWhile_1.takeWhile;

var tap_1 = require("../internal/operators/tap");

exports.tap = tap_1.tap;

var throttle_1 = require("../internal/operators/throttle");

exports.throttle = throttle_1.throttle;

var throttleTime_1 = require("../internal/operators/throttleTime");

exports.throttleTime = throttleTime_1.throttleTime;

var throwIfEmpty_1 = require("../internal/operators/throwIfEmpty");

exports.throwIfEmpty = throwIfEmpty_1.throwIfEmpty;

var timeInterval_1 = require("../internal/operators/timeInterval");

exports.timeInterval = timeInterval_1.timeInterval;

var timeout_1 = require("../internal/operators/timeout");

exports.timeout = timeout_1.timeout;

var timeoutWith_1 = require("../internal/operators/timeoutWith");

exports.timeoutWith = timeoutWith_1.timeoutWith;

var timestamp_1 = require("../internal/operators/timestamp");

exports.timestamp = timestamp_1.timestamp;

var toArray_1 = require("../internal/operators/toArray");

exports.toArray = toArray_1.toArray;

var window_1 = require("../internal/operators/window");

exports.window = window_1.window;

var windowCount_1 = require("../internal/operators/windowCount");

exports.windowCount = windowCount_1.windowCount;

var windowTime_1 = require("../internal/operators/windowTime");

exports.windowTime = windowTime_1.windowTime;

var windowToggle_1 = require("../internal/operators/windowToggle");

exports.windowToggle = windowToggle_1.windowToggle;

var windowWhen_1 = require("../internal/operators/windowWhen");

exports.windowWhen = windowWhen_1.windowWhen;

var withLatestFrom_1 = require("../internal/operators/withLatestFrom");

exports.withLatestFrom = withLatestFrom_1.withLatestFrom;

var zip_1 = require("../internal/operators/zip");

exports.zip = zip_1.zip;

var zipAll_1 = require("../internal/operators/zipAll");

exports.zipAll = zipAll_1.zipAll;

},{"../internal/operators/audit":49,"../internal/operators/auditTime":50,"../internal/operators/buffer":51,"../internal/operators/bufferCount":52,"../internal/operators/bufferTime":53,"../internal/operators/bufferToggle":54,"../internal/operators/bufferWhen":55,"../internal/operators/catchError":56,"../internal/operators/combineAll":57,"../internal/operators/combineLatest":58,"../internal/operators/concat":59,"../internal/operators/concatAll":60,"../internal/operators/concatMap":61,"../internal/operators/concatMapTo":62,"../internal/operators/count":63,"../internal/operators/debounce":64,"../internal/operators/debounceTime":65,"../internal/operators/defaultIfEmpty":66,"../internal/operators/delay":67,"../internal/operators/delayWhen":68,"../internal/operators/dematerialize":69,"../internal/operators/distinct":70,"../internal/operators/distinctUntilChanged":71,"../internal/operators/distinctUntilKeyChanged":72,"../internal/operators/elementAt":73,"../internal/operators/endWith":74,"../internal/operators/every":75,"../internal/operators/exhaust":76,"../internal/operators/exhaustMap":77,"../internal/operators/expand":78,"../internal/operators/filter":79,"../internal/operators/finalize":80,"../internal/operators/find":81,"../internal/operators/findIndex":82,"../internal/operators/first":83,"../internal/operators/groupBy":84,"../internal/operators/ignoreElements":85,"../internal/operators/isEmpty":86,"../internal/operators/last":87,"../internal/operators/map":88,"../internal/operators/mapTo":89,"../internal/operators/materialize":90,"../internal/operators/max":91,"../internal/operators/merge":92,"../internal/operators/mergeAll":93,"../internal/operators/mergeMap":94,"../internal/operators/mergeMapTo":95,"../internal/operators/mergeScan":96,"../internal/operators/min":97,"../internal/operators/multicast":98,"../internal/operators/observeOn":99,"../internal/operators/onErrorResumeNext":100,"../internal/operators/pairwise":101,"../internal/operators/partition":102,"../internal/operators/pluck":103,"../internal/operators/publish":104,"../internal/operators/publishBehavior":105,"../internal/operators/publishLast":106,"../internal/operators/publishReplay":107,"../internal/operators/race":108,"../internal/operators/reduce":109,"../internal/operators/refCount":110,"../internal/operators/repeat":111,"../internal/operators/repeatWhen":112,"../internal/operators/retry":113,"../internal/operators/retryWhen":114,"../internal/operators/sample":115,"../internal/operators/sampleTime":116,"../internal/operators/scan":117,"../internal/operators/sequenceEqual":118,"../internal/operators/share":119,"../internal/operators/shareReplay":120,"../internal/operators/single":121,"../internal/operators/skip":122,"../internal/operators/skipLast":123,"../internal/operators/skipUntil":124,"../internal/operators/skipWhile":125,"../internal/operators/startWith":126,"../internal/operators/subscribeOn":127,"../internal/operators/switchAll":128,"../internal/operators/switchMap":129,"../internal/operators/switchMapTo":130,"../internal/operators/take":131,"../internal/operators/takeLast":132,"../internal/operators/takeUntil":133,"../internal/operators/takeWhile":134,"../internal/operators/tap":135,"../internal/operators/throttle":136,"../internal/operators/throttleTime":137,"../internal/operators/throwIfEmpty":138,"../internal/operators/timeInterval":139,"../internal/operators/timeout":140,"../internal/operators/timeoutWith":141,"../internal/operators/timestamp":142,"../internal/operators/toArray":143,"../internal/operators/window":144,"../internal/operators/windowCount":145,"../internal/operators/windowTime":146,"../internal/operators/windowToggle":147,"../internal/operators/windowWhen":148,"../internal/operators/withLatestFrom":149,"../internal/operators/zip":150,"../internal/operators/zipAll":151}],200:[function(require,module,exports){
"use strict";

var _appModule = _interopRequireDefault(require("./app.module.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* jshint esversion: 6 */

/* global window, document, angular, Swiper, TweenMax, TimelineMax */
angular.bootstrap(document, [_appModule.default]);

},{"./app.module.js":201}],201:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _parallax = _interopRequireDefault(require("./directives/parallax.directive"));

var _scroll = _interopRequireDefault(require("./directives/scroll.directive"));

var _sticky = _interopRequireDefault(require("./directives/sticky.directive"));

var _root = _interopRequireDefault(require("./root.controller"));

var _api = _interopRequireDefault(require("./services/api.service"));

var _raf = _interopRequireDefault(require("./services/raf.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* jshint esversion: 6 */

/* global window, document, angular, Swiper, TweenMax, TimelineMax */
var MODULE_NAME = 'app';
var app = angular.module(MODULE_NAME, ['ngSanitize', 'artisan', 'jsonFormatter']);
app.factory('ApiService', _api.default.factory).factory('RafService', _raf.default.factory);
app.directive('scroll', _scroll.default.factory).directive('parallax', _parallax.default.factory).directive('sticky', _sticky.default.factory);
app.controller('RootCtrl', _root.default);
app.run(['$compile', '$timeout', '$rootScope', '$modal', 'Router', 'Trust', function ($compile, $timeout, $rootScope, $modal, Router, Trust) {
  $rootScope.modals = $modal.modals;
  $rootScope.addModal = $modal.addModal;
  $rootScope.router = Router;
  $rootScope.trust = Trust;
  /*
  FacebookService.require();
  GoogleService.require();
  */
}]);
var _default = MODULE_NAME;
exports.default = _default;

},{"./directives/parallax.directive":202,"./directives/scroll.directive":203,"./directives/sticky.directive":204,"./root.controller":205,"./services/api.service":206,"./services/raf.service":207}],202:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _operators = require("rxjs/operators");

var _rect = require("../shared/rect");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ParallaxDirective =
/*#__PURE__*/
function () {
  function ParallaxDirective(RafService) {
    _classCallCheck(this, ParallaxDirective);

    this.rafService = RafService; // this.require = 'ngModel';

    this.restrict = 'A';
  }

  _createClass(ParallaxDirective, [{
    key: "link",
    value: function link(scope, element, attributes, controller) {
      var image = element[0].querySelector('img');
      var subscription = this.parallax$().pipe().subscribe(function (parallax) {
        // console.log(parallax);
        image.setAttribute('style', "height: ".concat(parallax.s * 100, "%; top: 50%; left: 50%; transform: translateX(-50%) translateY(").concat(parallax.p, "%);"));
      });
      scope.$on('destroy', function () {
        subscription.unsubscribe();
      });
    }
  }, {
    key: "parallax$",
    value: function parallax$() {
      var _this = this;

      return this.rafService.raf$().pipe((0, _operators.map)(function (top) {
        var windowRect = new _rect.Rect({
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        }); // this.windowRect;

        var node = _this.elementRef.nativeElement;
        var parallax = (_this.parallax || 5) * 2;
        var direction = 1; // i % 2 === 0 ? 1 : -1;

        var rect = _rect.Rect.fromNode(node);

        rect = new _rect.Rect({
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height
        });
        var intersection = rect.intersection(windowRect); // console.log(intersection);

        if (intersection.y > 0) {
          var y = Math.min(1, Math.max(-1, intersection.center.y));
          var s = (100 + parallax * 2) / 100;
          var p = -50 + y * parallax * direction; // .toFixed(3);

          return {
            s: s,
            p: p
          };
        } else {
          return null;
        }
      }), (0, _operators.filter)(function (x) {
        return x !== null;
      }));
    }
  }, {
    key: "scrollTop$",
    value: function scrollTop$() {
      return this.rafService.raf$().pipe((0, _operators.map)(function (x) {
        return window.pageYOffset;
      }), (0, _operators.distinctUntilChanged)(), (0, _operators.tap)(function (x) {
        return console.log(x);
      }));
    }
  }], [{
    key: "factory",
    value: function factory(RafService) {
      return new ParallaxDirective(RafService);
    }
  }]);

  return ParallaxDirective;
}();

exports.default = ParallaxDirective;
ParallaxDirective.factory.$inject = ['RafService'];

},{"../shared/rect":208,"rxjs/operators":199}],203:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rxjs = require("rxjs");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ScrollDirective =
/*#__PURE__*/
function () {
  // @Output() public scroll = new EventEmitter();
  function ScrollDirective() {
    _classCallCheck(this, ScrollDirective);

    // this.require = 'ngModel';
    this.restrict = 'A';
  }

  _createClass(ScrollDirective, [{
    key: "link",
    value: function link(scope, element, attributes, controller) {
      // console.log('ScrollDirective.link', element);
      // const source = fromEvent(element[0], 'scroll');
      var callback = scope.$eval(attributes.scroll);

      if (typeof callback === 'function') {
        // console.log(callback);
        var target = document.querySelector('body');
        var source = (0, _rxjs.fromEvent)(target, 'scroll');
        var subscription = source.subscribe(function (originalEvent) {
          var event = {
            scrollHeight: target.scrollHeight,
            scrollLeft: target.scrollX || target.scrollLeft,
            scrollTop: target.scrollY || target.scrollTop,
            scrollWidth: target.scrollWidth,
            originalEvent: originalEvent
          }; // scope.$broadcast('onScrollDocumentEvent', event);

          callback(event); // console.log('ScrollDirective.onScrollDocumentEvent', event);
        });
        scope.$on('destroy', function () {
          subscription.unsubscribe();
        });
      }
    }
  }], [{
    key: "factory",
    value: function factory() {
      return new ScrollDirective();
    }
  }]);

  return ScrollDirective;
}();

exports.default = ScrollDirective;
ScrollDirective.factory.$inject = [];

},{"rxjs":3}],204:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rxjs = require("rxjs");

var _rect = _interopRequireDefault(require("../shared/rect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StickyDirective =
/*#__PURE__*/
function () {
  function StickyDirective(RafService) {
    _classCallCheck(this, StickyDirective);

    this.rafService = RafService;
    this.restrict = 'A';
  }

  _createClass(StickyDirective, [{
    key: "link",
    value: function link(scope, element, attributes, controller) {
      var _this = this;

      var node = element[0];
      var content = node.querySelector('[sticky-content]');
      var target = document.querySelector('body');
      var source = (0, _rxjs.fromEvent)(target, 'scroll');
      var subscription = source.subscribe(function (originalEvent) {
        // const top = target.scrollY || target.scrollTop;
        // const subscription = this.rafService.raf$().subscribe(event => {
        var top = parseInt(attributes.sticky) || 0;

        var rect = _rect.default.fromNode(node); // const maxtop = node.offsetHeight - content.offsetHeight;
        // top = Math.max(0, Math.min(maxtop, top - rect.top));


        top = Math.max(0, top - rect.top);
        content.setAttribute('style', "transform: translateY(".concat(top, "px);"));
        var sticky = top > 0;

        if (sticky !== _this.sticky) {
          _this.sticky = sticky;

          if (sticky) {
            node.classList.add('sticky');
          } else {
            node.classList.remove('sticky');
          }
        }
      });
      scope.$on('destroy', function () {
        subscription.unsubscribe();
      });
    }
  }], [{
    key: "factory",
    value: function factory(RafService) {
      return new StickyDirective(RafService);
    }
  }]);

  return StickyDirective;
}();

exports.default = StickyDirective;
StickyDirective.factory.$inject = ['RafService'];

},{"../shared/rect":208,"rxjs":3}],205:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _highway = _interopRequireDefault(require("@dogstudio/highway"));

var _transitions = _interopRequireDefault(require("./transitions/transitions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RootCtrl =
/*#__PURE__*/
function () {
  function RootCtrl($scope, $compile, $timeout, ApiService) {
    _classCallCheck(this, RootCtrl);

    this.$scope = $scope;
    this.$compile = $compile;
    this.$timeout = $timeout;
    this.ApiService = ApiService;
    this.onInit();
  }

  _createClass(RootCtrl, [{
    key: "hasHash",
    value: function hasHash(hash) {
      return window.location.hash.indexOf(hash) !== -1;
    }
  }, {
    key: "onInit",
    value: function onInit() {
      var _this = this;

      console.log(this.$scope);

      this.$scope.onScroll = function (event) {
        var scrolled = event.scrollTop > 100;

        if (_this.scrolled !== scrolled) {
          _this.$timeout(function () {
            _this.scrolled = scrolled;
          });
        }
      };

      this.setHighway();
    }
  }, {
    key: "setHighway",
    value: function setHighway() {
      var _this2 = this;

      this.$timeout(function () {
        var H = new _highway.default.Core({
          transitions: {
            default: _transitions.default
          }
        });
        H.on('NAVIGATE_END', function (event) {
          H.detach(H.links);

          _this2.$timeout(function () {
            var element = angular.element(event.to.view);
            var scope = element.scope(); // console.log(scope, element, element.contents());

            _this2.$compile(element.contents())(scope);

            _this2.$timeout(function () {
              H.attach(document.querySelectorAll('[href]'));
              /*
              // link prefetch
              Quicklink({
              	el: to.view
              });
              */

              /*
              setTimeout(() => {
              	document.querySelector('.view').scrollIntoView({
              		behavior: 'smooth',
              		block: 'start',
              		inline: 'start'
              	});
              }, 500);
              */
            }, 250);
          });
        });
      });
    }
  }]);

  return RootCtrl;
}();

RootCtrl.$inject = ['$scope', '$compile', '$timeout', 'ApiService'];
var _default = RootCtrl;
exports.default = _default;

},{"./transitions/transitions":209,"@dogstudio/highway":1}],206:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* jshint esversion: 6 */

/* global window, document, angular, Swiper, TweenMax, TimelineMax */
var ApiService =
/*#__PURE__*/
function () {
  function ApiService($http) {
    _classCallCheck(this, ApiService);

    this.http = $http;
    var api = {
      store: {
        data: function data(storeId) {
          return $http.get('/store/store.data.json');
        },
        getById: function getById(storeId) {
          return $http.get('/store/store.json');
        },
        getDetailById: function getDetailById(storeId) {
          return $http.get('/store/store.detail.json');
        }
      },
      reserve: {
        data: function data(storeId) {
          return $http.get('/reserve/reserve.data.json');
        },
        days: function days(storeId, from, to) {
          return $http.get('/reserve/days.json', {
            from: from,
            to: to
          });
        }
      }
    };
    Object.assign(this, api);
  }

  _createClass(ApiService, null, [{
    key: "factory",
    value: function factory($http) {
      return new ApiService($http);
    }
  }]);

  return ApiService;
}();

exports.default = ApiService;
ApiService.factory.$inject = ['$http'];

},{}],207:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rxjs = require("rxjs");

var _animationFrame = require("rxjs/internal/scheduler/animationFrame");

var _operators = require("rxjs/operators");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RafService =
/*#__PURE__*/
function () {
  function RafService() {
    _classCallCheck(this, RafService);
  }

  _createClass(RafService, [{
    key: "raf$",
    value: function raf$() {
      return (0, _rxjs.range)(0, Number.POSITIVE_INFINITY, _animationFrame.animationFrame).pipe((0, _operators.shareReplay)());
    }
  }], [{
    key: "factory",
    value: function factory() {
      return new RafService();
    }
  }]);

  return RafService;
}();

exports.default = RafService;
RafService.factory.$inject = [];

},{"rxjs":3,"rxjs/internal/scheduler/animationFrame":162,"rxjs/operators":199}],208:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* jshint esversion: 6 */
var Rect =
/*#__PURE__*/
function () {
  function Rect(rect) {
    _classCallCheck(this, Rect);

    this.top = 0;
    this.right = 0;
    this.bottom = 0;
    this.left = 0;
    this.width = 0;
    this.height = 0;
    this.set(rect);
  }

  _createClass(Rect, [{
    key: "set",
    value: function set(rect) {
      if (rect) {
        Object.assign(this, rect);
        this.right = this.left + this.width;
        this.bottom = this.top + this.height;
      }

      this.center = {
        top: this.top + this.height / 2,
        left: this.left + this.width / 2
      };
      this.center.x = this.center.left;
      this.center.y = this.center.top;
    }
  }, {
    key: "contains",
    value: function contains(left, top) {
      return Rect.contains(this, left, top);
    }
  }, {
    key: "intersect",
    value: function intersect(rect) {
      return Rect.intersectRect(this, rect);
    }
  }, {
    key: "intersection",
    value: function intersection(rect) {
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
    }
  }], [{
    key: "contains",
    value: function contains(rect, left, top) {
      return rect.top <= top && top <= rect.bottom && rect.left <= left && left <= rect.right;
    }
  }, {
    key: "intersectRect",
    value: function intersectRect(r1, r2) {
      return !(r2.left > r1.right || r2.right < r1.left || r2.top > r1.bottom || r2.bottom < r1.top);
    }
  }, {
    key: "fromNode",
    value: function fromNode(node) {
      if (!node) {
        return;
      }

      if (!node.getClientRects().length) {
        return new Rect();
      }

      var rect = node.getBoundingClientRect(); // const defaultView = node.ownerDocument.defaultView;

      return new Rect({
        // top: rect.top + defaultView.pageYOffset,
        // left: rect.left + defaultView.pageXOffset,
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height
      });
    }
  }]);

  return Rect;
}();

exports.default = Rect;

},{}],209:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _highway = _interopRequireDefault(require("@dogstudio/highway"));

var _gsap = _interopRequireDefault(require("gsap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PageTransition =
/*#__PURE__*/
function (_Highway$Transition) {
  _inherits(PageTransition, _Highway$Transition);

  function PageTransition() {
    _classCallCheck(this, PageTransition);

    return _possibleConstructorReturn(this, _getPrototypeOf(PageTransition).apply(this, arguments));
  }

  _createClass(PageTransition, [{
    key: "in",
    value: function _in(_ref) {
      var from = _ref.from,
          to = _ref.to,
          done = _ref.done;

      if (window.scroll) {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      } else {
        window.scrollTo(0, 0);
      } // TweenLite.set(to, { position: 'fixed', zIndex: 10000, top: 0, width: '100%', opacity: 0 });


      _gsap.default.set(to, {
        opacity: 0
      });

      _gsap.default.from(to, 0.35, {
        opacity: 0,
        overwrite: 'all',
        onComplete: function onComplete() {
          from.remove();

          _gsap.default.to(to, 0.35, {
            opacity: 1,
            overwrite: 'all',
            onComplete: function onComplete() {
              // TweenLite.set(to, { position: 'static', zIndex: 0 });
              // from.remove();
              done();
            }
          });
        }
      });
    }
  }, {
    key: "out",
    value: function out(_ref2) {
      var done = _ref2.done;
      done();
    }
  }]);

  return PageTransition;
}(_highway.default.Transition);

var _default = PageTransition;
exports.default = _default;

},{"@dogstudio/highway":1,"gsap":2}]},{},[200]);
