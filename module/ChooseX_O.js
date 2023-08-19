// here choose x or o when onclick on word choose x or o

import * as variables from "./variables.js";
import { getPlay, setPlay, setPlayComputer } from "./state.js";
import { startGame } from "./startGame.js";

// Enter To Game Functionality
const EnterToGame = () => {
  getPlay() && variables.name.value.length > 0 ? startGame("none") : "";
};

// Choose X or O
export const ChooseTicOrToc = (player) => {
  switch (player) {
    case variables.x:
      variables.o.style.color = "black";
      variables.x.style.color = "#f05";
      setPlay("x");
      setPlayComputer("o");
      break;
    case variables.o:
      variables.x.style.color = "black";
      variables.o.style.color = "#f05";
      setPlay("o");
      setPlayComputer("x");
      break;
  }
  EnterToGame();
};

variables.x.onclick = () => ChooseTicOrToc(variables.x);
variables.o.onclick = () => ChooseTicOrToc(variables.o);
