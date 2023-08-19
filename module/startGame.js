import { getAlertMessage, getPlay, setAlertMessage } from "./state.js";
import * as variables from "./variables.js";
import StartTimer from "./StartTimer.js";
import { getThemeSelected } from "./state.js";
import PlayWithFriend from "./PlayWithFriend.js";
import PlayWithPc from "./PlayWithPc.js";

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

export const changeColorBoxes = () => {
  StartTimer();
  variables.boxes.forEach((box) => {
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
  variables.app.classList.remove("disable");
};

// Handle BTn Start
export const HandleBTNStart = (playing) => {
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
    changeColorBoxes();

    playing.includes("friend") ? PlayWithFriend() : PlayWithPc();

    // soundStartGame.play();
  }
  HandleError();
};

variables.playWithFriend.addEventListener("click", () =>
  HandleBTNStart("friend")
);
variables.playWithComputer.addEventListener("click", () =>
  HandleBTNStart("computer")
);
