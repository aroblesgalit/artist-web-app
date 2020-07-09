import React, { useState } from "react";
import "./pages.css";
import AdminTabs from "../components/AdminTabs";

function Admin() {

    const [activeTab, setActiveTab] = useState("portfolio");

    return (
        <div className="main-container">
            <AdminTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className={`portfolio-content ${activeTab === "portfolio" ? "show" : "hide"}`}><h1>portfolio</h1></div>
            <div className={`videos-content ${activeTab === "videos" ? "show" : "hide"}`}><h1>videos</h1></div>
            <div className={`shop-content ${activeTab === "shop" ? "show" : "hide"}`}><h1>shop</h1></div>
            <div className={`about-content ${activeTab === "about" ? "show" : "hide"}`}><h1>about</h1></div>
        </div>
    )
}

export default Admin;