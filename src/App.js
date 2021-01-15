import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'bulma';
import './styles/main.css';
import List from './pages/List';
import Detail from './pages/Detail';
import Compare from './pages/Compare';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={List} />
      <Route path="/detail/:name" component={Detail} />
      <Route exact path="/compare" component={Compare} />
    </Switch>
  </BrowserRouter>
);

export default App;
