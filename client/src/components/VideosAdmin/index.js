import React from "react";
import AdminTable from "../AdminTable";
import AdminTableRow from "../AdminTableRow";

function VideosAdmin(props) {

    const { activeTab } = props;
    const tableHeads = ["video", "title", "actions"]

    const video = { _id: "1fakeId", url: "https://www.youtube.com/embed/g0qaTzjNZ2Y", title: "video"}

    return (
        <div className={`videos-content ${activeTab === "videos" ? "show" : "hide"}`}>
            <AdminTable tableHeads={tableHeads}>
                <AdminTableRow
                    type="videos"
                    item={video}
                />
            </AdminTable>
        </div>
    )
}

export default VideosAdmin;