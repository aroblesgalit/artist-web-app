import React, { useState, useEffect } from "react";
import API from "./API";

const ArtContext = React.createContext();

// Provider
function ArtProvider(props) {

    const [portfolio, setPortfolio] = useState({
        arts: [],
        viewArt: {}

    });

    const [alert, setAlert] = useState({
        alertItem: "art",
        alertType: "none", // add, update, delete, none
        alertOn: false,
        alertState: "none" // successful, fail, none
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
        resetAlert();

        API.deleteArt(id)
            .then(res => {
                // console.log("Art deleted...", res);
                getAllArts();
                setAlert({
                    ...alert,
                    alertType: "delete",
                    alertOn: true,
                    alertState: "successful"
                });
                resetAlert();
                if (page === "portfolio-view") {
                    window.location.replace("/admin");
                }
            })
            .catch(err => {
                console.log("Something went wrong while deleting an art piece...", err);
                setAlert({
                    ...alert,
                    alertType: "delete",
                    alertOn: true,
                    alertState: "fail"
                });
                resetAlert();
            })
    };

    function updateArt(e, id, item) {
        e.preventDefault();
        resetAlert();

        API.updateArt(id, {
            name: item.name,
            img: item.img,
            medium: item.medium
        })
            .then(res => {
                // console.log("Art piece has been updated...", res.data);
                getAllArts();
                setAlert({
                    ...alert,
                    alertType: "update",
                    alertOn: true,
                    alertState: "successful"
                });
                resetAlert();
            })
            .catch(err => {
                console.log("Something went wrong while updating an art piece...", err);
                setAlert({
                    ...alert,
                    alertType: "update",
                    alertOn: true,
                    alertState: "fail"
                });
                resetAlert();
            })
    };

    function addArt(e, item) {
        e.preventDefault();
        resetAlert();

        API.addArt({
            name: item.name,
            img: item.img,
            medium: item.medium
        })
            .then(res => {
                // console.log("Art added to portfolio...", res.data);
                getAllArts();
                setAlert({
                    ...alert,
                    alertType: "add",
                    alertOn: true,
                    alertState: "successful"
                });
                resetAlert();
            })
            .catch(err => {
                console.log("Something went wrong while adding art to portfolio...", err);
                setAlert({
                    ...alert,
                    alertType: "add",
                    alertOn: true,
                    alertState: "fail"
                });
                resetAlert();
            })
    };

    function resetAlert() {
        setTimeout(() => {
            setAlert({
                alertItem: "art",
                alertType: "none",
                alertOn: false,
                alertState: "none"
            })
        }, 3000);
    }

    return (
        <ArtContext.Provider
            value={{
                ...portfolio,
                ...alert,
                handleView,
                deleteArt,
                updateArt,
                addArt
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