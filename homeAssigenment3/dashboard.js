

// Function to initialize player data if it doesn't exist in local storage
function initializePlayerData() {
  const playerData = {
    name: "", // Set the initial name to empty string
    coins: 0, // Set the initial coins to 0
    image: "", // Set the initial image to empty string
    visitedAnimals: [], // Initialize visited animals array
    fedAnimals: [] // Initialize fed animals array
  };

  // Check if player data exists in local storage
  if (!localStorage.getItem('player')) {
    localStorage.setItem('player', JSON.stringify(playerData)); // If not, set it in local storage
  }
}

// Function to show visited animals for the current player
function showVisitedAnimals() {
  //const playerData = JSON.parse(localStorage.getItem('player')); // Retrieve player data from local storage
  let filteredVisitedAnimals=filterAnimals(playerData.visitedAnimals);

  // Show visited animals only if the player has visited any animals
  if (playerData.visitedAnimals.length > 0) {
    const visitedDiv = document.getElementById('visited-animals'); // Get the div element where visited animals will be displayed
    // Clear the existing content in the visited animals div
    visitedDiv.innerHTML = '';

    // Iterate over the visited animals array and create elements to display each visited animal
    //filteredVisitedAnimals.forEach(animal => {
      const visited = document.createElement('p');
      visited.innerText=filteredVisitedAnimals;
     // animalElement.textContent = animal.name; // Assuming each animal object has a 'name' property
      visitedDiv.appendChild(visited); // Append the animal element to the visited animals div
    
  }
}

// Function to show fed animals for the current player
function showFedAnimals() {
  //const storedPlayerData = JSON.parse(localStorage.getItem('player')); // Retrieve player data from local storage

  // Show fed animals only if the player has fed any animals
  if (playerData.fedAnimals.length > 0) {
    const fedDiv = document.getElementById('feeded-animals'); // Get the div element where fed animals will be displayed

    // Clear the existing content in the fed animals div
    fedDiv.innerHTML = '';

    // Iterate over the fed animals array and create elements to display each fed animal
    playerData.fedAnimals.forEach(animal => {
      const animalElement = document.createElement('p');
      animalElement.textContent = animal.name; // Assuming each animal object has a 'name' property
      fedDiv.appendChild(animalElement); // Append the animal element to the fed animals div
    });
  }
}
function showFavoriteAnimal() {
  
  //ממשו את הלוגיקה שמציגה את החיה שהאורח ביקר הכי הרבה פעמים אצלה
 
  let animalNamesandScore = [
    { name: "Lion", number: 0 },
    { name: "Elephant", number: 0 },
    { name: "Giraffe", number: 0 },
    { name: "Tiger", number: 0 },
    { name: "Monkey", number: 0 },
    { name: "Kangaroo", number: 0 },
    { name: "Penguin", number: 0 },
    { name: "Zebra", number: 0 },
    { name: "Cheetah", number: 0 }
  ];
  playerData.visitedAnimals.forEach(animal => {
    animalNamesandScore.forEach(score => {
      if (animal.name === score.name) {
        score.number++; // Increment the score counter
      }
    });
  });
 console.log(animalNamesandScore[6].number)
 // Initialize variables to store the maximum number of visits and the corresponding animal name
let maxVisits = 0;
let maxVisitsAnimal = "";

// Iterate over the array to find the object with the maximum number of visits
animalNamesandScore.forEach(animal => {
if (animal.number > maxVisits) {
  maxVisits = animal.number;
  maxVisitsAnimal = animal.name;
}
});
console.log(maxVisitsAnimal)
const favoriteDiv=document.getElementById("favorite-animal")
const newdiv= document.createElement("div")//מוסיפה דיב שיציג את המידע על המסך
newdiv.innerText=`${playerData.name} favorite Animal is the ${maxVisitsAnimal} with ${maxVisits} visits.`;
favoriteDiv.appendChild(newdiv)
}

function filterAnimals(animals) {
  let currNames = [animals[0].name]; // Initialize array with the first animal name

  for (let i = 1; i < animals.length; i++) { // Start from index 1 since we already added the first name
      const animalName = animals[i].name;
      if (!currNames.includes(animalName)) { // Check if the name is not already in the array
          currNames.push(animalName); // Add the name to the array
      }
  }

  return currNames; // Return the filtered array of unique animal names
}

// Function to initialize player data and show visited and fed animals
function init() {
//  initializePlayerData(); // Initialize player data if it doesn't exist
  showVisitedAnimals(); // Show visited animals for the current player
  showFedAnimals(); // Show fed animals for the current player
  showFavoriteAnimal();
}
////// check 
// Call init function when the DOM content is loaded
init();