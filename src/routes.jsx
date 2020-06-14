import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './Pages/Main/index';
import Query from './Pages/Query';
import Registrer from './Pages/Registrer';
import Users from './Pages/Users'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/query" component={Query} />
        <Route path="/registrer" component={Registrer} />
        <Route path="/users" component={Users} />
      </Switch>
    </BrowserRouter>
  );
}
