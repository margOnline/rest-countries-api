<script setup>
import { state } from '@/store'
import router from '@/router'

const goHome = () => {
  state.value.hasError = false
  router.push('/')
}
</script>

<template>
  <section>
    <div>
      <h1>404</h1>
      <p>Page Not Found</p>
      <p>Sorry, an error has occurred, requested page not found</p>
      <button @click="goHome" class="custom-shadow">
        <span class="transition-all duration-200 ease-linear hover:-translate-y-0.5">
          Go back home
        </span>
      </button>
    </div>
  </section>
</template>

<style scoped>
section {
  margin-block-start: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--grey-400);
}
h1 {
  font-size: 4rem;
}
button {
  padding: 1rem;
}
button:hover {
  transform: translateY(-0.125rem);
  transition: all 0.125s ease-out;
}
</style>
