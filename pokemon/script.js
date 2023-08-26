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

  function addListItem(pokemon) {
    // ... (previous code)
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

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

  return {
    getAll: function() {
      return pokemonList;
    },
    add: function(item) {
      if (typeof item === "object" && item.name && item.detailsUrl) {
        pokemonList.push(item);
      } else {
        console.log("Invalid Pokémon data.");
      }
    },
    addListItem: addListItem,
    LoadList: loadList,
    loadDetails: loadDetails
  };
})();

// Load the list of Pokémon and add them to the pokemonList
pokemonRepository.LoadList().then(function() {
  // Now that the list is loaded, you can add list items and details
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

//note 2 task,1.7//
var pokemonRepository = (function() {
  var pokemonList = [];

  function addListItem(pokemon) {
    // ... (previous code)
  }

  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function() {
      console.log(pokemon); // Log the Pokémon details retrieved from API
      // Further logic to display details in the interface can be added here
    });
  }

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

  return {
    getAll: function() {
      return pokemonList;
    },
    add: function(item) {
      if (typeof item === "object" && item.name && item.detailsUrl) {
        pokemonList.push(item);
      } else {
        console.log("Invalid Pokémon data.");
      }
    },
    addListItem: addListItem,
    LoadList: loadList,
    loadDetails: loadDetails
  };
})();

// Load the list of Pokémon and their details
pokemonRepository.LoadList().then(function() {
  var allPokemons = pokemonRepository.getAll();

  // Loop through the Pokémon list and use addListItem function
  allPokemons.forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});



