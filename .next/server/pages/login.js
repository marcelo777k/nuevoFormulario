module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "G:\\practicasTutoriales\\next\\2ejercicio\\pages\\login.js";



const Login = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  className: "jsx-2131750688" + " " + "wrapper",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
      className: "jsx-2131750688",
      children: "Login"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "stylesheet",
      href: "https://use.fontawesome.com/releases/v5.15.1/css/all.css",
      integrity: "sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp",
      crossorigin: "anonymous",
      className: "jsx-2131750688"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    action: "#",
    className: "jsx-2131750688" + " " + "form0",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
      className: "jsx-2131750688" + " " + "form0_0_block",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-2131750688" + " " + "form0_0_block2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "jsx-2131750688" + " " + "form0_0 form0_0_title",
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "jsx-2131750688" + " " + "form0_0",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "jsx-2131750688" + " " + "fas fa-envelope fa-lg form0_0_icono"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 9
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            placeholder: "Correo electr\xF3nico",
            className: "jsx-2131750688"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 9
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 8
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "jsx-2131750688" + " " + "form0_0",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "jsx-2131750688" + " " + "fas fa-lock fa-lg form0_0_icono"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 9
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            placeholder: "Contrase\xF1a",
            className: "jsx-2131750688"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 9
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 8
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "jsx-2131750688" + " " + "form0_0",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "button",
            value: "Ingresa",
            className: "jsx-2131750688" + " " + "form0_0_btn"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 9
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 8
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 8
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 6
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2131750688",
    children: ".wrapper.jsx-2131750688{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100vh;width:100vh;background-image:linear-gradient(to right top,#f1f9fd,#bad0d8,#84a9b1,#4e8489,#0a6060);}.form0.jsx-2131750688{display:block;background:#ecf0f1;width:300px;padding:10px;height:400px;background-image:url(\"https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png\");background-image:url(\"https://c.pxhere.com/photos/00/76/graffiti_background_grunge_street_art_graffiti_wall_graffiti_art_artistic_painted-1168697.jpg!d\");background-size:100% 100%;}.form0_0_block.jsx-2131750688{height:380px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.form0_0_block2.jsx-2131750688{background:rgb(232,232,232,0.9);padding:20px;}.form0_0.jsx-2131750688{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.form0_0_title.jsx-2131750688{font-weight:bold;}i.jsx-2131750688{margin-right:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.form0_0_btn.jsx-2131750688{width:90px;height:27px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6XFxwcmFjdGljYXNUdXRvcmlhbGVzXFxuZXh0XFwyZWplcmNpY2lvXFxwYWdlc1xcbG9naW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNJLEFBR2tCLEFBUUMsQUFVQSxBQVFvQixBQUluQixBQU1JLEFBR0UsQUFPUixXQUNDLEVBNUJBLENBVkssR0E0QmpCLENBSWMsS0FPZCxTQXJCYSxDQWpCSCxZQUNDLEFBaUJYLGFBaEJXLGFBQzRFLEdBWmxFLEFBOEJGLGFBWEUsS0FzQkQsbURBVkcsZ0JBbEJrSSxNQU92SSxRQW5CRCxZQTBDaEIseURBVkQsZ0JBWnNCLFFBbkJYLGFBQ0QsWUFDaUYsc0JBVW5FLDBCQUMxQixrQkFRQyxxQkFsQkQiLCJmaWxlIjoiRzpcXHByYWN0aWNhc1R1dG9yaWFsZXNcXG5leHRcXDJlamVyY2ljaW9cXHBhZ2VzXFxsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmNvbnN0IExvZ2luPSgpPT4oXHJcblx0PGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcblx0XHQ8SGVhZD5cclxuXHRcdFx0PHRpdGxlPkxvZ2luPC90aXRsZT5cclxuXHRcdFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMTUuMS9jc3MvYWxsLmNzc1wiIGludGVncml0eT1cInNoYTM4NC12cDg2dlRSRlZKZ3BqRjlqaUlHUEVFcVlxbER3Z3lCZ0VGMTA5VkZqbXFHbUlZL1k0SFY0ZDNHcDJpclZmY3JwXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIi8+XHJcblx0XHQ8L0hlYWQ+XHJcblxyXG5cclxuICAgIFx0PGZvcm0gYWN0aW9uPVwiI1wiIGNsYXNzTmFtZT1cImZvcm0wXCIgPlxyXG4gICAgXHRcdDxmaWVsZHNldCBjbGFzc05hbWU9XCJmb3JtMF8wX2Jsb2NrXCI+XHJcbiAgICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0wXzBfYmxvY2syXCI+IFxyXG4gICAgXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmb3JtMF8wIGZvcm0wXzBfdGl0bGVcIj5Mb2dpbjwvcD5cclxuXHRcdFx0XHQgIFx0PHAgY2xhc3NOYW1lPVwiZm9ybTBfMFwiPlxyXG5cdFx0XHRcdCAgXHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lbnZlbG9wZSBmYS1sZyBmb3JtMF8wX2ljb25vXCI+PC9pPlxyXG5cdFx0XHRcdCAgXHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQ29ycmVvIGVsZWN0csOzbmljb1wiLz5cclxuXHRcdFx0XHQgIFx0PC9wPlxyXG5cdFx0XHRcdCAgXHQ8cCBjbGFzc05hbWU9XCJmb3JtMF8wXCI+XHJcblx0XHRcdFx0ICBcdFx0XHJcblx0XHRcdFx0ICBcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWxvY2sgZmEtbGcgZm9ybTBfMF9pY29ub1wiPjwvaT5cclxuXHRcdFx0XHQgIFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkNvbnRyYXNlw7FhXCIvPlxyXG5cdFx0XHRcdCAgXHQ8L3A+XHJcblx0XHRcdFx0ICBcdDxwIGNsYXNzTmFtZT1cImZvcm0wXzBcIj5cclxuXHRcdFx0XHQgIFx0XHQ8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybTBfMF9idG5cIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJJbmdyZXNhXCIgLz5cclxuXHJcblx0XHRcdFx0ICBcdDwvcD5cclxuXHRcdFx0ICBcdDwvZGl2PlxyXG5cdFx0ICBcdDwvZmllbGRzZXQ+XHJcbiAgICBcdDwvZm9ybT5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cdFx0ey8qIEFudGVzIGRlIGxhIHVsdGltYSBldGlxdWV0YSAqL31cclxuXHRcdDxzdHlsZSBqc3g+XHJcblx0XHRcdHtgXHJcblx0XHRcdFx0LndyYXBwZXJ7XHJcblx0XHRcdFx0XHRkaXNwbGF5OmZsZXg7XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6Y2VudGVyO1xyXG5cdFx0XHRcdFx0aGVpZ2h0OjEwMHZoO1xyXG5cdFx0XHRcdFx0d2lkdGg6MTAwdmg7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAjZjFmOWZkLCAjYmFkMGQ4LCAjODRhOWIxLCAjNGU4NDg5LCAjMGE2MDYwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LmZvcm0we1xyXG5cdFx0XHRcdFx0ZGlzcGxheTpibG9jaztcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6I2VjZjBmMTtcclxuXHRcdFx0XHRcdHdpZHRoOjMwMHB4O1xyXG5cdFx0XHRcdFx0cGFkZGluZzoxMHB4O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OjQwMHB4O1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9tZG4ubW96aWxsYWRlbW9zLm9yZy9maWxlcy82NDU3L21kbl9sb2dvX29ubHlfY29sb3IucG5nXCIpO1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9jLnB4aGVyZS5jb20vcGhvdG9zLzAwLzc2L2dyYWZmaXRpX2JhY2tncm91bmRfZ3J1bmdlX3N0cmVldF9hcnRfZ3JhZmZpdGlfd2FsbF9ncmFmZml0aV9hcnRfYXJ0aXN0aWNfcGFpbnRlZC0xMTY4Njk3LmpwZyFkXCIpO1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOjEwMCUgMTAwJTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHQuZm9ybTBfMF9ibG9ja3tcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OjM4MHB4O1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OmZsZXg7XHJcblx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6Y2VudGVyO1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0LmZvcm0wXzBfYmxvY2sye1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6cmdiKDIzMiwyMzIsMjMyLDAuOSk7XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZzoyMHB4O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC5mb3JtMF8we1xyXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6ZmxleDtcclxuXHRcdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjpyb3c7XHJcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQuZm9ybTBfMF90aXRsZXtcclxuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDpib2xkO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aXtcclxuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDoxMHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OmZsZXg7XHJcblx0XHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczpjZW50ZXI7XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC5mb3JtMF8wX2J0bntcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDo5MHB4O1xyXG5cdFx0XHRcdFx0XHRcdGhlaWdodDoyN3B4O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFxyXG5cclxuXHRcdFx0YH1cclxuXHRcdDwvc3R5bGU+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47Il19 */\n/*@ sourceURL=G:\\\\practicasTutoriales\\\\next\\\\2ejercicio\\\\pages\\\\login.js */"
  }, void 0, false, void 0, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 2
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbIkxvZ2luIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTs7QUFFQSxNQUFNQSxLQUFLLEdBQUMsbUJBQ1g7QUFBQSxzQ0FBZSxTQUFmO0FBQUEsMEJBQ0MscUVBQUMsZ0RBQUQ7QUFBQSw0QkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGVBRUM7QUFBTSxTQUFHLEVBQUMsWUFBVjtBQUF1QixVQUFJLEVBQUMsMERBQTVCO0FBQXVGLGVBQVMsRUFBQyx5RUFBakc7QUFBMkssaUJBQVcsRUFBQyxXQUF2TDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQU9JO0FBQU0sVUFBTSxFQUFDLEdBQWI7QUFBQSx3Q0FBMkIsT0FBM0I7QUFBQSwyQkFDQztBQUFBLDBDQUFvQixlQUFwQjtBQUFBLDZCQUNDO0FBQUEsNENBQWUsZ0JBQWY7QUFBQSxnQ0FDQztBQUFBLDhDQUFhLHVCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELGVBRUE7QUFBQSw4Q0FBYSxTQUFiO0FBQUEsa0NBQ0M7QUFBQSxnREFBYTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREQsZUFFQztBQUFPLGdCQUFJLEVBQUMsTUFBWjtBQUFtQix1QkFBVyxFQUFDLHVCQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkEsZUFNQTtBQUFBLDhDQUFhLFNBQWI7QUFBQSxrQ0FFQztBQUFBLGdEQUFhO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRCxlQUdDO0FBQU8sZ0JBQUksRUFBQyxNQUFaO0FBQW1CLHVCQUFXLEVBQUMsZUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5BLGVBV0E7QUFBQSw4Q0FBYSxTQUFiO0FBQUEsaUNBQ0M7QUFBK0IsZ0JBQUksRUFBQyxRQUFwQztBQUE2QyxpQkFBSyxFQUFDLFNBQW5EO0FBQUEsZ0RBQWlCO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQ7O0FBK0ZlQSxvRUFBZixFOzs7Ozs7Ozs7OztBQ2pHQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvbG9naW4uanNcIik7XG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5jb25zdCBMb2dpbj0oKT0+KFxyXG5cdDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG5cdFx0PEhlYWQ+XHJcblx0XHRcdDx0aXRsZT5Mb2dpbjwvdGl0bGU+XHJcblx0XHRcdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjE1LjEvY3NzL2FsbC5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtdnA4NnZUUkZWSmdwakY5amlJR1BFRXFZcWxEd2d5QmdFRjEwOVZGam1xR21JWS9ZNEhWNGQzR3AyaXJWZmNycFwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIvPlxyXG5cdFx0PC9IZWFkPlxyXG5cclxuXHJcbiAgICBcdDxmb3JtIGFjdGlvbj1cIiNcIiBjbGFzc05hbWU9XCJmb3JtMFwiID5cclxuICAgIFx0XHQ8ZmllbGRzZXQgY2xhc3NOYW1lPVwiZm9ybTBfMF9ibG9ja1wiPlxyXG4gICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtMF8wX2Jsb2NrMlwiPiBcclxuICAgIFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZm9ybTBfMCBmb3JtMF8wX3RpdGxlXCI+TG9naW48L3A+XHJcblx0XHRcdFx0ICBcdDxwIGNsYXNzTmFtZT1cImZvcm0wXzBcIj5cclxuXHRcdFx0XHQgIFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtZW52ZWxvcGUgZmEtbGcgZm9ybTBfMF9pY29ub1wiPjwvaT5cclxuXHRcdFx0XHQgIFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkNvcnJlbyBlbGVjdHLDs25pY29cIi8+XHJcblx0XHRcdFx0ICBcdDwvcD5cclxuXHRcdFx0XHQgIFx0PHAgY2xhc3NOYW1lPVwiZm9ybTBfMFwiPlxyXG5cdFx0XHRcdCAgXHRcdFxyXG5cdFx0XHRcdCAgXHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1sb2NrIGZhLWxnIGZvcm0wXzBfaWNvbm9cIj48L2k+XHJcblx0XHRcdFx0ICBcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJDb250cmFzZcOxYVwiLz5cclxuXHRcdFx0XHQgIFx0PC9wPlxyXG5cdFx0XHRcdCAgXHQ8cCBjbGFzc05hbWU9XCJmb3JtMF8wXCI+XHJcblx0XHRcdFx0ICBcdFx0PGlucHV0IGNsYXNzTmFtZT1cImZvcm0wXzBfYnRuXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiSW5ncmVzYVwiIC8+XHJcblxyXG5cdFx0XHRcdCAgXHQ8L3A+XHJcblx0XHRcdCAgXHQ8L2Rpdj5cclxuXHRcdCAgXHQ8L2ZpZWxkc2V0PlxyXG4gICAgXHQ8L2Zvcm0+XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHRcdHsvKiBBbnRlcyBkZSBsYSB1bHRpbWEgZXRpcXVldGEgKi99XHJcblx0XHQ8c3R5bGUganN4PlxyXG5cdFx0XHR7YFxyXG5cdFx0XHRcdC53cmFwcGVye1xyXG5cdFx0XHRcdFx0ZGlzcGxheTpmbGV4O1xyXG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuXHRcdFx0XHRcdGhlaWdodDoxMDB2aDtcclxuXHRcdFx0XHRcdHdpZHRoOjEwMHZoO1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgI2YxZjlmZCwgI2JhZDBkOCwgIzg0YTliMSwgIzRlODQ4OSwgIzBhNjA2MCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5mb3JtMHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6YmxvY2s7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiNlY2YwZjE7XHJcblx0XHRcdFx0XHR3aWR0aDozMDBweDtcclxuXHRcdFx0XHRcdHBhZGRpbmc6MTBweDtcclxuXHRcdFx0XHRcdGhlaWdodDo0MDBweDtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vbWRuLm1vemlsbGFkZW1vcy5vcmcvZmlsZXMvNjQ1Ny9tZG5fbG9nb19vbmx5X2NvbG9yLnBuZ1wiKTtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vYy5weGhlcmUuY29tL3Bob3Rvcy8wMC83Ni9ncmFmZml0aV9iYWNrZ3JvdW5kX2dydW5nZV9zdHJlZXRfYXJ0X2dyYWZmaXRpX3dhbGxfZ3JhZmZpdGlfYXJ0X2FydGlzdGljX3BhaW50ZWQtMTE2ODY5Ny5qcGchZFwiKTtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZToxMDAlIDEwMCU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LmZvcm0wXzBfYmxvY2t7XHJcblx0XHRcdFx0XHRcdGhlaWdodDozODBweDtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTpmbGV4O1xyXG5cdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC5mb3JtMF8wX2Jsb2NrMntcclxuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOnJnYigyMzIsMjMyLDIzMiwwLjkpO1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6MjBweDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQuZm9ybTBfMHtcclxuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OmZsZXg7XHJcblx0XHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246cm93O1xyXG5cdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0LmZvcm0wXzBfdGl0bGV7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGl7XHJcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6MTBweDtcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTpmbGV4O1xyXG5cdFx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6Y2VudGVyO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQuZm9ybTBfMF9idG57XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6OTBweDtcclxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6MjdweDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHJcblx0XHRcdGB9XHJcblx0XHQ8L3N0eWxlPlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9