import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import BodyContent from "../components/BodyContent";

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/menu/:menuid",
            components: BodyContent,
        },
    ],
});
