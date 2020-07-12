import React, { useState, useEffect } from "react";
import API from "./API";
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
        API.getAllVideos()
            .then(res => {
                setVideos({
                    ...videos,
                    items: res.data
                })
            })
            .catch(err => {
                console.log("Something went wrong while fetching videos...", err);
            })
    };

    function getVideoById(id) {
        return videos.items.find(item => item._id === id);
    };

    function handleView(id) {
        const video = getVideoById(id);
        setVideos({
            ...videos,
            viewVideo: video
        })
    };

    function deleteVideo(e, id, page) {
        e.preventDefault();

        API.deleteVideo(id)
            .then(res => {
                console.log("Video deleted...", res);
                getAllVideos();
                if (page === "videos-view") {
                    window.location.replace("/admin");
                }
            })
            .catch(err => {
                console.log("Something went wrong while deleting the video...", err);
            })
    };

    function updateVideo(e, id, item) {
        e.preventDefault();

        API.updateVideo(id, item)
            .then(res => {
                console.log("Video has been updated...", res.data);
                getAllVideos();
            })
            .catch(err => {
                console.log("Something went wrong while updating the video...", err);
            })
    };

    function addVideo(e, item) {
        e.preventDefault();

        API.addVideo(item)
            .then(res => {
                console.log("Video added...", res.data);
                getAllVideos();
            })
            .catch(err => {
                console.log("Something went wrong while adding video...", err);
            })
    };

    return (
        <VideoContext.Provider
            value={{
                ...videos,
                handleView,
                deleteVideo,
                updateVideo,
                addVideo
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