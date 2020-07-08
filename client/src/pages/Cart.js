import React from "react";
import { Link } from "react-router-dom";
import "./pages.css";

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
                    <tr>
                        <td className="uk-flex uk-flex-middle">
                            <span uk-icon="icon: close" className="cart-delete-btn uk-margin-right" />
                            <img src="https://cdna.artstation.com/p/assets/images/images/007/824/798/large/aldrich-hezekiah-ghost-woods.jpg?1508767785" alt="lost and found" />
                            <span className="uk-flex uk-flex-column">
                                <span>lost and found</span>
                                <span className="uk-text-small">11 x 17</span>
                            </span>
                        </td>
                        <td>
                            <select className="uk-select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </td>
                        <td>
                            <span>$30</span>
                        </td>
                    </tr>
                    <tr>
                    <td className="uk-flex uk-flex-middle">
                        <span uk-icon="icon: close" className="cart-delete-btn uk-margin-right" />
                        <img src="https://cdna.artstation.com/p/assets/images/images/007/824/798/large/aldrich-hezekiah-ghost-woods.jpg?1508767785" alt="lost and found" />
                        <span className="uk-flex uk-flex-column">
                            <span>lost and found</span>
                            <span className="uk-text-small">11 x 17</span>
                        </span>
                    </td>
                    <td>
                        <select className="uk-select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </td>
                    <td>
                        <span>$30</span>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Cart;