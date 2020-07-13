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

    // Variable for timeout for alert reset
    let alertTimeout;

    useEffect(() => {
        getAllArts();
    }, [])

    // Fetch all the art items from the database and set arts state to data returned
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

    // Get an art item by given id
    function getArtById(id) {
        return portfolio.arts.find(art => art._id === id);
    }

    // Set the viewArt state to the art item of given id
    function handleView(id) {
        const art = getArtById(id);
        setPortfolio({
            ...portfolio,
            viewArt: art
        })
    };

    // Delete art item from database and then fetch all arts again
    function deleteArt(e, id, page) {
        e.preventDefault();
        clearAlert();

        API.deleteArt(id)
            .then(() => {
                getAllArts();
                setAlertState(true, "delete", "successful");
                resetAlert(3000);
                if (page === "portfolio-view") {
                    window.location.replace("/admin");
                }
            })
            .catch(err => {
                console.log("Something went wrong while deleting an art piece...", err);
                setAlertState(true, "delete", "fail");
                resetAlert(3000);
            })
    };

    // Update art item in the database and then fetch all arts again
    function updateArt(e, id, item) {
        e.preventDefault();
        clearAlert();

        API.updateArt(id, {
            name: item.name,
            img: item.img,
            medium: item.medium
        })
            .then(() => {
                getAllArts();
                setAlertState(true, "update", "successful");
                resetAlert(3000);
            })
            .catch(err => {
                console.log("Something went wrong while updating an art piece...", err);
                setAlertState(true, "update", "fail");
                resetAlert(3000);
            })
    };

    // Add art item to the database and then fetch all arts again
    function addArt(e, item) {
        e.preventDefault();
        clearAlert();

        API.addArt({
            name: item.name,
            img: item.img,
            medium: item.medium
        })
            .then(() => {
                getAllArts();
                setAlertState(true, "add", "successful");
                resetAlert(3000);
            })
            .catch(err => {
                console.log("Something went wrong while adding art to portfolio...", err);
                setAlertState(true, "add", "fail");
                resetAlert(3000);
            })
    };

    // Update the alert state
    function setAlertState(alertOn, alertType, alertState) {
        setAlert({
            ...alert,
            alertType: alertType,
            alertOn: alertOn,
            alertState: alertState
        });
    };

    // Clear the resetAlert timeout
    function clearAlert() {
        clearTimeout(alertTimeout);
    };

    // Reset the alert state
    function resetAlert(delay) {
        alertTimeout = setTimeout(() => {
            setAlert({
                ...alert,
                alertType: "none",
                alertOn: false,
                alertState: "none"
            })
        }, delay);
    };

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