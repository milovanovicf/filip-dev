import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Homepage from './components/Homepage.vue';
import Projects from './components/Projects.vue';
import Project from './components/Project.vue';
import About from './components/About.vue';
import NotFound from './components/NotFound.vue';
import projectsData from './ProjectsData';

const projectExists = (slug) => {
  return projectsData.some((project) => project.slug === slug);
};

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
      path: '/projects/:slug',
      component: Project,
      beforeEnter: (to, _, next) => {
        if (projectExists(to.params.slug)) {
          next();
        } else {
          next('/projects');
        }
      },
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

app.mount('#app');
