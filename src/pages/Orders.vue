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
                            color="secondary"
                            icon="description"
                            @click="view(props)"
                        />
                    </q-td>
                </template>
            </q-table>
        </div>
    </q-page>
</template>

<script>
import { date } from "quasar";

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
        required: true,
        label: "Comment",
        align: "left",
        field: "comment",
        sortable: false,
    },
    {
        required: true,
        label: "Date Ordered",
        align: "left",
        field: "createdAt",
        format: (val) => {
            return new Date(val).toUTCString();
        },
        sortable: false,
    },
    {
        name: "action",
        field: "action",
    },
];

const rows = [];

export default {
    name: "PageOrders",

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
        const { data } = await this.$api("/orders");
        this.rows = data;

        console.log(data);
    },
};
</script>
