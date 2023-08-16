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

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var themes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! themes.js */ \"./module/themes.js\");\n/* harmony import */ var Logic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Logic.js */ \"./module/Logic.js\");\n/* harmony import */ var startGame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! startGame.js */ \"./module/startGame.js\");\n/* harmony import */ var ChooseX_O_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ChooseX_O.js */ \"./module/ChooseX_O.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./style.css\");\n// Global Variables\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nthemes_js__WEBPACK_IMPORTED_MODULE_0__.SetTheme(themes_js__WEBPACK_IMPORTED_MODULE_0__.themeNowX, themes_js__WEBPACK_IMPORTED_MODULE_0__.themeNowO);\r\n\r\n(0,startGame_js__WEBPACK_IMPORTED_MODULE_2__.startGame)();\r\n(0,Logic_js__WEBPACK_IMPORTED_MODULE_1__.Logic)();\r\n(0,ChooseX_O_js__WEBPACK_IMPORTED_MODULE_3__.ChooseTicOrToc)();\r\n\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./module/ChooseX_O.js":
/*!*****************************!*\
  !*** ./module/ChooseX_O.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ChooseTicOrToc: () => (/* binding */ ChooseTicOrToc)\n/* harmony export */ });\n/* harmony import */ var variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! variables.js */ \"./module/variables.js\");\n/* harmony import */ var state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! state.js */ \"./module/state.js\");\n/* harmony import */ var startGame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! startGame.js */ \"./module/startGame.js\");\n// here choose x or o when onclick on word choose x or o\r\n\r\n\r\n\r\n\r\n\r\n// Enter To Game Functionality\r\nconst EnterToGame = () => {\r\n  (0,state_js__WEBPACK_IMPORTED_MODULE_1__.getPlay)() && variables_js__WEBPACK_IMPORTED_MODULE_0__.name.value.length > 0 ? (0,startGame_js__WEBPACK_IMPORTED_MODULE_2__.startGame)(\"none\") : \"\";\r\n};\r\n\r\n// Choose X or O\r\nconst ChooseTicOrToc = (player) => {\r\n  switch (player) {\r\n    case variables_js__WEBPACK_IMPORTED_MODULE_0__.x:\r\n      variables_js__WEBPACK_IMPORTED_MODULE_0__.o.style.color = \"black\";\r\n      variables_js__WEBPACK_IMPORTED_MODULE_0__.x.style.color = \"#f05\";\r\n      (0,state_js__WEBPACK_IMPORTED_MODULE_1__.setPlay)(\"x\");\r\n      break;\r\n    case variables_js__WEBPACK_IMPORTED_MODULE_0__.o:\r\n      variables_js__WEBPACK_IMPORTED_MODULE_0__.x.style.color = \"black\";\r\n      variables_js__WEBPACK_IMPORTED_MODULE_0__.o.style.color = \"#f05\";\r\n      (0,state_js__WEBPACK_IMPORTED_MODULE_1__.setPlay)(\"o\");\r\n      break;\r\n  }\r\n  EnterToGame();\r\n};\r\n\r\nvariables_js__WEBPACK_IMPORTED_MODULE_0__.x.onclick = () => ChooseTicOrToc(variables_js__WEBPACK_IMPORTED_MODULE_0__.x);\r\nvariables_js__WEBPACK_IMPORTED_MODULE_0__.o.onclick = () => ChooseTicOrToc(variables_js__WEBPACK_IMPORTED_MODULE_0__.o);\r\n\n\n//# sourceURL=webpack:///./module/ChooseX_O.js?");

/***/ }),

/***/ "./module/Logic.js":
/*!*************************!*\
  !*** ./module/Logic.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Logic: () => (/* binding */ Logic)\n/* harmony export */ });\n/* harmony import */ var endGame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! endGame.js */ \"./module/endGame.js\");\n/* harmony import */ var state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! state.js */ \"./module/state.js\");\n/* harmony import */ var themes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! themes.js */ \"./module/themes.js\");\n/* harmony import */ var variables_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! variables.js */ \"./module/variables.js\");\n// Here Logic game put x or o in box and endGame\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst Logic = () => {\r\n  variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes.forEach((box, index) => {\r\n    box.onclick = () => {\r\n      if (box.innerHTML == \"\" && (0,state_js__WEBPACK_IMPORTED_MODULE_1__.getPlay)() == \"x\") {\r\n        box.innerHTML = themes_js__WEBPACK_IMPORTED_MODULE_2__.themeNowX;\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.result.innerHTML = themes_js__WEBPACK_IMPORTED_MODULE_2__.themeNowO;\r\n        (0,state_js__WEBPACK_IMPORTED_MODULE_1__.setPlay)(\"o\");\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.soundPlayerO.play();\r\n      } else if (box.innerHTML == \"\" && (0,state_js__WEBPACK_IMPORTED_MODULE_1__.getPlay)() == \"o\") {\r\n        box.innerHTML = themes_js__WEBPACK_IMPORTED_MODULE_2__.themeNowO;\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.result.innerHTML = themes_js__WEBPACK_IMPORTED_MODULE_2__.themeNowX;\r\n        (0,state_js__WEBPACK_IMPORTED_MODULE_1__.setPlay)(\"x\");\r\n\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.soundPlayerX.play();\r\n      }\r\n      // Rows\r\n      if (\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[0].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[1].innerHTML &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[1].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[2].innerHTML &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[0].innerHTMl != \"\" &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[1].innerHTML != \"\"\r\n      ) {\r\n        (0,endGame_js__WEBPACK_IMPORTED_MODULE_0__.endGame)(variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[0], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[1], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[2]);\r\n      } else if (\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[3].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTML &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[5].innerHTML &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTMl != \"\" &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[5].innerHTML != \"\"\r\n      ) {\r\n        (0,endGame_js__WEBPACK_IMPORTED_MODULE_0__.endGame)(variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[3], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[5]);\r\n      } else if (\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[6].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[7].innerHTML &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[7].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[8].innerHTML &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[8].innerHTMl != \"\" &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[7].innerHTML != \"\"\r\n      ) {\r\n        (0,endGame_js__WEBPACK_IMPORTED_MODULE_0__.endGame)(variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[6], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[7], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[8]);\r\n      }\r\n      // Rows\r\n\r\n      // columns\r\n      else if (\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[0].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[3].innerHTML &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[3].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[6].innerHTML &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[6].innerHTMl != \"\" &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[3].innerHTML != \"\"\r\n      ) {\r\n        (0,endGame_js__WEBPACK_IMPORTED_MODULE_0__.endGame)(variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[0], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[3], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[6]);\r\n      } else if (\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[1].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTML &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[7].innerHTML &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[7].innerHTMl != \"\" &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTML != \"\"\r\n      ) {\r\n        (0,endGame_js__WEBPACK_IMPORTED_MODULE_0__.endGame)(variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[1], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[7]);\r\n      } else if (\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[2].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[5].innerHTML &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[5].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[8].innerHTML &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[8].innerHTMl != \"\" &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[5].innerHTML != \"\"\r\n      ) {\r\n        (0,endGame_js__WEBPACK_IMPORTED_MODULE_0__.endGame)(variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[2], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[5], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[8]);\r\n      } else if (\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[0].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTML &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[8].innerHTML &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[8].innerHTMl != \"\" &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTML != \"\"\r\n      ) {\r\n        (0,endGame_js__WEBPACK_IMPORTED_MODULE_0__.endGame)(variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[0], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[8]);\r\n      } else if (\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[2].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTML &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[6].innerHTML &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[6].innerHTMl != \"\" &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTML != \"\"\r\n      ) {\r\n        (0,endGame_js__WEBPACK_IMPORTED_MODULE_0__.endGame)(variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[2], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[6]);\r\n      } else if (\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[0].innerHTML.length > 0 &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[1].innerHTML.length > 0 &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[2].innerHTML.length > 0 &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[3].innerHTML.length > 0 &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTML.length > 0 &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[5].innerHTML.length > 0 &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[6].innerHTML.length > 0 &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[7].innerHTML.length > 0 &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[8].innerHTML.length > 0\r\n      ) {\r\n        console.log(\"???\");\r\n      }\r\n    };\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack:///./module/Logic.js?");

/***/ }),

/***/ "./module/endGame.js":
/*!***************************!*\
  !*** ./module/endGame.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   endGame: () => (/* binding */ endGame)\n/* harmony export */ });\n/* harmony import */ var themes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! themes.js */ \"./module/themes.js\");\n/* harmony import */ var variables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! variables.js */ \"./module/variables.js\");\n// End Game Logic\r\n\r\n\r\n\r\n\r\nconst endGame = (num1, num2, num3) => {\r\n  num1.style.backgroundColor =\r\n    themes_js__WEBPACK_IMPORTED_MODULE_0__.themeSelected === \"theme-1\"\r\n      ? \"lightseagreen\"\r\n      : themes_js__WEBPACK_IMPORTED_MODULE_0__.themeSelected === \"theme-2\"\r\n      ? \"#f04\"\r\n      : themes_js__WEBPACK_IMPORTED_MODULE_0__.themeSelected === \"theme-3\"\r\n      ? \"rebeccapurple\"\r\n      : \"black\";\r\n  num2.style.backgroundColor =\r\n    themes_js__WEBPACK_IMPORTED_MODULE_0__.themeSelected === \"theme-1\"\r\n      ? \"lightseagreen\"\r\n      : themes_js__WEBPACK_IMPORTED_MODULE_0__.themeSelected === \"theme-2\"\r\n      ? \"#f04\"\r\n      : themes_js__WEBPACK_IMPORTED_MODULE_0__.themeSelected === \"theme-3\"\r\n      ? \"rebeccapurple\"\r\n      : \"black\";\r\n  num3.style.backgroundColor =\r\n    themes_js__WEBPACK_IMPORTED_MODULE_0__.themeSelected === \"theme-1\"\r\n      ? \"lightseagreen\"\r\n      : themes_js__WEBPACK_IMPORTED_MODULE_0__.themeSelected === \"theme-2\"\r\n      ? \"#f04\"\r\n      : themes_js__WEBPACK_IMPORTED_MODULE_0__.themeSelected === \"theme-3\"\r\n      ? \"rebeccapurple\"\r\n      : \"black\";\r\n  variables_js__WEBPACK_IMPORTED_MODULE_1__.app.classList.add(\"disable\");\r\n  variables_js__WEBPACK_IMPORTED_MODULE_1__.result.classList.add(\"winner\");\r\n  variables_js__WEBPACK_IMPORTED_MODULE_1__.result.innerHTML = `${num1.innerHTML.toUpperCase()} Is Winner`;\r\n  setInterval(() => (variables_js__WEBPACK_IMPORTED_MODULE_1__.result.innerHTML += \".\"), 1000);\r\n  setTimeout(() => window.location.reload(), 4000);\r\n};\r\n\n\n//# sourceURL=webpack:///./module/endGame.js?");

/***/ }),

/***/ "./module/startGame.js":
/*!*****************************!*\
  !*** ./module/startGame.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HandleBTNStart: () => (/* binding */ HandleBTNStart),\n/* harmony export */   startGame: () => (/* binding */ startGame)\n/* harmony export */ });\n/* harmony import */ var themes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! themes.js */ \"./module/themes.js\");\n/* harmony import */ var state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! state.js */ \"./module/state.js\");\n/* harmony import */ var variables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! variables.js */ \"./module/variables.js\");\n\r\n\r\n\r\n\r\nlet alertMessage = \"\";\r\n\r\n// Hide Start Game\r\nconst startGame = () => {\r\n  variables_js__WEBPACK_IMPORTED_MODULE_2__.name?.value?.length === 0 && HideGame(\"none\");\r\n};\r\n\r\n// Hide Game\r\nconst HideGame = (status) => {\r\n  variables_js__WEBPACK_IMPORTED_MODULE_2__.game_container.style.display = status;\r\n};\r\n\r\n// HandleError\r\nconst HandleError = () => {\r\n  if (alertMessage) {\r\n    variables_js__WEBPACK_IMPORTED_MODULE_2__.erorrElement.innerHTML = alertMessage;\r\n  }\r\n};\r\n\r\n// Handle BTn Start\r\nconst HandleBTNStart = () => {\r\n  if (variables_js__WEBPACK_IMPORTED_MODULE_2__.name.value === \"\") {\r\n    alertMessage = \"You Must Fill Your Name\";\r\n  } else if (themes_js__WEBPACK_IMPORTED_MODULE_0__.themeSelected === \"\") {\r\n    alertMessage = \"You Must Select Your Theme\";\r\n  } else if ((0,state_js__WEBPACK_IMPORTED_MODULE_1__.getPlay)() === \"\") {\r\n    alertMessage = \"You Must Select X or O\";\r\n  } else {\r\n    variables_js__WEBPACK_IMPORTED_MODULE_2__.startGameArea.style.display = \"none\";\r\n    variables_js__WEBPACK_IMPORTED_MODULE_2__.nameArea.textContent = variables_js__WEBPACK_IMPORTED_MODULE_2__.name.value;\r\n    HideGame(\"block\");\r\n    alertMessage = \"\";\r\n    variables_js__WEBPACK_IMPORTED_MODULE_2__.soundStartGame.play();\r\n  }\r\n  HandleError();\r\n};\r\n\r\nvariables_js__WEBPACK_IMPORTED_MODULE_2__.btnStart.addEventListener(\"click\", () => HandleBTNStart());\r\n\n\n//# sourceURL=webpack:///./module/startGame.js?");

/***/ }),

/***/ "./module/state.js":
/*!*************************!*\
  !*** ./module/state.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getPlay: () => (/* binding */ getPlay),\n/* harmony export */   setPlay: () => (/* binding */ setPlay)\n/* harmony export */ });\nlet play = \"\";\r\n\r\nconst getPlay = () => play;\r\nconst setPlay = (value) => (play = value);\r\n\n\n//# sourceURL=webpack:///./module/state.js?");

/***/ }),

/***/ "./module/themes.js":
/*!**************************!*\
  !*** ./module/themes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SetTheme: () => (/* binding */ SetTheme),\n/* harmony export */   themeNowO: () => (/* binding */ themeNowO),\n/* harmony export */   themeNowX: () => (/* binding */ themeNowX),\n/* harmony export */   themeSelected: () => (/* binding */ themeSelected)\n/* harmony export */ });\n/* harmony import */ var variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! variables.js */ \"./module/variables.js\");\n\r\n\r\nlet themeSelected = \"\";\r\nlet themeNowX = \"\";\r\nlet themeNowO = \"\";\r\n\r\n// ApplyTheme Functionality\r\nconst ApplyTheme = () => {\r\n  if (themeNowX === \"theme-1\") {\r\n    themeNowX = `<img src=\"./images/player_x/close.png\"/>`;\r\n    themeNowO = `<img src=\"./images/player_o/o (1).png\"/>`;\r\n  }\r\n  if (themeNowX === \"theme-2\") {\r\n    themeNowX = `<img src=\"./images/player_x/x.png\" />`;\r\n    themeNowO = `<img src=\"./images/player_o/letter-o.png\"/>`;\r\n  }\r\n  if (themeNowX === \"theme-3\") {\r\n    themeNowX = `<img src=\"./images/player_x/pharmacy.png\" />`;\r\n    themeNowO = `<img src=\"./images/player_o/o (2).png\"/>`;\r\n  }\r\n  if (themeNowX === \"theme-4\") {\r\n    themeNowX = `<img src=\"./images/player_x/no.png\" />`;\r\n    themeNowO = `<img src=\"./images/player_o/o (3).png\"/>`;\r\n  }\r\n  variables_js__WEBPACK_IMPORTED_MODULE_0__.result.innerHTML = `${themeNowX} ${themeNowO} Game`;\r\n};\r\n\r\n// Set Theme\r\nconst SetTheme = () => {\r\n  variables_js__WEBPACK_IMPORTED_MODULE_0__.themes.forEach((theme, index) => {\r\n    theme.onclick = () => {\r\n      themeSelected = theme.dataset.theme;\r\n      variables_js__WEBPACK_IMPORTED_MODULE_0__.game_container.className = theme.dataset.theme;\r\n      themeNowX = theme.dataset.theme;\r\n      themeNowO = theme.dataset.theme;\r\n      variables_js__WEBPACK_IMPORTED_MODULE_0__.boxes.forEach((box) => box.classList.add(theme.dataset.theme));\r\n\r\n      theme.classList.add(\"active\");\r\n      ApplyTheme();\r\n\r\n      variables_js__WEBPACK_IMPORTED_MODULE_0__.themes.forEach((oldTheme, id) => {\r\n        if (oldTheme.classList.contains(\"active\") && id !== index) {\r\n          oldTheme.classList.remove(\"active\");\r\n        }\r\n      });\r\n    };\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack:///./module/themes.js?");

/***/ }),

/***/ "./module/variables.js":
/*!*****************************!*\
  !*** ./module/variables.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   app: () => (/* binding */ app),\n/* harmony export */   boxes: () => (/* binding */ boxes),\n/* harmony export */   btnStart: () => (/* binding */ btnStart),\n/* harmony export */   erorrElement: () => (/* binding */ erorrElement),\n/* harmony export */   game_container: () => (/* binding */ game_container),\n/* harmony export */   name: () => (/* binding */ name),\n/* harmony export */   nameArea: () => (/* binding */ nameArea),\n/* harmony export */   o: () => (/* binding */ o),\n/* harmony export */   result: () => (/* binding */ result),\n/* harmony export */   soundPlayerO: () => (/* binding */ soundPlayerO),\n/* harmony export */   soundPlayerX: () => (/* binding */ soundPlayerX),\n/* harmony export */   soundStartGame: () => (/* binding */ soundStartGame),\n/* harmony export */   startGameArea: () => (/* binding */ startGameArea),\n/* harmony export */   themes: () => (/* binding */ themes),\n/* harmony export */   x: () => (/* binding */ x)\n/* harmony export */ });\nconst game_container = document.querySelector(\".game-container\");\r\nconst startGameArea = document.querySelector(\".start-game\");\r\nconst nameArea = document.querySelector(\".result li:first-of-type\");\r\nconst result = document.querySelector(\".result li:last-of-type\");\r\nconst boxes = document.querySelectorAll(\".box\");\r\nconst app = document.querySelector(\".app\");\r\nconst name = document.getElementById(\"name\");\r\nconst x = document.getElementById(\"x\");\r\nconst o = document.getElementById(\"o\");\r\nconst btnStart = document.querySelector(\".start-game button\");\r\nconst themes = document.querySelectorAll(\".themes-area img\");\r\nconst erorrElement = document.getElementById(\"error\");\r\nconst soundStartGame = new Audio(\"./sounds/game-start-6104.mp3\");\r\nconst soundPlayerX = new Audio(\"./sounds/x.wav\");\r\nconst soundPlayerO = new Audio(\"./sounds/o.wav\");\r\n\n\n//# sourceURL=webpack:///./module/variables.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./style.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style.css ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/border-leaf.png */ \"./images/border-leaf.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/bg-btn-start.jpg */ \"./images/bg-btn-start.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Itim&family=Unbounded:wght@300;400;500;600;700;900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: \"Unbounded\", cursive;\n}\n\nbody {\n  overflow-x: hidden;\n  background-color: springgreen;\n  border: 15px solid transparent;\n  -o-border-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) 10;\n     border-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) 10;\n  padding-bottom: 20px;\n}\n\nul {\n  list-style-type: none;\n}\n\ndiv.game-container {\n  text-align: center;\n  width: 800px;\n  margin: 0 auto;\n}\n@media (max-width: 800px) {\n  div.game-container {\n    width: 100%;\n  }\n}\n\nul.result {\n  height: 75px;\n  font-size: 30px;\n  color: white;\n  padding-bottom: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n@media (width <= 600px) {\n  ul.result {\n    flex-direction: column !important;\n    height: auto !important;\n    position: unset !important;\n  }\n}\nul.result li:first-of-type {\n  position: absolute !important;\n  left: 22px !important;\n  font-size: 18px !important;\n}\n@media (width <= 600px) {\n  ul.result li:first-of-type {\n    position: unset !important;\n  }\n}\nul.result li:last-of-type {\n  padding-top: 10px;\n}\n@media (600px <= width <= 992px) {\n  ul.result li:last-of-type {\n    position: absolute;\n    right: 22px;\n  }\n}\n@media (width <= 600px) {\n  ul.result li:last-of-type {\n    position: unset;\n  }\n}\n\ndiv.app {\n  display: grid;\n  grid-template-columns: auto auto auto;\n  background-color: springgreen;\n  gap: 10px;\n}\n\ndiv.app div {\n  color: white;\n  width: 90%;\n  height: 80px;\n  font-size: 40px;\n  flex-basis: 30%;\n  margin-top: 10px;\n  margin-left: 15px;\n  line-height: 80px;\n  cursor: pointer;\n  transition: all 0.3s linear;\n}\n\ndiv.app div:hover {\n  background-color: black;\n}\n\n.disable {\n  pointer-events: none;\n}\n\n.start-game {\n  width: 800px;\n  margin: 0 auto;\n  text-align: center;\n}\n@media (max-width: 800px) {\n  .start-game {\n    width: 100%;\n  }\n}\n.start-game button {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n  border: 1px solid #f05;\n  width: 148px;\n  padding: 20px 0;\n  background-size: 106%;\n  font-size: 30px;\n  font-weight: bold;\n  background-position-x: 59%;\n  background-position-y: 76%;\n  background-repeat: no-repeat;\n}\n@media (max-width: 800px) {\n  .start-game button {\n    width: 100px;\n    padding: 0;\n    font-size: 16px;\n  }\n}\n.start-game img.tree {\n  position: fixed;\n  top: 523px;\n  left: -105px;\n  animation: showTree 1s ease;\n}\n\n.start-game input {\n  margin-top: 20px;\n  background-color: transparent;\n  color: #f05;\n  border: 11px solid #f05;\n  text-align: center;\n  padding: 9px;\n  border-radius: 6px;\n  outline: none;\n  position: relative;\n  left: 0;\n  animation: showGame 1s;\n}\n@media (min-width: 801px) {\n  .start-game input {\n    left: 0;\n  }\n}\n\n.start-game p {\n  margin-top: 20px;\n  letter-spacing: 10px;\n}\n.start-game p span:hover {\n  color: #f05;\n}\n\ndiv.app div {\n  height: calc(100vh - 397px);\n}\n\n.theme-1,\ndiv.app div.theme-1 {\n  background-color: #f05;\n}\n\n.theme-2,\ndiv.app div.theme-2 {\n  background-color: black;\n}\n\n.theme-3,\ndiv.app div.theme-3 {\n  background-color: lightseagreen;\n}\n\n.theme-4,\ndiv.app div.theme-4 {\n  background-color: rebeccapurple;\n}\n\n.themes-area {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  padding: 30px 0;\n}\n@media (max-width: 800px) {\n  .themes-area {\n    flex-direction: column;\n  }\n}\n.themes-area li {\n  width: 400px;\n  padding: 10px;\n}\n@media (max-width: 800px) {\n  .themes-area li {\n    width: 100%;\n  }\n}\n.themes-area img,\n.themes-area .active {\n  width: 100%;\n  border: 10px solid transparent;\n}\n.themes-area img:hover,\n.themes-area .active:hover {\n  -o-border-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) 10;\n     border-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) 10;\n}\n.themes-area img.active,\n.themes-area .active.active {\n  -o-border-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) 10;\n     border-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) 10;\n}\n\n.result,\n.box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.result img,\n.box img {\n  width: 50px;\n}\n\nli:not(.winner) img {\n  animation: imgAnim 0.3s ease-in;\n}\n\n@keyframes showGame {\n  0% {\n    left: -1000px;\n  }\n  50% {\n    left: -500px;\n  }\n  100% {\n    left: 0;\n  }\n}\n@keyframes ShowTree {\n  0% {\n    top: 523px;\n    left: -105px;\n    width: 100%;\n  }\n  50% {\n    top: -37px;\n    width: 100%;\n    left: 0;\n  }\n  100% {\n    top: 523px;\n    left: -105px;\n    width: 100%;\n  }\n}\n@keyframes imgAnim {\n  from {\n    -o-object-position: -50px;\n       object-position: -50px;\n  }\n  to {\n    -o-object-position: 0;\n       object-position: 0;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./images/bg-btn-start.jpg":
/*!*********************************!*\
  !*** ./images/bg-btn-start.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7489ff71bf3c989f0719.jpg\";\n\n//# sourceURL=webpack:///./images/bg-btn-start.jpg?");

/***/ }),

/***/ "./images/border-leaf.png":
/*!********************************!*\
  !*** ./images/border-leaf.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"91f8b690c5213ce61fa4.png\";\n\n//# sourceURL=webpack:///./images/border-leaf.png?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;