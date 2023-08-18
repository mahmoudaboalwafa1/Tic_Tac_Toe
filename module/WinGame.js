// End Game Logic

import { result, app } from "./variables.js";
import { getWin, setWin } from "./state.js";
import { getThemeSelected } from "./state.js";
import EndGame from "./EndGame.js";

export const WinGame = (...arg) => {
  setWin(true);
  const nums = arg;
  if (getWin()) {
    for (let i = 0; i < nums.length; i++) {
      const colorNow = () => {
        const color = getThemeSelected().includes("theme-1")
          ? "lightseagreen"
          : getThemeSelected().includes("theme-2")
          ? "#f04"
          : getThemeSelected().includes("theme-3")
          ? "rebeccapurple"
          : "black";
        return color;
      };
      nums[i].style.backgroundColor = colorNow();
    }
  }

  result.classList.add("winner");
  app.classList.add("disable");

  result.innerHTML = `<img src=${nums[0].children[0].src}/> is Winner`;

  let close = 1;

  let interval = setInterval(() => {
    result.innerHTML += ".";
    if (close === 3) {
      clearInterval(interval);
      EndGame(nums);
    }
    ++close;
  }, 1000);
};
