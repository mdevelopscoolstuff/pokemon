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
    
  ];
  
  
  console.log(pokemonList);
// Loop through each item in pokemonList
  for (var i = 0; i < pokemonList.length; i++) {
    var pokemon = pokemonList[i];
    var pokemonInfo = pokemon.name + " (height: " + pokemon.height + ")";
    document.write(pokemonInfo + "<br>");
  }
  var maxHeightForSpecial = 5; //  value to your preferred threshold

// Loop through each item in pokemonList
for (var i = 0; i < pokemonList.length; i++) {
  var pokemon = pokemonList[i];
  var pokemonInfo = pokemon.name + " (height: " + pokemon.height + ")";
  
  // Check if the Pokémon's height is above the special threshold
  if (pokemon.height > maxHeightForSpecial) {
    pokemonInfo += " - Wow, that’s big!";
  }
  
  document.write(pokemonInfo + "<br>");
}
var imageContainer = document.getElementById("imageContainer");
  
  pokemonList.forEach(function(pokemon) {
    var pokemonInfo = pokemon.name + " (height: " + pokemon.height + ")";
    
    
    if (pokemon.height > 5) {
      pokemonInfo += " - Wow, that’s big!";
    }
    
   
    var imgElement = document.createElement("img");
    imgElement.src = pokemon.imageUrl;
    imgElement.alt = pokemon.name;
    imageContainer.appendChild(imgElement);
    imageContainer.appendChild(document.createTextNode(pokemonInfo));
    imageContainer.appendChild(document.createElement("br"));
  });
  var pokemonRepository = (function() {
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
      }
    };
  })();
  
  
  var allPokemons = pokemonRepository.getAll();
  console.log(allPokemons);
  
  var newPokemon = {
    name: "Bulbasaur",
    height: 7,
    types: ["grass", "poison"],
    imageUrl: "https://example.com/bulbasaur.jpg"
  };
  pokemonRepository.add(newPokemon);
  console.log(pokemonRepository.getAll());  
  
