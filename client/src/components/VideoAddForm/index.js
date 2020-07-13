import React, { useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./videoAddForm.css";
import VideoContext, { VideoConsumer } from "../../utils/VideoContext";
import Alert from "../Alert";

function VideoAddForm() {

    const { alertOn, alertItem, alertType, alertState } = useContext(VideoContext);

    const titleRef = useRef();
    const urlRef = useRef();

    const [item, setItem] = useState({
        title: "",
        url: ""
    });

    function clearInput() {
        setTimeout(() => {
            setItem({
                title: "",
                url: ""
            })
        }, 1500);
    }

    return (
        <VideoConsumer>
            {
                value => {
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
                                            placeholder="graphite drawing"
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
                                            placeholder="www.youtube.com/embed/video.mp4"
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
                                    <Link to="/admin">
                                        <button className="secondary-btn uk-margin-small-right"><span uk-icon="close" className="uk-margin-small-right" />cancel</button>
                                    </Link>
                                    <button
                                        className="primary-btn"
                                        onClick={(e) => {
                                            value.addVideo(e, item);
                                            clearInput();
                                        }}
                                    >
                                        <span uk-icon="plus" className="uk-margin-small-right" />add
                                    </button>
                                    <Alert
                                        alertOn={alertOn}
                                        alertItem={alertItem}
                                        alertType={alertType}
                                        alertState={alertState}
                                    />
                                </div>
                            </div>
                        </form>
                    )
                }
            }
        </VideoConsumer>
    )
}


export default VideoAddForm;