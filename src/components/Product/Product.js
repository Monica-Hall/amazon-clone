import React from 'react';
import "./Product.css"; 

function Product({title, image, price, rating}) {
    return (
        <div className="product">

            {/* INFO  */}
            <div className="product_info">

                {/* DETAILS */}
                <p>{title}</p>

                {/* PRICE  */}
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                {/* RATING */}
                <div className="product_rating">
                <p> {"⭐".repeat(rating)}</p>

                {/* this code does the same thing as above */}
                {/* {Array(rating).fill().map((_, i) => (
                <p>⭐</p>
                ))} */}
                
                </div>

            </div>

            {/* IMAGE OF PRODUCT  */}
            <img src={image} alt="" />

            {/* ADD TO CART BUTTON  */}
            <button className="product_button">Add to Cart</button>
        </div>
    )
}

export default Product
