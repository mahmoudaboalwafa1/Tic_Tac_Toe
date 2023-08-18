import { HideGame } from "./startGame.js";
import {
  getThemeSelected,
  setAlertMessage,
  setPlay,
  setThemeNext,
  setThemeSelected,
  setTimer,
  setWin,
} from "./state.js";
import { themeNowO, themeNowX } from "./themes.js";
import {
  boxes,
  name,
  result,
  startGameArea,
  themes,
  x,
  o,
} from "./variables.js";

const EndGame = (arg) => {
  setThemeSelected("");
  setAlertMessage("");
  HideGame("none");
  setThemeNext("");
  setPlay("");
  boxes.forEach((box) => (box.innerHTML = ""));
  result.innerHTML = "";
  themes.forEach((theme) => {
    theme.className = "";
    theme.style.borderImage = "none";
  });
  x.style.color = "black";
  o.style.color = "black";
  name.value = "";

  startGameArea.style.display = "block";
  const divCollectionXO = document.createElement("div");

  const textGame = document.createTextNode("Game");
  divCollectionXO.appendChild(themeNowX);
  divCollectionXO.appendChild(themeNowO);
  divCollectionXO.appendChild(textGame);

  result.appendChild(divCollectionXO);
  setWin(false);
  setTimer(100);
  const nums = arg;

  for (let i = 0; i < nums.length; i++) {
    const colorNow = () => {
      const color = getThemeSelected().includes("theme-1")
        ? "#f04"
        : getThemeSelected().includes("theme-2")
        ? "black"
        : getThemeSelected().includes("theme-3")
        ? "lightseagreen"
        : "rebeccapurple";
      return color;
    };
    nums[i].style.backgroundColor = colorNow();
  }
};

export default EndGame;
