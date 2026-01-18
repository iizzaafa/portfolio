<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()

const experience = ref([
  {
    id: 1,
    title: 'Junior Software Developer',
    company: 'Sigma Rectrix System',
    location: 'Malaysia',
    period: '2023 – 2024',
    responsibilities: [
      'Developed software applications and front-end systems.',
      'Maintained servers and DNS records.',
      'Ensured website functionality and data security.',
      'Optimized and managed databases.',
      'Customized Odoo modules for business needs.',
      'Digitalized operational worksheets in MyERP.',
      'Managed company mail servers.',
      'Enhanced mobile helpdesk system using Flutter.'
    ],
    achievements: [
      'Reduced paperwork ~50% by digitalizing worksheets.',
      'Coached students on Ubuntu server administration.',
      'Streamlined processes with customized Odoo modules.',
      'Optimized server and database performance.',
      'Improved usability of mobile helpdesk system.'
    ],
    expanded: false
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'EntryPass Cooperation Sdn Bhd',
    location: 'Selangor, Malaysia',
    period: 'Sep 2024 – Present',
    responsibilities: [
      'Develop full stack web applications using .NET Core (C#) and Vue 3.',
      'Design and optimize RESTful APIs for personnel and visitor systems.',
      'Manage SQL/MySQL databases for secure and efficient storage.',
      'Integrate hardware like card readers for license and IC verification.',
      'Conduct system testing, bug fixes, and deploy updates across servers.',
      'Collaborate with UI/UX teams to enhance responsive interfaces.',
      'Design virtual card forms including add/update/delete features.'
    ],
    achievements: [
      'Automated bulk import/export workflows, reducing manual work ~40%.',
      'Improved visitor check-in and access validation.',
      'Enhanced user interface for virtual card management.',
      'Generated custom PDF reports with color-coded layouts.'
    ],
    expanded: false
  }
])
</script>

<template>
  <div class="background-glow"></div>

  <VContainer>
    <!-- Page Title -->
    <VRow justify="center" class="mb-10">
      <VCol cols="12" md="10" class="text-center">
        <h1 class="about-title">
          Work Experience <span class="hand-wave">💼</span>
        </h1>
      </VCol>
    </VRow>

    <!-- Experience Cards -->
    <VRow justify="center" align="stretch" dense>
      <VCol
        v-for="job in experience"
        :key="job.id"
        cols="12"
        md="6"
      >
        <VSheet
          class="experience-card pa-6"
          elevation="5"
          :style="{ backgroundColor: theme.current.value.colors['purple-dark'] }"
        >
          <!-- Header -->
          <div
            class="d-flex justify-space-between align-center mb-4 header-white"
          >
            <div>
              <div class="text-h6 font-bold card-title">
                {{ job.title }}
              </div>
              <div class="text-subtitle-2 card-subtitle">
                {{ job.company }} | {{ job.location }} | {{ job.period }}
              </div>
            </div>

            <VIcon size="32" color="white">
              mdi-briefcase-outline
            </VIcon>
          </div>


          <!-- Toggle Button -->
          <VBtn
            small
            variant="text"
            class="mb-4 toggle-btn purple-light-btn"
            @click="job.expanded = !job.expanded"
          >
            <VIcon start color="inherit">
              {{ job.expanded ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
            </VIcon>
            {{ job.expanded ? 'Hide Details' : 'View Details' }}
          </VBtn>


          <!-- Expanded Content -->
          <VExpandTransition>
            <div v-if="job.expanded">
              <!-- Responsibilities -->
              <VList dense nav class="mt-2">
                <VListItem>
                  <template #prepend>
                    <VIcon small color="info">mdi-clipboard-text-outline</VIcon>
                  </template>
                  <div class="section-title">Responsibilities</div>
                </VListItem>

                <VListItem
                  v-for="(r, idx) in job.responsibilities"
                  :key="'r-' + idx"
                  class="list-item-content"
                >
                  <template #prepend>
                    <VIcon small color="secondary">mdi-chevron-right</VIcon>
                  </template>
                  <div>{{ r }}</div>
                </VListItem>

                <!-- Achievements -->
                <VListItem class="mt-3">
                  <template #prepend>
                    <VIcon small color="success">mdi-star-outline</VIcon>
                  </template>
                  <div class="section-title">Key Achievements</div>
                </VListItem>

                <VListItem
                  v-for="(a, idx) in job.achievements"
                  :key="'a-' + idx"
                  class="list-item-content"
                >
                  <template #prepend>
                    <VIcon small color="success">mdi-check-circle-outline</VIcon>
                  </template>
                  <div>{{ a }}</div>
                </VListItem>
              </VList>
            </div>
          </VExpandTransition>
        </VSheet>
      </VCol>
    </VRow>
  </VContainer>
</template>

<style scoped>
/* Background glow */
.background-glow {
  position: absolute;
  top: 250px;
  left: -100px;
  width: 2000px;
  height: 600px;
  background: radial-gradient(circle, #7f5af0aa, transparent 80%);
  filter: blur(120px);
  animation: floatGlow 8s infinite alternate;
  z-index: 0;
}

/* Titles */
.about-title {
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: var(--v-theme-on-background);
}

.hand-wave {
  display: inline-block;
  font-size: 2.5rem;
  transform-origin: 70% 70%;
  animation: wave 2s infinite;
}

@keyframes wave {
  0%, 100% { transform: rotate(0deg); }
  15% { transform: rotate(15deg); }
  30% { transform: rotate(-10deg); }
  45% { transform: rotate(15deg); }
  60% { transform: rotate(-10deg); }
  75% { transform: rotate(15deg); }
}

/* Experience Card */
.experience-card {
  border-radius: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
}

.experience-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.5);
}

/* Card Text */
.card-title {
  font-size: 1.25rem;
}

.card-subtitle {
  
  font-size: 0.9rem;
  opacity: 0.8;
}
.header-white {
  color: #ffffff;
}

.toggle-btn {
  border-radius: 12px;
}
.purple-light-btn {
  color: #e9d5ff; /* VERY LIGHT PURPLE (readable) */
  border: 4px solid var(--v-theme-primary);
  border-radius: 12px;
  padding-inline: 16px;
  transition: all 0.25s ease;
}

.purple-light-btn:hover {
  background-color: rgba(168, 85, 247, 0.18);
  color: #ffffff;
}

/* List content */
.section-title {
  font-weight: 600;
  color: var(--v-theme-on-primary);
}

.list-item-content {
  font-size: 0.95rem;
  color: var(--v-theme-on-primary);
}
</style>
