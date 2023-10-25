const baseUrl = "https://pokeapi.co/api/v2/type/";
const pokemonList = document.getElementById("pokemon-list");


export default function fetchPokemonApi()
{
    const type = document.getElementById("type").value;
    fetch(baseUrl + type)
      .then((response) => response.json())
      .then((data) => {
        const pokemonArray = data.pokemon;
        pokemonList.innerHTML = "";
    
        pokemonArray.forEach((pokemonData) => {
          const pokemonName = pokemonData.pokemon.name;
          const pokemonUrl = pokemonData.pokemon.url;
          const pokemonNumber = pokemonUrl.slice(33).replace(/\//g, "");;
          console.log(pokemonUrl,pokemonNumber);
    
          const pokemonSpriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonNumber}.png`;


          let img = new Image();
          img.src = pokemonSpriteUrl;
          img.alt = pokemonName;

          img.onload = function(){ // Loaded successfully

              let article = document.createElement("article");

              
              switch (type) {
                case "fire":
                   article.classList.add("fire");
                  break;
                case "water":
                  article.classList.add("water");
                  break;
                case "normal":
                  article.classList.add("normal");
                  break;    
              }

              let h3 = document.createElement("h3");
              h3.innerText = pokemonName.toUpperCase();
        
              article.appendChild(h3);
              article.appendChild(img);
              pokemonList.appendChild(article);
          };
        });
      })
      .catch((error) => console.error("Error:", error));
}


