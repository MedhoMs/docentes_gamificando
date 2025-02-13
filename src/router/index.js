import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import ContestPage from '../components/ContestPage.vue';
import TeamPage from '@/components/TeamPage.vue';
import GamificappsDescriptionPage from '@/components/GamificappsDescriptionPage.vue';
import InterviewsPage from '@/components/InterviewsPage.vue';
import InterviewsDescriptions from '@/components/InterviewsDescriptions.vue';

const routes = [
  {
    path: '/',
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
  {
    path: '/gamificappsdescription',
    name: 'GamificappsDescription',
    component: GamificappsDescriptionPage,
  },
  {
    path: '/interviews',
    name: 'Interviews',
    component: InterviewsPage,
  },
  {
    path: '/interviews_description',
    name: 'InterviewsDescription',
    component: InterviewsDescriptions,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
