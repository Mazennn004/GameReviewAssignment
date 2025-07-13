export class UserInterface {
  navigateLink(link) {
    const navs = Array.from(document.querySelectorAll(".nav-link"));

    navs.forEach((n) => {
      if (n.classList.contains("active")) {
        n.classList.remove("active");
      }
    });

    link.classList.add("active");
  }

  displayGames(data) {
    const row = document.getElementById("row");
    const result = data.map((g) => {
      return `
    <div data-game-id="${g.id}" class="game-card col-md-3">
            <div class="card position-relative p-3">
              <div class="layer">
                <div class="thumbnail-container">
                  <img
                    src="${g.thumbnail}"
                    alt="thumbnail"
                    class="w-100"
                  />
                </div>
                <div class="content mt-3">
                  <ul class="list-unstyled d-flex justify-content-between">
                    <li>
                      <span class="primary-font fs-6 fw-light">${g.title}</span>
                    </li>
                    <li>
                      <div class="bg-primary p-2 rounded-3">
                        <span class="primary-font text-white fs-6 fw-light"
                          >Free</span
                        >
                      </div>
                    </li>
                  </ul>
                  <p class="primary-font fw-lighter">
                    ${g.short_description.split(" ", 10).join(" ")}
                  </p>
                  <ul class="list-unstyled d-flex justify-content-between ">
                    <li>
                      <span
                        id="gameCategorty"
                        class="bg-primary p-2 rounded-3 fs-6 primary-font"
                        >${g.genre}</span
                      >
                    </li>
                    <li>
                      <span
                      id="gamePlatform"
                        class="bg-primary p-2 rounded-3 primary-font"
                      >${g.platform}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
    `;
    });
    row.innerHTML = result.join(" ");
  }

  displayDetails(data) {
    const gameDetails = document.getElementById("gameDetails");
    gameDetails.innerHTML = `
    <div class="row p-3">
        <div class="col-md-6">
          <h3 class="primary-font">Details Game</h3>
          <div class="px-md-5">
            <img src="${data.thumbnail}" alt="thumbnail">
          </div>
        </div>
        <div class="col-md-6">
          <h3 class="mt-3 fs-1 primary-font">
            Title:<span> ${data.title}</span>
          </h3>
          <ul class="list-unstyled d-flex flex-column gap-3">
            <li class="primary-font">
              Category:
              <span class="bg-primary p-2 text-black rounded-3"> ${
                data.genre
              } </span>
            </li>
            <li class="primary-font">
              Platform:
              <span class="bg-primary p-2 text-black rounded-3"> ${
                data.platform
              } </span>
            </li>
            <li class="primary-font">
              Status:
              <span class="bg-primary p-2 text-black rounded-3"> ${
                data.status
              } </span>
            </li>
          </ul>

          <p>
            ${data.description.split(" ", 30).join(" ")}...
          </p>
          <button class="mt-2 btn btn-outline-warning"><a class="text-decoration-none" href="${
            data.game_url
          }">Show Game</a></button>
        </div>
     
      </div>
         <i  id="closeBtn" class="fa-solid fa-close text-white position-absolute top-0 end-0 m-3 fs-3"></i>
    `;
  }
  showLoader(elmId) {
    document.getElementById(`${elmId}`).innerHTML = `
    <div
            id="loadingLayer"
            class="d-flex justify-content-center align-items-center position-fixed top-0 end-0 start-0 bottom-0 bg-dark bg-opacity-50 big-z"
          >
            <i class="fa-solid fa-spinner fa-spin fs-1 text-warning"></i>
          </div>
   `;
  }
}
