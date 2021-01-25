import React, {useState, useEffect} from 'react';
import "./Payment.css"; 
import {useStateValue} from "../../ducks/reducer/StateProvider"; 
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct"; 
import {Link, useHistory} from "react-router-dom"; 
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js"; 
import CurrencyFormat from "react-currency-format"; 
import {getBasketTotal} from "../../ducks/reducer/reducer"; 
import axios from "../../axios"; 
import {db} from "../../firebase"; 

function Payment() {

    const [{basket, user}, dispatch] = useStateValue();
    const history = useHistory(); 

    const stripe = useStripe(); 
    const elements = useElements(); 

    const [succeeded, setSucceeded] = useState(false); 
    const [processing, setProcessing] = useState(""); 
    const [error, setError] = useState(null); 
    const [disabled, setDisabled] = useState(true); 
    const [clientSecret, setClientSecret] = useState(); 

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });

            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
        
    }, [basket])

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        setProcessing(true); 

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {

            db
            .collection("users")
            .doc(user?.uid)
            .collection("orders")
            .doc(paymentIntent.id)
            .set({
                basket: basket, 
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

            setSucceeded(true); 
            setError(null); 
            setProcessing(false); 

            dispatch({
                type: "EMPTY"
            })

            history.replace("/orders")
        })

    }; 

    const handleChange = event => {
        setDisabled(event.empty); 
        setError(event.error ? event.error.message : ""); 
    }; 

    return (
        <div className="payment">

            <div className="paymentContainer">
                <h1>
                    Checkout 
                    (
                        <Link to="/checkout">
                            {basket?.length} items
                        </Link>
                    )
                </h1>

                {/* ADDRESS */}
                <div className="paymentSection">
                    <div className="paymentTitle">
                        <h3>Delivery Address</h3>
                    </div>

                    <div className="paymentAddress">
                        <p>{user?.email}</p>
                        <p>123 React Ln.</p>
                        <p>React, JS 876543</p>
                    </div>
                    

                </div>
                {/* REVIEW */}
                <div className="paymentSection">
                    <div className="paymentTitle">
                        <h3>Review items and delivery</h3>
                    </div>

                    <div className="paymentItems">
                        {basket.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>

                </div>
                {/* PAY METHOD */}
                <div className="paymentSection">
                    <div className="paymentTitle">
                        <h3>Payment Method</h3>
                    </div>

                    <div className="paymentDetails">
                        {/* IMPLEMENT STRIPE */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/> 

                            <div className="paymentPriceContainer">
                            <CurrencyFormat
                                renderText={(value) => (
                                    <h3>Subtotal: {value}</h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)} 
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                                />

                                <button disabled={processing || disabled || succeeded}>
                                    <span>
                                        {processing ? 
                                        <p>Processing</p> 
                                        : "Buy Now"}
                                    </span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Payment
