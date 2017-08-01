import React from 'react';
import PropTypes from 'prop-types';
import { Header } from './components/index';
import { DevTools } from './utils/index';

export default class App extends React.Component {
    static path = '/';

    static propTypes = {
        children: PropTypes.any.isRequired
    };

    render() {
        return(
            <div>
                <Header />
                { this.props.children }
                { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
            </div>
        );
    }
}
