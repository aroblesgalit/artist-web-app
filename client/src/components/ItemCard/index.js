import React from "react";
import "./itemCard.css";

function ItemCard() {
    return (
        <div>
            <div className="item-card uk-card">
                <div className="uk-card-media-top">
                    <img src="https://via.placeholder.com/300x300" alt="item" />
                </div>
                <div className="uk-card-body uk-padding-small uk-position-relative">
                    <h3 className="item-name uk-card-title">lost in the woods</h3>
                    <p className="item-size">11 x 17</p>
                    <span className="item-price">$35</span>
                    <button className="cart-btn">add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCard;