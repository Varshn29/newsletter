import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../Redux/Action/Action";
import Product from '../Product/Product';
import './ProductList.css';

const ProductList = () => {

    const data = useSelector(state => state.productData);

    const { isLoading, productDetails } = data;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    }, [])

    return (
        <div className='productList-wrapper'>
            {isLoading ? <h2>Loading.......</h2> :
                productDetails?.map((item, index) => {
                    return (
                        <Product {...item} key={index} />)
                })}
        </div>
    )
}

export default ProductList;