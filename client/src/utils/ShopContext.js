import React, { useState, useEffect } from "react";
import API from "./API";

const ShopContext = React.createContext();

// Provider
function ShopProvider(props) {

    const { children } = props;

    const [shop, setShop] = useState({
        items: []
    });

    useEffect(() => {
        getAllItems();
    }, [])

    // Get all items from database
    function getAllItems() {
        API.getAllItems()
            .then(res => {
                setShop({
                    ...shop,
                    items: res.data
                })
            })
            .catch(err => {
                console.log("Something went wrong while fetching items...", err);
            })
    };

    // Add an item to shop
    function addItem(e, item) {
        e.preventDefault();

        API.addItem({
            name: item.name,
            img: item.img,
            price: item.price,
            size: item.size,
            print: item.print,
            info: item.info,
            countInStock: item.countInStock
        })
            .then(res => {
                console.log("Item added to shop...", res.data);
                getAllItems();
            })
            .catch(err => {
                console.log("Something went wrong while adding item to shop...", err);
            })
    }

    return (
        <ShopContext.Provider
            value={{
                ...shop,
                addItem
            }}
        >
            {children}
        </ShopContext.Provider>
    );
}

// Consumer
const ShopConsumer = ShopContext.Consumer;

export { ShopProvider, ShopConsumer };