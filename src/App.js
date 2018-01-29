import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;
