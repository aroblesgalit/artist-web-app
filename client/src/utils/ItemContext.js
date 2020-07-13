import React, { Component } from "react";
import API from "./API";

const ItemContext = React.createContext();

// Provider
class ItemProvider extends Component {

    state = {
        items: [],
        detailItem: {},
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

    componentDidMount() {
        this.getAllItems();
    };

    getAllItems = () => {
        API.getAllItems()
            .then(res => {
                this.setState(() => {
                    res.data.forEach(item => {
                        item.cartCount = 0;
                        item.inCart = false;
                        item.cartTotal = 0;
                    });
                    return { items: res.data }
                })
            })
            .catch(err => {
                console.log("Something went wrong while fetching items...", err);
            })
    };

    getItem = (arr, id) => {
        const item = arr.find(item => item._id === id);
        return item;
    };

    handleDetail = (id) => {
        const item = this.getItem(this.state.items, id);
        this.setState(() => {
            return { detailItem: item }
        })
    };

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
            console.log("Item added to cart...", this.state.cart);
        })
    };

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

    removeItem = (id) => {
        this.resetAlert(0);
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
        setTimeout(() => {
            this.setAlert(true, "delete", "successful");
        }, 500);
        this.resetAlert(3000);
    };

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
                this.getAllItems();
            })
            .catch(err => {
                console.log("Something went wrong while adding item to shop...", err);
            })
    };

    // Update an item from shop
    updateItem = (e, id, item) => {
        e.preventDefault();

        API.updateItem(id, {
            name: item.name,
            img: item.img,
            price: item.price,
            size: item.size,
            print: item.print,
            info: item.info,
            countInStock: item.countInStock
        })
            .then(res => {
                console.log("Item has been updated...", res.data);
                this.getAllItems();
            })
            .catch(err => {
                console.log("Something went wrong while updating an item...", err);
            })
    };

    // Delete an item from shop
    deleteItem = (e, id, page) => {
        e.preventDefault();
        this.resetAlert(0);

        API.deleteItem(id)
            .then(res => {
                console.log("Item deleted...", res);
                this.getAllItems();
                this.setAlert(true, "delete", "successful");
                this.resetAlert(3000);
                if (page === "shop-view") {
                    window.location.replace("/admin");
                }
            })
            .catch(err => {
                console.log("Something went wrong while deleting an item...", err);
            })
    };

    setAlert = (alertOn, alertType, alertState) => {
        this.setState(() => {
            return {
                alertOn: alertOn,
                alertType: alertType,
                alertState: alertState
            }
        });
    };

    resetAlert = (delay) => {
        setTimeout(() => {
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
                    deleteItem: this.deleteItem
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