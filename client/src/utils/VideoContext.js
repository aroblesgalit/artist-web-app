import React, { useState, useEffect } from "react";
import API from "./API";

const VideoContext = React.createContext();

// Provider
function VideoProvider(props) {

    const [videos, setVideos] = useState({
        items: [],
        viewVideo: {}
    });

    const [alert, setAlert] = useState({
        alertItem: "video",
        alertType: "none", // add, update, delete, none
        alertOn: false,
        alertState: "none" // successful, fail, none
    });

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
                // console.log("Video deleted...", res);
                getAllVideos();
                setAlert({
                    ...alert,
                    alertType: "delete",
                    alertOn: true,
                    alertState: "successful"
                });
                resetAlert();
                if (page === "videos-view") {
                    window.location.replace("/admin");
                }
            })
            .catch(err => {
                console.log("Something went wrong while deleting the video...", err);
                setAlert({
                    ...alert,
                    alertType: "delete",
                    alertOn: true,
                    alertState: "fail"
                });
                resetAlert();
            })
    };

    function updateVideo(e, id, item) {
        e.preventDefault();

        API.updateVideo(id, item)
            .then(res => {
                // console.log("Video has been updated...", res.data);
                getAllVideos();
                setAlert({
                    ...alert,
                    alertType: "update",
                    alertOn: true,
                    alertState: "successful"
                });
                resetAlert();
            })
            .catch(err => {
                console.log("Something went wrong while updating the video...", err);
                setAlert({
                    ...alert,
                    alertType: "update",
                    alertOn: true,
                    alertState: "fail"
                });
                resetAlert();
            })
    };

    function addVideo(e, item) {
        e.preventDefault();

        API.addVideo(item)
            .then(res => {
                // console.log("Video added...", res.data);
                getAllVideos();
                setAlert({
                    ...alert,
                    alertType: "add",
                    alertOn: true,
                    alertState: "successful"
                });
                resetAlert();
            })
            .catch(err => {
                console.log("Something went wrong while adding video...", err);
                setAlert({
                    ...alert,
                    alertType: "add",
                    alertOn: true,
                    alertState: "fail"
                });
                resetAlert();
            })
    };

    function resetAlert() {
        setTimeout(() => {
            setAlert({
                alertItem: "video",
                alertType: "none",
                alertOn: false,
                alertState: "none"
            })
        }, 3000);
    }

    return (
        <VideoContext.Provider
            value={{
                ...videos,
                ...alert,
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