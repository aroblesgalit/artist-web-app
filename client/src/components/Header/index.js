import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import SocialMediaIcon from "../SocialMediaIcon";
import { UserConsumer } from "../../utils/UserContext";
import { AboutConsumer } from "../../utils/AboutContext";

function Header() {
    return (
        <div>
            <div className="header-container">
                <AboutConsumer>
                    {
                        value => {
                            const { name } = value.content;
                            return <Link className="header-logo uk-navbar-item uk-logo" to="/">{name}</Link>
                        }
                    }
                </AboutConsumer>
                <ul className="large-nav uk-nav uk-nav-default">
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/portfolio">portfolio</Link></li>
                    <li><Link to="/videos">videos</Link></li>
                    <li><Link to="/shop">shop</Link></li>
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
                <nav uk-navbar="true" className="small-nav">
                    <ul className="uk-navbar-nav">
                        <li>
                            <span uk-navbar-toggle-icon="true"></span>
                            <div className="uk-navbar-dropdown">
                                <ul className="uk-nav uk-navbar-dropdown-nav">
                                    <li><Link to="/about">about</Link></li>
                                    <li><Link to="/portfolio">portfolio</Link></li>
                                    <li><Link to="/videos">videos</Link></li>
                                    <li><Link to="/shop">shop</Link></li>
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
                    <AboutConsumer>
                        {
                            value => {
                                const { socialMedias } = value.content;
                                return socialMedias ? (
                                    socialMedias.map(social => {
                                        return <SocialMediaIcon key={social.id} link={social.link} />
                                    })
                                ) : ""
                            }
                        }
                    </AboutConsumer>
                </div>
                <div className="footer uk-margin">
                    <p className="uk-margin-remove">
                        Developed by
                        <a
                            href="https://www.alvingalit.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="uk-link-reset"
                        >
                            Alvin Galit
                        </a>
                    </p>
                    <div className="social-links">
                        <a
                            href="https://github.com/aroblesgalit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="uk-link-reset"
                        >
                            <span uk-icon="icon: github; ratio: 0.8" className="uk-icon" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/aroblesgalit/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="uk-link-reset"
                        >
                            <span uk-icon="icon: linkedin; ratio: 0.8" className="uk-icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
