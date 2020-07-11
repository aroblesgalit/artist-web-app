import React from "react";
import { Link } from "react-router-dom";
import "./pages.css";
import PortfolioViewForm from "../components/PortfolioViewForm";

function ViewPortfolio() {
    return (
        <div className="main-container portfolio-add-container">
            <Link to="/admin" className="uk-flex uk-flex-middle">
                <span uk-icon="icon: arrow-left" /><span className="text-link uk-margin-small-left" >back to admin</span>
            </Link>
            <h1>view/edit item</h1>
            <PortfolioViewForm />
        </div>
    )
}

export default ViewPortfolio;