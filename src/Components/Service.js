import React from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
    return (
        <>
            <div className="service">
                <div className="title">
                    <h4>CATEGORY</h4>
                    <h2>We Offer Best Services</h2>
                </div>
                <ServiceCard />
            </div>
        </>
    );
};

export default Service;
