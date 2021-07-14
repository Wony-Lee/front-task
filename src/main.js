import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
import "./style/main.css";

import store from "./store";

new Vue({
    store,
    render: (h) => h(App),
}).$mount("#app");
