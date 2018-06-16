<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
  html, body {
    width: 100%;
    height: 100%;
  }
</style>

<style lang="scss" scoped>
  .app {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
</style>

