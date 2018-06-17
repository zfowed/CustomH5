<template>
  <div>
    <header class="header">
      <div class="header-container">
        <router-link class="button" to="/">
          <font-awesome-icon icon="angle-left"></font-awesome-icon>
          返回
        </router-link>
      </div>
    </header>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'layout-pages',
};
</script>

<style lang="scss" scoped>

$header-height: 40px;

.header {
  width: 100%;
  height: $header-height;
}

.header-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: $header-height;
  background-color: #EBEEF5;
  border: solid 1px #E4E7ED;
  z-index: 1000;
}

.button {
  padding: 0 10px;
  line-height: $header-height;
  font-size: 14px;
  display: inline-block;
  color: #409eff;
  background: transparent;
  text-decoration: none;
}

</style>
