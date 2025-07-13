import { UserInterface } from "./ui.js";
export class Details {
  ui = new UserInterface();

  async getDetails(id) {
    this.ui.showLoader("gameDetails");
    const response = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      {
        headers: {
          "x-rapidapi-key":
            "3e68dc5321mshbd83abcabd2ab6bp16f9efjsn2fe5ee01eb69",
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        },
      }
    );
    const details = await response.json();
    this.ui.displayDetails(details);
    const closeBtn = document.getElementById("closeBtn");
    closeBtn.addEventListener("click", () => {
      document.getElementById("gameDetails").classList.add("d-none");
    });
  }
}
