import { INCREMENT, DECREMENT, RESET, NABEATSU, ADD_EVENT, ALLDELETE_EVENT,TEXTDELETE_EVENT,DONE_EVENT } from '../actions/';

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_EVENT:
            const event = { title: action.title, body: action.body, comment: action.comment };
            const id = state.length + 1;
            return [ ...state, { id, ...event } ];

        case ALLDELETE_EVENT: 
            return [];

        case TEXTDELETE_EVENT:
            const result = state.filter(data => data.id !== action.id)
            return [ ...result];
        
        case DONE_EVENT:
            const newTodos = state.map((v) => 
                v.id === action.id ? { ...v, isDone: true } : v
            );
            return newTodos;

        case INCREMENT:
            return { ...state, count: state.count + 1};
        case DECREMENT:
            return { ...state, count: state.count - 1};
        case RESET:
            return { ...state, count: state.count = 0};
        case NABEATSU: 
            if (state.count % 3 === 0 ) {
            }
            return { count: state.count + 10}
        default:
            return state;
    }
};

export default reducer;