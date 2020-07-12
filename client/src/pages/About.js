import React from "react";
import "./pages.css";
import PhoneNum from "../components/PhoneNum";
import EmailAddress from "../components/EmailAddress";
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
                            <div className="uk-margin-large uk-flex uk-flex-column uk-width-1-2@l">
                                <h4>connect with me</h4>
                                <EmailAddress email={email} />
                                <PhoneNum phone={phone} />
                                {
                                    socialMedias ? (
                                        socialMedias.map(social => {
                                            return <a href={social.link} target="_blank" key={social.id} className="uk-margin-small">{social.link}</a>
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