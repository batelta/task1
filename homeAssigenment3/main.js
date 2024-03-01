function generateDataset() {
    let visitors = [
      {
        name: "John Smith",
        coins: 50,
        image:"https://www.svgrepo.com/show/382105/male-avatar-boy-face-man-user-5.svg"
      },
      {
        name: "Emily Johnson",
        coins: 50,
        image:"https://www.svgrepo.com/show/382100/female-avatar-girl-face-woman-user-7.svg"
      },
      {
        name: "Michael Williams",
        coins: 50,
        image:"https://www.svgrepo.com/show/382105/male-avatar-boy-face-man-user-5.svg"
      },
      {
        name: "Jessica Brown",
        coins: 50,
        image:"https://www.svgrepo.com/show/382100/female-avatar-girl-face-woman-user-7.svg"
      },
      {
        name: "Christopher Jones",
        coins: 50,
        image:"https://www.svgrepo.com/show/382105/male-avatar-boy-face-man-user-5.svg"
      },
      {
        name: "Ashley Davis",
        coins: 50,
        image:"https://www.svgrepo.com/show/382100/female-avatar-girl-face-woman-user-7.svg"
      },
      {
        name: "Matthew Miller",
        coins: 50,
        image:"https://www.svgrepo.com/show/382105/male-avatar-boy-face-man-user-5.svg"
      },
      {
        name: "Amanda Wilson",
        coins: 50,
        image:"https://www.svgrepo.com/show/382100/female-avatar-girl-face-woman-user-7.svg"
      },
      {
        name: "David Moore",
        coins: 50,
        image:"https://www.svgrepo.com/show/382105/male-avatar-boy-face-man-user-5.svg"
      },
      {
        name: "Sarah Taylor",
        coins: 50,
        image:"https://www.svgrepo.com/show/382100/female-avatar-girl-face-woman-user-7.svg"
      },
      {
        name: "James Anderson",
        coins: 50,
        image:"https://www.svgrepo.com/show/382105/male-avatar-boy-face-man-user-5.svg"
      },
      {
        name: "Jennifer Thomas",
        coins: 50,
        image:"https://www.svgrepo.com/show/382100/female-avatar-girl-face-woman-user-7.svg"
      },
      {
        name: "Robert Jackson",
        coins: 50,
        image:"https://www.svgrepo.com/show/382105/male-avatar-boy-face-man-user-5.svg"
      },
      {
        name: "Elizabeth White",
        coins: 50,
        image:"https://www.svgrepo.com/show/382100/female-avatar-girl-face-woman-user-7.svg"
      },
      {
        name: "Daniel Harris",
        coins: 50,
        image:"https://www.svgrepo.com/show/382105/male-avatar-boy-face-man-user-5.svg"
      },
      {
        name: "Melissa Martin",
        coins: 50,
        image:"https://www.svgrepo.com/show/382100/female-avatar-girl-face-woman-user-7.svg"
      },
      {
        name: "William Thompson",
        coins: 50,
        image:"https://www.svgrepo.com/show/382105/male-avatar-boy-face-man-user-5.svg"
      },
      {
        name: "Linda Garcia",
        coins: 50,
        image:"https://www.svgrepo.com/show/382100/female-avatar-girl-face-woman-user-7.svg"
      },
      {
        name: "Joseph Martinez",
        coins: 50,
        image:"https://www.svgrepo.com/show/382105/male-avatar-boy-face-man-user-5.svg"
      },
      {
        name: "Karen Robinson",
        coins: 50,
        image:"https://www.svgrepo.com/show/382100/female-avatar-girl-face-woman-user-7.svg"
      },
    ];

    let animals = [
      {
        name: "Lion",
        isPredator: true,
        weight: 100,
        height: 120,
        color: "brown",
        habitat: "land",
        image:"./lion bg.png"
      },
      {
        name: "Elephant",
        isPredator: false,
        weight: 1200,
        height: 200,
        color: "grey",
        habitat: "land",
        image:"./elephant.png"
      },
      {
        name: "Giraffe",
        isPredator: false,
        weight: 100,
        height: 120,
        color: "brown",
        habitat: "land",
        image:"./giraffe.png"
      },
      {
        name: "Tiger",
        isPredator: true,
        weight: 100,
        height: 120,
        color: "brown",
        habitat: "land",
        image:"./tiger.png"
      },
      {
        name: "Monkey",
        isPredator: false,
        weight: 100,
        height: 120,
        color: "brown",
        habitat: "land",
        image:"./monkey.png"
      },
      {
        name: "Kangaroo",
        isPredator: false,
        weight: 100,
        height: 120,
        color: "brown",
        habitat: "land",
        image:"./kangaroo.png"
      },
      {
        name: "Penguin",
        isPredator: false,
        weight: 100,
        height: 120,
        color: "brown",
        habitat: "sea",
        image:"./penguin.png"
      },
      {
        name: "Zebra",
        isPredator: false,
        weight: 100,
        height: 120,
        color: "black",
        habitat: "land",
        image:"./zebra.png"
      },
      {
        name: "Cheetah",
        isPredator: true,
        weight: 100,
        height: 120,
        color: "brown",
        habitat: "land",
        image:"./cheeta.png"
      },
    ];
  
    if (localStorage.getItem("visitors")) {
      visitors = JSON.parse(localStorage.getItem("visitors"));
    } else {
      localStorage.setItem("visitors", JSON.stringify(visitors));
    }
    if (localStorage.getItem("animals")) {
      animals = JSON.parse(localStorage.getItem("animals"));
    } else {
      localStorage.setItem("animals", JSON.stringify(animals));
    }
  
    console.log(visitors);
  }



  generateDataset();

  getAnimalsHTMLCard = (animal) => {  //התבנית שבה נוכל לראות את הפרטים עבור כל משתמש 
    const template = `
        <div class="card" style="height: 300px; width:300px" >
        <p class="card-text">${animal.name}</p>
          <img class="animal-card" src="${animal.image}" alt="${animal.name}"/>
          <div class="card-body">
          </div>
        </div>`;
  
        const wrapper = document.createElement("div");
        wrapper.className = "animal-card";
        wrapper.innerHTML = template;
        wrapper.addEventListener("click", () => handleAnimalsClick(animal));
        return wrapper;
  };
     

      ///////////////////move all of this to main -navbar related
 const playersSelect = document.getElementById("players");
 console.log(playersSelect)
if (playersSelect) {
  const playerData = JSON.parse(localStorage.getItem('player'));
  console.log('hi')
  visitors = JSON.parse(localStorage.getItem("visitors"));

  visitors.forEach(function(visitor){
let o=document.createElement("option");
o.text='Name:'+visitor.name+' ,Coins:'+visitor.coins;
o.value=visitor;
console.log(players)
 players.appendChild(o);
  });
  // Set the content of the element with the class "chosenplayer"
document.querySelector(".chosenplayer").textContent = playerData.name+' '+playerData.coins;
  // Retrieve the player data from local storage
  if(!playerData){
    location.href="./login.html"
  }
  
}

function loginAsVisitor(visitorName) {
  // תממשו את הלוגיקה של בחירת אורח שנכנס לגן החיות
  // שמרו את האורח שבחרתם, בלוקל סטורג' כך שבכל העמודים נדע מי האורח הנוכחי
  localStorage.setItem('player', JSON.stringify(visitorName));//שומרת אותו באחסון המקומי

}
function updateNavbar(playerData) {
  // Retrieve the player data from local storage
  let storedPlayerData = JSON.parse(localStorage.getItem('player'));

  // Update the player data
  storedPlayerData.name = playerData.name;
  storedPlayerData.coins = playerData.coins;

  // Store the updated player data back into local storage
  localStorage.setItem('player', JSON.stringify(storedPlayerData));

  // Update the num of coins displayed in the navbar
  document.querySelector(".chosenplayer").textContent = storedPlayerData.name + ' ' + storedPlayerData.coins;
}



    
/////////////////////////
// כשלוחצים על כפתור הריסט נעבור לדף הרשמה
      function reset() {
        localStorage.clear(); // Clear all items from local storage
       window.location.href="./signup.html"
    }
  function logout() {
    //ממשו את הלוגיקה שמתנתקת מאורח מחובר
    // שימו לב לנקות את השדה המתאים בלוקל סטורג'
  }
