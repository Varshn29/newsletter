import { GET_SINGLE_PRODUCT, GET_SINGLE_PRODUCT_FAILURE, GET_SINGLE_PRODUCT_SUCCESS, REMOVE_PRODUCT } from "../Action/Constants";

const initialState = {
    isLoading: false,
    singleProduct: {},
    error: null,
}


export const ItemReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_SINGLE_PRODUCT: {
            return { ...state, isLoading: true }
        }
        case GET_SINGLE_PRODUCT_SUCCESS: {
            return { ...state, ...payload, isLoading: false }
        }
        case GET_SINGLE_PRODUCT_FAILURE: {
            return { ...state, error: 'error', isLoading: false }
        }
        default: return state;
    }
}