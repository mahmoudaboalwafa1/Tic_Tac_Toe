import { boxes, game_container, result, themes } from "./variables.js";

import ThemeXOne from "../images/player_x/close.png";
import ThemeXTwo from "../images/player_x/x.png";
import ThemeXThree from "../images/player_x/pharmacy.png";
import ThemeXFour from "../images/player_x/no.png";
import ThemeOOne from "../images/player_o/o (1).png";
import ThemeOTwo from "../images/player_o/letter-o.png";
import ThemeOThree from "../images/player_o/o (2).png";
import ThemeOFour from "../images/player_o/o (3).png";
import { setThemeSelected, getThemeNext } from "./state.js";
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
  themes.forEach((themeArea) => {
    if (themeNowX === "theme-1") {
      let player_x_Img = document.createElement("img");
      let player_o_Img = document.createElement("img");

      player_x_Img.src = ThemeXOne;
      player_o_Img.src = ThemeOOne;

      themeNowX = player_x_Img;
      themeNowO = player_o_Img;
      result?.children[0]?.remove();

      resultGames();
    }
    if (themeNowX === "theme-2") {
      let player_x_Img = document.createElement("img");
      let player_o_Img = document.createElement("img");

      player_x_Img.src = ThemeXTwo;
      player_o_Img.src = ThemeOTwo;

      themeNowX = player_x_Img;
      themeNowO = player_o_Img;
      result?.children[0]?.remove();

      resultGames();
    }
    if (themeNowX === "theme-3") {
      let player_x_Img = document.createElement("img");
      let player_o_Img = document.createElement("img");

      player_x_Img.src = ThemeXThree;
      player_o_Img.src = ThemeOThree;

      themeNowX = player_x_Img;
      themeNowO = player_o_Img;
      result?.children[0]?.remove();

      resultGames();
    }
    if (themeNowX === "theme-4") {
      let player_x_Img = document.createElement("img");
      let player_o_Img = document.createElement("img");

      player_x_Img.src = ThemeXFour;
      player_o_Img.src = ThemeOFour;

      themeNowX = player_x_Img;
      themeNowO = player_o_Img;
      result?.children[0]?.remove();
      resultGames();
    }
  });
};

// Set Theme
export const SetTheme = () => {
  themes.forEach((theme, index) => {
    theme.onclick = () => {
      setThemeSelected(theme.dataset.theme);

      game_container.className = getThemeNext() ? "" : theme.dataset.theme;
      themeNowX = getThemeNext() ? "" : theme.dataset.theme;
      themeNowO = getThemeNext() ? "" : theme.dataset.theme;
      boxes.forEach((box) =>
        box.classList.add(getThemeNext() ? "" : theme.dataset.theme)
      );

      theme.classList.add("active");
      ApplyTheme();

      themes.forEach((oldTheme, id) => {
        if (oldTheme.classList.contains("active") && id !== index) {
          oldTheme.classList.remove("active");
        }
      });
    };
  });
  NextRound();
};
