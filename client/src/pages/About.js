import React from "react";
import "./pages.css";
import { AboutConsumer } from "../utils/AboutContext";

function About() {
    return (
        <AboutConsumer>
            {
                value => {
                    const { imgAboutTop, name, about, email, phone, socialMedias, imgAboutBot } = value;
                    return (
                        <div className="main-container about-container">
                            <img src={imgAboutTop} alt={name} />
                            <div className="uk-margin-large uk-width-1-2@l">
                                <p>{about}</p>
                            </div>
                            <div className="uk-margin-large uk-width-1-2@l">
                                <h4>connect with me</h4>
                                <p className="uk-margin-small">{email}</p>
                                <p className="uk-margin-small">{phone}</p>
                                {
                                    socialMedias ? (
                                        socialMedias.map(social => {
                                            return <p key={social.id} className="uk-margin-small">{social.link}</p>
                                        })
                                    ) : ""

                                }
                            </div>
                            <img src={imgAboutBot} alt={name} />
                        </div>
                    )
                }
            }
        </AboutConsumer>
    )
}

export default About;