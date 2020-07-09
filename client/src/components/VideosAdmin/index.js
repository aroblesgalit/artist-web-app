import React from "react";

function VideosAdmin(props) {

    const { activeTab } = props;

    return (
        <div className={`videos-content ${activeTab === "videos" ? "show" : "hide"}`}>
            <h1>videos</h1>
        </div>
    )
}

export default VideosAdmin;