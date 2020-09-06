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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/guilherme/Public/RedHat/openshift-microservices/frontend/components/DeleteNotesButton.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst DeleteNoteButton = () => {\n  const eraseNotes = () => {\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete('http://gateway-sandbox.apps.ca-central-1.starter.openshift-online.com/gateway/clear'); // alert(\"Messages clear\")\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"input\", {\n    type: \"button\",\n    value: \"Erase\",\n    onClick: eraseNotes,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DeleteNoteButton);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RlbGV0ZU5vdGVzQnV0dG9uLmpzPzc4ZTAiXSwibmFtZXMiOlsiRGVsZXRlTm90ZUJ1dHRvbiIsImVyYXNlTm90ZXMiLCJheGlvcyIsImRlbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxnQkFBZ0IsR0FBRyxNQUFNO0FBRTNCLFFBQU1DLFVBQVUsR0FBRyxNQUFNO0FBQ3JCQyxnREFBSyxDQUFDQyxNQUFOLENBQWEscUZBQWIsRUFEcUIsQ0FFckI7QUFDSCxHQUhEOztBQUtBLFNBQ0ksbUVBQ0E7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFxQixTQUFLLEVBQUMsT0FBM0I7QUFBbUMsV0FBTyxFQUFFRixVQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsQ0FESjtBQUtELENBWkg7O0FBY2lCRCwrRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRGVsZXRlTm90ZXNCdXR0b24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmNvbnN0IERlbGV0ZU5vdGVCdXR0b24gPSAoKSA9PiB7XG5cbiAgICBjb25zdCBlcmFzZU5vdGVzID0gKCkgPT4ge1xuICAgICAgICBheGlvcy5kZWxldGUoJ2h0dHA6Ly9nYXRld2F5LXNhbmRib3guYXBwcy5jYS1jZW50cmFsLTEuc3RhcnRlci5vcGVuc2hpZnQtb25saW5lLmNvbS9nYXRld2F5L2NsZWFyJylcbiAgICAgICAgLy8gYWxlcnQoXCJNZXNzYWdlcyBjbGVhclwiKVxuICAgIH1cbiAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPGlucHV0IHR5cGU9J2J1dHRvbicgdmFsdWU9J0VyYXNlJyBvbkNsaWNrPXtlcmFzZU5vdGVzfS8+XG4gICAgICAgIDwvPlxuICAgIClcbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgRGVsZXRlTm90ZUJ1dHRvblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/DeleteNotesButton.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/guilherme/Public/RedHat/openshift-microservices/frontend/components/NotesList.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst NotesList = () => {\n  const {\n    0: getText,\n    1: setText\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([\"Loading notes from server...\"]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(async () => {\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://gateway-sandbox.apps.ca-central-1.starter.openshift-online.com/gateway/getNotes');\n    setText(response.data.notes);\n  }, []);\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, getText.map((notes, index) => {\n    return __jsx(\"div\", {\n      key: index,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 25\n      }\n    }, __jsx(\"p\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 29\n      }\n    }, notes));\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotesList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05vdGVzTGlzdC5qcz9lZWE2Il0sIm5hbWVzIjpbIk5vdGVzTGlzdCIsImdldFRleHQiLCJzZXRUZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJyZXNwb25zZSIsImF4aW9zIiwiZ2V0IiwiZGF0YSIsIm5vdGVzIiwibWFwIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxTQUFTLEdBQUcsTUFBTTtBQUNwQixRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBcUJDLHNEQUFRLENBQUMsQ0FBQyw4QkFBRCxDQUFELENBQW5DO0FBR0FDLHlEQUFTLENBQUMsWUFBWTtBQUNsQixVQUFNQyxRQUFRLEdBQUcsTUFBTUMsNENBQUssQ0FBQ0MsR0FBTixDQUFVLHdGQUFWLENBQXZCO0FBQ0FMLFdBQU8sQ0FBQ0csUUFBUSxDQUFDRyxJQUFULENBQWNDLEtBQWYsQ0FBUDtBQUNILEdBSFEsRUFHTixFQUhNLENBQVQ7QUFLQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFUVIsT0FBTyxDQUFDUyxHQUFSLENBQVksQ0FBQ0QsS0FBRCxFQUFRRSxLQUFSLEtBQWtCO0FBQzFCLFdBQ0k7QUFBSyxTQUFHLEVBQUVBLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUYsS0FBSixDQURKLENBREo7QUFLSCxHQU5ELENBRlIsQ0FESjtBQWFELENBdEJIOztBQXdCaUJULHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Ob3Rlc0xpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jb25zdCBOb3Rlc0xpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgW2dldFRleHQsIHNldFRleHRdID0gdXNlU3RhdGUoW1wiTG9hZGluZyBub3RlcyBmcm9tIHNlcnZlci4uLlwiXSlcbiAgICBcblxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vZ2F0ZXdheS1zYW5kYm94LmFwcHMuY2EtY2VudHJhbC0xLnN0YXJ0ZXIub3BlbnNoaWZ0LW9ubGluZS5jb20vZ2F0ZXdheS9nZXROb3RlcycpO1xuICAgICAgICBzZXRUZXh0KHJlc3BvbnNlLmRhdGEubm90ZXMpO1xuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBnZXRUZXh0Lm1hcCgobm90ZXMsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntub3Rlc308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgTm90ZXNMaXN0XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NotesList.js\n");

/***/ }),

/***/ "./components/WriteNoteButton.js":
/*!***************************************!*\
  !*** ./components/WriteNoteButton.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NotesList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotesList */ \"./components/NotesList.js\");\nvar _jsxFileName = \"/home/guilherme/Public/RedHat/openshift-microservices/frontend/components/WriteNoteButton.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst WriteNoteButton = () => {\n  const writeNotes = () => {\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://gateway-sandbox.apps.ca-central-1.starter.openshift-online.com/gateway/writeNote', {\n      text: \"new message sent from frontend\"\n    });\n    _NotesList__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n    alert(\"Message sent\");\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"input\", {\n    type: \"button\",\n    value: \"Send\",\n    onClick: writeNotes,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WriteNoteButton);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dyaXRlTm90ZUJ1dHRvbi5qcz85MzFiIl0sIm5hbWVzIjpbIldyaXRlTm90ZUJ1dHRvbiIsIndyaXRlTm90ZXMiLCJheGlvcyIsInBvc3QiLCJ0ZXh0IiwiTm90ZXNMaXN0IiwiYWxlcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxlQUFlLEdBQUcsTUFBTTtBQUUxQixRQUFNQyxVQUFVLEdBQUcsTUFBTTtBQUNyQkMsZ0RBQUssQ0FBQ0MsSUFBTixDQUFXLHlGQUFYLEVBQ0E7QUFBQ0MsVUFBSSxFQUFFO0FBQVAsS0FEQTtBQUVBQyxzREFBUztBQUNUQyxTQUFLLENBQUMsY0FBRCxDQUFMO0FBQ0gsR0FMRDs7QUFPQSxTQUNJLG1FQUNBO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsU0FBSyxFQUFDLE1BQTNCO0FBQWtDLFdBQU8sRUFBRUwsVUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLENBREo7QUFLRCxDQWRIOztBQWdCaUJELDhFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Xcml0ZU5vdGVCdXR0b24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IE5vdGVzTGlzdCBmcm9tICcuL05vdGVzTGlzdCdcblxuY29uc3QgV3JpdGVOb3RlQnV0dG9uID0gKCkgPT4ge1xuXG4gICAgY29uc3Qgd3JpdGVOb3RlcyA9ICgpID0+IHtcbiAgICAgICAgYXhpb3MucG9zdCgnaHR0cDovL2dhdGV3YXktc2FuZGJveC5hcHBzLmNhLWNlbnRyYWwtMS5zdGFydGVyLm9wZW5zaGlmdC1vbmxpbmUuY29tL2dhdGV3YXkvd3JpdGVOb3RlJyxcbiAgICAgICAge3RleHQ6IFwibmV3IG1lc3NhZ2Ugc2VudCBmcm9tIGZyb250ZW5kXCJ9KTtcbiAgICAgICAgTm90ZXNMaXN0O1xuICAgICAgICBhbGVydChcIk1lc3NhZ2Ugc2VudFwiKVxuICAgIH1cbiAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPGlucHV0IHR5cGU9J2J1dHRvbicgdmFsdWU9J1NlbmQnIG9uQ2xpY2s9e3dyaXRlTm90ZXN9Lz5cbiAgICAgICAgPC8+XG4gICAgKVxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBXcml0ZU5vdGVCdXR0b25cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/WriteNoteButton.js\n");

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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

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