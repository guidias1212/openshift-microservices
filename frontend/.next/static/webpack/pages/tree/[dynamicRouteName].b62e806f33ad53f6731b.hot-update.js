webpackHotUpdate_N_E("pages/tree/[dynamicRouteName]",{

/***/ "./components/NotesList.js":
/*!*********************************!*\
  !*** ./components/NotesList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined,\n    _jsxFileName = \"/home/guilherme/Public/RedHat/openshift-microservices/frontend/components/NotesList.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\nvar axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar getNotesFromServer = function getNotesFromServer() {\n  var notesList;\n  axios.get('http://gateway-sandbox.apps.ca-central-1.starter.openshift-online.com/gateway/getNotes').then(function (response) {\n    console.log(response.data.notes[0]);\n    var note;\n\n    var _iterator = _createForOfIteratorHelper(response.data.notes),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        note = _step.value;\n        notesList += __jsx(\"div\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 11,\n            columnNumber: 26\n          }\n        }, __jsx(\"p\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 11,\n            columnNumber: 31\n          }\n        }, \"note\"), __jsx(\"br\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 11,\n            columnNumber: 42\n          }\n        }));\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  })[\"catch\"](function (error) {\n    console.log(error);\n  });\n};\n\nvar NotesList = function NotesList() {\n  // return getNotesFromServer()\n  return \"hello\";\n};\n\n_c = NotesList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotesList);\n\nvar _c;\n\n$RefreshReg$(_c, \"NotesList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ob3Rlc0xpc3QuanM/ZWVhNiJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJnZXROb3Rlc0Zyb21TZXJ2ZXIiLCJub3Rlc0xpc3QiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIm5vdGVzIiwibm90ZSIsImVycm9yIiwiTm90ZXNMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsNENBQUQsQ0FBckI7O0FBRUEsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQzdCLE1BQUlDLFNBQUo7QUFDQUgsT0FBSyxDQUFDSSxHQUFOLENBQVUsd0ZBQVYsRUFDQ0MsSUFERCxDQUNNLFVBQUFDLFFBQVEsRUFBSTtBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBUSxDQUFDRyxJQUFULENBQWNDLEtBQWQsQ0FBb0IsQ0FBcEIsQ0FBWjtBQUNBLFFBQUlDLElBQUo7O0FBRmMsK0NBR0RMLFFBQVEsQ0FBQ0csSUFBVCxDQUFjQyxLQUhiO0FBQUE7O0FBQUE7QUFHZCwwREFBa0M7QUFBN0JDLFlBQTZCO0FBQzlCUixpQkFBUyxJQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFMLEVBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBaEIsQ0FBYjtBQUNIO0FBTGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1qQixHQVBELFdBUU8sVUFBQVMsS0FBSyxFQUFJO0FBQ1pMLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSSxLQUFaO0FBQ0gsR0FWRDtBQVdILENBYkQ7O0FBZUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUNwQjtBQUNBLFNBQU8sT0FBUDtBQUNELENBSEg7O0tBQU1BLFM7QUFLV0Esd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL05vdGVzTGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG5cbmNvbnN0IGdldE5vdGVzRnJvbVNlcnZlciA9ICgpID0+IHtcbiAgICB2YXIgbm90ZXNMaXN0O1xuICAgIGF4aW9zLmdldCgnaHR0cDovL2dhdGV3YXktc2FuZGJveC5hcHBzLmNhLWNlbnRyYWwtMS5zdGFydGVyLm9wZW5zaGlmdC1vbmxpbmUuY29tL2dhdGV3YXkvZ2V0Tm90ZXMnKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5ub3Rlc1swXSk7XG4gICAgICAgIHZhciBub3RlO1xuICAgICAgICBmb3IgKG5vdGUgb2YgcmVzcG9uc2UuZGF0YS5ub3Rlcykge1xuICAgICAgICAgICAgbm90ZXNMaXN0ICs9IDxkaXY+PHA+bm90ZTwvcD48YnIvPjwvZGl2PjtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pXG59XG5cbmNvbnN0IE5vdGVzTGlzdCA9ICgpID0+IHtcbiAgICAvLyByZXR1cm4gZ2V0Tm90ZXNGcm9tU2VydmVyKClcbiAgICByZXR1cm4gXCJoZWxsb1wiXG4gIH1cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IE5vdGVzTGlzdFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NotesList.js\n");

/***/ })

})