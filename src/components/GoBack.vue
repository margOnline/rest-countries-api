<template>
  <div class="go-back custom-shadow">
    <button @click="goBack"><font-awesome-icon icon="fa-solid fa-arrow-left" class="spacer"/>Back</button>
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
  color: var(--grey-400);
  background-color: var(--white);
}
.spacer {
  margin-inline-end: 1rem;
}
</style>
