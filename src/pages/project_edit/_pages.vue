<template>
  <el-tabs
    v-model="tagsModel"
    tab-position="left"
    editable
    @tab-click="tabsChange"
    @tab-add="tabsAdd"
    @tab-remove="tabsRemove"
  >
    <el-tab-pane
      v-for="page in projectEdit.project.pages"
      :key="page.uuid"
      :label="page.name"
      :name="page.uuid"
    >
      <component-page :page="page"></component-page>
    </el-tab-pane>
  </el-tabs>
</template>

<script>

import Page from './_pages_page';

export default {
  name: 'pages',
  components: {
    'component-page': Page,
  },
  inject: ['projectEdit'],
  data() {
    return {
      tagsModel: '',
    };
  },
  methods: {
    tabsChange(component) {
      const page = this.projectEdit.project.pages.find(item => item.uuid === component.name);
      return this.pageChange(page);
    },
    tabsAdd() {
      const page = {
        uuid: this.$utils.uuid(),
        name: '新页面',
        style: '',
        script: '',
        components: [],
      };
      this.projectEdit.project.pages.push(page);
      return this.pageChange(page);
    },
    tabsRemove(name) {
      const pageIndex = this.projectEdit.project.pages.findIndex(item => item.uuid === name);
      const page = this.projectEdit.project.pages[pageIndex];
      if (this.projectEdit.project.pages.length <= 1) {
        return this.pageChange(page);
      }
      const prevPage = this.projectEdit.project.pages[pageIndex - 1];
      this.projectEdit.project.pages.splice(pageIndex, 1);
      return this.pageChange(prevPage);
    },
    pageChange(page = this.projectEdit.project.pages[0]) {
      if (!page) { return null; }
      this.projectEdit.page = page;
      this.tagsModel = page.uuid;
      return page;
    },
  },
  created() {
    if (!this.projectEdit.project.pages.length) {
      this.tabsAdd();
    }
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 0;
}
.main {
  padding-top: 0;
  padding-bottom: 0;
  padding-right: 0;
}
.main-card {
  box-shadow: none;
}
</style>
