import React, { SFC } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import { RouteConfig } from '../../../config/RouteConfig';
import { ListBooksPage } from './list-books/ListBooksPage';

export const BooksRoutes: SFC = () => (
  <Switch>
    <Route
      path={RouteConfig.books}
      component={ListBooksPage}
    />
  </Switch>
);
