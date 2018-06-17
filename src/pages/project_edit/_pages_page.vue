<template>
  <el-form :model="page" label-width="80px">
    <el-form-item label="名称">
      <!-- <el-input v-model="page.name"></el-input> -->
      <text-edit v-model="page.name" message="请输入名称" :validator="checkPageName" ></text-edit>
    </el-form-item>
    <el-form-item label="样式">
      <el-input
        :autosize="{ minRows: 4, maxRows: 8}"
        v-model="page.style"
        type="textarea"
      ></el-input>
    </el-form-item>
    <el-form-item label="脚本">
      <el-input
        :autosize="{ minRows: 4, maxRows: 8}"
        v-model="page.script"
        type="textarea"
      ></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'page',
  props: ['page', 'checkPageName'],
};
</script>
