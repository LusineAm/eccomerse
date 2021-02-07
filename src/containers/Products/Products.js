import React from 'react';

import { productsData } from '../../data-mockup/products-mockup';
import Product from '../../components/Product/Product';

import './Products.scss';

const Products = () => {
    return (
        <div className="app-product">
            {productsData.map(el => {
                return <Product
                    className="app-product" 
                    key={el.id}
                    title={el.title}
                    description={el.description}
                    price={el.price}
                />
            })}
        </div>
    )
}

export default Products;