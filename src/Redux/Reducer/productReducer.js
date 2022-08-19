import { GET_PRODUCT, GET_PRODUCT_FAILURE, GET_PRODUCT_SUCCESS } from "../Action/Constants"

const initialstate = {
    isLoading: false,
    productDetails: [],
    error: null,
}

export const ProductReducer = (state = initialstate, action) => {
    switch (action.type) {
        case GET_PRODUCT: {
            return { ...state, isLoading: true }
        }
        case GET_PRODUCT_SUCCESS: {
            return { ...state, productDetails: action.payload, isLoading: false }
        }
        case GET_PRODUCT_FAILURE: {
            return { ...state, error: action.payload, isLoading: false }
        }
        default: return state;
    }
}