import React from 'react';
import Header from '../../components/Header';

const List = () => (
	<div className="has-background-light">
    <Header />

    <div className="container mt-6">
      Filter by type:
      <br />
      <div className="select">
        <select>
          <option>Select dropdown</option>
          <option>With options</option>
        </select>
      </div>
      &emsp;
      <button className="button is-warning">Reset Filter</button>

      <div className="columns mt-4">
        <div className="column is-3">
          <div className="card">
            <div className="card-content has-text-centered">
              <img src="img/pikachu.svg" className="center" width="50%" alt="Pikachu" />
              <p className="title mb-1 mt-2">Pikachu</p>
              <span className="has-text-grey">Electric ∙ Grass ∙ Fire</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default List;
