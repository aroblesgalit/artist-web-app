import React, { useState, useEffect } from "react";
import API from "./API";

const ArtContext = React.createContext();

// Provider
function ArtProvider(props) {

    const [portfolio, setPortfolio] = useState({
        arts: []
    });

    useEffect(() => {
        getAllArts();
    }, [])

    function getAllArts() {
        API.getAllArts()
            .then(res => {
                setPortfolio({
                    ...portfolio,
                    arts: res.data
                })
            })
    }

    return (
        <ArtContext.Provider
            value={{
                ...portfolio
            }}
        >
            {props.children}
        </ArtContext.Provider>
    );
}

// Consumer
const ArtConsumer = ArtContext.Consumer;

export { ArtProvider, ArtConsumer };