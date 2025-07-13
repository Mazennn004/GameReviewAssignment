import { UserInterface } from "./ui.js";
import { Details } from "./gameDetails.js";

export class GamesList {
  ui = new UserInterface();
  d = new Details();
  async getGames(category) {
    this.ui.showLoader(`row`);
    const response = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      {
        headers: {
          "x-rapidapi-key":
            "3e68dc5321mshbd83abcabd2ab6bp16f9efjsn2fe5ee01eb69",
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        },
      }
    );
    const games = await response.json();
    this.ui.displayGames(games);
  }

  showGameDetails(id) {
    const gameDetailsLayer = document.getElementById("gameDetails");
    gameDetailsLayer.classList.remove("d-none");
    this.d.getDetails(id);
  }
}
