import fetchPokemonApi from "./fetchPokemonApi.js";

const fetchButton = document.getElementById("fetch-button");
fetchButton.addEventListener("click",fetchPokemonApi);