import { HideGame } from "./startGame.js";
import {
  setAlertMessage,
  setPlay,
  setThemeNext,
  setThemeSelected,
  setTimer,
  setWin,
} from "../Global/state.js";
import { themeNowO, themeNowX } from "../Global/themes.js";
import {
  boxes,
  name,
  result,
  startGameArea,
  themes,
  x,
  o,
  timer,
} from "../Global/variables.js";

export const reset = (text) => {
  setThemeSelected("");
  setAlertMessage("");
  boxes.forEach((box) => (box.innerHTML = ""));
  timer.className = "";

  name.value = "";
  const divCollectionXO = document.createElement("div");
  const textGame = document.createTextNode(text);
  divCollectionXO.appendChild(themeNowX);
  divCollectionXO.appendChild(themeNowO);
  divCollectionXO.appendChild(textGame);

  result.appendChild(divCollectionXO);
};

export const EndGame = () => {
  reset("Game");
  result.innerHTML = "";
  themes.forEach((theme) => {
    theme.className = "";
    theme.style.borderImage = "none";
  });
  startGameArea.style.display = "block";
  x.style.color = "black";
  o.style.color = "black";

  name.value = "";
  HideGame("none");
  setWin(false);
  setTimer(95);
  setThemeNext("");
  setPlay("");
};
