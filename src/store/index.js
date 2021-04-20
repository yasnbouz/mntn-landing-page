import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      currentSectionIndex: 0,
    };
  },
  mutations: {
    updatecurrentSection(state, value) {
      state.currentSectionIndex = value;
    },
  },
});
