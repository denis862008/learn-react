import React from 'react';
import { Route } from 'react-router';
import ContactsPage from './contacts'

// import { Route } from 'react-router-dom';

export default (
    <Route>
        <Route path={ ContactsPage.path } component={ ContactsPage } />
    </Route>
);
