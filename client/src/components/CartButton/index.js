import React from "react";
import { Link } from "react-router-dom";
import "./cartButton.css";

function CartButton() {
    return (
        <Link to="/cart">
            <div className="cart-link uk-flex uk-flex-center uk-flex-middle">
                <span uk-icon="icon: cart"></span>
            </div>
        </Link>
    )
}

export default CartButton;