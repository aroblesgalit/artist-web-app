import React, { Component } from "react";
import API from "./API";

const ItemContext = React.createContext();

// Provider
class ItemProvider extends Component {

    state = {
        items: [],
        cart: [],
        cartSubtotal: 0,
        cartShipping: 4,
        cartTotal: 0,
        cartCount: 0,
        alertOn: false,
        alertItem: "item",
        alertType: "none", // add, update, delete, none
        alertState: "none" // successful, fail, none
    };

    // Variable for timeout for alert reset
    alertTimeout;

    componentDidMount() {
        this.getAllItems();
    };

    // Fetch all the shop items from the database
    getAllItems = () => {
        API.getAllItems()
            .then(res => {
                this.setState(() => {
                    res.data.forEach(item => {
                        // Take all the items and declare and define variables for cartCount, inCart, cartTotal
                        item.soldOut = item.countInStock === 0 ? true : false;
                        item.cartCount = 0;
                        item.inCart = false;
                        item.cartTotal = 0;
                    });
                    // Set the state of items to data returned
                    return { items: res.data }
                })
            })
            .catch(err => {
                console.log("Something went wrong while fetching items...", err);
            })
    };

    // Get the item from the array based on id
    getItem = (arr, id) => {
        const item = arr.find(item => item._id === id);
        return item;
    };

    // Update item's inCart, cartCount, and cartTotal based on the given id
    // Then add this item into the cart
    // Add the totals
    addToCart = (id) => {
        let tempItems = [...this.state.items];
        const item = this.getItem(tempItems, id);
        item.inCart = true;
        item.cartCount = 1;
        item.cartTotal = item.price;
        this.setState(() => {
            return {
                items: tempItems,
                cart: [...this.state.cart, item]
            };
        }, () => {
            this.addTotals();
            console.log("Item added to cart, printing this.state.items: ", this.state.items);
        })
    };

    // Add the cart totals and update cartSubtotal, cartTotal, and cartCount
    addTotals = () => {
        let subtotal = 0;
        this.state.cart.map(item => (subtotal += item.cartTotal));
        const total = subtotal + this.state.cartShipping;
        let subCartCount = 0;
        this.state.cart.map(item => (subCartCount += item.cartCount));
        this.setState(() => {
            return {
                cartSubtotal: subtotal,
                cartTotal: total,
                cartCount: subCartCount
            }
        })
    };

    // Remove an item from the cart with the give id
    // Reset item's inCart, cartCount, and cartTotal
    // Then update items and cart and add the totals
    removeItem = (id) => {
        this.clearAlert();
        let tempItems = [...this.state.items];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item._id !== id);
        const item = this.getItem(tempItems, id);
        item.inCart = false;
        item.cartCount = 0;
        item.cartTotal = 0;
        this.setState(() => {
            return {
                items: [...tempItems],
                cart: [...tempCart]
            }
        }, () => {
            this.addTotals();
        });
        this.setAlert(true, "delete", "successful");
        this.resetAlert(3000);
    };

    // Update the item's cartCount and cartTotal based on the id and the passed value
    // Then add totals
    updateItemCount = (id, val) => {
        let tempCart = [...this.state.cart];
        const item = this.getItem(tempCart, id);
        item.cartCount = val;
        item.cartTotal = item.cartCount * item.price;
        this.setState(() => {
            return {
                cart: [...tempCart]
            }
        }, () => {
            this.addTotals();
        })
    };

    // Clear the cart and fetched items from the database
    // Then add the totals
    clearCart = () => {
        this.setState(() => {
            return {
                cart: []
            }
        }, () => {
            this.getAllItems();
            this.addTotals();
        })
    };

    // Update the items' (from cart) countInStock and sold values when paypal checkout is successful
    updateDataItems = () => {
        this.state.cart.forEach(item => {
            API.updateSoldItem({
                id: item._id,
                countInStock: item.countInStock - item.cartCount,
                sold: item.sold + item.cartCount
            }).then(() => {
                console.log("Data items updated.");
            }).catch(err => {
                console.log("Something went wrong while trying to update data items...", err);
            })
        })
    }

    // Add an item to shop
    addItem = (e, item) => {
        e.preventDefault();
        this.clearAlert();

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
                this.getAllItems();
                this.setAlert(true, "add", "successful");
                this.resetAlert(3000);
            })
            .catch(err => {
                console.log("Something went wrong while adding item to shop...", err);
                this.setAlert(true, "add", "fail");
                this.resetAlert(3000);
            })
    };

    // Update an item from shop
    updateItem = (e, id, item) => {
        e.preventDefault();
        this.clearAlert();

        API.updateItem(id, {
            name: item.name,
            img: item.img,
            price: item.price,
            size: item.size,
            print: item.print,
            info: item.info,
            countInStock: item.countInStock
        })
            .then(()=> {
                this.getAllItems();
                this.setAlert(true, "update", "successful");
                this.resetAlert(3000);
            })
            .catch(err => {
                console.log("Something went wrong while updating an item...", err);
                this.setAlert(true, "update", "fail");
                this.resetAlert(3000);
            })
    };

    // Delete an item from shop
    deleteItem = (e, id, page) => {
        e.preventDefault();
        this.clearAlert();

        API.deleteItem(id)
            .then(() => {
                this.getAllItems();
                this.setAlert(true, "delete", "successful");
                this.resetAlert(3000);
                if (page === "shop-view") {
                    window.location.replace("/admin");
                }
            })
            .catch(err => {
                console.log("Something went wrong while deleting an item...", err);
                this.setAlert(true, "delete", "fail");
                this.resetAlert(3000);
            })
    };

    // Update alert state
    setAlert = (alertOn, alertType, alertState) => {
        this.setState(() => {
            return {
                alertOn: alertOn,
                alertType: alertType,
                alertState: alertState
            }
        });
    };

    // Clear the resetAlert timeout
    clearAlert = () => {
        clearTimeout(this.alertTimeout);
    };

    // Reset alert state
    resetAlert = (delay) => {
        this.alertTimeout = setTimeout(() => {
            this.setState(() => {
                return {
                    alertOn: false,
                    alertType: "none",
                    alertState: "none"
                }
            });
        }, delay)
    };


    render() {
        return (
            <ItemContext.Provider
                value={{
                    ...this.state,
                    addToCart: this.addToCart,
                    handleDetail: this.handleDetail,
                    removeItem: this.removeItem,
                    updateItemCount: this.updateItemCount,
                    clearCart: this.clearCart,
                    updateDataItems: this.updateDataItems,
                    addItem: this.addItem,
                    updateItem: this.updateItem,
                    deleteItem: this.deleteItem,
                    getItem: this.getItem
                }}
            >
                {this.props.children}
            </ItemContext.Provider>
        )
    }
}

// Consumer
const ItemConsumer = ItemContext.Consumer;

export default ItemContext;
export { ItemProvider, ItemConsumer };