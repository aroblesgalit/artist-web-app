import React from "react";
import { Link } from "react-router-dom";
import "./cartSubtotal.css";
import { ItemConsumer } from "../../utils/ItemContext";

function CartSubtotal() {
    return (
        <ItemConsumer>
            {
                value => {
                    if (value.cart.length > 0) {
                        return (
                            <tr>
                                <td></td>
                                <td></td>
                                <td className="subtotal-info">
                                    <div className="uk-flex uk-flex-right">
                                        <div className="subtotal-labels uk-margin-right">
                                            <div className="uk-flex uk-flex-bottom uk-flex-right">subtotal</div>
                                            <div className="uk-flex uk-flex-bottom uk-flex-right">shipping</div>
                                            <div className="uk-flex uk-flex-bottom uk-flex-right"><b>total</b></div>
                                        </div>
                                        <div className="subtotal-values">
                                            <div className="uk-flex uk-flex-bottom uk-flex-right">${value.cartSubtotal}</div>
                                            <div className="uk-flex uk-flex-bottom uk-flex-right">${value.cartShipping}</div>
                                            <div className="uk-flex uk-flex-bottom uk-flex-right"><b>${value.cartTotal}</b></div>
                                        </div>
                                    </div>
                                    <button className="primary-btn">paypal checkout</button>
                                </td>
                            </tr>
                        )
                    } else {
                        return (
                            <tr>
                                <td>
                                    <p className="no-items-message">No items in your cart. <Link to="/shop">Continue shopping.</Link></p>
                                </td>
                                <td></td>
                                <td></td>
                            </tr>
                        )
                    }
                }
            }
        </ItemConsumer>
    )
}

export default CartSubtotal;