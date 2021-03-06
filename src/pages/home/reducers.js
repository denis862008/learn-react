import { ADD_TODO, LIKE_TODO, DELETE_TODO, GET_TODOS } from './actions';
import { isObject, isEmpty } from 'lodash'

const initialState = {
    todos: [],
    isLoading: true,
    error: ''
};

function homeReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            if(!action.error) {
                if(isEmpty(state.todos) && isObject(state.todos)) state.todos = [];
                state.todos.push({ id: action.id, name: action.name, liked: false });
            }

            return Object.assign({}, state, {
                error: action.error,
                todos: state.todos
            });
        break;
        case LIKE_TODO:
            const idx = state.todos.findIndex(todo => todo.id === action.todo.id);
            state.todos[idx].liked = action.liked;
            return Object.assign({}, state, { todos: state.todos });
        break;
        case DELETE_TODO:
            const filteredTodos = state.todos.filter(todo => todo.id !== action.todo.id);
            return Object.assign({}, state, { todos: filteredTodos });
        break;
        case GET_TODOS:
            return Object.assign({}, state, {
                todos: action.todos,
                isLoading: false
            });
        break;
        default:
            return state;
    }
}

const HomeReducer = {
    home: homeReducer
};

export default HomeReducer;


