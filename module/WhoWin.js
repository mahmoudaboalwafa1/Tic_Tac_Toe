import { getWhoWin } from "./state.js";
import * as variables from "./variables.js";

let wait = 1;

const WhoWin = () => {
  if (getWhoWin()) {
    let interval = setInterval(() => {
      variables.result.innerHTML = `next round${".".repeat(wait)}`;

      if (wait === 3) {
        clearInterval(interval);
      }
      ++wait;
    }, 1000);
  }
};

export default WhoWin;
