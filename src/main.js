import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
import "./style/main.css";
import router from "./routes/router";

import store from "./store";

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
