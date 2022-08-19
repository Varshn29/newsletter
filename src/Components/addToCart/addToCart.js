import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { productAddedSuccess, productToBeAdded } from '../../Redux/Action/addToCartAction';


const AddToCart = () => {

    const addedToCart = useSelector(state => state.productAdded);

    const dispatch = useDispatch();

    console.log(addedToCart);

    useEffect(() => {
            dispatch(productToBeAdded());
    }, [])

    return (
        <div>
            {addedToCart?.map((item, i) => {
                return productAddedSuccess({...item})
            } )}
            <img src={addedToCart.image} width='200' height='250' />
        </div>
    )
}

export default AddToCart;