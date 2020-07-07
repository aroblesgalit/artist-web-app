import React from "react";
import "../LoginForm/loginForm.css";

function SignupForm() {
    return (
        <div className="login-form-container">
            <h1 className="page-heading uk-text-center">Create Account</h1>
            <p className="uk-text-center">Welcome John Doe! Let's create your account.</p>
            <form className="uk-form-stacked uk-flex uk-flex-column uk-flex-bottom">
                <div className="uk-margin uk-width-expand">
                    <label className="uk-form-label" for="password">password</label>
                    <div className="uk-form-controls">
                        <input className="uk-input" id="password" type="password" placeholder="***********" />
                    </div>
                </div>
                <div className="uk-margin uk-width-expand">
                    <label className="uk-form-label" for="confirmPassword">confirm password</label>
                    <div className="uk-form-controls">
                        <input className="uk-input" id="confirmPassword" type="password" placeholder="***********" />
                    </div>
                </div>
                <button className="uk-button uk-button-default">create</button>
            </form>
        </div>
    )
}

export default SignupForm;