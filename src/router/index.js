import {
    createWebHistory,
    createRouter
} from "vue-router";
import HomePage from "@/views/HomePagePanel.vue";
import ProblemPage from "@/views/ProblemPage.vue";
import SolutionPage from "@/views/SolutionInfoPage.vue"

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
    {
        path: "/solution",
        name: "SolutionPage",
        component: SolutionPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;