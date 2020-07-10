import React from "react";
import "./portfolioPieceCard.css";

function PortfolioPieceCard() {
    return (
        <div className="portfolio-piece-card uk-inline-clip uk-transition-toggle" tabindex="0">
            <img src="images/dark.jpg" alt="" />
            <div className="uk-transition-fade uk-position-cover uk-position-small uk-overlay uk-overlay-default uk-flex uk-flex-center uk-flex-middle">
                <p className="uk-h4 uk-margin-remove">Fade</p>
            </div>
        </div>
    )
}

export default PortfolioPieceCard;