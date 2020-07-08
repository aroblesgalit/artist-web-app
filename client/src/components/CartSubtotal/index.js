import React from "react";
import "./cartSubtotal.css";

function CartSubtotal() {
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
                        <div className="uk-flex uk-flex-bottom uk-flex-right">$30</div>
                        <div className="uk-flex uk-flex-bottom uk-flex-right">$4</div>
                        <div className="uk-flex uk-flex-bottom uk-flex-right"><b>$34</b></div>
                    </div>
                </div>
                <button className="primary-btn">paypal checkout</button>
            </td>
        </tr>
    )
}

export default CartSubtotal;