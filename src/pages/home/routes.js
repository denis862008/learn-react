import React from 'react';
import { Route } from 'react-router';
import HomePage from './home'

// import { Route } from 'react-router-dom';

export default (
    <Route>
        <Route path={ HomePage.path } component={ HomePage } />
    </Route>
);
