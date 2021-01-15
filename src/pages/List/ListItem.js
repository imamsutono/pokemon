import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
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
        const {front_default} = data.sprites;

        if (front_default) {
          setPhoto(front_default);
        }

        setTypes(data.types);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(getDetail, [name]);

  return (
    <Link to={`/detail/${name}`}>
      <img src={photo} className="center" width="50%" alt="Pokemon" />
      <p className="title mb-1 mt-2">{name}</p>
      <span className="has-text-grey">{getTypes()}</span>
    </Link>
  );
};

export default Item;
