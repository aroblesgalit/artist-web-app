import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./shopAddForm.css";
import { ShopConsumer } from "../../utils/ShopContext";

function ShopAddForm() {

    const nameRef = useRef();
    const infoRef = useRef();
    const imgRef = useRef();
    const priceRef = useRef();
    const countInStockRef = useRef();
    const sizeRef = useRef();
    const printRef = useRef();

    return (
        <ShopConsumer>
            {
                value => {
                    return (
                        <form className="uk-grid uk-width-4-5@l" uk-grid="true">
                            <div className="uk-width-1-2@m">
                                <div className="uk-margin">
                                    <label className="uk-form-label" htmlFor="shop-item-name">name</label>
                                    <div className="uk-form-controls">
                                        <input className="uk-input" id="shop-item-name" type="text" placeholder="lost in the woods" required={true} ref={nameRef} />
                                    </div>
                                </div>
                                <div className="uk-margin">
                                    <label className="uk-form-label" htmlFor="shop-item-info">info</label>
                                    <div className="uk-form-controls">
                                        <textarea className="uk-input" id="shop-item-info" type="message" placeholder="A boy who couldn't find his way home." ref={infoRef} />
                                    </div>
                                </div>
                                <div className="uk-margin">
                                    <label className="uk-form-label" htmlFor="shop-item-image">image</label>
                                    <div className="uk-form-controls">
                                        <input className="uk-input" id="shop-item-image" type="url" placeholder="www.site.com/image.png" required={true} ref={imgRef} />
                                    </div>
                                </div>
                            </div>
                            <div className="uk-width-1-2@m">
                                <div className="uk-margin">
                                    <label className="uk-form-label" htmlFor="shop-item-price">price</label>
                                    <div className="uk-form-controls uk-margin-bottom">
                                        <input className="uk-input" id="shop-item-price" type="number" placeholder="$30" required={true} min="0" ref={priceRef} />
                                    </div>
                                </div>
                                <div className="uk-margin">
                                    <label className="uk-form-label" htmlFor="shop-item-count">count in stock</label>
                                    <div className="uk-form-controls">
                                        <input className="uk-input" id="shop-item-count" type="number" placeholder="20" required={true} min="0" ref={countInStockRef} />
                                    </div>
                                </div>
                                <div className="uk-margin">
                                    <label className="uk-form-label" htmlFor="shop-item-size">size</label>
                                    <div className="uk-form-controls">
                                        <input className="uk-input" id="shop-item-size" type="text" placeholder="11 x 17" required={true} ref={sizeRef} />
                                    </div>
                                </div>
                                <div className="uk-margin">
                                    <label className="uk-form-label" htmlFor="shop-item-print">print</label>
                                    <div className="uk-form-controls">
                                        <input className="uk-input" id="shop-item-print" type="text" placeholder="12pt cardstock" required={true} ref={printRef} />
                                    </div>
                                </div>
                                <div className="uk-margin">
                                    <Link to="/admin">
                                        <button className="secondary-btn uk-margin-small-right"><span uk-icon="close" className="uk-margin-small-right" />cancel</button>
                                    </Link>
                                    <button
                                        className="primary-btn"
                                        onClick={(e) => value.addItem(e, {
                                            name: nameRef.current.value,
                                            img: imgRef.current.value,
                                            price: parseInt(priceRef.current.value),
                                            size: sizeRef.current.value,
                                            print: printRef.current.value,
                                            info: infoRef.current.value,
                                            countInStock: parseInt(countInStockRef.current.value)
                                        })}
                                    >
                                        <span uk-icon="plus" className="uk-margin-small-right" />add
                                    </button>
                                </div>
                            </div>
                        </form>
                    )
                }
            }
        </ShopConsumer>
    )
}

export default ShopAddForm;