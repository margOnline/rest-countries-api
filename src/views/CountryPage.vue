<script setup>
import AppSpinner from '@/components/AppSpinner.vue'
import CountryDetail from '@/components/CountryDetail.vue'

const props = defineProps({
  code: { type: String, required: true },
})
</script>

<template>
  <Suspense>
    <CountryDetail :code="props.code" />
    <template #fallback>
      <AppSpinner />
    </template>
  </Suspense>
</template>
