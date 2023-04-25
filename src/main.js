import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Homepage from './components/Homepage.vue';
import Projects from './components/Projects.vue';
import Project from './components/Project.vue';
import About from './components/About.vue';
import NotFound from './components/NotFound.vue';
import { VueScreenSizeMixin } from 'vue-screen-size';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'homepage',
      path: '/',
      component: Homepage,
    },
    {
      name: 'projects',
      path: '/projects',
      component: Projects,
    },
    {
      name: 'project',
      path: '/projects/:projectId',
      component: Project,
    },
    {
      name: 'about',
      path: '/about',
      component: About,
    },
    {
      path: '/:notFount(.*)',
      component: NotFound,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      left: 0,
      top: 0,
    };
  },
});

const app = createApp(App);

app.use(router);
app.mixin(VueScreenSizeMixin);

app.mount('#app');
