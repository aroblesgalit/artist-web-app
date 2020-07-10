import React from "react";
import "./portfolioPieceCard.css";

function PortfolioPieceCard(props) {

    const { name, medium, img } = props;

    return (
        <div className="port-piece-card uk-position-relative">
            <img src={img} alt={name} />
            <div className="port-piece-card-overlay uk-position-absolute uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-height-1-1">
                <p className="uk-h3 uk-margin-remove">{name}</p>
                <p className="uk-h5 uk-margin-remove">{medium}</p>
            </div>
        </div>
    )
}

export default PortfolioPieceCard;