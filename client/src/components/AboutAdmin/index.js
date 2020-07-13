import React, { useState, useRef, useContext } from "react";
import "./aboutAdmin.css";
import uuid from "react-uuid";
import AboutContext, { AboutConsumer } from "../../utils/AboutContext";
import Alert from "../Alert";

function AboutAdmin(props) {

    const { activeTab } = props;
    const { content, alertOn, alertType, alertState, alertItem } = useContext(AboutContext);

    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const aboutRef = useRef();
    const imgHomeRef = useRef();
    const imgAboutTopRef = useRef();
    const imgAboutBotRef = useRef();

    const [user, setUser] = useState({
        name: content.name,
        email: content.email,
        phone: content.phone,
        about: content.about,
        socialMedias: content.socialMedias,
        imgHome: content.imgHome,
        imgAboutTop: content.imgAboutTop,
        imgAboutBot: content.imgAboutBot
    });


    function handleSocialAdd(e) {
        e.preventDefault();
        const newId = uuid();
        let tempSocialMedias = [...user.socialMedias];
        tempSocialMedias.push({
            id: newId,
            link: ""
        });

        setUser({
            ...user,
            socialMedias: tempSocialMedias
        })
    }

    function handleSocialDelete(e, id) {
        e.preventDefault();

        let tempSocialMedias = [...user.socialMedias];
        let newSocialMedias = tempSocialMedias.filter(social => social.id !== id);

        setUser({
            ...user,
            socialMedias: newSocialMedias
        })
    }

    function handleSocialChange(e, id) {
        let tempSocialMedias = [...user.socialMedias];
        let social = tempSocialMedias.find(social => social.id === id);
        social.link = e.target.value;

        setUser({
            ...user,
            socialMedias: tempSocialMedias
        })
    }

    return (
        <div className={`about-content ${activeTab === "about" ? "show" : "hide"}`}>
            <form className="about-admin uk-grid uk-width-4-5@l" uk-grid="true">
                <div className="uk-width-1-2@m">
                    <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="user-name">name</label>
                        <div className="uk-form-controls">
                            <input
                                className="uk-input"
                                id="user-name"
                                type="text"
                                placeholder="john doe"
                                required={true}
                                ref={nameRef}
                                value={user.name}
                                onChange={() => setUser({
                                    ...user,
                                    name: nameRef.current.value
                                })}
                            />
                        </div>
                    </div>
                    <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="user-email">email</label>
                        <div className="uk-form-controls">
                            <input
                                className="uk-input"
                                id="user-email"
                                type="email"
                                placeholder="johndoe@email.com"
                                required={true}
                                ref={emailRef}
                                value={user.email}
                                onChange={() => setUser({
                                    ...user,
                                    email: emailRef.current.value
                                })}
                            />
                        </div>
                    </div>
                    <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="user-phone">phone</label>
                        <div className="uk-form-controls">
                            <input
                                className="uk-input"
                                id="user-phone"
                                type="tel"
                                placeholder="5555555555"
                                required={true}
                                ref={phoneRef}
                                value={user.phone}
                                onChange={() => setUser({
                                    ...user,
                                    phone: phoneRef.current.value
                                })}
                            />
                        </div>
                    </div>
                    <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="user-about">about</label>
                        <div className="uk-form-controls">
                            <textarea
                                className="uk-input"
                                id="user-about"
                                type="message"
                                placeholder="My story. Here it is..."
                                ref={aboutRef}
                                value={user.about}
                                onChange={() => setUser({
                                    ...user,
                                    about: aboutRef.current.value
                                })}
                            />
                        </div>
                    </div>
                </div>
                <div className="uk-width-1-2@m">
                    <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="user-imgHome">home image</label>
                        <div className="uk-form-controls">
                            <input
                                className="uk-input"
                                id="user-imgHome"
                                type="url"
                                placeholder="https://www.site.com/image.png"
                                required={true}
                                ref={imgHomeRef}
                                value={user.imgHome}
                                onChange={() => setUser({
                                    ...user,
                                    imgHome: imgHomeRef.current.value
                                })}
                            />
                        </div>
                    </div>
                    <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="user-imgAboutTop">about top image</label>
                        <div className="uk-form-controls">
                            <input
                                className="uk-input"
                                id="user-imgAboutTop"
                                type="url"
                                placeholder="https://www.site.com/image.png"
                                required={true}
                                ref={imgAboutTopRef}
                                value={user.imgAboutTop}
                                onChange={() => setUser({
                                    ...user,
                                    imgAboutTop: imgAboutTopRef.current.value
                                })}
                            />
                        </div>
                    </div>
                    <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="user-imgAboutBot">about bottom image</label>
                        <div className="uk-form-controls">
                            <input
                                className="uk-input"
                                id="user-imgAboutBot"
                                type="url"
                                placeholder="https://www.site.com/image.png"
                                required={true}
                                ref={imgAboutBotRef}
                                value={user.imgAboutBot}
                                onChange={() => setUser({
                                    ...user,
                                    imgAboutBot: imgAboutBotRef.current.value
                                })}
                            />
                        </div>
                    </div>
                    <div className="uk-margin">
                        <label className="uk-form-label">social medias</label>
                        {
                            user.socialMedias ? (
                                user.socialMedias.map(social => {
                                    return (
                                        <div className="uk-form-controls uk-flex uk-flex-middle uk-margin-small-bottom" key={social.id}>
                                            <input
                                                className="uk-input"
                                                id={social.id}
                                                type="url"
                                                placeholder="social media link"
                                                required={true}
                                                value={social.link}
                                                onChange={(e) => handleSocialChange(e, social.id)}
                                            />
                                            <span
                                                className="social-delete-icon uk-margin-left"
                                                uk-icon="icon: close; ratio: 0.8"
                                                onClick={(e) => handleSocialDelete(e, social.id)}
                                            />
                                        </div>
                                    )
                                })
                            ) : ""
                        }
                        <div className={`social-add uk-flex uk-flex-middle uk-margin-top ${user.socialMedias.length > 0 ? "uk-flex-right" : "uk-flex-left"}`}>
                            <span>
                                {
                                    user.socialMedias.length === 0 ? "add your social media links" : "add another"
                                }
                            </span>
                            <span
                                className="social-add-icon uk-margin-left"
                                uk-icon="icon: plus; ratio: 0.8"
                                onClick={(e) => handleSocialAdd(e)}
                            />
                        </div>
                    </div>
                    <div className="uk-margin">
                        <AboutConsumer>
                            {
                                value => {
                                    return value.contentExists ? (
                                        <button
                                            className="primary-btn"
                                            onClick={(e) => value.updateAbout(e, value.content._id, user)}
                                        >
                                            <span uk-icon="file-edit" className="uk-margin-small-right" />save changes
                                        </button>
                                    ) : (
                                            <button
                                                className="primary-btn"
                                                onClick={(e) => value.addAbout(e, user)}
                                            >
                                                <span uk-icon="file-edit" className="uk-margin-small-right" />save changes
                                            </button>
                                        )
                                }
                            }
                        </AboutConsumer>
                    </div>
                </div>
            </form>
            <Alert
                alertOn={alertOn}
                alertItem={alertItem}
                alertType={alertType}
                alertState={alertState}
            />
        </div>
    )
}

export default AboutAdmin;