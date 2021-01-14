import React, {useEffect, useState} from 'react';
import {getPokemonDetail} from '../../api/listApi';

const Item = ({name}) => {
  const [photo, setPhoto] = useState('img/placeholder.svg');
  const [types, setTypes] = useState([]);

  const getTypes = () => {
    let result = '';

    types.map(({type}) => result += `${type.name} ∙ `);

    return result.slice(0, -3);
  };

  const getDetail = () => {
    getPokemonDetail(name)
      .then(({data}) => {
        setTypes(data.types);
        setPhoto(data?.sprites?.front_default);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(getDetail, [name]);

  return (
    <div>
      <img src={photo} className="center" width="50%" alt="Pokemon" />
      <p className="title mb-1 mt-2">{name}</p>
      <span className="has-text-grey">{getTypes()}</span>
    </div>
  );
};

export default Item;
