import React from "react";
import "./pages.css";
import { UserConsumer } from "../utils/UserContext";

function Home() {
    return (
        <div className="main-container">
            <UserConsumer>
                {
                    value => {
                        return (
                            <img
                                src={value.userInfo.imgHome || "https://via.placeholder.com/900x1230"}
                                alt={value.userInfo.name || "john doe"}
                            />
                        )
                    }
                }
            </UserConsumer>
        </div>
    )
}

export default Home;