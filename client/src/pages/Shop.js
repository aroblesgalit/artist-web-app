import React from "react";
import ItemCard from "../components/ItemCard";
import { ItemConsumer } from "../utils/ItemContext";

function Shop() {
    return (
        <div className="main-container shop-container" uk-grid="true">
            <ItemConsumer>
                {
                    value => {
                        return value.items.map(item => {
                            return <ItemCard
                                key={item.id}
                                item={item}
                            />
                        })
                    }
                }
            </ItemConsumer>
        </div>
    )
}

export default Shop;