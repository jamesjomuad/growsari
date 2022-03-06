<template>
    <q-page padding>
        <!-- content -->
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
