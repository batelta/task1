const animalData = JSON.parse(localStorage.getItem("animals"));
const fedList = document.getElementById("fed-animal-list");

function showFedAnimals() {
  if (playerData.fedAnimals.length > 0) {
    fedList.innerHTML = "";
    //פילטור המערך
    const uniqueAnimalNames = filterAnimals(playerData.fedAnimals);

    uniqueAnimalNames.forEach((animalName) => {
      const listItem = document.createElement("li");
      listItem.classList.add("fedanimal");

      const headline = document.createElement("h2");
      headline.classList.add("headline");
      headline.textContent = `The ${animalName}`;

      const span = document.createElement("span");
      span.textContent = findAnimalDetails(animalName);

      listItem.appendChild(headline);
      listItem.appendChild(span);

      fedList.appendChild(listItem);
    });
  } else {
    const headline = document.createElement("h2");
    headline.classList.add("headline");
    headline.textContent = "Not enough data";
    fedList.appendChild(headline);
  }
}

function findAnimalDetails(animalName) {
  const foundAnimal = animalData.find((animal) => animal.name === animalName);
  console.log(animalName);
  console.log(foundAnimal);
  if (foundAnimal) {
    const detailsString = `
      Weight: ${foundAnimal.weight} ;
      Height: ${foundAnimal.height} ;
      Color: ${foundAnimal.color} ;
      Habitat: ${foundAnimal.habitat} ;
      Is Predator: ${foundAnimal.isPredator ? "Yes" : "No"}
    `;
    return detailsString;
  }
}
//מערך של אובייקטים שאיתו אני בודקת מה המספר ביקורים של כל חיה לפי שמה
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
  playerData.visitedAnimals.forEach((animal) => {
    animalNamesandScore.forEach((score) => {
      if (animal.name === score.name) {
        score.number++; // Increment the score counter
      }
    });
  });

  let maxVisits = 0;
  let maxVisitsAnimal = "";

  ///מחפשת את החיה במערך עם מספר הביקורים הגבוה ביותר
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
function graphData() {
  if (!playerData.visitedAnimals) {
    alert("Not enough data, go visit animals.");
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
        spanElement.textContent = animal.number;
      }
    }
  });
}

function filterAnimals(animals) {
  let uniqueNames = [animals[0].name]; //שמה את השם הראשון במערך

  for (let i = 1; i < animals.length; i++) {
    const animalName = animals[i].name;
    if (!uniqueNames.includes(animalName)) {
      uniqueNames.push(animalName);
    }
  }

  return uniqueNames; //מחזירה מערך של שמות החיות
}

function init() {
  if (playerData === null) {
    alert("you have to login first !");
  }
  if (playerData.visitedAnimals.length === 0) {
    alert("Not enough data, go visit animals.");
    redirectToZoo();
    return;
  } else {
    showFedAnimals();
    showFavoriteAnimal();
    graphData();
  }
}

init();
