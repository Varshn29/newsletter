import React from "react";
import { Link } from "react-router-dom";

const Product = ({ image, title, category, price, id }) => {

    return (
        <div>
            <Link to={`/products/${id}`}>
                <img src={image} width="200" height="250" alt="Product-image" />
                <p className="product-title">{title}</p>
            </Link>
            <p>{category}</p>
            <p className="product-price">$ {price}</p>
        </div>
    )
}

export default Product;