import * as theme from "./module/Global/themes.js";
import { startGame } from "./module/Logic/startGame.js";
import { ChooseTicOrToc } from "./module/Global/ChooseX_O.js";
import style from "./style.css";
import ApplyThemes from "./module/Global/ApplyTheme.js";

theme.SetTheme(theme.themeNowX, theme.themeNowO);
startGame();
ApplyThemes();
ChooseTicOrToc();
