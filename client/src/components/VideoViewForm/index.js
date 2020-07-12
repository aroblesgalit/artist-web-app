import React, { useRef, useState, useContext } from "react";
import "./videoViewForm.css";
import ArtContext, { ArtConsumer } from "../../utils/ArtContext";

function VideoViewForm() {

    const { viewVideo } = useContext(ArtContext);

    const titleRef = useRef();
    const urlRef = useRef();

    const [item, setItem] = useState({
        title: viewVideo.title,
        url: viewVideo.url
    })

    return (
        <ArtConsumer>
            {
                value => {
                    // const { _id } = value.viewArt;
                    // console.log("logging viewArt id", _id, viewArt)
                    return (
                        <form className="uk-grid uk-width-4-5@l" uk-grid="true">
                            <div className="uk-width-1-2@m">
                                <div className="uk-margin">
                                    <label className="uk-form-label" htmlFor="video-item-title">title</label>
                                    <div className="uk-form-controls">
                                        <input
                                            className="uk-input"
                                            id="video-item-title"
                                            type="text"
                                            required={true}
                                            ref={titleRef}
                                            value={item.title}
                                            onChange={() => setItem({
                                                ...item,
                                                title: titleRef.current.value
                                            })}
                                        />
                                    </div>
                                </div>
                                <div className="uk-margin">
                                    <label className="uk-form-label" htmlFor="video-item-url">url</label>
                                    <div className="uk-form-controls">
                                        <input
                                            className="uk-input"
                                            id="video-item-url"
                                            type="url"
                                            required={true}
                                            ref={urlRef}
                                            value={item.url}
                                            onChange={() => setItem({
                                                ...item,
                                                url: urlRef.current.value
                                            })}
                                        />
                                    </div>
                                </div>
                                <div className="uk-margin">
                                    <button
                                        className="secondary-btn uk-margin-small-right"
                                        // onClick={(e) => value.deleteVideo(e, _id, "videos-view")}
                                    >
                                        <span uk-icon="close" className="uk-margin-small-right" />delete
                                    </button>
                                    <button
                                        className="primary-btn"
                                        onClick={(e) => {
                                            console.log(item);
                                            // value.updateVideo(e, _id, item);
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

export default VideoViewForm;