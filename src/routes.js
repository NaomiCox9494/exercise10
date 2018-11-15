import Header from './components/Header.vue';
import LOTR from './components/LOTR.vue';
import About from './components/AboutMe.vue';
import Food from './components/Food.vue';

export const routes = [
  {path: '', component: Header},
  {path: '/lotr', component: LOTR, name:'LOTR'},
  {path: '/aboutme', component: About},
  {path: '/food', component: Food},

  {path: '*', redirect: '/'}
]
