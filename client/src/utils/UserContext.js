import React, { useState, useEffect } from "react";
import API from "./API";

const UserContext = React.createContext();

// Provider
function UserProvider(props) {

    const [userExists, setUserExists] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activeTab, setActiveTab] = useState("portfolio");

    useEffect(() => {
        findUser();
        checkLoginStatus();
    }, [])

    function handleTabChange(tab) {
        setActiveTab(tab);
    };

    // Check if user exists
    async function findUser() {
        const user = await API.findUser();
        if (user.data) {
            setUserExists(true);
        } else {
            setUserExists(false);
        }
    };

    // Get user data to check if logged in
    function checkLoginStatus() {
        API.getUserData()
            .then(() => {
                setIsLoggedIn(true);
            })
            .catch(() => {
                setIsLoggedIn(false);
            })
    };

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
                        findUser();
                        checkLoginStatus();
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
    };

    // Log user in
    function handleLogin(e, password) {
        e.preventDefault();

        API.loginUser({
            username: "johndoe",
            password: password
        }).then(res => {
            console.log("Logged in successfully...", res);
            checkLoginStatus();
        }).catch(err => {
            console.log("Something went wrong while loggin in...", err);
            checkLoginStatus();
        })
    };

    // Log user out
    function handleLogout() {
        API.logoutUser()
            .then(() => {
                checkLoginStatus();
            })
            .catch(err => {
                console.log("Something went wrong while logging out...", err);
            })
    };

    return (
        <UserContext.Provider
            value={{
                userExists,
                isLoggedIn,
                activeTab,
                handleLogout,
                handleSignup,
                handleLogin,
                handleTabChange
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
}

// Consumer
const UserConsumer = UserContext.Consumer;

export default UserContext;
export { UserProvider, UserConsumer };