<script setup>
import { useTheme } from 'vuetify'
import { VIcon, VCard, VContainer, VRow, VCol } from 'vuetify/components'

// get the theme
const theme = useTheme()
</script>

<template>
        <div class="background-glow"></div>

  <VContainer class="hero-section py-12" fluid>
    <VRow align="center" justify="space-between" class="flex-nowrap">

      <!-- LEFT: Text -->
      <VCol cols="12" md="6" class="d-flex flex-column justify-center">
        <div class="hero-content">

          <VCard
            class="welcome-card d-inline-flex align-center pa-3 mb-4"
            elevation="2"
            variant="flat"
            :style="{
              backgroundColor: theme.current.value.colors['purple-dark'],
              color: theme.current.value.colors['purple-light'],
              border: `3px solid ${theme.current.value.colors['purple-light']}`
            }"
          >

            <VIcon
              icon="mdi-human-greeting-variant"
              size="28"
              class="me-2"
              color="white"
            />
            <span class="text-subtitle-1 white--text">
              Welcome to my portfolio
            </span>
          </VCard>

          <!-- NAME -->
          <h1 class="name mb-2" style="font-family: 'Poppins', sans-serif;">
            Hello, I’m <span
  class="text-h1 highlight bold"
  :style="{ color: theme.current.value.colors['purple-light'], fontFamily: `'Playfair Display', serif` }"
>
  Zulfa Iza
</span>

            <span class="underline"></span>
          </h1>

          <!-- ROLE -->
          <h2 class="role text-subtitle-3">
            Full Stack Software Developer
          </h2>

        </div>
      </VCol>

      <!-- RIGHT: Image -->
      <VCol cols="12" md="6" class="d-flex justify-end">
        <img
          src="/images/home.jpg"
          alt="Hero Image"
          class="hero-image"
        />
      </VCol>

    </VRow>
  </VContainer>

</template>

<style scoped>
  
.background-glow {
  position: absolute;
  top: 50px;
  left: 900px;
  width: 1000px;
  height: 900px;
  background: radial-gradient( #440753c9, transparent 90%);
  filter: blur(100px);
  animation: floatGlow 7s infinite alternate;
  z-index: 0;
}
.hero-section {
  background: #f5f7fa;
}

/* Name & highlight */
.name {
  font-size: 2.2rem;
  font-weight: 700;
  color: #0f172a;
  letter-spacing: 0.5px;
}

.highlight {
  color: #4f46e5;
}

.underline {
  display: block;
  width: 60px;
  height: 3px;
  margin-top: 4px;
  border-radius: 999px;
  background: linear-gradient(to right, #4f46e5, #6366f1);
}

/* Role */
.role {
  color: #475569;
  font-weight: 500;
}

/* Hero image */
.hero-image {
  max-width: 100%;
  height: auto;
  border-radius: 16px;
  object-fit: cover;
}

/* Welcome card */
.welcome-card {
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.4);
}
</style>
