import React, { useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./shopViewForm.css";
import ItemContext, { ItemConsumer } from "../../utils/ItemContext";

function ShopViewForm() {

    const { detailItem } = useContext(ItemContext);

    const nameRef = useRef();
    const infoRef = useRef();
    const imgRef = useRef();
    const priceRef = useRef();
    const countInStockRef = useRef();
    const sizeRef = useRef();
    const printRef = useRef();

    const [item, setItem] = useState({
        name: detailItem.name,
        img: detailItem.img,
        price: detailItem.price,
        size: detailItem.size,
        print: detailItem.print,
        info: detailItem.info,
        countInStock: detailItem.countInStock
    })

    return (
        <ItemConsumer>
            {
                value => {
                    const { _id } = value.detailItem;
                    return (
                        <form className="uk-grid uk-width-4-5@l" uk-grid="true">
                            <div className="uk-width-1-2@m">
                                <div className="uk-margin">
                                    <label className="uk-form-label" htmlFor="shop-item-name">name</label>
                                    <div className="uk-form-controls">
                                        <input
                                            className="uk-input"
                                            id="shop-item-name"
                                            type="text"
                                            placeholder="lost in the woods"
                                            required={true}
                                            ref={nameRef}
                                            value={item.name}
                                            onChange={() => setItem({
                                                ...item,
                                                name: nameRef.current.value
                                            })}
                                        />
                                    </div>
                                </div>
                                <div className="uk-margin">
                                    <label className="uk-form-label" htmlFor="shop-item-info">info</label>
                                    <div className="uk-form-controls">
                                        <textarea
                                            className="uk-input"
                                            id="shop-item-info"
                                            type="message"
                                            placeholder="A boy who couldn't find his way home."
                                            ref={infoRef}
                                            value={item.info}
                                            onChange={() => setItem({
                                                ...item,
                                                info: infoRef.current.value
                                            })}
                                        />
                                    </div>
                                </div>
                                <div className="uk-margin">
                                    <label className="uk-form-label" htmlFor="shop-item-image">image</label>
                                    <div className="uk-form-controls">
                                        <input
                                            className="uk-input"
                                            id="shop-item-image"
                                            type="url"
                                            placeholder="www.site.com/image.png"
                                            required={true}
                                            ref={imgRef}
                                            value={item.img}
                                            onChange={() => setItem({
                                                ...item,
                                                img: imgRef.current.value
                                            })}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="uk-width-1-2@m">
                                <div className="uk-margin">
                                    <label className="uk-form-label" htmlFor="shop-item-price">price</label>
                                    <div className="uk-form-controls uk-margin-bottom">
                                        <input
                                            className="uk-input"
                                            id="shop-item-price"
                                            type="number"
                                            placeholder="$30"
                                            required={true}
                                            min="0"
                                            ref={priceRef}
                                            value={item.price}
                                            onChange={() => setItem({
                                                ...item,
                                                price: parseInt(priceRef.current.value)
                                            })}
                                        />
                                    </div>
                                </div>
                                <div className="uk-margin">
                                    <label className="uk-form-label" htmlFor="shop-item-count">count in stock</label>
                                    <div className="uk-form-controls">
                                        <input
                                            className="uk-input"
                                            id="shop-item-count"
                                            type="number"
                                            placeholder="20"
                                            required={true}
                                            min="0"
                                            ref={countInStockRef}
                                            value={item.countInStock}
                                            onChange={() => setItem({
                                                ...item,
                                                countInStock: parseInt(countInStockRef.current.value)
                                            })}
                                        />
                                    </div>
                                </div>
                                <div className="uk-margin">
                                    <label className="uk-form-label" htmlFor="shop-item-size">size</label>
                                    <div className="uk-form-controls">
                                        <input
                                            className="uk-input"
                                            id="shop-item-size"
                                            type="text"
                                            placeholder="11 x 17"
                                            required={true}
                                            ref={sizeRef}
                                            value={item.size}
                                            onChange={() => setItem({
                                                ...item,
                                                size: sizeRef.current.value
                                            })}
                                        />
                                    </div>
                                </div>
                                <div className="uk-margin">
                                    <label className="uk-form-label" htmlFor="shop-item-print">print</label>
                                    <div className="uk-form-controls">
                                        <input
                                            className="uk-input"
                                            id="shop-item-print"
                                            type="text"
                                            placeholder="12pt cardstock"
                                            required={true}
                                            ref={printRef}
                                            value={item.print}
                                            onChange={() => setItem({
                                                ...item,
                                                print: printRef.current.value
                                            })}
                                        />
                                    </div>
                                </div>
                                <div className="uk-margin">
                                    <Link to="/admin">
                                        <button className="secondary-btn uk-margin-small-right"><span uk-icon="close" className="uk-margin-small-right" />cancel</button>
                                    </Link>
                                    <button
                                        className="primary-btn"
                                        onClick={(e) => {
                                            value.updateItem(e, _id, {
                                                name: item.name,
                                                img: item.img,
                                                price: item.price,
                                                size: item.size,
                                                print: item.print,
                                                info: item.info,
                                                countInStock: item.countInStock
                                            });
                                        }}
                                    >
                                        <span uk-icon="file-edit" className="uk-margin-small-right" />save changes
                                    </button>
                                </div>
                            </div>
                        </form>
                    )
                }
            }
        </ItemConsumer>
    )
}

export default ShopViewForm;