import Vue from "vue";
import Vuex from "vuex";

const userSelectedDarkMode = window.localStorage.getItem("isDarkMode") === "true";

const state = {
  isDarkMode: userSelectedDarkMode
}

const getters = {
  isDarkMode(state) {
    return state.isDarkMode;
  }
}

const mutations = {
  toggleDarkMode(state) {
    if (state.isDarkMode === true) {
      state.isDarkMode = false;
      document.body.style.background = "#f0f3f5";
      window.localStorage.setItem("isDarkMode", "false");
    } else {
      state.isDarkMode = true;
      document.body.style.background = "#212c4f";
      window.localStorage.setItem("isDarkMode", "false");
    }
  }
}

const actions = {
  triggerDarkMode(context) {
    context.commit('toggleDarkMode');
  }
}

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
