import React from "react";
import { Link } from "react-router-dom";
import "./pages.css";
import CartRow from "../components/CartRow";
import CartSubtotal from "../components/CartSubtotal";
import ItemContext, { ItemConsumer } from "../utils/ItemContext";
import Alert from "../Alert";

function Cart() {

    const { alertOn, alertItem, alertType, alertState } = useContext(ItemContext);

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
            <Alert
                alertOn={alertOn}
                alertItem={alertItem}
                alertType={alertType}
                alertState={alertState}
            />
        </div>
    )
}

export default Cart;