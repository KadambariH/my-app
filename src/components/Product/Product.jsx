import React from 'react';
import './Product.css';

const Product = ({ imgSrc, productTitle, productDescription, productPrice }) => {
    return (
        <div className='ProductContainer'>
            <img src={imgSrc} height='320' weight='320' />
            <div>
                <p className='productName' title={productTitle}>{productTitle}</p>
                <p>{productDescription}</p>
            </div>
            <div className='likes'>
                <p className='productPrice'>Rs: {productPrice}</p>
                <i class="fa-solid fa-thumbs-up"></i>
            </div>
        </div>
    )
}

export default Product;