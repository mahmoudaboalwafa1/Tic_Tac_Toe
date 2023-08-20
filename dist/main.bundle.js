/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./module/Global/ApplyTheme.js":
/*!*************************************!*\
  !*** ./module/Global/ApplyTheme.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_themes_theme_1_PNG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/themes/theme-1.PNG */ "./images/themes/theme-1.PNG");
/* harmony import */ var _images_themes_theme_2_PNG__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/themes/theme-2.PNG */ "./images/themes/theme-2.PNG");
/* harmony import */ var _images_themes_theme_3_PNG__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/themes/theme-3.PNG */ "./images/themes/theme-3.PNG");
/* harmony import */ var _images_themes_theme_4_PNG__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/themes/theme-4.PNG */ "./images/themes/theme-4.PNG");
/* harmony import */ var _images_border_leaf_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/border-leaf.png */ "./images/border-leaf.png");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./variables */ "./module/Global/variables.js");
/* harmony import */ var _images_themes_bg_theme_2_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/themes/bg-theme-2.jpg */ "./images/themes/bg-theme-2.jpg");








const themeArea = [_images_themes_theme_1_PNG__WEBPACK_IMPORTED_MODULE_0__["default"], _images_themes_theme_2_PNG__WEBPACK_IMPORTED_MODULE_1__["default"], _images_themes_theme_3_PNG__WEBPACK_IMPORTED_MODULE_2__["default"], _images_themes_theme_4_PNG__WEBPACK_IMPORTED_MODULE_3__["default"]];

const ApplyThemes = () => {
  document.body.style.backgroundImage = `url("${_images_themes_bg_theme_2_jpg__WEBPACK_IMPORTED_MODULE_6__["default"]}")`;
  _variables__WEBPACK_IMPORTED_MODULE_5__.app.style.backgroundImage = `url("${_images_themes_bg_theme_2_jpg__WEBPACK_IMPORTED_MODULE_6__["default"]}")`;

  _variables__WEBPACK_IMPORTED_MODULE_5__.themes.forEach((theme, index) => {
    theme.src = themeArea[index];
    theme.addEventListener("mouseenter", () => {
      !theme.classList.contains("active")
        ? (theme.style.borderImage = `url(${_images_border_leaf_png__WEBPACK_IMPORTED_MODULE_4__["default"]}) 10`)
        : "";
    });
    theme.addEventListener("mouseleave", () => {
      !theme.classList.contains("active")
        ? (theme.style.borderImage = "none")
        : "";
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApplyThemes);


/***/ }),

/***/ "./module/Global/ChooseX_O.js":
/*!************************************!*\
  !*** ./module/Global/ChooseX_O.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChooseTicOrToc: () => (/* binding */ ChooseTicOrToc)
/* harmony export */ });
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ "./module/Global/variables.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state.js */ "./module/Global/state.js");
/* harmony import */ var _Logic_startGame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Logic/startGame.js */ "./module/Logic/startGame.js");
// here choose x or o when onclick on word choose x or o





// Enter To Game Functionality
const EnterToGame = () => {
  (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.getPlay)() && _variables_js__WEBPACK_IMPORTED_MODULE_0__.name.value.length > 0 ? (0,_Logic_startGame_js__WEBPACK_IMPORTED_MODULE_2__.startGame)("none") : "";
};

// Choose X or O
const ChooseTicOrToc = (player) => {
  switch (player) {
    case _variables_js__WEBPACK_IMPORTED_MODULE_0__.x:
      _variables_js__WEBPACK_IMPORTED_MODULE_0__.o.style.color = "black";
      _variables_js__WEBPACK_IMPORTED_MODULE_0__.x.style.color = "#f05";
      (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.setPlay)("x");
      (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.setPlayComputer)("o");
      break;
    case _variables_js__WEBPACK_IMPORTED_MODULE_0__.o:
      _variables_js__WEBPACK_IMPORTED_MODULE_0__.x.style.color = "black";
      _variables_js__WEBPACK_IMPORTED_MODULE_0__.o.style.color = "#f05";
      (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.setPlay)("o");
      (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.setPlayComputer)("x");
      break;
  }
  EnterToGame();
};

_variables_js__WEBPACK_IMPORTED_MODULE_0__.x.onclick = () => ChooseTicOrToc(_variables_js__WEBPACK_IMPORTED_MODULE_0__.x);
_variables_js__WEBPACK_IMPORTED_MODULE_0__.o.onclick = () => ChooseTicOrToc(_variables_js__WEBPACK_IMPORTED_MODULE_0__.o);


/***/ }),

/***/ "./module/Global/state.js":
/*!********************************!*\
  !*** ./module/Global/state.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAlertMessage: () => (/* binding */ getAlertMessage),
/* harmony export */   getPlay: () => (/* binding */ getPlay),
/* harmony export */   getPlayComputer: () => (/* binding */ getPlayComputer),
/* harmony export */   getThemeNext: () => (/* binding */ getThemeNext),
/* harmony export */   getThemeSelected: () => (/* binding */ getThemeSelected),
/* harmony export */   getTimer: () => (/* binding */ getTimer),
/* harmony export */   getWhoWin: () => (/* binding */ getWhoWin),
/* harmony export */   getWin: () => (/* binding */ getWin),
/* harmony export */   setAlertMessage: () => (/* binding */ setAlertMessage),
/* harmony export */   setPlay: () => (/* binding */ setPlay),
/* harmony export */   setPlayComputer: () => (/* binding */ setPlayComputer),
/* harmony export */   setThemeNext: () => (/* binding */ setThemeNext),
/* harmony export */   setThemeSelected: () => (/* binding */ setThemeSelected),
/* harmony export */   setTimer: () => (/* binding */ setTimer),
/* harmony export */   setWhoWin: () => (/* binding */ setWhoWin),
/* harmony export */   setWin: () => (/* binding */ setWin)
/* harmony export */ });
let play = "";
let playComputer = "";
let win = false;
let whoWin = false;
let themeSelected = "";
let themeNext = "";
let alertMessage = "";
let Timer = 95;

const getPlay = () => play;
const setPlay = (value) => (play = value);
const getWin = () => win;
const setWin = (value) => (win = value);
const getWhoWin = () => whoWin;
const setWhoWin = (value) => (whoWin = value);
const getThemeSelected = () => themeSelected;
const setThemeSelected = (value) => (themeSelected = value);
const getThemeNext = () => themeNext;
const setThemeNext = (value) => (themeNext = value);
const getAlertMessage = () => alertMessage;
const setAlertMessage = (value) => (alertMessage = value);
const getTimer = () => Timer;
const setTimer = (value) => (Timer = value);
const getPlayComputer = () => playComputer;
const setPlayComputer = (value) => (playComputer = value);


/***/ }),

/***/ "./module/Global/themes.js":
/*!*********************************!*\
  !*** ./module/Global/themes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SetTheme: () => (/* binding */ SetTheme),
/* harmony export */   themeNowO: () => (/* binding */ themeNowO),
/* harmony export */   themeNowX: () => (/* binding */ themeNowX)
/* harmony export */ });
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ "./module/Global/variables.js");
/* harmony import */ var _images_player_x_close_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/player_x/close.png */ "./images/player_x/close.png");
/* harmony import */ var _images_player_x_x_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/player_x/x.png */ "./images/player_x/x.png");
/* harmony import */ var _images_player_x_pharmacy_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/player_x/pharmacy.png */ "./images/player_x/pharmacy.png");
/* harmony import */ var _images_player_x_no_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/player_x/no.png */ "./images/player_x/no.png");
/* harmony import */ var _images_player_o_o_1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/player_o/o (1).png */ "./images/player_o/o (1).png");
/* harmony import */ var _images_player_o_letter_o_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/player_o/letter-o.png */ "./images/player_o/letter-o.png");
/* harmony import */ var _images_player_o_o_2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/player_o/o (2).png */ "./images/player_o/o (2).png");
/* harmony import */ var _images_player_o_o_3_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/player_o/o (3).png */ "./images/player_o/o (3).png");
/* harmony import */ var _images_border_leaf_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../images/border-leaf.png */ "./images/border-leaf.png");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./state.js */ "./module/Global/state.js");
/* harmony import */ var _Logic_NextRound_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Logic/NextRound.js */ "./module/Logic/NextRound.js");














let themeNowX = "";
let themeNowO = "";

// ApplyTheme Functionality
const ApplyTheme = () => {
  const resultGames = () => {
    const divCollectionXO = document.createElement("div");

    const textGame = document.createTextNode("Game");
    divCollectionXO.appendChild(themeNowX);
    divCollectionXO.appendChild(themeNowO);
    divCollectionXO.appendChild(textGame);

    _variables_js__WEBPACK_IMPORTED_MODULE_0__.result.appendChild(divCollectionXO);
  };
  const SelectTheme = (ThemeX, ThemeO) => {
    let player_x_Img = document.createElement("img");
    let player_o_Img = document.createElement("img");

    player_x_Img.src = ThemeX;
    player_o_Img.src = ThemeO;

    themeNowX = player_x_Img;
    themeNowO = player_o_Img;
    _variables_js__WEBPACK_IMPORTED_MODULE_0__.result?.children[0]?.remove();

    resultGames();
  };
  themeNowX === "theme-1"
    ? SelectTheme(_images_player_x_close_png__WEBPACK_IMPORTED_MODULE_1__["default"], _images_player_o_o_1_png__WEBPACK_IMPORTED_MODULE_5__["default"])
    : themeNowX === "theme-2"
    ? SelectTheme(_images_player_x_x_png__WEBPACK_IMPORTED_MODULE_2__["default"], _images_player_o_letter_o_png__WEBPACK_IMPORTED_MODULE_6__["default"])
    : themeNowX === "theme-3"
    ? SelectTheme(_images_player_x_pharmacy_png__WEBPACK_IMPORTED_MODULE_3__["default"], _images_player_o_o_2_png__WEBPACK_IMPORTED_MODULE_7__["default"])
    : themeNowX === "theme-4"
    ? SelectTheme(_images_player_x_no_png__WEBPACK_IMPORTED_MODULE_4__["default"], _images_player_o_o_3_png__WEBPACK_IMPORTED_MODULE_8__["default"])
    : "";
};

// Set Theme
const SetTheme = () => {
  _variables_js__WEBPACK_IMPORTED_MODULE_0__.themes.forEach((theme, index) => {
    theme.addEventListener("click", () => {
      _variables_js__WEBPACK_IMPORTED_MODULE_0__.boxes.forEach((box) => (box.className = ""));
      _variables_js__WEBPACK_IMPORTED_MODULE_0__.boxes.forEach((box) => (box.className = "box"));

      (0,_state_js__WEBPACK_IMPORTED_MODULE_10__.setThemeSelected)(theme.dataset.theme);

      _variables_js__WEBPACK_IMPORTED_MODULE_0__.game_container.className = (0,_state_js__WEBPACK_IMPORTED_MODULE_10__.getThemeNext)() ? "" : theme.dataset.theme;
      themeNowX = (0,_state_js__WEBPACK_IMPORTED_MODULE_10__.getThemeNext)() ? "" : theme.dataset.theme;
      themeNowO = (0,_state_js__WEBPACK_IMPORTED_MODULE_10__.getThemeNext)() ? "" : theme.dataset.theme;
      _variables_js__WEBPACK_IMPORTED_MODULE_0__.boxes.forEach((box) =>
        box.classList.add((0,_state_js__WEBPACK_IMPORTED_MODULE_10__.getThemeNext)() ? "" : theme.dataset.theme)
      );

      theme.classList.add("active");

      theme.classList.contains("active")
        ? (theme.style.borderImage = `url(${_images_border_leaf_png__WEBPACK_IMPORTED_MODULE_9__["default"]}) 10`)
        : (theme.style.borderImage = `none`);

      ApplyTheme();

      _variables_js__WEBPACK_IMPORTED_MODULE_0__.themes.forEach((oldTheme, id) => {
        if (oldTheme.classList.contains("active") && id !== index) {
          oldTheme.style.border = "none";
          oldTheme.classList.remove("active");
        }
      });
    });
  });
  (0,_Logic_NextRound_js__WEBPACK_IMPORTED_MODULE_11__["default"])();
};


/***/ }),

/***/ "./module/Global/variables.js":
/*!************************************!*\
  !*** ./module/Global/variables.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: () => (/* binding */ app),
/* harmony export */   boxes: () => (/* binding */ boxes),
/* harmony export */   erorrElement: () => (/* binding */ erorrElement),
/* harmony export */   game_container: () => (/* binding */ game_container),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   nameArea: () => (/* binding */ nameArea),
/* harmony export */   o: () => (/* binding */ o),
/* harmony export */   playWithComputer: () => (/* binding */ playWithComputer),
/* harmony export */   playWithFriend: () => (/* binding */ playWithFriend),
/* harmony export */   result: () => (/* binding */ result),
/* harmony export */   result_container: () => (/* binding */ result_container),
/* harmony export */   startGameArea: () => (/* binding */ startGameArea),
/* harmony export */   themes: () => (/* binding */ themes),
/* harmony export */   timer: () => (/* binding */ timer),
/* harmony export */   tree: () => (/* binding */ tree),
/* harmony export */   x: () => (/* binding */ x)
/* harmony export */ });
const game_container = document.querySelector(".game-container");
const startGameArea = document.querySelector(".start-game");
const nameArea = document.querySelector(".result li:first-of-type");
const result = document.querySelector(".result li:nth-child(3)");
const timer = document.querySelector(".result li:nth-child(2) p");
const boxes = document.querySelectorAll(".box");
const app = document.querySelector(".app");
const name = document.getElementById("name");
const x = document.getElementById("x");
const o = document.getElementById("o");
const playWithFriend = document.getElementById("friend");
const playWithComputer = document.getElementById("computer");
const themes = document.querySelectorAll(".themes-area img");
const erorrElement = document.getElementById("error");
const result_container = document.querySelector("ul.result");

const tree = document.querySelector(".tree");


/***/ }),

/***/ "./module/Logic/EndGame.js":
/*!*********************************!*\
  !*** ./module/Logic/EndGame.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EndGame: () => (/* binding */ EndGame),
/* harmony export */   reset: () => (/* binding */ reset)
/* harmony export */ });
/* harmony import */ var _startGame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startGame.js */ "./module/Logic/startGame.js");
/* harmony import */ var _Global_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Global/state.js */ "./module/Global/state.js");
/* harmony import */ var _Global_themes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Global/themes.js */ "./module/Global/themes.js");
/* harmony import */ var _Global_variables_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Global/variables.js */ "./module/Global/variables.js");





const reset = (text) => {
  (0,_Global_state_js__WEBPACK_IMPORTED_MODULE_1__.setThemeSelected)("");
  (0,_Global_state_js__WEBPACK_IMPORTED_MODULE_1__.setAlertMessage)("");
  _Global_variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes.forEach((box) => (box.innerHTML = ""));
  _Global_variables_js__WEBPACK_IMPORTED_MODULE_3__.timer.className = "";

  _Global_variables_js__WEBPACK_IMPORTED_MODULE_3__.name.value = "";
  const divCollectionXO = document.createElement("div");
  const textGame = document.createTextNode(text);
  divCollectionXO.appendChild(_Global_themes_js__WEBPACK_IMPORTED_MODULE_2__.themeNowX);
  divCollectionXO.appendChild(_Global_themes_js__WEBPACK_IMPORTED_MODULE_2__.themeNowO);
  divCollectionXO.appendChild(textGame);

  _Global_variables_js__WEBPACK_IMPORTED_MODULE_3__.result.appendChild(divCollectionXO);
};

const EndGame = () => {
  reset("Game");
  _Global_variables_js__WEBPACK_IMPORTED_MODULE_3__.result.innerHTML = "";
  _Global_variables_js__WEBPACK_IMPORTED_MODULE_3__.themes.forEach((theme) => {
    theme.className = "";
    theme.style.borderImage = "none";
  });
  _Global_variables_js__WEBPACK_IMPORTED_MODULE_3__.startGameArea.style.display = "block";
  _Global_variables_js__WEBPACK_IMPORTED_MODULE_3__.x.style.color = "black";
  _Global_variables_js__WEBPACK_IMPORTED_MODULE_3__.o.style.color = "black";

  _Global_variables_js__WEBPACK_IMPORTED_MODULE_3__.name.value = "";
  (0,_startGame_js__WEBPACK_IMPORTED_MODULE_0__.HideGame)("none");
  (0,_Global_state_js__WEBPACK_IMPORTED_MODULE_1__.setWin)(false);
  (0,_Global_state_js__WEBPACK_IMPORTED_MODULE_1__.setTimer)(95);
  (0,_Global_state_js__WEBPACK_IMPORTED_MODULE_1__.setThemeNext)("");
  (0,_Global_state_js__WEBPACK_IMPORTED_MODULE_1__.setPlay)("");
};


/***/ }),

/***/ "./module/Logic/MatchColRow.js":
/*!*************************************!*\
  !*** ./module/Logic/MatchColRow.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WinGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WinGame */ "./module/Logic/WinGame.js");
/* harmony import */ var _Global_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Global/variables */ "./module/Global/variables.js");



const MatchColsAndRows = () => {
  // Rows
  function Rows(RowOne, RowTwo, RowThree) {
    if (
      _Global_variables__WEBPACK_IMPORTED_MODULE_1__.boxes[RowOne].innerHTML == _Global_variables__WEBPACK_IMPORTED_MODULE_1__.boxes[RowTwo].innerHTML &&
      _Global_variables__WEBPACK_IMPORTED_MODULE_1__.boxes[RowTwo].innerHTML == _Global_variables__WEBPACK_IMPORTED_MODULE_1__.boxes[RowThree].innerHTML &&
      _Global_variables__WEBPACK_IMPORTED_MODULE_1__.boxes[RowOne].innerHTMl != "" &&
      _Global_variables__WEBPACK_IMPORTED_MODULE_1__.boxes[RowTwo].innerHTML != ""
    ) {
      (0,_WinGame__WEBPACK_IMPORTED_MODULE_0__.WinGame)(_Global_variables__WEBPACK_IMPORTED_MODULE_1__.boxes[RowOne], _Global_variables__WEBPACK_IMPORTED_MODULE_1__.boxes[RowOne], _Global_variables__WEBPACK_IMPORTED_MODULE_1__.boxes[RowThree]);
    }
  }

  Rows(2, 6, 4);
  Rows(2, 4, 6);
  Rows(0, 4, 8);
  Rows(0, 8, 4);

  // columns
  const Columns = (ColOne, ColTwo, ColThree) => {
    if (
      _Global_variables__WEBPACK_IMPORTED_MODULE_1__.boxes[ColOne].innerHTML == _Global_variables__WEBPACK_IMPORTED_MODULE_1__.boxes[ColTwo].innerHTML &&
      _Global_variables__WEBPACK_IMPORTED_MODULE_1__.boxes[ColTwo].innerHTML == _Global_variables__WEBPACK_IMPORTED_MODULE_1__.boxes[ColThree].innerHTML &&
      _Global_variables__WEBPACK_IMPORTED_MODULE_1__.boxes[ColThree].innerHTMl != "" &&
      _Global_variables__WEBPACK_IMPORTED_MODULE_1__.boxes[ColTwo].innerHTML != ""
    ) {
      (0,_WinGame__WEBPACK_IMPORTED_MODULE_0__.WinGame)(_Global_variables__WEBPACK_IMPORTED_MODULE_1__.boxes[ColOne], _Global_variables__WEBPACK_IMPORTED_MODULE_1__.boxes[ColTwo], _Global_variables__WEBPACK_IMPORTED_MODULE_1__.boxes[ColThree]);
    }
  };

  Columns(0, 3, 6);
  Columns(0, 1, 2);
  Columns(6, 7, 8);
  Columns(1, 4, 7);
  Columns(3, 4, 5);
  Columns(2, 5, 8);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MatchColsAndRows);


/***/ }),

/***/ "./module/Logic/NextRound.js":
/*!***********************************!*\
  !*** ./module/Logic/NextRound.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EndGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EndGame */ "./module/Logic/EndGame.js");
/* harmony import */ var _startGame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startGame.js */ "./module/Logic/startGame.js");
/* harmony import */ var _Global_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Global/state.js */ "./module/Global/state.js");
/* harmony import */ var _Global_variables_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Global/variables.js */ "./module/Global/variables.js");





let Themes = ["theme-1", "theme-2", "theme-3", "theme-4"];
let nextTheme = "";
let round = 1;
const NextRound = () => {
  if ((0,_Global_state_js__WEBPACK_IMPORTED_MODULE_2__.getWhoWin)()) {
    (0,_Global_state_js__WEBPACK_IMPORTED_MODULE_2__.setTimer)(95);
    _Global_variables_js__WEBPACK_IMPORTED_MODULE_3__.app.classList.add("disable");
    setTimeout(() => {
      _Global_variables_js__WEBPACK_IMPORTED_MODULE_3__.result.innerHTML = "";
      nextTheme = Themes[Math.floor(Math.random() * 4)];

      (0,_startGame_js__WEBPACK_IMPORTED_MODULE_1__.HideGame)("block");
      _Global_variables_js__WEBPACK_IMPORTED_MODULE_3__.result_container.classList.add(nextTheme);
      _Global_variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes.forEach((box) => {
        box.className = "box";
        box.classList.add(nextTheme);
      });
      (0,_startGame_js__WEBPACK_IMPORTED_MODULE_1__.changeColorBoxes)();
      _Global_variables_js__WEBPACK_IMPORTED_MODULE_3__.app.classList.remove("disable");
      ++round;
      (0,_EndGame__WEBPACK_IMPORTED_MODULE_0__.reset)(`Round ${round}`);
    }, 3000);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NextRound);


/***/ }),

/***/ "./module/Logic/WinGame.js":
/*!*********************************!*\
  !*** ./module/Logic/WinGame.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WinGame: () => (/* binding */ WinGame)
/* harmony export */ });
/* harmony import */ var _Global_variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Global/variables.js */ "./module/Global/variables.js");
/* harmony import */ var _Global_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Global/state.js */ "./module/Global/state.js");
/* harmony import */ var _EndGame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EndGame.js */ "./module/Logic/EndGame.js");
// End Game Logic






const WinGame = (...arg) => {
  (0,_Global_state_js__WEBPACK_IMPORTED_MODULE_1__.setWin)(true);
  if ((0,_Global_state_js__WEBPACK_IMPORTED_MODULE_1__.getWin)()) {
    for (let i = 0; i < arg.length; i++) {
      const colorNow = () => {
        const color = (0,_Global_state_js__WEBPACK_IMPORTED_MODULE_1__.getThemeSelected)().includes("theme-1")
          ? "lightseagreen"
          : (0,_Global_state_js__WEBPACK_IMPORTED_MODULE_1__.getThemeSelected)().includes("theme-2")
          ? "#f04"
          : (0,_Global_state_js__WEBPACK_IMPORTED_MODULE_1__.getThemeSelected)().includes("theme-3")
          ? "rebeccapurple"
          : "black";
        return color;
      };
      arg[i].style.backgroundColor = colorNow();
    }
  }

  _Global_variables_js__WEBPACK_IMPORTED_MODULE_0__.result.classList.add("winner");
  _Global_variables_js__WEBPACK_IMPORTED_MODULE_0__.app.classList.add("disable");

  _Global_variables_js__WEBPACK_IMPORTED_MODULE_0__.result.innerHTML = `<img src=${arg[0].children[0].src}/> is Winner`;

  let close = 1;

  let interval = setInterval(() => {
    _Global_variables_js__WEBPACK_IMPORTED_MODULE_0__.result.innerHTML += ".";
    if (close === 3) {
      (0,_EndGame_js__WEBPACK_IMPORTED_MODULE_2__.EndGame)();
      clearInterval(interval);
      (0,_Global_state_js__WEBPACK_IMPORTED_MODULE_1__.setWhoWin)(false);
    }
    ++close;
  }, 1000);
};


/***/ }),

/***/ "./module/Logic/logic.js":
/*!*******************************!*\
  !*** ./module/Logic/logic.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Logic: () => (/* binding */ Logic)
/* harmony export */ });
/* harmony import */ var _Global_state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Global/state.js */ "./module/Global/state.js");
/* harmony import */ var _Global_themes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Global/themes.js */ "./module/Global/themes.js");
/* harmony import */ var _Global_variables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Global/variables.js */ "./module/Global/variables.js");
/* harmony import */ var _NextRound_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NextRound.js */ "./module/Logic/NextRound.js");
/* harmony import */ var _MatchColRow_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MatchColRow.js */ "./module/Logic/MatchColRow.js");
// Here Logic game put x or o in box and WinGame








const Logic = (playing) => {
  (0,_Global_state_js__WEBPACK_IMPORTED_MODULE_0__.setAlertMessage)("");
  _Global_variables_js__WEBPACK_IMPORTED_MODULE_2__.boxes.forEach((box) => {
    box.onclick = () => {
      if (box.innerHTML.length === 0) {
        _Global_variables_js__WEBPACK_IMPORTED_MODULE_2__.result?.children[0]?.remove();
        if (box.innerHTML.length === 0 && (0,_Global_state_js__WEBPACK_IMPORTED_MODULE_0__.getPlay)() == "x") {
          box.innerHTML = `<img src="${_Global_themes_js__WEBPACK_IMPORTED_MODULE_1__.themeNowX.src}"/>`;
          _Global_variables_js__WEBPACK_IMPORTED_MODULE_2__.result.appendChild(_Global_themes_js__WEBPACK_IMPORTED_MODULE_1__.themeNowO);
          playing != "computer" && (0,_Global_state_js__WEBPACK_IMPORTED_MODULE_0__.setPlay)("o");
          (0,_Global_state_js__WEBPACK_IMPORTED_MODULE_0__.setWhoWin)(false);
        } else if (box.innerHTML.length === 0 && (0,_Global_state_js__WEBPACK_IMPORTED_MODULE_0__.getPlay)() == "o") {
          box.innerHTML = `<img src="${_Global_themes_js__WEBPACK_IMPORTED_MODULE_1__.themeNowO.src}"/>`;

          _Global_variables_js__WEBPACK_IMPORTED_MODULE_2__.result.appendChild(_Global_themes_js__WEBPACK_IMPORTED_MODULE_1__.themeNowX);
          playing != "computer" && (0,_Global_state_js__WEBPACK_IMPORTED_MODULE_0__.setPlay)("x");
          (0,_Global_state_js__WEBPACK_IMPORTED_MODULE_0__.setWhoWin)(false);
        }

        (0,_MatchColRow_js__WEBPACK_IMPORTED_MODULE_4__["default"])();

        // No Any Body Win
        if (
          _Global_variables_js__WEBPACK_IMPORTED_MODULE_2__.boxes[0].innerHTML.length > 0 &&
          _Global_variables_js__WEBPACK_IMPORTED_MODULE_2__.boxes[1].innerHTML.length > 0 &&
          _Global_variables_js__WEBPACK_IMPORTED_MODULE_2__.boxes[2].innerHTML.length > 0 &&
          _Global_variables_js__WEBPACK_IMPORTED_MODULE_2__.boxes[3].innerHTML.length > 0 &&
          _Global_variables_js__WEBPACK_IMPORTED_MODULE_2__.boxes[4].innerHTML.length > 0 &&
          _Global_variables_js__WEBPACK_IMPORTED_MODULE_2__.boxes[5].innerHTML.length > 0 &&
          _Global_variables_js__WEBPACK_IMPORTED_MODULE_2__.boxes[6].innerHTML.length > 0 &&
          _Global_variables_js__WEBPACK_IMPORTED_MODULE_2__.boxes[7].innerHTML.length > 0 &&
          _Global_variables_js__WEBPACK_IMPORTED_MODULE_2__.boxes[8].innerHTML.length > 0
        ) {
          (0,_Global_state_js__WEBPACK_IMPORTED_MODULE_0__.setWhoWin)(true);
          (0,_NextRound_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
        }

        if (playing === "computer") {
          let emptyBoxes = [..._Global_variables_js__WEBPACK_IMPORTED_MODULE_2__.boxes].filter(
            (boxs) => boxs.innerHTML.length === 0
          );

          const randPlay = Math.floor(Math.random() * emptyBoxes.length);

          if (
            emptyBoxes[randPlay]?.innerHTML?.length === 0 &&
            (0,_Global_state_js__WEBPACK_IMPORTED_MODULE_0__.getPlayComputer)() == "x" &&
            !(0,_Global_state_js__WEBPACK_IMPORTED_MODULE_0__.getWin)()
          ) {
            emptyBoxes[randPlay].innerHTML = `<img src="${_Global_themes_js__WEBPACK_IMPORTED_MODULE_1__.themeNowX.src}"/>`;

            _Global_variables_js__WEBPACK_IMPORTED_MODULE_2__.result.innerHTML = `You:<img src="${_Global_themes_js__WEBPACK_IMPORTED_MODULE_1__.themeNowO.src}"/>PC:<img src="${_Global_themes_js__WEBPACK_IMPORTED_MODULE_1__.themeNowX.src}"/>`;
            (0,_Global_state_js__WEBPACK_IMPORTED_MODULE_0__.setWhoWin)();
          } else if (
            emptyBoxes[randPlay]?.innerHTML?.length === 0 &&
            (0,_Global_state_js__WEBPACK_IMPORTED_MODULE_0__.getPlayComputer)() == "o" &&
            !(0,_Global_state_js__WEBPACK_IMPORTED_MODULE_0__.getWin)()
          ) {
            _Global_variables_js__WEBPACK_IMPORTED_MODULE_2__.result.innerHTML = `You:<img src="${_Global_themes_js__WEBPACK_IMPORTED_MODULE_1__.themeNowX.src}"/>PC:<img src="${_Global_themes_js__WEBPACK_IMPORTED_MODULE_1__.themeNowO.src}"/>`;
            emptyBoxes[randPlay].innerHTML = `<img src="${_Global_themes_js__WEBPACK_IMPORTED_MODULE_1__.themeNowO.src}"/>`;

            (0,_Global_state_js__WEBPACK_IMPORTED_MODULE_0__.setWhoWin)(false);
          }
          (0,_MatchColRow_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
        }
      }
    };
  });
};


/***/ }),

/***/ "./module/Logic/startGame.js":
/*!***********************************!*\
  !*** ./module/Logic/startGame.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HandleBTNStart: () => (/* binding */ HandleBTNStart),
/* harmony export */   HideGame: () => (/* binding */ HideGame),
/* harmony export */   changeColorBoxes: () => (/* binding */ changeColorBoxes),
/* harmony export */   startGame: () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _Global_state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Global/state.js */ "./module/Global/state.js");
/* harmony import */ var _Global_variables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Global/variables.js */ "./module/Global/variables.js");
/* harmony import */ var _StartTimer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../StartTimer.js */ "./module/StartTimer.js");
/* harmony import */ var _PlayWithFriend_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PlayWithFriend.js */ "./module/PlayWithFriend.js");
/* harmony import */ var _PlayWithPc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PlayWithPc.js */ "./module/PlayWithPc.js");







// Hide Start Game
const startGame = () => {
  _Global_variables_js__WEBPACK_IMPORTED_MODULE_1__.name?.value?.length === 0 && HideGame("none");
};

// Hide Game
const HideGame = (status) => {
  _Global_variables_js__WEBPACK_IMPORTED_MODULE_1__.game_container.style.display = status;
};

// HandleError
const HandleError = () => {
  if ((0,_Global_state_js__WEBPACK_IMPORTED_MODULE_0__.getAlertMessage)()) {
    _Global_variables_js__WEBPACK_IMPORTED_MODULE_1__.erorrElement.innerHTML = (0,_Global_state_js__WEBPACK_IMPORTED_MODULE_0__.getAlertMessage)();
  }
};

const changeColorBoxes = () => {
  (0,_StartTimer_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  _Global_variables_js__WEBPACK_IMPORTED_MODULE_1__.boxes.forEach((box) => {
    if (box.classList.contains("theme-1")) {
      box.style.backgroundColor = "#f04";
    }
    if (box.classList.contains("theme-2")) {
      box.style.backgroundColor = "black";
    }
    if (box.classList.contains("theme-3")) {
      box.style.backgroundColor = "lightseagreen";
    }
    if (box.classList.contains("theme-4")) {
      box.style.backgroundColor = "rebeccapurple";
    }
  });
  _Global_variables_js__WEBPACK_IMPORTED_MODULE_1__.app.classList.remove("disable");
};

// Handle BTn Start
const HandleBTNStart = (playing) => {
  if (_Global_variables_js__WEBPACK_IMPORTED_MODULE_1__.name.value === "") {
    (0,_Global_state_js__WEBPACK_IMPORTED_MODULE_0__.setAlertMessage)("You Must Fill Your Name");
  } else if ((0,_Global_state_js__WEBPACK_IMPORTED_MODULE_0__.getThemeSelected)() === "") {
    (0,_Global_state_js__WEBPACK_IMPORTED_MODULE_0__.setAlertMessage)("You Must Select Your Theme");
  } else if ((0,_Global_state_js__WEBPACK_IMPORTED_MODULE_0__.getPlay)() === "") {
    (0,_Global_state_js__WEBPACK_IMPORTED_MODULE_0__.setAlertMessage)("You Must Select X or O");
  } else {
    _Global_variables_js__WEBPACK_IMPORTED_MODULE_1__.startGameArea.style.display = "none";
    _Global_variables_js__WEBPACK_IMPORTED_MODULE_1__.nameArea.textContent = _Global_variables_js__WEBPACK_IMPORTED_MODULE_1__.name.value;
    HideGame("block");
    (0,_Global_state_js__WEBPACK_IMPORTED_MODULE_0__.setAlertMessage)("");
    changeColorBoxes();

    playing.includes("friend") ? (0,_PlayWithFriend_js__WEBPACK_IMPORTED_MODULE_3__["default"])() : (0,_PlayWithPc_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  }
  HandleError();
};

_Global_variables_js__WEBPACK_IMPORTED_MODULE_1__.playWithFriend.addEventListener("click", () =>
  HandleBTNStart("friend")
);
_Global_variables_js__WEBPACK_IMPORTED_MODULE_1__.playWithComputer.addEventListener("click", () =>
  HandleBTNStart("computer")
);


/***/ }),

/***/ "./module/PlayWithFriend.js":
/*!**********************************!*\
  !*** ./module/PlayWithFriend.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Logic_logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logic/logic.js */ "./module/Logic/logic.js");


const PlayWithFriend = () => {
  (0,_Logic_logic_js__WEBPACK_IMPORTED_MODULE_0__.Logic)("friend");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayWithFriend);


/***/ }),

/***/ "./module/PlayWithPc.js":
/*!******************************!*\
  !*** ./module/PlayWithPc.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Logic_logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logic/logic.js */ "./module/Logic/logic.js");


const PlayWithPc = () => {
  (0,_Logic_logic_js__WEBPACK_IMPORTED_MODULE_0__.Logic)("computer");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayWithPc);


/***/ }),

/***/ "./module/StartTimer.js":
/*!******************************!*\
  !*** ./module/StartTimer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Global_variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Global/variables.js */ "./module/Global/variables.js");
/* harmony import */ var _Global_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Global/state.js */ "./module/Global/state.js");
/* harmony import */ var _Logic_EndGame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logic/EndGame.js */ "./module/Logic/EndGame.js");




const StartTimer = () => {
  let interval = setInterval(() => {
    _Global_variables_js__WEBPACK_IMPORTED_MODULE_0__.timer.style.width = `${(0,_Global_state_js__WEBPACK_IMPORTED_MODULE_1__.getTimer)()}%`;
    _Global_variables_js__WEBPACK_IMPORTED_MODULE_0__.timer.style.height = `${(0,_Global_state_js__WEBPACK_IMPORTED_MODULE_1__.getTimer)()}%`;
    _Global_variables_js__WEBPACK_IMPORTED_MODULE_0__.app.classList.remove("disable");

    _Global_variables_js__WEBPACK_IMPORTED_MODULE_0__.boxes.forEach((box) => {
      box.style.width = `${(0,_Global_state_js__WEBPACK_IMPORTED_MODULE_1__.getTimer)()}%`;
    });

    if ((0,_Global_state_js__WEBPACK_IMPORTED_MODULE_1__.getTimer)() === 0 || (0,_Global_state_js__WEBPACK_IMPORTED_MODULE_1__.getWin)()) {
      clearInterval(interval);
      (0,_Logic_EndGame_js__WEBPACK_IMPORTED_MODULE_2__.EndGame)();
    }

    if ((0,_Global_state_js__WEBPACK_IMPORTED_MODULE_1__.getTimer)() <= 60 && (0,_Global_state_js__WEBPACK_IMPORTED_MODULE_1__.getTimer)() >= 36 && !(0,_Global_state_js__WEBPACK_IMPORTED_MODULE_1__.getWin)() && !(0,_Global_state_js__WEBPACK_IMPORTED_MODULE_1__.getWhoWin)()) {
      _Global_variables_js__WEBPACK_IMPORTED_MODULE_0__.timer.classList.remove("harryup");
      _Global_variables_js__WEBPACK_IMPORTED_MODULE_0__.timer.classList.add("speed");
    } else if ((0,_Global_state_js__WEBPACK_IMPORTED_MODULE_1__.getTimer)() <= 35 && !(0,_Global_state_js__WEBPACK_IMPORTED_MODULE_1__.getWin)()) {
      _Global_variables_js__WEBPACK_IMPORTED_MODULE_0__.timer.classList.remove("speed");
      _Global_variables_js__WEBPACK_IMPORTED_MODULE_0__.timer.classList.add("harryup");
    }

    (0,_Global_state_js__WEBPACK_IMPORTED_MODULE_1__.setTimer)((0,_Global_state_js__WEBPACK_IMPORTED_MODULE_1__.getTimer)() - 1);
  }, 350);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StartTimer);


/***/ }),

/***/ "./images/border-leaf.png":
/*!********************************!*\
  !*** ./images/border-leaf.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/border-leaf.png");

/***/ }),

/***/ "./images/player_o/letter-o.png":
/*!**************************************!*\
  !*** ./images/player_o/letter-o.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/letter-o.png");

/***/ }),

/***/ "./images/player_o/o (1).png":
/*!***********************************!*\
  !*** ./images/player_o/o (1).png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/o (1).png");

/***/ }),

/***/ "./images/player_o/o (2).png":
/*!***********************************!*\
  !*** ./images/player_o/o (2).png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/o (2).png");

/***/ }),

/***/ "./images/player_o/o (3).png":
/*!***********************************!*\
  !*** ./images/player_o/o (3).png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/o (3).png");

/***/ }),

/***/ "./images/player_x/close.png":
/*!***********************************!*\
  !*** ./images/player_x/close.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/close.png");

/***/ }),

/***/ "./images/player_x/no.png":
/*!********************************!*\
  !*** ./images/player_x/no.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/no.png");

/***/ }),

/***/ "./images/player_x/pharmacy.png":
/*!**************************************!*\
  !*** ./images/player_x/pharmacy.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/pharmacy.png");

/***/ }),

/***/ "./images/player_x/x.png":
/*!*******************************!*\
  !*** ./images/player_x/x.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/x.png");

/***/ }),

/***/ "./images/themes/bg-theme-2.jpg":
/*!**************************************!*\
  !*** ./images/themes/bg-theme-2.jpg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/bg-theme-2.jpg");

/***/ }),

/***/ "./images/themes/theme-1.PNG":
/*!***********************************!*\
  !*** ./images/themes/theme-1.PNG ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/theme-1.PNG");

/***/ }),

/***/ "./images/themes/theme-2.PNG":
/*!***********************************!*\
  !*** ./images/themes/theme-2.PNG ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/theme-2.PNG");

/***/ }),

/***/ "./images/themes/theme-3.PNG":
/*!***********************************!*\
  !*** ./images/themes/theme-3.PNG ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/theme-3.PNG");

/***/ }),

/***/ "./images/themes/theme-4.PNG":
/*!***********************************!*\
  !*** ./images/themes/theme-4.PNG ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/theme-4.PNG");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_Global_themes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/Global/themes.js */ "./module/Global/themes.js");
/* harmony import */ var _module_Logic_startGame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/Logic/startGame.js */ "./module/Logic/startGame.js");
/* harmony import */ var _module_Global_ChooseX_O_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/Global/ChooseX_O.js */ "./module/Global/ChooseX_O.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./style.css");
/* harmony import */ var _module_Global_ApplyTheme_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/Global/ApplyTheme.js */ "./module/Global/ApplyTheme.js");






_module_Global_themes_js__WEBPACK_IMPORTED_MODULE_0__.SetTheme(_module_Global_themes_js__WEBPACK_IMPORTED_MODULE_0__.themeNowX, _module_Global_themes_js__WEBPACK_IMPORTED_MODULE_0__.themeNowO);
(0,_module_Logic_startGame_js__WEBPACK_IMPORTED_MODULE_1__.startGame)();
(0,_module_Global_ApplyTheme_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_module_Global_ChooseX_O_js__WEBPACK_IMPORTED_MODULE_2__.ChooseTicOrToc)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQm1EO0FBQ0s7QUFDTTtBQUM5QjtBQUN3QjtBQUN4RDtBQUNBLDhEQUFjLENBQUMsK0RBQWUsRUFBRSwrREFBZTtBQUMvQyxxRUFBUztBQUNULHdFQUFXO0FBQ1gsMkVBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly94b19nYW1lLy4vbW9kdWxlL0dsb2JhbC9BcHBseVRoZW1lLmpzIiwid2VicGFjazovL3hvX2dhbWUvLi9tb2R1bGUvR2xvYmFsL0Nob29zZVhfTy5qcyIsIndlYnBhY2s6Ly94b19nYW1lLy4vbW9kdWxlL0dsb2JhbC9zdGF0ZS5qcyIsIndlYnBhY2s6Ly94b19nYW1lLy4vbW9kdWxlL0dsb2JhbC90aGVtZXMuanMiLCJ3ZWJwYWNrOi8veG9fZ2FtZS8uL21vZHVsZS9HbG9iYWwvdmFyaWFibGVzLmpzIiwid2VicGFjazovL3hvX2dhbWUvLi9tb2R1bGUvTG9naWMvRW5kR2FtZS5qcyIsIndlYnBhY2s6Ly94b19nYW1lLy4vbW9kdWxlL0xvZ2ljL01hdGNoQ29sUm93LmpzIiwid2VicGFjazovL3hvX2dhbWUvLi9tb2R1bGUvTG9naWMvTmV4dFJvdW5kLmpzIiwid2VicGFjazovL3hvX2dhbWUvLi9tb2R1bGUvTG9naWMvV2luR2FtZS5qcyIsIndlYnBhY2s6Ly94b19nYW1lLy4vbW9kdWxlL0xvZ2ljL2xvZ2ljLmpzIiwid2VicGFjazovL3hvX2dhbWUvLi9tb2R1bGUvTG9naWMvc3RhcnRHYW1lLmpzIiwid2VicGFjazovL3hvX2dhbWUvLi9tb2R1bGUvUGxheVdpdGhGcmllbmQuanMiLCJ3ZWJwYWNrOi8veG9fZ2FtZS8uL21vZHVsZS9QbGF5V2l0aFBjLmpzIiwid2VicGFjazovL3hvX2dhbWUvLi9tb2R1bGUvU3RhcnRUaW1lci5qcyIsIndlYnBhY2s6Ly94b19nYW1lLy4vaW1hZ2VzL2JvcmRlci1sZWFmLnBuZyIsIndlYnBhY2s6Ly94b19nYW1lLy4vaW1hZ2VzL3BsYXllcl9vL2xldHRlci1vLnBuZyIsIndlYnBhY2s6Ly94b19nYW1lLy4vaW1hZ2VzL3BsYXllcl9vL28gKDEpLnBuZyIsIndlYnBhY2s6Ly94b19nYW1lLy4vaW1hZ2VzL3BsYXllcl9vL28gKDIpLnBuZyIsIndlYnBhY2s6Ly94b19nYW1lLy4vaW1hZ2VzL3BsYXllcl9vL28gKDMpLnBuZyIsIndlYnBhY2s6Ly94b19nYW1lLy4vaW1hZ2VzL3BsYXllcl94L2Nsb3NlLnBuZyIsIndlYnBhY2s6Ly94b19nYW1lLy4vaW1hZ2VzL3BsYXllcl94L25vLnBuZyIsIndlYnBhY2s6Ly94b19nYW1lLy4vaW1hZ2VzL3BsYXllcl94L3BoYXJtYWN5LnBuZyIsIndlYnBhY2s6Ly94b19nYW1lLy4vaW1hZ2VzL3BsYXllcl94L3gucG5nIiwid2VicGFjazovL3hvX2dhbWUvLi9pbWFnZXMvdGhlbWVzL2JnLXRoZW1lLTIuanBnIiwid2VicGFjazovL3hvX2dhbWUvLi9pbWFnZXMvdGhlbWVzL3RoZW1lLTEuUE5HIiwid2VicGFjazovL3hvX2dhbWUvLi9pbWFnZXMvdGhlbWVzL3RoZW1lLTIuUE5HIiwid2VicGFjazovL3hvX2dhbWUvLi9pbWFnZXMvdGhlbWVzL3RoZW1lLTMuUE5HIiwid2VicGFjazovL3hvX2dhbWUvLi9pbWFnZXMvdGhlbWVzL3RoZW1lLTQuUE5HIiwid2VicGFjazovL3hvX2dhbWUvLi9zdHlsZS5jc3M/NjQyOSIsIndlYnBhY2s6Ly94b19nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3hvX2dhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3hvX2dhbWUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly94b19nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8veG9fZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3hvX2dhbWUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8veG9fZ2FtZS8uL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRoZW1lQXJlYU9uZSBmcm9tIFwiLi4vLi4vaW1hZ2VzL3RoZW1lcy90aGVtZS0xLlBOR1wiO1xyXG5pbXBvcnQgVGhlbWVBcmVhVHdvIGZyb20gXCIuLi8uLi9pbWFnZXMvdGhlbWVzL3RoZW1lLTIuUE5HXCI7XHJcbmltcG9ydCBUaGVtZUFyZWFUaHJlZSBmcm9tIFwiLi4vLi4vaW1hZ2VzL3RoZW1lcy90aGVtZS0zLlBOR1wiO1xyXG5pbXBvcnQgVGhlbWVBcmVhRm91ciBmcm9tIFwiLi4vLi4vaW1hZ2VzL3RoZW1lcy90aGVtZS00LlBOR1wiO1xyXG5pbXBvcnQgbGVhZkltZyBmcm9tIFwiLi4vLi4vaW1hZ2VzL2JvcmRlci1sZWFmLnBuZ1wiO1xyXG5pbXBvcnQgeyBhcHAsIHRoZW1lcyB9IGZyb20gXCIuL3ZhcmlhYmxlc1wiO1xyXG5pbXBvcnQgdGhlbWVCZ0JvZHlPbmUgZnJvbSBcIi4uLy4uL2ltYWdlcy90aGVtZXMvYmctdGhlbWUtMi5qcGdcIjtcclxuXHJcbmNvbnN0IHRoZW1lQXJlYSA9IFtUaGVtZUFyZWFPbmUsIFRoZW1lQXJlYVR3bywgVGhlbWVBcmVhVGhyZWUsIFRoZW1lQXJlYUZvdXJdO1xyXG5cclxuY29uc3QgQXBwbHlUaGVtZXMgPSAoKSA9PiB7XHJcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHt0aGVtZUJnQm9keU9uZX1cIilgO1xyXG4gIGFwcC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHt0aGVtZUJnQm9keU9uZX1cIilgO1xyXG5cclxuICB0aGVtZXMuZm9yRWFjaCgodGhlbWUsIGluZGV4KSA9PiB7XHJcbiAgICB0aGVtZS5zcmMgPSB0aGVtZUFyZWFbaW5kZXhdO1xyXG4gICAgdGhlbWUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xyXG4gICAgICAhdGhlbWUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpXHJcbiAgICAgICAgPyAodGhlbWUuc3R5bGUuYm9yZGVySW1hZ2UgPSBgdXJsKCR7bGVhZkltZ30pIDEwYClcclxuICAgICAgICA6IFwiXCI7XHJcbiAgICB9KTtcclxuICAgIHRoZW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcclxuICAgICAgIXRoZW1lLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKVxyXG4gICAgICAgID8gKHRoZW1lLnN0eWxlLmJvcmRlckltYWdlID0gXCJub25lXCIpXHJcbiAgICAgICAgOiBcIlwiO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBseVRoZW1lcztcclxuIiwiLy8gaGVyZSBjaG9vc2UgeCBvciBvIHdoZW4gb25jbGljayBvbiB3b3JkIGNob29zZSB4IG9yIG9cclxuXHJcbmltcG9ydCAqIGFzIHZhcmlhYmxlcyBmcm9tIFwiLi92YXJpYWJsZXMuanNcIjtcclxuaW1wb3J0IHsgZ2V0UGxheSwgc2V0UGxheSwgc2V0UGxheUNvbXB1dGVyIH0gZnJvbSBcIi4vc3RhdGUuanNcIjtcclxuaW1wb3J0IHsgc3RhcnRHYW1lIH0gZnJvbSBcIi4uL0xvZ2ljL3N0YXJ0R2FtZS5qc1wiO1xyXG5cclxuLy8gRW50ZXIgVG8gR2FtZSBGdW5jdGlvbmFsaXR5XHJcbmNvbnN0IEVudGVyVG9HYW1lID0gKCkgPT4ge1xyXG4gIGdldFBsYXkoKSAmJiB2YXJpYWJsZXMubmFtZS52YWx1ZS5sZW5ndGggPiAwID8gc3RhcnRHYW1lKFwibm9uZVwiKSA6IFwiXCI7XHJcbn07XHJcblxyXG4vLyBDaG9vc2UgWCBvciBPXHJcbmV4cG9ydCBjb25zdCBDaG9vc2VUaWNPclRvYyA9IChwbGF5ZXIpID0+IHtcclxuICBzd2l0Y2ggKHBsYXllcikge1xyXG4gICAgY2FzZSB2YXJpYWJsZXMueDpcclxuICAgICAgdmFyaWFibGVzLm8uc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XHJcbiAgICAgIHZhcmlhYmxlcy54LnN0eWxlLmNvbG9yID0gXCIjZjA1XCI7XHJcbiAgICAgIHNldFBsYXkoXCJ4XCIpO1xyXG4gICAgICBzZXRQbGF5Q29tcHV0ZXIoXCJvXCIpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgdmFyaWFibGVzLm86XHJcbiAgICAgIHZhcmlhYmxlcy54LnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xyXG4gICAgICB2YXJpYWJsZXMuby5zdHlsZS5jb2xvciA9IFwiI2YwNVwiO1xyXG4gICAgICBzZXRQbGF5KFwib1wiKTtcclxuICAgICAgc2V0UGxheUNvbXB1dGVyKFwieFwiKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG4gIEVudGVyVG9HYW1lKCk7XHJcbn07XHJcblxyXG52YXJpYWJsZXMueC5vbmNsaWNrID0gKCkgPT4gQ2hvb3NlVGljT3JUb2ModmFyaWFibGVzLngpO1xyXG52YXJpYWJsZXMuby5vbmNsaWNrID0gKCkgPT4gQ2hvb3NlVGljT3JUb2ModmFyaWFibGVzLm8pO1xyXG4iLCJsZXQgcGxheSA9IFwiXCI7XHJcbmxldCBwbGF5Q29tcHV0ZXIgPSBcIlwiO1xyXG5sZXQgd2luID0gZmFsc2U7XHJcbmxldCB3aG9XaW4gPSBmYWxzZTtcclxubGV0IHRoZW1lU2VsZWN0ZWQgPSBcIlwiO1xyXG5sZXQgdGhlbWVOZXh0ID0gXCJcIjtcclxubGV0IGFsZXJ0TWVzc2FnZSA9IFwiXCI7XHJcbmxldCBUaW1lciA9IDk1O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFBsYXkgPSAoKSA9PiBwbGF5O1xyXG5leHBvcnQgY29uc3Qgc2V0UGxheSA9ICh2YWx1ZSkgPT4gKHBsYXkgPSB2YWx1ZSk7XHJcbmV4cG9ydCBjb25zdCBnZXRXaW4gPSAoKSA9PiB3aW47XHJcbmV4cG9ydCBjb25zdCBzZXRXaW4gPSAodmFsdWUpID0+ICh3aW4gPSB2YWx1ZSk7XHJcbmV4cG9ydCBjb25zdCBnZXRXaG9XaW4gPSAoKSA9PiB3aG9XaW47XHJcbmV4cG9ydCBjb25zdCBzZXRXaG9XaW4gPSAodmFsdWUpID0+ICh3aG9XaW4gPSB2YWx1ZSk7XHJcbmV4cG9ydCBjb25zdCBnZXRUaGVtZVNlbGVjdGVkID0gKCkgPT4gdGhlbWVTZWxlY3RlZDtcclxuZXhwb3J0IGNvbnN0IHNldFRoZW1lU2VsZWN0ZWQgPSAodmFsdWUpID0+ICh0aGVtZVNlbGVjdGVkID0gdmFsdWUpO1xyXG5leHBvcnQgY29uc3QgZ2V0VGhlbWVOZXh0ID0gKCkgPT4gdGhlbWVOZXh0O1xyXG5leHBvcnQgY29uc3Qgc2V0VGhlbWVOZXh0ID0gKHZhbHVlKSA9PiAodGhlbWVOZXh0ID0gdmFsdWUpO1xyXG5leHBvcnQgY29uc3QgZ2V0QWxlcnRNZXNzYWdlID0gKCkgPT4gYWxlcnRNZXNzYWdlO1xyXG5leHBvcnQgY29uc3Qgc2V0QWxlcnRNZXNzYWdlID0gKHZhbHVlKSA9PiAoYWxlcnRNZXNzYWdlID0gdmFsdWUpO1xyXG5leHBvcnQgY29uc3QgZ2V0VGltZXIgPSAoKSA9PiBUaW1lcjtcclxuZXhwb3J0IGNvbnN0IHNldFRpbWVyID0gKHZhbHVlKSA9PiAoVGltZXIgPSB2YWx1ZSk7XHJcbmV4cG9ydCBjb25zdCBnZXRQbGF5Q29tcHV0ZXIgPSAoKSA9PiBwbGF5Q29tcHV0ZXI7XHJcbmV4cG9ydCBjb25zdCBzZXRQbGF5Q29tcHV0ZXIgPSAodmFsdWUpID0+IChwbGF5Q29tcHV0ZXIgPSB2YWx1ZSk7XHJcbiIsImltcG9ydCB7IGJveGVzLCBnYW1lX2NvbnRhaW5lciwgcmVzdWx0LCB0aGVtZXMgfSBmcm9tIFwiLi92YXJpYWJsZXMuanNcIjtcclxuXHJcbmltcG9ydCBUaGVtZVhPbmUgZnJvbSBcIi4uLy4uL2ltYWdlcy9wbGF5ZXJfeC9jbG9zZS5wbmdcIjtcclxuaW1wb3J0IFRoZW1lWFR3byBmcm9tIFwiLi4vLi4vaW1hZ2VzL3BsYXllcl94L3gucG5nXCI7XHJcbmltcG9ydCBUaGVtZVhUaHJlZSBmcm9tIFwiLi4vLi4vaW1hZ2VzL3BsYXllcl94L3BoYXJtYWN5LnBuZ1wiO1xyXG5pbXBvcnQgVGhlbWVYRm91ciBmcm9tIFwiLi4vLi4vaW1hZ2VzL3BsYXllcl94L25vLnBuZ1wiO1xyXG5pbXBvcnQgVGhlbWVPT25lIGZyb20gXCIuLi8uLi9pbWFnZXMvcGxheWVyX28vbyAoMSkucG5nXCI7XHJcbmltcG9ydCBUaGVtZU9Ud28gZnJvbSBcIi4uLy4uL2ltYWdlcy9wbGF5ZXJfby9sZXR0ZXItby5wbmdcIjtcclxuaW1wb3J0IFRoZW1lT1RocmVlIGZyb20gXCIuLi8uLi9pbWFnZXMvcGxheWVyX28vbyAoMikucG5nXCI7XHJcbmltcG9ydCBUaGVtZU9Gb3VyIGZyb20gXCIuLi8uLi9pbWFnZXMvcGxheWVyX28vbyAoMykucG5nXCI7XHJcbmltcG9ydCBsZWFmSW1nIGZyb20gXCIuLi8uLi9pbWFnZXMvYm9yZGVyLWxlYWYucG5nXCI7XHJcbmltcG9ydCB7IHNldFRoZW1lU2VsZWN0ZWQsIGdldFRoZW1lTmV4dCwgZ2V0VGhlbWVTZWxlY3RlZCB9IGZyb20gXCIuL3N0YXRlLmpzXCI7XHJcbmltcG9ydCBOZXh0Um91bmQgZnJvbSBcIi4uL0xvZ2ljL05leHRSb3VuZC5qc1wiO1xyXG5cclxuZXhwb3J0IGxldCB0aGVtZU5vd1ggPSBcIlwiO1xyXG5leHBvcnQgbGV0IHRoZW1lTm93TyA9IFwiXCI7XHJcblxyXG4vLyBBcHBseVRoZW1lIEZ1bmN0aW9uYWxpdHlcclxuY29uc3QgQXBwbHlUaGVtZSA9ICgpID0+IHtcclxuICBjb25zdCByZXN1bHRHYW1lcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpdkNvbGxlY3Rpb25YTyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgY29uc3QgdGV4dEdhbWUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkdhbWVcIik7XHJcbiAgICBkaXZDb2xsZWN0aW9uWE8uYXBwZW5kQ2hpbGQodGhlbWVOb3dYKTtcclxuICAgIGRpdkNvbGxlY3Rpb25YTy5hcHBlbmRDaGlsZCh0aGVtZU5vd08pO1xyXG4gICAgZGl2Q29sbGVjdGlvblhPLmFwcGVuZENoaWxkKHRleHRHYW1lKTtcclxuXHJcbiAgICByZXN1bHQuYXBwZW5kQ2hpbGQoZGl2Q29sbGVjdGlvblhPKTtcclxuICB9O1xyXG4gIGNvbnN0IFNlbGVjdFRoZW1lID0gKFRoZW1lWCwgVGhlbWVPKSA9PiB7XHJcbiAgICBsZXQgcGxheWVyX3hfSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGxldCBwbGF5ZXJfb19JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5cclxuICAgIHBsYXllcl94X0ltZy5zcmMgPSBUaGVtZVg7XHJcbiAgICBwbGF5ZXJfb19JbWcuc3JjID0gVGhlbWVPO1xyXG5cclxuICAgIHRoZW1lTm93WCA9IHBsYXllcl94X0ltZztcclxuICAgIHRoZW1lTm93TyA9IHBsYXllcl9vX0ltZztcclxuICAgIHJlc3VsdD8uY2hpbGRyZW5bMF0/LnJlbW92ZSgpO1xyXG5cclxuICAgIHJlc3VsdEdhbWVzKCk7XHJcbiAgfTtcclxuICB0aGVtZU5vd1ggPT09IFwidGhlbWUtMVwiXHJcbiAgICA/IFNlbGVjdFRoZW1lKFRoZW1lWE9uZSwgVGhlbWVPT25lKVxyXG4gICAgOiB0aGVtZU5vd1ggPT09IFwidGhlbWUtMlwiXHJcbiAgICA/IFNlbGVjdFRoZW1lKFRoZW1lWFR3bywgVGhlbWVPVHdvKVxyXG4gICAgOiB0aGVtZU5vd1ggPT09IFwidGhlbWUtM1wiXHJcbiAgICA/IFNlbGVjdFRoZW1lKFRoZW1lWFRocmVlLCBUaGVtZU9UaHJlZSlcclxuICAgIDogdGhlbWVOb3dYID09PSBcInRoZW1lLTRcIlxyXG4gICAgPyBTZWxlY3RUaGVtZShUaGVtZVhGb3VyLCBUaGVtZU9Gb3VyKVxyXG4gICAgOiBcIlwiO1xyXG59O1xyXG5cclxuLy8gU2V0IFRoZW1lXHJcbmV4cG9ydCBjb25zdCBTZXRUaGVtZSA9ICgpID0+IHtcclxuICB0aGVtZXMuZm9yRWFjaCgodGhlbWUsIGluZGV4KSA9PiB7XHJcbiAgICB0aGVtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBib3hlcy5mb3JFYWNoKChib3gpID0+IChib3guY2xhc3NOYW1lID0gXCJcIikpO1xyXG4gICAgICBib3hlcy5mb3JFYWNoKChib3gpID0+IChib3guY2xhc3NOYW1lID0gXCJib3hcIikpO1xyXG5cclxuICAgICAgc2V0VGhlbWVTZWxlY3RlZCh0aGVtZS5kYXRhc2V0LnRoZW1lKTtcclxuXHJcbiAgICAgIGdhbWVfY29udGFpbmVyLmNsYXNzTmFtZSA9IGdldFRoZW1lTmV4dCgpID8gXCJcIiA6IHRoZW1lLmRhdGFzZXQudGhlbWU7XHJcbiAgICAgIHRoZW1lTm93WCA9IGdldFRoZW1lTmV4dCgpID8gXCJcIiA6IHRoZW1lLmRhdGFzZXQudGhlbWU7XHJcbiAgICAgIHRoZW1lTm93TyA9IGdldFRoZW1lTmV4dCgpID8gXCJcIiA6IHRoZW1lLmRhdGFzZXQudGhlbWU7XHJcbiAgICAgIGJveGVzLmZvckVhY2goKGJveCkgPT5cclxuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChnZXRUaGVtZU5leHQoKSA/IFwiXCIgOiB0aGVtZS5kYXRhc2V0LnRoZW1lKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgdGhlbWUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAgIHRoZW1lLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKVxyXG4gICAgICAgID8gKHRoZW1lLnN0eWxlLmJvcmRlckltYWdlID0gYHVybCgke2xlYWZJbWd9KSAxMGApXHJcbiAgICAgICAgOiAodGhlbWUuc3R5bGUuYm9yZGVySW1hZ2UgPSBgbm9uZWApO1xyXG5cclxuICAgICAgQXBwbHlUaGVtZSgpO1xyXG5cclxuICAgICAgdGhlbWVzLmZvckVhY2goKG9sZFRoZW1lLCBpZCkgPT4ge1xyXG4gICAgICAgIGlmIChvbGRUaGVtZS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikgJiYgaWQgIT09IGluZGV4KSB7XHJcbiAgICAgICAgICBvbGRUaGVtZS5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcclxuICAgICAgICAgIG9sZFRoZW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIE5leHRSb3VuZCgpO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgZ2FtZV9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtY29udGFpbmVyXCIpO1xyXG5leHBvcnQgY29uc3Qgc3RhcnRHYW1lQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtZ2FtZVwiKTtcclxuZXhwb3J0IGNvbnN0IG5hbWVBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHQgbGk6Zmlyc3Qtb2YtdHlwZVwiKTtcclxuZXhwb3J0IGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0IGxpOm50aC1jaGlsZCgzKVwiKTtcclxuZXhwb3J0IGNvbnN0IHRpbWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHQgbGk6bnRoLWNoaWxkKDIpIHBcIik7XHJcbmV4cG9ydCBjb25zdCBib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm94XCIpO1xyXG5leHBvcnQgY29uc3QgYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcHBcIik7XHJcbmV4cG9ydCBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lXCIpO1xyXG5leHBvcnQgY29uc3QgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieFwiKTtcclxuZXhwb3J0IGNvbnN0IG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9cIik7XHJcbmV4cG9ydCBjb25zdCBwbGF5V2l0aEZyaWVuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJpZW5kXCIpO1xyXG5leHBvcnQgY29uc3QgcGxheVdpdGhDb21wdXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcHV0ZXJcIik7XHJcbmV4cG9ydCBjb25zdCB0aGVtZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRoZW1lcy1hcmVhIGltZ1wiKTtcclxuZXhwb3J0IGNvbnN0IGVyb3JyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3JcIik7XHJcbmV4cG9ydCBjb25zdCByZXN1bHRfY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsLnJlc3VsdFwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCB0cmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmVlXCIpO1xyXG4iLCJpbXBvcnQgeyBIaWRlR2FtZSB9IGZyb20gXCIuL3N0YXJ0R2FtZS5qc1wiO1xyXG5pbXBvcnQge1xyXG4gIHNldEFsZXJ0TWVzc2FnZSxcclxuICBzZXRQbGF5LFxyXG4gIHNldFRoZW1lTmV4dCxcclxuICBzZXRUaGVtZVNlbGVjdGVkLFxyXG4gIHNldFRpbWVyLFxyXG4gIHNldFdpbixcclxufSBmcm9tIFwiLi4vR2xvYmFsL3N0YXRlLmpzXCI7XHJcbmltcG9ydCB7IHRoZW1lTm93TywgdGhlbWVOb3dYIH0gZnJvbSBcIi4uL0dsb2JhbC90aGVtZXMuanNcIjtcclxuaW1wb3J0IHtcclxuICBib3hlcyxcclxuICBuYW1lLFxyXG4gIHJlc3VsdCxcclxuICBzdGFydEdhbWVBcmVhLFxyXG4gIHRoZW1lcyxcclxuICB4LFxyXG4gIG8sXHJcbiAgdGltZXIsXHJcbn0gZnJvbSBcIi4uL0dsb2JhbC92YXJpYWJsZXMuanNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZXNldCA9ICh0ZXh0KSA9PiB7XHJcbiAgc2V0VGhlbWVTZWxlY3RlZChcIlwiKTtcclxuICBzZXRBbGVydE1lc3NhZ2UoXCJcIik7XHJcbiAgYm94ZXMuZm9yRWFjaCgoYm94KSA9PiAoYm94LmlubmVySFRNTCA9IFwiXCIpKTtcclxuICB0aW1lci5jbGFzc05hbWUgPSBcIlwiO1xyXG5cclxuICBuYW1lLnZhbHVlID0gXCJcIjtcclxuICBjb25zdCBkaXZDb2xsZWN0aW9uWE8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHRleHRHYW1lID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCk7XHJcbiAgZGl2Q29sbGVjdGlvblhPLmFwcGVuZENoaWxkKHRoZW1lTm93WCk7XHJcbiAgZGl2Q29sbGVjdGlvblhPLmFwcGVuZENoaWxkKHRoZW1lTm93Tyk7XHJcbiAgZGl2Q29sbGVjdGlvblhPLmFwcGVuZENoaWxkKHRleHRHYW1lKTtcclxuXHJcbiAgcmVzdWx0LmFwcGVuZENoaWxkKGRpdkNvbGxlY3Rpb25YTyk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRW5kR2FtZSA9ICgpID0+IHtcclxuICByZXNldChcIkdhbWVcIik7XHJcbiAgcmVzdWx0LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgdGhlbWVzLmZvckVhY2goKHRoZW1lKSA9PiB7XHJcbiAgICB0aGVtZS5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgdGhlbWUuc3R5bGUuYm9yZGVySW1hZ2UgPSBcIm5vbmVcIjtcclxuICB9KTtcclxuICBzdGFydEdhbWVBcmVhLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgeC5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcclxuICBvLnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xyXG5cclxuICBuYW1lLnZhbHVlID0gXCJcIjtcclxuICBIaWRlR2FtZShcIm5vbmVcIik7XHJcbiAgc2V0V2luKGZhbHNlKTtcclxuICBzZXRUaW1lcig5NSk7XHJcbiAgc2V0VGhlbWVOZXh0KFwiXCIpO1xyXG4gIHNldFBsYXkoXCJcIik7XHJcbn07XHJcbiIsImltcG9ydCB7IFdpbkdhbWUgfSBmcm9tIFwiLi9XaW5HYW1lXCI7XHJcbmltcG9ydCB7IGJveGVzIH0gZnJvbSBcIi4uL0dsb2JhbC92YXJpYWJsZXNcIjtcclxuXHJcbmNvbnN0IE1hdGNoQ29sc0FuZFJvd3MgPSAoKSA9PiB7XHJcbiAgLy8gUm93c1xyXG4gIGZ1bmN0aW9uIFJvd3MoUm93T25lLCBSb3dUd28sIFJvd1RocmVlKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGJveGVzW1Jvd09uZV0uaW5uZXJIVE1MID09IGJveGVzW1Jvd1R3b10uaW5uZXJIVE1MICYmXHJcbiAgICAgIGJveGVzW1Jvd1R3b10uaW5uZXJIVE1MID09IGJveGVzW1Jvd1RocmVlXS5pbm5lckhUTUwgJiZcclxuICAgICAgYm94ZXNbUm93T25lXS5pbm5lckhUTWwgIT0gXCJcIiAmJlxyXG4gICAgICBib3hlc1tSb3dUd29dLmlubmVySFRNTCAhPSBcIlwiXHJcbiAgICApIHtcclxuICAgICAgV2luR2FtZShib3hlc1tSb3dPbmVdLCBib3hlc1tSb3dPbmVdLCBib3hlc1tSb3dUaHJlZV0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgUm93cygyLCA2LCA0KTtcclxuICBSb3dzKDIsIDQsIDYpO1xyXG4gIFJvd3MoMCwgNCwgOCk7XHJcbiAgUm93cygwLCA4LCA0KTtcclxuXHJcbiAgLy8gY29sdW1uc1xyXG4gIGNvbnN0IENvbHVtbnMgPSAoQ29sT25lLCBDb2xUd28sIENvbFRocmVlKSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGJveGVzW0NvbE9uZV0uaW5uZXJIVE1MID09IGJveGVzW0NvbFR3b10uaW5uZXJIVE1MICYmXHJcbiAgICAgIGJveGVzW0NvbFR3b10uaW5uZXJIVE1MID09IGJveGVzW0NvbFRocmVlXS5pbm5lckhUTUwgJiZcclxuICAgICAgYm94ZXNbQ29sVGhyZWVdLmlubmVySFRNbCAhPSBcIlwiICYmXHJcbiAgICAgIGJveGVzW0NvbFR3b10uaW5uZXJIVE1MICE9IFwiXCJcclxuICAgICkge1xyXG4gICAgICBXaW5HYW1lKGJveGVzW0NvbE9uZV0sIGJveGVzW0NvbFR3b10sIGJveGVzW0NvbFRocmVlXSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgQ29sdW1ucygwLCAzLCA2KTtcclxuICBDb2x1bW5zKDAsIDEsIDIpO1xyXG4gIENvbHVtbnMoNiwgNywgOCk7XHJcbiAgQ29sdW1ucygxLCA0LCA3KTtcclxuICBDb2x1bW5zKDMsIDQsIDUpO1xyXG4gIENvbHVtbnMoMiwgNSwgOCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXRjaENvbHNBbmRSb3dzO1xyXG4iLCJpbXBvcnQgeyByZXNldCB9IGZyb20gXCIuL0VuZEdhbWVcIjtcclxuaW1wb3J0IHsgSGlkZUdhbWUsIGNoYW5nZUNvbG9yQm94ZXMgfSBmcm9tIFwiLi9zdGFydEdhbWUuanNcIjtcclxuaW1wb3J0IHsgZ2V0V2hvV2luLCBzZXRUaW1lciB9IGZyb20gXCIuLi9HbG9iYWwvc3RhdGUuanNcIjtcclxuaW1wb3J0IHsgYXBwLCBib3hlcywgcmVzdWx0LCByZXN1bHRfY29udGFpbmVyIH0gZnJvbSBcIi4uL0dsb2JhbC92YXJpYWJsZXMuanNcIjtcclxuXHJcbmxldCBUaGVtZXMgPSBbXCJ0aGVtZS0xXCIsIFwidGhlbWUtMlwiLCBcInRoZW1lLTNcIiwgXCJ0aGVtZS00XCJdO1xyXG5sZXQgbmV4dFRoZW1lID0gXCJcIjtcclxubGV0IHJvdW5kID0gMTtcclxuY29uc3QgTmV4dFJvdW5kID0gKCkgPT4ge1xyXG4gIGlmIChnZXRXaG9XaW4oKSkge1xyXG4gICAgc2V0VGltZXIoOTUpO1xyXG4gICAgYXBwLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlXCIpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHJlc3VsdC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICBuZXh0VGhlbWUgPSBUaGVtZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCldO1xyXG5cclxuICAgICAgSGlkZUdhbWUoXCJibG9ja1wiKTtcclxuICAgICAgcmVzdWx0X2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKG5leHRUaGVtZSk7XHJcbiAgICAgIGJveGVzLmZvckVhY2goKGJveCkgPT4ge1xyXG4gICAgICAgIGJveC5jbGFzc05hbWUgPSBcImJveFwiO1xyXG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKG5leHRUaGVtZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBjaGFuZ2VDb2xvckJveGVzKCk7XHJcbiAgICAgIGFwcC5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZVwiKTtcclxuICAgICAgKytyb3VuZDtcclxuICAgICAgcmVzZXQoYFJvdW5kICR7cm91bmR9YCk7XHJcbiAgICB9LCAzMDAwKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0Um91bmQ7XHJcbiIsIi8vIEVuZCBHYW1lIExvZ2ljXHJcblxyXG5pbXBvcnQgeyByZXN1bHQsIGFwcCB9IGZyb20gXCIuLi9HbG9iYWwvdmFyaWFibGVzLmpzXCI7XHJcbmltcG9ydCB7IGdldFdpbiwgc2V0V2hvV2luLCBzZXRXaW4gfSBmcm9tIFwiLi4vR2xvYmFsL3N0YXRlLmpzXCI7XHJcbmltcG9ydCB7IGdldFRoZW1lU2VsZWN0ZWQgfSBmcm9tIFwiLi4vR2xvYmFsL3N0YXRlLmpzXCI7XHJcbmltcG9ydCB7IEVuZEdhbWUgfSBmcm9tIFwiLi9FbmRHYW1lLmpzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgV2luR2FtZSA9ICguLi5hcmcpID0+IHtcclxuICBzZXRXaW4odHJ1ZSk7XHJcbiAgaWYgKGdldFdpbigpKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBjb2xvck5vdyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjb2xvciA9IGdldFRoZW1lU2VsZWN0ZWQoKS5pbmNsdWRlcyhcInRoZW1lLTFcIilcclxuICAgICAgICAgID8gXCJsaWdodHNlYWdyZWVuXCJcclxuICAgICAgICAgIDogZ2V0VGhlbWVTZWxlY3RlZCgpLmluY2x1ZGVzKFwidGhlbWUtMlwiKVxyXG4gICAgICAgICAgPyBcIiNmMDRcIlxyXG4gICAgICAgICAgOiBnZXRUaGVtZVNlbGVjdGVkKCkuaW5jbHVkZXMoXCJ0aGVtZS0zXCIpXHJcbiAgICAgICAgICA/IFwicmViZWNjYXB1cnBsZVwiXHJcbiAgICAgICAgICA6IFwiYmxhY2tcIjtcclxuICAgICAgICByZXR1cm4gY29sb3I7XHJcbiAgICAgIH07XHJcbiAgICAgIGFyZ1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvck5vdygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzdWx0LmNsYXNzTGlzdC5hZGQoXCJ3aW5uZXJcIik7XHJcbiAgYXBwLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlXCIpO1xyXG5cclxuICByZXN1bHQuaW5uZXJIVE1MID0gYDxpbWcgc3JjPSR7YXJnWzBdLmNoaWxkcmVuWzBdLnNyY30vPiBpcyBXaW5uZXJgO1xyXG5cclxuICBsZXQgY2xvc2UgPSAxO1xyXG5cclxuICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICByZXN1bHQuaW5uZXJIVE1MICs9IFwiLlwiO1xyXG4gICAgaWYgKGNsb3NlID09PSAzKSB7XHJcbiAgICAgIEVuZEdhbWUoKTtcclxuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgIHNldFdob1dpbihmYWxzZSk7XHJcbiAgICB9XHJcbiAgICArK2Nsb3NlO1xyXG4gIH0sIDEwMDApO1xyXG59O1xyXG4iLCIvLyBIZXJlIExvZ2ljIGdhbWUgcHV0IHggb3IgbyBpbiBib3ggYW5kIFdpbkdhbWVcclxuXHJcbmltcG9ydCB7XHJcbiAgZ2V0UGxheSxcclxuICBnZXRQbGF5Q29tcHV0ZXIsXHJcbiAgZ2V0V2luLFxyXG4gIHNldEFsZXJ0TWVzc2FnZSxcclxuICBzZXRQbGF5LFxyXG59IGZyb20gXCIuLi9HbG9iYWwvc3RhdGUuanNcIjtcclxuaW1wb3J0IHsgdGhlbWVOb3dPLCB0aGVtZU5vd1ggfSBmcm9tIFwiLi4vR2xvYmFsL3RoZW1lcy5qc1wiO1xyXG5pbXBvcnQgeyBib3hlcywgcmVzdWx0IH0gZnJvbSBcIi4uL0dsb2JhbC92YXJpYWJsZXMuanNcIjtcclxuaW1wb3J0IHsgc2V0V2hvV2luIH0gZnJvbSBcIi4uL0dsb2JhbC9zdGF0ZS5qc1wiO1xyXG5pbXBvcnQgTmV4dFJvdW5kIGZyb20gXCIuL05leHRSb3VuZC5qc1wiO1xyXG5pbXBvcnQgTWF0Y2hDb2xzQW5kUm93cyBmcm9tIFwiLi9NYXRjaENvbFJvdy5qc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvZ2ljID0gKHBsYXlpbmcpID0+IHtcclxuICBzZXRBbGVydE1lc3NhZ2UoXCJcIik7XHJcbiAgYm94ZXMuZm9yRWFjaCgoYm94KSA9PiB7XHJcbiAgICBib3gub25jbGljayA9ICgpID0+IHtcclxuICAgICAgaWYgKGJveC5pbm5lckhUTUwubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmVzdWx0Py5jaGlsZHJlblswXT8ucmVtb3ZlKCk7XHJcbiAgICAgICAgaWYgKGJveC5pbm5lckhUTUwubGVuZ3RoID09PSAwICYmIGdldFBsYXkoKSA9PSBcInhcIikge1xyXG4gICAgICAgICAgYm94LmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7dGhlbWVOb3dYLnNyY31cIi8+YDtcclxuICAgICAgICAgIHJlc3VsdC5hcHBlbmRDaGlsZCh0aGVtZU5vd08pO1xyXG4gICAgICAgICAgcGxheWluZyAhPSBcImNvbXB1dGVyXCIgJiYgc2V0UGxheShcIm9cIik7XHJcbiAgICAgICAgICBzZXRXaG9XaW4oZmFsc2UpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYm94LmlubmVySFRNTC5sZW5ndGggPT09IDAgJiYgZ2V0UGxheSgpID09IFwib1wiKSB7XHJcbiAgICAgICAgICBib3guaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHt0aGVtZU5vd08uc3JjfVwiLz5gO1xyXG5cclxuICAgICAgICAgIHJlc3VsdC5hcHBlbmRDaGlsZCh0aGVtZU5vd1gpO1xyXG4gICAgICAgICAgcGxheWluZyAhPSBcImNvbXB1dGVyXCIgJiYgc2V0UGxheShcInhcIik7XHJcbiAgICAgICAgICBzZXRXaG9XaW4oZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTWF0Y2hDb2xzQW5kUm93cygpO1xyXG5cclxuICAgICAgICAvLyBObyBBbnkgQm9keSBXaW5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBib3hlc1swXS5pbm5lckhUTUwubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgYm94ZXNbMV0uaW5uZXJIVE1MLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgIGJveGVzWzJdLmlubmVySFRNTC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICBib3hlc1szXS5pbm5lckhUTUwubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgYm94ZXNbNF0uaW5uZXJIVE1MLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgIGJveGVzWzVdLmlubmVySFRNTC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICBib3hlc1s2XS5pbm5lckhUTUwubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgYm94ZXNbN10uaW5uZXJIVE1MLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgIGJveGVzWzhdLmlubmVySFRNTC5sZW5ndGggPiAwXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBzZXRXaG9XaW4odHJ1ZSk7XHJcbiAgICAgICAgICBOZXh0Um91bmQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwbGF5aW5nID09PSBcImNvbXB1dGVyXCIpIHtcclxuICAgICAgICAgIGxldCBlbXB0eUJveGVzID0gWy4uLmJveGVzXS5maWx0ZXIoXHJcbiAgICAgICAgICAgIChib3hzKSA9PiBib3hzLmlubmVySFRNTC5sZW5ndGggPT09IDBcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgY29uc3QgcmFuZFBsYXkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlbXB0eUJveGVzLmxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBlbXB0eUJveGVzW3JhbmRQbGF5XT8uaW5uZXJIVE1MPy5sZW5ndGggPT09IDAgJiZcclxuICAgICAgICAgICAgZ2V0UGxheUNvbXB1dGVyKCkgPT0gXCJ4XCIgJiZcclxuICAgICAgICAgICAgIWdldFdpbigpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgZW1wdHlCb3hlc1tyYW5kUGxheV0uaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHt0aGVtZU5vd1guc3JjfVwiLz5gO1xyXG5cclxuICAgICAgICAgICAgcmVzdWx0LmlubmVySFRNTCA9IGBZb3U6PGltZyBzcmM9XCIke3RoZW1lTm93Ty5zcmN9XCIvPlBDOjxpbWcgc3JjPVwiJHt0aGVtZU5vd1guc3JjfVwiLz5gO1xyXG4gICAgICAgICAgICBzZXRXaG9XaW4oKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgIGVtcHR5Qm94ZXNbcmFuZFBsYXldPy5pbm5lckhUTUw/Lmxlbmd0aCA9PT0gMCAmJlxyXG4gICAgICAgICAgICBnZXRQbGF5Q29tcHV0ZXIoKSA9PSBcIm9cIiAmJlxyXG4gICAgICAgICAgICAhZ2V0V2luKClcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICByZXN1bHQuaW5uZXJIVE1MID0gYFlvdTo8aW1nIHNyYz1cIiR7dGhlbWVOb3dYLnNyY31cIi8+UEM6PGltZyBzcmM9XCIke3RoZW1lTm93Ty5zcmN9XCIvPmA7XHJcbiAgICAgICAgICAgIGVtcHR5Qm94ZXNbcmFuZFBsYXldLmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7dGhlbWVOb3dPLnNyY31cIi8+YDtcclxuXHJcbiAgICAgICAgICAgIHNldFdob1dpbihmYWxzZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBNYXRjaENvbHNBbmRSb3dzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBnZXRBbGVydE1lc3NhZ2UsIGdldFBsYXksIHNldEFsZXJ0TWVzc2FnZSB9IGZyb20gXCIuLi9HbG9iYWwvc3RhdGUuanNcIjtcclxuaW1wb3J0ICogYXMgdmFyaWFibGVzIGZyb20gXCIuLi9HbG9iYWwvdmFyaWFibGVzLmpzXCI7XHJcbmltcG9ydCBTdGFydFRpbWVyIGZyb20gXCIuLi9TdGFydFRpbWVyLmpzXCI7XHJcbmltcG9ydCB7IGdldFRoZW1lU2VsZWN0ZWQgfSBmcm9tIFwiLi4vR2xvYmFsL3N0YXRlLmpzXCI7XHJcbmltcG9ydCBQbGF5V2l0aEZyaWVuZCBmcm9tIFwiLi4vUGxheVdpdGhGcmllbmQuanNcIjtcclxuaW1wb3J0IFBsYXlXaXRoUGMgZnJvbSBcIi4uL1BsYXlXaXRoUGMuanNcIjtcclxuXHJcbi8vIEhpZGUgU3RhcnQgR2FtZVxyXG5leHBvcnQgY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xyXG4gIHZhcmlhYmxlcy5uYW1lPy52YWx1ZT8ubGVuZ3RoID09PSAwICYmIEhpZGVHYW1lKFwibm9uZVwiKTtcclxufTtcclxuXHJcbi8vIEhpZGUgR2FtZVxyXG5leHBvcnQgY29uc3QgSGlkZUdhbWUgPSAoc3RhdHVzKSA9PiB7XHJcbiAgdmFyaWFibGVzLmdhbWVfY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBzdGF0dXM7XHJcbn07XHJcblxyXG4vLyBIYW5kbGVFcnJvclxyXG5jb25zdCBIYW5kbGVFcnJvciA9ICgpID0+IHtcclxuICBpZiAoZ2V0QWxlcnRNZXNzYWdlKCkpIHtcclxuICAgIHZhcmlhYmxlcy5lcm9yckVsZW1lbnQuaW5uZXJIVE1MID0gZ2V0QWxlcnRNZXNzYWdlKCk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoYW5nZUNvbG9yQm94ZXMgPSAoKSA9PiB7XHJcbiAgU3RhcnRUaW1lcigpO1xyXG4gIHZhcmlhYmxlcy5ib3hlcy5mb3JFYWNoKChib3gpID0+IHtcclxuICAgIGlmIChib3guY2xhc3NMaXN0LmNvbnRhaW5zKFwidGhlbWUtMVwiKSkge1xyXG4gICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZjA0XCI7XHJcbiAgICB9XHJcbiAgICBpZiAoYm94LmNsYXNzTGlzdC5jb250YWlucyhcInRoZW1lLTJcIikpIHtcclxuICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmxhY2tcIjtcclxuICAgIH1cclxuICAgIGlmIChib3guY2xhc3NMaXN0LmNvbnRhaW5zKFwidGhlbWUtM1wiKSkge1xyXG4gICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJsaWdodHNlYWdyZWVuXCI7XHJcbiAgICB9XHJcbiAgICBpZiAoYm94LmNsYXNzTGlzdC5jb250YWlucyhcInRoZW1lLTRcIikpIHtcclxuICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmViZWNjYXB1cnBsZVwiO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHZhcmlhYmxlcy5hcHAuY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVcIik7XHJcbn07XHJcblxyXG4vLyBIYW5kbGUgQlRuIFN0YXJ0XHJcbmV4cG9ydCBjb25zdCBIYW5kbGVCVE5TdGFydCA9IChwbGF5aW5nKSA9PiB7XHJcbiAgaWYgKHZhcmlhYmxlcy5uYW1lLnZhbHVlID09PSBcIlwiKSB7XHJcbiAgICBzZXRBbGVydE1lc3NhZ2UoXCJZb3UgTXVzdCBGaWxsIFlvdXIgTmFtZVwiKTtcclxuICB9IGVsc2UgaWYgKGdldFRoZW1lU2VsZWN0ZWQoKSA9PT0gXCJcIikge1xyXG4gICAgc2V0QWxlcnRNZXNzYWdlKFwiWW91IE11c3QgU2VsZWN0IFlvdXIgVGhlbWVcIik7XHJcbiAgfSBlbHNlIGlmIChnZXRQbGF5KCkgPT09IFwiXCIpIHtcclxuICAgIHNldEFsZXJ0TWVzc2FnZShcIllvdSBNdXN0IFNlbGVjdCBYIG9yIE9cIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHZhcmlhYmxlcy5zdGFydEdhbWVBcmVhLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIHZhcmlhYmxlcy5uYW1lQXJlYS50ZXh0Q29udGVudCA9IHZhcmlhYmxlcy5uYW1lLnZhbHVlO1xyXG4gICAgSGlkZUdhbWUoXCJibG9ja1wiKTtcclxuICAgIHNldEFsZXJ0TWVzc2FnZShcIlwiKTtcclxuICAgIGNoYW5nZUNvbG9yQm94ZXMoKTtcclxuXHJcbiAgICBwbGF5aW5nLmluY2x1ZGVzKFwiZnJpZW5kXCIpID8gUGxheVdpdGhGcmllbmQoKSA6IFBsYXlXaXRoUGMoKTtcclxuICB9XHJcbiAgSGFuZGxlRXJyb3IoKTtcclxufTtcclxuXHJcbnZhcmlhYmxlcy5wbGF5V2l0aEZyaWVuZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cclxuICBIYW5kbGVCVE5TdGFydChcImZyaWVuZFwiKVxyXG4pO1xyXG52YXJpYWJsZXMucGxheVdpdGhDb21wdXRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cclxuICBIYW5kbGVCVE5TdGFydChcImNvbXB1dGVyXCIpXHJcbik7XHJcbiIsImltcG9ydCB7IExvZ2ljIH0gZnJvbSBcIi4vTG9naWMvbG9naWMuanNcIjtcclxuXHJcbmNvbnN0IFBsYXlXaXRoRnJpZW5kID0gKCkgPT4ge1xyXG4gIExvZ2ljKFwiZnJpZW5kXCIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheVdpdGhGcmllbmQ7XHJcbiIsImltcG9ydCB7IExvZ2ljIH0gZnJvbSBcIi4vTG9naWMvbG9naWMuanNcIjtcclxuXHJcbmNvbnN0IFBsYXlXaXRoUGMgPSAoKSA9PiB7XHJcbiAgTG9naWMoXCJjb21wdXRlclwiKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXlXaXRoUGM7XHJcbiIsImltcG9ydCAqIGFzIHZhcmlhYmxlcyBmcm9tIFwiLi9HbG9iYWwvdmFyaWFibGVzLmpzXCI7XHJcbmltcG9ydCB7IGJveGVzIH0gZnJvbSBcIi4vR2xvYmFsL3ZhcmlhYmxlcy5qc1wiO1xyXG5pbXBvcnQgeyBnZXRXaW4sIGdldFdob1dpbiwgZ2V0VGltZXIsIHNldFRpbWVyIH0gZnJvbSBcIi4vR2xvYmFsL3N0YXRlLmpzXCI7XHJcbmltcG9ydCB7IEVuZEdhbWUgfSBmcm9tIFwiLi9Mb2dpYy9FbmRHYW1lLmpzXCI7XHJcbmNvbnN0IFN0YXJ0VGltZXIgPSAoKSA9PiB7XHJcbiAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgdmFyaWFibGVzLnRpbWVyLnN0eWxlLndpZHRoID0gYCR7Z2V0VGltZXIoKX0lYDtcclxuICAgIHZhcmlhYmxlcy50aW1lci5zdHlsZS5oZWlnaHQgPSBgJHtnZXRUaW1lcigpfSVgO1xyXG4gICAgdmFyaWFibGVzLmFwcC5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZVwiKTtcclxuXHJcbiAgICBib3hlcy5mb3JFYWNoKChib3gpID0+IHtcclxuICAgICAgYm94LnN0eWxlLndpZHRoID0gYCR7Z2V0VGltZXIoKX0lYDtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChnZXRUaW1lcigpID09PSAwIHx8IGdldFdpbigpKSB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICBFbmRHYW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGdldFRpbWVyKCkgPD0gNjAgJiYgZ2V0VGltZXIoKSA+PSAzNiAmJiAhZ2V0V2luKCkgJiYgIWdldFdob1dpbigpKSB7XHJcbiAgICAgIHZhcmlhYmxlcy50aW1lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGFycnl1cFwiKTtcclxuICAgICAgdmFyaWFibGVzLnRpbWVyLmNsYXNzTGlzdC5hZGQoXCJzcGVlZFwiKTtcclxuICAgIH0gZWxzZSBpZiAoZ2V0VGltZXIoKSA8PSAzNSAmJiAhZ2V0V2luKCkpIHtcclxuICAgICAgdmFyaWFibGVzLnRpbWVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzcGVlZFwiKTtcclxuICAgICAgdmFyaWFibGVzLnRpbWVyLmNsYXNzTGlzdC5hZGQoXCJoYXJyeXVwXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRpbWVyKGdldFRpbWVyKCkgLSAxKTtcclxuICB9LCAzNTApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhcnRUaW1lcjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9ib3JkZXItbGVhZi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2xldHRlci1vLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvbyAoMSkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9vICgyKS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL28gKDMpLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvY2xvc2UucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9uby5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3BoYXJtYWN5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMveC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2JnLXRoZW1lLTIuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy90aGVtZS0xLlBOR1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvdGhlbWUtMi5QTkdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3RoZW1lLTMuUE5HXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy90aGVtZS00LlBOR1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgKiBhcyB0aGVtZSBmcm9tIFwiLi9tb2R1bGUvR2xvYmFsL3RoZW1lcy5qc1wiO1xyXG5pbXBvcnQgeyBzdGFydEdhbWUgfSBmcm9tIFwiLi9tb2R1bGUvTG9naWMvc3RhcnRHYW1lLmpzXCI7XHJcbmltcG9ydCB7IENob29zZVRpY09yVG9jIH0gZnJvbSBcIi4vbW9kdWxlL0dsb2JhbC9DaG9vc2VYX08uanNcIjtcclxuaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgQXBwbHlUaGVtZXMgZnJvbSBcIi4vbW9kdWxlL0dsb2JhbC9BcHBseVRoZW1lLmpzXCI7XHJcblxyXG50aGVtZS5TZXRUaGVtZSh0aGVtZS50aGVtZU5vd1gsIHRoZW1lLnRoZW1lTm93Tyk7XHJcbnN0YXJ0R2FtZSgpO1xyXG5BcHBseVRoZW1lcygpO1xyXG5DaG9vc2VUaWNPclRvYygpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=