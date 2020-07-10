import React from "react";
import { Link } from "react-router-dom";
import "./pages.css";
import ShopViewForm from "../components/ShopViewForm";

function ViewShop() {
    return (
        <div className="main-container shop-add-container">
            <Link to="/admin" className="uk-flex uk-flex-middle">
                <span uk-icon="icon: arrow-left" /><span className="text-link uk-margin-small-left" >back to admin</span>
            </Link>
            <h1>view/edit item</h1>
            <ShopViewForm />
        </div>
    )
}

export default ViewShop;