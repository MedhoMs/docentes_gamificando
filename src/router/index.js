import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import ContestPage from '../views/ContestPage.vue';
import TeamPage from '@/components/TeamPage.vue';

const routes = [
  {
    path: '/pantalla',
    name: 'HelloWorld',
    component: HelloWorld,
  },
  {
    path: '/contest',
    name: 'Contest',
    component: ContestPage,
  },
  {
    path: '/team',
    name: 'Team',
    component: TeamPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
