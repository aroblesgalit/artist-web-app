import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./pages.css";
import API from "../utils/API";

function ItemDetail() {

    const { id } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        API.getItemById(id)
            .then(res => {
                // console.log("Getting item by id...", res)
                setItem(res.data);
            })
            .catch(err => {
                console.log("Something went wrong while fetching item...", err);
            })
    }, [])

    return (
        <div className="main-container item-detail-container">
            <Link to="/shop" className="uk-flex uk-flex-middle">
                <span uk-icon="icon: arrow-left" /><span className="text-link uk-margin-small-left" >back to shop</span>
            </Link>
            <div className="item-detail" uk-grid="true">
                <img src={item.img} alt={item.name} />
                <div className="item-detail-text uk-flex uk-flex-column">
                    <h2 className="item-name">{item.name}</h2>
                    <span className="item-print">{item.print}</span>
                    <span className="item-size">{item.size}</span>
                    <span className="item-price">${item.price}</span>
                    <p className="item-info"><b>Info:</b> {item.info}</p>
                    <button className="primary-btn">add to cart</button>
                    <Link to="/cart" className="uk-flex uk-flex-middle uk-margin-top">
                        <span className="text-link uk-margin-small-right" >go to cart</span><span uk-icon="icon: arrow-right" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;