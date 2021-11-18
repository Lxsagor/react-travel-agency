import React from "react";
import img1 from "./assets/jadoo/menu/r3.png";
import img2 from "./assets/jadoo/menu/r2.png";
import img3 from "./assets/jadoo/menu/r1.png";

const DestinationPlace = () => {
    return (
        <>
            <div className="destination-place">
                <div className="place1">
                    <img src={img1} alt="Avatar" />
                    <h4>
                        <b>Rome, Italty</b>
                    </h4>
                    <p>10 Days Trip</p>
                </div>

                <div className="place2">
                    <img src={img2} alt="Avatar" />

                    <h4>
                        <b>London, UK</b>
                    </h4>
                    <p>12 Days Trip</p>
                </div>

                <div className="place3">
                    <img src={img3} alt="Avatar" />

                    <h4>
                        <b>Full Europe</b>
                    </h4>
                    <p>28 Days Trip</p>
                </div>
            </div>
        </>
    );
};

export default DestinationPlace;
