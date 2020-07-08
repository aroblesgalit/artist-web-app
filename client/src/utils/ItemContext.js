import React, { Component } from "react";
import API from "./API";

const ItemContext = React.createContext();

// Provider
class ItemProvider extends Component {

    state = {
        items: [],
        isLoggedIn: false,
        cart: [],
        cartSubtotal: 0,
        cartShipping: 4,
        cartTotal: 0
    };

    componentDidMount() {
        this.getAllItems();
        this.getUserData();
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
                    console.log(res.data);
                    return { items: res.data }
                })
            })
            .catch(err => {
                console.log("Something went wrong while fetching items...", err);
            })
    };

    getUserData = () => {
        API.getUserData()
            .then(() => {
                this.setState(() => {
                    return { isLoggedIn: true }
                })
            })
            .catch(() => {
                this.setState(() => {
                    return { isLoggedIn: false }
                })
            })
    }

    getItem = (arr, id) => {
        const item = arr.find(item => item._id === id);
        return item;
    }

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
        this.setState(() => {
            return {
                cartSubtotal: subtotal,
                cartTotal: total
            }
        })
    };

    render() {
        return (
            <ItemContext.Provider
                value={{
                    ...this.state,
                    addToCart: this.addToCart
                }}
            >
                {this.props.children}
            </ItemContext.Provider>
        )
    }
}

// Consumer
const ItemConsumer = ItemContext.Consumer;

export { ItemProvider, ItemConsumer };