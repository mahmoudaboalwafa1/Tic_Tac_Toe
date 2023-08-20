// Here Logic game put x or o in box and WinGame

import {
  getPlay,
  getPlayComputer,
  getWin,
  setAlertMessage,
  setPlay,
} from "./state.js";
import { themeNowO, themeNowX } from "./themes.js";
import { boxes, result } from "./variables.js";
import { setWhoWin } from "./state.js";
import NextRound from "./NextRound.js";
import MatchColsAndRows from "./MatchColRow.js";

export const Logic = (playing) => {
  setAlertMessage("");
  boxes.forEach((box) => {
    box.onclick = () => {
      if (box.innerHTML.length === 0) {
        result?.children[0]?.remove();
        if (box.innerHTML.length === 0 && getPlay() == "x") {
          box.innerHTML = `<img src="${themeNowX.src}"/>`;
          result.appendChild(themeNowO);
          playing != "computer" && setPlay("o");
          setWhoWin(false);
        } else if (box.innerHTML.length === 0 && getPlay() == "o") {
          box.innerHTML = `<img src="${themeNowO.src}"/>`;

          result.appendChild(themeNowX);
          playing != "computer" && setPlay("x");
          setWhoWin(false);
        }

        MatchColsAndRows();

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
        }

        if (playing === "computer") {
          let emptyBoxes = [...boxes].filter(
            (boxs) => boxs.innerHTML.length === 0
          );

          const randPlay = Math.floor(Math.random() * emptyBoxes.length);

          if (
            emptyBoxes[randPlay]?.innerHTML?.length === 0 &&
            getPlayComputer() == "x" &&
            !getWin()
          ) {
            emptyBoxes[randPlay].innerHTML = `<img src="${themeNowX.src}"/>`;

            result.innerHTML = `You:<img src="${themeNowO.src}"/>PC:<img src="${themeNowX.src}"/>`;
            setWhoWin();
          } else if (
            emptyBoxes[randPlay]?.innerHTML?.length === 0 &&
            getPlayComputer() == "o" &&
            !getWin()
          ) {
            result.innerHTML = `You:<img src="${themeNowX.src}"/>PC:<img src="${themeNowO.src}"/>`;
            emptyBoxes[randPlay].innerHTML = `<img src="${themeNowO.src}"/>`;

            setWhoWin(false);
          }
          MatchColsAndRows();
        }
      }
    };
  });
};
