import { reset } from "./EndGame.js";
import { HideGame, changeColorBoxes } from "./startGame.js";
import { getWhoWin, setTimer, setWhoWin } from "./state.js";
import { app, boxes, result, result_container } from "./variables.js";

let Themes = ["theme-1", "theme-2", "theme-3", "theme-4"];
let nextTheme = "";
let round = 1;
const NextRound = () => {
  if (getWhoWin()) {
    setTimer(100);
    app.classList.add("disable");
    setTimeout(() => {
      result.innerHTML = "";
      nextTheme = Themes[Math.floor(Math.random() * 4)];

      HideGame("block");
      result_container.classList.add(nextTheme);
      boxes.forEach((box) => {
        box.className = "box";
        box.classList.add(nextTheme);
      });
      changeColorBoxes();
      app.classList.remove("disable");
      ++round;
      reset(`Round ${round}`);
    }, 3000);
  }
};

export default NextRound;
