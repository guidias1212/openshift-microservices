module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/tree/[dynamicRouteName].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/DeleteNotesButton.js":
/*!*****************************************!*\
  !*** ./components/DeleteNotesButton.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/guilherme/Public/RedHat/openshift-microservices/frontend/components/DeleteNotesButton.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst DeleteNoteButton = () => {\n  const eraseNotes = () => {\n    alert(\"Send a DELETE msg to Backend\");\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"input\", {\n    type: \"button\",\n    value: \"Erase\",\n    onClick: eraseNotes,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DeleteNoteButton);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RlbGV0ZU5vdGVzQnV0dG9uLmpzPzc4ZTAiXSwibmFtZXMiOlsiRGVsZXRlTm90ZUJ1dHRvbiIsImVyYXNlTm90ZXMiLCJhbGVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1BQU1BLGdCQUFnQixHQUFHLE1BQU07QUFFM0IsUUFBTUMsVUFBVSxHQUFHLE1BQU07QUFDckJDLFNBQUssQ0FBQyw4QkFBRCxDQUFMO0FBQ0gsR0FGRDs7QUFJQSxTQUNJLG1FQUNBO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsU0FBSyxFQUFDLE9BQTNCO0FBQW1DLFdBQU8sRUFBRUQsVUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLENBREo7QUFLRCxDQVhIOztBQWFpQkQsK0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0RlbGV0ZU5vdGVzQnV0dG9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRGVsZXRlTm90ZUJ1dHRvbiA9ICgpID0+IHtcblxuICAgIGNvbnN0IGVyYXNlTm90ZXMgPSAoKSA9PiB7XG4gICAgICAgIGFsZXJ0KFwiU2VuZCBhIERFTEVURSBtc2cgdG8gQmFja2VuZFwiKVxuICAgIH1cbiAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPGlucHV0IHR5cGU9J2J1dHRvbicgdmFsdWU9J0VyYXNlJyBvbkNsaWNrPXtlcmFzZU5vdGVzfS8+XG4gICAgICAgIDwvPlxuICAgIClcbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgRGVsZXRlTm90ZUJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DeleteNotesButton.js\n");

/***/ }),

/***/ "./components/HomeButton.js":
/*!**********************************!*\
  !*** ./components/HomeButton.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/guilherme/Public/RedHat/openshift-microservices/frontend/components/HomeButton.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst GoHomeButton = () => {\n  const goHome = () => {\n    window.open(\"http://localhost:3000\", \"_self\");\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"input\", {\n    type: \"button\",\n    value: \"Back\",\n    onClick: goHome,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GoHomeButton);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWVCdXR0b24uanM/Yjk4ZSJdLCJuYW1lcyI6WyJHb0hvbWVCdXR0b24iLCJnb0hvbWUiLCJ3aW5kb3ciLCJvcGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsTUFBTUEsWUFBWSxHQUFHLE1BQU07QUFFdkIsUUFBTUMsTUFBTSxHQUFHLE1BQU07QUFDakJDLFVBQU0sQ0FBQ0MsSUFBUCxDQUFZLHVCQUFaLEVBQXFDLE9BQXJDO0FBQ0gsR0FGRDs7QUFJQSxTQUNJLG1FQUNBO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsU0FBSyxFQUFDLE1BQTNCO0FBQWtDLFdBQU8sRUFBRUYsTUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLENBREo7QUFLSCxDQVhEOztBQWFlRCwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSG9tZUJ1dHRvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEdvSG9tZUJ1dHRvbiA9ICgpID0+IHtcblxuICAgIGNvbnN0IGdvSG9tZSA9ICgpID0+IHtcbiAgICAgICAgd2luZG93Lm9wZW4oXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIiwgXCJfc2VsZlwiKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxpbnB1dCB0eXBlPSdidXR0b24nIHZhbHVlPSdCYWNrJyBvbkNsaWNrPXtnb0hvbWV9Lz5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBHb0hvbWVCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/HomeButton.js\n");

/***/ }),

/***/ "./components/NoteTextBox.js":
/*!***********************************!*\
  !*** ./components/NoteTextBox.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/guilherme/Public/RedHat/openshift-microservices/frontend/components/NoteTextBox.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Note = () => {\n  const {\n    0: getText,\n    1: setText\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])();\n\n  const handleChange = e => {\n    setText(e.target.value);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, \"Write a note:\"), __jsx(\"input\", {\n    type: \"text\",\n    value: getText,\n    onChange: handleChange,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, getText));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Note);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05vdGVUZXh0Qm94LmpzPzYxZDkiXSwibmFtZXMiOlsiTm90ZSIsImdldFRleHQiLCJzZXRUZXh0IiwidXNlU3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBLE1BQU1BLElBQUksR0FBRyxNQUFNO0FBRWpCLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUFxQkMsc0RBQVEsRUFBbkM7O0FBRUEsUUFBTUMsWUFBWSxHQUFJQyxDQUFELElBQU87QUFDMUJILFdBQU8sQ0FBQ0csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsU0FDRSxtRUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBRUU7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixTQUFLLEVBQUVOLE9BQTFCO0FBQW1DLFlBQVEsRUFBRUcsWUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJSCxPQUFKLENBSkYsQ0FERjtBQVFELENBaEJEOztBQW1CZUQsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL05vdGVUZXh0Qm94LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcblxuY29uc3QgTm90ZSA9ICgpID0+IHtcblxuICBjb25zdCBbZ2V0VGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgpXG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHA+V3JpdGUgYSBub3RlOjwvcD5cbiAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyB2YWx1ZT17Z2V0VGV4dH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+XG4gICAgICA8L2lucHV0PlxuICAgICAgPHA+e2dldFRleHR9PC9wPlxuICAgIDwvPlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTm90ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NoteTextBox.js\n");

/***/ }),

/***/ "./components/NotesComponent.js":
/*!**************************************!*\
  !*** ./components/NotesComponent.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _NotesList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotesList */ \"./components/NotesList.js\");\nvar _jsxFileName = \"/home/guilherme/Public/RedHat/openshift-microservices/frontend/components/NotesComponent.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst NotesComponent = () => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }, \"My Notes:\"), __jsx(_NotesList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotesComponent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05vdGVzQ29tcG9uZW50LmpzPzRmNDkiXSwibmFtZXMiOlsiTm90ZXNDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxjQUFjLEdBQUcsTUFBTTtBQUN6QixTQUNJLG1FQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREEsRUFFQSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGQSxDQURKO0FBTUQsQ0FQSDs7QUFTaUJBLDZFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Ob3Rlc0NvbXBvbmVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb3Rlc0xpc3QgZnJvbSAnLi9Ob3Rlc0xpc3QnXG5cbmNvbnN0IE5vdGVzQ29tcG9uZW50ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxoMj5NeSBOb3Rlczo8L2gyPlxuICAgICAgICA8Tm90ZXNMaXN0Lz5cbiAgICAgICAgPC8+XG4gICAgKVxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBOb3Rlc0NvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NotesComponent.js\n");

/***/ }),

/***/ "./components/NotesList.js":
/*!*********************************!*\
  !*** ./components/NotesList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/guilherme/Public/RedHat/openshift-microservices/frontend/components/NotesList.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst NotesList = () => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 9\n    }\n  }, \"This is a note\"), __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 9\n    }\n  }), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }, \"This is another note\"), __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotesList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05vdGVzTGlzdC5qcz9lZWE2Il0sIm5hbWVzIjpbIk5vdGVzTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1BQU1BLFNBQVMsR0FBRyxNQUFNO0FBQ3BCLFNBQ0ksbUVBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFEQSxFQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGQSxFQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBSEEsRUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkEsQ0FESjtBQVFELENBVEg7O0FBV2lCQSx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTm90ZXNMaXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTm90ZXNMaXN0ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxwPlRoaXMgaXMgYSBub3RlPC9wPlxuICAgICAgICA8YnIvPlxuICAgICAgICA8cD5UaGlzIGlzIGFub3RoZXIgbm90ZTwvcD5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPC8+XG4gICAgKVxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBOb3Rlc0xpc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NotesList.js\n");

/***/ }),

/***/ "./components/WriteNoteButton.js":
/*!***************************************!*\
  !*** ./components/WriteNoteButton.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/guilherme/Public/RedHat/openshift-microservices/frontend/components/WriteNoteButton.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst WriteNoteButton = () => {\n  const writeNotes = () => {\n    alert(\"Send a POST + GET msg to Backend\");\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"input\", {\n    type: \"button\",\n    value: \"Send\",\n    onClick: writeNotes,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WriteNoteButton);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dyaXRlTm90ZUJ1dHRvbi5qcz85MzFiIl0sIm5hbWVzIjpbIldyaXRlTm90ZUJ1dHRvbiIsIndyaXRlTm90ZXMiLCJhbGVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1BQU1BLGVBQWUsR0FBRyxNQUFNO0FBRTFCLFFBQU1DLFVBQVUsR0FBRyxNQUFNO0FBQ3JCQyxTQUFLLENBQUMsa0NBQUQsQ0FBTDtBQUNILEdBRkQ7O0FBSUEsU0FDSSxtRUFDQTtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQXFCLFNBQUssRUFBQyxNQUEzQjtBQUFrQyxXQUFPLEVBQUVELFVBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxDQURKO0FBS0QsQ0FYSDs7QUFhaUJELDhFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Xcml0ZU5vdGVCdXR0b24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBXcml0ZU5vdGVCdXR0b24gPSAoKSA9PiB7XG5cbiAgICBjb25zdCB3cml0ZU5vdGVzID0gKCkgPT4ge1xuICAgICAgICBhbGVydChcIlNlbmQgYSBQT1NUICsgR0VUIG1zZyB0byBCYWNrZW5kXCIpXG4gICAgfVxuICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8aW5wdXQgdHlwZT0nYnV0dG9uJyB2YWx1ZT0nU2VuZCcgb25DbGljaz17d3JpdGVOb3Rlc30vPlxuICAgICAgICA8Lz5cbiAgICApXG4gIH1cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IFdyaXRlTm90ZUJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/WriteNoteButton.js\n");

/***/ }),

/***/ "./pages/tree/[dynamicRouteName].js":
/*!******************************************!*\
  !*** ./pages/tree/[dynamicRouteName].js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_NoteTextBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/NoteTextBox */ \"./components/NoteTextBox.js\");\n/* harmony import */ var _components_HomeButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/HomeButton */ \"./components/HomeButton.js\");\n/* harmony import */ var _components_WriteNoteButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/WriteNoteButton */ \"./components/WriteNoteButton.js\");\n/* harmony import */ var _components_DeleteNotesButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/DeleteNotesButton */ \"./components/DeleteNotesButton.js\");\n/* harmony import */ var _components_NotesComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/NotesComponent */ \"./components/NotesComponent.js\");\nvar _jsxFileName = \"/home/guilherme/Public/RedHat/openshift-microservices/frontend/pages/tree/[dynamicRouteName].js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nconst Dias = () => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const {\n    dynamicRouteName\n  } = router.query;\n  return __jsx(\"div\", {\n    class: \"row\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    class: \"column\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, __jsx(_components_NoteTextBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }), __jsx(_components_HomeButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }), __jsx(_components_WriteNoteButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }), __jsx(_components_DeleteNotesButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    class: \"column\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, __jsx(_components_NotesComponent__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dias);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90cmVlL1tkeW5hbWljUm91dGVOYW1lXS5qcz80MmMyIl0sIm5hbWVzIjpbIkRpYXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkeW5hbWljUm91dGVOYW1lIiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLE1BQU07QUFDakIsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU07QUFBRUM7QUFBRixNQUF1QkYsTUFBTSxDQUFDRyxLQUFwQztBQUVBLFNBQ0U7QUFBSyxTQUFLLEVBQUMsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxTQUFLLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUUsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FERixFQU9FO0FBQUssU0FBSyxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBUEYsQ0FERjtBQWNELENBbEJEOztBQW9CZUosbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy90cmVlL1tkeW5hbWljUm91dGVOYW1lXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IE5vdGVUZXh0Qm94IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTm90ZVRleHRCb3gnXG5pbXBvcnQgSG9tZUJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hvbWVCdXR0b24nXG5pbXBvcnQgV3JpdGVOb3RlQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvV3JpdGVOb3RlQnV0dG9uJ1xuaW1wb3J0IERlbGV0ZU5vdGVCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EZWxldGVOb3Rlc0J1dHRvbidcbmltcG9ydCBOb3Rlc0NvbXBvbmVudCBmcm9tICcuLi8uLi9jb21wb25lbnRzL05vdGVzQ29tcG9uZW50J1xuXG5jb25zdCBEaWFzID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IGR5bmFtaWNSb3V0ZU5hbWUgfSA9IHJvdXRlci5xdWVyeVxuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxuICAgICAgPGRpdiBjbGFzcz0nY29sdW1uJz5cbiAgICAgICAgPE5vdGVUZXh0Qm94Lz5cbiAgICAgICAgPEhvbWVCdXR0b24vPiBcbiAgICAgICAgPFdyaXRlTm90ZUJ1dHRvbi8+XG4gICAgICAgIDxEZWxldGVOb3RlQnV0dG9uLz48L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz0nY29sdW1uJz5cbiAgICAgICAgPE5vdGVzQ29tcG9uZW50Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGlhcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/tree/[dynamicRouteName].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });