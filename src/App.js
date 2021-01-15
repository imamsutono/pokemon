import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'bulma';
import './styles/main.css';
import List from './pages/List';
import Detail from './pages/Detail';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={List} />
      <Route path="/detail/:name" component={Detail} />
    </Switch>
  </BrowserRouter>
);

export default App;
