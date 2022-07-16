import { createApp } from "vue";
import { createStore } from "vuex";
import "./style.css";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import formStore from "./store/formStore";

const store = createStore({
  modules: {
    formStore
  },
});

createApp(App).use(router).use(store).mount("#app");
