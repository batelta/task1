function renderAnimal() {
    //הציגו את החיה שאליה עברתם מעמוד גן החיות ששמורה בלוקל סטורג'
    // רנדרו את פרטי החיה לתוך האלמנטים המתאימים בהתאם לשדה הספציפי
        // Retrieve the player data from local storage
const animalData = JSON.parse(localStorage.getItem('chosenAnimal'));
// Set the content of the element with the class "chosenAnimal"
document.getElementById('name').textContent  = animalData.name;
document.getElementById('weight').textContent  = animalData.weight;
document.getElementById('height').textContent  = animalData.height;
document.getElementById('habitat').textContent  = animalData.habitat;
document.getElementById('color').textContent  = animalData.color;
document.getElementById('isPredator').textContent  = animalData.isPredator;
document.getElementById('animal-image').src = animalData.image;
renderRelatedAnimals(animalData);
  }

  function renderRelatedAnimals(animalData) {
    // ממשו את הלוגיקה שמרנדרת כרטיסיות של החיות ששדה ההאביטט שלהם זהה לחיה שמוצגת
    // רנדרו אותן לתוך הדיב שמיועד להן עם האיידי related-animals
    // ממשו את אותה לוגיקה של כרטיסיית חיה כמו בכרטיסיות בעמוד zoo.html
      // Get the related animals container
      const relatedAnimalsContainer = document.getElementById('related-animals');

      // Filter and render related animals with the same habitat
      animals.forEach(animal => {
          if (animal.habitat === animalData.habitat && animal.name !== animalData.name) {
              const card = getAnimalsHTMLCard(animal);
              relatedAnimalsContainer.appendChild(card);
          }
      });
  };

  
  function feedAnimal() {
    // ממשו את הלוגיקה של האכלת חיה
    // במידה ואין מספיק מטבעות, טפלו בהתאם להנחיות במטלה
  const numofcoins=playerData.coins;
  if(numofcoins<=0)
    {
      if(animalData.isPredator==='true')
      visitorGotEaten();
    else 
    animalEscaped();
    }
    else {
    playerData.coins-=2;
    localStorage.setItem('player', JSON.stringify(playerData));
    updateNavbarCoins();
    }
  
  }
  //// לבדוק איך אפשר שהיא תעבוד בלי להעתיק פעמיים ! היא כבר קיימת בzoo
  function reset() {
    localStorage.clear(); // Clear all items from local storage
   window.location.href="./signup.html"
}
  function visitorGotEaten() {
    // ממשו את הלוגיקה של חיה שטורפת אורח
visitors.forEach(visitor => {
  if(playerData.name===visitor.name)
//לשאול איך להמשיך 
visitors
  });
  }
  
  function animalEscaped() {
    //ממשו את הלוגיקה של חיה שבורחת מגן החיות
  }

// Set the content of the element with the class "chosenplayer"
document.querySelector(".chosenplayer").textContent = playerData.name+' '+playerData.coins;

renderAnimal();

/*
if(numofcoins<=2)
    {
      if(animalData.isPredator==='true')
      visitorGotEaten();
    else 
    animalEscaped();
    }
    else {
    playerData.coins-=2;
    }
    */
    function updateNavbarCoins() {
      // Retrieve the player data from local storage
      const playerData = JSON.parse(localStorage.getItem('player'));
  
      // Update the num of coins displayed in the navbar
      document.querySelector(".chosenplayer").textContent = playerData.name + ' ' + playerData.coins;
  }

