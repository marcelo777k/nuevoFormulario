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
    email: '${label} is not validate email',
    password: '${label} esta equivocado el password'
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
            name: ['user', name],
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
            name: ['user', lastName],
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
            name: ['user', age],
            label: "Edad",
            rules: [{
              type: 'number',
              min: 1,
              max: 150
            }],
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(InputNumber, {}, void 0, false, {
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
            name: ['user', 'password'],
            label: "Password",
            rules: [{
              required: true
            }],
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].Password, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
            wrapperCol: _objectSpread(_objectSpread({}, layout.wrapperCol), {}, {
              offset: 8
            }),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              type: "primary",
              htmlType: "submit",
              children: "Submit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbIlRpdGxlIiwiVHlwb2dyYXBoeSIsImxheW91dCIsImxhYmVsQ29sIiwic3BhbiIsIndyYXBwZXJDb2wiLCJ0YWlsTGF5b3V0Iiwib2Zmc2V0Iiwib25GaW5pc2giLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwidmFsaWRhdGVNZXNzYWdlcyIsInJlcXVpcmVkIiwidHlwZXMiLCJlbWFpbCIsInBhc3N3b3JkIiwiUmVnaXN0ZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwidGV4dEFsaWduIiwibmFtZSIsImxhc3ROYW1lIiwiYWdlIiwidHlwZSIsIm1pbiIsIm1heCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0lBR09BLEssR0FBT0MsK0MsQ0FBUEQsSztBQUdQLElBQU1FLE1BQU0sR0FBQztBQUNaQyxVQUFRLEVBQUM7QUFBQ0MsUUFBSSxFQUFDO0FBQU4sR0FERztBQUVaQyxZQUFVLEVBQUM7QUFBQ0QsUUFBSSxFQUFDO0FBQU47QUFGQyxDQUFiO0FBSUEsSUFBTUUsVUFBVSxHQUFDO0FBQ2hCRCxZQUFVLEVBQUM7QUFBQ0UsVUFBTSxFQUFDLENBQVI7QUFBVUgsUUFBSSxFQUFDO0FBQWY7QUFESyxDQUFqQjs7QUFJQSxJQUFNSSxRQUFRLEdBQUMsU0FBVEEsUUFBUyxDQUFBQyxNQUFNLEVBQUU7QUFDdEJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaO0FBQ0EsQ0FGRDs7QUFLQSxJQUFNRyxnQkFBZ0IsR0FBQztBQUN0QkMsVUFBUSxFQUFDLHVCQURhO0FBRXRCQyxPQUFLLEVBQUM7QUFDTEMsU0FBSyxFQUFDLGdDQUREO0FBRUxDLFlBQVEsRUFBQztBQUZKO0FBRmdCLENBQXZCOztBQVFBLElBQU1DLFFBQVEsR0FBQyxTQUFUQSxRQUFTLEdBQUk7QUFDbEIsc0JBQ0M7QUFBQSwyQkFDQyxxRUFBQyx3Q0FBRDtBQUFLLGFBQU8sRUFBQyxRQUFiO0FBQUEsNkJBQ0MscUVBQUMsd0NBQUQ7QUFBQSwrQkFFQyxxRUFBQyx5Q0FBRDtBQUNDLGVBQUssRUFBRTtBQUFDQywyQkFBZSxFQUFDLFNBQWpCO0FBQTJCQyxtQkFBTyxFQUFDO0FBQW5DO0FBRFIsV0FFS2pCLE1BRkw7QUFHQyxjQUFJLEVBQUMsZUFITjtBQUlDLGtCQUFRLEVBQUVNLFFBSlg7QUFLQywwQkFBZ0IsRUFBRUksZ0JBTG5CO0FBQUEsa0NBT0MscUVBQUMsS0FBRDtBQUFPLGlCQUFLLEVBQUU7QUFBQ1EsdUJBQVMsRUFBQztBQUFYLGFBQWQ7QUFBb0MsaUJBQUssRUFBRSxDQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRCxlQVVDLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUNDLGdCQUFJLEVBQUUsQ0FBQyxNQUFELEVBQVFDLElBQVIsQ0FEUDtBQUVDLGlCQUFLLEVBQUMsUUFGUDtBQUdDLGlCQUFLLEVBQUUsQ0FBQztBQUFDUixzQkFBUSxFQUFDO0FBQVYsYUFBRCxDQUhSO0FBQUEsbUNBS0MscUVBQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVkQsZUFrQkMscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0MsZ0JBQUksRUFBRSxDQUFDLE1BQUQsRUFBUVMsUUFBUixDQURQO0FBRUMsaUJBQUssRUFBQyxVQUZQO0FBR0MsaUJBQUssRUFBRSxDQUFDO0FBQUNULHNCQUFRLEVBQUM7QUFBVixhQUFELENBSFI7QUFBQSxtQ0FLQyxxRUFBQywwQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFsQkQsZUEwQkMscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0MsZ0JBQUksRUFBRSxDQUFDLE1BQUQsRUFBUVUsR0FBUixDQURQO0FBRUMsaUJBQUssRUFBQyxNQUZQO0FBR0MsaUJBQUssRUFBRSxDQUFDO0FBQUNDLGtCQUFJLEVBQUMsUUFBTjtBQUFnQkMsaUJBQUcsRUFBQyxDQUFwQjtBQUFzQkMsaUJBQUcsRUFBQztBQUExQixhQUFELENBSFI7QUFBQSxtQ0FLQyxxRUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTFCRCxlQW1DQyxxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFDQyxnQkFBSSxFQUFFLENBQUMsTUFBRCxFQUFRLE9BQVIsQ0FEUDtBQUVDLGlCQUFLLEVBQUMsT0FGUDtBQUdDLGlCQUFLLEVBQUUsQ0FBQztBQUFDRixrQkFBSSxFQUFDLE9BQU47QUFBY1gsc0JBQVEsRUFBQztBQUF2QixhQUFELENBSFI7QUFBQSxtQ0FLQyxxRUFBQywwQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFuQ0QsZUE0Q0MscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0MsZ0JBQUksRUFBRSxDQUFDLE1BQUQsRUFBUSxVQUFSLENBRFA7QUFFQyxpQkFBSyxFQUFDLFVBRlA7QUFHQyxpQkFBSyxFQUFFLENBQUM7QUFBQ0Esc0JBQVEsRUFBQztBQUFWLGFBQUQsQ0FIUjtBQUFBLG1DQUtDLHFFQUFDLDBDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE1Q0QsZUFzREMscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0Msc0JBQVUsa0NBQU1YLE1BQU0sQ0FBQ0csVUFBYjtBQUF3QkUsb0JBQU0sRUFBQztBQUEvQixjQURYO0FBQUEsbUNBR0MscUVBQUMsMkNBQUQ7QUFBUSxrQkFBSSxFQUFDLFNBQWI7QUFBdUIsc0JBQVEsRUFBQyxRQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBdEREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsbUJBREQ7QUEyRUEsQ0E1RUQ7O0tBQU1VLFE7QUE2RVNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlZ2lzdGVyLjg3MzYzNzU1OThlY2UzZTk0N2I5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Zvcm0sIElucHV0LCBCdXR0b24sICBDaGVja2JveCwgVHlwb2dyYXBoeX0gZnJvbSAnYW50ZCc7XHJcblxyXG5pbXBvcnQge1JvdyxDb2x9IGZyb20gJ2FudGQnO1xyXG5cclxuXHJcbmNvbnN0IHtUaXRsZX09VHlwb2dyYXBoeTtcclxuXHJcblxyXG5jb25zdCBsYXlvdXQ9e1xyXG5cdGxhYmVsQ29sOntzcGFuOjh9LFxyXG5cdHdyYXBwZXJDb2w6e3NwYW46MTZ9LFxyXG59O1xyXG5jb25zdCB0YWlsTGF5b3V0PXtcclxuXHR3cmFwcGVyQ29sOntvZmZzZXQ6OCxzcGFuOjE2fVxyXG59XHJcblxyXG5jb25zdCBvbkZpbmlzaD12YWx1ZXM9PntcclxuXHRjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG59XHJcblxyXG5cclxuY29uc3QgdmFsaWRhdGVNZXNzYWdlcz17XHJcblx0cmVxdWlyZWQ6JyR7bGFiZWx9IGlzIHJlcXVpcmVkIScsXHJcblx0dHlwZXM6e1xyXG5cdFx0ZW1haWw6JyR7bGFiZWx9IGlzIG5vdCB2YWxpZGF0ZSBlbWFpbCcsXHJcblx0XHRwYXNzd29yZDonJHtsYWJlbH0gZXN0YSBlcXVpdm9jYWRvIGVsIHBhc3N3b3JkJyxcclxuXHR9XHJcbn07XHJcblxyXG5jb25zdCBSZWdpc3Rlcj0oKT0+e1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8Um93IGp1c3RpZnk9XCJjZW50ZXJcIj5cclxuXHRcdFx0XHQ8Q29sPlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8Rm9ybVxyXG5cdFx0XHRcdFx0XHRzdHlsZT17e2JhY2tncm91bmRDb2xvcjonI0VDRkJCMicscGFkZGluZzonMXJlbSAycmVtIDFyZW0gMXJlbSd9fVxyXG5cdFx0XHRcdFx0XHR7Li4ubGF5b3V0fVxyXG5cdFx0XHRcdFx0XHRuYW1lPVwibmVzdC1tZXNzYWdlc1wiIFxyXG5cdFx0XHRcdFx0XHRvbkZpbmlzaD17b25GaW5pc2h9XHJcblx0XHRcdFx0XHRcdHZhbGlkYXRlTWVzc2FnZXM9e3ZhbGlkYXRlTWVzc2FnZXN9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxUaXRsZSBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319IGxldmVsPXsyfT5SZWdpc3RybzwvVGl0bGU+XHJcblx0XHRcdFx0XHRcdFxyXG5cclxuXHRcdFx0XHRcdFx0PEZvcm0uSXRlbVxyXG5cdFx0XHRcdFx0XHRcdG5hbWU9e1sndXNlcicsbmFtZV19XHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJOb21icmVcIlxyXG5cdFx0XHRcdFx0XHRcdHJ1bGVzPXtbe3JlcXVpcmVkOnRydWV9XX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxJbnB1dC8+XHRcclxuXHRcdFx0XHRcdFx0PC9Gb3JtLkl0ZW0+XHJcblxyXG5cdFx0XHRcdFx0XHQ8Rm9ybS5JdGVtXHJcblx0XHRcdFx0XHRcdFx0bmFtZT17Wyd1c2VyJyxsYXN0TmFtZV19XHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJBcGVsbGlkb1wiXHJcblx0XHRcdFx0XHRcdFx0cnVsZXM9e1t7cmVxdWlyZWQ6dHJ1ZX1dfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PElucHV0Lz5cdFxyXG5cdFx0XHRcdFx0XHQ8L0Zvcm0uSXRlbT5cclxuXHJcblx0XHRcdFx0XHRcdDxGb3JtLkl0ZW1cclxuXHRcdFx0XHRcdFx0XHRuYW1lPXtbJ3VzZXInLGFnZV19XHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJFZGFkXCJcclxuXHRcdFx0XHRcdFx0XHRydWxlcz17W3t0eXBlOidudW1iZXInLCBtaW46MSxtYXg6MTUwfV19XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8SW5wdXROdW1iZXIvPlxyXG5cdFx0XHRcdFx0XHQ8L0Zvcm0uSXRlbT5cclxuXHJcblxyXG5cdFx0XHRcdFx0XHQ8Rm9ybS5JdGVtXHJcblx0XHRcdFx0XHRcdFx0bmFtZT17Wyd1c2VyJywnZW1haWwnXX1cclxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIkVtYWlsXCJcclxuXHRcdFx0XHRcdFx0XHRydWxlcz17W3t0eXBlOidlbWFpbCcscmVxdWlyZWQ6dHJ1ZX1dfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PElucHV0Lz5cclxuXHRcdFx0XHRcdFx0PC9Gb3JtLkl0ZW0+XHJcblxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PEZvcm0uSXRlbVxyXG5cdFx0XHRcdFx0XHRcdG5hbWU9e1sndXNlcicsJ3Bhc3N3b3JkJ119XHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJQYXNzd29yZFwiXHJcblx0XHRcdFx0XHRcdFx0cnVsZXM9e1t7cmVxdWlyZWQ6dHJ1ZX1dfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PElucHV0LlBhc3N3b3JkLz5cclxuXHRcdFx0XHRcdFx0PC9Gb3JtLkl0ZW0+XHJcblxyXG5cclxuXHJcblx0XHRcdFx0XHRcdDxGb3JtLkl0ZW1cclxuXHRcdFx0XHRcdFx0XHR3cmFwcGVyQ29sPXt7Li4ubGF5b3V0LndyYXBwZXJDb2wsb2Zmc2V0Ojh9fVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRTdWJtaXRcclxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9Gb3JtLkl0ZW0+XHJcblx0XHRcdFx0XHQ8L0Zvcm0+XHJcblxyXG5cdFx0XHRcdDwvQ29sPlxyXG5cdFx0XHQ8L1Jvdz5cclxuXHRcdFx0XHJcblxyXG5cdFx0XHRcclxuXHRcdDwvPlxyXG5cdCk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==