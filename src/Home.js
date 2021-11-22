import React from 'react';
import "./Home.css";
import Product from './Product';

export default function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://m.media-amazon.com/images/G/01/digital/video/sonata/US_SVOD_NonPrime_Banner/f69c4124-8751-4646-b8de-14e68f14ff8e._UR3000,600_SX1500_FMwebp_.jpg" alt="banner" />
                <div className="home_row">
                    <Product id="121312" title="the lean Startup" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={5} />
                    <Product id="2525255" title="the Best seller Shoes" price={89.99} image="https://img.letgo.com/images/f0/7a/02/01/f07a02015739b602cb1da9ef63836f63.jpeg?impolicy=img_256" rating={3} />







                </div>
                <div className="home_row">
                    <Product id="121312ss" title="the super Gigbag" price={129.99} image="https://zebramo-production.eu-central-1.linodeobjects.com/product_images/2021-22/01F7F050KCSS780B6F14CWVE2M_256x256.jpg" rating={1} />
                    <Product id="25254555" title="the toys for the kids" price={59.99} image="https://zebramo-production.eu-central-1.linodeobjects.com/product_images/2020-40/01EM8YNJFAMPBAWYKBVZNGETQF_256x256.jpeg" rating={4} />

                    <Product id="112185221" title="the nightWish suitcase" price={9.99} image="https://zebramo-production.eu-central-1.linodeobjects.com/product_images/2021-12/01F1X58GFAR7GE3RHS959BPYC5_256x256.jpg" rating={2} />


                </div>


            </div>
        </div>
    )
}
