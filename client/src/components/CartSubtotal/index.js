import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./cartSubtotal.css";
import ItemContext, { ItemConsumer } from "../../utils/ItemContext";
import PayPalButton from "../PayPalButton";
import Alert from "../Alert";

function CartSubtotal({ history }) {

    const { alertOn, alertItem, alertType, alertState } = useContext(ItemContext);

    return (
        <ItemConsumer>
            {
                value => {
                    if (value.cart.length > 0) {
                        return (
                            <tr>
                                <td className="uk-flex uk-flex-top">
                                    <Alert
                                        alertOn={alertOn}
                                        alertItem={alertItem}
                                        alertType={alertType}
                                        alertState={alertState}
                                    />
                                </td>
                                <td></td>
                                <td className="subtotal-info">
                                    <div className="uk-flex uk-flex-right uk-margin-bottom">
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
                                    {
                                        // <button className="primary-btn">paypal checkout</button>
                                    }
                                    <PayPalButton
                                        total={value.cartTotal}
                                        clearCart={value.clearCart}
                                        history={history}
                                        updateDataItems={value.updateDataItems}
                                    />
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