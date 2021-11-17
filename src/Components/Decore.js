import React from "react";
import plane from "./assets/jadoo/plane.png";
import traveller from "./assets/jadoo/Traveller.png";
import arrow from "./assets/jadoo/arrow.png";

const Decore = () => {
    return (
        <div className="decore">
            <div className="left-sec">
                <h3>Best Destinations around the world</h3>

                <h1>
                    Travel,
                    <div className="decor">enjoy</div>
                    and live a new and full life
                </h1>

                <p>
                    Built Wicket longer admire do barton vanity itself do in it.
                    Preferred to sportsmen it engrossed listening. Park gate
                    sell they west hard for the.
                </p>

                <button className="findoutmore">
                    <p>Find out more</p>
                </button>

                <button className="playdemo">
                    <img src={arrow} alt="" />
                </button>
                <div className="play">Play demo</div>
            </div>
            <div className="right-sec">
                <img src={plane} alt="plane" className="planeimg1" />
                <img src={traveller} alt="Traveller" className="travellimg" />
                <img src={plane} alt="plane" className="planeimg2" />
            </div>
        </div>
    );
};

export default Decore;
