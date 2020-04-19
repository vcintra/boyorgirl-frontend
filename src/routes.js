import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Question from './pages/Question';
import Who from './pages/Who';
import End from './pages/End';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Who}/>
        <Route path="/quiz"  component={Question}/>
        <Route path="/end"  component={End}/>
      </Switch>
    </BrowserRouter>
  )
}