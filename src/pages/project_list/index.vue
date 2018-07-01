<template>
  <layout-pages>
    <div class="project_container">
      <h1>项目列表</h1>
      <div>
        <el-table :data="tableData" border>
          <el-table-column prop="name" label="组件名称" width="180"></el-table-column>
          <el-table-column prop="date" label="创建时间" width="180"></el-table-column>
          <el-table-column prop="operating" label="">
            <template slot-scope="scope">
              <el-button type="primary" icon="el-icon-search" class="project_button">预览</el-button>
              <el-button type="warning" icon="el-icon-edit" class="project_button">编辑</el-button>
              <el-button type="danger" icon="el-icon-delete" class="project_button">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </layout-pages>
</template>

<script>
export default {
  name: 'project_list',
  data() {
    return {
      tableData: [
        {
          date: '2018-07-01 10:25',
          name: '组建名称',
        },
      ],
    };
  },
};
</script>

<style scoped>
.project_container {
  padding: 10px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.project_container > h1 {
  padding-left: 10px;
}
.project_button {
  padding: 10px 15px;
}
</style>
