// Here Logic game put x or o in box and WinGame

import { WinGame } from "./WinGame.js";
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
      function Rows(boxOne, boxTwo, boxThree) {
        if (
          boxes[boxOne].innerHTML == boxes[boxTwo].innerHTML &&
          boxes[boxTwo].innerHTML == boxes[boxThree].innerHTML &&
          boxes[boxOne].innerHTMl != "" &&
          boxes[boxTwo].innerHTML != ""
        ) {
          WinGame(boxes[boxOne], boxes[boxOne], boxes[boxThree]);
        }
      }

      Rows(0, 1, 2);
      Rows(3, 4, 5);
      Rows(6, 7, 8);

      // columns
      const Columns = (ColOne, ColTwo, ColThree) => {
        if (
          boxes[ColOne].innerHTML == boxes[ColTwo].innerHTML &&
          boxes[ColTwo].innerHTML == boxes[ColThree].innerHTML &&
          boxes[ColThree].innerHTMl != "" &&
          boxes[ColTwo].innerHTML != ""
        ) {
          WinGame(boxes[ColOne], boxes[ColTwo], boxes[ColThree]);
        }
      };

      Columns(0, 3, 6);
      Columns(1, 4, 7);
      Columns(2, 5, 8);
      Columns(0, 4, 8);
      Columns(2, 4, 6);

      // No Any Body Win
      if (
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
