import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { productAddedSuccess } from "../../Redux/Action/addToCartAction";
import { getSingleItem } from "../../Redux/Action/ItemAction";
import './productDetails.css';

const SingleItem = () => {

    const singleProduct = useSelector(state => state.product);

    const dispatch = useDispatch();

    const { isLoading } = singleProduct;

    const { productId } = useParams();

    useEffect(() => {
        dispatch(getSingleItem(productId));
    }, [productId])

    return (
        <div>
            {isLoading ? <h2>Loading.......</h2> :
                <div className='details-container'>
                    <img src={singleProduct.image} width='300' height='350' />
                    <div className='content'>
                        <h1>{singleProduct.title}</h1>
                        <h3 className='category'>{singleProduct.category}</h3>
                        <p className='description'>Description: {singleProduct.description}</p>
                        {/* <span>Rating: {singleProduct?.rating.rate}</span> */}
                        {/* <span className='likes'>Likes: {singleProduct?.rating.count}</span> */}
                        <h3>$ {singleProduct.price}</h3>
                        <Link to={'/products/cart'} onclick={() => dispatch(getSingleItem.push(productId))}><button className='button'>ADD TO CART</button></Link>
                    </div>
                </div>
            }
        </div>
    )
}

export default SingleItem;


