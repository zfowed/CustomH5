<template>
  <layout-pages>
    <div class="page">
      <el-form :inline="true" :model="formInline">
        <el-form-item label="分类" prop="value5" >
          <el-select v-model="formInline.value5" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="组件名" prop="user" >
          <el-input v-model="formInline.user" placeholder="组件名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="box">
      <el-row>
        <el-col :span="8" v-for="(o) in 3" :key="o" style="padding: 0 10px;">
          <component-card></component-card>
        </el-col>
      </el-row>
    </div>
  </layout-pages>
</template>

<script>
export default {
  name: 'component_list',
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
      formInline: {
        user: '',
        value5: '',
      },
      currentDate: new Date(),
    };
  },
};
</script>

<style scoped>
.page {
  padding: 20px;
}
.box {
  padding: 0 10px;
}
</style>
