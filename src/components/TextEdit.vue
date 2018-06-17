<template>
  <span>{{model}} <i @click="click">修改</i></span>
</template>

<script>
export default {
  name: 'text-edit',
  data() {
    return {
      model: this.value,
    };
  },
  watch: {
    value() {
      this.model = this.value;
    },
    model() {
      this.$emit('input', this.model);
    },
  },
  props: {
    value: {
      type: String,
    },
    title: {
      type: String,
      default: '',
    },
    message: {
      type: String,
      default: '请输入新的值',
    },
    validator: {
      type: Function,
      default() {
        return function validator() {};
      },
    },
  },
  methods: {
    click() {
      this.$prompt(this.message, this.title, {
        inputValidator: this.validator,
        inputPlaceholder: this.message,
      }).then(({ value }) => {
        this.model = value;
      }, () => null);
    },
  },
};
</script>

<style lang="scss" scoped>
i {
  color: #409eff;
}
</style>
