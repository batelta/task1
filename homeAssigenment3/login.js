function loginAsVisitor(visitorName) {
  // תממשו את הלוגיקה של בחירת אורח שנכנס לגן החיות
  // שמרו את האורח שבחרתם, בלוקל סטורג' כך שבכל העמודים נדע מי האורח הנוכחי
}


let visitorsForView = [...visitors];
const dialog = document.querySelector("#visitors-dialog");

const getVisitorsHTMLCard = (visitor) => {  //התבנית שבה נוכל לראות את הפרטים עבור כל משתמש 
    const template = `
        <div class="card" style="min-height: 360px;" >
          <img class="visitor-card" src="${visitor.image}" alt="${visitor.name}"/>
          <div class="card-body">
            <p class="card-text">${visitor.name}</p>
            <p class="card-text">${visitor.coins} <img src="https://cdn-icons-png.freepik.com/256/8350/8350237.png" alt="coin-logo"></p>
          </div>
        </div>`;
  
        const wrapper = document.createElement("div");
        wrapper.className = "visitor-card";
        wrapper.innerHTML = template;
        wrapper.addEventListener("click", () => handleVisitorsClick(visitor));
        return wrapper;
      };

      const getCloseModalHTMLButton = () => {
        const closeButton = document.createElement("button");
        closeButton.innerText = " Close";
        closeButton.addEventListener("click", () => dialog.close());
        return closeButton;
      };
      const handleVisitorsClick = (visitor) => {
        dialog.innerHTML = "";
        dialog.append(getCloseModalHTMLButton(), getVisitorsHTMLCard(visitor));
        dialog.showModal();
      };

      const getSearchBox = () => {
        const queryInput = document.createElement("input");
        queryInput.id = "query-input";
        queryInput.placeholder = "Search visitors";
        queryInput.className = "form-control my-4";
        queryInput.oninput = (e) => {
          visitorsForView = visitors.filter((visitor) =>
          visitor.name.toLowerCase().includes(e.target.value) || visitor.name.toUpperCase().includes(e.target.value)
      
           
          );
          renderVisitors();
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
        visitorsForView = [...visitors];
        renderVisitors();
      };
      
      const renderVisitors = () => {
        const visitorsCards = visitorsForView.map(getVisitorsHTMLCard);
        const visitorsPlaceholder = document.getElementById("placeholder");
        visitorsPlaceholder.innerHTML = "";
      
        if (!visitorsCards.length) {
          visitorsPlaceholder.appendChild(getEmptyCardsHTMLTemplate());
        }
        visitorsPlaceholder.append(...visitorsCards);
      };
      
      document.body.insertAdjacentElement("afterbegin", getSearchBox());
      window.addEventListener("load", renderVisitors)