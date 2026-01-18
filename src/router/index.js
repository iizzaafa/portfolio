// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import ProjectsPage from '../pages/ProjectsPage.vue'
import SkillsPage from '../pages/SkillsPage.vue'
import ExperiencePage from '../pages/ExperiencePage.vue'
import EducationPage from '../pages/EducationPage.vue'
import ContactPage from '../pages/ContactPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/projects', component: ProjectsPage },
  { path: '/skills', component: SkillsPage },
  { path: '/experience', component: ExperiencePage },
  { path: '/education', component: EducationPage },
  { path: '/contact', component: ContactPage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
