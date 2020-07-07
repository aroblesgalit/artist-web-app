import React from "react";
import "./pages.css";
import API from "../utils/API";

function Admin() {

    function handleLogout() {
        API.logoutUser()
            .then(() => {
                window.location.reload(false);
            })
            .catch(err => {
                console.log("Something went wrong while logging out...", err);
            })
    }

    return (
        <div className="main-container">
            <button onClick={handleLogout}>Log out</button>
            <h1>Admin</h1>
        </div>
    )
}

export default Admin;