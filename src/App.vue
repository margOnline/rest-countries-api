<script setup>
import { state } from './store/store'
import AppSpinner from './components/AppSpinner.vue'
</script>

<template>
  <div>
    <div class="center" v-if="state.isLoading">
      <AppSpinner />
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
