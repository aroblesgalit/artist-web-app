import React, { useRef } from "react";
import "./loginForm.css";
import API from "../../utils/API";

function LoginForm() {

    const passwordRef = useRef();

    function handleLogin(e) {
        e.preventDefault();

        const password = passwordRef.current.value;

        API.loginUser({
            username: "johndoe",
            password: password
        }).then(res => {
                console.log("Logged in succesfully...", res);
                window.location.replace("/shop");
            }).catch(err => {
                console.log("Something went wrong while logging in...", err);
            })
    }

    return (
        <div className="login-form-container">
            <h1 className="page-heading uk-text-center">Login</h1>
            <p className="uk-text-center">Hi John Doe! Welcome back!</p>
            <form className="uk-form-stacked uk-flex uk-flex-column uk-flex-bottom">
                <div className="uk-margin uk-width-expand">
                    <label className="uk-form-label" htmlFor="password">password</label>
                    <div className="uk-form-controls">
                        <input className="uk-input" id="password" type="password" placeholder="***********" ref={passwordRef} />
                    </div>
                </div>
                <button className="uk-button uk-button-default" onClick={handleLogin}>log in</button>
            </form>
        </div>
    )
}

export default LoginForm;