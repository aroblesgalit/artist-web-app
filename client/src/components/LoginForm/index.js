import React from "react";
import "./loginForm.css";

function LoginForm() {
    return (
        <div className="login-form-container">
            <h1 className="page-heading uk-text-center">Login</h1>
            <p className="uk-text-center">Hi John Doe! Welcome back!</p>
            <form className="uk-form-stacked uk-flex uk-flex-column uk-flex-bottom">
                <div className="uk-margin uk-width-expand">
                    <label className="uk-form-label" for="password">password</label>
                    <div className="uk-form-controls">
                        <input className="uk-input" id="password" type="password" placeholder="***********" />
                    </div>
                </div>
                <button className="uk-button uk-button-default">log in</button>
            </form>
        </div>
    )
}

export default LoginForm;