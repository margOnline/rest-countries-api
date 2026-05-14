<template>
  <div class="go-back">
    <button @click="goBack"><font-awesome-icon icon="fa-solid fa-arrow-left" />Back</button>
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
  color: var(--grey-950);
  border: 1px solid var(--grey-400);
  background-color: var(--white);
}
</style>
