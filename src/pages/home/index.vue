<template>
  <div class="customize-container">
    <div class="customize-container-header">
      <div class="customize-container-header-title">
        <font-awesome-icon icon="home" /> H5定制工具
      </div>
      <div class="customize-container-header-subtitle">
        <small>V1.00</small>
      </div>
    </div>
    <div class="customize-container-main">
      <div class="customize-container-main-box customize-container-main-plus">
        <div class="customize-container-main-box-title">
          <font-awesome-icon icon="plus" />
        </div>
        <div class="customize-container-main-box-content">
          <p>列表添加</p>
          <p>添加、修改页面</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  // data() {

  // },
  // created() {

  // },
  // destroyed() {

  // },
};
</script>

<style scoped>
  .customize-container{
    width: 100%;
    height: 100%;
  }
  .customize-container-header {
    height: 50%;
    width: 100%;
    padding-left: 25%;
  }
  .customize-container-header-title {
    font-size: 28px;
  }
  .customize-container-header-subtitle {
    color: #e5e2e5;
  }
  .customize-container-main {
    height: 50%;
    width: 100%;
  }
  .customize-container-main-box {
    height: 200px;
    width: 200px;
    color: #ffffff;
    padding: 10px;
    border-radius: 5px;
  }
  .customize-container-main-plus {
    background-color: #605ab1;
  }
  .customize-container-main-box-title {
    width: 100%;
    height: 80%;
  }
  .customize-container-main-box-content {
    width: 100%;
    height: 20%;
  }
</style>
