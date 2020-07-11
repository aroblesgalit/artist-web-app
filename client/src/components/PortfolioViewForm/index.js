import React, { useRef, useState, useContext } from "react";
import "./portfolioViewForm.css";
import ArtContext, { ArtConsumer } from "../../utils/ArtContext";

function PortfolioViewForm() {

    const { viewArt } = useContext(ArtContext);

    const nameRef = useRef();
    const imgRef = useRef();
    const mediumRef = useRef();

    const [item, setItem] = useState({
        name: viewArt.name,
        img: viewArt.img,
        medium: viewArt.medium
    })

    return (
        <ArtConsumer>
            {
                value => {
                    const { _id } = value.viewArt;
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
                                    <button
                                        className="secondary-btn uk-margin-small-right"
                                        onClick={(e) => value.deleteArt(e, _id, "portfolio-view")}
                                    >
                                        <span uk-icon="close" className="uk-margin-small-right" />delete
                                    </button>
                                    <button
                                        className="primary-btn"
                                        onClick={(e) => {
                                            console.log(item);
                                            value.updateArt(e, _id, {
                                                name: item.name,
                                                img: item.img,
                                                price: item.medium
                                            });
                                        }}
                                    >
                                        <span uk-icon="file-edit" className="uk-margin-small-right" />save changes
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

export default PortfolioViewForm;