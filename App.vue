<script setup>
import AppSpinner from '@/components/AppSpinner.vue'
import AsyncApp from './components/AsyncApp.vue'
</script>

<template>
  <div>
    <Suspense>
      <AsyncApp />
      <template #fallback>
        <AppSpinner />
      </template>
    </Suspense>
  </div>
</template>

<style scoped></style>
