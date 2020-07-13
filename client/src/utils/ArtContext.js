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

    let alertTimeout;

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
        clearAlert();

        API.deleteArt(id)
            .then(res => {
                // console.log("Art deleted...", res);
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

    function updateArt(e, id, item) {
        e.preventDefault();
        clearAlert();

        API.updateArt(id, {
            name: item.name,
            img: item.img,
            medium: item.medium
        })
            .then(res => {
                // console.log("Art piece has been updated...", res.data);
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

    function addArt(e, item) {
        e.preventDefault();
        clearAlert();

        API.addArt({
            name: item.name,
            img: item.img,
            medium: item.medium
        })
            .then(res => {
                // console.log("Art added to portfolio...", res.data);
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

    function setAlertState(alertOn, alertType, alertState) {
        setAlert({
            ...alert,
            alertType: alertType,
            alertOn: alertOn,
            alertState: alertState
        });
    };

    function clearAlert() {
        clearTimeout(alertTimeout);
    };

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