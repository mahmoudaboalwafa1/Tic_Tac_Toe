import { boxes, game_container, result, themes } from "variables.js";
import { setThemeSelected, getThemeNext } from "state.js";
import NextRound from "NextRound.js";

export let themeNowX = "";
export let themeNowO = "";

// ApplyTheme Functionality
const ApplyTheme = () => {
  if (themeNowX === "theme-1") {
    themeNowX = `<img src="./images/player_x/close.png"/>`;
    themeNowO = `<img src="./images/player_o/o (1).png"/>`;
  }
  if (themeNowX === "theme-2") {
    themeNowX = `<img src="./images/player_x/x.png" />`;
    themeNowO = `<img src="./images/player_o/letter-o.png"/>`;
  }
  if (themeNowX === "theme-3") {
    themeNowX = `<img src="./images/player_x/pharmacy.png" />`;
    themeNowO = `<img src="./images/player_o/o (2).png"/>`;
  }
  if (themeNowX === "theme-4") {
    themeNowX = `<img src="./images/player_x/no.png" />`;
    themeNowO = `<img src="./images/player_o/o (3).png"/>`;
  }
  result.innerHTML = `${themeNowX} ${themeNowO} Game`;
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
