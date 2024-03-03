const animalData = JSON.parse(localStorage.getItem("animals"));
console.log(animalData);
// Function to initialize player data if it doesn't exist in local storage
function initializePlayerData() {
  const playerData = {
    name: "", // Set the initial name to empty string
    coins: 0, // Set the initial coins to 0
    image: "", // Set the initial image to empty string
    visitedAnimals: [], // Initialize visited animals array
    fedAnimals: [], // Initialize fed animals array
  };

  // Check if player data exists in local storage
  if (!localStorage.getItem("player")) {
    localStorage.setItem("player", JSON.stringify(playerData)); // If not, set it in local storage
  }
}

/*
// Function to show fed animals for the current player
function showFedAnimals() {
  //const storedPlayerData = JSON.parse(localStorage.getItem('player')); // Retrieve player data from local storage

  // Show fed animals only if the player has fed any animals
  if (playerData.fedAnimals.length > 0) {
    const fedDiv = document.getElementById("feeded-animals"); // Get the div element where fed animals will be displayed

    // Clear the existing content in the fed animals div
    fedDiv.innerHTML = "";

    // Iterate over the fed animals array and create elements to display each fed animal
    playerData.fedAnimals.forEach((animal) => {
      const animalElement = document.createElement("p");
      animalElement.textContent = animal.name; // Assuming each animal object has a 'name' property
      fedDiv.appendChild(animalElement); // Append the animal element to the fed animals div
    });
  }
}*/
///different try
function showFedAnimals() {
  if (playerData.fedAnimals.length > 0) {
    const fedList = document.getElementById("fed-animal-list"); // Get the list element where fed animals will be displayed

    // Clear the existing content in the fed animals list
    fedList.innerHTML = "";

    // Iterate over the fed animals array and create list items to display each fed animal
    playerData.fedAnimals.forEach((animal) => {
      const listItem = document.createElement("li");
      listItem.classList.add("fedanimal"); // Add the 'item' class to the list item

      const headline = document.createElement("h2");
      headline.classList.add("headline");
      headline.textContent = `The ${animal.name}`; // Assuming each animal object has a 'name' property

      const span = document.createElement("span");
      span.textContent = findAnimalDetails(animal.name);

      // Append the headline and span elements to the list item
      listItem.appendChild(headline);
      listItem.appendChild(span);

      // Append the list item to the fed animals list
      fedList.appendChild(listItem);
    });
  }
}
function findAnimalDetails(animalName) {
  // Check if animalData is available
  if (!animalData) {
    console.error("Animal data is not available.");
    return "";
  }

  // Find the animal by name in the animalData array
  const foundAnimal = animalData.find((animal) => animal.name === animalName);

  // If the animal is found, extract its details into a string
  if (foundAnimal) {
    const detailsString = `
      Weight: ${foundAnimal.weight} 
      Height: ${foundAnimal.height}
      Color: ${foundAnimal.color}
      Habitat: ${foundAnimal.habitat}
      Is Predator: ${foundAnimal.isPredator ? "Yes" : "No"}
    `;
    return detailsString;
  }
}

let animalNamesandScore = [
  { name: "Lion", number: 0 },
  { name: "Elephant", number: 0 },
  { name: "Giraffe", number: 0 },
  { name: "Tiger", number: 0 },
  { name: "Monkey", number: 0 },
  { name: "Kangaroo", number: 0 },
  { name: "Penguin", number: 0 },
  { name: "Zebra", number: 0 },
  { name: "Cheetah", number: 0 },
];
function showFavoriteAnimal() {
  //ממשו את הלוגיקה שמציגה את החיה שהאורח ביקר הכי הרבה פעמים אצלה
  if (!playerData || !playerData.visitedAnimals) {
    console.error("Player data or visited animals array is undefined or null.");
    return;
  }

  playerData.visitedAnimals.forEach((animal) => {
    animalNamesandScore.forEach((score) => {
      if (animal.name === score.name) {
        score.number++; // Increment the score counter
      }
    });
  });

  // Initialize variables to store the maximum number of visits and the corresponding animal name
  let maxVisits = 0;
  let maxVisitsAnimal = "";

  // Iterate over the array to find the object with the maximum number of visits
  animalNamesandScore.forEach((animal) => {
    if (animal.number > maxVisits) {
      maxVisits = animal.number;
      maxVisitsAnimal = animal.name;
    }
  });
  console.log(maxVisitsAnimal);
  const favoriteDiv = document.getElementById("favorite-animal");
  const newdiv = document.createElement("div"); //מוסיפה דיב שיציג את המידע על המסך
  newdiv.innerText = `${playerData.name}'s favorite Animal is the ${maxVisitsAnimal} with ${maxVisits} visits.`;
  favoriteDiv.appendChild(newdiv);
}
// The bar chart

/////
function graphData() {
  // Check if animalNamesandScore is valid
  if (!Array.isArray(animalNamesandScore)) {
    console.error("Invalid array provided.");
    return;
  }

  const totalVisits = animalNamesandScore.reduce(
    (total, animal) => total + animal.number,
    0
  );

  animalNamesandScore.forEach((animal) => {
    let row = document.getElementById(animal.name);
    if (row) {
      let percentage = (animal.number / totalVisits) * 100;
      row.style.height = percentage + "%";
      let spanElement = row.querySelector("span");
      if (spanElement) {
        spanElement.textContent = animal.number; // Set the content of the <span> element to the number
      }
    }
  });
}

function filterAnimals(animals) {
  let currNames = [animals[0].name]; // Initialize array with the first animal name

  for (let i = 1; i < animals.length; i++) {
    // Start from index 1 since we already added the first name
    const animalName = animals[i].name;
    if (!currNames.includes(animalName)) {
      // Check if the name is not already in the array
      currNames.push(animalName); // Add the name to the array
    }
  }

  return currNames; // Return the filtered array of unique animal names
}

// Function to initialize player data and show visited and fed animals
function init() {
  //  initializePlayerData(); // Initialize player data if it doesn't exist
  showFedAnimals(); // Show fed animals for the current player
  showFavoriteAnimal();
  graphData();
}
////// check
// Call init function when the DOM content is loaded
init();
