<template>
  <DataTable :value="customers" paginator :rows="10" dataKey="id" rowHover
    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
    :rowsPerPageOptions="[10, 25, 50, 100, 500, 100]"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries" responsiveLayout="scroll"
    v-model:filters="filters" filterDisplay="menu" :globalFilterFields="['name', 'country.name']"
    :loading="!isFinished">
    <template #header>
      <div class="flex justify-content-between">
        <h2 class="m-0">Customers</h2>
        <span class="p-input-icon-left">
          <i class="pi pi-search" />
          <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
        </span>
      </div>
    </template>
    <template #empty>No customers found.</template>
    <template #loading>Loading customers data. Please wait.</template>
    <Column field="name" header="Name" sortable>
      <template #body="{ data }">
        {{ data.name }}
      </template>
    </Column>
    <Column field="country.name" header="Country" sortable filterField="country.name">
      <template #body="{ data }">
        <country-flag :country="data.country.code" />
        <span class="ml-3">{{ data.country.name }}</span>
      </template>
    </Column>
  </DataTable>
</template>

<script setup lang="ts">
import { useAxios } from "@vueuse/integrations/useAxios";
import { FilterMatchMode } from "primevue/api";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import InputText from "primevue/inputtext";
import { ref } from "vue";
import CountryFlag from "vue-country-flag-next";
import { Country } from "../interfaces/Country";

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});

const {
  data: customers,
  isFinished,
} = useAxios<Country[]>("http://localhost:3001/customers");

</script>