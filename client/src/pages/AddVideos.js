import React from "react";
import { Link } from "react-router-dom";
import "./pages.css";
import VideoAddForm from "../components/VideoAddForm";

function AddVideos() {
    return (
        <div className="main-container videos-add-container">
            <Link to="/admin" className="uk-flex uk-flex-middle">
                <span uk-icon="icon: arrow-left" /><span className="text-link uk-margin-small-left" >back to admin</span>
            </Link>
            <h1>add new item</h1>
            <VideoAddForm />
        </div>
    )
}

export default AddVideos;