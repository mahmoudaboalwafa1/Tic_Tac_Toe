// End Game Logic

import { themeSelected } from "themes.js";
import { result, app } from "variables.js";

export const endGame = (num1, num2, num3) => {
  num1.style.backgroundColor =
    themeSelected === "theme-1"
      ? "lightseagreen"
      : themeSelected === "theme-2"
      ? "#f04"
      : themeSelected === "theme-3"
      ? "rebeccapurple"
      : "black";
  num2.style.backgroundColor =
    themeSelected === "theme-1"
      ? "lightseagreen"
      : themeSelected === "theme-2"
      ? "#f04"
      : themeSelected === "theme-3"
      ? "rebeccapurple"
      : "black";
  num3.style.backgroundColor =
    themeSelected === "theme-1"
      ? "lightseagreen"
      : themeSelected === "theme-2"
      ? "#f04"
      : themeSelected === "theme-3"
      ? "rebeccapurple"
      : "black";
  app.classList.add("disable");
  result.classList.add("winner");
  result.innerHTML = `${num1.innerHTML.toUpperCase()} Is Winner`;
  setInterval(() => (result.innerHTML += "."), 1000);
  setTimeout(() => window.location.reload(), 4000);
};
