// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './App';
import './common/rem.js';
import IScrollView from 'vue-iscroll-view';

/* Using these kinds of IScroll class for different cases. */
import IScroll from 'iscroll';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vuex);

Vue.use(IScrollView, IScroll);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});
