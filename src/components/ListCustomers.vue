<template>
  <h2>List of customers</h2>
  <div v-for="customer in customers" :key="customer.id">
    {{ customer.name }}
  </div>
</template>

<script setup lang="ts">
import { useAxios } from "@vueuse/integrations/useAxios";

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