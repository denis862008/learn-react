import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import './styles.less';

class TopAlert extends React.Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
    };

    render() {
        const { name, email } = this.props.user;

        if(!name || !email) {
            document.getElementById('app').classList.remove('m-t-50');
            return null;
        }

        document.getElementById('app').classList.add('m-t-50');

        return(
            <div className='alert alert-success b-alert'>
                <span className='name'>Имя: <strong>{ name }</strong></span>
                <span className='email'>адрес: { email }</span>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(TopAlert);
