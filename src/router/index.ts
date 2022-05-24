import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue')
    },
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: '/add-post',
      name: 'add-post',
      component: () => import('../views/AddPostView.vue')
    },
    {
      path: '/my-posts',
      name: 'my-posts',
      component: () => import('../views/MyPostsView.vue')
    },
    {
      path: '/favourite-posts',
      name: 'favourite-posts',
      component: () => import('../views/FavouritesView.vue')
    },
    {
      path: '/more/:id',
      name: 'read-more',
      component: () => import('../views/ReadMoreView.vue')
    }
  ]
})

export default router;
