import React from "react";
import "./pages.css";
import Video from "../components/Video";

function Videos() {

    const videos = [
        {
            _id: "1",
            title: "video 1",
            url: "https://www.youtube-nocookie.com/embed/c2pz2mlSfXA"
        },
        {
            _id: "2",
            title: "video 2",
            url: "https://www.youtube.com/embed/g0qaTzjNZ2Y"
        },
        {
            _id: "3",
            title: "video 3",
            url: "https://www.youtube.com/embed/ILXhHv-0V9Q"
        }
    ]


    return (
        <div className="main-container">
            <div className="videos-container uk-flex uk-flex-column">
                {
                    videos.map(video => {
                        return (
                            <Video
                                key={video._id}
                                title={video.title}
                                url={video.url}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Videos;