<template>
    <q-page padding>
        <!-- content -->
        <q-btn color="dark" label="Logout" @click="signout"></q-btn>
    </q-page>
</template>

<script>
import { LocalStorage } from "quasar";

export default {
    name: "PageUser",

    methods: {
        signout() {
            LocalStorage.remove("jwt");
            this.$router.push("/signin");
        },
    },
};
</script>
