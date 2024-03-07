function generateDataset() {
  let visitors = [
    {
      name: "John Smith",
      coins: 50,
      image:
        "https://www.svgrepo.com/show/382105/male-avatar-boy-face-man-user-5.svg",
    },
    {
      name: "Emily Johnson",
      coins: 50,
      image:
        "https://www.svgrepo.com/show/382100/female-avatar-girl-face-woman-user-7.svg",
    },
    {
      name: "Michael Williams",
      coins: 50,
      image:
        "https://www.svgrepo.com/show/382105/male-avatar-boy-face-man-user-5.svg",
    },
    {
      name: "Jessica Brown",
      coins: 50,
      image:
        "https://www.svgrepo.com/show/382100/female-avatar-girl-face-woman-user-7.svg",
    },
    {
      name: "Christopher Jones",
      coins: 50,
      image:
        "https://www.svgrepo.com/show/382105/male-avatar-boy-face-man-user-5.svg",
    },
    {
      name: "Ashley Davis",
      coins: 50,
      image:
        "https://www.svgrepo.com/show/382100/female-avatar-girl-face-woman-user-7.svg",
    },
    {
      name: "Matthew Miller",
      coins: 50,
      image:
        "https://www.svgrepo.com/show/382105/male-avatar-boy-face-man-user-5.svg",
    },
    {
      name: "Amanda Wilson",
      coins: 50,
      image:
        "https://www.svgrepo.com/show/382100/female-avatar-girl-face-woman-user-7.svg",
    },
    {
      name: "David Moore",
      coins: 50,
      image:
        "https://www.svgrepo.com/show/382105/male-avatar-boy-face-man-user-5.svg",
    },
    {
      name: "Sarah Taylor",
      coins: 50,
      image:
        "https://www.svgrepo.com/show/382100/female-avatar-girl-face-woman-user-7.svg",
    },
    {
      name: "James Anderson",
      coins: 50,
      image:
        "https://www.svgrepo.com/show/382105/male-avatar-boy-face-man-user-5.svg",
    },
    {
      name: "Jennifer Thomas",
      coins: 50,
      image:
        "https://www.svgrepo.com/show/382100/female-avatar-girl-face-woman-user-7.svg",
    },
    {
      name: "Robert Jackson",
      coins: 50,
      image:
        "https://www.svgrepo.com/show/382105/male-avatar-boy-face-man-user-5.svg",
    },
    {
      name: "Elizabeth White",
      coins: 50,
      image:
        "https://www.svgrepo.com/show/382100/female-avatar-girl-face-woman-user-7.svg",
    },
    {
      name: "Daniel Harris",
      coins: 50,
      image:
        "https://www.svgrepo.com/show/382105/male-avatar-boy-face-man-user-5.svg",
    },
    {
      name: "Melissa Martin",
      coins: 50,
      image:
        "https://www.svgrepo.com/show/382100/female-avatar-girl-face-woman-user-7.svg",
    },
    {
      name: "William Thompson",
      coins: 50,
      image:
        "https://www.svgrepo.com/show/382105/male-avatar-boy-face-man-user-5.svg",
    },
    {
      name: "Linda Garcia",
      coins: 50,
      image:
        "https://www.svgrepo.com/show/382100/female-avatar-girl-face-woman-user-7.svg",
    },
    {
      name: "Joseph Martinez",
      coins: 50,
      image:
        "https://www.svgrepo.com/show/382105/male-avatar-boy-face-man-user-5.svg",
    },
    {
      name: "Karen Robinson",
      coins: 50,
      image:
        "https://www.svgrepo.com/show/382100/female-avatar-girl-face-woman-user-7.svg",
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
      image: "./lion.png",
    },
    {
      name: "Elephant",
      isPredator: false,
      weight: 1200,
      height: 200,
      color: "grey",
      habitat: "land",
      image: "./elephant.png",
    },
    {
      name: "Giraffe",
      isPredator: false,
      weight: 100,
      height: 120,
      color: "brown",
      habitat: "land",
      image: "./giraffe.png",
    },
    {
      name: "Tiger",
      isPredator: true,
      weight: 100,
      height: 120,
      color: "brown",
      habitat: "land",
      image: "./tiger.png",
    },
    {
      name: "Monkey",
      isPredator: false,
      weight: 100,
      height: 120,
      color: "brown",
      habitat: "land",
      image: "./monkey.png",
    },
    {
      name: "Kangaroo",
      isPredator: false,
      weight: 100,
      height: 120,
      color: "brown",
      habitat: "land",
      image: "./kangaroo.png",
    },
    {
      name: "Penguin",
      isPredator: false,
      weight: 100,
      height: 120,
      color: "brown",
      habitat: "sea",
      image: "./penguin.png",
    },
    {
      name: "Zebra",
      isPredator: false,
      weight: 100,
      height: 120,
      color: "black",
      habitat: "land",
      image: "./zebra.png",
    },
    {
      name: "Cheetah",
      isPredator: true,
      weight: 100,
      height: 120,
      color: "brown",
      habitat: "land",
      image: "./cheeta.png",
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

getAnimalsHTMLCard = (animal) => {
  //התבנית שבה נוכל לראות את הפרטים עבור כל משתמש
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

const playerData = JSON.parse(localStorage.getItem("player"));
const visitors = JSON.parse(localStorage.getItem("visitors"));

function loginAsVisitor(visitorName) {
  // תממשו את הלוגיקה של בחירת אורח שנכנס לגן החיות
  // שמרו את האורח שבחרתם, בלוקל סטורג' כך שבכל העמודים נדע מי האורח הנוכחי
  localStorage.setItem("player", JSON.stringify(visitorName)); //שומרת אותו באחסון המקומי
  location.reload();
}
function updateNavbar() {
  // Retrieve the player data from local storage
  let storedPlayerData = JSON.parse(localStorage.getItem("player"));

  // Update the player data
  playerData.name = storedPlayerData.name;
  playerData.coins = storedPlayerData.coins;
  playerData.image = storedPlayerData.image;
  //pic.src=storedPlayerData.image;
  // Store the updated player data back into local storage
  localStorage.setItem("player", JSON.stringify(storedPlayerData));
  // Update the num of coins displayed in the navbar
  document.querySelector(".chosenplayer").textContent =
    storedPlayerData.name + " " + storedPlayerData.coins;
  // Update the original visitors array with the same player data
  visitors.forEach((visitor) => {
    if (visitor.name === storedPlayerData.name) {
      visitor.coins = storedPlayerData.coins;
    }
  });

  // Store the updated visitors array back into local storage
  localStorage.setItem("visitors", JSON.stringify(visitors));
}
audioElement = new Audio("./audio-background.mp3"); //checking

// Create header elements
function addNavBar() {
  const template = `
<input type="checkbox" id="checkbox">
<header class="header">
<h2 class="u-name">     
  <label for="checkbox">
    <i id="navbtn" class="fa fa-bars" aria-hidden="true"></i>
  </label>   
</h2>
</header>
<div class="body">
<nav class="side-bar">
  <div class="user-p">
    <img class="playerImg"> 
    <div class="chosenplayer">${playerData.name + " " + playerData.coins}</div>
  </div>
  <ul>
    <li>
      <a href="./dashboard.html">
        <i class="fa fa-desktop" aria-hidden="true"></i>
        <span>Dashboard</span>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="fa fa-user" aria-hidden="true"></i>
        <span class="showplayers">All players</span>
          <ul id="players" class="showlist hidden"></ul>
      </a>
    </li>
    <li>
    <a href="#" id="playAudio">
    <i class="fa fa-music" aria-hidden="true"></i>
        <span>Play Audio</span>
      </a>
    </li>
    <li>
    <a href="#" id="resetSettings">
    <i class="fa fa-cog" aria-hidden="true"></i>
        <span>Reset settings</span>
      </a>
    </li>
    <li>
      <a href="#" id="logout">
        <i class="fa fa-power-off" aria-hidden="true"></i>
        <span>Logout</span>
      </a>
    </li>
  </ul>
</nav>
</div>
`;

  const wrapper = document.createElement("div");
  wrapper.className = "navbar";
  wrapper.innerHTML = template;

  const ul = wrapper.querySelector(".showlist");
  let pic = wrapper.querySelector(".playerImg");
  pic.src = playerData.image;

  visitors.forEach(function (visitor) {
    if (visitor.name !== playerData.name) {
      const li = document.createElement("li");
      const a = document.createElement("a");

      a.textContent = visitor.name + " ," + visitor.coins;
      a.href = "#";
      a.visitor = visitor;

      a.addEventListener("click", function (event) {
        event.preventDefault();
        loginAsVisitor(a.visitor);
        updateNavbar(visitor, pic);
      });
      li.appendChild(a);
      ul.appendChild(li);
    }
  });

  function togglePlayersList() {
    ul.classList.toggle("hidden");
  }

  const showPlayers = wrapper.querySelector(".showplayers");
  showPlayers.addEventListener("click", togglePlayersList);

  document.body.appendChild(wrapper);

  const playMusic = wrapper.querySelector("#playAudio");
  playMusic.addEventListener("click", playAudio);
  // Get the reset settings link element
  const resetSettingsLink = wrapper.querySelector("#resetSettings");
  resetSettingsLink.addEventListener("click", reset);

  const logout = wrapper.querySelector("#logout");
  logout.addEventListener("click", logOut);
}

/*
"
*/
if (
  [
    "/task1/homeAssigenment3/animal.html",
    "/task1/homeAssigenment3/zoo.html",
    "/task1/homeAssigenment3/dashboard.html",
    "/C:/Users/batel/OneDrive/Desktop/course/homeAssigenment3/animal.html",
    "/C:/Users/batel/OneDrive/Desktop/course/homeAssigenment3/zoo.html",
    "/C:/Users/batel/OneDrive/Desktop/course/homeAssigenment3/dashboard.html",
  ].includes(window.location.pathname)
) {
  document.addEventListener("DOMContentLoaded", function () {
    addNavBar();
  });
} else {
  console.log("no");
}

//
redirectToZoo = () => {
  window.location.href = "./zoo.html";
};
redirectToLogin = () => {
  window.location.href = "./login.html";
};
///////////////////////////////////////////

/////////////////////////

function playAudio() {
  // Create an audio element if it doesn't exist
  audioElement = new Audio("./audio-background.mp3");

  // Start playing the audio
  audioElement.play();
}

// כשלוחצים על כפתור הריסט נעבור לדף הרשמה
function reset() {
  localStorage.clear(); // Clear all items from local storage
  window.location.href = "./signup.html";
}

function logOut() {
  localStorage.removeItem("player"); //מחיקת השחקן הנוכחי מהלוקל סטורג'

  window.location.href = "./signup.html";
}
