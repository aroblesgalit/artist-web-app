import React, { useState, useEffect } from "react";
import API from "./API";

const ArtContext = React.createContext();

// Provider
function ArtProvider(props) {

    const [portfolio, setPortfolio] = useState({
        arts: [],
        viewArt: {}

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
            .catch(err => {
                console.log("Something went wrong while fetching arts...", err);
            })
    }

    function getArtById(id) {
        return portfolio.arts.find(art => art._id === id);
    }

    function handleView(id) {
        const art = getArtById(id);
        setPortfolio({
            ...portfolio,
            viewArt: art
        })
    }

    return (
        <ArtContext.Provider
            value={{
                ...portfolio,
                handleView
            }}
        >
            {props.children}
        </ArtContext.Provider>
    );
}

// Consumer
const ArtConsumer = ArtContext.Consumer;

export { ArtProvider, ArtConsumer };