/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./module/ApplyTheme.js":
/*!******************************!*\
  !*** ./module/ApplyTheme.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_themes_theme_1_PNG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/themes/theme-1.PNG */ "./images/themes/theme-1.PNG");
/* harmony import */ var _images_themes_theme_2_PNG__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/themes/theme-2.PNG */ "./images/themes/theme-2.PNG");
/* harmony import */ var _images_themes_theme_3_PNG__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/themes/theme-3.PNG */ "./images/themes/theme-3.PNG");
/* harmony import */ var _images_themes_theme_4_PNG__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/themes/theme-4.PNG */ "./images/themes/theme-4.PNG");
/* harmony import */ var _images_bg_btn_start_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/bg-btn-start.jpg */ "./images/bg-btn-start.jpg");
/* harmony import */ var _images_border_leaf_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/border-leaf.png */ "./images/border-leaf.png");
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./variables.js */ "./module/variables.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./state */ "./module/state.js");
/* harmony import */ var _images_themes_bg_theme_1_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/themes/bg-theme-1.jpg */ "./images/themes/bg-theme-1.jpg");










const themeArea = [_images_themes_theme_1_PNG__WEBPACK_IMPORTED_MODULE_0__["default"], _images_themes_theme_2_PNG__WEBPACK_IMPORTED_MODULE_1__["default"], _images_themes_theme_3_PNG__WEBPACK_IMPORTED_MODULE_2__["default"], _images_themes_theme_4_PNG__WEBPACK_IMPORTED_MODULE_3__["default"]];

const ApplyThemes = () => {
  document.body.style.backgroundImage = `url("${_images_themes_bg_theme_1_jpg__WEBPACK_IMPORTED_MODULE_8__["default"]}")`;
  _variables_js__WEBPACK_IMPORTED_MODULE_6__.app.style.backgroundImage = `url("${_images_themes_bg_theme_1_jpg__WEBPACK_IMPORTED_MODULE_8__["default"]}")`;
  _variables_js__WEBPACK_IMPORTED_MODULE_6__.themes.forEach((theme, index) => {
    theme.src = themeArea[index];
    theme.addEventListener("mouseenter", () => {
      !theme.classList.contains("active")
        ? (theme.style.borderImage = `url(${_images_border_leaf_png__WEBPACK_IMPORTED_MODULE_5__["default"]}) 10`)
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

/***/ "./module/ChooseX_O.js":
/*!*****************************!*\
  !*** ./module/ChooseX_O.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChooseTicOrToc: () => (/* binding */ ChooseTicOrToc)
/* harmony export */ });
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ "./module/variables.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state.js */ "./module/state.js");
/* harmony import */ var _startGame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startGame.js */ "./module/startGame.js");
// here choose x or o when onclick on word choose x or o





// Enter To Game Functionality
const EnterToGame = () => {
  (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.getPlay)() && _variables_js__WEBPACK_IMPORTED_MODULE_0__.name.value.length > 0 ? (0,_startGame_js__WEBPACK_IMPORTED_MODULE_2__.startGame)("none") : "";
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

/***/ "./module/EndGame.js":
/*!***************************!*\
  !*** ./module/EndGame.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EndGame: () => (/* binding */ EndGame),
/* harmony export */   reset: () => (/* binding */ reset)
/* harmony export */ });
/* harmony import */ var _startGame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startGame.js */ "./module/startGame.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state.js */ "./module/state.js");
/* harmony import */ var _themes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./themes.js */ "./module/themes.js");
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variables.js */ "./module/variables.js");





const reset = (text) => {
  (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.setThemeSelected)("");
  (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.setAlertMessage)("");
  _variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes.forEach((box) => (box.innerHTML = ""));
  _variables_js__WEBPACK_IMPORTED_MODULE_3__.timer.className = "";

  _variables_js__WEBPACK_IMPORTED_MODULE_3__.name.value = "";
  const divCollectionXO = document.createElement("div");
  const textGame = document.createTextNode(text);
  divCollectionXO.appendChild(_themes_js__WEBPACK_IMPORTED_MODULE_2__.themeNowX);
  divCollectionXO.appendChild(_themes_js__WEBPACK_IMPORTED_MODULE_2__.themeNowO);
  divCollectionXO.appendChild(textGame);

  _variables_js__WEBPACK_IMPORTED_MODULE_3__.result.appendChild(divCollectionXO);
};

const EndGame = () => {
  reset("Game");
  _variables_js__WEBPACK_IMPORTED_MODULE_3__.result.innerHTML = "";
  _variables_js__WEBPACK_IMPORTED_MODULE_3__.themes.forEach((theme) => {
    theme.className = "";
    theme.style.borderImage = "none";
  });
  _variables_js__WEBPACK_IMPORTED_MODULE_3__.startGameArea.style.display = "block";
  _variables_js__WEBPACK_IMPORTED_MODULE_3__.x.style.color = "black";
  _variables_js__WEBPACK_IMPORTED_MODULE_3__.o.style.color = "black";

  _variables_js__WEBPACK_IMPORTED_MODULE_3__.name.value = "";
  (0,_startGame_js__WEBPACK_IMPORTED_MODULE_0__.HideGame)("none");
  (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.setWin)(false);
  (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.setTimer)(95);
  (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.setThemeNext)("");
  (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.setPlay)("");
};


/***/ }),

/***/ "./module/MatchColRow.js":
/*!*******************************!*\
  !*** ./module/MatchColRow.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WinGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WinGame */ "./module/WinGame.js");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables */ "./module/variables.js");



const MatchColsAndRows = () => {
  // Rows
  function Rows(RowOne, RowTwo, RowThree) {
    if (
      _variables__WEBPACK_IMPORTED_MODULE_1__.boxes[RowOne].innerHTML == _variables__WEBPACK_IMPORTED_MODULE_1__.boxes[RowTwo].innerHTML &&
      _variables__WEBPACK_IMPORTED_MODULE_1__.boxes[RowTwo].innerHTML == _variables__WEBPACK_IMPORTED_MODULE_1__.boxes[RowThree].innerHTML &&
      _variables__WEBPACK_IMPORTED_MODULE_1__.boxes[RowOne].innerHTMl != "" &&
      _variables__WEBPACK_IMPORTED_MODULE_1__.boxes[RowTwo].innerHTML != ""
    ) {
      (0,_WinGame__WEBPACK_IMPORTED_MODULE_0__.WinGame)(_variables__WEBPACK_IMPORTED_MODULE_1__.boxes[RowOne], _variables__WEBPACK_IMPORTED_MODULE_1__.boxes[RowOne], _variables__WEBPACK_IMPORTED_MODULE_1__.boxes[RowThree]);
    }
  }

  Rows(2, 6, 4);
  Rows(2, 4, 6);
  Rows(0, 4, 8);
  Rows(0, 8, 4);

  // columns
  const Columns = (ColOne, ColTwo, ColThree) => {
    if (
      _variables__WEBPACK_IMPORTED_MODULE_1__.boxes[ColOne].innerHTML == _variables__WEBPACK_IMPORTED_MODULE_1__.boxes[ColTwo].innerHTML &&
      _variables__WEBPACK_IMPORTED_MODULE_1__.boxes[ColTwo].innerHTML == _variables__WEBPACK_IMPORTED_MODULE_1__.boxes[ColThree].innerHTML &&
      _variables__WEBPACK_IMPORTED_MODULE_1__.boxes[ColThree].innerHTMl != "" &&
      _variables__WEBPACK_IMPORTED_MODULE_1__.boxes[ColTwo].innerHTML != ""
    ) {
      (0,_WinGame__WEBPACK_IMPORTED_MODULE_0__.WinGame)(_variables__WEBPACK_IMPORTED_MODULE_1__.boxes[ColOne], _variables__WEBPACK_IMPORTED_MODULE_1__.boxes[ColTwo], _variables__WEBPACK_IMPORTED_MODULE_1__.boxes[ColThree]);
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

/***/ "./module/NextRound.js":
/*!*****************************!*\
  !*** ./module/NextRound.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EndGame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EndGame.js */ "./module/EndGame.js");
/* harmony import */ var _startGame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startGame.js */ "./module/startGame.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state.js */ "./module/state.js");
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variables.js */ "./module/variables.js");





let Themes = ["theme-1", "theme-2", "theme-3", "theme-4"];
let nextTheme = "";
let round = 1;
const NextRound = () => {
  if ((0,_state_js__WEBPACK_IMPORTED_MODULE_2__.getWhoWin)()) {
    (0,_state_js__WEBPACK_IMPORTED_MODULE_2__.setTimer)(95);
    _variables_js__WEBPACK_IMPORTED_MODULE_3__.app.classList.add("disable");
    setTimeout(() => {
      _variables_js__WEBPACK_IMPORTED_MODULE_3__.result.innerHTML = "";
      nextTheme = Themes[Math.floor(Math.random() * 4)];

      (0,_startGame_js__WEBPACK_IMPORTED_MODULE_1__.HideGame)("block");
      _variables_js__WEBPACK_IMPORTED_MODULE_3__.result_container.classList.add(nextTheme);
      _variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes.forEach((box) => {
        box.className = "box";
        box.classList.add(nextTheme);
      });
      (0,_startGame_js__WEBPACK_IMPORTED_MODULE_1__.changeColorBoxes)();
      _variables_js__WEBPACK_IMPORTED_MODULE_3__.app.classList.remove("disable");
      ++round;
      (0,_EndGame_js__WEBPACK_IMPORTED_MODULE_0__.reset)(`Round ${round}`);
    }, 3000);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NextRound);


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
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./module/logic.js");


const PlayWithFriend = () => {
  (0,_logic__WEBPACK_IMPORTED_MODULE_0__.Logic)("friend");
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
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./module/logic.js");


const PlayWithPc = () => {
  (0,_logic__WEBPACK_IMPORTED_MODULE_0__.Logic)("computer");
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
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ "./module/variables.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state.js */ "./module/state.js");



const StartTimer = () => {
  let interval = setInterval(() => {
    _variables_js__WEBPACK_IMPORTED_MODULE_0__.timer.style.width = `${(0,_state_js__WEBPACK_IMPORTED_MODULE_1__.getTimer)()}%`;
    _variables_js__WEBPACK_IMPORTED_MODULE_0__.timer.style.height = `${(0,_state_js__WEBPACK_IMPORTED_MODULE_1__.getTimer)()}%`;
    _variables_js__WEBPACK_IMPORTED_MODULE_0__.app.classList.remove("disable");

    _variables_js__WEBPACK_IMPORTED_MODULE_0__.boxes.forEach((box) => {
      box.style.width = `${(0,_state_js__WEBPACK_IMPORTED_MODULE_1__.getTimer)()}%`;
    });

    if ((0,_state_js__WEBPACK_IMPORTED_MODULE_1__.getTimer)() === 0 || (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.getWin)()) {
      clearInterval(interval);
    }

    if ((0,_state_js__WEBPACK_IMPORTED_MODULE_1__.getTimer)() <= 60 && (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.getTimer)() >= 36 && !(0,_state_js__WEBPACK_IMPORTED_MODULE_1__.getWin)() && !(0,_state_js__WEBPACK_IMPORTED_MODULE_1__.getWhoWin)()) {
      _variables_js__WEBPACK_IMPORTED_MODULE_0__.timer.classList.remove("harryup");
      _variables_js__WEBPACK_IMPORTED_MODULE_0__.timer.classList.add("speed");
    } else if ((0,_state_js__WEBPACK_IMPORTED_MODULE_1__.getTimer)() <= 35 && !(0,_state_js__WEBPACK_IMPORTED_MODULE_1__.getWin)()) {
      _variables_js__WEBPACK_IMPORTED_MODULE_0__.timer.classList.remove("speed");
      _variables_js__WEBPACK_IMPORTED_MODULE_0__.timer.classList.add("harryup");
    }

    (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.setTimer)((0,_state_js__WEBPACK_IMPORTED_MODULE_1__.getTimer)() - 1);
  }, 350);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StartTimer);


/***/ }),

/***/ "./module/WinGame.js":
/*!***************************!*\
  !*** ./module/WinGame.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WinGame: () => (/* binding */ WinGame)
/* harmony export */ });
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ "./module/variables.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state.js */ "./module/state.js");
/* harmony import */ var _EndGame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EndGame.js */ "./module/EndGame.js");
// End Game Logic






const WinGame = (...arg) => {
  (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.setWin)(true);
  if ((0,_state_js__WEBPACK_IMPORTED_MODULE_1__.getWin)()) {
    for (let i = 0; i < arg.length; i++) {
      const colorNow = () => {
        const color = (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.getThemeSelected)().includes("theme-1")
          ? "lightseagreen"
          : (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.getThemeSelected)().includes("theme-2")
          ? "#f04"
          : (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.getThemeSelected)().includes("theme-3")
          ? "rebeccapurple"
          : "black";
        return color;
      };
      arg[i].style.backgroundColor = colorNow();
    }
  }

  _variables_js__WEBPACK_IMPORTED_MODULE_0__.result.classList.add("winner");
  _variables_js__WEBPACK_IMPORTED_MODULE_0__.app.classList.add("disable");

  _variables_js__WEBPACK_IMPORTED_MODULE_0__.result.innerHTML = `<img src=${arg[0].children[0].src}/> is Winner`;

  let close = 1;

  let interval = setInterval(() => {
    _variables_js__WEBPACK_IMPORTED_MODULE_0__.result.innerHTML += ".";
    if (close === 3) {
      (0,_EndGame_js__WEBPACK_IMPORTED_MODULE_2__.EndGame)();
      clearInterval(interval);
      (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.setWhoWin)(false);
    }
    ++close;
  }, 1000);
};


/***/ }),

/***/ "./module/logic.js":
/*!*************************!*\
  !*** ./module/logic.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Logic: () => (/* binding */ Logic)
/* harmony export */ });
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.js */ "./module/state.js");
/* harmony import */ var _themes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./themes.js */ "./module/themes.js");
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables.js */ "./module/variables.js");
/* harmony import */ var _NextRound_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NextRound.js */ "./module/NextRound.js");
/* harmony import */ var _MatchColRow_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MatchColRow.js */ "./module/MatchColRow.js");
// Here Logic game put x or o in box and WinGame








const Logic = (playing) => {
  (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.setAlertMessage)("");
  _variables_js__WEBPACK_IMPORTED_MODULE_2__.boxes.forEach((box) => {
    box.onclick = () => {
      if (box.innerHTML.length === 0) {
        _variables_js__WEBPACK_IMPORTED_MODULE_2__.result?.children[0]?.remove();
        if (box.innerHTML.length === 0 && (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.getPlay)() == "x") {
          box.innerHTML = `<img src="${_themes_js__WEBPACK_IMPORTED_MODULE_1__.themeNowX.src}"/>`;
          _variables_js__WEBPACK_IMPORTED_MODULE_2__.result.appendChild(_themes_js__WEBPACK_IMPORTED_MODULE_1__.themeNowO);
          playing != "computer" && (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.setPlay)("o");
          (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.setWhoWin)(false);
        } else if (box.innerHTML.length === 0 && (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.getPlay)() == "o") {
          box.innerHTML = `<img src="${_themes_js__WEBPACK_IMPORTED_MODULE_1__.themeNowO.src}"/>`;

          _variables_js__WEBPACK_IMPORTED_MODULE_2__.result.appendChild(_themes_js__WEBPACK_IMPORTED_MODULE_1__.themeNowX);
          playing != "computer" && (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.setPlay)("x");
          (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.setWhoWin)(false);
        }

        (0,_MatchColRow_js__WEBPACK_IMPORTED_MODULE_4__["default"])();

        // No Any Body Win
        if (
          _variables_js__WEBPACK_IMPORTED_MODULE_2__.boxes[0].innerHTML.length > 0 &&
          _variables_js__WEBPACK_IMPORTED_MODULE_2__.boxes[1].innerHTML.length > 0 &&
          _variables_js__WEBPACK_IMPORTED_MODULE_2__.boxes[2].innerHTML.length > 0 &&
          _variables_js__WEBPACK_IMPORTED_MODULE_2__.boxes[3].innerHTML.length > 0 &&
          _variables_js__WEBPACK_IMPORTED_MODULE_2__.boxes[4].innerHTML.length > 0 &&
          _variables_js__WEBPACK_IMPORTED_MODULE_2__.boxes[5].innerHTML.length > 0 &&
          _variables_js__WEBPACK_IMPORTED_MODULE_2__.boxes[6].innerHTML.length > 0 &&
          _variables_js__WEBPACK_IMPORTED_MODULE_2__.boxes[7].innerHTML.length > 0 &&
          _variables_js__WEBPACK_IMPORTED_MODULE_2__.boxes[8].innerHTML.length > 0
        ) {
          (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.setWhoWin)(true);
          (0,_NextRound_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
        }

        if (playing === "computer") {
          let emptyBoxes = [..._variables_js__WEBPACK_IMPORTED_MODULE_2__.boxes].filter(
            (boxs) => boxs.innerHTML.length === 0
          );

          const randPlay = Math.floor(Math.random() * emptyBoxes.length);

          if (
            emptyBoxes[randPlay]?.innerHTML?.length === 0 &&
            (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.getPlayComputer)() == "x" &&
            !(0,_state_js__WEBPACK_IMPORTED_MODULE_0__.getWin)()
          ) {
            emptyBoxes[randPlay].innerHTML = `<img src="${_themes_js__WEBPACK_IMPORTED_MODULE_1__.themeNowX.src}"/>`;

            _variables_js__WEBPACK_IMPORTED_MODULE_2__.result.innerHTML = `You:<img src="${_themes_js__WEBPACK_IMPORTED_MODULE_1__.themeNowO.src}"/>PC:<img src="${_themes_js__WEBPACK_IMPORTED_MODULE_1__.themeNowX.src}"/>`;
            (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.setWhoWin)();
          } else if (
            emptyBoxes[randPlay]?.innerHTML?.length === 0 &&
            (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.getPlayComputer)() == "o" &&
            !(0,_state_js__WEBPACK_IMPORTED_MODULE_0__.getWin)()
          ) {
            _variables_js__WEBPACK_IMPORTED_MODULE_2__.result.innerHTML = `You:<img src="${_themes_js__WEBPACK_IMPORTED_MODULE_1__.themeNowX.src}"/>PC:<img src="${_themes_js__WEBPACK_IMPORTED_MODULE_1__.themeNowO.src}"/>`;
            emptyBoxes[randPlay].innerHTML = `<img src="${_themes_js__WEBPACK_IMPORTED_MODULE_1__.themeNowO.src}"/>`;

            (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.setWhoWin)(false);
          }
          (0,_MatchColRow_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
        }
      }
    };
  });
};


/***/ }),

/***/ "./module/startGame.js":
/*!*****************************!*\
  !*** ./module/startGame.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HandleBTNStart: () => (/* binding */ HandleBTNStart),
/* harmony export */   HideGame: () => (/* binding */ HideGame),
/* harmony export */   changeColorBoxes: () => (/* binding */ changeColorBoxes),
/* harmony export */   startGame: () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.js */ "./module/state.js");
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables.js */ "./module/variables.js");
/* harmony import */ var _StartTimer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StartTimer.js */ "./module/StartTimer.js");
/* harmony import */ var _PlayWithFriend_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlayWithFriend.js */ "./module/PlayWithFriend.js");
/* harmony import */ var _PlayWithPc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PlayWithPc.js */ "./module/PlayWithPc.js");







// Hide Start Game
const startGame = () => {
  _variables_js__WEBPACK_IMPORTED_MODULE_1__.name?.value?.length === 0 && HideGame("none");
};

// Hide Game
const HideGame = (status) => {
  _variables_js__WEBPACK_IMPORTED_MODULE_1__.game_container.style.display = status;
};

// HandleError
const HandleError = () => {
  if ((0,_state_js__WEBPACK_IMPORTED_MODULE_0__.getAlertMessage)()) {
    _variables_js__WEBPACK_IMPORTED_MODULE_1__.erorrElement.innerHTML = (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.getAlertMessage)();
  }
};

const changeColorBoxes = () => {
  (0,_StartTimer_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  _variables_js__WEBPACK_IMPORTED_MODULE_1__.boxes.forEach((box) => {
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
  _variables_js__WEBPACK_IMPORTED_MODULE_1__.app.classList.remove("disable");
};

// Handle BTn Start
const HandleBTNStart = (playing) => {
  if (_variables_js__WEBPACK_IMPORTED_MODULE_1__.name.value === "") {
    (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.setAlertMessage)("You Must Fill Your Name");
  } else if ((0,_state_js__WEBPACK_IMPORTED_MODULE_0__.getThemeSelected)() === "") {
    (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.setAlertMessage)("You Must Select Your Theme");
  } else if ((0,_state_js__WEBPACK_IMPORTED_MODULE_0__.getPlay)() === "") {
    (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.setAlertMessage)("You Must Select X or O");
  } else {
    _variables_js__WEBPACK_IMPORTED_MODULE_1__.startGameArea.style.display = "none";
    _variables_js__WEBPACK_IMPORTED_MODULE_1__.nameArea.textContent = _variables_js__WEBPACK_IMPORTED_MODULE_1__.name.value;
    HideGame("block");
    (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.setAlertMessage)("");
    changeColorBoxes();

    playing.includes("friend") ? (0,_PlayWithFriend_js__WEBPACK_IMPORTED_MODULE_3__["default"])() : (0,_PlayWithPc_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  }
  HandleError();
};

_variables_js__WEBPACK_IMPORTED_MODULE_1__.playWithFriend.addEventListener("click", () =>
  HandleBTNStart("friend")
);
_variables_js__WEBPACK_IMPORTED_MODULE_1__.playWithComputer.addEventListener("click", () =>
  HandleBTNStart("computer")
);


/***/ }),

/***/ "./module/state.js":
/*!*************************!*\
  !*** ./module/state.js ***!
  \*************************/
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
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ "./module/variables.js");
/* harmony import */ var _images_player_x_close_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/player_x/close.png */ "./images/player_x/close.png");
/* harmony import */ var _images_player_x_x_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/player_x/x.png */ "./images/player_x/x.png");
/* harmony import */ var _images_player_x_pharmacy_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/player_x/pharmacy.png */ "./images/player_x/pharmacy.png");
/* harmony import */ var _images_player_x_no_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/player_x/no.png */ "./images/player_x/no.png");
/* harmony import */ var _images_player_o_o_1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/player_o/o (1).png */ "./images/player_o/o (1).png");
/* harmony import */ var _images_player_o_letter_o_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/player_o/letter-o.png */ "./images/player_o/letter-o.png");
/* harmony import */ var _images_player_o_o_2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/player_o/o (2).png */ "./images/player_o/o (2).png");
/* harmony import */ var _images_player_o_o_3_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/player_o/o (3).png */ "./images/player_o/o (3).png");
/* harmony import */ var _images_border_leaf_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/border-leaf.png */ "./images/border-leaf.png");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./state.js */ "./module/state.js");
/* harmony import */ var _NextRound_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./NextRound.js */ "./module/NextRound.js");














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
  (0,_NextRound_js__WEBPACK_IMPORTED_MODULE_11__["default"])();
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

/***/ "./images/bg-btn-start.jpg":
/*!*********************************!*\
  !*** ./images/bg-btn-start.jpg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/bg-btn-start.jpg");

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

/***/ "./images/themes/bg-theme-1.jpg":
/*!**************************************!*\
  !*** ./images/themes/bg-theme-1.jpg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/bg-theme-1.jpg");

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
/* harmony import */ var _module_themes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/themes.js */ "./module/themes.js");
/* harmony import */ var _module_startGame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/startGame.js */ "./module/startGame.js");
/* harmony import */ var _module_ChooseX_O_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/ChooseX_O.js */ "./module/ChooseX_O.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./style.css");
/* harmony import */ var _module_ApplyTheme_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/ApplyTheme.js */ "./module/ApplyTheme.js");






_module_themes_js__WEBPACK_IMPORTED_MODULE_0__.SetTheme(_module_themes_js__WEBPACK_IMPORTED_MODULE_0__.themeNowX, _module_themes_js__WEBPACK_IMPORTED_MODULE_0__.themeNowO);
(0,_module_startGame_js__WEBPACK_IMPORTED_MODULE_1__.startGame)();
(0,_module_ApplyTheme_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_module_ChooseX_O_js__WEBPACK_IMPORTED_MODULE_2__.ChooseTicOrToc)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7QUNBN0Q7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCNEM7QUFDTTtBQUNLO0FBQ3ZCO0FBQ2lCO0FBQ2pEO0FBQ0EsdURBQWMsQ0FBQyx3REFBZSxFQUFFLHdEQUFlO0FBQy9DLCtEQUFTO0FBQ1QsaUVBQVc7QUFDWCxvRUFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3hvX2dhbWUvLi9tb2R1bGUvQXBwbHlUaGVtZS5qcyIsIndlYnBhY2s6Ly94b19nYW1lLy4vbW9kdWxlL0Nob29zZVhfTy5qcyIsIndlYnBhY2s6Ly94b19nYW1lLy4vbW9kdWxlL0VuZEdhbWUuanMiLCJ3ZWJwYWNrOi8veG9fZ2FtZS8uL21vZHVsZS9NYXRjaENvbFJvdy5qcyIsIndlYnBhY2s6Ly94b19nYW1lLy4vbW9kdWxlL05leHRSb3VuZC5qcyIsIndlYnBhY2s6Ly94b19nYW1lLy4vbW9kdWxlL1BsYXlXaXRoRnJpZW5kLmpzIiwid2VicGFjazovL3hvX2dhbWUvLi9tb2R1bGUvUGxheVdpdGhQYy5qcyIsIndlYnBhY2s6Ly94b19nYW1lLy4vbW9kdWxlL1N0YXJ0VGltZXIuanMiLCJ3ZWJwYWNrOi8veG9fZ2FtZS8uL21vZHVsZS9XaW5HYW1lLmpzIiwid2VicGFjazovL3hvX2dhbWUvLi9tb2R1bGUvbG9naWMuanMiLCJ3ZWJwYWNrOi8veG9fZ2FtZS8uL21vZHVsZS9zdGFydEdhbWUuanMiLCJ3ZWJwYWNrOi8veG9fZ2FtZS8uL21vZHVsZS9zdGF0ZS5qcyIsIndlYnBhY2s6Ly94b19nYW1lLy4vbW9kdWxlL3RoZW1lcy5qcyIsIndlYnBhY2s6Ly94b19nYW1lLy4vbW9kdWxlL3ZhcmlhYmxlcy5qcyIsIndlYnBhY2s6Ly94b19nYW1lLy4vaW1hZ2VzL2JnLWJ0bi1zdGFydC5qcGciLCJ3ZWJwYWNrOi8veG9fZ2FtZS8uL2ltYWdlcy9ib3JkZXItbGVhZi5wbmciLCJ3ZWJwYWNrOi8veG9fZ2FtZS8uL2ltYWdlcy9wbGF5ZXJfby9sZXR0ZXItby5wbmciLCJ3ZWJwYWNrOi8veG9fZ2FtZS8uL2ltYWdlcy9wbGF5ZXJfby9vICgxKS5wbmciLCJ3ZWJwYWNrOi8veG9fZ2FtZS8uL2ltYWdlcy9wbGF5ZXJfby9vICgyKS5wbmciLCJ3ZWJwYWNrOi8veG9fZ2FtZS8uL2ltYWdlcy9wbGF5ZXJfby9vICgzKS5wbmciLCJ3ZWJwYWNrOi8veG9fZ2FtZS8uL2ltYWdlcy9wbGF5ZXJfeC9jbG9zZS5wbmciLCJ3ZWJwYWNrOi8veG9fZ2FtZS8uL2ltYWdlcy9wbGF5ZXJfeC9uby5wbmciLCJ3ZWJwYWNrOi8veG9fZ2FtZS8uL2ltYWdlcy9wbGF5ZXJfeC9waGFybWFjeS5wbmciLCJ3ZWJwYWNrOi8veG9fZ2FtZS8uL2ltYWdlcy9wbGF5ZXJfeC94LnBuZyIsIndlYnBhY2s6Ly94b19nYW1lLy4vaW1hZ2VzL3RoZW1lcy9iZy10aGVtZS0xLmpwZyIsIndlYnBhY2s6Ly94b19nYW1lLy4vaW1hZ2VzL3RoZW1lcy90aGVtZS0xLlBORyIsIndlYnBhY2s6Ly94b19nYW1lLy4vaW1hZ2VzL3RoZW1lcy90aGVtZS0yLlBORyIsIndlYnBhY2s6Ly94b19nYW1lLy4vaW1hZ2VzL3RoZW1lcy90aGVtZS0zLlBORyIsIndlYnBhY2s6Ly94b19nYW1lLy4vaW1hZ2VzL3RoZW1lcy90aGVtZS00LlBORyIsIndlYnBhY2s6Ly94b19nYW1lLy4vc3R5bGUuY3NzPzY0MjkiLCJ3ZWJwYWNrOi8veG9fZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly94b19nYW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly94b19nYW1lL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8veG9fZ2FtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3hvX2dhbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly94b19nYW1lL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3hvX2dhbWUvLi9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaGVtZUFyZWFPbmUgZnJvbSBcIi4uL2ltYWdlcy90aGVtZXMvdGhlbWUtMS5QTkdcIjtcclxuaW1wb3J0IFRoZW1lQXJlYVR3byBmcm9tIFwiLi4vaW1hZ2VzL3RoZW1lcy90aGVtZS0yLlBOR1wiO1xyXG5pbXBvcnQgVGhlbWVBcmVhVGhyZWUgZnJvbSBcIi4uL2ltYWdlcy90aGVtZXMvdGhlbWUtMy5QTkdcIjtcclxuaW1wb3J0IFRoZW1lQXJlYUZvdXIgZnJvbSBcIi4uL2ltYWdlcy90aGVtZXMvdGhlbWUtNC5QTkdcIjtcclxuaW1wb3J0IGJ0blN0YXJ0SW1nIGZyb20gXCIuLi9pbWFnZXMvYmctYnRuLXN0YXJ0LmpwZ1wiO1xyXG5pbXBvcnQgbGVhZkltZyBmcm9tIFwiLi4vaW1hZ2VzL2JvcmRlci1sZWFmLnBuZ1wiO1xyXG5pbXBvcnQgeyBhcHAsIGJ0blN0YXJ0LCB0aGVtZXMgfSBmcm9tIFwiLi92YXJpYWJsZXMuanNcIjtcclxuaW1wb3J0IHsgZ2V0VGhlbWVTZWxlY3RlZCB9IGZyb20gXCIuL3N0YXRlXCI7XHJcbmltcG9ydCB0aGVtZUJnQm9keU9uZSBmcm9tIFwiLi4vaW1hZ2VzL3RoZW1lcy9iZy10aGVtZS0xLmpwZ1wiO1xyXG5cclxuY29uc3QgdGhlbWVBcmVhID0gW1RoZW1lQXJlYU9uZSwgVGhlbWVBcmVhVHdvLCBUaGVtZUFyZWFUaHJlZSwgVGhlbWVBcmVhRm91cl07XHJcblxyXG5jb25zdCBBcHBseVRoZW1lcyA9ICgpID0+IHtcclxuICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke3RoZW1lQmdCb2R5T25lfVwiKWA7XHJcbiAgYXBwLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke3RoZW1lQmdCb2R5T25lfVwiKWA7XHJcbiAgdGhlbWVzLmZvckVhY2goKHRoZW1lLCBpbmRleCkgPT4ge1xyXG4gICAgdGhlbWUuc3JjID0gdGhlbWVBcmVhW2luZGV4XTtcclxuICAgIHRoZW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcclxuICAgICAgIXRoZW1lLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKVxyXG4gICAgICAgID8gKHRoZW1lLnN0eWxlLmJvcmRlckltYWdlID0gYHVybCgke2xlYWZJbWd9KSAxMGApXHJcbiAgICAgICAgOiBcIlwiO1xyXG4gICAgfSk7XHJcbiAgICB0aGVtZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XHJcbiAgICAgICF0aGVtZS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIilcclxuICAgICAgICA/ICh0aGVtZS5zdHlsZS5ib3JkZXJJbWFnZSA9IFwibm9uZVwiKVxyXG4gICAgICAgIDogXCJcIjtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwbHlUaGVtZXM7XHJcbiIsIi8vIGhlcmUgY2hvb3NlIHggb3IgbyB3aGVuIG9uY2xpY2sgb24gd29yZCBjaG9vc2UgeCBvciBvXHJcblxyXG5pbXBvcnQgKiBhcyB2YXJpYWJsZXMgZnJvbSBcIi4vdmFyaWFibGVzLmpzXCI7XHJcbmltcG9ydCB7IGdldFBsYXksIHNldFBsYXksIHNldFBsYXlDb21wdXRlciB9IGZyb20gXCIuL3N0YXRlLmpzXCI7XHJcbmltcG9ydCB7IHN0YXJ0R2FtZSB9IGZyb20gXCIuL3N0YXJ0R2FtZS5qc1wiO1xyXG5cclxuLy8gRW50ZXIgVG8gR2FtZSBGdW5jdGlvbmFsaXR5XHJcbmNvbnN0IEVudGVyVG9HYW1lID0gKCkgPT4ge1xyXG4gIGdldFBsYXkoKSAmJiB2YXJpYWJsZXMubmFtZS52YWx1ZS5sZW5ndGggPiAwID8gc3RhcnRHYW1lKFwibm9uZVwiKSA6IFwiXCI7XHJcbn07XHJcblxyXG4vLyBDaG9vc2UgWCBvciBPXHJcbmV4cG9ydCBjb25zdCBDaG9vc2VUaWNPclRvYyA9IChwbGF5ZXIpID0+IHtcclxuICBzd2l0Y2ggKHBsYXllcikge1xyXG4gICAgY2FzZSB2YXJpYWJsZXMueDpcclxuICAgICAgdmFyaWFibGVzLm8uc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XHJcbiAgICAgIHZhcmlhYmxlcy54LnN0eWxlLmNvbG9yID0gXCIjZjA1XCI7XHJcbiAgICAgIHNldFBsYXkoXCJ4XCIpO1xyXG4gICAgICBzZXRQbGF5Q29tcHV0ZXIoXCJvXCIpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgdmFyaWFibGVzLm86XHJcbiAgICAgIHZhcmlhYmxlcy54LnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xyXG4gICAgICB2YXJpYWJsZXMuby5zdHlsZS5jb2xvciA9IFwiI2YwNVwiO1xyXG4gICAgICBzZXRQbGF5KFwib1wiKTtcclxuICAgICAgc2V0UGxheUNvbXB1dGVyKFwieFwiKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG4gIEVudGVyVG9HYW1lKCk7XHJcbn07XHJcblxyXG52YXJpYWJsZXMueC5vbmNsaWNrID0gKCkgPT4gQ2hvb3NlVGljT3JUb2ModmFyaWFibGVzLngpO1xyXG52YXJpYWJsZXMuby5vbmNsaWNrID0gKCkgPT4gQ2hvb3NlVGljT3JUb2ModmFyaWFibGVzLm8pO1xyXG4iLCJpbXBvcnQgeyBIaWRlR2FtZSB9IGZyb20gXCIuL3N0YXJ0R2FtZS5qc1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldFRoZW1lU2VsZWN0ZWQsXHJcbiAgZ2V0V2hvV2luLFxyXG4gIHNldEFsZXJ0TWVzc2FnZSxcclxuICBzZXRQbGF5LFxyXG4gIHNldFRoZW1lTmV4dCxcclxuICBzZXRUaGVtZVNlbGVjdGVkLFxyXG4gIHNldFRpbWVyLFxyXG4gIHNldFdpbixcclxufSBmcm9tIFwiLi9zdGF0ZS5qc1wiO1xyXG5pbXBvcnQgeyB0aGVtZU5vd08sIHRoZW1lTm93WCB9IGZyb20gXCIuL3RoZW1lcy5qc1wiO1xyXG5pbXBvcnQge1xyXG4gIGJveGVzLFxyXG4gIG5hbWUsXHJcbiAgcmVzdWx0LFxyXG4gIHN0YXJ0R2FtZUFyZWEsXHJcbiAgdGhlbWVzLFxyXG4gIHgsXHJcbiAgbyxcclxuICB0aW1lcixcclxufSBmcm9tIFwiLi92YXJpYWJsZXMuanNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZXNldCA9ICh0ZXh0KSA9PiB7XHJcbiAgc2V0VGhlbWVTZWxlY3RlZChcIlwiKTtcclxuICBzZXRBbGVydE1lc3NhZ2UoXCJcIik7XHJcbiAgYm94ZXMuZm9yRWFjaCgoYm94KSA9PiAoYm94LmlubmVySFRNTCA9IFwiXCIpKTtcclxuICB0aW1lci5jbGFzc05hbWUgPSBcIlwiO1xyXG5cclxuICBuYW1lLnZhbHVlID0gXCJcIjtcclxuICBjb25zdCBkaXZDb2xsZWN0aW9uWE8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHRleHRHYW1lID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCk7XHJcbiAgZGl2Q29sbGVjdGlvblhPLmFwcGVuZENoaWxkKHRoZW1lTm93WCk7XHJcbiAgZGl2Q29sbGVjdGlvblhPLmFwcGVuZENoaWxkKHRoZW1lTm93Tyk7XHJcbiAgZGl2Q29sbGVjdGlvblhPLmFwcGVuZENoaWxkKHRleHRHYW1lKTtcclxuXHJcbiAgcmVzdWx0LmFwcGVuZENoaWxkKGRpdkNvbGxlY3Rpb25YTyk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRW5kR2FtZSA9ICgpID0+IHtcclxuICByZXNldChcIkdhbWVcIik7XHJcbiAgcmVzdWx0LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgdGhlbWVzLmZvckVhY2goKHRoZW1lKSA9PiB7XHJcbiAgICB0aGVtZS5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgdGhlbWUuc3R5bGUuYm9yZGVySW1hZ2UgPSBcIm5vbmVcIjtcclxuICB9KTtcclxuICBzdGFydEdhbWVBcmVhLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgeC5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcclxuICBvLnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xyXG5cclxuICBuYW1lLnZhbHVlID0gXCJcIjtcclxuICBIaWRlR2FtZShcIm5vbmVcIik7XHJcbiAgc2V0V2luKGZhbHNlKTtcclxuICBzZXRUaW1lcig5NSk7XHJcbiAgc2V0VGhlbWVOZXh0KFwiXCIpO1xyXG4gIHNldFBsYXkoXCJcIik7XHJcbn07XHJcbiIsImltcG9ydCB7IFdpbkdhbWUgfSBmcm9tIFwiLi9XaW5HYW1lXCI7XHJcbmltcG9ydCB7IGJveGVzIH0gZnJvbSBcIi4vdmFyaWFibGVzXCI7XHJcblxyXG5jb25zdCBNYXRjaENvbHNBbmRSb3dzID0gKCkgPT4ge1xyXG4gIC8vIFJvd3NcclxuICBmdW5jdGlvbiBSb3dzKFJvd09uZSwgUm93VHdvLCBSb3dUaHJlZSkge1xyXG4gICAgaWYgKFxyXG4gICAgICBib3hlc1tSb3dPbmVdLmlubmVySFRNTCA9PSBib3hlc1tSb3dUd29dLmlubmVySFRNTCAmJlxyXG4gICAgICBib3hlc1tSb3dUd29dLmlubmVySFRNTCA9PSBib3hlc1tSb3dUaHJlZV0uaW5uZXJIVE1MICYmXHJcbiAgICAgIGJveGVzW1Jvd09uZV0uaW5uZXJIVE1sICE9IFwiXCIgJiZcclxuICAgICAgYm94ZXNbUm93VHdvXS5pbm5lckhUTUwgIT0gXCJcIlxyXG4gICAgKSB7XHJcbiAgICAgIFdpbkdhbWUoYm94ZXNbUm93T25lXSwgYm94ZXNbUm93T25lXSwgYm94ZXNbUm93VGhyZWVdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIFJvd3MoMiwgNiwgNCk7XHJcbiAgUm93cygyLCA0LCA2KTtcclxuICBSb3dzKDAsIDQsIDgpO1xyXG4gIFJvd3MoMCwgOCwgNCk7XHJcblxyXG4gIC8vIGNvbHVtbnNcclxuICBjb25zdCBDb2x1bW5zID0gKENvbE9uZSwgQ29sVHdvLCBDb2xUaHJlZSkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBib3hlc1tDb2xPbmVdLmlubmVySFRNTCA9PSBib3hlc1tDb2xUd29dLmlubmVySFRNTCAmJlxyXG4gICAgICBib3hlc1tDb2xUd29dLmlubmVySFRNTCA9PSBib3hlc1tDb2xUaHJlZV0uaW5uZXJIVE1MICYmXHJcbiAgICAgIGJveGVzW0NvbFRocmVlXS5pbm5lckhUTWwgIT0gXCJcIiAmJlxyXG4gICAgICBib3hlc1tDb2xUd29dLmlubmVySFRNTCAhPSBcIlwiXHJcbiAgICApIHtcclxuICAgICAgV2luR2FtZShib3hlc1tDb2xPbmVdLCBib3hlc1tDb2xUd29dLCBib3hlc1tDb2xUaHJlZV0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIENvbHVtbnMoMCwgMywgNik7XHJcbiAgQ29sdW1ucygwLCAxLCAyKTtcclxuICBDb2x1bW5zKDYsIDcsIDgpO1xyXG4gIENvbHVtbnMoMSwgNCwgNyk7XHJcbiAgQ29sdW1ucygzLCA0LCA1KTtcclxuICBDb2x1bW5zKDIsIDUsIDgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWF0Y2hDb2xzQW5kUm93cztcclxuIiwiaW1wb3J0IHsgcmVzZXQgfSBmcm9tIFwiLi9FbmRHYW1lLmpzXCI7XHJcbmltcG9ydCB7IEhpZGVHYW1lLCBjaGFuZ2VDb2xvckJveGVzIH0gZnJvbSBcIi4vc3RhcnRHYW1lLmpzXCI7XHJcbmltcG9ydCB7IGdldFdob1dpbiwgc2V0VGltZXIsIHNldFdob1dpbiB9IGZyb20gXCIuL3N0YXRlLmpzXCI7XHJcbmltcG9ydCB7IGFwcCwgYm94ZXMsIHJlc3VsdCwgcmVzdWx0X2NvbnRhaW5lciB9IGZyb20gXCIuL3ZhcmlhYmxlcy5qc1wiO1xyXG5cclxubGV0IFRoZW1lcyA9IFtcInRoZW1lLTFcIiwgXCJ0aGVtZS0yXCIsIFwidGhlbWUtM1wiLCBcInRoZW1lLTRcIl07XHJcbmxldCBuZXh0VGhlbWUgPSBcIlwiO1xyXG5sZXQgcm91bmQgPSAxO1xyXG5jb25zdCBOZXh0Um91bmQgPSAoKSA9PiB7XHJcbiAgaWYgKGdldFdob1dpbigpKSB7XHJcbiAgICBzZXRUaW1lcig5NSk7XHJcbiAgICBhcHAuY2xhc3NMaXN0LmFkZChcImRpc2FibGVcIik7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgcmVzdWx0LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgIG5leHRUaGVtZSA9IFRoZW1lc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KV07XHJcblxyXG4gICAgICBIaWRlR2FtZShcImJsb2NrXCIpO1xyXG4gICAgICByZXN1bHRfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQobmV4dFRoZW1lKTtcclxuICAgICAgYm94ZXMuZm9yRWFjaCgoYm94KSA9PiB7XHJcbiAgICAgICAgYm94LmNsYXNzTmFtZSA9IFwiYm94XCI7XHJcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQobmV4dFRoZW1lKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNoYW5nZUNvbG9yQm94ZXMoKTtcclxuICAgICAgYXBwLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlXCIpO1xyXG4gICAgICArK3JvdW5kO1xyXG4gICAgICByZXNldChgUm91bmQgJHtyb3VuZH1gKTtcclxuICAgIH0sIDMwMDApO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5leHRSb3VuZDtcclxuIiwiaW1wb3J0IHsgTG9naWMgfSBmcm9tIFwiLi9sb2dpY1wiO1xyXG5cclxuY29uc3QgUGxheVdpdGhGcmllbmQgPSAoKSA9PiB7XHJcbiAgTG9naWMoXCJmcmllbmRcIik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5V2l0aEZyaWVuZDtcclxuIiwiaW1wb3J0IHsgTG9naWMgfSBmcm9tIFwiLi9sb2dpY1wiO1xyXG5cclxuY29uc3QgUGxheVdpdGhQYyA9ICgpID0+IHtcclxuICBMb2dpYyhcImNvbXB1dGVyXCIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheVdpdGhQYztcclxuIiwiaW1wb3J0ICogYXMgdmFyaWFibGVzIGZyb20gXCIuL3ZhcmlhYmxlcy5qc1wiO1xyXG5pbXBvcnQgeyBib3hlcyB9IGZyb20gXCIuL3ZhcmlhYmxlcy5qc1wiO1xyXG5pbXBvcnQgeyBnZXRXaW4sIGdldFdob1dpbiwgZ2V0VGltZXIsIHNldFRpbWVyIH0gZnJvbSBcIi4vc3RhdGUuanNcIjtcclxuY29uc3QgU3RhcnRUaW1lciA9ICgpID0+IHtcclxuICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICB2YXJpYWJsZXMudGltZXIuc3R5bGUud2lkdGggPSBgJHtnZXRUaW1lcigpfSVgO1xyXG4gICAgdmFyaWFibGVzLnRpbWVyLnN0eWxlLmhlaWdodCA9IGAke2dldFRpbWVyKCl9JWA7XHJcbiAgICB2YXJpYWJsZXMuYXBwLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlXCIpO1xyXG5cclxuICAgIGJveGVzLmZvckVhY2goKGJveCkgPT4ge1xyXG4gICAgICBib3guc3R5bGUud2lkdGggPSBgJHtnZXRUaW1lcigpfSVgO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGdldFRpbWVyKCkgPT09IDAgfHwgZ2V0V2luKCkpIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGdldFRpbWVyKCkgPD0gNjAgJiYgZ2V0VGltZXIoKSA+PSAzNiAmJiAhZ2V0V2luKCkgJiYgIWdldFdob1dpbigpKSB7XHJcbiAgICAgIHZhcmlhYmxlcy50aW1lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGFycnl1cFwiKTtcclxuICAgICAgdmFyaWFibGVzLnRpbWVyLmNsYXNzTGlzdC5hZGQoXCJzcGVlZFwiKTtcclxuICAgIH0gZWxzZSBpZiAoZ2V0VGltZXIoKSA8PSAzNSAmJiAhZ2V0V2luKCkpIHtcclxuICAgICAgdmFyaWFibGVzLnRpbWVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzcGVlZFwiKTtcclxuICAgICAgdmFyaWFibGVzLnRpbWVyLmNsYXNzTGlzdC5hZGQoXCJoYXJyeXVwXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRpbWVyKGdldFRpbWVyKCkgLSAxKTtcclxuICB9LCAzNTApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhcnRUaW1lcjtcclxuIiwiLy8gRW5kIEdhbWUgTG9naWNcclxuXHJcbmltcG9ydCB7IHJlc3VsdCwgYXBwIH0gZnJvbSBcIi4vdmFyaWFibGVzLmpzXCI7XHJcbmltcG9ydCB7IGdldFdpbiwgc2V0V2hvV2luLCBzZXRXaW4gfSBmcm9tIFwiLi9zdGF0ZS5qc1wiO1xyXG5pbXBvcnQgeyBnZXRUaGVtZVNlbGVjdGVkIH0gZnJvbSBcIi4vc3RhdGUuanNcIjtcclxuaW1wb3J0IHsgRW5kR2FtZSB9IGZyb20gXCIuL0VuZEdhbWUuanNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBXaW5HYW1lID0gKC4uLmFyZykgPT4ge1xyXG4gIHNldFdpbih0cnVlKTtcclxuICBpZiAoZ2V0V2luKCkpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJnLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGNvbG9yTm93ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbG9yID0gZ2V0VGhlbWVTZWxlY3RlZCgpLmluY2x1ZGVzKFwidGhlbWUtMVwiKVxyXG4gICAgICAgICAgPyBcImxpZ2h0c2VhZ3JlZW5cIlxyXG4gICAgICAgICAgOiBnZXRUaGVtZVNlbGVjdGVkKCkuaW5jbHVkZXMoXCJ0aGVtZS0yXCIpXHJcbiAgICAgICAgICA/IFwiI2YwNFwiXHJcbiAgICAgICAgICA6IGdldFRoZW1lU2VsZWN0ZWQoKS5pbmNsdWRlcyhcInRoZW1lLTNcIilcclxuICAgICAgICAgID8gXCJyZWJlY2NhcHVycGxlXCJcclxuICAgICAgICAgIDogXCJibGFja1wiO1xyXG4gICAgICAgIHJldHVybiBjb2xvcjtcclxuICAgICAgfTtcclxuICAgICAgYXJnW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yTm93KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXN1bHQuY2xhc3NMaXN0LmFkZChcIndpbm5lclwiKTtcclxuICBhcHAuY2xhc3NMaXN0LmFkZChcImRpc2FibGVcIik7XHJcblxyXG4gIHJlc3VsdC5pbm5lckhUTUwgPSBgPGltZyBzcmM9JHthcmdbMF0uY2hpbGRyZW5bMF0uc3JjfS8+IGlzIFdpbm5lcmA7XHJcblxyXG4gIGxldCBjbG9zZSA9IDE7XHJcblxyXG4gIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgIHJlc3VsdC5pbm5lckhUTUwgKz0gXCIuXCI7XHJcbiAgICBpZiAoY2xvc2UgPT09IDMpIHtcclxuICAgICAgRW5kR2FtZSgpO1xyXG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgc2V0V2hvV2luKGZhbHNlKTtcclxuICAgIH1cclxuICAgICsrY2xvc2U7XHJcbiAgfSwgMTAwMCk7XHJcbn07XHJcbiIsIi8vIEhlcmUgTG9naWMgZ2FtZSBwdXQgeCBvciBvIGluIGJveCBhbmQgV2luR2FtZVxyXG5cclxuaW1wb3J0IHtcclxuICBnZXRQbGF5LFxyXG4gIGdldFBsYXlDb21wdXRlcixcclxuICBnZXRXaW4sXHJcbiAgc2V0QWxlcnRNZXNzYWdlLFxyXG4gIHNldFBsYXksXHJcbn0gZnJvbSBcIi4vc3RhdGUuanNcIjtcclxuaW1wb3J0IHsgdGhlbWVOb3dPLCB0aGVtZU5vd1ggfSBmcm9tIFwiLi90aGVtZXMuanNcIjtcclxuaW1wb3J0IHsgYm94ZXMsIHJlc3VsdCB9IGZyb20gXCIuL3ZhcmlhYmxlcy5qc1wiO1xyXG5pbXBvcnQgeyBzZXRXaG9XaW4gfSBmcm9tIFwiLi9zdGF0ZS5qc1wiO1xyXG5pbXBvcnQgTmV4dFJvdW5kIGZyb20gXCIuL05leHRSb3VuZC5qc1wiO1xyXG5pbXBvcnQgTWF0Y2hDb2xzQW5kUm93cyBmcm9tIFwiLi9NYXRjaENvbFJvdy5qc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvZ2ljID0gKHBsYXlpbmcpID0+IHtcclxuICBzZXRBbGVydE1lc3NhZ2UoXCJcIik7XHJcbiAgYm94ZXMuZm9yRWFjaCgoYm94KSA9PiB7XHJcbiAgICBib3gub25jbGljayA9ICgpID0+IHtcclxuICAgICAgaWYgKGJveC5pbm5lckhUTUwubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmVzdWx0Py5jaGlsZHJlblswXT8ucmVtb3ZlKCk7XHJcbiAgICAgICAgaWYgKGJveC5pbm5lckhUTUwubGVuZ3RoID09PSAwICYmIGdldFBsYXkoKSA9PSBcInhcIikge1xyXG4gICAgICAgICAgYm94LmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7dGhlbWVOb3dYLnNyY31cIi8+YDtcclxuICAgICAgICAgIHJlc3VsdC5hcHBlbmRDaGlsZCh0aGVtZU5vd08pO1xyXG4gICAgICAgICAgcGxheWluZyAhPSBcImNvbXB1dGVyXCIgJiYgc2V0UGxheShcIm9cIik7XHJcbiAgICAgICAgICBzZXRXaG9XaW4oZmFsc2UpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYm94LmlubmVySFRNTC5sZW5ndGggPT09IDAgJiYgZ2V0UGxheSgpID09IFwib1wiKSB7XHJcbiAgICAgICAgICBib3guaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHt0aGVtZU5vd08uc3JjfVwiLz5gO1xyXG5cclxuICAgICAgICAgIHJlc3VsdC5hcHBlbmRDaGlsZCh0aGVtZU5vd1gpO1xyXG4gICAgICAgICAgcGxheWluZyAhPSBcImNvbXB1dGVyXCIgJiYgc2V0UGxheShcInhcIik7XHJcbiAgICAgICAgICBzZXRXaG9XaW4oZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTWF0Y2hDb2xzQW5kUm93cygpO1xyXG5cclxuICAgICAgICAvLyBObyBBbnkgQm9keSBXaW5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBib3hlc1swXS5pbm5lckhUTUwubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgYm94ZXNbMV0uaW5uZXJIVE1MLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgIGJveGVzWzJdLmlubmVySFRNTC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICBib3hlc1szXS5pbm5lckhUTUwubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgYm94ZXNbNF0uaW5uZXJIVE1MLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgIGJveGVzWzVdLmlubmVySFRNTC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICBib3hlc1s2XS5pbm5lckhUTUwubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgYm94ZXNbN10uaW5uZXJIVE1MLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgIGJveGVzWzhdLmlubmVySFRNTC5sZW5ndGggPiAwXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBzZXRXaG9XaW4odHJ1ZSk7XHJcbiAgICAgICAgICBOZXh0Um91bmQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwbGF5aW5nID09PSBcImNvbXB1dGVyXCIpIHtcclxuICAgICAgICAgIGxldCBlbXB0eUJveGVzID0gWy4uLmJveGVzXS5maWx0ZXIoXHJcbiAgICAgICAgICAgIChib3hzKSA9PiBib3hzLmlubmVySFRNTC5sZW5ndGggPT09IDBcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgY29uc3QgcmFuZFBsYXkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlbXB0eUJveGVzLmxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBlbXB0eUJveGVzW3JhbmRQbGF5XT8uaW5uZXJIVE1MPy5sZW5ndGggPT09IDAgJiZcclxuICAgICAgICAgICAgZ2V0UGxheUNvbXB1dGVyKCkgPT0gXCJ4XCIgJiZcclxuICAgICAgICAgICAgIWdldFdpbigpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgZW1wdHlCb3hlc1tyYW5kUGxheV0uaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHt0aGVtZU5vd1guc3JjfVwiLz5gO1xyXG5cclxuICAgICAgICAgICAgcmVzdWx0LmlubmVySFRNTCA9IGBZb3U6PGltZyBzcmM9XCIke3RoZW1lTm93Ty5zcmN9XCIvPlBDOjxpbWcgc3JjPVwiJHt0aGVtZU5vd1guc3JjfVwiLz5gO1xyXG4gICAgICAgICAgICBzZXRXaG9XaW4oKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgIGVtcHR5Qm94ZXNbcmFuZFBsYXldPy5pbm5lckhUTUw/Lmxlbmd0aCA9PT0gMCAmJlxyXG4gICAgICAgICAgICBnZXRQbGF5Q29tcHV0ZXIoKSA9PSBcIm9cIiAmJlxyXG4gICAgICAgICAgICAhZ2V0V2luKClcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICByZXN1bHQuaW5uZXJIVE1MID0gYFlvdTo8aW1nIHNyYz1cIiR7dGhlbWVOb3dYLnNyY31cIi8+UEM6PGltZyBzcmM9XCIke3RoZW1lTm93Ty5zcmN9XCIvPmA7XHJcbiAgICAgICAgICAgIGVtcHR5Qm94ZXNbcmFuZFBsYXldLmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7dGhlbWVOb3dPLnNyY31cIi8+YDtcclxuXHJcbiAgICAgICAgICAgIHNldFdob1dpbihmYWxzZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBNYXRjaENvbHNBbmRSb3dzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBnZXRBbGVydE1lc3NhZ2UsIGdldFBsYXksIHNldEFsZXJ0TWVzc2FnZSB9IGZyb20gXCIuL3N0YXRlLmpzXCI7XHJcbmltcG9ydCAqIGFzIHZhcmlhYmxlcyBmcm9tIFwiLi92YXJpYWJsZXMuanNcIjtcclxuaW1wb3J0IFN0YXJ0VGltZXIgZnJvbSBcIi4vU3RhcnRUaW1lci5qc1wiO1xyXG5pbXBvcnQgeyBnZXRUaGVtZVNlbGVjdGVkIH0gZnJvbSBcIi4vc3RhdGUuanNcIjtcclxuaW1wb3J0IFBsYXlXaXRoRnJpZW5kIGZyb20gXCIuL1BsYXlXaXRoRnJpZW5kLmpzXCI7XHJcbmltcG9ydCBQbGF5V2l0aFBjIGZyb20gXCIuL1BsYXlXaXRoUGMuanNcIjtcclxuXHJcbi8vIEhpZGUgU3RhcnQgR2FtZVxyXG5leHBvcnQgY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xyXG4gIHZhcmlhYmxlcy5uYW1lPy52YWx1ZT8ubGVuZ3RoID09PSAwICYmIEhpZGVHYW1lKFwibm9uZVwiKTtcclxufTtcclxuXHJcbi8vIEhpZGUgR2FtZVxyXG5leHBvcnQgY29uc3QgSGlkZUdhbWUgPSAoc3RhdHVzKSA9PiB7XHJcbiAgdmFyaWFibGVzLmdhbWVfY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBzdGF0dXM7XHJcbn07XHJcblxyXG4vLyBIYW5kbGVFcnJvclxyXG5jb25zdCBIYW5kbGVFcnJvciA9ICgpID0+IHtcclxuICBpZiAoZ2V0QWxlcnRNZXNzYWdlKCkpIHtcclxuICAgIHZhcmlhYmxlcy5lcm9yckVsZW1lbnQuaW5uZXJIVE1MID0gZ2V0QWxlcnRNZXNzYWdlKCk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoYW5nZUNvbG9yQm94ZXMgPSAoKSA9PiB7XHJcbiAgU3RhcnRUaW1lcigpO1xyXG4gIHZhcmlhYmxlcy5ib3hlcy5mb3JFYWNoKChib3gpID0+IHtcclxuICAgIGlmIChib3guY2xhc3NMaXN0LmNvbnRhaW5zKFwidGhlbWUtMVwiKSkge1xyXG4gICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZjA0XCI7XHJcbiAgICB9XHJcbiAgICBpZiAoYm94LmNsYXNzTGlzdC5jb250YWlucyhcInRoZW1lLTJcIikpIHtcclxuICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmxhY2tcIjtcclxuICAgIH1cclxuICAgIGlmIChib3guY2xhc3NMaXN0LmNvbnRhaW5zKFwidGhlbWUtM1wiKSkge1xyXG4gICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJsaWdodHNlYWdyZWVuXCI7XHJcbiAgICB9XHJcbiAgICBpZiAoYm94LmNsYXNzTGlzdC5jb250YWlucyhcInRoZW1lLTRcIikpIHtcclxuICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmViZWNjYXB1cnBsZVwiO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHZhcmlhYmxlcy5hcHAuY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVcIik7XHJcbn07XHJcblxyXG4vLyBIYW5kbGUgQlRuIFN0YXJ0XHJcbmV4cG9ydCBjb25zdCBIYW5kbGVCVE5TdGFydCA9IChwbGF5aW5nKSA9PiB7XHJcbiAgaWYgKHZhcmlhYmxlcy5uYW1lLnZhbHVlID09PSBcIlwiKSB7XHJcbiAgICBzZXRBbGVydE1lc3NhZ2UoXCJZb3UgTXVzdCBGaWxsIFlvdXIgTmFtZVwiKTtcclxuICB9IGVsc2UgaWYgKGdldFRoZW1lU2VsZWN0ZWQoKSA9PT0gXCJcIikge1xyXG4gICAgc2V0QWxlcnRNZXNzYWdlKFwiWW91IE11c3QgU2VsZWN0IFlvdXIgVGhlbWVcIik7XHJcbiAgfSBlbHNlIGlmIChnZXRQbGF5KCkgPT09IFwiXCIpIHtcclxuICAgIHNldEFsZXJ0TWVzc2FnZShcIllvdSBNdXN0IFNlbGVjdCBYIG9yIE9cIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHZhcmlhYmxlcy5zdGFydEdhbWVBcmVhLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIHZhcmlhYmxlcy5uYW1lQXJlYS50ZXh0Q29udGVudCA9IHZhcmlhYmxlcy5uYW1lLnZhbHVlO1xyXG4gICAgSGlkZUdhbWUoXCJibG9ja1wiKTtcclxuICAgIHNldEFsZXJ0TWVzc2FnZShcIlwiKTtcclxuICAgIGNoYW5nZUNvbG9yQm94ZXMoKTtcclxuXHJcbiAgICBwbGF5aW5nLmluY2x1ZGVzKFwiZnJpZW5kXCIpID8gUGxheVdpdGhGcmllbmQoKSA6IFBsYXlXaXRoUGMoKTtcclxuICB9XHJcbiAgSGFuZGxlRXJyb3IoKTtcclxufTtcclxuXHJcbnZhcmlhYmxlcy5wbGF5V2l0aEZyaWVuZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cclxuICBIYW5kbGVCVE5TdGFydChcImZyaWVuZFwiKVxyXG4pO1xyXG52YXJpYWJsZXMucGxheVdpdGhDb21wdXRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cclxuICBIYW5kbGVCVE5TdGFydChcImNvbXB1dGVyXCIpXHJcbik7XHJcbiIsImxldCBwbGF5ID0gXCJcIjtcclxubGV0IHBsYXlDb21wdXRlciA9IFwiXCI7XHJcbmxldCB3aW4gPSBmYWxzZTtcclxubGV0IHdob1dpbiA9IGZhbHNlO1xyXG5sZXQgdGhlbWVTZWxlY3RlZCA9IFwiXCI7XHJcbmxldCB0aGVtZU5leHQgPSBcIlwiO1xyXG5sZXQgYWxlcnRNZXNzYWdlID0gXCJcIjtcclxubGV0IFRpbWVyID0gOTU7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UGxheSA9ICgpID0+IHBsYXk7XHJcbmV4cG9ydCBjb25zdCBzZXRQbGF5ID0gKHZhbHVlKSA9PiAocGxheSA9IHZhbHVlKTtcclxuZXhwb3J0IGNvbnN0IGdldFdpbiA9ICgpID0+IHdpbjtcclxuZXhwb3J0IGNvbnN0IHNldFdpbiA9ICh2YWx1ZSkgPT4gKHdpbiA9IHZhbHVlKTtcclxuZXhwb3J0IGNvbnN0IGdldFdob1dpbiA9ICgpID0+IHdob1dpbjtcclxuZXhwb3J0IGNvbnN0IHNldFdob1dpbiA9ICh2YWx1ZSkgPT4gKHdob1dpbiA9IHZhbHVlKTtcclxuZXhwb3J0IGNvbnN0IGdldFRoZW1lU2VsZWN0ZWQgPSAoKSA9PiB0aGVtZVNlbGVjdGVkO1xyXG5leHBvcnQgY29uc3Qgc2V0VGhlbWVTZWxlY3RlZCA9ICh2YWx1ZSkgPT4gKHRoZW1lU2VsZWN0ZWQgPSB2YWx1ZSk7XHJcbmV4cG9ydCBjb25zdCBnZXRUaGVtZU5leHQgPSAoKSA9PiB0aGVtZU5leHQ7XHJcbmV4cG9ydCBjb25zdCBzZXRUaGVtZU5leHQgPSAodmFsdWUpID0+ICh0aGVtZU5leHQgPSB2YWx1ZSk7XHJcbmV4cG9ydCBjb25zdCBnZXRBbGVydE1lc3NhZ2UgPSAoKSA9PiBhbGVydE1lc3NhZ2U7XHJcbmV4cG9ydCBjb25zdCBzZXRBbGVydE1lc3NhZ2UgPSAodmFsdWUpID0+IChhbGVydE1lc3NhZ2UgPSB2YWx1ZSk7XHJcbmV4cG9ydCBjb25zdCBnZXRUaW1lciA9ICgpID0+IFRpbWVyO1xyXG5leHBvcnQgY29uc3Qgc2V0VGltZXIgPSAodmFsdWUpID0+IChUaW1lciA9IHZhbHVlKTtcclxuZXhwb3J0IGNvbnN0IGdldFBsYXlDb21wdXRlciA9ICgpID0+IHBsYXlDb21wdXRlcjtcclxuZXhwb3J0IGNvbnN0IHNldFBsYXlDb21wdXRlciA9ICh2YWx1ZSkgPT4gKHBsYXlDb21wdXRlciA9IHZhbHVlKTtcclxuIiwiaW1wb3J0IHsgYm94ZXMsIGdhbWVfY29udGFpbmVyLCByZXN1bHQsIHRoZW1lcyB9IGZyb20gXCIuL3ZhcmlhYmxlcy5qc1wiO1xyXG5cclxuaW1wb3J0IFRoZW1lWE9uZSBmcm9tIFwiLi4vaW1hZ2VzL3BsYXllcl94L2Nsb3NlLnBuZ1wiO1xyXG5pbXBvcnQgVGhlbWVYVHdvIGZyb20gXCIuLi9pbWFnZXMvcGxheWVyX3gveC5wbmdcIjtcclxuaW1wb3J0IFRoZW1lWFRocmVlIGZyb20gXCIuLi9pbWFnZXMvcGxheWVyX3gvcGhhcm1hY3kucG5nXCI7XHJcbmltcG9ydCBUaGVtZVhGb3VyIGZyb20gXCIuLi9pbWFnZXMvcGxheWVyX3gvbm8ucG5nXCI7XHJcbmltcG9ydCBUaGVtZU9PbmUgZnJvbSBcIi4uL2ltYWdlcy9wbGF5ZXJfby9vICgxKS5wbmdcIjtcclxuaW1wb3J0IFRoZW1lT1R3byBmcm9tIFwiLi4vaW1hZ2VzL3BsYXllcl9vL2xldHRlci1vLnBuZ1wiO1xyXG5pbXBvcnQgVGhlbWVPVGhyZWUgZnJvbSBcIi4uL2ltYWdlcy9wbGF5ZXJfby9vICgyKS5wbmdcIjtcclxuaW1wb3J0IFRoZW1lT0ZvdXIgZnJvbSBcIi4uL2ltYWdlcy9wbGF5ZXJfby9vICgzKS5wbmdcIjtcclxuaW1wb3J0IGxlYWZJbWcgZnJvbSBcIi4uL2ltYWdlcy9ib3JkZXItbGVhZi5wbmdcIjtcclxuaW1wb3J0IHsgc2V0VGhlbWVTZWxlY3RlZCwgZ2V0VGhlbWVOZXh0LCBnZXRUaGVtZVNlbGVjdGVkIH0gZnJvbSBcIi4vc3RhdGUuanNcIjtcclxuaW1wb3J0IE5leHRSb3VuZCBmcm9tIFwiLi9OZXh0Um91bmQuanNcIjtcclxuXHJcbmV4cG9ydCBsZXQgdGhlbWVOb3dYID0gXCJcIjtcclxuZXhwb3J0IGxldCB0aGVtZU5vd08gPSBcIlwiO1xyXG5cclxuLy8gQXBwbHlUaGVtZSBGdW5jdGlvbmFsaXR5XHJcbmNvbnN0IEFwcGx5VGhlbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgcmVzdWx0R2FtZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXZDb2xsZWN0aW9uWE8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgIGNvbnN0IHRleHRHYW1lID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJHYW1lXCIpO1xyXG4gICAgZGl2Q29sbGVjdGlvblhPLmFwcGVuZENoaWxkKHRoZW1lTm93WCk7XHJcbiAgICBkaXZDb2xsZWN0aW9uWE8uYXBwZW5kQ2hpbGQodGhlbWVOb3dPKTtcclxuICAgIGRpdkNvbGxlY3Rpb25YTy5hcHBlbmRDaGlsZCh0ZXh0R2FtZSk7XHJcblxyXG4gICAgcmVzdWx0LmFwcGVuZENoaWxkKGRpdkNvbGxlY3Rpb25YTyk7XHJcbiAgfTtcclxuICBjb25zdCBTZWxlY3RUaGVtZSA9IChUaGVtZVgsIFRoZW1lTykgPT4ge1xyXG4gICAgbGV0IHBsYXllcl94X0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBsZXQgcGxheWVyX29fSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuXHJcbiAgICBwbGF5ZXJfeF9JbWcuc3JjID0gVGhlbWVYO1xyXG4gICAgcGxheWVyX29fSW1nLnNyYyA9IFRoZW1lTztcclxuXHJcbiAgICB0aGVtZU5vd1ggPSBwbGF5ZXJfeF9JbWc7XHJcbiAgICB0aGVtZU5vd08gPSBwbGF5ZXJfb19JbWc7XHJcbiAgICByZXN1bHQ/LmNoaWxkcmVuWzBdPy5yZW1vdmUoKTtcclxuXHJcbiAgICByZXN1bHRHYW1lcygpO1xyXG4gIH07XHJcbiAgdGhlbWVOb3dYID09PSBcInRoZW1lLTFcIlxyXG4gICAgPyBTZWxlY3RUaGVtZShUaGVtZVhPbmUsIFRoZW1lT09uZSlcclxuICAgIDogdGhlbWVOb3dYID09PSBcInRoZW1lLTJcIlxyXG4gICAgPyBTZWxlY3RUaGVtZShUaGVtZVhUd28sIFRoZW1lT1R3bylcclxuICAgIDogdGhlbWVOb3dYID09PSBcInRoZW1lLTNcIlxyXG4gICAgPyBTZWxlY3RUaGVtZShUaGVtZVhUaHJlZSwgVGhlbWVPVGhyZWUpXHJcbiAgICA6IHRoZW1lTm93WCA9PT0gXCJ0aGVtZS00XCJcclxuICAgID8gU2VsZWN0VGhlbWUoVGhlbWVYRm91ciwgVGhlbWVPRm91cilcclxuICAgIDogXCJcIjtcclxufTtcclxuXHJcbi8vIFNldCBUaGVtZVxyXG5leHBvcnQgY29uc3QgU2V0VGhlbWUgPSAoKSA9PiB7XHJcbiAgdGhlbWVzLmZvckVhY2goKHRoZW1lLCBpbmRleCkgPT4ge1xyXG4gICAgdGhlbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgYm94ZXMuZm9yRWFjaCgoYm94KSA9PiAoYm94LmNsYXNzTmFtZSA9IFwiXCIpKTtcclxuICAgICAgYm94ZXMuZm9yRWFjaCgoYm94KSA9PiAoYm94LmNsYXNzTmFtZSA9IFwiYm94XCIpKTtcclxuXHJcbiAgICAgIHNldFRoZW1lU2VsZWN0ZWQodGhlbWUuZGF0YXNldC50aGVtZSk7XHJcblxyXG4gICAgICBnYW1lX2NvbnRhaW5lci5jbGFzc05hbWUgPSBnZXRUaGVtZU5leHQoKSA/IFwiXCIgOiB0aGVtZS5kYXRhc2V0LnRoZW1lO1xyXG4gICAgICB0aGVtZU5vd1ggPSBnZXRUaGVtZU5leHQoKSA/IFwiXCIgOiB0aGVtZS5kYXRhc2V0LnRoZW1lO1xyXG4gICAgICB0aGVtZU5vd08gPSBnZXRUaGVtZU5leHQoKSA/IFwiXCIgOiB0aGVtZS5kYXRhc2V0LnRoZW1lO1xyXG4gICAgICBib3hlcy5mb3JFYWNoKChib3gpID0+XHJcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoZ2V0VGhlbWVOZXh0KCkgPyBcIlwiIDogdGhlbWUuZGF0YXNldC50aGVtZSlcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoZW1lLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICB0aGVtZS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIilcclxuICAgICAgICA/ICh0aGVtZS5zdHlsZS5ib3JkZXJJbWFnZSA9IGB1cmwoJHtsZWFmSW1nfSkgMTBgKVxyXG4gICAgICAgIDogKHRoZW1lLnN0eWxlLmJvcmRlckltYWdlID0gYG5vbmVgKTtcclxuXHJcbiAgICAgIEFwcGx5VGhlbWUoKTtcclxuXHJcbiAgICAgIHRoZW1lcy5mb3JFYWNoKChvbGRUaGVtZSwgaWQpID0+IHtcclxuICAgICAgICBpZiAob2xkVGhlbWUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpICYmIGlkICE9PSBpbmRleCkge1xyXG4gICAgICAgICAgb2xkVGhlbWUuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XHJcbiAgICAgICAgICBvbGRUaGVtZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBOZXh0Um91bmQoKTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGdhbWVfY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWNvbnRhaW5lclwiKTtcclxuZXhwb3J0IGNvbnN0IHN0YXJ0R2FtZUFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LWdhbWVcIik7XHJcbmV4cG9ydCBjb25zdCBuYW1lQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0IGxpOmZpcnN0LW9mLXR5cGVcIik7XHJcbmV4cG9ydCBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdCBsaTpudGgtY2hpbGQoMylcIik7XHJcbmV4cG9ydCBjb25zdCB0aW1lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0IGxpOm50aC1jaGlsZCgyKSBwXCIpO1xyXG5leHBvcnQgY29uc3QgYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJveFwiKTtcclxuZXhwb3J0IGNvbnN0IGFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwXCIpO1xyXG5leHBvcnQgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVwiKTtcclxuZXhwb3J0IGNvbnN0IHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInhcIik7XHJcbmV4cG9ydCBjb25zdCBvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvXCIpO1xyXG5leHBvcnQgY29uc3QgcGxheVdpdGhGcmllbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyaWVuZFwiKTtcclxuZXhwb3J0IGNvbnN0IHBsYXlXaXRoQ29tcHV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXB1dGVyXCIpO1xyXG5leHBvcnQgY29uc3QgdGhlbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50aGVtZXMtYXJlYSBpbWdcIik7XHJcbmV4cG9ydCBjb25zdCBlcm9yckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yXCIpO1xyXG5leHBvcnQgY29uc3QgcmVzdWx0X2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bC5yZXN1bHRcIik7XHJcblxyXG5leHBvcnQgY29uc3QgdHJlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHJlZVwiKTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9iZy1idG4tc3RhcnQuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9ib3JkZXItbGVhZi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2xldHRlci1vLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvbyAoMSkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9vICgyKS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL28gKDMpLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvY2xvc2UucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9uby5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3BoYXJtYWN5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMveC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2JnLXRoZW1lLTEuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy90aGVtZS0xLlBOR1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvdGhlbWUtMi5QTkdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3RoZW1lLTMuUE5HXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy90aGVtZS00LlBOR1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgKiBhcyB0aGVtZSBmcm9tIFwiLi9tb2R1bGUvdGhlbWVzLmpzXCI7XHJcbmltcG9ydCB7IHN0YXJ0R2FtZSB9IGZyb20gXCIuL21vZHVsZS9zdGFydEdhbWUuanNcIjtcclxuaW1wb3J0IHsgQ2hvb3NlVGljT3JUb2MgfSBmcm9tIFwiLi9tb2R1bGUvQ2hvb3NlWF9PLmpzXCI7XHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IEFwcGx5VGhlbWVzIGZyb20gXCIuL21vZHVsZS9BcHBseVRoZW1lLmpzXCI7XHJcblxyXG50aGVtZS5TZXRUaGVtZSh0aGVtZS50aGVtZU5vd1gsIHRoZW1lLnRoZW1lTm93Tyk7XHJcbnN0YXJ0R2FtZSgpO1xyXG5BcHBseVRoZW1lcygpO1xyXG5DaG9vc2VUaWNPclRvYygpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=