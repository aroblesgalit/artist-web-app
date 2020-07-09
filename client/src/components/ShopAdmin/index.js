import React from "react";
import AdminTable from "../AdminTable";
import AdminTableRow from "../AdminTableRow";

function ShopAdmin(props) {

    const { activeTab } = props;
    const tableHeads = ["image", "name/size/print", "count in stock", "sold", "price", "actions"];

    return (
        <div className={`shop-content ${activeTab === "shop" ? "show" : "hide"}`}>
            <AdminTable tableHeads={tableHeads}>
                <tr>
                    <td>https://www.google.com/image.png</td>
                    <td>hello world</td>
                    <td>20</td>
                    <td>15</td>
                    <td>$30</td>
                    <td>view / delete</td>
                </tr>
                <AdminTableRow />
            </AdminTable>
        </div>
    )
}

export default ShopAdmin;