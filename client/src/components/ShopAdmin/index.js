import React from "react";

function ShopAdmin(props) {

    const { activeTab } = props;

    return (
        <div className={`shop-content ${activeTab === "shop" ? "show" : "hide"}`}>
            <h1>shop</h1>
        </div>
    )
}

export default ShopAdmin;