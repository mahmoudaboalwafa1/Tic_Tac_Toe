import { getPlay } from "state.js";
import * as variables from "variables.js";
import StartTimer from "StartTimer.js";
import { getThemeSelected } from "state.js";

let alertMessage = "";

// Hide Start Game
export const startGame = () => {
  variables.name?.value?.length === 0 && HideGame("none");
};

// Hide Game
const HideGame = (status) => {
  variables.game_container.style.display = status;
};

// HandleError
const HandleError = () => {
  if (alertMessage) {
    variables.erorrElement.innerHTML = alertMessage;
  }
};

// Handle BTn Start
export const HandleBTNStart = () => {
  if (variables.name.value === "") {
    alertMessage = "You Must Fill Your Name";
  } else if (getThemeSelected() === "") {
    alertMessage = "You Must Select Your Theme";
  } else if (getPlay() === "") {
    alertMessage = "You Must Select X or O";
  } else {
    variables.startGameArea.style.display = "none";
    variables.nameArea.textContent = variables.name.value;
    HideGame("block");
    alertMessage = "";
    variables.soundStartGame.play();
  }
  HandleError();
  StartTimer();
};

variables.btnStart.addEventListener("click", () => HandleBTNStart());
