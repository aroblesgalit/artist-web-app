import React, { useRef } from "react";
import "../LoginForm/loginForm.css";
import { UserConsumer } from "../../utils/UserContext";

function SignupForm() {

    const passRef = useRef();
    const confirmPassRef = useRef();

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
                <UserConsumer>
                    {
                        value => {
                            return <button className="uk-button uk-button-default" onClick={(e) => value.handleSignup(e, passRef.current.value, confirmPassRef.current.value)}>create</button>
                        }
                    }
                </UserConsumer>
            </form>
        </div>
    )
}

export default SignupForm;