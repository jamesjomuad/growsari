<template>
    <q-page padding>
        <!-- content -->
        <q-form class="q-gutter-md">
            <q-input
                outlined
                v-model="user.username"
                label="Username"
                stack-label
                :dense="dense"
            />
            <q-input
                outlined
                v-model="user.fullName"
                label="Full Name"
                stack-label
                :dense="dense"
            />
            <q-input
                outlined
                v-model="user.email"
                label="Email"
                stack-label
                :dense="dense"
            />
        </q-form>
    </q-page>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    name: "PageUser",

    computed: {
        ...mapState(["auth"]),
        ...mapState(["user"]),
    },

    mounted() {
        this.get();
    },

    methods: {
        ...mapActions("user", ["get"]),
    },
};
</script>
/
