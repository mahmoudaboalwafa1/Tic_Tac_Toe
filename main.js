// Global Variables

import * as theme from "themes.js";
import { Logic } from "Logic.js";
import { startGame } from "startGame.js";
import { ChooseTicOrToc } from "ChooseX_O.js";
import style from "./style.css";

theme.SetTheme(theme.themeNowX, theme.themeNowO);

startGame();
Logic();
ChooseTicOrToc();
