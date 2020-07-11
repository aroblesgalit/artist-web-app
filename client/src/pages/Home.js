import React from "react";
import "./pages.css";
import { AboutConsumer } from "../utils/AboutContext";

function Home() {
    return (
        <div className="main-container">
            <AboutConsumer>
                {
                    value => {
                        return (
                            <img
                                src={value.imgHome || "https://via.placeholder.com/900x1230"}
                                alt={value.name || "john doe"}
                            />
                        )
                    }
                }
            </AboutConsumer>
        </div>
    )
}

export default Home;