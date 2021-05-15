import Vue from "vue";
import Vuex from "vuex";

import stocks from "./modules/stocks";
import portfolio from "./modules/portfolio";

Vue.use(Vuex);
Vue.filter("currency", (value) => {
  return "$" + value.toLocaleString();
});

export default new Vuex.Store({
  modules: { stocks, portfolio },
});
