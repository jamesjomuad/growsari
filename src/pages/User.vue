<template>
    <q-page padding>
        <!-- content -->
        <div class="row">
            <div class="col">
                <q-form class="q-gutter-md">
                    <q-input
                        outlined
                        v-model="user.username"
                        label="Username"
                        stack-label
                    />
                    <q-input
                        outlined
                        v-model="user.fullName"
                        label="Full Name"
                        stack-label
                    />
                    <q-input
                        outlined
                        v-model="user.email"
                        label="Email"
                        stack-label
                    />
                </q-form>
            </div>
            <div class="col q-pa-md">
                <pre>{{ user }}</pre>
            </div>
        </div>
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
