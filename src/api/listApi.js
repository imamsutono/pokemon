import fetchApi from './apiUtils';

const getAllPokemon = (offset = 0, limit = 20) => {
  return fetchApi.get(`/pokemon?offset=${offset}&limit=${limit}`);
};

const getPokemonDetail = (name) => {
  return fetchApi.get(`/pokemon/${name}`);
};

const getPokemonByType = (type) => {
  return fetchApi.get(`/type/${type}`);
};

export {getAllPokemon, getPokemonDetail, getPokemonByType};
