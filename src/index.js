import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory  } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider }  from 'react-redux';
import configureStore from './store';
import routes from './routes';

// import { BrowserRouter as Router } from 'react-router-dom';
// import createBrowserHistory from 'history/createBrowserHistory';
// const browserHistory = createBrowserHistory();

export const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDom.render((
    <Provider store={ store }>
        <Router history={ history }>
            { routes }
        </Router>
    </Provider>
), document.getElementById('app'));
