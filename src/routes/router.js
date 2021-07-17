import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import BodyContent from "../components/BodyContent";
// import MenuList from "../components/MenuList";

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/menu/:menuid",
            components: BodyContent,
        },
        // {
        //     path: "/:menuid",
        //     components: BodyContent,
        // },
    ],
});
