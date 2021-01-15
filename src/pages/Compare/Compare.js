import React from 'react';
import Header from '../../components/Header';
import {CompareSingle} from './index';

const Compare = () => (
  <>
    <Header />
    <p className="title has-text-centered mb-6">Compare Pokemon</p>

    <div className="container">
      <div className="columns">
        <CompareSingle />
        <CompareSingle />
      </div>
    </div>
  </>
);

export default Compare;
