import React, {useEffect, useState} from 'react';
import DetailDescription from '../Detail/DetailDescription';
import {getPokemonByType, getPokemonDetail} from '../../api/listApi';
import {getPokemonType} from '../../api/typeApi';

const CompareSingle = () => {
  const defaultPokemonData = [{pokemon: {name: 'Select pokemon'}}];
  const defaultPhoto = 'img/placeholder.svg';
  const [pokemon, setPokemon] = useState(defaultPokemonData);
  const [detail, setDetail] = useState({
    name: '',
    sprites: {
      front_default: defaultPhoto,
    },
    stats: [],
    types: [],
    abilities: [],
  });
  const [type, setType] = useState([{name: 'Select type'}]);

  const getDetail = (pokemonName) => {
    getPokemonDetail(pokemonName)
      .then(({data}) => {
        setDetail(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getPokemon = (pokemonType) => {
    getPokemonByType(pokemonType)
      .then(({data}) => {
        if (data.pokemon.length) {
          setPokemon(data.pokemon);
          getDetail(data.pokemon[0]?.pokemon?.name);
        } else {
          setPokemon(defaultPokemonData);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getType = () => {
    getPokemonType()
      .then(({data}) => {
        setType(data.results);
        getPokemon(data.results[0].name);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(getType, []);

  const handleTypeChange = ({target}) => {
    getPokemon(target.value);
  };

  const handlePokemonChange = ({target}) => {
    getDetail(target.value);
  };

  const renderTypeOption = () => (
    type.map(({name}) => (
      <option key={name}>{name}</option>
    ))
  );

  const renderPokemonOption = () => (
    pokemon.map(({pokemon}) => (
      <option key={pokemon.name}>{pokemon.name}</option>
    ))
  );

  return (
    <div className="column is-6">
      <div className="is-flex is-justify-content-center">
        <div className="mr-4">
          Select type
          <br />
          <div className="select">
            <select onChange={handleTypeChange}>
              {renderTypeOption()}
            </select>
          </div>
        </div>
        <div>
          Select pokemon
          <br />
          <div className="select">
            <select value={detail.name} onChange={handlePokemonChange}>
              {renderPokemonOption()}
            </select>
          </div>
        </div>
      </div>

      <div className="is-flex is-justify-content-center">
        <img src={detail.sprites.front_default || defaultPhoto} alt="Pokemon" width="50%" className="is-horizontal-center" />
      </div>
      <DetailDescription data={detail} />
    </div>
  );
};

export default CompareSingle;
