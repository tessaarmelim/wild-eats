const allRestaurants = [
  /* {
   name: "",
   picture: "",
   foodCategory: ""
   favory: Boolean
  } */
  {
    name: "Restaurant1",
    picture: "https://placekitten.com/200/287",
    foodCategory: "Italien",
    favory: false
  },
  {
    name: "Restaurant2",
    picture: "https://placekitten.com/200/145",
    foodCategory: "Libanais",
    favory: false
  },
  {
    name: "Restaurant3",
    picture: "https://placekitten.com/200/90",
    foodCategory: "Japonnais",
    favory: false
  },
  {
    name: "Restaurant4",
    picture: "https://placekitten.com/200/194",
    foodCategory: "Francais",
    favory: false
  },
  {
    name: "Restaurant5",
    picture: "https://placekitten.com/200/179",
    foodCategory: "Italien",
    favory: false
  },
  {
    name: "Restaurant6",
    picture: "https://placekitten.com/200/164",
    foodCategory: "Libanais",
    favory: false
  },
  {
    name: "Restaurant7",
    picture: "https://placekitten.com/200/190",
    foodCategory: "Japonnais",
    favory: false
  },
  {
    name: "Restaurant8",
    picture: "https://placekitten.com/200/165",
    foodCategory: "Francais",
    favory: false
  },
  {
    name: "Restaurant9",
    picture: "https://placekitten.com/200/122",
    foodCategory: "Italien",
    favory: false
  }
];

const restaurantsCards = document.querySelector(".restaurants-cards");

const createRestaurantCard = (data) => {
  const restaurantCard = document.createElement("div");
  restaurantCard.classList.add("restaurant-card");
  restaurantsCards.appendChild(restaurantCard);
  
  const restaurantCardImg = document.createElement("div");
  // restaurantCardImg.style.backgroundImage = `url(${data.picture})`;
  restaurantCardImg.style.backgroundColor = "rgba(142, 175, 87, 0.58)"
  restaurantCardImg.classList.add("restaurant-card-img");
  restaurantCard.appendChild(restaurantCardImg);

  const restaurantCardTitle = document.createElement("div");
  restaurantCardTitle.classList.add("restaurant-card-title");
  restaurantCardTitle.innerHTML = data.name;
  restaurantCard.appendChild(restaurantCardTitle);

  const restaurantCardFoodCategory = document.createElement("div");
  restaurantCardFoodCategory.classList.add("restaurant-card-food-category");
  restaurantCardFoodCategory.innerHTML = data.foodCategory;
  restaurantCard.appendChild(restaurantCardFoodCategory);
}

const addRestaurantCard = (filteredRestaurants) => {
  restaurantsCards.innerHTML = ``;
  for (let i = 0; i < filteredRestaurants.length; i++) {
    createRestaurantCard(filteredRestaurants[i]);
  }
  restaurantCards = document.querySelectorAll(".restaurant-card");
}

let restaurantCards = [];

const filterButtons = document.querySelectorAll(".filter-button");

let selection = [];

const filterRestaurant = () => {
  const filteredRestaurants = [];
  for (let i = 0; i < allRestaurants.length; i++) {
    if(selection.length === 0 || selection.includes(allRestaurants[i].foodCategory)) {
      filteredRestaurants.push(allRestaurants[i]);
    }
  }
  addRestaurantCard(filteredRestaurants);
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