import { LocalStorage, SessionStorage } from "quasar";
import jwt from "jsonwebtoken";
const secretKey = "ErVGY39nT52NzHT";

function isAuthenticated(to, from, next) {
    var isAuthenticated = false;
    if (LocalStorage.getItem("jwt") && LocalStorage.getItem("jwt").length)
        if (jwt.verify(token, secretKey)) {
            isAuthenticated = true;
        } else isAuthenticated = false;
    if (isAuthenticated) {
        next();
    } else {
        next("/signin");
    }
}

const routes = [
    {
        path: "/",
        beforeEnter: isAuthenticated,
        component: () => import("layouts/MainLayout.vue"),
        children: [
            {
                path: "",
                component: () => import("pages/Index.vue"),
            },
            { path: "orders", component: () => import("src/pages/Orders.vue") },
            {
                path: "products",
                component: () => import("src/pages/Products.vue"),
            },
            {
                path: "customers",
                component: () => import("src/pages/Customers.vue"),
            },
            { path: "user", component: () => import("src/pages/User.vue") },
            {
                path: "inventory",
                component: () => import("src/pages/Inventory.vue"),
            },
        ],
    },

    {
        path: "/signin",
        component: () => import("layouts/BlankLayout.vue"),
        children: [
            { path: "", component: () => import("src/pages/Signin.vue") },
        ],
    },

    {
        path: "/signup",
        component: () => import("layouts/BlankLayout.vue"),
        children: [
            { path: "", component: () => import("src/pages/Signup.vue") },
        ],
    },

    {
        path: "/:catchAll(.*)*",
        component: () => import("pages/Error404.vue"),
    },
];

export default routes;
