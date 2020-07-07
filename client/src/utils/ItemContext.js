import React, { Component } from "react";
import API from "./API";

const ItemContext = React.createContext();

// Provider
class ItemProvider extends Component {

    state = {
        items: [],
        isLoggedIn: false
    };

    componentDidMount() {
        this.getAllItems();
        this.getUserData();
    };

    getAllItems = () => {
        API.getAllItems()
            .then(res => {
                this.setState(() => {
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

    render() {
        return (
            <ItemContext.Provider
                value={{
                    ...this.state
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