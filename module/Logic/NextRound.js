import { reset } from "./EndGame";
import { HideGame, changeColorBoxes } from "./startGame.js";
import { getWhoWin, setTimer } from "../Global/state.js";
import { app, boxes, result, result_container } from "../Global/variables.js";

let Themes = ["theme-1", "theme-2", "theme-3", "theme-4"];
let nextTheme = "";
let round = 1;
const NextRound = () => {
  result.innerHTML = "";

  if (getWhoWin()) {
    setTimer(95);
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
