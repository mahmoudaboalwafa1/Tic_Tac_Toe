// Global Variables
import {
  game_container,
  startGameArea,
  nameArea,
  btnStart,
  erorrElement,
  name,
  o,
  soundStartGame,
  x,
} from "./module/variables.js";
import {
  SetTheme,
  themeSelected,
  themeNowX,
  themeNowO,
} from "./module/themes.js";
import { getPlay, setPlay } from "./module/state.js";
import { Logic } from "./module/Logic.js";

let alertMessage = "";

SetTheme(themeNowX, themeNowO);

btnStart.addEventListener("click", () => HandleBTNStart());

const HideGame = (status) => {
  game_container.style.display = status;
};

const startGame = () => {
  name?.value?.length === 0 && HideGame("none");
};

const HandleBTNStart = () => {
  if (name.value === "") {
    alertMessage = "You Must Fill Your Name";
  } else if (themeSelected === "") {
    alertMessage = "You Must Select Your Theme";
  } else if (getPlay() === "") {
    alertMessage = "You Must Select X or O";
  } else {
    startGameArea.style.display = "none";
    nameArea.textContent = name.value;
    HideGame("block");
    alertMessage = "";
    soundStartGame.play();
  }
  HandleError();
};

// Choose X or O
const ChooseTicOrToc = (player) => {
  switch (player) {
    case x:
      o.style.color = "black";
      x.style.color = "#f05";
      setPlay("x");
      break;
    case o:
      x.style.color = "black";
      o.style.color = "#f05";
      setPlay("o");
      break;
  }
  EnterToGame();
};

x.onclick = () => ChooseTicOrToc(x);
o.onclick = () => ChooseTicOrToc(o);

// Enter To Game Functionality
const EnterToGame = () => {
  getPlay() && name.value.length > 0 ? startGame("none") : "";
};

// HandleError

const HandleError = () => {
  if (alertMessage) {
    erorrElement.innerHTML = alertMessage;
  }
};

startGame();
Logic();
