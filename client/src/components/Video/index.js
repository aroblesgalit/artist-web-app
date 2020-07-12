import React from "react";
import "./video.css";

function Video(props) {

    const { title, url } = props;

    return (
        <div className="iframe-container uk-margin-bottom">
            <iframe
                title={title}
                src={url}
                width="1920"
                height="1080"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
            >
            </iframe>
        </div>
    )
}

export default Video;