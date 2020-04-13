import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home.vue';
import Artist from '../pages/Artist.vue';
import Album from '../pages/Album.vue';
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
    path: '/artists/:artist',
    name: 'Artist',
    component: Artist,
    props: true,
  },
  {
    path: 'albums/:artist/:album',
    name: 'Album',
    component: Album,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
