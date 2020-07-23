import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "./pages.css";
import ItemContext from "../utils/ItemContext";

function ItemDetail() {

    const { id } = useParams();

    const { getItem, items, addToCart } = useContext(ItemContext);

    const detailItem = getItem(items, id);

    return (
        <div className="main-container item-detail-container">
            <Link to="/shop" className="uk-flex uk-flex-middle">
                <span uk-icon="icon: arrow-left" /><span className="text-link uk-margin-small-left" >back to shop</span>
            </Link>
            {
                detailItem ? (
                    <div className="item-detail" uk-grid="true">
                        <img src={detailItem.img} alt={detailItem.name} />
                        <div className="item-detail-text uk-flex uk-flex-column">
                            <h2 className="item-name">{detailItem.name}</h2>
                            <span className="item-print">{detailItem.print}</span>
                            <span className="item-size">{detailItem.size}</span>
                            <span className="item-price">${detailItem.price}</span>
                            {detailItem.soldOut ? <span className="item-sold-out">sold out</span> : ""}
                            <p className="item-info"><b>Info:</b> {detailItem.info}</p>
                            <button
                                className="primary-btn"
                                onClick={() => addToCart(detailItem._id)}
                                disabled={detailItem.inCart || detailItem.soldOut}
                            >
                                {
                                    detailItem.soldOut ? "out of stock" : (
                                        detailItem.inCart ? "in cart" : "add to cart"
                                    )
                                }
                            </button>
                            <Link to="/cart" className="uk-flex uk-flex-middle uk-margin-top">
                                <span className="text-link uk-margin-small-right" >go to cart</span><span uk-icon="icon: arrow-right" />
                            </Link>
                        </div>
                    </div>
                ) : <p className="uk-text-small uk-text-mute">Loading details...</p>
            }

        </div>
    )
}

export default ItemDetail;