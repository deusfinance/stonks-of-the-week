import React from 'react';
import { Route, Switch,  BrowserRouter } from 'react-router-dom';
import Navbar from 'deus-navbar';

import StonksOfWeek from 'pages/StonksOfWeek/StonksOfWeek';

export default function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path={'/'} exact component={StonksOfWeek} />
      </Switch>
    </BrowserRouter>
  )
}