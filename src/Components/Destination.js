import React from "react";
import img1 from "./assets/jadoo/menu/r3.png";
import img2 from "./assets/jadoo/menu/r2.png";
import img3 from "./assets/jadoo/menu/r1.png";

const Destination = () => {
    return (
        <>
            <div>
                <p>Top Selling</p>
                <h1>Top Destinations</h1>

                <div className="destination">
                    <div className="card">
                        <img src={img1} alt="Avatar" />
                        <h4>
                            <b>Rome, Italty</b>
                        </h4>
                        <p>10 Days Trip</p>
                    </div>

                    <div className="card">
                        <img src={img2} alt="Avatar" />

                        <h4>
                            <b>London, UK</b>
                        </h4>
                        <p>12 Days Trip</p>
                    </div>

                    <div className="card">
                        <img src={img3} alt="Avatar" />

                        <h4>
                            <b>Full Europe</b>
                        </h4>
                        <p>28 Days Trip</p>
                    </div>
                </div>
            </div>
            ;
        </>
    );
};

export default Destination;
