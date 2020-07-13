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

    // Variable for timeout for alert reset
    let alertTimeout;

    useEffect(() => {
        getAllVideos();
    }, []);

    // Fetch all the videos from the database and then set items state to the data returned
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

    // Get a video by given id from the items state
    function getVideoById(id) {
        return videos.items.find(item => item._id === id);
    };

    // Set viewVideo state to the video of given id
    function handleView(id) {
        const video = getVideoById(id);
        setVideos({
            ...videos,
            viewVideo: video
        })
    };

    // Delete video from database and then fetch all videos again
    function deleteVideo(e, id, page) {
        e.preventDefault();
        clearAlert();

        API.deleteVideo(id)
            .then(() => {
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

    // Update video in database and then fetch all videos again
    function updateVideo(e, id, item) {
        e.preventDefault();
        clearAlert();

        API.updateVideo(id, item)
            .then(() => {
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

    // Add video to the database and fetch all videos again
    function addVideo(e, item) {
        e.preventDefault();
        clearAlert();

        API.addVideo(item)
            .then(() => {
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

    // Update alert state
    function setAlertState(alertOn, alertType, alertState) {
        setAlert({
            ...alert,
            alertType: alertType,
            alertOn: alertOn,
            alertState: alertState
        });
    };

    // Clear the resetAlert timeout
    function clearAlert() {
        clearTimeout(alertTimeout);
    };

    // Reset the alert state
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