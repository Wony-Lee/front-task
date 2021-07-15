import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// import BodyContent from "../components/BodyContent";
import menuList from "../components/MenuList";

export default new VueRouter({
    mode: "history",
    routes: [{ path: "/menu/:menuId", components: menuList }],
});
