import { ADD_TO_CART, ADD_TO_CART_FAILURE, ADD_TO_CART_SUCCESS } from "../Action/Constants";

const initialState = {
    isLoading: false,
    productsCart: {},
    error: null
}

export const addToCartReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_TO_CART: {
            return { ...state, isLoading: true }
        }
        case ADD_TO_CART_SUCCESS: {
            return { ...state, ...payload, isLoading: false }
        }
        case ADD_TO_CART_FAILURE: {
            return { ...state, error: 'error', isLoading: false }
        }
        default: return state;
    }
}