import React, {useEffect, useState} from 'react';
import {getPokemonType} from '../../api/typeApi';
import {getAllPokemon, getPokemonByType} from '../../api/listApi';

const ListFilter = ({setData}) => {
  const [types, setTypes] = useState([{name: 'Select type'}]);

  const getType = () => {
    getPokemonType()
      .then(({data}) => {
        setTypes([{name: 'all'}, ...data.results]);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(getType, []);

  const handleChange = ({target}) => {
    if (target.value === 'all') {
      getAllPokemon()
        .then(({data}) => {
          setData(data.results);
        })
        .catch(err => {
          console.log(err);
        });
      return;
    }

    getPokemonByType(target.value)
      .then(({data}) => {
        //   count: data?.pokemon?.length || 0,
        let result = [];

        try {
          result = data.pokemon.map(({pokemon}) => (
            {name: pokemon.name}
          ));
        } catch (error) {
          console.log(error);
        } finally {
          setData(result);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const renderOption = () => (
    types.map(({name}) => (
      <option key={name}>{name}</option>
    ))
  );

  return (
    <div className="column is-6">
      Filter by type:
      <br />
      <div className="select">
        <select onChange={handleChange}>
          {renderOption()}
        </select>
      </div>
    </div>
  );
};

export default ListFilter;
