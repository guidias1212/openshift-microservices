webpackHotUpdate_N_E("pages/tree/[dynamicRouteName]",{

/***/ "./components/WriteNoteButton.js":
/*!***************************************!*\
  !*** ./components/WriteNoteButton.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/home/guilherme/Public/RedHat/openshift-microservices/frontend/components/WriteNoteButton.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar WriteNoteButton = function WriteNoteButton() {\n  var writeNotes = function writeNotes() {\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://gateway-sandbox.apps.ca-central-1.starter.openshift-online.com/gateway/writeNote', {\n      text: \"new message sent from frontend\"\n    });\n    location.reload();\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"input\", {\n    type: \"button\",\n    value: \"Send\",\n    onClick: writeNotes,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }));\n};\n\n_c = WriteNoteButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WriteNoteButton);\n\nvar _c;\n\n$RefreshReg$(_c, \"WriteNoteButton\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Xcml0ZU5vdGVCdXR0b24uanM/OTMxYiJdLCJuYW1lcyI6WyJXcml0ZU5vdGVCdXR0b24iLCJ3cml0ZU5vdGVzIiwiYXhpb3MiLCJwb3N0IiwidGV4dCIsImxvY2F0aW9uIiwicmVsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBRTFCLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDckJDLGdEQUFLLENBQUNDLElBQU4sQ0FBVyx5RkFBWCxFQUNBO0FBQUNDLFVBQUksRUFBRTtBQUFQLEtBREE7QUFFQUMsWUFBUSxDQUFDQyxNQUFUO0FBQ0gsR0FKRDs7QUFNQSxTQUNJLG1FQUNBO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsU0FBSyxFQUFDLE1BQTNCO0FBQWtDLFdBQU8sRUFBRUwsVUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLENBREo7QUFLRCxDQWJIOztLQUFNRCxlO0FBZVdBLDhFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Xcml0ZU5vdGVCdXR0b24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmNvbnN0IFdyaXRlTm90ZUJ1dHRvbiA9ICgpID0+IHtcblxuICAgIGNvbnN0IHdyaXRlTm90ZXMgPSAoKSA9PiB7XG4gICAgICAgIGF4aW9zLnBvc3QoJ2h0dHA6Ly9nYXRld2F5LXNhbmRib3guYXBwcy5jYS1jZW50cmFsLTEuc3RhcnRlci5vcGVuc2hpZnQtb25saW5lLmNvbS9nYXRld2F5L3dyaXRlTm90ZScsXG4gICAgICAgIHt0ZXh0OiBcIm5ldyBtZXNzYWdlIHNlbnQgZnJvbSBmcm9udGVuZFwifSk7XG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPGlucHV0IHR5cGU9J2J1dHRvbicgdmFsdWU9J1NlbmQnIG9uQ2xpY2s9e3dyaXRlTm90ZXN9Lz5cbiAgICAgICAgPC8+XG4gICAgKVxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBXcml0ZU5vdGVCdXR0b25cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/WriteNoteButton.js\n");

/***/ })

})