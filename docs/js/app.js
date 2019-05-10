(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./internal/AsyncSubject":2,"./internal/BehaviorSubject":3,"./internal/Notification":5,"./internal/Observable":6,"./internal/ReplaySubject":9,"./internal/Scheduler":10,"./internal/Subject":11,"./internal/Subscriber":13,"./internal/Subscription":14,"./internal/config":15,"./internal/observable/ConnectableObservable":16,"./internal/observable/bindCallback":18,"./internal/observable/bindNodeCallback":19,"./internal/observable/combineLatest":20,"./internal/observable/concat":21,"./internal/observable/defer":22,"./internal/observable/empty":23,"./internal/observable/forkJoin":24,"./internal/observable/from":25,"./internal/observable/fromEvent":27,"./internal/observable/fromEventPattern":28,"./internal/observable/generate":32,"./internal/observable/iif":33,"./internal/observable/interval":34,"./internal/observable/merge":35,"./internal/observable/never":36,"./internal/observable/of":37,"./internal/observable/onErrorResumeNext":38,"./internal/observable/pairs":39,"./internal/observable/race":40,"./internal/observable/range":41,"./internal/observable/throwError":43,"./internal/observable/timer":44,"./internal/observable/using":45,"./internal/observable/zip":46,"./internal/operators/groupBy":82,"./internal/scheduler/VirtualTimeScheduler":159,"./internal/scheduler/animationFrame":160,"./internal/scheduler/asap":161,"./internal/scheduler/async":162,"./internal/scheduler/queue":163,"./internal/symbol/observable":165,"./internal/util/ArgumentOutOfRangeError":167,"./internal/util/EmptyError":168,"./internal/util/ObjectUnsubscribedError":170,"./internal/util/TimeoutError":171,"./internal/util/UnsubscriptionError":172,"./internal/util/identity":175,"./internal/util/isObservable":184,"./internal/util/noop":187,"./internal/util/pipe":189}],2:[function(require,module,exports){
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

},{"./Subject":11,"./Subscription":14}],3:[function(require,module,exports){
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

},{"./Subject":11,"./util/ObjectUnsubscribedError":170}],4:[function(require,module,exports){
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

},{"./Subscriber":13}],5:[function(require,module,exports){
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

},{"./observable/empty":23,"./observable/of":37,"./observable/throwError":43}],6:[function(require,module,exports){
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

},{"../internal/symbol/observable":165,"./config":15,"./util/canReportError":173,"./util/pipe":189,"./util/toSubscriber":196}],7:[function(require,module,exports){
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

},{"./config":15,"./util/hostReportError":174}],8:[function(require,module,exports){
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

},{"./Subscriber":13}],9:[function(require,module,exports){
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

},{"./Subject":11,"./SubjectSubscription":12,"./Subscription":14,"./operators/observeOn":97,"./scheduler/queue":163,"./util/ObjectUnsubscribedError":170}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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

},{"../internal/symbol/rxSubscriber":166,"./Observable":6,"./SubjectSubscription":12,"./Subscriber":13,"./Subscription":14,"./util/ObjectUnsubscribedError":170}],12:[function(require,module,exports){
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

},{"./Subscription":14}],13:[function(require,module,exports){
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

},{"../internal/symbol/rxSubscriber":166,"./Observer":7,"./Subscription":14,"./config":15,"./util/hostReportError":174,"./util/isFunction":179}],14:[function(require,module,exports){
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

},{"./util/UnsubscriptionError":172,"./util/isArray":176,"./util/isFunction":179,"./util/isObject":183}],15:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
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

},{"../Observable":6,"../Subject":11,"../Subscriber":13,"../Subscription":14,"../operators/refCount":108}],17:[function(require,module,exports){
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

},{"../Observable":6,"../scheduler/asap":161,"../util/isNumeric":182}],18:[function(require,module,exports){
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

},{"../AsyncSubject":2,"../Observable":6,"../operators/map":86,"../util/canReportError":173,"../util/isArray":176,"../util/isScheduler":186}],19:[function(require,module,exports){
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

},{"../AsyncSubject":2,"../Observable":6,"../operators/map":86,"../util/canReportError":173,"../util/isArray":176,"../util/isScheduler":186}],20:[function(require,module,exports){
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

},{"../OuterSubscriber":8,"../util/isArray":176,"../util/isScheduler":186,"../util/subscribeToResult":195,"./fromArray":26}],21:[function(require,module,exports){
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

},{"../operators/concatAll":58,"./of":37}],22:[function(require,module,exports){
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

},{"../Observable":6,"./empty":23,"./from":25}],23:[function(require,module,exports){
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

},{"../Observable":6}],24:[function(require,module,exports){
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

},{"../Observable":6,"../OuterSubscriber":8,"../operators/map":86,"../util/isArray":176,"../util/subscribeToResult":195,"./empty":23}],25:[function(require,module,exports){
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

},{"../Observable":6,"../util/isArrayLike":177,"../util/isInteropObservable":180,"../util/isIterable":181,"../util/isPromise":185,"../util/subscribeTo":190,"./fromArray":26,"./fromIterable":29,"./fromObservable":30,"./fromPromise":31}],26:[function(require,module,exports){
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

},{"../Observable":6,"../Subscription":14,"../util/subscribeToArray":191}],27:[function(require,module,exports){
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

},{"../Observable":6,"../operators/map":86,"../util/isArray":176,"../util/isFunction":179}],28:[function(require,module,exports){
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

},{"../Observable":6,"../operators/map":86,"../util/isArray":176,"../util/isFunction":179}],29:[function(require,module,exports){
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

},{"../Observable":6,"../Subscription":14,"../symbol/iterator":164,"../util/subscribeToIterable":192}],30:[function(require,module,exports){
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

},{"../Observable":6,"../Subscription":14,"../symbol/observable":165,"../util/subscribeToObservable":193}],31:[function(require,module,exports){
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

},{"../Observable":6,"../Subscription":14,"../util/subscribeToPromise":194}],32:[function(require,module,exports){
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

},{"../Observable":6,"../util/identity":175,"../util/isScheduler":186}],33:[function(require,module,exports){
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

},{"./defer":22,"./empty":23}],34:[function(require,module,exports){
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

},{"../Observable":6,"../scheduler/async":162,"../util/isNumeric":182}],35:[function(require,module,exports){
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

},{"../Observable":6,"../operators/mergeAll":91,"../util/isScheduler":186,"./fromArray":26}],36:[function(require,module,exports){
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

},{"../Observable":6,"../util/noop":187}],37:[function(require,module,exports){
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

},{"../util/isScheduler":186,"./empty":23,"./fromArray":26,"./scalar":42}],38:[function(require,module,exports){
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

},{"../Observable":6,"../util/isArray":176,"./empty":23,"./from":25}],39:[function(require,module,exports){
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

},{"../Observable":6,"../Subscription":14}],40:[function(require,module,exports){
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

},{"../OuterSubscriber":8,"../util/isArray":176,"../util/subscribeToResult":195,"./fromArray":26}],41:[function(require,module,exports){
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

},{"../Observable":6}],42:[function(require,module,exports){
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

},{"../Observable":6}],43:[function(require,module,exports){
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

},{"../Observable":6}],44:[function(require,module,exports){
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

},{"../Observable":6,"../scheduler/async":162,"../util/isNumeric":182,"../util/isScheduler":186}],45:[function(require,module,exports){
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

},{"../Observable":6,"./empty":23,"./from":25}],46:[function(require,module,exports){
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

},{"../../internal/symbol/iterator":164,"../OuterSubscriber":8,"../Subscriber":13,"../util/isArray":176,"../util/subscribeToResult":195,"./fromArray":26}],47:[function(require,module,exports){
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

},{"../OuterSubscriber":8,"../util/subscribeToResult":195}],48:[function(require,module,exports){
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

},{"../observable/timer":44,"../scheduler/async":162,"./audit":47}],49:[function(require,module,exports){
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

},{"../OuterSubscriber":8,"../util/subscribeToResult":195}],50:[function(require,module,exports){
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

},{"../Subscriber":13}],51:[function(require,module,exports){
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

},{"../Subscriber":13,"../scheduler/async":162,"../util/isScheduler":186}],52:[function(require,module,exports){
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

},{"../OuterSubscriber":8,"../Subscription":14,"../util/subscribeToResult":195}],53:[function(require,module,exports){
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

},{"../OuterSubscriber":8,"../Subscription":14,"../util/subscribeToResult":195}],54:[function(require,module,exports){
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

},{"../InnerSubscriber":4,"../OuterSubscriber":8,"../util/subscribeToResult":195}],55:[function(require,module,exports){
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

},{"../observable/combineLatest":20}],56:[function(require,module,exports){
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

},{"../observable/combineLatest":20,"../observable/from":25,"../util/isArray":176}],57:[function(require,module,exports){
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

},{"../observable/concat":21}],58:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var mergeAll_1 = require("./mergeAll");

function concatAll() {
  return mergeAll_1.mergeAll(1);
}

exports.concatAll = concatAll;

},{"./mergeAll":91}],59:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var mergeMap_1 = require("./mergeMap");

function concatMap(project, resultSelector) {
  return mergeMap_1.mergeMap(project, resultSelector, 1);
}

exports.concatMap = concatMap;

},{"./mergeMap":92}],60:[function(require,module,exports){
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

},{"./concatMap":59}],61:[function(require,module,exports){
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

},{"../Subscriber":13}],62:[function(require,module,exports){
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

},{"../OuterSubscriber":8,"../util/subscribeToResult":195}],63:[function(require,module,exports){
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

},{"../Subscriber":13,"../scheduler/async":162}],64:[function(require,module,exports){
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

},{"../Subscriber":13}],65:[function(require,module,exports){
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

},{"../Notification":5,"../Subscriber":13,"../scheduler/async":162,"../util/isDate":178}],66:[function(require,module,exports){
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

},{"../Observable":6,"../OuterSubscriber":8,"../Subscriber":13,"../util/subscribeToResult":195}],67:[function(require,module,exports){
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

},{"../Subscriber":13}],68:[function(require,module,exports){
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

},{"../OuterSubscriber":8,"../util/subscribeToResult":195}],69:[function(require,module,exports){
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

},{"../Subscriber":13}],70:[function(require,module,exports){
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

},{"./distinctUntilChanged":69}],71:[function(require,module,exports){
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

},{"../util/ArgumentOutOfRangeError":167,"./defaultIfEmpty":64,"./filter":77,"./take":129,"./throwIfEmpty":136}],72:[function(require,module,exports){
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

},{"../observable/concat":21,"../observable/empty":23,"../observable/fromArray":26,"../observable/scalar":42,"../util/isScheduler":186}],73:[function(require,module,exports){
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

},{"../Subscriber":13}],74:[function(require,module,exports){
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

},{"../OuterSubscriber":8,"../util/subscribeToResult":195}],75:[function(require,module,exports){
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

},{"../InnerSubscriber":4,"../OuterSubscriber":8,"../observable/from":25,"../util/subscribeToResult":195,"./map":86}],76:[function(require,module,exports){
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

},{"../OuterSubscriber":8,"../util/subscribeToResult":195}],77:[function(require,module,exports){
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

},{"../Subscriber":13}],78:[function(require,module,exports){
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

},{"../Subscriber":13,"../Subscription":14}],79:[function(require,module,exports){
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

},{"../Subscriber":13}],80:[function(require,module,exports){
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

},{"../operators/find":79}],81:[function(require,module,exports){
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

},{"../util/EmptyError":168,"../util/identity":175,"./defaultIfEmpty":64,"./filter":77,"./take":129,"./throwIfEmpty":136}],82:[function(require,module,exports){
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

},{"../Observable":6,"../Subject":11,"../Subscriber":13,"../Subscription":14}],83:[function(require,module,exports){
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

},{"../Subscriber":13}],84:[function(require,module,exports){
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

},{"../Subscriber":13}],85:[function(require,module,exports){
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

},{"../util/EmptyError":168,"../util/identity":175,"./defaultIfEmpty":64,"./filter":77,"./takeLast":130,"./throwIfEmpty":136}],86:[function(require,module,exports){
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

},{"../Subscriber":13}],87:[function(require,module,exports){
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

},{"../Subscriber":13}],88:[function(require,module,exports){
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

},{"../Notification":5,"../Subscriber":13}],89:[function(require,module,exports){
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

},{"./reduce":107}],90:[function(require,module,exports){
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

},{"../observable/merge":35}],91:[function(require,module,exports){
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

},{"../util/identity":175,"./mergeMap":92}],92:[function(require,module,exports){
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

},{"../InnerSubscriber":4,"../OuterSubscriber":8,"../observable/from":25,"../util/subscribeToResult":195,"./map":86}],93:[function(require,module,exports){
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

},{"./mergeMap":92}],94:[function(require,module,exports){
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

},{"../InnerSubscriber":4,"../OuterSubscriber":8,"../util/subscribeToResult":195}],95:[function(require,module,exports){
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

},{"./reduce":107}],96:[function(require,module,exports){
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

},{"../observable/ConnectableObservable":16}],97:[function(require,module,exports){
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

},{"../Notification":5,"../Subscriber":13}],98:[function(require,module,exports){
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

},{"../InnerSubscriber":4,"../OuterSubscriber":8,"../observable/from":25,"../util/isArray":176,"../util/subscribeToResult":195}],99:[function(require,module,exports){
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

},{"../Subscriber":13}],100:[function(require,module,exports){
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

},{"../util/not":188,"./filter":77}],101:[function(require,module,exports){
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

},{"./map":86}],102:[function(require,module,exports){
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

},{"../Subject":11,"./multicast":96}],103:[function(require,module,exports){
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

},{"../BehaviorSubject":3,"./multicast":96}],104:[function(require,module,exports){
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

},{"../AsyncSubject":2,"./multicast":96}],105:[function(require,module,exports){
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

},{"../ReplaySubject":9,"./multicast":96}],106:[function(require,module,exports){
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

},{"../observable/race":40,"../util/isArray":176}],107:[function(require,module,exports){
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

},{"../util/pipe":189,"./defaultIfEmpty":64,"./scan":115,"./takeLast":130}],108:[function(require,module,exports){
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

},{"../Subscriber":13}],109:[function(require,module,exports){
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

},{"../Subscriber":13,"../observable/empty":23}],110:[function(require,module,exports){
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

},{"../OuterSubscriber":8,"../Subject":11,"../util/subscribeToResult":195}],111:[function(require,module,exports){
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

},{"../Subscriber":13}],112:[function(require,module,exports){
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

},{"../OuterSubscriber":8,"../Subject":11,"../util/subscribeToResult":195}],113:[function(require,module,exports){
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

},{"../OuterSubscriber":8,"../util/subscribeToResult":195}],114:[function(require,module,exports){
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

},{"../Subscriber":13,"../scheduler/async":162}],115:[function(require,module,exports){
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

},{"../Subscriber":13}],116:[function(require,module,exports){
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

},{"../Subscriber":13}],117:[function(require,module,exports){
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

},{"../Subject":11,"./multicast":96,"./refCount":108}],118:[function(require,module,exports){
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

},{"../ReplaySubject":9}],119:[function(require,module,exports){
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

},{"../Subscriber":13,"../util/EmptyError":168}],120:[function(require,module,exports){
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

},{"../Subscriber":13}],121:[function(require,module,exports){
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

},{"../Subscriber":13,"../util/ArgumentOutOfRangeError":167}],122:[function(require,module,exports){
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

},{"../InnerSubscriber":4,"../OuterSubscriber":8,"../util/subscribeToResult":195}],123:[function(require,module,exports){
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

},{"../Subscriber":13}],124:[function(require,module,exports){
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

},{"../observable/concat":21,"../observable/empty":23,"../observable/fromArray":26,"../observable/scalar":42,"../util/isScheduler":186}],125:[function(require,module,exports){
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

},{"../observable/SubscribeOnObservable":17}],126:[function(require,module,exports){
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

},{"../util/identity":175,"./switchMap":127}],127:[function(require,module,exports){
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

},{"../InnerSubscriber":4,"../OuterSubscriber":8,"../observable/from":25,"../util/subscribeToResult":195,"./map":86}],128:[function(require,module,exports){
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

},{"./switchMap":127}],129:[function(require,module,exports){
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

},{"../Subscriber":13,"../observable/empty":23,"../util/ArgumentOutOfRangeError":167}],130:[function(require,module,exports){
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

},{"../Subscriber":13,"../observable/empty":23,"../util/ArgumentOutOfRangeError":167}],131:[function(require,module,exports){
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

},{"../OuterSubscriber":8,"../util/subscribeToResult":195}],132:[function(require,module,exports){
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

},{"../Subscriber":13}],133:[function(require,module,exports){
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

},{"../Subscriber":13,"../util/isFunction":179,"../util/noop":187}],134:[function(require,module,exports){
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

},{"../OuterSubscriber":8,"../util/subscribeToResult":195}],135:[function(require,module,exports){
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

},{"../Subscriber":13,"../scheduler/async":162,"./throttle":134}],136:[function(require,module,exports){
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

},{"../util/EmptyError":168,"./tap":133}],137:[function(require,module,exports){
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

},{"../observable/defer":22,"../scheduler/async":162,"./map":86,"./scan":115}],138:[function(require,module,exports){
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

},{"../observable/throwError":43,"../scheduler/async":162,"../util/TimeoutError":171,"./timeoutWith":139}],139:[function(require,module,exports){
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

},{"../OuterSubscriber":8,"../scheduler/async":162,"../util/isDate":178,"../util/subscribeToResult":195}],140:[function(require,module,exports){
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

},{"../scheduler/async":162,"./map":86}],141:[function(require,module,exports){
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

},{"./reduce":107}],142:[function(require,module,exports){
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

},{"../OuterSubscriber":8,"../Subject":11,"../util/subscribeToResult":195}],143:[function(require,module,exports){
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

},{"../Subject":11,"../Subscriber":13}],144:[function(require,module,exports){
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

},{"../Subject":11,"../Subscriber":13,"../scheduler/async":162,"../util/isNumeric":182,"../util/isScheduler":186}],145:[function(require,module,exports){
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

},{"../OuterSubscriber":8,"../Subject":11,"../Subscription":14,"../util/subscribeToResult":195}],146:[function(require,module,exports){
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

},{"../OuterSubscriber":8,"../Subject":11,"../util/subscribeToResult":195}],147:[function(require,module,exports){
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

},{"../OuterSubscriber":8,"../util/subscribeToResult":195}],148:[function(require,module,exports){
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

},{"../observable/zip":46}],149:[function(require,module,exports){
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

},{"../observable/zip":46}],150:[function(require,module,exports){
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

},{"../Subscription":14}],151:[function(require,module,exports){
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

},{"./AsyncAction":155}],152:[function(require,module,exports){
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

},{"./AsyncScheduler":156}],153:[function(require,module,exports){
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

},{"../util/Immediate":169,"./AsyncAction":155}],154:[function(require,module,exports){
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

},{"./AsyncScheduler":156}],155:[function(require,module,exports){
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

},{"./Action":150}],156:[function(require,module,exports){
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

},{"../Scheduler":10}],157:[function(require,module,exports){
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

},{"./AsyncAction":155}],158:[function(require,module,exports){
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

},{"./AsyncScheduler":156}],159:[function(require,module,exports){
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

},{"./AsyncAction":155,"./AsyncScheduler":156}],160:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var AnimationFrameAction_1 = require("./AnimationFrameAction");

var AnimationFrameScheduler_1 = require("./AnimationFrameScheduler");

exports.animationFrame = new AnimationFrameScheduler_1.AnimationFrameScheduler(AnimationFrameAction_1.AnimationFrameAction);

},{"./AnimationFrameAction":151,"./AnimationFrameScheduler":152}],161:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var AsapAction_1 = require("./AsapAction");

var AsapScheduler_1 = require("./AsapScheduler");

exports.asap = new AsapScheduler_1.AsapScheduler(AsapAction_1.AsapAction);

},{"./AsapAction":153,"./AsapScheduler":154}],162:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var AsyncAction_1 = require("./AsyncAction");

var AsyncScheduler_1 = require("./AsyncScheduler");

exports.async = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);

},{"./AsyncAction":155,"./AsyncScheduler":156}],163:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var QueueAction_1 = require("./QueueAction");

var QueueScheduler_1 = require("./QueueScheduler");

exports.queue = new QueueScheduler_1.QueueScheduler(QueueAction_1.QueueAction);

},{"./QueueAction":157,"./QueueScheduler":158}],164:[function(require,module,exports){
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

},{}],165:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observable = typeof Symbol === 'function' && Symbol.observable || '@@observable';

},{}],166:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rxSubscriber = typeof Symbol === 'function' ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random();
exports.$$rxSubscriber = exports.rxSubscriber;

},{}],167:[function(require,module,exports){
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

},{}],168:[function(require,module,exports){
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

},{}],169:[function(require,module,exports){
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

},{}],170:[function(require,module,exports){
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

},{}],171:[function(require,module,exports){
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

},{}],172:[function(require,module,exports){
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

},{}],173:[function(require,module,exports){
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

},{"../Subscriber":13}],174:[function(require,module,exports){
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

},{}],175:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function identity(x) {
  return x;
}

exports.identity = identity;

},{}],176:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.isArray = Array.isArray || function (x) {
  return x && typeof x.length === 'number';
};

},{}],177:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.isArrayLike = function (x) {
  return x && typeof x.length === 'number' && typeof x !== 'function';
};

},{}],178:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function isDate(value) {
  return value instanceof Date && !isNaN(+value);
}

exports.isDate = isDate;

},{}],179:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function isFunction(x) {
  return typeof x === 'function';
}

exports.isFunction = isFunction;

},{}],180:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var observable_1 = require("../symbol/observable");

function isInteropObservable(input) {
  return input && typeof input[observable_1.observable] === 'function';
}

exports.isInteropObservable = isInteropObservable;

},{"../symbol/observable":165}],181:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var iterator_1 = require("../symbol/iterator");

function isIterable(input) {
  return input && typeof input[iterator_1.iterator] === 'function';
}

exports.isIterable = isIterable;

},{"../symbol/iterator":164}],182:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var isArray_1 = require("./isArray");

function isNumeric(val) {
  return !isArray_1.isArray(val) && val - parseFloat(val) + 1 >= 0;
}

exports.isNumeric = isNumeric;

},{"./isArray":176}],183:[function(require,module,exports){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

function isObject(x) {
  return x !== null && _typeof(x) === 'object';
}

exports.isObject = isObject;

},{}],184:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Observable_1 = require("../Observable");

function isObservable(obj) {
  return !!obj && (obj instanceof Observable_1.Observable || typeof obj.lift === 'function' && typeof obj.subscribe === 'function');
}

exports.isObservable = isObservable;

},{"../Observable":6}],185:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function isPromise(value) {
  return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}

exports.isPromise = isPromise;

},{}],186:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function isScheduler(value) {
  return value && typeof value.schedule === 'function';
}

exports.isScheduler = isScheduler;

},{}],187:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function noop() {}

exports.noop = noop;

},{}],188:[function(require,module,exports){
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

},{}],189:[function(require,module,exports){
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

},{"./noop":187}],190:[function(require,module,exports){
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

},{"../Observable":6,"../symbol/iterator":164,"../symbol/observable":165,"./isArrayLike":177,"./isObject":183,"./isPromise":185,"./subscribeToArray":191,"./subscribeToIterable":192,"./subscribeToObservable":193,"./subscribeToPromise":194}],191:[function(require,module,exports){
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

},{}],192:[function(require,module,exports){
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

},{"../symbol/iterator":164}],193:[function(require,module,exports){
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

},{"../symbol/observable":165}],194:[function(require,module,exports){
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

},{"./hostReportError":174}],195:[function(require,module,exports){
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

},{"../InnerSubscriber":4,"./subscribeTo":190}],196:[function(require,module,exports){
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

},{"../Observer":7,"../Subscriber":13,"../symbol/rxSubscriber":166}],197:[function(require,module,exports){
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

},{"../internal/operators/audit":47,"../internal/operators/auditTime":48,"../internal/operators/buffer":49,"../internal/operators/bufferCount":50,"../internal/operators/bufferTime":51,"../internal/operators/bufferToggle":52,"../internal/operators/bufferWhen":53,"../internal/operators/catchError":54,"../internal/operators/combineAll":55,"../internal/operators/combineLatest":56,"../internal/operators/concat":57,"../internal/operators/concatAll":58,"../internal/operators/concatMap":59,"../internal/operators/concatMapTo":60,"../internal/operators/count":61,"../internal/operators/debounce":62,"../internal/operators/debounceTime":63,"../internal/operators/defaultIfEmpty":64,"../internal/operators/delay":65,"../internal/operators/delayWhen":66,"../internal/operators/dematerialize":67,"../internal/operators/distinct":68,"../internal/operators/distinctUntilChanged":69,"../internal/operators/distinctUntilKeyChanged":70,"../internal/operators/elementAt":71,"../internal/operators/endWith":72,"../internal/operators/every":73,"../internal/operators/exhaust":74,"../internal/operators/exhaustMap":75,"../internal/operators/expand":76,"../internal/operators/filter":77,"../internal/operators/finalize":78,"../internal/operators/find":79,"../internal/operators/findIndex":80,"../internal/operators/first":81,"../internal/operators/groupBy":82,"../internal/operators/ignoreElements":83,"../internal/operators/isEmpty":84,"../internal/operators/last":85,"../internal/operators/map":86,"../internal/operators/mapTo":87,"../internal/operators/materialize":88,"../internal/operators/max":89,"../internal/operators/merge":90,"../internal/operators/mergeAll":91,"../internal/operators/mergeMap":92,"../internal/operators/mergeMapTo":93,"../internal/operators/mergeScan":94,"../internal/operators/min":95,"../internal/operators/multicast":96,"../internal/operators/observeOn":97,"../internal/operators/onErrorResumeNext":98,"../internal/operators/pairwise":99,"../internal/operators/partition":100,"../internal/operators/pluck":101,"../internal/operators/publish":102,"../internal/operators/publishBehavior":103,"../internal/operators/publishLast":104,"../internal/operators/publishReplay":105,"../internal/operators/race":106,"../internal/operators/reduce":107,"../internal/operators/refCount":108,"../internal/operators/repeat":109,"../internal/operators/repeatWhen":110,"../internal/operators/retry":111,"../internal/operators/retryWhen":112,"../internal/operators/sample":113,"../internal/operators/sampleTime":114,"../internal/operators/scan":115,"../internal/operators/sequenceEqual":116,"../internal/operators/share":117,"../internal/operators/shareReplay":118,"../internal/operators/single":119,"../internal/operators/skip":120,"../internal/operators/skipLast":121,"../internal/operators/skipUntil":122,"../internal/operators/skipWhile":123,"../internal/operators/startWith":124,"../internal/operators/subscribeOn":125,"../internal/operators/switchAll":126,"../internal/operators/switchMap":127,"../internal/operators/switchMapTo":128,"../internal/operators/take":129,"../internal/operators/takeLast":130,"../internal/operators/takeUntil":131,"../internal/operators/takeWhile":132,"../internal/operators/tap":133,"../internal/operators/throttle":134,"../internal/operators/throttleTime":135,"../internal/operators/throwIfEmpty":136,"../internal/operators/timeInterval":137,"../internal/operators/timeout":138,"../internal/operators/timeoutWith":139,"../internal/operators/timestamp":140,"../internal/operators/toArray":141,"../internal/operators/window":142,"../internal/operators/windowCount":143,"../internal/operators/windowTime":144,"../internal/operators/windowToggle":145,"../internal/operators/windowWhen":146,"../internal/operators/withLatestFrom":147,"../internal/operators/zip":148,"../internal/operators/zipAll":149}],198:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ITEMS_PER_PAGE = void 0;

var _rxjs = require("rxjs");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ITEMS_PER_PAGE = 20;
exports.ITEMS_PER_PAGE = ITEMS_PER_PAGE;

var AdvancedSearchCtrl =
/*#__PURE__*/
function () {
  function AdvancedSearchCtrl($scope, $timeout, LocationService, ApiService) {
    var _this = this;

    _classCallCheck(this, AdvancedSearchCtrl);

    this.$scope = $scope;
    this.$timeout = $timeout;
    this.locationService = LocationService;
    this.apiService = ApiService;
    this.items = [];
    this.filteredItems = [];
    this.filters = window.filters || [];
    this.selectedFilters = [];
    this.deserializeFilters(); // !!!

    this.apiService.advancedSearch.get().subscribe( // this.fakeSearch$().subscribe(
    function (success) {
      var items = success.data;
      _this.items = items;

      _this.applyFilters();
    });
  }

  _createClass(AdvancedSearchCtrl, [{
    key: "deserializeFilters",
    value: function deserializeFilters() {
      var _this2 = this;

      var locationFilters = this.locationService.deserialize('filters') || {}; // console.log('AdvancedSearchCtrl.deserializeFilters', filters);

      this.filters.forEach(function (filter) {
        switch (filter.key) {
          case 'finish':
            filter.doFilter = function (item, value) {
              var has = false;

              var size = _this2.filters.find(function (x) {
                return x.key == 'size' && x.value !== null;
              });

              item.minimals.forEach(function (x) {
                has = has || x.finish.id === value && (!size || x.size.id === size.value);
              });
              return has;
            };

            break;

          case 'size':
            filter.doFilter = function (item, value) {
              var has = false;

              var finish = _this2.filters.find(function (x) {
                return x.key == 'finish' && x.value !== null;
              });

              item.minimals.forEach(function (x) {
                has = has || x.size.id === value && (!finish || x.finish.id === finish.value);
              });
              return has;
            };

            break;

          default:
            filter.doFilter = function (item, value) {
              return item.features.indexOf(value) !== -1;
            };

        }
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
      return filters;
    }
  }, {
    key: "serializeFilters",
    value: function serializeFilters() {
      var filters = {};
      this.filters.forEach(function (filter) {
        if (filter.value !== null) {
          filters[filter.key] = filter.value;
        }
      }); // console.log('AdvancedSearchCtrl.serializeFilters', filters);

      this.locationService.serialize('filters', filters);
      return filters;
    }
  }, {
    key: "applyFilters",
    value: function applyFilters(item, value) {
      var _this3 = this;

      // console.log('AdvancedSearchCtrl.applyFilters', this.filters);
      this.serializeFilters();
      var selectedFilters = this.filters.filter(function (x) {
        return x.value !== null;
      });
      var finishFilter = this.filters.find(function (x) {
        return x.key == 'finish' && x.value !== null;
      });
      var sizeFilter = this.filters.find(function (x) {
        return x.key == 'size' && x.value !== null;
      });
      var filteredItems;

      if (selectedFilters.length) {
        filteredItems = this.items.filter(function (item) {
          var has = true;
          selectedFilters.forEach(function (filter) {
            has = has && filter.doFilter(item, filter.value);
          });
          return has;
        }).map(function (x) {
          var item = Object.assign({}, x);
          item.minimals = item.minimals.filter(function (x) {
            var has = true;
            has = has && (!finishFilter || x.finish.id === finishFilter.value) && (!sizeFilter || x.size.id === sizeFilter.value);
            return has;
          });
          return item;
        });
      } else {
        filteredItems = this.items.slice();
      }

      this.selectedFilters = selectedFilters;
      this.filteredItems = [];
      this.visibleItems = [];
      this.maxItems = ITEMS_PER_PAGE;
      this.$timeout(function () {
        _this3.filteredItems = filteredItems;
        _this3.visibleItems = filteredItems.slice(0, _this3.maxItems);

        _this3.updateFilterStates(filteredItems);
      }, 50);
    }
  }, {
    key: "updateFilterStates",
    value: function updateFilterStates(brands) {
      var _this4 = this;

      this.filters.forEach(function (filter) {
        filter.options.forEach(function (option) {
          var has = false;

          if (option.value) {
            var i = 0;

            while (i < _this4.filteredItems.length && !has) {
              var item = _this4.filteredItems[i];
              has = filter.doFilter(item, option.value);
              i++;
            }
          } else {
            has = true;
          }

          option.disabled = !has;
        }); // console.log(filter.options);
      });
    }
  }, {
    key: "setFilter",
    value: function setFilter(item, filter) {
      filter.value = item.value;
      filter.placeholder = item.label;
      this.applyFilters();
    }
  }, {
    key: "removeFilter",
    value: function removeFilter(filter) {
      filter.value = null;
      filter.placeholder = null;
      this.applyFilters();
    }
  }, {
    key: "removeAll",
    value: function removeAll() {
      this.filters.forEach(function (filter) {
        filter.value = null;
        filter.placeholder = null;
      });
      this.applyFilters();
    }
  }, {
    key: "onScroll",
    value: function onScroll(event) {
      var _this5 = this;

      if (event.rect.bottom < event.windowRect.bottom) {
        // console.log('more!');
        if (!this.busy && this.maxItems < this.filteredItems.length) {
          this.$timeout(function () {
            _this5.busy = true;

            _this5.$timeout(function () {
              _this5.maxItems += ITEMS_PER_PAGE;
              _this5.visibleItems = _this5.filteredItems.slice(0, _this5.maxItems);
              _this5.busy = false; // console.log(this.visibleItems.length);
            }, 1000);
          }, 0);
        }
      }
    }
  }, {
    key: "fakeSearch$",
    value: function fakeSearch$() {
      var _this6 = this;

      var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2000;
      var items = [];
      var collections = ['Marvel Dream', 'Marvel Edge', 'Boost'];
      var tiles = ['Imperial White', 'Royal Calacatta', 'Elegant Sable', 'Gris Supreme', 'Absolute Brown', 'Agata Azul', 'Gold Onyx', 'Red Luxury', 'Gris Clair'];
      var finishes = this.filters.find(function (x) {
        return x.key === 'finish';
      }).options;
      var sizes = this.filters.find(function (x) {
        return x.key === 'size';
      }).options;
      var UID = 1;

      var _loop = function _loop() {
        var collectionIndex = Math.floor(Math.random() * collections.length);
        var collectionName = collections[collectionIndex];
        var tileIndex = Math.floor(Math.random() * tiles.length);
        var tileName = tiles[tileIndex];
        var tileImage = "img/advanced-search/tile-0".concat(tileIndex + 1, ".jpg");
        var minimals = [];
        var count = 1 + Math.floor(Math.random() * 15);

        while (minimals.length < count) {
          var finish = finishes[Math.floor(Math.random() * finishes.length)];
          var size = sizes[Math.floor(Math.random() * sizes.length)];
          minimals.push({
            id: minimals.length + 1,
            url: '#',
            finish: {
              id: finish.value,
              name: finish.label
            },
            size: {
              id: size.value,
              name: size.label
            }
          });
        }

        var features = [];

        _this6.filters.forEach(function (filter) {
          if (filter.key !== 'finish' && filter.key !== 'size') {
            features.push(filter.options[Math.floor(Math.random() * filter.options.length)].value);
          }
        });

        items.push({
          id: UID++,
          collection: {
            id: collectionIndex + 1,
            name: collectionName
          },
          tile: {
            id: tileIndex + 1,
            name: tileName,
            image: tileImage
          },
          minimals: minimals,
          features: features
        });
      };

      while (items.length < count) {
        _loop();
      } // console.log(JSON.stringify(items));


      return (0, _rxjs.of)({
        data: items
      });
    }
  }]);

  return AdvancedSearchCtrl;
}();

AdvancedSearchCtrl.$inject = ['$scope', '$timeout', 'LocationService', 'ApiService'];
var _default = AdvancedSearchCtrl;
exports.default = _default;

},{"rxjs":1}],199:[function(require,module,exports){
"use strict";

var _appModule = _interopRequireDefault(require("./app.module.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* jshint esversion: 6 */

/* global window, document, angular, Swiper, TweenMax, TimelineMax */
console.log('bootstrap', document);
angular.bootstrap(document, [_appModule.default]);

},{"./app.module.js":200}],200:[function(require,module,exports){
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

var _glslCanvas = _interopRequireDefault(require("./directives/glsl-canvas.directive"));

var _hasDropdown = _interopRequireDefault(require("./directives/has-dropdown.directive"));

var _hilight = _interopRequireDefault(require("./directives/hilight.directive"));

var _href = _interopRequireDefault(require("./directives/href.directive"));

var _lastItem = require("./directives/last-item.directive");

var _lazyScript = _interopRequireDefault(require("./directives/lazy-script.directive"));

var _lazy = _interopRequireDefault(require("./directives/lazy.directive"));

var _media = _interopRequireDefault(require("./directives/media.directive"));

var _muuri = require("./directives/muuri.directive");

var _parallax = _interopRequireDefault(require("./directives/parallax.directive"));

var _scroll = _interopRequireDefault(require("./directives/scroll.directive"));

var _sticky = _interopRequireDefault(require("./directives/sticky.directive"));

var _swiper = require("./directives/swiper.directive");

var _video = _interopRequireDefault(require("./directives/video.directive"));

var _wishlist = _interopRequireDefault(require("./directives/wishlist.directive"));

var _faq = _interopRequireDefault(require("./faq/faq.controller"));

var _imageWithFeatures = require("./filters/image-with-features.filter");

var _notIn = require("./filters/notIn.filter");

var _trusted = require("./filters/trusted.filter");

var _controlMessages = _interopRequireDefault(require("./forms/control-messages.directive"));

var _control = _interopRequireDefault(require("./forms/control.directive"));

var _validate = _interopRequireDefault(require("./forms/validate.directive"));

var _moodboardDropdown = _interopRequireDefault(require("./moodboard/moodboard-dropdown.directive"));

var _moodboardSearch = _interopRequireDefault(require("./moodboard/moodboard-search.directive"));

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* jshint esversion: 6 */

/* global window, document, angular, Swiper, TweenMax, TimelineMax */
var MODULE_NAME = 'app';
var app = angular.module(MODULE_NAME, ['ngSanitize', 'jsonFormatter']);
app.config(['$locationProvider', function ($locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('*');
}]);
app.factory('ApiService', _api.default.factory).factory('DomService', _dom.default.factory).factory('LocationService', _location.default.factory).factory('PromiseService', _promise.default.factory).factory('StateService', _state.default.factory).factory('CookieService', _storage.CookieService.factory).factory('LocalStorageService', _storage.LocalStorageService.factory).factory('SessionStorageService', _storage.SessionStorageService.factory).factory('WishlistService', _wishlist2.default.factory);
app.directive('appear', _appear.default.factory).directive('control', _control.default.factory).directive('controlMessages', _controlMessages.default.factory).directive('glslCanvas', _glslCanvas.default.factory).directive('hasDropdown', _hasDropdown.default.factory).directive('hilight', _hilight.default.factory).directive('href', _href.default.factory).directive('lastItem', _lastItem.LastItemDirective.factory).directive('lazy', _lazy.default.factory).directive('lazyScript', _lazyScript.default.factory).directive('media', _media.default.factory).directive('moodboardDropdown', _moodboardDropdown.default.factory).directive('moodboardSearch', _moodboardSearch.default.factory).directive('muuri', _muuri.MuuriDirective.factory).directive('parallax', _parallax.default.factory).directive('scroll', _scroll.default.factory).directive('selectWithAutocomplete', _autocomplete.default.factory).directive('sticky', _sticky.default.factory).directive('swiperGallery', _swiper.SwiperGalleryDirective.factory).directive('swiperHero', _swiper.SwiperHeroDirective.factory).directive('swiperTile', _swiper.SwiperTileDirective.factory).directive('validate', _validate.default.factory).directive('video', _video.default.factory).directive('wishlist', _wishlist.default.factory);
app.controller('RootCtrl', _root.default).controller('AdvancedSearchCtrl', _advancedSearch.default).controller('CollectionsCtrl', _collections.default).controller('ContactsCtrl', _contacts.default).controller('FaqCtrl', _faq.default).controller('MoodboardCtrl', _moodboard.default).controller('NewsCtrl', _news.default).controller('ReferencesCtrl', _references.default).controller('StoreLocatorCtrl', _storeLocator.default);
app.filter('imageWithFeatures', [_imageWithFeatures.ImageWithFeatures]).filter('notIn', ['$filter', _notIn.NotInFilter]).filter('trusted', ['$sce', _trusted.TrustedFilter]); // app.run(['$compile', '$timeout', '$rootScope', function($compile, $timeout, $rootScope) {}]);

var _default = MODULE_NAME;
exports.default = _default;

},{"./advanced-search/advanced-search.controller":198,"./collections/collections.controller":201,"./contacts/contacts.controller":202,"./directives/appear.directive":203,"./directives/autocomplete.directive":204,"./directives/glsl-canvas.directive":205,"./directives/has-dropdown.directive":206,"./directives/hilight.directive":207,"./directives/href.directive":208,"./directives/last-item.directive":209,"./directives/lazy-script.directive":210,"./directives/lazy.directive":211,"./directives/media.directive":212,"./directives/muuri.directive":213,"./directives/parallax.directive":214,"./directives/scroll.directive":215,"./directives/sticky.directive":216,"./directives/swiper.directive":217,"./directives/video.directive":218,"./directives/wishlist.directive":219,"./faq/faq.controller":220,"./filters/image-with-features.filter":221,"./filters/notIn.filter":222,"./filters/trusted.filter":223,"./forms/control-messages.directive":224,"./forms/control.directive":225,"./forms/validate.directive":226,"./moodboard/moodboard-dropdown.directive":227,"./moodboard/moodboard-search.directive":228,"./moodboard/moodboard.controller":229,"./news/news.controller":230,"./references/references.controller":231,"./root.controller":232,"./services/api.service":233,"./services/dom.service":234,"./services/wishlist.service":235,"./shared/location.service":236,"./shared/promise.service":237,"./shared/state.service":240,"./shared/storage.service":241,"./store-locator/store-locator.controller":242}],201:[function(require,module,exports){
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
var CollectionsCtrl =
/*#__PURE__*/
function () {
  function CollectionsCtrl($scope, $timeout, LocationService) {
    _classCallCheck(this, CollectionsCtrl);

    this.$scope = $scope;
    this.$timeout = $timeout;
    this.locationService = LocationService;
    this.filters = window.filters || {};
    this.brands = window.brands || [];
    this.deserializeFilters();
    this.applyFilters(); // this.filteredReferences = this.references.slice();
    // this.updateFilterStates(this.filteredReferences);
    // console.log(this.filters);
    // console.log(this.brands);
  }

  _createClass(CollectionsCtrl, [{
    key: "deserializeFilters",
    value: function deserializeFilters() {
      var _this = this;

      var locationFilters = this.locationService.deserialize('filters') || {}; // console.log('CollectionsCtrl.deserializeFilters', filters);

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
    }
  }, {
    key: "serializeFilters",
    value: function serializeFilters() {
      var _this2 = this;

      var filters = {};
      Object.keys(this.filters).forEach(function (x) {
        var filter = _this2.filters[x];

        if (filter.value !== null) {
          filters[x] = filter.value;
        }
      }); // console.log('CollectionsCtrl.serializeFilters', filters);

      this.locationService.serialize('filters', filters);
      return filters;
    }
  }, {
    key: "applyFilters",
    value: function applyFilters() {
      var _this3 = this;

      /*
      const filters = Object.keys(this.filters).map((x) => {
      	return Object.assign({ type: x }, this.filters[x]);
      }).filter(x => x.value !== null);
      */
      this.serializeFilters();
      var filters = Object.keys(this.filters).map(function (x) {
        return _this3.filters[x];
      }).filter(function (x) {
        return x.value !== null;
      });
      var filteredBrands = filters.length ? [] : this.brands;

      if (filters.length) {
        this.brands.map(function (x) {
          return Object.assign({}, x);
        }).forEach(function (brand) {
          var filteredCollections = [];
          brand.collections.forEach(function (collection) {
            var has = true;
            filters.forEach(function (filter) {
              has = has && filter.doFilter(collection, filter.value);
            });

            if (has) {
              filteredCollections.push(collection);
            }
          }); // console.log(has, collection, filters);

          if (filteredCollections.length) {
            brand.collections = filteredCollections;
            filteredBrands.push(brand);
          }
        });
      } // console.log(filteredBrands, filters);


      this.filteredBrands = [];
      this.$timeout(function () {
        _this3.filteredBrands = filteredBrands;

        _this3.updateFilterStates(filteredBrands); // delayer for image update

      }, 50);
    }
  }, {
    key: "updateFilterStates",
    value: function updateFilterStates(brands) {
      var _this4 = this;

      var collections = [].concat.apply([], brands.map(function (x) {
        return x.collections;
      }));
      Object.keys(this.filters).forEach(function (x) {
        var filter = _this4.filters[x];
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
    }
  }, {
    key: "setFilter",
    value: function setFilter(item, filter) {
      item = item || filter.options[0];
      filter.value = item.value;
      filter.placeholder = item.label;
      this.applyFilters();
    }
  }, {
    key: "removeFilter",
    value: function removeFilter(filter) {
      this.setFilter(null, filter);
    }
  }]);

  return CollectionsCtrl;
}();

CollectionsCtrl.$inject = ['$scope', '$timeout', 'LocationService'];
var _default = CollectionsCtrl;
exports.default = _default;

},{}],202:[function(require,module,exports){
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
var ContactsCtrl =
/*#__PURE__*/
function () {
  function ContactsCtrl($scope, $timeout, $http, StateService) {
    _classCallCheck(this, ContactsCtrl);

    this.$scope = $scope;
    this.$timeout = $timeout;
    this.$http = $http;
    this.data = window.data || {};
    this.model = {};
    this.state = StateService.getState();
    this.state.ready();
  }

  _createClass(ContactsCtrl, [{
    key: "onSubmit",
    value: function onSubmit() {
      var _this = this;

      console.log('ContactsCtrl.onSubmit', this.model);

      if (this.state.busy()) {
        this.$http.post('/WS/wsForms.asmx/SaveForm', this.model).then(function (success) {}, function (error) {
          _this.error = error;
        }).finally(function () {
          _this.state.ready();
        });
        /*
        this.$timeout(() => {
        	this.state.ready();
        }, 2000);
        */
      }
    }
  }]);

  return ContactsCtrl;
}();

ContactsCtrl.$inject = ['$scope', '$timeout', '$http', 'StateService'];
var _default = ContactsCtrl;
exports.default = _default;

},{}],203:[function(require,module,exports){
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
// Import Polyfills
// See: https://github.com/w3c/IntersectionObserver/tree/master/polyfill
// import 'intersection-observer';
var AppearDirective =
/*#__PURE__*/
function () {
  function AppearDirective(DomService) {
    _classCallCheck(this, AppearDirective);

    this.domService = DomService;
    this.restrict = 'A';
  }

  _createClass(AppearDirective, [{
    key: "link",
    value: function link(scope, element, attributes, controller) {
      var node = element[0];
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

        if (index > 0) {
          setTimeout(function () {
            node.classList.add('appeared');
          }, timeout); // (i - firstVisibleIndex));
        } else {
          node.classList.add('appeared');
        }
      });
      element.on('$destroy', function () {
        subscription.unsubscribe();
      });
    }
  }, {
    key: "getSection",
    value: function getSection(node) {
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
    }
  }], [{
    key: "factory",
    value: function factory(DomService) {
      return new AppearDirective(DomService);
    }
  }]);

  return AppearDirective;
}();

exports.default = AppearDirective;
AppearDirective.factory.$inject = ['DomService'];

},{}],204:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _hasDropdown = _interopRequireDefault(require("./has-dropdown.directive"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AutocompleteDirective =
/*#__PURE__*/
function () {
  function AutocompleteDirective($timeout) {
    _classCallCheck(this, AutocompleteDirective);

    this.$timeout = $timeout;
    this.restrict = 'A';
    this.scope = {
      filter: '=selectWithAutocomplete',
      handler: '=',
      onSetItem: '=?',
      onRemoveItem: '=?'
    };
    this.template = "\n\t\t<div class=\"dropdown\">\n\t\t\t<ul class=\"nav nav--select\">\n\t\t\t\t<li ng-repeat=\"item in items track by $index\" ng-class=\"{ active: item.value == filter.value, disabled: item.disabled }\">\n\t\t\t\t\t<span class=\"option\" ng-class=\"{ 'option--picture': item.image }\" ng-click=\"setItem(item)\">\n\t\t\t\t\t\t<img ng-src=\"{{item.image}}\" ng-if=\"item.image\" />\n\t\t\t\t\t\t<span ng-bind=\"item.label\"></span>\n\t\t\t\t\t</span>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<label class=\"label\" ng-bind=\"filter.label\"></label>\n\t\t<div class=\"control control--select\" ng-class=\"{ selected: filter.value }\">\n\t\t\t<div class=\"input\">\n\t\t\t\t<svg class=\"icon icon--search\" ng-if=\"!filter.value\"><use xlink:href=\"#search\"></use></svg>\n\t\t\t\t<svg class=\"icon icon--close\" ng-if=\"filter.value\" ng-click=\"removeItem()\"><use xlink:href=\"#close\"></use></svg>\n\t\t\t\t<input type=\"text\" class=\"value\" ng-model=\"autocomplete.query\" ng-model-options=\"{ debounce: 200 }\" ng-disabled=\"filter.value\" placeholder=\"{{filter.placeholder}}\" ng-change=\"onChange($event)\" ng-click=\"onClick($event)\"></input>\n\t\t\t\t<svg class=\"icon icon--arrow-down\"><use xlink:href=\"#arrow-down\"></use></svg>\n\t\t\t</div>\n\t\t</div>\n\t\t";
  }

  _createClass(AutocompleteDirective, [{
    key: "link",
    value: function link(scope, element, attributes, controller) {
      var _this = this;

      var node = element[0];
      var input = node.querySelector('input');
      var uid = _hasDropdown.default.dropDownUid++;
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
      element.on('$destroy', function () {
        removeListeners();
      });
    }
  }], [{
    key: "factory",
    value: function factory($timeout) {
      return new AutocompleteDirective($timeout);
    }
  }]);

  return AutocompleteDirective;
}();

exports.default = AutocompleteDirective;
AutocompleteDirective.factory.$inject = ['$timeout'];

},{"./has-dropdown.directive":206}],205:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _shader = require("../shared/shader");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GlslCanvasDirective =
/*#__PURE__*/
function () {
  function GlslCanvasDirective(DomService) {
    _classCallCheck(this, GlslCanvasDirective);

    this.domService = DomService;
    this.restrict = 'A';
  }

  _createClass(GlslCanvasDirective, [{
    key: "link",
    value: function link(scope, element, attributes, controller) {
      var node = element[0];
      var canvas = new GlslCanvas(node, {
        fragmentString: _shader.FRAGMENT_SHADER
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
      element.on('$destroy', function () {
        if (tween) {
          tween.kill();
        }

        node.removeEventListener('mouseover', onOver);
        node.removeEventListener('mouseout', onOut);
        subscription.unsubscribe();
        canvas.destroy();
      });
    }
  }], [{
    key: "factory",
    value: function factory(DomService) {
      return new GlslCanvasDirective(DomService);
    }
  }]);

  return GlslCanvasDirective;
}();

exports.default = GlslCanvasDirective;
GlslCanvasDirective.factory.$inject = ['DomService'];

},{"../shared/shader":239}],206:[function(require,module,exports){
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
var HasDropdownDirective =
/*#__PURE__*/
function () {
  function HasDropdownDirective($timeout) {
    _classCallCheck(this, HasDropdownDirective);

    this.$timeout = $timeout;
    this.restrict = 'A';
    this.scope = false;
  }

  _createClass(HasDropdownDirective, [{
    key: "link",
    value: function link(scope, element, attributes, controller) {
      var _this = this;

      var node = element[0];
      var uid = HasDropdownDirective.dropDownUid++;
      node.initialFocus = null;
      var consumer = attributes.hasDropdownConsumer !== undefined ? scope.$eval(attributes.hasDropdownConsumer) : null; // scope.hasDropdown = null;

      var onClick = function onClick(event) {
        // console.log(event);
        var clickedInside = node === event.target || node.contains(event.target); // || !document.contains(event.target)

        if (clickedInside) {
          node.initialFocus = true;

          if (consumer) {
            var dropdown = node.querySelector('[dropdown]');

            if (scope.hasDropdown === uid) {
              consumer.onDroppedOut(dropdown);
            } else {
              consumer.onDroppedIn(dropdown);
            } // console.log(consumer, dropdown);

          }

          _this.$timeout(function () {
            if (scope.hasDropdown === uid) {
              scope.hasDropdown = null;
            } else {
              scope.hasDropdown = uid;
            }
          });
        } else if (node.initialFocus !== null) {
          node.initialFocus = false;

          if (consumer) {
            var _dropdown = node.querySelector('[dropdown]');

            consumer.onDroppedOut(_dropdown); // console.log(consumer, dropdown);
          }

          _this.$timeout(function () {
            if (scope.hasDropdown === uid) {
              scope.hasDropdown = null;
            }
          });
        }
      };

      var onShowHide = function onShowHide(value) {
        if (scope.hasDropdown === uid) {
          node.classList.add('opened');
        } else {
          node.classList.remove('opened');
        }
      };

      scope.$watch('hasDropdown', onShowHide);
      scope.$on('onNavigationTransitionIn', function () {
        // console.log('onNavigationTransitionIn');
        scope.hasDropdown = null;
        onShowHide();

        if (consumer) {
          var dropdown = node.querySelector('[dropdown]');
          consumer.onDroppedOut(dropdown); // console.log(consumer, dropdown);
        }
      });

      var addListeners = function addListeners() {
        document.addEventListener('click', onClick);
      };

      var removeListeners = function removeListeners() {
        document.removeEventListener('click', onClick);
      };

      addListeners();
      element.on('$destroy', function () {
        removeListeners();
      });
    }
  }], [{
    key: "factory",
    value: function factory($timeout) {
      return new HasDropdownDirective($timeout);
    }
  }]);

  return HasDropdownDirective;
}();

exports.default = HasDropdownDirective;
HasDropdownDirective.dropDownUid = 0;
HasDropdownDirective.factory.$inject = ['$timeout'];

},{}],207:[function(require,module,exports){
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
var HilightDirective =
/*#__PURE__*/
function () {
  function HilightDirective() {
    _classCallCheck(this, HilightDirective);

    this.restrict = 'A';
  }

  _createClass(HilightDirective, [{
    key: "link",
    value: function link(scope, element, attributes, controller) {
      var node = element[0];
      var hilight, query;

      var update = function update() {
        if (hilight) {
          if (query) {
            var index = hilight.toLowerCase().indexOf(query);

            if (index !== -1) {
              node.innerHTML = "".concat(hilight.substring(0, index), "<span class=\"hilight\">").concat(hilight.substring(index, index + query.length), "</span>").concat(hilight.substring(index + query.length, hilight.length));
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
    }
  }], [{
    key: "factory",
    value: function factory() {
      return new HilightDirective();
    }
  }]);

  return HilightDirective;
}();

exports.default = HilightDirective;
HilightDirective.factory.$inject = [];

},{}],208:[function(require,module,exports){
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
var HrefDirective =
/*#__PURE__*/
function () {
  function HrefDirective() {
    _classCallCheck(this, HrefDirective);

    this.restrict = 'A';
  }

  _createClass(HrefDirective, [{
    key: "link",
    value: function link(scope, element, attributes, controller) {
      var _this = this;

      var node = element[0];

      if (node.nodeName.toLowerCase() === 'link') {
        return;
      }

      if (attributes.target === '_blank') {
        return;
      }

      var onClick = function onClick(event) {
        var href = attributes.href;
        var absolute = /^(http:|https:|\/\/)/.test(href);

        var domain = _this.getDomain(href);

        var currentDomain = _this.getDomain(window.location.href);

        if (absolute && domain !== currentDomain) {
          window.location.href = href;
          return;
        } // Se c'è un cambio di mercato, facciamo ricaricare la pagina


        var market = _this.getMarket(href);

        var currentMarket = _this.getMarket(window.location.href); // console.log('onNavigationShouldFetch', currentMarket, market);


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

        var title = node.innerText;
        scope.$emit('onNavigationShouldFetch', {
          title: title,
          href: href
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

      element.on('$destroy', function () {
        node.removeEventListener('click', onClick);
      });
      return;
    }
  }, {
    key: "getDomain",
    value: function getDomain(text) {
      var domainRegexp = /([[a-zA-Z0-9-_]+\.]*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,11})/;
      var matches = text.match(domainRegexp);
      return matches && matches.length > 1 ? matches[1] : null;
    }
  }, {
    key: "getMarket",
    value: function getMarket(text) {
      var marketRegexp = /(^|[^\/])\/([^\/]+)/;
      var matches = text.match(marketRegexp);
      return matches && matches.length > 2 ? matches[2] : null;
    }
  }], [{
    key: "factory",
    value: function factory() {
      return new HrefDirective();
    }
  }]);

  return HrefDirective;
}();

exports.default = HrefDirective;
HrefDirective.factory.$inject = [];

},{}],209:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LastItemDirective = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* jshint esversion: 6 */

/* global window, document, angular, Swiper, TweenMax, TimelineMax */
var LastItemDirective =
/*#__PURE__*/
function () {
  function LastItemDirective($timeout) {
    _classCallCheck(this, LastItemDirective);

    this.$timeout = $timeout;
    this.restrict = 'A';
  }

  _createClass(LastItemDirective, [{
    key: "link",
    value: function link(scope, element, attributes, controller) {
      if (scope.$last === true) {
        this.$timeout(function () {
          scope.$emit('lastItem', element);
        });
      }
    }
  }], [{
    key: "factory",
    value: function factory($timeout) {
      return new LastItemDirective($timeout);
    }
  }]);

  return LastItemDirective;
}();

exports.LastItemDirective = LastItemDirective;
LastItemDirective.factory.$inject = ['$timeout'];

},{}],210:[function(require,module,exports){
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
var LazyScriptDirective =
/*#__PURE__*/
function () {
  function LazyScriptDirective() {
    _classCallCheck(this, LazyScriptDirective);

    this.restrict = 'A';
    this.scope = false;
  }

  _createClass(LazyScriptDirective, [{
    key: "link",
    value: function link(scope, element, attributes, controller) {
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
      // element.on('$destroy', () => {});

    }
  }], [{
    key: "factory",
    value: function factory() {
      return new LazyScriptDirective();
    }
  }]);

  return LazyScriptDirective;
}();

exports.default = LazyScriptDirective;
LazyScriptDirective.factory.$inject = [];

},{}],211:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _operators = require("rxjs/operators");

var _rect = _interopRequireDefault(require("../shared/rect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// let INDEX = 0;
var LazyDirective =
/*#__PURE__*/
function () {
  // src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy lazy-src="
  function LazyDirective(DomService) {
    _classCallCheck(this, LazyDirective);

    this.domService = DomService;
    this.restrict = 'A';
    this.scope = {
      src: "@?",
      srcset: "@?",
      backgroundSrc: "@?"
    };
  }

  _createClass(LazyDirective, [{
    key: "link",
    value: function link(scope, element, attributes, controller) {
      var _this = this;

      var node = element[0];
      node.classList.remove('lazyed'); // node.index = INDEX++;
      // empty picture
      // image.setAttribute('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');

      element.subscription = this.domService.appear$(node).subscribe(function (event) {
        if (!node.classList.contains('lazyed')) {
          node.classList.add('lazyed');

          _this.onAppearsInViewport(node, scope, attributes);
        }
      });
      /*
      element.subscription = this.lazy$(node).subscribe(intersection => {
      	if (intersection.y > -0.5) {
      		if (!node.classList.contains('lazyed')) {
      			node.classList.add('lazyed');
      			this.onAppearsInViewport(node, scope, attributes);
      			setTimeout(() => {
      				element.subscription.unsubscribe();
      				element.subscription = null;
      			}, 1);
      		}
      	}
      });
      */

      element.on('$destroy', function () {
        if (element.subscription) {
          element.subscription.unsubscribe();
        }
      });
    }
  }, {
    key: "onAppearsInViewport",
    value: function onAppearsInViewport(image, scope, attributes) {
      if (scope.srcset) {
        // attributes.$set('srcset', scope.srcset);
        image.setAttribute('srcset', scope.srcset);
        image.removeAttribute('data-srcset');

        if (scope.src) {
          // attributes.$set('src', scope.src);
          image.setAttribute('src', scope.src);
          image.removeAttribute('data-src');
        }
      } else if (scope.src) {
        // console.log(scope.src);
        image.setAttribute('src', scope.src);
        image.removeAttribute('data-src'); // attributes.$set('src', scope.src);

        /*
        image.setAttribute('src', null);
        setTimeout(() => {
        	image.setAttribute('src', scope.src);
        }, 1);
        */

        /*
        const input = scope.src;
        this.onImagePreload(input, (output) => {
        	image.setAttribute('src', output);
        	image.removeAttribute('data-src');
        	image.classList.add('ready');
        });
        */
      } else if (scope.backgroundSrc) {
        image.setStyle('background-image', "url(".concat(scope.backgroundSrc, ")"));
        image.removeAttribute('data-background-src');
      }
    }
  }, {
    key: "lazy$",
    value: function lazy$(node) {
      return this.domService.rafAndRect$().pipe((0, _operators.map)(function (datas) {
        var windowRect = datas[1];

        var rect = _rect.default.fromNode(node);

        var intersection = rect.intersection(windowRect);
        return intersection;
      }));
    }
  }, {
    key: "onImagePreload",
    value: function onImagePreload(src, callback) {
      var img = new Image();

      img.onload = function () {
        if (typeof callback === 'function') {
          callback(img.src);
        }
      };

      img.onerror = function (e) {
        img.onerror = null;
        img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAAC/CAMAAAA1kLK0AAAATlBMVEX////MzMyZmZn39/fHx8fPz8+Ojo7FxcXDw8Pn5+fS0tLq6url5eX8/PyUlJTi4uLX19fv7++JiYm9vb3d3d2FhYWtra2qqqqAgICdnZ2sCR5lAAAJUElEQVR4nO2d6YKzKgyGa7VaN1zqdL7e/42eigERkGobrM7J+2umM3V5DEkICKeQxHUKT6SnCASIQIAIBIhAgAgEiECACASIQIAIBIhAgAgEiECACASIQIAIBIhAgAgEiECACASIQIAIBIhAgAgEiECACASIQIAIBIhAgAgE6NsgynFcvvzqhXwNRBk2RVdnQRBEXM8fsrormm/x+AqIsqnqAO5+Iv5ZXTVfgLE9iLDoIegIpjiCutj8srYFUaaZG8III0s3tYtNQTT1MgqCRd1sd20bgkiDZDmFQUmQbnV1m4Go5owhimTYsP612ub6NgKRWm60v/lL1nVF+lQfSi+BjUcUbWIVm4BogshkUKdmlCybtL4YNKJgA1+xAYiwjjQKQZc78qYw7/T4GtX+r9I7CK1VPCm8zpfKppsakf/24RtEmUWT+8nyhdlBmU9jbZT5TSs8g2jUm4lWWnhYT7/t1VP4BVFdlRtJ1jf0sEsUFFefkdQriFrJoK7v+btQPUZSY1+hciJ/IErF30XR26cJlfYRBd4chT8QoWLUyUdGXSlG8T7QF/IGIlSf44fnCFXb8nW9nkAoHJLuY3suu8Q3CU8gVA45xgFz3zbhB0Sp+Aek4yvNI/LhMf2AUJwbij30Ki8jXaxjKvIC4qIGDDQS42GjC9oxpXyA6Cb9pSseCdlviTq0Ywp5AJFqFTkfJBL0zig+iMaoTCKSkK0jwe6BoYMoFUcp/QTa81PSduTQgQ5ClqOiskjwScgEJULugGGDaFTbTT2QkCdALk8ggyind17IegReFB3pojYOZBAicgrDHUngeUzR+HBjKC6IUDwtmQWPfgKNhMzfE9RLRwWRiZse22+FT6IRZpYhHbAXKgiRQkw8ugcSonFgJhOoIKRnnLgxfD8xdm5xjtcLE4Q0CC1WpmPsQIqiInIgmgQmiMvcczJINGnuUPr6ksTx8LqhiCCkQZgNQCdR/cQOtffF58IzCUQQtcOX6ySK+OxQ/NqXiH4oWqKNB0LkEPbUN9VyTCcJ9tokRA0TLZfAA1FFzmarZ1ZOEgtMAhwS2oQaPBCBPWRIGSTaj0wiFSEU6fLRQMh6zGxXSM+sUgeJ9qUTFN07LHeJBgK6W66ekG4T+c/w+PtIwTQSr01iwQnXCAuEeECW0Zfq9tTQGrQcM29Zy36vWV1n19/nj2rjuE1lugJZosHpjWOBEJd1MS8raBlj7dAa9HzipnjFJmBKY2ETtRZXcJlF/9YNIIGAmGFz4hceH+wkNNVsJpbElljkOOUbwgKRzYf1AQSExFf9juvUg8Zs8B42ECJxwemMI4EIHcEMQJxjfuc2EmpzStnoKtj5kha3dgaEDNg4d4ADonG4cAHizHQS3EbK2/33936TE9CbhyTx4J9l8QwIETdQAigSiAKuyZYRShBAQqny83/vemf6jKD3Yvj/5gwkYsD6y+wgIM2OCow7QAIBNSNr5j+CMEkMNjL4Bdbeh6/n8AUGR8tmQICTwBnhQAIhQpn1b0okGDymkllxEpBZnSHInmrwmHBpdWwHcXL3btYJB4RIp6wOXAUBUVTJrCYkzv8GM7+z0bvy3+wgRK0YI6XCARG60t0JCCOfuPJbz8EGHj/c8zX8V/bg36/nnKX0lii3gAJCBA1rajAFYWZWnEQqQwt/vDc2hM+6aa6z4VP0QFHCBg4IuCJ7T1ADcW75GedIxNzPCAsR3TE7COjxoszcxwFROYKGAWIweINEMYkVj+l37CBE2MBIsnFAQGNNrF5LA8Gu8HmqeUwgEfPsNGELQJSJwzWtFA6I2hE9DR8hn1+a2Eiw3/7nql0A4oRYwf0CiP6EIaeh5xODn+BtIzwmCBHQrX/UQMT9Z+mPlmNCPsEjBA8r8RIQrvRlpbYHwfrPungmx2xFF2OJj/gTIMzMSpD4v4GYyazy+P8CgvsI3sGcyTEH93FMH7E+aii9Kp1EdeCosT6P+B1IDDZgqd4dNI9YlVkm/YcBpJEaiasgcT1mZrm+rxGKctzQz0h0Egfta6zrfXIfGU1q2zoJzUUcpve5ph5xZrf+01LYvp1EvsRH7K8esaJCdRZD3c3PQ7UQo3rXvgaxvwrV8polN4lhqLv4B7//OKt3DhD7q1kurmJzPdoh3uVi/FsnIXLMVyD2V8VeOq4h72so24d3QNEOmVUyJZEyN4g9jmssG+kaG8cZ/Ftx76uSjLXcu+SzJA4z0rVo7FMl8ZBDnfUw9snbea5XapgLxB7HPpeMhk9JMGuo1at3srZ9lNHwBfMjdLVX819NEuAxDzM/4vWMGVMxs3k5g0Q7B2KfM2bC+VA2B+JpFExdaisfZoxZSVhAlPucQ+WYVTcPoh//VmfVDTmm4jF5POgHQi0gdjqrzjHt0QWCwxjnWQ6ZVa5lVo11WsBO51k6Zt5e9MmkDg2ZlUKCt5aGmSB2O/N2fi524Hw5Q9O/IbPSs21znuVu52LPz87PL9kKDRZlkDDw7nd2vnxfA2dNGaNmNZV4M3qH72vICi5OgqNHUU2iB77DN3iw37NykpAv8Ozxna75t/zek4uE+Msu3/IbTQL57U6TRIpuEH7eBMZaKCrXqndCpSSEc55e/t8N/0R6ZgXa/bvhttUCPpOVxP5XC7CsH/Gp9MzqdIz1I4wVRT6X6SeOsKKIvsYMhoyK7iHWmPGxKNB07SLZy933qkPqOlRoB1bHO6SD2Ps6VGPjQFyodyShLAe495XJFNvFy39HjyltY/dr1SnPD6kf2ksncYTVC5X1LL2ROMZ6ln6WIh2j6HFWOFXWvI0s74q/KWUd5MOseassFPXx4uBCoWIQx1kFebJOOnIN81DrYtNK6cqBae18cWTaTQFE+2tITXdLeetEYX1Vj4F9hcqJfILQ9uDpVp8qrP/GHjy0K9MofZ+uevk+Xdlf2qfrRDu3Kaew7uU3++/lX93L72Tf3fEyt7ujudflX9ndsdf8fp+12O+z+x/s99mLdoCVoj2BpWiXaCnaN1w5I+0kL1U2FY+SBg7+WV29zrjw9RUQvcqw6bfIDkTYeP7Qh9LGsWuyV30NBKgMpb5EAPRtELsRgQARCBCBABEIEIEAEQgQgQARCBCBABEIEIEAEQgQgQARCBCBABEIEIEAEQgQgQARCBCBABEIEIEAEQgQgQARCBCBABEIEIEAPUGQuP4DT2RwhyUkgc4AAAAASUVORK5CYII=';
      };

      img.src = src;
    }
  }], [{
    key: "factory",
    value: function factory(DomService) {
      return new LazyDirective(DomService);
    }
  }]);

  return LazyDirective;
}();

exports.default = LazyDirective;
LazyDirective.factory.$inject = ['DomService'];

},{"../shared/rect":238,"rxjs/operators":197}],212:[function(require,module,exports){
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
var MediaDirective =
/*#__PURE__*/
function () {
  function MediaDirective($timeout, WishlistService) {
    _classCallCheck(this, MediaDirective);

    this.$timeout = $timeout;
    this.wishlistService = WishlistService;
    this.restrict = 'A';
    this.transclude = true;
    this.template = "<div class=\"media\">\n\t<ng-transclude></ng-transclude>\n</div>\n<div class=\"overlay\" ng-click=\"onOverlay()\"></div>\n<div class=\"btn btn--pinterest\" ng-click=\"onPin()\" ng-if=\"onPin\">\n\t<svg class=\"icon icon--pinterest\"><use xlink:href=\"#pinterest\"></use></svg>\n</div>\n<div class=\"btn btn--wishlist\" ng-class=\"{ active: wishlistActive, activated: wishlistActivated, deactivated: wishlistDeactivated }\" ng-click=\"onClickWishlist($event)\">\n\t<svg class=\"icon icon--wishlist\" ng-if=\"!wishlistActive\"><use xlink:href=\"#wishlist\"></use></svg>\n\t<svg class=\"icon icon--wishlist\" ng-if=\"wishlistActive\"><use xlink:href=\"#wishlist-added\"></use></svg>\n</div>";
    this.scope = {
      item: '=?media'
    };
  }

  _createClass(MediaDirective, [{
    key: "link",
    value: function link(scope, element, attributes, controller) {
      var _this = this;

      scope.item = scope.item || {};
      var node = element[0];
      var img = node.querySelector('img');

      if (img) {
        var pageTitle = document.title;

        scope.onPin = function () {
          var pin = {
            url: window.location.href,
            media: img.src,
            description: img.title || pageTitle
          }; // console.log('MediaDirective.onPin', pin);

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
        _this.wishlistService.toggle(scope.item).then(function (has) {
          console.log('MediaDirective.onClickWishlist', has);
        }, function (error) {
          console.log(error);
        });

        event.preventDefault();
        event.stopPropagation();
      };

      element.on('$destroy', function () {});
    }
  }], [{
    key: "factory",
    value: function factory($timeout, WishlistService) {
      return new MediaDirective($timeout, WishlistService);
    }
  }]);

  return MediaDirective;
}();

exports.default = MediaDirective;
MediaDirective.factory.$inject = ['$timeout', 'WishlistService'];

},{}],213:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MuuriDirective = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* jshint esversion: 6 */

/* global window, document, angular, Muuri, TweenMax, TimelineMax */
var MuuriDirective =
/*#__PURE__*/
function () {
  function MuuriDirective() {
    _classCallCheck(this, MuuriDirective);

    this.restrict = 'A';
  }

  _createClass(MuuriDirective, [{
    key: "link",
    value: function link(scope, element, attributes, controller) {
      var _this = this;

      scope.$on('lastItem', function (slide) {
        // console.log('MuuriDirective.lastItem', slide);
        _this.onMuuri(scope, element, attributes);
      });
      element.on('$destroy', function () {
        if (element.muuri) {
          element.muuri.destroy();
        }
      });
      setTimeout(function () {
        _this.onMuuri(scope, element, attributes);
      }, 1);
    }
  }, {
    key: "onMuuri",
    value: function onMuuri(scope, element, attributes) {
      if (element.muuri) {
        var node = element[0]; // const items = scope.$eval(attributes.muuri);

        var previousItems = element.muuri.getItems().map(function (x) {
          return x.getElement();
        }); // console.log('MuuriDirective.previousItems', previousItems);

        var items = _toConsumableArray(node.querySelectorAll('.listing__item')); // console.log('MuuriDirective.newItems', items);


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
          layoutDuration: 400,
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
      }
    }
  }], [{
    key: "factory",
    value: function factory() {
      return new MuuriDirective();
    }
  }]);

  return MuuriDirective;
}();

exports.MuuriDirective = MuuriDirective;
MuuriDirective.factory.$inject = [];

},{}],214:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _operators = require("rxjs/operators");

var _rect = _interopRequireDefault(require("../shared/rect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ParallaxDirective =
/*#__PURE__*/
function () {
  function ParallaxDirective(DomService) {
    _classCallCheck(this, ParallaxDirective);

    this.domService = DomService;
    this.restrict = 'A';
  }

  _createClass(ParallaxDirective, [{
    key: "link",
    value: function link(scope, element, attributes, controller) {
      var node = element[0];
      var childNode = node.querySelector('img, video');

      if (childNode) {
        var style = window.getComputedStyle(node);
        var position = style.position;
        var parallax = (parseInt(attributes.parallax) || 5) * 2;
        var subscription = this.parallax$(node, parallax).subscribe(function (parallax) {
          if (position === 'absolute') {
            childNode.setAttribute('style', "top: 50%; left: 50%; transform: translateX(-50%) translateY(".concat(parallax.p, "%) scale(").concat(parallax.s, ", ").concat(parallax.s, ");"));
          } else {
            childNode.setAttribute('style', "transform: translateX(0) translateY(".concat(parallax.p + 50, "%) scale(").concat(parallax.s, ", ").concat(parallax.s, ");"));
          }
        });
        element.on('$destroy', function () {
          subscription.unsubscribe();
        });
      }
    }
  }, {
    key: "parallax$",
    value: function parallax$(node, parallax) {
      return this.domService.rafAndRect$().pipe((0, _operators.map)(function (datas) {
        var windowRect = datas[1];
        var direction = 1; // i % 2 === 0 ? 1 : -1;

        var rect = _rect.default.fromNode(node);

        var intersection = rect.intersection(windowRect);

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
      })
      /*
      distinctUntilChanged((a, b) => {
      	return a.p !== b.p;
      }),
      */
      );
    }
  }], [{
    key: "factory",
    value: function factory(DomService) {
      return new ParallaxDirective(DomService);
    }
  }]);

  return ParallaxDirective;
}();

exports.default = ParallaxDirective;
ParallaxDirective.factory.$inject = ['DomService'];

},{"../shared/rect":238,"rxjs/operators":197}],215:[function(require,module,exports){
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
var ScrollDirective =
/*#__PURE__*/
function () {
  // @Output() public scroll = new EventEmitter();
  function ScrollDirective(DomService) {
    _classCallCheck(this, ScrollDirective);

    this.domService = DomService; // this.require = 'ngModel';

    this.restrict = 'A';
  }

  _createClass(ScrollDirective, [{
    key: "link",
    value: function link(scope, element, attributes, controller) {
      if (attributes.scroll !== undefined) {
        var node = element[0];
        var subscription = this.domService.scrollIntersection$(node).subscribe(function (event) {
          scope.$eval(attributes.scroll, {
            $event: event
          });
        });
        element.on('$destroy', function () {
          subscription.unsubscribe();
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
  }], [{
    key: "factory",
    value: function factory(DomService) {
      return new ScrollDirective(DomService);
    }
  }]);

  return ScrollDirective;
}();

exports.default = ScrollDirective;
ScrollDirective.factory.$inject = ['DomService'];

},{}],216:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _operators = require("rxjs/operators");

var _rect = _interopRequireDefault(require("../shared/rect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StickyDirective =
/*#__PURE__*/
function () {
  function StickyDirective(DomService) {
    _classCallCheck(this, StickyDirective);

    this.domService = DomService;
    this.restrict = 'A';
  }

  _createClass(StickyDirective, [{
    key: "link",
    value: function link(scope, element, attributes, controller) {
      var subscription = this.scroll$(element, attributes).subscribe();
      element.on('$destroy', function () {
        subscription.unsubscribe();
      });
    }
  }, {
    key: "scroll$",
    value: function scroll$(element, attributes) {
      var node = element[0];
      var content = node.querySelector('[sticky-content]');
      var stickyTop = parseInt(attributes.sticky) || 0;
      return this.domService.scroll$().pipe((0, _operators.tap)(function (scroll) {
        var rect = _rect.default.fromNode(node); // const maxtop = node.offsetHeight - content.offsetHeight;
        // top = Math.max(0, Math.min(maxtop, top - rect.top));


        var maxTop = Math.max(0, stickyTop - rect.top); // content.setAttribute('style', `transform: translateY(${maxTop}px);`);

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
    }
  }, {
    key: "scroll$_",
    value: function scroll$_(element, attributes) {
      var node = element[0];
      var content = node.querySelector('[sticky-content]');
      var stickyTop = parseInt(attributes.sticky) || 0;
      return this.domService.raf$().pipe((0, _operators.tap)(function (datas) {
        var rect = _rect.default.fromNode(node); // const maxtop = node.offsetHeight - content.offsetHeight;
        // top = Math.max(0, Math.min(maxtop, top - rect.top));


        var maxTop = Math.max(0, stickyTop - rect.top);
        content.setAttribute('style', "transform: translateY(".concat(maxTop, "px);"));
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
    }
  }], [{
    key: "factory",
    value: function factory(DomService) {
      return new StickyDirective(DomService);
    }
  }]);

  return StickyDirective;
}();

exports.default = StickyDirective;
StickyDirective.factory.$inject = ['DomService'];

},{"../shared/rect":238,"rxjs/operators":197}],217:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwiperTileDirective = exports.SwiperHeroDirective = exports.SwiperGalleryDirective = exports.SwiperDirective = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* jshint esversion: 6 */

/* global window, document, angular, Swiper, TweenMax, TimelineMax */
var DEFAULT_SWIPER_OPTIONS = {
  slidesPerView: 'auto',
  spaceBetween: 1,
  centeredSlides: true,
  loop: true,
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
  }
};

var SwiperDirective =
/*#__PURE__*/
function () {
  function SwiperDirective() {
    _classCallCheck(this, SwiperDirective);

    this.restrict = 'A';
    this.options = DEFAULT_SWIPER_OPTIONS;
  }

  _createClass(SwiperDirective, [{
    key: "link",
    value: function link(scope, element, attributes, controller) {
      var _this = this;

      scope.$on('lastItem', function (slide) {
        _this.onSwiper(element);
      });
      element.on('$destroy', function () {
        if (element.swiper) {
          element.swiper.destroy();
        }
      });
      setTimeout(function () {
        _this.onSwiper(element);
      }, 1);
    }
  }, {
    key: "onSwiper",
    value: function onSwiper(element) {
      if (element.swiper) {
        element.swiper.update();
      } else {
        element.swiper = new Swiper(element, this.options);
        element.addClass('swiper-init');
      }
    }
  }], [{
    key: "factory",
    value: function factory() {
      return new SwiperDirective();
    }
  }]);

  return SwiperDirective;
}();

exports.SwiperDirective = SwiperDirective;
SwiperDirective.factory.$inject = [];

var SwiperGalleryDirective =
/*#__PURE__*/
function (_SwiperDirective) {
  _inherits(SwiperGalleryDirective, _SwiperDirective);

  function SwiperGalleryDirective() {
    var _this2;

    _classCallCheck(this, SwiperGalleryDirective);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(SwiperGalleryDirective).call(this));
    _this2.options = {
      slidesPerView: 'auto',
      spaceBetween: 1,
      centeredSlides: true,
      loop: true,
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
      }
    };
    return _this2;
  }

  _createClass(SwiperGalleryDirective, null, [{
    key: "factory",
    value: function factory() {
      return new SwiperGalleryDirective();
    }
  }]);

  return SwiperGalleryDirective;
}(SwiperDirective);

exports.SwiperGalleryDirective = SwiperGalleryDirective;
SwiperGalleryDirective.factory.$inject = [];

var SwiperHeroDirective =
/*#__PURE__*/
function (_SwiperDirective2) {
  _inherits(SwiperHeroDirective, _SwiperDirective2);

  function SwiperHeroDirective() {
    var _this3;

    _classCallCheck(this, SwiperHeroDirective);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(SwiperHeroDirective).call(this));
    _this3.options = {
      speed: 600,
      parallax: true,
      autoplay: 5000,
      loop: true,
      spaceBetween: 0,
      keyboardControl: true,
      mousewheelControl: false,
      onSlideClick: function onSlideClick(swiper) {
        angular.element(swiper.clickedSlide).scope().clicked(angular.element(swiper.clickedSlide).scope().$index);
      },
      on: {
        /*
        setTranslate: function () {
        	console.log('setTranslate', this);
        },
        */
        setTransition: function setTransition() {// console.log('setTransition', this);

          /*
          var x = 73 - 5 + (Math.random() * 10);
          var y = 24;
          var r = 18 - 5 + (Math.random() * 10);
          console.log(x, y, r)
          dynamics.animate(element[0].querySelector('.fico'), {
          	rotateZ: '-' + r + 'deg',
          	translateX: '-' + x + '%',
          	translateY: '-' + y + '%',
          }, {
          	type: dynamics.bezier,
          	points: [{
          		"x": 0,
          		"y": 0,
          		"cp": [{
          			"x": 0.462, "y": -0.877
          		}]
          	}, {
          		"x": 1,
          		"y": 1,
          		"cp": [{
          			"x": 0.538, "y": 1.899
          		}]
          	}],
          });
          */
        }
      }
      /*
      pagination: {
      	el: '.swiper-pagination',
      	clickable: true,
      },
      */

      /*
      navigation: {
      	nextEl: '.swiper-button-next',
      	prevEl: '.swiper-button-prev',
      },
      */

    };
    return _this3;
  }

  _createClass(SwiperHeroDirective, null, [{
    key: "factory",
    value: function factory() {
      return new SwiperHeroDirective();
    }
  }]);

  return SwiperHeroDirective;
}(SwiperDirective);

exports.SwiperHeroDirective = SwiperHeroDirective;
SwiperHeroDirective.factory.$inject = [];

var SwiperTileDirective =
/*#__PURE__*/
function (_SwiperDirective3) {
  _inherits(SwiperTileDirective, _SwiperDirective3);

  function SwiperTileDirective() {
    var _this4;

    _classCallCheck(this, SwiperTileDirective);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(SwiperTileDirective).call(this));
    _this4.options = {
      speed: 600,
      parallax: true,
      autoplay: 5000,
      loop: true,
      spaceBetween: 0,
      keyboardControl: true,
      mousewheelControl: false,
      onSlideClick: function onSlideClick(swiper) {
        angular.element(swiper.clickedSlide).scope().clicked(angular.element(swiper.clickedSlide).scope().$index);
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    };
    return _this4;
  }

  _createClass(SwiperTileDirective, null, [{
    key: "factory",
    value: function factory() {
      return new SwiperTileDirective();
    }
  }]);

  return SwiperTileDirective;
}(SwiperDirective);

exports.SwiperTileDirective = SwiperTileDirective;
SwiperTileDirective.factory.$inject = [];

},{}],218:[function(require,module,exports){
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
var VideoDirective =
/*#__PURE__*/
function () {
  function VideoDirective($timeout, WishlistService) {
    _classCallCheck(this, VideoDirective);

    this.$timeout = $timeout;
    this.wishlistService = WishlistService;
    this.restrict = 'A';
    this.transclude = true;
    this.template = "<div class=\"media\">\n\t<ng-transclude></ng-transclude>\n</div>\n<div class=\"overlay\" ng-click=\"onOverlay()\"></div>\n<div class=\"btn btn--play\" ng-class=\"{ playing: playing }\">\n\t<svg class=\"icon icon--play-progress-background\"><use xlink:href=\"#play-progress\"></use></svg>\n\t<svg class=\"icon icon--play-progress\" viewBox=\"0 0 196 196\">\n\t\t<path xmlns=\"http://www.w3.org/2000/svg\" stroke-width=\"2px\" stroke-dasharray=\"1\" stroke-dashoffset=\"1\" pathLength=\"1\" stroke-linecap=\"square\" d=\"M195.5,98c0,53.8-43.7,97.5-97.5,97.5S0.5,151.8,0.5,98S44.2,0.5,98,0.5S195.5,44.2,195.5,98z\"/>\n\t</svg>\n\t<svg class=\"icon icon--play\" ng-if=\"!playing\"><use xlink:href=\"#play\"></use></svg>\n\t<svg class=\"icon icon--play\" ng-if=\"playing\"><use xlink:href=\"#pause\"></use></svg>\n</div><div class=\"btn btn--pinterest\" ng-click=\"onPin()\" ng-if=\"onPin\">\n<svg class=\"icon icon--pinterest\"><use xlink:href=\"#pinterest\"></use></svg>\n</div>\n<div class=\"btn btn--wishlist\" ng-class=\"{ active: wishlistActive, activated: wishlistActivated, deactivated: wishlistDeactivated }\" ng-click=\"onClickWishlist($event)\">\n\t<svg class=\"icon icon--wishlist\" ng-if=\"!wishlistActive\"><use xlink:href=\"#wishlist\"></use></svg>\n\t<svg class=\"icon icon--wishlist\" ng-if=\"wishlistActive\"><use xlink:href=\"#wishlist-added\"></use></svg>\n</div>";
    this.scope = {
      item: '=?video'
    };
  }

  _createClass(VideoDirective, [{
    key: "link",
    value: function link(scope, element, attributes, controller) {
      var _this = this;

      var node = element[0];
      var video = node.querySelector('video');

      if (video) {
        var pageTitle = document.title;

        scope.onPin = function () {
          var pin = {
            url: window.location.href,
            media: video.poster,
            description: video.title || pageTitle
          }; // console.log('VideoDirective.onPin', pin);

          PinUtils.pinOne(pin);
        };
      }

      var progress = node.querySelector('.icon--play-progress path');
      scope.item = scope.item || {};

      scope.onOverlay = function () {
        if (video) {
          if (video.paused) {
            video.play();
          } else {
            video.pause();
          }
        }
      };

      var onPlay = function onPlay() {
        _this.$timeout(function () {
          scope.playing = true;
        });
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
        });

        event.preventDefault();
        event.stopPropagation();
      };

      if (video) {
        video.addEventListener('play', onPlay);
        video.addEventListener('pause', onPause);
        video.addEventListener('ended', onEnded);
        video.addEventListener('timeupdate', onTimeUpdate);
      }

      element.on('$destroy', function () {
        if (video) {
          video.removeEventListener('play', onPlay);
          video.removeEventListener('pause', onPause);
          video.removeEventListener('ended', onEnded);
          video.removeEventListener('timeupdate', onTimeUpdate);
        }
      });
    }
  }], [{
    key: "factory",
    value: function factory($timeout, WishlistService) {
      return new VideoDirective($timeout, WishlistService);
    }
  }]);

  return VideoDirective;
}();

exports.default = VideoDirective;
VideoDirective.factory.$inject = ['$timeout', 'WishlistService'];

},{}],219:[function(require,module,exports){
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
var WishlistDirective =
/*#__PURE__*/
function () {
  function WishlistDirective(ApiService) {
    _classCallCheck(this, WishlistDirective);

    this.wishlistService = WishlistService;
    this.restrict = 'E';
    this.scope = {
      item: '='
    };
    this.template = "<div class=\"btn btn--wishlist\" ng-class=\"{ added: item.added }\" ng-click=\"onWishlist()\">\n\t\t\t\t<svg class=\"icon icon--wishlist\" ng-if=\"!item.added\"><use xlink:href=\"#wishlist\"></use></svg>\n\t\t\t\t<svg class=\"icon icon--wishlist\" ng-if=\"item.added\"><use xlink:href=\"#wishlist-added\"></use></svg>\n\t\t\t</div>";
  }

  _createClass(WishlistDirective, [{
    key: "link",
    value: function link(scope, element, attributes, controller) {
      var _this = this;

      var node = element[0];
      scope.item = scope.item || {};

      scope.onWishlist = function () {
        _this.wishlistService.toggle(scope.item).then(function (item) {
          Object.assign(scope.item, item);
        }, function (error) {
          return console.log(error);
        });
      };

      element.on('$destroy', function () {});
    }
  }], [{
    key: "factory",
    value: function factory(WishlistService) {
      return new WishlistDirective(WishlistService);
    }
  }]);

  return WishlistDirective;
}();

exports.default = WishlistDirective;
WishlistDirective.factory.$inject = ['WishlistService'];

},{}],220:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FaqCtrl =
/*#__PURE__*/
function () {
  function FaqCtrl($scope, $timeout, DomService, ApiService) {
    var _this = this;

    _classCallCheck(this, FaqCtrl);

    this.$scope = $scope;
    this.$timeout = $timeout;
    this.domService = DomService;
    this.apiService = ApiService;
    this.faqCategories = window.faqCategories || []; // eliminare!
    //this.faqCategories.forEach(x => x.items.forEach(i => Math.random() > 0.5 ? delete i.url : null));
    //

    this.filteredFaqCategories = this.faqCategories.slice();
    this.flags = {};
    this.unsubscribe = new _rxjs.Subject();
    $scope.$watch('$viewContentLoaded', function () {
      _this.search$().pipe((0, _operators.takeUntil)(_this.unsubscribe)).subscribe(function (filteredFaqCategories) {
        _this.$timeout(function () {
          _this.filteredFaqCategories = [];

          _this.$timeout(function () {
            _this.filteredFaqCategories = filteredFaqCategories;
          }, 50);
        });
      });
    });
    $scope.$on('destroy', function () {
      console.log('destroy');

      _this.unsubscribe.next();

      _this.unsubscribe.complete();
    });
  }

  _createClass(FaqCtrl, [{
    key: "isOpen",
    value: function isOpen(id) {
      return this.flags[id];
    }
  }, {
    key: "toggle",
    value: function toggle(id) {
      var flag = !this.flags[id];
      var node = document.querySelector("#faq--".concat(id, " > .group--content"));

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
    }
  }, {
    key: "navTo",
    value: function navTo(category, event) {
      var node = document.querySelector("#".concat(category.slug));
      var top = this.domService.scrollTop + node.getBoundingClientRect().top - 100;
      window.scroll({
        top: top,
        left: 0,
        behavior: 'smooth'
      });
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }, {
    key: "search$",
    value: function search$() {
      var _this2 = this;

      var node = document.querySelector('.control--search');
      return (0, _rxjs.fromEvent)(node, 'input').pipe((0, _operators.debounceTime)(1000), (0, _operators.map)(function (event) {
        return event.target.value.toLowerCase();
      }), (0, _operators.map)(function (query) {
        _this2.query = query;

        _this2.faqCategories.forEach(function (x) {
          return x.items.forEach(function (i) {
            return i.opened = false;
          });
        });

        if (query !== '') {
          var filteredFaqCategories = _this2.faqCategories.map(function (x) {
            return Object.assign({}, x);
          }).filter(function (category) {
            var has = false;
            var items = category.items.filter(function (item) {
              var hasTitle = item.title.toLowerCase().indexOf(query) !== -1;
              var hasAbstract = item.abstr.toLowerCase().indexOf(query) !== -1;
              item.opened = hasAbstract;
              _this2.flags[item.id] = item.opened;
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
          _this2.flags = {};
          return _this2.faqCategories.slice();
        }
      }), (0, _operators.shareReplay)());
    }
  }]);

  return FaqCtrl;
}();

FaqCtrl.$inject = ['$scope', '$timeout', 'DomService', 'ApiService'];
var _default = FaqCtrl;
exports.default = _default;

},{"rxjs":1,"rxjs/operators":197}],221:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageWithFeatures = ImageWithFeatures;

/* jshint esversion: 6 */

/* global window, document, angular, Swiper, TweenMax, TimelineMax */
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

},{}],222:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotInFilter = NotInFilter;

/* jshint esversion: 6 */

/* global window, document, angular, Swiper, TweenMax, TimelineMax */
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

},{}],223:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TrustedFilter = TrustedFilter;

/* jshint esversion: 6 */

/* global window, document, angular, Swiper, TweenMax, TimelineMax */
function TrustedFilter($sce) {
  return function (url) {
    return $sce.trustAsResourceUrl(url);
  };
}

},{}],224:[function(require,module,exports){
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
var ControlMessagesDirective =
/*#__PURE__*/
function () {
  function ControlMessagesDirective() {
    _classCallCheck(this, ControlMessagesDirective);

    this.restrict = 'E';
    this.templateUrl = 'templates/forms/messages.html';
    this.transclude = {
      'message': '?messageItems'
    };
  }

  _createClass(ControlMessagesDirective, [{
    key: "link",
    value: function link(scope, element, attributes, model) {}
  }], [{
    key: "factory",
    value: function factory() {
      return new ControlMessagesDirective();
    }
  }]);

  return ControlMessagesDirective;
}();

exports.default = ControlMessagesDirective;
ControlMessagesDirective.factory.$inject = [];

},{}],225:[function(require,module,exports){
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
var formatLabel = function formatLabel() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var prepend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var expression = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
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

    _classCallCheck(this, ControlDirective);

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

  _createClass(ControlDirective, [{
    key: "linkMethod",
    value: function linkMethod(scope, element, attributes, controller, transclude) {
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
    }
  }, {
    key: "onError",
    value: function onError(element) {
      var _this3 = this;

      errorElements.push(element);

      if (to) {
        clearTimeout(to);
      }

      to = setTimeout(function () {
        if (errorElements.length) {
          var top = errorElements.reduce(function (previous, current, index, array) {
            var node = current[0];
            return Math.min(previous, node.getBoundingClientRect().top);
          }, Number.POSITIVE_INFINITY);
          window.scroll({
            top: _this3.domService.scrollTop + top - 100,
            left: 0,
            behavior: 'smooth'
          });
        }

        errorElements = [];
      }, 100);
    }
  }, {
    key: "link",
    value: function link(scope, element, attributes, controller) {}
  }], [{
    key: "factory",
    value: function factory($parse, DomService) {
      return new ControlDirective($parse, DomService);
    }
  }]);

  return ControlDirective;
}();

exports.default = ControlDirective;
ControlDirective.factory.$inject = ['$parse', 'DomService'];

},{}],226:[function(require,module,exports){
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
var ValidateDirective =
/*#__PURE__*/
function () {
  function ValidateDirective($filter) {
    _classCallCheck(this, ValidateDirective);

    this.$filter = $filter;
    this.require = 'ngModel';
  }

  _createClass(ValidateDirective, [{
    key: "link",
    value: function link(scope, element, attributes, model) {
      var type = attributes.validate;
      var format = attributes.format || '';
      var precision = attributes.precision || 2;
      var focus = false; // console.log('validate', type);

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
        focus = true;

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
        focus = false;
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
    }
  }], [{
    key: "factory",
    value: function factory($filter) {
      return new ValidateDirective($filter);
    }
  }]);

  return ValidateDirective;
}();

exports.default = ValidateDirective;
ValidateDirective.factory.$inject = ['$filter'];

},{}],227:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* jshint esversion: 6 */

/* global window, document, angular, TweenMax, TimelineMax */
var MoodboardDropdownDirective =
/*#__PURE__*/
function () {
  function MoodboardDropdownDirective($compile) {
    _classCallCheck(this, MoodboardDropdownDirective);

    this.$compile = $compile;
    this.restrict = 'A';
    this.template = "\n<span has-dropdown>\n\t<span class=\"dropdown\">\n\t\t<ul class=\"nav nav--select\">\n\t\t\t<li ng-repeat=\"item in filter.options track by $index\" ng-class=\"{ active: filter.value == item.value, disabled: item.disabled }\">\n\t\t\t\t<span class=\"option\" ng-class=\"{ 'option--picture': item.image }\" ng-click=\"setFilter(item, filter)\">\n\t\t\t\t\t<img ng-src=\"{{item.image}}\" ng-if=\"item.image\" />\n\t\t\t\t\t<span ng-bind=\"item.label\"></span>\n\t\t\t\t</span>\n\t\t\t</li>\n\t\t</ul>\n\t</span>\n\t<span class=\"moodboard__value\">{{filter.placeholder}}</span>\n</span>\n"; // this.require = 'ngModel';

    this.scope = {
      filter: '=?moodboardDropdown'
    };
  }

  _createClass(MoodboardDropdownDirective, [{
    key: "link",
    value: function link(scope, element, attributes, controller) {
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
      };

      scope.removeFilter = function (filter) {
        _this.setFilter(null, filter);
      };

      element.on('$destroy', function () {});
    }
  }], [{
    key: "factory",
    value: function factory($compile) {
      return new MoodboardDropdownDirective($compile);
    }
  }]);

  return MoodboardDropdownDirective;
}();

exports.default = MoodboardDropdownDirective;
MoodboardDropdownDirective.factory.$inject = ['$compile'];

},{}],228:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* jshint esversion: 6 */

/* global window, document, angular, MoodboardSearch, TweenMax, TimelineMax */
var MoodboardSearchDirective =
/*#__PURE__*/
function () {
  function MoodboardSearchDirective($compile) {
    _classCallCheck(this, MoodboardSearchDirective);

    this.$compile = $compile;
    this.restrict = 'A';
    this.scope = {
      filters: '=moodboardSearch',
      model: '=model'
    };
  }

  _createClass(MoodboardSearchDirective, [{
    key: "link",
    value: function link(scope, element, attributes, controller) {
      scope.filters = scope.filters || {};
      var node = element[0];
      var html = node.innerText;
      var keys = Object.keys(scope.filters);
      keys.forEach(function (x) {
        // console.log(x);
        html = html.replace("$".concat(x, "$"), "<span class=\"moodboard__dropdown ".concat(x, "\" moodboard-dropdown=\"filters.").concat(x, "\"></span>"));
      }); // console.log('MoodboardSearchDirective', html);

      node.innerHTML = html;
      this.$compile(element.contents())(scope);
      element.on('$destroy', function () {});
    }
  }], [{
    key: "factory",
    value: function factory($compile) {
      return new MoodboardSearchDirective($compile);
    }
  }]);

  return MoodboardSearchDirective;
}();

exports.default = MoodboardSearchDirective;
MoodboardSearchDirective.factory.$inject = ['$compile'];

},{}],229:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ITEMS_PER_PAGE = exports.MOOD_TYPES = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* jshint esversion: 6 */

/* global window, document, angular, Swiper, TweenMax, TimelineMax */
var MOOD_TYPES = Object.freeze({
  Tile: 1,
  Horizontal: 2,
  Vertical: 3,
  Card: 4
});
exports.MOOD_TYPES = MOOD_TYPES;
var ITEMS_PER_PAGE = 20;
exports.ITEMS_PER_PAGE = ITEMS_PER_PAGE;

var MoodboardCtrl =
/*#__PURE__*/
function () {
  function MoodboardCtrl($scope, $timeout, LocationService, ApiService) {
    _classCallCheck(this, MoodboardCtrl);

    this.$scope = $scope;
    this.$timeout = $timeout;
    this.locationService = LocationService;
    this.apiService = ApiService;
    this.filters = window.filters || {};
    this.filteredItems = [];
    this.moodTypes = MOOD_TYPES;
    this.deserializeFilters();
    this.applyFilters();
  }

  _createClass(MoodboardCtrl, [{
    key: "deserializeFilters",
    value: function deserializeFilters() {
      var _this = this;

      var locationFilters = this.locationService.deserialize('filters') || {}; // console.log('MoodboardCtrl.deserializeFilters', filters);

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
    }
  }, {
    key: "serializeFilters",
    value: function serializeFilters() {
      var _this2 = this;

      var filters = {};
      Object.keys(this.filters).forEach(function (x) {
        var filter = _this2.filters[x];

        if (filter.value !== null) {
          filters[x] = filter.value;
        }
      }); // console.log('MoodboardCtrl.serializeFilters', filters);

      this.locationService.serialize('filters', filters);
      return filters;
    }
  }, {
    key: "applyFilters",
    value: function applyFilters(item, value) {
      var _this3 = this;

      // console.log('MoodboardCtrl.applyFilters', this.filters);
      this.serializeFilters();
      var filters = Object.keys(this.filters).map(function (x) {
        return _this3.filters[x];
      }).filter(function (x) {
        return x.value !== null;
      });
      this.apiService.moodboard.filter(filters).subscribe(function (success) {
        var items = success.data;
        /* FAKE */

        while (items.length < 200) {
          items = items.concat(items);
        }

        items.sort(function (a, b) {
          return Math.random() > 0.5 ? 1 : -1;
        });
        /* FAKE */

        _this3.filteredItems = [];
        _this3.visibleItems = [];
        _this3.maxItems = ITEMS_PER_PAGE;

        _this3.$timeout(function () {
          _this3.filteredItems = items;
          _this3.visibleItems = items.slice(0, _this3.maxItems);
        }, 50);
      }, function (error) {
        return console.log('MoodboardCtrl.applyFilters.error', error);
      });
    }
  }, {
    key: "onScroll",
    value: function onScroll(event) {
      var _this4 = this;

      if (event.rect.bottom < event.windowRect.bottom) {
        // console.log('more!');
        if (!this.busy && this.maxItems < this.filteredItems.length) {
          this.$timeout(function () {
            _this4.busy = true;

            _this4.$timeout(function () {
              _this4.maxItems += ITEMS_PER_PAGE;
              _this4.visibleItems = _this4.filteredItems.slice(0, _this4.maxItems);
              _this4.busy = false; // console.log(this.visibleItems.length);
            }, 1000);
          }, 0);
        }
      }
    }
  }]);

  return MoodboardCtrl;
}();

MoodboardCtrl.$inject = ['$scope', '$timeout', 'LocationService', 'ApiService'];
var _default = MoodboardCtrl;
exports.default = _default;

},{}],230:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ITEMS_PER_PAGE = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* jshint esversion: 6 */

/* global window, document, angular, Swiper, TweenMax, TimelineMax */
var ITEMS_PER_PAGE = 9;
exports.ITEMS_PER_PAGE = ITEMS_PER_PAGE;

var NewsCtrl =
/*#__PURE__*/
function () {
  function NewsCtrl($scope, $timeout, LocationService) {
    _classCallCheck(this, NewsCtrl);

    this.$scope = $scope;
    this.$timeout = $timeout;
    this.locationService = LocationService;
    this.filters = window.filters || {};
    this.news = window.news || [];
    this.filteredItems = []; // !!! FAKE

    while (this.news.length < 100) {
      this.news = this.news.concat(this.news);
    } // !!! FAKE


    this.deserializeFilters();
    this.applyFilters();
  }

  _createClass(NewsCtrl, [{
    key: "deserializeFilters",
    value: function deserializeFilters() {
      var _this = this;

      var locationFilters = this.locationService.deserialize('filters') || {};
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
    }
  }, {
    key: "serializeFilters",
    value: function serializeFilters() {
      var _this2 = this;

      var filters = {};
      Object.keys(this.filters).forEach(function (x) {
        var filter = _this2.filters[x];

        if (filter.value !== null) {
          filters[x] = filter.value;
        }
      }); // console.log('ReferenceCtrl.serializeFilters', filters);

      this.locationService.serialize('filters', filters);
      return filters;
    }
  }, {
    key: "applyFilters",
    value: function applyFilters() {
      var _this3 = this;

      this.serializeFilters();
      var filters = Object.keys(this.filters).map(function (x) {
        return _this3.filters[x];
      }).filter(function (x) {
        return x.value !== null;
      });
      var filteredItems = this.news.slice(); // console.log(filteredItems);

      if (filters.length) {
        filteredItems = filteredItems.filter(function (reference) {
          var has = true;
          filters.forEach(function (filter) {
            has = has && filter.doFilter(reference, filter.value);
          });
          return has;
        });
      } // console.log(filteredItems, filters);


      this.filteredItems = [];
      this.visibleItems = [];
      this.maxItems = ITEMS_PER_PAGE;
      this.$timeout(function () {
        _this3.filteredItems = filteredItems;
        _this3.visibleItems = filteredItems.slice(0, _this3.maxItems);

        _this3.updateFilterStates(filteredItems); // delayer for image update

      }, 50);
    }
  }, {
    key: "updateFilterStates",
    value: function updateFilterStates(news) {
      var _this4 = this;

      // console.log('updateFilterStates', news);
      Object.keys(this.filters).forEach(function (x) {
        var filter = _this4.filters[x];
        filter.options.forEach(function (option) {
          var has = false;

          if (option.value) {
            var i = 0;

            while (i < news.length && !has) {
              var reference = news[i];
              has = filter.doFilter(reference, option.value);
              i++;
            }
          } else {
            has = true;
          }

          option.disabled = !has;
        }); // console.log(filter.options);
      });
    }
  }, {
    key: "setFilter",
    value: function setFilter(item, filter) {
      item = item || filter.options[0];
      filter.value = item.value;
      filter.placeholder = item.label;
      this.applyFilters();
    }
  }, {
    key: "removeFilter",
    value: function removeFilter(filter) {
      this.setFilter(null, filter);
    }
  }, {
    key: "onScroll",
    value: function onScroll(event) {
      var _this5 = this;

      if (event.rect.bottom < event.windowRect.bottom) {
        // console.log('more!');
        if (!this.busy && this.maxItems < this.filteredItems.length) {
          this.$timeout(function () {
            _this5.busy = true;

            _this5.$timeout(function () {
              _this5.maxItems += ITEMS_PER_PAGE;
              _this5.visibleItems = _this5.filteredItems.slice(0, _this5.maxItems);
              _this5.busy = false; // console.log(this.visibleItems.length);
            }, 1000);
          }, 0);
        }
      }
    }
  }]);

  return NewsCtrl;
}();

NewsCtrl.$inject = ['$scope', '$timeout', 'LocationService'];
var _default = NewsCtrl;
exports.default = _default;

},{}],231:[function(require,module,exports){
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
var ReferencesCtrl =
/*#__PURE__*/
function () {
  function ReferencesCtrl($scope, $timeout, LocationService) {
    _classCallCheck(this, ReferencesCtrl);

    this.$scope = $scope;
    this.$timeout = $timeout;
    this.locationService = LocationService;
    this.filters = window.filters || {};
    this.references = window.references || [];
    this.deserializeFilters();
    this.applyFilters();
  }

  _createClass(ReferencesCtrl, [{
    key: "deserializeFilters",
    value: function deserializeFilters() {
      var _this = this;

      var locationFilters = this.locationService.deserialize('filters') || {};
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
    }
  }, {
    key: "serializeFilters",
    value: function serializeFilters() {
      var _this2 = this;

      var filters = {};
      Object.keys(this.filters).forEach(function (x) {
        var filter = _this2.filters[x];

        if (filter.value !== null) {
          filters[x] = filter.value;
        }
      }); // console.log('ReferenceCtrl.serializeFilters', filters);

      this.locationService.serialize('filters', filters);
      return filters;
    }
  }, {
    key: "applyFilters",
    value: function applyFilters() {
      var _this3 = this;

      this.serializeFilters();
      var filters = Object.keys(this.filters).map(function (x) {
        return _this3.filters[x];
      }).filter(function (x) {
        return x.value !== null;
      });
      var filteredReferences = this.references.slice(); // console.log(filteredReferences);

      if (filters.length) {
        filteredReferences = filteredReferences.filter(function (reference) {
          var has = true;
          filters.forEach(function (filter) {
            has = has && filter.doFilter(reference, filter.value);
          });
          return has;
        });
      } // console.log(filteredReferences, filters);


      this.filteredReferences = [];
      this.$timeout(function () {
        _this3.filteredReferences = filteredReferences;

        _this3.updateFilterStates(filteredReferences); // delayer for image update

      }, 50);
    }
  }, {
    key: "updateFilterStates",
    value: function updateFilterStates(references) {
      var _this4 = this;

      // console.log('updateFilterStates', references);
      Object.keys(this.filters).forEach(function (x) {
        var filter = _this4.filters[x];
        filter.options.forEach(function (option) {
          var has = false;

          if (option.value) {
            var i = 0;

            while (i < references.length && !has) {
              var reference = references[i];
              has = filter.doFilter(reference, option.value);
              i++;
            }
          } else {
            has = true;
          }

          option.disabled = !has;
        }); // console.log(filter.options);
      });
    }
  }, {
    key: "setFilter",
    value: function setFilter(item, filter) {
      item = item || filter.options[0];
      filter.value = item.value;
      filter.placeholder = item.label;
      this.applyFilters();
    }
  }, {
    key: "removeFilter",
    value: function removeFilter(filter) {
      this.setFilter(null, filter);
    }
  }]);

  return ReferencesCtrl;
}();

ReferencesCtrl.$inject = ['$scope', '$timeout', 'LocationService'];
var _default = ReferencesCtrl;
exports.default = _default;

},{}],232:[function(require,module,exports){
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
var RootCtrl =
/*#__PURE__*/
function () {
  function RootCtrl($scope, $compile, $location, $timeout, DomService, ApiService) {
    _classCallCheck(this, RootCtrl);

    this.$scope = $scope;
    this.$compile = $compile;
    this.$location = $location;
    this.$timeout = $timeout;
    this.domService = DomService;
    this.apiService = ApiService;
  }

  _createClass(RootCtrl, [{
    key: "onInit",
    value: function onInit(brand) {
      var _this = this;

      this.brand = brand;
      this.webglEnabled = this.domService.hasWebglSupport();
      /*
      this.domService.smoothScroll$('.page').subscribe((top) => {
      	// console.log(top);
      });
      */

      this.$scope.onScroll = function (event) {
        // console.log(event.scroll, event.intersection);
        var scrolled = event.scroll.scrollTop > 40;

        if (_this.scrolled !== scrolled) {
          _this.$timeout(function () {
            _this.scrolled = scrolled;
          });
        }
      };

      this.initCustomNavigation();
      this.$timeout(function () {
        _this.init = true;
      }, 1000);
    }
  }, {
    key: "initCustomNavigation",
    value: function initCustomNavigation() {
      var _this2 = this;

      this.$scope.$on('onNavigationShouldFetch', function (scope, _ref) {
        var title = _ref.title,
            href = _ref.href;
        console.log('onNavigationShouldFetch', title, href);
        _this2.menuOpened = false;
        _this2.menuProductOpened = false; // window.location.assign(href);
        // return;

        /*
        if (window.history && typeof window.history.pushState !== 'undefined') {
        	history.pushState(null, title, href);
        } else {
        	window.location.assign(href);
        	return;
        }
        */
        // this.$location.state({ title, href });

        _this2.$scope.$broadcast('onNavigationStart', href);

        _this2.$location.path(href);

        var wrapper = document.querySelector('[data-router-wrapper]');
        var wrapperElement = angular.element(wrapper);
        var from = document.querySelector('[data-router-view]');
        var headerMenu = document.querySelector('.header__menu');
        var fromElement = angular.element(from);

        var transitionOut = function transitionOut(from, done) {
          TweenMax.to(from, 0.35, {
            opacity: 0,
            overwrite: 'all',
            onComplete: function onComplete() {
              done();
            }
          });
        };

        var transitionIn = function transitionIn(from, to, done) {
          TweenMax.set(to, {
            opacity: 0,
            minHeight: from.offsetHeight
          }); // from.remove();

          TweenMax.to(to, 0.35, {
            opacity: 1,
            delay: 0.5,
            overwrite: 'all',
            onComplete: function onComplete() {
              TweenMax.set(to, {
                minHeight: 0
              });
              done();
            }
          });
        };

        var onTransitionInDidEnd = function onTransitionInDidEnd() {
          setTimeout(function () {
            _this2.$scope.$broadcast('onNavigationEnded', href);
          }, 200);
        };

        var onTransitionOutDidEnd = function onTransitionOutDidEnd() {
          var fetchHref = href;
          var base = document.querySelector('base');
          var baseHref = base ? base.getAttribute('href') : '/';

          if (baseHref !== '/' && fetchHref.indexOf(baseHref) !== 0) {
            fetchHref = (baseHref + fetchHref).replace('//', '/');
          }

          fetch(fetchHref).then(function (response) {
            return response.text();
          }).then(function (html) {
            fromElement.remove();
            window.scrollTo(0, 0);

            _this2.$scope.$broadcast('onNavigationTransitionIn', href);
            /*
            window.scroll({
            	top: 0,
            	left: 0,
            	behavior: 'smooth'
            });
            */


            var parser = new DOMParser();
            var doc = parser.parseFromString(html, "text/html");
            var view = doc.querySelector('.view').innerHTML;
            /*
            if (window.history && typeof window.history.replaceState !== 'undefined') {
            	history.replaceState(view, title, href);
            }
            */

            var to = from.cloneNode(false);
            to.innerHTML = view;
            var toElement = angular.element(to); // const scope = element.scope();

            _this2.$compile(toElement.contents())(_this2.$scope);

            wrapperElement.append(toElement);

            _this2.$timeout(function () {
              transitionIn(from, to, onTransitionInDidEnd);
            }); // console.log('fetched');

          }).catch(function (error) {
            console.log('Failed to fetch page: ', error);
          });
        };

        transitionOut(from, onTransitionOutDidEnd);
      });
    }
  }, {
    key: "getClasses",
    value: function getClasses() {
      var classes = {};
      classes[this.brand] = true;

      if (this.init) {
        classes.init = true;
      }

      return classes;
    }
  }, {
    key: "closeNav",
    value: function closeNav() {
      var node = document.querySelector(".section--submenu.active");
      return this.onDroppedOut(node);
    }
  }, {
    key: "openNav",
    value: function openNav(nav) {
      var node = document.querySelector("#nav-".concat(nav, " .section--submenu"));
      return this.onDroppedIn(node);
    }
  }, {
    key: "toggleNav",
    value: function toggleNav(id) {
      var _this3 = this;

      this.nav = this.nav === id ? null : id;
      this.closeNav().then(function () {
        if (_this3.nav) {
          _this3.openNav(_this3.nav);
        }
      });
    }
  }, {
    key: "onDroppedOut",
    value: function onDroppedOut(node) {
      if (node) {
        TweenMax.set(node, {
          maxHeight: 0
        });
        return Promise.resolve();
      } else {
        return Promise.resolve();
      }

      return new Promise(function (resolve, reject) {
        if (node) {
          var items = [].slice.call(node.querySelectorAll('.submenu__item'));
          TweenMax.staggerTo(items.reverse(), 0.25, {
            opacity: 0,
            stagger: 0.05,
            delay: 0.0,
            onComplete: function onComplete() {
              TweenMax.to(node, 0.2, {
                maxHeight: 0,
                ease: Expo.easeOut,
                delay: 0.0,
                onComplete: function onComplete() {
                  resolve();
                }
              });
            }
          });
        } else {
          resolve();
        }
      });
    }
  }, {
    key: "onDroppedIn",
    value: function onDroppedIn(node) {
      return new Promise(function (resolve, reject) {
        var items = [].slice.call(node.querySelectorAll('.submenu__item'));
        TweenMax.set(items, {
          opacity: 0
        });
        TweenMax.set(node, {
          maxHeight: 0
        });
        TweenMax.to(node, 0.3, {
          maxHeight: '100vh',
          ease: Expo.easeOut,
          delay: 0.0,
          overwrite: 'all',
          onComplete: function onComplete() {
            TweenMax.staggerTo(items, 0.35, {
              opacity: 1,
              stagger: 0.07,
              delay: 0.0,
              onComplete: function onComplete() {}
            });
          }
        });
      });
    }
  }, {
    key: "toggleBrand",
    value: function toggleBrand(event) {
      var brands = ['atlas-concorde', 'atlas-concorde-solution', 'atlas-concorde-usa', 'atlas-concorde-russia'];
      var i = (brands.indexOf(this.brand) + 1) % brands.length;
      this.brand = brands[i];
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }, {
    key: "pad",
    value: function pad(index) {
      return index < 10 ? '0' + index : index;
    }
  }, {
    key: "hasHash",
    value: function hasHash(hash) {
      return window.location.hash.indexOf(hash) !== -1;
    }
  }]);

  return RootCtrl;
}();

RootCtrl.$inject = ['$scope', '$compile', '$location', '$timeout', 'DomService', 'ApiService'];
var _default = RootCtrl;
exports.default = _default;

},{}],233:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rxjs = require("rxjs");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var API_HREF = window.location.port === '6001' ? 'https://atlasconcorde.wslabs.it' : '';

var ApiService =
/*#__PURE__*/
function () {
  function ApiService($http) {
    _classCallCheck(this, ApiService);

    this.http = $http;
    var api = {
      advancedSearch: {
        get: function get() {
          return (0, _rxjs.from)($http.get('data/advanced-search.json')); // return from($http.get(API_HREF + '/api/advanced-search/json'));
        }
      },
      wishlist: {
        toggle: function toggle(item) {
          item.added = !item.added;
          return Promise.resolve(item);
        }
      },
      moodboard: {
        filter: function filter(filters) {
          // return $http.post(API_HREF + '/api/moodboard/json', filters);
          return (0, _rxjs.from)($http.get('data/moodboard.json'));
        }
      },
      storeLocator: {
        all: function all() {
          return $http.get(API_HREF + '/api/store/json'); // return $http.get('data/store-locator.json');
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

},{"rxjs":1}],234:[function(require,module,exports){
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DomService =
/*#__PURE__*/
function () {
  function DomService() {
    _classCallCheck(this, DomService);
  }

  _createClass(DomService, [{
    key: "hasWebglSupport",
    value: function hasWebglSupport() {
      if (this.isIE()) {
        return false;
      }

      if (!this.hasWebgl()) {
        return false;
      }

      return true;
    }
  }, {
    key: "isIE",
    value: function isIE() {
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
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
      }

      var edge = ua.indexOf('Edge/');

      if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
      } // other browser


      return false;
    }
  }, {
    key: "hasWebgl",
    value: function hasWebgl() {
      var gl,
          debugInfo,
          vendor,
          renderer,
          has = false;

      try {
        var canvas = document.createElement('canvas');

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

      console.log("WebGLCapabilities debugInfo: ".concat(debugInfo, " vendor: ").concat(vendor, " renderer: ").concat(renderer, " "));
      return has;
    }
  }, {
    key: "getOuterHeight",
    value: function getOuterHeight(node) {
      var height = node.clientHeight;
      var computedStyle = window.getComputedStyle(node);
      height += parseInt(computedStyle.marginTop, 10);
      height += parseInt(computedStyle.marginBottom, 10);
      height += parseInt(computedStyle.borderTopWidth, 10);
      height += parseInt(computedStyle.borderBottomWidth, 10);
      return height;
    }
  }, {
    key: "getOuterWidth",
    value: function getOuterWidth(node) {
      var width = node.clientWidth;
      var computedStyle = window.getComputedStyle(node);
      width += parseInt(computedStyle.marginLeft, 10);
      width += parseInt(computedStyle.marginRight, 10);
      width += parseInt(computedStyle.borderLeftWidth, 10);
      width += parseInt(computedStyle.borderRightWidth, 10);
      return width;
    }
  }, {
    key: "raf$",
    value: function raf$() {
      return (0, _rxjs.range)(0, Number.POSITIVE_INFINITY, _animationFrame.animationFrame).pipe((0, _operators.shareReplay)());
    }
  }, {
    key: "rafAndRect$",
    value: function rafAndRect$() {
      return (0, _rxjs.combineLatest)(this.raf$(), this.windowRect$()).pipe((0, _operators.shareReplay)());
    }
  }, {
    key: "windowRect$",
    value: function windowRect$() {
      var windowRect = new _rect.default({
        width: window.innerWidth,
        height: window.innerHeight
      });
      return (0, _rxjs.fromEvent)(window, 'resize').pipe((0, _operators.map)(function (originalEvent) {
        windowRect.width = window.innerWidth;
        windowRect.height = window.innerHeight;
        return windowRect;
      }), (0, _operators.startWith)(windowRect), (0, _operators.shareReplay)());
    }
  }, {
    key: "scroll$",
    value: function scroll$() {
      var target = window;
      var event = {
        /*
        top: target.offsetTop || 0,
        left: target.offsetLeft || 0,
        width: target.offsetWidth || target.innerWidth,
        height: target.offsetHeight || target.innerHeight,
        */
        scrollTop: DomService.getScrollTop(target),
        scrollLeft: DomService.getScrollLeft(target),
        originalEvent: null
      };
      return (0, _rxjs.fromEvent)(target, 'scroll').pipe((0, _operators.auditTime)(33), // 30 fps
      (0, _operators.map)(function (originalEvent) {
        /*
        event.top = target.offsetTop || 0;
        event.left = target.offsetLeft || 0;
        event.width = target.offsetWidth || target.innerWidth;
        event.height = target.offsetHeight || target.innerHeight;
        */
        event.scrollTop = DomService.getScrollTop(target);
        event.scrollLeft = DomService.getScrollLeft(target);
        event.originalEvent = originalEvent;
        return event;
      }), (0, _operators.startWith)(event), (0, _operators.shareReplay)());
    }
  }, {
    key: "scrollAndRect$",
    value: function scrollAndRect$() {
      return (0, _rxjs.combineLatest)(this.scroll$(), this.windowRect$()).pipe((0, _operators.shareReplay)());
    }
  }, {
    key: "smoothScroll$",
    value: function smoothScroll$(selector) {
      var _this = this;

      var friction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
      var body = document.querySelector('body');
      var node = document.querySelector(selector); // const outerHeight = this.getOuterHeight(node);

      var down = false;
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

      return this.raf$().pipe((0, _operators.map)(function () {
        var outerHeight = _this.getOuterHeight(node); // console.log(window.DocumentTouch);
        // console.log(document instanceof DocumentTouch);
        // console.log(navigator.msMaxTouchPoints);


        if (body.offsetHeight !== outerHeight) {
          // margin ?
          body.style = "height: ".concat(outerHeight, "px");
        }

        var nodeTop = node.top || 0;
        var top = down ? -_this.scrollTop : Math.round((nodeTop + (-_this.scrollTop - nodeTop) / friction) * 100) / 100;

        if (node.top !== top) {
          node.top = top;
          node.style = "position: fixed; width: 100%; transform: translateY(".concat(top, "px)");
          return top;
        } else {
          return null;
        }
      }), (0, _operators.filter)(function (x) {
        return x !== null;
      }), (0, _operators.shareReplay)());
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

  }, {
    key: "rafIntersection$",
    value: function rafIntersection$(node) {
      return this.rafAndRect$().pipe((0, _operators.map)(function (datas) {
        // const scrollTop = datas[0];
        var windowRect = datas[1];

        var rect = _rect.default.fromNode(node);

        var intersection = rect.intersection(windowRect);
        return {
          scroll: datas[0],
          windowRect: datas[1],
          rect: rect,
          intersection: intersection
        };
      }));
    }
  }, {
    key: "scrollIntersection$",
    value: function scrollIntersection$(node) {
      return this.scrollAndRect$().pipe((0, _operators.map)(function (datas) {
        // const scrollTop = datas[0];
        var windowRect = datas[1];

        var rect = _rect.default.fromNode(node);

        var intersection = rect.intersection(windowRect);
        return {
          scroll: datas[0],
          windowRect: datas[1],
          rect: rect,
          intersection: intersection
        };
      }));
    }
  }, {
    key: "appear$",
    value: function appear$(node) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.0;
      // -0.5
      return this.rafIntersection$(node).pipe((0, _operators.filter)(function (x) {
        return x.intersection.y > value;
      }), (0, _operators.first)());
    }
  }, {
    key: "scrollTop",
    get: function get() {
      return DomService.getScrollTop(window);
    }
  }, {
    key: "scrollLeft",
    get: function get() {
      return DomService.getScrollLeft(window);
    }
  }], [{
    key: "factory",
    value: function factory() {
      return new DomService();
    }
  }, {
    key: "getScrollTop",
    value: function getScrollTop(node) {
      return node.pageYOffset || node.scrollY || node.scrollTop || 0;
    }
  }, {
    key: "getScrollLeft",
    value: function getScrollLeft(node) {
      return node.pageXOffset || node.scrollX || node.scrollLeft || 0;
    }
  }]);

  return DomService;
}();

exports.default = DomService;
DomService.factory.$inject = [];

},{"../shared/rect":238,"rxjs":1,"rxjs/internal/scheduler/animationFrame":160,"rxjs/operators":197}],235:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* jshint esversion: 6 */
var WishlistService =
/*#__PURE__*/
function () {
  function WishlistService(PromiseService, StorageService, ApiService) {
    _classCallCheck(this, WishlistService);

    this.promise = PromiseService;
    this.storage = StorageService;
    this.api = ApiService; // console.log('WishlistService', this.storage);
  }

  _createClass(WishlistService, [{
    key: "indexOf",
    value: function indexOf(item) {
      var index = this.wishlist.reduce(function (p, c, i) {
        if (p === -1) {
          return c.id === item.id && c.coId === item.coId ? i : p;
        } else {
          return p;
        }
      }, -1);
      return index;
    }
  }, {
    key: "has",
    value: function has(item) {
      return this.indexOf(item) !== -1;
    }
  }, {
    key: "add",
    value: function add(item) {
      var _this = this;

      return this.promise.make(function (promise) {
        var wishlist = _this.wishlist;
        wishlist.push({
          id: item.id,
          coId: item.coId
        });
        _this.wishlist = wishlist;
        promise.resolve(true);
      });
    }
  }, {
    key: "remove",
    value: function remove(item) {
      var _this2 = this;

      return this.promise.make(function (promise) {
        var index = _this2.indexOf(item);

        var wishlist = _this2.wishlist;
        wishlist.splice(index, 1);
        _this2.wishlist = wishlist;
        promise.resolve(false);
      });
    }
  }, {
    key: "toggle",
    value: function toggle(item) {
      if (this.has(item)) {
        return this.remove(item);
      } else {
        return this.add(item);
      }
    }
  }, {
    key: "wishlist",
    get: function get() {
      if (!this.wishlist_) {
        var wishlist = this.storage.get('wishlist');
        this.wishlist_ = wishlist || [];
      }

      return this.wishlist_;
    },
    set: function set(wishlist) {
      this.wishlist_ = wishlist || [];
      this.storage.set('wishlist', this.wishlist_);
    }
  }], [{
    key: "factory",
    value: function factory(PromiseService, StorageService, ApiService) {
      return new WishlistService(PromiseService, StorageService, ApiService);
    }
  }]);

  return WishlistService;
}();

exports.default = WishlistService;
WishlistService.factory.$inject = ['PromiseService', 'LocalStorageService', 'ApiService'];

},{}],236:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* jshint esversion: 6 */

/* global angular */
var LocationService =
/*#__PURE__*/
function () {
  function LocationService($location) {
    _classCallCheck(this, LocationService);

    this.$location = $location;
  }

  _createClass(LocationService, [{
    key: "get",
    value: function get(key) {
      return this.$location.search()[key];
    }
  }, {
    key: "set",
    value: function set(keyOrValue, value) {
      if (typeof keyOrValue === 'string') {
        this.$location.search(keyOrValue, value).replace();
      } else {
        this.$location.search(keyOrValue).replace();
      }
    }
  }, {
    key: "deserialize",
    value: function deserialize(key) {
      var value = null;
      var serialized = this.get('q'); // console.log(serialized);

      if (serialized) {
        var json = window.atob(serialized);
        value = JSON.parse(json);
      } // console.log(value);


      if (key && value) {
        value = value[key];
      }

      return value || null;
    }
  }, {
    key: "serialize",
    value: function serialize(keyOrValue, value) {
      var serialized = null;
      var q = this.deserialize() || {};

      if (typeof keyOrValue === 'string') {
        q[keyOrValue] = value;
      } else {
        q = keyOrValue;
      }

      var json = JSON.stringify(q);
      serialized = window.btoa(json);
      this.set('q', serialized);
    }
  }], [{
    key: "factory",
    value: function factory($location) {
      return new LocationService($location);
    }
  }]);

  return LocationService;
}();

exports.default = LocationService;
LocationService.factory.$inject = ['$location'];

},{}],237:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* jshint esversion: 6 */

/* global angular */
var PromiseService =
/*#__PURE__*/
function () {
  function PromiseService($q) {
    _classCallCheck(this, PromiseService);

    this.$q = $q;
  }

  _createClass(PromiseService, [{
    key: "make",
    value: function make(callback) {
      if (typeof callback !== 'function') {
        throw 'promise resolve callback missing';
      }

      var deferred = this.$q.defer();
      callback(deferred);
      return deferred.promise;
    }
  }, {
    key: "all",
    value: function all(promises) {
      return this.$q.all(promises);
    }
  }], [{
    key: "factory",
    value: function factory($q) {
      return new PromiseService($q);
    }
  }]);

  return PromiseService;
}();

exports.default = PromiseService;
PromiseService.factory.$inject = ['$q'];

},{}],238:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

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
      var dx = this.left > rect.left ? 0 : Math.abs(rect.left - this.left);
      var dy = this.top > rect.top ? 0 : Math.abs(rect.top - this.top);
      var x = dx ? 1 - dx / this.width : (rect.left + rect.width - this.left) / this.width;
      var y = dy ? 1 - dy / this.height : (rect.top + rect.height - this.top) / this.height;
      return {
        x: x,
        y: y,
        center: center
      };
    }
  }, {
    key: "intersection_",
    value: function intersection_(rect) {
      var center = {
        x: (this.center.x - rect.center.x) / (rect.width / 2),
        y: (this.center.y - rect.center.y) / (rect.height / 2)
      };

      if (this.intersect(rect)) {
        var dx = this.left > rect.left ? 0 : Math.abs(rect.left - this.left);
        var dy = this.top > rect.top ? 0 : Math.abs(rect.top - this.top);
        var x = dx ? 1 - dx / this.width : (rect.left + rect.width - this.left) / this.width;
        var y = dy ? 1 - dy / this.height : (rect.top + rect.height - this.top) / this.height;
        x = (_readOnlyError("x"), Math.min(1, x));
        y = (_readOnlyError("y"), Math.min(1, y));
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

},{}],239:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FRAGMENT_SHADER = void 0;

/* jshint esversion: 6 */

/* global window, document, angular, Swiper, TweenMax, TimelineMax */
var FRAGMENT_SHADER = "\n#ifdef GL_ES\nprecision highp float;\n#endif\n\nuniform vec2 u_resolution;\nuniform vec2 u_mouse;\nuniform float u_time;\nuniform float u_pow;\nuniform float u_top;\nuniform float u_strength;\nuniform sampler2D u_texture;\nuniform vec2 u_textureResolution;\n\nfloat random(vec2 st) {\n\treturn fract(sin(dot(st.xy + cos(u_time), vec2(12.9898 , 78.233))) * (43758.5453123));\n}\n\nvoid main() {\n\tvec2 st = gl_FragCoord.xy / u_resolution.xy;\n\tfloat rr = u_resolution.x / u_resolution.y;\n\tfloat tr = u_textureResolution.x / u_textureResolution.y;\n\tif (tr > rr) {\n\t\tst.x = ((st.x - 0.5) * rr / tr) + 0.5;\n\t} else {\n\t\tst.y = ((st.y - 0.5) / rr * tr) + 0.5;\n\t}\n\tfloat top = u_top / u_resolution.y;\n\tvec2 mx = u_mouse / u_resolution;\n\tvec2 dx = vec2(cos(u_time * 0.5), sin(u_time * 0.6)) * 4.0 * u_strength;\n\n\tfloat noise = random(st) * 0.08;\n\n\tfloat c = cos((st.x + dx.x - mx.x * 0.4) * 6.0 + 2.0 * dx.y);\n\tfloat s = sin((st.y + top + dx.y - mx.y * 0.2) * 3.0 + 1.0 * dx.x);\n\tfloat b = (length(vec2(c + s, c)) + 2.0) * u_strength;\n\n\tfloat center = length(st - 0.5);\n\tvec2 sty = vec2(st.x, st.y + top);\n\tfloat scale = 0.95 * (1.0 - b * center * u_pow);\n\tvec2 stb = (sty - 0.5) * scale + 0.5;\n\n\tvec3 video = texture2D(u_texture, stb).rgb;\n\tvec3 bulge = vec3(b);\n\n\tvec3 color = vec3(0.0);\n\tcolor = vec3(video - noise);\n\t// color = vec3(video);\n\t// color = vec3(video - bulge * 0.1 - noise);\n\t// color = vec3(bulge);\n\t// color = vec3(noise);\n\t// color = vec3(center);\n\t// color = vec3(u_pow * center);\n\t// color = vec3(bulge - noise) * length(st - 0.5) * u_pow;\n\n\tgl_FragColor = vec4(color, 1.0);\n}\n";
exports.FRAGMENT_SHADER = FRAGMENT_SHADER;

},{}],240:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.State = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* jshint esversion: 6 */

/* global window, document, angular, Swiper, TweenMax, TimelineMax */
var State =
/*#__PURE__*/
function () {
  function State($timeout, $rootScope) {
    _classCallCheck(this, State);

    this.$timeout = $timeout;
    this.$rootScope = $rootScope;
    this.idle();
  }

  _createClass(State, [{
    key: "idle",
    value: function idle() {
      this.isBusy = false;
      this.isError = false;
      this.isErroring = false;
      this.isSuccess = false;
      this.isSuccessing = false;
      this.button = null;
      this.errors = [];
    }
  }, {
    key: "busy",
    value: function busy() {
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
  }, {
    key: "classes",
    value: function classes(addons) {
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
    }
  }, {
    key: "enabled",
    value: function enabled() {
      return !this.isBusy && !this.isErroring && !this.isSuccessing;
    }
  }, {
    key: "error",
    value: function error(_error) {
      var _this = this;

      console.log('State.error', _error);
      this.isBusy = false;
      this.isError = true;
      this.isErroring = true;
      this.isSuccess = false;
      this.isSuccessing = false;
      this.errors.push(_error);
      $timeout(function () {
        _this.isErroring = false;
      }, DELAY);
    }
  }, {
    key: "errorMessage",
    value: function errorMessage() {
      return this.isError ? this.errors[this.errors.length - 1] : null;
    }
  }, {
    key: "labels",
    value: function labels(addons) {
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
    }
  }, {
    key: "ready",
    value: function ready() {
      this.idle();
      this.isReady = true;
      this.$rootScope.$broadcast('$thisReady', this);
    }
  }, {
    key: "submitClass",
    value: function submitClass() {
      return {
        busy: this.isBusy,
        ready: this.isReady,
        successing: this.isSuccessing,
        success: this.isSuccess,
        errorring: this.isErroring,
        error: this.isError
      };
    }
  }, {
    key: "success",
    value: function success() {
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
    }
  }]);

  return State;
}();

exports.State = State;

var StateService =
/*#__PURE__*/
function () {
  function StateService($timeout, $rootScope) {
    _classCallCheck(this, StateService);

    this.$timeout = $timeout;
    this.$rootScope = $rootScope;
  }

  _createClass(StateService, [{
    key: "getState",
    value: function getState() {
      return new State(this.$timeout, this.$rootScope);
    }
  }], [{
    key: "factory",
    value: function factory($timeout, $rootScope) {
      return new StateService($timeout, $rootScope);
    }
  }]);

  return StateService;
}();

exports.default = StateService;
StateService.factory.$inject = ['$timeout', '$rootScope'];

},{}],241:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SessionStorageService = exports.LocalStorageService = exports.CookieService = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* jshint esversion: 6 */

/* global angular */
var TIMEOUT = 5 * 60 * 1000; // five minutes

var CookieService =
/*#__PURE__*/
function () {
  function CookieService(PromiseService) {
    _classCallCheck(this, CookieService);

    this.promise = PromiseService;
  }

  _createClass(CookieService, [{
    key: "delete",
    value: function _delete(name) {
      setter(name, '', -1);
    }
  }, {
    key: "exist",
    value: function exist(name) {
      return document.cookie.indexOf(';' + name + '=') !== -1 || document.cookie.indexOf(name + '=') === 0;
    }
  }, {
    key: "get",
    value: function get(name) {
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
    }
  }, {
    key: "on",
    value: function on(name) {
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
    }
  }, {
    key: "set",
    value: function set(name, value, days) {
      try {
        var cache = [];
        var json = JSON.stringify(value, function (key, value) {
          if (key === 'pool') {
            return;
          }

          if (_typeof(value) === 'object' && value !== null) {
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
  }, {
    key: "setter",
    value: function setter(name, value, days) {
      var expires;

      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = '; expires=' + date.toGMTString();
      } else {
        expires = '';
      }

      document.cookie = name + '=' + value + expires + '; path=/';
    }
  }], [{
    key: "factory",
    value: function factory(PromiseService) {
      return new CookieService(PromiseService);
    }
  }]);

  return CookieService;
}();

exports.CookieService = CookieService;
CookieService.factory.$inject = ['PromiseService'];

var LocalStorageService =
/*#__PURE__*/
function () {
  function LocalStorageService(PromiseService) {
    _classCallCheck(this, LocalStorageService);

    this.promise = PromiseService;
  }

  _createClass(LocalStorageService, [{
    key: "delete",
    value: function _delete(name) {
      window.localStorage.removeItem(name);
    }
  }, {
    key: "exist",
    value: function exist(name) {
      return window.localStorage[name] !== undefined;
    }
  }, {
    key: "get",
    value: function get(name) {
      var value = null;

      if (window.localStorage[name] !== undefined) {
        try {
          value = JSON.parse(window.localStorage[name]);
        } catch (e) {
          console.log('LocalStorageService.get.error parsing', name, e);
        }
      }

      return value;
    }
  }, {
    key: "set",
    value: function set(name, value) {
      try {
        var cache = [];
        var json = JSON.stringify(value, function (key, value) {
          if (key === 'pool') {
            return;
          }

          if (_typeof(value) === 'object' && value !== null) {
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
  }, {
    key: "on",
    value: function on(name) {
      return this.promise.make(function (promise) {
        var i,
            interval = 1000,
            elapsed = 0,
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
    }
  }], [{
    key: "isLocalStorageSupported",
    value: function isLocalStorageSupported() {
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
    }
  }, {
    key: "factory",
    value: function factory(PromiseService) {
      if (LocalStorageService.isLocalStorageSupported()) {
        return new LocalStorageService(PromiseService);
      } else {
        return new CookieService(PromiseService);
      }
    }
  }]);

  return LocalStorageService;
}();

exports.LocalStorageService = LocalStorageService;
LocalStorageService.factory.$inject = ['PromiseService'];

var SessionStorageService =
/*#__PURE__*/
function () {
  function SessionStorageService(PromiseService) {
    _classCallCheck(this, SessionStorageService);

    this.promise = PromiseService;
  }

  _createClass(SessionStorageService, [{
    key: "delete",
    value: function _delete(name) {
      window.sessionStorage.removeItem(name);
    }
  }, {
    key: "exist",
    value: function exist(name) {
      return window.sessionStorage[name] !== undefined;
    }
  }, {
    key: "get",
    value: function get(name) {
      var value = null;

      if (window.sessionStorage[name] !== undefined) {
        try {
          value = JSON.parse(window.sessionStorage[name]);
        } catch (e) {
          console.log('SessionStorageService.get.error parsing', name, e);
        }
      }

      return value;
    }
  }, {
    key: "set",
    value: function set(name, value) {
      try {
        var cache = [];
        var json = JSON.stringify(value, function (key, value) {
          if (key === 'pool') {
            return;
          }

          if (_typeof(value) === 'object' && value !== null) {
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
  }, {
    key: "on",
    value: function on(name) {
      return this.promise.make(function (promise) {
        var i,
            interval = 1000,
            elapsed = 0,
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
    }
  }], [{
    key: "isSessionStorageSupported",
    value: function isSessionStorageSupported() {
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
    }
  }, {
    key: "factory",
    value: function factory(PromiseService) {
      if (SessionStorageService.isSessionStorageSupported()) {
        return new SessionStorageService(PromiseService);
      } else {
        return new CookieService(PromiseService);
      }
    }
  }]);

  return SessionStorageService;
}();

exports.SessionStorageService = SessionStorageService;
SessionStorageService.factory.$inject = ['PromiseService'];

},{}],242:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SHOW_INFO_WINDOW = false;
var GOOGLE_MAPS = null;

var StoreLocatorCtrl =
/*#__PURE__*/
function () {
  function StoreLocatorCtrl($scope, $timeout, DomService, ApiService) {
    var _this = this;

    _classCallCheck(this, StoreLocatorCtrl);

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
      window.onGoogleMapsLoaded = function () {
        GOOGLE_MAPS = google.maps;

        _this.initMap();
      };

      var script = document.createElement('script');
      script.setAttribute('type', 'text/javascript');
      script.setAttribute('src', "https://maps.googleapis.com/maps/api/js?key=".concat(this.apiKey, "&callback=onGoogleMapsLoaded"));
      (document.getElementsByTagName('head')[0] || document.documentElement).appendChild(script);
      /*
      google.maps.event.addDomListener(window, 'load', () => {
      	GOOGLE_MAPS = google.maps;
      	this.initMap();
      });
      */
    } //


    this.unsubscribe = new _rxjs.Subject();
    this.mapCenter$.pipe((0, _operators.debounceTime)(1000), (0, _operators.takeUntil)(this.unsubscribe)).subscribe(function (position) {
      _this.findNearStores(_this.stores, position);
    });
    $scope.$on('destroy', function () {
      console.log('destroy');

      _this.unsubscribe.next();

      _this.unsubscribe.complete();
    });
  }

  _createClass(StoreLocatorCtrl, [{
    key: "initMap",
    value: function initMap() {
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
      map.addListener('dragend', function () {
        var position = map.getCenter();

        _this2.mapCenter$.next(position);
      });
      this.$timeout(function () {
        _this2.map = map;
      });
      console.log('timeout');
    }
  }, {
    key: "calculateDistance",
    value: function calculateDistance(lat1, lon1, lat2, lon2, unit) {
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
    }
  }, {
    key: "addMarkers",
    value: function addMarkers(stores) {
      var _this3 = this;

      var markers = stores.map(function (store) {
        var position = new google.maps.LatLng(store.latitude, store.longitude);
        var marker = new google.maps.Marker({
          position: position,
          // map: this.map,
          icon: store.importante ? './img/store-locator/store-primary.png' : './img/store-locator/store-secondary.png',
          title: store.name
        });
        marker.addListener('mouseover', function () {
          _this3.setMarkerWindow(marker.position, store.name);
        });
        marker.addListener('mouseout', function () {
          _this3.setMarkerWindow(null);
        });
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
        imagePath: 'img/store-locator/cluster-'
      });
      var styles = markerCluster.getStyles();
      styles.forEach(function (style) {
        return style.textColor = '#ffffff';
      });
      markerCluster.setStyles(styles); // console.log('StoreLocatorCtrl.searchPosition', position, stores);

      this.markers = markers;
      this.markerCluster = markerCluster;
    }
  }, {
    key: "getGeolocation",
    value: function getGeolocation(map) {
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
    }
  }, {
    key: "loadStoresByPosition",
    value: function loadStoresByPosition(position) {
      var _this5 = this;

      return this.apiService.storeLocator.position(position).then(function (success) {
        var stores = success.data;
        _this5.stores = stores; // console.log('StoreLocatorCtrl.loadStoresByPosition', position, stores);

        _this5.addMarkers(stores);
      });
    }
  }, {
    key: "loadAllStores",
    value: function loadAllStores() {
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
    }
  }, {
    key: "fitBounds",
    value: function fitBounds(stores) {
      if (stores.length) {
        var bounds = new google.maps.LatLngBounds();
        stores.forEach(function (store) {
          var position = new google.maps.LatLng(store.latitude, store.longitude);
          bounds.extend(position);
        });
        this.map.fitBounds(bounds);
        console.log('fitBounds');
      }
    }
  }, {
    key: "findNearStores",
    value: function findNearStores(stores, position) {
      var _this7 = this;

      if (stores) {
        stores = stores.slice();
        stores.sort(function (a, b) {
          var da = _this7.calculateDistance(a.latitude, a.longitude, position.lat(), position.lng(), 'K');

          var db = _this7.calculateDistance(b.latitude, b.longitude, position.lat(), position.lng(), 'K');

          return da * (a.importante ? 0.5 : 1) - db * (b.importante ? 0.5 : 1);
        });
        var visibleStores = stores.slice(0, 50);
        this.$timeout(function () {
          _this7.visibleStores = visibleStores;
        }, 1); // console.log('findNearStores', visibleStores);

        return visibleStores;
      }
    }
  }, {
    key: "searchPosition",
    value: function searchPosition(position) {
      var _this8 = this;

      this.position = position;
      this.map.setCenter(position);
      this.setInfoWindow(position, 1);
      return this.loadAllStores().then(function (stores) {
        var visibleStores = _this8.findNearStores(stores, position);

        if (visibleStores) {
          _this8.fitBounds(visibleStores);
        }
      });
    }
  }, {
    key: "panTo",
    value: function panTo(store) {
      var position = new google.maps.LatLng(store.latitude, store.longitude);
      this.map.setZoom(10);
      this.map.panTo(position);
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var _this9 = this;

      this.error = null;
      this.busyFind = true;
      var geocoder = this.geocoder || new google.maps.Geocoder();
      this.geocoder = geocoder;
      geocoder.geocode({
        address: this.model.address
      }, function (results, status) {
        _this9.model = {};

        if (status == 'OK') {
          var position = results[0].geometry.location; // console.log('location', location);
          // const position = new google.maps.LatLng(location);

          _this9.searchPosition(position).finally(function () {
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
    }
  }, {
    key: "setInfoWindow",
    value: function setInfoWindow(position, mode) {
      if (SHOW_INFO_WINDOW) {
        var infoWindow = this.infoWindow || new google.maps.InfoWindow();
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
  }, {
    key: "setMarkerWindow",
    value: function setMarkerWindow(position, message) {
      if (position) {
        var markerWindow = this.markerWindow || new google.maps.InfoWindow({
          pixelOffset: new google.maps.Size(0, -35)
        });
        this.markerWindow = markerWindow;
        markerWindow.setPosition(position);
        markerWindow.setContent(message);
        markerWindow.open(this.map);
      } else {
        if (this.markerWindow) {
          this.markerWindow.close();
        }
      }
    }
  }]);

  return StoreLocatorCtrl;
}();

StoreLocatorCtrl.$inject = ['$scope', '$timeout', 'DomService', 'ApiService'];
var _default = StoreLocatorCtrl;
exports.default = _default;

},{"rxjs":1,"rxjs/operators":197}]},{},[199]);
//# sourceMappingURL=app.js.map
