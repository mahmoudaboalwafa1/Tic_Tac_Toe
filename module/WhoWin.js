import { getWhoWin } from "./state.js";
import imgThinkBoy from "../images/thinkBoy.png";
import * as variables from "./variables.js";

let wait = 1;

const WhoWin = () => {
  if (getWhoWin()) {
    let interval = setInterval(() => {
      variables.result.innerHTML = `next round${".".repeat(wait)}`;

      if (wait === 3) {
        clearInterval(interval);
        let ThinkImg = document.createElement("img");
        ThinkImg.src = imgThinkBoy;
        ThinkImg.style.cssText = "margin: 0 auto; display: flex";
        variables.boxes.forEach((box) => box.remove());
        variables.game_container.appendChild(ThinkImg);
      }
      ++wait;
    }, 1000);
  }
};

export default WhoWin;
