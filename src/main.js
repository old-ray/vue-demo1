import { createApp, VueElement } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import qs from "qs";

const app = createApp(App)
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$qs = qs;
app.use(store).use(router).mount("#app");
