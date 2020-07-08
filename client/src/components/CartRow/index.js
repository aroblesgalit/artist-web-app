import React from "react";
import "./cartRow.css";

function CartRow() {
    return (
        <tr className="cart-row">
            <td className="uk-flex uk-flex-middle">
                <span uk-icon="icon: close" className="cart-delete-btn uk-margin-right" />
                <img src="https://cdna.artstation.com/p/assets/images/images/007/824/798/large/aldrich-hezekiah-ghost-woods.jpg?1508767785" alt="lost and found" />
                <span className="uk-flex uk-flex-column">
                    <span className="uk-text-truncate">lost and found</span>
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
            <td className="uk-text-right">
                <span>$30</span>
            </td>
        </tr>
    )
}

export default CartRow;