<template>
  <v-sheet class="pa-6 mb-6" elevation="1">
    <h3 class="mb-2">{{ job.title }}</h3>
    <div class="mb-1" :style="{ color: primaryColor }">{{ job.company }}</div>
    <div class="text-caption mb-4">{{ job.period }} • {{ job.location }}</div>

    <v-row>
      <v-col cols="12" md="6">
        <ul>
          <li v-for="h in job.highlightsLeft" :key="h">{{ h }}</li>
        </ul>
      </v-col>
      <v-col cols="12" md="6">
        <ul>
          <li v-for="h in job.highlightsRight" :key="h">{{ h }}</li>
        </ul>
      </v-col>
    </v-row>

    <v-btn small outlined color="primary" @click="job.expanded = !job.expanded">
      {{ job.expanded ? 'Show Less' : 'View Details →' }}
    </v-btn>

    <v-expand-transition>
      <div v-if="job.expanded" class="mt-4">
        <h4>Responsibilities</h4>
        <ul>
          <li v-for="r in job.responsibilities" :key="r">{{ r }}</li>
        </ul>
        <h4>Achievements</h4>
        <ul>
          <li v-for="a in job.achievements" :key="a">{{ a }}</li>
        </ul>
      </div>
    </v-expand-transition>
  </v-sheet>
</template>

<script setup>
import { computed } from 'vue'
import { useTheme } from 'vuetify'

const props = defineProps({
  job: Object
})

const theme = useTheme()
const primaryColor = computed(() => theme.current.value.colors.primary)
</script>
