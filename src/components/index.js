
import Vue from 'vue';

const componentsName = [
  'LayoutPages',
  'TextEdit',
];

const components = {};

componentsName.forEach((componentName) => {
  components[componentName] = () => import(`@/components/${componentName}`).then(result => result.default);
  Vue.component(componentName, components[componentName]);
});

export default components;
