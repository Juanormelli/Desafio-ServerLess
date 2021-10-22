/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/listToDo.ts":
/*!***********************************!*\
  !*** ./src/functions/listToDo.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handle\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _utils_dynamoClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dynamoClient */ \"./src/utils/dynamoClient.ts\");\n\r\nconst handle = async (event) => {\r\n    const { user_id } = event.pathParameters;\r\n    const response = await _utils_dynamoClient__WEBPACK_IMPORTED_MODULE_0__.document.query({\r\n        TableName: \"users_todo\",\r\n        KeyConditionExpression: \"user_id =:user_id\",\r\n        ExpressionAttributeValues: {\r\n            \":user_id\": user_id,\r\n        }\r\n    }).promise();\r\n    const result = response.Items[0];\r\n    console.log(result);\r\n    return {\r\n        statusCode: 201,\r\n        body: JSON.stringify(response.Items),\r\n        headers: {\r\n            \"Content-Type\": \"application/json\"\r\n        }\r\n    };\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2xpc3RUb0RvLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ0E7QUFJQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Rlc2FmaW9zZXJ2ZWxlc3MvLi9zcmMvZnVuY3Rpb25zL2xpc3RUb0RvLnRzP2NiMGIiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7ZG9jdW1lbnR9IGZyb20gXCIuLi91dGlscy9keW5hbW9DbGllbnRcIlxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlID0gYXN5bmMgKGV2ZW50KT0+e1xyXG5cclxuICAgIFxyXG4gICAgY29uc3Qge3VzZXJfaWR9ID0gZXZlbnQucGF0aFBhcmFtZXRlcnM7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2U9IGF3YWl0IGRvY3VtZW50LnF1ZXJ5KHtcclxuICAgICAgICBUYWJsZU5hbWU6XCJ1c2Vyc190b2RvXCIsXHJcbiAgICAgICAgS2V5Q29uZGl0aW9uRXhwcmVzc2lvbjogXCJ1c2VyX2lkID06dXNlcl9pZFwiLFxyXG4gICAgICAgIEV4cHJlc3Npb25BdHRyaWJ1dGVWYWx1ZXM6e1xyXG4gICAgICAgICAgICBcIjp1c2VyX2lkXCI6dXNlcl9pZCxcclxuICAgICAgICB9XHJcbiAgICB9KS5wcm9taXNlKClcclxuICAgIFxyXG4gICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UuSXRlbXNbMF1cclxuXHJcbiAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHN0YXR1c0NvZGU6MjAxLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLkl0ZW1zKSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/functions/listToDo.ts\n");

/***/ }),

/***/ "./src/utils/dynamoClient.ts":
/*!***********************************!*\
  !*** ./src/utils/dynamoClient.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"document\": () => (/* binding */ document)\n/* harmony export */ });\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\r\nconst option = {\r\n    region: \"localhost\",\r\n    endpoint: \"http://localhost:8000\"\r\n};\r\nconst isOffline = () => {\r\n    return process.env.IS_OFFLINE;\r\n};\r\nconst document = isOffline() ? new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient(option) : new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient();\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvZHluYW1vQ2xpZW50LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVzYWZpb3NlcnZlbGVzcy8uL3NyYy91dGlscy9keW5hbW9DbGllbnQudHM/NDBkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0R5bmFtb0RCfSBmcm9tIFwiYXdzLXNka1wiXHJcblxyXG5jb25zdCBvcHRpb249IHtcclxuICAgIHJlZ2lvbjpcImxvY2FsaG9zdFwiLFxyXG4gICAgZW5kcG9pbnQ6XCJodHRwOi8vbG9jYWxob3N0OjgwMDBcIlxyXG5cclxufVxyXG5cclxuY29uc3QgaXNPZmZsaW5lID0gKCk9PntcclxuICAgIHJldHVybiBwcm9jZXNzLmVudi5JU19PRkZMSU5FO1xyXG59XHJcblxyXG5cclxuY29uc3QgZG9jdW1lbnQgPSBpc09mZmxpbmUoKSA/IG5ldyBEeW5hbW9EQi5Eb2N1bWVudENsaWVudChvcHRpb24pOiBuZXcgRHluYW1vREIuRG9jdW1lbnRDbGllbnQoKVxyXG5cclxuXHJcbmV4cG9ydCB7ZG9jdW1lbnR9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/dynamoClient.ts\n");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/listToDo.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;