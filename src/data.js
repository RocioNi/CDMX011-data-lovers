import data from './data/rickandmorty/rickandmorty.js';


export let info = data.results;
export const example = () => {
  return 'example';
};

// filtrar por especie 
export const speciesFilter = (data, tipo) => {
  let resultSpecies = data.filter(personaje => personaje.species === tipo)
  return resultSpecies;
}
// funcion filtrar por genero
export const genderFilter = (data, genero) => {
  let resultGender = data.filter(personaje => personaje.gender === genero)
  return resultGender;

}
// funcion filtrar por episodio
export const episodesFilter = (data, episodios) => {
	const resultEpisodes = data.filter((personaje)=>personaje.episode.includes(episodios))
	return resultEpisodes;
};

// funcion orden ascendente y descendente 
  export const sortFilter = (data, seleccion) => {

  if (seleccion === "upward") {
    data.sort((a, b) => {
      a = a.name.toLowerCase();
      b = b.name.toLowerCase();

      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;

    });
    return data;
  }
  if (seleccion === "downward") {
    data.sort((a, b) => {
      a = a.name.toLowerCase();
      b = b.name.toLowerCase();

      if (a > b) {
        return -1;
      }
      if (a < b) {
        return 1;
      }
      return 0;
    });
    return data;
  }
}
