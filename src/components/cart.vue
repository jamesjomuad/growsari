<template>
    <section>
        <q-list bordered separator>
            <q-item clickable v-ripple>
                <q-item-section>Single line item</q-item-section>
            </q-item>

            <q-item clickable v-ripple>
                <q-item-section>
                    <q-item-label>Item with caption</q-item-label>
                    <q-item-label caption>Caption</q-item-label>
                </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
                <q-item-section>
                    <q-item-label overline>OVERLINE</q-item-label>
                    <q-item-label>Item with caption</q-item-label>
                </q-item-section>
            </q-item>
        </q-list>
        <div class="action q-pa-md">
            <q-btn color="primary" class="full-width" label="Checkout"></q-btn>
        </div>
    </section>
</template>

<script>
export default {
    // name: 'ComponentName',
    setup() {
        return {};
    },
};
</script>
