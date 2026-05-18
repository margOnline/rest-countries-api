<script setup>
import AppSpinner from '@/components/AppSpinner.vue'
import CountryCardDetail from '@/components/CountryCardDetail.vue'

const props = defineProps({
  code: { type: String, required: true },
})
</script>

<template>
  <Suspense>
    <CountryCardDetail :code="props.code" />
    <template #fallback>
      <AppSpinner />
    </template>
  </Suspense>
</template>
