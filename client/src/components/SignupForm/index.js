import React, { useRef } from "react";
import "../LoginForm/loginForm.css";
import API from "../../utils/API";

function SignupForm() {

    const passRef = useRef();
    const confirmPassRef = useRef();

    function handleSignup(e) {
        e.preventDefault();

        const password = passRef.current.value;
        const confirmPassword = confirmPassRef.current.value;

        if (password && confirmPassword) {
            if (password.length >= 6) {
                if (password === confirmPassword) {
                    API.createUser({
                        username: "johndoe",
                        password: password
                    }).then(function (res) {
                            console.log("Your account is now ready...", res);
                            window.location.replace("/admin");
                        }).catch(function (err) {
                            console.log("Failed signup...", err);
                        })
                } else {
                    console.log("Password doesn't match.")
                }
            } else {
                console.log("Password is too short. Must be at least 6 characters long.")
            }
        } else {
            console.log("Fill in all fields.")
        }
    }

    return (
        <div className="login-form-container">
            <h1 className="page-heading uk-text-center">Create Account</h1>
            <p className="uk-text-center">Welcome John Doe! Let's create your account.</p>
            <form className="uk-form-stacked uk-flex uk-flex-column uk-flex-bottom">
                <div className="uk-margin uk-width-expand">
                    <label className="uk-form-label" htmlFor="password">password</label>
                    <div className="uk-form-controls">
                        <input className="uk-input" id="password" type="password" placeholder="***********" ref={passRef} />
                    </div>
                </div>
                <div className="uk-margin uk-width-expand">
                    <label className="uk-form-label" htmlFor="confirmPassword">confirm password</label>
                    <div className="uk-form-controls">
                        <input className="uk-input" id="confirmPassword" type="password" placeholder="***********" ref={confirmPassRef} />
                    </div>
                </div>
                <button className="uk-button uk-button-default" onClick={handleSignup}>create</button>
            </form>
        </div>
    )
}

export default SignupForm;