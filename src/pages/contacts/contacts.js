import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../components/ui/input/index';
import { bindAll } from 'lodash';
import is from 'is_js';
import { connect } from 'react-redux';
import { submitForm } from './actions';

class ContactsPage extends React.Component {
    static path = '/contacts';

    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            errorName: '',
            errorEmail: ''
        };

        bindAll(this, ['changeName', 'changeEmail', 'submit', '_isFormValid', '_isNameValid', '_isEmailValid']);
    }

    changeName(name) {
        this.setState({ name });
    }

    changeEmail(email) {
        this.setState({ email });
    }

    _isFormValid() {
        return this._isNameValid() && this._isEmailValid();
    }

    _isNameValid() {
        let errorName = '';
        let { name } = this.state;

        if(name === '') {
            errorName = 'Поле не должно быть пустым';
            this.setState({ errorName });
            return false;
        }

        if(name.length < 3) {
            errorName = 'Поле должно иметь больше 3 символов';
            this.setState({ errorName });
            return false;
        }

        this.setState({ errorName });
        return true;
    }

    _isEmailValid() {
        let errorEmail = '';
        let { email } = this.state;

        if(email === '') {
            errorEmail = 'Поле не должно быть пустым';
            this.setState({ errorEmail });
            return false;
        }

        if(!is.email(email)) {
            errorEmail = 'Поле должно быть введено в формате e-mail';
            this.setState({ errorEmail });
            return false;
        }

        this.setState({ errorEmail });
        return true;
    }

    submit(event) {
        event.preventDefault();

        if(!this._isFormValid()) return;

        this.props.dispatch(submitForm(this.state.name, this.state.email));
        this.setState({
            name: '',
            email: ''
        });
    }

    render() {
        return(
            <div className='row'>
                <div className='col-xs-6'>
                    <form className='b-contacts'>
                        <label>Введите имя</label>
                        <Input value={ this.state.name } onChange={ this.changeName } error={ this.state.errorName } />
                        <label>Введите E-mail</label>
                        <Input value={ this.state.email } onChange={ this.changeEmail } error={ this.state.errorEmail } />
                        <button className="btn btn-primary" onClick={ this.submit }>Сохранить</button>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(ContactsPage);
