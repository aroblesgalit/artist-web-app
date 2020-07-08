import React from "react";
import "./cartRow.css";

function CartRow(props) {

    const { name, size, img, countInStock, cartTotal } = props;

    return (
        <tr className="cart-row">
            <td className="uk-flex uk-flex-middle">
                <span uk-icon="icon: close" className="cart-delete-btn uk-margin-right" />
                <img src={img} alt={name} />
                <span className="uk-flex uk-flex-column">
                    <span className="uk-text-truncate">{name}</span>
                    <span className="uk-text-small">{size}</span>
                </span>
            </td>
            <td>
                <select className="uk-select">
                    {
                        [...Array(countInStock).keys()].map(x =>
                                <option key={x + 1} value={x + 1}>{x + 1}</option>
                            )
                    }
                </select>
            </td>
            <td className="uk-text-right">
                <span>{cartTotal}</span>
            </td>
        </tr>
    )
}

export default CartRow;