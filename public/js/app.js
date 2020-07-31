/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}\n\nmodule.exports = _arrayLikeToArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ \"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\");\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return arrayLikeToArray(arr);\n}\n\nmodule.exports = _arrayWithoutHoles;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\n\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n        args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n\n      _next(undefined);\n    });\n  };\n}\n\nmodule.exports = _asyncToGenerator;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/asyncToGenerator.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter);\n}\n\nmodule.exports = _iterableToArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\nmodule.exports = _nonIterableSpread;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ \"./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js\");\n\nvar iterableToArray = __webpack_require__(/*! ./iterableToArray */ \"./node_modules/@babel/runtime/helpers/iterableToArray.js\");\n\nvar unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ \"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\");\n\nvar nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ \"./node_modules/@babel/runtime/helpers/nonIterableSpread.js\");\n\nfunction _toConsumableArray(arr) {\n  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();\n}\n\nmodule.exports = _toConsumableArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ \"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return arrayLikeToArray(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);\n}\n\nmodule.exports = _unsupportedIterableToArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nvar runtime = (function (exports) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  function define(obj, key, value) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n    return obj[key];\n  }\n  try {\n    // IE 8 has a broken Object.defineProperty that only works on DOM objects.\n    define({}, \"\");\n  } catch (err) {\n    define = function(obj, key, value) {\n      return obj[key] = value;\n    };\n  }\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  exports.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: \"normal\", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: \"throw\", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n  var IteratorPrototype = {};\n  IteratorPrototype[iteratorSymbol] = function () {\n    return this;\n  };\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype &&\n      NativeIteratorPrototype !== Op &&\n      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype =\n    Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\n  GeneratorFunction.displayName = define(\n    GeneratorFunctionPrototype,\n    toStringTagSymbol,\n    \"GeneratorFunction\"\n  );\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function(method) {\n      define(prototype, method, function(arg) {\n        return this._invoke(method, arg);\n      });\n    });\n  }\n\n  exports.isGeneratorFunction = function(genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor\n      ? ctor === GeneratorFunction ||\n        // For the native GeneratorFunction constructor, the best we can\n        // do is to check its .name property.\n        (ctor.displayName || ctor.name) === \"GeneratorFunction\"\n      : false;\n  };\n\n  exports.mark = function(genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      define(genFun, toStringTagSymbol, \"GeneratorFunction\");\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n  exports.awrap = function(arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator, PromiseImpl) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value &&\n            typeof value === \"object\" &&\n            hasOwn.call(value, \"__await\")) {\n          return PromiseImpl.resolve(value.__await).then(function(value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function(err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return PromiseImpl.resolve(value).then(function(unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration.\n          result.value = unwrapped;\n          resolve(result);\n        }, function(error) {\n          // If a rejected Promise was yielded, throw the rejection back\n          // into the async generator function so it can be handled there.\n          return invoke(\"throw\", error, resolve, reject);\n        });\n      }\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new PromiseImpl(function(resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n        // If enqueue has been called before, then we want to wait until\n        // all previous Promises have been resolved before calling invoke,\n        // so that results are always delivered in the correct order. If\n        // enqueue has not been called before, then it is important to\n        // call invoke immediately, without waiting on a callback to fire,\n        // so that the async generator function has the opportunity to do\n        // any necessary setup in a predictable way. This predictability\n        // is why the Promise constructor synchronously invokes its\n        // executor callback, and why async functions synchronously\n        // execute code before the first await. Since we implement simple\n        // async functions in terms of async generators, it is especially\n        // important to get this right, even though it requires care.\n        previousPromise ? previousPromise.then(\n          callInvokeWithMethodAndArg,\n          // Avoid propagating failures to Promises returned by later\n          // invocations of the iterator.\n          callInvokeWithMethodAndArg\n        ) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\n    return this;\n  };\n  exports.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {\n    if (PromiseImpl === void 0) PromiseImpl = Promise;\n\n    var iter = new AsyncIterator(\n      wrap(innerFn, outerFn, self, tryLocsList),\n      PromiseImpl\n    );\n\n    return exports.isGeneratorFunction(outerFn)\n      ? iter // If outerFn is a generator, return the full iterator.\n      : iter.next().then(function(result) {\n          return result.done ? result.value : iter.next();\n        });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done\n            ? GenStateCompleted\n            : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        // Note: [\"return\"] must be used for ES3 parsing compatibility.\n        if (delegate.iterator[\"return\"]) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\n          \"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (! info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  define(Gp, toStringTagSymbol, \"Generator\");\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  Gp[iteratorSymbol] = function() {\n    return this;\n  };\n\n  Gp.toString = function() {\n    return \"[object Generator]\";\n  };\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: \"root\" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  exports.keys = function(object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1, next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  exports.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = \"next\";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" &&\n              hasOwn.call(this, name) &&\n              !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !! caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n\n    abrupt: function(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev &&\n            hasOwn.call(entry, \"finallyLoc\") &&\n            this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry &&\n          (type === \"break\" ||\n           type === \"continue\") &&\n          finallyEntry.tryLoc <= arg &&\n          arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function(record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" ||\n          record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    \"catch\": function(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error(\"illegal catch attempt\");\n    },\n\n    delegateYield: function(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n\n  // Regardless of whether this script is executing as a CommonJS module\n  // or not, return the runtime object so that we can declare the variable\n  // regeneratorRuntime in the outer scope, which allows this module to be\n  // injected easily by `bin/regenerator --include-runtime script.js`.\n  return exports;\n\n}(\n  // If this script is executing as a CommonJS module, use module.exports\n  // as the regeneratorRuntime namespace. Otherwise create a new empty\n  // object. Either way, the resulting object will be used to initialize\n  // the regeneratorRuntime variable at the top of this file.\n   true ? module.exports : undefined\n));\n\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  // This module should not be running in strict mode, so the above\n  // assignment should always work unless something is misconfigured. Just\n  // in case runtime.js accidentally runs in strict mode, we can escape\n  // strict mode using a global Function call. This could conceivably fail\n  // if a Content Security Policy forbids using Function, but in that case\n  // the proper solution is to fix the accidental strict mode problem. If\n  // you've misconfigured your bundler to force strict mode and applied a\n  // CSP to forbid Function, and you're not willing to fix either of those\n  // problems, please detail your unique predicament in a GitHub issue.\n  Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n}\n\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js\");\n\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/regenerator/index.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/index.js */ \"./src/utils/index.js\");\n/* harmony import */ var _utils_Filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/Filter.js */ \"./src/utils/Filter.js\");\n\n\nwindow.addEventListener('load', _utils_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nwindow.addEventListener('load', _utils_Filter_js__WEBPACK_IMPORTED_MODULE_1__[\"Filter\"]);\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/db.json":
/*!*********************!*\
  !*** ./src/db.json ***!
  \*********************/
/*! exports provided: jobs, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"jobs\\\":[{\\\"id\\\":1,\\\"company\\\":\\\"Photosnap\\\",\\\"logo\\\":\\\"../src/assets/images/photosnap.svg\\\",\\\"new\\\":true,\\\"featured\\\":true,\\\"position\\\":\\\"Senior Frontend Developer\\\",\\\"role\\\":\\\"Frontend\\\",\\\"level\\\":\\\"Senior\\\",\\\"postedAt\\\":\\\"1d ago\\\",\\\"contract\\\":\\\"Full Time\\\",\\\"location\\\":\\\"USA Only\\\",\\\"languages\\\":[\\\"HTML\\\",\\\"CSS\\\",\\\"JavaScript\\\"],\\\"tools\\\":[]},{\\\"id\\\":2,\\\"company\\\":\\\"Manage\\\",\\\"logo\\\":\\\"../src/assets/images/manage.svg\\\",\\\"new\\\":true,\\\"featured\\\":true,\\\"position\\\":\\\"Fullstack Developer\\\",\\\"role\\\":\\\"Fullstack\\\",\\\"level\\\":\\\"Midweight\\\",\\\"postedAt\\\":\\\"1d ago\\\",\\\"contract\\\":\\\"Part Time\\\",\\\"location\\\":\\\"Remote\\\",\\\"languages\\\":[\\\"Python\\\"],\\\"tools\\\":[\\\"React\\\"]},{\\\"id\\\":3,\\\"company\\\":\\\"Account\\\",\\\"logo\\\":\\\"../src/assets/images/account.svg\\\",\\\"new\\\":true,\\\"featured\\\":false,\\\"position\\\":\\\"Junior Frontend Developer\\\",\\\"role\\\":\\\"Frontend\\\",\\\"level\\\":\\\"Junior\\\",\\\"postedAt\\\":\\\"2d ago\\\",\\\"contract\\\":\\\"Part Time\\\",\\\"location\\\":\\\"USA Only\\\",\\\"languages\\\":[\\\"JavaScript\\\"],\\\"tools\\\":[\\\"React\\\",\\\"Sass\\\"]},{\\\"id\\\":4,\\\"company\\\":\\\"MyHome\\\",\\\"logo\\\":\\\"../src/assets/images/myhome.svg\\\",\\\"new\\\":false,\\\"featured\\\":false,\\\"position\\\":\\\"Junior Frontend Developer\\\",\\\"role\\\":\\\"Frontend\\\",\\\"level\\\":\\\"Junior\\\",\\\"postedAt\\\":\\\"5d ago\\\",\\\"contract\\\":\\\"Contract\\\",\\\"location\\\":\\\"USA Only\\\",\\\"languages\\\":[\\\"CSS\\\",\\\"JavaScript\\\"],\\\"tools\\\":[]},{\\\"id\\\":5,\\\"company\\\":\\\"Loop Studios\\\",\\\"logo\\\":\\\"../src/assets/images/loop-studios.svg\\\",\\\"new\\\":false,\\\"featured\\\":false,\\\"position\\\":\\\"Software Engineer\\\",\\\"role\\\":\\\"FullStack\\\",\\\"level\\\":\\\"Midweight\\\",\\\"postedAt\\\":\\\"1w ago\\\",\\\"contract\\\":\\\"Full Time\\\",\\\"location\\\":\\\"Worldwide\\\",\\\"languages\\\":[\\\"JavaScript\\\"],\\\"tools\\\":[\\\"Ruby\\\",\\\"Sass\\\"]},{\\\"id\\\":6,\\\"company\\\":\\\"FaceIt\\\",\\\"logo\\\":\\\"../src/assets/images/faceit.svg\\\",\\\"new\\\":false,\\\"featured\\\":false,\\\"position\\\":\\\"Junior Backend Developer\\\",\\\"role\\\":\\\"Backend\\\",\\\"level\\\":\\\"Junior\\\",\\\"postedAt\\\":\\\"2w ago\\\",\\\"contract\\\":\\\"Full Time\\\",\\\"location\\\":\\\"UK Only\\\",\\\"languages\\\":[\\\"Ruby\\\"],\\\"tools\\\":[\\\"RoR\\\"]},{\\\"id\\\":7,\\\"company\\\":\\\"Shortly\\\",\\\"logo\\\":\\\"../src/assets/images/shortly.svg\\\",\\\"new\\\":false,\\\"featured\\\":false,\\\"position\\\":\\\"Junior Developer\\\",\\\"role\\\":\\\"Frontend\\\",\\\"level\\\":\\\"Junior\\\",\\\"postedAt\\\":\\\"2w ago\\\",\\\"contract\\\":\\\"Full Time\\\",\\\"location\\\":\\\"Worldwide\\\",\\\"languages\\\":[\\\"HTML\\\",\\\"JavaScript\\\"],\\\"tools\\\":[\\\"Sass\\\"]},{\\\"id\\\":8,\\\"company\\\":\\\"Insure\\\",\\\"logo\\\":\\\"../src/assets/images/insure.svg\\\",\\\"new\\\":false,\\\"featured\\\":false,\\\"position\\\":\\\"Junior Frontend Developer\\\",\\\"role\\\":\\\"Frontend\\\",\\\"level\\\":\\\"Junior\\\",\\\"postedAt\\\":\\\"2w ago\\\",\\\"contract\\\":\\\"Full Time\\\",\\\"location\\\":\\\"USA Only\\\",\\\"languages\\\":[\\\"JavaScript\\\"],\\\"tools\\\":[\\\"Vue\\\",\\\"Sass\\\"]},{\\\"id\\\":9,\\\"company\\\":\\\"Eyecam Co.\\\",\\\"logo\\\":\\\"../src/assets/images/eyecam-co.svg\\\",\\\"new\\\":false,\\\"featured\\\":false,\\\"position\\\":\\\"Full Stack Engineer\\\",\\\"role\\\":\\\"Fullstack\\\",\\\"level\\\":\\\"Midweight\\\",\\\"postedAt\\\":\\\"3w ago\\\",\\\"contract\\\":\\\"Full Time\\\",\\\"location\\\":\\\"Worldwide\\\",\\\"languages\\\":[\\\"JavaScript\\\",\\\"Python\\\"],\\\"tools\\\":[\\\"Django\\\"]},{\\\"id\\\":10,\\\"company\\\":\\\"The Air Filter Company\\\",\\\"logo\\\":\\\"../src/assets/images/the-air-filter-company.svg\\\",\\\"new\\\":false,\\\"featured\\\":false,\\\"position\\\":\\\"Front-end Dev\\\",\\\"role\\\":\\\"Frontend\\\",\\\"level\\\":\\\"Junior\\\",\\\"postedAt\\\":\\\"1mo ago\\\",\\\"contract\\\":\\\"Part Time\\\",\\\"location\\\":\\\"Worldwide\\\",\\\"languages\\\":[\\\"JavaScript\\\"],\\\"tools\\\":[\\\"React\\\",\\\"Sass\\\"]}]}\");\n\n//# sourceURL=webpack:///./src/db.json?");

/***/ }),

/***/ "./src/pages/Categories.js":
/*!*********************************!*\
  !*** ./src/pages/Categories.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar Categories = /*#__PURE__*/function () {\n  function Categories(content) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Categories);\n\n    this.content = content;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Categories, [{\n    key: \"template\",\n    value: function template(filters) {\n      var listTag = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(new Set(filters));\n\n      var view = \"\\n    <div class=\\\"filter\\\">\\n    <span class=\\\"filter__tag\\\">\\n    \".concat(listTag.map(function (element) {\n        return \"\\n        <h3 id=\\\"tag\\\">\".concat(element, \"</h3>\\n        \");\n      }).join(''), \"\\n        </span>\\n      <span class=\\\"filter__clear\\\" id=\\\"clear\\\">Clear</span>\\n    </div>\\n      \");\n      return view;\n    }\n  }]);\n\n  return Categories;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Categories); // <span id=\"removeFilter\">&#10006;</span>\n\n//# sourceURL=webpack:///./src/pages/Categories.js?");

/***/ }),

/***/ "./src/pages/Job.js":
/*!**************************!*\
  !*** ./src/pages/Job.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_getData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getData */ \"./src/utils/getData.js\");\n\n\n\n\n\nvar Job = /*#__PURE__*/function () {\n  function Job(id) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Job);\n\n    // debugger\n    var data = Object(_utils_getData__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    this.job = data.filter(function (job) {\n      return job.id === id;\n    });\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Job, [{\n    key: \"render\",\n    value: function render() {\n      var tags = this.job.map(function (tagFilter) {\n        return [tagFilter.role, tagFilter.level].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(tagFilter.languages), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(tagFilter.tools));\n      });\n      var view = \"\\n    \".concat(this.job.map(function (data) {\n        return \"\\n    <article class=\\\"box\\\">\\n    <img src=\".concat(data.logo, \"><span class=\\\"box__content\\\">\\n    <span class=\\\"box__content--title\\\">\\n    <h1>\").concat(data.company, \"</h1>\\n    <ul>\\n    \").concat(data[\"new\"] === true ? \"<li>New!</li>\" : \"\", \"\\n      \").concat(data.featured === true ? \"<li>Featured</li>\" : \"\", \"\\n        </ul>\\n        </span>\\n        <h3>\").concat(data.position, \"</h3>\\n        <ul class=\\\"box__content--position\\\">\\n        <li>\").concat(data.postedAt, \"</li>\\n        <li>\").concat(data.contract, \"</li>\\n        <li>\").concat(data.location, \"</li>\\n        </ul>\\n        </span>\\n        <span class=\\\"box__tool\\\">\\n        \");\n      }), \"\\n        <ul>\\n        \").concat(tags[0].map(function (tags) {\n        return \"\\n          <li id=\\\"filter\\\">\".concat(tags, \"</li>\\n        \");\n      }).join(''), \"\\n        </ul>\\n        </span>\\n        </article>\");\n      return view;\n    }\n  }]);\n\n  return Job;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Job);\n\n//# sourceURL=webpack:///./src/pages/Job.js?");

/***/ }),

/***/ "./src/styles/sass/main.scss":
/*!***********************************!*\
  !*** ./src/styles/sass/main.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nValidationError: Invalid options object. Sass Loader has been initialized using an options object that does not match the API schema.\\n - options has an unknown property 'sourceMapContents'. These properties are valid:\\n   object { implementation?, sassOptions?, additionalData?, sourceMap?, webpackImporter? }\\n    at validate (/mnt/d/xampp/htdocs/static-job-listings-master/node_modules/schema-utils/dist/validate.js:96:11)\\n    at Object.loader (/mnt/d/xampp/htdocs/static-job-listings-master/node_modules/sass-loader/dist/index.js:30:28)\\n    at /mnt/d/xampp/htdocs/static-job-listings-master/node_modules/webpack/lib/NormalModule.js:316:20\\n    at /mnt/d/xampp/htdocs/static-job-listings-master/node_modules/loader-runner/lib/LoaderRunner.js:367:11\\n    at /mnt/d/xampp/htdocs/static-job-listings-master/node_modules/loader-runner/lib/LoaderRunner.js:233:18\\n    at runSyncOrAsync (/mnt/d/xampp/htdocs/static-job-listings-master/node_modules/loader-runner/lib/LoaderRunner.js:143:3)\\n    at iterateNormalLoaders (/mnt/d/xampp/htdocs/static-job-listings-master/node_modules/loader-runner/lib/LoaderRunner.js:232:2)\\n    at Array.<anonymous> (/mnt/d/xampp/htdocs/static-job-listings-master/node_modules/loader-runner/lib/LoaderRunner.js:205:4)\\n    at Storage.finished (/mnt/d/xampp/htdocs/static-job-listings-master/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:55:16)\\n    at /mnt/d/xampp/htdocs/static-job-listings-master/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:91:9\\n    at /mnt/d/xampp/htdocs/static-job-listings-master/node_modules/graceful-fs/graceful-fs.js:123:16\\n    at FSReqCallback.readFileAfterClose [as oncomplete] (internal/fs/read_file_context.js:63:3)\");\n\n//# sourceURL=webpack:///./src/styles/sass/main.scss?");

/***/ }),

/***/ "./src/utils/Clear.js":
/*!****************************!*\
  !*** ./src/utils/Clear.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index.js */ \"./src/utils/index.js\");\n/* harmony import */ var _utils_Filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Filter */ \"./src/utils/Filter.js\");\n\n\n\nvar clear = function clear() {\n  filterContent.innerHTML = '';\n  Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  Object(_utils_Filter__WEBPACK_IMPORTED_MODULE_1__[\"Filter\"])();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (clear);\n\n//# sourceURL=webpack:///./src/utils/Clear.js?");

/***/ }),

/***/ "./src/utils/Filter.js":
/*!*****************************!*\
  !*** ./src/utils/Filter.js ***!
  \*****************************/
/*! exports provided: Filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Filter\", function() { return Filter; });\n/* harmony import */ var _pages_Categories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/Categories */ \"./src/pages/Categories.js\");\n/* harmony import */ var _utils_tagsSearchBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/tagsSearchBar */ \"./src/utils/tagsSearchBar.js\");\n/* harmony import */ var _utils_FilterRender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/FilterRender */ \"./src/utils/FilterRender.js\");\n/* harmony import */ var _utils_Clear_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Clear.js */ \"./src/utils/Clear.js\");\n\n\n\n\n\nvar Filter = function Filter() {\n  var filterContent = document.getElementById('filterContent');\n  var filterTags = new _pages_Categories__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  var filterCategories = [];\n  window.addEventListener('click', function (event) {\n    var clickTarget = event.target;\n\n    if (clickTarget.id === 'filter') {\n      filterCategories.push(clickTarget.textContent);\n      filterContent.innerHTML = filterTags.template(filterCategories);\n      var listId = Object(_utils_tagsSearchBar__WEBPACK_IMPORTED_MODULE_1__[\"tagsSearchBar\"])(filterCategories);\n      Object(_utils_FilterRender__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(listId);\n    }\n\n    if (clickTarget.id === 'clear') {\n      Object(_utils_Clear_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    }\n\n    if (clickTarget.id === 'tag') {\n      debugger;\n      var valuesTag = [];\n      var tags = document.querySelectorAll('#tag');\n      tags.forEach(function (tag) {\n        return valuesTag.push(tag.textContent);\n      });\n      var newFilter = valuesTag.filter(function (value) {\n        return value !== clickTarget.textContent;\n      });\n      clickTarget.remove();\n      var listNew = Object(_utils_tagsSearchBar__WEBPACK_IMPORTED_MODULE_1__[\"tagsSearchBar\"])(newFilter);\n      newFilter.length === 0 ? Object(_utils_Clear_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])() : Object(_utils_FilterRender__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(listNew);\n    }\n  });\n};\n\n\n\n//# sourceURL=webpack:///./src/utils/Filter.js?");

/***/ }),

/***/ "./src/utils/FilterRender.js":
/*!***********************************!*\
  !*** ./src/utils/FilterRender.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_Job_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/Job.js */ \"./src/pages/Job.js\");\n\n\nvar renderFilter = function renderFilter(ids) {\n  var filterJobRender = [];\n  var app = document.getElementById('app');\n  ids.forEach(function (job) {\n    var newJob = new _pages_Job_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](job);\n    filterJobRender.push(newJob.render());\n  });\n  app.innerHTML = filterJobRender.join('');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderFilter);\n\n//# sourceURL=webpack:///./src/utils/FilterRender.js?");

/***/ }),

/***/ "./src/utils/differenceTwoArrays.js":
/*!******************************************!*\
  !*** ./src/utils/differenceTwoArrays.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction differenceOf2Arrays(array1, array2) {\n  var temp = [];\n  array1 = array1.toString().split(',').map(String);\n  array2 = array2.toString().split(',').map(String);\n\n  for (var i in array1) {\n    array2.includes(array1[i]) ? temp.push(true) : temp.push(false);\n  }\n\n  for (var _i in array2) {\n    array1.includes(array2[_i]);\n  }\n\n  return temp;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (differenceOf2Arrays);\n\n//# sourceURL=webpack:///./src/utils/differenceTwoArrays.js?");

/***/ }),

/***/ "./src/utils/getData.js":
/*!******************************!*\
  !*** ./src/utils/getData.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _db_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db.json */ \"./src/db.json\");\nvar _db_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../db.json */ \"./src/db.json\", 1);\n\n\nvar getData = function getData() {\n  var response = _db_json__WEBPACK_IMPORTED_MODULE_0__.jobs;\n  return response;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getData);\n\n//# sourceURL=webpack:///./src/utils/getData.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_sass_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/sass/main.scss */ \"./src/styles/sass/main.scss\");\n/* harmony import */ var _styles_sass_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_sass_main_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _db_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../db.json */ \"./src/db.json\");\nvar _db_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../db.json */ \"./src/db.json\", 1);\n/* harmony import */ var _pages_Job__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/Job */ \"./src/pages/Job.js\");\n\n\n\n\n\nvar app = document.getElementById('app');\n\nvar render = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    var list, jobsListArray;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            list = _db_json__WEBPACK_IMPORTED_MODULE_3__.jobs;\n            jobsListArray = [];\n            list.forEach(function (job) {\n              // debugger\n              var newJob = new _pages_Job__WEBPACK_IMPORTED_MODULE_4__[\"default\"](job.id);\n              jobsListArray.push(newJob.render());\n            });\n            app.innerHTML = jobsListArray.join('');\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function render() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (render);\n\n//# sourceURL=webpack:///./src/utils/index.js?");

/***/ }),

/***/ "./src/utils/returnArray.js":
/*!**********************************!*\
  !*** ./src/utils/returnArray.js ***!
  \**********************************/
/*! exports provided: returnArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"returnArray\", function() { return returnArray; });\nfunction returnArray(arraylist, value) {\n  var listid = [];\n\n  for (var i in arraylist) {\n    arraylist[i] === value ? listid.push(parseInt(i) + 1) : null;\n  }\n\n  return listid;\n}\n\n\n\n//# sourceURL=webpack:///./src/utils/returnArray.js?");

/***/ }),

/***/ "./src/utils/tagValueTrue.js":
/*!***********************************!*\
  !*** ./src/utils/tagValueTrue.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction tagValueTrue(listOfValidation) {\n  var listId = [];\n\n  var _iterator = _createForOfIteratorHelper(listOfValidation),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var i = _step.value;\n      var id = i.reduce(function (acc, cu) {\n        cu === true ? acc += 1 : '';\n        return acc;\n      }, 0);\n      listId.push(id);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  return listId;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (tagValueTrue);\n\n//# sourceURL=webpack:///./src/utils/tagValueTrue.js?");

/***/ }),

/***/ "./src/utils/tagsSearchBar.js":
/*!************************************!*\
  !*** ./src/utils/tagsSearchBar.js ***!
  \************************************/
/*! exports provided: tagsSearchBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tagsSearchBar\", function() { return tagsSearchBar; });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _db_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db.json */ \"./src/db.json\");\nvar _db_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../db.json */ \"./src/db.json\", 1);\n/* harmony import */ var _utils_returnArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/returnArray.js */ \"./src/utils/returnArray.js\");\n/* harmony import */ var _utils_differenceTwoArrays__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/differenceTwoArrays */ \"./src/utils/differenceTwoArrays.js\");\n/* harmony import */ var _utils_tagValueTrue_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/tagValueTrue.js */ \"./src/utils/tagValueTrue.js\");\n\n\n\n\n\n\nvar tagsSearchBar = function tagsSearchBar(currentTags) {\n  var value = currentTags.length;\n  var listFilterData = [];\n  _db_json__WEBPACK_IMPORTED_MODULE_1__.jobs.forEach(function (job) {\n    listFilterData.push([job.role, job.level].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(job.languages), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(job.tools)));\n  });\n  var listOfValidation = [];\n  listFilterData.forEach(function (list) {\n    listOfValidation.push(Object(_utils_differenceTwoArrays__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(list, currentTags));\n  });\n  var listIdFilter = Object(_utils_tagValueTrue_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(listOfValidation);\n  return Object(_utils_returnArray_js__WEBPACK_IMPORTED_MODULE_2__[\"returnArray\"])(listIdFilter, value);\n};\n\n\n\n//# sourceURL=webpack:///./src/utils/tagsSearchBar.js?");

/***/ })

/******/ });