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
            <div><h1>portfolio</h1></div>
            <div><h1>videos</h1></div>
            <div><h1>shop</h1></div>
            <div><h1>about</h1></div>
        </div>
    )
}

export default Admin;