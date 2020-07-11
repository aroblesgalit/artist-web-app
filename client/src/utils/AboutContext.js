import React, { useState } from "react";

const AboutContext = React.createContext();

// Provider
function AboutProvider(props) {

    const [about, _] = useState({
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
    });

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

export { AboutProvider, AboutConsumer };