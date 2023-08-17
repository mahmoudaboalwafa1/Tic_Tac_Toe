// Global Variables

// hot module webpack
if (module.hot) {
  module.hot.accept();
}

import * as theme from "themes.js";
import { Logic } from "Logic.js";
import { startGame } from "startGame.js";
import { ChooseTicOrToc } from "ChooseX_O.js";
import style from "./style.css";
import Players from "players.js";

theme.SetTheme(theme.themeNowX, theme.themeNowO);
Players();
startGame();
Logic();
ChooseTicOrToc();
