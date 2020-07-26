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

/***/ "./node_modules/html-loader/dist/cjs.js!./index.html":
/*!***********************************************************!*\
  !*** ./node_modules/html-loader/dist/cjs.js!./index.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"// Module\\nvar code = \\\"<!DOCTYPE html>\\\\n<html lang=\\\\\\\"en\\\\\\\">\\\\n<head>\\\\n  <meta charset=\\\\\\\"UTF-8\\\\\\\">\\\\n  <meta name=\\\\\\\"viewport\\\\\\\" content=\\\\\\\"width=device-width, initial-scale=1.0\\\\\\\"> <!-- displays site properly based on user's device -->\\\\n\\\\n  <link rel=\\\\\\\"icon\\\\\\\" type=\\\\\\\"image/png\\\\\\\" sizes=\\\\\\\"32x32\\\\\\\" href=\\\\\\\"./images/favicon-32x32.png\\\\\\\">\\\\n  \\\\n  <title>Frontend Mentor | Job Listings</title>\\\\n\\\\n  <!-- Feel free to remove these styles or customise in your own stylesheet 👍 -->\\\\n  <style>\\\\n    .attribution { font-size: 11px; text-align: center; }\\\\n    .attribution a { color: hsl(228, 45%, 44%); }\\\\n  </style>\\\\n</head>\\\\n<body>\\\\n  <!-- Item Start -->\\\\n  Photosnap\\\\n  New!\\\\n  Featured\\\\n  Senior Frontend Developer\\\\n  1d ago\\\\n  Full Time\\\\n  USA only\\\\n  <!-- Role -->\\\\n  Frontend\\\\n  <!-- Level -->\\\\n  Senior\\\\n  <!-- Languages -->\\\\n  HTML\\\\n  CSS\\\\n  JavaScript\\\\n  <!-- Item End -->\\\\n\\\\n  <!-- Item Start -->\\\\n  Manage\\\\n  New!\\\\n  Featured\\\\n  Fullstack Developer\\\\n  1d ago\\\\n  Part Time\\\\n  Remote\\\\n  <!-- Role -->\\\\n  Fullstack\\\\n  <!-- Level -->\\\\n  Midweight\\\\n  <!-- Languages -->\\\\n  Python\\\\n  <!-- Tools -->\\\\n  React\\\\n  <!-- Item End -->\\\\n\\\\n  <!-- Item Start -->\\\\n  Account\\\\n  New!\\\\n  Junior Frontend Developer\\\\n  2d ago\\\\n  Part Time\\\\n  USA only\\\\n  <!-- Role -->\\\\n  Frontend\\\\n  <!-- Level -->\\\\n  Junior\\\\n  <!-- Languages -->\\\\n  JavaScript\\\\n  <!-- Tools -->\\\\n  React\\\\n  Sass\\\\n  <!-- Item End -->\\\\n\\\\n  <!-- Item Start -->\\\\n  MyHome\\\\n  Junior Frontend Developer\\\\n  5d ago\\\\n  Contract\\\\n  USA only\\\\n  <!-- Role -->\\\\n  Frontend\\\\n  <!-- Level -->\\\\n  Junior\\\\n  <!-- Languages -->\\\\n  CSS\\\\n  JavaScript\\\\n  <!-- Item End -->\\\\n\\\\n  <!-- Item Start -->\\\\n  Loop Studios\\\\n  Software Engineer\\\\n  1w ago\\\\n  Full Time\\\\n  Worldwide\\\\n  <!-- Role -->\\\\n  Fullstack\\\\n  <!-- Level -->\\\\n  Midweight\\\\n  <!-- Languages -->\\\\n  JavaScript\\\\n  Ruby\\\\n  <!-- Tools -->\\\\n  Sass\\\\n  <!-- Item End -->\\\\n\\\\n  <!-- Item Start -->\\\\n  FaceIt\\\\n  Junior Backend Developer\\\\n  2w ago\\\\n  Full Time\\\\n  UK only\\\\n  <!-- Role -->\\\\n  Backend\\\\n  <!-- Level -->\\\\n  Junior\\\\n  <!-- Languages -->\\\\n  Ruby\\\\n  <!-- Tools -->\\\\n  RoR\\\\n  <!-- Item End -->\\\\n\\\\n  <!-- Item Start -->\\\\n  Shortly\\\\n  Junior Developer\\\\n  2w ago\\\\n  Full Time\\\\n  Worldwide\\\\n  <!-- Role -->\\\\n  Frontend\\\\n  <!-- Level -->\\\\n  Junior\\\\n  <!-- Languages -->\\\\n  HTML\\\\n  JavaScript\\\\n  <!-- Tools -->\\\\n  Sass\\\\n  <!-- Item End -->\\\\n\\\\n  <!-- Item Start -->\\\\n  Insure\\\\n  Junior Frontend Developer\\\\n  2w ago\\\\n  Full Time\\\\n  USA only\\\\n  <!-- Role -->\\\\n  Frontend\\\\n  <!-- Level -->\\\\n  Junior\\\\n  <!-- Languages -->\\\\n  JavaScript\\\\n  <!-- Tools -->\\\\n  Vue\\\\n  Sass\\\\n  <!-- Item End -->\\\\n\\\\n  <!-- Item Start -->\\\\n  Eyecam Co.\\\\n  Full Stack Engineer\\\\n  3w ago\\\\n  Full Time\\\\n  Worldwide\\\\n  <!-- Role -->\\\\n  Fullstack\\\\n  <!-- Level -->\\\\n  Midweight\\\\n  <!-- Languages -->\\\\n  JavaScript\\\\n  Python\\\\n  <!-- Tools -->\\\\n  Django\\\\n  <!-- Item End -->\\\\n\\\\n  <!-- Item Start -->\\\\n  The Air Filter Company\\\\n  Front-end Dev\\\\n  1mo ago\\\\n  Part Time\\\\n  Worldwide\\\\n  <!-- Role -->\\\\n  Frontend\\\\n  <!-- Level -->\\\\n  Junior\\\\n  <!-- Languages -->\\\\n  JavaScript\\\\n  <!-- Tools -->\\\\n  React\\\\n  Sass\\\\n  <!-- Item End -->\\\\n  \\\\n  <div class=\\\\\\\"attribution\\\\\\\">\\\\n    Challenge by <a href=\\\\\\\"https://www.frontendmentor.io?ref=challenge\\\\\\\" target=\\\\\\\"_blank\\\\\\\">Frontend Mentor</a>. \\\\n    Coded by <a href=\\\\\\\"#\\\\\\\">Your Name Here</a>.\\\\n  </div>\\\\n</body>\\\\n</html>\\\";\\n// Exports\\nmodule.exports = code;\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./index.html?./node_modules/html-loader/dist/cjs.js");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _db_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db.json */ \"./src/db.json\");\nvar _db_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./db.json */ \"./src/db.json\", 1);\n/* harmony import */ var _styles_sass_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/sass/main.scss */ \"./src/styles/sass/main.scss\");\n/* harmony import */ var _styles_sass_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_sass_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_images_bg_header_desktop_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/bg-header-desktop.svg */ \"./src/assets/images/bg-header-desktop.svg\");\n/* harmony import */ var _assets_images_bg_header_mobile_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/bg-header-mobile.svg */ \"./src/assets/images/bg-header-mobile.svg\");\n/* harmony import */ var _assets_images_faceit_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/faceit.svg */ \"./src/assets/images/faceit.svg\");\n/* harmony import */ var _assets_images_myhome_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/myhome.svg */ \"./src/assets/images/myhome.svg\");\n/* harmony import */ var _assets_images_manage_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/images/manage.svg */ \"./src/assets/images/manage.svg\");\n/* harmony import */ var _assets_images_insure_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/images/insure.svg */ \"./src/assets/images/insure.svg\");\n/* harmony import */ var _assets_images_shortly_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/images/shortly.svg */ \"./src/assets/images/shortly.svg\");\n/* harmony import */ var _assets_images_account_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/images/account.svg */ \"./src/assets/images/account.svg\");\n/* harmony import */ var _assets_images_photosnap_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/images/photosnap.svg */ \"./src/assets/images/photosnap.svg\");\n/* harmony import */ var _assets_images_eyecam_co_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/images/eyecam-co.svg */ \"./src/assets/images/eyecam-co.svg\");\n/* harmony import */ var _assets_images_loop_studios_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/images/loop-studios.svg */ \"./src/assets/images/loop-studios.svg\");\n/* harmony import */ var _assets_images_the_air_filter_company_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/images/the-air-filter-company.svg */ \"./src/assets/images/the-air-filter-company.svg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n__webpack_require__(/*! html-loader!../index.html */ \"./node_modules/html-loader/dist/cjs.js!./index.html\");\n\nvar containerFilter = document.querySelector('.filter');\nvar clearButton = document.getElementById('clear');\nvar filter = Array.from(document.querySelectorAll('#filter'));\nfilter.forEach(function (category) {\n  category.addEventListener('click', function () {\n    var filter = [];\n    containerFilter.style.display = 'flex';\n    var sessionStorage = window.sessionStorage;\n    filter.push(category.textContent);\n    sessionStorage.setItem('filter', JSON.stringify(filter));\n  });\n  clearButton.addEventListener('click', function () {\n    containerFilter.style.display = 'none';\n  });\n});\nvar jobsList = _db_json__WEBPACK_IMPORTED_MODULE_0__;\nconsole.log(jobsList);\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/assets/images/account.svg":
/*!***************************************!*\
  !*** ./src/assets/images/account.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../account.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/account.svg?");

/***/ }),

/***/ "./src/assets/images/bg-header-desktop.svg":
/*!*************************************************!*\
  !*** ./src/assets/images/bg-header-desktop.svg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../bg-header-desktop.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/bg-header-desktop.svg?");

/***/ }),

/***/ "./src/assets/images/bg-header-mobile.svg":
/*!************************************************!*\
  !*** ./src/assets/images/bg-header-mobile.svg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../bg-header-mobile.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/bg-header-mobile.svg?");

/***/ }),

/***/ "./src/assets/images/eyecam-co.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/eyecam-co.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../eyecam-co.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/eyecam-co.svg?");

/***/ }),

/***/ "./src/assets/images/faceit.svg":
/*!**************************************!*\
  !*** ./src/assets/images/faceit.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../faceit.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/faceit.svg?");

/***/ }),

/***/ "./src/assets/images/insure.svg":
/*!**************************************!*\
  !*** ./src/assets/images/insure.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../insure.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/insure.svg?");

/***/ }),

/***/ "./src/assets/images/loop-studios.svg":
/*!********************************************!*\
  !*** ./src/assets/images/loop-studios.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../loop-studios.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/loop-studios.svg?");

/***/ }),

/***/ "./src/assets/images/manage.svg":
/*!**************************************!*\
  !*** ./src/assets/images/manage.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../manage.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/manage.svg?");

/***/ }),

/***/ "./src/assets/images/myhome.svg":
/*!**************************************!*\
  !*** ./src/assets/images/myhome.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../myhome.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/myhome.svg?");

/***/ }),

/***/ "./src/assets/images/photosnap.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/photosnap.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../photosnap.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/photosnap.svg?");

/***/ }),

/***/ "./src/assets/images/shortly.svg":
/*!***************************************!*\
  !*** ./src/assets/images/shortly.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../shortly.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/shortly.svg?");

/***/ }),

/***/ "./src/assets/images/the-air-filter-company.svg":
/*!******************************************************!*\
  !*** ./src/assets/images/the-air-filter-company.svg ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../the-air-filter-company.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/the-air-filter-company.svg?");

/***/ }),

/***/ "./src/db.json":
/*!*********************!*\
  !*** ./src/db.json ***!
  \*********************/
/*! exports provided: data, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"data\\\":[{\\\"id\\\":1,\\\"company\\\":\\\"Photosnap\\\",\\\"logo\\\":\\\"./images/photosnap.svg\\\",\\\"new\\\":true,\\\"featured\\\":true,\\\"position\\\":\\\"Senior Frontend Developer\\\",\\\"role\\\":\\\"Frontend\\\",\\\"level\\\":\\\"Senior\\\",\\\"postedAt\\\":\\\"1d ago\\\",\\\"contract\\\":\\\"Full Time\\\",\\\"location\\\":\\\"USA Only\\\",\\\"languages\\\":[\\\"HTML\\\",\\\"CSS\\\",\\\"JavaScript\\\"],\\\"tools\\\":[]},{\\\"id\\\":2,\\\"company\\\":\\\"Manage\\\",\\\"logo\\\":\\\"./images/manage.svg\\\",\\\"new\\\":true,\\\"featured\\\":true,\\\"position\\\":\\\"Fullstack Developer\\\",\\\"role\\\":\\\"Fullstack\\\",\\\"level\\\":\\\"Midweight\\\",\\\"postedAt\\\":\\\"1d ago\\\",\\\"contract\\\":\\\"Part Time\\\",\\\"location\\\":\\\"Remote\\\",\\\"languages\\\":[\\\"Python\\\"],\\\"tools\\\":[\\\"React\\\"]},{\\\"id\\\":3,\\\"company\\\":\\\"Account\\\",\\\"logo\\\":\\\"./images/account.svg\\\",\\\"new\\\":true,\\\"featured\\\":false,\\\"position\\\":\\\"Junior Frontend Developer\\\",\\\"role\\\":\\\"Frontend\\\",\\\"level\\\":\\\"Junior\\\",\\\"postedAt\\\":\\\"2d ago\\\",\\\"contract\\\":\\\"Part Time\\\",\\\"location\\\":\\\"USA Only\\\",\\\"languages\\\":[\\\"JavaScript\\\"],\\\"tools\\\":[\\\"React\\\",\\\"Sass\\\"]},{\\\"id\\\":4,\\\"company\\\":\\\"MyHome\\\",\\\"logo\\\":\\\"./images/myhome.svg\\\",\\\"new\\\":false,\\\"featured\\\":false,\\\"position\\\":\\\"Junior Frontend Developer\\\",\\\"role\\\":\\\"Frontend\\\",\\\"level\\\":\\\"Junior\\\",\\\"postedAt\\\":\\\"5d ago\\\",\\\"contract\\\":\\\"Contract\\\",\\\"location\\\":\\\"USA Only\\\",\\\"languages\\\":[\\\"CSS\\\",\\\"JavaScript\\\"],\\\"tools\\\":[]},{\\\"id\\\":5,\\\"company\\\":\\\"Loop Studios\\\",\\\"logo\\\":\\\"./images/loop-studios.svg\\\",\\\"new\\\":false,\\\"featured\\\":false,\\\"position\\\":\\\"Software Engineer\\\",\\\"role\\\":\\\"FullStack\\\",\\\"level\\\":\\\"Midweight\\\",\\\"postedAt\\\":\\\"1w ago\\\",\\\"contract\\\":\\\"Full Time\\\",\\\"location\\\":\\\"Worldwide\\\",\\\"languages\\\":[\\\"JavaScript\\\"],\\\"tools\\\":[\\\"Ruby\\\",\\\"Sass\\\"]},{\\\"id\\\":6,\\\"company\\\":\\\"FaceIt\\\",\\\"logo\\\":\\\"./images/faceit.svg\\\",\\\"new\\\":false,\\\"featured\\\":false,\\\"position\\\":\\\"Junior Backend Developer\\\",\\\"role\\\":\\\"Backend\\\",\\\"level\\\":\\\"Junior\\\",\\\"postedAt\\\":\\\"2w ago\\\",\\\"contract\\\":\\\"Full Time\\\",\\\"location\\\":\\\"UK Only\\\",\\\"languages\\\":[\\\"Ruby\\\"],\\\"tools\\\":[\\\"RoR\\\"]},{\\\"id\\\":7,\\\"company\\\":\\\"Shortly\\\",\\\"logo\\\":\\\"./images/shortly.svg\\\",\\\"new\\\":false,\\\"featured\\\":false,\\\"position\\\":\\\"Junior Developer\\\",\\\"role\\\":\\\"Frontend\\\",\\\"level\\\":\\\"Junior\\\",\\\"postedAt\\\":\\\"2w ago\\\",\\\"contract\\\":\\\"Full Time\\\",\\\"location\\\":\\\"Worldwide\\\",\\\"languages\\\":[\\\"HTML\\\",\\\"JavaScript\\\"],\\\"tools\\\":[\\\"Sass\\\"]},{\\\"id\\\":8,\\\"company\\\":\\\"Insure\\\",\\\"logo\\\":\\\"./images/insure.svg\\\",\\\"new\\\":false,\\\"featured\\\":false,\\\"position\\\":\\\"Junior Frontend Developer\\\",\\\"role\\\":\\\"Frontend\\\",\\\"level\\\":\\\"Junior\\\",\\\"postedAt\\\":\\\"2w ago\\\",\\\"contract\\\":\\\"Full Time\\\",\\\"location\\\":\\\"USA Only\\\",\\\"languages\\\":[\\\"JavaScript\\\"],\\\"tools\\\":[\\\"Vue\\\",\\\"Sass\\\"]},{\\\"id\\\":9,\\\"company\\\":\\\"Eyecam Co.\\\",\\\"logo\\\":\\\"./images/eyecam-co.svg\\\",\\\"new\\\":false,\\\"featured\\\":false,\\\"position\\\":\\\"Full Stack Engineer\\\",\\\"role\\\":\\\"Fullstack\\\",\\\"level\\\":\\\"Midweight\\\",\\\"postedAt\\\":\\\"3w ago\\\",\\\"contract\\\":\\\"Full Time\\\",\\\"location\\\":\\\"Worldwide\\\",\\\"languages\\\":[\\\"JavaScript\\\",\\\"Python\\\"],\\\"tools\\\":[\\\"Django\\\"]},{\\\"id\\\":10,\\\"company\\\":\\\"The Air Filter Company\\\",\\\"logo\\\":\\\"./images/the-air-filter-company.svg\\\",\\\"new\\\":false,\\\"featured\\\":false,\\\"position\\\":\\\"Front-end Dev\\\",\\\"role\\\":\\\"Frontend\\\",\\\"level\\\":\\\"Junior\\\",\\\"postedAt\\\":\\\"1mo ago\\\",\\\"contract\\\":\\\"Part Time\\\",\\\"location\\\":\\\"Worldwide\\\",\\\"languages\\\":[\\\"JavaScript\\\"],\\\"tools\\\":[\\\"React\\\",\\\"Sass\\\"]}]}\");\n\n//# sourceURL=webpack:///./src/db.json?");

/***/ }),

/***/ "./src/styles/sass/main.scss":
/*!***********************************!*\
  !*** ./src/styles/sass/main.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/sass/main.scss?");

/***/ })

/******/ });