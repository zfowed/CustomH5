<template>
  <el-tabs type="border-card" v-model="activeName">
    <el-tab-pane label="项目" name="project">
      <component-project></component-project>
    </el-tab-pane>
    <el-tab-pane label="页面" name="pages">
      <component-pages></component-pages>
    </el-tab-pane>
    <el-tab-pane label="组件" name="components">
      组件配置
    </el-tab-pane>
    <el-tab-pane label="预览" name="preview">
      预览
    </el-tab-pane>
    <el-tab-pane label="导出" name="export">
      导出
    </el-tab-pane>
  </el-tabs>
</template>

<script>

import Project from './_project';
import Pages from './_pages';

export default {
  name: 'project_edit',
  components: {
    'component-project': Project,
    'component-pages': Pages,
  },
  data() {
    return {
      activeName: 'project',
      page: null,
      project: {
        uuid: '',
        name: '项目名称',
        head: '',
        food: '',
        pages: [],
      },
    };
  },
  provide() {
    return {
      projectEdit: this,
    };
  },
  computed: {
    isCreate() {
      return !this.$route.params.uuid;
    },
  },
  methods: {
  },
  created() {
    if (this.isCreate) {
      this.project.uuid = this.$utils.uuid();
    }
    this.page = this.project.pages.length ? this.project.pages[0] : null;
  },
};
</script>

<style scoped>
.tags {
  padding: 0 20px;
}
</style>
