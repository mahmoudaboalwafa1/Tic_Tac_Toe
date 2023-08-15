// Global Variables
import * as theme from "./module/themes.js";
import { Logic } from "./module/Logic.js";
import { startGame } from "./module/startGame.js";
import { ChooseTicOrToc } from "./module/ChooseX_O.js";

theme.SetTheme(theme.themeNowX, theme.themeNowO);

startGame();
Logic();
ChooseTicOrToc();
