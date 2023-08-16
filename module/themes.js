import { boxes, game_container, result, themes } from "./variables.js";

export let themeSelected = "";
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
      themeSelected = theme.dataset.theme;
      game_container.className = theme.dataset.theme;
      themeNowX = theme.dataset.theme;
      themeNowO = theme.dataset.theme;
      boxes.forEach((box) => box.classList.add(theme.dataset.theme));

      theme.classList.add("active");
      ApplyTheme();

      themes.forEach((oldTheme, id) => {
        if (oldTheme.classList.contains("active") && id !== index) {
          oldTheme.classList.remove("active");
        }
      });
    };
  });
};
