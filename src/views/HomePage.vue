<script setup>
import AppSpinner from '@/components/AppSpinner.vue'
import CountriesGrid from '@/components/CountriesGrid.vue'
</script>

<template>
  <Suspense>
    <CountriesGrid />
    <template #fallback>
      <AppSpinner />
    </template>
  </Suspense>
</template>
