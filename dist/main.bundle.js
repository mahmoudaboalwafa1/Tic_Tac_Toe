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









const themeArea = [_images_themes_theme_1_PNG__WEBPACK_IMPORTED_MODULE_0__["default"], _images_themes_theme_2_PNG__WEBPACK_IMPORTED_MODULE_1__["default"], _images_themes_theme_3_PNG__WEBPACK_IMPORTED_MODULE_2__["default"], _images_themes_theme_4_PNG__WEBPACK_IMPORTED_MODULE_3__["default"]];

const ApplyThemes = () => {
  document.body.style.borderImage = `url(${_images_border_leaf_png__WEBPACK_IMPORTED_MODULE_5__["default"]}) 10`;
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
  _variables_js__WEBPACK_IMPORTED_MODULE_6__.btnStart.style.backgroundImage = _images_bg_btn_start_jpg__WEBPACK_IMPORTED_MODULE_4__["default"];
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
      break;
    case _variables_js__WEBPACK_IMPORTED_MODULE_0__.o:
      _variables_js__WEBPACK_IMPORTED_MODULE_0__.x.style.color = "black";
      _variables_js__WEBPACK_IMPORTED_MODULE_0__.o.style.color = "#f05";
      (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.setPlay)("o");
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
/* harmony export */   EndGame: () => (/* binding */ EndGame)
/* harmony export */ });
/* harmony import */ var _startGame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startGame.js */ "./module/startGame.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state.js */ "./module/state.js");
/* harmony import */ var _themes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./themes.js */ "./module/themes.js");
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variables.js */ "./module/variables.js");





const EndGame = (arg) => {
  (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.setThemeSelected)("");
  (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.setAlertMessage)("");
  (0,_startGame_js__WEBPACK_IMPORTED_MODULE_0__.HideGame)("none");
  (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.setThemeNext)("");
  (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.setPlay)("");
  _variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes.forEach((box) => (box.innerHTML = ""));
  _variables_js__WEBPACK_IMPORTED_MODULE_3__.result.innerHTML = "";
  _variables_js__WEBPACK_IMPORTED_MODULE_3__.themes.forEach((theme) => {
    theme.className = "";
    theme.style.borderImage = "none";
  });
  _variables_js__WEBPACK_IMPORTED_MODULE_3__.x.style.color = "black";
  _variables_js__WEBPACK_IMPORTED_MODULE_3__.o.style.color = "black";
  _variables_js__WEBPACK_IMPORTED_MODULE_3__.name.value = "";

  _variables_js__WEBPACK_IMPORTED_MODULE_3__.startGameArea.style.display = "block";
  const divCollectionXO = document.createElement("div");

  const textGame = document.createTextNode("Game");
  divCollectionXO.appendChild(_themes_js__WEBPACK_IMPORTED_MODULE_2__.themeNowX);
  divCollectionXO.appendChild(_themes_js__WEBPACK_IMPORTED_MODULE_2__.themeNowO);
  divCollectionXO.appendChild(textGame);

  _variables_js__WEBPACK_IMPORTED_MODULE_3__.result.appendChild(divCollectionXO);
  (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.setWin)(false);
  (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.setTimer)(100);
  const nums = arg;

  for (let i = 0; i < nums.length; i++) {
    const colorNow = () => {
      const color = (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.getThemeSelected)().includes("theme-1")
        ? "#f04"
        : (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.getThemeSelected)().includes("theme-2")
        ? "black"
        : (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.getThemeSelected)().includes("theme-3")
        ? "lightseagreen"
        : "rebeccapurple";
      return color;
    };
    nums[i].style.backgroundColor = colorNow();
  }
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
/* harmony import */ var _startGame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startGame.js */ "./module/startGame.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state.js */ "./module/state.js");
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables.js */ "./module/variables.js");




let Themes = ["theme-1", "theme-2", "theme-3", "theme-4"];
let nextTheme = "";

const NextRound = () => {
  if ((0,_state_js__WEBPACK_IMPORTED_MODULE_1__.getWhoWin)()) {
    setTimeout(() => {
      nextTheme = Themes[Math.floor(Math.random() * 4)];

      (0,_startGame_js__WEBPACK_IMPORTED_MODULE_0__.HideGame)("block");
      (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.setThemeSelected)(nextTheme);
      _variables_js__WEBPACK_IMPORTED_MODULE_2__.boxes.forEach((box) => (box.style = "block"));
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
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ "./module/variables.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state.js */ "./module/state.js");



const StartTimer = () => {
  let interval = setInterval(() => {
    _variables_js__WEBPACK_IMPORTED_MODULE_0__.timer.style.width = `${(0,_state_js__WEBPACK_IMPORTED_MODULE_1__.getTimer)()}%`;
    _variables_js__WEBPACK_IMPORTED_MODULE_0__.timer.style.height = `${(0,_state_js__WEBPACK_IMPORTED_MODULE_1__.getTimer)()}%`;
    _variables_js__WEBPACK_IMPORTED_MODULE_0__.boxes.forEach((box) => {
      box.style.width = `${(0,_state_js__WEBPACK_IMPORTED_MODULE_1__.getTimer)()}%`;
    });

    if ((0,_state_js__WEBPACK_IMPORTED_MODULE_1__.getTimer)() === 0 || (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.getWin)() || (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.getWhoWin)()) {
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

/***/ "./module/WhoWin.js":
/*!**************************!*\
  !*** ./module/WhoWin.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.js */ "./module/state.js");
/* harmony import */ var _images_thinkBoy_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/thinkBoy.png */ "./images/thinkBoy.png");
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables.js */ "./module/variables.js");




let wait = 1;

const WhoWin = () => {
  if ((0,_state_js__WEBPACK_IMPORTED_MODULE_0__.getWhoWin)()) {
    let interval = setInterval(() => {
      _variables_js__WEBPACK_IMPORTED_MODULE_2__.result.innerHTML = `next round${".".repeat(wait)}`;

      if (wait === 3) {
        clearInterval(interval);
        let ThinkImg = document.createElement("img");
        ThinkImg.src = _images_thinkBoy_png__WEBPACK_IMPORTED_MODULE_1__["default"];
        ThinkImg.style.cssText = "margin: 0 auto; display: flex";
        _variables_js__WEBPACK_IMPORTED_MODULE_2__.boxes.forEach((box) => (box.style.display = "none"));
        _variables_js__WEBPACK_IMPORTED_MODULE_2__.game_container.appendChild(ThinkImg);
      }
      ++wait;
    }, 1000);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WhoWin);


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
  const nums = arg;
  if ((0,_state_js__WEBPACK_IMPORTED_MODULE_1__.getWin)()) {
    for (let i = 0; i < nums.length; i++) {
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
      nums[i].style.backgroundColor = colorNow();
    }
  }

  _variables_js__WEBPACK_IMPORTED_MODULE_0__.result.classList.add("winner");
  _variables_js__WEBPACK_IMPORTED_MODULE_0__.app.classList.add("disable");

  _variables_js__WEBPACK_IMPORTED_MODULE_0__.result.innerHTML = `<img src=${nums[0].children[0].src}/> is Winner`;

  let close = 1;

  let interval = setInterval(() => {
    _variables_js__WEBPACK_IMPORTED_MODULE_0__.result.innerHTML += ".";
    if (close === 3) {
      (0,_EndGame_js__WEBPACK_IMPORTED_MODULE_2__.EndGame)(nums);
      clearInterval(interval);
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
/* harmony import */ var _WinGame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WinGame.js */ "./module/WinGame.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state.js */ "./module/state.js");
/* harmony import */ var _themes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./themes.js */ "./module/themes.js");
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variables.js */ "./module/variables.js");
/* harmony import */ var _WhoWin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WhoWin.js */ "./module/WhoWin.js");
/* harmony import */ var _NextRound_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NextRound.js */ "./module/NextRound.js");
// Here Logic game put x or o in box and WinGame









const Logic = () => {
  _variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes.forEach((box, index) => {
    if (box.classList.contains("player") === false) {
      box.onclick = () => {
        _variables_js__WEBPACK_IMPORTED_MODULE_3__.result?.children[0]?.remove();
        if (box.innerHTML.length === 0 && (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.getPlay)() == "x") {
          box.innerHTML = `<img src="${_themes_js__WEBPACK_IMPORTED_MODULE_2__.themeNowX.src}"/>`;
          box.classList.add("player");
          _variables_js__WEBPACK_IMPORTED_MODULE_3__.result.appendChild(_themes_js__WEBPACK_IMPORTED_MODULE_2__.themeNowO);
          (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.setPlay)("o");
        } else if (box.innerHTML.length === 0 && (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.getPlay)() == "o") {
          box.innerHTML = `<img src="${_themes_js__WEBPACK_IMPORTED_MODULE_2__.themeNowO.src}"/>`;
          box.classList.add("player");

          _variables_js__WEBPACK_IMPORTED_MODULE_3__.result.appendChild(_themes_js__WEBPACK_IMPORTED_MODULE_2__.themeNowX);
          (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.setPlay)("x");
        }

        // Rows
        function Rows(RowOne, RowTwo, RowThree) {
          if (
            _variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[RowOne].innerHTML == _variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[RowTwo].innerHTML &&
            _variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[RowTwo].innerHTML == _variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[RowThree].innerHTML &&
            _variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[RowOne].innerHTMl != "" &&
            _variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[RowTwo].innerHTML != ""
          ) {
            (0,_WinGame_js__WEBPACK_IMPORTED_MODULE_0__.WinGame)(_variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[RowOne], _variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[RowOne], _variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[RowThree]);
          }
        }

        Rows(0, 1, 2);
        Rows(3, 4, 5);
        Rows(6, 7, 8);

        // columns
        const Columns = (ColOne, ColTwo, ColThree) => {
          if (
            _variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[ColOne].innerHTML == _variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[ColTwo].innerHTML &&
            _variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[ColTwo].innerHTML == _variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[ColThree].innerHTML &&
            _variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[ColThree].innerHTMl != "" &&
            _variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[ColTwo].innerHTML != ""
          ) {
            (0,_WinGame_js__WEBPACK_IMPORTED_MODULE_0__.WinGame)(_variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[ColOne], _variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[ColTwo], _variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[ColThree]);
          }
        };

        Columns(0, 3, 6);
        Columns(0, 1, 2);
        Columns(1, 4, 7);
        Columns(2, 5, 8);
        Columns(0, 4, 8);
        Columns(2, 4, 6);

        // No Any Body Win
        if (
          _variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[0].innerHTML.length > 0 &&
          _variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[1].innerHTML.length > 0 &&
          _variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[2].innerHTML.length > 0 &&
          _variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[3].innerHTML.length > 0 &&
          _variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[4].innerHTML.length > 0 &&
          _variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[5].innerHTML.length > 0 &&
          _variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[6].innerHTML.length > 0 &&
          _variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[7].innerHTML.length > 0 &&
          _variables_js__WEBPACK_IMPORTED_MODULE_3__.boxes[8].innerHTML.length > 0
        ) {
          (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.setWhoWin)(true);
          (0,_WhoWin_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
          (0,_NextRound_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
        }
      };
    }
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
/* harmony export */   startGame: () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.js */ "./module/state.js");
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables.js */ "./module/variables.js");
/* harmony import */ var _StartTimer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StartTimer.js */ "./module/StartTimer.js");





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

// Handle BTn Start
const HandleBTNStart = () => {
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
    (0,_StartTimer_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    _variables_js__WEBPACK_IMPORTED_MODULE_1__.app.classList.remove("disable");
    // soundStartGame.play();
  }
  HandleError();
};

_variables_js__WEBPACK_IMPORTED_MODULE_1__.btnStart.addEventListener("click", () => HandleBTNStart());


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
/* harmony export */   getThemeNext: () => (/* binding */ getThemeNext),
/* harmony export */   getThemeSelected: () => (/* binding */ getThemeSelected),
/* harmony export */   getTimer: () => (/* binding */ getTimer),
/* harmony export */   getWhoWin: () => (/* binding */ getWhoWin),
/* harmony export */   getWin: () => (/* binding */ getWin),
/* harmony export */   setAlertMessage: () => (/* binding */ setAlertMessage),
/* harmony export */   setPlay: () => (/* binding */ setPlay),
/* harmony export */   setThemeNext: () => (/* binding */ setThemeNext),
/* harmony export */   setThemeSelected: () => (/* binding */ setThemeSelected),
/* harmony export */   setTimer: () => (/* binding */ setTimer),
/* harmony export */   setWhoWin: () => (/* binding */ setWhoWin),
/* harmony export */   setWin: () => (/* binding */ setWin)
/* harmony export */ });
let play = "";
let win = false;
let whoWin = false;
let themeSelected = "";
let themeNext = "";
let alertMessage = "";
let Timer = 100;

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
/* harmony export */   btnStart: () => (/* binding */ btnStart),
/* harmony export */   erorrElement: () => (/* binding */ erorrElement),
/* harmony export */   game_container: () => (/* binding */ game_container),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   nameArea: () => (/* binding */ nameArea),
/* harmony export */   o: () => (/* binding */ o),
/* harmony export */   result: () => (/* binding */ result),
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
const btnStart = document.querySelector(".start-game button");
const themes = document.querySelectorAll(".themes-area img");
const erorrElement = document.getElementById("error");

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

/***/ "./images/thinkBoy.png":
/*!*****************************!*\
  !*** ./images/thinkBoy.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/thinkBoy.png");

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
/* harmony import */ var _module_logic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/logic.js */ "./module/logic.js");
/* harmony import */ var _module_startGame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/startGame.js */ "./module/startGame.js");
/* harmony import */ var _module_ChooseX_O_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/ChooseX_O.js */ "./module/ChooseX_O.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./style.css");
/* harmony import */ var _module_ApplyTheme_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module/ApplyTheme.js */ "./module/ApplyTheme.js");
// Global Variables

// hot module webpack








_module_themes_js__WEBPACK_IMPORTED_MODULE_0__.SetTheme(_module_themes_js__WEBPACK_IMPORTED_MODULE_0__.themeNowX, _module_themes_js__WEBPACK_IMPORTED_MODULE_0__.themeNowO);
(0,_module_startGame_js__WEBPACK_IMPORTED_MODULE_2__.startGame)();
(0,_module_logic_js__WEBPACK_IMPORTED_MODULE_1__.Logic)();
(0,_module_ApplyTheme_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
(0,_module_ChooseX_O_js__WEBPACK_IMPORTED_MODULE_3__.ChooseTicOrToc)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7O0FDQTdELGlFQUFlLHFCQUF1Qix1QkFBdUI7Ozs7Ozs7Ozs7Ozs7O0FDQTdELGlFQUFlLHFCQUF1Qix1QkFBdUI7Ozs7Ozs7Ozs7Ozs7O0FDQTdELGlFQUFlLHFCQUF1Qix3QkFBd0I7Ozs7Ozs7Ozs7O0FDQTlEOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQzRDO0FBQ0Y7QUFDUTtBQUNLO0FBQ3ZCO0FBQ2lCO0FBQ2pEO0FBQ0EsdURBQWMsQ0FBQyx3REFBZSxFQUFFLHdEQUFlO0FBQy9DLCtEQUFTO0FBQ1QsdURBQUs7QUFDTCxpRUFBVztBQUNYLG9FQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veG9fZ2FtZS8uL21vZHVsZS9BcHBseVRoZW1lLmpzIiwid2VicGFjazovL3hvX2dhbWUvLi9tb2R1bGUvQ2hvb3NlWF9PLmpzIiwid2VicGFjazovL3hvX2dhbWUvLi9tb2R1bGUvRW5kR2FtZS5qcyIsIndlYnBhY2s6Ly94b19nYW1lLy4vbW9kdWxlL05leHRSb3VuZC5qcyIsIndlYnBhY2s6Ly94b19nYW1lLy4vbW9kdWxlL1N0YXJ0VGltZXIuanMiLCJ3ZWJwYWNrOi8veG9fZ2FtZS8uL21vZHVsZS9XaG9XaW4uanMiLCJ3ZWJwYWNrOi8veG9fZ2FtZS8uL21vZHVsZS9XaW5HYW1lLmpzIiwid2VicGFjazovL3hvX2dhbWUvLi9tb2R1bGUvbG9naWMuanMiLCJ3ZWJwYWNrOi8veG9fZ2FtZS8uL21vZHVsZS9zdGFydEdhbWUuanMiLCJ3ZWJwYWNrOi8veG9fZ2FtZS8uL21vZHVsZS9zdGF0ZS5qcyIsIndlYnBhY2s6Ly94b19nYW1lLy4vbW9kdWxlL3RoZW1lcy5qcyIsIndlYnBhY2s6Ly94b19nYW1lLy4vbW9kdWxlL3ZhcmlhYmxlcy5qcyIsIndlYnBhY2s6Ly94b19nYW1lLy4vaW1hZ2VzL2JnLWJ0bi1zdGFydC5qcGciLCJ3ZWJwYWNrOi8veG9fZ2FtZS8uL2ltYWdlcy9ib3JkZXItbGVhZi5wbmciLCJ3ZWJwYWNrOi8veG9fZ2FtZS8uL2ltYWdlcy9wbGF5ZXJfby9sZXR0ZXItby5wbmciLCJ3ZWJwYWNrOi8veG9fZ2FtZS8uL2ltYWdlcy9wbGF5ZXJfby9vICgxKS5wbmciLCJ3ZWJwYWNrOi8veG9fZ2FtZS8uL2ltYWdlcy9wbGF5ZXJfby9vICgyKS5wbmciLCJ3ZWJwYWNrOi8veG9fZ2FtZS8uL2ltYWdlcy9wbGF5ZXJfby9vICgzKS5wbmciLCJ3ZWJwYWNrOi8veG9fZ2FtZS8uL2ltYWdlcy9wbGF5ZXJfeC9jbG9zZS5wbmciLCJ3ZWJwYWNrOi8veG9fZ2FtZS8uL2ltYWdlcy9wbGF5ZXJfeC9uby5wbmciLCJ3ZWJwYWNrOi8veG9fZ2FtZS8uL2ltYWdlcy9wbGF5ZXJfeC9waGFybWFjeS5wbmciLCJ3ZWJwYWNrOi8veG9fZ2FtZS8uL2ltYWdlcy9wbGF5ZXJfeC94LnBuZyIsIndlYnBhY2s6Ly94b19nYW1lLy4vaW1hZ2VzL3RoZW1lcy90aGVtZS0xLlBORyIsIndlYnBhY2s6Ly94b19nYW1lLy4vaW1hZ2VzL3RoZW1lcy90aGVtZS0yLlBORyIsIndlYnBhY2s6Ly94b19nYW1lLy4vaW1hZ2VzL3RoZW1lcy90aGVtZS0zLlBORyIsIndlYnBhY2s6Ly94b19nYW1lLy4vaW1hZ2VzL3RoZW1lcy90aGVtZS00LlBORyIsIndlYnBhY2s6Ly94b19nYW1lLy4vaW1hZ2VzL3RoaW5rQm95LnBuZyIsIndlYnBhY2s6Ly94b19nYW1lLy4vc3R5bGUuY3NzPzY0MjkiLCJ3ZWJwYWNrOi8veG9fZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly94b19nYW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly94b19nYW1lL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8veG9fZ2FtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3hvX2dhbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly94b19nYW1lL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3hvX2dhbWUvLi9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaGVtZUFyZWFPbmUgZnJvbSBcIi4uL2ltYWdlcy90aGVtZXMvdGhlbWUtMS5QTkdcIjtcclxuaW1wb3J0IFRoZW1lQXJlYVR3byBmcm9tIFwiLi4vaW1hZ2VzL3RoZW1lcy90aGVtZS0yLlBOR1wiO1xyXG5pbXBvcnQgVGhlbWVBcmVhVGhyZWUgZnJvbSBcIi4uL2ltYWdlcy90aGVtZXMvdGhlbWUtMy5QTkdcIjtcclxuaW1wb3J0IFRoZW1lQXJlYUZvdXIgZnJvbSBcIi4uL2ltYWdlcy90aGVtZXMvdGhlbWUtNC5QTkdcIjtcclxuaW1wb3J0IGJ0blN0YXJ0SW1nIGZyb20gXCIuLi9pbWFnZXMvYmctYnRuLXN0YXJ0LmpwZ1wiO1xyXG5pbXBvcnQgbGVhZkltZyBmcm9tIFwiLi4vaW1hZ2VzL2JvcmRlci1sZWFmLnBuZ1wiO1xyXG5pbXBvcnQgeyBidG5TdGFydCwgdGhlbWVzIH0gZnJvbSBcIi4vdmFyaWFibGVzLmpzXCI7XHJcbmltcG9ydCB7IGdldFRoZW1lU2VsZWN0ZWQgfSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5cclxuY29uc3QgdGhlbWVBcmVhID0gW1RoZW1lQXJlYU9uZSwgVGhlbWVBcmVhVHdvLCBUaGVtZUFyZWFUaHJlZSwgVGhlbWVBcmVhRm91cl07XHJcblxyXG5jb25zdCBBcHBseVRoZW1lcyA9ICgpID0+IHtcclxuICBkb2N1bWVudC5ib2R5LnN0eWxlLmJvcmRlckltYWdlID0gYHVybCgke2xlYWZJbWd9KSAxMGA7XHJcbiAgdGhlbWVzLmZvckVhY2goKHRoZW1lLCBpbmRleCkgPT4ge1xyXG4gICAgdGhlbWUuc3JjID0gdGhlbWVBcmVhW2luZGV4XTtcclxuICAgIHRoZW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcclxuICAgICAgIXRoZW1lLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKVxyXG4gICAgICAgID8gKHRoZW1lLnN0eWxlLmJvcmRlckltYWdlID0gYHVybCgke2xlYWZJbWd9KSAxMGApXHJcbiAgICAgICAgOiBcIlwiO1xyXG4gICAgfSk7XHJcbiAgICB0aGVtZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XHJcbiAgICAgICF0aGVtZS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIilcclxuICAgICAgICA/ICh0aGVtZS5zdHlsZS5ib3JkZXJJbWFnZSA9IFwibm9uZVwiKVxyXG4gICAgICAgIDogXCJcIjtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIGJ0blN0YXJ0LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGJ0blN0YXJ0SW1nO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwbHlUaGVtZXM7XHJcbiIsIi8vIGhlcmUgY2hvb3NlIHggb3IgbyB3aGVuIG9uY2xpY2sgb24gd29yZCBjaG9vc2UgeCBvciBvXHJcblxyXG5pbXBvcnQgKiBhcyB2YXJpYWJsZXMgZnJvbSBcIi4vdmFyaWFibGVzLmpzXCI7XHJcbmltcG9ydCB7IGdldFBsYXksIHNldFBsYXkgfSBmcm9tIFwiLi9zdGF0ZS5qc1wiO1xyXG5pbXBvcnQgeyBzdGFydEdhbWUgfSBmcm9tIFwiLi9zdGFydEdhbWUuanNcIjtcclxuXHJcbi8vIEVudGVyIFRvIEdhbWUgRnVuY3Rpb25hbGl0eVxyXG5jb25zdCBFbnRlclRvR2FtZSA9ICgpID0+IHtcclxuICBnZXRQbGF5KCkgJiYgdmFyaWFibGVzLm5hbWUudmFsdWUubGVuZ3RoID4gMCA/IHN0YXJ0R2FtZShcIm5vbmVcIikgOiBcIlwiO1xyXG59O1xyXG5cclxuLy8gQ2hvb3NlIFggb3IgT1xyXG5leHBvcnQgY29uc3QgQ2hvb3NlVGljT3JUb2MgPSAocGxheWVyKSA9PiB7XHJcbiAgc3dpdGNoIChwbGF5ZXIpIHtcclxuICAgIGNhc2UgdmFyaWFibGVzLng6XHJcbiAgICAgIHZhcmlhYmxlcy5vLnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xyXG4gICAgICB2YXJpYWJsZXMueC5zdHlsZS5jb2xvciA9IFwiI2YwNVwiO1xyXG4gICAgICBzZXRQbGF5KFwieFwiKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIHZhcmlhYmxlcy5vOlxyXG4gICAgICB2YXJpYWJsZXMueC5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcclxuICAgICAgdmFyaWFibGVzLm8uc3R5bGUuY29sb3IgPSBcIiNmMDVcIjtcclxuICAgICAgc2V0UGxheShcIm9cIik7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuICBFbnRlclRvR2FtZSgpO1xyXG59O1xyXG5cclxudmFyaWFibGVzLngub25jbGljayA9ICgpID0+IENob29zZVRpY09yVG9jKHZhcmlhYmxlcy54KTtcclxudmFyaWFibGVzLm8ub25jbGljayA9ICgpID0+IENob29zZVRpY09yVG9jKHZhcmlhYmxlcy5vKTtcclxuIiwiaW1wb3J0IHsgSGlkZUdhbWUgfSBmcm9tIFwiLi9zdGFydEdhbWUuanNcIjtcclxuaW1wb3J0IHtcclxuICBnZXRUaGVtZVNlbGVjdGVkLFxyXG4gIHNldEFsZXJ0TWVzc2FnZSxcclxuICBzZXRQbGF5LFxyXG4gIHNldFRoZW1lTmV4dCxcclxuICBzZXRUaGVtZVNlbGVjdGVkLFxyXG4gIHNldFRpbWVyLFxyXG4gIHNldFdpbixcclxufSBmcm9tIFwiLi9zdGF0ZS5qc1wiO1xyXG5pbXBvcnQgeyB0aGVtZU5vd08sIHRoZW1lTm93WCB9IGZyb20gXCIuL3RoZW1lcy5qc1wiO1xyXG5pbXBvcnQge1xyXG4gIGJveGVzLFxyXG4gIG5hbWUsXHJcbiAgcmVzdWx0LFxyXG4gIHN0YXJ0R2FtZUFyZWEsXHJcbiAgdGhlbWVzLFxyXG4gIHgsXHJcbiAgbyxcclxufSBmcm9tIFwiLi92YXJpYWJsZXMuanNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBFbmRHYW1lID0gKGFyZykgPT4ge1xyXG4gIHNldFRoZW1lU2VsZWN0ZWQoXCJcIik7XHJcbiAgc2V0QWxlcnRNZXNzYWdlKFwiXCIpO1xyXG4gIEhpZGVHYW1lKFwibm9uZVwiKTtcclxuICBzZXRUaGVtZU5leHQoXCJcIik7XHJcbiAgc2V0UGxheShcIlwiKTtcclxuICBib3hlcy5mb3JFYWNoKChib3gpID0+IChib3guaW5uZXJIVE1MID0gXCJcIikpO1xyXG4gIHJlc3VsdC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIHRoZW1lcy5mb3JFYWNoKCh0aGVtZSkgPT4ge1xyXG4gICAgdGhlbWUuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgIHRoZW1lLnN0eWxlLmJvcmRlckltYWdlID0gXCJub25lXCI7XHJcbiAgfSk7XHJcbiAgeC5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcclxuICBvLnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xyXG4gIG5hbWUudmFsdWUgPSBcIlwiO1xyXG5cclxuICBzdGFydEdhbWVBcmVhLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgY29uc3QgZGl2Q29sbGVjdGlvblhPID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgY29uc3QgdGV4dEdhbWUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkdhbWVcIik7XHJcbiAgZGl2Q29sbGVjdGlvblhPLmFwcGVuZENoaWxkKHRoZW1lTm93WCk7XHJcbiAgZGl2Q29sbGVjdGlvblhPLmFwcGVuZENoaWxkKHRoZW1lTm93Tyk7XHJcbiAgZGl2Q29sbGVjdGlvblhPLmFwcGVuZENoaWxkKHRleHRHYW1lKTtcclxuXHJcbiAgcmVzdWx0LmFwcGVuZENoaWxkKGRpdkNvbGxlY3Rpb25YTyk7XHJcbiAgc2V0V2luKGZhbHNlKTtcclxuICBzZXRUaW1lcigxMDApO1xyXG4gIGNvbnN0IG51bXMgPSBhcmc7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgY29sb3JOb3cgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvbG9yID0gZ2V0VGhlbWVTZWxlY3RlZCgpLmluY2x1ZGVzKFwidGhlbWUtMVwiKVxyXG4gICAgICAgID8gXCIjZjA0XCJcclxuICAgICAgICA6IGdldFRoZW1lU2VsZWN0ZWQoKS5pbmNsdWRlcyhcInRoZW1lLTJcIilcclxuICAgICAgICA/IFwiYmxhY2tcIlxyXG4gICAgICAgIDogZ2V0VGhlbWVTZWxlY3RlZCgpLmluY2x1ZGVzKFwidGhlbWUtM1wiKVxyXG4gICAgICAgID8gXCJsaWdodHNlYWdyZWVuXCJcclxuICAgICAgICA6IFwicmViZWNjYXB1cnBsZVwiO1xyXG4gICAgICByZXR1cm4gY29sb3I7XHJcbiAgICB9O1xyXG4gICAgbnVtc1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvck5vdygpO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IHsgSGlkZUdhbWUgfSBmcm9tIFwiLi9zdGFydEdhbWUuanNcIjtcclxuaW1wb3J0IHtcclxuICBnZXRXaG9XaW4sXHJcbiAgZ2V0VGhlbWVTZWxlY3RlZCxcclxuICBzZXRUaGVtZU5leHQsXHJcbiAgc2V0VGhlbWVTZWxlY3RlZCxcclxufSBmcm9tIFwiLi9zdGF0ZS5qc1wiO1xyXG5pbXBvcnQgeyBib3hlcyB9IGZyb20gXCIuL3ZhcmlhYmxlcy5qc1wiO1xyXG5cclxubGV0IFRoZW1lcyA9IFtcInRoZW1lLTFcIiwgXCJ0aGVtZS0yXCIsIFwidGhlbWUtM1wiLCBcInRoZW1lLTRcIl07XHJcbmxldCBuZXh0VGhlbWUgPSBcIlwiO1xyXG5cclxuY29uc3QgTmV4dFJvdW5kID0gKCkgPT4ge1xyXG4gIGlmIChnZXRXaG9XaW4oKSkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIG5leHRUaGVtZSA9IFRoZW1lc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KV07XHJcblxyXG4gICAgICBIaWRlR2FtZShcImJsb2NrXCIpO1xyXG4gICAgICBzZXRUaGVtZVNlbGVjdGVkKG5leHRUaGVtZSk7XHJcbiAgICAgIGJveGVzLmZvckVhY2goKGJveCkgPT4gKGJveC5zdHlsZSA9IFwiYmxvY2tcIikpO1xyXG4gICAgfSwgMzAwMCk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dFJvdW5kO1xyXG4iLCJpbXBvcnQgKiBhcyB2YXJpYWJsZXMgZnJvbSBcIi4vdmFyaWFibGVzLmpzXCI7XHJcbmltcG9ydCB7IGJveGVzIH0gZnJvbSBcIi4vdmFyaWFibGVzLmpzXCI7XHJcbmltcG9ydCB7IGdldFdpbiwgZ2V0V2hvV2luLCBnZXRUaW1lciwgc2V0VGltZXIgfSBmcm9tIFwiLi9zdGF0ZS5qc1wiO1xyXG5jb25zdCBTdGFydFRpbWVyID0gKCkgPT4ge1xyXG4gIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgIHZhcmlhYmxlcy50aW1lci5zdHlsZS53aWR0aCA9IGAke2dldFRpbWVyKCl9JWA7XHJcbiAgICB2YXJpYWJsZXMudGltZXIuc3R5bGUuaGVpZ2h0ID0gYCR7Z2V0VGltZXIoKX0lYDtcclxuICAgIGJveGVzLmZvckVhY2goKGJveCkgPT4ge1xyXG4gICAgICBib3guc3R5bGUud2lkdGggPSBgJHtnZXRUaW1lcigpfSVgO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGdldFRpbWVyKCkgPT09IDAgfHwgZ2V0V2luKCkgfHwgZ2V0V2hvV2luKCkpIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGdldFRpbWVyKCkgPD0gNjAgJiYgZ2V0VGltZXIoKSA+PSAzNiAmJiAhZ2V0V2luKCkgJiYgIWdldFdob1dpbigpKSB7XHJcbiAgICAgIHZhcmlhYmxlcy50aW1lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGFycnl1cFwiKTtcclxuICAgICAgdmFyaWFibGVzLnRpbWVyLmNsYXNzTGlzdC5hZGQoXCJzcGVlZFwiKTtcclxuICAgIH0gZWxzZSBpZiAoZ2V0VGltZXIoKSA8PSAzNSAmJiAhZ2V0V2luKCkpIHtcclxuICAgICAgdmFyaWFibGVzLnRpbWVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzcGVlZFwiKTtcclxuICAgICAgdmFyaWFibGVzLnRpbWVyLmNsYXNzTGlzdC5hZGQoXCJoYXJyeXVwXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRpbWVyKGdldFRpbWVyKCkgLSAxKTtcclxuICB9LCAzNTApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhcnRUaW1lcjtcclxuIiwiaW1wb3J0IHsgZ2V0V2hvV2luIH0gZnJvbSBcIi4vc3RhdGUuanNcIjtcclxuaW1wb3J0IGltZ1RoaW5rQm95IGZyb20gXCIuLi9pbWFnZXMvdGhpbmtCb3kucG5nXCI7XHJcbmltcG9ydCAqIGFzIHZhcmlhYmxlcyBmcm9tIFwiLi92YXJpYWJsZXMuanNcIjtcclxuXHJcbmxldCB3YWl0ID0gMTtcclxuXHJcbmNvbnN0IFdob1dpbiA9ICgpID0+IHtcclxuICBpZiAoZ2V0V2hvV2luKCkpIHtcclxuICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgdmFyaWFibGVzLnJlc3VsdC5pbm5lckhUTUwgPSBgbmV4dCByb3VuZCR7XCIuXCIucmVwZWF0KHdhaXQpfWA7XHJcblxyXG4gICAgICBpZiAod2FpdCA9PT0gMykge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgIGxldCBUaGlua0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgVGhpbmtJbWcuc3JjID0gaW1nVGhpbmtCb3k7XHJcbiAgICAgICAgVGhpbmtJbWcuc3R5bGUuY3NzVGV4dCA9IFwibWFyZ2luOiAwIGF1dG87IGRpc3BsYXk6IGZsZXhcIjtcclxuICAgICAgICB2YXJpYWJsZXMuYm94ZXMuZm9yRWFjaCgoYm94KSA9PiAoYm94LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIikpO1xyXG4gICAgICAgIHZhcmlhYmxlcy5nYW1lX2NvbnRhaW5lci5hcHBlbmRDaGlsZChUaGlua0ltZyk7XHJcbiAgICAgIH1cclxuICAgICAgKyt3YWl0O1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2hvV2luO1xyXG4iLCIvLyBFbmQgR2FtZSBMb2dpY1xyXG5cclxuaW1wb3J0IHsgcmVzdWx0LCBhcHAgfSBmcm9tIFwiLi92YXJpYWJsZXMuanNcIjtcclxuaW1wb3J0IHsgZ2V0V2luLCBzZXRXaW4gfSBmcm9tIFwiLi9zdGF0ZS5qc1wiO1xyXG5pbXBvcnQgeyBnZXRUaGVtZVNlbGVjdGVkIH0gZnJvbSBcIi4vc3RhdGUuanNcIjtcclxuaW1wb3J0IHsgRW5kR2FtZSB9IGZyb20gXCIuL0VuZEdhbWUuanNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBXaW5HYW1lID0gKC4uLmFyZykgPT4ge1xyXG4gIHNldFdpbih0cnVlKTtcclxuICBjb25zdCBudW1zID0gYXJnO1xyXG4gIGlmIChnZXRXaW4oKSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGNvbG9yTm93ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbG9yID0gZ2V0VGhlbWVTZWxlY3RlZCgpLmluY2x1ZGVzKFwidGhlbWUtMVwiKVxyXG4gICAgICAgICAgPyBcImxpZ2h0c2VhZ3JlZW5cIlxyXG4gICAgICAgICAgOiBnZXRUaGVtZVNlbGVjdGVkKCkuaW5jbHVkZXMoXCJ0aGVtZS0yXCIpXHJcbiAgICAgICAgICA/IFwiI2YwNFwiXHJcbiAgICAgICAgICA6IGdldFRoZW1lU2VsZWN0ZWQoKS5pbmNsdWRlcyhcInRoZW1lLTNcIilcclxuICAgICAgICAgID8gXCJyZWJlY2NhcHVycGxlXCJcclxuICAgICAgICAgIDogXCJibGFja1wiO1xyXG4gICAgICAgIHJldHVybiBjb2xvcjtcclxuICAgICAgfTtcclxuICAgICAgbnVtc1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvck5vdygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzdWx0LmNsYXNzTGlzdC5hZGQoXCJ3aW5uZXJcIik7XHJcbiAgYXBwLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlXCIpO1xyXG5cclxuICByZXN1bHQuaW5uZXJIVE1MID0gYDxpbWcgc3JjPSR7bnVtc1swXS5jaGlsZHJlblswXS5zcmN9Lz4gaXMgV2lubmVyYDtcclxuXHJcbiAgbGV0IGNsb3NlID0gMTtcclxuXHJcbiAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgcmVzdWx0LmlubmVySFRNTCArPSBcIi5cIjtcclxuICAgIGlmIChjbG9zZSA9PT0gMykge1xyXG4gICAgICBFbmRHYW1lKG51bXMpO1xyXG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgIH1cclxuICAgICsrY2xvc2U7XHJcbiAgfSwgMTAwMCk7XHJcbn07XHJcbiIsIi8vIEhlcmUgTG9naWMgZ2FtZSBwdXQgeCBvciBvIGluIGJveCBhbmQgV2luR2FtZVxyXG5cclxuaW1wb3J0IHsgV2luR2FtZSB9IGZyb20gXCIuL1dpbkdhbWUuanNcIjtcclxuaW1wb3J0IHsgZ2V0UGxheSwgc2V0UGxheSB9IGZyb20gXCIuL3N0YXRlLmpzXCI7XHJcbmltcG9ydCB7IHRoZW1lTm93TywgdGhlbWVOb3dYIH0gZnJvbSBcIi4vdGhlbWVzLmpzXCI7XHJcbmltcG9ydCB7IGJveGVzLCByZXN1bHQgfSBmcm9tIFwiLi92YXJpYWJsZXMuanNcIjtcclxuaW1wb3J0IHsgc2V0V2hvV2luIH0gZnJvbSBcIi4vc3RhdGUuanNcIjtcclxuaW1wb3J0IFdob1dpbiBmcm9tIFwiLi9XaG9XaW4uanNcIjtcclxuaW1wb3J0IE5leHRSb3VuZCBmcm9tIFwiLi9OZXh0Um91bmQuanNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2dpYyA9ICgpID0+IHtcclxuICBib3hlcy5mb3JFYWNoKChib3gsIGluZGV4KSA9PiB7XHJcbiAgICBpZiAoYm94LmNsYXNzTGlzdC5jb250YWlucyhcInBsYXllclwiKSA9PT0gZmFsc2UpIHtcclxuICAgICAgYm94Lm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgcmVzdWx0Py5jaGlsZHJlblswXT8ucmVtb3ZlKCk7XHJcbiAgICAgICAgaWYgKGJveC5pbm5lckhUTUwubGVuZ3RoID09PSAwICYmIGdldFBsYXkoKSA9PSBcInhcIikge1xyXG4gICAgICAgICAgYm94LmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7dGhlbWVOb3dYLnNyY31cIi8+YDtcclxuICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwicGxheWVyXCIpO1xyXG4gICAgICAgICAgcmVzdWx0LmFwcGVuZENoaWxkKHRoZW1lTm93Tyk7XHJcbiAgICAgICAgICBzZXRQbGF5KFwib1wiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGJveC5pbm5lckhUTUwubGVuZ3RoID09PSAwICYmIGdldFBsYXkoKSA9PSBcIm9cIikge1xyXG4gICAgICAgICAgYm94LmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7dGhlbWVOb3dPLnNyY31cIi8+YDtcclxuICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwicGxheWVyXCIpO1xyXG5cclxuICAgICAgICAgIHJlc3VsdC5hcHBlbmRDaGlsZCh0aGVtZU5vd1gpO1xyXG4gICAgICAgICAgc2V0UGxheShcInhcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSb3dzXHJcbiAgICAgICAgZnVuY3Rpb24gUm93cyhSb3dPbmUsIFJvd1R3bywgUm93VGhyZWUpIHtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgYm94ZXNbUm93T25lXS5pbm5lckhUTUwgPT0gYm94ZXNbUm93VHdvXS5pbm5lckhUTUwgJiZcclxuICAgICAgICAgICAgYm94ZXNbUm93VHdvXS5pbm5lckhUTUwgPT0gYm94ZXNbUm93VGhyZWVdLmlubmVySFRNTCAmJlxyXG4gICAgICAgICAgICBib3hlc1tSb3dPbmVdLmlubmVySFRNbCAhPSBcIlwiICYmXHJcbiAgICAgICAgICAgIGJveGVzW1Jvd1R3b10uaW5uZXJIVE1MICE9IFwiXCJcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICBXaW5HYW1lKGJveGVzW1Jvd09uZV0sIGJveGVzW1Jvd09uZV0sIGJveGVzW1Jvd1RocmVlXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBSb3dzKDAsIDEsIDIpO1xyXG4gICAgICAgIFJvd3MoMywgNCwgNSk7XHJcbiAgICAgICAgUm93cyg2LCA3LCA4KTtcclxuXHJcbiAgICAgICAgLy8gY29sdW1uc1xyXG4gICAgICAgIGNvbnN0IENvbHVtbnMgPSAoQ29sT25lLCBDb2xUd28sIENvbFRocmVlKSA9PiB7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGJveGVzW0NvbE9uZV0uaW5uZXJIVE1MID09IGJveGVzW0NvbFR3b10uaW5uZXJIVE1MICYmXHJcbiAgICAgICAgICAgIGJveGVzW0NvbFR3b10uaW5uZXJIVE1MID09IGJveGVzW0NvbFRocmVlXS5pbm5lckhUTUwgJiZcclxuICAgICAgICAgICAgYm94ZXNbQ29sVGhyZWVdLmlubmVySFRNbCAhPSBcIlwiICYmXHJcbiAgICAgICAgICAgIGJveGVzW0NvbFR3b10uaW5uZXJIVE1MICE9IFwiXCJcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICBXaW5HYW1lKGJveGVzW0NvbE9uZV0sIGJveGVzW0NvbFR3b10sIGJveGVzW0NvbFRocmVlXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgQ29sdW1ucygwLCAzLCA2KTtcclxuICAgICAgICBDb2x1bW5zKDAsIDEsIDIpO1xyXG4gICAgICAgIENvbHVtbnMoMSwgNCwgNyk7XHJcbiAgICAgICAgQ29sdW1ucygyLCA1LCA4KTtcclxuICAgICAgICBDb2x1bW5zKDAsIDQsIDgpO1xyXG4gICAgICAgIENvbHVtbnMoMiwgNCwgNik7XHJcblxyXG4gICAgICAgIC8vIE5vIEFueSBCb2R5IFdpblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGJveGVzWzBdLmlubmVySFRNTC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICBib3hlc1sxXS5pbm5lckhUTUwubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgYm94ZXNbMl0uaW5uZXJIVE1MLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgIGJveGVzWzNdLmlubmVySFRNTC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICBib3hlc1s0XS5pbm5lckhUTUwubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgYm94ZXNbNV0uaW5uZXJIVE1MLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgIGJveGVzWzZdLmlubmVySFRNTC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICBib3hlc1s3XS5pbm5lckhUTUwubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgYm94ZXNbOF0uaW5uZXJIVE1MLmxlbmd0aCA+IDBcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHNldFdob1dpbih0cnVlKTtcclxuICAgICAgICAgIFdob1dpbigpO1xyXG4gICAgICAgICAgTmV4dFJvdW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBnZXRBbGVydE1lc3NhZ2UsIGdldFBsYXksIHNldEFsZXJ0TWVzc2FnZSB9IGZyb20gXCIuL3N0YXRlLmpzXCI7XHJcbmltcG9ydCAqIGFzIHZhcmlhYmxlcyBmcm9tIFwiLi92YXJpYWJsZXMuanNcIjtcclxuaW1wb3J0IFN0YXJ0VGltZXIgZnJvbSBcIi4vU3RhcnRUaW1lci5qc1wiO1xyXG5pbXBvcnQgeyBnZXRUaGVtZVNlbGVjdGVkIH0gZnJvbSBcIi4vc3RhdGUuanNcIjtcclxuXHJcbi8vIEhpZGUgU3RhcnQgR2FtZVxyXG5leHBvcnQgY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xyXG4gIHZhcmlhYmxlcy5uYW1lPy52YWx1ZT8ubGVuZ3RoID09PSAwICYmIEhpZGVHYW1lKFwibm9uZVwiKTtcclxufTtcclxuXHJcbi8vIEhpZGUgR2FtZVxyXG5leHBvcnQgY29uc3QgSGlkZUdhbWUgPSAoc3RhdHVzKSA9PiB7XHJcbiAgdmFyaWFibGVzLmdhbWVfY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBzdGF0dXM7XHJcbn07XHJcblxyXG4vLyBIYW5kbGVFcnJvclxyXG5jb25zdCBIYW5kbGVFcnJvciA9ICgpID0+IHtcclxuICBpZiAoZ2V0QWxlcnRNZXNzYWdlKCkpIHtcclxuICAgIHZhcmlhYmxlcy5lcm9yckVsZW1lbnQuaW5uZXJIVE1MID0gZ2V0QWxlcnRNZXNzYWdlKCk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gSGFuZGxlIEJUbiBTdGFydFxyXG5leHBvcnQgY29uc3QgSGFuZGxlQlROU3RhcnQgPSAoKSA9PiB7XHJcbiAgaWYgKHZhcmlhYmxlcy5uYW1lLnZhbHVlID09PSBcIlwiKSB7XHJcbiAgICBzZXRBbGVydE1lc3NhZ2UoXCJZb3UgTXVzdCBGaWxsIFlvdXIgTmFtZVwiKTtcclxuICB9IGVsc2UgaWYgKGdldFRoZW1lU2VsZWN0ZWQoKSA9PT0gXCJcIikge1xyXG4gICAgc2V0QWxlcnRNZXNzYWdlKFwiWW91IE11c3QgU2VsZWN0IFlvdXIgVGhlbWVcIik7XHJcbiAgfSBlbHNlIGlmIChnZXRQbGF5KCkgPT09IFwiXCIpIHtcclxuICAgIHNldEFsZXJ0TWVzc2FnZShcIllvdSBNdXN0IFNlbGVjdCBYIG9yIE9cIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHZhcmlhYmxlcy5zdGFydEdhbWVBcmVhLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIHZhcmlhYmxlcy5uYW1lQXJlYS50ZXh0Q29udGVudCA9IHZhcmlhYmxlcy5uYW1lLnZhbHVlO1xyXG4gICAgSGlkZUdhbWUoXCJibG9ja1wiKTtcclxuICAgIHNldEFsZXJ0TWVzc2FnZShcIlwiKTtcclxuICAgIFN0YXJ0VGltZXIoKTtcclxuICAgIHZhcmlhYmxlcy5hcHAuY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVcIik7XHJcbiAgICAvLyBzb3VuZFN0YXJ0R2FtZS5wbGF5KCk7XHJcbiAgfVxyXG4gIEhhbmRsZUVycm9yKCk7XHJcbn07XHJcblxyXG52YXJpYWJsZXMuYnRuU3RhcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IEhhbmRsZUJUTlN0YXJ0KCkpO1xyXG4iLCJsZXQgcGxheSA9IFwiXCI7XHJcbmxldCB3aW4gPSBmYWxzZTtcclxubGV0IHdob1dpbiA9IGZhbHNlO1xyXG5sZXQgdGhlbWVTZWxlY3RlZCA9IFwiXCI7XHJcbmxldCB0aGVtZU5leHQgPSBcIlwiO1xyXG5sZXQgYWxlcnRNZXNzYWdlID0gXCJcIjtcclxubGV0IFRpbWVyID0gMTAwO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFBsYXkgPSAoKSA9PiBwbGF5O1xyXG5leHBvcnQgY29uc3Qgc2V0UGxheSA9ICh2YWx1ZSkgPT4gKHBsYXkgPSB2YWx1ZSk7XHJcbmV4cG9ydCBjb25zdCBnZXRXaW4gPSAoKSA9PiB3aW47XHJcbmV4cG9ydCBjb25zdCBzZXRXaW4gPSAodmFsdWUpID0+ICh3aW4gPSB2YWx1ZSk7XHJcbmV4cG9ydCBjb25zdCBnZXRXaG9XaW4gPSAoKSA9PiB3aG9XaW47XHJcbmV4cG9ydCBjb25zdCBzZXRXaG9XaW4gPSAodmFsdWUpID0+ICh3aG9XaW4gPSB2YWx1ZSk7XHJcbmV4cG9ydCBjb25zdCBnZXRUaGVtZVNlbGVjdGVkID0gKCkgPT4gdGhlbWVTZWxlY3RlZDtcclxuZXhwb3J0IGNvbnN0IHNldFRoZW1lU2VsZWN0ZWQgPSAodmFsdWUpID0+ICh0aGVtZVNlbGVjdGVkID0gdmFsdWUpO1xyXG5leHBvcnQgY29uc3QgZ2V0VGhlbWVOZXh0ID0gKCkgPT4gdGhlbWVOZXh0O1xyXG5leHBvcnQgY29uc3Qgc2V0VGhlbWVOZXh0ID0gKHZhbHVlKSA9PiAodGhlbWVOZXh0ID0gdmFsdWUpO1xyXG5leHBvcnQgY29uc3QgZ2V0QWxlcnRNZXNzYWdlID0gKCkgPT4gYWxlcnRNZXNzYWdlO1xyXG5leHBvcnQgY29uc3Qgc2V0QWxlcnRNZXNzYWdlID0gKHZhbHVlKSA9PiAoYWxlcnRNZXNzYWdlID0gdmFsdWUpO1xyXG5leHBvcnQgY29uc3QgZ2V0VGltZXIgPSAoKSA9PiBUaW1lcjtcclxuZXhwb3J0IGNvbnN0IHNldFRpbWVyID0gKHZhbHVlKSA9PiAoVGltZXIgPSB2YWx1ZSk7XHJcbiIsImltcG9ydCB7IGJveGVzLCBnYW1lX2NvbnRhaW5lciwgcmVzdWx0LCB0aGVtZXMgfSBmcm9tIFwiLi92YXJpYWJsZXMuanNcIjtcclxuXHJcbmltcG9ydCBUaGVtZVhPbmUgZnJvbSBcIi4uL2ltYWdlcy9wbGF5ZXJfeC9jbG9zZS5wbmdcIjtcclxuaW1wb3J0IFRoZW1lWFR3byBmcm9tIFwiLi4vaW1hZ2VzL3BsYXllcl94L3gucG5nXCI7XHJcbmltcG9ydCBUaGVtZVhUaHJlZSBmcm9tIFwiLi4vaW1hZ2VzL3BsYXllcl94L3BoYXJtYWN5LnBuZ1wiO1xyXG5pbXBvcnQgVGhlbWVYRm91ciBmcm9tIFwiLi4vaW1hZ2VzL3BsYXllcl94L25vLnBuZ1wiO1xyXG5pbXBvcnQgVGhlbWVPT25lIGZyb20gXCIuLi9pbWFnZXMvcGxheWVyX28vbyAoMSkucG5nXCI7XHJcbmltcG9ydCBUaGVtZU9Ud28gZnJvbSBcIi4uL2ltYWdlcy9wbGF5ZXJfby9sZXR0ZXItby5wbmdcIjtcclxuaW1wb3J0IFRoZW1lT1RocmVlIGZyb20gXCIuLi9pbWFnZXMvcGxheWVyX28vbyAoMikucG5nXCI7XHJcbmltcG9ydCBUaGVtZU9Gb3VyIGZyb20gXCIuLi9pbWFnZXMvcGxheWVyX28vbyAoMykucG5nXCI7XHJcbmltcG9ydCBsZWFmSW1nIGZyb20gXCIuLi9pbWFnZXMvYm9yZGVyLWxlYWYucG5nXCI7XHJcbmltcG9ydCB7IHNldFRoZW1lU2VsZWN0ZWQsIGdldFRoZW1lTmV4dCwgZ2V0VGhlbWVTZWxlY3RlZCB9IGZyb20gXCIuL3N0YXRlLmpzXCI7XHJcbmltcG9ydCBOZXh0Um91bmQgZnJvbSBcIi4vTmV4dFJvdW5kLmpzXCI7XHJcblxyXG5leHBvcnQgbGV0IHRoZW1lTm93WCA9IFwiXCI7XHJcbmV4cG9ydCBsZXQgdGhlbWVOb3dPID0gXCJcIjtcclxuXHJcbi8vIEFwcGx5VGhlbWUgRnVuY3Rpb25hbGl0eVxyXG5jb25zdCBBcHBseVRoZW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3VsdEdhbWVzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGl2Q29sbGVjdGlvblhPID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBjb25zdCB0ZXh0R2FtZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiR2FtZVwiKTtcclxuICAgIGRpdkNvbGxlY3Rpb25YTy5hcHBlbmRDaGlsZCh0aGVtZU5vd1gpO1xyXG4gICAgZGl2Q29sbGVjdGlvblhPLmFwcGVuZENoaWxkKHRoZW1lTm93Tyk7XHJcbiAgICBkaXZDb2xsZWN0aW9uWE8uYXBwZW5kQ2hpbGQodGV4dEdhbWUpO1xyXG5cclxuICAgIHJlc3VsdC5hcHBlbmRDaGlsZChkaXZDb2xsZWN0aW9uWE8pO1xyXG4gIH07XHJcbiAgY29uc3QgU2VsZWN0VGhlbWUgPSAoVGhlbWVYLCBUaGVtZU8pID0+IHtcclxuICAgIGxldCBwbGF5ZXJfeF9JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgbGV0IHBsYXllcl9vX0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcblxyXG4gICAgcGxheWVyX3hfSW1nLnNyYyA9IFRoZW1lWDtcclxuICAgIHBsYXllcl9vX0ltZy5zcmMgPSBUaGVtZU87XHJcblxyXG4gICAgdGhlbWVOb3dYID0gcGxheWVyX3hfSW1nO1xyXG4gICAgdGhlbWVOb3dPID0gcGxheWVyX29fSW1nO1xyXG4gICAgcmVzdWx0Py5jaGlsZHJlblswXT8ucmVtb3ZlKCk7XHJcblxyXG4gICAgcmVzdWx0R2FtZXMoKTtcclxuICB9O1xyXG4gIHRoZW1lTm93WCA9PT0gXCJ0aGVtZS0xXCJcclxuICAgID8gU2VsZWN0VGhlbWUoVGhlbWVYT25lLCBUaGVtZU9PbmUpXHJcbiAgICA6IHRoZW1lTm93WCA9PT0gXCJ0aGVtZS0yXCJcclxuICAgID8gU2VsZWN0VGhlbWUoVGhlbWVYVHdvLCBUaGVtZU9Ud28pXHJcbiAgICA6IHRoZW1lTm93WCA9PT0gXCJ0aGVtZS0zXCJcclxuICAgID8gU2VsZWN0VGhlbWUoVGhlbWVYVGhyZWUsIFRoZW1lT1RocmVlKVxyXG4gICAgOiB0aGVtZU5vd1ggPT09IFwidGhlbWUtNFwiXHJcbiAgICA/IFNlbGVjdFRoZW1lKFRoZW1lWEZvdXIsIFRoZW1lT0ZvdXIpXHJcbiAgICA6IFwiXCI7XHJcbn07XHJcblxyXG4vLyBTZXQgVGhlbWVcclxuZXhwb3J0IGNvbnN0IFNldFRoZW1lID0gKCkgPT4ge1xyXG4gIHRoZW1lcy5mb3JFYWNoKCh0aGVtZSwgaW5kZXgpID0+IHtcclxuICAgIHRoZW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHNldFRoZW1lU2VsZWN0ZWQodGhlbWUuZGF0YXNldC50aGVtZSk7XHJcblxyXG4gICAgICBnYW1lX2NvbnRhaW5lci5jbGFzc05hbWUgPSBnZXRUaGVtZU5leHQoKSA/IFwiXCIgOiB0aGVtZS5kYXRhc2V0LnRoZW1lO1xyXG4gICAgICB0aGVtZU5vd1ggPSBnZXRUaGVtZU5leHQoKSA/IFwiXCIgOiB0aGVtZS5kYXRhc2V0LnRoZW1lO1xyXG4gICAgICB0aGVtZU5vd08gPSBnZXRUaGVtZU5leHQoKSA/IFwiXCIgOiB0aGVtZS5kYXRhc2V0LnRoZW1lO1xyXG4gICAgICBib3hlcy5mb3JFYWNoKChib3gpID0+XHJcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoZ2V0VGhlbWVOZXh0KCkgPyBcIlwiIDogdGhlbWUuZGF0YXNldC50aGVtZSlcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoZW1lLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICB0aGVtZS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIilcclxuICAgICAgICA/ICh0aGVtZS5zdHlsZS5ib3JkZXJJbWFnZSA9IGB1cmwoJHtsZWFmSW1nfSkgMTBgKVxyXG4gICAgICAgIDogKHRoZW1lLnN0eWxlLmJvcmRlckltYWdlID0gYG5vbmVgKTtcclxuXHJcbiAgICAgIEFwcGx5VGhlbWUoKTtcclxuXHJcbiAgICAgIHRoZW1lcy5mb3JFYWNoKChvbGRUaGVtZSwgaWQpID0+IHtcclxuICAgICAgICBpZiAob2xkVGhlbWUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpICYmIGlkICE9PSBpbmRleCkge1xyXG4gICAgICAgICAgb2xkVGhlbWUuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XHJcbiAgICAgICAgICBvbGRUaGVtZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBOZXh0Um91bmQoKTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGdhbWVfY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWNvbnRhaW5lclwiKTtcclxuZXhwb3J0IGNvbnN0IHN0YXJ0R2FtZUFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LWdhbWVcIik7XHJcbmV4cG9ydCBjb25zdCBuYW1lQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0IGxpOmZpcnN0LW9mLXR5cGVcIik7XHJcbmV4cG9ydCBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdCBsaTpudGgtY2hpbGQoMylcIik7XHJcbmV4cG9ydCBjb25zdCB0aW1lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0IGxpOm50aC1jaGlsZCgyKSBwXCIpO1xyXG5leHBvcnQgY29uc3QgYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJveFwiKTtcclxuZXhwb3J0IGNvbnN0IGFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwXCIpO1xyXG5leHBvcnQgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVwiKTtcclxuZXhwb3J0IGNvbnN0IHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInhcIik7XHJcbmV4cG9ydCBjb25zdCBvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvXCIpO1xyXG5leHBvcnQgY29uc3QgYnRuU3RhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LWdhbWUgYnV0dG9uXCIpO1xyXG5leHBvcnQgY29uc3QgdGhlbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50aGVtZXMtYXJlYSBpbWdcIik7XHJcbmV4cG9ydCBjb25zdCBlcm9yckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRyZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyZWVcIik7XHJcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvYmctYnRuLXN0YXJ0LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvYm9yZGVyLWxlYWYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9sZXR0ZXItby5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL28gKDEpLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvbyAoMikucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9vICgzKS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2Nsb3NlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvbm8ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9waGFybWFjeS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3gucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy90aGVtZS0xLlBOR1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvdGhlbWUtMi5QTkdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3RoZW1lLTMuUE5HXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy90aGVtZS00LlBOR1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvdGhpbmtCb3kucG5nXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIEdsb2JhbCBWYXJpYWJsZXNcclxuXHJcbi8vIGhvdCBtb2R1bGUgd2VicGFja1xyXG5cclxuaW1wb3J0ICogYXMgdGhlbWUgZnJvbSBcIi4vbW9kdWxlL3RoZW1lcy5qc1wiO1xyXG5pbXBvcnQgeyBMb2dpYyB9IGZyb20gXCIuL21vZHVsZS9sb2dpYy5qc1wiO1xyXG5pbXBvcnQgeyBzdGFydEdhbWUgfSBmcm9tIFwiLi9tb2R1bGUvc3RhcnRHYW1lLmpzXCI7XHJcbmltcG9ydCB7IENob29zZVRpY09yVG9jIH0gZnJvbSBcIi4vbW9kdWxlL0Nob29zZVhfTy5qc1wiO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBBcHBseVRoZW1lcyBmcm9tIFwiLi9tb2R1bGUvQXBwbHlUaGVtZS5qc1wiO1xyXG5cclxudGhlbWUuU2V0VGhlbWUodGhlbWUudGhlbWVOb3dYLCB0aGVtZS50aGVtZU5vd08pO1xyXG5zdGFydEdhbWUoKTtcclxuTG9naWMoKTtcclxuQXBwbHlUaGVtZXMoKTtcclxuQ2hvb3NlVGljT3JUb2MoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9