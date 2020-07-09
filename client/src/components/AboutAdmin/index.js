import React from "react";

function AboutAdmin(props) {

    const { activeTab } = props;

    return (
        <div className={`about-content ${activeTab === "about" ? "show" : "hide"}`}>
            <h1>about</h1>
        </div>
    )
}

export default AboutAdmin;