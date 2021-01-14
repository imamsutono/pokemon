import fetchApi from './apiUtils';

const getPokemonDetail = (name = 'gloom') => {
  return fetchApi(`/pokemon/${name}`);
};

export {getPokemonDetail};
