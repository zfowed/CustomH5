<template>
  <el-card :body-style="{ padding: '0px' }">
    <img src="http://img5.imgtn.bdimg.com/it/u=1104713303,1290055170&fm=27&gp=0.jpg" class="image">
      <div style="padding: 14px;">
        <span>组件名称</span>
        <div class="bottom clearfix">
        <div class="component_edit_box time">{{ currentDate }}</div>
          <el-button type="text" class="button">预览</el-button>
        </div>
      </div>
    </el-card>
</template>

<script>
export default {
  name: 'component-card',
  data() {
    return {
      currentDate: new Date(),
    };
  },
};
</script>

<style scoped>

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.component_edit_box {
  width: 100%;
  margin-bottom: 10px;
}
</style>
