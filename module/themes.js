import { boxes, game_container, result, themes } from "./variables.js";

import ThemeXOne from "../images/player_x/close.png";
import ThemeXTwo from "../images/player_x/x.png";
import ThemeXThree from "../images/player_x/pharmacy.png";
import ThemeXFour from "../images/player_x/no.png";
import ThemeOOne from "../images/player_o/o (1).png";
import ThemeOTwo from "../images/player_o/letter-o.png";
import ThemeOThree from "../images/player_o/o (2).png";
import ThemeOFour from "../images/player_o/o (3).png";
import leafImg from "../images/border-leaf.png";
import { setThemeSelected, getThemeNext, getThemeSelected } from "./state.js";
import NextRound from "./NextRound.js";

export let themeNowX = "";
export let themeNowO = "";

// ApplyTheme Functionality
const ApplyTheme = () => {
  const resultGames = () => {
    const divCollectionXO = document.createElement("div");

    const textGame = document.createTextNode("Game");
    divCollectionXO.appendChild(themeNowX);
    divCollectionXO.appendChild(themeNowO);
    divCollectionXO.appendChild(textGame);

    result.appendChild(divCollectionXO);
  };
  const SelectTheme = (ThemeX, ThemeO) => {
    let player_x_Img = document.createElement("img");
    let player_o_Img = document.createElement("img");

    player_x_Img.src = ThemeX;
    player_o_Img.src = ThemeO;

    themeNowX = player_x_Img;
    themeNowO = player_o_Img;
    result?.children[0]?.remove();

    resultGames();
  };
  themeNowX === "theme-1"
    ? SelectTheme(ThemeXOne, ThemeOOne)
    : themeNowX === "theme-2"
    ? SelectTheme(ThemeXTwo, ThemeOTwo)
    : themeNowX === "theme-3"
    ? SelectTheme(ThemeXThree, ThemeOThree)
    : themeNowX === "theme-4"
    ? SelectTheme(ThemeXFour, ThemeOFour)
    : "";
};

// Set Theme
export const SetTheme = () => {
  themes.forEach((theme, index) => {
    theme.addEventListener("click", () => {
      setThemeSelected(theme.dataset.theme);

      game_container.className = getThemeNext() ? "" : theme.dataset.theme;
      themeNowX = getThemeNext() ? "" : theme.dataset.theme;
      themeNowO = getThemeNext() ? "" : theme.dataset.theme;
      boxes.forEach((box) =>
        box.classList.add(getThemeNext() ? "" : theme.dataset.theme)
      );

      theme.classList.add("active");

      theme.classList.contains("active")
        ? (theme.style.borderImage = `url(${leafImg}) 10`)
        : (theme.style.borderImage = `none`);

      ApplyTheme();

      themes.forEach((oldTheme, id) => {
        if (oldTheme.classList.contains("active") && id !== index) {
          oldTheme.style.border = "none";
          oldTheme.classList.remove("active");
        }
      });
    });
  });
  NextRound();
};
