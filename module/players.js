const treePlayers = document.querySelector(".tree");
const textPlayers = document.querySelector(".players");

let animTop = 500;
const Players = () => {
  treePlayers.onclick = () => {
    treePlayers.classList.toggle("show-players");
    textPlayers.classList.toggle("show-players");
  };
};

export default Players;
