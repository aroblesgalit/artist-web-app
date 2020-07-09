import React from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import "./pages.css";
import { UserConsumer } from "../utils/UserContext";

function Login() {
    return (
        <div className="main-container login-container">
            <UserConsumer>
                {
                    value => {
                        return value.userExists ? <LoginForm /> : <SignupForm />
                    }
                }
            </UserConsumer>
        </div>
    )
}

export default Login;