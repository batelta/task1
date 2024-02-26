
const visitors = JSON.parse(localStorage.getItem('visitors'));

/*   מקבל שם, בודק שאין אותו כבר במערך האורחים ומחזיר אובייקט אורח
/** */  
const makeVisitor = (visitors, name,image) => {
  let foundVisitor = visitors.find((visitor) => visitor.name === name);
  console.log(foundVisitor); //בדיקה לעצמי , למחוק בסוף 
  if (!foundVisitor) {
      let newVisitor = { name: name, coins: 50 ,image:image} // Use name parameter here
      console.log(newVisitor)//בדיקה לעצמי , למחוק בסוף 
     
      visitors.push(newVisitor);
      
      localStorage.setItem('visitors', JSON.stringify(visitors));//שומרת אותו במערך באחסון המקומי
      const storedVisitors = JSON.parse(localStorage.getItem('visitors'));
      console.log(storedVisitors);

      localStorage.setItem('player', JSON.stringify(newVisitor));// שומרת אותו באחסון המקומי בתור שחקן נוכחי
  const chosenplayer = JSON.parse(localStorage.getItem('player'));
  console.log(chosenplayer)//בדיקה 
  }
  else {
    alert('user already exist! redirecting to login page..')
    
  }
 redirectToLogin();
};

function createNewVisitor(event) {
  event.preventDefault();
  console.log('hey');//גם כן בדיקה
  let validation=validateForm();
  if(validation===true){
  const visitorName = document.querySelector("#visitorname").value; // Get visitor name from input field
  

  let selectedgender = document.querySelector('input[name="gender"]:checked').value;

  let selectedimg;
  if (selectedgender === "male") 
    selectedimg = "https://www.svgrepo.com/show/382105/male-avatar-boy-face-man-user-5.svg";
   else 
    selectedimg = "https://www.svgrepo.com/show/382100/female-avatar-girl-face-woman-user-7.svg";
    console.log(selectedimg);//בדיקה לעצמי , למחוק בסוף 
  makeVisitor(visitors, visitorName,selectedimg); // Pass visitors array and visitor name and gender to makeVisitor

}
else clearcontent();
}

function redirectToLogin() {
 // let validation=validateForm();
 // if(validation===true)
  window.location.href = "./login.html";
//else clearcontent();
}

function validateForm() {
  const name = document.getElementById('visitorname').value;
  const age = document.getElementById('age').value;
  const email = document.getElementById('email').value;
  const gender = document.querySelector('input[name="gender"]:checked');

  if (name.trim() === '' || age.trim() === '' || email.trim() === '' || !gender) {
      alert('Please fill out all the fields and select a gender.');
      return false; // Prevent form submission
  }
  // Form is valid, allow submission
  return true;
}

function clearcontent(){
  document.getElementById('visitorname').value='';
  document.getElementById('age').value='';
  document.getElementById('email').value='';
}
 // בודק האם האינפוטים קיימים ויש בהם ערך
//  מחזיר האם תקין או לא (בוליאני)

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