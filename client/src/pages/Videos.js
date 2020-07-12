import React from "react";
import "./pages.css";

function Videos() {

    const videos = [
        {
            _id: "1",
            name: "video 1",
            link: ""
        }
    ]

    return (
        <div className="main-container">
            <div className="videos-container">
                <iframe src="https://www.youtube.com/embed/g0qaTzjNZ2Y" className="uk-width-1-1" controls="true" playsInline="true" uk-video="true" />
            </div>
        </div>
    )
}

export default Videos;