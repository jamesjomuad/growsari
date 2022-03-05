<template>
    <section>
        <div v-if="isEmpty" class="q-pa-md text-center">
            <h5 class="text-h4 text-weight-light">EMPTY</h5>
            <span>Choose products</span>
        </div>
        <q-list v-if="isNotEmpty" bordered separator dense class="q-mt-lg">
            <q-item v-for="item in cart.items" :key="item.id" v-ripple>
                <q-item-section>
                    <q-item-label overline>₱{{ item.price }}x1</q-item-label>
                    <q-item-label v-text="item.name" />
                    <q-item-label v-text="item.description" caption lines="2" />
                </q-item-section>
            </q-item>
        </q-list>
        <div v-if="isNotEmpty" class="q-pa-md q-mt-md">
            <h4 class="text-h6 q-my-none">Total</h4>
            <span v-text="total" />
        </div>
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
const _ = require("lodash");

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
        total() {
            var total = _.sumBy(this.cart.items, function (o) {
                return o.price;
            });
            return "₱" + (Math.round(total * 100) / 100).toFixed(2);
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
