import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import lax from "lax.js";
import VueSmoothScroll from "vue2-smooth-scroll";
import DrawerLayout from "vue-drawer-layout";
import VueMouseFollower from "vue-mousefollower";

Vue.config.productionTip = false;
Vue.prototype.$lax = lax;
Vue.use(VueSmoothScroll);
Vue.use(DrawerLayout);
Vue.use(VueMouseFollower);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
