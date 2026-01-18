<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme() // reactive access to theme colors
</script>

<template>
  <VContainer>
    <!-- Top Big Title -->
    <VRow justify="center" class="mb-8">
      <VCol cols="12" md="8" class="text-center">
        <h1 class="about-title">
          About Me <span class="hand-wave">👋</span>
        </h1>
      </VCol>
    </VRow>

    <!-- Expansion Panel -->
    <VRow justify="center" align="center">
      <VCol cols="12" md="8">
        <VSheet
          class="about-card pa-6"
          elevation="3"
          :style="{ backgroundColor: theme.current.value.colors['purple-dark'] }"
        >
          <VExpansionPanels focusable>
            <VExpansionPanel
              :value="true"
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
                <div class="text-subtitle">
                  My Journey
                </div>
                <VIcon class="mdi-spin-hover">mdi-star</VIcon>
              </VExpansionPanelTitle>

              <!-- Panel Text -->
              <VExpansionPanelText
                class="about-summary mt-5"
                :style="{
                  backgroundColor: theme.current.value.colors['surface'],
                  color: theme.current.value.colors['on-surface']
                }"
              >
                <p>
                  <span :style="{ color: theme.current.value.colors.secondary, fontWeight: 600 }">
                    Full Stack Developer
                  </span>
                  with <span class="highlight">2+ years of experience</span> building web applications using
                  <span class="highlight">Vue 3</span>, <span class="highlight">.NET Core (C#)</span>, and
                  <span class="highlight">Python/Odoo</span>.
                  Strong in <span class="highlight">REST APIs</span>, <span class="highlight">SQL</span>, and
                  <span class="highlight">workflow automation</span>.
                  Skilled in integrating <span class="highlight">enterprise hardware systems</span> and delivering
                  <span class="highlight">scalable, secure solutions</span> for better <span class="highlight">UX</span>.
                </p>
              </VExpansionPanelText>
            </VExpansionPanel>
          </VExpansionPanels>
        </VSheet>
      </VCol>
    </VRow>

    <!-- Background glow effect -->
    <div class="background-glow"></div>
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
  top: 50px;
  left: 10px;
  width: 1800px;
  height: 500px;
  background: radial-gradient( #86038666, transparent 70%);
  filter: blur(100px);
  animation: floatGlow 7s infinite alternate;
  z-index: 0;
}

@keyframes floatGlow {
  0% { transform: translate(0, 0); }
  100% { transform: translate(30px, 40px); }
}
</style>
