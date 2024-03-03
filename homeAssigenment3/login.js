let visitorsForView = [...visitors];

const getVisitorsHTMLCard = (visitor) => {
  //התבנית שבה נוכל לראות את הפרטים עבור כל משתמש
  const template = `
        <div class="card" style="min-height:250px;" >
        <div class="card-body">
          <img class="visitor-card" src="${visitor.image}" alt="${visitor.name}"/>
            <p class="card-text">${visitor.name}</p>
            <p class="card-text">${visitor.coins} <img src="https://cdn-icons-png.freepik.com/256/8350/8350237.png" alt="coin-logo"></p>
          </div>
          <div class="details">
          <button class="chooseButton">Choose</button>
        </div>
        </div>`;

  const wrapper = document.createElement("div");
  wrapper.className = "visitor-card";
  wrapper.innerHTML = template;

  const chooseButton = wrapper.querySelector(".chooseButton");
  chooseButton.addEventListener("click", (event) => {
    checkLogin(visitor);
  });
  return wrapper;
};

function checkLogin(visitor) {
  const currentUser = JSON.parse(localStorage.getItem("player"));
  if (currentUser && currentUser.name === visitor.name) {
    window.location.href = "./zoo.html"; // אם המשתמש הנוכחי זהה למשתמש המבוקש, פשוט המשך עם המשתמש הנוכחי
  } else if (currentUser) {
    alert(
      "You are already logged in as " +
        currentUser.name +
        ". Please log out first to choose another user."
    );
  } else {
    //const chosenPlayer = { name: visitor.name, coins: visitor.coins, image: visitor.image }
    //console.log(chosenPlayer);
    loginAsVisitor(visitor);
    updatePlayerFields(visitor);
    redirectToZoo();
  }
}
function updatePlayerFields(player) {
  // Add visitedAnimals and fedAnimals fields if they don't exist
  if (!player.visitedAnimals) {
    player.visitedAnimals = [];
  }
  if (!player.fedAnimals) {
    player.fedAnimals = [];
  }
  // Update the player object in local storage
  localStorage.setItem("player", JSON.stringify(player));
}

const getSearchBox = () => {
  const queryInput = document.createElement("input");
  queryInput.id = "query-input";
  queryInput.placeholder = "Search visitors";
  queryInput.className = "form-control my-4";
  queryInput.oninput = (e) => {
    visitorsForView = visitors.filter(
      (visitor) =>
        visitor.name.toLowerCase().includes(e.target.value) ||
        visitor.name.toUpperCase().includes(e.target.value)
    );
    renderVisitors();
  };
  return queryInput;
};

const getEmptyCardsHTMLTemplate = () => {
  const templateWrapper = document.createElement("div");
  templateWrapper.className = "empty-result";

  const template = `
          <h2>User Not Found</h2>
          <p>We're sorry, we dont have a user with that name</p>
          <button id="clear-filter-btn" class="btn btn-dark">Clear search text</button>
          `;
  templateWrapper.innerHTML = template;
  templateWrapper.children["clear-filter-btn"].addEventListener(
    "click",
    clearSearchBox
  );
  return templateWrapper;
};

const clearSearchBox = () => {
  const input = document.getElementById("query-input");
  input.value = "";
  visitorsForView = [...visitors];
  renderVisitors();
};

const renderVisitors = () => {
  const visitorsCards = visitorsForView.map(getVisitorsHTMLCard);
  const visitorsPlaceholder = document.getElementById("placeholder");
  console.log(visitorsPlaceholder);
  visitorsPlaceholder.innerHTML = "";

  if (!visitorsCards.length) {
    visitorsPlaceholder.appendChild(getEmptyCardsHTMLTemplate());
  }
  visitorsPlaceholder.append(...visitorsCards);
};

document.body.insertAdjacentElement("afterbegin", getSearchBox());
window.addEventListener("load", renderVisitors);
