import React, { useEffect, useState } from 'react';
import Checkoutprodct from './CheckoutProdct';
import "./Payment.css"
import { useStateValue } from './StateProvider';
import FlipMove from "react-flip-move"
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './Reducer';
import axios from './Axios';
import db from "./Firebase";


const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);



    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    console.log('THE SECRET IS >>>', clientSecret)
    // console.log('👱', user)s








    const handleSubmit = async (event) => {
        // do all the fancy stripe stuff...
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation


            db.collection("users")
                .doc(user?.uid)
                .collection("orders")
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })
            setSucceeded(true);
            setError(null)
            setProcessing(false);
            dispatch({
                type: "EMPTY_BASKET"
            })


            history.replace('/orders')
        })

    }
    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.messsage : "");


    }
    return (
        <div className="payment">
            <div className="payment_container">
                <h1>
                    Checkout (<Link className="link" to="/checkout">{basket?.length} items</Link>)
                </h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Adress</h3>
                    </div>
                    <div className="payment_adress">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angles, CA</p>

                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Rewiew items and delivery</h3>

                    </div>
                    <div className="payment_items">
                        <FlipMove enterAnimation="accordionHorizontal" leaveAnimation="accordionHorizontal">
                            {basket.map(item => (
                                <Checkoutprodct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </FlipMove>
                    </div>
                </div>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        <form onSubmit={handleSubmit}>
                            <CardElement className="cart_element" onChange={handleChange} />
                            <div className="payment_priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (


                                        <h3> Order Total:{value}</h3>

                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}

                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p> Processing</p> : "Buy Now"}</span>
                                </button>

                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
