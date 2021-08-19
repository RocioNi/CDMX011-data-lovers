
import {info, speciesFilter, genderFilter, episodesFilter, sortFilter } from './data.js';



//Para mostrar la imagen y nombre de los personajes

function allCharacters(data) { //declaramos funcion
  let all = ''
  data.forEach((objeto) => { // creando nvo array a info con foreach
          
          //concatenamos all con el template para mostrar el nombre del personaje y la imagen
  all += `<div class="tarjetas"><div class="front-card"><img src = ${objeto.image} class="image"> </img><h1 class='name'> ${objeto.name}</h1></div>
          <div class="back-card"><h2 class="id">Id: ${objeto.id}</h2> <h2 class="status">Status: ${objeto.status}</h2><h2 class="gender">Gender: ${objeto.gender}</h2><h3 class="species"> Specie: ${objeto.species}</h3><h4 class='origin'> Origin: ${objeto.origin.name}</h4></div></div>`
  });   //

  document.getElementById('articles').innerHTML = all; //devuelve elemento content y agrego all a content. Nodo all se adjunta a nodo padre content
}

allCharacters(info);

// funcion change en select species
      
document.getElementById("species").addEventListener("change", function(e) {
    let filteredData= speciesFilter(info,e.target.value);
    console.log(filteredData)
    allCharacters(filteredData)
})

// funcion change en select gender
document.getElementById("gender").addEventListener("change", function(e) {
 let filteredData= genderFilter(info,e.target.value);
console.log(filteredData)
allCharacters(filteredData)
})

// funcion change en select episodes
document.getElementById("episodes").addEventListener("change", function(e) {
    let filteredData= episodesFilter(info,e.target.value);
    console.log(filteredData)
    allCharacters(filteredData)
})

