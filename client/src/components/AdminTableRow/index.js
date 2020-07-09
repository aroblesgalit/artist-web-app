import React from "react";
import "./adminTableRow.css";

function AdminTableRow() {
    
    const fakeData = [
        {
            type: "image",
            value: "https://cdna.artstation.com/p/assets/images/images/007/824/798/large/aldrich-hezekiah-ghost-woods.jpg",
            name: "lost and found"
        },
        {
            type: "text",
            value: "lost and found"
        },
        {
            type: "number",
            value: 20
        },
        {
            type: "number",
            value: 15
        },
        {
            type: "currency",
            value: 30
        },
        {
            type: "actions",
            value: "view / delete"
        }
    ]
    
    return (
        <tr>
            {
                fakeData.map(data => {
                    return (
                        <td>
                            {
                                data.type === "image" ? <img src={data.value} alt={data.name} /> : data.value
                            }
                        </td>
                    )
                })
            }
        </tr>
    )
}

export default AdminTableRow;