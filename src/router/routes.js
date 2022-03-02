const routes = [
    {
        path: "/",
        component: () => import("layouts/MainLayout.vue"),
        children: [
            { path: "", component: () => import("pages/Index.vue") },
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
        path: "/login",
        component: () => import("layouts/BlankLayout.vue"),
        children: [{ path: "", component: () => import("pages/Login.vue") }],
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: "/:catchAll(.*)*",
        component: () => import("pages/Error404.vue"),
    },
];

export default routes;
