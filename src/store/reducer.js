import {
    GET_TASKS,
    ADD_TASK,
    MARK_TASK_DONE,
} from './action';

const Reducer = (state, action) => {
    switch (action.type) {
        case GET_TASKS:
            return {
                ...state,
                tasks: action.payload
            };
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        case MARK_TASK_DONE:
            return {
                ...state,
                tasks: [...state.tasks, action.payload.task]
            };
        default:
            return state;
    }
};

export default Reducer;
