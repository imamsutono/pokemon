import fetchApi from './apiUtils';

const getPokemonDetail = (name) => {
  return fetchApi(`/pokemon/${name}`);
};

export {getPokemonDetail};
