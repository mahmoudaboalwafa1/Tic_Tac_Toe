import { getAlertMessage, getPlay, setAlertMessage, setWin } from "./state.js";
import * as variables from "./variables.js";
import StartTimer from "./StartTimer.js";
import { getThemeSelected } from "./state.js";

// Hide Start Game
export const startGame = () => {
  variables.name?.value?.length === 0 && HideGame("none");
};

// Hide Game
export const HideGame = (status) => {
  variables.game_container.style.display = status;
};

// HandleError
const HandleError = () => {
  if (getAlertMessage()) {
    variables.erorrElement.innerHTML = getAlertMessage();
  }
};

// Handle BTn Start
export const HandleBTNStart = () => {
  if (variables.name.value === "") {
    setAlertMessage("You Must Fill Your Name");
  } else if (getThemeSelected() === "") {
    setAlertMessage("You Must Select Your Theme");
  } else if (getPlay() === "") {
    setAlertMessage("You Must Select X or O");
  } else {
    variables.startGameArea.style.display = "none";
    variables.nameArea.textContent = variables.name.value;
    HideGame("block");
    setAlertMessage("");
    variables.app.classList.remove("disable");
    // soundStartGame.play();
  }
  HandleError();
  StartTimer();
};

variables.btnStart.addEventListener("click", () => HandleBTNStart());
