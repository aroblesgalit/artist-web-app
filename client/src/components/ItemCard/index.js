import React from "react";
import { Link } from "react-router-dom";
import "./itemCard.css";
import { ItemConsumer } from "../../utils/ItemContext";


function ItemCard(props) {

    const { _id, name, size, img, price, inCart } = props.item;

    return (
        <div>
            <div className="item-card uk-card">
                <ItemConsumer>
                    {
                        value => {
                            return (
                                <React.Fragment>
                                    <Link to={`/shop/${_id}`}>
                                        <div className="item-img-container uk-card-media-top">
                                            <img
                                                src={img}
                                                alt={name}
                                                onClick={() => value.handleDetail(_id)}
                                            />
                                        </div>
                                    </Link>
                                    <div className="uk-card-body uk-padding-small uk-position-relative">
                                        <h3 className="item-name uk-card-title">{name}</h3>
                                        <p className="item-size">{size}</p>
                                        <span className="item-price">${price}</span>
                                        <button
                                            className="cart-btn"
                                            disabled={inCart}
                                            onClick={() => value.addToCart(_id)}
                                        >
                                            {
                                                inCart ? "in cart" : "add to cart"
                                            }
                                        </button>
                                    </div>
                                </React.Fragment>
                            )
                        }
                    }
                </ItemConsumer>
            </div>
        </div>
    )
}

export default ItemCard;