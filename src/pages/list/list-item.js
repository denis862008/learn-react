import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { openModal } from '../../components/modal/index';
import EditModal from './modals/edit-modal';
import DeleteModal from './modals/delete-modal';
import { editItem, deleteItem } from './actions';

class ListItem extends React.Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        youtube: PropTypes.string.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    edit() {
        const {id, name, youtube} = this.props;

        this.props.dispatch(openModal({
            title: 'Редактирование карточки',
            content: <EditModal id={ id } name={ name } youtube={ youtube } onSave={ editItem } />
        }));
    }

    remove() {
        const {id, name} = this.props;

        this.props.dispatch(openModal({
            title: 'Удаление карточки',
            content: <DeleteModal id={ id } name={ name } onRemove={ deleteItem } />
        }));
    }

    render() {
        return(
            <tr>
                <td>{ this.props.id }</td>
                <td><Link to={`/list/${ this.props.id }`}> { this.props.name } </Link></td>
                <td>
                    <button className="btn btn-success" onClick={ this.edit.bind(this) }>
                        <i className="glyphicon glyphicon-pencil" />
                    </button>
                    <button className="btn btn-danger" onClick={ this.remove.bind(this) }>
                        <i className="glyphicon glyphicon-remove" />
                    </button>
                </td>
            </tr>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(ListItem);
