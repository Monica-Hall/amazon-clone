import React from 'react'; 
import "./Subtotal.css"; 
import CurrencyFormat from "react-currency-format"; 

function Subtotal() {
    return (
        <div className="subtotal">
            {/* <CurrencyFormat 
            renderText={(value) => (
                <>
                    <p>
                        Subtotal({basket.length} itmes):
                        <strong>{`${value}`}</strong>
                    </p>

                    <small className="subtotal_gift">
                        <input type="checkout" />
                        This order contains a gift
                    </small>
                </>
            )}

            decimalScale={2}
            value={getBasketTotal(basket)}
            diplayType={"text"}
            thousandSeprator={true}
            prefix={"$"}
            /> */}
            <h1>Subtotal (0 items): $0.00</h1>

            <button><strong>Proceed to checkout</strong></button>
        </div>
    )
}

export default Subtotal
