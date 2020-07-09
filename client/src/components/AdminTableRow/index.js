import React from "react";
import { Link } from "react-router-dom";
import "./adminTableRow.css";

function AdminTableRow(props) {

    const { type, item } = props;

    return (
        <tr className="admin-table-row">
            {
                type === "shop" ? (
                    <React.Fragment>
                        <td><img src={item.img} alt={item.name} /></td>
                        <td className="uk-flex uk-flex-column">
                            <p className="item-name">{item.name}</p>
                            <p className="item-size">{item.size}</p>
                            <p className="item-print">{item.print}</p>
                        </td>
                        <td>{item.countInStock}</td>
                        <td>{item.sold}</td>
                        <td>${item.price}</td>
                        <td className="action-icons">
                            <Link to="/admin/shop-view"><span uk-icon="file-edit" className="uk-margin-right" /></Link>
                            <span uk-icon="close" />
                        </td>
                    </React.Fragment>
                ) : (
                        type === "portfolio" ? (
                            <React.Fragment>
                                <td>portfolio data</td>
                                <td>portfolio data</td>
                                <td>portfolio data</td>
                            </React.Fragment>
                        ) : (
                                type === "videos" ? (
                                    <React.Fragment>
                                        <td>videos data</td>
                                        <td>videos data</td>
                                        <td>videos data</td>
                                    </React.Fragment>
                                ) : (
                                        <React.Fragment>
                                            <td>videos data</td>
                                            <td>videos data</td>
                                            <td>videos data</td>
                                        </React.Fragment>
                                    )
                            )
                    )
            }
        </tr>
    )
}

export default AdminTableRow;