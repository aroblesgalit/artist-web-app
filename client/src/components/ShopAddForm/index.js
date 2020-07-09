import React from "react";
import "./shopAddForm.css";

function ShopAddForm() {
    return (
        <form className="uk-grid uk-width-4-5@l" uk-grid="true">
            <div className="uk-width-1-2@m">
                <div className="uk-margin">
                    <label className="uk-form-label" htmlFor="shop-item-name">name</label>
                    <div className="uk-form-controls">
                        <input className="uk-input" id="shop-item-name" type="text" placeholder="lost in the woods" />
                    </div>
                </div>
                <div className="uk-margin">
                    <label className="uk-form-label" htmlFor="shop-item-info">info</label>
                    <div className="uk-form-controls">
                        <textarea className="uk-input" id="shop-item-info" type="message" placeholder="A boy who couldn't find his way home." />
                    </div>
                </div>
                <div className="uk-margin">
                    <label className="uk-form-label" htmlFor="shop-item-image">image</label>
                    <div className="uk-form-controls">
                        <input className="uk-input" id="shop-item-image" type="url" placeholder="www.site.com/image.png" />
                    </div>
                </div>
            </div>
            <div className="uk-width-1-2@m">
                <div className="uk-margin">
                    <label className="uk-form-label" htmlFor="shop-item-price">price</label>
                    <div className="uk-form-controls uk-margin-bottom">
                        <input className="uk-input" id="shop-item-price" type="number" placeholder="$30" />
                    </div>
                </div>
                <div className="uk-margin">
                    <label className="uk-form-label" htmlFor="shop-item-count">count in stock</label>
                    <div className="uk-form-controls">
                        <input className="uk-input" id="shop-item-count" type="number" placeholder="20" />
                    </div>
                </div>
                <div className="uk-margin">
                    <label className="uk-form-label" htmlFor="shop-item-print">print</label>
                    <div className="uk-form-controls">
                        <input className="uk-input" id="shop-item-print" type="text" placeholder="11 x 17 on cardstock" />
                    </div>
                </div>
                <div className="uk-margin">
                    <button className="secondary-btn uk-margin-small-right"><span uk-icon="close" className="uk-margin-small-right" />cancel</button>
                    <button className="primary-btn"><span uk-icon="plus" className="uk-margin-small-right" />add</button>
                </div>
            </div>
        </form>
    )
}

export default ShopAddForm;