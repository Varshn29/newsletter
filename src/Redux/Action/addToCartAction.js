import { ADD_TO_CART, ADD_TO_CART_FAILURE, ADD_TO_CART_SUCCESS } from "./Constants"
import axios from 'axios';
 
export const productAdded = () => {
    return {
        type: ADD_TO_CART
    }
}

export const productAddedSuccess = (data) => {
    return {
        type: ADD_TO_CART_SUCCESS,
        payload: data
    }
}

export const productAddedFailure = (error) => {
    return {
        type: ADD_TO_CART_FAILURE,
        payload: error
    }
}

export const productToBeAdded = () => {
    return (dispatch) => {
        dispatch(productAdded())
        axios.get.get(`https://fakestoreapi.com/products`)
            .then(res => dispatch(productAddedSuccess(res.data)))
            .catch(error => dispatch(productAddedFailure(error)))

    }
}