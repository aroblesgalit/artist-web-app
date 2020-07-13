import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./pages.css";
import AdminTabs from "../components/AdminTabs";
import PortfolioAdmin from "../components/PortfolioAdmin";
import VideosAdmin from "../components/VideosAdmin";
import ShopAdmin from "../components/ShopAdmin";
import AboutAdmin from "../components/AboutAdmin";
import AddButton from "../components/AddButton";
import { UserConsumer } from "../utils/UserContext";

function Admin() {
    return (
        <div className="main-container">
            <UserConsumer>
                {
                    value => {
                        const {activeTab} = value;
                        return (
                            <React.Fragment>
                                <AdminTabs />
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
                            </React.Fragment>
                        )
                    }
                }
            </UserConsumer>
        </div>
    )
}

export default Admin;