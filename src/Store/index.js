
import Vue from 'vue';
import Vuex from 'vuex';
import tag from './modules/tag'
Vue.use(Vuex);
//静态存值

const store = new Vuex.Store(
    tag
);

export default store;
