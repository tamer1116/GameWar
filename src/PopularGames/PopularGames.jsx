import React from "react";
import "./PopularGames.css";

function PopularGames() {
    return (

        <div className="gamecontainer">
            <div data-aos="fade-up" data-aos-duration="2200" className="card-1">
                <div className="ss" >
                    <img src="https://gamewar-codezeel.myshopify.com/cdn/shop/files/sub-banner-1_a255ff13-bf4d-45f9-899a-7c948302d58b.jpg?v=1671527487" alt="" />
                </div>
                <div className="a">
                    <h2>Best Action Games</h2>
                    <h1>Dead Rising <br /> Zombies</h1>
                </div>

            </div>
            <div data-aos="fade-up" data-aos-delay="400" className="card-2">
                <div className="ss">
                    <img src="https://gamewar-codezeel.myshopify.com/cdn/shop/files/sub-banner-2.jpg?v=1670925899" alt="" />
                </div>
                <div className="b">
                    <h2>3D Pixel Racing</h2>
                    <h1>Fast Drive <br /> Racing</h1>
                </div>
            </div>
        </div>
    )
};

export default PopularGames;