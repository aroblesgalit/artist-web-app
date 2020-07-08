import React from "react";
import { Link } from "react-router-dom";
import "./pages.css";
import CartRow from "../components/CartRow";

function Cart() {
    return (
        <div className="main-container cart-container">
            <Link to="/shop" className="uk-flex uk-flex-middle">
                <span uk-icon="icon: arrow-left" /><span className="text-link uk-margin-small-left" >back to shop</span>
            </Link>
            <h1>shopping cart</h1>
            <table class="uk-table uk-table-divider uk-table-middle">
                <thead>
                    <tr>
                        <th>item</th>
                        <th>qty.</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    <CartRow />
                </tbody>
            </table>
        </div>
    )
}

export default Cart;