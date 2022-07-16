import { createWebHistory, createRouter } from "vue-router";
import WelcomePage from "../pages/WelcomePage.vue";
import FormPage from "../pages/FormPage.vue";
import SummaryPage from "../pages/SummaryPage.vue";
import AgeErrorPage from "../pages/AgeErrorPage.vue";

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: WelcomePage,
  },
  {
    path: "/form",
    name: "Form",
    component: FormPage,
  },
  {
    path: "/summary",
    name: "Summary",
    component: SummaryPage,
  },
  {
    path: "/age-error",
    name: "Age Error",
    component: AgeErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
