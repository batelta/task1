const visitedAnimals = JSON.parse(localStorage.getItem('visitedAnimals'));
const fedAnimals=JSON.parse(localStorage.getItem('feededAnimals'))
const playerData = JSON.parse(localStorage.getItem('player'));//check

function showVisitedAnimals() {
  const filteredVisitedAnimals=filterAnimals(visitedAnimals);
    //ממשו את הלוגיקה שמציגה את החיות שהאורח הנוכחי ביקר בהן
  const visitedDiv=document.getElementById("visited-animals")
  filteredVisitedAnimals.forEach(animal=>{
   const newdiv= document.createElement("div")
   //const animalimage=document.createElement("img")
   //animalimage.src=animal.image;
   //animalimage.alt=animal.name;
   newdiv.innerHTML=animal;
   //newdiv.appendChild(animalimage)
   visitedDiv.appendChild(newdiv)
  })
  }
  function showFedAnimals() {
    const filteredFedAnimals=filterAnimals(fedAnimals);

     //ממשו את הלוגיקה שמציגה את החיות שהאורח הנוכחי האכיל אותן
  
    const fedDiv=document.getElementById("feeded-animals")
    filteredFedAnimals.forEach(animal=>{
      const fedanimalsdiv= document.createElement("div")
      //const animalimage=document.createElement("img")
      //animalimage.src=animal.image;
      //animalimage.alt=animal.name;
      fedanimalsdiv.innerHTML=animal;
      //fedanimalsdiv.appendChild(animalimage)
   fedDiv.appendChild(fedanimalsdiv)
  //console.log( filterUniqueAnimals());
     })
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
    visitedAnimals.forEach(animal=>{//עבור כל חיה 
    for(let i=0;i<animalNamesandScore.length;i++)
      if(animal.name===animalNamesandScore[i].name)
      animalNamesandScore[i].number++;
   })
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

  showVisitedAnimals();
  showFavoriteAnimal();
  showFedAnimals();
  
console.log(filterAnimals(visitedAnimals))
