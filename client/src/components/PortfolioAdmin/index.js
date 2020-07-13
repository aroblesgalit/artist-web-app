import React from "react";
import AdminTable from "../AdminTable";
import AdminTableRow from "../AdminTableRow";
import ArtContext, { ArtConsumer } from "../../utils/ArtContext";
import Alert from "../components/Alert";

function PortfolioAdmin(props) {

    const { activeTab } = props;
    const tableHeads = ["image", "name", "medium", "actions"];
    const { alertOn, alertItem, alertType, alertState } = useContext(ArtContext);

    return (
        <div className={`portfolio-content ${activeTab === "portfolio" ? "show" : "hide"}`}>
            <AdminTable tableHeads={tableHeads}>
                <ArtConsumer>
                    {
                        value => {
                            return value.arts.map(art => {
                                return (
                                    <AdminTableRow
                                        key={art._id}
                                        type="portfolio"
                                        item={art}
                                    />
                                )
                            })
                        }
                    }
                </ArtConsumer>
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

export default PortfolioAdmin;