import React, { FunctionComponent } from 'react';
import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { RouteConfig } from '../../config/RouteConfig';
import { NavigationBar } from '../common/navigation-bar/NavigationBar';
import { AuthorsRoutes } from './authors/AuthorsRoutes';
import { BooksRoutes } from './books/BooksRoutes';

export const MainPage: FunctionComponent = () => (
  <main>
    <NavigationBar />
    <Switch>
      <Redirect
        from={RouteConfig.root}
        exact={true}
        to={RouteConfig.books}
      />
      <Route
        path={RouteConfig.books}
        component={BooksRoutes}
      />
      <Route
        path={RouteConfig.authors}
        component={AuthorsRoutes}
      />
    </Switch>
  </main>
);
