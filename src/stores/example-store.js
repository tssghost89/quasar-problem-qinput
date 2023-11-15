import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
    user: {
      token: "",
      username: "",
    }
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
    token: state => state.user.token,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
