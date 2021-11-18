import React from "react";
import DestinationPlace from "./DestinationPlace";

const Destination = () => {
    return (
        <>
            <div>
                <div className="destination">
                    <p>Top Selling</p>
                    <h1>Top Destinations</h1>
                </div>
                <DestinationPlace />
            </div>
        </>
    );
};

export default Destination;
