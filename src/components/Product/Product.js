import React from 'react';

import "./Product.scss";

const Product = ({title, description, price}) => {
    return(
        <div className="product">
            <h1>{title}</h1>
            <h2>{description}</h2>
            <span>{price}</span>
        </div>
    )
}

export default Product;