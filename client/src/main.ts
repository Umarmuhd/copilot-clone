import "./assets/main.css";

import { createApp } from "vue";
//@ts-ignore
import App from "./App.vue";
import { VueQueryPlugin } from "@tanstack/vue-query";

const app = createApp(App);
app.use(VueQueryPlugin);

app.mount("#app");
