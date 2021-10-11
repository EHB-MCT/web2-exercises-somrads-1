"user strict";
// import Team from './Teams';
let list = [];
let pokemons= [];

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
.then(resp => resp.json())
.then (data => {
    list = data.results;
    // LOOP 
    list.forEach(poke =>{
        fetch(poke.url)
        .then (resp => resp.json())
        .then(pokeObject => {
            pokemons.push(pokeObject);

        });
    });

});


window.onload = function(){
    console.log("alles loaded");
    setTimeout (buildList, 3000);

    function buildList(){
        pokemons.forEach(data => {
        const pokeContainer = document.getElementById("pokecard");
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');
    const pokeInnerHtml = `
  <div class="img-container">
  <img src="${data.sprites.front_default}">
  </div>
  <div class="pokelist">
  <h1 class="id">${data.id}</h1>
  <h3 class="name">${data.name}</h3>
  <h4 class="type">${data.types.map(type => type.type.name).join(", ")}</h4>
  </div>
  `;
    pokeContainer.innerHTML = pokeInnerHtml;  
        });
    }   
}