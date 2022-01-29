import { INCREMENT, DECREMENT, RESET, ADD_EVENT, ALLDELETE_EVENT } from '../actions/';

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_EVENT:
            const event = { title: action.title, body: action.body };
            const id = state.length + 1;
            return [ ...state, { id, ...event } ];

        case ALLDELETE_EVENT:
            var noevent = { title: action.title, body: action.body };
            var idNo = state.length = 0;
            return [ ...state, { idNo, ...noevent } ];

        case INCREMENT:
            return { ...state, count: state.count + 1};
        case DECREMENT:
            return { ...state, count: state.count - 1};
        case RESET:
            return { ...state, count: state.count = 0 };
        default:
            return state;
    }
};

export default reducer;