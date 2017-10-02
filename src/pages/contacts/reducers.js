import { SUBMIT_FORM } from './actions';

const initialState = {
    name: '',
    email: ''
};

function contactsReducer(state = initialState, action) {
    switch (action.type) {
        case SUBMIT_FORM:
            return Object.assign({}, state, {
                name: action.name,
                email: action.email
            });
        break;
        default:
            return state;
    }
}

const ContactsReducer = {
    user: contactsReducer
};

export default ContactsReducer;
