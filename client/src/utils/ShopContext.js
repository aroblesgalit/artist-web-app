import React from "react";
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

    return (
        <ShopContext.Provider
            value={{
                ...shop
            }}
        >
            {children}
        </ShopContext.Provider>
    );
}

// Consumer
const ShopConsumer = ShopContext.Consumer;

export { ShopProvider, ShopConsumer };