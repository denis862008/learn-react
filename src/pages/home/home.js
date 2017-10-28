import React from 'react';
import PropTypes from 'prop-types';
import './styles.less';
import Input from '../../components/ui/input/index';
import Loader from '../../components/ui/loader/index';
import { connect } from 'react-redux';
import { addTodo, likeTodo, deleteTodo, getTodos } from './actions';
import classnames from 'classnames';
import { bindAll } from 'lodash';
import { LS } from '../../utils/index';

class HomePage extends React.Component {
    static path = '/';
    static propTypes = {
        home: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            todoName: ''
        };

        bindAll(this, ['inputOnChange', 'addTodo', 'renderTodos']);

        this.props.dispatch(getTodos());
    }

    componentWillUnmount() {
        this.props.home.isLoading = true;
    }

    inputOnChange(value) {
        this.setState({ todoName: value });
    }

    addTodo() {
        this.props.dispatch( addTodo(this.props.home.todos, this.state.todoName));
        this.setState({ todoName: '' });
    }

    deleteTodo(todo) {
        this.props.dispatch(deleteTodo(todo));
    }

    likeTodo(todo) {
        this.props.dispatch(likeTodo(todo));
    }

    renderTodos(item, idx) {
        const todoClasses = classnames('b-home-todo', {
            'is-liked': item.liked
        });

        const btnClasses = classnames('btn', {
            'active': item.liked
        });

        return(
            <li key={ idx }>
                <span className={ todoClasses }>{ item.name }</span>
                <button className='btn' onClick={ this.deleteTodo.bind(this, item) }><i className='glyphicon glyphicon-remove' /></button>
                <button className={ btnClasses } onClick={ this.likeTodo.bind(this, item) }><i className='glyphicon glyphicon-heart' /></button>
            </li>
        );
    }

    render() {
        const { todoName } = this.state;
        const { todos, error, isLoading } = this.props.home;

        LS.set('todos', todos);

        return(
            <div className='row-fluid b-home'>
                <div className='col-xs-12'>
                    <ul>
                        {
                            isLoading ? <Loader />
                            : todos.length !== 0 ? todos.map(this.renderTodos)
                            : <span>Todos is empty</span>
                        }
                    </ul>

                    <div className='col-xs-4'>
                        <Input onChange={ this.inputOnChange} value={ todoName } error={ error } />
                        <button className='btn btn-primary b-home-submit' onClick={ this.addTodo }>Add Todo</button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        home: state.home
    };
}

export default connect(mapStateToProps)(HomePage);
