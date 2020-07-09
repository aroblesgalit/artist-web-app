import React from "react";
import "./pages.css";
import { UserConsumer } from "../utils/UserContext";

function Admin() {

    return (
        <div className="main-container">
            <UserConsumer>
                {
                    value => {
                        return <button onClick={value.handleLogout}>Log out</button>
                    }
                }
            </UserConsumer>
            <h1>Admin</h1>
        </div>
    )
}

export default Admin;