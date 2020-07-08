import React from "react";
import "./cartRow.css";
import { ItemConsumer } from "../../utils/ItemContext";

function CartRow(props) {

    const { id, name, size, img, countInStock, cartTotal } = props;

    return (
        <tr className="cart-row">
            <td className="uk-flex uk-flex-middle">
                <ItemConsumer>
                    {
                        value => {
                            return (
                                <span
                                    uk-icon="icon: close"
                                    className="cart-delete-btn uk-margin-right"
                                    onClick={() => value.removeItem(id)}
                                />
                            )
                        }
                    }

                </ItemConsumer>
                <img src={img} alt={name} />
                <span className="uk-flex uk-flex-column">
                    <span className="uk-text-truncate">{name}</span>
                    <span className="uk-text-small">{size}</span>
                </span>
            </td>
            <td>
                <ItemConsumer>
                    {
                        value => {
                            return (
                                <select className="uk-select" onChange={(e) => value.updateItemCount(id, e.target.value)}>
                                    {
                                        [...Array(countInStock).keys()].map(x =>
                                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                                        )
                                    }
                                </select>
                            )
                        }
                    }

                </ItemConsumer>
            </td>
            <td className="uk-text-right">
                <span>${cartTotal}</span>
            </td>
        </tr>
    )
}

export default CartRow;