import { IForm } from "../utils/interfaces";

const formStore = {
  namespaced: true,
  state: () => ({
    name: "",
    age: 0,
    location: "",
    type: "",
    premium: "",
  }),
  mutations: {
    setFormMut(currentState: IForm, form: IForm) {
      for (let key in currentState) {
        currentState[key] = form[key];
      }
    },
  },
};

export default formStore;
