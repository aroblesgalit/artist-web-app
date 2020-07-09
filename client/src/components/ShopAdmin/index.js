import React from "react";
import AdminTable from "../AdminTable";
import AdminTableRow from "../AdminTableRow";
import { ShopConsumer } from "../../utils/ShopContext";

function ShopAdmin(props) {

    const { activeTab } = props;
    const tableHeads = ["image", "name/size/print", "count in stock", "sold", "price", "actions"];

    return (
        <div className={`shop-content ${activeTab === "shop" ? "show" : "hide"}`}>
            <AdminTable tableHeads={tableHeads}>
                <ShopConsumer>
                    {
                        value => {
                            return value.items.map(item => {
                                return (
                                    <AdminTableRow
                                        key={item._id}
                                        type="shop"
                                        item={item}
                                    />
                                )
                            })
                        }
                    }
                </ShopConsumer>
            </AdminTable>
        </div>
    )
}

export default ShopAdmin;