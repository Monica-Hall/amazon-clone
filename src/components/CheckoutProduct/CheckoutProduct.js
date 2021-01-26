import React from 'react'; 
import { useStateValue } from '../../ducks/reducer/StateProvider';
import "./CheckoutProduct.css"; 

function CheckoutProduct({id, image, title, price, rating, hideButton}) {

    const [{basket}, dispatch] = useStateValue(); 

    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">

            {/* PRODUCT IMAGE */}
            <img className="checkoutProduct_image" src={image} alt="" />

            {/* PRODUCT DETAILS */}
            <div className="checkoutProduct_info">

                {/* PRODUCT TITLE  */}
                <p className="checkoutProduct_title">{title}</p>
                {/* PRODUCT PRICE  */}
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                {/* PRODUCT RATING  */}
                <div className="checkoutProduct_rating">
                    <p>{"⭐".repeat(rating)}</p>
                </div>
                {/* DELETE BUTTON  */}
                {!hideButton && (
                    <button onClick={removeFromCart}>Remove from Cart</button>
                )}

            </div>
        </div>
    )
}

export default CheckoutProduct
