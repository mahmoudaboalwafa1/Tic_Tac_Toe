import ThemeAreaOne from "../images/themes/theme-1.PNG";
import ThemeAreaTwo from "../images/themes/theme-2.PNG";
import ThemeAreaThree from "../images/themes/theme-3.PNG";
import ThemeAreaFour from "../images/themes/theme-4.PNG";
import imgTree from "../images/tree.png";
import btnStartImg from "../images/bg-btn-start.jpg";
import leafImg from "../images/border-leaf.png";
import { btnStart, themes, tree } from "./variables.js";

const themeArea = [ThemeAreaOne, ThemeAreaTwo, ThemeAreaThree, ThemeAreaFour];

const ApplyThemes = () => {
  document.body.style.borderImage = leafImg;
  themes.forEach((theme, index) => {
    theme.src = themeArea[index];
  });
  tree.style.backgroundImage = imgTree;
  btnStart.style.backgroundImage = btnStartImg;
};

export default ApplyThemes;
