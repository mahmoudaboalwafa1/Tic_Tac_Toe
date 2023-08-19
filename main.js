import * as theme from "./module/themes.js";
import { startGame } from "./module/startGame.js";
import { ChooseTicOrToc } from "./module/ChooseX_O.js";
import style from "./style.css";
import ApplyThemes from "./module/ApplyTheme.js";

theme.SetTheme(theme.themeNowX, theme.themeNowO);
startGame();
ApplyThemes();
ChooseTicOrToc();
