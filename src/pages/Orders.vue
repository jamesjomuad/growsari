<template>
    <q-page padding>
        <div class="q-pa-md">
            <q-table
                title="Orders"
                :rows="rows"
                :columns="columns"
                row-key="id"
                selection="multiple"
                v-model:selected="selected"
                :pagination="initialPagination"
            >
                <template #body-cell-action="props">
                    <q-td :props="props">
                        <q-btn
                            rounded
                            color="secondary"
                            icon="add_shopping_cart"
                            @click="addToCart(props)"
                        />
                    </q-td>
                </template>
            </q-table>
        </div>
    </q-page>
</template>

<script>
export default {
    name: "PageOrders",

    async mounted() {
        const { data } = await this.$api("/product");
        this.rows = data;
    },
};
</script>
