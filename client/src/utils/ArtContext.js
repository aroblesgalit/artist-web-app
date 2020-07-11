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
        console.log("Art for view: ", art);
        setPortfolio({
            ...portfolio,
            viewArt: art
        })
    };

    function deleteArt(e, id, page) {
        e.preventDefault();

        API.deleteArt(id)
            .then(res => {
                console.log("Art deleted...", res);
                getAllArts();
                if (page === "portfolio-view") {
                    window.location.replace("/admin");
                }
            })
            .catch(err => {
                console.log("Something went wrong while deleting an art piece...", err);
            })
    };

    function updateArt(e, id, item) {
        e.preventDefault();

        API.updateArt(id, {
            name: item.name,
            img: item.img,
            medium: item.medium
        })
            .then(res => {
                console.log("Art piece has been updated...", res.data);
                getAllArts();
            })
            .catch(err => {
                console.log("Something went wrong while updating an art piece...", err);
            })
    }

    return (
        <ArtContext.Provider
            value={{
                ...portfolio,
                handleView,
                deleteArt,
                updateArt
            }}
        >
            {props.children}
        </ArtContext.Provider>
    );
}

// Consumer
const ArtConsumer = ArtContext.Consumer;

export default ArtContext;
export { ArtProvider, ArtConsumer };