import React from "react";
import { Link } from "react-router-dom";
import "./pages.css";
import { ItemConsumer } from "../utils/ItemContext";

function ItemDetail() {
    return (
        <ItemConsumer>
            {
                value => {
                    const { _id, img, name, print, size, price, info, inCart } = value.detailItem;
                    return (
                        <div className="main-container item-detail-container">
                            <Link to="/shop" className="uk-flex uk-flex-middle">
                                <span uk-icon="icon: arrow-left" /><span className="text-link uk-margin-small-left" >back to shop</span>
                            </Link>
                            <div className="item-detail" uk-grid="true">
                                <img src={img} alt={name} />
                                <div className="item-detail-text uk-flex uk-flex-column">
                                    <h2 className="item-name">{name}</h2>
                                    <span className="item-print">{print}</span>
                                    <span className="item-size">{size}</span>
                                    <span className="item-price">${price}</span>
                                    <p className="item-info"><b>Info:</b> {info}</p>
                                    <button
                                        className="primary-btn"
                                        onClick={() => value.addToCart(_id)}
                                        disabled={inCart}
                                    >
                                        {
                                            inCart ? "in cart" : "add to cart"
                                        }
                                    </button>
                                    <Link to="/cart" className="uk-flex uk-flex-middle uk-margin-top">
                                        <span className="text-link uk-margin-small-right" >go to cart</span><span uk-icon="icon: arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            }

        </ItemConsumer>

    )
}

export default ItemDetail;