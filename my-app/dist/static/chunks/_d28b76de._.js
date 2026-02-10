(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports._ = _interop_require_default;
}),
"[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/node_modules/@swc/helpers/cjs/_define_property.cjs [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
exports._ = _define_property;
}),
"[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/node_modules/@swc/helpers/cjs/_class_private_field_loose_base.cjs [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _class_private_field_loose_base(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
        throw new TypeError("attempted to use private field on non-instance");
    }
    return receiver;
}
exports._ = _class_private_field_loose_base;
}),
"[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/node_modules/@swc/helpers/cjs/_class_private_field_loose_key.cjs [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var id = 0;
function _class_private_field_loose_key(name) {
    return "__private_" + id++ + "_" + name;
}
exports._ = _class_private_field_loose_key;
}),
"[project]/node_modules/scheduler/cjs/scheduler.development.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function performWorkUntilDeadline() {
        needsPaint = !1;
        if (isMessageLoopRunning) {
            var currentTime = exports.unstable_now();
            startTime = currentTime;
            var hasMoreWork = !0;
            try {
                a: {
                    isHostCallbackScheduled = !1;
                    isHostTimeoutScheduled && (isHostTimeoutScheduled = !1, localClearTimeout(taskTimeoutID), taskTimeoutID = -1);
                    isPerformingWork = !0;
                    var previousPriorityLevel = currentPriorityLevel;
                    try {
                        b: {
                            advanceTimers(currentTime);
                            for(currentTask = peek(taskQueue); null !== currentTask && !(currentTask.expirationTime > currentTime && shouldYieldToHost());){
                                var callback = currentTask.callback;
                                if ("function" === typeof callback) {
                                    currentTask.callback = null;
                                    currentPriorityLevel = currentTask.priorityLevel;
                                    var continuationCallback = callback(currentTask.expirationTime <= currentTime);
                                    currentTime = exports.unstable_now();
                                    if ("function" === typeof continuationCallback) {
                                        currentTask.callback = continuationCallback;
                                        advanceTimers(currentTime);
                                        hasMoreWork = !0;
                                        break b;
                                    }
                                    currentTask === peek(taskQueue) && pop(taskQueue);
                                    advanceTimers(currentTime);
                                } else pop(taskQueue);
                                currentTask = peek(taskQueue);
                            }
                            if (null !== currentTask) hasMoreWork = !0;
                            else {
                                var firstTimer = peek(timerQueue);
                                null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
                                hasMoreWork = !1;
                            }
                        }
                        break a;
                    } finally{
                        currentTask = null, currentPriorityLevel = previousPriorityLevel, isPerformingWork = !1;
                    }
                    hasMoreWork = void 0;
                }
            } finally{
                hasMoreWork ? schedulePerformWorkUntilDeadline() : isMessageLoopRunning = !1;
            }
        }
    }
    function push(heap, node) {
        var index = heap.length;
        heap.push(node);
        a: for(; 0 < index;){
            var parentIndex = index - 1 >>> 1, parent = heap[parentIndex];
            if (0 < compare(parent, node)) heap[parentIndex] = node, heap[index] = parent, index = parentIndex;
            else break a;
        }
    }
    function peek(heap) {
        return 0 === heap.length ? null : heap[0];
    }
    function pop(heap) {
        if (0 === heap.length) return null;
        var first = heap[0], last = heap.pop();
        if (last !== first) {
            heap[0] = last;
            a: for(var index = 0, length = heap.length, halfLength = length >>> 1; index < halfLength;){
                var leftIndex = 2 * (index + 1) - 1, left = heap[leftIndex], rightIndex = leftIndex + 1, right = heap[rightIndex];
                if (0 > compare(left, last)) rightIndex < length && 0 > compare(right, left) ? (heap[index] = right, heap[rightIndex] = last, index = rightIndex) : (heap[index] = left, heap[leftIndex] = last, index = leftIndex);
                else if (rightIndex < length && 0 > compare(right, last)) heap[index] = right, heap[rightIndex] = last, index = rightIndex;
                else break a;
            }
        }
        return first;
    }
    function compare(a, b) {
        var diff = a.sortIndex - b.sortIndex;
        return 0 !== diff ? diff : a.id - b.id;
    }
    function advanceTimers(currentTime) {
        for(var timer = peek(timerQueue); null !== timer;){
            if (null === timer.callback) pop(timerQueue);
            else if (timer.startTime <= currentTime) pop(timerQueue), timer.sortIndex = timer.expirationTime, push(taskQueue, timer);
            else break;
            timer = peek(timerQueue);
        }
    }
    function handleTimeout(currentTime) {
        isHostTimeoutScheduled = !1;
        advanceTimers(currentTime);
        if (!isHostCallbackScheduled) if (null !== peek(taskQueue)) isHostCallbackScheduled = !0, isMessageLoopRunning || (isMessageLoopRunning = !0, schedulePerformWorkUntilDeadline());
        else {
            var firstTimer = peek(timerQueue);
            null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
        }
    }
    function shouldYieldToHost() {
        return needsPaint ? !0 : exports.unstable_now() - startTime < frameInterval ? !1 : !0;
    }
    function requestHostTimeout(callback, ms) {
        taskTimeoutID = localSetTimeout(function() {
            callback(exports.unstable_now());
        }, ms);
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    exports.unstable_now = void 0;
    if ("object" === typeof performance && "function" === typeof performance.now) {
        var localPerformance = performance;
        exports.unstable_now = function() {
            return localPerformance.now();
        };
    } else {
        var localDate = Date, initialTime = localDate.now();
        exports.unstable_now = function() {
            return localDate.now() - initialTime;
        };
    }
    var taskQueue = [], timerQueue = [], taskIdCounter = 1, currentTask = null, currentPriorityLevel = 3, isPerformingWork = !1, isHostCallbackScheduled = !1, isHostTimeoutScheduled = !1, needsPaint = !1, localSetTimeout = "function" === typeof setTimeout ? setTimeout : null, localClearTimeout = "function" === typeof clearTimeout ? clearTimeout : null, localSetImmediate = "undefined" !== typeof setImmediate ? setImmediate : null, isMessageLoopRunning = !1, taskTimeoutID = -1, frameInterval = 5, startTime = -1;
    if ("function" === typeof localSetImmediate) var schedulePerformWorkUntilDeadline = function() {
        localSetImmediate(performWorkUntilDeadline);
    };
    else if ("undefined" !== typeof MessageChannel) {
        var channel = new MessageChannel(), port = channel.port2;
        channel.port1.onmessage = performWorkUntilDeadline;
        schedulePerformWorkUntilDeadline = function() {
            port.postMessage(null);
        };
    } else schedulePerformWorkUntilDeadline = function() {
        localSetTimeout(performWorkUntilDeadline, 0);
    };
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;
    exports.unstable_cancelCallback = function(task) {
        task.callback = null;
    };
    exports.unstable_forceFrameRate = function(fps) {
        0 > fps || 125 < fps ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : frameInterval = 0 < fps ? Math.floor(1e3 / fps) : 5;
    };
    exports.unstable_getCurrentPriorityLevel = function() {
        return currentPriorityLevel;
    };
    exports.unstable_next = function(eventHandler) {
        switch(currentPriorityLevel){
            case 1:
            case 2:
            case 3:
                var priorityLevel = 3;
                break;
            default:
                priorityLevel = currentPriorityLevel;
        }
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
            return eventHandler();
        } finally{
            currentPriorityLevel = previousPriorityLevel;
        }
    };
    exports.unstable_requestPaint = function() {
        needsPaint = !0;
    };
    exports.unstable_runWithPriority = function(priorityLevel, eventHandler) {
        switch(priorityLevel){
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                priorityLevel = 3;
        }
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
            return eventHandler();
        } finally{
            currentPriorityLevel = previousPriorityLevel;
        }
    };
    exports.unstable_scheduleCallback = function(priorityLevel, callback, options) {
        var currentTime = exports.unstable_now();
        "object" === typeof options && null !== options ? (options = options.delay, options = "number" === typeof options && 0 < options ? currentTime + options : currentTime) : options = currentTime;
        switch(priorityLevel){
            case 1:
                var timeout = -1;
                break;
            case 2:
                timeout = 250;
                break;
            case 5:
                timeout = 1073741823;
                break;
            case 4:
                timeout = 1e4;
                break;
            default:
                timeout = 5e3;
        }
        timeout = options + timeout;
        priorityLevel = {
            id: taskIdCounter++,
            callback: callback,
            priorityLevel: priorityLevel,
            startTime: options,
            expirationTime: timeout,
            sortIndex: -1
        };
        options > currentTime ? (priorityLevel.sortIndex = options, push(timerQueue, priorityLevel), null === peek(taskQueue) && priorityLevel === peek(timerQueue) && (isHostTimeoutScheduled ? (localClearTimeout(taskTimeoutID), taskTimeoutID = -1) : isHostTimeoutScheduled = !0, requestHostTimeout(handleTimeout, options - currentTime))) : (priorityLevel.sortIndex = timeout, push(taskQueue, priorityLevel), isHostCallbackScheduled || isPerformingWork || (isHostCallbackScheduled = !0, isMessageLoopRunning || (isMessageLoopRunning = !0, schedulePerformWorkUntilDeadline())));
        return priorityLevel;
    };
    exports.unstable_shouldYield = shouldYieldToHost;
    exports.unstable_wrapCallback = function(callback) {
        var parentPriorityLevel = currentPriorityLevel;
        return function() {
            var previousPriorityLevel = currentPriorityLevel;
            currentPriorityLevel = parentPriorityLevel;
            try {
                return callback.apply(this, arguments);
            } finally{
                currentPriorityLevel = previousPriorityLevel;
            }
        };
    };
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/node_modules/scheduler/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/scheduler/cjs/scheduler.development.js [client] (ecmascript)");
}
}),
"[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/node_modules/scheduler/cjs/scheduler.development.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @license React v0.20.2
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        var enableSchedulerDebugging = false;
        var enableProfiling = false;
        var requestHostCallback;
        var requestHostTimeout;
        var cancelHostTimeout;
        var requestPaint;
        var hasPerformanceNow = typeof performance === 'object' && typeof performance.now === 'function';
        if (hasPerformanceNow) {
            var localPerformance = performance;
            exports.unstable_now = function() {
                return localPerformance.now();
            };
        } else {
            var localDate = Date;
            var initialTime = localDate.now();
            exports.unstable_now = function() {
                return localDate.now() - initialTime;
            };
        }
        if (// implementation using setTimeout.
        typeof window === 'undefined' || // Check if MessageChannel is supported, too.
        typeof MessageChannel !== 'function') {
            // If this accidentally gets imported in a non-browser environment, e.g. JavaScriptCore,
            // fallback to a naive implementation.
            var _callback = null;
            var _timeoutID = null;
            var _flushCallback = function() {
                if (_callback !== null) {
                    try {
                        var currentTime = exports.unstable_now();
                        var hasRemainingTime = true;
                        _callback(hasRemainingTime, currentTime);
                        _callback = null;
                    } catch (e) {
                        setTimeout(_flushCallback, 0);
                        throw e;
                    }
                }
            };
            requestHostCallback = function(cb) {
                if (_callback !== null) {
                    // Protect against re-entrancy.
                    setTimeout(requestHostCallback, 0, cb);
                } else {
                    _callback = cb;
                    setTimeout(_flushCallback, 0);
                }
            };
            requestHostTimeout = function(cb, ms) {
                _timeoutID = setTimeout(cb, ms);
            };
            cancelHostTimeout = function() {
                clearTimeout(_timeoutID);
            };
            exports.unstable_shouldYield = function() {
                return false;
            };
            requestPaint = exports.unstable_forceFrameRate = function() {};
        } else {
            // Capture local references to native APIs, in case a polyfill overrides them.
            var _setTimeout = window.setTimeout;
            var _clearTimeout = window.clearTimeout;
            if (typeof console !== 'undefined') {
                // TODO: Scheduler no longer requires these methods to be polyfilled. But
                // maybe we want to continue warning if they don't exist, to preserve the
                // option to rely on it in the future?
                var requestAnimationFrame = window.requestAnimationFrame;
                var cancelAnimationFrame = window.cancelAnimationFrame;
                if (typeof requestAnimationFrame !== 'function') {
                    // Using console['error'] to evade Babel and ESLint
                    console['error']("This browser doesn't support requestAnimationFrame. " + 'Make sure that you load a ' + 'polyfill in older browsers. https://reactjs.org/link/react-polyfills');
                }
                if (typeof cancelAnimationFrame !== 'function') {
                    // Using console['error'] to evade Babel and ESLint
                    console['error']("This browser doesn't support cancelAnimationFrame. " + 'Make sure that you load a ' + 'polyfill in older browsers. https://reactjs.org/link/react-polyfills');
                }
            }
            var isMessageLoopRunning = false;
            var scheduledHostCallback = null;
            var taskTimeoutID = -1; // Scheduler periodically yields in case there is other work on the main
            // thread, like user events. By default, it yields multiple times per frame.
            // It does not attempt to align with frame boundaries, since most tasks don't
            // need to be frame aligned; for those that do, use requestAnimationFrame.
            var yieldInterval = 5;
            var deadline = 0; // TODO: Make this configurable
            {
                // `isInputPending` is not available. Since we have no way of knowing if
                // there's pending input, always yield at the end of the frame.
                exports.unstable_shouldYield = function() {
                    return exports.unstable_now() >= deadline;
                }; // Since we yield every frame regardless, `requestPaint` has no effect.
                requestPaint = function() {};
            }
            exports.unstable_forceFrameRate = function(fps) {
                if (fps < 0 || fps > 125) {
                    // Using console['error'] to evade Babel and ESLint
                    console['error']('forceFrameRate takes a positive int between 0 and 125, ' + 'forcing frame rates higher than 125 fps is not supported');
                    return;
                }
                if (fps > 0) {
                    yieldInterval = Math.floor(1000 / fps);
                } else {
                    // reset the framerate
                    yieldInterval = 5;
                }
            };
            var performWorkUntilDeadline = function() {
                if (scheduledHostCallback !== null) {
                    var currentTime = exports.unstable_now(); // Yield after `yieldInterval` ms, regardless of where we are in the vsync
                    // cycle. This means there's always time remaining at the beginning of
                    // the message event.
                    deadline = currentTime + yieldInterval;
                    var hasTimeRemaining = true;
                    try {
                        var hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);
                        if (!hasMoreWork) {
                            isMessageLoopRunning = false;
                            scheduledHostCallback = null;
                        } else {
                            // If there's more work, schedule the next message event at the end
                            // of the preceding one.
                            port.postMessage(null);
                        }
                    } catch (error) {
                        // If a scheduler task throws, exit the current browser task so the
                        // error can be observed.
                        port.postMessage(null);
                        throw error;
                    }
                } else {
                    isMessageLoopRunning = false;
                } // Yielding to the browser will give it a chance to paint, so we can
            };
            var channel = new MessageChannel();
            var port = channel.port2;
            channel.port1.onmessage = performWorkUntilDeadline;
            requestHostCallback = function(callback) {
                scheduledHostCallback = callback;
                if (!isMessageLoopRunning) {
                    isMessageLoopRunning = true;
                    port.postMessage(null);
                }
            };
            requestHostTimeout = function(callback, ms) {
                taskTimeoutID = _setTimeout(function() {
                    callback(exports.unstable_now());
                }, ms);
            };
            cancelHostTimeout = function() {
                _clearTimeout(taskTimeoutID);
                taskTimeoutID = -1;
            };
        }
        function push(heap, node) {
            var index = heap.length;
            heap.push(node);
            siftUp(heap, node, index);
        }
        function peek(heap) {
            var first = heap[0];
            return first === undefined ? null : first;
        }
        function pop(heap) {
            var first = heap[0];
            if (first !== undefined) {
                var last = heap.pop();
                if (last !== first) {
                    heap[0] = last;
                    siftDown(heap, last, 0);
                }
                return first;
            } else {
                return null;
            }
        }
        function siftUp(heap, node, i) {
            var index = i;
            while(true){
                var parentIndex = index - 1 >>> 1;
                var parent = heap[parentIndex];
                if (parent !== undefined && compare(parent, node) > 0) {
                    // The parent is larger. Swap positions.
                    heap[parentIndex] = node;
                    heap[index] = parent;
                    index = parentIndex;
                } else {
                    // The parent is smaller. Exit.
                    return;
                }
            }
        }
        function siftDown(heap, node, i) {
            var index = i;
            var length = heap.length;
            while(index < length){
                var leftIndex = (index + 1) * 2 - 1;
                var left = heap[leftIndex];
                var rightIndex = leftIndex + 1;
                var right = heap[rightIndex]; // If the left or right node is smaller, swap with the smaller of those.
                if (left !== undefined && compare(left, node) < 0) {
                    if (right !== undefined && compare(right, left) < 0) {
                        heap[index] = right;
                        heap[rightIndex] = node;
                        index = rightIndex;
                    } else {
                        heap[index] = left;
                        heap[leftIndex] = node;
                        index = leftIndex;
                    }
                } else if (right !== undefined && compare(right, node) < 0) {
                    heap[index] = right;
                    heap[rightIndex] = node;
                    index = rightIndex;
                } else {
                    // Neither child is smaller. Exit.
                    return;
                }
            }
        }
        function compare(a, b) {
            // Compare sort index first, then task id.
            var diff = a.sortIndex - b.sortIndex;
            return diff !== 0 ? diff : a.id - b.id;
        }
        // TODO: Use symbols?
        var ImmediatePriority = 1;
        var UserBlockingPriority = 2;
        var NormalPriority = 3;
        var LowPriority = 4;
        var IdlePriority = 5;
        function markTaskErrored(task, ms) {}
        /* eslint-disable no-var */ // Math.pow(2, 30) - 1
        // 0b111111111111111111111111111111
        var maxSigned31BitInt = 1073741823; // Times out immediately
        var IMMEDIATE_PRIORITY_TIMEOUT = -1; // Eventually times out
        var USER_BLOCKING_PRIORITY_TIMEOUT = 250;
        var NORMAL_PRIORITY_TIMEOUT = 5000;
        var LOW_PRIORITY_TIMEOUT = 10000; // Never times out
        var IDLE_PRIORITY_TIMEOUT = maxSigned31BitInt; // Tasks are stored on a min heap
        var taskQueue = [];
        var timerQueue = []; // Incrementing id counter. Used to maintain insertion order.
        var taskIdCounter = 1; // Pausing the scheduler is useful for debugging.
        var currentTask = null;
        var currentPriorityLevel = NormalPriority; // This is set while performing work, to prevent re-entrancy.
        var isPerformingWork = false;
        var isHostCallbackScheduled = false;
        var isHostTimeoutScheduled = false;
        function advanceTimers(currentTime) {
            // Check for tasks that are no longer delayed and add them to the queue.
            var timer = peek(timerQueue);
            while(timer !== null){
                if (timer.callback === null) {
                    // Timer was cancelled.
                    pop(timerQueue);
                } else if (timer.startTime <= currentTime) {
                    // Timer fired. Transfer to the task queue.
                    pop(timerQueue);
                    timer.sortIndex = timer.expirationTime;
                    push(taskQueue, timer);
                } else {
                    // Remaining timers are pending.
                    return;
                }
                timer = peek(timerQueue);
            }
        }
        function handleTimeout(currentTime) {
            isHostTimeoutScheduled = false;
            advanceTimers(currentTime);
            if (!isHostCallbackScheduled) {
                if (peek(taskQueue) !== null) {
                    isHostCallbackScheduled = true;
                    requestHostCallback(flushWork);
                } else {
                    var firstTimer = peek(timerQueue);
                    if (firstTimer !== null) {
                        requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
                    }
                }
            }
        }
        function flushWork(hasTimeRemaining, initialTime) {
            isHostCallbackScheduled = false;
            if (isHostTimeoutScheduled) {
                // We scheduled a timeout but it's no longer needed. Cancel it.
                isHostTimeoutScheduled = false;
                cancelHostTimeout();
            }
            isPerformingWork = true;
            var previousPriorityLevel = currentPriorityLevel;
            try {
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                {
                    var currentTime;
                } else {
                    // No catch in prod code path.
                    return workLoop(hasTimeRemaining, initialTime);
                }
            } finally{
                currentTask = null;
                currentPriorityLevel = previousPriorityLevel;
                isPerformingWork = false;
            }
        }
        function workLoop(hasTimeRemaining, initialTime) {
            var currentTime = initialTime;
            advanceTimers(currentTime);
            currentTask = peek(taskQueue);
            while(currentTask !== null && !enableSchedulerDebugging){
                if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || exports.unstable_shouldYield())) {
                    break;
                }
                var callback = currentTask.callback;
                if (typeof callback === 'function') {
                    currentTask.callback = null;
                    currentPriorityLevel = currentTask.priorityLevel;
                    var didUserCallbackTimeout = currentTask.expirationTime <= currentTime;
                    var continuationCallback = callback(didUserCallbackTimeout);
                    currentTime = exports.unstable_now();
                    if (typeof continuationCallback === 'function') {
                        currentTask.callback = continuationCallback;
                    } else {
                        if (currentTask === peek(taskQueue)) {
                            pop(taskQueue);
                        }
                    }
                    advanceTimers(currentTime);
                } else {
                    pop(taskQueue);
                }
                currentTask = peek(taskQueue);
            } // Return whether there's additional work
            if (currentTask !== null) {
                return true;
            } else {
                var firstTimer = peek(timerQueue);
                if (firstTimer !== null) {
                    requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
                }
                return false;
            }
        }
        function unstable_runWithPriority(priorityLevel, eventHandler) {
            switch(priorityLevel){
                case ImmediatePriority:
                case UserBlockingPriority:
                case NormalPriority:
                case LowPriority:
                case IdlePriority:
                    break;
                default:
                    priorityLevel = NormalPriority;
            }
            var previousPriorityLevel = currentPriorityLevel;
            currentPriorityLevel = priorityLevel;
            try {
                return eventHandler();
            } finally{
                currentPriorityLevel = previousPriorityLevel;
            }
        }
        function unstable_next(eventHandler) {
            var priorityLevel;
            switch(currentPriorityLevel){
                case ImmediatePriority:
                case UserBlockingPriority:
                case NormalPriority:
                    // Shift down to normal priority
                    priorityLevel = NormalPriority;
                    break;
                default:
                    // Anything lower than normal priority should remain at the current level.
                    priorityLevel = currentPriorityLevel;
                    break;
            }
            var previousPriorityLevel = currentPriorityLevel;
            currentPriorityLevel = priorityLevel;
            try {
                return eventHandler();
            } finally{
                currentPriorityLevel = previousPriorityLevel;
            }
        }
        function unstable_wrapCallback(callback) {
            var parentPriorityLevel = currentPriorityLevel;
            return function() {
                // This is a fork of runWithPriority, inlined for performance.
                var previousPriorityLevel = currentPriorityLevel;
                currentPriorityLevel = parentPriorityLevel;
                try {
                    return callback.apply(this, arguments);
                } finally{
                    currentPriorityLevel = previousPriorityLevel;
                }
            };
        }
        function unstable_scheduleCallback(priorityLevel, callback, options) {
            var currentTime = exports.unstable_now();
            var startTime;
            if (typeof options === 'object' && options !== null) {
                var delay = options.delay;
                if (typeof delay === 'number' && delay > 0) {
                    startTime = currentTime + delay;
                } else {
                    startTime = currentTime;
                }
            } else {
                startTime = currentTime;
            }
            var timeout;
            switch(priorityLevel){
                case ImmediatePriority:
                    timeout = IMMEDIATE_PRIORITY_TIMEOUT;
                    break;
                case UserBlockingPriority:
                    timeout = USER_BLOCKING_PRIORITY_TIMEOUT;
                    break;
                case IdlePriority:
                    timeout = IDLE_PRIORITY_TIMEOUT;
                    break;
                case LowPriority:
                    timeout = LOW_PRIORITY_TIMEOUT;
                    break;
                case NormalPriority:
                default:
                    timeout = NORMAL_PRIORITY_TIMEOUT;
                    break;
            }
            var expirationTime = startTime + timeout;
            var newTask = {
                id: taskIdCounter++,
                callback: callback,
                priorityLevel: priorityLevel,
                startTime: startTime,
                expirationTime: expirationTime,
                sortIndex: -1
            };
            if (startTime > currentTime) {
                // This is a delayed task.
                newTask.sortIndex = startTime;
                push(timerQueue, newTask);
                if (peek(taskQueue) === null && newTask === peek(timerQueue)) {
                    // All tasks are delayed, and this is the task with the earliest delay.
                    if (isHostTimeoutScheduled) {
                        // Cancel an existing timeout.
                        cancelHostTimeout();
                    } else {
                        isHostTimeoutScheduled = true;
                    } // Schedule a timeout.
                    requestHostTimeout(handleTimeout, startTime - currentTime);
                }
            } else {
                newTask.sortIndex = expirationTime;
                push(taskQueue, newTask);
                // wait until the next time we yield.
                if (!isHostCallbackScheduled && !isPerformingWork) {
                    isHostCallbackScheduled = true;
                    requestHostCallback(flushWork);
                }
            }
            return newTask;
        }
        function unstable_pauseExecution() {}
        function unstable_continueExecution() {
            if (!isHostCallbackScheduled && !isPerformingWork) {
                isHostCallbackScheduled = true;
                requestHostCallback(flushWork);
            }
        }
        function unstable_getFirstCallbackNode() {
            return peek(taskQueue);
        }
        function unstable_cancelCallback(task) {
            // remove from the queue because you can't remove arbitrary nodes from an
            // array based heap, only the first one.)
            task.callback = null;
        }
        function unstable_getCurrentPriorityLevel() {
            return currentPriorityLevel;
        }
        var unstable_requestPaint = requestPaint;
        var unstable_Profiling = null;
        exports.unstable_IdlePriority = IdlePriority;
        exports.unstable_ImmediatePriority = ImmediatePriority;
        exports.unstable_LowPriority = LowPriority;
        exports.unstable_NormalPriority = NormalPriority;
        exports.unstable_Profiling = unstable_Profiling;
        exports.unstable_UserBlockingPriority = UserBlockingPriority;
        exports.unstable_cancelCallback = unstable_cancelCallback;
        exports.unstable_continueExecution = unstable_continueExecution;
        exports.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel;
        exports.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode;
        exports.unstable_next = unstable_next;
        exports.unstable_pauseExecution = unstable_pauseExecution;
        exports.unstable_requestPaint = unstable_requestPaint;
        exports.unstable_runWithPriority = unstable_runWithPriority;
        exports.unstable_scheduleCallback = unstable_scheduleCallback;
        exports.unstable_wrapCallback = unstable_wrapCallback;
    })();
}
}),
"[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/node_modules/scheduler/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/node_modules/scheduler/cjs/scheduler.development.js [client] (ecmascript)");
}
}),
"[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/node_modules/scheduler/cjs/scheduler-tracing.development.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @license React v0.20.2
 * scheduler-tracing.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        var DEFAULT_THREAD_ID = 0; // Counters used to generate unique IDs.
        var interactionIDCounter = 0;
        var threadIDCounter = 0; // Set of currently traced interactions.
        // Interactions "stack"–
        // Meaning that newly traced interactions are appended to the previously active set.
        // When an interaction goes out of scope, the previous set (if any) is restored.
        exports.__interactionsRef = null; // Listener(s) to notify when interactions begin and end.
        exports.__subscriberRef = null;
        {
            exports.__interactionsRef = {
                current: new Set()
            };
            exports.__subscriberRef = {
                current: null
            };
        }
        function unstable_clear(callback) {
            var prevInteractions = exports.__interactionsRef.current;
            exports.__interactionsRef.current = new Set();
            try {
                return callback();
            } finally{
                exports.__interactionsRef.current = prevInteractions;
            }
        }
        function unstable_getCurrent() {
            {
                return exports.__interactionsRef.current;
            }
        }
        function unstable_getThreadID() {
            return ++threadIDCounter;
        }
        function unstable_trace(name, timestamp, callback) {
            var threadID = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_THREAD_ID;
            var interaction = {
                __count: 1,
                id: interactionIDCounter++,
                name: name,
                timestamp: timestamp
            };
            var prevInteractions = exports.__interactionsRef.current; // Traced interactions should stack/accumulate.
            // To do that, clone the current interactions.
            // The previous set will be restored upon completion.
            var interactions = new Set(prevInteractions);
            interactions.add(interaction);
            exports.__interactionsRef.current = interactions;
            var subscriber = exports.__subscriberRef.current;
            var returnValue;
            try {
                if (subscriber !== null) {
                    subscriber.onInteractionTraced(interaction);
                }
            } finally{
                try {
                    if (subscriber !== null) {
                        subscriber.onWorkStarted(interactions, threadID);
                    }
                } finally{
                    try {
                        returnValue = callback();
                    } finally{
                        exports.__interactionsRef.current = prevInteractions;
                        try {
                            if (subscriber !== null) {
                                subscriber.onWorkStopped(interactions, threadID);
                            }
                        } finally{
                            interaction.__count--; // If no async work was scheduled for this interaction,
                            // Notify subscribers that it's completed.
                            if (subscriber !== null && interaction.__count === 0) {
                                subscriber.onInteractionScheduledWorkCompleted(interaction);
                            }
                        }
                    }
                }
            }
            return returnValue;
        }
        function unstable_wrap(callback) {
            var threadID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_THREAD_ID;
            var wrappedInteractions = exports.__interactionsRef.current;
            var subscriber = exports.__subscriberRef.current;
            if (subscriber !== null) {
                subscriber.onWorkScheduled(wrappedInteractions, threadID);
            } // Update the pending async work count for the current interactions.
            // Update after calling subscribers in case of error.
            wrappedInteractions.forEach(function(interaction) {
                interaction.__count++;
            });
            var hasRun = false;
            function wrapped() {
                var prevInteractions = exports.__interactionsRef.current;
                exports.__interactionsRef.current = wrappedInteractions;
                subscriber = exports.__subscriberRef.current;
                try {
                    var returnValue;
                    try {
                        if (subscriber !== null) {
                            subscriber.onWorkStarted(wrappedInteractions, threadID);
                        }
                    } finally{
                        try {
                            returnValue = callback.apply(undefined, arguments);
                        } finally{
                            exports.__interactionsRef.current = prevInteractions;
                            if (subscriber !== null) {
                                subscriber.onWorkStopped(wrappedInteractions, threadID);
                            }
                        }
                    }
                    return returnValue;
                } finally{
                    if (!hasRun) {
                        // We only expect a wrapped function to be executed once,
                        // But in the event that it's executed more than once–
                        // Only decrement the outstanding interaction counts once.
                        hasRun = true; // Update pending async counts for all wrapped interactions.
                        // If this was the last scheduled async work for any of them,
                        // Mark them as completed.
                        wrappedInteractions.forEach(function(interaction) {
                            interaction.__count--;
                            if (subscriber !== null && interaction.__count === 0) {
                                subscriber.onInteractionScheduledWorkCompleted(interaction);
                            }
                        });
                    }
                }
            }
            wrapped.cancel = function cancel() {
                subscriber = exports.__subscriberRef.current;
                try {
                    if (subscriber !== null) {
                        subscriber.onWorkCanceled(wrappedInteractions, threadID);
                    }
                } finally{
                    // Update pending async counts for all wrapped interactions.
                    // If this was the last scheduled async work for any of them,
                    // Mark them as completed.
                    wrappedInteractions.forEach(function(interaction) {
                        interaction.__count--;
                        if (subscriber && interaction.__count === 0) {
                            subscriber.onInteractionScheduledWorkCompleted(interaction);
                        }
                    });
                }
            };
            return wrapped;
        }
        var subscribers = null;
        {
            subscribers = new Set();
        }
        function unstable_subscribe(subscriber) {
            {
                subscribers.add(subscriber);
                if (subscribers.size === 1) {
                    exports.__subscriberRef.current = {
                        onInteractionScheduledWorkCompleted: onInteractionScheduledWorkCompleted,
                        onInteractionTraced: onInteractionTraced,
                        onWorkCanceled: onWorkCanceled,
                        onWorkScheduled: onWorkScheduled,
                        onWorkStarted: onWorkStarted,
                        onWorkStopped: onWorkStopped
                    };
                }
            }
        }
        function unstable_unsubscribe(subscriber) {
            {
                subscribers.delete(subscriber);
                if (subscribers.size === 0) {
                    exports.__subscriberRef.current = null;
                }
            }
        }
        function onInteractionTraced(interaction) {
            var didCatchError = false;
            var caughtError = null;
            subscribers.forEach(function(subscriber) {
                try {
                    subscriber.onInteractionTraced(interaction);
                } catch (error) {
                    if (!didCatchError) {
                        didCatchError = true;
                        caughtError = error;
                    }
                }
            });
            if (didCatchError) {
                throw caughtError;
            }
        }
        function onInteractionScheduledWorkCompleted(interaction) {
            var didCatchError = false;
            var caughtError = null;
            subscribers.forEach(function(subscriber) {
                try {
                    subscriber.onInteractionScheduledWorkCompleted(interaction);
                } catch (error) {
                    if (!didCatchError) {
                        didCatchError = true;
                        caughtError = error;
                    }
                }
            });
            if (didCatchError) {
                throw caughtError;
            }
        }
        function onWorkScheduled(interactions, threadID) {
            var didCatchError = false;
            var caughtError = null;
            subscribers.forEach(function(subscriber) {
                try {
                    subscriber.onWorkScheduled(interactions, threadID);
                } catch (error) {
                    if (!didCatchError) {
                        didCatchError = true;
                        caughtError = error;
                    }
                }
            });
            if (didCatchError) {
                throw caughtError;
            }
        }
        function onWorkStarted(interactions, threadID) {
            var didCatchError = false;
            var caughtError = null;
            subscribers.forEach(function(subscriber) {
                try {
                    subscriber.onWorkStarted(interactions, threadID);
                } catch (error) {
                    if (!didCatchError) {
                        didCatchError = true;
                        caughtError = error;
                    }
                }
            });
            if (didCatchError) {
                throw caughtError;
            }
        }
        function onWorkStopped(interactions, threadID) {
            var didCatchError = false;
            var caughtError = null;
            subscribers.forEach(function(subscriber) {
                try {
                    subscriber.onWorkStopped(interactions, threadID);
                } catch (error) {
                    if (!didCatchError) {
                        didCatchError = true;
                        caughtError = error;
                    }
                }
            });
            if (didCatchError) {
                throw caughtError;
            }
        }
        function onWorkCanceled(interactions, threadID) {
            var didCatchError = false;
            var caughtError = null;
            subscribers.forEach(function(subscriber) {
                try {
                    subscriber.onWorkCanceled(interactions, threadID);
                } catch (error) {
                    if (!didCatchError) {
                        didCatchError = true;
                        caughtError = error;
                    }
                }
            });
            if (didCatchError) {
                throw caughtError;
            }
        }
        exports.unstable_clear = unstable_clear;
        exports.unstable_getCurrent = unstable_getCurrent;
        exports.unstable_getThreadID = unstable_getThreadID;
        exports.unstable_subscribe = unstable_subscribe;
        exports.unstable_trace = unstable_trace;
        exports.unstable_unsubscribe = unstable_unsubscribe;
        exports.unstable_wrap = unstable_wrap;
    })();
}
}),
"[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/node_modules/scheduler/tracing.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/node_modules/scheduler/cjs/scheduler-tracing.development.js [client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_d28b76de._.js.map