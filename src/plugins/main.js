import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import './components.js';
import './Origin.js';
import './directive.js';

import ElementUI from 'element-ui';
Vue.use(ElementUI, {
    size: "small"
});
import 'element-ui/lib/theme-chalk/index.css';