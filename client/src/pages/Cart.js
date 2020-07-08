import React from "react";
import { Link } from "react-router-dom";
import "./pages.css";
import CartRow from "../components/CartRow";
import { ItemConsumer } from "../utils/ItemContext";

function Cart() {
    return (
        <div className="main-container cart-container">
            <Link to="/shop" className="uk-flex uk-flex-middle">
                <span uk-icon="icon: arrow-left" /><span className="text-link uk-margin-small-left" >back to shop</span>
            </Link>
            <h1>shopping cart</h1>
            <table className="cart-table uk-table uk-table-divider uk-table-middle uk-width-4-5@l">
                <thead>
                    <tr>
                        <th>item</th>
                        <th>qty.</th>
                        <th className="uk-text-right">price</th>
                    </tr>
                </thead>
                <tbody>
                    <ItemConsumer>
                    {
                        value => {
                            return value.cart.map(item => {
                                return (
                                    <CartRow 
                                        name={item.name}
                                        size={item.size}
                                        
                                    />
                                )
                            })
                        }
                    }
                        <CartRow />
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
                    </ItemConsumer>
                </tbody>
            </table>

        </div>
    )
}

export default Cart;