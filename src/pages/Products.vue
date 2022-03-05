<template>
    <q-page padding>
        <!-- content -->
        <div class="q-pa-md">
            <q-table
                title="Products"
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
import { mapAction } from "vuex";

const columns = [
    {
        name: "id",
        required: true,
        label: "ID",
        align: "left",
        field: "id",
        sortable: true,
    },
    {
        name: "name",
        required: true,
        label: "Product",
        align: "left",
        field: (row) => row.name,
        format: (val) => `${val}`,
        sortable: true,
    },
    {
        label: "Description",
        name: "description",
        field: "description",
        align: "left",
        format: (val, row) => {
            if (typeof val != "undefined" && val.length > 50) {
                return val.slice(0, 50) + "...";
            } else {
                return val;
            }
        },
        sortable: true,
    },
    {
        label: "Price",
        name: "price",
        field: "price",
        align: "center",
        sortable: true,
        format: (val) => `₱${val}`,
    },
    {
        name: "action",
        field: "action",
    },
];

const rows = [
    {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: "14%",
        iron: "1%",
    },
];

export default {
    name: "PageProduct",

    data() {
        return {
            initialPagination: {
                sortBy: "desc",
                descending: false,
                page: 1,
                rowsPerPage: 10,
                // rowsNumber: xx if getting data from a server
            },
            columns,
            rows,
            selected: [],
        };
    },

    async mounted() {
        const { data } = await this.$api("/product");
        this.rows = data;
    },

    methods: {
        // ...mapActiopn(["cart"]),
        async addToCart(props) {
            const item = {
                id: props.row.id,
                name: props.row.name,
                price: props.row.price,
            };
            this.$store.dispatch("cart/add", item);
        },
    },
};
</script>
