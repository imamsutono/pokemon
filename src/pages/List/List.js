import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import {getAllPokemon} from '../../api/listApi';
import {ListAll, ListAppear, ListFilter} from './index';

const List = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [next, setNext] = useState('');
  const [loading, setLoading] = useState(true);

  const getData = (offset = 0) => {
    getAllPokemon(offset)
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

  const loadPrev = () => {
    const param = new URLSearchParams(next.split('?')[1]);
    const nextOffset = param.get('offset');
    const limit = param.get('limit');

    if (nextOffset !== '20') {
      getData(Number(nextOffset) - (Number(limit) * 2));
    }
  };

  const loadNext = () => {
    const param = new URLSearchParams(next.split('?')[1]);
    const nextOffset = param.get('offset');

    getData(nextOffset);
  };

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
        {!loading && data.length ? (
          <div className="buttons mt-4 pb-6">
            <button className="button" onClick={loadPrev}>Prev</button>
            <button className="button" onClick={loadNext}>Next</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default List;
