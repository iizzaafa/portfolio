<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme() // reactive theme colors

const contacts = [
  {
    label: 'Email Address',
    value: 'iizzaafa@gmail.com',
    icon: 'mdi-email-outline',
    link: 'mailto:iizzaafa@gmail.com',
    iconBg: 'email-bg',
  },
  {
    label: 'Phone Number',
    value: '+6019-611-3734',
    icon: 'mdi-phone-outline',
    link: 'https://wa.me/60196113734',
    iconBg: 'phone-bg',
  },
  {
    label: 'GitHub Profile',
    value: 'github.com/iizzaafa',
    icon: 'mdi-github',
    link: 'https://github.com/iizzaafa',
    iconBg: 'github-bg',
  },
  {
    label: 'Location',
    value: 'Selangor, Malaysia',
    icon: 'mdi-map-marker-outline',
    link: 'https://goo.gl/maps/your-location',
    iconBg: 'location-bg',
  },
]
</script>

<template>
    <!-- Background glow effect -->
    <div class="background-glow"></div>
    
  <!-- Page Title -->
  <VRow justify="center" class="mb-8">
    <VCol cols="12" md="8" class="text-center">
      <h1 class="about-title">
        Contact <span class="hand-wave">📞</span>
      </h1>
    </VCol>
  </VRow>

  <!-- Contact List -->
  <VRow class="contact-list" dense>
    <VCol
      v-for="item in contacts"
      :key="item.label"
      cols="12"
      md="6"
    >
      <VList
        class="contact-card"
        :style="{ backgroundColor: theme.current.value.colors['purple-dark'] }"
      >
        <VListItem
          :href="item.link"
          target="_blank"
          class="contact-item"
        >
          <!-- Icon -->
          <template #prepend>
            <div class="contact-icon-wrapper mr-3" :class="item.iconBg">
              <VIcon size="28">{{ item.icon }}</VIcon>
            </div>
          </template>

          <!-- Label -->
          <VListItemSubtitle class="contact-label">
            {{ item.label }}
          </VListItemSubtitle>

          <!-- Value -->
          <VListItemTitle class="contact-value">
            {{ item.value }}
          </VListItemTitle>
        </VListItem>
      </VList>
    </VCol>
  </VRow>
    
</template>

<style scoped>
  .background-glow {
  position: absolute;
  top: 290px;
  left: 200px;
  right: 900px;
  width: 1800px;
  height: 500px;
  background: radial-gradient(circle, #1f84acc9, transparent 100%);
  filter: blur(100px);
  animation: floatGlow 7s infinite alternate;
  z-index: 0;
}
.about-title {
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: var(--v-theme-on-background);
}

/* Hand wave animation */
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

/* GRID */
.contact-list {
  margin-top: 2rem;
}

/* LIST CARD */
.contact-card {
  border-radius: 16px;
  border: 1px solid rgba(168, 85, 247, 0.15);
  padding: 0.75rem;
  transition: all 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 10px 30px rgba(168, 85, 247, 0.25),
    0 0 0 1px rgba(168, 85, 247, 0.4);
}

/* LIST ITEM */
.contact-item {
  border-radius: 14px;
  padding: 1.25rem;
  display: flex;
  align-items: center;
}

/* ICON */
.contact-icon-wrapper {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ICON BACKGROUNDS */
.email-bg {
  background: linear-gradient(135deg, #fce7f3, #fbcfe8);
  color: #db2777;
}

.phone-bg {
  background: linear-gradient(135deg, #d1fae5, #a7f3d0);
  color: #059669;
}

.github-bg {
  background: linear-gradient(135deg, #e5e7eb, #d1d5db);
  color: #111827;
}

.location-bg {
  background: linear-gradient(135deg, #dbeafe, #bfdbfe);
  color: #2563eb;
}

/* TEXT */
.contact-label {
  font-size: 0.8rem;
  color: #ffffff;
  font-weight: 500;
}

.contact-value {
  font-size: 1rem;
  color: #f8fafc;
  font-weight: 600;
}
</style>
