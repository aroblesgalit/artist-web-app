import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./pages.css";
import ShopViewForm from "../components/ShopViewForm";
import ItemContext from "../utils/ItemContext";
import Alert from "../components/Alert";

function ViewShop() {

    const { alertOn, alertItem, alertType, alertState } = useContext(ItemContext);

    return (
        <div className="main-container shop-add-container">
            <Link to="/admin" className="uk-flex uk-flex-middle">
                <span uk-icon="icon: arrow-left" /><span className="text-link uk-margin-small-left" >back to admin</span>
            </Link>
            <h1>view/edit item</h1>
            <ShopViewForm />
            <Alert
                alertOn={alertOn}
                alertItem={alertItem}
                alertType={alertType}
                alertState={alertState}
            />
        </div>
    )
}

export default ViewShop;