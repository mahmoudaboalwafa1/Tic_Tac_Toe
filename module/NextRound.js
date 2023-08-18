import { getWhoWin, getThemeSelected, setThemeNext } from "./state.js";

let Themes = ["theme-1", "theme-2", "theme-3", "theme-4"];
let nextTheme = "";

const NextRound = () => {
  if (getWhoWin()) {
    console.log(Themes[Math.floor(Math.random() * 4)]);
    setTimeout(() => {
      nextTheme = Themes[Math.floor(Math.random() * 4)];
      getThemeSelected() === nextTheme && getThemeSelected() != 4
        ? setThemeNext(Themes[Math.floor(Math.random() * 4) + 2])
        : setThemeNext(Themes[Math.floor(Math.random() * 4) - 2]);

      console.log(getThemeSelected());
    }, 3000);
  }
};

export default NextRound;
