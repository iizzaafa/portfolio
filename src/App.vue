<script setup>
import { ref } from 'vue'

import NavBar from './components/NavBar.vue'

// Pages
import HomePage from './pages/HomePage.vue'
import AboutPage from './pages/AboutPage.vue'
import ProjectsPage from './pages/ProjectsPage.vue'
import SkillsPage from './pages/SkillsPage.vue'
import ExperiencePage from './pages/ExperiencePage.vue'
import EducationPage from './pages/EducationPage.vue'
import ContactPage from './pages/ContactPage.vue'

const currentPage = ref('Home')

const pageMap = {
  Home: HomePage,
  About: AboutPage,
  Projects: ProjectsPage,
  Skills: SkillsPage,
  Experience: ExperiencePage,
  Education: EducationPage,
  Contact: ContactPage,
}
</script>

<template>
  <VApp>
    <VMain>

      <!-- Top Navigation -->
      <NavBar @change="page => currentPage = page" />

      <!-- Page Content -->
      <VContainer class="py-10">
        <component :is="pageMap[currentPage]" />
      </VContainer>

    </VMain>
  </VApp>
</template>
