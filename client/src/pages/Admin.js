import React, { useState } from "react";
import "./pages.css";

function Admin() {

    const [activeTab, setActiveTab] = useState("portfolio");

    return (
        <div className="main-container">
            <div className="admin-tabs">
                <ul uk-tab="true">
                    <li className={`${activeTab === "portfolio" ? "active" : ""}`} onClick={() => setActiveTab("portfolio")}>portfolio</li>
                    <li className={`${activeTab === "videos" ? "active" : ""}`} onClick={() => setActiveTab("videos")}>videos</li>
                    <li className={`${activeTab === "shop" ? "active" : ""}`} onClick={() => setActiveTab("shop")}>shop</li>
                    <li className={`${activeTab === "about" ? "active" : ""}`} onClick={() => setActiveTab("about")}>about</li>
                </ul>
            </div>
            <div className={`portfolio-content ${activeTab === "portfolio" ? "show" : "hide"}`}><h1>portfolio</h1></div>
            <div className={`videos-content ${activeTab === "videos" ? "show" : "hide"}`}><h1>videos</h1></div>
            <div className={`shop-content ${activeTab === "shop" ? "show" : "hide"}`}><h1>shop</h1></div>
            <div className={`about-content ${activeTab === "about" ? "show" : "hide"}`}><h1>about</h1></div>
        </div>
    )
}

export default Admin;