import React, { useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Aos from "aos";


function Header() {

    useEffect(() => {
        Aos.init({
            duration: 1500,
        });
    }, []);

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
                        Creators
                        </Link>
                    </li>
                  
                    <li>
                        <Link to={"/games"}>
                            Games
                        </Link>
                    </li>
                    <li>
                        <Link to={"/publishers"}>
                            Publishers
                        </Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <input type="text" placeholder="Search..." />
            
            </div>

        </div>

    )
};



export default Header;