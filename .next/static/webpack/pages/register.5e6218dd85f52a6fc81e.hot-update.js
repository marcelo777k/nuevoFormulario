webpackHotUpdate_N_E("pages/register",{

/***/ "./src/pages/register.js":
/*!*******************************!*\
  !*** ./src/pages/register.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");




var _jsxFileName = "G:\\practicasTutoriales\\next\\formulario1\\src\\pages\\register.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var Title = antd__WEBPACK_IMPORTED_MODULE_2__["Typography"].Title;
var layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
var tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};

var onFinish = function onFinish(values) {
  console.log(values);
};

var validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email'
  }
};

var Register = function Register() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      justify: "center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], _objectSpread(_objectSpread({
          style: {
            backgroundColor: '#ECFBB2',
            padding: '1rem 2rem 1rem 1rem'
          }
        }, layout), {}, {
          name: "nest-messages",
          onFinish: onFinish,
          validateMessages: validateMessages,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Title, {
            style: {
              textAlign: 'center'
            },
            level: 2,
            children: "Registro"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
            name: ['user', 'name'],
            label: "Nombre",
            rules: [{
              required: true
            }],
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
            name: ['user', 'lastName'],
            label: "Apellido",
            rules: [{
              required: true
            }],
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
            name: ['user', 'age'],
            label: "Edad",
            rules: [{
              type: 'number',
              min: 1,
              max: 150,
              required: true
            }],
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["InputNumber"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
            name: ['user', 'email'],
            label: "Email",
            rules: [{
              type: 'email',
              required: true
            }],
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
            wrapperCol: _objectSpread(_objectSpread({}, layout.wrapperCol), {}, {
              offset: 8
            }),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              type: "primary",
              htmlType: "submit",
              children: "Registro"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 7
          }, _this)]
        }), void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }, _this)
  }, void 0, false);
};

_c = Register;
/* harmony default export */ __webpack_exports__["default"] = (Register);

var _c;

$RefreshReg$(_c, "Register");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbIlRpdGxlIiwiVHlwb2dyYXBoeSIsImxheW91dCIsImxhYmVsQ29sIiwic3BhbiIsIndyYXBwZXJDb2wiLCJ0YWlsTGF5b3V0Iiwib2Zmc2V0Iiwib25GaW5pc2giLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwidmFsaWRhdGVNZXNzYWdlcyIsInJlcXVpcmVkIiwidHlwZXMiLCJlbWFpbCIsIlJlZ2lzdGVyIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsInRleHRBbGlnbiIsInR5cGUiLCJtaW4iLCJtYXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtJQUdPQSxLLEdBQU9DLCtDLENBQVBELEs7QUFHUCxJQUFNRSxNQUFNLEdBQUM7QUFDWkMsVUFBUSxFQUFDO0FBQUNDLFFBQUksRUFBQztBQUFOLEdBREc7QUFFWkMsWUFBVSxFQUFDO0FBQUNELFFBQUksRUFBQztBQUFOO0FBRkMsQ0FBYjtBQUlBLElBQU1FLFVBQVUsR0FBQztBQUNoQkQsWUFBVSxFQUFDO0FBQUNFLFVBQU0sRUFBQyxDQUFSO0FBQVVILFFBQUksRUFBQztBQUFmO0FBREssQ0FBakI7O0FBSUEsSUFBTUksUUFBUSxHQUFDLFNBQVRBLFFBQVMsQ0FBQUMsTUFBTSxFQUFFO0FBQ3RCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWjtBQUNBLENBRkQ7O0FBS0EsSUFBTUcsZ0JBQWdCLEdBQUM7QUFDdEJDLFVBQVEsRUFBQyx1QkFEYTtBQUV0QkMsT0FBSyxFQUFDO0FBQ0xDLFNBQUssRUFBQztBQUREO0FBRmdCLENBQXZCOztBQVFBLElBQU1DLFFBQVEsR0FBQyxTQUFUQSxRQUFTLEdBQUk7QUFDbEIsc0JBQ0M7QUFBQSwyQkFDQyxxRUFBQyx3Q0FBRDtBQUFLLGFBQU8sRUFBQyxRQUFiO0FBQUEsNkJBQ0MscUVBQUMsd0NBQUQ7QUFBQSwrQkFFQyxxRUFBQyx5Q0FBRDtBQUNDLGVBQUssRUFBRTtBQUFDQywyQkFBZSxFQUFDLFNBQWpCO0FBQTJCQyxtQkFBTyxFQUFDO0FBQW5DO0FBRFIsV0FFS2hCLE1BRkw7QUFHQyxjQUFJLEVBQUMsZUFITjtBQUlDLGtCQUFRLEVBQUVNLFFBSlg7QUFLQywwQkFBZ0IsRUFBRUksZ0JBTG5CO0FBQUEsa0NBT0MscUVBQUMsS0FBRDtBQUFPLGlCQUFLLEVBQUU7QUFBQ08sdUJBQVMsRUFBQztBQUFYLGFBQWQ7QUFBb0MsaUJBQUssRUFBRSxDQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRCxlQVVDLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUNDLGdCQUFJLEVBQUUsQ0FBQyxNQUFELEVBQVEsTUFBUixDQURQO0FBRUMsaUJBQUssRUFBQyxRQUZQO0FBR0MsaUJBQUssRUFBRSxDQUFDO0FBQUNOLHNCQUFRLEVBQUM7QUFBVixhQUFELENBSFI7QUFBQSxtQ0FLQyxxRUFBQywwQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRCxlQWtCQyxxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFDQyxnQkFBSSxFQUFFLENBQUMsTUFBRCxFQUFRLFVBQVIsQ0FEUDtBQUVDLGlCQUFLLEVBQUMsVUFGUDtBQUdDLGlCQUFLLEVBQUUsQ0FBQztBQUFDQSxzQkFBUSxFQUFDO0FBQVYsYUFBRCxDQUhSO0FBQUEsbUNBS0MscUVBQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbEJELGVBMEJDLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUNDLGdCQUFJLEVBQUUsQ0FBQyxNQUFELEVBQVEsS0FBUixDQURQO0FBRUMsaUJBQUssRUFBQyxNQUZQO0FBR0MsaUJBQUssRUFBRSxDQUFDO0FBQUNPLGtCQUFJLEVBQUMsUUFBTjtBQUFnQkMsaUJBQUcsRUFBQyxDQUFwQjtBQUFzQkMsaUJBQUcsRUFBQyxHQUExQjtBQUE4QlQsc0JBQVEsRUFBQztBQUF2QyxhQUFELENBSFI7QUFBQSxtQ0FLQyxxRUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkExQkQsZUFtQ0MscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0MsZ0JBQUksRUFBRSxDQUFDLE1BQUQsRUFBUSxPQUFSLENBRFA7QUFFQyxpQkFBSyxFQUFDLE9BRlA7QUFHQyxpQkFBSyxFQUFFLENBQUM7QUFBQ08sa0JBQUksRUFBQyxPQUFOO0FBQWNQLHNCQUFRLEVBQUM7QUFBdkIsYUFBRCxDQUhSO0FBQUEsbUNBS0MscUVBQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbkNELGVBMkNDLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUNDLHNCQUFVLGtDQUFNWCxNQUFNLENBQUNHLFVBQWI7QUFBd0JFLG9CQUFNLEVBQUM7QUFBL0IsY0FEWDtBQUFBLG1DQUdDLHFFQUFDLDJDQUFEO0FBQVEsa0JBQUksRUFBQyxTQUFiO0FBQXVCLHNCQUFRLEVBQUMsUUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTNDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELG1CQUREO0FBaUVBLENBbEVEOztLQUFNUyxRO0FBbUVTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3Rlci41ZTYyMThkZDg1ZjUyYTZmYzgxZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGb3JtLCBJbnB1dCwgQnV0dG9uLCBJbnB1dE51bWJlciAsQ2hlY2tib3gsIFR5cG9ncmFwaHl9IGZyb20gJ2FudGQnO1xyXG5cclxuaW1wb3J0IHtSb3csQ29sfSBmcm9tICdhbnRkJztcclxuXHJcblxyXG5jb25zdCB7VGl0bGV9PVR5cG9ncmFwaHk7XHJcblxyXG5cclxuY29uc3QgbGF5b3V0PXtcclxuXHRsYWJlbENvbDp7c3Bhbjo4fSxcclxuXHR3cmFwcGVyQ29sOntzcGFuOjE2fSxcclxufTtcclxuY29uc3QgdGFpbExheW91dD17XHJcblx0d3JhcHBlckNvbDp7b2Zmc2V0Ojgsc3BhbjoxNn1cclxufVxyXG5cclxuY29uc3Qgb25GaW5pc2g9dmFsdWVzPT57XHJcblx0Y29uc29sZS5sb2codmFsdWVzKTtcclxufVxyXG5cclxuXHJcbmNvbnN0IHZhbGlkYXRlTWVzc2FnZXM9e1xyXG5cdHJlcXVpcmVkOicke2xhYmVsfSBpcyByZXF1aXJlZCEnLFxyXG5cdHR5cGVzOntcclxuXHRcdGVtYWlsOicke2xhYmVsfSBpcyBub3QgdmFsaWRhdGUgZW1haWwnLFxyXG5cdFx0XHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgUmVnaXN0ZXI9KCk9PntcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PFJvdyBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcblx0XHRcdFx0PENvbD5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PEZvcm1cclxuXHRcdFx0XHRcdFx0c3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6JyNFQ0ZCQjInLHBhZGRpbmc6JzFyZW0gMnJlbSAxcmVtIDFyZW0nfX1cclxuXHRcdFx0XHRcdFx0ey4uLmxheW91dH1cclxuXHRcdFx0XHRcdFx0bmFtZT1cIm5lc3QtbWVzc2FnZXNcIiBcclxuXHRcdFx0XHRcdFx0b25GaW5pc2g9e29uRmluaXNofVxyXG5cdFx0XHRcdFx0XHR2YWxpZGF0ZU1lc3NhZ2VzPXt2YWxpZGF0ZU1lc3NhZ2VzfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8VGl0bGUgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fSBsZXZlbD17Mn0+UmVnaXN0cm88L1RpdGxlPlxyXG5cdFx0XHRcdFx0XHRcclxuXHJcblx0XHRcdFx0XHRcdDxGb3JtLkl0ZW1cclxuXHRcdFx0XHRcdFx0XHRuYW1lPXtbJ3VzZXInLCduYW1lJ119XHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJOb21icmVcIlxyXG5cdFx0XHRcdFx0XHRcdHJ1bGVzPXtbe3JlcXVpcmVkOnRydWV9XX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxJbnB1dC8+XHRcclxuXHRcdFx0XHRcdFx0PC9Gb3JtLkl0ZW0+XHJcblxyXG5cdFx0XHRcdFx0XHQ8Rm9ybS5JdGVtXHJcblx0XHRcdFx0XHRcdFx0bmFtZT17Wyd1c2VyJywnbGFzdE5hbWUnXX1cclxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIkFwZWxsaWRvXCJcclxuXHRcdFx0XHRcdFx0XHRydWxlcz17W3tyZXF1aXJlZDp0cnVlfV19XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8SW5wdXQvPlx0XHJcblx0XHRcdFx0XHRcdDwvRm9ybS5JdGVtPlxyXG5cclxuXHRcdFx0XHRcdFx0PEZvcm0uSXRlbVxyXG5cdFx0XHRcdFx0XHRcdG5hbWU9e1sndXNlcicsJ2FnZSddfVxyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPVwiRWRhZFwiXHJcblx0XHRcdFx0XHRcdFx0cnVsZXM9e1t7dHlwZTonbnVtYmVyJywgbWluOjEsbWF4OjE1MCxyZXF1aXJlZDp0cnVlfV19XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8SW5wdXROdW1iZXIvPlxyXG5cdFx0XHRcdFx0XHQ8L0Zvcm0uSXRlbT5cclxuXHJcblxyXG5cdFx0XHRcdFx0XHQ8Rm9ybS5JdGVtXHJcblx0XHRcdFx0XHRcdFx0bmFtZT17Wyd1c2VyJywnZW1haWwnXX1cclxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIkVtYWlsXCJcclxuXHRcdFx0XHRcdFx0XHRydWxlcz17W3t0eXBlOidlbWFpbCcscmVxdWlyZWQ6dHJ1ZX1dfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PElucHV0Lz5cclxuXHRcdFx0XHRcdFx0PC9Gb3JtLkl0ZW0+XHJcblxyXG5cdFx0XHRcdFx0XHQ8Rm9ybS5JdGVtXHJcblx0XHRcdFx0XHRcdFx0d3JhcHBlckNvbD17ey4uLmxheW91dC53cmFwcGVyQ29sLG9mZnNldDo4fX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0UmVnaXN0cm9cclxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9Gb3JtLkl0ZW0+XHJcblxyXG5cdFx0XHRcdFx0PC9Gb3JtPlxyXG5cclxuXHRcdFx0XHQ8L0NvbD5cclxuXHRcdFx0PC9Sb3c+XHJcblx0XHRcdFxyXG5cclxuXHRcdFx0XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyOyJdLCJzb3VyY2VSb290IjoiIn0=