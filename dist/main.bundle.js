/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./module/ChooseX_O.js":
/*!*****************************!*\
  !*** ./module/ChooseX_O.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChooseTicOrToc: () => (/* binding */ ChooseTicOrToc)
/* harmony export */ });
/* harmony import */ var variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! variables.js */ "./module/variables.js");
/* harmony import */ var state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! state.js */ "./module/state.js");
/* harmony import */ var startGame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! startGame.js */ "./module/startGame.js");
// here choose x or o when onclick on word choose x or o





// Enter To Game Functionality
const EnterToGame = () => {
  (0,state_js__WEBPACK_IMPORTED_MODULE_1__.getPlay)() && variables_js__WEBPACK_IMPORTED_MODULE_0__.name.value.length > 0 ? (0,startGame_js__WEBPACK_IMPORTED_MODULE_2__.startGame)("none") : "";
};

// Choose X or O
const ChooseTicOrToc = (player) => {
  switch (player) {
    case variables_js__WEBPACK_IMPORTED_MODULE_0__.x:
      variables_js__WEBPACK_IMPORTED_MODULE_0__.o.style.color = "black";
      variables_js__WEBPACK_IMPORTED_MODULE_0__.x.style.color = "#f05";
      (0,state_js__WEBPACK_IMPORTED_MODULE_1__.setPlay)("x");
      break;
    case variables_js__WEBPACK_IMPORTED_MODULE_0__.o:
      variables_js__WEBPACK_IMPORTED_MODULE_0__.x.style.color = "black";
      variables_js__WEBPACK_IMPORTED_MODULE_0__.o.style.color = "#f05";
      (0,state_js__WEBPACK_IMPORTED_MODULE_1__.setPlay)("o");
      break;
  }
  EnterToGame();
};

variables_js__WEBPACK_IMPORTED_MODULE_0__.x.onclick = () => ChooseTicOrToc(variables_js__WEBPACK_IMPORTED_MODULE_0__.x);
variables_js__WEBPACK_IMPORTED_MODULE_0__.o.onclick = () => ChooseTicOrToc(variables_js__WEBPACK_IMPORTED_MODULE_0__.o);


/***/ }),

/***/ "./module/Logic.js":
/*!*************************!*\
  !*** ./module/Logic.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Logic: () => (/* binding */ Logic)
/* harmony export */ });
/* harmony import */ var endGame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! endGame.js */ "./module/endGame.js");
/* harmony import */ var state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! state.js */ "./module/state.js");
/* harmony import */ var themes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! themes.js */ "./module/themes.js");
/* harmony import */ var variables_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! variables.js */ "./module/variables.js");
/* harmony import */ var WhoWin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! WhoWin.js */ "./module/WhoWin.js");
/* harmony import */ var NextRound_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! NextRound.js */ "./module/NextRound.js");
// Here Logic game put x or o in box and endGame









const Logic = () => {
  variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes.forEach((box, index) => {
    box.onclick = () => {
      if (box.innerHTML == "" && (0,state_js__WEBPACK_IMPORTED_MODULE_1__.getPlay)() == "x") {
        box.innerHTML = themes_js__WEBPACK_IMPORTED_MODULE_2__.themeNowX;
        variables_js__WEBPACK_IMPORTED_MODULE_3__.result.innerHTML = themes_js__WEBPACK_IMPORTED_MODULE_2__.themeNowO;
        (0,state_js__WEBPACK_IMPORTED_MODULE_1__.setPlay)("o");
        variables_js__WEBPACK_IMPORTED_MODULE_3__.soundPlayerO.play();
      } else if (box.innerHTML == "" && (0,state_js__WEBPACK_IMPORTED_MODULE_1__.getPlay)() == "o") {
        box.innerHTML = themes_js__WEBPACK_IMPORTED_MODULE_2__.themeNowO;
        variables_js__WEBPACK_IMPORTED_MODULE_3__.result.innerHTML = themes_js__WEBPACK_IMPORTED_MODULE_2__.themeNowX;
        (0,state_js__WEBPACK_IMPORTED_MODULE_1__.setPlay)("x");

        variables_js__WEBPACK_IMPORTED_MODULE_3__.soundPlayerX.play();
      }
      // Rows
      if (
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[0].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[1].innerHTML &&
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[1].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[2].innerHTML &&
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[0].innerHTMl != "" &&
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[1].innerHTML != ""
      ) {
        (0,endGame_js__WEBPACK_IMPORTED_MODULE_0__.endGame)(variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[0], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[1], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[2]);
      } else if (
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[3].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTML &&
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[5].innerHTML &&
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTMl != "" &&
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[5].innerHTML != ""
      ) {
        (0,endGame_js__WEBPACK_IMPORTED_MODULE_0__.endGame)(variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[3], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[5]);
      } else if (
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[6].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[7].innerHTML &&
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[7].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[8].innerHTML &&
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[8].innerHTMl != "" &&
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[7].innerHTML != ""
      ) {
        (0,endGame_js__WEBPACK_IMPORTED_MODULE_0__.endGame)(variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[6], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[7], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[8]);
      }
      // Rows

      // columns
      else if (
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[0].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[3].innerHTML &&
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[3].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[6].innerHTML &&
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[6].innerHTMl != "" &&
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[3].innerHTML != ""
      ) {
        (0,endGame_js__WEBPACK_IMPORTED_MODULE_0__.endGame)(variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[0], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[3], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[6]);
      } else if (
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[1].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTML &&
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[7].innerHTML &&
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[7].innerHTMl != "" &&
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTML != ""
      ) {
        (0,endGame_js__WEBPACK_IMPORTED_MODULE_0__.endGame)(variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[1], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[7]);
      } else if (
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[2].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[5].innerHTML &&
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[5].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[8].innerHTML &&
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[8].innerHTMl != "" &&
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[5].innerHTML != ""
      ) {
        (0,endGame_js__WEBPACK_IMPORTED_MODULE_0__.endGame)(variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[2], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[5], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[8]);
      } else if (
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[0].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTML &&
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[8].innerHTML &&
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[8].innerHTMl != "" &&
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTML != ""
      ) {
        (0,endGame_js__WEBPACK_IMPORTED_MODULE_0__.endGame)(variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[0], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[8]);
      } else if (
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[2].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTML &&
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTML == variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[6].innerHTML &&
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[6].innerHTMl != "" &&
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTML != ""
      ) {
        (0,endGame_js__WEBPACK_IMPORTED_MODULE_0__.endGame)(variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[2], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4], variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[6]);
      } else if (
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[0].innerHTML.length > 0 &&
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[1].innerHTML.length > 0 &&
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[2].innerHTML.length > 0 &&
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[3].innerHTML.length > 0 &&
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTML.length > 0 &&
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[5].innerHTML.length > 0 &&
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[6].innerHTML.length > 0 &&
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[7].innerHTML.length > 0 &&
        variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[8].innerHTML.length > 0
      ) {
        variables_js__WEBPACK_IMPORTED_MODULE_3__.result.innerHTML = "???";
        (0,state_js__WEBPACK_IMPORTED_MODULE_1__.setWhoWin)(true);
        (0,WhoWin_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
        (0,NextRound_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
      }
    };
  });
};


/***/ }),

/***/ "./module/NextRound.js":
/*!*****************************!*\
  !*** ./module/NextRound.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./module/state.js");



let Themes = ["theme-1", "theme-2", "theme-3", "theme-4"];
let nextTheme = "";

const NextRound = () => {
  if ((0,state_js__WEBPACK_IMPORTED_MODULE_0__.getWhoWin)()) {
    console.log(Themes[Math.floor(Math.random() * 4)]);
    setTimeout(() => {
      nextTheme = Themes[Math.floor(Math.random() * 4)];
      (0,state_js__WEBPACK_IMPORTED_MODULE_0__.getThemeSelected)() === nextTheme && (0,state_js__WEBPACK_IMPORTED_MODULE_0__.getThemeSelected)() != 4
        ? (0,state_js__WEBPACK_IMPORTED_MODULE_0__.setThemeNext)(Themes[Math.floor(Math.random() * 4) + 1])
        : (0,state_js__WEBPACK_IMPORTED_MODULE_0__.setThemeNext)(Themes[Math.floor(Math.random() * 4) - 1]);
    }, 3000);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NextRound);


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
/* harmony import */ var variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ "./module/variables.js");
/* harmony import */ var state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! state.js */ "./module/state.js");



let widthTimer = 100;
const StartTimer = () => {
  let interval = setInterval(() => {
    variables_js__WEBPACK_IMPORTED_MODULE_0__.timer.style.width = `${widthTimer}%`;
    variables_js__WEBPACK_IMPORTED_MODULE_0__.timer.style.height = `${widthTimer}%`;
    variables_js__WEBPACK_IMPORTED_MODULE_0__.boxes.forEach((box) => {
      box.style.width = `${widthTimer}%`;
    });

    if (widthTimer === 0 || (0,state_js__WEBPACK_IMPORTED_MODULE_1__.getWin)() || (0,state_js__WEBPACK_IMPORTED_MODULE_1__.getWhoWin)()) {
      clearInterval(interval);
    }

    if (widthTimer <= 60 && widthTimer >= 36 && !(0,state_js__WEBPACK_IMPORTED_MODULE_1__.getWin)() && !(0,state_js__WEBPACK_IMPORTED_MODULE_1__.getWhoWin)()) {
      variables_js__WEBPACK_IMPORTED_MODULE_0__.timer.classList.remove("harryup");
      variables_js__WEBPACK_IMPORTED_MODULE_0__.timer.classList.add("speed");
    } else if (widthTimer <= 35 && !(0,state_js__WEBPACK_IMPORTED_MODULE_1__.getWin)()) {
      variables_js__WEBPACK_IMPORTED_MODULE_0__.timer.classList.remove("speed");
      variables_js__WEBPACK_IMPORTED_MODULE_0__.timer.classList.add("harryup");
    }

    --widthTimer;
  }, 350);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StartTimer);


/***/ }),

/***/ "./module/WhoWin.js":
/*!**************************!*\
  !*** ./module/WhoWin.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! state.js */ "./module/state.js");
/* harmony import */ var variables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! variables.js */ "./module/variables.js");



let wait = 1;

const WhoWin = () => {
  if ((0,state_js__WEBPACK_IMPORTED_MODULE_0__.getWhoWin)()) {
    let interval = setInterval(() => {
      variables_js__WEBPACK_IMPORTED_MODULE_1__.result.innerHTML = `next round${".".repeat(wait)}`;

      if (wait === 3) {
        clearInterval(interval);
      }
      ++wait;
    }, 1000);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WhoWin);


/***/ }),

/***/ "./module/endGame.js":
/*!***************************!*\
  !*** ./module/endGame.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   endGame: () => (/* binding */ endGame)
/* harmony export */ });
/* harmony import */ var variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! variables.js */ "./module/variables.js");
/* harmony import */ var state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./module/state.js");
// End Game Logic





const endGame = (num1, num2, num3) => {
  num1.style.backgroundColor =
    (0,state_js__WEBPACK_IMPORTED_MODULE_1__.getThemeSelected)() === "theme-1"
      ? "lightseagreen"
      : (0,state_js__WEBPACK_IMPORTED_MODULE_1__.getThemeSelected)() === "theme-2"
      ? "#f04"
      : (0,state_js__WEBPACK_IMPORTED_MODULE_1__.getThemeSelected)() === "theme-3"
      ? "rebeccapurple"
      : "black";
  num2.style.backgroundColor =
    (0,state_js__WEBPACK_IMPORTED_MODULE_1__.getThemeSelected)() === "theme-1"
      ? "lightseagreen"
      : (0,state_js__WEBPACK_IMPORTED_MODULE_1__.getThemeSelected)() === "theme-2"
      ? "#f04"
      : (0,state_js__WEBPACK_IMPORTED_MODULE_1__.getThemeSelected)() === "theme-3"
      ? "rebeccapurple"
      : "black";
  num3.style.backgroundColor =
    (0,state_js__WEBPACK_IMPORTED_MODULE_1__.getThemeSelected)() === "theme-1"
      ? "lightseagreen"
      : (0,state_js__WEBPACK_IMPORTED_MODULE_1__.getThemeSelected)() === "theme-2"
      ? "#f04"
      : (0,state_js__WEBPACK_IMPORTED_MODULE_1__.getThemeSelected)() === "theme-3"
      ? "rebeccapurple"
      : "black";
  variables_js__WEBPACK_IMPORTED_MODULE_0__.app.classList.add("disable");
  variables_js__WEBPACK_IMPORTED_MODULE_0__.result.classList.add("winner");
  variables_js__WEBPACK_IMPORTED_MODULE_0__.result.innerHTML = `${num1.innerHTML} Is Winner`;
  let close = 1;
  (0,state_js__WEBPACK_IMPORTED_MODULE_1__.setWin)(true);
  let interval = setInterval(() => {
    variables_js__WEBPACK_IMPORTED_MODULE_0__.result.innerHTML += ".";
    if (close === 3) {
      clearInterval(interval);
    }
    ++close;
  }, 1000);
};


/***/ }),

/***/ "./module/players.js":
/*!***************************!*\
  !*** ./module/players.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const treePlayers = document.querySelector(".tree");
const textPlayers = document.querySelector(".players");

let animTop = 500;
const Players = () => {
  treePlayers.onclick = () => {
    treePlayers.classList.toggle("show-players");
    textPlayers.classList.toggle("show-players");
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Players);


/***/ }),

/***/ "./module/startGame.js":
/*!*****************************!*\
  !*** ./module/startGame.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HandleBTNStart: () => (/* binding */ HandleBTNStart),
/* harmony export */   startGame: () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! state.js */ "./module/state.js");
/* harmony import */ var variables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! variables.js */ "./module/variables.js");
/* harmony import */ var StartTimer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! StartTimer.js */ "./module/StartTimer.js");





let alertMessage = "";

// Hide Start Game
const startGame = () => {
  variables_js__WEBPACK_IMPORTED_MODULE_1__.name?.value?.length === 0 && HideGame("none");
};

// Hide Game
const HideGame = (status) => {
  variables_js__WEBPACK_IMPORTED_MODULE_1__.game_container.style.display = status;
};

// HandleError
const HandleError = () => {
  if (alertMessage) {
    variables_js__WEBPACK_IMPORTED_MODULE_1__.erorrElement.innerHTML = alertMessage;
  }
};

// Handle BTn Start
const HandleBTNStart = () => {
  if (variables_js__WEBPACK_IMPORTED_MODULE_1__.name.value === "") {
    alertMessage = "You Must Fill Your Name";
  } else if ((0,state_js__WEBPACK_IMPORTED_MODULE_0__.getThemeSelected)() === "") {
    alertMessage = "You Must Select Your Theme";
  } else if ((0,state_js__WEBPACK_IMPORTED_MODULE_0__.getPlay)() === "") {
    alertMessage = "You Must Select X or O";
  } else {
    variables_js__WEBPACK_IMPORTED_MODULE_1__.startGameArea.style.display = "none";
    variables_js__WEBPACK_IMPORTED_MODULE_1__.nameArea.textContent = variables_js__WEBPACK_IMPORTED_MODULE_1__.name.value;
    HideGame("block");
    alertMessage = "";
    variables_js__WEBPACK_IMPORTED_MODULE_1__.soundStartGame.play();
  }
  HandleError();
  (0,StartTimer_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
};

variables_js__WEBPACK_IMPORTED_MODULE_1__.btnStart.addEventListener("click", () => HandleBTNStart());


/***/ }),

/***/ "./module/state.js":
/*!*************************!*\
  !*** ./module/state.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPlay: () => (/* binding */ getPlay),
/* harmony export */   getThemeNext: () => (/* binding */ getThemeNext),
/* harmony export */   getThemeSelected: () => (/* binding */ getThemeSelected),
/* harmony export */   getWhoWin: () => (/* binding */ getWhoWin),
/* harmony export */   getWin: () => (/* binding */ getWin),
/* harmony export */   setPlay: () => (/* binding */ setPlay),
/* harmony export */   setThemeNext: () => (/* binding */ setThemeNext),
/* harmony export */   setThemeSelected: () => (/* binding */ setThemeSelected),
/* harmony export */   setWhoWin: () => (/* binding */ setWhoWin),
/* harmony export */   setWin: () => (/* binding */ setWin)
/* harmony export */ });
let play = "";
let win = false;
let whoWin = false;
let themeSelected = "";
let themeNext = "";

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


/***/ }),

/***/ "./module/themes.js":
/*!**************************!*\
  !*** ./module/themes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SetTheme: () => (/* binding */ SetTheme),
/* harmony export */   themeNowO: () => (/* binding */ themeNowO),
/* harmony export */   themeNowX: () => (/* binding */ themeNowX)
/* harmony export */ });
/* harmony import */ var variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! variables.js */ "./module/variables.js");
/* harmony import */ var _images_themes_theme_1_PNG__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/themes/theme-1.PNG */ "./images/themes/theme-1.PNG");
/* harmony import */ var _images_themes_theme_2_PNG__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/themes/theme-2.PNG */ "./images/themes/theme-2.PNG");
/* harmony import */ var _images_themes_theme_3_PNG__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/themes/theme-3.PNG */ "./images/themes/theme-3.PNG");
/* harmony import */ var _images_themes_theme_4_PNG__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/themes/theme-4.PNG */ "./images/themes/theme-4.PNG");
/* harmony import */ var _images_player_x_close_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/player_x/close.png */ "./images/player_x/close.png");
/* harmony import */ var _images_player_x_x_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/player_x/x.png */ "./images/player_x/x.png");
/* harmony import */ var _images_player_x_pharmacy_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/player_x/pharmacy.png */ "./images/player_x/pharmacy.png");
/* harmony import */ var _images_player_x_no_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/player_x/no.png */ "./images/player_x/no.png");
/* harmony import */ var _images_player_o_o_1_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/player_o/o (1).png */ "./images/player_o/o (1).png");
/* harmony import */ var _images_player_o_letter_o_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/player_o/letter-o.png */ "./images/player_o/letter-o.png");
/* harmony import */ var _images_player_o_o_2_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/player_o/o (2).png */ "./images/player_o/o (2).png");
/* harmony import */ var _images_player_o_o_3_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../images/player_o/o (3).png */ "./images/player_o/o (3).png");
/* harmony import */ var state_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! state.js */ "./module/state.js");
/* harmony import */ var NextRound_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! NextRound.js */ "./module/NextRound.js");
















let themeNowX = "";
let themeNowO = "";

// ApplyTheme Functionality
const ApplyTheme = () => {
  variables_js__WEBPACK_IMPORTED_MODULE_0__.themes.forEach((themeArea) => {
    if (themeArea.dataset.theme === "theme-1") {
      themeNowX = _images_player_x_close_png__WEBPACK_IMPORTED_MODULE_5__["default"];
      themeNowO = _images_player_o_o_1_png__WEBPACK_IMPORTED_MODULE_9__["default"];
      themeArea.src = _images_themes_theme_1_PNG__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
    if (themeArea.dataset.theme === "theme-2") {
      themeNowX = _images_player_x_x_png__WEBPACK_IMPORTED_MODULE_6__["default"];
      themeNowO = _images_player_o_letter_o_png__WEBPACK_IMPORTED_MODULE_10__["default"];
      themeArea.src = _images_themes_theme_2_PNG__WEBPACK_IMPORTED_MODULE_2__["default"];
    }
    if (themeArea.dataset.theme === "theme-3") {
      themeNowX = _images_player_x_pharmacy_png__WEBPACK_IMPORTED_MODULE_7__["default"];
      themeNowO = _images_player_o_o_2_png__WEBPACK_IMPORTED_MODULE_11__["default"];
      themeArea.src = _images_themes_theme_3_PNG__WEBPACK_IMPORTED_MODULE_3__["default"];
    }
    if (themeArea.dataset.theme === "theme-4") {
      themeNowX = _images_player_x_no_png__WEBPACK_IMPORTED_MODULE_8__["default"];
      themeNowO = _images_player_o_o_3_png__WEBPACK_IMPORTED_MODULE_12__["default"];
      themeArea.src = _images_themes_theme_4_PNG__WEBPACK_IMPORTED_MODULE_4__["default"];
    }
  });

  variables_js__WEBPACK_IMPORTED_MODULE_0__.result.innerHTML = `${themeNowX} ${themeNowO} Game`;
};

// Set Theme
const SetTheme = () => {
  variables_js__WEBPACK_IMPORTED_MODULE_0__.themes.forEach((theme, index) => {
    theme.onclick = () => {
      (0,state_js__WEBPACK_IMPORTED_MODULE_13__.setThemeSelected)(theme.dataset.theme);

      variables_js__WEBPACK_IMPORTED_MODULE_0__.game_container.className = (0,state_js__WEBPACK_IMPORTED_MODULE_13__.getThemeNext)() ? "" : theme.dataset.theme;
      themeNowX = (0,state_js__WEBPACK_IMPORTED_MODULE_13__.getThemeNext)() ? "" : theme.dataset.theme;
      themeNowO = (0,state_js__WEBPACK_IMPORTED_MODULE_13__.getThemeNext)() ? "" : theme.dataset.theme;
      variables_js__WEBPACK_IMPORTED_MODULE_0__.boxes.forEach((box) =>
        box.classList.add((0,state_js__WEBPACK_IMPORTED_MODULE_13__.getThemeNext)() ? "" : theme.dataset.theme)
      );

      theme.classList.add("active");
      ApplyTheme();

      variables_js__WEBPACK_IMPORTED_MODULE_0__.themes.forEach((oldTheme, id) => {
        if (oldTheme.classList.contains("active") && id !== index) {
          oldTheme.classList.remove("active");
        }
      });
    };
  });
  (0,NextRound_js__WEBPACK_IMPORTED_MODULE_14__["default"])();
};


/***/ }),

/***/ "./module/variables.js":
/*!*****************************!*\
  !*** ./module/variables.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: () => (/* binding */ app),
/* harmony export */   boxes: () => (/* binding */ boxes),
/* harmony export */   btnStart: () => (/* binding */ btnStart),
/* harmony export */   erorrElement: () => (/* binding */ erorrElement),
/* harmony export */   game_container: () => (/* binding */ game_container),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   nameArea: () => (/* binding */ nameArea),
/* harmony export */   o: () => (/* binding */ o),
/* harmony export */   result: () => (/* binding */ result),
/* harmony export */   soundPlayerO: () => (/* binding */ soundPlayerO),
/* harmony export */   soundPlayerX: () => (/* binding */ soundPlayerX),
/* harmony export */   soundStartGame: () => (/* binding */ soundStartGame),
/* harmony export */   startGameArea: () => (/* binding */ startGameArea),
/* harmony export */   themes: () => (/* binding */ themes),
/* harmony export */   timer: () => (/* binding */ timer),
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
const btnStart = document.querySelector(".start-game button");
const themes = document.querySelectorAll(".themes-area img");
const erorrElement = document.getElementById("error");
const soundStartGame = new Audio("./sounds/game-start-6104.mp3");
const soundPlayerX = new Audio("./sounds/x.wav");
const soundPlayerO = new Audio("./sounds/o.wav");


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
/* harmony import */ var themes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! themes.js */ "./module/themes.js");
/* harmony import */ var Logic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Logic.js */ "./module/Logic.js");
/* harmony import */ var startGame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! startGame.js */ "./module/startGame.js");
/* harmony import */ var ChooseX_O_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ChooseX_O.js */ "./module/ChooseX_O.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./style.css");
/* harmony import */ var players_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! players.js */ "./module/players.js");
// Global Variables

// hot module webpack








themes_js__WEBPACK_IMPORTED_MODULE_0__.SetTheme(themes_js__WEBPACK_IMPORTED_MODULE_0__.themeNowX, themes_js__WEBPACK_IMPORTED_MODULE_0__.themeNowO);
(0,players_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
(0,startGame_js__WEBPACK_IMPORTED_MODULE_2__.startGame)();
(0,Logic_js__WEBPACK_IMPORTED_MODULE_1__.Logic)();
(0,ChooseX_O_js__WEBPACK_IMPORTED_MODULE_3__.ChooseTicOrToc)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDbUM7QUFDRjtBQUNRO0FBQ0s7QUFDZDtBQUNDO0FBQ2pDO0FBQ0EsK0NBQWMsQ0FBQyxnREFBZSxFQUFFLGdEQUFlO0FBQy9DLHNEQUFPO0FBQ1AsdURBQVM7QUFDVCwrQ0FBSztBQUNMLDREQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbW9kdWxlL0Nob29zZVhfTy5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGUvTG9naWMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlL05leHRSb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGUvU3RhcnRUaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGUvV2hvV2luLmpzIiwid2VicGFjazovLy8uL21vZHVsZS9lbmRHYW1lLmpzIiwid2VicGFjazovLy8uL21vZHVsZS9wbGF5ZXJzLmpzIiwid2VicGFjazovLy8uL21vZHVsZS9zdGFydEdhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlL3N0YXRlLmpzIiwid2VicGFjazovLy8uL21vZHVsZS90aGVtZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlL3ZhcmlhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvcGxheWVyX28vbGV0dGVyLW8ucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9wbGF5ZXJfby9vICgxKS5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3BsYXllcl9vL28gKDIpLnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvcGxheWVyX28vbyAoMykucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9wbGF5ZXJfeC9jbG9zZS5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3BsYXllcl94L25vLnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvcGxheWVyX3gvcGhhcm1hY3kucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9wbGF5ZXJfeC94LnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvdGhlbWVzL3RoZW1lLTEuUE5HIiwid2VicGFjazovLy8uL2ltYWdlcy90aGVtZXMvdGhlbWUtMi5QTkciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3RoZW1lcy90aGVtZS0zLlBORyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvdGhlbWVzL3RoZW1lLTQuUE5HIiwid2VicGFjazovLy8uL3N0eWxlLmNzcz82NDI5Iiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8vLi9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGhlcmUgY2hvb3NlIHggb3IgbyB3aGVuIG9uY2xpY2sgb24gd29yZCBjaG9vc2UgeCBvciBvXHJcblxyXG5pbXBvcnQgKiBhcyB2YXJpYWJsZXMgZnJvbSBcInZhcmlhYmxlcy5qc1wiO1xyXG5pbXBvcnQgeyBnZXRQbGF5LCBzZXRQbGF5IH0gZnJvbSBcInN0YXRlLmpzXCI7XHJcbmltcG9ydCB7IHN0YXJ0R2FtZSB9IGZyb20gXCJzdGFydEdhbWUuanNcIjtcclxuXHJcbi8vIEVudGVyIFRvIEdhbWUgRnVuY3Rpb25hbGl0eVxyXG5jb25zdCBFbnRlclRvR2FtZSA9ICgpID0+IHtcclxuICBnZXRQbGF5KCkgJiYgdmFyaWFibGVzLm5hbWUudmFsdWUubGVuZ3RoID4gMCA/IHN0YXJ0R2FtZShcIm5vbmVcIikgOiBcIlwiO1xyXG59O1xyXG5cclxuLy8gQ2hvb3NlIFggb3IgT1xyXG5leHBvcnQgY29uc3QgQ2hvb3NlVGljT3JUb2MgPSAocGxheWVyKSA9PiB7XHJcbiAgc3dpdGNoIChwbGF5ZXIpIHtcclxuICAgIGNhc2UgdmFyaWFibGVzLng6XHJcbiAgICAgIHZhcmlhYmxlcy5vLnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xyXG4gICAgICB2YXJpYWJsZXMueC5zdHlsZS5jb2xvciA9IFwiI2YwNVwiO1xyXG4gICAgICBzZXRQbGF5KFwieFwiKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIHZhcmlhYmxlcy5vOlxyXG4gICAgICB2YXJpYWJsZXMueC5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcclxuICAgICAgdmFyaWFibGVzLm8uc3R5bGUuY29sb3IgPSBcIiNmMDVcIjtcclxuICAgICAgc2V0UGxheShcIm9cIik7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuICBFbnRlclRvR2FtZSgpO1xyXG59O1xyXG5cclxudmFyaWFibGVzLngub25jbGljayA9ICgpID0+IENob29zZVRpY09yVG9jKHZhcmlhYmxlcy54KTtcclxudmFyaWFibGVzLm8ub25jbGljayA9ICgpID0+IENob29zZVRpY09yVG9jKHZhcmlhYmxlcy5vKTtcclxuIiwiLy8gSGVyZSBMb2dpYyBnYW1lIHB1dCB4IG9yIG8gaW4gYm94IGFuZCBlbmRHYW1lXHJcblxyXG5pbXBvcnQgeyBlbmRHYW1lIH0gZnJvbSBcImVuZEdhbWUuanNcIjtcclxuaW1wb3J0IHsgZ2V0UGxheSwgc2V0UGxheSB9IGZyb20gXCJzdGF0ZS5qc1wiO1xyXG5pbXBvcnQgeyB0aGVtZU5vd08sIHRoZW1lTm93WCB9IGZyb20gXCJ0aGVtZXMuanNcIjtcclxuaW1wb3J0IHsgYm94ZXMsIHJlc3VsdCwgc291bmRQbGF5ZXJPLCBzb3VuZFBsYXllclggfSBmcm9tIFwidmFyaWFibGVzLmpzXCI7XHJcbmltcG9ydCB7IHNldFdob1dpbiB9IGZyb20gXCJzdGF0ZS5qc1wiO1xyXG5pbXBvcnQgV2hvV2luIGZyb20gXCJXaG9XaW4uanNcIjtcclxuaW1wb3J0IE5leHRSb3VuZCBmcm9tIFwiTmV4dFJvdW5kLmpzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTG9naWMgPSAoKSA9PiB7XHJcbiAgYm94ZXMuZm9yRWFjaCgoYm94LCBpbmRleCkgPT4ge1xyXG4gICAgYm94Lm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChib3guaW5uZXJIVE1MID09IFwiXCIgJiYgZ2V0UGxheSgpID09IFwieFwiKSB7XHJcbiAgICAgICAgYm94LmlubmVySFRNTCA9IHRoZW1lTm93WDtcclxuICAgICAgICByZXN1bHQuaW5uZXJIVE1MID0gdGhlbWVOb3dPO1xyXG4gICAgICAgIHNldFBsYXkoXCJvXCIpO1xyXG4gICAgICAgIHNvdW5kUGxheWVyTy5wbGF5KCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoYm94LmlubmVySFRNTCA9PSBcIlwiICYmIGdldFBsYXkoKSA9PSBcIm9cIikge1xyXG4gICAgICAgIGJveC5pbm5lckhUTUwgPSB0aGVtZU5vd087XHJcbiAgICAgICAgcmVzdWx0LmlubmVySFRNTCA9IHRoZW1lTm93WDtcclxuICAgICAgICBzZXRQbGF5KFwieFwiKTtcclxuXHJcbiAgICAgICAgc291bmRQbGF5ZXJYLnBsYXkoKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBSb3dzXHJcbiAgICAgIGlmIChcclxuICAgICAgICBib3hlc1swXS5pbm5lckhUTUwgPT0gYm94ZXNbMV0uaW5uZXJIVE1MICYmXHJcbiAgICAgICAgYm94ZXNbMV0uaW5uZXJIVE1MID09IGJveGVzWzJdLmlubmVySFRNTCAmJlxyXG4gICAgICAgIGJveGVzWzBdLmlubmVySFRNbCAhPSBcIlwiICYmXHJcbiAgICAgICAgYm94ZXNbMV0uaW5uZXJIVE1MICE9IFwiXCJcclxuICAgICAgKSB7XHJcbiAgICAgICAgZW5kR2FtZShib3hlc1swXSwgYm94ZXNbMV0sIGJveGVzWzJdKTtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICBib3hlc1szXS5pbm5lckhUTUwgPT0gYm94ZXNbNF0uaW5uZXJIVE1MICYmXHJcbiAgICAgICAgYm94ZXNbNF0uaW5uZXJIVE1MID09IGJveGVzWzVdLmlubmVySFRNTCAmJlxyXG4gICAgICAgIGJveGVzWzRdLmlubmVySFRNbCAhPSBcIlwiICYmXHJcbiAgICAgICAgYm94ZXNbNV0uaW5uZXJIVE1MICE9IFwiXCJcclxuICAgICAgKSB7XHJcbiAgICAgICAgZW5kR2FtZShib3hlc1szXSwgYm94ZXNbNF0sIGJveGVzWzVdKTtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICBib3hlc1s2XS5pbm5lckhUTUwgPT0gYm94ZXNbN10uaW5uZXJIVE1MICYmXHJcbiAgICAgICAgYm94ZXNbN10uaW5uZXJIVE1MID09IGJveGVzWzhdLmlubmVySFRNTCAmJlxyXG4gICAgICAgIGJveGVzWzhdLmlubmVySFRNbCAhPSBcIlwiICYmXHJcbiAgICAgICAgYm94ZXNbN10uaW5uZXJIVE1MICE9IFwiXCJcclxuICAgICAgKSB7XHJcbiAgICAgICAgZW5kR2FtZShib3hlc1s2XSwgYm94ZXNbN10sIGJveGVzWzhdKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBSb3dzXHJcblxyXG4gICAgICAvLyBjb2x1bW5zXHJcbiAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgIGJveGVzWzBdLmlubmVySFRNTCA9PSBib3hlc1szXS5pbm5lckhUTUwgJiZcclxuICAgICAgICBib3hlc1szXS5pbm5lckhUTUwgPT0gYm94ZXNbNl0uaW5uZXJIVE1MICYmXHJcbiAgICAgICAgYm94ZXNbNl0uaW5uZXJIVE1sICE9IFwiXCIgJiZcclxuICAgICAgICBib3hlc1szXS5pbm5lckhUTUwgIT0gXCJcIlxyXG4gICAgICApIHtcclxuICAgICAgICBlbmRHYW1lKGJveGVzWzBdLCBib3hlc1szXSwgYm94ZXNbNl0pO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIGJveGVzWzFdLmlubmVySFRNTCA9PSBib3hlc1s0XS5pbm5lckhUTUwgJiZcclxuICAgICAgICBib3hlc1s0XS5pbm5lckhUTUwgPT0gYm94ZXNbN10uaW5uZXJIVE1MICYmXHJcbiAgICAgICAgYm94ZXNbN10uaW5uZXJIVE1sICE9IFwiXCIgJiZcclxuICAgICAgICBib3hlc1s0XS5pbm5lckhUTUwgIT0gXCJcIlxyXG4gICAgICApIHtcclxuICAgICAgICBlbmRHYW1lKGJveGVzWzFdLCBib3hlc1s0XSwgYm94ZXNbN10pO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIGJveGVzWzJdLmlubmVySFRNTCA9PSBib3hlc1s1XS5pbm5lckhUTUwgJiZcclxuICAgICAgICBib3hlc1s1XS5pbm5lckhUTUwgPT0gYm94ZXNbOF0uaW5uZXJIVE1MICYmXHJcbiAgICAgICAgYm94ZXNbOF0uaW5uZXJIVE1sICE9IFwiXCIgJiZcclxuICAgICAgICBib3hlc1s1XS5pbm5lckhUTUwgIT0gXCJcIlxyXG4gICAgICApIHtcclxuICAgICAgICBlbmRHYW1lKGJveGVzWzJdLCBib3hlc1s1XSwgYm94ZXNbOF0pO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIGJveGVzWzBdLmlubmVySFRNTCA9PSBib3hlc1s0XS5pbm5lckhUTUwgJiZcclxuICAgICAgICBib3hlc1s0XS5pbm5lckhUTUwgPT0gYm94ZXNbOF0uaW5uZXJIVE1MICYmXHJcbiAgICAgICAgYm94ZXNbOF0uaW5uZXJIVE1sICE9IFwiXCIgJiZcclxuICAgICAgICBib3hlc1s0XS5pbm5lckhUTUwgIT0gXCJcIlxyXG4gICAgICApIHtcclxuICAgICAgICBlbmRHYW1lKGJveGVzWzBdLCBib3hlc1s0XSwgYm94ZXNbOF0pO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIGJveGVzWzJdLmlubmVySFRNTCA9PSBib3hlc1s0XS5pbm5lckhUTUwgJiZcclxuICAgICAgICBib3hlc1s0XS5pbm5lckhUTUwgPT0gYm94ZXNbNl0uaW5uZXJIVE1MICYmXHJcbiAgICAgICAgYm94ZXNbNl0uaW5uZXJIVE1sICE9IFwiXCIgJiZcclxuICAgICAgICBib3hlc1s0XS5pbm5lckhUTUwgIT0gXCJcIlxyXG4gICAgICApIHtcclxuICAgICAgICBlbmRHYW1lKGJveGVzWzJdLCBib3hlc1s0XSwgYm94ZXNbNl0pO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIGJveGVzWzBdLmlubmVySFRNTC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgYm94ZXNbMV0uaW5uZXJIVE1MLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICBib3hlc1syXS5pbm5lckhUTUwubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgIGJveGVzWzNdLmlubmVySFRNTC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgYm94ZXNbNF0uaW5uZXJIVE1MLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICBib3hlc1s1XS5pbm5lckhUTUwubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgIGJveGVzWzZdLmlubmVySFRNTC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgYm94ZXNbN10uaW5uZXJIVE1MLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICBib3hlc1s4XS5pbm5lckhUTUwubGVuZ3RoID4gMFxyXG4gICAgICApIHtcclxuICAgICAgICByZXN1bHQuaW5uZXJIVE1MID0gXCI/Pz9cIjtcclxuICAgICAgICBzZXRXaG9XaW4odHJ1ZSk7XHJcbiAgICAgICAgV2hvV2luKCk7XHJcbiAgICAgICAgTmV4dFJvdW5kKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfSk7XHJcbn07XHJcbiIsImltcG9ydCB7IGdldFdob1dpbiB9IGZyb20gXCJzdGF0ZS5qc1wiO1xyXG5pbXBvcnQgeyBnZXRUaGVtZVNlbGVjdGVkLCBzZXRUaGVtZU5leHQgfSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5cclxubGV0IFRoZW1lcyA9IFtcInRoZW1lLTFcIiwgXCJ0aGVtZS0yXCIsIFwidGhlbWUtM1wiLCBcInRoZW1lLTRcIl07XHJcbmxldCBuZXh0VGhlbWUgPSBcIlwiO1xyXG5cclxuY29uc3QgTmV4dFJvdW5kID0gKCkgPT4ge1xyXG4gIGlmIChnZXRXaG9XaW4oKSkge1xyXG4gICAgY29uc29sZS5sb2coVGhlbWVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpXSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgbmV4dFRoZW1lID0gVGhlbWVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpXTtcclxuICAgICAgZ2V0VGhlbWVTZWxlY3RlZCgpID09PSBuZXh0VGhlbWUgJiYgZ2V0VGhlbWVTZWxlY3RlZCgpICE9IDRcclxuICAgICAgICA/IHNldFRoZW1lTmV4dChUaGVtZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCkgKyAxXSlcclxuICAgICAgICA6IHNldFRoZW1lTmV4dChUaGVtZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCkgLSAxXSk7XHJcbiAgICB9LCAzMDAwKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0Um91bmQ7XHJcbiIsImltcG9ydCAqIGFzIHZhcmlhYmxlcyBmcm9tIFwidmFyaWFibGVzLmpzXCI7XHJcbmltcG9ydCB7IGJveGVzIH0gZnJvbSBcIi4vdmFyaWFibGVzXCI7XHJcbmltcG9ydCB7IGdldFdpbiwgZ2V0V2hvV2luIH0gZnJvbSBcInN0YXRlLmpzXCI7XHJcbmxldCB3aWR0aFRpbWVyID0gMTAwO1xyXG5jb25zdCBTdGFydFRpbWVyID0gKCkgPT4ge1xyXG4gIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgIHZhcmlhYmxlcy50aW1lci5zdHlsZS53aWR0aCA9IGAke3dpZHRoVGltZXJ9JWA7XHJcbiAgICB2YXJpYWJsZXMudGltZXIuc3R5bGUuaGVpZ2h0ID0gYCR7d2lkdGhUaW1lcn0lYDtcclxuICAgIGJveGVzLmZvckVhY2goKGJveCkgPT4ge1xyXG4gICAgICBib3guc3R5bGUud2lkdGggPSBgJHt3aWR0aFRpbWVyfSVgO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHdpZHRoVGltZXIgPT09IDAgfHwgZ2V0V2luKCkgfHwgZ2V0V2hvV2luKCkpIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHdpZHRoVGltZXIgPD0gNjAgJiYgd2lkdGhUaW1lciA+PSAzNiAmJiAhZ2V0V2luKCkgJiYgIWdldFdob1dpbigpKSB7XHJcbiAgICAgIHZhcmlhYmxlcy50aW1lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGFycnl1cFwiKTtcclxuICAgICAgdmFyaWFibGVzLnRpbWVyLmNsYXNzTGlzdC5hZGQoXCJzcGVlZFwiKTtcclxuICAgIH0gZWxzZSBpZiAod2lkdGhUaW1lciA8PSAzNSAmJiAhZ2V0V2luKCkpIHtcclxuICAgICAgdmFyaWFibGVzLnRpbWVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzcGVlZFwiKTtcclxuICAgICAgdmFyaWFibGVzLnRpbWVyLmNsYXNzTGlzdC5hZGQoXCJoYXJyeXVwXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC0td2lkdGhUaW1lcjtcclxuICB9LCAzNTApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhcnRUaW1lcjtcclxuIiwiaW1wb3J0IHsgZ2V0V2hvV2luIH0gZnJvbSBcInN0YXRlLmpzXCI7XHJcbmltcG9ydCAqIGFzIHZhcmlhYmxlcyBmcm9tIFwidmFyaWFibGVzLmpzXCI7XHJcblxyXG5sZXQgd2FpdCA9IDE7XHJcblxyXG5jb25zdCBXaG9XaW4gPSAoKSA9PiB7XHJcbiAgaWYgKGdldFdob1dpbigpKSB7XHJcbiAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIHZhcmlhYmxlcy5yZXN1bHQuaW5uZXJIVE1MID0gYG5leHQgcm91bmQke1wiLlwiLnJlcGVhdCh3YWl0KX1gO1xyXG5cclxuICAgICAgaWYgKHdhaXQgPT09IDMpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgfVxyXG4gICAgICArK3dhaXQ7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaG9XaW47XHJcbiIsIi8vIEVuZCBHYW1lIExvZ2ljXHJcblxyXG5pbXBvcnQgeyByZXN1bHQsIGFwcCB9IGZyb20gXCJ2YXJpYWJsZXMuanNcIjtcclxuaW1wb3J0IHsgc2V0V2luIH0gZnJvbSBcInN0YXRlLmpzXCI7XHJcbmltcG9ydCB7IGdldFRoZW1lU2VsZWN0ZWQgfSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVuZEdhbWUgPSAobnVtMSwgbnVtMiwgbnVtMykgPT4ge1xyXG4gIG51bTEuc3R5bGUuYmFja2dyb3VuZENvbG9yID1cclxuICAgIGdldFRoZW1lU2VsZWN0ZWQoKSA9PT0gXCJ0aGVtZS0xXCJcclxuICAgICAgPyBcImxpZ2h0c2VhZ3JlZW5cIlxyXG4gICAgICA6IGdldFRoZW1lU2VsZWN0ZWQoKSA9PT0gXCJ0aGVtZS0yXCJcclxuICAgICAgPyBcIiNmMDRcIlxyXG4gICAgICA6IGdldFRoZW1lU2VsZWN0ZWQoKSA9PT0gXCJ0aGVtZS0zXCJcclxuICAgICAgPyBcInJlYmVjY2FwdXJwbGVcIlxyXG4gICAgICA6IFwiYmxhY2tcIjtcclxuICBudW0yLnN0eWxlLmJhY2tncm91bmRDb2xvciA9XHJcbiAgICBnZXRUaGVtZVNlbGVjdGVkKCkgPT09IFwidGhlbWUtMVwiXHJcbiAgICAgID8gXCJsaWdodHNlYWdyZWVuXCJcclxuICAgICAgOiBnZXRUaGVtZVNlbGVjdGVkKCkgPT09IFwidGhlbWUtMlwiXHJcbiAgICAgID8gXCIjZjA0XCJcclxuICAgICAgOiBnZXRUaGVtZVNlbGVjdGVkKCkgPT09IFwidGhlbWUtM1wiXHJcbiAgICAgID8gXCJyZWJlY2NhcHVycGxlXCJcclxuICAgICAgOiBcImJsYWNrXCI7XHJcbiAgbnVtMy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPVxyXG4gICAgZ2V0VGhlbWVTZWxlY3RlZCgpID09PSBcInRoZW1lLTFcIlxyXG4gICAgICA/IFwibGlnaHRzZWFncmVlblwiXHJcbiAgICAgIDogZ2V0VGhlbWVTZWxlY3RlZCgpID09PSBcInRoZW1lLTJcIlxyXG4gICAgICA/IFwiI2YwNFwiXHJcbiAgICAgIDogZ2V0VGhlbWVTZWxlY3RlZCgpID09PSBcInRoZW1lLTNcIlxyXG4gICAgICA/IFwicmViZWNjYXB1cnBsZVwiXHJcbiAgICAgIDogXCJibGFja1wiO1xyXG4gIGFwcC5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZVwiKTtcclxuICByZXN1bHQuY2xhc3NMaXN0LmFkZChcIndpbm5lclwiKTtcclxuICByZXN1bHQuaW5uZXJIVE1MID0gYCR7bnVtMS5pbm5lckhUTUx9IElzIFdpbm5lcmA7XHJcbiAgbGV0IGNsb3NlID0gMTtcclxuICBzZXRXaW4odHJ1ZSk7XHJcbiAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgcmVzdWx0LmlubmVySFRNTCArPSBcIi5cIjtcclxuICAgIGlmIChjbG9zZSA9PT0gMykge1xyXG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgIH1cclxuICAgICsrY2xvc2U7XHJcbiAgfSwgMTAwMCk7XHJcbn07XHJcbiIsImNvbnN0IHRyZWVQbGF5ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmVlXCIpO1xyXG5jb25zdCB0ZXh0UGxheWVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyc1wiKTtcclxuXHJcbmxldCBhbmltVG9wID0gNTAwO1xyXG5jb25zdCBQbGF5ZXJzID0gKCkgPT4ge1xyXG4gIHRyZWVQbGF5ZXJzLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICB0cmVlUGxheWVycy5jbGFzc0xpc3QudG9nZ2xlKFwic2hvdy1wbGF5ZXJzXCIpO1xyXG4gICAgdGV4dFBsYXllcnMuY2xhc3NMaXN0LnRvZ2dsZShcInNob3ctcGxheWVyc1wiKTtcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVycztcclxuIiwiaW1wb3J0IHsgZ2V0UGxheSB9IGZyb20gXCJzdGF0ZS5qc1wiO1xyXG5pbXBvcnQgKiBhcyB2YXJpYWJsZXMgZnJvbSBcInZhcmlhYmxlcy5qc1wiO1xyXG5pbXBvcnQgU3RhcnRUaW1lciBmcm9tIFwiU3RhcnRUaW1lci5qc1wiO1xyXG5pbXBvcnQgeyBnZXRUaGVtZVNlbGVjdGVkIH0gZnJvbSBcInN0YXRlLmpzXCI7XHJcblxyXG5sZXQgYWxlcnRNZXNzYWdlID0gXCJcIjtcclxuXHJcbi8vIEhpZGUgU3RhcnQgR2FtZVxyXG5leHBvcnQgY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xyXG4gIHZhcmlhYmxlcy5uYW1lPy52YWx1ZT8ubGVuZ3RoID09PSAwICYmIEhpZGVHYW1lKFwibm9uZVwiKTtcclxufTtcclxuXHJcbi8vIEhpZGUgR2FtZVxyXG5jb25zdCBIaWRlR2FtZSA9IChzdGF0dXMpID0+IHtcclxuICB2YXJpYWJsZXMuZ2FtZV9jb250YWluZXIuc3R5bGUuZGlzcGxheSA9IHN0YXR1cztcclxufTtcclxuXHJcbi8vIEhhbmRsZUVycm9yXHJcbmNvbnN0IEhhbmRsZUVycm9yID0gKCkgPT4ge1xyXG4gIGlmIChhbGVydE1lc3NhZ2UpIHtcclxuICAgIHZhcmlhYmxlcy5lcm9yckVsZW1lbnQuaW5uZXJIVE1MID0gYWxlcnRNZXNzYWdlO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIEhhbmRsZSBCVG4gU3RhcnRcclxuZXhwb3J0IGNvbnN0IEhhbmRsZUJUTlN0YXJ0ID0gKCkgPT4ge1xyXG4gIGlmICh2YXJpYWJsZXMubmFtZS52YWx1ZSA9PT0gXCJcIikge1xyXG4gICAgYWxlcnRNZXNzYWdlID0gXCJZb3UgTXVzdCBGaWxsIFlvdXIgTmFtZVwiO1xyXG4gIH0gZWxzZSBpZiAoZ2V0VGhlbWVTZWxlY3RlZCgpID09PSBcIlwiKSB7XHJcbiAgICBhbGVydE1lc3NhZ2UgPSBcIllvdSBNdXN0IFNlbGVjdCBZb3VyIFRoZW1lXCI7XHJcbiAgfSBlbHNlIGlmIChnZXRQbGF5KCkgPT09IFwiXCIpIHtcclxuICAgIGFsZXJ0TWVzc2FnZSA9IFwiWW91IE11c3QgU2VsZWN0IFggb3IgT1wiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB2YXJpYWJsZXMuc3RhcnRHYW1lQXJlYS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB2YXJpYWJsZXMubmFtZUFyZWEudGV4dENvbnRlbnQgPSB2YXJpYWJsZXMubmFtZS52YWx1ZTtcclxuICAgIEhpZGVHYW1lKFwiYmxvY2tcIik7XHJcbiAgICBhbGVydE1lc3NhZ2UgPSBcIlwiO1xyXG4gICAgdmFyaWFibGVzLnNvdW5kU3RhcnRHYW1lLnBsYXkoKTtcclxuICB9XHJcbiAgSGFuZGxlRXJyb3IoKTtcclxuICBTdGFydFRpbWVyKCk7XHJcbn07XHJcblxyXG52YXJpYWJsZXMuYnRuU3RhcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IEhhbmRsZUJUTlN0YXJ0KCkpO1xyXG4iLCJsZXQgcGxheSA9IFwiXCI7XHJcbmxldCB3aW4gPSBmYWxzZTtcclxubGV0IHdob1dpbiA9IGZhbHNlO1xyXG5sZXQgdGhlbWVTZWxlY3RlZCA9IFwiXCI7XHJcbmxldCB0aGVtZU5leHQgPSBcIlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFBsYXkgPSAoKSA9PiBwbGF5O1xyXG5leHBvcnQgY29uc3Qgc2V0UGxheSA9ICh2YWx1ZSkgPT4gKHBsYXkgPSB2YWx1ZSk7XHJcbmV4cG9ydCBjb25zdCBnZXRXaW4gPSAoKSA9PiB3aW47XHJcbmV4cG9ydCBjb25zdCBzZXRXaW4gPSAodmFsdWUpID0+ICh3aW4gPSB2YWx1ZSk7XHJcbmV4cG9ydCBjb25zdCBnZXRXaG9XaW4gPSAoKSA9PiB3aG9XaW47XHJcbmV4cG9ydCBjb25zdCBzZXRXaG9XaW4gPSAodmFsdWUpID0+ICh3aG9XaW4gPSB2YWx1ZSk7XHJcbmV4cG9ydCBjb25zdCBnZXRUaGVtZVNlbGVjdGVkID0gKCkgPT4gdGhlbWVTZWxlY3RlZDtcclxuZXhwb3J0IGNvbnN0IHNldFRoZW1lU2VsZWN0ZWQgPSAodmFsdWUpID0+ICh0aGVtZVNlbGVjdGVkID0gdmFsdWUpO1xyXG5leHBvcnQgY29uc3QgZ2V0VGhlbWVOZXh0ID0gKCkgPT4gdGhlbWVOZXh0O1xyXG5leHBvcnQgY29uc3Qgc2V0VGhlbWVOZXh0ID0gKHZhbHVlKSA9PiAodGhlbWVOZXh0ID0gdmFsdWUpO1xyXG4iLCJpbXBvcnQgeyBib3hlcywgZ2FtZV9jb250YWluZXIsIHJlc3VsdCwgdGhlbWVzIH0gZnJvbSBcInZhcmlhYmxlcy5qc1wiO1xyXG5pbXBvcnQgVGhlbWVBcmVhT25lIGZyb20gXCIuLi9pbWFnZXMvdGhlbWVzL3RoZW1lLTEuUE5HXCI7XHJcbmltcG9ydCBUaGVtZUFyZWFUd28gZnJvbSBcIi4uL2ltYWdlcy90aGVtZXMvdGhlbWUtMi5QTkdcIjtcclxuaW1wb3J0IFRoZW1lQXJlYVRocmVlIGZyb20gXCIuLi9pbWFnZXMvdGhlbWVzL3RoZW1lLTMuUE5HXCI7XHJcbmltcG9ydCBUaGVtZUFyZWFGb3VyIGZyb20gXCIuLi9pbWFnZXMvdGhlbWVzL3RoZW1lLTQuUE5HXCI7XHJcbmltcG9ydCBUaGVtZVhPbmUgZnJvbSBcIi4uL2ltYWdlcy9wbGF5ZXJfeC9jbG9zZS5wbmdcIjtcclxuaW1wb3J0IFRoZW1lWFR3byBmcm9tIFwiLi4vaW1hZ2VzL3BsYXllcl94L3gucG5nXCI7XHJcbmltcG9ydCBUaGVtZVhUaHJlZSBmcm9tIFwiLi4vaW1hZ2VzL3BsYXllcl94L3BoYXJtYWN5LnBuZ1wiO1xyXG5pbXBvcnQgVGhlbWVYRm91ciBmcm9tIFwiLi4vaW1hZ2VzL3BsYXllcl94L25vLnBuZ1wiO1xyXG5pbXBvcnQgVGhlbWVPT25lIGZyb20gXCIuLi9pbWFnZXMvcGxheWVyX28vbyAoMSkucG5nXCI7XHJcbmltcG9ydCBUaGVtZU9Ud28gZnJvbSBcIi4uL2ltYWdlcy9wbGF5ZXJfby9sZXR0ZXItby5wbmdcIjtcclxuaW1wb3J0IFRoZW1lT1RocmVlIGZyb20gXCIuLi9pbWFnZXMvcGxheWVyX28vbyAoMikucG5nXCI7XHJcbmltcG9ydCBUaGVtZU9Gb3VyIGZyb20gXCIuLi9pbWFnZXMvcGxheWVyX28vbyAoMykucG5nXCI7XHJcbmltcG9ydCB7IHNldFRoZW1lU2VsZWN0ZWQsIGdldFRoZW1lTmV4dCB9IGZyb20gXCJzdGF0ZS5qc1wiO1xyXG5pbXBvcnQgTmV4dFJvdW5kIGZyb20gXCJOZXh0Um91bmQuanNcIjtcclxuXHJcbmV4cG9ydCBsZXQgdGhlbWVOb3dYID0gXCJcIjtcclxuZXhwb3J0IGxldCB0aGVtZU5vd08gPSBcIlwiO1xyXG5cclxuLy8gQXBwbHlUaGVtZSBGdW5jdGlvbmFsaXR5XHJcbmNvbnN0IEFwcGx5VGhlbWUgPSAoKSA9PiB7XHJcbiAgdGhlbWVzLmZvckVhY2goKHRoZW1lQXJlYSkgPT4ge1xyXG4gICAgaWYgKHRoZW1lQXJlYS5kYXRhc2V0LnRoZW1lID09PSBcInRoZW1lLTFcIikge1xyXG4gICAgICB0aGVtZU5vd1ggPSBUaGVtZVhPbmU7XHJcbiAgICAgIHRoZW1lTm93TyA9IFRoZW1lT09uZTtcclxuICAgICAgdGhlbWVBcmVhLnNyYyA9IFRoZW1lQXJlYU9uZTtcclxuICAgIH1cclxuICAgIGlmICh0aGVtZUFyZWEuZGF0YXNldC50aGVtZSA9PT0gXCJ0aGVtZS0yXCIpIHtcclxuICAgICAgdGhlbWVOb3dYID0gVGhlbWVYVHdvO1xyXG4gICAgICB0aGVtZU5vd08gPSBUaGVtZU9Ud287XHJcbiAgICAgIHRoZW1lQXJlYS5zcmMgPSBUaGVtZUFyZWFUd287XHJcbiAgICB9XHJcbiAgICBpZiAodGhlbWVBcmVhLmRhdGFzZXQudGhlbWUgPT09IFwidGhlbWUtM1wiKSB7XHJcbiAgICAgIHRoZW1lTm93WCA9IFRoZW1lWFRocmVlO1xyXG4gICAgICB0aGVtZU5vd08gPSBUaGVtZU9UaHJlZTtcclxuICAgICAgdGhlbWVBcmVhLnNyYyA9IFRoZW1lQXJlYVRocmVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoZW1lQXJlYS5kYXRhc2V0LnRoZW1lID09PSBcInRoZW1lLTRcIikge1xyXG4gICAgICB0aGVtZU5vd1ggPSBUaGVtZVhGb3VyO1xyXG4gICAgICB0aGVtZU5vd08gPSBUaGVtZU9Gb3VyO1xyXG4gICAgICB0aGVtZUFyZWEuc3JjID0gVGhlbWVBcmVhRm91cjtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmVzdWx0LmlubmVySFRNTCA9IGAke3RoZW1lTm93WH0gJHt0aGVtZU5vd099IEdhbWVgO1xyXG59O1xyXG5cclxuLy8gU2V0IFRoZW1lXHJcbmV4cG9ydCBjb25zdCBTZXRUaGVtZSA9ICgpID0+IHtcclxuICB0aGVtZXMuZm9yRWFjaCgodGhlbWUsIGluZGV4KSA9PiB7XHJcbiAgICB0aGVtZS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICBzZXRUaGVtZVNlbGVjdGVkKHRoZW1lLmRhdGFzZXQudGhlbWUpO1xyXG5cclxuICAgICAgZ2FtZV9jb250YWluZXIuY2xhc3NOYW1lID0gZ2V0VGhlbWVOZXh0KCkgPyBcIlwiIDogdGhlbWUuZGF0YXNldC50aGVtZTtcclxuICAgICAgdGhlbWVOb3dYID0gZ2V0VGhlbWVOZXh0KCkgPyBcIlwiIDogdGhlbWUuZGF0YXNldC50aGVtZTtcclxuICAgICAgdGhlbWVOb3dPID0gZ2V0VGhlbWVOZXh0KCkgPyBcIlwiIDogdGhlbWUuZGF0YXNldC50aGVtZTtcclxuICAgICAgYm94ZXMuZm9yRWFjaCgoYm94KSA9PlxyXG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKGdldFRoZW1lTmV4dCgpID8gXCJcIiA6IHRoZW1lLmRhdGFzZXQudGhlbWUpXHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0aGVtZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICBBcHBseVRoZW1lKCk7XHJcblxyXG4gICAgICB0aGVtZXMuZm9yRWFjaCgob2xkVGhlbWUsIGlkKSA9PiB7XHJcbiAgICAgICAgaWYgKG9sZFRoZW1lLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSAmJiBpZCAhPT0gaW5kZXgpIHtcclxuICAgICAgICAgIG9sZFRoZW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgfSk7XHJcbiAgTmV4dFJvdW5kKCk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBnYW1lX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1jb250YWluZXJcIik7XHJcbmV4cG9ydCBjb25zdCBzdGFydEdhbWVBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydC1nYW1lXCIpO1xyXG5leHBvcnQgY29uc3QgbmFtZUFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdCBsaTpmaXJzdC1vZi10eXBlXCIpO1xyXG5leHBvcnQgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHQgbGk6bnRoLWNoaWxkKDMpXCIpO1xyXG5leHBvcnQgY29uc3QgdGltZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdCBsaTpudGgtY2hpbGQoMikgcFwiKTtcclxuZXhwb3J0IGNvbnN0IGJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib3hcIik7XHJcbmV4cG9ydCBjb25zdCBhcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFwcFwiKTtcclxuZXhwb3J0IGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIik7XHJcbmV4cG9ydCBjb25zdCB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ4XCIpO1xyXG5leHBvcnQgY29uc3QgbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib1wiKTtcclxuZXhwb3J0IGNvbnN0IGJ0blN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydC1nYW1lIGJ1dHRvblwiKTtcclxuZXhwb3J0IGNvbnN0IHRoZW1lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGhlbWVzLWFyZWEgaW1nXCIpO1xyXG5leHBvcnQgY29uc3QgZXJvcnJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvclwiKTtcclxuZXhwb3J0IGNvbnN0IHNvdW5kU3RhcnRHYW1lID0gbmV3IEF1ZGlvKFwiLi9zb3VuZHMvZ2FtZS1zdGFydC02MTA0Lm1wM1wiKTtcclxuZXhwb3J0IGNvbnN0IHNvdW5kUGxheWVyWCA9IG5ldyBBdWRpbyhcIi4vc291bmRzL3gud2F2XCIpO1xyXG5leHBvcnQgY29uc3Qgc291bmRQbGF5ZXJPID0gbmV3IEF1ZGlvKFwiLi9zb3VuZHMvby53YXZcIik7XHJcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvbGV0dGVyLW8ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9vICgxKS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL28gKDIpLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvbyAoMykucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9jbG9zZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL25vLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvcGhhcm1hY3kucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy94LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvdGhlbWUtMS5QTkdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3RoZW1lLTIuUE5HXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy90aGVtZS0zLlBOR1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvdGhlbWUtNC5QTkdcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gR2xvYmFsIFZhcmlhYmxlc1xyXG5cclxuLy8gaG90IG1vZHVsZSB3ZWJwYWNrXHJcblxyXG5pbXBvcnQgKiBhcyB0aGVtZSBmcm9tIFwidGhlbWVzLmpzXCI7XHJcbmltcG9ydCB7IExvZ2ljIH0gZnJvbSBcIkxvZ2ljLmpzXCI7XHJcbmltcG9ydCB7IHN0YXJ0R2FtZSB9IGZyb20gXCJzdGFydEdhbWUuanNcIjtcclxuaW1wb3J0IHsgQ2hvb3NlVGljT3JUb2MgfSBmcm9tIFwiQ2hvb3NlWF9PLmpzXCI7XHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IFBsYXllcnMgZnJvbSBcInBsYXllcnMuanNcIjtcclxuXHJcbnRoZW1lLlNldFRoZW1lKHRoZW1lLnRoZW1lTm93WCwgdGhlbWUudGhlbWVOb3dPKTtcclxuUGxheWVycygpO1xyXG5zdGFydEdhbWUoKTtcclxuTG9naWMoKTtcclxuQ2hvb3NlVGljT3JUb2MoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9