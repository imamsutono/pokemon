import React from 'react';
import Header from '../../components/Header';
import './style.css';

const Detail = () => (
  <>
    <Header />

    <div className="container mt-6">
      <div className="columns">
        <div className="column is-3">
          <img src="img/pikachu.svg" alt="Pikachu" width="100%" />

          <div className="columns mt-1">
            <div className="column is-3 mr-1 thumbnail">
              <img src="img/pikachu.svg" alt="Pikachu" width="100%" />
            </div>
            <div className="column is-3 mr-1 thumbnail">
              <img src="img/pikachu.svg" alt="Pikachu" width="100%" />
            </div>
            <div className="column is-3 mr-1 thumbnail">
              <img src="img/pikachu.svg" alt="Pikachu" width="100%" />
            </div>
            <div className="column is-3 mr-1 thumbnail">
              <img src="img/pikachu.svg" alt="Pikachu" width="100%" />
            </div>
          </div>
        </div>
        <div className="column is-1"></div>
        <div className="column is-8">
          <p className="title is-size-1 mb-5">Pikachu</p>

          <div className="columns">
            <div className="column is-4">
              <strong className="has-text-grey">Types</strong>
              <p className="is-size-5"><strong>Electric</strong></p>
            </div>
            <div className="column is-4">
              <strong className="has-text-grey">Height</strong>
              <p className="is-size-5"><strong>4</strong></p>
            </div>
            <div className="column is-4">
              <strong className="has-text-grey">Weight</strong>
              <p className="is-size-5"><strong>60</strong></p>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <strong className="has-text-grey">Abilities</strong>
              <p className="is-size-5"><strong>Static ∙ Lightning Rod</strong></p>
            </div>
          </div>
          <div className="columns">
            <div className="column is-6">
              <strong className="has-text-grey">Base Stats</strong>
              <div className="mt-4"></div>
              <p>hp (60)</p>
              <progress class="progress is-warning" value="60" max="100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Detail;
