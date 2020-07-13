import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./pages.css";
import VideoViewForm from "../components/VideoViewForm";
import VideoContext from "../utils/VideoContext";
import Alert from "../components/Alert";

function ViewPortfolio() {

    const { alertOn, alertItem, alertType, alertState } = useContext(VideoContext);

    return (
        <div className="main-container portfolio-add-container">
            <Link to="/admin" className="uk-flex uk-flex-middle">
                <span uk-icon="icon: arrow-left" /><span className="text-link uk-margin-small-left" >back to admin</span>
            </Link>
            <h1>view/edit video</h1>
            <VideoViewForm />
            <Alert
                alertOn={alertOn}
                alertItem={alertItem}
                alertType={alertType}
                alertState={alertState}
            />
        </div>
    )
}

export default ViewPortfolio;