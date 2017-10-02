import React from 'react';
import PropTypes from 'prop-types';
import { Header } from './components/index';
import { Modal } from './components/modal/index';
import { TopAlert } from './components/top-alert/index';
import { DevTools } from './utils/index';

export default class App extends React.Component {
    static path = '/';

    static propTypes = {
        children: PropTypes.any.isRequired
    };

    render() {
        return(
            <div className="container-fluid">
                <TopAlert />
                <Modal />
                <Header />
                { this.props.children }
                { NODE_ENV !== 'production' ? <DevTools /> : null }
            </div>
        );
    }
}
