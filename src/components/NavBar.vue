<script setup>
import { ref } from 'vue'
import { VChip, VSheet, VContainer } from 'vuetify/components'

const emit = defineEmits(['change'])

const menus = [
  'Home',
  'About',
  'Skills',
  'Experience',
  'Education',
  'Projects',
  'Contact',
]

const active = ref('Home')

const selectMenu = (menu) => {
  active.value = menu
  emit('change', menu)
}
</script>

<template>
  <VContainer class="header-container d-flex align-center px-6 py-4" fluid>

    <!-- LEFT: Z + Name + Role -->
    <div class="header-left d-flex align-center me-auto ">
      <VChip
        class="z-chip"
        color="primary"
        variant="tonal"
        size="large"
      >
        Z
      </VChip>
      <div class="ml-3">
        <h2 class="text-subtitle-3 mb-n2">Zulfa Iza</h2>
        <span class="text-subtitle-2">Full Stack Developer</span>
      </div>
    </div>

    <!-- RIGHT: Horizontal Menu -->
    <div class="nav-wrapper">
      <div class="nav-menu d-flex gap-6">
        <span
          v-for="menu in menus"
          :key="menu"
          class="nav-item"
          :class="{ active: active === menu }"
          @click="selectMenu(menu)"
        >
          {{ menu }}
        </span>
      </div>
    </div>

  </VContainer>
</template>

<style scoped>
.header-container {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border-radius: 12px;
}

/* Z chip */
.z-chip {
  font-size: 2rem;
  font-weight: 900;
  width: 60px;
  height: 60px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Name and role */
.name-text {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: #0f172a;
}

.role-text {
  font-size: 1rem;
  color: #475569;
}

/* Menu wrapper */
.nav-wrapper {
  display: flex;
  align-items: center;
}

/* Menu items */
.nav-menu {
  display: flex;
  gap: 16px;
}

.nav-item {
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  color: #334155;
  position: relative;
  padding: 4px 8px;
  transition: color 0.25s ease;
}

/* Hover underline */
.nav-item::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0%;
  height: 2px;
  background: #4f46e5;
  transition: width 0.25s ease;
}

.nav-item:hover {
  color: #4f46e5;
}

.nav-item:hover::after {
  width: 100%;
}

/* Active menu */
.nav-item.active {
  color: #4f46e5;
  font-weight: 600;
}

.nav-item.active::after {
  width: 100%;
}
</style>
