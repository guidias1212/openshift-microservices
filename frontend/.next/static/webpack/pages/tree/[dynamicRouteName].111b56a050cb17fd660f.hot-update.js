webpackHotUpdate_N_E("pages/tree/[dynamicRouteName]",{

/***/ "./components/WriteNoteButton.js":
/*!***************************************!*\
  !*** ./components/WriteNoteButton.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NotesList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotesList */ \"./components/NotesList.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/home/guilherme/Public/RedHat/openshift-microservices/frontend/components/WriteNoteButton.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar WriteNoteButton = function WriteNoteButton() {\n  var writeNotes = function writeNotes() {\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://gateway-sandbox.apps.ca-central-1.starter.openshift-online.com/gateway/writeNote', {\n      text: \"new message sent from frontend\"\n    });\n    react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.render(_NotesList__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    alert(\"Message sent\");\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"input\", {\n    type: \"button\",\n    value: \"Send\",\n    onClick: writeNotes,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }));\n};\n\n_c = WriteNoteButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WriteNoteButton);\n\nvar _c;\n\n$RefreshReg$(_c, \"WriteNoteButton\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Xcml0ZU5vdGVCdXR0b24uanM/OTMxYiJdLCJuYW1lcyI6WyJXcml0ZU5vdGVCdXR0b24iLCJ3cml0ZU5vdGVzIiwiYXhpb3MiLCJwb3N0IiwidGV4dCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiTm90ZXNMaXN0IiwiYWxlcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFFMUIsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUNyQkMsZ0RBQUssQ0FBQ0MsSUFBTixDQUFXLHlGQUFYLEVBQ0E7QUFBQ0MsVUFBSSxFQUFFO0FBQVAsS0FEQTtBQUVBQyxvREFBUSxDQUFDQyxNQUFULENBQWdCQyxrREFBaEI7QUFDQUMsU0FBSyxDQUFDLGNBQUQsQ0FBTDtBQUNILEdBTEQ7O0FBT0EsU0FDSSxtRUFDQTtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQXFCLFNBQUssRUFBQyxNQUEzQjtBQUFrQyxXQUFPLEVBQUVQLFVBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxDQURKO0FBS0QsQ0FkSDs7S0FBTUQsZTtBQWdCV0EsOEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1dyaXRlTm90ZUJ1dHRvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgTm90ZXNMaXN0IGZyb20gJy4vTm90ZXNMaXN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcblxuY29uc3QgV3JpdGVOb3RlQnV0dG9uID0gKCkgPT4ge1xuXG4gICAgY29uc3Qgd3JpdGVOb3RlcyA9ICgpID0+IHtcbiAgICAgICAgYXhpb3MucG9zdCgnaHR0cDovL2dhdGV3YXktc2FuZGJveC5hcHBzLmNhLWNlbnRyYWwtMS5zdGFydGVyLm9wZW5zaGlmdC1vbmxpbmUuY29tL2dhdGV3YXkvd3JpdGVOb3RlJyxcbiAgICAgICAge3RleHQ6IFwibmV3IG1lc3NhZ2Ugc2VudCBmcm9tIGZyb250ZW5kXCJ9KTtcbiAgICAgICAgUmVhY3RET00ucmVuZGVyKE5vdGVzTGlzdCk7XG4gICAgICAgIGFsZXJ0KFwiTWVzc2FnZSBzZW50XCIpXG4gICAgfVxuICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8aW5wdXQgdHlwZT0nYnV0dG9uJyB2YWx1ZT0nU2VuZCcgb25DbGljaz17d3JpdGVOb3Rlc30vPlxuICAgICAgICA8Lz5cbiAgICApXG4gIH1cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IFdyaXRlTm90ZUJ1dHRvblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/WriteNoteButton.js\n");

/***/ })

})