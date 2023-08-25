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


