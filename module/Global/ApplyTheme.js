import ThemeAreaOne from "../../images/themes/theme-1.PNG";
import ThemeAreaTwo from "../../images/themes/theme-2.PNG";
import ThemeAreaThree from "../../images/themes/theme-3.PNG";
import ThemeAreaFour from "../../images/themes/theme-4.PNG";
import leafImg from "../../images/border-leaf.png";
import { app, themes } from "./variables";
import themeBgBodyOne from "../../images/themes/bg-theme-2.jpg";

const themeArea = [ThemeAreaOne, ThemeAreaTwo, ThemeAreaThree, ThemeAreaFour];

const ApplyThemes = () => {
  document.body.style.backgroundImage = `url("${themeBgBodyOne}")`;
  app.style.backgroundImage = `url("${themeBgBodyOne}")`;

  themes.forEach((theme, index) => {
    theme.src = themeArea[index];
    theme.addEventListener("mouseenter", () => {
      !theme.classList.contains("active")
        ? (theme.style.borderImage = `url(${leafImg}) 10`)
        : "";
    });
    theme.addEventListener("mouseleave", () => {
      !theme.classList.contains("active")
        ? (theme.style.borderImage = "none")
        : "";
    });
  });
};

export default ApplyThemes;
