import { ADD_TODO, COMPLETE, DELETE } from "./Constants"

export const addTodo = (todoDetails) => {
    return {
        type: ADD_TODO,
        payload: {
            task: todoDetails.task,
            description: todoDetails.description
        }
    }
}

export const completeTodo = (id) => {
    return {
        type: COMPLETE,
        id
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE,
        id
    }
}