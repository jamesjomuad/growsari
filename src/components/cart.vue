<template>
    <section>
        <div class="q-my-md"></div>
        <q-list v-if="isNotEmpty" bordered separator>
            <q-item v-for="item in cart.items" :key="item.id" v-ripple>
                <q-item-section>
                    <q-item-label overline>₱{{ item.price }}</q-item-label>
                    <q-item-label v-text="item.name" />
                    <q-item-label caption>x1</q-item-label>
                </q-item-section>
            </q-item>
        </q-list>
        <div v-if="isNotEmpty" class="action q-pa-md">
            <q-btn color="primary" class="full-width" label="Checkout"></q-btn>
        </div>
    </section>
</template>

<script>
import { mapState } from "vuex";

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
        checkout() {},
    },
};
</script>
