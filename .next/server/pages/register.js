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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/register.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/register.js":
/*!*******************************!*\
  !*** ./src/pages/register.js ***!
  \*******************************/
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

var _jsxFileName = "G:\\practicasTutoriales\\next\\formularioBlockCha\\src\\pages\\register.js";



const Login = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  className: "jsx-1248031444" + " " + "wrapper",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
      className: "jsx-1248031444",
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
      className: "jsx-1248031444"
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
    className: "jsx-1248031444" + " " + "form0",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
      className: "jsx-1248031444" + " " + "form0_0_block",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-1248031444" + " " + "form0_0_block2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "jsx-1248031444" + " " + "form0_0 form0_0_title",
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "jsx-1248031444" + " " + "form0_0",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "jsx-1248031444" + " " + "form0_0_icono",
            children: "Nombre"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            placeholder: "Nombre",
            className: "jsx-1248031444"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "jsx-1248031444" + " " + "form0_0",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "jsx-1248031444" + " " + "form0_0_icono",
            children: "Apellido"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            placeholder: "Apellido",
            className: "jsx-1248031444"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "jsx-1248031444" + " " + "form0_0",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "jsx-1248031444" + " " + "form0_0_icono",
            children: "Edad"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            placeholder: "Edad",
            className: "jsx-1248031444"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "jsx-1248031444" + " " + "form0_0",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "jsx-1248031444" + " " + "form0_0_icono",
            children: "Correo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 9
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            placeholder: "Contrase\xF1a",
            className: "jsx-1248031444"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 9
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 8
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "jsx-1248031444" + " " + "form0_0 form0_0_btn_principal",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "button",
            value: "Registrar",
            className: "jsx-1248031444" + " " + "form0_0_btn"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 9
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 8
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 8
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 6
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1248031444",
    children: ".wrapper.jsx-1248031444{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100vh;width:100vh;background-image:linear-gradient(to right top,#f1f9fd,#bad0d8,#84a9b1,#4e8489,#0a6060);}.form0.jsx-1248031444{display:block;background:#ecf0f1;width:400px;padding:10px;height:400px;background-image:url(\"https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png\");background-image:url(\"https://c.pxhere.com/photos/00/76/graffiti_background_grunge_street_art_graffiti_wall_graffiti_art_artistic_painted-1168697.jpg!d\");background-size:100% 100%;}.form0_0_block.jsx-1248031444{height:380px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.form0_0_block2.jsx-1248031444{background:rgb(232,232,232,0.9);padding:20px;}.form0_0.jsx-1248031444{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.form0_0_icono.jsx-1248031444{display:block;margin-right:10px;width:4rem;}.form0_0_title.jsx-1248031444{font-weight:bold;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}i.jsx-1248031444{margin-right:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.form0_0_btn.jsx-1248031444{width:90px;height:27px;}.form0_0_btn_principal.jsx-1248031444{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6XFxwcmFjdGljYXNUdXRvcmlhbGVzXFxuZXh0XFxmb3JtdWxhcmlvQmxvY2tDaGFcXHNyY1xccGFnZXNcXHJlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDSSxBQUdrQixBQVFDLEFBVUEsQUFRb0IsQUFJbkIsQUFNQyxBQUtHLEFBS0UsQUFPUixBQUlZLFdBSFgsRUFuQ0EsQ0FWSyxBQTRCQyxHQUtBLENBTUosS0FPZCxTQTVCYSxBQVdGLENBNUJELEVBaUNhLFFBSnZCLEVBNUJXLEFBaUJYLGFBaEJXLGFBQzRFLEdBWmxFLEFBOEJGLGFBWEUsS0E2QkQsT0FTcEIsbUNBZEEsU0FaMkIsZ0JBbEI4SCxNQU92SSxRQW5CRCxZQWlEaEIsK0RBbEJELFVBWHNCLFFBbkJYLGFBQ0QsWUFDaUYsc0JBVW5FLDBCQUMxQixrQkFRQyxxQkFsQkQiLCJmaWxlIjoiRzpcXHByYWN0aWNhc1R1dG9yaWFsZXNcXG5leHRcXGZvcm11bGFyaW9CbG9ja0NoYVxcc3JjXFxwYWdlc1xccmVnaXN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5jb25zdCBMb2dpbj0oKT0+KFxyXG5cdDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG5cdFx0PEhlYWQ+XHJcblx0XHRcdDx0aXRsZT5Mb2dpbjwvdGl0bGU+XHJcblx0XHRcdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjE1LjEvY3NzL2FsbC5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtdnA4NnZUUkZWSmdwakY5amlJR1BFRXFZcWxEd2d5QmdFRjEwOVZGam1xR21JWS9ZNEhWNGQzR3AyaXJWZmNycFwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIvPlxyXG5cdFx0PC9IZWFkPlxyXG5cdFx0XHJcbiAgICBcdDxmb3JtIGFjdGlvbj1cIiNcIiBjbGFzc05hbWU9XCJmb3JtMFwiID5cclxuICAgIFx0XHQ8ZmllbGRzZXQgY2xhc3NOYW1lPVwiZm9ybTBfMF9ibG9ja1wiPlxyXG4gICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtMF8wX2Jsb2NrMlwiPiBcclxuICAgIFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZm9ybTBfMCBmb3JtMF8wX3RpdGxlXCI+TG9naW48L3A+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmb3JtMF8wXCI+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZvcm0wXzBfaWNvbm9cIj5Ob21icmU8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTm9tYnJlXCIvPlxyXG5cdFx0XHRcdCAgXHQ8L3A+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmb3JtMF8wXCI+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZvcm0wXzBfaWNvbm9cIj5BcGVsbGlkbzwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJBcGVsbGlkb1wiLz5cclxuXHRcdFx0XHQgIFx0PC9wPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZm9ybTBfMFwiPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmb3JtMF8wX2ljb25vXCI+RWRhZDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFZGFkXCIvPlxyXG5cdFx0XHRcdCAgXHQ8L3A+XHJcblx0XHRcdFx0ICBcdDxwIGNsYXNzTmFtZT1cImZvcm0wXzBcIj5cclxuXHRcdFx0XHRcdCAgXHQ8c3BhbiBjbGFzc05hbWU9XCJmb3JtMF8wX2ljb25vXCI+Q29ycmVvPC9zcGFuPlxyXG5cdFx0XHRcdCAgXHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQ29udHJhc2XDsWFcIi8+XHJcblx0XHRcdFx0ICBcdDwvcD5cclxuXHRcdFx0XHQgIFx0PHAgY2xhc3NOYW1lPVwiZm9ybTBfMCBmb3JtMF8wX2J0bl9wcmluY2lwYWxcIj5cclxuXHRcdFx0XHQgIFx0XHQ8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybTBfMF9idG5cIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJSZWdpc3RyYXJcIi8+XHJcblxyXG5cdFx0XHRcdCAgXHQ8L3A+XHJcblx0XHRcdCAgXHQ8L2Rpdj5cclxuXHRcdCAgXHQ8L2ZpZWxkc2V0PlxyXG4gICAgXHQ8L2Zvcm0+XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHRcdHsvKiBBbnRlcyBkZSBsYSB1bHRpbWEgZXRpcXVldGEgKi99XHJcblx0XHQ8c3R5bGUganN4PlxyXG5cdFx0XHR7YFxyXG5cdFx0XHRcdC53cmFwcGVye1xyXG5cdFx0XHRcdFx0ZGlzcGxheTpmbGV4O1xyXG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuXHRcdFx0XHRcdGhlaWdodDoxMDB2aDtcclxuXHRcdFx0XHRcdHdpZHRoOjEwMHZoO1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgI2YxZjlmZCwgI2JhZDBkOCwgIzg0YTliMSwgIzRlODQ4OSwgIzBhNjA2MCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5mb3JtMHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6YmxvY2s7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiNlY2YwZjE7XHJcblx0XHRcdFx0XHR3aWR0aDo0MDBweDtcclxuXHRcdFx0XHRcdHBhZGRpbmc6MTBweDtcclxuXHRcdFx0XHRcdGhlaWdodDo0MDBweDtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vbWRuLm1vemlsbGFkZW1vcy5vcmcvZmlsZXMvNjQ1Ny9tZG5fbG9nb19vbmx5X2NvbG9yLnBuZ1wiKTtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vYy5weGhlcmUuY29tL3Bob3Rvcy8wMC83Ni9ncmFmZml0aV9iYWNrZ3JvdW5kX2dydW5nZV9zdHJlZXRfYXJ0X2dyYWZmaXRpX3dhbGxfZ3JhZmZpdGlfYXJ0X2FydGlzdGljX3BhaW50ZWQtMTE2ODY5Ny5qcGchZFwiKTtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZToxMDAlIDEwMCU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LmZvcm0wXzBfYmxvY2t7XHJcblx0XHRcdFx0XHRcdGhlaWdodDozODBweDtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTpmbGV4O1xyXG5cdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC5mb3JtMF8wX2Jsb2NrMntcclxuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOnJnYigyMzIsMjMyLDIzMiwwLjkpO1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6MjBweDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQuZm9ybTBfMHtcclxuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OmZsZXg7XHJcblx0XHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246cm93O1xyXG5cdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC5mb3JtMF8wX2ljb25ve1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6YmxvY2s7XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OjEwcHg7XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6NHJlbTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQuZm9ybTBfMF90aXRsZXtcclxuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDpib2xkO1xyXG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246Y2VudGVyO1xyXG5cdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRpe1xyXG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OjEwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6ZmxleDtcclxuXHRcdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0LmZvcm0wXzBfYnRue1xyXG5cdFx0XHRcdFx0XHRcdHdpZHRoOjkwcHg7XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OjI3cHg7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0LmZvcm0wXzBfYnRuX3ByaW5jaXBhbHtcclxuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFxyXG5cclxuXHRcdFx0YH1cclxuXHRcdDwvc3R5bGU+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47Il19 */\n/*@ sourceURL=G:\\\\practicasTutoriales\\\\next\\\\formularioBlockCha\\\\src\\\\pages\\\\register.js */"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3JlZ2lzdGVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJMb2dpbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7O0FBRUEsTUFBTUEsS0FBSyxHQUFDLG1CQUNYO0FBQUEsc0NBQWUsU0FBZjtBQUFBLDBCQUNDLHFFQUFDLGdEQUFEO0FBQUEsNEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUVDO0FBQU0sU0FBRyxFQUFDLFlBQVY7QUFBdUIsVUFBSSxFQUFDLDBEQUE1QjtBQUF1RixlQUFTLEVBQUMseUVBQWpHO0FBQTJLLGlCQUFXLEVBQUMsV0FBdkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFNSTtBQUFNLFVBQU0sRUFBQyxHQUFiO0FBQUEsd0NBQTJCLE9BQTNCO0FBQUEsMkJBQ0M7QUFBQSwwQ0FBb0IsZUFBcEI7QUFBQSw2QkFDQztBQUFBLDRDQUFlLGdCQUFmO0FBQUEsZ0NBQ0M7QUFBQSw4Q0FBYSx1QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQUVGO0FBQUEsOENBQWEsU0FBYjtBQUFBLGtDQUNDO0FBQUEsZ0RBQWdCLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURELGVBRUM7QUFBTyxnQkFBSSxFQUFDLE1BQVo7QUFBbUIsdUJBQVcsRUFBQyxRQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkUsZUFNRjtBQUFBLDhDQUFhLFNBQWI7QUFBQSxrQ0FDQztBQUFBLGdEQUFnQixlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERCxlQUVDO0FBQU8sZ0JBQUksRUFBQyxNQUFaO0FBQW1CLHVCQUFXLEVBQUMsVUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5FLGVBVUY7QUFBQSw4Q0FBYSxTQUFiO0FBQUEsa0NBQ0M7QUFBQSxnREFBZ0IsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREQsZUFFQztBQUFPLGdCQUFJLEVBQUMsTUFBWjtBQUFtQix1QkFBVyxFQUFDLE1BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWRSxlQWNBO0FBQUEsOENBQWEsU0FBYjtBQUFBLGtDQUNDO0FBQUEsZ0RBQWdCLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURELGVBRUM7QUFBTyxnQkFBSSxFQUFDLE1BQVo7QUFBbUIsdUJBQVcsRUFBQyxlQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBZEEsZUFrQkE7QUFBQSw4Q0FBYSwrQkFBYjtBQUFBLGlDQUNDO0FBQStCLGdCQUFJLEVBQUMsUUFBcEM7QUFBNkMsaUJBQUssRUFBQyxXQUFuRDtBQUFBLGdEQUFpQjtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFsQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERDs7QUErR2VBLG9FQUFmLEU7Ozs7Ozs7Ozs7O0FDakhBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL3JlZ2lzdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvcmVnaXN0ZXIuanNcIik7XG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5jb25zdCBMb2dpbj0oKT0+KFxyXG5cdDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG5cdFx0PEhlYWQ+XHJcblx0XHRcdDx0aXRsZT5Mb2dpbjwvdGl0bGU+XHJcblx0XHRcdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjE1LjEvY3NzL2FsbC5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtdnA4NnZUUkZWSmdwakY5amlJR1BFRXFZcWxEd2d5QmdFRjEwOVZGam1xR21JWS9ZNEhWNGQzR3AyaXJWZmNycFwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIvPlxyXG5cdFx0PC9IZWFkPlxyXG5cdFx0XHJcbiAgICBcdDxmb3JtIGFjdGlvbj1cIiNcIiBjbGFzc05hbWU9XCJmb3JtMFwiID5cclxuICAgIFx0XHQ8ZmllbGRzZXQgY2xhc3NOYW1lPVwiZm9ybTBfMF9ibG9ja1wiPlxyXG4gICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtMF8wX2Jsb2NrMlwiPiBcclxuICAgIFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZm9ybTBfMCBmb3JtMF8wX3RpdGxlXCI+TG9naW48L3A+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmb3JtMF8wXCI+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZvcm0wXzBfaWNvbm9cIj5Ob21icmU8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTm9tYnJlXCIvPlxyXG5cdFx0XHRcdCAgXHQ8L3A+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmb3JtMF8wXCI+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZvcm0wXzBfaWNvbm9cIj5BcGVsbGlkbzwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJBcGVsbGlkb1wiLz5cclxuXHRcdFx0XHQgIFx0PC9wPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZm9ybTBfMFwiPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmb3JtMF8wX2ljb25vXCI+RWRhZDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFZGFkXCIvPlxyXG5cdFx0XHRcdCAgXHQ8L3A+XHJcblx0XHRcdFx0ICBcdDxwIGNsYXNzTmFtZT1cImZvcm0wXzBcIj5cclxuXHRcdFx0XHRcdCAgXHQ8c3BhbiBjbGFzc05hbWU9XCJmb3JtMF8wX2ljb25vXCI+Q29ycmVvPC9zcGFuPlxyXG5cdFx0XHRcdCAgXHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQ29udHJhc2XDsWFcIi8+XHJcblx0XHRcdFx0ICBcdDwvcD5cclxuXHRcdFx0XHQgIFx0PHAgY2xhc3NOYW1lPVwiZm9ybTBfMCBmb3JtMF8wX2J0bl9wcmluY2lwYWxcIj5cclxuXHRcdFx0XHQgIFx0XHQ8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybTBfMF9idG5cIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJSZWdpc3RyYXJcIi8+XHJcblxyXG5cdFx0XHRcdCAgXHQ8L3A+XHJcblx0XHRcdCAgXHQ8L2Rpdj5cclxuXHRcdCAgXHQ8L2ZpZWxkc2V0PlxyXG4gICAgXHQ8L2Zvcm0+XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHRcdHsvKiBBbnRlcyBkZSBsYSB1bHRpbWEgZXRpcXVldGEgKi99XHJcblx0XHQ8c3R5bGUganN4PlxyXG5cdFx0XHR7YFxyXG5cdFx0XHRcdC53cmFwcGVye1xyXG5cdFx0XHRcdFx0ZGlzcGxheTpmbGV4O1xyXG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuXHRcdFx0XHRcdGhlaWdodDoxMDB2aDtcclxuXHRcdFx0XHRcdHdpZHRoOjEwMHZoO1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgI2YxZjlmZCwgI2JhZDBkOCwgIzg0YTliMSwgIzRlODQ4OSwgIzBhNjA2MCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5mb3JtMHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6YmxvY2s7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiNlY2YwZjE7XHJcblx0XHRcdFx0XHR3aWR0aDo0MDBweDtcclxuXHRcdFx0XHRcdHBhZGRpbmc6MTBweDtcclxuXHRcdFx0XHRcdGhlaWdodDo0MDBweDtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vbWRuLm1vemlsbGFkZW1vcy5vcmcvZmlsZXMvNjQ1Ny9tZG5fbG9nb19vbmx5X2NvbG9yLnBuZ1wiKTtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vYy5weGhlcmUuY29tL3Bob3Rvcy8wMC83Ni9ncmFmZml0aV9iYWNrZ3JvdW5kX2dydW5nZV9zdHJlZXRfYXJ0X2dyYWZmaXRpX3dhbGxfZ3JhZmZpdGlfYXJ0X2FydGlzdGljX3BhaW50ZWQtMTE2ODY5Ny5qcGchZFwiKTtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZToxMDAlIDEwMCU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LmZvcm0wXzBfYmxvY2t7XHJcblx0XHRcdFx0XHRcdGhlaWdodDozODBweDtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTpmbGV4O1xyXG5cdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC5mb3JtMF8wX2Jsb2NrMntcclxuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOnJnYigyMzIsMjMyLDIzMiwwLjkpO1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6MjBweDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQuZm9ybTBfMHtcclxuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OmZsZXg7XHJcblx0XHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246cm93O1xyXG5cdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC5mb3JtMF8wX2ljb25ve1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6YmxvY2s7XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OjEwcHg7XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6NHJlbTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQuZm9ybTBfMF90aXRsZXtcclxuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDpib2xkO1xyXG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246Y2VudGVyO1xyXG5cdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRpe1xyXG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OjEwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6ZmxleDtcclxuXHRcdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0LmZvcm0wXzBfYnRue1xyXG5cdFx0XHRcdFx0XHRcdHdpZHRoOjkwcHg7XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OjI3cHg7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0LmZvcm0wXzBfYnRuX3ByaW5jaXBhbHtcclxuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFxyXG5cclxuXHRcdFx0YH1cclxuXHRcdDwvc3R5bGU+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=