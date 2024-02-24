function renderAvailableAnimals() {
    // ממשו את הלוגיקה שמרנדרת את החיות לתוך הדיב עם האיידי animal-cards
    // וודאו שאתם מציגים אך ורק את החיות שעומדות בפילטורים הנוכחיים
    // במידה ואין פילטרים מסומנים, הציגו את כל החיות
  }
  function visitAnimal(animalName) {
    // ממשו את הלוגיקה של מעבר לעמוד חיה עבור החיה הספציפית שנבחרה
    // שמרו בלוקל סטורג' את החיה שנבחרה, כך שבעמוד החיה נוכל לשלוף אותה מהסטורג' ולהציגה בהתאם
  
    localStorage.setItem('chosenAnimal', JSON.stringify(animalName));//שומרת אותו באחסון המקומי
    const storedAnimals = JSON.parse(localStorage.getItem('chosenAnimal'));
    console.log(storedAnimals)
  
  }
  
  function setFilter(filterKey, filterValue) {
    /**
     * ממשו את הלוגיקה של השמת פילטר
     * הפילטרים הקיימים הם
     * isPredator: true | false
     * habitat: "land" | "sea"
     * weight: value > user selected weight
     * height: value > user selected height
     * color: dropdown of all available colors
     */
    // ודאו כי אתם שומרים את הפילטרים שהיוזר בחר בלוקל סטורג׳ וטוענים אותם בהתאם
    // רנדרו רק את החיות שעומדות בתנאים של הפילטרים
  }

  const visitors = JSON.parse(localStorage.getItem('visitors'));
  console.log(visitors)
  visitors.forEach(function(visitor){
let o=document.createElement("option");
o.text='Name:'+visitor.name+' ,Coins:'+visitor.coins;
o.value=visitor;
 players.appendChild(o);
  });
  const reset=()=>localStorage.clear();

  // Retrieve the player data from local storage
const playerData = JSON.parse(localStorage.getItem('player'));

// Set the content of the element with the class "chosenplayer"
document.querySelector(".chosenplayer").textContent = playerData.name+' '+playerData.coins;


let animalsForView = [...animals];
const dialog = document.querySelector("#animal-dialog");

const getAnimalsHTMLCard = (animal) => {  //התבנית שבה נוכל לראות את הפרטים עבור כל משתמש 
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
      const getselectanimalModalHTMLButton=(animal)=>{
        const chooseButton=document.createElement("button");
        chooseButton.innerText="Choose";
        chooseButton.addEventListener("click",()=>redirectToAnimal(animal));
        return chooseButton;
      }
      function redirectToAnimal(animal){
        const chosenAnimal={name:animal.name,image:animal.image,isPredator:animal.isPredator,
        weight:animal.weight,height:animal.height,color:animal.color,habitat:animal.habitat}
        console.log(chosenAnimal);
        visitAnimal(chosenAnimal);
        window.location.href = "./animal.html"
      }
      const handleAnimalsClick = (animal) => {
        dialog.innerHTML = "";
        dialog.append(getCloseModalHTMLButton(), getAnimalsHTMLCard(animal),getselectanimalModalHTMLButton(animal));
        dialog.showModal();
      };

      const getSearchBox = () => {
        const queryInput = document.createElement("input");
        queryInput.id = "query-input";
        queryInput.placeholder = "Search animals";
        queryInput.className = "form-control my-4";
        queryInput.oninput = (e) => {
        animalsForView = animals.filter((animal) =>
        animal.name.toLowerCase().includes(e.target.value) || animal.name.toUpperCase().includes(e.target.value)
       );
          renderAnimals();
        };
      
        return queryInput;
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
      
      document.body.insertAdjacentElement("afterbegin", getSearchBox());
      window.addEventListener("load", renderAnimals)


