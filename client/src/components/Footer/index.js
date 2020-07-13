import React from "react";
import "./footer.css";

function Footer(props) {

    const { screenSize } = props;

    return (
        <div className={`footer ${screenSize} uk-margin`}>
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
    )
}

export default Footer;