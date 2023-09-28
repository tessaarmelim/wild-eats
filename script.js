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
    foodCategory: "Coréen",
    favory: false
  },
  {
    name: "Restaurant2",
    picture: "https://placekitten.com/200/145",
    foodCategory: "Chinois",
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
    foodCategory: "Anglais",
    favory: false
  },
  {
    name: "Restaurant8",
    picture: "https://placekitten.com/200/165",
    foodCategory: "Americain",
    favory: false
  },
  {
    name: "Restaurant9",
    picture: "https://placekitten.com/200/122",
    foodCategory: "Espagnol",
    favory: false
  }
];

const restaurantsCards = document.querySelector(".restaurants-cards");

const createRestaurantCard = (name, imageUrl, food) => {
  const restaurantCard = document.createElement("div");
  restaurantCard.classList.add("restaurant-card");
  restaurantsCards.appendChild(restaurantCard);
  
  const restaurantCardImg = document.createElement("div");
  restaurantCardImg.style.backgroundImage = `url(${imageUrl})`;
  restaurantCardImg.classList.add("restaurant-card-img");
  restaurantCard.appendChild(restaurantCardImg);

  const restaurantCardTitle = document.createElement("div");
  restaurantCardTitle.classList.add("restaurant-card-title");
  restaurantCardTitle.innerHTML = name;
  restaurantCard.appendChild(restaurantCardTitle);

  const restaurantCardDescription = document.createElement("div");
  restaurantCardDescription.classList.add("estaurant-card-description");
  restaurantCardDescription.innerHTML = food;
  restaurantCard.appendChild(restaurantCardDescription);
}

for (let i = 0; i < allRestaurants.length; i++) {
  createRestaurantCard(allRestaurants[i].name, allRestaurants[i].picture, allRestaurants[i].foodCategory);
}

const filter = document.querySelectorAll(".filter");
console.log(filter);
for(let i = 0; i < filter.length; i++){
  filter[i].addEventListener("click", function () {
    filter[i].classList.toggle("yellow-background");
  });
}