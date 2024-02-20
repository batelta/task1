/*   מקבל שם, בודק שאין אותו כבר במערך האורחים ומחזיר אובייקט אורח
/** */  

const makeVisitor = (visitors, name) => {
  let foundVisitor = visitors.find((visitor) => visitor.name === name);
  console.log(foundVisitor);
  if (!foundVisitor) {
      let newVisitor = { name: name, coins: 50 } // Use name parameter here
      console.log(newVisitor)
      visitors.push(newVisitor);
  }
};
function createNewVisitor(event) {
  event.preventDefault();
  console.log('hey');
  const visitorName = document.querySelector("#visitorname").value; // Get visitor name from input field
  makeVisitor(visitors, visitorName); // Pass visitors array and visitor name to makeVisitor
}
document.querySelectorAll('[name="gender"]').forEach((radio) => {
  radio.addEventListener("change", function (event) {
    
    console.log("Selected Gender:", event.target.value);
  });
});
function setAvatarimg(){

}
    /**
    צרו אורח חדש כאן 👇
    ניתן לפצל את הלוגיקה למספר בלתי מוגבל של פונקציות.
    כמו שיותר מפוצל וטהור - פונקציות עם מטרה יחידה ושם משמעותי שמסביר מה הפונקציה עושה ומחזירה
    דוגמא:
  
    const validateFormInputs = () => {
      בודק האם האינפוטים קיימים ויש בהם ערך
      מחזיר האם תקין או לא (בוליאני)
    }
  
    const visitorExists = (name) => {
      מקבל שם ומחזיר תשובה האם השם האורח קיים
    }


}  
/*   מקבל שם, בודק שאין אותו כבר במערך האורחים ומחזיר אובייקט אורח
/** */  



  /**************************************
    מימשתי עבורכם את ההאזנה לאירוע שליחת טופס
    שימו לב כי האיידי של createForm
    זהה לאיידי של הטופס בעמוד signup.html
    אין לשנות אותו */
  const createForm = document.getElementById("create-visitor-form");
  if (createForm) {
    createForm.addEventListener("submit", createNewVisitor);
  }