import React from "react";
import "./Special.css";

function Special() {
    return (
        <div data-aos="zoom-in" className="specialcontainer">
            <div>
                <h1>Special Category</h1>
            </div>
            <div className="images">
                <div className="image-card">
                    <img className="image"
                        src="https://gamewar-codezeel.myshopify.com/cdn/shop/files/category-img-1_086a04ab-aba1-404d-aad1-b4aea0af4f42_446x550.jpg?v=1671527575"
                        alt=""
                    />
                    <h2>Lastes Pubg Lite Game</h2>
                </div>
                <div className="image-card">
                    <img className="image"
                        src="https://gamewar-codezeel.myshopify.com/cdn/shop/files/category-img-2_446x550.jpg?v=1670927694"
                        alt=""
                    />
                    <h2>New Battlefiled 4 Game</h2>
                </div>
                <div className="image-card">
                    <img className="image"
                        src="https://gamewar-codezeel.myshopify.com/cdn/shop/files/category-img-3_446x550.jpg?v=1670927695"
                        alt=""
                    />
                    <h2>Son Goku Jump Force</h2>
                </div>
            </div>
        </div>
    );
}

export default Special;