import React from "react";
import { Link } from "react-router-dom";
import "./cartButton.css";
import { ItemConsumer } from "../../utils/ItemContext";

function CartButton() {
    return (
        <ItemConsumer>
            {
                value => {
                    if (value.cart.length > 0) {
                        return (
                            <Link to="/cart">
                                <div className="cart-link uk-flex uk-flex-center uk-flex-middle">
                                    <span uk-icon="icon: cart"></span>
                                </div>
                            </Link>
                        )
                    } else {
                        return;
                    }
                }
            }
        </ItemConsumer>
    )
}

export default CartButton;