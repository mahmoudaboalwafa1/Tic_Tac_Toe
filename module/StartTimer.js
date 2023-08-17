import * as variables from "./variables.js";
import { boxes } from "./variables.js";
import { getWin, getWhoWin } from "./state.js";
let widthTimer = 100;
const StartTimer = () => {
  let interval = setInterval(() => {
    variables.timer.style.width = `${widthTimer}%`;
    variables.timer.style.height = `${widthTimer}%`;
    boxes.forEach((box) => {
      box.style.width = `${widthTimer}%`;
    });

    if (widthTimer === 0 || getWin() || getWhoWin()) {
      clearInterval(interval);
    }

    if (widthTimer <= 60 && widthTimer >= 36 && !getWin() && !getWhoWin()) {
      variables.timer.classList.remove("harryup");
      variables.timer.classList.add("speed");
    } else if (widthTimer <= 35 && !getWin()) {
      variables.timer.classList.remove("speed");
      variables.timer.classList.add("harryup");
    }

    --widthTimer;
  }, 350);
};

export default StartTimer;
