import fetchApi from './apiUtils';

const getAllPokemon = () => {
  return fetchApi.get('/pokemon');
};

const getPokemonDetail = async (name) => {
  return fetchApi.get(`/pokemon/${name}`);
};

export {getAllPokemon, getPokemonDetail};
