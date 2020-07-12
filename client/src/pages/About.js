import React from "react";
import "./pages.css";
import { AboutConsumer } from "../utils/AboutContext";

function About() {
    return (
        <AboutConsumer>
            {
                value => {
                    const { imgAboutTop, name, about, email, phone, socialMedias, imgAboutBot } = value;
                    let phoneToArr = phone.toString().split("");
                    phoneToArr.splice(3, 0, "-");
                    phoneToArr.splice(7, 0, "-");
                    return (
                        <div className="main-container about-container">
                            <img src={imgAboutTop} alt={name} />
                            <div className="uk-margin-large uk-width-1-2@l">
                                <p>{about}</p>
                            </div>
                            <div className="uk-margin-large uk-flex uk-flex-column uk-width-1-2@l">
                                <h4>connect with me</h4>
                                <a href={`mailto:${email}`} className="uk-margin-small">{email}</a>
                                <a href={`tel:+${phone}`} className="uk-margin-small">{phoneToArr}</a>
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