import React, { useContext } from "react";
import AdminTable from "../AdminTable";
import AdminTableRow from "../AdminTableRow";
import ItemContext, { ItemConsumer } from "../../utils/ItemContext";
import Alert from "../Alert";

function ShopAdmin(props) {

    const { activeTab } = props;
    const tableHeads = ["image", "name/size/print", "count in stock", "sold", "price", "actions"];
    const { alertOn, alertItem, alertType, alertState } = useContext(ItemContext);

    return (
        <div className={`shop-content ${activeTab === "shop" ? "show" : "hide"}`}>
            <AdminTable tableHeads={tableHeads}>
                <ItemConsumer>
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
                </ItemConsumer>
            </AdminTable>
            <Alert
                alertOn={alertOn}
                alertItem={alertItem}
                alertType={alertType}
                alertState={alertState}
            />
        </div>
    )
}

export default ShopAdmin;