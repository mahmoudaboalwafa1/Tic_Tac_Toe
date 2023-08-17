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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var themes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! themes.js */ \"./module/themes.js\");\n/* harmony import */ var Logic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Logic.js */ \"./module/Logic.js\");\n/* harmony import */ var startGame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! startGame.js */ \"./module/startGame.js\");\n/* harmony import */ var ChooseX_O_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ChooseX_O.js */ \"./module/ChooseX_O.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./style.css\");\n/* harmony import */ var players_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! players.js */ \"./module/players.js\");\n// Global Variables\r\n\r\n// hot module webpack\r\nif (false) {}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nthemes_js__WEBPACK_IMPORTED_MODULE_0__.SetTheme(themes_js__WEBPACK_IMPORTED_MODULE_0__.themeNowX, themes_js__WEBPACK_IMPORTED_MODULE_0__.themeNowO);\r\n(0,players_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,startGame_js__WEBPACK_IMPORTED_MODULE_2__.startGame)();\r\n(0,Logic_js__WEBPACK_IMPORTED_MODULE_1__.Logic)();\r\n(0,ChooseX_O_js__WEBPACK_IMPORTED_MODULE_3__.ChooseTicOrToc)();\r\n\n\n//# sourceURL=webpack:///./main.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Logic: () => (/* binding */ Logic)\n/* harmony export */ });\n/* harmony import */ var endGame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! endGame.js */ \"./module/endGame.js\");\n/* harmony import */ var state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! state.js */ \"./module/state.js\");\n/* harmony import */ var themes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! themes.js */ \"./module/themes.js\");\n/* harmony import */ var variables_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! variables.js */ \"./module/variables.js\");\n/* harmony import */ var WhoWin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! WhoWin.js */ \"./module/WhoWin.js\");\n/* harmony import */ var NextRound_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! NextRound.js */ \"./module/NextRound.js\");\n// Here Logic game put x or o in box and endGame\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst Logic = () => {\r\n  variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes.forEach((box, index) => {\r\n    box.onclick = () => {\r\n      if (box.innerHTML == \"\" && (0,state_js__WEBPACK_IMPORTED_MODULE_1__.getPlay)() == \"x\") {\r\n        box.innerHTML = themes_js__WEBPACK_IMPORTED_MODULE_2__.themeNowX;\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.result.innerHTML = themes_js__WEBPACK_IMPORTED_MODULE_2__.themeNowO;\r\n        (0,state_js__WEBPACK_IMPORTED_MODULE_1__.setPlay)(\"o\");\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.soundPlayerO.play();\r\n      } else if (box.innerHTML == \"\" && (0,state_js__WEBPACK_IMPORTED_MODULE_1__.getPlay)() == \"o\") {\r\n        box.innerHTML = themes_js__WEBPACK_IMPORTED_MODULE_2__.themeNowO;\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.result.innerHTML = themes_js__WEBPACK_IMPORTED_MODULE_2__.themeNowX;\r\n        (0,state_js__WEBPACK_IMPORTED_MODULE_1__.setPlay)(\"x\");\r\n\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.soundPlayerX.play();\r\n      }\r\n      // Rows\r\n      if (\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[0].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[1].innerHTML &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[1].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[2].innerHTML &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[0].innerHTMl != \"\" &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[1].innerHTML != \"\"\r\n      ) {\r\n        (0,endGame_js__WEBPACK_IMPORTED_MODULE_0__.endGame)(variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[0], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[1], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[2]);\r\n      } else if (\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[3].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTML &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[5].innerHTML &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTMl != \"\" &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[5].innerHTML != \"\"\r\n      ) {\r\n        (0,endGame_js__WEBPACK_IMPORTED_MODULE_0__.endGame)(variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[3], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[5]);\r\n      } else if (\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[6].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[7].innerHTML &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[7].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[8].innerHTML &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[8].innerHTMl != \"\" &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[7].innerHTML != \"\"\r\n      ) {\r\n        (0,endGame_js__WEBPACK_IMPORTED_MODULE_0__.endGame)(variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[6], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[7], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[8]);\r\n      }\r\n      // Rows\r\n\r\n      // columns\r\n      else if (\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[0].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[3].innerHTML &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[3].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[6].innerHTML &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[6].innerHTMl != \"\" &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[3].innerHTML != \"\"\r\n      ) {\r\n        (0,endGame_js__WEBPACK_IMPORTED_MODULE_0__.endGame)(variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[0], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[3], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[6]);\r\n      } else if (\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[1].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTML &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[7].innerHTML &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[7].innerHTMl != \"\" &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTML != \"\"\r\n      ) {\r\n        (0,endGame_js__WEBPACK_IMPORTED_MODULE_0__.endGame)(variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[1], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[7]);\r\n      } else if (\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[2].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[5].innerHTML &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[5].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[8].innerHTML &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[8].innerHTMl != \"\" &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[5].innerHTML != \"\"\r\n      ) {\r\n        (0,endGame_js__WEBPACK_IMPORTED_MODULE_0__.endGame)(variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[2], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[5], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[8]);\r\n      } else if (\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[0].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTML &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[8].innerHTML &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[8].innerHTMl != \"\" &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTML != \"\"\r\n      ) {\r\n        (0,endGame_js__WEBPACK_IMPORTED_MODULE_0__.endGame)(variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[0], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[8]);\r\n      } else if (\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[2].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTML &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[6].innerHTML &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[6].innerHTMl != \"\" &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTML != \"\"\r\n      ) {\r\n        (0,endGame_js__WEBPACK_IMPORTED_MODULE_0__.endGame)(variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[2], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[6]);\r\n      } else if (\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[0].innerHTML.length > 0 &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[1].innerHTML.length > 0 &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[2].innerHTML.length > 0 &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[3].innerHTML.length > 0 &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTML.length > 0 &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[5].innerHTML.length > 0 &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[6].innerHTML.length > 0 &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[7].innerHTML.length > 0 &&\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[8].innerHTML.length > 0\r\n      ) {\r\n        variables_js__WEBPACK_IMPORTED_MODULE_3__.result.innerHTML = \"???\";\r\n        (0,state_js__WEBPACK_IMPORTED_MODULE_1__.setWhoWin)(true);\r\n        (0,WhoWin_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n        (0,NextRound_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n      }\r\n    };\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack:///./module/Logic.js?");

/***/ }),

/***/ "./module/NextRound.js":
/*!*****************************!*\
  !*** ./module/NextRound.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ \"./module/state.js\");\n\r\n\r\n\r\nlet Themes = [\"theme-1\", \"theme-2\", \"theme-3\", \"theme-4\"];\r\nlet nextTheme = \"\";\r\n\r\nconst NextRound = () => {\r\n  if ((0,state_js__WEBPACK_IMPORTED_MODULE_0__.getWhoWin)()) {\r\n    console.log(Themes[Math.floor(Math.random() * 4)]);\r\n    setTimeout(() => {\r\n      nextTheme = Themes[Math.floor(Math.random() * 4)];\r\n      (0,state_js__WEBPACK_IMPORTED_MODULE_0__.getThemeSelected)() === nextTheme && (0,state_js__WEBPACK_IMPORTED_MODULE_0__.getThemeSelected)() != 4\r\n        ? (0,state_js__WEBPACK_IMPORTED_MODULE_0__.setThemeNext)(Themes[Math.floor(Math.random() * 4) + 1])\r\n        : (0,state_js__WEBPACK_IMPORTED_MODULE_0__.setThemeNext)(Themes[Math.floor(Math.random() * 4) - 1]);\r\n    }, 3000);\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NextRound);\r\n\n\n//# sourceURL=webpack:///./module/NextRound.js?");

/***/ }),

/***/ "./module/StartTimer.js":
/*!******************************!*\
  !*** ./module/StartTimer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./module/variables.js\");\n/* harmony import */ var state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! state.js */ \"./module/state.js\");\n\r\n\r\n\r\nlet widthTimer = 100;\r\nconst StartTimer = () => {\r\n  let interval = setInterval(() => {\r\n    variables_js__WEBPACK_IMPORTED_MODULE_0__.timer.style.width = `${widthTimer}%`;\r\n    variables_js__WEBPACK_IMPORTED_MODULE_0__.timer.style.height = `${widthTimer}%`;\r\n    variables_js__WEBPACK_IMPORTED_MODULE_0__.boxes.forEach((box) => {\r\n      box.style.width = `${widthTimer}%`;\r\n    });\r\n\r\n    if (widthTimer === 0 || (0,state_js__WEBPACK_IMPORTED_MODULE_1__.getWin)() || (0,state_js__WEBPACK_IMPORTED_MODULE_1__.getWhoWin)()) {\r\n      clearInterval(interval);\r\n    }\r\n\r\n    if (widthTimer <= 60 && widthTimer >= 36 && !(0,state_js__WEBPACK_IMPORTED_MODULE_1__.getWin)() && !(0,state_js__WEBPACK_IMPORTED_MODULE_1__.getWhoWin)()) {\r\n      variables_js__WEBPACK_IMPORTED_MODULE_0__.timer.classList.remove(\"harryup\");\r\n      variables_js__WEBPACK_IMPORTED_MODULE_0__.timer.classList.add(\"speed\");\r\n    } else if (widthTimer <= 35 && !(0,state_js__WEBPACK_IMPORTED_MODULE_1__.getWin)()) {\r\n      variables_js__WEBPACK_IMPORTED_MODULE_0__.timer.classList.remove(\"speed\");\r\n      variables_js__WEBPACK_IMPORTED_MODULE_0__.timer.classList.add(\"harryup\");\r\n    }\r\n\r\n    --widthTimer;\r\n  }, 350);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StartTimer);\r\n\n\n//# sourceURL=webpack:///./module/StartTimer.js?");

/***/ }),

/***/ "./module/WhoWin.js":
/*!**************************!*\
  !*** ./module/WhoWin.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! state.js */ \"./module/state.js\");\n/* harmony import */ var variables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! variables.js */ \"./module/variables.js\");\n\r\n\r\n\r\nlet wait = 1;\r\n\r\nconst WhoWin = () => {\r\n  if ((0,state_js__WEBPACK_IMPORTED_MODULE_0__.getWhoWin)()) {\r\n    let interval = setInterval(() => {\r\n      variables_js__WEBPACK_IMPORTED_MODULE_1__.result.innerHTML = `next round${\".\".repeat(wait)}`;\r\n\r\n      if (wait === 3) {\r\n        clearInterval(interval);\r\n      }\r\n      ++wait;\r\n    }, 1000);\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WhoWin);\r\n\n\n//# sourceURL=webpack:///./module/WhoWin.js?");

/***/ }),

/***/ "./module/endGame.js":
/*!***************************!*\
  !*** ./module/endGame.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   endGame: () => (/* binding */ endGame)\n/* harmony export */ });\n/* harmony import */ var variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! variables.js */ \"./module/variables.js\");\n/* harmony import */ var state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ \"./module/state.js\");\n// End Game Logic\r\n\r\n\r\n\r\n\r\n\r\nconst endGame = (num1, num2, num3) => {\r\n  num1.style.backgroundColor =\r\n    (0,state_js__WEBPACK_IMPORTED_MODULE_1__.getThemeSelected)() === \"theme-1\"\r\n      ? \"lightseagreen\"\r\n      : (0,state_js__WEBPACK_IMPORTED_MODULE_1__.getThemeSelected)() === \"theme-2\"\r\n      ? \"#f04\"\r\n      : (0,state_js__WEBPACK_IMPORTED_MODULE_1__.getThemeSelected)() === \"theme-3\"\r\n      ? \"rebeccapurple\"\r\n      : \"black\";\r\n  num2.style.backgroundColor =\r\n    (0,state_js__WEBPACK_IMPORTED_MODULE_1__.getThemeSelected)() === \"theme-1\"\r\n      ? \"lightseagreen\"\r\n      : (0,state_js__WEBPACK_IMPORTED_MODULE_1__.getThemeSelected)() === \"theme-2\"\r\n      ? \"#f04\"\r\n      : (0,state_js__WEBPACK_IMPORTED_MODULE_1__.getThemeSelected)() === \"theme-3\"\r\n      ? \"rebeccapurple\"\r\n      : \"black\";\r\n  num3.style.backgroundColor =\r\n    (0,state_js__WEBPACK_IMPORTED_MODULE_1__.getThemeSelected)() === \"theme-1\"\r\n      ? \"lightseagreen\"\r\n      : (0,state_js__WEBPACK_IMPORTED_MODULE_1__.getThemeSelected)() === \"theme-2\"\r\n      ? \"#f04\"\r\n      : (0,state_js__WEBPACK_IMPORTED_MODULE_1__.getThemeSelected)() === \"theme-3\"\r\n      ? \"rebeccapurple\"\r\n      : \"black\";\r\n  variables_js__WEBPACK_IMPORTED_MODULE_0__.app.classList.add(\"disable\");\r\n  variables_js__WEBPACK_IMPORTED_MODULE_0__.result.classList.add(\"winner\");\r\n  variables_js__WEBPACK_IMPORTED_MODULE_0__.result.innerHTML = `${num1.innerHTML} Is Winner`;\r\n  let close = 1;\r\n  (0,state_js__WEBPACK_IMPORTED_MODULE_1__.setWin)(true);\r\n  let interval = setInterval(() => {\r\n    variables_js__WEBPACK_IMPORTED_MODULE_0__.result.innerHTML += \".\";\r\n    if (close === 3) {\r\n      clearInterval(interval);\r\n    }\r\n    ++close;\r\n  }, 1000);\r\n};\r\n\n\n//# sourceURL=webpack:///./module/endGame.js?");

/***/ }),

/***/ "./module/players.js":
/*!***************************!*\
  !*** ./module/players.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst treePlayers = document.querySelector(\".tree\");\r\nconst textPlayers = document.querySelector(\".players\");\r\n\r\nlet animTop = 500;\r\nconst Players = () => {\r\n  treePlayers.onclick = () => {\r\n    treePlayers.classList.toggle(\"show-players\");\r\n    textPlayers.classList.toggle(\"show-players\");\r\n  };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Players);\r\n\n\n//# sourceURL=webpack:///./module/players.js?");

/***/ }),

/***/ "./module/startGame.js":
/*!*****************************!*\
  !*** ./module/startGame.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HandleBTNStart: () => (/* binding */ HandleBTNStart),\n/* harmony export */   startGame: () => (/* binding */ startGame)\n/* harmony export */ });\n/* harmony import */ var state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! state.js */ \"./module/state.js\");\n/* harmony import */ var variables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! variables.js */ \"./module/variables.js\");\n/* harmony import */ var StartTimer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! StartTimer.js */ \"./module/StartTimer.js\");\n\r\n\r\n\r\n\r\n\r\nlet alertMessage = \"\";\r\n\r\n// Hide Start Game\r\nconst startGame = () => {\r\n  variables_js__WEBPACK_IMPORTED_MODULE_1__.name?.value?.length === 0 && HideGame(\"none\");\r\n};\r\n\r\n// Hide Game\r\nconst HideGame = (status) => {\r\n  variables_js__WEBPACK_IMPORTED_MODULE_1__.game_container.style.display = status;\r\n};\r\n\r\n// HandleError\r\nconst HandleError = () => {\r\n  if (alertMessage) {\r\n    variables_js__WEBPACK_IMPORTED_MODULE_1__.erorrElement.innerHTML = alertMessage;\r\n  }\r\n};\r\n\r\n// Handle BTn Start\r\nconst HandleBTNStart = () => {\r\n  if (variables_js__WEBPACK_IMPORTED_MODULE_1__.name.value === \"\") {\r\n    alertMessage = \"You Must Fill Your Name\";\r\n  } else if ((0,state_js__WEBPACK_IMPORTED_MODULE_0__.getThemeSelected)() === \"\") {\r\n    alertMessage = \"You Must Select Your Theme\";\r\n  } else if ((0,state_js__WEBPACK_IMPORTED_MODULE_0__.getPlay)() === \"\") {\r\n    alertMessage = \"You Must Select X or O\";\r\n  } else {\r\n    variables_js__WEBPACK_IMPORTED_MODULE_1__.startGameArea.style.display = \"none\";\r\n    variables_js__WEBPACK_IMPORTED_MODULE_1__.nameArea.textContent = variables_js__WEBPACK_IMPORTED_MODULE_1__.name.value;\r\n    HideGame(\"block\");\r\n    alertMessage = \"\";\r\n    variables_js__WEBPACK_IMPORTED_MODULE_1__.soundStartGame.play();\r\n  }\r\n  HandleError();\r\n  (0,StartTimer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n};\r\n\r\nvariables_js__WEBPACK_IMPORTED_MODULE_1__.btnStart.addEventListener(\"click\", () => HandleBTNStart());\r\n\n\n//# sourceURL=webpack:///./module/startGame.js?");

/***/ }),

/***/ "./module/state.js":
/*!*************************!*\
  !*** ./module/state.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getPlay: () => (/* binding */ getPlay),\n/* harmony export */   getThemeNext: () => (/* binding */ getThemeNext),\n/* harmony export */   getThemeSelected: () => (/* binding */ getThemeSelected),\n/* harmony export */   getWhoWin: () => (/* binding */ getWhoWin),\n/* harmony export */   getWin: () => (/* binding */ getWin),\n/* harmony export */   setPlay: () => (/* binding */ setPlay),\n/* harmony export */   setThemeNext: () => (/* binding */ setThemeNext),\n/* harmony export */   setThemeSelected: () => (/* binding */ setThemeSelected),\n/* harmony export */   setWhoWin: () => (/* binding */ setWhoWin),\n/* harmony export */   setWin: () => (/* binding */ setWin)\n/* harmony export */ });\nlet play = \"\";\r\nlet win = false;\r\nlet whoWin = false;\r\nlet themeSelected = \"\";\r\nlet themeNext = \"\";\r\n\r\nconst getPlay = () => play;\r\nconst setPlay = (value) => (play = value);\r\nconst getWin = () => win;\r\nconst setWin = (value) => (win = value);\r\nconst getWhoWin = () => whoWin;\r\nconst setWhoWin = (value) => (whoWin = value);\r\nconst getThemeSelected = () => themeSelected;\r\nconst setThemeSelected = (value) => (themeSelected = value);\r\nconst getThemeNext = () => themeNext;\r\nconst setThemeNext = (value) => (themeNext = value);\r\n\n\n//# sourceURL=webpack:///./module/state.js?");

/***/ }),

/***/ "./module/themes.js":
/*!**************************!*\
  !*** ./module/themes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SetTheme: () => (/* binding */ SetTheme),\n/* harmony export */   themeNowO: () => (/* binding */ themeNowO),\n/* harmony export */   themeNowX: () => (/* binding */ themeNowX)\n/* harmony export */ });\n/* harmony import */ var variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! variables.js */ \"./module/variables.js\");\n/* harmony import */ var state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! state.js */ \"./module/state.js\");\n/* harmony import */ var NextRound_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! NextRound.js */ \"./module/NextRound.js\");\n\r\n\r\n\r\n\r\nlet themeNowX = \"\";\r\nlet themeNowO = \"\";\r\n\r\n// ApplyTheme Functionality\r\nconst ApplyTheme = () => {\r\n  if (themeNowX === \"theme-1\") {\r\n    themeNowX = `<img src=\"./images/player_x/close.png\"/>`;\r\n    themeNowO = `<img src=\"./images/player_o/o (1).png\"/>`;\r\n  }\r\n  if (themeNowX === \"theme-2\") {\r\n    themeNowX = `<img src=\"./images/player_x/x.png\" />`;\r\n    themeNowO = `<img src=\"./images/player_o/letter-o.png\"/>`;\r\n  }\r\n  if (themeNowX === \"theme-3\") {\r\n    themeNowX = `<img src=\"./images/player_x/pharmacy.png\" />`;\r\n    themeNowO = `<img src=\"./images/player_o/o (2).png\"/>`;\r\n  }\r\n  if (themeNowX === \"theme-4\") {\r\n    themeNowX = `<img src=\"./images/player_x/no.png\" />`;\r\n    themeNowO = `<img src=\"./images/player_o/o (3).png\"/>`;\r\n  }\r\n  variables_js__WEBPACK_IMPORTED_MODULE_0__.result.innerHTML = `${themeNowX} ${themeNowO} Game`;\r\n};\r\n\r\n// Set Theme\r\nconst SetTheme = () => {\r\n  variables_js__WEBPACK_IMPORTED_MODULE_0__.themes.forEach((theme, index) => {\r\n    theme.onclick = () => {\r\n      (0,state_js__WEBPACK_IMPORTED_MODULE_1__.setThemeSelected)(theme.dataset.theme);\r\n\r\n      variables_js__WEBPACK_IMPORTED_MODULE_0__.game_container.className = (0,state_js__WEBPACK_IMPORTED_MODULE_1__.getThemeNext)() ? \"\" : theme.dataset.theme;\r\n      themeNowX = (0,state_js__WEBPACK_IMPORTED_MODULE_1__.getThemeNext)() ? \"\" : theme.dataset.theme;\r\n      themeNowO = (0,state_js__WEBPACK_IMPORTED_MODULE_1__.getThemeNext)() ? \"\" : theme.dataset.theme;\r\n      variables_js__WEBPACK_IMPORTED_MODULE_0__.boxes.forEach((box) =>\r\n        box.classList.add((0,state_js__WEBPACK_IMPORTED_MODULE_1__.getThemeNext)() ? \"\" : theme.dataset.theme)\r\n      );\r\n\r\n      theme.classList.add(\"active\");\r\n      ApplyTheme();\r\n\r\n      variables_js__WEBPACK_IMPORTED_MODULE_0__.themes.forEach((oldTheme, id) => {\r\n        if (oldTheme.classList.contains(\"active\") && id !== index) {\r\n          oldTheme.classList.remove(\"active\");\r\n        }\r\n      });\r\n    };\r\n  });\r\n  (0,NextRound_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n};\r\n\n\n//# sourceURL=webpack:///./module/themes.js?");

/***/ }),

/***/ "./module/variables.js":
/*!*****************************!*\
  !*** ./module/variables.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   app: () => (/* binding */ app),\n/* harmony export */   boxes: () => (/* binding */ boxes),\n/* harmony export */   btnStart: () => (/* binding */ btnStart),\n/* harmony export */   erorrElement: () => (/* binding */ erorrElement),\n/* harmony export */   game_container: () => (/* binding */ game_container),\n/* harmony export */   name: () => (/* binding */ name),\n/* harmony export */   nameArea: () => (/* binding */ nameArea),\n/* harmony export */   o: () => (/* binding */ o),\n/* harmony export */   result: () => (/* binding */ result),\n/* harmony export */   soundPlayerO: () => (/* binding */ soundPlayerO),\n/* harmony export */   soundPlayerX: () => (/* binding */ soundPlayerX),\n/* harmony export */   soundStartGame: () => (/* binding */ soundStartGame),\n/* harmony export */   startGameArea: () => (/* binding */ startGameArea),\n/* harmony export */   themes: () => (/* binding */ themes),\n/* harmony export */   timer: () => (/* binding */ timer),\n/* harmony export */   x: () => (/* binding */ x)\n/* harmony export */ });\nconst game_container = document.querySelector(\".game-container\");\r\nconst startGameArea = document.querySelector(\".start-game\");\r\nconst nameArea = document.querySelector(\".result li:first-of-type\");\r\nconst result = document.querySelector(\".result li:nth-child(3)\");\r\nconst timer = document.querySelector(\".result li:nth-child(2) p\");\r\nconst boxes = document.querySelectorAll(\".box\");\r\nconst app = document.querySelector(\".app\");\r\nconst name = document.getElementById(\"name\");\r\nconst x = document.getElementById(\"x\");\r\nconst o = document.getElementById(\"o\");\r\nconst btnStart = document.querySelector(\".start-game button\");\r\nconst themes = document.querySelectorAll(\".themes-area img\");\r\nconst erorrElement = document.getElementById(\"error\");\r\nconst soundStartGame = new Audio(\"./sounds/game-start-6104.mp3\");\r\nconst soundPlayerX = new Audio(\"./sounds/x.wav\");\r\nconst soundPlayerO = new Audio(\"./sounds/o.wav\");\r\n\n\n//# sourceURL=webpack:///./module/variables.js?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./style.css?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;