import * as variables from "./Global/variables.js";
import { boxes } from "./Global/variables.js";
import { getWin, getWhoWin, getTimer, setTimer } from "./Global/state.js";
import { EndGame } from "./Logic/EndGame.js";
const StartTimer = () => {
  let interval = setInterval(() => {
    variables.timer.style.width = `${getTimer()}%`;
    variables.timer.style.height = `${getTimer()}%`;
    variables.app.classList.remove("disable");

    boxes.forEach((box) => {
      box.style.width = `${getTimer()}%`;
    });

    if (getTimer() === 0 || getWin()) {
      clearInterval(interval);
      EndGame();
    }

    if (getTimer() <= 60 && getTimer() >= 36 && !getWin() && !getWhoWin()) {
      variables.timer.classList.remove("harryup");
      variables.timer.classList.add("speed");
    } else if (getTimer() <= 35 && !getWin()) {
      variables.timer.classList.remove("speed");
      variables.timer.classList.add("harryup");
    }

    setTimer(getTimer() - 1);
  }, 350);
};

export default StartTimer;
