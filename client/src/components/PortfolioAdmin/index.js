import React from "react";

function PortfolioAdmin(props) {

    const { activeTab } = props;

    return (
        <div className={`portfolio-content ${activeTab === "portfolio" ? "show" : "hide"}`}>
            <h1>portfolio</h1>
        </div>
    )
}

export default PortfolioAdmin;