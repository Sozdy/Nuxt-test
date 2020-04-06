<template>
  <div class="empty-layout">
    <h1>А это пустой layout</h1>
    <br><br><br><br><br><br>
    <nuxt />
  </div>
</template>

<script>
    export default {
        name: "another_layout"
    }
</script>

<style scoped>
  .empty-layout {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 5rem;
  }
</style>
