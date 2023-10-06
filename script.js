const faqData = [
  {
    question: "Comment réserver une table dans un restaurant ?",
    answer: "Appelez directement le restaurant et demandez s'ils acceptent les réservations par téléphone."
  },
  {
    question: "Quels sont les modes de réglements acceptés ?",
    answer: "Les modes de paiement acceptés varient d'un restaurant à l'autre, mais les options courantes incluent, Espèces, Cartes de crédit et de débit (Visa, MasterCard, American Express), Paiements mobiles (Apple Pay, Google Pay), Chèques-cadeaux ou cartes-cadeaux spécifiques au restaurant."
  },
  {
    question: "comment trouver un restaurant proposant la livraison ?",
    answer: "Utiliser des applications de livraison de repas, comme Uber Eats, DoorDash, ou Grubhub."
  },
  {
    question: "Ou puis je trouver les horaires d'un restaurant ?",
    answer: "Les horaires d'un restaurant sont généralement disponibles sur : Le site web officiel du restaurant, Les applications de réservation de restaurants, Les moteurs de recherche en ligne, tels que Google, qui affichent souvent les horaires d'ouverture."
  },
  {
    question: "Ou puis je trouver les informations qui concernent les allergènes ?",
    answer: "Sur le menu du restaurant lui-même, où les allergènes courants sont souvent indiqués à côté des plats."
  }
];

const createQA = ({question, answer}) => {
  return `
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

// details.addEventListener("toggle", (event) => {
//   if (details.open) {
//     /* the element was toggled open */
//   } else {
//     /* the element was toggled closed */
//   }
// });

const faqContainer = document.querySelector('.faq-container');
const addQa = (faq) => {
  faqContainer.innerHTML = ``;
  for (let i = 0; i < faq.length; i++) {
    const faqDiv = document.createElement('div');
    faqDiv.innerHTML = createQA(faq[i]);
    faqContainer.appendChild(faqDiv);
  }
}
addQa(faqData);

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
    foodCategory: "Français",
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
    foodCategory: "Français",
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

const createRestaurantCard = ({name, picture, foodCategory, id, favory}, cls) => {
  const emptyStar = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" id="emptyStar_${cls}_${id}"><style>svg{fill:#ffff00}</style><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/></svg>`;
  const filledStar = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" id="filledStar_${cls}_${id}"><style>svg{fill:#ffff00}</style><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>`;
  const starSVG = favory ? filledStar: emptyStar;
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
        <div class="star ${cls}">
          ${starSVG}
        </div>
        <div class="${cls}-card-food-category">
        <h4>${foodCategory}</h4>
        </div>
      </div>
    </div>
  `;
}

const selection = []; //Tableau contenant les filtres sélectionés

const addRestaurantCard = (filteredRestaurants) => { //render
  restaurantsCards.innerHTML = ``;
  for (let i = 0; i < filteredRestaurants.length; i++) {
    const restaurantCard = document.createElement("div");
    restaurantCard.innerHTML = createRestaurantCard(filteredRestaurants[i], "restaurant");
    restaurantsCards.appendChild(restaurantCard);
  }
  addStarClicker("restaurant");
}

const createFilterButton = (food) => {
  return `
  <button class="filter-button">${food}</button>
  `
}

const filters = []; //Tableau des catégories de nourriture pour les filtres

const addFilters = (restaurants) => {
  for (let i = 0; i < restaurants.length; i++) {
    if (!filters.includes(restaurants[i].foodCategory)) {
      filters.push(restaurants[i].foodCategory);
    }
  }
}

addFilters(allRestaurants);
console.log(filters);
const filtersCards = document.querySelector(".filters-cards");

const addFilterButton = (filters) => {
  filtersCards.innerHTML = ``;
  for (let i = 0; i < filters.length; i++) {
    const filterButton = document.createElement("div");
    filterButton.innerHTML = createFilterButton(filters[i]);
    filtersCards.appendChild(filterButton);
  }
}

addFilterButton(filters);

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

const addFavoritesCards = () => {
  favoritesCards.innerHTML = ``;
  if(favorites.length === 0) {
    favoritesCards.innerHTML = "Vous n'avez pas encore de favoris";
  } else {
    for (let i = 0; i < favorites.length; i++) {
      const favoriteCard = document.createElement("div");
      favoriteCard.innerHTML = createRestaurantCard(favorites[i], "favorite");
      favoritesCards.appendChild(favoriteCard);
    }
  }
  addStarClicker("favorite");
}

const favorites = [];

const starClick = (star) => {
  const id = parseInt(star.id.split("_").pop());
  const restaurant = allRestaurants.find(restaurant => restaurant.id === id);
  if (!favorites.some(fav => fav.id === id)) {
    restaurant.favory = true;
    favorites.push(restaurant);
  } else {
    restaurant.favory = false;
    const toUnfav = favorites.find(restaurant => restaurant.id === id);
    const index = favorites.indexOf(toUnfav);
    favorites.splice(index, 1);
  }
  addFavoritesCards(favorites);
  addRestaurantCard(allRestaurants);
}

const addStarClicker = (type) => {
  const stars = document.querySelectorAll(`.star.${type} svg`);
  for (let i = 0; i < stars.length; i++) {
    stars[i].removeEventListener('click', () => starClick(stars[i]));
    stars[i].addEventListener('click', () => starClick(stars[i]));
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
      filterButtons[i].classList.toggle("filter-button-clicked");
      filterRestaurant();
    });
  }
  filterRestaurant();
}

filter();



