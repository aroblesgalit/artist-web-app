import axios from "axios";

export default {
    createUser: function (data) {
        return axios.post("/api/user/signup", data);
    },
    loginUser: function (data) {
        return axios.post("/api/user/login", data);
    },
    logoutUser: function () {
        return axios.get("/api/user/logout");
    },
    getUserData: function () {
        return axios.get("/api/user/user_data");
    },
    findUser: function () {
        return axios.get("/api/user");
    },
    getAllItems: function () {
        return axios.get("/api/items");
    },
    getItemById: function (id) {
        return axios.get("/api/items/" + id);
    },
    updateSoldItem: function (data) {
        return axios.put("/api/items", data);
    },
    addItem: function (data) {
        return axios.post("/api/items", data);
    },
    updateItem: function (id, data) {
        return axios.put("/api/items/" + id, data);
    },
    deleteItem: function (id) {
        return axios.delete("/api/items/" + id);
    },
    // Art - Portfolio
    getAllArts: function () {
        return axios.get("/api/arts");
    },
    deleteArt: function (id) {
        return axios.delete("/api/arts/" + id);
    },
    updateArt: function (id, data) {
        return axios.put("/api/arts/" + id, data);
    },
    addArt: function (data) {
        return axios.post("/api/arts", data);
    },
    // About Content
    getAbout: function () {
        return axios.get("/api/about");
    },
    addAbout: function (data) {
        return axios.post("/api/about", data);
    },
    updateAbout: function (id, data) {
        return axios.put("/api/about/" + id, data);
    },
    // Videos
    getAllVideos: function () {
        return axios.get("/api/videos");
    },
    addVideo: function (data) {
        return axios.post("/api/videos", data);
    },
    updateVideo: function (id, data) {
        return axios.put("/api/videos/" + id, data);
    },
    deleteVideo: function (id) {
        return axios.delete("/api/videos/" + id);
    }
}