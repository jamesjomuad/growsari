<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated>
            <q-toolbar>
                <q-btn
                    flat
                    dense
                    round
                    icon="menu"
                    aria-label="Menu"
                    @click="toggleLeftDrawer"
                />

                <q-toolbar-title> Grow Sari </q-toolbar-title>

                <div>v{{ $q.version }}</div>
            </q-toolbar>
        </q-header>

        <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
            <q-list
                bordered
                padding
                class="rounded-borders text-primary q-ma-md"
            >
                <!-- <q-item-label header> Essential Links </q-item-label> -->

                <EssentialLink
                    v-for="link in mainNavs"
                    :key="link.title"
                    v-bind="link"
                />
            </q-list>

            <q-list
                bordered
                padding
                class="bg-blue-1 rounded-borders text-primary q-ma-md"
            >
                <EssentialLink
                    v-for="link in secondarynavs"
                    :key="link.title"
                    v-bind="link"
                />
            </q-list>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const mainNavs = [
    {
        title: "Orders",
        caption: "Product listings",
        icon: "shopping_cart",
        link: "/orders",
    },
    {
        title: "Products",
        caption: "Product listings",
        icon: "shopping_bag",
        link: "/products",
    },
    {
        title: "Customers",
        caption: "Product listings",
        icon: "supervised_user_circle",
        link: "/customers",
    },
];

const secondarynavs = [
    {
        title: "Inventory",
        caption: "Sales report",
        icon: "insights",
        link: "/inventory",
    },
    {
        title: "User",
        caption: "Manage user settings",
        icon: "account_circle",
        link: "/user",
    },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "MainLayout",

    components: {
        EssentialLink,
    },

    setup() {
        const leftDrawerOpen = ref(false);

        return {
            mainNavs: mainNavs,
            secondarynavs: secondarynavs,
            leftDrawerOpen,
            toggleLeftDrawer() {
                leftDrawerOpen.value = !leftDrawerOpen.value;
            },
        };
    },
});
</script>
