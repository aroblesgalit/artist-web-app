import React from "react";
import AdminTable from "../AdminTable";
import AdminTableRow from "../AdminTableRow";
import VideoContext, { VideoConsumer } from "../../utils/VideoContext";
import Alert from "../components/Alert";

function VideosAdmin(props) {

    const { activeTab } = props;
    const tableHeads = ["video", "title", "actions"]
    const { alertOn, alertItem, alertType, alertState } = useContext(VideoContext);


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
            <Alert
                alertOn={alertOn}
                alertItem={alertItem}
                alertType={alertType}
                alertState={alertState}
            />
        </div>
    )
}

export default VideosAdmin;