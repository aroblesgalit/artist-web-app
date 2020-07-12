import React from "react";
import { UserConsumer } from "../../utils/UserContext";

function AdminTabs() {

    // const { activeTab, setActiveTab } = props;

    return (
        <div className="admin-tabs uk-positon-relative">
            <UserConsumer>
                {
                    value => {
                        const { activeTab, handleTabChange } = value;
                        return (
                            <ul uk-tab="true">
                                <li className={`${activeTab === "portfolio" ? "active" : ""}`} onClick={() => handleTabChange("portfolio")}>portfolio</li>
                                <li className={`${activeTab === "videos" ? "active" : ""}`} onClick={() => handleTabChange("videos")}>videos</li>
                                <li className={`${activeTab === "shop" ? "active" : ""}`} onClick={() => handleTabChange("shop")}>shop</li>
                                <li className={`${activeTab === "about" ? "active" : ""}`} onClick={() => handleTabChange("about")}>about</li>
                            </ul>
                        )
                    }
                }
            </UserConsumer>
        </div>
    )
}

export default AdminTabs;