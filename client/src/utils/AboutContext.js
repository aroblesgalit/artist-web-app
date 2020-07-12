import React, { useState, useEffect } from "react";
import API from "./API";

const AboutContext = React.createContext();

// Provider
function AboutProvider(props) {

    const [about, setAbout] = useState({
        content: {}
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
                        content: res.data[0]
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
    }

    return (
        <AboutContext.Provider
            value={{
                ...about
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