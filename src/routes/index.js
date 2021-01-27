import React from 'react';
import { Route, Switch,  BrowserRouter } from 'react-router-dom';

import StonksOfWeek from 'pages/StonksOfWeek/StonksOfWeek';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} exact component={StonksOfWeek} />
      </Switch>
    </BrowserRouter>
  )
}