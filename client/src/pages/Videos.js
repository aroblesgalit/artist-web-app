import React from "react";
import "./pages.css";
import Video from "../components/Video";
import { VideoConsumer } from "../utils/VideoContext";

function Videos() {
    return (
        <div className="main-container">
            <div className="videos-container uk-flex uk-flex-column">
                <VideoConsumer>
                    {
                        value => {
                            return value.items.map(video => {
                                return (
                                    <Video
                                        key={video._id}
                                        title={video.title}
                                        url={video.url}
                                    />
                                )
                            })
                        }
                    }
                </VideoConsumer>
            </div>
        </div>
    )
}

export default Videos;