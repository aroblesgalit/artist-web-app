import React from "react";
import "./pages.css";
import { AboutConsumer } from "../utils/AboutContext";

function Home() {
    return (
        <div className="main-container">
            <AboutConsumer>
                {
                    value => {
                        const { imgHome, name } = value.content;
                        return (
                            <img src={imgHome} alt={name} />
                        )
                    }
                }
            </AboutConsumer>
        </div>
    )
}

export default Home;