import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./main.css";

const app = createApp(App);

app.use(router);

app.mount("#app");


export const navbarData = [
    {
        name: "home",
        id: 1,
        to: "/"
    },
    {
        name: "destination",
        id: 2,
        to: "/destination"
    },
    {
        name: "crew",
        id: 3,
        to: "/crew"
    },
    {
        name: "technology",
        id: 4,
        to: "/technology"
    }
]