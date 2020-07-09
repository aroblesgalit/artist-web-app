import React, { useState } from "react";
import "./pages.css";
import AdminTabs from "../components/AdminTabs";
import PortfolioAdmin from "../components/PortfolioAdmin";
import VideosAdmin from "../components/VideosAdmin";
import ShopAdmin from "../components/ShopAdmin";
import AboutAdmin from "../components/AboutAdmin";

function Admin() {

    const [activeTab, setActiveTab] = useState("portfolio");

    return (
        <div className="main-container">
            <AdminTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <PortfolioAdmin activeTab={activeTab} />
            <VideosAdmin activeTab={activeTab} />
            <ShopAdmin activeTab={activeTab} />
            <AboutAdmin activeTab={activeTab} />    
        </div>
    )
}

export default Admin;