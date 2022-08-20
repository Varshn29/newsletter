import { ADD_TODO, COMPLETE, DELETE } from "../Action/Constants"

const initialState = []

let todosId = 0;

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            const { payload } = action;
            return [...state, {task: payload.task , description: payload.description, isComplete:false, id: ++todosId }]
        }
        case COMPLETE: {
            return state.map(todo => (todo.id === action.id) ? {...todo, isComplete: true} : todo)
        }
        case DELETE: {
            return state.filter(todo => (todo.id !== action.id))
        }
        default: return state;
    }
}