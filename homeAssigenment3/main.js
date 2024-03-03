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
 // const playerData = JSON.parse(localStorage.getItem('player'));


      ///////////////////move all of this to main -navbar related
 //const playersSelect = document.getElementById("players");
 //console.log(playersSelect)
//if (playersSelect) {
  const playerData = JSON.parse(localStorage.getItem('player'));
  const visitors = JSON.parse(localStorage.getItem("visitors"));

 // console.log('hi')
 // visitors = JSON.parse(localStorage.getItem("visitors"));
 /*
console.log(playerData)
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
  
//}
*/
function loginAsVisitor(visitorName) {
  // תממשו את הלוגיקה של בחירת אורח שנכנס לגן החיות
  // שמרו את האורח שבחרתם, בלוקל סטורג' כך שבכל העמודים נדע מי האורח הנוכחי
  localStorage.setItem('player', JSON.stringify(visitorName));//שומרת אותו באחסון המקומי
  location.reload();

}
function updateNavbar(playerData,pic) {
  // Retrieve the player data from local storage
  let storedPlayerData = JSON.parse(localStorage.getItem('player'));

  // Update the player data
  storedPlayerData.name = playerData.name;
  storedPlayerData.coins = playerData.coins;
 pic.src=playerData.image;
  // Store the updated player data back into local storage
  localStorage.setItem('player', JSON.stringify(storedPlayerData));

  // Update the num of coins displayed in the navbar
  document.querySelector(".chosenplayer").textContent = storedPlayerData.name + ' ' + storedPlayerData.coins;
}


////problem with dropdown list !!!
/*document.addEventListener('DOMContentLoaded', function() {
  const showPlayers = document.querySelector('.showplayers');
  const playersList = document.getElementById('players');

  // Function to toggle the visibility of the players list
  function togglePlayersList() {
    playersList.style.display = playersList.style.display === 'block' ? 'none' : 'block';
  }

  // Show or hide the players list when hovering over the "All players" span
  showPlayers.addEventListener('mouseenter', togglePlayersList);
  showPlayers.addEventListener('mouseleave', togglePlayersList);

  // Keep the players list visible when hovering over it
  playersList.addEventListener('mouseenter', () => playersList.style.display = 'block');

  // Hide the players list when leaving it
  playersList.addEventListener('mouseleave', () => playersList.style.display = 'none');
});
*/
////check 
// Create header elements
const header = document.createElement("header");
header.classList.add("header");

const h2 = document.createElement("h2");
h2.classList.add("u-name");

const label = document.createElement("label");
label.setAttribute("for", "checkbox");

const i = document.createElement("i");
i.classList.add("fa", "fa-bars");
i.setAttribute("id", "navbtn");
i.setAttribute("aria-hidden", "true");

// Append elements to each other
label.appendChild(i);
h2.appendChild(label);
header.appendChild(h2);

// Create body elements
const body = document.createElement("div");
body.classList.add("body");

const nav = document.createElement("nav");
nav.classList.add("side-bar");

const userP = document.createElement("div");
userP.classList.add("user-p");

const img = document.createElement("img");
img.classList.add("playerImg");
//navbar

const chosenPlayer = document.createElement("div");
chosenPlayer.classList.add("chosenplayer");

const ul = document.createElement("ul");

// Create list items
const listItems = [
  { icon: "fa fa-desktop", text: "Dashboard", href: "./dashboard.html" },
  { icon: "fa fa-user", text: "All players", subItems: [] },
  { icon: "fa fa-cog", text: "Reset settings", subItems: [] },
  { icon: "fa fa-power-off", text: "Logout", subItems: [] }
];

listItems.forEach(item => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  const icon = document.createElement("i");
  const span = document.createElement("span");
  icon.classList.add(item.icon);
  span.textContent = item.text;
  a.appendChild(icon);
  a.appendChild(span);
  a.setAttribute("href", item.href || "#");
  li.appendChild(a);
  ul.appendChild(li);
  if (item.subItems && item.subItems.length > 0) {
    const subUl = document.createElement("ul");
    subUl.classList.add("showlist");
    item.subItems.forEach(subItem => {
      const subLi = document.createElement("li");
      const subA = document.createElement("a");
      const subSpan = document.createElement("span");
      subSpan.textContent = subItem.text;
      subA.appendChild(subSpan);
      subLi.appendChild(subA);
      subUl.appendChild(subLi);
    });
    li.appendChild(subUl);
  }
});

// Append elements to each other
userP.appendChild(img);
userP.appendChild(chosenPlayer);
nav.appendChild(userP);
nav.appendChild(ul);
body.appendChild(nav);

// Append header and body to the document body
document.body.appendChild(header);
document.body.appendChild(body);



////from chatgpt
visitors.forEach(function (visitor) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.textContent = visitor.name + " ," + visitor.coins;
  a.href = "#"; // Set the href attribute to "#" to make it clickable
  a.visitor = visitor;
  a.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior
    loginAsVisitor(a.visitor); // Pass the associated visitor object to the handler
    updateNavbar(visitor, img); // Update the navbar with the visitor data
  });
  li.appendChild(a);
  ul.appendChild(li);
  let pic=document.querySelector('.playerImg')
console.log(playerData.image)
pic.src =playerData.image;
});

// Show/hide players list
const span = document.querySelector(".showplayers");
span.addEventListener("click", () => {
  ul.classList.toggle("hidden");
});
/*visitors.forEach(function (visitor) {
  let o = document.createElement("option");
  o.text = "Name:" + visitor.name + " ,Coins:" + visitor.coins;
  o.value = visitor;
  players.appendChild(o);
});
*/


    
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
