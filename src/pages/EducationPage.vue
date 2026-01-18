<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme() // reactive theme colors

const education = [
  {
    id: 1,
    program: 'Diploma in Information Technology<br>(Digital Technology)',
    institution: 'Politeknik Ungku Omar, Ipoh, Perak',
    year: '2021',
    cgpa: '3.69'
  }
]
</script>

<template>
      <!-- Background glow effect -->
    <div class="background-glow"></div>

  <VContainer>
    <!-- Top Big Title -->
    <VRow justify="center" class="mb-8">
      <VCol cols="12" md="8" class="text-center">
        <h1 class="about-title">
          Education <span class="hand-wave">🎓</span>
        </h1>
      </VCol>
    </VRow>

    <!-- Education Panels -->
    <VRow justify="center" align="center">
      <VCol cols="12" md="8">
        <VSheet
          class="about-card pa-6"
          elevation="3"
          :style="{ backgroundColor: theme.current.value.colors['purple-dark'] }"
        >
          <VExpansionPanels focusable>
            <VExpansionPanel
              v-for="edu in education"
              :key="edu.id"
              :style="{ backgroundColor: theme.current.value.colors['purple-dark'] }"
            >
              <!-- Panel Title -->
              <VExpansionPanelTitle
                class="panel-title justify-space-between"
                :style="{
                  backgroundColor: theme.current.value.colors['purple-slight'],
                  color: theme.current.value.colors['on-primary']
                }"
              >
                <div v-html="edu.program"></div>
                <VIcon class="mr-2 mdi-spin-hover">mdi-school-outline</VIcon>
              </VExpansionPanelTitle>

              <!-- Panel Text -->
              <VExpansionPanelText
                class="about-summary mt-4"
                :style="{
                  backgroundColor: theme.current.value.colors['surface'],
                  color: theme.current.value.colors['on-surface']
                }"
              >
                <p>
                  <span class="highlight">Institution:</span> {{ edu.institution }}
                </p>
                <p>
                  <span class="highlight">Year:</span> {{ edu.year }} | 
                  <span class="highlight">CGPA:</span> {{ edu.cgpa }}
                </p>
              </VExpansionPanelText>
            </VExpansionPanel>
          </VExpansionPanels>
        </VSheet>
      </VCol>
    </VRow>


  </VContainer>
</template>

<style scoped>
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

.about-card {
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  z-index: 1;
}

.about-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 14px 40px rgba(0,0,0,0.6);
}

.panel-title {
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  padding: 12px 16px;
}

.mdi-spin-hover {
  transition: transform 0.5s ease;
}

.mdi-spin-hover:hover {
  transform: rotate(20deg) scale(1.2);
}

.about-summary {
  font-size: 1rem;
  line-height: 1.8;
  padding: 12px 16px;
  border-radius: 12px;
}

.highlight {
  color: var(--v-theme-info);
  font-weight: 600;
}

.background-glow {
  position: absolute;
  top: 70px;
  left: 300px;
  right: 900px;
  width: 4090px;
  height: 900px;
  background: radial-gradient( #71cdfbc9, transparent 90%);
  filter: blur(100px);
  animation: floatGlow 7s infinite alternate;
  z-index: 0;
}

@keyframes floatGlow {
  0% { transform: translate(0, 0); }
  100% { transform: translate(30px, 40px); }
}
</style>
