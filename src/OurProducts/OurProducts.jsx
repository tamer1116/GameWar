import React from "react";
import "./OurProducts.css";
import { AiFillStar } from "react-icons/ai";


function OurProducts() {
    return (
        <div className="ourcontainer">
            <div>
                <h1>Our Products</h1>
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
                        src="https://gamewar-codezeel.myshopify.com/cdn/shop/products/4_5581b878-9194-4ca0-aae4-b0e99b2d95a8_1000x.jpg?v=1671087262"
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
            <div className="bottom">
                <div className="product">
                    <img
                        src="https://gamewar-codezeel.myshopify.com/cdn/shop/products/6_8b8e3116-2a23-4b30-a837-e03b6367fd48_1000x.jpg?v=1671087410"
                        alt=""
                    />
                    <h2>Martin Goes on the Attack</h2>
                    <p> <AiFillStar />
                        <AiFillStar />
                        <span> <AiFillStar />
                            <AiFillStar />
                            <AiFillStar /></span>
                    </p>
                    <h3>$240.00</h3>
                </div>
                <div className="product">
                    <img
                        src="https://gamewar-codezeel.myshopify.com/cdn/shop/products/13_2b0a81fd-f006-4d7e-9c60-2d75294f2cfc_1000x.jpg?v=1671088416"
                        alt=""
                    />
                    <h2>Reginald’s Death Arena</h2>
                    <p> <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </p>
                    <h3>$235.00</h3>
                </div>
                <div className="product">
                    <img
                        src="https://gamewar-codezeel.myshopify.com/cdn/shop/products/9_3c9d8135-85d0-4470-ad8d-13ced3db559a_1000x.jpg?v=1671088714"
                        alt=""
                    />
                    <h2>Legend Of Musical Light</h2>
                    <p> <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <span> <AiFillStar />
                            <AiFillStar /> </span >
                    </p>
                    <h3>$90.00 <del>$110.00</del> </h3>
                    <span className="discount">-12%</span>
                </div>
                <div className="product">
                    <img
                        src="https://gamewar-codezeel.myshopify.com/cdn/shop/products/19_dbfdf2e5-b1a1-48cd-924b-110c05ed1599_1000x.jpg?v=1671088770"
                        alt=""
                    />
                    <h2>BeeFense BeeMastered</h2>
                    <p> <AiFillStar />
                        <AiFillStar />
                        <span> <AiFillStar />
                            <AiFillStar />
                            <AiFillStar /> </span>
                    </p>
                    <h3>$70.00 <del>$75.00</del></h3>
                    <span className="discount">-6%</span>
                </div>
            </div>
        </div>
    );
}

export default OurProducts;