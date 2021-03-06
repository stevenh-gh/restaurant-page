/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tabHome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabHome */ \"./src/tabHome.js\");\n/* harmony import */ var _tabMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabMenu */ \"./src/tabMenu.js\");\n// import pageLoad from './pageLoad'\n\n\n\ncontent = document.querySelector('#content')\ncontent.style.textAlign = 'center'\n\nlet container = document.createElement('DIV')\ncontainer.setAttribute('id', 'container')\ncontent.appendChild(container)\n\n// content.appendChild(pageLoad('The Odin Restaurant', '#1 restaurant in all of Midgard!', 'Endorsed by the Allfather himself!'))\n\nlet { home, homeContent } = (0,_tabHome__WEBPACK_IMPORTED_MODULE_0__.default)()\nlet { menu, menuContent } = (0,_tabMenu__WEBPACK_IMPORTED_MODULE_1__.default)()\ncontainer.appendChild(home)\ncontainer.appendChild(menu)\ncontent.appendChild(homeContent)\ncontent.appendChild(menuContent)\n\nhome.addEventListener('click', () => {\n  tabOnClick(homeContent)\n})\n\nmenu.addEventListener('click', () => {\n  tabOnClick(menuContent)\n})\n\nfunction tabOnClick(contentItem) {\n  let tabContent = content.querySelectorAll('div .content')\n  tabContent.forEach(tc => {\n    tc.style.display = 'none'\n  })\n  contentItem.style.display = 'block'\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction pageLoad(title, h3, h4) {\n  let pageLoad, elementTitle, em, elementh3, elementh4\n\n  pageLoad = document.createElement('DIV')\n\n  elementTitle = document.createElement('H1')\n  elementTitle.textContent = title\n\n  em = document.createElement('EM')\n  elementh3 = document.createElement('H3')\n  elementh3.textContent = h3\n\n  elementh4 = document.createElement('H4')\n  elementh4.textContent = h4\n\n  em.appendChild(elementh3)\n  pageLoad.appendChild(elementTitle)\n  pageLoad.appendChild(em)\n  pageLoad.appendChild(elementh4)\n\n  return pageLoad\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n//# sourceURL=webpack://restaurant-page/./src/pageLoad.js?");

/***/ }),

/***/ "./src/tabHome.js":
/*!************************!*\
  !*** ./src/tabHome.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n\n\nfunction tabHome() {\n  let home = document.createElement('DIV')\n  home.setAttribute('class', 'tab')\n  home.setAttribute('id', 'home')\n  home.textContent = 'Home'\n\n  let content = document.createElement('DIV')\n  content.setAttribute('class', 'content')\n  content.setAttribute('id', 'homeContent')\n  content.appendChild((0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.default)('The Odin Restaurant', '#1 restaurant in all of Midgard!', 'Endorsed by the Allfather himself!'))\n\n  return { home, homeContent: content }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabHome);\n\n//# sourceURL=webpack://restaurant-page/./src/tabHome.js?");

/***/ }),

/***/ "./src/tabMenu.js":
/*!************************!*\
  !*** ./src/tabMenu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction makeFood(foodName, imageUrl, description) {\n  let foodItem = document.createElement('DIV')\n  foodItem.setAttribute('class', 'foodDiv')\n\n  let fName = document.createElement('DIV')\n  fName.setAttribute('class', 'fName')\n  fName.innerText = foodName\n  let fDesc = document.createElement('DIV')\n  fDesc.setAttribute('class', 'fDesc')\n  fDesc.innerText = description\n\n  let imageDiv = document.createElement('DIV')\n  imageDiv.setAttribute('class', 'imageDiv')\n  let image = document.createElement('IMG')\n  image.setAttribute('src', imageUrl)\n  image.setAttribute('class', 'foodImg')\n  imageDiv.appendChild(image)\n\n  foodItem.appendChild(fName)\n  foodItem.appendChild(fDesc)\n  foodItem.appendChild(imageDiv)\n\n  return foodItem\n}\n\nfunction tabMenu() {\n  let menu = document.createElement('DIV')\n  menu.setAttribute('class', 'tab')\n  menu.setAttribute('id', 'menu')\n  menu.innerText = 'Menu'\n\n  let content = document.createElement('DIV')\n  content.setAttribute('class', 'content')\n  content.setAttribute('id', 'menuContent')\n\n  content.appendChild(makeFood('Adeptus\\' Temptation',\n    'https://static.wikia.nocookie.net/gensin-impact/images/6/66/Item_Delicious_Adeptus%27_Temptation.png/revision/latest?cb=20201209234129',\n    'Increases all party members\\' ATK by 260~372 and CRIT Rate by 8~12% for 300s.'))\n  content.appendChild(makeFood('Golden Crab',\n    'https://static.wikia.nocookie.net/gensin-impact/images/5/56/Item_Delicious_Golden_Crab.png/revision/latest?cb=20201226191148',\n    'Increases all party members\\' DEF by 242~308 and healing effects by 6~10% for 300s.'))\n  content.appendChild(makeFood('Golden Fried Chicken',\n    'https://static.wikia.nocookie.net/gensin-impact/images/6/68/Item_Delicious_Golden_Fried_Chicken.png/revision/latest?cb=20210317180609',\n    'Increases all party members\\' ATK by 224~320 and CRIT Rate by 6~10% for 300s.'))\n  content.appendChild(makeFood('Jade Parcels',\n    'https://static.wikia.nocookie.net/gensin-impact/images/8/87/Item_Delicious_Jade_Parcels.png/revision/latest?cb=20201104072405',\n    'Increases all party members\\' ATK by 224~320 and CRIT Rate by 6~10% for 300s.'))\n  content.appendChild(makeFood('Moon Pie',\n    'https://static.wikia.nocookie.net/gensin-impact/images/9/9e/Item_Delicious_Moon_Pie.png/revision/latest?cb=20201226064541',\n    'Increases all party members\\' Shield Strength by 25~35% and DEF by 165~235 for 300s.'))\n\n  content.style.display = 'none'\n  return { menu, menuContent: content }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/tabMenu.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;