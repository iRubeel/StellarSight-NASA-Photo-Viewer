import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="home-container">
            <Link to='/nasaphoto' className="home-link">See into the Stars!</Link>
            {/* <Link to='/viewjwst' className="home-link">New James Webb Discoveries!</Link> */}
        </div>
    );
}