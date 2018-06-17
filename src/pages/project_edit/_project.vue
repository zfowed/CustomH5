<template>
  <el-form ref="form" :model="projectEdit.project" label-width="80px">
    <el-form-item label="项目名称">
        <el-input v-model="projectEdit.project.name"></el-input>
    </el-form-item>
    <el-form-item label="头部代码">
        <el-input
          :autosize="{ minRows: 4, maxRows: 8}"
          v-model="projectEdit.project.head"
          type="textarea"
        ></el-input>
    </el-form-item>
    <el-form-item label="底部代码">
        <el-input
          :autosize="{ minRows: 4, maxRows: 8}"
          v-model="projectEdit.project.food"
          type="textarea"
        ></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'project',
  inject: ['projectEdit'],
  data() {
    return {
    };
  },
};
</script>
