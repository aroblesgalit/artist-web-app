import React from "react";
import AdminTable from "../AdminTable";
import AdminTableRow from "../AdminTableRow";
import { ArtConsumer } from "../../utils/ArtContext";

function PortfolioAdmin(props) {

    const { activeTab } = props;
    const tableHeads = ["image", "name", "medium", "actions"];

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
        </div>
    )
}

export default PortfolioAdmin;