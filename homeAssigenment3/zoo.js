function renderAvailableAnimals() {
  renderAnimals();
}

// get the objects from the localStorage
const visitors = JSON.parse(localStorage.getItem("visitors"));
const animals = JSON.parse(localStorage.getItem("animals"));
const playerData = JSON.parse(localStorage.getItem("player"));
console.log("visitors: ", visitors);//בדיקה 
console.log("animals: ", animals);//בדיקה
console.log("playerData: ", playerData);//בדיקה

let visitedAnimals = [];//מערך ריק שיכיל בעתיד את כל הח

function visitAnimal(chosenAnimal) {
   // ממשו את הלוגיקה של מעבר לעמוד חיה עבור החיה הספציפית שנבחרה
  // שמרו בלוקל סטורג' את החיה שנבחרה, כך שבעמוד החיה נוכל לשלוף אותה מהסטורג' ולהציגה בהתאם
  localStorage.setItem("chosenAnimal", JSON.stringify(chosenAnimal));//שומרת אותו באחסון המקומי
  AddVisitedAnimal(chosenAnimal);
  window.location.href = "./animal.html";
}

function AddVisitedAnimal(chosenAnimal) {
  // Retrieve visitedAnimals from local storage and initialize it as an empty array if it doesn't exist
  let visitedAnimals = JSON.parse(localStorage.getItem('visitedAnimals')) || [];

  visitedAnimals.push(chosenAnimal);
  localStorage.setItem("visitedAnimals", JSON.stringify(visitedAnimals));
}


function setFilter(event) {
  event.preventDefault();
  // get values from input fields
  const weightFilter = document.getElementById("weight-filter").value;
  const heightFilter = document.getElementById("height-filter").value;
  const colorFilter = document.getElementById("color-filter").value;
  const habitatFilter = document.getElementById("habitat-filter").value;
  const searchFilter = document
    .getElementById("search-filter")
    .value.toLowerCase();

  console.log("weight: ", weightFilter);
  console.log("height: ", heightFilter);
  console.log("color: ", colorFilter);
  console.log("habitat: ", habitatFilter);

  animalsForView = animals.filter((animal) => {
    return (
      (weightFilter === "" || animal.weight == parseFloat(weightFilter)) &&
      (heightFilter === "" || animal.height == parseFloat(heightFilter)) &&
      (colorFilter === "" ||
        animal.color.toLowerCase() === colorFilter.toLowerCase()) &&
      (habitatFilter === "" || animal.habitat === habitatFilter) &&
      (searchFilter === "" || animal.name.toLowerCase().includes(searchFilter))
    );
  });

  console.log("animals from filter: ", animalsForView);

  renderAnimals();
}

function clearAllFilters(event) {
  event.preventDefault();
  document.getElementById("weight-filter").value = "";
  document.getElementById("height-filter").value = "";
  document.getElementById("color-filter").value = "";
  document.getElementById("habitat-filter").value = "";
  document.getElementById("search-filter").value = "";
}

document.getElementById("filter-button").addEventListener("click", setFilter);


//navbar
const pic=document.querySelector('.playerImg')
console.log(playerData.image)
pic.src =playerData.image;
////problem with dropdown list !!!
document.addEventListener('DOMContentLoaded', function() {
  const showPlayers = document.querySelector('.showplayers');
  const playersList = document.getElementById('players');

  // Function to toggle the visibility of the players list
  function togglePlayersList() {
    playersList.style.display = playersList.style.display === 'block' ? 'none' : 'block';
  }

  // Show or hide the players list when hovering over the "All players" span
  showPlayers.addEventListener('mouseenter', togglePlayersList);
  showPlayers.addEventListener('mouseleave', togglePlayersList);

  // Keep the players list visible when hovering over it
  playersList.addEventListener('mouseenter', () => playersList.style.display = 'block');

  // Hide the players list when leaving it
  playersList.addEventListener('mouseleave', () => playersList.style.display = 'none');
});

visitors.forEach(function (visitor) {
  let o = document.createElement("li");
  o.textContent = visitor.name + " ," + visitor.coins;
  o.visitor=visitor;
  console.log(visitor)
  console.log(o)
  let a=document.createElement("a")
  a.textContent = "click";
  a.href = "#"; // Set the href attribute to "#" to make it clickable
  a.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior
    loginAsVisitor(o.visitor); // Pass the associated visitor object to the handler
    updateNavbar(visitor); // Update the navbar with the visitor data
  });
  o.appendChild(a);
  players.appendChild(o);
});
/*visitors.forEach(function (visitor) {
  let o = document.createElement("option");
  o.text = "Name:" + visitor.name + " ,Coins:" + visitor.coins;
  o.value = visitor;
  players.appendChild(o);
});
*/
function reset() {
  localStorage.clear(); // Clear all items from local storage
  window.location.href = "./signup.html";
}

// Retrieve the player data from local storage
if (!playerData) {
  location.href = "./login.html";
}

// Set the content of the element with the class "chosenplayer"
document.querySelector(".chosenplayer").textContent =
  playerData.name + " " + playerData.coins;

let animalsForView = [...animals];
const dialog = document.querySelector("#animal-dialog");

window.getAnimalsHTMLCard = (animal) => {
  //התבנית שבה נוכל לראות את הפרטים עבור כל משתמש
  const template = `
        <div class="card" style="min-height: 360px;" >
          <img class="animal-card" src="${animal.image}" alt="${animal.name}"/>
          <div class="card-body">
            <p class="card-text">${animal.name}</p>
          </div>
        </div>`;

  const wrapper = document.createElement("div");
  wrapper.className = "animal-card";
  wrapper.innerHTML = template;
  wrapper.addEventListener("click", () => handleAnimalsClick(animal));
  return wrapper;
};

const getCloseModalHTMLButton = () => {
  const closeButton = document.createElement("button");
  closeButton.innerText = " Close";
  closeButton.addEventListener("click", () => dialog.close());
  return closeButton;
};

const getselectanimalModalHTMLButton = (animal) => {
  const chooseButton = document.createElement("button");
  chooseButton.innerText = "Choose";
  chooseButton.addEventListener("click", () => redirectToAnimal(animal));
  return chooseButton;
};

function redirectToAnimal(animal) {
  const chosenAnimal = {
    name: animal.name,
    image: animal.image,
    isPredator: animal.isPredator,
    weight: animal.weight,
    height: animal.height,
    color: animal.color,
    habitat: animal.habitat,
  };
  console.log(chosenAnimal);
  visitAnimal(chosenAnimal);
}

const handleAnimalsClick = (animal) => {
  dialog.innerHTML = "";
  dialog.append(
    getCloseModalHTMLButton(),
    getAnimalsHTMLCard(animal),
    getselectanimalModalHTMLButton(animal)
  );
  dialog.showModal();
};

/*const getSearchBox = () => {
  const queryInput = document.createElement("input");
  queryInput.id = "query-input";
  queryInput.placeholder = "Search for an animal by name...";
  queryInput.className = "form-control my-4";
  queryInput.oninput = (e) => {
    animalsForView = animals.filter(
      (animal) =>
        animal.name.toLowerCase().includes(e.target.value) ||
        animal.name.toUpperCase().includes(e.target.value)
    );
    renderAnimals();
  };

  return queryInput;
};
*/
const animalSearch = (animal, searchTerm) => {
  const filters = ["name", "weight", "height", "color", "habitat"];

  return filters.some((filter) =>
    animal[filter].toString().toLowerCase().includes(searchTerm)
  );
};

const getEmptyCardsHTMLTemplate = () => {
  const templateWrapper = document.createElement("div");
  templateWrapper.className = "empty-result";

  const template = `
          <h2>No Products Found</h2>
          <p>We're sorry, but no products match your search or filter criteria.</p>
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
  animalsForView = [...animals];
  renderAnimals();
};

const renderAnimals = () => {
  const animalsCards = animalsForView.map(getAnimalsHTMLCard);
  const animalsPlaceholder = document.getElementById("placeholder");
  animalsPlaceholder.innerHTML = "";

  if (!animalsCards.length) {
    animalsPlaceholder.appendChild(getEmptyCardsHTMLTemplate());
  }
  animalsPlaceholder.append(...animalsCards);
};

//document.body.insertAdjacentElement("afterbegin", getSearchBox());
window.addEventListener("load", renderAnimals);

const getValue = (value) =>
  typeof value === "string" ? value.toUpperCase() : value;

function filterPlainArray(array, filters) {
  const filterKeys = Object.keys(filters);
  return array.filter((item) => {
    // validates all filter criteria
    return filterKeys.every((key) => {
      // ignores an empty filter
      if (!filters[key].length) return true;
      return filters[key].find(
        (filter) => getValue(filter) === getValue(item[key])
      );
    });
  });
}

let filters = {
  color: ["brown", "grey"],
  weight: ["100", "1200"],
  height: ["120", "200"],
  habitat: ["land", "sea"],
  rentedOut: ["not-available"],
};
let filteredAnimals = filterPlainArray(animals, filters);
console.log("Filtered animals", filteredAnimals);
console.log("filtered length:", filteredAnimals.length);

//navbar related
/*
const toggler = document.querySelector('.toggler')
const sidebar = document.querySelector('.sidebar')

if (toggler && sidebar) {
  // Both elements exist in the DOM
  // Now you can proceed with your logic here
  console.log('Both .toggler and .sidebar exist in the DOM');
  // You can call your function here or perform any other action
  // showFull();
} else {
  // At least one of the elements does not exist in the DOM
  console.log('Either .toggler or .sidebar does not exist in the DOM');
  // You may want to handle this case accordingly
}
console.log(toggler)
const showFull = () => {
    toggler.addEventListener('click', ()=> {
        toggler.classList.toggle('active')
        sidebar.classList.toggle('active')
    })
}

showFull()*/