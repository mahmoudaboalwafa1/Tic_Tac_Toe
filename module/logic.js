// Here Logic game put x or o in box and endGame

import { endGame } from "./endGame.js";
import { getPlay, setPlay } from "./state.js";
import { themeNowO, themeNowX } from "./themes.js";
import { boxes, result } from "./variables.js";
import { setWhoWin } from "./state.js";
import WhoWin from "./WhoWin.js";
import NextRound from "./NextRound.js";

export const Logic = () => {
  boxes.forEach((box, index) => {
    box.onclick = () => {
      result.children[0].remove();
      if (box.innerHTML.length === 0 && getPlay() == "x") {
        box.innerHTML = `<img src="${themeNowX.src}"/>`;
        result.appendChild(themeNowO);
        setPlay("o");
      } else if (box.innerHTML.length === 0 && getPlay() == "o") {
        box.innerHTML = `<img src="${themeNowO.src}"/>`;
        result.appendChild(themeNowX);
        setPlay("x");
      }
      // Rows
      if (
        boxes[0].innerHTML == boxes[1].innerHTML &&
        boxes[1].innerHTML == boxes[2].innerHTML &&
        boxes[0].innerHTMl != "" &&
        boxes[1].innerHTML != ""
      ) {
        endGame(boxes[0], boxes[1], boxes[2]);
      } else if (
        boxes[3].innerHTML == boxes[4].innerHTML &&
        boxes[4].innerHTML == boxes[5].innerHTML &&
        boxes[4].innerHTMl != "" &&
        boxes[5].innerHTML != ""
      ) {
        endGame(boxes[3], boxes[4], boxes[5]);
      } else if (
        boxes[6].innerHTML == boxes[7].innerHTML &&
        boxes[7].innerHTML == boxes[8].innerHTML &&
        boxes[8].innerHTMl != "" &&
        boxes[7].innerHTML != ""
      ) {
        endGame(boxes[6], boxes[7], boxes[8]);
      }
      // Rows

      // columns
      else if (
        boxes[0].innerHTML == boxes[3].innerHTML &&
        boxes[3].innerHTML == boxes[6].innerHTML &&
        boxes[6].innerHTMl != "" &&
        boxes[3].innerHTML != ""
      ) {
        endGame(boxes[0], boxes[3], boxes[6]);
      } else if (
        boxes[1].innerHTML == boxes[4].innerHTML &&
        boxes[4].innerHTML == boxes[7].innerHTML &&
        boxes[7].innerHTMl != "" &&
        boxes[4].innerHTML != ""
      ) {
        endGame(boxes[1], boxes[4], boxes[7]);
      } else if (
        boxes[2].innerHTML == boxes[5].innerHTML &&
        boxes[5].innerHTML == boxes[8].innerHTML &&
        boxes[8].innerHTMl != "" &&
        boxes[5].innerHTML != ""
      ) {
        endGame(boxes[2], boxes[5], boxes[8]);
      } else if (
        boxes[0].innerHTML == boxes[4].innerHTML &&
        boxes[4].innerHTML == boxes[8].innerHTML &&
        boxes[8].innerHTMl != "" &&
        boxes[4].innerHTML != ""
      ) {
        endGame(boxes[0], boxes[4], boxes[8]);
      } else if (
        boxes[2].innerHTML == boxes[4].innerHTML &&
        boxes[4].innerHTML == boxes[6].innerHTML &&
        boxes[6].innerHTMl != "" &&
        boxes[4].innerHTML != ""
      ) {
        endGame(boxes[2], boxes[4], boxes[6]);
      } else if (
        boxes[0].innerHTML.length > 0 &&
        boxes[1].innerHTML.length > 0 &&
        boxes[2].innerHTML.length > 0 &&
        boxes[3].innerHTML.length > 0 &&
        boxes[4].innerHTML.length > 0 &&
        boxes[5].innerHTML.length > 0 &&
        boxes[6].innerHTML.length > 0 &&
        boxes[7].innerHTML.length > 0 &&
        boxes[8].innerHTML.length > 0
      ) {
        setWhoWin(true);
        WhoWin();
        NextRound();
      }
    };
  });
};
