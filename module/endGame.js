// End Game Logic

import { result, app } from "./variables.js";
import { setWin } from "./state.js";
import { getThemeSelected } from "./state.js";

export const endGame = (num1, num2, num3) => {
  num1.style.backgroundColor =
    getThemeSelected() === "theme-1"
      ? "lightseagreen"
      : getThemeSelected() === "theme-2"
      ? "#f04"
      : getThemeSelected() === "theme-3"
      ? "rebeccapurple"
      : "black";
  num2.style.backgroundColor =
    getThemeSelected() === "theme-1"
      ? "lightseagreen"
      : getThemeSelected() === "theme-2"
      ? "#f04"
      : getThemeSelected() === "theme-3"
      ? "rebeccapurple"
      : "black";
  num3.style.backgroundColor =
    getThemeSelected() === "theme-1"
      ? "lightseagreen"
      : getThemeSelected() === "theme-2"
      ? "#f04"
      : getThemeSelected() === "theme-3"
      ? "rebeccapurple"
      : "black";
  app.classList.add("disable");
  result.classList.add("winner");
  result.appendChild(num1);
  result.innerHTML += "is Winner";
  let close = 1;
  setWin(true);
  let interval = setInterval(() => {
    result.innerHTML += ".";
    if (close === 3) {
      clearInterval(interval);
    }
    ++close;
  }, 1000);
};
