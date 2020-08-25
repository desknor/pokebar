import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LocationChoice from './LocationChoice';
import App from '../App';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LocationChoice} />
      <Route path="/location/:locationId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;