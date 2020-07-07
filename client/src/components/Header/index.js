import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
    return (
        <div className="header-container uk-position-fixed uk-height-1-1 uk-text-right">
            <Link className="header-logo uk-navbar-item uk-logo" to="/">john doe</Link>
            <ul className="uk-nav uk-nav-default">
                <li><Link to="/">about</Link></li>
                <li><Link to="/">portfolio</Link></li>
                <li><Link to="/">videos</Link></li>
                <li><Link to="/">shop</Link></li>
                <li><Link to="/">contact</Link></li>
            </ul>
            <div className="social-media-links">
                <a href="" target="_blank" className="uk-icon-button uk-margin-small-right" uk-icon="youtube"></a>
                <a href="" target="_blank" className="uk-icon-button uk-margin-small-right" uk-icon="twitter"></a>
                <a href="" target="_blank" className="uk-icon-button uk-margin-small-right" uk-icon="facebook"></a>
                <a href="" target="_blank" className="uk-icon-button" uk-icon="instagram"></a>
            </div>
        </div>
    )
}

export default Header;
