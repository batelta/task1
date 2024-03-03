// Retrieve the chosen animal data from local storage
const animalData = JSON.parse(localStorage.getItem("chosenAnimal"));
// Retrieve the animals array from local storage
const animals = JSON.parse(localStorage.getItem("animals"));

function renderoneAnimal() {
  //הציגו את החיה שאליה עברתם מעמוד גן החיות ששמורה בלוקל סטורג'
  // רנדרו את פרטי החיה לתוך האלמנטים המתאימים בהתאם לשדה הספציפי

  document.getElementById("name").textContent = animalData.name;
  document.getElementById("weight").textContent = animalData.weight;
  document.getElementById("height").textContent = animalData.height;
  document.getElementById("habitat").textContent = animalData.habitat;
  document.getElementById("color").textContent = animalData.color;
  document.getElementById("isPredator").textContent = animalData.isPredator;
  document.getElementById("animal-image").src = animalData.image;
  renderRelatedAnimals(animalData);
}

function renderRelatedAnimals(animalData) {
  // ממשו את הלוגיקה שמרנדרת כרטיסיות של החיות ששדה ההאביטט שלהם זהה לחיה שמוצגת
  // רנדרו אותן לתוך הדיב שמיועד להן עם האיידי related-animals
  // ממשו את אותה לוגיקה של כרטיסיית חיה כמו בכרטיסיות בעמוד zoo.html
  // Get the related animals container
  const relatedAnimalsContainer = document.getElementById("related-animals");

  // Filter and render related animals with the same habitat
  animals.forEach((animal) => {
    if (
      animal.habitat === animalData.habitat &&
      animal.name !== animalData.name
    ) {
      const card = getAnimalsHTMLCard(animal);
      relatedAnimalsContainer.appendChild(card);
    }
  });
}
renderoneAnimal();

function AddFedAnimal() {
  // Retrieve the current player's data from local storage
  let currentPlayer = JSON.parse(localStorage.getItem("player"));

  // Initialize the fedAnimals array if it doesn't exist
  currentPlayer.fedAnimals = currentPlayer.fedAnimals || [];

  // Push the new animal data to the fedAnimals array
  currentPlayer.fedAnimals.push(animalData);

  // Update the current player's data in local storage
  localStorage.setItem("player", JSON.stringify(currentPlayer));
}

function visitorGotEaten() {
  visitors.forEach((visitor, index) => {
    if (playerData.name === visitor.name) {
      visitors.splice(index, 1);
      localStorage.setItem("visitors", JSON.stringify(visitors));
      localStorage.removeItem("player"); // Remove the chosen player from local storage
      //  redirectTologin(); // Redirect to login after closing the modal
    }
  });
}

function animalEscaped() {
  // ממשו את הלוגיקה של חיה שבורחת מגן החיות
  animals.forEach((animal) => {
    if (animalData.name === animal.name) {
      const animalindex = animals.indexOf(animal);
      animals.splice(animalindex, 1);
      localStorage.setItem("animals", JSON.stringify(animals));
      localStorage.removeItem("chosenAnimal"); // Remove the chosen animal from local storage
      //      redirectToZoo(); // Redirect to zoo after closing the modal
    }
  });
}
////משנה עכשיו אם לא עובד זה בוורד
function showModal(title, message) {
  window.dialog.showModal();
  //const modal = document.getElementById("myModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalMessage = document.getElementById("modalMessage");
  modalTitle.textContent = title;
  modalMessage.textContent = message;
  // modal.style.display = "block";

  //const closebtn = document.querySelector(".closebutton");
  //closebtn.addEventListener("click", function () {
  // modal.style.display = "none";
  //});

  // window.onclick = function (event) {
  //  if (event.target == modal) {
  //   modal.style.display = "none";
  // }
  //};
}

function feedAnimal() {
  const numofcoins = playerData.coins;
  if (numofcoins <= 0) {
    if (animalData.isPredator === true) {
      showModal("Oh no! 🙀", `The ${animalData.name} ate your player!`);
      visitorGotEaten();
      setTimeout(() => {
        redirectToLogin(); // Redirect to login page after a delay
      }, 3000);
    } else {
      showModal("Oh no!", `The ${animalData.name} ran away!`);
      animalEscaped();
      setTimeout(() => {
        redirectToZoo(); // Redirect to login page after a delay
      }, 3000);
    }
  } else {
    playerData.coins -= 2;
    localStorage.setItem("player", JSON.stringify(playerData));
    updateNavbar();
    showModal("Hey 🤍", `Thank you for feeding the ${animalData.name}!`);
    AddFedAnimal();
  }
}

console.log(playerData);
if (playerData === null) {
  location.href = "./login.html";
}
