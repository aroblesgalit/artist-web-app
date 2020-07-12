import React, { useState, useEffect } from "react";
// import API from "./API";

const VideoContext = React.createContext();

// Provider
function VideoProvider(props) {

    const [videos, setVideos] = useState({
        items: [],
        viewVideo: {}
    })

    useEffect(() => {
        getAllVideos();
    }, []);

    function getAllVideos() {
        setVideos({
            ...videos,
            items: [
                {
                    _id: "1fakeId",
                    title: "art",
                    url: "https://www.youtube.com/embed/g0qaTzjNZ2Y"
                },
                {
                    _id: "2fakeId",
                    title: "art two",
                    url: "https://www.youtube.com/embed/ILXhHv-0V9Q"
                }
            ]
        })
    };

    function getVideoById(id) {
        return videos.items.find(item => item._id === id);
    }

    function handleView(id) {
        const video = getVideoById(id);
        setVideos({
            ...videos,
            viewVideo: video
        })
    };

    return (
        <VideoContext.Provider
            value={{
                ...videos,
                handleView
            }}
        >
            {props.children}
        </VideoContext.Provider>
    );
}

// Consumer
const VideoConsumer = VideoContext.Consumer;

export default VideoContext;
export { VideoProvider, VideoConsumer };