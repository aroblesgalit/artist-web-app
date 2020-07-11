import React from "react";
import { Link } from "react-router-dom";
import "./adminTableRow.css";
import { ItemConsumer } from "../../utils/ItemContext";
import { ArtConsumer } from "../../utils/ArtContext";

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
                            <ItemConsumer>
                                {
                                    value => {
                                        return (
                                            <React.Fragment>
                                                <Link
                                                    to={`/admin/shop-view/${item._id}`}
                                                    onClick={() => value.handleDetail(item._id)}
                                                >
                                                    <span uk-icon="file-edit" className="uk-margin-right" />
                                                </Link>
                                                <span
                                                    uk-icon="close"
                                                    onClick={(e) => value.deleteItem(e, item._id, "admin/shop")}
                                                />
                                            </React.Fragment>
                                        )
                                    }
                                }
                            </ItemConsumer>
                        </td>
                    </React.Fragment>
                ) : (
                        type === "portfolio" ? (
                            <React.Fragment>
                                <td><img src={item.img} alt={item.name} /></td>
                                <td><p className="item-name">{item.name}</p></td>
                                <td><p className="item-medium">{item.medium}</p></td>
                                <td className="action-icons">
                                    <ArtConsumer>
                                        {
                                            value => {
                                                return (
                                                    <React.Fragment>
                                                        <Link
                                                            to={`/admin/portfolio-view/${item._id}`}
                                                            onClick={() => value.handleView(item._id)}
                                                        >
                                                            <span uk-icon="file-edit" className="uk-margin-right" />
                                                        </Link>
                                                        <span
                                                            uk-icon="close"
                                                            onClick={(e) => value.deleteArt(e, item._id, "admin/portfolio")}
                                                        />
                                                    </React.Fragment>
                                                )
                                            }
                                        }
                                    </ArtConsumer>
                                </td>
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