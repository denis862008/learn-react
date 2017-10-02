import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindAll } from 'lodash';
import { closeModal } from '../../../components/modal/index';
import Input from '../../../components/ui/input/index';

class DeleteModal extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        onRemove: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        bindAll(this, ['cancel', 'remove']);
    }

    cancel() {
        this.props.dispatch(closeModal());
    }

    remove() {
        this.props.dispatch(this.props.onRemove(this.props.id));
        this.cancel();
    }

    render() {
        return(
            <div>
                <div className='modal-body'>
                    <p><strong>ID: </strong> { this.props.id }  - { this.props.name }</p>
                </div>
                <div className='modal-footer'>
                    <button type='button' className='btn btn-primary' onClick={ this.cancel }>Закрыть</button>
                    <button type='button' className='btn btn-danger' onClick={ this.remove }>Удалить</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(DeleteModal)
