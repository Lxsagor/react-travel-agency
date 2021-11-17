import React from "react";
import serv1 from "./assets/jadoo/menu/1.png";
import serv2 from "./assets/jadoo/menu/2.png";
import serv3 from "./assets/jadoo/menu/3.png";
import serv4 from "./assets/jadoo/menu/4.png";

const Service = () => {
    return (
        <>
            <div>
                <h4>CATEGORY</h4>
                <h2>We Offer Best Services</h2>
                <div>
                    <div className="card1">
                        <img src={serv1} alt="Calculated Weather" />
                        <p>Calculated Weather </p>
                        <small>
                            Built Wicket longer admire do barton vanity itself
                            do in it.
                        </small>
                    </div>
                    <div className="card2">
                        <img src={serv2} alt="Calculated Weather" />
                        <p>Best Flights</p>
                        <small>
                            Engrossed listening. Park gate sell they west hard
                            for the.
                        </small>
                    </div>
                    <div className="card3">
                        <img src={serv3} alt="Calculated Weather" />
                        <p>Local Events</p>
                        <small>
                            Barton vanity itself do in it. Preferd to men it
                            engrossed listening.{" "}
                        </small>
                    </div>
                    <div className="card4">
                        <img src={serv4} alt="Calculated Weather" />
                        <p>Customization</p>
                        <small>
                            We deliver outsourced aviation services for military
                            customers
                        </small>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;
