import React from 'react'
import "./Checkout.css"; 
import Subtotal from "../Subtotal/Subtotal"; 

export default function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left">

                <img className="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/HF/minions/Web-banner1.gif" alt="" />

                <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/YACC-desktop-nonprime-banner2.jpg" alt="" />

                <div>
                    <h2 className="checkout_title">Shopping Cart</h2>
                </div> 

            </div>

            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}
