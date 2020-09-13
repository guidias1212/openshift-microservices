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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/guilherme/Public/RedHat/openshift-microservices/frontend/components/DeleteNotesButton.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst DeleteNoteButton = () => {\n  const eraseNotes = async () => {\n    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://gateway-sandbox.apps.ca-central-1.starter.openshift-online.com/gateway/clear');\n    location.reload();\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"input\", {\n    class: \"btn btn-danger\",\n    type: \"button\",\n    value: \"Erase\",\n    onClick: eraseNotes,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DeleteNoteButton);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RlbGV0ZU5vdGVzQnV0dG9uLmpzPzc4ZTAiXSwibmFtZXMiOlsiRGVsZXRlTm90ZUJ1dHRvbiIsImVyYXNlTm90ZXMiLCJheGlvcyIsInBvc3QiLCJsb2NhdGlvbiIsInJlbG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxnQkFBZ0IsR0FBRyxNQUFNO0FBRTNCLFFBQU1DLFVBQVUsR0FBRyxZQUFZO0FBQzNCLFVBQU1DLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxxRkFBWCxDQUFOO0FBQ0FDLFlBQVEsQ0FBQ0MsTUFBVDtBQUNILEdBSEQ7O0FBS0EsU0FDSSxtRUFDQTtBQUFPLFNBQUssRUFBQyxnQkFBYjtBQUE4QixRQUFJLEVBQUMsUUFBbkM7QUFBNEMsU0FBSyxFQUFDLE9BQWxEO0FBQTBELFdBQU8sRUFBRUosVUFBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLENBREo7QUFLRCxDQVpIOztBQWNpQkQsK0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0RlbGV0ZU5vdGVzQnV0dG9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jb25zdCBEZWxldGVOb3RlQnV0dG9uID0gKCkgPT4ge1xuXG4gICAgY29uc3QgZXJhc2VOb3RlcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2dhdGV3YXktc2FuZGJveC5hcHBzLmNhLWNlbnRyYWwtMS5zdGFydGVyLm9wZW5zaGlmdC1vbmxpbmUuY29tL2dhdGV3YXkvY2xlYXInKVxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gIFxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxpbnB1dCBjbGFzcz0nYnRuIGJ0bi1kYW5nZXInIHR5cGU9J2J1dHRvbicgdmFsdWU9J0VyYXNlJyBvbkNsaWNrPXtlcmFzZU5vdGVzfS8+XG4gICAgICAgIDwvPlxuICAgIClcbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgRGVsZXRlTm90ZUJ1dHRvblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/DeleteNotesButton.js\n");

/***/ }),

/***/ "./components/HomeButton.js":
/*!**********************************!*\
  !*** ./components/HomeButton.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/guilherme/Public/RedHat/openshift-microservices/frontend/components/HomeButton.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst GoHomeButton = () => {\n  const goHome = () => {\n    window.open(\"/\", \"_self\");\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"input\", {\n    class: \"btn btn-info\",\n    type: \"button\",\n    value: \"Back\",\n    onClick: goHome,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GoHomeButton);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWVCdXR0b24uanM/Yjk4ZSJdLCJuYW1lcyI6WyJHb0hvbWVCdXR0b24iLCJnb0hvbWUiLCJ3aW5kb3ciLCJvcGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsTUFBTUEsWUFBWSxHQUFHLE1BQU07QUFFdkIsUUFBTUMsTUFBTSxHQUFHLE1BQU07QUFDakJDLFVBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVosRUFBaUIsT0FBakI7QUFDSCxHQUZEOztBQUlBLFNBQ0ksbUVBQ0E7QUFBTyxTQUFLLEVBQUMsY0FBYjtBQUE0QixRQUFJLEVBQUMsUUFBakM7QUFBMEMsU0FBSyxFQUFDLE1BQWhEO0FBQXVELFdBQU8sRUFBRUYsTUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLENBREo7QUFLSCxDQVhEOztBQWFlRCwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSG9tZUJ1dHRvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEdvSG9tZUJ1dHRvbiA9ICgpID0+IHtcblxuICAgIGNvbnN0IGdvSG9tZSA9ICgpID0+IHtcbiAgICAgICAgd2luZG93Lm9wZW4oXCIvXCIsIFwiX3NlbGZcIilcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8aW5wdXQgY2xhc3M9J2J0biBidG4taW5mbycgdHlwZT0nYnV0dG9uJyB2YWx1ZT0nQmFjaycgb25DbGljaz17Z29Ib21lfS8+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgR29Ib21lQnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/HomeButton.js\n");

/***/ }),

/***/ "./components/NavigationBar.js":
/*!*************************************!*\
  !*** ./components/NavigationBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/guilherme/Public/RedHat/openshift-microservices/frontend/components/NavigationBar.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst NavigationBar = () => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"nav\", {\n    class: \"navbar navbar-expand-lg navbar-light bg-light\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    class: \"navbar-brand\",\n    href: \"/\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 17\n    }\n  }, \"Memo\"), __jsx(\"button\", {\n    class: \"navbar-toggler\",\n    type: \"button\",\n    \"data-toggle\": \"collapse\",\n    \"data-target\": \"#navbarSupportedContent\",\n    \"aria-controls\": \"navbarSupportedContent\",\n    \"aria-expanded\": \"false\",\n    \"aria-label\": \"Toggle navigation\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 17\n    }\n  }, __jsx(\"span\", {\n    class: \"navbar-toggler-icon\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 21\n    }\n  })), __jsx(\"div\", {\n    class: \"collapse navbar-collapse\",\n    id: \"navbarSupportedContent\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 17\n    }\n  }, __jsx(\"ul\", {\n    class: \"navbar-nav mr-auto\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 21\n    }\n  }, __jsx(\"li\", {\n    class: \"nav-item\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 21\n    }\n  }, __jsx(\"a\", {\n    class: \"nav-link\",\n    href: \"/tree/notes\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 25\n    }\n  }, \"Board\")), __jsx(\"li\", {\n    class: \"nav-item dropdown\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 21\n    }\n  }, __jsx(\"a\", {\n    class: \"nav-link dropdown-toggle\",\n    href: \"#\",\n    id: \"navbarDropdown\",\n    role: \"button\",\n    \"data-toggle\": \"dropdown\",\n    \"aria-haspopup\": \"true\",\n    \"aria-expanded\": \"false\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 25\n    }\n  }, \"Source Code\"), __jsx(\"div\", {\n    class: \"dropdown-menu\",\n    \"aria-labelledby\": \"navbarDropdown\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 25\n    }\n  }, __jsx(\"a\", {\n    class: \"dropdown-item\",\n    href: \"https://github.com/guidias1212/openshift-microservices/tree/master/producer\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 25\n    }\n  }, \"Database Reader\"), __jsx(\"a\", {\n    class: \"dropdown-item\",\n    href: \"https://github.com/guidias1212/openshift-microservices/tree/master/consumer\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 25\n    }\n  }, \"Application Gateway\"), __jsx(\"a\", {\n    class: \"dropdown-item\",\n    href: \"https://github.com/guidias1212/openshift-microservices/tree/master/frontend\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 25\n    }\n  }, \"Frontend\")))), __jsx(\"form\", {\n    class: \"form-inline my-2 my-lg-0\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 21\n    }\n  }, __jsx(\"input\", {\n    class: \"form-control mr-sm-2\",\n    type: \"search\",\n    placeholder: \"Search\",\n    \"aria-label\": \"Search\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 21\n    }\n  }), __jsx(\"button\", {\n    class: \"btn btn-outline-success my-2 my-sm-0\",\n    type: \"submit\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 21\n    }\n  }, \"Search\")))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavigationBar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmlnYXRpb25CYXIuanM/MzNkMyJdLCJuYW1lcyI6WyJOYXZpZ2F0aW9uQmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsTUFBTUEsYUFBYSxHQUFHLE1BQU07QUFDeEIsU0FDUSxtRUFDQTtBQUFLLFNBQUssRUFBQywrQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxTQUFLLEVBQUMsY0FBVDtBQUF3QixRQUFJLEVBQUMsR0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLEVBRUk7QUFBUSxTQUFLLEVBQUMsZ0JBQWQ7QUFBK0IsUUFBSSxFQUFDLFFBQXBDO0FBQTZDLG1CQUFZLFVBQXpEO0FBQW9FLG1CQUFZLHlCQUFoRjtBQUEwRyxxQkFBYyx3QkFBeEg7QUFBaUoscUJBQWMsT0FBL0o7QUFBdUssa0JBQVcsbUJBQWxMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFNLFNBQUssRUFBQyxxQkFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FGSixFQU1JO0FBQUssU0FBSyxFQUFDLDBCQUFYO0FBQXNDLE1BQUUsRUFBQyx3QkFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksU0FBSyxFQUFDLG9CQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFJLFNBQUssRUFBQyxVQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLFNBQUssRUFBQyxVQUFUO0FBQW9CLFFBQUksRUFBQyxhQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosQ0FEQSxFQUlBO0FBQUksU0FBSyxFQUFDLG1CQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLFNBQUssRUFBQywwQkFBVDtBQUFvQyxRQUFJLEVBQUMsR0FBekM7QUFBNkMsTUFBRSxFQUFDLGdCQUFoRDtBQUFpRSxRQUFJLEVBQUMsUUFBdEU7QUFBK0UsbUJBQVksVUFBM0Y7QUFBc0cscUJBQWMsTUFBcEg7QUFBMkgscUJBQWMsT0FBekk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixFQUlJO0FBQUssU0FBSyxFQUFDLGVBQVg7QUFBMkIsdUJBQWdCLGdCQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBRyxTQUFLLEVBQUMsZUFBVDtBQUF5QixRQUFJLEVBQUMsNkVBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREEsRUFFQTtBQUFHLFNBQUssRUFBQyxlQUFUO0FBQXlCLFFBQUksRUFBQyw2RUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGQSxFQUdBO0FBQUcsU0FBSyxFQUFDLGVBQVQ7QUFBeUIsUUFBSSxFQUFDLDZFQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhBLENBSkosQ0FKQSxDQURKLEVBZ0JJO0FBQU0sU0FBSyxFQUFDLDBCQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFPLFNBQUssRUFBQyxzQkFBYjtBQUFvQyxRQUFJLEVBQUMsUUFBekM7QUFBa0QsZUFBVyxFQUFDLFFBQTlEO0FBQXVFLGtCQUFXLFFBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxFQUVBO0FBQVEsU0FBSyxFQUFDLHNDQUFkO0FBQXFELFFBQUksRUFBQyxRQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkEsQ0FoQkosQ0FOSixDQURBLENBRFI7QUFnQ0MsQ0FqQ0w7O0FBbUNlQSw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmF2aWdhdGlvbkJhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE5hdmlnYXRpb25CYXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICA8bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWxpZ2h0IGJnLWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiL1wiPk1lbW88L2E+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIgYXJpYS1jb250cm9scz1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXZiYXItbmF2IG1yLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiL3RyZWUvbm90ZXNcIj5Cb2FyZDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW0gZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlXCIgaHJlZj1cIiNcIiBpZD1cIm5hdmJhckRyb3Bkb3duXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgU291cmNlIENvZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgYXJpYS1sYWJlbGxlZGJ5PVwibmF2YmFyRHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ3VpZGlhczEyMTIvb3BlbnNoaWZ0LW1pY3Jvc2VydmljZXMvdHJlZS9tYXN0ZXIvcHJvZHVjZXJcIj5EYXRhYmFzZSBSZWFkZXI8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2d1aWRpYXMxMjEyL29wZW5zaGlmdC1taWNyb3NlcnZpY2VzL3RyZWUvbWFzdGVyL2NvbnN1bWVyXCI+QXBwbGljYXRpb24gR2F0ZXdheTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ3VpZGlhczEyMTIvb3BlbnNoaWZ0LW1pY3Jvc2VydmljZXMvdHJlZS9tYXN0ZXIvZnJvbnRlbmRcIj5Gcm9udGVuZDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm0taW5saW5lIG15LTIgbXktbGctMFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2wgbXItc20tMlwiIHR5cGU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIGFyaWEtbGFiZWw9XCJTZWFyY2hcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBteS0yIG15LXNtLTBcIiB0eXBlPVwic3VibWl0XCI+U2VhcmNoPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgfVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uQmFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NavigationBar.js\n");

/***/ }),

/***/ "./components/NoteTextBox.js":
/*!***********************************!*\
  !*** ./components/NoteTextBox.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/guilherme/Public/RedHat/openshift-microservices/frontend/components/NoteTextBox.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst Note = () => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 7\n    }\n  }, \"Write:\"), __jsx(\"input\", {\n    type: \"text\",\n    id: \"note-input\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 7\n    }\n  }), __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }), __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Note);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05vdGVUZXh0Qm94LmpzPzYxZDkiXSwibmFtZXMiOlsiTm90ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1BQU1BLElBQUksR0FBRyxNQUFNO0FBQ2pCLFNBQ0UsbUVBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUU7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixNQUFFLEVBQUMsWUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBREY7QUFTRCxDQVZEOztBQVllQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTm90ZVRleHRCb3guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBOb3RlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDI+V3JpdGU6PC9oMj5cbiAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD1cIm5vdGUtaW5wdXRcIj5cbiAgICAgIDwvaW5wdXQ+XG4gICAgICA8YnIvPlxuICAgICAgPGJyLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb3RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NoteTextBox.js\n");

/***/ }),

/***/ "./components/NotesComponent.js":
/*!**************************************!*\
  !*** ./components/NotesComponent.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _NotesList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotesList */ \"./components/NotesList.js\");\nvar _jsxFileName = \"/home/guilherme/Public/RedHat/openshift-microservices/frontend/components/NotesComponent.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst NotesComponent = () => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }, \"Notes:\"), __jsx(_NotesList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotesComponent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05vdGVzQ29tcG9uZW50LmpzPzRmNDkiXSwibmFtZXMiOlsiTm90ZXNDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxjQUFjLEdBQUcsTUFBTTtBQUN6QixTQUNJLG1FQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxFQUVBLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZBLENBREo7QUFNRCxDQVBIOztBQVNpQkEsNkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL05vdGVzQ29tcG9uZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vdGVzTGlzdCBmcm9tICcuL05vdGVzTGlzdCdcblxuY29uc3QgTm90ZXNDb21wb25lbnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPGgyPk5vdGVzOjwvaDI+XG4gICAgICAgIDxOb3Rlc0xpc3QvPlxuICAgICAgICA8Lz5cbiAgICApXG4gIH1cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IE5vdGVzQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NotesComponent.js\n");

/***/ }),

/***/ "./components/NotesList.js":
/*!*********************************!*\
  !*** ./components/NotesList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/guilherme/Public/RedHat/openshift-microservices/frontend/components/NotesList.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst NotesList = () => {\n  const {\n    0: getText,\n    1: setText\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([\"Loading notes from server...\"]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(async () => {\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://gateway-sandbox.apps.ca-central-1.starter.openshift-online.com/gateway/getNotes');\n    setText(response.data.notes);\n  }, []);\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, getText.map((notes, index) => {\n    return __jsx(\"div\", {\n      key: index,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 25\n      }\n    }, __jsx(\"p\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 29\n      }\n    }, notes));\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotesList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05vdGVzTGlzdC5qcz9lZWE2Il0sIm5hbWVzIjpbIk5vdGVzTGlzdCIsImdldFRleHQiLCJzZXRUZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJyZXNwb25zZSIsImF4aW9zIiwiZ2V0IiwiZGF0YSIsIm5vdGVzIiwibWFwIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxTQUFTLEdBQUcsTUFBTTtBQUNwQixRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBcUJDLHNEQUFRLENBQUMsQ0FBQyw4QkFBRCxDQUFELENBQW5DO0FBRUFDLHlEQUFTLENBQUMsWUFBWTtBQUNsQixVQUFNQyxRQUFRLEdBQUcsTUFBTUMsNENBQUssQ0FBQ0MsR0FBTixDQUFVLHdGQUFWLENBQXZCO0FBQ0FMLFdBQU8sQ0FBQ0csUUFBUSxDQUFDRyxJQUFULENBQWNDLEtBQWYsQ0FBUDtBQUNILEdBSFEsRUFHTixFQUhNLENBQVQ7QUFLQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFUVIsT0FBTyxDQUFDUyxHQUFSLENBQVksQ0FBQ0QsS0FBRCxFQUFRRSxLQUFSLEtBQWtCO0FBQzFCLFdBQ0k7QUFBSyxTQUFHLEVBQUVBLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUYsS0FBSixDQURKLENBREo7QUFLSCxHQU5ELENBRlIsQ0FESjtBQWFELENBckJIOztBQXVCaUJULHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Ob3Rlc0xpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jb25zdCBOb3Rlc0xpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgW2dldFRleHQsIHNldFRleHRdID0gdXNlU3RhdGUoW1wiTG9hZGluZyBub3RlcyBmcm9tIHNlcnZlci4uLlwiXSlcbiAgICBcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2dhdGV3YXktc2FuZGJveC5hcHBzLmNhLWNlbnRyYWwtMS5zdGFydGVyLm9wZW5zaGlmdC1vbmxpbmUuY29tL2dhdGV3YXkvZ2V0Tm90ZXMnKTtcbiAgICAgICAgc2V0VGV4dChyZXNwb25zZS5kYXRhLm5vdGVzKTtcbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZ2V0VGV4dC5tYXAoKG5vdGVzLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57bm90ZXN9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IE5vdGVzTGlzdFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NotesList.js\n");

/***/ }),

/***/ "./components/WriteNoteButton.js":
/*!***************************************!*\
  !*** ./components/WriteNoteButton.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NotesList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotesList */ \"./components/NotesList.js\");\nvar _jsxFileName = \"/home/guilherme/Public/RedHat/openshift-microservices/frontend/components/WriteNoteButton.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst WriteNoteButton = () => {\n  const writeNotes = async () => {\n    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://gateway-sandbox.apps.ca-central-1.starter.openshift-online.com/gateway/writeNote', {\n      text: document.getElementById(\"note-input\").value\n    });\n    location.reload();\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"input\", {\n    class: \"btn btn-success mx-2\",\n    type: \"button\",\n    value: \"Send\",\n    onClick: writeNotes,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WriteNoteButton);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dyaXRlTm90ZUJ1dHRvbi5qcz85MzFiIl0sIm5hbWVzIjpbIldyaXRlTm90ZUJ1dHRvbiIsIndyaXRlTm90ZXMiLCJheGlvcyIsInBvc3QiLCJ0ZXh0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwibG9jYXRpb24iLCJyZWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsZUFBZSxHQUFHLE1BQU07QUFFMUIsUUFBTUMsVUFBVSxHQUFHLFlBQWE7QUFDNUIsVUFBTUMsNENBQUssQ0FBQ0MsSUFBTixDQUFXLHlGQUFYLEVBQ047QUFBQ0MsVUFBSSxFQUFFQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0NDO0FBQTdDLEtBRE0sQ0FBTjtBQUVBQyxZQUFRLENBQUNDLE1BQVQ7QUFDSCxHQUpEOztBQU1BLFNBQ0ksbUVBQ0E7QUFBTyxTQUFLLEVBQUMsc0JBQWI7QUFBb0MsUUFBSSxFQUFDLFFBQXpDO0FBQWtELFNBQUssRUFBQyxNQUF4RDtBQUErRCxXQUFPLEVBQUVSLFVBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxDQURKO0FBS0QsQ0FiSDs7QUFlaUJELDhFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Xcml0ZU5vdGVCdXR0b24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgTm90ZXNMaXN0IGZyb20gJy4vTm90ZXNMaXN0J1xuXG5jb25zdCBXcml0ZU5vdGVCdXR0b24gPSAoKSA9PiB7XG5cbiAgICBjb25zdCB3cml0ZU5vdGVzID0gYXN5bmMgKCkgID0+IHtcbiAgICAgICAgYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2dhdGV3YXktc2FuZGJveC5hcHBzLmNhLWNlbnRyYWwtMS5zdGFydGVyLm9wZW5zaGlmdC1vbmxpbmUuY29tL2dhdGV3YXkvd3JpdGVOb3RlJyxcbiAgICAgICAge3RleHQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZS1pbnB1dFwiKS52YWx1ZX0pO1xuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gIFxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxpbnB1dCBjbGFzcz0nYnRuIGJ0bi1zdWNjZXNzIG14LTInIHR5cGU9J2J1dHRvbicgdmFsdWU9J1NlbmQnIG9uQ2xpY2s9e3dyaXRlTm90ZXN9Lz5cbiAgICAgICAgPC8+XG4gICAgKVxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBXcml0ZU5vdGVCdXR0b25cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/WriteNoteButton.js\n");

/***/ }),

/***/ "./pages/tree/[dynamicRouteName].js":
/*!******************************************!*\
  !*** ./pages/tree/[dynamicRouteName].js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_NoteTextBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/NoteTextBox */ \"./components/NoteTextBox.js\");\n/* harmony import */ var _components_HomeButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/HomeButton */ \"./components/HomeButton.js\");\n/* harmony import */ var _components_WriteNoteButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/WriteNoteButton */ \"./components/WriteNoteButton.js\");\n/* harmony import */ var _components_DeleteNotesButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/DeleteNotesButton */ \"./components/DeleteNotesButton.js\");\n/* harmony import */ var _components_NotesComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/NotesComponent */ \"./components/NotesComponent.js\");\n/* harmony import */ var _components_NavigationBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/NavigationBar */ \"./components/NavigationBar.js\");\nvar _jsxFileName = \"/home/guilherme/Public/RedHat/openshift-microservices/frontend/pages/tree/[dynamicRouteName].js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nconst NotesPage = () => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const {\n    dynamicRouteName\n  } = router.query;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css\",\n    integrity: \"sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z\",\n    crossorigin: \"anonymous\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 11\n    }\n  }), __jsx(\"meta\", {\n    charset: \"utf-8\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 11\n    }\n  }), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"width=device-width, initial-scale=1, shrink-to-fit=no\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 11\n    }\n  }), __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 11\n    }\n  }, \"Memo - Board\")), __jsx(_components_NavigationBar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    class: \"row\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    class: \"col-sm-3\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    class: \"row\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    class: \"col-sm-3\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, __jsx(_components_NoteTextBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }), __jsx(_components_HomeButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }), __jsx(_components_WriteNoteButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }\n  }), __jsx(_components_DeleteNotesButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    class: \"col-sm-3\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, __jsx(_components_NotesComponent__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    class: \"col-sm-3\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotesPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90cmVlL1tkeW5hbWljUm91dGVOYW1lXS5qcz80MmMyIl0sIm5hbWVzIjpbIk5vdGVzUGFnZSIsInJvdXRlciIsInVzZVJvdXRlciIsImR5bmFtaWNSb3V0ZU5hbWUiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsU0FBUyxHQUFHLE1BQU07QUFDdEIsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU07QUFBRUM7QUFBRixNQUF1QkYsTUFBTSxDQUFDRyxLQUFwQztBQUVBLFNBQ0UsbUVBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTSxPQUFHLEVBQUMsWUFBVjtBQUF1QixRQUFJLEVBQUMsMEVBQTVCO0FBQXVHLGFBQVMsRUFBQyx5RUFBakg7QUFBMkwsZUFBVyxFQUFDLFdBQXZNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQU0sV0FBTyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0k7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFzQixXQUFPLEVBQUMsdURBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkosQ0FERixFQU9FLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLEVBUUU7QUFBSyxTQUFLLEVBQUMsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxTQUFLLEVBQUMsVUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLFNBQUssRUFBQyxLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQUssU0FBSyxFQUFDLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBSEYsRUFTRTtBQUFLLFNBQUssRUFBQyxVQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVRGLEVBWUU7QUFBSyxTQUFLLEVBQUMsVUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkYsQ0FSRixDQURGO0FBeUJELENBN0JEOztBQStCZUosd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy90cmVlL1tkeW5hbWljUm91dGVOYW1lXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IE5vdGVUZXh0Qm94IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTm90ZVRleHRCb3gnXG5pbXBvcnQgSG9tZUJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hvbWVCdXR0b24nXG5pbXBvcnQgV3JpdGVOb3RlQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvV3JpdGVOb3RlQnV0dG9uJ1xuaW1wb3J0IERlbGV0ZU5vdGVCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EZWxldGVOb3Rlc0J1dHRvbidcbmltcG9ydCBOb3Rlc0NvbXBvbmVudCBmcm9tICcuLi8uLi9jb21wb25lbnRzL05vdGVzQ29tcG9uZW50J1xuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyJ1xuXG5jb25zdCBOb3Rlc1BhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHsgZHluYW1pY1JvdXRlTmFtZSB9ID0gcm91dGVyLnF1ZXJ5XG4gIFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4yL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIGludGVncml0eT1cInNoYTM4NC1KY0tiOHEzaXFKNjFnTlY5S0diOHRoU3NOanBTTDBuOFBBUm45SHVaT25JeE4waG9QK1ZtbURHTU41dDlVSjBaXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIi8+XG4gICAgICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCIvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgc2hyaW5rLXRvLWZpdD1ub1wiPjwvbWV0YT5cbiAgICAgICAgICA8dGl0bGU+TWVtbyAtIEJvYXJkPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxOYXZpZ2F0aW9uQmFyLz5cbiAgICAgIDxkaXYgY2xhc3M9J3Jvdyc+XG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbC1zbS0zJy8+XG4gICAgICAgIDxkaXYgY2xhc3M9J3JvdycvPlxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtc20tMyc+XG4gICAgICAgICAgPE5vdGVUZXh0Qm94Lz5cbiAgICAgICAgICA8SG9tZUJ1dHRvbi8+IFxuICAgICAgICAgIDxXcml0ZU5vdGVCdXR0b24vPlxuICAgICAgICAgIDxEZWxldGVOb3RlQnV0dG9uLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbC1zbS0zJz5cbiAgICAgICAgICA8Tm90ZXNDb21wb25lbnQvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLXNtLTMnLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGVzUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/tree/[dynamicRouteName].js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

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