import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';

// import { Route } from 'react-router-dom';

import { HomePage, HomeRoutes } from './pages/home/index';
import { ContactsRoutes } from './pages/contacts/index';
import ErrorPage from './pages/error/index';

// <ErrorPage />

export default (
    <Route component={ App } path={ App.path }>
        <IndexRoute component={ HomePage } />
        { HomeRoutes }
        { ContactsRoutes }
        <Route path='*' component={ ErrorPage } />
    </Route>
);
