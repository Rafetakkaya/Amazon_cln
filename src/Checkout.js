import React from 'react';
import "./Checkout.css";
import Checkoutprodct from './CheckoutProdct';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import FlipMove from 'react-flip-move';

const Checkout = () => {
    const [{ basket, user }, dispatch] = useStateValue();


    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="resim" />
                <div>
                    <h3>Hello,{user?.email}</h3>
                    <h2 className="checkout_title">
                        Your shoppping basket
                    </h2>

                    <FlipMove enterAnimation="accordionHorizontal" leaveAnimation="accordionHorizontal" >
                        {basket.map(item => (
                            <Checkoutprodct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />

                        ))}</FlipMove>


                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
                <h2>The subtotal Will go here</h2>
            </div>
        </div >
    );
}

export default Checkout;
