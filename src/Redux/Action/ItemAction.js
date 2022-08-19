import axios from 'axios';
import { GET_SINGLE_PRODUCT, GET_SINGLE_PRODUCT_FAILURE, GET_SINGLE_PRODUCT_SUCCESS } from './Constants';

export const getSingleProduct = () => {
    return {
        type: GET_SINGLE_PRODUCT
    }
}

export const getSinleProductSuccess = (data) => {
    return {
        type: GET_SINGLE_PRODUCT_SUCCESS,
        payload: data
    }
}

export const getSingleProductFailure = (error) => {
    return {
        type: GET_SINGLE_PRODUCT_FAILURE,
        payload: error
    }
}


export const getSingleItem = (productId) => {

    return (dispatch) => {
        dispatch(getSingleProduct())

        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(res => dispatch(getSinleProductSuccess(res.data)))
            .catch(error => dispatch(getSingleProductFailure(error)))
    }
}
