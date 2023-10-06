import React from "react";
import "./Header.css";
import { AiFillHeart } from "react-icons/ai"
import { BsFillMoonFill } from "react-icons/bs"
import { Link } from "react-router-dom";

function Header() {

    return (
        <div className="container">

            <div>
                <Link to={"/"}>
                    <img src="https://gamewar-codezeel.myshopify.com/cdn/shop/files/logo_3_200x.png?v=1674548929" alt="logo" />
                </Link>
            </div>
            <div >
                <ul className="navmenu">
                    <li>
                        <Link to={"/creators"}>
                            <a href="">Creators</a>
                        </Link>
                    </li>
                    <li>
                        <a href="">Developers</a>
                    </li>
                    <li>
                        <a href="">Games</a>
                    </li>
                    <li>
                        <a href="">Publishers</a>
                    </li>
                    <li>
                        <Link to={"/contact"}>
                            <a href="">Contact</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <input type="text" placeholder="Search..." />
                <span className="icon">
                    <AiFillHeart />
                    <BsFillMoonFill />
                </span>
            </div>
        </div>

    )
};



export default Header;