import React from "react";
import "./adminTable.css";

function AdminTable(props) {

    const { tableHeads, children } = props;

    return (
        <table className="admin-table uk-table uk-table-responsive uk-table-hover uk-table-divider uk-table-middle uk-width-4-5@l">
            <thead>
                <tr>
                    {
                        tableHeads.map(header => {
                            return <th key={header}>{header}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    )
}

export default AdminTable;