<template>
    <q-page padding>
        <!-- content -->
        <q-form class="q-gutter-md">
            <q-input
                outlined
                v-model="text"
                label="Username"
                stack-label
                :dense="dense"
            />
            <q-input
                outlined
                v-model="text"
                label="Full Name"
                stack-label
                :dense="dense"
            />
            <q-input
                outlined
                v-model="text"
                label="Email"
                stack-label
                :dense="dense"
            />
        </q-form>
        <pre v-text="auth"></pre>
    </q-page>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "PageUser",

    computed: {
        ...mapState(["auth"]),
    },
};
</script>
/
