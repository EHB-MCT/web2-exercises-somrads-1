import Team from './Teams';

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
    setTimeout (buildList, 3000);

    function buildList(){
      const pokeList = document.getElementById("pokelist");
        console.log(pokemons);
        const pokemonEl = document.createElement('div');
        pokemonEl.classList.add('pokemon');

        pokemons.forEach(element => {
          
        });
        let htmlString = `

        `
    }   
}