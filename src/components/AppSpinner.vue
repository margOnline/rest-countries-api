<script setup></script>

<template>
  <div role="status" class="spinner">
    <span class="sr-only">Loading...</span>
  </div>
</template>

<style scoped>
.spinner {
  width: 3rem;
  height: 3rem;
  border: 3px solid var(--grey-400);
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.spinner::after {
  content: '';
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: 3px solid;
  border-color: var(--grey-250) transparent;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
