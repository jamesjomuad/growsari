<template>
    <q-page padding>
        <!-- content -->
        <div class="q-pa-md">
            <q-table
                title="Products"
                :rows="rows"
                :columns="columns"
                row-key="name"
            />
        </div>
    </q-page>
</template>

<script>
export default {
    // name: 'PageName',
};
</script>
