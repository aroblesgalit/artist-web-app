import React, { Component } from "react";
import { fakeData } from "../fakeData";

const ItemContext = React.createContext();

// Provider
class ItemProvider extends Component {

    state = {
        items: []
    };

    componentDidMount() {
        this.setItems();
    };

    setItems = () => {
        let tempItems = [];
        fakeData.forEach(item => {
            const singleItem = { ...item };
            tempItems = [...tempItems, singleItem];
        });
        this.setState(() => {
            return { items: tempItems }
        });
    };

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