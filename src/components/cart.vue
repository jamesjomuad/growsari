<template>
    <section>
        <div class="q-mt-md"></div>
        <div v-if="isEmpty" class="q-pa-md text-center">
            <h5 class="text-h4 text-weight-light">EMPTY</h5>
        </div>
        <q-list v-if="isNotEmpty" bordered separator dense>
            <q-item v-for="item in cart.items" :key="item.id" v-ripple>
                <q-item-section>
                    <q-item-label overline>₱{{ item.price }}</q-item-label>
                    <q-item-label v-text="item.name" />
                    <q-item-label caption>x1</q-item-label>
                </q-item-section>
            </q-item>
        </q-list>
        <div v-if="isNotEmpty" class="action row">
            <q-btn
                color="primary"
                class="col q-ma-sm"
                label="Checkout"
                @click="checkout"
            ></q-btn>
            <q-btn
                color="info"
                class="col q-ma-sm"
                label="Clear"
                @click="clear"
            ></q-btn>
        </div>
    </section>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    name: "ComponentCart",

    computed: {
        ...mapState(["cart"]),
        isEmpty() {
            return this.cart.items.length == 0 ? true : false;
        },
        isNotEmpty() {
            return !this.isEmpty;
        },
    },

    methods: {
        ...mapActions(["cart"]),
        async checkout() {
            try {
                const result = await this.$api.post("/order", this.cart.items);
                if (result.data) {
                    this.$q.notify({
                        message: `Checked out successfuly!`,
                        color: "positive",
                    });
                    this.clear();
                }
            } catch (error) {
                this.$q.notify({
                    message: `Error checking out!`,
                    color: "negative",
                });
            }
        },
        clear() {
            this.$store.dispatch("cart/clear");
        },
    },
};
</script>
