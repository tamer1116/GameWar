import React from "react";
import { AiFillStar } from "react-icons/ai";


function DealDay() {
    return (
        <div className="ourcontainer">
            <div>
                <h1>Deal Of The Day</h1>
            </div>
            <div className="top">
                <div className="product">
                    <img
                        src="https://gamewar-codezeel.myshopify.com/cdn/shop/products/9_95b6483b-4197-499d-9fb1-cd607353bebc_1000x.jpg?v=1671087825"
                        alt=""
                    />
                    <h2>Martin Goes on the Attack</h2>
                    <p> <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <span><AiFillStar />
                            <AiFillStar /></span>
                    </p>
                    <h3>$240.00</h3>
                </div>
                <div className="product">
                    <img
                        src="https://gamewar-codezeel.myshopify.com/cdn/shop/products/12_dc57ffaa-3b81-4023-9cb9-c7b48a097369_1000x.jpg?v=1671088147"
                        alt=""
                    />
                    <h2>Reginald’s Death Arena</h2>
                    <p> <AiFillStar />
                        <span> <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar /></span>
                    </p>
                    <h3>$17.00 <del>$19.00</del></h3>
                    <span className="discount">-10%</span>
                </div>
                <div className="product">
                    <img
                        src="https://gamewar-codezeel.myshopify.com/cdn/shop/products/7_7e28fae7-2461-41fd-8098-1772e43c09e5_1000x.jpg?v=1671087617"
                        alt=""
                    />
                    <h2>Legend Of Musical Light</h2>
                    <p> <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </p>
                    <h3>$100.00 <del>$150.00</del></h3>
                    <span className="discount">-16%</span>
                </div>
                <div className="product">
                    <img
                        src="https://gamewar-codezeel.myshopify.com/cdn/shop/products/14_c9dbc035-b59f-4804-8b49-fd71282b9e50_1000x.jpg?v=1671088499"
                        alt=""
                    />
                    <h2>BeeFense BeeMastered</h2>
                    <p> <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </p>
                    <h3>$250.00</h3>
                </div>
            </div>
        </div>
    );
}

export default DealDay;