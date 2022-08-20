import { CUSTOM_ADD, DECREMENT, INCREMENT, RESET } from "./constants"


export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}

export const customAdd = (value) => {
    return {
        type: CUSTOM_ADD,
        payload: value
    }
}