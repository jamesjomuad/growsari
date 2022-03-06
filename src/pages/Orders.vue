<template>
    <q-page padding>
        <div class="q-pa-md">
            <q-table
                title="Orders"
                :rows="rows"
                :columns="columns"
                row-key="id"
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
const moment = require("moment");
const _ = require("lodash");

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
            return moment(val).calendar() + " / " + moment(val).fromNow();
        },
        sortable: false,
    },
    {
        required: true,
        label: "Number of Items",
        align: "left",
        field: "OrderProducts",
        format: (val) => {
            return val.length;
        },
        sortable: false,
    },
    {
        required: true,
        label: "Total",
        align: "left",
        field: "OrderProducts",
        format: (val) => {
            var total = _.sumBy(val, function (o) {
                return o.unitPrice;
            });
            return "₱" + (Math.round(total * 100) / 100).toFixed(2);
        },
        sortable: false,
    },
];

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
            rows: [],
            selected: [],
        };
    },

    async mounted() {
        const { data } = await this.$api("/orders");
        this.rows = data;
    },
};
</script>
