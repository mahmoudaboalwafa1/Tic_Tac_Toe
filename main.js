// Global Variables
const game_container = document.querySelector(".game-container");
const startGameArea = document.querySelector(".start-game");
const result = document.querySelector(".result");
const boxes = document.querySelectorAll(".box");
const app = document.querySelector(".app");
const name = document.getElementById("name");
const x = document.getElementById("x");
const o = document.getElementById("o");
const btnStart = document.querySelector(".start-game button");
const themes = document.querySelectorAll(".themes-area img");

let play = "x";
let themeNowX = "";
let themeNowO = "";
let themeSelected = "";

btnStart.addEventListener("click", () => HandleBTNStart());

const endGame = (num1, num2, num3) => {
  num1.style.backgroundColor = "black";
  num2.style.backgroundColor = "black";
  num3.style.backgroundColor = "black";
  app.classList.add("disable");
  result.innerHTML = `${num1.innerHTML.toUpperCase()} Is Winner`;
  setInterval(() => (result.innerHTML += "."), 1000);
  setTimeout(() => window.location.reload(), 4000);
};

const static = () => {
  boxes.forEach((box, index) => {
    box.onclick = () => {
      if (box.innerHTML == "" && play == "x") {
        box.innerHTML = themeNowX;
        result.innerHTML = themeNowO;
        play = "o";
      } else if (box.innerHTML == "" && play == "o") {
        box.innerHTML = themeNowO;
        result.innerHTML = themeNowX;
        play = "x";
      }
      // Rows
      if (
        boxes[0].innerHTML == boxes[1].innerHTML &&
        boxes[1].innerHTML == boxes[2].innerHTML &&
        boxes[0].innerHTMl != "" &&
        boxes[1].innerHTML != ""
      ) {
        endGame(boxes[0], boxes[1], boxes[2]);
      } else if (
        boxes[3].innerHTML == boxes[4].innerHTML &&
        boxes[4].innerHTML == boxes[5].innerHTML &&
        boxes[4].innerHTMl != "" &&
        boxes[5].innerHTML != ""
      ) {
        endGame(boxes[3], boxes[4], boxes[5]);
      } else if (
        boxes[6].innerHTML == boxes[7].innerHTML &&
        boxes[7].innerHTML == boxes[8].innerHTML &&
        boxes[8].innerHTMl != "" &&
        boxes[7].innerHTML != ""
      ) {
        endGame(boxes[6], boxes[7], boxes[8]);
      }
      // Rows

      // columns
      else if (
        boxes[0].innerHTML == boxes[3].innerHTML &&
        boxes[3].innerHTML == boxes[6].innerHTML &&
        boxes[6].innerHTMl != "" &&
        boxes[3].innerHTML != ""
      ) {
        endGame(boxes[0], boxes[3], boxes[6]);
      } else if (
        boxes[1].innerHTML == boxes[4].innerHTML &&
        boxes[4].innerHTML == boxes[7].innerHTML &&
        boxes[7].innerHTMl != "" &&
        boxes[4].innerHTML != ""
      ) {
        endGame(boxes[1], boxes[4], boxes[7]);
      } else if (
        boxes[2].innerHTML == boxes[5].innerHTML &&
        boxes[5].innerHTML == boxes[8].innerHTML &&
        boxes[8].innerHTMl != "" &&
        boxes[5].innerHTML != ""
      ) {
        endGame(boxes[2], boxes[5], boxes[8]);
      } else if (
        boxes[0].innerHTML == boxes[4].innerHTML &&
        boxes[4].innerHTML == boxes[8].innerHTML &&
        boxes[8].innerHTMl != "" &&
        boxes[4].innerHTML != ""
      ) {
        endGame(boxes[0], boxes[4], boxes[8]);
      } else if (
        boxes[2].innerHTML == boxes[4].innerHTML &&
        boxes[4].innerHTML == boxes[6].innerHTML &&
        boxes[6].innerHTMl != "" &&
        boxes[4].innerHTML != ""
      ) {
        endGame(boxes[2], boxes[4], boxes[6]);
      }
    };
  });
};

const HideGame = (status) => {
  game_container.style.display = status;
};

const startGame = () => {
  name?.value?.length === 0 && HideGame("none");
};

const HandleBTNStart = () => {
  name?.value?.length > 0 && HideGame("block");
  startGameArea.style.display = "none";
};

// Choose X or O
const ChooseTicOrToc = (player) => {
  switch (player) {
    case x:
      o.style.color = "black";
      x.style.color = "#f05";
      play = "x";
      break;
    case o:
      x.style.color = "black";
      o.style.color = "#f05";
      play = "o";
      break;
  }
  EnterToGame();
};

x.onclick = () => ChooseTicOrToc(x);
o.onclick = () => ChooseTicOrToc(o);

// Enter To Game Functionality
const EnterToGame = () => {
  play && name.value.length > 0 ? startGame("none") : "";
};

// ApplyTheme Functionality
const ApplyTheme = () => {
  if (themeNowX === "theme-1") {
    themeNowX = `<img src="./images/player_x/close.png"/>`;
    themeNowO = `<img src="./images/player_o/o (1).png"/>`;
  } else if (themeNowX === "theme-2") {
    themeNowX = `<img src="./images/player_x/x.png" />`;
    themeNowO = `<img src="./images/player_o/letter-o.png"/>`;
  } else if (themeNowX === "theme-3") {
    themeNowX = `<img src="./images/player_x/pharmacy.png" />`;
    themeNowO = `<img src="./images/player_o/o (2).png"/>`;
  } else if (themeNowX === "theme-4") {
    themeNowX = `<img src="./images/player_x/no.png" />`;
    themeNowO = `<img src="./images/player_o/o (3).png"/>`;
  }
  result.innerHTML = `${themeNowX} ${themeNowO} Game`;
};

// Set Theme
const SetTheme = () => {
  themes.forEach((theme) => {
    theme.onclick = () => {
      themeSelected = theme.dataset.theme;
      game_container.className = theme.dataset.theme;
      themeNowX = theme.dataset.theme;
      themeNowO = theme.dataset.theme;
      boxes.forEach((box) => box.classList.add(theme.dataset.theme));

      ApplyTheme();
    };
  });
};

SetTheme();

startGame();
static();
