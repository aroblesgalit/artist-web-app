import React from "react";
import "./itemCard.css";

function ItemCard(props) {

    const { name, size, img, price } = props.item;

    return (
        <div>
            <div className="item-card uk-card">
                <div className="item-img-container uk-card-media-top">
                    <img src={img} alt={name} />
                </div>
                <div className="uk-card-body uk-padding-small uk-position-relative">
                    <h3 className="item-name uk-card-title">{name}</h3>
                    <p className="item-size">{size}</p>
                    <span className="item-price">${price}</span>
                    <button className="cart-btn">add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCard;