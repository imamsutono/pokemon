import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import {getAllPokemon} from '../../api/listApi';
import ListAll from './ListAll';
import ListAppear from './ListAppear';
import ListFilter from './ListFilter';

const List = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [next, setNext] = useState('');
  const [loading, setLoading] = useState(true);

  const getData = () => {
    getAllPokemon()
      .then(({data}) => {
        const {count, next, results} = data;

        setData(results);
        setCount(count);
        setNext(next);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      });
  };
  useEffect(getData, []);

  return (
    <div className="has-background-light">
      <Header />

      <div className="container mt-6">
        <div className="columns">
          <ListFilter setData={setData} setCount={setCount} setNext={setNext} />
          <ListAppear count={count} next={next} />
        </div>

        {loading ? <p className="title has-text-centered">Loading...</p> : (
          <div className="columns is-multiline mt-4">
            <ListAll data={data} />
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
