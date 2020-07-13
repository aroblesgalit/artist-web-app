import React, { useState, useEffect } from "react";
import API from "./API";

const AboutContext = React.createContext();

// Provider
function AboutProvider(props) {

    const [about, setAbout] = useState({
        content: {},
        contentExists: false
    });

    const [alert, setAlert] = useState({
        alertItem: "About content",
        alertType: "none", // add, update
        alertOn: false,
        alertState: "none" // successful, fail, none
    });

    useEffect(() => {
        getAbout();
    }, [])

    function getAbout() {
        API.getAbout()
            .then(res => {
                if (res.data.length > 0) {
                    setAbout({
                        ...about,
                        content: res.data[0],
                        contentExists: true
                    })
                } else {
                    setAbout({
                        ...about,
                        content: {
                            name: "john doe",
                            email: "johndoe@email.com",
                            phone: 5555555555,
                            about: "Here's my story",
                            socialMedias: [
                                {
                                    id: "1",
                                    link: "instagram.com/johndoe"
                                },
                                {
                                    id: "2",
                                    link: "facebook.com/johndoe"
                                },
                                {
                                    id: "3",
                                    link: "youtube.com/johndoe"
                                },
                                {
                                    id: "4",
                                    link: "twitter.com/johndoe"
                                }
                            ],
                            imgHome: "https://via.placeholder.com/900x1230",
                            imgAboutTop: "https://via.placeholder.com/900x700",
                            imgAboutBot: "https://via.placeholder.com/900x700"
                        }
                    })
                }
            })
            .catch(err => {
                console.log("Something went wrong while fetching about data...", err);
            })
    };

    function addAbout(e, data) {
        e.preventDefault();

        API.addAbout(data)
            .then(res => {
                console.log("About content added...", res.data);
                getAbout();
            })
            .catch(err => {
                console.log("Something went wrong while adding about content...", err);
            })
    };

    function updateAbout(e, id, data) {
        e.preventDefault();
        resetAlert();

        API.updateAbout(id, data)
            .then(res => {
                console.log("The about content has been updated...", res.data);
                getAbout();
                setAlert({
                    ...alert,
                    alertType: "update",
                    alertOn: true,
                    alertState: "successful"
                });
                resetAlert();
            })
            .catch(err => {
                console.log("Something went wrong while updating the about content...", err);
            })
    };

    function resetAlert() {
        setTimeout(() => {
            setAlert({
                alertItem: "About content",
                alertType: "none",
                alertOn: false,
                alertState: "none"
            })
        }, 3000);
    };

    return (
        <AboutContext.Provider
            value={{
                ...about,
                ...alert,
                addAbout,
                updateAbout
            }}
        >
            {props.children}
        </AboutContext.Provider>
    );
}

// Consumer
const AboutConsumer = AboutContext.Consumer;

export default AboutContext;
export { AboutProvider, AboutConsumer };