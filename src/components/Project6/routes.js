import TheHome from "./TheHome.vue";
import AboutMe from "./AboutMe.vue";
import ThePosts from "./ThePosts.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: TheHome },
  { path: "/about", component: AboutMe },
  { path: "/posts", component: ThePosts },
];
export const router = createRouter({
  history: createWebHistory(),
  routes,
});
