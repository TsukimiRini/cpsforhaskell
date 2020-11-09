import {
    createWebHistory,
    createRouter
} from "vue-router";
import HomePage from "@/views/HomePagePanel.vue";

const routes = [{
    path: "/",
    name: "HomePage",
    component: HomePage,
}, ];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;