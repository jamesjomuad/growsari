<template>
    <q-page padding>
        <!-- content -->
        <pre v-text="auth"></pre>
        <q-btn color="dark" label="Logout" @click="signout"></q-btn>
    </q-page>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "PageUser",

    computed: {
        ...mapState(["auth"]),
    },

    methods: {
        signout() {
            this.$store.dispatch("auth/destroy");
            this.$router.push("/signin");
        },
    },
};
</script>
/
