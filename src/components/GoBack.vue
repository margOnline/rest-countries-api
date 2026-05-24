<template>
  <div class="go-back">
    <button class="custom-shadow" @click="goBack">
      <font-awesome-icon icon="fa-solid fa-arrow-left" class="spacer" />Back
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1)
    },
  },
}
</script>
<style scoped>
.go-back {
  display: flex;
  cursor: pointer;
}
button {
  padding: 0.5rem 1rem;
  color: var(--primary-color);
  background-color: var(--bg-color);
}
.spacer {
  margin-inline-end: 1rem;
}
</style>
