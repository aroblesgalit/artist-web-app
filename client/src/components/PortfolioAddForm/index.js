import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./portfolioAddForm.css";
import { ArtConsumer } from "../../utils/ArtContext";

function PortfolioAddForm() {

    const nameRef = useRef();
    const imgRef = useRef();
    const mediumRef = useRef();

    const [item, setItem] = useState({
        name: "",
        img: "",
        medium: ""
    });

    function clearInput() {
        setTimeout(() => {
            setItem({
                name: "",
                img: "",
                medium: ""
            })
        }, 1500);
    }

    return (
        <ArtConsumer>
            {
                value => {
                    return (
                        <form className="uk-grid uk-width-4-5@l" uk-grid="true">
                            <div className="uk-width-1-2@m">
                                <div className="uk-margin">
                                    <label className="uk-form-label" htmlFor="portfolio-item-name">name</label>
                                    <div className="uk-form-controls">
                                        <input
                                            className="uk-input"
                                            id="portfolio-item-name"
                                            type="text"
                                            placeholder="lost in the woods"
                                            required={true}
                                            ref={nameRef}
                                            value={item.name}
                                            onChange={() => setItem({
                                                ...item,
                                                name: nameRef.current.value
                                            })}
                                        />
                                    </div>
                                </div>
                                <div className="uk-margin">
                                    <label className="uk-form-label" htmlFor="portfolio-item-image">image</label>
                                    <div className="uk-form-controls">
                                        <input
                                            className="uk-input"
                                            id="portfolio-item-image"
                                            type="url"
                                            placeholder="www.site.com/image.png"
                                            required={true}
                                            ref={imgRef}
                                            value={item.img}
                                            onChange={() => setItem({
                                                ...item,
                                                img: imgRef.current.value
                                            })}
                                        />
                                    </div>
                                </div>
                                <div className="uk-margin">
                                    <label className="uk-form-label" htmlFor="portfolio-item-medium">medium</label>
                                    <div className="uk-form-controls uk-margin-bottom">
                                        <input
                                            className="uk-input"
                                            id="portfolio-item-medium"
                                            type="text"
                                            placeholder="acrylic"
                                            required={true}
                                            min="0"
                                            ref={mediumRef}
                                            value={item.medium}
                                            onChange={() => setItem({
                                                ...item,
                                                medium: mediumRef.current.value
                                            })}
                                        />
                                    </div>
                                </div>
                                <div className="uk-margin">
                                    <Link to="/admin">
                                        <button className="secondary-btn uk-margin-small-right"><span uk-icon="close" className="uk-margin-small-right" />cancel</button>
                                    </Link>
                                    <button
                                        className="primary-btn"
                                        onClick={(e) => {
                                            value.addArt(e, {
                                                name: item.name,
                                                img: item.img,
                                                medium: item.medium
                                            });
                                            clearInput();
                                        }}
                                        type="submit"
                                    >
                                        <span uk-icon="plus" className="uk-margin-small-right" />add
                                    </button>
                                </div>
                            </div>
                        </form>
                    )
                }
            }
        </ArtConsumer>
    )
}

export default PortfolioAddForm;