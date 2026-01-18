<template>
  <v-row justify="center" align="center" class="section-card-wrapper">
    <v-col cols="12" md="10">
      <v-sheet class="section-card pa-6">
        <slot />
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script setup>
</script>

<style scoped>
.section-card-wrapper {
  margin-bottom: 2rem;
}

.section-card {
  border-radius: 20px;
  background: rgba(15,23,42,0.85);
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  z-index: 1;
}

.section-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 14px 40px rgba(0,0,0,0.6);
}
</style>
