import React, { useState, useEffect } from "react";
import API from "./API";

const UserContext = React.createContext();

// Provider
function UserProvider(props) {

    const [user, setUser] = useState({
        isLoggedIn: false
    });

    useEffect(() => {
        getUserData();
    }, [])

    // Log user in

    // Log user out
    function handleLogout() {
        API.logoutUser()
            .then(() => {
                setUser({
                    ...user,
                    isLoggedIn: false
                })
            })
            .catch(err => {
                console.log("Something went wrong while logging out...", err);
            })
    }

    // Get user data to check if logged in
    function getUserData() {
        API.getUserData()
            .then(() => {
                setUser({
                    ...user,
                    isLoggedIn: true
                })
            })
            .catch(() => {
                setUser({
                    ...user,
                    isLoggedIn: false
                })
            })
    };

    return (
        <UserContext.Provider
            value={{
                ...user,
                handleLogout: handleLogout
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
}

// Consumer
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };