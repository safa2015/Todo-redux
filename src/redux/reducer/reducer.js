import { ADD_TASK, DELETE_TASK, EDIT_TASK, FILTER_TASK } from "../types";

const initialState = {
    tasks: [
        {
            id: Math.random(),
            task: "Learnig mongoDB",
            check: true,
        },
        {
            id: Math.random(),
            task: "Learnig RESET API ",
            check: false,
        },

        {
            id: Math.random(),
            task: "Learnig JS",
            check: true,
        },
        {
            id: Math.random(),
            task: "Learnig FrontEnd",
            check: true,
        },
        {
            id: Math.random(),
            task: "Learnig React",
            check: true,
        },
        {
            id: Math.random(),
            task: "Learnig ES6",
            check: false,
        },

    ],
};
const taskReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TASK:
            return { ...state, tasks: [...state.tasks, payload] };
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((el) => el.id !== payload),
            };
        case EDIT_TASK:
            return {
                ...state,
                tasks: state.tasks.map((el) =>
                    el.id === payload.id ? { ...el, ...payload } : el
                ),
            };
        case FILTER_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((el) => (el.check === payload || payload === "")),
            };
        default:
            return state;
    }
};
export default taskReducer;
