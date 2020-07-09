import React from "react";
import { Link } from "react-router-dom";
import "./pages.css";
import CartRow from "../components/CartRow";
import CartSubtotal from "../components/CartSubtotal";
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
                                    return <CartRow
                                        key={item._id}
                                        id={item._id}
                                        name={item.name}
                                        size={item.size}
                                        img={item.img}
                                        countInStock={item.countInStock}
                                        cartCount={item.cartCount}
                                        cartTotal={item.cartTotal}
                                    />
                                })
                            }
                        }
                    </ItemConsumer>
                    <CartSubtotal />
                </tbody>
            </table>

        </div>
    )
}

export default Cart;