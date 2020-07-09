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
    getAllItems: function() {
        return axios.get("/api/items");
    },
    getItemById: function(id) {
        return axios.get("/api/items/" + id)
    },
    updateItem: function(data) {
        return axios.put("/api/items", data)
    }
}