import React, { useState, useEffect } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import "./pages.css";
import API from "../utils/API";

function Login() {

    const [userExists, setUserExists] = useState(true);

    useEffect(() => {
        fetchUser();
    }, [])

    async function fetchUser() {
        const user = await API.findUser();
        if (user.data) {
            setUserExists(true);
        } else {
            setUserExists(false);
        }
    }

    return (
        <div className="main-container login-container">
            {
                userExists ? <LoginForm /> : <SignupForm />
            }
        </div>
    )
}

export default Login;