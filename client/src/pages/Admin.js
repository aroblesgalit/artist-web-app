import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./pages.css";
import AdminTabs from "../components/AdminTabs";
import PortfolioAdmin from "../components/PortfolioAdmin";
import VideosAdmin from "../components/VideosAdmin";
import ShopAdmin from "../components/ShopAdmin";
import AboutAdmin from "../components/AboutAdmin";
import AddButton from "../components/AddButton";


function Admin() {

    const [activeTab, setActiveTab] = useState("portfolio");

    return (
        <div className="main-container">
            <AdminTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            {
                activeTab !== "about" ? (
                    <Link to={`/admin/${activeTab}-add`}>
                        <AddButton />
                    </Link>
                ) : ""
            }
            <PortfolioAdmin activeTab={activeTab} />
            <VideosAdmin activeTab={activeTab} />
            <ShopAdmin activeTab={activeTab} />
            <AboutAdmin activeTab={activeTab} />
        </div>
    )
}

export default Admin;