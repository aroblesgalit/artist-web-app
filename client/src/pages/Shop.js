import React from "react";
import ItemCard from "../components/ItemCard";

function Shop() {
    return (
        <div className="main-container shop-container" uk-grid="true">
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
        </div>
    )
}

export default Shop;