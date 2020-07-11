import React from "react";
import "./pages.css";

function About() {
    return (
        <div className="main-container about-container">
            <img src="https://cdn.pixabay.com/photo/2017/07/03/20/17/abstract-2468874_960_720.jpg" alt="John Doe" />
            <div className="uk-margin-large uk-width-1-2@l">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className="uk-margin-large uk-width-1-2@l">
                <h4>connect with me</h4>
                <p className="uk-margin-small">johndoe@email.com</p>
                <p className="uk-margin-small">555.555.5555</p>
                <p className="uk-margin-small">YouTube</p>
                <p className="uk-margin-small">Twitter</p>
                <p className="uk-margin-small">Facebook</p>
                <p className="uk-margin-small">Instagram</p>
            </div>
            <img src="https://cdn.pixabay.com/photo/2017/12/01/08/02/paint-2990357_960_720.jpg" alt="John Doe" />
        </div>
    )
}

export default About;