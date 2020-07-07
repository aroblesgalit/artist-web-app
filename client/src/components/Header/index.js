import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
    return (
        <div>
            <div className="header-container">
                <Link className="header-logo uk-navbar-item uk-logo" to="/">john doe</Link>
                <ul className="large-nav uk-nav uk-nav-default">
                    <li><Link to="/">about</Link></li>
                    <li><Link to="/">portfolio</Link></li>
                    <li><Link to="/">videos</Link></li>
                    <li><Link to="/">shop</Link></li>
                    <li><Link to="/">contact</Link></li>
                </ul>
                {
                    // <div className="small-nav"><span uk-navbar-toggle-icon="true" uk-toggle="target: #small-nav-toggle"></span></div>
                }
                <nav uk-navbar="true" className="small-nav">
                    <ul className="uk-navbar-nav">
                        <li>
                            <a href="#"><span uk-navbar-toggle-icon="true"></span></a>
                            <div className="uk-navbar-dropdown">
                                <ul className="uk-nav uk-navbar-dropdown-nav">
                                    <li><Link to="/">about</Link></li>
                                    <li><Link to="/">portfolio</Link></li>
                                    <li><Link to="/">videos</Link></li>
                                    <li><Link to="/">shop</Link></li>
                                    <li><Link to="/">contact</Link></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div className="social-media-links">
                    <a href="" target="_blank" className="uk-icon-button uk-margin-small-right" uk-icon="youtube"></a>
                    <a href="" target="_blank" className="uk-icon-button uk-margin-small-right" uk-icon="twitter"></a>
                    <a href="" target="_blank" className="uk-icon-button uk-margin-small-right" uk-icon="facebook"></a>
                    <a href="" target="_blank" className="uk-icon-button" uk-icon="instagram"></a>
                </div>
            </div>

            {
                // <div id="small-nav-toggle" className="uk-position-absolute">
                //     <ul className="uk-nav uk-nav-default uk-text-right">
                //         <li><Link to="/">about</Link></li>
                //         <li><Link to="/">portfolio</Link></li>
                //         <li><Link to="/">videos</Link></li>
                //         <li><Link to="/">shop</Link></li>
                //         <li><Link to="/">contact</Link></li>
                //     </ul>
                // </div>
            }

        </div>
    )
}

export default Header;
