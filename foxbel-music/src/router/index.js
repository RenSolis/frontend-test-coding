import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home.vue';
import Artist from '../pages/Artist.vue';
import Search from '../pages/Search.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/search/:word',
    name: 'Search',
    component: Search,
    props: true,
  },
  {
    path: '/artists',
    name: 'Artist',
    component: Artist,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
