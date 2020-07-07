import React from "react";
import ItemCard from "../components/ItemCard";
import { fakeData } from "../fakeData";

function Shop() {
    return (
        <div className="main-container shop-container" uk-grid="true">
            {
                fakeData.map(item => {
                    return <ItemCard 
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        size={item.size}
                        img={item.img}
                        price={item.price}
                        countInStock={item.countInStock}
                    />
                })
            }
        </div>
    )
}

export default Shop;