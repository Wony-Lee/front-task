import Vue from "vue";
import App from "./App.vue";

import store from "./store";
Vue.config.productionTip = false;
import "./style/main.css";

import router from "./routes/router";

new Vue({
    store,
    router,
    render: (h) => h(App),
}).$mount("#app");
