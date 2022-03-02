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

                <div>Quasar v{{ $q.version }}</div>
            </q-toolbar>
        </q-header>

        <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
            <q-list>
                <!-- <q-item-label header> Essential Links </q-item-label> -->

                <EssentialLink
                    v-for="link in essentialLinks"
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

const navs = [
    {
        title: "Orders",
        caption: "Product listings",
        icon: "shopping_cart",
        link: "/products",
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
        link: "/products",
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
            essentialLinks: navs,
            leftDrawerOpen,
            toggleLeftDrawer() {
                leftDrawerOpen.value = !leftDrawerOpen.value;
            },
        };
    },
});
</script>
