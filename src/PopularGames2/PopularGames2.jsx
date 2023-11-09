import React from "react";


function PopularGames2() {
    return (

        <div className="gamecontainer">
            <div data-aos="fade-up" data-aos-duration="2200"
                className="card-1">
                <div className="ss" >
                    <img src="https://gamewar-codezeel.myshopify.com/cdn/shop/files/cms-banner-1_ae40405f-6eb4-4be7-807e-77661ffa4a8c.jpg?v=1671527547" alt="" />
                </div>
                <div className="a">
                    <h2>Die Hard Trilogy</h2>
                    <h1>BULLET HELL <br /> MONDAY</h1>
                </div>

            </div>
            <div data-aos="fade-up" data-aos-delay="400" className="card-2">
                <div className="ss">
                    <img src="https://gamewar-codezeel.myshopify.com/cdn/shop/files/cms-banner-2.jpg?v=1670936426" alt="" />
                </div>
                <div className="b">
                    <h2> World Of Tanks</h2>
                    <h1>TANK HEROES <br />  OFFICER</h1>
                </div>
            </div>
        </div>
    )
};

export default PopularGames2;