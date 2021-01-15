import fetchApi from './apiUtils';

const getPokemonType = () => {
  return fetchApi('/type');
};

export {getPokemonType};
