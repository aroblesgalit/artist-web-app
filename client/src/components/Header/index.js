import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
    return (
        <div className="header-container uk-position-fixed uk-height-1-1">
            <h1>Header</h1>
            <ul class="uk-nav uk-nav-default">
                <li class="uk-active"><Link to="/">about</Link></li>
                <li><Link to="/">portfolio</Link></li>
                <li><Link to="/">videos</Link></li>
                <li><Link to="/">shop</Link></li>
                <li><Link to="/">contact</Link></li>
            </ul>
        </div>
    )
}

export default Header;
