import React from "react";
import "./portfolioPieceCard.css";

function PortfolioPieceCard(props) {

    const { name, medium, img } = props;

    return (
        <div className="port-piece-card uk-position-relative">
            <img src={img} alt={name} />
            <div className="port-piece-card-overlay uk-position-absolute uk-height-1-1 uk-width-1-1">
                <div className="overlay-border uk-flex uk-flex-column uk-flex-middle uk-flex-center uk-height-1-1">
                    <p className="piece-name uk-h2 uk-margin-remove">{name}</p>
                    <p className="piece-medium uk-h5 uk-margin-remove">{medium}</p>
                </div>
            </div>
        </div>
    )
}

export default PortfolioPieceCard;