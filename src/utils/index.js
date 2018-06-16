
import Vue from 'vue';
import lodash from 'lodash';
import uuid from 'uuid/v1';


const utils = { lodash, uuid };

Object.assign(Vue, {
  $utils: utils,
});

Object.assign(Vue.prototype, {
  $utils: utils,
});

