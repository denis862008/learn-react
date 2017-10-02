import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindAll } from 'lodash';
import { closeModal } from '../../../components/modal/index';
import Input from '../../../components/ui/input/index';

class EditModal extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        youtube: PropTypes.string.isRequired,
        onSave: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            name: this.props.name,
            youtube: this.props.youtube,
            errors: {
                name: '',
                youtube: ''
            }
        };

        bindAll(this, ['close', 'changeName', 'changeLink', 'save']);
    }

    close() {
        this.props.dispatch(closeModal());
    }

    changeName(name) {
        this.setState({ name });
    }

    changeLink(youtube) {
        this.setState({ youtube });
    }

    save() {
        const { id, name, youtube } = this.state;
        const errorTitle = 'Поле не должно быть пустым';
        const errors = {
            name: '',
            youtube: ''
        };

        if(name === '') {
            errors.name = errorTitle;
        }

        if(youtube === '') {
            errors.youtube = errorTitle;
        }

        this.setState({ errors });

        if(errors.name || errors.youtube) return;

        this.props.dispatch(this.props.onSave({ id, name, youtube }));
        this.close();
    }

    render() {
        return(
            <div>
                <div className='modal-body'>
                    <p><strong>ID: </strong> { this.state.id }</p>
                    <Input value={ this.state.name } onChange={ this.changeName } error={ this.state.errors.name } />
                    <Input value={ this.state.youtube } onChange={ this.changeLink } error={ this.state.errors.youtube } />
                </div>
                <div className='modal-footer'>
                    <button type='button' className='btn btn-primary' onClick={ this.close }>Закрыть</button>
                    <button type='button' className='btn btn-success' onClick={ this.save }>Сохранить</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(EditModal)
