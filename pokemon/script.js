var pokemonList = [];
var pokemonList = [
    {
      name: "Bulbasaur",
      height: 7,
      types: ["grass", "poison"]
    },
    {
      name: "Charmander",
      height: 6,
      types: ["fire"]
    },
    {
      name: "Squirtle",
      height: 5,
      types: ["water"]
    }
  ];
  
  console.log(pokemonList);
 
  var pokemonRepository = (function() {
  var pokemonList = [
    {
      name: "Pikachu",
      height: 4,
      types: ["electric"],
      imageUrl: "https://example.com/pikachu.jpg"
    },
    {
      name: "Squirtle",
      height: 5,
      types: ["water"],
      imageUrl: "https://example.com/squirtle.jpg"
    },
    {
      name: "Charmander",
      height: 6,
      types: ["fire"],
      imageUrl: "https://example.com/charmander.jpg"
    }
    // You can add more Pokémon objects here
  ];

  function addListItem(pokemon) {
    var list = document.querySelector(".pokemon-list");
    var listItem = document.createElement("li");
    var button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("pokemon-button");
    listItem.appendChild(button);
    list.appendChild(listItem);

    // Add event listener to the button
    button.addEventListener("click", function() {
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  return {
    getAll: function() {
      return pokemonList;
    },
    add: function(item) {
      if (typeof item === "object" && item.name && item.height && item.types) {
        pokemonList.push(item);
      } else {
        console.log("Invalid Pokémon data.");
      }
    },
    addListItem: addListItem
  };
})();

// Loop through the Pokémon list and use addListItem function
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
//task1.7 note//
var pokemonRepository = (function() {
  var pokemonList = [];

  function loadList() {
    return fetch("https://pokeapi.co/api/v2/pokemon/")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        data.results.forEach(function(item) {
          var pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      })
      .catch(function(error) {
        console.error("Error loading Pokémon list:", error);
      });
//note 2 task,1.7//
 return fetch("https://pokeapi.co/api/v2/pokemon/")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        data.results.forEach(function(item) {
          var pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          pokemonRepository.add(pokemon);
        });
      })
      .catch(function(error) {
        console.error("Error loading Pokémon list:", error);
      });
  }

  function loadDetails(pokemon) {
    var url = pokemon.detailsUrl;
    return fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(details) {
        pokemon.imageUrl = details.sprites.front_default;
        pokemon.height = details.height;
      })
      .catch(function(error) {
        console.error("Error loading Pokémon details:", error);
      });
  }
//task 1.8 note 1//
var pokemonRepository = (function() {
  // ... (previous code)

  function showModal(pokemon) {
    var modalContainer = document.querySelector("#modal-container");
    modalContainer.innerHTML = ""; // Clear existing content

    var modal = document.createElement("div");
    modal.classList.add("modal");

    var closeButton = document.createElement("button");
    closeButton.classList.add("modal-close");
    closeButton.innerText = "Close";

    closeButton.addEventListener("click", hideModal);

    var nameElement = document.createElement("h2");
    nameElement.innerText = pokemon.name;

    var heightElement = document.createElement("p");
    heightElement.innerText = "Height: " + pokemon.height;

    modalContainer.appendChild(modal);
    modalContainer.classList.add("is-visible");
  }

  function hideModal() {
    var modalContainer = document.querySelector("#modal-container");
    modalContainer.classList.remove("is-visible");
  }


// Event listener to close the modal on overlay click
document.querySelector("#modal-container").addEventListener("click", function(event) {
  var modalContainer = document.querySelector("#modal-container");
  if (event.target === modalContainer) {
    pokemonRepository.hideModal();
  }
});

//end note 1.8//

