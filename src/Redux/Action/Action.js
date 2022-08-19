import { GET_PRODUCT, GET_PRODUCT_FAILURE, GET_PRODUCT_SUCCESS } from './Constants';
import axios from 'axios';

export const getProduct = () => {
    return {
        type: GET_PRODUCT
    }
}

export const getProductSuccess = (data) => {
    return {
        type: GET_PRODUCT_SUCCESS,
        payload: data
    }
}

export const getProductFailure = (error) => {
    return {
        type: GET_PRODUCT_FAILURE,
        payload: error
    }
}

export const getAllProducts = () => {
    return (dispatch) => {
        dispatch(getProduct())

        axios.get('https://fakestoreapi.com/products')
            .then(res => dispatch(getProductSuccess(res.data)))
            .catch(error => dispatch(getProductFailure(error)))

    }
}

