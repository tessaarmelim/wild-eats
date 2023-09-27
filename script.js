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
    foodCategory: "",
    favory: false
  },
  {
    name: "Restaurant2",
    picture: "https://placekitten.com/200/145",
    foodCategory: "",
    favory: false
  },
  {
    name: "Restaurant3",
    picture: "https://placekitten.com/200/90",
    foodCategory: "",
    favory: false
  },
  {
    name: "Restaurant4",
    picture: "https://placekitten.com/200/194",
    foodCategory: "",
    favory: false
  },
  {
    name: "Restaurant5",
    picture: "https://placekitten.com/200/179",
    foodCategory: "",
    favory: false
  },
  {
    name: "Restaurant6",
    picture: "https://placekitten.com/200/164",
    foodCategory: "",
    favory: false
  },
  {
    name: "Restaurant7",
    picture: "https://placekitten.com/200/190",
    foodCategory: "",
    favory: false
  },
  {
    name: "Restaurant8",
    picture: "https://placekitten.com/200/165",
    foodCategory: "",
    favory: false
  },
  {
    name: "Restaurant9",
    picture: "https://placekitten.com/200/122",
    foodCategory: "",
    favory: false
  }
];

const restaurantCards = document.querySelector(".restaurants-cards");
restaurantCards.style.backgroungColor = "yellow";

const createRestaurantCard = (imageUrl) => {
  const restaurantCard = document.createElement("div");
  restaurantCard.style.backgroundImage = `url(${imageUrl})`;
  restaurantCard.classList.add("restaurant-img");
  restaurantCards.appendChild(restaurantCard);
}

for (let i = 0; i < allRestaurants.length; i++) {
  createRestaurantCard(allRestaurants[i].picture);
}

const filter = document.querySelectorAll(".filter");
console.log(filter);
for(let i = 0; i < filter.length; i++){
  filter[i].addEventListener("click", function () {
    filter[i].classList.toggle("yellow-background");
  });
}