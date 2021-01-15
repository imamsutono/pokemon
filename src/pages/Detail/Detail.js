import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Header from '../../components/Header';
import {getPokemonDetail} from '../../api/detailApi';
import {DetailPhoto, DetailDescription} from './index';
import './style.css';

const Detail = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const pokemonName = useParams().name;

  const getData = () => {
    getPokemonDetail(pokemonName)
      .then(({data}) => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      })
  };
  useEffect(getData, [pokemonName]);

  const renderDetail = () => (
    <div className="container mt-6">
      <div className="columns">
        <DetailPhoto data={data} />
        <div className="column is-1"></div>
        <DetailDescription data={data} />        
      </div>
    </div>
  );

  return (
    <>
      <Header />
      {loading ? <p className="title has-text-centered">Loading...</p> : renderDetail()}
    </>
  );
};

export default Detail;
