import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./pages.css";
import VideoAddForm from "../components/VideoAddForm";
import VideoContext from "../utils/VideoContext";
import Alert from "../components/Alert";

function AddVideos() {

    const { alertOn, alertItem, alertType, alertState } = useContext(VideoContext);

    return (
        <div className="main-container videos-add-container">
            <Link to="/admin" className="uk-flex uk-flex-middle">
                <span uk-icon="icon: arrow-left" /><span className="text-link uk-margin-small-left" >back to admin</span>
            </Link>
            <h1>add new item</h1>
            <VideoAddForm />
            <Alert
                alertOn={alertOn}
                alertItem={alertItem}
                alertType={alertType}
                alertState={alertState}
            />
        </div>
    )
}

export default AddVideos;