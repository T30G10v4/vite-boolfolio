import {createRouter, createWebHistory} from "vue-router";

import HomePage from "./pages/HomePage.vue"
import AboutUs from "./pages/AboutUs.vue"
import Projects from "./pages/Projects.vue"
import NotFound from "./pages/NotFound.vue"

const router = createRouter({

    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
        },

        {
            path: "/about-us",
            name: "about-us",
            component: AboutUs,
        },

        {
            path: "/projects",
            name: "projects",
            component: Projects,
        },

        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: NotFound,
        },

    ],


});

export { router };