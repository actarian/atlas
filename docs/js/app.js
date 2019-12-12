(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define("Highway", [], factory);else if (typeof exports === 'object') exports["Highway"] = factory();else root["Highway"] = factory();
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

        if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
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

        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
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

      var Symbol = __webpack_require__(1).Symbol;

      var USE_SYMBOL = typeof Symbol == 'function';

      var $exports = module.exports = function (name) {
        return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
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
        return typeof it === 'object' ? it !== null : typeof it === 'function';
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
          get: function () {
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

      var $export = function (type, name, source) {
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

      var empty = function () {
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

      var isThenable = function (it) {
        var then;
        return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
      };

      var notify = function (promise, isReject) {
        if (promise._n) return;
        promise._n = true;
        var chain = promise._c;
        microtask(function () {
          var value = promise._v;
          var ok = promise._s == 1;
          var i = 0;

          var run = function (reaction) {
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

          while (chain.length > i) run(chain[i++]); // variable length - can't use forEach


          promise._c = [];
          promise._n = false;
          if (isReject && !promise._h) onUnhandled(promise);
        });
      };

      var onUnhandled = function (promise) {
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

      var isUnhandled = function (promise) {
        return promise._h !== 1 && (promise._a || promise._c).length === 0;
      };

      var onHandleUnhandled = function (promise) {
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

      var $reject = function (value) {
        var promise = this;
        if (promise._d) return;
        promise._d = true;
        promise = promise._w || promise; // unwrap

        promise._v = value;
        promise._s = 2;
        if (!promise._a) promise._a = promise._c.slice();
        notify(promise, true);
      };

      var $resolve = function (value) {
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
          'catch': function (onRejected) {
            return this.then(undefined, onRejected);
          }
        });

        OwnPromiseCapability = function () {
          var promise = new Internal();
          this.promise = promise;
          this.resolve = ctx($resolve, promise, 1);
          this.reject = ctx($reject, promise, 1);
        };

        newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
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
        for (var key in src) redefine(target, key, src[key], safe);

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

      var setMeta = function (it) {
        setDesc(it, META, {
          value: {
            i: 'O' + ++id,
            // object ID
            w: {} // weak collections IDs

          }
        });
      };

      var fastKey = function (it, create) {
        // return primitive with prefix
        if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

        if (!has(it, META)) {
          // can't set metadata to uncaught frozen object
          if (!isExtensible(it)) return 'F'; // not necessary to add metadata

          if (!create) return 'E'; // add missing metadata

          setMeta(it); // return object ID
        }

        return it[META].i;
      };

      var getWeak = function (it, create) {
        if (!has(it, META)) {
          // can't set metadata to uncaught frozen object
          if (!isExtensible(it)) return true; // not necessary to add metadata

          if (!create) return false; // add missing metadata

          setMeta(it); // return hash weak collections IDs
        }

        return it[META].w;
      }; // add metadata on freeze-family methods calling


      var onFreeze = function (it) {
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

      var Empty = function () {
        /* empty */
      };

      var PROTOTYPE = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype

      var createDict = function () {
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
        createDict = iframeDocument.F;

        while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];

        return createDict();
      };

      module.exports = Object.create || function create(O, Properties) {
        var result;

        if (O !== null) {
          Empty[PROTOTYPE] = anObject(O);
          result = new Empty();
          Empty[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

          result[IE_PROTO] = O;
        } else result = createDict();

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
          get: function () {
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

      var check = function (O, proto) {
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

      var tryGet = function (it, key) {
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

      var run = function () {
        var id = +this; // eslint-disable-next-line no-prototype-builtins

        if (queue.hasOwnProperty(id)) {
          var fn = queue[id];
          delete queue[id];
          fn();
        }
      };

      var listener = function (event) {
        run.call(event.data);
      }; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


      if (!setTask || !clearTask) {
        setTask = function setImmediate(fn) {
          var args = [];
          var i = 1;

          while (arguments.length > i) args.push(arguments[i++]);

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
          defer = function (id) {
            process.nextTick(ctx(run, id, 1));
          }; // Sphere (JS game engine) Dispatch API

        } else if (Dispatch && Dispatch.now) {
          defer = function (id) {
            Dispatch.now(ctx(run, id, 1));
          }; // Browsers with MessageChannel, includes WebWorkers

        } else if (MessageChannel) {
          channel = new MessageChannel();
          port = channel.port2;
          channel.port1.onmessage = listener;
          defer = ctx(port.postMessage, port, 1); // Browsers with postMessage, skip WebWorkers
          // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
        } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
          defer = function (id) {
            global.postMessage(id + '', '*');
          };

          global.addEventListener('message', listener, false); // IE8-
        } else if (ONREADYSTATECHANGE in cel('script')) {
          defer = function (id) {
            html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
              html.removeChild(this);
              run.call(id);
            };
          }; // Rest old browsers

        } else {
          defer = function (id) {
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
          get: function () {
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
        var inModule = typeof module === "object";
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

              if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
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
          reset: function (skipTempReset) {
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
          stop: function () {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;

            if (rootRecord.type === "throw") {
              throw rootRecord.arg;
            }

            return this.rval;
          },
          dispatchException: function (exception) {
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
          abrupt: function (type, arg) {
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
          complete: function (record, afterLoc) {
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
          finish: function (finallyLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];

              if (entry.finallyLoc === finallyLoc) {
                this.complete(entry.completion, entry.afterLoc);
                resetTryEntry(entry);
                return ContinueSentinel;
              }
            }
          },
          "catch": function (tryLoc) {
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
          delegateYield: function (iterable, resultName, nextLoc) {
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

        for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key); // Don't enum bug & hidden keys


        while (names.length > i) if (has(O, key = names[i++])) {
          ~arrayIndexOf(result, key) || result.push(key);
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

      var returnThis = function () {
        return this;
      };

      module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
        $iterCreate(Constructor, NAME, next);

        var getMethod = function (kind) {
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
        get: function () {
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
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
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

        var flush = function () {
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
          notify = function () {
            process.nextTick(flush);
          }; // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339

        } else if (Observer && !(global.navigator && global.navigator.standalone)) {
          var toggle = true;
          var node = document.createTextNode('');
          new Observer(flush).observe(node, {
            characterData: true
          }); // eslint-disable-line no-new

          notify = function () {
            node.data = toggle = !toggle;
          }; // environments with maybe non-completely correct, but existent Promise

        } else if (Promise && Promise.resolve) {
          // Promise.resolve without an argument throws an error in LG WebOS 2
          var promise = Promise.resolve(undefined);

          notify = function () {
            promise.then(flush);
          }; // for other environments - macrotask based on:
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

      var define = function (fn) {
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

      var createHTML = function (string, tag, attribute, value) {
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
          get: function () {
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

      var wrap = function (tag) {
        var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);

        sym._k = tag;
        return sym;
      };

      var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
        return typeof it == 'symbol';
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

        while (l > i) $defineProperty(it, key = keys[i++], P[key]);

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
        $Symbol = function Symbol() {
          if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
          var tag = uid(arguments.length > 0 ? arguments[0] : undefined);

          var $set = function (value) {
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
      'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) wks(es6Symbols[j++]);

      for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

      $export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
        // 19.4.2.1 Symbol.for(key)
        'for': function (key) {
          return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
        },
        // 19.4.2.5 Symbol.keyFor(sym)
        keyFor: function keyFor(sym) {
          if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');

          for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
        },
        useSetter: function () {
          setter = true;
        },
        useSimple: function () {
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

          while (arguments.length > i) args.push(arguments[i++]);

          $replacer = replacer = args[1];
          if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

          if (!isArray(replacer)) replacer = function (key, value) {
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

          while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
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
          } else for (; length > index; index++) if (IS_INCLUDES || index in O) {
            if (O[index] === el) return IS_INCLUDES || index || 0;
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

        while (length > i) dP.f(O, P = keys[i++], Properties[P]);

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
      var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

      var getWindowNames = function (it) {
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
          if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
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

      var getEntry = function (that, key) {
        // fast case
        var index = fastKey(key);
        var entry;
        if (index !== 'F') return that._i[index]; // frozen object case

        for (entry = that._f; entry; entry = entry.n) {
          if (entry.k == key) return entry;
        }
      };

      module.exports = {
        getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
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
            'delete': function (key) {
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

                while (entry && entry.r) entry = entry.p;
              }
            },
            // 23.1.3.7 Map.prototype.has(key)
            // 23.2.3.7 Set.prototype.has(value)
            has: function has(key) {
              return !!getEntry(validate(this, NAME), key);
            }
          });
          if (DESCRIPTORS) dP(C.prototype, 'size', {
            get: function () {
              return validate(this, NAME)[SIZE];
            }
          });
          return C;
        },
        def: function (that, key, value) {
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
        setStrong: function (C, NAME, IS_MAP) {
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

            while (entry && entry.r) entry = entry.p; // get next entry


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

        var fixMethod = function (KEY) {
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

            while (index--) $instance[ADDER](index, index);

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

          function listener() {
            self.off(name, listener);
            callback.apply(ctx, arguments);
          }

          ;
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

          $split = function (separator, limit) {
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
                  for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
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
          $split = function (separator, limit) {
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

},{"./internal/AsyncSubject":3,"./internal/BehaviorSubject":4,"./internal/Notification":6,"./internal/Observable":7,"./internal/ReplaySubject":10,"./internal/Scheduler":11,"./internal/Subject":12,"./internal/Subscriber":14,"./internal/Subscription":15,"./internal/config":16,"./internal/observable/ConnectableObservable":17,"./internal/observable/bindCallback":19,"./internal/observable/bindNodeCallback":20,"./internal/observable/combineLatest":21,"./internal/observable/concat":22,"./internal/observable/defer":23,"./internal/observable/empty":24,"./internal/observable/forkJoin":25,"./internal/observable/from":26,"./internal/observable/fromEvent":28,"./internal/observable/fromEventPattern":29,"./internal/observable/generate":33,"./internal/observable/iif":34,"./internal/observable/interval":35,"./internal/observable/merge":36,"./internal/observable/never":37,"./internal/observable/of":38,"./internal/observable/onErrorResumeNext":39,"./internal/observable/pairs":40,"./internal/observable/race":41,"./internal/observable/range":42,"./internal/observable/throwError":44,"./internal/observable/timer":45,"./internal/observable/using":46,"./internal/observable/zip":47,"./internal/operators/groupBy":83,"./internal/scheduler/VirtualTimeScheduler":160,"./internal/scheduler/animationFrame":161,"./internal/scheduler/asap":162,"./internal/scheduler/async":163,"./internal/scheduler/queue":164,"./internal/symbol/observable":166,"./internal/util/ArgumentOutOfRangeError":168,"./internal/util/EmptyError":169,"./internal/util/ObjectUnsubscribedError":171,"./internal/util/TimeoutError":172,"./internal/util/UnsubscriptionError":173,"./internal/util/identity":176,"./internal/util/isObservable":185,"./internal/util/noop":188,"./internal/util/pipe":190}],3:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"./Subject":12,"./Subscription":15}],4:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"./Subject":12,"./util/ObjectUnsubscribedError":171}],5:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"./Subscriber":14}],6:[function(require,module,exports){
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

},{"./observable/empty":24,"./observable/of":38,"./observable/throwError":44}],7:[function(require,module,exports){
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

},{"../internal/symbol/observable":166,"./config":16,"./util/canReportError":174,"./util/pipe":190,"./util/toSubscriber":197}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var config_1 = require("./config");

var hostReportError_1 = require("./util/hostReportError");

exports.empty = {
  closed: true,
  next: function (value) {},
  error: function (err) {
    if (config_1.config.useDeprecatedSynchronousErrorHandling) {
      throw err;
    } else {
      hostReportError_1.hostReportError(err);
    }
  },
  complete: function () {}
};

},{"./config":16,"./util/hostReportError":175}],9:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"./Subscriber":14}],10:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"./Subject":12,"./SubjectSubscription":13,"./Subscription":15,"./operators/observeOn":98,"./scheduler/queue":164,"./util/ObjectUnsubscribedError":171}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../internal/symbol/rxSubscriber":167,"./Observable":7,"./SubjectSubscription":13,"./Subscriber":14,"./Subscription":15,"./util/ObjectUnsubscribedError":171}],13:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"./Subscription":15}],14:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

        if (typeof destinationOrNext === 'object') {
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
        var wrappedComplete = function () {
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

},{"../internal/symbol/rxSubscriber":167,"./Observer":8,"./Subscription":15,"./config":16,"./util/hostReportError":175,"./util/isFunction":180}],15:[function(require,module,exports){
"use strict";

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

    switch (typeof teardown) {
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

},{"./util/UnsubscriptionError":173,"./util/isArray":177,"./util/isFunction":180,"./util/isObject":184}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Observable":7,"../Subject":12,"../Subscriber":14,"../Subscription":15,"../operators/refCount":109}],18:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Observable":7,"../scheduler/asap":162,"../util/isNumeric":183}],19:[function(require,module,exports){
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

          var handler = function () {
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

    var handler = function () {
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

},{"../AsyncSubject":3,"../Observable":7,"../operators/map":87,"../util/canReportError":174,"../util/isArray":177,"../util/isScheduler":187}],20:[function(require,module,exports){
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

          var handler = function () {
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

    var handler = function () {
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

},{"../AsyncSubject":3,"../Observable":7,"../operators/map":87,"../util/canReportError":174,"../util/isArray":177,"../util/isScheduler":187}],21:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../OuterSubscriber":9,"../util/isArray":177,"../util/isScheduler":187,"../util/subscribeToResult":196,"./fromArray":27}],22:[function(require,module,exports){
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

},{"../operators/concatAll":59,"./of":38}],23:[function(require,module,exports){
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

},{"../Observable":7,"./empty":24,"./from":26}],24:[function(require,module,exports){
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

},{"../Observable":7}],25:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Observable":7,"../OuterSubscriber":9,"../operators/map":87,"../util/isArray":177,"../util/subscribeToResult":196,"./empty":24}],26:[function(require,module,exports){
"use strict";

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

  throw new TypeError((input !== null && typeof input || input) + ' is not observable');
}

exports.from = from;

},{"../Observable":7,"../util/isArrayLike":178,"../util/isInteropObservable":181,"../util/isIterable":182,"../util/isPromise":186,"../util/subscribeTo":191,"./fromArray":27,"./fromIterable":30,"./fromObservable":31,"./fromPromise":32}],27:[function(require,module,exports){
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

},{"../Observable":7,"../Subscription":15,"../util/subscribeToArray":192}],28:[function(require,module,exports){
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

    unsubscribe = function () {
      return source_1.removeEventListener(eventName, handler, options);
    };
  } else if (isJQueryStyleEventEmitter(sourceObj)) {
    var source_2 = sourceObj;
    sourceObj.on(eventName, handler);

    unsubscribe = function () {
      return source_2.off(eventName, handler);
    };
  } else if (isNodeStyleEventEmitter(sourceObj)) {
    var source_3 = sourceObj;
    sourceObj.addListener(eventName, handler);

    unsubscribe = function () {
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

},{"../Observable":7,"../operators/map":87,"../util/isArray":177,"../util/isFunction":180}],29:[function(require,module,exports){
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
    var handler = function () {
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

},{"../Observable":7,"../operators/map":87,"../util/isArray":177,"../util/isFunction":180}],30:[function(require,module,exports){
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

},{"../Observable":7,"../Subscription":15,"../symbol/iterator":165,"../util/subscribeToIterable":193}],31:[function(require,module,exports){
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
          next: function (value) {
            sub.add(scheduler.schedule(function () {
              return subscriber.next(value);
            }));
          },
          error: function (err) {
            sub.add(scheduler.schedule(function () {
              return subscriber.error(err);
            }));
          },
          complete: function () {
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

},{"../Observable":7,"../Subscription":15,"../symbol/observable":166,"../util/subscribeToObservable":194}],32:[function(require,module,exports){
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

},{"../Observable":7,"../Subscription":15,"../util/subscribeToPromise":195}],33:[function(require,module,exports){
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

},{"../Observable":7,"../util/identity":176,"../util/isScheduler":187}],34:[function(require,module,exports){
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

},{"./defer":23,"./empty":24}],35:[function(require,module,exports){
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

},{"../Observable":7,"../scheduler/async":163,"../util/isNumeric":183}],36:[function(require,module,exports){
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

},{"../Observable":7,"../operators/mergeAll":92,"../util/isScheduler":187,"./fromArray":27}],37:[function(require,module,exports){
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

},{"../Observable":7,"../util/noop":188}],38:[function(require,module,exports){
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

},{"../util/isScheduler":187,"./empty":24,"./fromArray":27,"./scalar":43}],39:[function(require,module,exports){
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
    var subNext = function () {
      return subscriber.add(onErrorResumeNext.apply(void 0, remainder).subscribe(subscriber));
    };

    return from_1.from(first).subscribe({
      next: function (value) {
        subscriber.next(value);
      },
      error: subNext,
      complete: subNext
    });
  });
}

exports.onErrorResumeNext = onErrorResumeNext;

},{"../Observable":7,"../util/isArray":177,"./empty":24,"./from":26}],40:[function(require,module,exports){
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

},{"../Observable":7,"../Subscription":15}],41:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../OuterSubscriber":9,"../util/isArray":177,"../util/subscribeToResult":196,"./fromArray":27}],42:[function(require,module,exports){
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

},{"../Observable":7}],43:[function(require,module,exports){
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

},{"../Observable":7}],44:[function(require,module,exports){
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

},{"../Observable":7}],45:[function(require,module,exports){
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

},{"../Observable":7,"../scheduler/async":163,"../util/isNumeric":183,"../util/isScheduler":187}],46:[function(require,module,exports){
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

},{"../Observable":7,"./empty":24,"./from":26}],47:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../../internal/symbol/iterator":165,"../OuterSubscriber":9,"../Subscriber":14,"../util/isArray":177,"../util/subscribeToResult":196,"./fromArray":27}],48:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../OuterSubscriber":9,"../util/subscribeToResult":196}],49:[function(require,module,exports){
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

},{"../observable/timer":45,"../scheduler/async":163,"./audit":48}],50:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../OuterSubscriber":9,"../util/subscribeToResult":196}],51:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Subscriber":14}],52:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Subscriber":14,"../scheduler/async":163,"../util/isScheduler":187}],53:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../OuterSubscriber":9,"../Subscription":15,"../util/subscribeToResult":196}],54:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../OuterSubscriber":9,"../Subscription":15,"../util/subscribeToResult":196}],55:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../InnerSubscriber":5,"../OuterSubscriber":9,"../util/subscribeToResult":196}],56:[function(require,module,exports){
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

},{"../observable/combineLatest":21}],57:[function(require,module,exports){
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

},{"../observable/combineLatest":21,"../observable/from":26,"../util/isArray":177}],58:[function(require,module,exports){
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

},{"../observable/concat":22}],59:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var mergeAll_1 = require("./mergeAll");

function concatAll() {
  return mergeAll_1.mergeAll(1);
}

exports.concatAll = concatAll;

},{"./mergeAll":92}],60:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var mergeMap_1 = require("./mergeMap");

function concatMap(project, resultSelector) {
  return mergeMap_1.mergeMap(project, resultSelector, 1);
}

exports.concatMap = concatMap;

},{"./mergeMap":93}],61:[function(require,module,exports){
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

},{"./concatMap":60}],62:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Subscriber":14}],63:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../OuterSubscriber":9,"../util/subscribeToResult":196}],64:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Subscriber":14,"../scheduler/async":163}],65:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Subscriber":14}],66:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Notification":6,"../Subscriber":14,"../scheduler/async":163,"../util/isDate":179}],67:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Observable":7,"../OuterSubscriber":9,"../Subscriber":14,"../util/subscribeToResult":196}],68:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Subscriber":14}],69:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../OuterSubscriber":9,"../util/subscribeToResult":196}],70:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Subscriber":14}],71:[function(require,module,exports){
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

},{"./distinctUntilChanged":70}],72:[function(require,module,exports){
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

},{"../util/ArgumentOutOfRangeError":168,"./defaultIfEmpty":65,"./filter":78,"./take":130,"./throwIfEmpty":137}],73:[function(require,module,exports){
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

},{"../observable/concat":22,"../observable/empty":24,"../observable/fromArray":27,"../observable/scalar":43,"../util/isScheduler":187}],74:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Subscriber":14}],75:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../OuterSubscriber":9,"../util/subscribeToResult":196}],76:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../InnerSubscriber":5,"../OuterSubscriber":9,"../observable/from":26,"../util/subscribeToResult":196,"./map":87}],77:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../OuterSubscriber":9,"../util/subscribeToResult":196}],78:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Subscriber":14}],79:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Subscriber":14,"../Subscription":15}],80:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Subscriber":14}],81:[function(require,module,exports){
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

},{"../operators/find":80}],82:[function(require,module,exports){
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

},{"../util/EmptyError":169,"../util/identity":176,"./defaultIfEmpty":65,"./filter":78,"./take":130,"./throwIfEmpty":137}],83:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Observable":7,"../Subject":12,"../Subscriber":14,"../Subscription":15}],84:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Subscriber":14}],85:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Subscriber":14}],86:[function(require,module,exports){
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

},{"../util/EmptyError":169,"../util/identity":176,"./defaultIfEmpty":65,"./filter":78,"./takeLast":131,"./throwIfEmpty":137}],87:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Subscriber":14}],88:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Subscriber":14}],89:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Notification":6,"../Subscriber":14}],90:[function(require,module,exports){
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

},{"./reduce":108}],91:[function(require,module,exports){
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

},{"../observable/merge":36}],92:[function(require,module,exports){
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

},{"../util/identity":176,"./mergeMap":93}],93:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../InnerSubscriber":5,"../OuterSubscriber":9,"../observable/from":26,"../util/subscribeToResult":196,"./map":87}],94:[function(require,module,exports){
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

},{"./mergeMap":93}],95:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../InnerSubscriber":5,"../OuterSubscriber":9,"../util/subscribeToResult":196}],96:[function(require,module,exports){
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

},{"./reduce":108}],97:[function(require,module,exports){
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

},{"../observable/ConnectableObservable":17}],98:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Notification":6,"../Subscriber":14}],99:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../InnerSubscriber":5,"../OuterSubscriber":9,"../observable/from":26,"../util/isArray":177,"../util/subscribeToResult":196}],100:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Subscriber":14}],101:[function(require,module,exports){
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

},{"../util/not":189,"./filter":78}],102:[function(require,module,exports){
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
  var mapper = function (x) {
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

},{"./map":87}],103:[function(require,module,exports){
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

},{"../Subject":12,"./multicast":97}],104:[function(require,module,exports){
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

},{"../BehaviorSubject":4,"./multicast":97}],105:[function(require,module,exports){
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

},{"../AsyncSubject":3,"./multicast":97}],106:[function(require,module,exports){
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

},{"../ReplaySubject":10,"./multicast":97}],107:[function(require,module,exports){
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

},{"../observable/race":41,"../util/isArray":177}],108:[function(require,module,exports){
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

},{"../util/pipe":190,"./defaultIfEmpty":65,"./scan":116,"./takeLast":131}],109:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Subscriber":14}],110:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Subscriber":14,"../observable/empty":24}],111:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../OuterSubscriber":9,"../Subject":12,"../util/subscribeToResult":196}],112:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Subscriber":14}],113:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../OuterSubscriber":9,"../Subject":12,"../util/subscribeToResult":196}],114:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../OuterSubscriber":9,"../util/subscribeToResult":196}],115:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Subscriber":14,"../scheduler/async":163}],116:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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
    get: function () {
      return this._seed;
    },
    set: function (value) {
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

},{"../Subscriber":14}],117:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Subscriber":14}],118:[function(require,module,exports){
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

},{"../Subject":12,"./multicast":97,"./refCount":109}],119:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ReplaySubject_1 = require("../ReplaySubject");

function shareReplay(configOrBufferSize, windowTime, scheduler) {
  var config;

  if (configOrBufferSize && typeof configOrBufferSize === 'object') {
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
        next: function (value) {
          subject.next(value);
        },
        error: function (err) {
          hasError = true;
          subject.error(err);
        },
        complete: function () {
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

},{"../ReplaySubject":10}],120:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Subscriber":14,"../util/EmptyError":169}],121:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Subscriber":14}],122:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Subscriber":14,"../util/ArgumentOutOfRangeError":168}],123:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../InnerSubscriber":5,"../OuterSubscriber":9,"../util/subscribeToResult":196}],124:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Subscriber":14}],125:[function(require,module,exports){
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

},{"../observable/concat":22,"../observable/empty":24,"../observable/fromArray":27,"../observable/scalar":43,"../util/isScheduler":187}],126:[function(require,module,exports){
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

},{"../observable/SubscribeOnObservable":18}],127:[function(require,module,exports){
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

},{"../util/identity":176,"./switchMap":128}],128:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../InnerSubscriber":5,"../OuterSubscriber":9,"../observable/from":26,"../util/subscribeToResult":196,"./map":87}],129:[function(require,module,exports){
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

},{"./switchMap":128}],130:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Subscriber":14,"../observable/empty":24,"../util/ArgumentOutOfRangeError":168}],131:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Subscriber":14,"../observable/empty":24,"../util/ArgumentOutOfRangeError":168}],132:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../OuterSubscriber":9,"../util/subscribeToResult":196}],133:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Subscriber":14}],134:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Subscriber":14,"../util/isFunction":180,"../util/noop":188}],135:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../OuterSubscriber":9,"../util/subscribeToResult":196}],136:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Subscriber":14,"../scheduler/async":163,"./throttle":135}],137:[function(require,module,exports){
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
    next: function () {
      this.hasValue = true;
    },
    complete: function () {
      if (!this.hasValue) {
        throw errorFactory();
      }
    }
  });
};

function defaultErrorFactory() {
  return new EmptyError_1.EmptyError();
}

},{"../util/EmptyError":169,"./tap":134}],138:[function(require,module,exports){
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

},{"../observable/defer":23,"../scheduler/async":163,"./map":87,"./scan":116}],139:[function(require,module,exports){
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

},{"../observable/throwError":44,"../scheduler/async":163,"../util/TimeoutError":172,"./timeoutWith":140}],140:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../OuterSubscriber":9,"../scheduler/async":163,"../util/isDate":179,"../util/subscribeToResult":196}],141:[function(require,module,exports){
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

},{"../scheduler/async":163,"./map":87}],142:[function(require,module,exports){
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

},{"./reduce":108}],143:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../OuterSubscriber":9,"../Subject":12,"../util/subscribeToResult":196}],144:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Subject":12,"../Subscriber":14}],145:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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
    get: function () {
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

},{"../Subject":12,"../Subscriber":14,"../scheduler/async":163,"../util/isNumeric":183,"../util/isScheduler":187}],146:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../OuterSubscriber":9,"../Subject":12,"../Subscription":15,"../util/subscribeToResult":196}],147:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../OuterSubscriber":9,"../Subject":12,"../util/subscribeToResult":196}],148:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../OuterSubscriber":9,"../util/subscribeToResult":196}],149:[function(require,module,exports){
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

},{"../observable/zip":47}],150:[function(require,module,exports){
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

},{"../observable/zip":47}],151:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Subscription":15}],152:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"./AsyncAction":156}],153:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"./AsyncScheduler":157}],154:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../util/Immediate":170,"./AsyncAction":156}],155:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"./AsyncScheduler":157}],156:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"./Action":151}],157:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"../Scheduler":11}],158:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"./AsyncAction":156}],159:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"./AsyncScheduler":157}],160:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

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

},{"./AsyncAction":156,"./AsyncScheduler":157}],161:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var AnimationFrameAction_1 = require("./AnimationFrameAction");

var AnimationFrameScheduler_1 = require("./AnimationFrameScheduler");

exports.animationFrame = new AnimationFrameScheduler_1.AnimationFrameScheduler(AnimationFrameAction_1.AnimationFrameAction);

},{"./AnimationFrameAction":152,"./AnimationFrameScheduler":153}],162:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var AsapAction_1 = require("./AsapAction");

var AsapScheduler_1 = require("./AsapScheduler");

exports.asap = new AsapScheduler_1.AsapScheduler(AsapAction_1.AsapAction);

},{"./AsapAction":154,"./AsapScheduler":155}],163:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var AsyncAction_1 = require("./AsyncAction");

var AsyncScheduler_1 = require("./AsyncScheduler");

exports.async = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);

},{"./AsyncAction":156,"./AsyncScheduler":157}],164:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var QueueAction_1 = require("./QueueAction");

var QueueScheduler_1 = require("./QueueScheduler");

exports.queue = new QueueScheduler_1.QueueScheduler(QueueAction_1.QueueAction);

},{"./QueueAction":158,"./QueueScheduler":159}],165:[function(require,module,exports){
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

},{}],166:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observable = typeof Symbol === 'function' && Symbol.observable || '@@observable';

},{}],167:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rxSubscriber = typeof Symbol === 'function' ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random();
exports.$$rxSubscriber = exports.rxSubscriber;

},{}],168:[function(require,module,exports){
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

},{}],169:[function(require,module,exports){
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

},{}],170:[function(require,module,exports){
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
  setImmediate: function (cb) {
    var handle = nextHandle++;
    tasksByHandle[handle] = cb;
    Promise.resolve().then(function () {
      return runIfPresent(handle);
    });
    return handle;
  },
  clearImmediate: function (handle) {
    delete tasksByHandle[handle];
  }
};

},{}],171:[function(require,module,exports){
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

},{}],172:[function(require,module,exports){
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

},{}],173:[function(require,module,exports){
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

},{}],174:[function(require,module,exports){
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

},{"../Subscriber":14}],175:[function(require,module,exports){
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

},{}],176:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function identity(x) {
  return x;
}

exports.identity = identity;

},{}],177:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.isArray = Array.isArray || function (x) {
  return x && typeof x.length === 'number';
};

},{}],178:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.isArrayLike = function (x) {
  return x && typeof x.length === 'number' && typeof x !== 'function';
};

},{}],179:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function isDate(value) {
  return value instanceof Date && !isNaN(+value);
}

exports.isDate = isDate;

},{}],180:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function isFunction(x) {
  return typeof x === 'function';
}

exports.isFunction = isFunction;

},{}],181:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var observable_1 = require("../symbol/observable");

function isInteropObservable(input) {
  return input && typeof input[observable_1.observable] === 'function';
}

exports.isInteropObservable = isInteropObservable;

},{"../symbol/observable":166}],182:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var iterator_1 = require("../symbol/iterator");

function isIterable(input) {
  return input && typeof input[iterator_1.iterator] === 'function';
}

exports.isIterable = isIterable;

},{"../symbol/iterator":165}],183:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var isArray_1 = require("./isArray");

function isNumeric(val) {
  return !isArray_1.isArray(val) && val - parseFloat(val) + 1 >= 0;
}

exports.isNumeric = isNumeric;

},{"./isArray":177}],184:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function isObject(x) {
  return x !== null && typeof x === 'object';
}

exports.isObject = isObject;

},{}],185:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Observable_1 = require("../Observable");

function isObservable(obj) {
  return !!obj && (obj instanceof Observable_1.Observable || typeof obj.lift === 'function' && typeof obj.subscribe === 'function');
}

exports.isObservable = isObservable;

},{"../Observable":7}],186:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function isPromise(value) {
  return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}

exports.isPromise = isPromise;

},{}],187:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function isScheduler(value) {
  return value && typeof value.schedule === 'function';
}

exports.isScheduler = isScheduler;

},{}],188:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function noop() {}

exports.noop = noop;

},{}],189:[function(require,module,exports){
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

},{}],190:[function(require,module,exports){
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

},{"./noop":188}],191:[function(require,module,exports){
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

},{"../Observable":7,"../symbol/iterator":165,"../symbol/observable":166,"./isArrayLike":178,"./isObject":184,"./isPromise":186,"./subscribeToArray":192,"./subscribeToIterable":193,"./subscribeToObservable":194,"./subscribeToPromise":195}],192:[function(require,module,exports){
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

},{}],193:[function(require,module,exports){
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

},{"../symbol/iterator":165}],194:[function(require,module,exports){
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

},{"../symbol/observable":166}],195:[function(require,module,exports){
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

},{"./hostReportError":175}],196:[function(require,module,exports){
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

},{"../InnerSubscriber":5,"./subscribeTo":191}],197:[function(require,module,exports){
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

},{"../Observer":8,"../Subscriber":14,"../symbol/rxSubscriber":167}],198:[function(require,module,exports){
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

},{"../internal/operators/audit":48,"../internal/operators/auditTime":49,"../internal/operators/buffer":50,"../internal/operators/bufferCount":51,"../internal/operators/bufferTime":52,"../internal/operators/bufferToggle":53,"../internal/operators/bufferWhen":54,"../internal/operators/catchError":55,"../internal/operators/combineAll":56,"../internal/operators/combineLatest":57,"../internal/operators/concat":58,"../internal/operators/concatAll":59,"../internal/operators/concatMap":60,"../internal/operators/concatMapTo":61,"../internal/operators/count":62,"../internal/operators/debounce":63,"../internal/operators/debounceTime":64,"../internal/operators/defaultIfEmpty":65,"../internal/operators/delay":66,"../internal/operators/delayWhen":67,"../internal/operators/dematerialize":68,"../internal/operators/distinct":69,"../internal/operators/distinctUntilChanged":70,"../internal/operators/distinctUntilKeyChanged":71,"../internal/operators/elementAt":72,"../internal/operators/endWith":73,"../internal/operators/every":74,"../internal/operators/exhaust":75,"../internal/operators/exhaustMap":76,"../internal/operators/expand":77,"../internal/operators/filter":78,"../internal/operators/finalize":79,"../internal/operators/find":80,"../internal/operators/findIndex":81,"../internal/operators/first":82,"../internal/operators/groupBy":83,"../internal/operators/ignoreElements":84,"../internal/operators/isEmpty":85,"../internal/operators/last":86,"../internal/operators/map":87,"../internal/operators/mapTo":88,"../internal/operators/materialize":89,"../internal/operators/max":90,"../internal/operators/merge":91,"../internal/operators/mergeAll":92,"../internal/operators/mergeMap":93,"../internal/operators/mergeMapTo":94,"../internal/operators/mergeScan":95,"../internal/operators/min":96,"../internal/operators/multicast":97,"../internal/operators/observeOn":98,"../internal/operators/onErrorResumeNext":99,"../internal/operators/pairwise":100,"../internal/operators/partition":101,"../internal/operators/pluck":102,"../internal/operators/publish":103,"../internal/operators/publishBehavior":104,"../internal/operators/publishLast":105,"../internal/operators/publishReplay":106,"../internal/operators/race":107,"../internal/operators/reduce":108,"../internal/operators/refCount":109,"../internal/operators/repeat":110,"../internal/operators/repeatWhen":111,"../internal/operators/retry":112,"../internal/operators/retryWhen":113,"../internal/operators/sample":114,"../internal/operators/sampleTime":115,"../internal/operators/scan":116,"../internal/operators/sequenceEqual":117,"../internal/operators/share":118,"../internal/operators/shareReplay":119,"../internal/operators/single":120,"../internal/operators/skip":121,"../internal/operators/skipLast":122,"../internal/operators/skipUntil":123,"../internal/operators/skipWhile":124,"../internal/operators/startWith":125,"../internal/operators/subscribeOn":126,"../internal/operators/switchAll":127,"../internal/operators/switchMap":128,"../internal/operators/switchMapTo":129,"../internal/operators/take":130,"../internal/operators/takeLast":131,"../internal/operators/takeUntil":132,"../internal/operators/takeWhile":133,"../internal/operators/tap":134,"../internal/operators/throttle":135,"../internal/operators/throttleTime":136,"../internal/operators/throwIfEmpty":137,"../internal/operators/timeInterval":138,"../internal/operators/timeout":139,"../internal/operators/timeoutWith":140,"../internal/operators/timestamp":141,"../internal/operators/toArray":142,"../internal/operators/window":143,"../internal/operators/windowCount":144,"../internal/operators/windowTime":145,"../internal/operators/windowToggle":146,"../internal/operators/windowWhen":147,"../internal/operators/withLatestFrom":148,"../internal/operators/zip":149,"../internal/operators/zipAll":150}],199:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ITEMS_PER_PAGE = void 0;

var _gtm = _interopRequireDefault(require("../gtm/gtm.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* jshint esversion: 6 */
//import { of } from "rxjs";
const ITEMS_PER_PAGE = 20;
exports.ITEMS_PER_PAGE = ITEMS_PER_PAGE;
const GTM_CAT = 'ricerca-avanzata';

class AdvancedSearchCtrl {
  constructor($scope, $timeout, LocationService, ApiService) {
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

  deserializeFilters() {
    const locationFilters = this.locationService.deserialize('filters') || this.initialFilters || {}; // console.log('AdvancedSearchCtrl.deserializeFilters', filters);

    this.filters.forEach(filter => {
      //if (filter.type === 'minimal') {
      //	filter.doFilter = (item, value) => {
      //		let has = false;
      //		(item.minimals || [item]).forEach(x => {
      //			has = has || x.features.indexOf(value) !== -1;
      //		});
      //		return has;
      //	};
      //} else {
      filter.doFilter = (item, value) => {
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


      const selectedOption = filter.options.find(o => Boolean(o.value === (locationFilters[filter.key] || null)));

      if (selectedOption) {
        filter.value = selectedOption.value;
        filter.placeholder = selectedOption.label;
      } else {
        filter.value = null;
        filter.placeholder = null;
      } // console.log(x, filters[x], filter.value);

    });
    return this.filters;
  }

  serializeFilters() {
    let filters = {};
    let any = false;
    this.filters.forEach(filter => {
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
  }

  applyFilters(serialize) {
    // console.log('AdvancedSearchCtrl.applyFilters', this.filters);
    if (serialize !== false) this.serializeFilters();
    const selectedFilters = this.filters.filter(x => x.value !== null); //const finishFilter = this.filters.find(x => x.key == 'finish' && x.value !== null);
    //const sizeFilter = this.filters.find(x => x.key == 'size' && x.value !== null);

    let filteredItems;

    if (selectedFilters.length) {
      filteredItems = this.items.map(x => {
        // duplico i prodotti e minimal
        const item = Object.assign({}, x);
        item.minimals = [...x.minimals];
        return item;
      }).filter(item => {
        // filtro tutti i minimal con tutti i filtri contemporeamente
        selectedFilters.forEach(filter => {
          item.minimals = item.minimals.filter(minimal => {
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
    this.$timeout(() => {
      this.filteredItems = filteredItems;
      this.visibleItems = filteredItems.slice(0, this.maxItems);
      this.updateFilterStates(filteredItems);
    }, 50);

    _gtm.default.pageViewFilters(GTM_CAT, this.filters);
  }

  updateFilterStates(brands) {
    this.filters.forEach(filter => {
      filter.options.forEach(option => {
        let has = false;

        if (option.value) {
          for (const item of this.filteredItems) {
            for (const minimal of item.minimals) {
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
  }

  setFilter(item, filter) {
    filter.value = item.value;
    filter.placeholder = item.label;
    this.applyFilters();
    this.$scope.$broadcast('onCloseDropdown');
  }

  removeFilter(filter) {
    filter.value = null;
    filter.placeholder = null;
    this.applyFilters();
  }

  removeAll() {
    this.filters.forEach(filter => {
      filter.value = null;
      filter.placeholder = null;
    });
    this.applyFilters();
  }

  onScroll(event) {
    if (event.rect.bottom < event.windowRect.bottom) {
      // console.log('more!');
      if (!this.busy && this.maxItems < this.filteredItems.length) {
        this.$timeout(() => {
          this.busy = true;
          this.$timeout(() => {
            this.maxItems += ITEMS_PER_PAGE;
            this.visibleItems = this.filteredItems.slice(0, this.maxItems);
            this.busy = false; // console.log(this.visibleItems.length);
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


}

AdvancedSearchCtrl.$inject = ['$scope', '$timeout', 'LocationService', 'ApiService'];
var _default = AdvancedSearchCtrl;
exports.default = _default;

},{"../gtm/gtm.service":238}],200:[function(require,module,exports){
"use strict";

var _appModule = _interopRequireDefault(require("./app.module.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* jshint esversion: 6 */
// console.log('bootstrap', document);
angular.bootstrap(document, [_appModule.default]);

},{"./app.module.js":201}],201:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _advancedSearch = _interopRequireDefault(require("./advanced-search/advanced-search.controller"));

var _collections = _interopRequireDefault(require("./collections/collections.controller"));

var _contacts = _interopRequireDefault(require("./contacts/contacts.controller"));

var _appear = _interopRequireDefault(require("./directives/appear.directive"));

var _autocomplete = _interopRequireDefault(require("./directives/autocomplete.directive"));

var _cookies = _interopRequireDefault(require("./directives/cookies.directive"));

var _glslCanvas = _interopRequireDefault(require("./directives/glsl-canvas.directive"));

var _hasDropdown = _interopRequireDefault(require("./directives/has-dropdown.directive"));

var _hilight = _interopRequireDefault(require("./directives/hilight.directive"));

var _href = _interopRequireDefault(require("./directives/href.directive"));

var _lastItem = require("./directives/last-item.directive");

var _lazyScript = _interopRequireDefault(require("./directives/lazy-script.directive"));

var _lazy = _interopRequireDefault(require("./directives/lazy.directive"));

var _media = _interopRequireDefault(require("./directives/media.directive"));

var _muuri = require("./directives/muuri.directive");

var _objectFit = _interopRequireDefault(require("./directives/object-fit.directive"));

var _parallax = _interopRequireDefault(require("./directives/parallax.directive"));

var _scroll = _interopRequireDefault(require("./directives/scroll.directive"));

var _sticky = _interopRequireDefault(require("./directives/sticky.directive"));

var _swiper = require("./directives/swiper.directive");

var _thron = _interopRequireDefault(require("./directives/thron.directive"));

var _video = _interopRequireDefault(require("./directives/video.directive"));

var _visibility = _interopRequireDefault(require("./directives/visibility.directive"));

var _wishlist = _interopRequireDefault(require("./directives/wishlist.directive"));

var _world = _interopRequireDefault(require("./directives/world.directive"));

var _zoomable = _interopRequireDefault(require("./directives/zoomable.directive"));

var _faq = _interopRequireDefault(require("./faq/faq.controller"));

var _imageWithFeatures = require("./filters/image-with-features.filter");

var _notIn = require("./filters/notIn.filter");

var _trusted = require("./filters/trusted.filter");

var _controlMessages = _interopRequireDefault(require("./forms/control-messages.directive"));

var _control = _interopRequireDefault(require("./forms/control.directive"));

var _validate = _interopRequireDefault(require("./forms/validate.directive"));

var _galleries = _interopRequireDefault(require("./galleries/galleries.controller"));

var _gtmCollection = _interopRequireDefault(require("./gtm/gtm-collection.directive"));

var _gtmDealerlocator = _interopRequireDefault(require("./gtm/gtm-dealerlocator.directive"));

var _gtmForm = _interopRequireDefault(require("./gtm/gtm-form.directive"));

var _highway = _interopRequireDefault(require("./highway/highway.directive"));

var _magazine = _interopRequireDefault(require("./magazine/magazine.controller"));

var _moodboardDropdown = _interopRequireDefault(require("./moodboard/moodboard-dropdown.directive"));

var _moodboardSearch = _interopRequireDefault(require("./moodboard/moodboard-search.directive"));

var _moodboardSection = _interopRequireDefault(require("./moodboard/moodboard-section.controller"));

var _moodboard = _interopRequireDefault(require("./moodboard/moodboard.controller"));

var _news = _interopRequireDefault(require("./news/news.controller"));

var _references = _interopRequireDefault(require("./references/references.controller"));

var _root = _interopRequireDefault(require("./root.controller"));

var _api = _interopRequireDefault(require("./services/api.service"));

var _dom = _interopRequireDefault(require("./services/dom.service"));

var _wishlist2 = _interopRequireDefault(require("./services/wishlist.service"));

var _location = _interopRequireDefault(require("./shared/location.service"));

var _promise = _interopRequireDefault(require("./shared/promise.service"));

var _state = _interopRequireDefault(require("./shared/state.service"));

var _storage = require("./shared/storage.service");

var _storeLocator = _interopRequireDefault(require("./store-locator/store-locator.controller"));

var _stores = _interopRequireDefault(require("./store-locator/stores.controller"));

var _wishlist3 = _interopRequireDefault(require("./wishlist/wishlist.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* jshint esversion: 6 */
// import TransitionDirective from './directives/transition.directive';
const MODULE_NAME = 'app';
const app = angular.module(MODULE_NAME, ['ngSanitize', 'jsonFormatter']);
app.config(['$locationProvider', function ($locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('*');
}]).config(['$compileProvider', function ($compileProvider) {
  $compileProvider.debugInfoEnabled(false);
}]);
app.factory('ApiService', _api.default.factory).factory('DomService', _dom.default.factory).factory('LocationService', _location.default.factory).factory('PromiseService', _promise.default.factory).factory('StateService', _state.default.factory).factory('CookieService', _storage.CookieService.factory).factory('LocalStorageService', _storage.LocalStorageService.factory).factory('SessionStorageService', _storage.SessionStorageService.factory).factory('WishlistService', _wishlist2.default.factory);
app.directive('appear', _appear.default.factory).directive('control', _control.default.factory).directive('controlMessages', _controlMessages.default.factory).directive('cookies', _cookies.default.factory).directive('glslCanvas', _glslCanvas.default.factory).directive('gtmCollection', _gtmCollection.default.factory).directive('gtmDealerLocator', _gtmDealerlocator.default.factory).directive('gtmForm', _gtmForm.default.factory).directive('hasDropdown', _hasDropdown.default.factory).directive('highway', _highway.default.factory).directive('hilight', _hilight.default.factory).directive('href', _href.default.factory).directive('lastItem', _lastItem.LastItemDirective.factory).directive('lazy', _lazy.default.factory).directive('lazyScript', _lazyScript.default.factory).directive('thron', _thron.default.factory).directive('media', _media.default.factory).directive('moodboardDropdown', _moodboardDropdown.default.factory).directive('moodboardSearch', _moodboardSearch.default.factory).directive('muuri', _muuri.MuuriDirective.factory).directive('parallax', _parallax.default.factory).directive('objectFit', _objectFit.default.factory).directive('scroll', _scroll.default.factory).directive('selectWithAutocomplete', _autocomplete.default.factory).directive('sticky', _sticky.default.factory).directive('swiperGallery', _swiper.SwiperGalleryDirective.factory).directive('swiperHero', _swiper.SwiperHeroDirective.factory).directive('swiperProjects', _swiper.SwiperProjectsDirective.factory).directive('swiperTile', _swiper.SwiperTileDirective.factory).directive('swiperTimeline', _swiper.SwiperTimelineDirective.factory) // .directive('transition', TransitionDirective.factory)
.directive('validate', _validate.default.factory).directive('video', _video.default.factory).directive('visibility', _visibility.default.factory).directive('wishlist', _wishlist.default.factory).directive('world', _world.default.factory).directive('zoomable', _zoomable.default.factory);
app.controller('RootCtrl', _root.default).controller('AdvancedSearchCtrl', _advancedSearch.default).controller('CollectionsCtrl', _collections.default).controller('ContactsCtrl', _contacts.default).controller('FaqCtrl', _faq.default).controller('GalleriesCtrl', _galleries.default).controller('MagazineCtrl', _magazine.default).controller('MoodboardCtrl', _moodboard.default).controller('MoodboardSectionCtrl', _moodboardSection.default).controller('NewsCtrl', _news.default).controller('ReferencesCtrl', _references.default).controller('StoreLocatorCtrl', _storeLocator.default).controller('StoresCtrl', _stores.default).controller('WishlistCtrl', _wishlist3.default);
app.filter('imageWithFeatures', [_imageWithFeatures.ImageWithFeatures]).filter('notIn', ['$filter', _notIn.NotInFilter]).filter('trusted', ['$sce', _trusted.TrustedFilter]); // app.run(['$compile', '$timeout', '$rootScope', function($compile, $timeout, $rootScope) {}]);

app.run(['$compile', '$timeout', '$rootScope', function ($compile, $timeout, $rootScope) {
  $rootScope.first = true;
  $rootScope.firstView = document.querySelector('.view').cloneNode(true); // console.log('$rootScope.firstView', $rootScope.firstView);
}]);
var _default = MODULE_NAME;
exports.default = _default;

},{"./advanced-search/advanced-search.controller":199,"./collections/collections.controller":202,"./contacts/contacts.controller":203,"./directives/appear.directive":204,"./directives/autocomplete.directive":205,"./directives/cookies.directive":206,"./directives/glsl-canvas.directive":207,"./directives/has-dropdown.directive":208,"./directives/hilight.directive":209,"./directives/href.directive":210,"./directives/last-item.directive":211,"./directives/lazy-script.directive":212,"./directives/lazy.directive":213,"./directives/media.directive":214,"./directives/muuri.directive":215,"./directives/object-fit.directive":216,"./directives/parallax.directive":217,"./directives/scroll.directive":218,"./directives/sticky.directive":219,"./directives/swiper.directive":220,"./directives/thron.directive":221,"./directives/video.directive":222,"./directives/visibility.directive":223,"./directives/wishlist.directive":224,"./directives/world.directive":225,"./directives/zoomable.directive":226,"./faq/faq.controller":227,"./filters/image-with-features.filter":228,"./filters/notIn.filter":229,"./filters/trusted.filter":230,"./forms/control-messages.directive":231,"./forms/control.directive":232,"./forms/validate.directive":233,"./galleries/galleries.controller":234,"./gtm/gtm-collection.directive":235,"./gtm/gtm-dealerlocator.directive":236,"./gtm/gtm-form.directive":237,"./highway/highway.directive":240,"./magazine/magazine.controller":242,"./moodboard/moodboard-dropdown.directive":243,"./moodboard/moodboard-search.directive":244,"./moodboard/moodboard-section.controller":245,"./moodboard/moodboard.controller":246,"./news/news.controller":247,"./references/references.controller":248,"./root.controller":249,"./services/api.service":250,"./services/dom.service":251,"./services/wishlist.service":252,"./shared/location.service":253,"./shared/promise.service":254,"./shared/state.service":257,"./shared/storage.service":258,"./store-locator/store-locator.controller":259,"./store-locator/stores.controller":260,"./wishlist/wishlist.controller":261}],202:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _gtm = _interopRequireDefault(require("../gtm/gtm.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* jshint esversion: 6 */
const GTM_CAT = 'collezioni';

class CollectionsCtrl {
  constructor($scope, $timeout, LocationService) {
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

  test() {
    this.test = true;
    this.applyFilters(false);
  }

  deserializeFilters(initialFilter) {
    const locationFilters = this.locationService.deserialize('filters') || initialFilter || {}; // console.log('CollectionsCtrl.deserializeFilters', filters);

    Object.keys(this.filters).forEach(x => {
      const filter = this.filters[x];

      switch (x) {
        case 'collections':
          filter.doFilter = (item, value) => {
            return item.id === value;
          };

          break;

        default:
          filter.doFilter = (item, value) => {
            return item.features.indexOf(value) !== -1;
          };

      }

      filter.options.unshift({
        label: filter.placeholder,
        value: null
      });
      const selectedOption = filter.options.find(o => Boolean(o.value === (locationFilters[x] || null)));
      filter.value = selectedOption.value;
      filter.placeholder = selectedOption.label;
    });
    return filters;
  }

  serializeFilters() {
    let filters = {};
    let any = false;
    Object.keys(this.filters).forEach(x => {
      const filter = this.filters[x];

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
  }

  applyFilters(serialize) {
    /*
    const filters = Object.keys(this.filters).map((x) => {
    	return Object.assign({ type: x }, this.filters[x]);
    }).filter(x => x.value !== null);
    */
    if (serialize !== false) this.serializeFilters();
    const {
      filteredBrands,
      resultCounts,
      totalCounts
    } = this.getFilteredBrands(); // console.log(filteredBrands, filters);

    if (this.test) {
      filteredBrands.forEach(brand => brand.collections.forEach(collection => {
        collection.size = 1 + Math.floor(Math.random() * 6);

        if (collection.size < 4) {
          collection.size = 1;
        } else if (collection.size < 6) {
          collection.size = 2;
        } else {
          collection.size = 3;
        }
      }));
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


    filteredBrands.forEach(brand => {
      brand.collections = this.getSortedPattern(brand.collections);
    });
    this.filteredBrands = [];
    this.$timeout(() => {
      this.filteredBrands = filteredBrands;
      this.resultCounts = resultCounts;
      this.totalCounts = totalCounts;
      this.updateFilterStates(); // delayer for image update
    }, 50);

    _gtm.default.pageViewFilters(GTM_CAT, this.filters);
  }

  getSortedSize(items) {
    items.sort((a, b) => {
      return b.size - a.size;
    }); // console.log(items.map(x => x.size).join(','));

    return items;
  }

  getSortedPattern(items) {
    const order = [3, 2, 1, 2, 1, 1, 1, 2, 3, 1, 2, 1];
    let sorted = [],
        i = 0;

    while (items.length) {
      const size = order[i % order.length];
      const item = items.find(x => x.size === size);

      if (item) {
        items.splice(items.indexOf(item), 1);
        sorted.push(item);
      } else {
        sorted.push(items.shift());
      }

      i++;
    }

    console.log(sorted.map(x => x.size).join(','));
    return sorted;
  }

  getFilteredBrands(skipFilter) {
    const filters = Object.keys(this.filters).map(x => this.filters[x]).filter(x => x.value !== null);
    const filteredBrands = filters.length ? [] : this.brands;
    let resultCounts = 0,
        totalCounts = 0;

    if (filters.length) {
      this.brands.map(x => Object.assign({}, x)).forEach(brand => {
        const filteredCollections = [];
        brand.collections.forEach(collection => {
          let has = true;
          filters.forEach(filter => {
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
      filteredBrands,
      resultCounts,
      totalCounts
    };
  }

  updateFilterStates() {
    Object.keys(this.filters).forEach(x => {
      const filter = this.filters[x];
      const {
        filteredBrands,
        resultCounts,
        totalCounts
      } = this.getFilteredBrands(filter);
      const collections = [].concat.apply([], filteredBrands.map(x => x.collections));
      filter.options.forEach(option => {
        let has = false;

        if (option.value) {
          let i = 0;

          while (i < collections.length && !has) {
            const collection = collections[i];
            has = filter.doFilter(collection, option.value);
            i++;
          }
        } else {
          has = true;
        }

        option.disabled = !has;
      }); // console.log(filter.options);
    });
  }

  setFilter(item, filter) {
    item = item || filter.options[0];
    filter.value = item.value;
    filter.placeholder = item.label;
    this.applyFilters();
    this.$scope.$broadcast('onCloseDropdown');
  }

  removeFilter(filter) {
    this.setFilter(null, filter);
  }

}

CollectionsCtrl.$inject = ['$scope', '$timeout', 'LocationService'];
var _default = CollectionsCtrl;
exports.default = _default;

},{"../gtm/gtm.service":238}],203:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* jshint esversion: 6 */
class ContactsCtrl {
  constructor($scope, $location, $timeout, $http, StateService) {
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

  setProvinces() {
    this.$timeout(() => {
      this.provinces = this.data.provinces.filter(x => x.idstato === this.model.country);
    });
  }

  onSubmit() {
    console.log('ContactsCtrl.onSubmit', this.model);

    if (this.state.busy()) {
      this.$http.post('/WS/wsForms.asmx/SaveForm', {
        datamodel: this.model
      }).then(success => {
        this.state.success();
        this.$scope.$emit('formsubmit');
      }, error => {
        this.error = error;
        this.state.error(error);
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
  }

  onInvalid() {
    this.$scope.$broadcast('onInvalid');
  }

}

ContactsCtrl.$inject = ['$scope', '$location', '$timeout', '$http', 'StateService'];
var _default = ContactsCtrl;
exports.default = _default;

},{}],204:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* jshint esversion: 6 */
class AppearDirective {
  constructor(DomService) {
    this.domService = DomService;
    this.restrict = 'A';
  }

  link(scope, element, attributes, controller) {
    const node = element[0];

    if (window.matchMedia('print').matches) {
      return node.classList.add('appeared');
    }

    const section = this.getSection(node);
    element.index = [].slice.call(section.querySelectorAll('[appear]')).indexOf(node);
    const subscription = this.domService.appear$(node).subscribe(event => {
      // -0.05
      // console.log(event.rect.top);
      const rect = event.rect;
      const x = rect.left;
      const y = 0; // event.rect.top;

      const index = Math.floor(y / 320) * Math.floor(window.innerWidth / 320) + Math.floor(x / 320);
      const timeout = index * 50;
      setTimeout(() => {
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

    const onBeforePrint = () => {
      node.classList.add('appeared', 'print');
      subscription.unsubscribe();
    };

    window.addEventListener('beforeprint', onBeforePrint);
    element.on('$destroy', () => {
      window.removeEventListener('beforeprint', onBeforePrint);
      subscription.unsubscribe();
    });
  }

  getSection(node) {
    let section = node.parentNode;
    let p = node;

    while (p) {
      p = p.parentNode;

      if (p && p.classList && p.classList.contains('section')) {
        section = p;
        p = null;
      }
    }

    return section;
  }

  static factory(DomService) {
    return new AppearDirective(DomService);
  }

}

exports.default = AppearDirective;
AppearDirective.factory.$inject = ['DomService'];

},{}],205:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _hasDropdown = _interopRequireDefault(require("./has-dropdown.directive"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* jshint esversion: 6 */
class AutocompleteDirective {
  constructor($timeout) {
    this.$timeout = $timeout;
    this.restrict = 'A';
    this.scope = {
      filter: '=selectWithAutocomplete',
      handler: '=',
      onSetItem: '=?',
      onRemoveItem: '=?'
    };
    this.template = `
		<div class="dropdown">
			<ul class="nav nav--select">
				<li ng-repeat="item in items track by $index" ng-class="{ active: item.value == filter.value, disabled: item.disabled }">
					<span class="option" ng-class="{ 'option--picture': item.image }" ng-click="setItem(item)">
						<img ng-src="{{item.image}}" ng-if="item.image" />
						<span ng-bind="item.label"></span>
					</span>
				</li>
			</ul>
		</div>
		<label class="label" ng-bind="filter.label"></label>
		<div class="control control--select" ng-class="{ selected: filter.value }">
			<div class="input">
				<svg class="icon icon--search" ng-if="!filter.value"><use xlink:href="#search"></use></svg>
				<svg class="icon icon--close" ng-if="filter.value" ng-click="removeItem()"><use xlink:href="#close"></use></svg>
				<input type="text" class="value" ng-model="autocomplete.query" ng-model-options="{ debounce: 200 }" ng-disabled="filter.value" placeholder="{{filter.placeholder}}" ng-change="onChange($event)" ng-click="onClick($event)"></input>
				<svg class="icon icon--arrow-down"><use xlink:href="#arrow-down"></use></svg>
			</div>
		</div>
		`;
  }

  link(scope, element, attributes, controller) {
    const node = element[0];
    const input = node.querySelector('input');
    const uid = _hasDropdown.default.dropDownUid++;
    const autocomplete = scope.autocomplete = {
      query: null
    };
    const filter = scope.filter;
    scope.items = scope.filter.options;
    node.initialFocus = null; // scope.$parent.hasDropdown = null;

    scope.setItem = item => {
      filter.value = item.value;
      autocomplete.query = null;

      if (scope.handler) {
        scope.handler.setFilter(item, filter);
      }
    };

    scope.removeItem = item => {
      filter.value = null;
      autocomplete.query = null;

      if (scope.handler) {
        scope.handler.removeFilter(filter);
      }
    };

    scope.onChange = event => {
      autocomplete.results = filter.options.filter(x => x.label.toLowerCase().indexOf(autocomplete.query.toLowerCase()) !== -1);

      if (autocomplete.results) {
        scope.items = autocomplete.results;
        scope.$parent.hasDropdown = uid;
        node.initialFocus = true;
      } else {
        scope.items = filter.options;
        scope.$parent.hasDropdown = null;
      } // console.log('onChange', autocomplete.query, autocomplete.results);

    };

    const onClickInput = event => {
      event.stopPropagation(); // console.log('onClickInput', event);
    };

    const onClick = event => {
      const clickedInside = node === event.target || node.contains(event.target); // || !document.contains(event.target)

      if (clickedInside) {
        node.initialFocus = true;
        this.$timeout(() => {
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
        this.$timeout(() => {
          if (scope.$parent.hasDropdown === uid) {
            scope.$parent.hasDropdown = null;
            scope.items = filter.options;
            autocomplete.query = null;
            autocomplete.results = [];
          }
        });
      }
    };

    scope.$parent.$watch('hasDropdown', value => {
      // console.log('hasDropdown', value, uid);
      if (scope.$parent.hasDropdown === uid) {
        node.classList.add('opened');
      } else {
        node.classList.remove('opened');
      }
    });

    const addListeners = () => {
      input.addEventListener('click', onClickInput);
      document.addEventListener('click', onClick); // element.on('click', onClick);
    };

    const removeListeners = () => {
      input.removeEventListener('click', onClickInput);
      document.removeEventListener('click', onClick); // element.off('click', onClick);
    };

    addListeners();
    element.on('$destroy', () => {
      removeListeners();
    });
  }

  static factory($timeout) {
    return new AutocompleteDirective($timeout);
  }

}

exports.default = AutocompleteDirective;
AutocompleteDirective.factory.$inject = ['$timeout'];

},{"./has-dropdown.directive":208}],206:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* jshint esversion: 6 */
class CookiesDirective {
  constructor($timeout, StorageService) {
    this.$timeout = $timeout;
    this.storage = StorageService;
    this.restrict = 'A';
  }

  link(scope, element, attributes, controller) {
    const accept = () => {
      var dt = new Date();
      dt.setDate(dt.getDate() + 365);
      document.cookie = '_cookiepolicy=accept; path=/; expires=' + dt.toUTCString();
    };

    const node = element[0];
    const cookiesAccepted = this.storage.get('cookiesAccepted');

    if (cookiesAccepted) {
      node.classList.add('cookies-accepted');
    }

    scope.onAcceptCookies = event => {
      this.storage.set('cookiesAccepted', true); // accept();

      TweenMax.to(node, 0.5, {
        bottom: '-100%',
        ease: Power2.easeInOut,
        delay: 0.15,
        onComplete: () => {
          node.classList.add('cookies-accepted');
        }
      });
    };
  }

  static factory($timeout, StorageService) {
    return new CookiesDirective($timeout, StorageService);
  }

}

exports.default = CookiesDirective;
CookiesDirective.factory.$inject = ['$timeout', 'CookieService'];

},{}],207:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _shader = require("../shared/shader");

/* jshint esversion: 6 */
class GlslCanvasDirective {
  /*
  removed "node_modules/glsl-canvas-js/dist/glsl-canvas.js",
  from gulpfile.config.json
  */
  constructor(DomService) {
    this.domService = DomService;
    this.restrict = 'A';
  }

  link(scope, element, attributes, controller) {
    console.log('GlslCanvasDirective.link');
    const node = element[0];
    const canvas = new GlslCanvas(node, {
      fragmentString: _shader.FRAGMENT_SHADER
    }); // const canvas = new GlslCanvas(node);

    canvas.setTexture('u_texture', attributes.glslCanvas, {
      repeat: true
    });
    canvas.setUniform('u_pow', 1.0);
    canvas.setUniform('u_top', 0.0);
    canvas.setUniform('u_strength', attributes.withVideo !== undefined ? 0.1 : 0.05);
    let pow = {
      pow: 1.0
    };
    let tween;

    const onOver = event => {
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
        onUpdate: () => {
          // console.log(pow.pow);
          canvas.setUniform('u_pow', pow.pow);
        }
      });
    };

    const onOut = event => {
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
        onUpdate: () => {
          // console.log(pow.pow);
          canvas.setUniform('u_pow', pow.pow);
        }
      });
    };

    node.addEventListener('mouseover', onOver);
    node.addEventListener('mouseout', onOut);
    const subscription = this.domService.raf$().subscribe(scroll => {
      canvas.setUniform('u_top', window.scrollY || window.scrollTop || 0);
    });
    canvas.on('error', function (error) {
      console.log(error);
    });
    element.on('$destroy', () => {
      if (tween) {
        tween.kill();
      }

      node.removeEventListener('mouseover', onOver);
      node.removeEventListener('mouseout', onOut);
      subscription.unsubscribe();
      canvas.destroy();
    });
  }

  static factory(DomService) {
    return new GlslCanvasDirective(DomService);
  }

}

exports.default = GlslCanvasDirective;
GlslCanvasDirective.factory.$inject = ['DomService'];

},{"../shared/shader":256}],208:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* jshint esversion: 6 */
class HasDropdownDirective {
  constructor($timeout) {
    this.$timeout = $timeout;
    this.restrict = 'A';
    this.scope = false;
  }

  link(scope, element, attributes, controller) {
    const node = element[0];
    const uid = HasDropdownDirective.dropDownUid++;
    let opened = null;
    const consumer = attributes.hasDropdownConsumer !== undefined ? scope.$eval(attributes.hasDropdownConsumer) : null; // scope.hasDropdown = null;
    // console.log(attributes.hasDropdown);

    const trigger = attributes.hasDropdown !== '' ? node.querySelector(attributes.hasDropdown) : node;

    const onClick = event => {
      // console.log(trigger, node, attributes.hasDropdown);
      if (opened === null) {
        openDropdown();
      } else if (trigger !== node) {
        closeDropdown();
      }
    };

    const onDocumentClick = event => {
      const clickedInside = node === event.target || node.contains(event.target); // || !document.contains(event.target)

      if (!clickedInside) {
        closeDropdown();
      }
    };

    const onShowHide = value => {
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

    const openDropdown = () => {
      if (opened === null) {
        opened = true;
        addDocumentListeners();

        if (consumer) {
          const dropdown = node.querySelector('[dropdown]');
          consumer.onDroppedIn(dropdown).then(success => {// console.log('success');
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

        this.$timeout(() => {
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

    const closeDropdown = () => {
      if (opened !== null) {
        removeDocumentListeners();
        this.$timeout(() => {
          opened = null;

          if (consumer) {
            const dropdown = node.querySelector('[dropdown]');
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

    const addListeners = () => {
      trigger.addEventListener('click', onClick);
    };

    const addDocumentListeners = () => {
      document.addEventListener('click', onDocumentClick);
    };

    const removeListeners = () => {
      trigger.removeEventListener('click', onClick);
    };

    const removeDocumentListeners = () => {
      document.removeEventListener('click', onDocumentClick);
    };

    addListeners();
    element.on('$destroy', () => {
      removeListeners();
      removeDocumentListeners();
    });
  }

  static factory($timeout) {
    return new HasDropdownDirective($timeout);
  }

}

exports.default = HasDropdownDirective;
HasDropdownDirective.dropDownUid = 0;
HasDropdownDirective.factory.$inject = ['$timeout'];

},{}],209:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* jshint esversion: 6 */
class HilightDirective {
  constructor() {
    this.restrict = 'A';
  }

  link(scope, element, attributes, controller) {
    const node = element[0];
    let hilight, query;

    const update = () => {
      if (hilight) {
        if (query) {
          const index = hilight.toLowerCase().indexOf(query);

          if (index !== -1) {
            node.innerHTML = `${hilight.substring(0, index)}<span class="hilight">${hilight.substring(index, index + query.length)}</span>${hilight.substring(index + query.length, hilight.length)}`;
          } else {
            node.innerHTML = hilight;
          }
        } else {
          node.innerHTML = hilight;
        }
      } // console.log(hilight, query, node.innerHTML);

    };

    scope.$watch(attributes.hilight, (current, previous) => {
      // console.log('HilightDirective.hilight', current, previous);
      hilight = current;
      update();
    });
    scope.$watch(attributes.query, (current, previous) => {
      // console.log('HilightDirective.query', current, previous);
      query = current;
      update();
    });
    return;
  }

  static factory() {
    return new HilightDirective();
  }

}

exports.default = HilightDirective;
HilightDirective.factory.$inject = [];

},{}],210:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* jshint esversion: 6 */
const USE_HIGHWAY = true;

class HrefDirective {
  constructor() {
    this.restrict = 'A';
  }

  link(scope, element, attributes, controller) {
    const node = element[0];

    const onClick = () => {
      window.location.href = node.getAttribute('href')
      /* attributes.href mantiene il valore iniziale */
      ;
    };

    if (USE_HIGHWAY) {
      if (attributes.routerDisabled === undefined) {
        scope.$emit('onHrefNode', node);
      } else {
        // console.log(attributes.routerDisabled, node);
        node.addEventListener('click', onClick);
      }

      return;
    } else {
      if (node.nodeName.toLowerCase() === 'link') {
        return;
      }

      if (attributes.target === '_blank') {
        return;
      }

      const onClick = event => {
        const href = attributes.href;
        const absolute = /^(http:|https:|\/\/)/.test(href);
        const domain = this.getDomain(href);
        const currentDomain = this.getDomain(window.location.href);

        if (absolute && domain !== currentDomain) {
          window.location.href = href;
          return;
        } // Se c'è un cambio di mercato, facciamo ricaricare la pagina


        const market = this.getMarket(href);
        const currentMarket = this.getMarket(window.location.href); // console.log('onNavigationShouldFetch', currentMarket, market);

        if (currentMarket !== null && market !== currentMarket) {
          window.location.href = href;
          return;
        }

        if (window.location.href.indexOf(href) !== -1) {
          node.classList.add('active');
        } else {
          node.classList.remove('active');
        }

        event.preventDefault();
        event.stopImmediatePropagation();

        if (href === '#') {
          return;
        }

        const title = node.innerText;
        scope.$emit('onNavigationShouldFetch', {
          title,
          href
        });
      };

      node.addEventListener('click', onClick);
      /*
      scope.$on('onNavigationEnded', function($scope, $href) {
      	if (href === $href) {
      		node.classList.add('active');
      	} else {
      		node.classList.remove('active');
      	}
      });
      */

      element.on('$destroy', () => {
        node.removeEventListener('click', onClick);
      });
    }

    element.on('$destroy', () => {
      node.removeEventListener('click', onClick);
    });
    return;
  }

  getDomain(text) {
    const domainRegexp = /([[a-zA-Z0-9-_]+\.]*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,11})/;
    const matches = text.match(domainRegexp);
    return matches && matches.length > 1 ? matches[1] : null;
  }

  getMarket(text) {
    const marketRegexp = /(^|[^\/])\/([^\/]+)/;
    const matches = text.match(marketRegexp);
    return matches && matches.length > 2 ? matches[2] : null;
  }

  static factory() {
    return new HrefDirective();
  }

}

exports.default = HrefDirective;
HrefDirective.factory.$inject = [];

},{}],211:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LastItemDirective = void 0;

/* jshint esversion: 6 */
class LastItemDirective {
  constructor($timeout) {
    this.$timeout = $timeout;
    this.restrict = 'A';
  }

  link(scope, element, attributes, controller) {
    if (scope.$last === true) {
      this.$timeout(() => {
        scope.$emit('lastItem', element);
      });
    }
  }

  static factory($timeout) {
    return new LastItemDirective($timeout);
  }

}

exports.LastItemDirective = LastItemDirective;
LastItemDirective.factory.$inject = ['$timeout'];

},{}],212:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* jshint esversion: 6 */
class LazyScriptDirective {
  constructor() {
    this.restrict = 'A';
    this.scope = false;
  }

  link(scope, element, attributes, controller) {
    // if (attributes.type === 'text/javascript-lazy') {
    if (attributes.src !== undefined) {
      fetch(attributes.src, {
        mode: 'no-cors'
      }).then(response => {
        const code = response.text();

        try {
          new Function(code)();
        } catch (error) {
          console.log('LazyScriptDirective.error', error);
        }
      });
    } else {
      const code = element.text();

      try {
        new Function(code)();
      } catch (error) {
        console.log('LazyScriptDirective.error', error);
      }
    } // }
    // element.on('$destroy', () => {});

  }

  static factory() {
    return new LazyScriptDirective();
  }

}

exports.default = LazyScriptDirective;
LazyScriptDirective.factory.$inject = [];

},{}],213:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _operators = require("rxjs/operators");

var _gtm = _interopRequireDefault(require("../gtm/gtm.service"));

var _rect = _interopRequireDefault(require("../shared/rect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* jshint esversion: 6 */
// let INDEX = 0;
class LazyDirective {
  // src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy lazy-src="
  constructor(DomService) {
    this.domService = DomService;
    this.restrict = 'A';
    this.scope = {
      src: "@?",
      srcset: "@?",
      backgroundSrc: "@?"
    };
  }

  link(scope, element, attributes, controller) {
    const image = element[0];

    if (window.matchMedia('print').matches) {
      return this.immediate(scope, image);
    }

    image.classList.remove('lazying', 'lazyed');
    const subscription = this.domService.appear$(image).subscribe(event => {
      if ((image.width > 0 || image.height > 0 || !image.classList.contains('nav--primary--image')) && !image.classList.contains('lazying')) {
        image.classList.add('lazying');
        this.onAppearsInViewport(image, scope, attributes);
      }
    });

    const onBeforePrint = () => {
      this.immediate(scope, image);
      subscription.unsubscribe();
    };

    window.addEventListener('beforeprint', onBeforePrint);
    element.on('$destroy', () => {
      window.removeEventListener('beforeprint', onBeforePrint);
      subscription.unsubscribe();
    });
  }

  immediate(scope, image) {
    // this.onAppearsInViewport(image, scope, attributes);
    if (!image.classList.contains('lazyed')) {
      const src = this.getThronSrc(image, scope.src);
      image.src = src;
      image.removeAttribute('data-src');
      image.classList.remove('lazying');
      image.classList.add('lazyed');
      scope.$emit('lazyImage', image);
    }
  }

  getThronSrc(image, src) {
    const node = image.parentNode;
    const splitted = src.split('/std/');

    if (splitted.length > 1) {
      // Contenuto Thron
      if (splitted[1].match(/^0x0\//)) {
        // se non sono state richieste dimensioni specifiche, imposto le dimensioni necessarie alla pagina
        // src = splitted[0] + '/std/' + Math.floor(image.width * 1.1).toString() + 'x' + Math.floor(image.height * 1.1).toString() + splitted[1].substr(3);
        src = splitted[0] + '/std/' + Math.floor(node.offsetWidth * 1.1).toString() + 'x0' + splitted[1].substr(3);

        if (!src.match(/[&?]scalemode=?/)) {
          src += src.indexOf('?') !== -1 ? '&' : '?'; // src += 'scalemode=auto';
        }
      } //if (window.devicePixelRatio > 1) {
      //	src += src.indexOf('?') !== -1 ? '&' : '?';
      //	src += 'dpr=' + Math.floor(window.devicePixelRatio * 100).toString();
      //}

    }

    return src;
  }

  onAppearsInViewport(image, scope, attributes) {
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
      const src = this.getThronSrc(image, scope.src);
      image.removeAttribute('data-src');
      this.onImagePreload(image, src, srcOrUndefined => {
        // image.setAttribute('src', src);
        image.classList.remove('lazying');
        image.classList.add('lazyed');
        scope.$emit('lazyImage', image);
      });
    } else if (scope.backgroundSrc) {
      image.setStyle('background-image', `url(${this.getThronSrc(image, scope.backgroundSrc)})`);
      image.removeAttribute('data-background-src');
      image.classList.remove('lazying');
      image.classList.add('lazyed');
    }
  }

  lazy$(node) {
    return this.domService.rafAndRect$().pipe((0, _operators.map)(datas => {
      const windowRect = datas[1];

      const rect = _rect.default.fromNode(node);

      const intersection = rect.intersection(windowRect);
      return intersection;
    }));
  }

  onImagePreload(image, src, callback) {
    // const img = new Image();
    image.onload = () => {
      image.onload = image.onerror = null;

      if (typeof callback === 'function') {
        // setTimeout(() => {
        callback(image.src); // }, 10);
      }
    };

    image.onerror = function (e) {
      image.onload = image.onerror = null;

      _gtm.default.push({
        event: 'img error',
        imageurl: image.src,
        pageurl: window.location.href
      });

      image.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAAC/CAMAAAA1kLK0AAAATlBMVEX////MzMyZmZn39/fHx8fPz8+Ojo7FxcXDw8Pn5+fS0tLq6url5eX8/PyUlJTi4uLX19fv7++JiYm9vb3d3d2FhYWtra2qqqqAgICdnZ2sCR5lAAAJUElEQVR4nO2d6YKzKgyGa7VaN1zqdL7e/42eigERkGobrM7J+2umM3V5DEkICKeQxHUKT6SnCASIQIAIBIhAgAgEiECACASIQIAIBIhAgAgEiECACASIQIAIBIhAgAgEiECACASIQIAIBIhAgAgEiECACASIQIAIBIhAgAgE6NsgynFcvvzqhXwNRBk2RVdnQRBEXM8fsrormm/x+AqIsqnqAO5+Iv5ZXTVfgLE9iLDoIegIpjiCutj8srYFUaaZG8III0s3tYtNQTT1MgqCRd1sd20bgkiDZDmFQUmQbnV1m4Go5owhimTYsP612ub6NgKRWm60v/lL1nVF+lQfSi+BjUcUbWIVm4BogshkUKdmlCybtL4YNKJgA1+xAYiwjjQKQZc78qYw7/T4GtX+r9I7CK1VPCm8zpfKppsakf/24RtEmUWT+8nyhdlBmU9jbZT5TSs8g2jUm4lWWnhYT7/t1VP4BVFdlRtJ1jf0sEsUFFefkdQriFrJoK7v+btQPUZSY1+hciJ/IErF30XR26cJlfYRBd4chT8QoWLUyUdGXSlG8T7QF/IGIlSf44fnCFXb8nW9nkAoHJLuY3suu8Q3CU8gVA45xgFz3zbhB0Sp+Aek4yvNI/LhMf2AUJwbij30Ki8jXaxjKvIC4qIGDDQS42GjC9oxpXyA6Cb9pSseCdlviTq0Ywp5AJFqFTkfJBL0zig+iMaoTCKSkK0jwe6BoYMoFUcp/QTa81PSduTQgQ5ClqOiskjwScgEJULugGGDaFTbTT2QkCdALk8ggyind17IegReFB3pojYOZBAicgrDHUngeUzR+HBjKC6IUDwtmQWPfgKNhMzfE9RLRwWRiZse22+FT6IRZpYhHbAXKgiRQkw8ugcSonFgJhOoIKRnnLgxfD8xdm5xjtcLE4Q0CC1WpmPsQIqiInIgmgQmiMvcczJINGnuUPr6ksTx8LqhiCCkQZgNQCdR/cQOtffF58IzCUQQtcOX6ySK+OxQ/NqXiH4oWqKNB0LkEPbUN9VyTCcJ9tokRA0TLZfAA1FFzmarZ1ZOEgtMAhwS2oQaPBCBPWRIGSTaj0wiFSEU6fLRQMh6zGxXSM+sUgeJ9qUTFN07LHeJBgK6W66ekG4T+c/w+PtIwTQSr01iwQnXCAuEeECW0Zfq9tTQGrQcM29Zy36vWV1n19/nj2rjuE1lugJZosHpjWOBEJd1MS8raBlj7dAa9HzipnjFJmBKY2ETtRZXcJlF/9YNIIGAmGFz4hceH+wkNNVsJpbElljkOOUbwgKRzYf1AQSExFf9juvUg8Zs8B42ECJxwemMI4EIHcEMQJxjfuc2EmpzStnoKtj5kha3dgaEDNg4d4ADonG4cAHizHQS3EbK2/33936TE9CbhyTx4J9l8QwIETdQAigSiAKuyZYRShBAQqny83/vemf6jKD3Yvj/5gwkYsD6y+wgIM2OCow7QAIBNSNr5j+CMEkMNjL4Bdbeh6/n8AUGR8tmQICTwBnhQAIhQpn1b0okGDymkllxEpBZnSHInmrwmHBpdWwHcXL3btYJB4RIp6wOXAUBUVTJrCYkzv8GM7+z0bvy3+wgRK0YI6XCARG60t0JCCOfuPJbz8EGHj/c8zX8V/bg36/nnKX0lii3gAJCBA1rajAFYWZWnEQqQwt/vDc2hM+6aa6z4VP0QFHCBg4IuCJ7T1ADcW75GedIxNzPCAsR3TE7COjxoszcxwFROYKGAWIweINEMYkVj+l37CBE2MBIsnFAQGNNrF5LA8Gu8HmqeUwgEfPsNGELQJSJwzWtFA6I2hE9DR8hn1+a2Eiw3/7nql0A4oRYwf0CiP6EIaeh5xODn+BtIzwmCBHQrX/UQMT9Z+mPlmNCPsEjBA8r8RIQrvRlpbYHwfrPungmx2xFF2OJj/gTIMzMSpD4v4GYyazy+P8CgvsI3sGcyTEH93FMH7E+aii9Kp1EdeCosT6P+B1IDDZgqd4dNI9YlVkm/YcBpJEaiasgcT1mZrm+rxGKctzQz0h0Egfta6zrfXIfGU1q2zoJzUUcpve5ph5xZrf+01LYvp1EvsRH7K8esaJCdRZD3c3PQ7UQo3rXvgaxvwrV8polN4lhqLv4B7//OKt3DhD7q1kurmJzPdoh3uVi/FsnIXLMVyD2V8VeOq4h72so24d3QNEOmVUyJZEyN4g9jmssG+kaG8cZ/Ftx76uSjLXcu+SzJA4z0rVo7FMl8ZBDnfUw9snbea5XapgLxB7HPpeMhk9JMGuo1at3srZ9lNHwBfMjdLVX819NEuAxDzM/4vWMGVMxs3k5g0Q7B2KfM2bC+VA2B+JpFExdaisfZoxZSVhAlPucQ+WYVTcPoh//VmfVDTmm4jF5POgHQi0gdjqrzjHt0QWCwxjnWQ6ZVa5lVo11WsBO51k6Zt5e9MmkDg2ZlUKCt5aGmSB2O/N2fi524Hw5Q9O/IbPSs21znuVu52LPz87PL9kKDRZlkDDw7nd2vnxfA2dNGaNmNZV4M3qH72vICi5OgqNHUU2iB77DN3iw37NykpAv8Ozxna75t/zek4uE+Msu3/IbTQL57U6TRIpuEH7eBMZaKCrXqndCpSSEc55e/t8N/0R6ZgXa/bvhttUCPpOVxP5XC7CsH/Gp9MzqdIz1I4wVRT6X6SeOsKKIvsYMhoyK7iHWmPGxKNB07SLZy933qkPqOlRoB1bHO6SD2Ps6VGPjQFyodyShLAe495XJFNvFy39HjyltY/dr1SnPD6kf2ksncYTVC5X1LL2ROMZ6ln6WIh2j6HFWOFXWvI0s74q/KWUd5MOseassFPXx4uBCoWIQx1kFebJOOnIN81DrYtNK6cqBae18cWTaTQFE+2tITXdLeetEYX1Vj4F9hcqJfILQ9uDpVp8qrP/GHjy0K9MofZ+uevk+Xdlf2qfrRDu3Kaew7uU3++/lX93L72Tf3fEyt7ujudflX9ndsdf8fp+12O+z+x/s99mLdoCVoj2BpWiXaCnaN1w5I+0kL1U2FY+SBg7+WV29zrjw9RUQvcqw6bfIDkTYeP7Qh9LGsWuyV30NBKgMpb5EAPRtELsRgQARCBCBABEIEIEAEQgQgQARCBCBABEIEIEAEQgQgQARCBCBABEIEIEAEQgQgQARCBCBABEIEIEAEQgQgQARCBCBABEIEIEAPUGQuP4DT2RwhyUkgc4AAAAASUVORK5CYII='; // setTimeout(() => {

      callback(); // }, 10);
    };

    image.src = src;
  }

  static factory(DomService) {
    return new LazyDirective(DomService);
  }

}

exports.default = LazyDirective;
LazyDirective.factory.$inject = ['DomService'];

},{"../gtm/gtm.service":238,"../shared/rect":255,"rxjs/operators":198}],214:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _gtm = _interopRequireDefault(require("../gtm/gtm.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* jshint esversion: 6 */
class MediaDirective {
  constructor($timeout, WishlistService) {
    this.$timeout = $timeout;
    this.wishlistService = WishlistService;
    this.restrict = 'A';
    this.transclude = true;
    this.template = `<div class="media">
	<ng-transclude></ng-transclude>
</div>
<div class="overlay" ng-click="onOverlay()"></div>
<div class="share-buttons">
<div class="btn btn--pinterest" ng-click="onPin($event)" ng-if="onPin">
	<svg class="icon icon--pinterest"><use xlink:href="#pinterest"></use></svg>
</div>
<div class="btn btn--wishlist" ng-class="{ active: wishlistActive, activated: wishlistActivated, deactivated: wishlistDeactivated }" ng-click="onClickWishlist($event)">
	<svg class="icon icon--wishlist" ng-if="!wishlistActive"><use xlink:href="#wishlist"></use></svg>
	<svg class="icon icon--wishlist" ng-if="wishlistActive"><use xlink:href="#wishlist-added"></use></svg>
</div></div>`;
    this.scope = {
      item: '=?media'
    };
  }

  link(scope, element, attributes, controller) {
    scope.item = scope.item || {};
    const node = element[0];
    const img = node.querySelector('img');

    if (img) {
      const pageTitle = document.title;

      scope.onPin = event => {
        event.preventDefault();
        event.stopPropagation();
        const pin = {
          url: window.location.href,
          media: img.src,
          description: img.title || pageTitle
        }; // console.log('MediaDirective.onPin', pin);

        _gtm.default.push({
          event: 'Pinterest',
          wish_name: scope.item.name || scope.item.coId,
          wish_type: scope.item.typeName || scope.item.type
        });

        PinUtils.pinOne(pin);
      };
    }

    scope.$watch(() => {
      return this.wishlistService.has(scope.item);
    }, (current, previous) => {
      // console.log(current, previous, node);
      if (scope.wishlistActive !== current) {
        scope.wishlistActive = current;

        if (current) {
          scope.wishlistActivated = true;
          this.$timeout(() => {
            scope.wishlistActivated = false;
          }, 2000);
        } else {
          scope.wishlistDeactivated = true;
          this.$timeout(() => {
            scope.wishlistDeactivated = false;
          }, 2000);
        }
      }
    });

    scope.onClickWishlist = event => {
      event.preventDefault();
      event.stopPropagation();
      this.wishlistService.toggle(scope.item).then(has => {
        console.log('MediaDirective.onClickWishlist', has);
      }, error => {
        console.log(error);
      });
    };

    scope.onOverlay = event => {
      const btnGallery = node.nextElementSibling && node.nextElementSibling.querySelector('.btn--gallery');

      if (btnGallery !== null) {
        // console.log(btnGallery);
        btnGallery.click();
        return;
      }

      if (node.classList.contains('picture--vertical') || node.classList.contains('picture--horizontal')) {
        this.$timeout(() => {
          let index = 0;
          const items = [...document.querySelectorAll('.picture--vertical[media], .picture--vertical[video], .picture--horizontal[media], .picture--horizontal[video]')].map((itemNode, i) => {
            if (itemNode == node) {
              index = i;
            }

            const item = {};
            item.type = itemNode.hasAttribute('media') ? 'media' : 'video';

            if (item.type === 'media') {
              const img = itemNode.querySelector('img');

              if (img) {
                item.src = img.getAttribute('data-src-zoom') || img.getAttribute('src') || img.getAttribute('data-src');
                item.title = img.getAttribute('alt');
                const wishlist = itemNode.getAttribute('media');

                if (wishlist) {
                  item.wishlist = JSON.parse(wishlist.indexOf('"') === -1 ? wishlist.split(/[^\d\W]+/g).join('"') : wishlist);
                }
              } else {
                console.log(itemNode, img);
              }
            } else {
              const video = itemNode.querySelector('video');
              const sources = video.querySelectorAll('source');
              item.poster = video.getAttribute('poster');
              item.src = sources[sources.length - 1].getAttribute('src');
              item.title = video.getAttribute('alt');
              const wishlist = itemNode.getAttribute('video');

              if (wishlist) {
                item.wishlist = JSON.parse(wishlist.indexOf('"') === -1 ? wishlist.split(/[^\d\W]+/g).join('"') : wishlist);
              }
            }

            return item;
          });
          scope.$root.gallery = {
            index,
            items
          };
        });
      } // event.preventDefault();
      // event.stopPropagation();

    };

    element.on('$destroy', () => {});
  }

  static factory($timeout, WishlistService) {
    return new MediaDirective($timeout, WishlistService);
  }

}

exports.default = MediaDirective;
MediaDirective.factory.$inject = ['$timeout', 'WishlistService'];

},{"../gtm/gtm.service":238}],215:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MuuriDirective = void 0;

/* jshint esversion: 6 */

/* global window, document, angular, Muuri, TweenMax, TimelineMax */
class MuuriDirective {
  constructor() {
    this.restrict = 'A';
  }

  link(scope, element, attributes, controller) {
    const node = element[0];

    if (window.matchMedia('print').matches) {
      node.classList.add('printable');
      return;
    }

    const onBeforePrint = () => {
      if (element.muuri) {
        element.muuri.destroy();
      }

      node.classList.add('printable');
    };

    window.addEventListener('beforeprint', onBeforePrint);
    scope.$on('lastItem', slide => {
      // console.log('MuuriDirective.lastItem', slide);
      this.onMuuri(scope, element, attributes);
    });
    scope.$on('lazyImage', slide => {
      // console.log('lazyImage', element.muuri);
      return;

      if (element.muuri) {
        const node = element[0];
        const items = [...node.querySelectorAll('.listing__item')];
        element.muuri.refreshItems(items).layout();
      }
    });
    element.on('$destroy', () => {
      window.removeEventListener('beforeprint', onBeforePrint);

      if (element.muuri) {
        element.muuri.destroy();
      }
    });
    setTimeout(() => {
      this.onMuuri(scope, element, attributes);
    }, 1);
  }

  onMuuri(scope, element, attributes) {
    if (element.muuri) {
      const node = element[0]; // const items = scope.$eval(attributes.muuri);

      const previousItems = element.muuri.getItems().map(x => x.getElement()); // console.log('MuuriDirective.previousItems', previousItems);

      const items = [...node.querySelectorAll('.listing__item')]; // console.log('MuuriDirective.newItems', items);

      const newItems = items.filter(x => previousItems.indexOf(x) === -1);
      const removeItems = previousItems.filter(x => items.indexOf(x) === -1);
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
  }

  static factory() {
    return new MuuriDirective();
  }

}

exports.MuuriDirective = MuuriDirective;
MuuriDirective.factory.$inject = [];

},{}],216:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* jshint esversion: 6 */
// Workaround for Edge 16+, which only implemented object-fit for <img> tags
// TODO: Keep an eye on Edge to determine which version has full final support
const edgeVersion = window.navigator.userAgent.match(/Edge\/(\d{2})\./);
const edgePartialSupport = edgeVersion ? parseInt(edgeVersion[1], 10) >= 16 : false; // If the browser does support object-fit, we don't need to continue

const hasSupport = 'objectFit' in document.documentElement.style !== false;

class ObjectFitDirective {
  constructor(DomService) {
    this.domService = DomService;
    this.restrict = 'A';
  }

  link(scope, element, attributes, controller) {
    const node = element[0]; // console.log('ObjectFitDirective', node);
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

    const polyfill = () => {
      this.polyfill(node);
    };

    window.addEventListener('resize', polyfill);
    element.on('$destroy', () => {
      window.removeEventListener('resize', polyfill);
    });
  }

  polyfill(node) {
    const nodeName = node.nodeName.toLowerCase();

    const objectFit = () => {
      this.objectFit(node);
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
  }

  objectFit(node) {
    console.log('ObjectFitDirective.objectFit', node); // IE 10- data polyfill

    let fit = node.dataset ? node.dataset.objectFit : node.getAttribute('data-object-fit');
    let position = node.dataset ? node.dataset.objectPosition : node.getAttribute('data-object-position'); // Default fallbacks

    fit = fit || 'cover';
    position = position || '50% 50%'; // If necessary, make the parent container work with absolutely positioned elements

    const parentNode = node.parentNode;
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
  }

  checkParentContainer(parentNode) {
    const styles = window.getComputedStyle(parentNode, null);
    const position = styles.getPropertyValue('position');
    const overflow = styles.getPropertyValue('overflow');
    const display = styles.getPropertyValue('display');

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
  }

  checkMediaProperties(node) {
    const styles = window.getComputedStyle(node, null);
    const constraints = {
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

    for (let property in constraints) {
      const constraint = styles.getPropertyValue(property);

      if (constraint !== constraints[property]) {
        node.style[property] = constraints[property];
      }
    }
  }

  setPosition(axis, node, objectPosition) {
    let position, other, start, end, side;
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
  }

  static factory(DomService) {
    return new ObjectFitDirective(DomService);
  }

}

exports.default = ObjectFitDirective;
ObjectFitDirective.factory.$inject = ['DomService'];

},{}],217:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _operators = require("rxjs/operators");

var _rect = _interopRequireDefault(require("../shared/rect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* jshint esversion: 6 */
const isEdge = window.navigator.userAgent.indexOf('Edge') !== -1;

class ParallaxDirective {
  constructor(DomService) {
    this.domService = DomService;
    this.restrict = 'A';
  }

  link(scope, element, attributes, controller) {
    return false; // !!! rimosso effetto parallasse

    const node = element[0];
    const childNode = node.querySelector(isEdge ? 'img' : 'img, video');

    if (childNode) {
      const style = window.getComputedStyle(node);
      const position = style.position;
      const parallax = (parseInt(attributes.parallax) || 5) * 2;
      const subscription = this.parallax$(node, parallax).subscribe(parallax => {
        if (position === 'absolute') {
          childNode.setAttribute('style', `top: 50%; left: 50%; transform: translateX(-50%) translateY(${parallax.p}%) scale(${parallax.s}, ${parallax.s});`);
        } else {
          childNode.setAttribute('style', `transform: translateX(0) translateY(${parallax.p + 50}%) scale(${parallax.s}, ${parallax.s});`);
        }
      });
      element.on('$destroy', () => {
        subscription.unsubscribe();
      });
    }
  }

  units(value, decimals = 4) {
    const pow = Math.pow(10, decimals) / 10;
    return Math.round(value * pow) / pow;
  }

  parallax$(node, parallax) {
    return this.domService.rafAndRect$().pipe((0, _operators.map)(datas => {
      const windowRect = datas[1];

      const rect = _rect.default.fromNode(node);

      const intersection = rect.intersection(windowRect);

      if (intersection.y > 0) {
        return Math.min(1, Math.max(-1, intersection.center.y)); // intersection.center.y;
      } else {
        return null;
      }
    }), (0, _operators.filter)(y => y !== null), (0, _operators.distinctUntilChanged)(), (0, _operators.map)(y => {
      const direction = 1; // i % 2 === 0 ? 1 : -1;

      const s = (100 + parallax * 2) / 100;
      const p = -50 + y * parallax * direction; // .toFixed(3);
      // const y = Math.min(1, Math.max(-1, intersection.center.y));
      // const s = (100 + parallax * 2) / 100;
      // const p = (-50 + (y * parallax * direction)); // .toFixed(3);

      return {
        s: this.units(s),
        p: this.units(p)
      };
    }));
  }

  static factory(DomService) {
    return new ParallaxDirective(DomService);
  }

}

exports.default = ParallaxDirective;
ParallaxDirective.factory.$inject = ['DomService'];

},{"../shared/rect":255,"rxjs/operators":198}],218:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* jshint esversion: 6 */
class ScrollDirective {
  // @Output() public scroll = new EventEmitter();
  constructor($timeout, DomService) {
    this.$timeout = $timeout;
    this.domService = DomService; // this.require = 'ngModel';

    this.restrict = 'A';
  }

  link(scope, element, attributes, controller) {
    if (attributes.scroll !== undefined) {
      const node = element[0];
      this.$timeout(() => {
        const subscription = this.domService.scrollIntersection$(node).subscribe(event => {
          const callback = scope.$eval(attributes.scroll, {
            $event: event
          });

          if (typeof callback === 'function') {
            callback(event); // scope.$eval(attributes.scroll, { $event: event });
          }
        });
        element.on('$destroy', () => {
          subscription.unsubscribe();
        });
      });
    }
    /*
    const callback = scope.$eval(attributes.scroll);
    if (typeof callback === 'function') {
    	const subscription = this.domService.scroll$().subscribe(event => callback(event));
    	element.on('$destroy', () => {
    		subscription.unsubscribe();
    	});
    }
    */

  }

  static factory($timeout, DomService) {
    return new ScrollDirective($timeout, DomService);
  }

}

exports.default = ScrollDirective;
ScrollDirective.factory.$inject = ['$timeout', 'DomService'];

},{}],219:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _operators = require("rxjs/operators");

var _rect = _interopRequireDefault(require("../shared/rect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* jshint esversion: 6 */
class StickyDirective {
  constructor($timeout, DomService) {
    this.$timeout = $timeout;
    this.domService = DomService;
    this.restrict = 'A';
  }

  link(scope, element, attributes, controller) {
    const node = element[0];
    const content = node.querySelector('[sticky-content]');

    const onClick = event => {
      const isChild = this.domService.traverseUp(event.target, node => {
        return node.classList && node.classList.contains('form__group');
      });

      if (isChild && window.innerWidth > 860) {
        // console.log('StickyDirective.onClick');
        const top = this.domService.scrollTop + node.getBoundingClientRect().top;
        window.scroll({
          top: top,
          left: 0,
          behavior: 'smooth'
        });
      }
    };

    this.$timeout(() => {
      const subscription = this.scroll$(element, attributes).subscribe();
      content.addEventListener('click', onClick);
      element.on('$destroy', () => {
        subscription.unsubscribe();
        content.removeEventListener('click', onClick);
      });
    });
  }

  scroll$(element, attributes) {
    const node = element[0];
    const content = node.querySelector('[sticky-content]');
    const stickyTop = parseInt(attributes.sticky) || 0;
    return this.domService.scroll$().pipe((0, _operators.tap)(scroll => {
      let rect = _rect.default.fromNode(node); // const maxtop = node.offsetHeight - content.offsetHeight;
      // top = Math.max(0, Math.min(maxtop, top - rect.top));


      const maxTop = Math.max(0, stickyTop - rect.top); // content.setAttribute('style', `transform: translateY(${maxTop}px);`);
      // console.log(maxTop, stickyTop, rect.top);

      const sticky = maxTop > 0;

      if (sticky !== element.sticky) {
        element.sticky = sticky;

        if (sticky) {
          node.classList.add('sticky');
        } else {
          node.classList.remove('sticky');
        }
      }
    }));
  }

  scroll$_(element, attributes) {
    const node = element[0];
    const content = node.querySelector('[sticky-content]');
    const stickyTop = parseInt(attributes.sticky) || 0;
    return this.domService.raf$().pipe((0, _operators.tap)(datas => {
      let rect = _rect.default.fromNode(node); // const maxtop = node.offsetHeight - content.offsetHeight;
      // top = Math.max(0, Math.min(maxtop, top - rect.top));


      const maxTop = Math.max(0, stickyTop - rect.top);
      content.setAttribute('style', `transform: translateY(${maxTop}px);`);
      const sticky = maxTop > 0;

      if (sticky !== element.sticky) {
        element.sticky = sticky;

        if (sticky) {
          node.classList.add('sticky');
        } else {
          node.classList.remove('sticky');
        }
      }
    }));
  }

  static factory($timeout, DomService) {
    return new StickyDirective($timeout, DomService);
  }

}

exports.default = StickyDirective;
StickyDirective.factory.$inject = ['$timeout', 'DomService'];

},{"../shared/rect":255,"rxjs/operators":198}],220:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwiperTimelineDirective = exports.SwiperTileDirective = exports.SwiperProjectsDirective = exports.SwiperHeroDirective = exports.SwiperGalleryDirective = exports.SwiperDirective = void 0;

/* jshint esversion: 6 */
const DEFAULT_SWIPER_OPTIONS = {
  slidesPerView: 'auto',
  spaceBetween: 1,
  centeredSlides: true,
  loop: false,
  loopAdditionalSlides: 100,
  speed: 600,
  autoplay: 5000,
  keyboardControl: true,
  mousewheelControl: false,
  onSlideClick: function (swiper) {
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

class SwiperDirective {
  constructor() {
    this.restrict = 'A';
    this.options = DEFAULT_SWIPER_OPTIONS;
  }

  link(scope, element, attributes, controller) {
    const node = element[0];

    if (window.matchMedia('print').matches) {
      return;
    }

    const onBeforePrint = () => {
      if (element.swiper) {
        element.swiper.destroy();
      }
    };

    window.addEventListener('beforeprint', onBeforePrint);
    TweenMax.set(node, {
      opacity: 0
    });
    scope.$on('lastItem', slide => {
      this.onSwiper(scope, element, attributes);
    });
    element.on('$destroy', () => {
      window.removeEventListener('beforeprint', onBeforePrint);

      if (element.swiper) {
        element.swiper.destroy();
      }
    });
    scope.$watch('$viewContentLoaded', () => {
      this.onSwiper(scope, element, attributes);
    });
    scope.$on('onResize', $scope => {
      this.onResize(scope, element, attributes);
    });
  }

  onResize(scope, element, attributes) {
    if (element.swiper) {
      Array.from(element[0].querySelectorAll('.swiper-slide')).forEach(node => node.setAttribute('style', ''));
      element.swiper.update();
    }
  }

  onSwiper(scope, element, attributes) {
    const node = element[0]; //const initialSlide = attributes.initialSlide !== undefined ? +attributes.initialSlide : 0;

    if (element.swiper) {
      element.swiper.update();
    } else {
      //this.options.initialSlide = initialSlide;
      let swiper_;
      const on = this.options.on || (this.options.on = {});
      const callback = on.init;

      if (!on.init || !on.init.swiperDirectiveInit) {
        on.init = function () {
          TweenMax.to(node, 0.4, {
            opacity: 1,
            ease: Power2.easeOut
          });
          setTimeout(() => {
            if (typeof callback === 'function') {
              callback.apply(this, [swiper_, element, scope]);
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
  }

  static factory() {
    return new SwiperDirective();
  }

}

exports.SwiperDirective = SwiperDirective;
SwiperDirective.factory.$inject = [];

class SwiperGalleryDirective extends SwiperDirective {
  constructor() {
    super();
    this.options = {
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
      onSlideClick: function (swiper) {
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
  }

  onResize(scope, element, attributes) {
    if (element.swiper) {
      Array.from(element[0].querySelectorAll('.swiper-slide')).forEach(node => node.setAttribute('style', ''));
      element.swiper.params.slidesPerView = scope.zoomed ? 1 : 'auto';
      element.swiper.update();

      if (element.swiper._opening) {
        element.swiper._opening = false;
        const initialSlide = attributes.initialSlide !== undefined ? +attributes.initialSlide : 0;

        if (initialSlide) {
          element.swiper.slideTo(initialSlide, 0);
        }
      }
    } // console.log('SwiperGalleryDirective.onResize', scope.$id, scope.zoomed, attributes.index);

  }

  static factory() {
    return new SwiperGalleryDirective();
  }

}

exports.SwiperGalleryDirective = SwiperGalleryDirective;
SwiperGalleryDirective.factory.$inject = [];

class SwiperHeroDirective extends SwiperDirective {
  constructor() {
    super();
    let swiper_, element_, scope_;
    this.options = {
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
      onSlideClick: function (swiper) {
        angular.element(swiper.clickedSlide).scope().clicked(angular.element(swiper.clickedSlide).scope().$index);
      },
      on: {
        init: (swiper, element, scope) => {
          // console.log('SwiperHeroDirective.init');
          if (!swiper_) {
            swiper_ = swiper;
            element_ = element;
            scope_ = scope;
          }

          scope_.$on('onThronCanPlay', ($scope, id) => {
            // console.log('SwiperHeroDirective.onThronCanPlay', id);
            this.toggleVideo(element, scope, id);
          });
          scope_.$on('onThronComplete', ($scope, id) => {
            // console.log('SwiperHeroDirective.onThronComplete', id);
            this.next(swiper_);
          });
          /*
          if (swiper_.autoplay) {
          	swiper_.autoplay.start();
          }
          */
        },
        slideChangeTransitionStart: () => {
          // console.log('SwiperHeroDirective.slideChangeTransitionStart');
          if (element_) {
            this.toggleVideo(element_, scope_);
          }
        },
        slideChangeTransitionEnd: () => {
          // console.log('SwiperHeroDirective.slideChangeTransitionEnd');
          if (element_) {
            // this.toggleVideo(element_, scope_);
            this.checkAutoplay(element_, scope_, swiper_);
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
  }

  toggleVideo(element, scope, id) {
    const slides = [...element[0].querySelectorAll('.swiper-slide')];
    slides.forEach(slide => {
      const node = slide.querySelector('video, [data-thron]');

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
  }

  checkAutoplay(element, scope, swiper) {
    const video = element[0].querySelector('.swiper-slide-active video, .swiper-slide-active [data-thron]');

    if (!video) {
      setTimeout(() => {
        this.next(swiper); // swiper.slideNext();
      }, 5000);
    }
  }

  next(swiper) {
    if (swiper.realIndex == swiper.slides.length - 1) {
      swiper.slideTo(0);
    } else {
      swiper.slideNext();
    }
  }

  static factory() {
    return new SwiperHeroDirective();
  }

}

exports.SwiperHeroDirective = SwiperHeroDirective;
SwiperHeroDirective.factory.$inject = [];

class SwiperProjectsDirective extends SwiperDirective {
  constructor() {
    super();
    this.options = {
      speed: 600,
      // parallax: true,
      // autoplay: 5000,
      // loop: true,
      spaceBetween: 0,
      keyboardControl: true,
      mousewheelControl: false,
      onSlideClick: function (swiper) {
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
  }

  static factory() {
    return new SwiperProjectsDirective();
  }

}

exports.SwiperProjectsDirective = SwiperProjectsDirective;
SwiperProjectsDirective.factory.$inject = [];

class SwiperTileDirective extends SwiperDirective {
  constructor() {
    super();
    this.options = {
      speed: 600,
      parallax: true,
      autoplay: 5000,
      // loop: true,
      spaceBetween: 60,
      keyboardControl: true,
      mousewheelControl: false,
      onSlideClick: function (swiper) {
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
  }

  static factory() {
    return new SwiperTileDirective();
  }

}

exports.SwiperTileDirective = SwiperTileDirective;
SwiperTileDirective.factory.$inject = [];

class SwiperTimelineDirective extends SwiperDirective {
  constructor() {
    super();
    this.options = {
      slidesPerView: 1,
      spaceBetween: 60,
      speed: 600,
      autoplay: 5000,
      keyboardControl: true,
      mousewheelControl: false,
      on: {
        init: function () {
          const swiper = this;
          const container = swiper.$el[0];
          const lis = [...container.querySelectorAll('.nav--timeline>li')];
          lis.forEach((x, i) => {
            x.addEventListener('click', () => {
              swiper.slideTo(i, 600);
            });
          });
        },
        slideChange: function () {
          const swiper = this;
          const container = swiper.$el[0];
          const lis = [...container.querySelectorAll('.nav--timeline>li')];
          lis.forEach((x, i) => {
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
  }

  static factory() {
    return new SwiperTimelineDirective();
  }

}

exports.SwiperTimelineDirective = SwiperTimelineDirective;
SwiperTimelineDirective.factory.$inject = [];

},{}],221:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* jshint esversion: 6 */
let ID = 0;

class ThronDirective {
  constructor() {
    this.restrict = 'A';
  }

  link(scope, element, attributes, controller) {
    const THRON = window.THRONContentExperience || window.THRONPlayer;

    if (!THRON) {
      return;
    }

    const node = element[0];
    node.id = `thron-${++ID}`;
    const player = THRON(node.id, {
      media: node.getAttribute('data-thron'),
      loop: node.hasAttribute('loop'),
      autoplay: node.hasAttribute('autoplay'),
      muted: true,
      displayLinked: 'close',
      noSkin: true // lockBitrate: 'max',

    });

    const onReady = function () {
      // console.log('ThronDirective.onReady', node.id);
      const mediaContainer = player.mediaContainer();
      const video = mediaContainer.querySelector('video');
      video.setAttribute('playsinline', 'true');
      scope.$emit('onThronReady', node.id); // video.setAttribute('autoplay', 'true');
    };

    const onCanPlay = function () {
      // console.log('ThronDirective.onCanPlay', node.id);
      scope.$emit('onThronCanPlay', node.id);
    };

    const onPlaying = function () {
      player.off('playing', onPlaying);
      const qualities = player.qualityLevels(); // console.log('ThronDirective.onPlaying', node.id, qualities);

      if (qualities.length) {
        const highestQuality = qualities[qualities.length - 1].index;
        const lowestQuality = qualities[0].index;
        player.currentQuality(highestQuality); // console.log('ThronDirective.onPlaying', node.id, 'currentQuality', player.currentQuality());
      }
    };

    const onComplete = function () {
      // console.log('ThronDirective.onComplete', node.id);
      scope.$emit('onThronComplete', node.id);
    };

    const playVideo = function () {
      const status = player.status(); // console.log('ThronDirective.playVideo', node.id, status);

      if (status && !status.playing) {
        player.play();
      }
    };

    const pauseVideo = function () {
      const status = player.status(); // console.log('ThronDirective.pauseVideo', node.id, status);

      if (status && status.playing) {
        player.pause();
      }
    };

    player.on('ready', onReady);
    player.on('canPlay', onCanPlay);
    player.on('playing', onPlaying);
    player.on('complete', onComplete);
    scope.$on('playThron', ($scope, id) => {
      // console.log('ThronDirective.playThron', id, node.id, id === node.id);
      if (id === node.id) {
        playVideo();
      }
    });
    scope.$on('pauseThron', ($scope, id) => {
      // console.log('ThronDirective.pauseThron', id, node.id, id === node.id);
      if (id === node.id) {
        pauseVideo();
      }
    });
    element.on('$destroy', () => {
      player.off('ready', onReady);
      player.off('canPlay', onCanPlay);
      player.off('playing', onPlaying);
      player.off('complete', onComplete);
    });
  }

  static factory() {
    return new ThronDirective();
  }

}

exports.default = ThronDirective;
ThronDirective.factory.$inject = [];

},{}],222:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _gtm = _interopRequireDefault(require("../gtm/gtm.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* jshint esversion: 6 */
class VideoDirective {
  constructor($timeout, WishlistService) {
    this.$timeout = $timeout;
    this.wishlistService = WishlistService;
    this.restrict = 'A';
    this.transclude = true;
    this.template = `<div class="media">
	<ng-transclude></ng-transclude>
</div>
<div class="overlay" ng-click="onOverlay($event)"></div>
<div class="btn btn--play" ng-class="{ playing: playing }">
	<svg class="icon icon--play-progress-background"><use xlink:href="#play-progress"></use></svg>
	<svg class="icon icon--play-progress" viewBox="0 0 196 196">
		<path xmlns="http://www.w3.org/2000/svg" stroke-width="2px" stroke-dasharray="1" stroke-dashoffset="1" pathLength="1" stroke-linecap="square" d="M195.5,98c0,53.8-43.7,97.5-97.5,97.5S0.5,151.8,0.5,98S44.2,0.5,98,0.5S195.5,44.2,195.5,98z"/>
	</svg>
	<svg class="icon icon--play" ng-if="!playing"><use xlink:href="#play"></use></svg>
	<svg class="icon icon--play" ng-if="playing"><use xlink:href="#pause"></use></svg>
</div><div class="btn btn--pinterest" ng-click="onPin()" ng-if="onPin">
<svg class="icon icon--pinterest"><use xlink:href="#pinterest"></use></svg>
</div>
<div class="btn btn--wishlist" ng-class="{ active: wishlistActive, activated: wishlistActivated, deactivated: wishlistDeactivated }" ng-click="onClickWishlist($event)">
	<svg class="icon icon--wishlist" ng-if="!wishlistActive"><use xlink:href="#wishlist"></use></svg>
	<svg class="icon icon--wishlist" ng-if="wishlistActive"><use xlink:href="#wishlist-added"></use></svg>
</div>
<div class="btn btn--zoom" ng-click="onClickZoom($event)">
	<svg class="icon icon--zoom"><use xlink:href="#zoom"></use></svg>
</div>`;
    this.scope = {
      item: '=?video'
    };
  }

  link(scope, element, attributes, controller) {
    scope.item = scope.item || {};
    const node = element[0];
    const video = node.querySelector('video');

    if (video) {
      const pageTitle = document.title;

      scope.onPin = () => {
        const pin = {
          url: window.location.href,
          media: video.poster,
          description: video.title || pageTitle
        };

        _gtm.default.push({
          event: 'Pinterest',
          wish_name: scope.item.name || scope.item.coId,
          wish_type: scope.item.typeName || scope.item.type
        }); // console.log('VideoDirective.onPin', pin);


        PinUtils.pinOne(pin);
      };
    }

    const progress = node.querySelector('.icon--play-progress path');
    scope.item = scope.item || {};

    scope.onOverlay = event => {
      if (video) {
        if (video.paused) {
          const gallery = document.querySelector('.section--gallery');
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

    const onPlay = () => {
      this.$timeout(() => {
        scope.playing = true;
      });
    };

    const onPlayGtm = () => {
      const sources = video.querySelectorAll('source');

      if (sources.length) {
        const src = sources[sources.length - 1].getAttribute('src');
        if (src) _gtm.default.push({
          event: 'video play',
          video_name: src
        });
      }
    };

    const onPause = () => {
      this.$timeout(() => {
        scope.playing = false;
      });
    };

    const onEnded = () => {
      this.$timeout(() => {
        scope.playing = false;
      });
    };

    const onTimeUpdate = () => {
      // console.log(video.currentTime, video.duration);
      progress.style.strokeDashoffset = video.currentTime / video.duration;
    };

    scope.$watch(() => {
      return this.wishlistService.has(scope.item);
    }, (current, previous) => {
      // console.log(current, previous, node);
      if (scope.wishlistActive !== current) {
        scope.wishlistActive = current;

        if (current) {
          scope.wishlistActivated = true;
          this.$timeout(() => {
            scope.wishlistActivated = false;
          }, 2000);
        } else {
          scope.wishlistDeactivated = true;
          this.$timeout(() => {
            scope.wishlistDeactivated = false;
          }, 2000);
        }
      }
    });

    scope.onClickWishlist = event => {
      this.wishlistService.toggle(scope.item).then(has => {
        console.log('VideoDirective.onClickWishlist', has);
      }, error => {
        console.log(error);
      }); // event.preventDefault();
      // event.stopPropagation();
    };

    scope.onClickZoom = event => {
      if (scope.$root.gallery) {
        this.$timeout(() => {
          scope.$root.gallery = null;
        });
      } else if (node.classList.contains('picture--vertical') || node.classList.contains('picture--horizontal')) {
        this.$timeout(() => {
          let index = 0;
          const items = [...document.querySelectorAll('.picture--vertical[media], .picture--vertical[video], .picture--horizontal[media], .picture--horizontal[video]')].map((itemNode, i) => {
            if (itemNode == node) {
              index = i;
            }

            const item = {};
            item.type = itemNode.hasAttribute('media') ? 'media' : 'video';

            if (item.type === 'media') {
              const img = itemNode.querySelector('img');
              item.src = img.getAttribute('src') || img.getAttribute('data-src');
              item.title = img.getAttribute('alt');
              const wishlist = itemNode.getAttribute('media');

              if (wishlist) {
                item.wishlist = JSON.parse(wishlist.indexOf('"') === -1 ? wishlist.split(/[^\d\W]+/g).join('"') : wishlist);
              }
            } else {
              const video = itemNode.querySelector('video');
              const sources = video.querySelectorAll('source');
              item.poster = video.getAttribute('poster');
              item.src = sources[sources.length - 1].getAttribute('src');
              item.title = video.getAttribute('alt');
              const wishlist = itemNode.getAttribute('video');

              if (wishlist) {
                item.wishlist = JSON.parse(wishlist.indexOf('"') === -1 ? wishlist.split(/[^\d\W]+/g).join('"') : wishlist);
              }
            }

            return item;
          });
          scope.$root.gallery = {
            index,
            items
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

    element.on('$destroy', () => {
      if (video) {
        // console.log('VideoDirective.$destroy');
        video.removeEventListener('play', onPlay);
        video.removeEventListener('play', onPlayGtm);
        video.removeEventListener('pause', onPause);
        video.removeEventListener('ended', onEnded);
        video.removeEventListener('timeupdate', onTimeUpdate);
      }
    });
  }

  static factory($timeout, WishlistService) {
    return new VideoDirective($timeout, WishlistService);
  }

}

exports.default = VideoDirective;
VideoDirective.factory.$inject = ['$timeout', 'WishlistService'];

},{"../gtm/gtm.service":238}],223:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _gtm = _interopRequireDefault(require("../gtm/gtm.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* jshint esversion: 6 */
class VisibilityDirective {
  constructor(DomService) {
    this.domService = DomService;
    this.restrict = 'A';
  }

  link(scope, element, attributes, controller) {
    const node = element[0];
    const subscription = this.domService.firstVisibility$(node).subscribe(visible => {
      // console.log('visibility', attributes.visibility, node.classList);
      const gtmEvent = {
        event: 'ElementVisibilityCustomEvent',
        element: attributes.visibility,
        classes: node.getAttribute('class')
      }; // console.log(gtmEvent);

      _gtm.default.push(gtmEvent);
    });
    element.on('$destroy', () => {
      subscription.unsubscribe();
    });
  }

  static factory(DomService) {
    return new VisibilityDirective(DomService);
  }

}

exports.default = VisibilityDirective;
VisibilityDirective.factory.$inject = ['DomService'];

},{"../gtm/gtm.service":238}],224:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class WishlistDirective {
  constructor($timeout, WishlistService) {
    this.$timeout = $timeout;
    this.wishlistService = WishlistService;
    this.restrict = 'E';
    this.scope = {
      item: '='
    };
    this.transclude = true;
    this.template = `<div class="btn btn--wishlist" ng-class="{ active: wishlistActive, activated: wishlistActivated, deactivated: wishlistDeactivated }" ng-click="onClickWishlist($event)">
		<svg class="icon icon--wishlist" ng-if="!wishlistActive"><use xlink:href="#wishlist"></use></svg>
		<svg class="icon icon--wishlist" ng-if="wishlistActive"><use xlink:href="#wishlist-added"></use></svg>
		<ng-transclude></ng-transclude>
	</div>`;
  }

  link(scope, element, attributes, controller) {
    const node = element[0];
    scope.item = scope.item || {};
    scope.$watch(() => {
      return this.wishlistService.has(scope.item);
    }, (current, previous) => {
      // console.log(current, previous, node);
      if (scope.wishlistActive !== current) {
        scope.wishlistActive = current;

        if (current) {
          scope.wishlistActivated = true;
          this.$timeout(() => {
            scope.wishlistActivated = false;
          }, 2000);
        } else {
          scope.wishlistDeactivated = true;
          this.$timeout(() => {
            scope.wishlistDeactivated = false;
          }, 2000);
        }
      }
    });

    scope.onClickWishlist = event => {
      this.wishlistService.toggle(scope.item).then(has => {
        console.log('WishlistDirective.onClickWishlist', has);
      }, error => {
        console.log(error);
      });
      event.preventDefault();
      event.stopPropagation();
    };

    element.on('$destroy', () => {});
  }

  static factory($timeout, WishlistService) {
    return new WishlistDirective($timeout, WishlistService);
  }

}

exports.default = WishlistDirective;
WishlistDirective.factory.$inject = ['$timeout', 'WishlistService'];

},{}],225:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* jshint esversion: 6 */
// let INDEX = 0;
class WorldDirective {
  // src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy lazy-src="
  constructor($timeout, DomService) {
    this.$timeout = $timeout;
    this.domService = DomService;
    this.restrict = 'A';
  }

  link(scope, element, attributes, controller) {
    const node = element[0];
    const img = node.querySelector('img');
    const nodePoints = node.querySelector('.points');

    const
    /*onEnter*/
    onClick = event => {
      event.stopImmediatePropagation();
      [...node.querySelectorAll('.world__point')].forEach(x => {
        if (x === event.currentTarget) {
          x.classList.add('active');
        } else {
          x.classList.remove('active');
        }
      });
    };

    const onLeave = event => {
      event.currentTarget.parentNode.classList.remove('active');
    };

    img.onload = () => {
      const offices = window.offices;
      const w = node.offsetWidth;
      const h = node.offsetHeight;
      const points = offices.forEach(x => {
        const position = x.position;
        const latitude = position.latitude;
        const top = h * 1.169 / 180 * (-latitude + 90);
        const longitude = position.longitude;
        const left = w / 360 * (longitude + 180) - 30;
        const pointNode = this.makePoint(x);
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

    element.on('$destroy', () => {
      node.removeEventListener('click', onClick);
      [...node.querySelectorAll('.world__point')].forEach(node => {
        node.removeEventListener('click', onClick);
      }); //[...node.querySelectorAll('.world__point')].forEach(node => {
      //	node.removeEventListener('mouseenter', onEnter);
      //});
      //[...node.querySelectorAll('.world__point .world__info')].forEach(node => {
      //	node.removeEventListener('mouseleave', onLeave);
      //});
    });
  }

  makePoint(point) {
    const pointNode = document.createElement('div');
    pointNode.classList.add('world__point');

    if (point.headquarter) {
      pointNode.classList.add('world__point--headquarter');
    }

    let cta = point.url ? `
		<div class="group group--cta">
			<a href="${point.url}" class="btn btn--link"><span>${window.BOMLabels.More_info}</span></a>
		</div>
		` : '';
    pointNode.innerHTML = `
		<div class="world__info">
			<div><span class="city">${point.city}</span> <span class="country">${point.country}</span></div>
			<div class="abstract">${point.abstract}</div>
			${cta}
		</div>
		`;
    return pointNode;
  }

  static factory($timeout, DomService) {
    return new WorldDirective($timeout, DomService);
  }

}

exports.default = WorldDirective;
WorldDirective.factory.$inject = ['$timeout', 'DomService'];

},{}],226:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rect = _interopRequireDefault(require("../shared/rect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* jshint esversion: 6 */
// let INDEX = 0;
class ZoomableDirective {
  // src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy lazy-src="
  constructor($timeout, DomService) {
    this.$timeout = $timeout;
    this.domService = DomService;
    this.restrict = 'A';
  }

  link(scope, element, attributes, controller) {
    let triggers, rect;
    const node = element[0];
    const content = node.querySelector('.zoomable__content');

    const onClose = () => {
      if (node.classList.contains('zoomed')) {
        this.zoomOut(scope, node, content, rect);

        if (attributes.zoomed !== undefined) {
          this.$timeout(() => {
            scope.$root.gallery = null;
          });
        }
      }
    };

    const onOpen = () => {
      if (!node.classList.contains('zoomed')) {
        rect = _rect.default.fromNode(node);
        this.zoomIn(scope, node, content, rect);
      }
    };

    const onClick = () => {
      // const slides = [...node.querySelectorAll('.swiper-slide')];
      if (node.classList.contains('zoomed')) {
        this.zoomOut(scope, node, content, rect);

        if (attributes.zoomed !== undefined) {
          this.$timeout(() => {
            scope.$root.gallery = null;
          });
        }
      } else {
        rect = _rect.default.fromNode(node);
        this.zoomIn(scope, node, content, rect);
      }
    };

    const addListeners = () => {
      const close = node.querySelector('.zoomable__close');

      if (close) {
        close.addEventListener('click', onClose);
      }

      triggers = [...node.querySelectorAll('.zoomable__trigger')]; // console.log('ZoomableDirective', node, content, triggers);

      triggers.forEach(x => x.addEventListener('click', onClick));
    };

    const removeListeners = () => {
      const close = node.querySelector('.zoomable__close');

      if (close) {
        close.removeEventListener('click', onClose);
      }

      if (triggers) {
        triggers.forEach(x => x.removeEventListener('click', onClick));
      }
    };

    scope.$on('lastItem', ($scope, item) => {
      // console.log('lastItem');
      removeListeners();
      addListeners();
    });
    this.$timeout(() => {
      addListeners();
    });
    element.on('$destroy', () => {
      triggers.forEach(x => x.removeEventListener('click', onClick));
    });
    console.log('ZoomableDirective', scope.$id);

    scope.onZoom = item => {
      const rect = _rect.default.fromNode(content);

      console.log('ZoomableDirective.onZoom', scope.zoomed);
      TweenMax.set(node, {
        height: rect.height
      });
      this.$timeout(() => {
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
  }

  zoomIn(scope, node, content, rect) {
    // TweenMax.set(node, { height: rect.height });
    // TweenMax.set(content, { left: rect.left, top: rect.top, width: rect.width, height: rect.height });
    node.classList.add('zoomed');
    scope.zoomed = true; // TweenMax.set(content, { left: 0, top: 0, width: '100%', height: '100%' });

    setTimeout(() => {
      scope.$broadcast('onResize', scope.zoomed);
    }, 1); // scope.$emit('onDroppinIn', true);
  }

  zoomOut(scope, node, content, rect) {
    // TweenMax.set(node, { height: 'auto' });
    // TweenMax.set(content, { clearProps: 'all' });
    node.classList.remove('zoomed');
    scope.zoomed = false;
    setTimeout(() => {
      scope.$broadcast('onResize', scope.zoomed);
    }, 1); // scope.$emit('onDroppinIn', false);
  }

  zoomInAnimated(scope, node, content, rect) {
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
      onUpdate: () => {
        // window.dispatchEvent(new Event('resize'));
        // slides.forEach(x => x.style.width = content.style.width);
        scope.$broadcast('onResize');
      },
      onComplete: () => {// scope.$broadcast('onResize');
      }
    });
  }

  zoomOutAnimated(scope, node, content, rect) {
    TweenMax.to(content, 0.3, {
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
      ease: Expo.easeInOut,
      // ease: CustomEase.create('custom', 'M0,0,C0.596,0,0.346,1,1,1'),
      onUpdate: () => {
        scope.$broadcast('onResize');
      },
      onComplete: () => {
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
  }

  static factory($timeout, DomService) {
    return new ZoomableDirective($timeout, DomService);
  }

}

exports.default = ZoomableDirective;
ZoomableDirective.factory.$inject = ['$timeout', 'DomService'];

},{"../shared/rect":255}],227:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");

var _gtm = _interopRequireDefault(require("../gtm/gtm.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* jshint esversion: 6 */
const GTM_CAT = 'faq';

class FaqCtrl {
  constructor($scope, $timeout, DomService, ApiService) {
    this.$scope = $scope;
    this.$timeout = $timeout;
    this.domService = DomService;
    this.apiService = ApiService;
    this.faqCategories = window.faqCategories || [];
    this.faqCategories.forEach(x => {
      if (!x.items) x.items = [];
    }); // eliminare!
    //this.faqCategories.forEach(x => x.items.forEach(i => Math.random() > 0.5 ? delete i.url : null));
    //

    this.filteredFaqCategories = this.faqCategories.slice();
    this.flags = {};
    this.unsubscribe = new _rxjs.Subject();
    $scope.$watch('$viewContentLoaded', () => {
      this.search$().pipe((0, _operators.takeUntil)(this.unsubscribe)).subscribe(filteredFaqCategories => {
        this.$timeout(() => {
          this.filteredFaqCategories = [];
          this.$timeout(() => {
            this.filteredFaqCategories = filteredFaqCategories;
          }, 50);
        });
      });
    });
    $scope.$on('destroy', () => {
      // console.log('destroy');
      this.unsubscribe.next();
      this.unsubscribe.complete();
    });
  }

  isOpen(id) {
    return this.flags[id];
  }

  toggle(id) {
    const flag = !this.flags[id];
    const node = document.querySelector(`#faq--${id} > .group--content`);

    if (flag) {
      TweenMax.set(node, {
        opacity: 0,
        maxHeight: 'none',
        display: 'block'
      });
      const offsetHeight = node.offsetHeight + 20;
      TweenMax.set(node, {
        maxHeight: 0
      });
      TweenMax.to(node, 0.35, {
        opacity: 1,
        maxHeight: offsetHeight,
        overwrite: 'all',
        onComplete: () => {}
      });
    } else {
      TweenMax.to(node, 0.35, {
        opacity: 0,
        maxHeight: 0,
        overwrite: 'all',
        onComplete: () => {
          TweenMax.set(node, {
            display: 'none'
          });
        }
      });
    }

    this.flags[id] = flag;
  }

  navTo(category, event) {
    const node = document.querySelector(`#${category.slug}`);
    const top = this.domService.scrollTop + node.getBoundingClientRect().top - 100;
    window.scroll({
      top: top,
      left: 0,
      behavior: 'smooth'
    });
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  search$() {
    const node = document.querySelector('.control--search');
    return (0, _rxjs.fromEvent)(node, 'input').pipe((0, _operators.debounceTime)(1000), (0, _operators.map)(function (event) {
      return event.target.value.toLowerCase();
    }), (0, _operators.map)(query => {
      this.query = query;
      this.faqCategories.forEach(x => x.items.forEach(i => i.opened = false));

      if (query !== '') {
        const fakeFilter = {
          '': {
            value: query,
            options: [{
              value: query,
              key: query
            }]
          }
        };

        _gtm.default.pageViewFilters(GTM_CAT, fakeFilter);

        const filteredFaqCategories = this.faqCategories.map(x => Object.assign({}, x)).filter(category => {
          let has = false;
          let items = category.items.filter(item => {
            const hasTitle = item.title.toLowerCase().indexOf(query) !== -1;
            const hasAbstract = item.abstract.toLowerCase().indexOf(query) !== -1;
            item.opened = hasAbstract;
            this.flags[item.id] = item.opened;
            has = has || hasTitle || hasAbstract;
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
        this.flags = {};
        return this.faqCategories.slice();
      }
    }), (0, _operators.shareReplay)());
  }

}

FaqCtrl.$inject = ['$scope', '$timeout', 'DomService', 'ApiService'];
var _default = FaqCtrl;
exports.default = _default;

},{"../gtm/gtm.service":238,"rxjs":2,"rxjs/operators":198}],228:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageWithFeatures = ImageWithFeatures;

/* jshint esversion: 6 */
function ImageWithFeatures() {
  return (images, features) => {
    if (!images) {
      return null;
    }

    if (!images.length) {
      return null;
    }

    if (images.length === 1 || !features || features[0] === null) {
      return images[0].url;
    }

    const image = images.find(image => {
      let has = true;
      features.forEach(f => has = has && image.features.indexOf(f) !== -1);
      return has;
    });

    if (image) {
      return image.url;
    } else {
      return images[0].url;
    }
  };
}

},{}],229:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotInFilter = NotInFilter;

/* jshint esversion: 6 */
function NotInFilter($filter) {
  return (array, filters, element) => {
    if (filters) {
      return $filter('filter')(array, item => {
        for (var i = 0; i < filters.length; i++) {
          if (filters[i][element] === item[element]) return false;
        }

        return true;
      });
    }
  };
}

},{}],230:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TrustedFilter = TrustedFilter;

/* jshint esversion: 6 */
function TrustedFilter($sce) {
  return url => {
    return $sce.trustAsResourceUrl(url);
  };
}

},{}],231:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* jshint esversion: 6 */
class ControlMessagesDirective {
  constructor() {
    this.restrict = 'E';
    this.templateUrl = 'templates/forms/messages.html';
    this.transclude = {
      'message': '?messageItems'
    };
  }

  link(scope, element, attributes, model) {}

  static factory() {
    return new ControlMessagesDirective();
  }

}

exports.default = ControlMessagesDirective;
ControlMessagesDirective.factory.$inject = [];

},{}],232:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* jshint esversion: 6 */
const formatLabel = function (string = '', prepend = '', expression = undefined) {
  const splitted = string.split(',');

  if (splitted.length > 1) {
    let formatted = splitted.shift();
    splitted.forEach((value, index) => {
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

let uniqueId = 0;
let errorElements = [],
    to;

class ControlDirective {
  constructor($parse, DomService) {
    this.$parse = $parse;
    this.domService = DomService;
    this.restrict = 'A';

    this.templateUrl = (element, attributes) => {
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
      pre: (scope, element, attributes, controller, transclude) => {
        this.linkMethod(scope, element, attributes, controller, transclude);
      }
    };
  }

  linkMethod(scope, element, attributes, controller, transclude) {
    const label = scope.label = scope.label ? scope.label : 'name';
    const key = scope.key = scope.key ? scope.key : 'id';

    if (attributes.control === 'select') {
      const filter = attributes.filter ? '| ' + attributes.filter : '';
      const optionLabel = formatLabel(label, 'item.', true);

      scope.getOptions = () => {
        return attributes.number ? 'item.' + key + ' as ' + optionLabel + ' disable when item.disabled for item in source ' + filter : optionLabel + ' disable when item.disabled for item in source ' + filter + ' track by item.' + key;
      };
    }

    const type = scope.type = attributes.control;
    const form = scope.form = scope.form || 'form';
    const title = scope.title = scope.title || 'untitled';
    const placeholder = scope.placeholder = scope.placeholder || title;
    const field = scope.field = title.replace(/[^0-9a-zA-Z]/g, "").split(' ').join('') + ++uniqueId;
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

    scope.onChange = model => {
      // console.log('ControlDirective.onChange');
      this.$parse(attributes.onChange)(scope.$parent);
    };

    scope.onFilter = model => {
      this.$parse(attributes.onFilter)(scope.$parent);
    };

    scope.getType = () => {
      let type = 'text';

      switch (attributes.control) {
        case 'password':
          type = scope.visible ? 'text' : 'password';
          break;

        default:
          type = attributes.control;
      }

      return type;
    };

    scope.onFocus = () => {
      scope.focus = true; // console.log('ControlDirective.onFocus', scope.focus);
    };

    scope.onBlur = () => {
      scope.focus = false; // console.log('ControlDirective.onBlur', scope.focus);

      this.scrollToError();
    };

    scope.getClasses = () => {
      const field = this.$parse(scope.form + '.' + scope.field)(scope.$parent);

      if (field) {
        const focus = scope.focus;
        const success = field.$valid;
        const form = this.$parse(scope.form)(scope.$parent);
        const error = field.$invalid && (form.$submitted || field.$touched);
        const empty = !field.$viewValue;

        if (error) {
          this.onError(element);

          if (scope.error !== error) {
            scope.error = error;
            this.scrollToError();
          }
        } else {
          scope.error = false;
        }

        return {
          focus,
          success,
          error,
          empty
        };
      }
    };

    scope.getMessages = () => {
      const form = this.$parse(scope.form)(scope.$parent);
      const field = this.$parse(scope.form + '.' + scope.field)(scope.$parent);
      return (form.$submitted || field.$touched) && field.$error;
    };

    scope.toggleVisibility = () => {
      scope.visible = !scope.visible;
    };

    scope.$on('onInvalid', () => {
      this.scrollToError();
    });
  }

  onError(element) {
    if (errorElements.indexOf(element) === -1) {
      errorElements.push(element);
    }
  }

  scrollToError() {
    if (errorElements.length) {
      if (to) {
        clearTimeout(to);
      }

      to = setTimeout(() => {
        const top = errorElements.reduce((previous, current, index, array) => {
          const node = current[0];
          return Math.min(previous, node.getBoundingClientRect().top);
        }, Number.POSITIVE_INFINITY);
        window.scroll({
          top: this.domService.scrollTop + top - 100,
          left: 0,
          behavior: 'smooth'
        });
        errorElements = [];
      }, 100);
    }
  }

  link(scope, element, attributes, controller) {}

  static factory($parse, DomService) {
    return new ControlDirective($parse, DomService);
  }

}

exports.default = ControlDirective;
ControlDirective.factory.$inject = ['$parse', 'DomService'];

},{}],233:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* jshint esversion: 6 */
class ValidateDirective {
  constructor($filter) {
    this.$filter = $filter;
    this.require = 'ngModel';
  }

  link(scope, element, attributes, model) {
    const type = attributes.validate;
    const format = attributes.format || '';
    const precision = attributes.precision || 2;
    let focus = false; // console.log('validate', type);

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
          let valid = false;

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
          let valid = false;

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

    const onFocus = () => {
      focus = true;

      if (format) {
        element[0].value = model.$modelValue || null;

        if (!model.$modelValue) {
          model.$setViewValue(null);
        }
      }
    };

    const doBlur = () => {
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

    const onBlur = () => {
      focus = false;
      doBlur();
    };

    const addListeners = () => {
      element.on('focus', onFocus);
      element.on('blur', onBlur);
    };

    const removeListeners = () => {
      element.off('focus', onFocus);
      element.off('blur', onBlur);
    };

    scope.$on('$destroy', function () {
      removeListeners();
    });
    addListeners();
  }

  static factory($filter) {
    return new ValidateDirective($filter);
  }

}

exports.default = ValidateDirective;
ValidateDirective.factory.$inject = ['$filter'];

},{}],234:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ITEMS_PER_PAGE = void 0;

var _gtm = _interopRequireDefault(require("../gtm/gtm.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* jshint esversion: 6 */
const ITEMS_PER_PAGE = 9;
exports.ITEMS_PER_PAGE = ITEMS_PER_PAGE;
const GTM_CAT = 'gallerie';

class GalleriesCtrl {
  constructor($scope, $timeout, LocationService) {
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

  deserializeFilters(initialFilter) {
    const locationFilters = this.locationService.deserialize('filters') || initialFilter || {};
    Object.keys(this.filters).forEach(x => {
      const filter = this.filters[x];

      switch (x) {
        case 'collections':
          // probabilmente verrà aggiunto
          filter.doFilter = (item, value) => {
            return item.id === value;
          };

          break;

        default:
          filter.doFilter = (item, value) => {
            return item.features.indexOf(value) !== -1;
          };

      }

      filter.options.unshift({
        label: filter.placeholder,
        value: null
      });
      const selectedOption = filter.options.find(o => Boolean(o.value === (locationFilters[x] || null)));
      filter.value = selectedOption.value;
      filter.placeholder = selectedOption.label;
    });
    return filters;
  }

  serializeFilters() {
    let filters = {};
    let any = false;
    Object.keys(this.filters).forEach(x => {
      const filter = this.filters[x];

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
  }

  applyFilters(serialize) {
    if (serialize !== false) this.serializeFilters();
    const {
      filteredItems
    } = this.getFilteredItems(this.galleries);
    this.filteredItems = [];
    this.visibleItems = [];
    this.maxItems = ITEMS_PER_PAGE;
    this.$timeout(() => {
      this.filteredItems = filteredItems;
      this.visibleItems = filteredItems.slice(0, this.maxItems);
      this.updateFilterStates(this.galleries); // delayer for image update
    }, 50);

    _gtm.default.pageViewFilters(GTM_CAT, this.filters);
  }

  getFilteredItems(items, skipFilter) {
    const filters = Object.keys(this.filters).map(x => this.filters[x]).filter(x => x.value !== null);
    let filteredItems = items.slice();

    if (filters.length) {
      filteredItems = filteredItems.filter(item => {
        let has = true;
        filters.forEach(filter => {
          if (filter !== skipFilter) {
            has = has && filter.doFilter(item, filter.value);
          }
        });
        return has;
      });
    }

    return {
      filteredItems
    };
  }

  updateFilterStates(items) {
    Object.keys(this.filters).forEach(x => {
      const filter = this.filters[x];
      const {
        filteredItems
      } = this.getFilteredItems(items, filter);
      filter.options.forEach(option => {
        let has = false;

        if (option.value) {
          let i = 0;

          while (i < filteredItems.length && !has) {
            const item = filteredItems[i];
            has = filter.doFilter(item, option.value);
            i++;
          }
        } else {
          has = true;
        }

        option.disabled = !has;
      });
    });
  }

  setFilter(item, filter) {
    item = item || filter.options[0];
    filter.value = item.value;
    filter.placeholder = item.label;
    this.applyFilters();
    this.$scope.$broadcast('onCloseDropdown');
  }

  removeFilter(filter) {
    this.setFilter(null, filter);
  }

  onScroll(event) {
    if (event.rect.bottom < event.windowRect.bottom) {
      // console.log('more!');
      if (!this.busy && this.maxItems < this.filteredItems.length) {
        this.$timeout(() => {
          this.busy = true;
          this.$timeout(() => {
            this.maxItems += ITEMS_PER_PAGE;
            this.visibleItems = this.filteredItems.slice(0, this.maxItems);
            this.busy = false; // console.log(this.visibleItems.length);
          }, 1000);
        }, 0);
      }
    }
  }

}

GalleriesCtrl.$inject = ['$scope', '$timeout', 'LocationService'];
var _default = GalleriesCtrl;
exports.default = _default;

},{"../gtm/gtm.service":238}],235:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _gtm = _interopRequireDefault(require("./gtm.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* jshint esversion: 6 */
class GtmCollectionDirective {
  constructor() {
    this.restrict = 'A';
    this.scope = {
      item: '=gtmCollection'
    };
  }

  link(scope, element, attributes, controller) {
    const node = element[0];

    const onClick = () => {
      const actionField = {
        list: scope.item.list
      };
      const product = Object.assign({}, scope.item);
      delete product.list;

      _gtm.default.push({
        event: 'collectionClick',
        ecommerce: {
          click: {
            actionField,
            products: [product]
          }
        }
      });
    };

    node.addEventListener('click', onClick);
    element.on('$destroy', () => node.removeEventListener('click', onClick));
  }

  static factory() {
    return new GtmCollectionDirective();
  }

}

exports.default = GtmCollectionDirective;
GtmCollectionDirective.factory.$inject = [];

},{"./gtm.service":238}],236:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _gtm = _interopRequireDefault(require("./gtm.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* jshint esversion: 6 */
class gtmDealerLocatorDirective {
  constructor() {
    this.restrict = 'A';
    this.scope = {
      label: '=gtmDealerLocator'
    };
  }

  link(scope, element, attributes, controller) {
    const node = element[0];

    const onClick = () => {
      _gtm.default.push({
        event: 'dealerlocator',
        action: 'sidebar-click',
        label: scope.label
      });
    };

    node.addEventListener('click', onClick);
    element.on('$destroy', () => node.removeEventListener('click', onClick));
  }

  static factory() {
    return new gtmDealerLocatorDirective();
  }

}

exports.default = gtmDealerLocatorDirective;
gtmDealerLocatorDirective.factory.$inject = [];

},{"./gtm.service":238}],237:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _gtm = _interopRequireDefault(require("./gtm.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* jshint esversion: 6 */
class GtmFormDirective {
  constructor() {
    this.restrict = 'A';
  }

  link(scope, element, attributes, controller) {
    const form_name = attributes["gtmFormName"];

    if (form_name) {
      scope.$root.$on('formsubmit', () => {
        _gtm.default.push({
          event: 'formsubmit',
          form_name
        });
      });
    }
  }

  static factory() {
    return new GtmFormDirective();
  }

}

exports.default = GtmFormDirective;
GtmFormDirective.factory.$inject = [];

},{"./gtm.service":238}],238:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint esversion: 6 */
function push_(event) {
  const dataLayer = window.dataLayer || [];
  dataLayer.push(event);
  console.log('GtmService.dataLayer', event);
}

class GtmService {
  // Id da dare al tag script delle pagine con filtri.
  // Questo indica a Highway di non eseguire il PageView. Sarà il controller a farlo
  static pageView(pathname) {
    const obj = {
      event: 'PageViewCustomEvent',
      title: document.title,
      href: window.location.href,
      pathname: pathname || window.location.pathname,
      hostname: window.location.hostname
    };
    Object.assign(obj, window.dataLayerData);
    return push_(obj);
  }

  static pageViewFilters(cat, filters) {
    const values = [];
    let any = false;

    for (let key in filters) {
      let textValue = '';
      const filterValue = filters[key].value;

      if (filterValue) {
        const selectedOption = filters[key].options.find(option => option.value === filterValue);

        if (selectedOption) {
          textValue = selectedOption.key;
        }
      }

      if (textValue) any = true;
      let name = filters[key].key
      /* se array di filtri */
      || key
      /* se oggetto filtro */
      ;
      if (name) name = encodeURIComponent(name) + '-';
      values.push(name + encodeURIComponent(textValue));
    }

    const pathname = any ? `?cat=${cat}&s=${values.join('_')}` : '';
    GtmService.pageView(window.location.pathname + pathname);
  }

  static push(event) {
    return push_(event);
  }

}

exports.default = GtmService;

_defineProperty(GtmService, "FILTERS_SCRIPT_ID", 'script-listing');

},{}],239:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _highway = _interopRequireDefault(require("@dogstudio/highway"));

var _gtm = _interopRequireDefault(require("../gtm/gtm.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* jshint esversion: 6 */
let first = true;

class CustomRenderer extends _highway.default.Renderer {
  update() {
    this.updateMeta();
    this.updateGTMData();
    this.pageView();
    this.updateBrand();
    this.updateSearchQuery();
    this.updateMarketsAndLanguages();
  }

  updateMeta() {
    const page = this.properties.page;
    document.title = page.title;
  }

  updateBrand() {
    const page = this.properties.page;
    const body = page.querySelector('body');
    let brand = /(["'])(\\?.)*?\1/.exec(body.getAttribute('ng-init') || '');
    brand = brand ? brand[0].replace(/\'/g, '') : 'atlas-concorde'; // console.log(brand);

    CustomRenderer.$timeout(() => {
      const scope = CustomRenderer.scope;
      scope.root.brand = brand; // console.log('CustomRenderer.update', scope);
    });
  }

  updateSearchQuery() {
    const page = this.properties.page;
    const dataSearch = [...page.querySelectorAll('[data-search]')];

    if (dataSearch.length) {
      const pageDataSearch = [...document.querySelectorAll('[data-search]')];
      pageDataSearch.forEach(node => {
        node.setAttribute('data-search', dataSearch[0].getAttribute('data-search'));
      });
    }
  }

  updateMarketsAndLanguages() {
    const page = this.properties.page;
    const marketSelector = page.getElementById('market-selector');

    if (marketSelector != null) {
      try {
        const marketUrls = angular.fromJson(marketSelector.getAttribute('data-markets'));
        CustomRenderer.scope.root.marketUrls = marketUrls;
      } catch (e) {}
    }
    /*
    const marketsAndLanguages = [...page.querySelectorAll('.nav--markets__secondary > li > a')];
    const anchors = [...document.querySelectorAll('.nav--markets__secondary > li > a')];
    anchors.forEach(a => {
    	const marketAndLanguage = marketsAndLanguages.find(x => x.id === a.id);
    	if (marketAndLanguage) {
    		a.href = marketAndLanguage.href;
    		console.log('updateMarketsAndLanguages', marketAndLanguage.id, marketAndLanguage.href);
    	}
    });
    */

  }

  pageView() {
    const page = this.properties.page;

    if (!page.getElementById(_gtm.default.FILTERS_SCRIPT_ID)) {
      _gtm.default.pageView();
    }
  }

  updateGTMData() {
    const page = this.properties.page;
    const script = page.getElementById("gtm-page-data");

    if (script && script.text) {
      try {
        new Function(script.text)();
      } catch (error) {}
    }
  } // This method in the renderer is run when the data-router-view is added to the DOM Tree.


  onEnter() {
    // console.log('onEnter');
    if (!first) {
      CustomRenderer.$timeout(() => {
        const $compile = CustomRenderer.$compile;
        const view = [...document.querySelectorAll('.view')].pop(); // console.log(view.childNodes);

        const element = angular.element(view.childNodes);
        const $scope = CustomRenderer.scope;
        $scope.root.menuOpened = false;
        $scope.root.menuProductOpened = false;
        const $newScope = $scope.$new();
        const content = $compile(element)($newScope);
        CustomRenderer.$newScope = $newScope;
        CustomRenderer.content = content;
        /*
        element.on('$destroy', (event) => {
        	console.log('.view -> $destroy', event);
        });
        */
        // element.append(content);
      });
    }
  } // This method in the renderer is run when transition to hide the data-router-view is called.


  onLeave() {
    // console.log('onLeave', first);
    if (first) {
      first = false;
      const view = [...document.querySelectorAll('.view')].shift();
      const element = angular.element(view.childNodes);
      /*
      element.on('$destroy', (event) => {
      	console.log('.view -> $destroy', event);
      });
      */
    }
  } // This method in the renderer is run when the transition to display the data-router-view is done.


  onEnterCompleted() {} // console.log('onEnterCompleted');

  /*
  if (first) {
  	first = false;
  }
  */
  // This method in the renderer is run when the data-router-view is removed from the DOM Tree.


  onLeaveCompleted() {// console.log('onLeaveCompleted');
  }

  static $destroy(from) {
    // console.log('CustomRenderer.destroy', this.content, this.$newScope);
    if (CustomRenderer.scope && CustomRenderer.scope.$root && CustomRenderer.scope.$root.first) {
      CustomRenderer.$timeout(() => {
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
  }

  static collectScopes(scope, scopes) {
    scopes = scopes || [];

    if (scope) {
      let child = scope && scope.$$childHead;

      while (child) {
        scopes.push(child);
        scopes = this.collectScopes(child, scopes);
        child = child.$$nextSibling;
      } // console.log(scopes);

    }

    return scopes;
  }

}

exports.default = CustomRenderer;

},{"../gtm/gtm.service":238,"@dogstudio/highway":1}],240:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _highway = _interopRequireDefault(require("@dogstudio/highway"));

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");

var _gtm = _interopRequireDefault(require("../gtm/gtm.service"));

var _dom = _interopRequireDefault(require("../services/dom.service"));

var _customRenderer = _interopRequireDefault(require("./custom-renderer"));

var _pageTransition = _interopRequireDefault(require("./page-transition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* jshint esversion: 6 */
// import PageNoTransition from './page-no-transition';
// Import Quicklink
// See: https://github.com/GoogleChromeLabs/quicklink
// import Quicklink from 'quicklink/dist/quicklink.mjs';
class HighwayDirective {
  constructor($compile, $timeout) {
    this.$compile = $compile;
    this.$timeout = $timeout;
    this.restrict = 'A';
    this.link$ = new _rxjs.Subject();
  }

  onLink$() {
    return this.link$.pipe((0, _operators.debounceTime)(50));
  }

  link(scope, element, attributes, controller) {
    this.$timeout(() => {
      this.init(scope, element, attributes, controller);
    });
  }

  init(scope, element, attributes, controller) {
    _customRenderer.default.$compile = this.$compile;
    _customRenderer.default.$timeout = this.$timeout;
    _customRenderer.default.scope = scope;
    let wasProduct = false;

    const onProductMenu = () => {
      setTimeout(() => {
        let top = 0;
        const sectionProduct = element[0].querySelector('.section--product');

        if (wasProduct && sectionProduct && window.innerWidth > 860) {
          const anchors = [...sectionProduct.querySelectorAll('a')];
          let selectedAnchor = anchors.find(x => window.location.href.lastIndexOf(x.href) === window.location.href.length - x.href.length); // console.log(anchors, selectedAnchor);

          if (selectedAnchor && anchors.indexOf(selectedAnchor) !== 0) {
            const sectionProductTop = sectionProduct.getBoundingClientRect().top;
            top = sectionProductTop + _dom.default.getScrollTop(window);
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


    const H = new _highway.default.Core({
      renderers: {
        view: _customRenderer.default
      },
      transitions: {
        view: _pageTransition.default
      }
    });
    this.H = H;
    _customRenderer.default.H = H;
    scope.$on('onHrefNode', ($scope, node) => {
      this.link$.next();
    });
    const subscription = this.onLink$().subscribe(x => {
      // console.log('onLinks$');
      H.detach(H.links);
      const links = document.querySelectorAll('a:not([target]):not([data-router-disabled])');
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
    const properties = H.cache.get(H.location.href);
    properties.view = scope.$root.firstView;
    H.cache.set(H.location.href, properties);
    H.on('NAVIGATE_OUT', ({
      to,
      trigger,
      location
    }) => {
      scope.$broadcast('onNavigateOut', location);
    });
    H.on('NAVIGATE_IN', ({
      to,
      trigger,
      location
    }) => {
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

    element.on('$destroy', () => {
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

    if (!H.properties.page.getElementById(_gtm.default.FILTERS_SCRIPT_ID)) {
      _gtm.default.pageView();
    }
  }

  static factory($compile, $timeout) {
    return new HighwayDirective($compile, $timeout);
  }

}

exports.default = HighwayDirective;
HighwayDirective.factory.$inject = ['$compile', '$timeout'];

},{"../gtm/gtm.service":238,"../services/dom.service":251,"./custom-renderer":239,"./page-transition":241,"@dogstudio/highway":1,"rxjs":2,"rxjs/operators":198}],241:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _highway = _interopRequireDefault(require("@dogstudio/highway"));

var _dom = _interopRequireDefault(require("../services/dom.service"));

var _rect = _interopRequireDefault(require("../shared/rect"));

var _customRenderer = _interopRequireDefault(require("./custom-renderer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* jshint esversion: 6 */
class PageTransition extends _highway.default.Transition {
  in({
    from,
    to,
    done
  }) {
    // console.log('PageTransition.in');
    const loader = document.querySelector('.loader--cube');
    TweenMax.to(loader, 0.45, {
      opacity: 0,
      ease: Power2.easeInOut,
      onComplete: () => {
        TweenMax.set(loader, {
          display: 'none'
        });
      }
    });
    TweenMax.set(to, {
      opacity: 0,
      minHeight: from.offsetHeight
    });

    _customRenderer.default.$destroy(from);

    if (PageTransition.origin) {
      const left = PageTransition.origin.x / window.innerWidth * 100;
      const top = PageTransition.origin.y;
      TweenMax.set(to, {
        scale: 1.1,
        transformOrigin: `${left}% ${top}px`
      });
    } // console.log(PageTransition.origin);


    TweenMax.to(to, 0.6, {
      scale: 1,
      opacity: 1,
      delay: 0.1,
      // 0.250,
      // overwrite: 'all',
      ease: Power2.easeInOut,
      onComplete: () => {
        setTimeout(() => {
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
  }

  out({
    from,
    trigger,
    done
  }) {
    // console.log('PageTransition.out');
    const loader = document.querySelector('.loader--cube');
    TweenMax.set(loader, {
      opacity: 0,
      display: 'block'
    });
    TweenMax.to(loader, 0.45, {
      opacity: 1,
      ease: Power2.easeInOut
    });
    const headerMenu = document.querySelector('.header__menu');

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

    let left = 50;

    let top = _dom.default.getScrollTop(window);

    if (trigger instanceof HTMLElement) {
      const rect = _rect.default.fromNode(trigger);

      PageTransition.origin = rect.center;
      top += rect.center.y;
      left = rect.center.x / window.innerWidth * 100;
    }

    TweenMax.set(from, {
      transformOrigin: `${left}% ${top}px`
    });
    TweenMax.to(from, 0.6, {
      scale: 1.1,
      opacity: 0,
      delay: 0,
      // 0.150,
      // overwrite: 'all',
      ease: Power2.easeInOut,
      onComplete: () => {
        setTimeout(done, 500);
      }
    });
  }

}

exports.default = PageTransition;

},{"../services/dom.service":251,"../shared/rect":255,"./custom-renderer":239,"@dogstudio/highway":1}],242:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ITEMS_PER_PAGE = void 0;

/* jshint esversion: 6 */
const ITEMS_PER_PAGE = 9;
exports.ITEMS_PER_PAGE = ITEMS_PER_PAGE;

class MagazineCtrl {
  constructor($scope, $timeout, LocationService) {
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

  onScroll(event) {
    if (event.rect.bottom < event.windowRect.bottom) {
      // console.log('more!');
      if (!this.busy && this.maxItems < this.magazine.length) {
        this.$timeout(() => {
          this.busy = true;
          this.$timeout(() => {
            this.maxItems += ITEMS_PER_PAGE;
            this.visibleItems = this.magazine.slice(0, this.maxItems);
            this.busy = false; // console.log(this.visibleItems.length);
          }, 1000);
        }, 0);
      }
    }
  }

}

MagazineCtrl.$inject = ['$scope', '$timeout', 'LocationService'];
var _default = MagazineCtrl;
exports.default = _default;

},{}],243:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* jshint esversion: 6 */

/* global window, document, angular, TweenMax, TimelineMax */
class MoodboardDropdownDirective {
  constructor($compile) {
    this.$compile = $compile;
    this.restrict = 'A';
    this.template = `
<span has-dropdown=".moodboard__value">
	<span class="dropdown">
		<ul class="nav nav--select">
			<li ng-repeat="item in filter.options track by $index" ng-class="{ active: filter.value == item.value, disabled: item.disabled }">
				<span class="option" ng-class="{ 'option--picture': item.image }" ng-click="setFilter(item, filter)">
					<img ng-src="{{item.image}}" ng-if="item.image" />
					<span ng-bind="item.label"></span>
				</span>
			</li>
		</ul>
	</span>
	<span class="moodboard__value" ng-class="{ active: filter.value }">
		<span class="moodboard__underline"></span>
		<span class="moodboard__text">{{filter.placeholder}}</span>
	</span>
</span>
`; // this.require = 'ngModel';

    this.scope = {
      filter: '=?moodboardDropdown'
    };
  }

  link(scope, element, attributes, controller) {
    // console.log('MoodboardDropdownDirective', this.filter);
    const filter = scope.filter;

    if (filter.value) {
      filter.placeholder = filter.options.find(x => x.value === filter.value).label;
    }

    scope.setFilter = (item, filter) => {
      item = item || filter.options[0];
      filter.value = item.value;
      filter.placeholder = item.label;

      if (typeof filter.doFilter === 'function') {
        filter.doFilter(item, item.value);
      }

      scope.$broadcast('onCloseDropdown');
    };

    scope.removeFilter = filter => {
      this.setFilter(null, filter);
    };

    element.on('$destroy', () => {});
  }

  static factory($compile) {
    return new MoodboardDropdownDirective($compile);
  }

}

exports.default = MoodboardDropdownDirective;
MoodboardDropdownDirective.factory.$inject = ['$compile'];

},{}],244:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* jshint esversion: 6 */

/* global window, document, angular, MoodboardSearch, TweenMax, TimelineMax */
class MoodboardSearchDirective {
  constructor($compile) {
    this.$compile = $compile;
    this.restrict = 'A';
    this.scope = {
      filters: '=moodboardSearch',
      model: '=model'
    };
  }

  link(scope, element, attributes, controller) {
    scope.filters = scope.filters || {};
    const node = element[0];
    let html = node.innerText;
    const keys = Object.keys(scope.filters);
    keys.forEach(x => {
      // console.log(x);
      html = html.replace(`$${x}$`, `<span class="moodboard__dropdown ${x}" moodboard-dropdown="filters.${x}" ng-click="animateOff()"></span>`);
    }); // console.log('MoodboardSearchDirective', html);

    node.innerHTML = html;
    this.$compile(element.contents())(scope);
    const hasFilter = Object.keys(scope.filters).map(x => scope.filters[x]).find(x => x.value !== null) !== undefined;

    if (!hasFilter) {
      this.animateUnderlines(node);
    }

    scope.animateOff = () => {
      this.animateOff(node);
    };

    element.on('$destroy', () => {});
  }

  animateUnderlines(node) {
    this.animated = true;
    const values = [...node.querySelectorAll('.moodboard__underline')];
    values.forEach(x => {
      TweenMax.set(x, {
        transformOrigin: '0 50%',
        scaleX: 0
      });
    });
    let i = -1;

    const animate = () => {
      i++;
      i = i % values.length;
      const u = values[i];
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
        onComplete: () => {
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
            onComplete: () => {
              animate();
            }
          });
        }
      });
    };

    animate();
  }

  animateOff(node) {
    if (this.animated) {
      this.animated = false; // console.log('animateOff');
      // TweenMax.killAll();

      const values = [...node.querySelectorAll('.moodboard__underline')];
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
  }

  static factory($compile) {
    return new MoodboardSearchDirective($compile);
  }

}

exports.default = MoodboardSearchDirective;
MoodboardSearchDirective.factory.$inject = ['$compile'];

},{}],245:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* jshint esversion: 6 */
class MoodboardSectionCtrl {
  constructor($scope, $timeout, LocationService, ApiService) {
    this.$scope = $scope;
    this.$timeout = $timeout;
    this.locationService = LocationService;
    this.apiService = ApiService;
    this.filters = window.filters || {};
    Object.keys(this.filters).forEach(key => {
      const filter = this.filters[key];
      filter.options.forEach(option => {
        const value = {};
        value[key] = option.value;
        const q = this.locationService.getSerialization('filters', value);
        option.query = `?q=${q}`; // console.log(option.query, option.value);
      });
    });
  }

}

MoodboardSectionCtrl.$inject = ['$scope', '$timeout', 'LocationService', 'ApiService'];
var _default = MoodboardSectionCtrl;
exports.default = _default;

},{}],246:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ITEMS_PER_PAGE = exports.MOOD_TYPES = void 0;

var _operators = require("rxjs/operators");

var _gtm = _interopRequireDefault(require("../gtm/gtm.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* jshint esversion: 6 */
const GTM_CAT = 'moodboard';
const MOOD_TYPES = Object.freeze({
  Tile: 1,
  Horizontal: 2,
  Vertical: 3,
  Card: 4,
  Decor: 5
});
exports.MOOD_TYPES = MOOD_TYPES;
const ITEMS_PER_PAGE = 20;
exports.ITEMS_PER_PAGE = ITEMS_PER_PAGE;

class MoodboardCtrl {
  constructor($scope, $timeout, LocationService, ApiService) {
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

  deserializeFilters() {
    const locationFilters = this.locationService.deserialize('filters') || this.initialFilters || {}; // console.log('MoodboardCtrl.deserializeFilters', filters);

    Object.keys(this.filters).forEach(x => {
      const filter = this.filters[x];

      switch (x) {
        default:
          filter.doFilter = (item, value) => {
            // console.log(item, value);
            this.applyFilters(item, value);
          };

      }

      filter.options.unshift({
        label: filter.placeholder,
        value: null
      });
      const selectedOption = filter.options.find(o => Boolean(o.value === (locationFilters[x] || null)));
      filter.value = selectedOption.value;
      filter.placeholder = selectedOption.label; // console.log(x, filters[x], filter.value);
    });
    return filters;
  }

  serializeFilters() {
    let filters = {};
    let any = false;
    Object.keys(this.filters).forEach(x => {
      const filter = this.filters[x];

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
  }

  applyFilters(serialize) {
    // console.log('MoodboardCtrl.applyFilters', this.filters);
    if (serialize !== false) this.serializeFilters();
    var me = this;
    const filters = {};
    let anyFilter = false;
    Object.keys(this.filters).map(key => {
      const v = me.filters[key].value;

      if (v !== null) {
        filters[key] = v;
        anyFilter = true;
      }
    });

    if (anyFilter) {
      this.apiService.moodboard.filter(filters).pipe((0, _operators.first)()).subscribe(success => {
        let items = success.data;
        this.filteredItems = [];
        this.visibleItems = [];
        this.maxItems = ITEMS_PER_PAGE;
        this.$timeout(() => {
          this.filteredItems = items;
          this.visibleItems = items.slice(0, this.maxItems);
        }, 50);
      }, error => console.log('MoodboardCtrl.applyFilters.error', error));
    }

    _gtm.default.pageViewFilters(GTM_CAT, this.filters);
  }

  onScroll(event) {
    if (event.rect.bottom < event.windowRect.bottom) {
      // console.log('more!');
      if (!this.busy && this.maxItems < this.filteredItems.length) {
        this.$timeout(() => {
          this.busy = true;
          this.$timeout(() => {
            this.maxItems += ITEMS_PER_PAGE;
            this.visibleItems = this.filteredItems.slice(0, this.maxItems);
            this.busy = false; // console.log(this.visibleItems.length);
          }, 1000);
        }, 0);
      }
    }
  }

}

MoodboardCtrl.$inject = ['$scope', '$timeout', 'LocationService', 'ApiService'];
var _default = MoodboardCtrl;
exports.default = _default;

},{"../gtm/gtm.service":238,"rxjs/operators":198}],247:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ITEMS_PER_PAGE = void 0;

var _gtm = _interopRequireDefault(require("../gtm/gtm.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* jshint esversion: 6 */
const ITEMS_PER_PAGE = 9;
exports.ITEMS_PER_PAGE = ITEMS_PER_PAGE;
const GTM_CAT = 'news';

class NewsCtrl {
  constructor($scope, $timeout, LocationService) {
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

  deserializeFilters(initialFilter) {
    const locationFilters = this.locationService.deserialize('filters') || initialFilter || {};
    Object.keys(this.filters).forEach(x => {
      const filter = this.filters[x];

      switch (x) {
        case 'categories':
          filter.doFilter = (item, value) => {
            return item.categoryId === value;
          };

          break;

        case 'years':
          filter.doFilter = (item, value) => {
            return item.year === value;
          };

          break;
      }

      filter.options.unshift({
        label: this.filters[x].placeholder,
        value: null
      });
      const selectedOption = filter.options.find(o => Boolean(o.value === (locationFilters[x] || null)));
      filter.value = selectedOption.value;
      filter.placeholder = selectedOption.label;
    });
    return filters;
  }

  serializeFilters() {
    let filters = {};
    let any = false;
    Object.keys(this.filters).forEach(x => {
      const filter = this.filters[x];

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
  }

  applyFilters(serialize) {
    if (serialize !== false) this.serializeFilters();
    const {
      filteredItems
    } = this.getFilteredItems(this.news); // console.log(filteredItems, filters);

    this.filteredItems = [];
    this.visibleItems = [];
    this.maxItems = ITEMS_PER_PAGE;
    this.$timeout(() => {
      this.filteredItems = filteredItems;
      this.visibleItems = filteredItems.slice(0, this.maxItems);
      this.updateFilterStates(this.news); // delayer for image update
    }, 50);

    _gtm.default.pageViewFilters(GTM_CAT, this.filters);
  }

  getFilteredItems(items, skipFilter) {
    const filters = Object.keys(this.filters).map(x => this.filters[x]).filter(x => x.value !== null);
    let filteredItems = items.slice();

    if (filters.length) {
      filteredItems = filteredItems.filter(item => {
        let has = true;
        filters.forEach(filter => {
          if (filter !== skipFilter) {
            has = has && filter.doFilter(item, filter.value);
          }
        });
        return has;
      });
    }

    return {
      filteredItems
    };
  }

  updateFilterStates(items) {
    Object.keys(this.filters).forEach(x => {
      const filter = this.filters[x];
      const {
        filteredItems
      } = this.getFilteredItems(items, filter);
      filter.options.forEach(option => {
        let has = false;

        if (option.value) {
          let i = 0;

          while (i < filteredItems.length && !has) {
            const item = filteredItems[i];
            has = filter.doFilter(item, option.value);
            i++;
          }
        } else {
          has = true;
        }

        option.disabled = !has;
      });
    });
  }

  setFilter(item, filter) {
    item = item || filter.options[0];
    filter.value = item.value;
    filter.placeholder = item.label;
    this.applyFilters();
    this.$scope.$broadcast('onCloseDropdown');
  }

  removeFilter(filter) {
    this.setFilter(null, filter);
  }

  onScroll(event) {
    if (event.rect.bottom < event.windowRect.bottom) {
      // console.log('more!');
      if (!this.busy && this.maxItems < this.filteredItems.length) {
        this.$timeout(() => {
          this.busy = true;
          this.$timeout(() => {
            this.maxItems += ITEMS_PER_PAGE;
            this.visibleItems = this.filteredItems.slice(0, this.maxItems);
            this.busy = false; // console.log(this.visibleItems.length);
          }, 1000);
        }, 0);
      }
    }
  }

}

NewsCtrl.$inject = ['$scope', '$timeout', 'LocationService'];
var _default = NewsCtrl;
exports.default = _default;

},{"../gtm/gtm.service":238}],248:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _gtm = _interopRequireDefault(require("../gtm/gtm.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* jshint esversion: 6 */
const GTM_CAT = 'references';

class ReferencesCtrl {
  constructor($scope, $timeout, LocationService) {
    this.$scope = $scope;
    this.$timeout = $timeout;
    this.locationService = LocationService;
    this.filters = window.filters || {};
    this.references = window.references || [];
    this.initialFilters = window.initialFilters || null;
    this.deserializeFilters(this.initialFilters);
    this.applyFilters(false);
  }

  deserializeFilters(initialFilter) {
    const locationFilters = this.locationService.deserialize('filters') || initialFilter || {};
    Object.keys(this.filters).forEach(x => {
      const filter = this.filters[x];

      switch (x) {
        case 'collections':
          filter.doFilter = (item, value) => {
            return item.collections.indexOf(value) !== -1;
          };

          break;

        case 'countries':
          filter.doFilter = (item, value) => {
            return item.countryId === value;
          };

          break;

        default:
          filter.doFilter = (item, value) => {
            return item.features.indexOf(value) !== -1;
          };

      }

      filter.options.unshift({
        label: this.filters[x].placeholder,
        value: null
      });
      const selectedOption = filter.options.find(o => Boolean(o.value === (locationFilters[x] || null)));
      filter.value = selectedOption.value;
      filter.placeholder = selectedOption.label;
    });
    return filters;
  }

  serializeFilters() {
    let filters = {};
    let any = false;
    Object.keys(this.filters).forEach(x => {
      const filter = this.filters[x];

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
  }

  applyFilters(serialize) {
    if (serialize !== false) this.serializeFilters();
    const {
      filteredItems
    } = this.getFilteredItems(this.references);
    this.filteredReferences = [];
    this.$timeout(() => {
      this.filteredReferences = filteredItems;
      this.updateFilterStates(this.references, filteredItems); // delayer for image update
    }, 50);

    _gtm.default.pageViewFilters(GTM_CAT, this.filters);
  }

  getFilteredItems(items, skipFilter) {
    const filters = Object.keys(this.filters).map(x => this.filters[x]).filter(x => x.value !== null);
    let filteredItems = items.slice();

    if (filters.length) {
      filteredItems = filteredItems.filter(item => {
        let has = true;
        filters.forEach(filter => {
          if (filter !== skipFilter) {
            has = has && filter.doFilter(item, filter.value);
          }
        });
        return has;
      });
    }

    return {
      filteredItems
    };
  }

  updateFilterStates(items) {
    Object.keys(this.filters).forEach(x => {
      const filter = this.filters[x];
      const {
        filteredItems
      } = this.getFilteredItems(items, filter);
      filter.options.forEach(option => {
        let has = false;

        if (option.value) {
          let i = 0;

          while (i < filteredItems.length && !has) {
            const item = filteredItems[i];
            has = filter.doFilter(item, option.value);
            i++;
          }
        } else {
          has = true;
        }

        option.disabled = !has;
      });
    });
  }

  setFilter(item, filter) {
    item = item || filter.options[0];
    filter.value = item.value;
    filter.placeholder = item.label;
    this.applyFilters();
    this.$scope.$broadcast('onCloseDropdown');
  }

  removeFilter(filter) {
    this.setFilter(null, filter);
  }

}

ReferencesCtrl.$inject = ['$scope', '$timeout', 'LocationService'];
var _default = ReferencesCtrl;
exports.default = _default;

},{"../gtm/gtm.service":238}],249:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");

/* jshint esversion: 6 */
class RootCtrl {
  constructor($scope, $timeout, DomService, ApiService, WishlistService) {
    this.$scope = $scope;
    this.$timeout = $timeout;
    this.domService = DomService;
    this.apiService = ApiService;
    this.wishlistService = WishlistService;
    this.unsubscribe = new _rxjs.Subject();
    this.wishlistService.count$.pipe((0, _operators.takeUntil)(this.unsubscribe)).subscribe(count => {
      this.wishlistCount = count;
    });
    $scope.$on('onMuuri', () => {
      this.domService.scrollEmitter$.next({
        target: window
      });
    });
    $scope.$on('destroy', () => {
      // console.log('destroy');
      this.unsubscribe.next();
      this.unsubscribe.complete();
    });
  }

  onSearch(query) {
    // console.log('onSearch', query);
    this.searchOpened = false;
    const url = document.querySelector('[data-search]').getAttribute('data-search');
    window.location.href = url.replace('##query##', query);
  }

  onScroll(event) {
    const scrolled = event.scroll.scrollTop > 40;
    const direction = event.scroll.direction; // console.log(this.$scope.hasDropdown, Object.keys(this).filter(x => typeof this[x] === 'boolean').map(x => `${x}: ${this[x]}`).join(','));

    if (this.droppedIn) {
      this.$scope.$broadcast('onCloseDropdown');
    }

    if (event.scroll.direction) {
      if (direction && (this.direction !== direction || this.scrolled !== scrolled)) {
        this.$timeout(() => {
          this.scrolled = scrolled;
          this.direction = direction;
        }, 1);
      }
    }
  }

  onInit(brand) {
    this.brand = brand;
    this.webglEnabled = false; // this.domService.hasWebglSupport();

    this.domService.addCustomRules();
    /*
    this.domService.smoothScroll$('.page').subscribe((top) => {
    	// console.log(top);
    });
    */
    // console.log('onInit');

    this.$timeout(() => {
      this.init = true;
      const view = document.querySelector('.view');
      TweenMax.to(view, 0.6, {
        opacity: 1,
        delay: 0,
        overwrite: 'all'
      });
    }, 1000);
    this.$scope.$on('onDroppinIn', (scope, droppinIn) => {
      // console.log('onDroppinIn', droppinIn);
      this.$timeout(() => {
        this.droppinIn = droppinIn;
      });
    });
  }

  getClasses() {
    const classes = {};
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

    return classes;
  }

  closeNav() {
    const node = document.querySelector(`.section--submenu.active`);
    return this.onDroppedOut(node);
  }

  openNav(nav) {
    const node = document.querySelector(`#nav-${nav} .section--submenu`);
    return this.onDroppedIn(node);
  }

  toggleNav(id) {
    this.nav = this.nav === id ? null : id;
    this.closeNav().then(() => {
      if (this.nav) {
        this.openNav(this.nav);
      }
    });
  }

  onDroppedOut(node) {
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
          onComplete: () => {
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

  }

  onDroppedIn(node) {
    return new Promise((resolve, reject) => {
      this.droppedIn = true;
      this.droppinIn = true;
      const items = [].slice.call(node.querySelectorAll('.submenu__item'));
      TweenMax.set(items, {
        opacity: 0
      });
      TweenMax.set(node, {
        height: 'auto'
      });
      const mh = node.offsetHeight;
      TweenMax.set(node, {
        height: 0,
        overflow: 'hidden'
      });
      TweenMax.to(node, 0.8, {
        height: mh,
        ease: Expo.easeOut,
        delay: 0.0,
        overwrite: 'all',
        onComplete: () => {
          delete node.style.overflow;
          TweenMax.set(node, {
            height: 'auto'
          }); // TweenMax.set(node, { clearProps: 'all' });

          if (items.length === 0) {
            this.droppinIn = false;
          }
        }
      });

      if (items.length) {
        TweenMax.staggerTo(items, 0.35, {
          opacity: 1,
          stagger: 0.07,
          delay: 0.5,
          onComplete: () => {
            this.droppinIn = false;
          }
        });
      }
    });
  }

  toggleBrand(event) {
    const brands = ['atlas-concorde', 'atlas-concorde-solution', 'atlas-concorde-usa', 'atlas-concorde-russia'];
    const i = (brands.indexOf(this.brand) + 1) % brands.length;
    this.brand = brands[i];
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  toggleMenuProduct() {
    this.menuProductOpened = !this.menuProductOpened;

    if (!this.menuProductOpened) {
      const results = document.querySelector('.section--filters');
      const bottom = this.domService.scrollTop + results.getBoundingClientRect().bottom;
      setTimeout(() => {
        window.scroll(0, bottom - 80); // console.log('toggleMenuProduct', results, bottom, this.domService.scrollTop);
      }, 500);
    }
  }

  pad(index) {
    return index < 10 ? '0' + index : index;
  }

  hasHash(hash) {
    return window.location.hash.indexOf(hash) !== -1;
  }

}

RootCtrl.$inject = ['$scope', '$timeout', 'DomService', 'ApiService', 'WishlistService'];
var _default = RootCtrl;
exports.default = _default;

},{"rxjs":2,"rxjs/operators":198}],250:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.API_HREF = exports.API_DEV = void 0;

var _rxjs = require("rxjs");

/* jshint esversion: 6 */
const API_DEV = window.location.port === '6001' || window.location.host === 'actarian.github.io';
exports.API_DEV = API_DEV;
const API_HREF = API_DEV ? 'https://atlasconcorde.wslabs.it' : '';
exports.API_HREF = API_HREF;

class ApiService {
  constructor($http) {
    this.http = $http;
    const api = {
      advancedSearch: {
        get: () => {
          return (0, _rxjs.from)($http.get('data/advanced-search.json')); // return from($http.get(API_HREF + '/api/advanced-search/json'));
        }
      },
      wishlist: {
        get: () => {
          if (!API_DEV) {
            return (0, _rxjs.from)(this.$http.post('', this.wishlist));
          } else {
            return (0, _rxjs.from)(this.$http.get('data/moodboard.json').then(success => {
              if (success.data) {
                return success.data;
              }
            }));
          }
        },
        toggle: item => {
          item.added = !item.added;
          return Promise.resolve(item);
        },
        clearAll: () => {
          return Promise.resolve();
        }
      },
      moodboard: {
        filter: filters => {
          if (!API_DEV) {
            return (0, _rxjs.from)($http.post('', filters));
          } else {
            return (0, _rxjs.from)($http.get('data/moodboard.json'));
          }
        }
      },
      storeLocator: {
        all: () => {
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

  static factory($http) {
    return new ApiService($http);
  }

}

exports.default = ApiService;
ApiService.factory.$inject = ['$http'];
ApiService.API_DEV = API_DEV;

},{"rxjs":2}],251:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rxjs = require("rxjs");

var _animationFrame = require("rxjs/internal/scheduler/animationFrame");

var _operators = require("rxjs/operators");

var _rect = _interopRequireDefault(require("../shared/rect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* jshint esversion: 6 */
class DomService {
  constructor() {
    this.scrollEmitter$ = DomService.scrollEmitter$;
  }

  get scrollTop() {
    return DomService.getScrollTop(window);
  }

  get scrollLeft() {
    return DomService.getScrollLeft(window);
  }

  traverseUp(node, callback, i = 0) {
    if (!node) {
      return;
    }

    const result = callback(node, i);

    if (result) {
      return result;
    }

    return this.traverseUp(node.parentNode, callback, i + 1);
  }

  traverseDown(node, callback, i = 0) {
    if (!node) {
      return;
    }

    let result = callback(node, i);

    if (result) {
      return result;
    }

    if (node.nodeType === 1) {
      let j = 0,
          t = node.childNodes.length;

      while (j < t && !result) {
        result = this.traverseDown(node.childNodes[j], callback, i + 1);
        j++;
      }
    }

    return result;
  }

  hasWebglSupport() {
    if (this.isIE()) {
      return false;
    }

    if (!this.hasWebgl()) {
      return false;
    }

    return true;
  }

  isIE() {
    const ua = window.navigator.userAgent;
    const msie = ua.indexOf('MSIE ');

    if (msie > 0) {
      // IE 10 or older => return version number
      return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    const trident = ua.indexOf('Trident/');

    if (trident > 0) {
      // IE 11 => return version number
      const rv = ua.indexOf('rv:');
      return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    const edge = ua.indexOf('Edge/');

    if (edge > 0) {
      // Edge (IE 12+) => return version number
      return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    } // other browser


    return false;
  }

  hasWebgl() {
    let gl,
        debugInfo,
        vendor,
        renderer,
        has = false;

    try {
      const canvas = document.createElement('canvas');

      if (!!window.WebGLRenderingContext) {
        gl = canvas.getContext('webgl', {
          failIfMajorPerformanceCaveat: true
        }) || canvas.getContext('experimental-webgl', {
          failIfMajorPerformanceCaveat: true
        });
      }
    } catch (e) {
      console.log('no webgl');
    }

    if (gl) {
      debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
      renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
      has = true;
    }

    console.log(`WebGLCapabilities debugInfo: ${debugInfo} vendor: ${vendor} renderer: ${renderer} `);
    return has;
  }

  getOuterHeight(node) {
    let height = node.clientHeight;
    const computedStyle = window.getComputedStyle(node);
    height += parseInt(computedStyle.marginTop, 10);
    height += parseInt(computedStyle.marginBottom, 10);
    height += parseInt(computedStyle.borderTopWidth, 10);
    height += parseInt(computedStyle.borderBottomWidth, 10);
    return height;
  }

  getOuterWidth(node) {
    let width = node.clientWidth;
    const computedStyle = window.getComputedStyle(node);
    width += parseInt(computedStyle.marginLeft, 10);
    width += parseInt(computedStyle.marginRight, 10);
    width += parseInt(computedStyle.borderLeftWidth, 10);
    width += parseInt(computedStyle.borderRightWidth, 10);
    return width;
  }

  raf$() {
    return DomService.raf$;
  }

  windowRect$() {
    return DomService.windowRect$;
  }

  rafAndRect$() {
    return DomService.rafAndRect$;
  }

  scroll$() {
    return DomService.scroll$;
  }

  secondaryScroll$(target) {
    return DomService.secondaryScroll$(target);
  }

  scrollAndRect$() {
    return DomService.scrollAndRect$;
  }

  smoothScroll$(selector, friction = 20) {
    const body = document.querySelector('body');
    const node = document.querySelector(selector); // const outerHeight = this.getOuterHeight(node);

    let down = false;
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

    return this.raf$().pipe((0, _operators.map)(() => {
      const outerHeight = this.getOuterHeight(node); // console.log(window.DocumentTouch);
      // console.log(document instanceof DocumentTouch);
      // console.log(navigator.msMaxTouchPoints);

      if (body.offsetHeight !== outerHeight) {
        // margin ?
        body.style = `height: ${outerHeight}px`;
      }

      const nodeTop = node.top || 0;
      const top = down ? -this.scrollTop : Math.round((nodeTop + (-this.scrollTop - nodeTop) / friction) * 100) / 100;

      if (node.top !== top) {
        node.top = top;
        node.style = `position: fixed; width: 100%; transform: translateY(${top}px)`;
        return top;
      } else {
        return null;
      }
    }), (0, _operators.filter)(x => x !== null), (0, _operators.shareReplay)());
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


  rafIntersection$(node) {
    return this.rafAndRect$().pipe((0, _operators.map)(datas => {
      // const scrollTop = datas[0];
      const windowRect = datas[1];

      const rect = _rect.default.fromNode(node);

      if (rect.height) {
        const intersection = rect.intersection(windowRect);
        const response = DomService.rafIntersection_;
        response.scroll = datas[0];
        response.windowRect = datas[1];
        response.rect = rect;
        response.intersection = intersection;
        return response;
      }
    }), (0, _operators.filter)(response => response !== undefined));
  }

  scrollIntersection$(node) {
    const o = this.scrollAndRect$().pipe((0, _operators.map)(datas => {
      // const scrollTop = datas[0];
      const windowRect = datas[1];

      const rect = _rect.default.fromNode(node);

      if (rect.height) {
        const intersection = rect.intersection(windowRect);
        const response = DomService.scrollIntersection_;
        response.scroll = datas[0];
        response.windowRect = datas[1];
        response.rect = rect;
        response.intersection = intersection;
        return response;
      }
    }), (0, _operators.filter)(response => response !== undefined));
    DomService.scrollEmitter$.next({
      target: window
    });
    return o;
  }

  appear$(node, value = 0.0) {
    // -0.5
    return this.scrollIntersection$(node).pipe((0, _operators.filter)(x => x.intersection.y > value), (0, _operators.first)());
  }

  visibility$(node, value = 0.5) {
    return this.scrollIntersection$(node).pipe((0, _operators.map)(x => x.intersection.y > value), (0, _operators.distinctUntilChanged)());
  }

  firstVisibility$(node, value = 0.5) {
    return this.visibility$(node, value).pipe((0, _operators.filter)(visible => visible), (0, _operators.first)());
  }

  addCustomRules() {
    const sheet = this.addCustomSheet();
    const body = document.querySelector('body');
    const scrollBarWidth = window.innerWidth - body.clientWidth;
    let rule = `body.droppin-in { padding-right: ${scrollBarWidth}px; }`;
    sheet.insertRule(rule, 0);
    rule = `body.droppin-in header { width: calc(100% - ${scrollBarWidth}px); }`;
    sheet.insertRule(rule, 1);
    rule = `body.droppin-in menu--product { width: calc(100% - ${scrollBarWidth}px); }`;
    sheet.insertRule(rule, 2);
  }

  addCustomSheet() {
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(''));
    document.head.appendChild(style);
    return style.sheet;
  }

  static factory() {
    return new DomService();
  }

  static getScrollTop(node) {
    if (node === document || node === window) {
      return this.getScrollTop(document.scrollingElement || document.documentElement || document.body);
    }

    return node.pageYOffset || node.scrollY || node.scrollTop || 0;
  }

  static getScrollLeft(node) {
    if (node === document || node === window) {
      return this.getScrollLeft(document.scrollingElement || document.documentElement || document.body);
    }

    return node.pageXOffset || node.scrollX || node.scrollLeft || 0;
  }

  static secondaryScroll$(target) {
    return (0, _rxjs.fromEvent)(target, 'scroll').pipe((0, _operators.tap)(event => DomService.scrollEmitter$.next(event)));
  }

}

exports.default = DomService;
DomService.factory.$inject = [];
DomService.rafIntersection_ = {};
DomService.scrollIntersection_ = {};
DomService.raf$ = (0, _rxjs.range)(0, Number.POSITIVE_INFINITY, _animationFrame.animationFrame);

DomService.windowRect$ = function () {
  const windowRect = new _rect.default({
    width: window.innerWidth,
    height: window.innerHeight
  });
  return (0, _rxjs.fromEvent)(window, 'resize').pipe((0, _operators.map)(originalEvent => {
    windowRect.width = window.innerWidth;
    windowRect.height = window.innerHeight;
    return windowRect;
  }), (0, _operators.startWith)(windowRect), (0, _operators.shareReplay)());
}();

DomService.rafAndRect$ = (0, _rxjs.combineLatest)(DomService.raf$, DomService.windowRect$).pipe((0, _operators.shareReplay)());

DomService.mainScroll$ = function () {
  const target = window;
  return (0, _rxjs.fromEvent)(target, 'scroll').pipe((0, _operators.shareReplay)());
}();

DomService.scrollEmitter$ = new _rxjs.Subject();

DomService.scroll$ = function () {
  const target = window;
  let previousTop = DomService.getScrollTop(target);
  const event = {
    scrollTop: previousTop,
    scrollLeft: DomService.getScrollLeft(target),
    direction: 0,
    originalEvent: null
  };
  return (0, _rxjs.merge)(DomService.mainScroll$, DomService.scrollEmitter$).pipe((0, _operators.auditTime)(1000 / 60), (0, _operators.map)(originalEvent => {
    event.scrollTop = DomService.getScrollTop(originalEvent.target);
    event.scrollLeft = DomService.getScrollLeft(originalEvent.target);
    const diff = event.scrollTop - previousTop;
    event.direction = diff ? diff / Math.abs(diff) : 0;
    previousTop = event.scrollTop;
    event.originalEvent = originalEvent;
    return event;
  }), (0, _operators.startWith)(event), (0, _operators.shareReplay)());
}();

DomService.scrollAndRect$ = (0, _rxjs.combineLatest)(DomService.scroll$, DomService.windowRect$).pipe((0, _operators.shareReplay)());

},{"../shared/rect":255,"rxjs":2,"rxjs/internal/scheduler/animationFrame":161,"rxjs/operators":198}],252:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rxjs = require("rxjs");

var _gtm = _interopRequireDefault(require("../gtm/gtm.service"));

var _api = require("./api.service");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* jshint esversion: 6 */
class WishlistService {
  constructor($http, PromiseService, StorageService, ApiService) {
    this.$http = $http;
    this.promise = PromiseService;
    this.storage = StorageService;
    this.api = ApiService;
    this.count$ = WishlistService.count$;
    const count = this.wishlist.length; // console.log('WishlistService', this.storage);
  }

  get wishlist() {
    if (!this.wishlist_) {
      const wishlist = this.storage.get('wishlist');
      this.wishlist_ = wishlist || [];
      WishlistService.count$.next(this.wishlist_.length);
    }

    return this.wishlist_;
  }

  set wishlist(wishlist) {
    this.wishlist_ = wishlist || [];
    this.storage.set('wishlist', this.wishlist_);
    WishlistService.count$.next(this.wishlist_.length);
  }

  indexOf(item) {
    if (item) {
      const index = this.wishlist.reduce((p, c, i) => {
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
  }

  has(item) {
    return this.indexOf(item) !== -1;
  }

  add(item) {
    return this.promise.make(promise => {
      const wishlist = this.wishlist;

      _gtm.default.push({
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
      this.wishlist = wishlist;
      promise.resolve(true);
    });
  }

  remove(item) {
    return this.promise.make(promise => {
      const index = this.indexOf(item);
      const wishlist = this.wishlist;

      _gtm.default.push({
        event: 'removeWishlist',
        wish_name: wishlist[index].name || wishlist[index].coId,
        wish_type: wishlist[index].typeName || wishlist[index].type
      });

      wishlist.splice(index, 1);
      this.wishlist = wishlist;
      promise.resolve(false);
    });
  }

  toggle(item) {
    if (this.has(item)) {
      return this.remove(item);
    } else {
      return this.add(item);
    }
  }

  clearAll() {
    return (0, _rxjs.from)(this.promise.make(promise => {
      const wishlist = [];
      this.wishlist = wishlist;
      promise.resolve(wishlist);
    }));
  }

  get() {
    if (!_api.API_DEV) {
      return (0, _rxjs.from)(this.$http.post('', this.wishlist).then(success => {
        return success;
      }));
    } else {
      return (0, _rxjs.from)(this.$http.get('data/moodboard.json').then(success => {
        if (success.data) {
          this.wishlist = success.data;
        }

        return success;
      }));
    }
  }

  static factory($http, PromiseService, StorageService, ApiService) {
    return new WishlistService($http, PromiseService, StorageService, ApiService);
  }

}

exports.default = WishlistService;
WishlistService.count$ = new _rxjs.BehaviorSubject(0);
WishlistService.factory.$inject = ['$http', 'PromiseService', 'LocalStorageService', 'ApiService'];

},{"../gtm/gtm.service":238,"./api.service":250,"rxjs":2}],253:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* jshint esversion: 6 */

/* global angular */
class LocationService {
  constructor($location) {
    this.$location = $location;
  }

  get(key) {
    return this.$location.search()[key];
  }

  set(keyOrValue, value) {
    if (typeof keyOrValue === 'string') {
      this.$location.search(keyOrValue, value).replace();
    } else {
      this.$location.search(keyOrValue).replace();
    }
  }

  deserialize(key) {
    let value = null;
    const serialized = this.get('q'); // console.log(serialized);

    if (serialized) {
      const json = window.atob(serialized);
      value = JSON.parse(json);
    } // console.log(value);


    if (key && value) {
      value = value[key];
    }

    return value || null;
  }

  serialize(keyOrValue, value) {
    let serialized = null;
    let q = this.deserialize() || {};

    if (typeof keyOrValue === 'string') {
      q[keyOrValue] = value;
    } else {
      q = keyOrValue;
    }

    const json = JSON.stringify(q);
    serialized = window.btoa(json);
    this.set('q', serialized);
  }

  getSerialization(keyOrValue, value) {
    let serialized = null;
    let q = {};

    if (typeof keyOrValue === 'string') {
      q[keyOrValue] = value;
    } else {
      q = keyOrValue;
    }

    const json = JSON.stringify(q);
    serialized = window.btoa(json);
    return serialized;
  }

  static factory($location) {
    return new LocationService($location);
  }

}

exports.default = LocationService;
LocationService.factory.$inject = ['$location'];

},{}],254:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* jshint esversion: 6 */

/* global angular */
class PromiseService {
  constructor($q) {
    this.$q = $q;
  }

  make(callback) {
    if (typeof callback !== 'function') {
      throw 'promise resolve callback missing';
    }

    const deferred = this.$q.defer();
    callback(deferred);
    return deferred.promise;
  }

  all(promises) {
    return this.$q.all(promises);
  }

  static factory($q) {
    return new PromiseService($q);
  }

}

exports.default = PromiseService;
PromiseService.factory.$inject = ['$q'];

},{}],255:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* jshint esversion: 6 */
class Rect {
  constructor(rect) {
    this.top = 0;
    this.right = 0;
    this.bottom = 0;
    this.left = 0;
    this.width = 0;
    this.height = 0;
    this.set(rect);
  }

  static contains(rect, left, top) {
    return rect.top <= top && top <= rect.bottom && rect.left <= left && left <= rect.right;
  }

  static intersectRect(r1, r2) {
    return !(r2.left > r1.right || r2.right < r1.left || r2.top > r1.bottom || r2.bottom < r1.top);
  }

  static fromNode(node) {
    if (!node) {
      return;
    }

    const rect = node.rect_ || (node.rect_ = new Rect());
    const rects = node.getClientRects();

    if (!rects.length) {
      // console.log(rects, node);
      return rect;
    }

    const boundingRect = node.getBoundingClientRect(); // rect.top: boundingRect.top + defaultView.pageYOffset,
    // rect.left: boundingRect.left + defaultView.pageXOffset,

    rect.top = boundingRect.top;
    rect.left = boundingRect.left;
    rect.width = boundingRect.width;
    rect.height = boundingRect.height;
    rect.setCenter();
    return rect;
  }

  set(rect) {
    if (rect) {
      Object.assign(this, rect);
      this.right = this.left + this.width;
      this.bottom = this.top + this.height;
    }

    this.setCenter();
  }

  setCenter() {
    const center = this.center || (this.center = {});
    center.top = this.top + this.height / 2;
    center.left = this.left + this.width / 2;
    center.x = center.left;
    center.y = center.top;
  }

  contains(left, top) {
    return Rect.contains(this, left, top);
  }

  intersect(rect) {
    return Rect.intersectRect(this, rect);
  }

  intersection(rect) {
    const intersection = this.intersection_ || (this.intersection_ = {
      center: {}
    });
    intersection.center.x = (this.center.x - rect.center.x) / (rect.width / 2);
    intersection.center.y = (this.center.y - rect.center.y) / (rect.height / 2);
    const dx = this.left > rect.left ? 0 : Math.abs(rect.left - this.left);
    const dy = this.top > rect.top ? 0 : Math.abs(rect.top - this.top);
    const x = dx ? 1 - dx / this.width : (rect.left + rect.width - this.left) / this.width;
    const y = dy ? 1 - dy / this.height : (rect.top + rect.height - this.top) / this.height;
    intersection.x = x;
    intersection.y = y;
    return intersection;
  }

  intersection___(rect) {
    const center = {
      x: (this.center.x - rect.center.x) / (rect.width / 2),
      y: (this.center.y - rect.center.y) / (rect.height / 2)
    };

    if (this.intersect(rect)) {
      const dx = this.left > rect.left ? 0 : Math.abs(rect.left - this.left);
      const dy = this.top > rect.top ? 0 : Math.abs(rect.top - this.top);
      let x = dx ? 1 - dx / this.width : (rect.left + rect.width - this.left) / this.width;
      let y = dy ? 1 - dy / this.height : (rect.top + rect.height - this.top) / this.height;
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

}

exports.default = Rect;

},{}],256:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FRAGMENT_SHADER = void 0;

/* jshint esversion: 6 */
const FRAGMENT_SHADER = `
#ifdef GL_ES
precision highp float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform float u_pow;
uniform float u_top;
uniform float u_strength;
uniform sampler2D u_texture;
uniform vec2 u_textureResolution;

float random(vec2 st) {
	return fract(sin(dot(st.xy + cos(u_time), vec2(12.9898 , 78.233))) * (43758.5453123));
}

void main() {
	vec2 st = gl_FragCoord.xy / u_resolution.xy;
	float rr = u_resolution.x / u_resolution.y;
	float tr = u_textureResolution.x / u_textureResolution.y;
	if (tr > rr) {
		st.x = ((st.x - 0.5) * rr / tr) + 0.5;
	} else {
		st.y = ((st.y - 0.5) / rr * tr) + 0.5;
	}
	float top = u_top / u_resolution.y;
	vec2 mx = u_mouse / u_resolution;
	vec2 dx = vec2(cos(u_time * 0.5), sin(u_time * 0.6)) * 4.0 * u_strength;

	float noise = random(st) * 0.08;

	float c = cos((st.x + dx.x - mx.x * 0.4) * 6.0 + 2.0 * dx.y);
	float s = sin((st.y + top + dx.y - mx.y * 0.2) * 3.0 + 1.0 * dx.x);
	float b = (length(vec2(c + s, c)) + 2.0) * u_strength;

	float center = length(st - 0.5);
	vec2 sty = vec2(st.x, st.y + top);
	float scale = 0.95 * (1.0 - b * center * u_pow);
	vec2 stb = (sty - 0.5) * scale + 0.5;

	vec3 video = texture2D(u_texture, stb).rgb;
	vec3 bulge = vec3(b);

	vec3 color = vec3(0.0);
	color = vec3(video - noise);
	// color = vec3(video);
	// color = vec3(video - bulge * 0.1 - noise);
	// color = vec3(bulge);
	// color = vec3(noise);
	// color = vec3(center);
	// color = vec3(u_pow * center);
	// color = vec3(bulge - noise) * length(st - 0.5) * u_pow;

	gl_FragColor = vec4(color, 1.0);
}
`;
exports.FRAGMENT_SHADER = FRAGMENT_SHADER;

},{}],257:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.State = void 0;

/* jshint esversion: 6 */
const DELAY = 3000;

class State {
  constructor($timeout, $rootScope) {
    this.$timeout = $timeout;
    this.$rootScope = $rootScope;
    this.idle();
  }

  idle() {
    this.isBusy = false;
    this.isError = false;
    this.isErroring = false;
    this.isSuccess = false;
    this.isSuccessing = false;
    this.button = null;
    this.errors = [];
  }

  busy() {
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
  }

  classes(addons) {
    const classes = {
      ready: this.isReady,
      busy: this.isBusy,
      successing: this.isSuccessing,
      success: this.isSuccess,
      errorring: this.isErroring,
      error: this.isError
    };

    if (addons) {
      Object.keys(addons).forEach(key => {
        classes[addons[key]] = classes[key];
      });
    }

    return classes;
  }

  enabled() {
    return !this.isBusy && !this.isErroring && !this.isSuccessing;
  }

  error(error) {
    console.log('State.error', error);
    this.isBusy = false;
    this.isError = true;
    this.isErroring = true;
    this.isSuccess = false;
    this.isSuccessing = false;
    this.errors.push(error);
    this.$timeout(() => {
      this.isErroring = false;
    }, DELAY);
  }

  errorMessage() {
    return this.isError ? this.errors[this.errors.length - 1] : null;
  }

  labels(addons) {
    const defaults = {
      ready: 'submit',
      busy: 'sending',
      error: 'error',
      success: 'success'
    };

    if (addons) {
      angular.extend(defaults, addons);
    }

    let label = defaults.ready;

    if (this.isBusy) {
      label = defaults.busy;
    } else if (this.isSuccess) {
      label = defaults.success;
    } else if (this.isError) {
      label = defaults.error;
    }

    return label;
  }

  ready() {
    this.idle();
    this.isReady = true;
    this.$rootScope.$broadcast('$thisReady', this);
  }

  submitClass() {
    return {
      busy: this.isBusy,
      ready: this.isReady,
      successing: this.isSuccessing,
      success: this.isSuccess,
      errorring: this.isErroring,
      error: this.isError
    };
  }

  success() {
    this.isBusy = false;
    this.isError = false;
    this.isErroring = false;
    this.isSuccess = true;
    this.isSuccessing = true;
    this.errors = [];
    this.$timeout(() => {
      this.isSuccessing = false;
    }, DELAY);
  }

}

exports.State = State;

class StateService {
  constructor($timeout, $rootScope) {
    this.$timeout = $timeout;
    this.$rootScope = $rootScope;
  }

  getState() {
    return new State(this.$timeout, this.$rootScope);
  }

  static factory($timeout, $rootScope) {
    return new StateService($timeout, $rootScope);
  }

}

exports.default = StateService;
StateService.factory.$inject = ['$timeout', '$rootScope'];

},{}],258:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SessionStorageService = exports.LocalStorageService = exports.CookieService = void 0;

/* jshint esversion: 6 */

/* global angular */
const TIMEOUT = 5 * 60 * 1000; // five minutes

class CookieService {
  constructor(PromiseService) {
    this.promise = PromiseService;
  }

  delete(name) {
    setter(name, '', -1);
  }

  exist(name) {
    return document.cookie.indexOf(';' + name + '=') !== -1 || document.cookie.indexOf(name + '=') === 0;
  }

  get(name) {
    const cookieName = name + "=";
    const ca = document.cookie.split(';');

    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];

      while (c.charAt(0) == ' ') {
        c = c.substring(1, c.length);
      }

      if (c.indexOf(cookieName) === 0) {
        const value = c.substring(cookieName.length, c.length);
        let model = null;

        try {
          model = JSON.parse(decodeURIComponent(atob(value)));
        } catch (e) {
          console.log('CookieService.get.error parsing', key, e);
        }

        return model;
      }
    }

    return null;
  }

  on(name) {
    return this.promise.make(promise => {
      let i,
          interval = 1000,
          elapsed = 0,
          timeout = TIMEOUT;

      const checkCookie = () => {
        if (elapsed > timeout) {
          promise.reject('timeout');
        } else {
          const c = this.get(name);

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
  }

  set(name, value, days) {
    try {
      const cache = [];
      const json = JSON.stringify(value, function (key, value) {
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
  }

  setter(name, value, days) {
    let expires;

    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toGMTString();
    } else {
      expires = '';
    }

    document.cookie = name + '=' + value + expires + '; path=/';
  }

  static factory(PromiseService) {
    return new CookieService(PromiseService);
  }

}

exports.CookieService = CookieService;
CookieService.factory.$inject = ['PromiseService'];

class LocalStorageService {
  constructor(PromiseService) {
    this.promise = PromiseService;
  }

  delete(name) {
    window.localStorage.removeItem(name);
  }

  exist(name) {
    return window.localStorage[name] !== undefined;
  }

  get(name) {
    let value = null;

    if (window.localStorage[name] !== undefined) {
      try {
        value = JSON.parse(window.localStorage[name]);
      } catch (e) {
        console.log('LocalStorageService.get.error parsing', name, e);
      }
    }

    return value;
  }

  set(name, value) {
    try {
      const cache = [];
      const json = JSON.stringify(value, function (key, value) {
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
  }

  on(name) {
    return this.promise.make(promise => {
      let i,
          interval = 1000,
          elapsed = 0,
          timeout = TIMEOUT;

      const storageEvent = e => {
        if (i) {
          clearTimeout(i);
        }

        if (e.originalEvent.key == name) {
          try {
            const value = JSON.parse(e.originalEvent.newValue); // , e.originalEvent.oldValue

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
  }

  static isLocalStorageSupported() {
    let supported = false;

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
  }

  static factory(PromiseService) {
    if (LocalStorageService.isLocalStorageSupported()) {
      return new LocalStorageService(PromiseService);
    } else {
      return new CookieService(PromiseService);
    }
  }

}

exports.LocalStorageService = LocalStorageService;
LocalStorageService.factory.$inject = ['PromiseService'];

class SessionStorageService {
  constructor(PromiseService) {
    this.promise = PromiseService;
  }

  delete(name) {
    window.sessionStorage.removeItem(name);
  }

  exist(name) {
    return window.sessionStorage[name] !== undefined;
  }

  get(name) {
    let value = null;

    if (window.sessionStorage[name] !== undefined) {
      try {
        value = JSON.parse(window.sessionStorage[name]);
      } catch (e) {
        console.log('SessionStorageService.get.error parsing', name, e);
      }
    }

    return value;
  }

  set(name, value) {
    try {
      const cache = [];
      const json = JSON.stringify(value, function (key, value) {
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
  }

  on(name) {
    return this.promise.make(promise => {
      let i,
          interval = 1000,
          elapsed = 0,
          timeout = TIMEOUT;

      const storageEvent = e => {
        if (i) {
          clearTimeout(i);
        }

        if (e.originalEvent.key == name) {
          try {
            const value = JSON.parse(e.originalEvent.newValue); // , e.originalEvent.oldValue

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
  }

  static isSessionStorageSupported() {
    let supported = false;

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
  }

  static factory(PromiseService) {
    if (SessionStorageService.isSessionStorageSupported()) {
      return new SessionStorageService(PromiseService);
    } else {
      return new CookieService(PromiseService);
    }
  }

}

exports.SessionStorageService = SessionStorageService;
SessionStorageService.factory.$inject = ['PromiseService'];

},{}],259:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");

var _gtm = _interopRequireDefault(require("../gtm/gtm.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* jshint esversion: 6 */
const GTM_CAT = 'store-locator';
const ZOOM_LEVEL = 13;
const SHOW_INFO_WINDOW = false;
const MAX_DISTANCE = 100;
let GOOGLE_MAPS = null;

class StoreLocatorCtrl {
  constructor($scope, $timeout, DomService, ApiService) {
    this.$scope = $scope;
    this.$timeout = $timeout;
    this.domService = DomService;
    this.apiService = ApiService;
    this.model = {};
    this.apiKey = window.apiKey || 'AIzaSyC9ZjpjjpaaDRZYkK5sjeyJahSUzKckgOM';
    this.busyFind = false;
    this.busyLocation = false;
    this.visibleStores = [];
    this.mapCenter$ = new _rxjs.Subject(); //
    // When the window has finished loading create our google map below

    if (GOOGLE_MAPS !== null) {
      this.initMap();
    } else {
      window.onGoogleMapsLoaded = () => {
        GOOGLE_MAPS = google.maps;
        this.initMap();
      };

      const script = document.createElement('script');
      script.setAttribute('type', 'text/javascript');
      script.setAttribute('src', `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&callback=onGoogleMapsLoaded`);
      (document.getElementsByTagName('head')[0] || document.documentElement).appendChild(script);
      /*
      google.maps.event.addDomListener(window, 'load', () => {
      	GOOGLE_MAPS = google.maps;
      	this.initMap();
      });
      */
    } //


    this.unsubscribe = new _rxjs.Subject();
    this.mapCenter$.pipe((0, _operators.debounceTime)(1000), (0, _operators.takeUntil)(this.unsubscribe)).subscribe(position => {
      this.findNearStores(this.stores, position);
    });
    this.domService.secondaryScroll$(document.querySelector('.section--stores')).pipe((0, _operators.takeUntil)(this.unsubscribe)).subscribe(event => {});
    $scope.$on('destroy', () => {
      // console.log('destroy');
      this.unsubscribe.next();
      this.unsubscribe.complete();
    });
  }

  initMap() {
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
    map.addListener('dragend', () => {
      const position = map.getCenter();
      this.mapCenter$.next(position);
    });
    this.$timeout(() => {
      this.map = map;
    }); // console.log('timeout');
  }

  calculateDistance(lat1, lon1, lat2, lon2, unit) {
    if (lat1 == lat2 && lon1 == lon2) {
      return 0;
    } else {
      const radlat1 = Math.PI * lat1 / 180;
      const radlat2 = Math.PI * lat2 / 180;
      const theta = lon1 - lon2;
      const radtheta = Math.PI * theta / 180;
      let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);

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
  }

  addMarkers(stores) {
    const markers = stores.map(store => {
      const position = new google.maps.LatLng(store.latitude, store.longitude);
      let content = `<div class="marker__content">
				<div class="title"><span>${store.name}</span></div>
				<div class="group group--info">
					<div class="address">
						${store.address}<br>
						${store.zip} ${store.citta} ${store.cod_provincia} ${store.stato}<br>
						<!--store.tel-->
						<!--store.email-->
						<!--store.webSite-->
					</div>
					<div class="distance">${window.BOMLabels.store_locator_approx} <b>${Math.floor(store.distance)} km</b></div>
				</div>
				<div class="group group--cta">
					<!--store.pageurl-->
					<a id="locator-marker" href="https://www.google.it/maps/dir/${this.position.lat()},${this.position.lng()}/${store.name}/@${store.latitude},${store.longitude}/" target="_blank" class="btn btn--link"><span>${window.BOMLabels.store_locator_reach_store}</span></a>
				</div>
			</div>`;
      if (store.tel) content = content.replace('<!--store.tel-->', `<span>${store.tel}<br></span>`);
      if (store.email) content = content.replace('<!--store.email-->', `<span><a href="mailto:${store.email}">${store.email}</a><br></span>`);
      if (store.webSite) content = content.replace('<!--store.webSite-->', `<span><a target="_blank" href="${store.webSite}">${store.webSite}</a></span>`);
      if (store.pageurl) content = content.replace('<!--store.pageurl-->', `<a id="locator-marker" href="${store.pageurl}" target="_blank" class="btn btn--link"><span>${window.BOMLabels.More_info}</span></a>`);
      const marker = new google.maps.Marker({
        position: position,
        // map: this.map,
        icon: store.importante ? '/img/store-locator/store-primary.png' : '/img/store-locator/store-secondary.png',
        title: store.name,
        store: store,
        content: content
      });
      marker.addListener('click', () => {
        this.setMarkerWindow(marker.position, content);
        this.scrollToStore(store);

        _gtm.default.push({
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
    const markerCluster = new MarkerClusterer(this.map, markers, {
      imagePath: '/img/store-locator/cluster-'
    });
    const styles = markerCluster.getStyles();
    styles.forEach(style => style.textColor = '#ffffff');
    markerCluster.setStyles(styles); // console.log('StoreLocatorCtrl.searchPosition', position, stores);

    this.markers = markers;
    this.markerCluster = markerCluster;
  }

  getGeolocation(map) {
    this.error = null;
    this.busyLocation = true;
    let position = this.map.getCenter(); // Try HTML5 geolocation.

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(location => {
        // console.log(location.coords);
        position = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
        this.setInfoWindow(position, 1);
        this.searchPosition(position).finally(() => this.busyLocation = false);
        this.map.setCenter(position);
        this.map.setZoom(ZOOM_LEVEL);
      }, () => {
        this.setInfoWindow(position, 2);
        this.searchPosition(position).finally(() => this.busyLocation = false);
      });
    } else {
      // Browser doesn't support Geolocation
      this.setInfoWindow(position, 3);
      this.searchPosition(position).finally(() => this.busyLocation = false);
    }
  }

  loadStoresByPosition(position) {
    return this.apiService.storeLocator.position(position).then(success => {
      const stores = success.data;
      this.stores = stores; // console.log('StoreLocatorCtrl.loadStoresByPosition', position, stores);

      this.addMarkers(stores);
    });
  }

  loadAllStores() {
    if (this.stores) {
      return Promise.resolve(this.stores);
    }

    return this.apiService.storeLocator.all().then(success => {
      const stores = success.data;
      stores.forEach(store => store.distance = this.calculateDistance(store.latitude, store.longitude, this.position.lat(), this.position.lng(), 'K'));
      this.addMarkers(stores);
      this.stores = stores;
      return stores;
    });
  }

  fitBounds(stores) {
    if (stores.length) {
      const bounds = new google.maps.LatLngBounds();
      stores.forEach(store => {
        const position = new google.maps.LatLng(store.latitude, store.longitude);
        bounds.extend(position);
      });
      this.map.fitBounds(bounds); // console.log('fitBounds');
    }
  }

  findNearStores(stores, position) {
    if (stores) {
      stores.forEach(store => {
        store.distance = this.calculateDistance(store.latitude, store.longitude, position.lat(), position.lng(), 'K');
        store.visible = (store.cod_stato == window.userCountry || !window.userCountry) && store.distance <= MAX_DISTANCE
        /* Km */
        ;

        if (store.visible) {
          if (store.removed) this.markerCluster.addMarker(store.marker);
          delete store.removed;
        } else {
          this.markerCluster.removeMarker(store.marker);
          store.removed = true;
        }
      });
      stores = stores.slice();
      stores.sort((a, b) => {
        return a.distance * (a.importante ? 0.5 : 1) - b.distance * (b.importante ? 0.5 : 1);
      });
      const visibleStores = stores.filter(store => store.visible).slice(0, 50);
      this.$timeout(() => {
        this.visibleStores = visibleStores;
      }, 1); // console.log('findNearStores', visibleStores);

      return visibleStores;
    }
  }

  searchPosition(position) {
    this.position = position;
    this.map.setCenter(position);
    this.map.setZoom(ZOOM_LEVEL);
    this.setInfoWindow(position, 1);
    return this.loadAllStores().then(stores => {
      const visibleStores = this.findNearStores(stores, position);
      /*
      if (visibleStores) {
      	this.fitBounds(visibleStores);
      }
      */
    });
  }

  panTo(store) {
    const position = new google.maps.LatLng(store.latitude, store.longitude);
    this.map.setZoom(ZOOM_LEVEL);
    this.map.panTo(position);
    const marker = this.markers.find(x => x.store === store);
    this.setMarkerWindow(marker.position, marker.content);
  }

  onSubmit() {
    this.error = null;
    this.busyFind = true;
    const fakeFilter = {
      '': {
        value: this.model.address,
        options: [{
          value: this.model.address,
          key: this.model.address
        }]
      }
    };

    _gtm.default.pageViewFilters(GTM_CAT, fakeFilter);

    const geocoder = this.geocoder || new google.maps.Geocoder();
    this.geocoder = geocoder;
    geocoder.geocode({
      address: this.model.address
    }, (results, status) => {
      this.model = {};

      if (status == 'OK') {
        const position = results[0].geometry.location; // console.log('location', location);
        // const position = new google.maps.LatLng(location);

        this.searchPosition(position).finally(() => this.busyFind = false);
      } else {
        this.$timeout(() => {
          const message = 'Geocode was not successful for the following reason: ' + status; // console.log('StoreLocatorCtrl.onSubmit.error', message);

          this.error = {
            message
          };
          this.busyFind = false;
        });
      }
    });
  }

  setInfoWindow(position, mode) {
    if (SHOW_INFO_WINDOW) {
      const infoWindow = this.infoWindow || new google.maps.InfoWindow();
      this.infoWindow = infoWindow;
      infoWindow.setPosition(position);

      switch (mode) {
        case 1:
          infoWindow.setContent('Current location');
          break;

        case 2:
          infoWindow.setContent('Error: The Geolocation service failed.');
          break;

        default:
          infoWindow.setContent('Error: Your browser doesn\'t support geolocation.');
      }

      infoWindow.open(this.map);
    }
  }

  setMarkerWindow(position, content) {
    if (position) {
      const markerWindow = this.markerWindow || new google.maps.InfoWindow({
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
  }

  scrollToStore(store) {
    const storesNode = document.querySelector('.section--stores');
    const storeNode = document.querySelector(`#store-${store.id_SF}`); // console.log(storesNode, storeNode);

    storesNode.scrollTo(0, storeNode.offsetTop);
  }

}

StoreLocatorCtrl.$inject = ['$scope', '$timeout', 'DomService', 'ApiService'];
var _default = StoreLocatorCtrl;
exports.default = _default;

},{"../gtm/gtm.service":238,"rxjs":2,"rxjs/operators":198}],260:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _gtm = _interopRequireDefault(require("../gtm/gtm.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* jshint esversion: 6 */
const GTM_CAT = 'stores';

class StoresCtrl {
  constructor($scope, $timeout, LocationService) {
    this.$scope = $scope;
    this.$timeout = $timeout;
    this.locationService = LocationService;
    this.filters = window.filters || {};
    this.stores = window.stores || [];
    this.initialFilters = window.initialFilters || null;
    this.deserializeFilters(this.initialFilters);
    this.applyFilters(false);
  }

  deserializeFilters(initialFilter) {
    const locationFilters = this.locationService.deserialize('filters') || initialFilter || {};
    Object.keys(this.filters).forEach(x => {
      const filter = this.filters[x];

      switch (x) {
        case 'collections':
          filter.doFilter = (item, value) => {
            return item.collections.indexOf(value) !== -1;
          };

          break;

        case 'countries':
          filter.doFilter = (item, value) => {
            return item.stato === value;
          };

          break;

        default:
          filter.doFilter = (item, value) => {
            return item.features.indexOf(value) !== -1;
          };

      }

      filter.options.unshift({
        label: this.filters[x].placeholder,
        value: null
      });
      const selectedOption = filter.options.find(o => Boolean(o.value === (locationFilters[x] || null)));
      filter.value = selectedOption.value;
      filter.placeholder = selectedOption.label;
    });
    return filters;
  }

  serializeFilters() {
    let filters = {};
    let any = false;
    Object.keys(this.filters).forEach(x => {
      const filter = this.filters[x];

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
  }

  applyFilters(serialize) {
    if (serialize !== false) this.serializeFilters();
    const filters = Object.keys(this.filters).map(x => this.filters[x]).filter(x => x.value !== null);
    let filteredStores = this.stores.slice(); // console.log(filteredStores);

    if (filters.length) {
      filteredStores = filteredStores.filter(store => {
        let has = true;
        filters.forEach(filter => {
          has = has && filter.doFilter(store, filter.value);
        });
        return has;
      });
    } // console.log(filteredStores, filters);


    this.filteredStores = [];
    this.$timeout(() => {
      this.filteredStores = filteredStores;
      this.updateFilterStates(filteredStores); // delayer for image update
    }, 50);

    _gtm.default.pageViewFilters(GTM_CAT, this.filters);
  }

  updateFilterStates(stores) {
    // console.log('updateFilterStores', stores);
    Object.keys(this.filters).forEach(x => {
      const filter = this.filters[x];
      filter.options.forEach(option => {
        let has = false;

        if (option.value) {
          let i = 0;

          while (i < stores.length && !has) {
            const store = stores[i];
            has = filter.doFilter(store, option.value);
            i++;
          }
        } else {
          has = true;
        }

        option.disabled = !has;
      }); // console.log(filter.options);
    });
  }

  setFilter(item, filter) {
    item = item || filter.options[0];
    filter.value = item.value;
    filter.placeholder = item.label;
    this.applyFilters();
    this.$scope.$broadcast('onCloseDropdown');
  }

  removeFilter(filter) {
    this.setFilter(null, filter);
  }

}

StoresCtrl.$inject = ['$scope', '$timeout', 'LocationService'];
var _default = StoresCtrl;
exports.default = _default;

},{"../gtm/gtm.service":238}],261:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ITEMS_PER_PAGE = exports.MOOD_TYPES = void 0;

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");

/* jshint esversion: 6 */
const MOOD_TYPES = Object.freeze({
  Tile: 1,
  Horizontal: 2,
  Vertical: 3,
  Card: 4,
  Decor: 5
});
exports.MOOD_TYPES = MOOD_TYPES;
const ITEMS_PER_PAGE = 20;
exports.ITEMS_PER_PAGE = ITEMS_PER_PAGE;

class WishlistCtrl {
  constructor($scope, $timeout, WishlistService) {
    this.$scope = $scope;
    this.$timeout = $timeout;
    this.wishlistService = WishlistService;
    this.items = [];
    this.moodTypes = MOOD_TYPES;
    this.unsubscribe = new _rxjs.Subject();
    this.wishlistService.count$.pipe((0, _operators.takeUntil)(this.unsubscribe)).subscribe(count => this.count = count);
    $scope.$on('destroy', () => {
      // console.log('destroy');
      this.unsubscribe.next();
      this.unsubscribe.complete();
    });
    this.load();
  }

  load() {
    this.wishlistService.get().pipe((0, _operators.takeUntil)(this.unsubscribe)).subscribe(success => {
      // console.log('WishlistCtrl.load', success);
      if (success) {
        let items = success.data.slice();
        let wishlist = this.wishlistService.wishlist;
        items.forEach(item => {
          const index = this.wishlistService.indexOf(item);

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

        this.items = [];
        this.visibleItems = [];
        this.maxItems = ITEMS_PER_PAGE;
        this.$timeout(() => {
          this.items = items;
          this.visibleItems = items.slice(0, this.maxItems);
        }, 50);
      }
    }, error => console.log('WishlistCtrl.load.error', error));
  }

  clearAll() {
    this.wishlistService.clearAll().pipe((0, _operators.takeUntil)(this.unsubscribe)).subscribe(success => {
      this.items = [];
      this.visibleItems = [];
      this.maxItems = ITEMS_PER_PAGE;
    }, error => console.log('WishlistCtrl.clearAll.error', error));
  }

  onScroll(event) {
    if (event.rect.bottom < event.windowRect.bottom) {
      // console.log('more!');
      if (!this.busy && this.maxItems < this.items.length) {
        this.$timeout(() => {
          this.busy = true;
          this.$timeout(() => {
            this.maxItems += ITEMS_PER_PAGE;
            this.visibleItems = this.items.slice(0, this.maxItems);
            this.busy = false; // console.log(this.visibleItems.length);
          }, 1000);
        }, 0);
      }
    }
  }

  print() {
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
  }

}

WishlistCtrl.$inject = ['$scope', '$timeout', 'WishlistService'];
var _default = WishlistCtrl;
exports.default = _default;

},{"rxjs":2,"rxjs/operators":198}]},{},[200]);
