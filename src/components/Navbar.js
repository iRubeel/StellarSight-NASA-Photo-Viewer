import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(){
    return (
        <div className="navbar">
            <Link to="/">Take me Home</Link>
        </div>
    )
}