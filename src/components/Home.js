import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="home-container">
            <h1 className="home-title">Explore the Universe</h1>
            <p className="home-tagline">Journey through the cosmos with NASA's Astronomy Picture of the Day</p>
            <Link to='/nasaphoto' className="home-link">See into the Stars!</Link>
        </div>
    );
}
