import {
    createWebHistory,
    createRouter
} from "vue-router";
import HomePage from "@/views/HomePagePanel.vue";
import ProblemPage from "@/views/ProblemPage.vue";
import SolutionPage from "@/views/SolutionInfoPage.vue";
import SolutionEditPage from "@/views/SolutionEditPage";

const routes = [{
        path: "/",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/problem/:id",
        name: "ProblemPage",
        component: ProblemPage,
        props:true,
    },
    {
        path: "/solution",
        name: "SolutionPage",
        component: SolutionPage,
    },
    {
        path:"/edit-solution",
        component:SolutionEditPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;