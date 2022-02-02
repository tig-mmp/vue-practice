<template>
  <h2>List of customers</h2>
  <DataTable
    :value="customers"
    paginator
    :rows="10"
    dataKey="id"
    rowHover
    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
    :rowsPerPageOptions="[10, 25, 50, 100, 500, 100]"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
    responsiveLayout="scroll"
  >
    <template #empty> No customers found. </template>
    <template #loading> Loading customers data. Please wait. </template>
    <Column field="name" header="Name" sortable style="min-width: 14rem" />
    <Column field="country.name" header="Country" sortable style="min-width: 14rem"/>
  </DataTable>
</template>

<script setup lang="ts">
import { useAxios } from "@vueuse/integrations/useAxios";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

const {
  data: customers,
}: {
  data: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
    };
  }[];
} = useAxios("http://localhost:3001/customers");
</script>