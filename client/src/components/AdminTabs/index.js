import React from "react";

function AdminTabs(props) {

    const { activeTab, setActiveTab } = props;

    return (
        <div className="admin-tabs uk-positon-relative">
            <ul uk-tab="true">
                <li className={`${activeTab === "portfolio" ? "active" : ""}`} onClick={() => setActiveTab("portfolio")}>portfolio</li>
                <li className={`${activeTab === "videos" ? "active" : ""}`} onClick={() => setActiveTab("videos")}>videos</li>
                <li className={`${activeTab === "shop" ? "active" : ""}`} onClick={() => setActiveTab("shop")}>shop</li>
                <li className={`${activeTab === "about" ? "active" : ""}`} onClick={() => setActiveTab("about")}>about</li>
            </ul>
        </div>
    )
}

export default AdminTabs;