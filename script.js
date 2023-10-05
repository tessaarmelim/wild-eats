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
    name: "Brunchy Café Paris",
    picture: "pictures/restaurants/brunchy-cafe-paris-img.jpg",
    foodCategory: "Brunch",
    favory: false
  },
  {
    id: 2,
    name: "La Confidente",
    picture: "pictures/restaurants/la-confidente-img.jpg",
    foodCategory: "Français",
    favory: false
  },
  {
    id: 3,
    name: "Brutti E Cattivi",
    picture: "pictures/restaurants/brutti-e-cattivi-img.jpg",
    foodCategory: "Pizza",
    favory: false
  },
  {
    id: 4,
    name: "Aux Petits Oignons",
    picture: "pictures/restaurants/aux-petits-oignons-img.jpg",
    foodCategory: "Francais",
    favory: false
  },
  {
    id: 5,
    name: "O'Kyoto",
    picture: "pictures/restaurants/o-kyoto.jpg",
    foodCategory: "Japonais",
    favory: false
  },
  {
    id: 6,
    name: "Chang Sheng",
    picture: "pictures/restaurants/chang-sheng-img.jpg",
    foodCategory: "Chinois",
    favory: false
  },
  {
    id: 7,
    name: "Aux Ours",
    picture: "pictures/restaurants/aux-ours-img.jpg",
    foodCategory: "Francais",
    favory: false
  },
  {
    id: 8,
    name: "Aarchna",
    picture: "pictures/restaurants/aarchna-img.jpg",
    foodCategory: "Indien",
    favory: false
  },
  {
    id: 9,
    name: "Pizza Hut",
    picture: "pictures/restaurants/pizza-hut-img.jpg",
    foodCategory: "Indien",
    favory: false
  },
  {
    id: 10,
    name: "McDonald’s",
    picture: "pictures/restaurants/mc-donalds-img.jpg",
    foodCategory: "Burger",
    favory: false
  },
  {
    id: 11,
    name: "Ben's Coffee",
    picture: "pictures/restaurants/bens-cofee-img.jpg",
    foodCategory: "Burger",
    favory: false
  },
  {
    id: 12,
    name: "Au Fond du Jardin",
    picture: "pictures/restaurants/au-fond-du-jardin-img.jpg",
    foodCategory: "Indien",
    favory: false
  }
];

const restaurantsCards = document.querySelector(".restaurants-cards");

const createRestaurantCard = ({name, picture, foodCategory, id}, cls) => {
  return `
    <div class="${cls}-card">
      <div class="${cls}-card-head">
        <div class="${cls}-card-img">
          <img src="${picture}" alt="${name}">
        </div>
      </div>
      <div class="${cls}-card-body">
        <div class="${cls}-card-title">
          <h3>${name}</h3>
        </div>
        <div class="star">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" id="${cls}_${id}"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/></svg>
        </div>
        <div class="${cls}-card-food-category">
        <h4>${foodCategory}</h4>
        </div>
      </div>
    </div>
  `;
}

const selection = []; //Tableau contenant les filtres sélectionés

const addRestaurantCard = (filteredRestaurants) => {
  restaurantsCards.innerHTML = ``;
  for (let i = 0; i < filteredRestaurants.length; i++) {
    const restaurantCard = document.createElement("div");
    restaurantCard.innerHTML = createRestaurantCard(filteredRestaurants[i], "restaurant");
    restaurantsCards.appendChild(restaurantCard);
  }
  addStarClicker();
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
}

const favoritesCards = document.querySelector(".favorites-cards");

const addFavoritesCards = (favoritesRestaurants) => {
  favoritesCards.innerHTML = ``;
  for (let i = 0; i < favoritesRestaurants.length; i++) {
    const favoriteCard = document.createElement("div");
    favoriteCard.innerHTML = createRestaurantCard(favoritesRestaurants[i], "favorite");
    favoritesCards.appendChild(favoriteCard);
  }
  addStarClicker();
}

const favorites = [];

const addStarClicker = () => {
  const stars = document.querySelectorAll(".star svg");
  for (let i = 0; i < stars.length; i++) {
    stars[i].addEventListener('click', () => {
      const id = parseInt(stars[i].id.split("_").pop());
      const restaurant = allRestaurants.find(restaurant => restaurant.id === id);
      if (!favorites.some(fav => fav.id === id)) {
        restaurant.favory = true;
        favorites.push(restaurant);
        addFavoritesCards(favorites);
      } else {
        restaurant.favory = false;
        const toUnfav = favorites.find(restaurant => restaurant.id === id);
        const index = favorites.indexOf(toUnfav);
        favorites.splice(index, 1);
        addFavoritesCards(favorites);
      }
    })
  }
}

//addFavoritesCards(favorites);

const filter = () => {
  addStarClicker();
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
    });
    filterRestaurant();
  }
}

filter();