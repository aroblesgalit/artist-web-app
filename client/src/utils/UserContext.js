import React, { useState, useEffect } from "react";
import API from "./API";

const UserContext = React.createContext();

// Provider
function UserProvider(props) {

    const [user, setUser] = useState({
        userExists: false,
        isLoggedIn: false
    });

    useEffect(() => {
        fetchUser();
        getUserData();
    }, [])

    // Check if user exists
    async function fetchUser() {
        const user = await API.findUser();
        if (user.data) {
            setUser({
                ...user,
                userExists: true
            })
        } else {
            setUser({
                ...user,
                userExists: false
            })
        }
    }

    // Register user
    function handleSignup(e, password, confirmPassword) {
        e.preventDefault();

        if (password && confirmPassword) {
            if (password.length >= 6) {
                if (password === confirmPassword) {
                    API.createUser({
                        username: "johndoe",
                        password: password
                    }).then(res => {
                        console.log("Your account is now ready...", res);
                        window.location.replace("/admin");
                    }).catch(err => {
                        console.log("Failed signup...", err);
                    })
                } else {
                    console.log("Password doesn't match.");
                }
            } else {
                console.log("Password must be at least 6 characters long.");
            }
        } else {
            console.log("Please fill in both fields.");
        }
    }

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
                handleLogout: handleLogout,
                handleSignup: handleSignup
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
}

// Consumer
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };