import { createRouter, createWebHistory } from "vue-router";
import ShowPage from "../views/ShowPage.vue";
import EpisodePage from "../views/EpisodePage.vue";
const routes = [
    { path: "/", name: "ShowPage", component: ShowPage },
    { path: "/episode/:id", name: "EpisodePage", component: EpisodePage },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
