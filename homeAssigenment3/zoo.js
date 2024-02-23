function renderAvailableAnimals() {
    // ממשו את הלוגיקה שמרנדרת את החיות לתוך הדיב עם האיידי animal-cards
    // וודאו שאתם מציגים אך ורק את החיות שעומדות בפילטורים הנוכחיים
    // במידה ואין פילטרים מסומנים, הציגו את כל החיות
  }
  function visitAnimal(animalName) {
    // ממשו את הלוגיקה של מעבר לעמוד חיה עבור החיה הספציפית שנבחרה
    // שמרו בלוקל סטורג' את החיה שנבחרה, כך שבעמוד החיה נוכל לשלוף אותה מהסטורג' ולהציגה בהתאם
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
