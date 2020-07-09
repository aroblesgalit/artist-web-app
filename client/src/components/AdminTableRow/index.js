import React from "react";
import "./adminTableRow.css";

function AdminTableRow(props) {

    const { type, item } = props;

    return (
        <tr>
            {
                type === "shop" ? (
                    <React.Fragment>
                        <td><img src={item.img} alt={item.name} /></td>
                        <td className="uk-flex uk-flex-column">
                            <span>{item.name}</span>
                            <span>{item.size}</span>
                            <span>{item.print}</span>
                        </td>
                        <td>{item.countInStock}</td>
                        <td>{item.sold}</td>
                        <td>${item.price}</td>
                        <td>view / delete</td>
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