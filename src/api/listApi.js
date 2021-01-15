import fetchApi from './apiUtils';

const getAllPokemon = () => {
  return fetchApi.get('/pokemon');
};

const getPokemonDetail = (name) => {
  return fetchApi.get(`/pokemon/${name}`);
};

const getPokemonByType = (type) => {
  return fetchApi.get(`/type/${type}`);
};

export {getAllPokemon, getPokemonDetail, getPokemonByType};
