import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./pages.css";
import PortfolioAddForm from "../components/PortfolioAddForm";
import ArtContext from "../utils/ArtContext";
import Alert from "../components/Alert";

function AddPortfolio() {

    const { alertOn, alertItem, alertType, alertState } = useContext(ArtContext);

    return (
        <div className="main-container portfolio-add-container">
            <Link to="/admin" className="uk-flex uk-flex-middle">
                <span uk-icon="icon: arrow-left" /><span className="text-link uk-margin-small-left" >back to admin</span>
            </Link>
            <h1>add new art</h1>
            <PortfolioAddForm />
            <Alert
                alertOn={alertOn}
                alertItem={alertItem}
                alertType={alertType}
                alertState={alertState}
            />
        </div>
    )
}

export default AddPortfolio;