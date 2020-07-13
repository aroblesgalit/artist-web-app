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

    let alertTimeout;

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
        clearAlert();

        API.deleteVideo(id)
            .then(res => {
                // console.log("Video deleted...", res);
                getAllVideos();
                setAlertState(true, "delete", "successful");
                resetAlert(3000);
                if (page === "videos-view") {
                    window.location.replace("/admin");
                }
            })
            .catch(err => {
                console.log("Something went wrong while deleting the video...", err);
                setAlertState(true, "delete", "fail");
                resetAlert(3000);
            })
    };

    function updateVideo(e, id, item) {
        e.preventDefault();
        clearAlert();

        API.updateVideo(id, item)
            .then(res => {
                // console.log("Video has been updated...", res.data);
                getAllVideos();
                setAlertState(true, "update", "successful");
                resetAlert(3000);
            })
            .catch(err => {
                console.log("Something went wrong while updating the video...", err);
                setAlertState(true, "update", "fail");
                resetAlert(3000);
            })
    };

    function addVideo(e, item) {
        e.preventDefault();
        clearAlert();

        API.addVideo(item)
            .then(res => {
                // console.log("Video added...", res.data);
                getAllVideos();
                setAlertState(true, "add", "successful");
                resetAlert(3000);
            })
            .catch(err => {
                console.log("Something went wrong while adding video...", err);
                setAlertState(true, "add", "fail");
                resetAlert(3000);
            })
    };

    function setAlertState(alertOn, alertType, alertState) {
        setAlert({
            ...alert,
            alertType: alertType,
            alertOn: alertOn,
            alertState: alertState
        });
    };

    function clearAlert() {
        clearTimeout(alertTimeout);
    };

    function resetAlert(delay) {
        alertTimeout = setTimeout(() => {
            setAlert({
                ...alert,
                alertType: "none",
                alertOn: false,
                alertState: "none"
            })
        }, delay);
    };

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