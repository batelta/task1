     // Retrieve the chosen animal data from local storage
const animalData = JSON.parse(localStorage.getItem('chosenAnimal'));
     // Retrieve the animals array from local storage
const animals = JSON.parse(localStorage.getItem('animals'));
console.log(typeof(animals))//למחוק
console.log(animals)//למחוק
console.log(animalData.isPredator)//למחוק
const visitors = JSON.parse(localStorage.getItem('visitors'));
const playerData = JSON.parse(localStorage.getItem('player'));


function renderoneAnimal() {
    //הציגו את החיה שאליה עברתם מעמוד גן החיות ששמורה בלוקל סטורג'
    // רנדרו את פרטי החיה לתוך האלמנטים המתאימים בהתאם לשדה הספציפי
   
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
  renderoneAnimal();

    // Get the modal element
    let modal = document.getElementById("feedModal");
  function feedAnimal() {

  
    // When the user clicks on the button, open the modal
    modal.style.display = "block";
  
    // Get the <span> element that closes the modal
    let closebtn = document.querySelector(".closebutton");
  
    // Get the <p> element where you want to add the animal name
    let messageParagraph = document.querySelector("#feedModal .modal-body p");

    // Set the text content of the <p> element to include the animal name
    messageParagraph.textContent = `Thank you for feeding the ${animalData.name}!`;
    // When the user clicks on <span> (x) or the "Close" button, close the modal
    closebtn.addEventListener("click", function() {
      modal.style.display = "none";
    });
  
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  
  const numofcoins=playerData.coins;
  if(numofcoins<=0)
    {
      modal.style.display = "none";
      if(animalData.isPredator===true)
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

 
  //function visitorGotEaten() {
    // ממשו את הלוגיקה של חיה שטורפת אורח
//visitors.forEach(visitor => {
 // if(playerData.name===visitor.name){
  //const playerindex=indexOf(visitor)
  //console.log(playerindex)//בדיקה לעצמי
  //const deletedplayer=visitors.splice(index,1)
 // console.log(deletedplayer)//בדיקה לעצמי
  //localStorage.setItem('visitors', JSON.stringify(visitors));//עדכון המערך ששמור בלוקל סטורג
  //}
  //});
  //window.location.href="./login.html"

 // }
 function visitorGotEaten() {
  visitors.forEach((visitor, index) => {
      if (playerData.name === visitor.name) {
          visitors.splice(index, 1);
          localStorage.setItem('visitors', JSON.stringify(visitors));
          localStorage.removeItem('player'); // Remove the chosen player from local storage

           //Get the modal element
          let modal = document.getElementById("ateModal");

          // When the user clicks on the button, open the modal
          modal.style.display = "block";

          // Get the <span> element that closes the modal
          let closebtn = document.querySelector(".closeatebutton");
           
          // Get the <p> element where you want to add the animal name
          let messageParagraph = document.querySelector("#ateModal .modal-body p");

         // Set the text content of the <p> element to include the animal name
          messageParagraph.textContent = `Oh no !🙀 the ${animalData.name} ate your player!`;
          // When the user clicks on <span> (x) or the "Close" button, close the modal
          closebtn.addEventListener("click", function() {
              modal.style.display = "none";
              redirectTologin(); // Redirect to zoo after closing the modal
          });

          // When the user clicks anywhere outside of the modal, close it
          window.onclick = function(event) {
              if (event.target == modal) {
                  modal.style.display = "none";
                  redirectTologin(); // Redirect to zoo after closing the modal
              }
          };
      }
  });
}
function animalEscaped() {
  // ממשו את הלוגיקה של חיה שבורחת מגן החיות
  animals.forEach(animal => {
      if (animalData.name === animal.name) {
          const animalindex = animals.indexOf(animal);
          const deletedanimal = animals.splice(animalindex, 1);
          localStorage.setItem('animals', JSON.stringify(animals));
          localStorage.removeItem('chosenAnimal'); // Remove the chosen animal from local storage

          // Get the modal element
          let modal = document.getElementById("runModal");

          // When the user clicks on the button, open the modal
          modal.style.display = "block";

          // Get the <span> element that closes the modal
          let closebtn = document.querySelector(".closerunbutton");
           
          // Get the <p> element where you want to add the animal name
          let messageParagraph = document.querySelector("#runModal .modal-body p");

         // Set the text content of the <p> element to include the animal name
          messageParagraph.textContent = `Oh no !🙀 the ${animalData.name} ran away!`;
          // When the user clicks on <span> (x) or the "Close" button, close the modal
          closebtn.addEventListener("click", function() {
              modal.style.display = "none";
              redirectToZoo(); // Redirect to zoo after closing the modal
          });

          // When the user clicks anywhere outside of the modal, close it
          window.onclick = function(event) {
              if (event.target == modal) {
                  modal.style.display = "none";
                  redirectToZoo(); // Redirect to zoo after closing the modal
              }
          };
      }
  });
}
//////לבדוק איך אני משתמשת בפונקציות האלה שקיימות בדפים אחרים !!
redirectToZoo=()=>{
  window.location.href="./zoo.html"
}
redirectToLogin=()=>{
  window.location.href="./login.html"
}
///////////////////////////////////////////
console.log(playerData)
  if(playerData===null)
 { location.href="./login.html"}
else{
// Set the content of the element with the class "chosenplayer"
document.querySelector(".chosenplayer").textContent = playerData.name+' '+playerData.coins;
}


    function updateNavbarCoins() {
      // Retrieve the player data from local storage
     
  
      // Update the num of coins displayed in the navbar
      document.querySelector(".chosenplayer").textContent = playerData.name + ' ' + playerData.coins;
  }

