
function component() {
  return Promise.all([
    import(/* webpackChunkName: 'vue-fontawesome' */ '@fortawesome/fontawesome'),
    import(/* webpackChunkName: 'vue-fontawesome' */ '@fortawesome/vue-fontawesome'),
    import(/* webpackChunkName: 'vue-fontawesome' */ '@fortawesome/fontawesome-free-solid'),
    // import(/* webpackChunkName: 'vue-fontawesome' */ '@fortawesome/fontawesome-free-regular'),
    // import(/* webpackChunkName: 'vue-fontawesome' */ '@fortawesome/fontawesome-free-brands'),
  ]).then(([
    { default: fontawesome },
    { default: FontAwesomeIcon },
    { default: solid },
    // { default: regular },
    // { default: brands },
  ]) => {
    fontawesome.library.add(solid);
    // fontawesome.library.add(regular);
    // fontawesome.library.add(brands);
    return FontAwesomeIcon;
  });
}

export default {

  install(Vue) {
    Vue.component('font-awesome-icon', component);
  },

};
