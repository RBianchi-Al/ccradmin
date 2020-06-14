import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './Pages/Main/index';
import Query from './Pages/Query';
import Registrer from './Pages/Registrer';
import Users from './Pages/Users'
import Loginn from './Components/EmailPosto'
import Registrar from './Components/CadastrarAdmin'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/query" component={Query} />
        <Route path="/registrer" component={Registrer} />
        <Route path="/users" component={Users} />
        <Route path="/login" component={Loginn} />
        <Route path="/registraradmin" component={Registrar} />
        
      </Switch>
    </BrowserRouter>
  );
}
