import React from "react";
import { Redirect } from "react-router-dom";
import { UserConsumer } from "../../utils/UserContext";

function ProtectedRoute(props) {

    const Component = props.Component;

    return (
        <UserConsumer>
            {
                value => {
                    return value.isLoggedIn ? (
                        <Component />
                    ) : (
                            <Redirect to="/admin-login" />
                        )
                }
            }
        </UserConsumer>
    )
}

export default ProtectedRoute;