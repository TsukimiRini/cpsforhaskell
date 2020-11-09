import {
    createWebHistory,
    createRouter
} from "vue-router";
import HomePage from "@/views/HomePagePanel.vue";
import ProblemPage from "@/views/ProblemPage.vue";

const routes = [{
        path: "/",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/problem",
        name: "ProblemPage",
        component: ProblemPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;