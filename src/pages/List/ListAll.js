import React from 'react';
import ListItem from './ListItem';

const ListAll = ({data}) => (
  data.map(({name}) => (
    <div className="column is-3" key={name}>
      <div className="card">
        <div className="card-content has-text-centered">
          <ListItem name={name} />
        </div>
      </div>
    </div>
  ))
);

export default ListAll;
