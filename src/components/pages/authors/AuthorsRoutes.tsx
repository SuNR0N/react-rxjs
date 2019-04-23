import React, { SFC } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import { RouteConfig } from '../../../config/RouteConfig';
import { ListAuthorsPage } from './list-authors/ListAuthorsPage';

export const AuthorsRoutes: SFC = () => (
  <Switch>
    <Route
      path={RouteConfig.authors}
      component={ListAuthorsPage}
    />
  </Switch>
);
