import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./pages.css";
import ShopAddForm from "../components/ShopAddForm";
import ItemContext from "../utils/ItemContext";
import Alert from "../components/Alert";

function AddShop() {

    const { alertOn, alertItem, alertType, alertState } = useContext(ItemContext);

    return (
        <div className="main-container shop-add-container">
            <Link to="/admin" className="uk-flex uk-flex-middle">
                <span uk-icon="icon: arrow-left" /><span className="text-link uk-margin-small-left" >back to admin</span>
            </Link>
            <h1>add new item</h1>
            <ShopAddForm />
            <Alert
                alertOn={alertOn}
                alertItem={alertItem}
                alertType={alertType}
                alertState={alertState}
            />
        </div>
    )
}

export default AddShop;