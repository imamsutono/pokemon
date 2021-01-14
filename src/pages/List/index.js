import React from 'react';
import Header from '../../components/Header';

const List = () => (
  <div className="has-background-light">
    <Header />

    <div className="container mt-6">
      <div className="columns">
        <div className="column is-6">
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
        </div>
        <div className="column is-6 has-text-right">
          Menampilkan
          <strong> {`1-20`} </strong>
          dari
          <strong> 1118</strong>
        </div>
      </div>

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

      <nav className="pagination mt-6 pb-6" role="navigation" aria-label="pagination">
        <a className="pagination-previous">Previous</a>
        <a className="pagination-next">Next page</a>

        <ul className="pagination-list">
          <li>
            <a className="pagination-link" aria-label="Goto page 1">1</a>
          </li>
          <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <a className="pagination-link" aria-label="Goto page 45">45</a>
          </li>
          <li>
            <a className="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a>
          </li>
          <li>
            <a className="pagination-link" aria-label="Goto page 47">47</a>
          </li>
          <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <a className="pagination-link" aria-label="Goto page 86">86</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default List;
