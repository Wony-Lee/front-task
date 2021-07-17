import api from "./api";
export default {
    fetchMenuList({ commit }) {
        return api
            .fetchMenuList()
            .then((data) => commit("setMenuList", data.data))
            .catch((err) => {
                // console.error(err);
                console.log(err);
            });
    },
};
