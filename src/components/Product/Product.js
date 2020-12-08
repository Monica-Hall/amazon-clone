import React from 'react';
import "./Product.css"; 
import { useStateValue } from '../../ducks/reducer/StateProvider';

function Product({id, title, image, price, rating}) {

    const [{basket}, dispatch] = useStateValue(); 

    console.log("this is the basket", basket)

    const addToBasket = () => {
        dispatch({
            type: "ADD", 
            item: {
                id: id, 
                title: title, 
                image: image, 
                price: price, 
                rating: rating
            }
        })
    }

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
                <p>{"⭐".repeat(rating)}</p>

                {/* this code does the same thing as above */}
                {/* {Array(rating).fill().map((_, i) => (
                <p>⭐</p>
                ))} */}
                
                </div>

            </div>

            {/* IMAGE OF PRODUCT  */}
            <img src={image} alt="" />

            {/* ADD TO CART BUTTON  */}
            <button className="product_button" onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product
