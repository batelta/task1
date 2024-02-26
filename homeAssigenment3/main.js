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
        image:"https://static.vecteezy.com/system/resources/previews/005/112/698/original/cute-lion-cartoon-lying-down-free-vector.jpg"
      },
      {
        name: "Elephant",
        isPredator: false,
        weight: 1200,
        height: 200,
        color: "grey",
        habitat: "land",
        image:"https://t4.ftcdn.net/jpg/00/63/25/87/360_F_63258772_2MCf7bx50H6fKQNiMS9mzDfVw1oJykmr.jpg"
      },
      {
        name: "Giraffe",
        isPredator: false,
        weight: 100,
        height: 120,
        color: "brown",
        habitat: "land",
        image:"https://t3.ftcdn.net/jpg/00/95/46/88/360_F_95468841_5Sf97aPXpawo9WvR0AoOSiK9fjlRIwHE.jpg"
      },
      {
        name: "Tiger",
        isPredator: true,
        weight: 100,
        height: 120,
        color: "brown",
        habitat: "land",
        image:"https://media.istockphoto.com/id/1084217224/vector/cartoon-cute-tiger-vector-illustration-of-funny-happy-animal.jpg?s=612x612&w=0&k=20&c=XSwwExCdqirug9PLBe5tvzC1bWAc4NDVCZjmUd3cPnA="
      },
      {
        name: "Monkey",
        isPredator: false,
        weight: 100,
        height: 120,
        color: "brown",
        habitat: "land",
        image:"https://img.freepik.com/premium-vector/cute-monkey-cartoon_146562-7.jpg"
      },
      {
        name: "Kangaroo",
        isPredator: false,
        weight: 100,
        height: 120,
        color: "brown",
        habitat: "land",
        image:"https://t4.ftcdn.net/jpg/02/53/43/21/360_F_253432125_jIvEA2B5WKVN1ndlmoJnsof15900M5bv.jpg"
      },
      {
        name: "Penguin",
        isPredator: false,
        weight: 100,
        height: 120,
        color: "brown",
        habitat: "sea",
        image:"https://t4.ftcdn.net/jpg/01/28/53/89/360_F_128538937_mrePXaBf9rNNr507Iij35gLkuSqEuXdW.jpg"
      },
      {
        name: "Zebra",
        isPredator: false,
        weight: 100,
        height: 120,
        color: "brown",
        habitat: "land",
        image:"https://i.pinimg.com/736x/59/c3/5b/59c35bc73af7141e10efbc8028637212.jpg"
      },
      {
        name: "Cheetah",
        isPredator: true,
        weight: 100,
        height: 120,
        color: "brown",
        habitat: "land",
        image:"https://t3.ftcdn.net/jpg/01/19/87/22/360_F_119872213_dVauWvVOkfqiVrSjG9SULNoX6cyihMtA.jpg"
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
     
      const playerData = JSON.parse(localStorage.getItem('player'));

      function reset() {
        localStorage.clear(); // Clear all items from local storage
       window.location.href="./signup.html"
    }
  function logout() {
    //ממשו את הלוגיקה שמתנתקת מאורח מחובר
    // שימו לב לנקות את השדה המתאים בלוקל סטורג'
  }
