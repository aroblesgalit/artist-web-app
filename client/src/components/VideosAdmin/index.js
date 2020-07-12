import React from "react";
import AdminTable from "../AdminTable";
import AdminTableRow from "../AdminTableRow";
import { VideoConsumer } from "../../utils/VideoContext";

function VideosAdmin(props) {

    const { activeTab } = props;
    const tableHeads = ["video", "title", "actions"]

    return (
        <div className={`videos-content ${activeTab === "videos" ? "show" : "hide"}`}>
            <AdminTable tableHeads={tableHeads}>
                <VideoConsumer>
                    {
                        value => {
                            return value.items.map(video => {
                                return (
                                    <AdminTableRow
                                        key={video._id}
                                        type="videos"
                                        item={video}
                                    />
                                )
                            })
                        }
                    }
                </VideoConsumer>
            </AdminTable>
        </div>
    )
}

export default VideosAdmin;