import React from "react";
import logo from "./assets/jadoo/Jadoo.png";
import Decore from "./Decore";

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="mainheader">
                        <div>
                            <a href="@">
                                <img src={logo} alt="logo" className="logo" />
                            </a>
                        </div>
                        <div className="navbar">
                            <ul>
                                <li>
                                    <a href="@">Destination</a>
                                </li>
                                <li>
                                    <a href="@">Hotels</a>
                                </li>
                                <li>
                                    <a href="@">Flights</a>
                                </li>
                                <li>
                                    <a href="@">Bookings</a>
                                </li>
                                <li>
                                    <a href="@">Login</a>
                                </li>
                                <li className="signup">
                                    <a href="@" className="signup-btn">
                                        Signup
                                    </a>
                                </li>
                                <li>
                                    <select name="" id="" className="language">
                                        <option value="">EN</option>
                                        <option value="">BN</option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Decore />
                </div>
            </div>
        </>
    );
};

export default Header;
