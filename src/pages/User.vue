<template>
    <q-page padding>
        <!-- content -->
        <q-btn color="dark" label="Logout" @click="signout"></q-btn>
    </q-page>
</template>

<script>
import { LocalStorage } from "quasar";
import { mapState } from "vuex";

export default {
    name: "PageUser",

    mounted() {
        console.log(this.auth);
    },

    computed: {
        ...mapState(["auth"]),
    },

    methods: {
        signout() {
            LocalStorage.remove("jwt");
            this.$router.push("/signin");
        },
    },
};
</script>
