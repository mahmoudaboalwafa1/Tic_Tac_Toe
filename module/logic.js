// Here Logic game put x or o in box and WinGame

import { WinGame } from "./WinGame.js";
import { getPlay, setAlertMessage, setPlay } from "./state.js";
import { themeNowO, themeNowX } from "./themes.js";
import { boxes, result } from "./variables.js";
import { setWhoWin } from "./state.js";
import NextRound from "./NextRound.js";
import StartTimer from "./StartTimer.js";

export const Logic = () => {
  setAlertMessage("");
  boxes.forEach((box, index) => {
    if (box.classList.contains("player") === false) {
      box.onclick = () => {
        result?.children[0]?.remove();
        if (box.innerHTML.length === 0 && getPlay() == "x") {
          box.innerHTML = `<img src="${themeNowX.src}"/>`;
          box.classList.add("player");
          result.appendChild(themeNowO);
          setPlay("o");
        } else if (box.innerHTML.length === 0 && getPlay() == "o") {
          box.innerHTML = `<img src="${themeNowO.src}"/>`;
          box.classList.add("player");

          result.appendChild(themeNowX);
          setPlay("x");
        }

        // Rows
        function Rows(RowOne, RowTwo, RowThree) {
          if (
            boxes[RowOne].innerHTML == boxes[RowTwo].innerHTML &&
            boxes[RowTwo].innerHTML == boxes[RowThree].innerHTML &&
            boxes[RowOne].innerHTMl != "" &&
            boxes[RowTwo].innerHTML != ""
          ) {
            WinGame(boxes[RowOne], boxes[RowOne], boxes[RowThree]);
          }
        }

        Rows(2, 6, 4);
        Rows(2, 4, 6);
        Rows(0, 4, 8);
        Rows(0, 8, 4);

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
        Columns(0, 1, 2);
        Columns(6, 7, 8);
        Columns(1, 4, 7);
        Columns(3, 4, 5);
        Columns(2, 5, 8);

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
          NextRound();
          StartTimer();
        }
      };
    }
  });
};
