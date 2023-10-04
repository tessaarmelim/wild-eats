const faqData = [
  {
    question: "blabla",
    answer: "blablabla"
  },
  {
    question: "blabla",
    answer: "blablabla"
  },
  {
    question: "blabla",
    answer: "blablabla"
  },
  {
    question: "blabla",
    answer: "blablabla"
  },
  {
    question: "blabla",
    answer: "blablabla"
  }
];


const createQA = ({question, answer}) => {
  return 
  
  `
  <div class="qa-container">
    <details>
      <summary>
        <div class="question-container">
          <div class="icon-faq">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
          </div>
          <p class="question">${question}</p>
        </div>
      </summary>
      <p class="reponse">${answer}</p>
    </details>
  </div>
  ` 
}

const addQa = (faq) => {
  for (let i = 0; i < faq.length; i++) {
    createQA(faq[i])
  }
}


const allRestaurants = [
  /* {
    id: 1,
   name: "",
   picture: "",
   foodCategory: ""
   favory: Boolean
  } */
  {
    id: 1,
    name: "Restaurant1",
    picture: "https://placekitten.com/200/287",
    foodCategory: "Italien",
    favory: false
  },
  {
    id: 2,
    name: "Restaurant2",
    picture: "https://placekitten.com/200/145",
    foodCategory: "Libanais",
    favory: false
  },
  {
    id: 3,
    name: "Restaurant3",
    picture: "https://placekitten.com/200/90",
    foodCategory: "Japonnais",
    favory: false
  },
  {
    id: 4,
    name: "Restaurant4",
    picture: "https://placekitten.com/200/194",
    foodCategory: "Francais",
    favory: false
  },
  {
    id: 5,
    name: "Restaurant5",
    picture: "https://placekitten.com/200/179",
    foodCategory: "Italien",
    favory: false
  },
  {
    id: 6,
    name: "Restaurant6",
    picture: "https://placekitten.com/200/164",
    foodCategory: "Libanais",
    favory: false
  },
  {
    id: 7,
    name: "Restaurant7",
    picture: "https://placekitten.com/200/190",
    foodCategory: "Japonnais",
    favory: false
  },
  {
    id: 8,
    name: "Restaurant8",
    picture: "https://placekitten.com/200/165",
    foodCategory: "Francais",
    favory: false
  },
  {
    id: 9,
    name: "Restaurant9",
    picture: "https://placekitten.com/200/122",
    foodCategory: "Italien",
    favory: false
  }
];

const starRegular = "M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z";
const starSolid = "M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z";

const restaurantsCards = document.querySelector(".restaurants-cards");

const createRestaurantCard = (data) => {
  const restaurantCard = document.createElement("div");
  restaurantCard.classList.add("restaurant-card");
  restaurantsCards.appendChild(restaurantCard);
  
  const restaurantCardHead = document.createElement("div");
  restaurantCardHead.classList.add("restaurant-card-head");
  restaurantCard.appendChild(restaurantCardHead);

  const restaurantCardBody = document.createElement("div");
  restaurantCardBody.classList.add("restaurant-card-body");
  restaurantCard.appendChild(restaurantCardBody);

  const restaurantCardImg = document.createElement("div");
  /* restaurantCardImg.style.backgroundImage = `url(${data.picture})`; */
  restaurantCardImg.style.backgroundColor = "rgba(142, 175, 87, 0.58)"
  restaurantCardImg.classList.add("restaurant-card-img");
  restaurantCardHead.appendChild(restaurantCardImg);

  const restaurantCardTitle = document.createElement("div");
  restaurantCardTitle.classList.add("restaurant-card-title");
  restaurantCardTitle.innerHTML = data.name;
  restaurantCardBody.appendChild(restaurantCardTitle);

  const star = document.createElement("div");
  star.classList.add("star");
  restaurantCardBody.appendChild(star);

  const starIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const starPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  starIcon.setAttribute("star_id", `starIcon${data.id}`);
  starIcon.setAttribute("height", "1em");
  starIcon.setAttribute("viewBox", "0 0 576 512");
  starPath.setAttribute("d", starRegular);
  starIcon.setAttribute("fill", "yellow");
  starIcon.appendChild(starPath);
  star.appendChild(starIcon);

  const restaurantCardFoodCategory = document.createElement("div");
  restaurantCardFoodCategory.classList.add("restaurant-card-food-category");
  restaurantCardFoodCategory.innerHTML = data.foodCategory;
  restaurantCardBody.appendChild(restaurantCardFoodCategory);
}

//let restaurantCards = [];
let selection = []; //Tableau contenant les filtres sélectionés

const addRestaurantCard = (filteredRestaurants) => {
  restaurantsCards.innerHTML = ``;
  for (let i = 0; i < filteredRestaurants.length; i++) {
    createRestaurantCard(filteredRestaurants[i]);
  }
  //restaurantCards = document.querySelectorAll(".restaurant-card");
}

const filterButtons = document.querySelectorAll(".filter-button");

const filterRestaurant = () => {
  const filteredRestaurants = [];
  for (let i = 0; i < allRestaurants.length; i++) {
    if(selection.length === 0 || selection.includes(allRestaurants[i].foodCategory)) {
      filteredRestaurants.push(allRestaurants[i]);
    }
  }
  addRestaurantCard(filteredRestaurants);
  addStarClicker();
}

const favorites = [];

const addStarClicker = () => {
  const stars = document.querySelectorAll(".star svg");
  for (let i = 0; i < stars.length; i++) {
    stars[i].starIcon = stars[i];
    stars[i].starPath = stars[i].querySelector("path");
    stars[i].addEventListener('click', () => {
      const long = stars[i].starIcon.getAttribute("star_id").length;
      const id = parseInt(stars[i].starIcon.getAttribute("star_id")[long -1], 10);
      const restaurant = allRestaurants.find(restaurant => restaurant.id === id);
      if (stars[i].starPath.getAttribute("d") === starRegular) {
        stars[i].starIcon.starPath.setAttribute("d", starSolid);
        restaurant.favory = true;
        favorites.push(restaurant);
        console.log(favorites);
      } else {
        stars[i].starIcon.starPath.setAttribute("d", starRegular);
        restaurant.favory = false;
        const toUnfav = favorites.find(restaurant => restaurant.id === id);
        const index = favorites.indexOf(toUnfav);
        favorites.splice(index, 1);
        console.log(favorites);
      }
    })
  }
}

const filter = () => {
  for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function () {
      if (selection.includes(filterButtons[i].textContent)) { //si le filtre est cliqué on le retire
        const index = selection.indexOf(filterButtons[i].textContent);
        if (index !== -1) {
          selection.splice(index, 1);
        }
      } else { //si il n'y est pas on l'ajoute
        selection.push(filterButtons[i].textContent);
      }
      filterButtons[i].classList.toggle("yellow-background");
      filterRestaurant();
      console.log(selection);
    });
    filterRestaurant();
  }
}

filter();



