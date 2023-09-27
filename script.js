const allRestaurants = [
  {
    name: "Restaurant1",
    picture: "https://placekitten.com/200/287"
  },
  {
    name: "Restaurant2",
    picture: "https://placekitten.com/200/139"
  },
  {
    name: "Restaurant3",
    picture: "https://placekitten.com/200/90"
  },
  {
    name: "Restaurant4",
    picture: "https://placekitten.com/200/194"
  },
  {
    name: "Restaurant5",
    picture: "https://placekitten.com/200/179"
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
  console.log(i);
  createRestaurantCard(allRestaurants[i].picture);
}