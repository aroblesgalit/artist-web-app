import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { UserConsumer } from "../../utils/UserContext";

function Header() {
    return (
        <div>
            <div className="header-container">
                <Link className="header-logo uk-navbar-item uk-logo" to="/">john doe</Link>
                <ul className="large-nav uk-nav uk-nav-default">
                    <li><Link to="/">about</Link></li>
                    <li><Link to="/">portfolio</Link></li>
                    <li><Link to="/">videos</Link></li>
                    <li><Link to="/shop">shop</Link></li>
                    <li><Link to="/">contact</Link></li>
                    <UserConsumer>
                        {
                            value => {
                                return value.isLoggedIn ? (
                                    <React.Fragment>
                                        <li className="uk-nav-divider"></li>
                                        <li><Link to="/admin">admin</Link></li>
                                        <li className="logout-link" onClick={value.handleLogout}>log out</li>
                                    </React.Fragment>
                                ) : ""
                            }
                        }
                    </UserConsumer>
                </ul>
                {
                    // <div className="small-nav"><span uk-navbar-toggle-icon="true" uk-toggle="target: #small-nav-toggle"></span></div>
                }
                <nav uk-navbar="true" className="small-nav">
                    <ul className="uk-navbar-nav">
                        <li>
                            <span uk-navbar-toggle-icon="true"></span>
                            <div className="uk-navbar-dropdown">
                                <ul className="uk-nav uk-navbar-dropdown-nav">
                                    <li><Link to="/">about</Link></li>
                                    <li><Link to="/">portfolio</Link></li>
                                    <li><Link to="/">videos</Link></li>
                                    <li><Link to="/shop">shop</Link></li>
                                    <li><Link to="/">contact</Link></li>
                                    <UserConsumer>
                                        {
                                            value => {
                                                return value.isLoggedIn ? (
                                                    <React.Fragment>
                                                        <li className="uk-nav-divider"></li>
                                                        <li><Link to="admin">admin</Link></li>
                                                        <li className="logout-link" onClick={value.handleLogout}>log out</li>
                                                    </React.Fragment>
                                                ) : ""
                                            }
                                        }
                                    </UserConsumer>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div className="social-media-links">
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="uk-icon-button uk-margin-small-right"><span uk-icon="youtube"></span></a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="uk-icon-button uk-margin-small-right"><span uk-icon="twitter"></span></a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="uk-icon-button uk-margin-small-right"><span uk-icon="facebook"></span></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="uk-icon-button"><span uk-icon="instagram"></span></a>
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
