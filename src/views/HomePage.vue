<script setup>
import AppSpinner from '@/components/AppSpinner.vue'
import AsyncApp from '@/components/AsyncApp.vue'
</script>

<template>
  <Suspense>
    <AsyncApp />
    <template #fallback>
      <AppSpinner />
    </template>
  </Suspense>
</template>
