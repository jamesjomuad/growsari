<template>
    <q-layout view="lHh Lpr lFf">
        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "BlankLayout",

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
