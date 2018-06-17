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
      <span class="tab-label" slot="label">{{page.name}}</span>
      <component-page :page="page" :check-page-name="checkPageName"></component-page>
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
      return this.promptAddPage((value) => {
        this.pageAdd(value);
      });
    },
    tabsRemove(uuid) {
      this.confirmRemovePage(() => {
        const pages = this.projectEdit.project.pages;
        const pageIndex = pages.findIndex(item => item.uuid === uuid);
        pages.splice(pageIndex, 1);
        const nextPage = pages[pageIndex] || pages[pages.length - 1] || null;
        if (nextPage) {
          this.pageChange(nextPage);
        } else {
          this.pageAdd('默认页');
        }
      });
    },
    pageAdd(name) {
      const page = {
        uuid: this.$utils.uuid(),
        name,
        style: '',
        script: '',
        components: [],
      };
      this.projectEdit.project.pages.push(page);
      this.pageChange(page);
    },
    pageChange(page = this.projectEdit.project.pages[0]) {
      if (!page) { return null; }
      this.projectEdit.page = page;
      this.tagsModel = page.uuid;
      return page;
    },
    promptAddPage(callback) {
      this.$prompt('请输入新页面的名称', '提示', {
        confirmButtonText: '创建页面',
        inputValidator: value => this.checkPageName(value),
      }).then(({ value }) => callback(value), () => null);
    },
    confirmRemovePage(callback) {
      this.$confirm('此操作将删除该页面, 是否继续?', '警告', {
        confirmButtonText: '删除',
        type: 'warning',
      }).then(() => callback(), () => null);
    },
    checkPageName(name) {
      if (!name) {
        return '标题不允许为空！';
      }
      const page = this.projectEdit.project.pages.find(item => item.name === name);
      if (page) {
        return `已经存在 [${name}] 页面了`;
      }
      return true;
    },
  },
  created() {
    if (!this.projectEdit.project.pages.length) {
      this.pageAdd('默认页');
    }
    this.pageChange(this.projectEdit.page || this.projectEdit.project.pages[0]);
  },
};
</script>

<style lang="scss" scoped>
.tab-label {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 85px;
  overflow: hidden;
  vertical-align: middle;
}
</style>
