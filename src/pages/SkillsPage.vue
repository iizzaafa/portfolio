
<script setup>
const skillGroups = [
  {
    title: 'Languages & Frameworks',
    icon: 'mdi-code-braces-box',
    skills: [
      { name: 'C#', icon: 'mdi-language-csharp', color: '#239120' },
      { name: 'Python', icon: 'mdi-language-python', color: '#3776AB' },
      { name: 'JavaScript', icon: 'mdi-language-javascript', color: '#F7DF1E' },
      { name: 'Vue 3', icon: 'mdi-vuejs', color: '#42b883' },
      { name: '.NET Core', icon: 'mdi-microsoft', color: '#512BD4' },
      { name: 'Vuetify', icon: 'mdi-vuetify', color: '#1867C0' },
      { name: 'Tailwind CSS', icon: 'mdi-tailwind', color: '#38B2AC' }
    ]
  },
  {
    title: 'Backend & APIs',
    icon: 'mdi-server',
    skills: [
      { name: 'RESTful API Design', icon: 'mdi-api', color: '#22d3ee' },
      { name: 'JWT Authentication', icon: 'mdi-shield-key', color: '#FF8C00' },
      { name: 'RBAC', icon: 'mdi-account-key', color: '#FF5722' },
      { name: 'Unit/Integration Testing', icon: 'mdi-flask', color: '#22d3ee' }
    ]
  },
  {
    title: 'Databases',
    icon: 'mdi-database',
    skills: [
      { name: 'SQL Server', icon: 'mdi-microsoft-sql-server', color: '#E53E3E' },
      { name: 'MySQL', icon: 'mdi-database', color: '#00758F' },
      { name: 'PostgreSQL', icon: 'mdi-database', color: '#336791' }
    ]
  },
  {
    title: 'Tools & Platforms',
    icon: 'mdi-tools',
    skills: [
      { name: 'Git', icon: 'mdi-git', color: '#F05032' },
      { name: 'GitHub', icon: 'mdi-github', color: '#181717' },
      { name: 'SourceTree', icon: 'mdi-source-repository', color: '#0052CC' },
      { name: 'Docker', icon: 'mdi-docker', color: '#2496ED' },
      { name: 'Firebase', icon: 'mdi-fire', color: '#FFCA28' },
      { name: 'iText7', icon: 'mdi-file-pdf', color: '#FF0000' },
      { name: 'CI/CD', icon: 'mdi-cog', color: '#22d3ee' }
    ]
  },
  {
    title: 'Hardware & Integration',
    icon: 'mdi-chip',
    skills: [
      { name: 'Sinosecu card readers', icon: 'mdi-credit-card', color: '#22d3ee' },
      { name: 'IC / License / Passport scanning', icon: 'mdi-card-account-details', color: '#22d3ee' }
    ]
  },
  {
    title: 'Project Management',
    icon: 'mdi-account-group',
    skills: [
      { name: 'Agile/Scrum', icon: 'mdi-sprint', color: '#22d3ee' },
      { name: 'Trello', icon: 'mdi-trello', color: '#0079BF' },
      { name: 'Taiga', icon: 'mdi-check-decagram', color: '#FF6F61' }
    ]
  },
  {
    title: 'Cloud & Hosting',
    icon: 'mdi-cloud',
    skills: [
      { name: 'Plesk', icon: 'mdi-server', color: '#0072C6' },
      { name: 'Cloudflare', icon: 'mdi-cloud', color: '#F38020' },
      { name: 'Exabytes', icon: 'mdi-server-network', color: '#22d3ee' },
      { name: 'Tailscale', icon: 'mdi-network', color: '#22d3ee' }
    ]
  }
]
</script>
<template>
    <VRow justify="center" class="mb-8">
      <VCol cols="12" md="8" class="text-center">
        <h1 class="about-title">
          Skills <span class="hand-wave">🤹🏼‍♀️</span>
        </h1>
      </VCol>
    </VRow>

    <VExpansionPanels focusable multiple>
      <VExpansionPanel v-for="group in skillGroups" :key="group.title">
        <VExpansionPanelTitle class="panel-title">
          <VIcon class="mdi-spin-hover mr-2">{{ group.icon }}</VIcon>
          {{ group.title }}
        </VExpansionPanelTitle>
        <VExpansionPanelText>
          <VRow>
            <VCol
              v-for="skill in group.skills"
              :key="skill.name"
              cols="6"
              md="4"
            >
              <VSheet
                class="skill-card pa-3 d-flex align-center gap-2"
                elevation="3"
              >
                <VIcon
                  size="28"
                  class="skill-icon"
                  :color="skill.color ? skill.color : '#22d3ee'"
                >
                  {{ skill.icon }}
                </VIcon>
                <span class="skill-name">{{ skill.name }}</span>
              </VSheet>
            </VCol>
          </VRow>
        </VExpansionPanelText>
      </VExpansionPanel>
    </VExpansionPanels>
    
    <!-- Background glow effect -->
    <div class="background-glow"></div>
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
.skill-name {
  font-weight: 600;
  color: #0a2c4f;
  text-shadow: 0 1px 2px rgba(0,0,0,0.5);
}

.panel-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: #00215b;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.3s ease;
}

.v-expansion-panel:hover .panel-title {
  color: #030d7b;
}

.skill-card {
  background: rgba(34,211,238,0.05);
  border-radius: 12px;
  gap: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  align-items: center;
  display: flex;
}

.skill-card:hover {
  transform: translateY(-3px);
  box-shadow: 20px rgba(0,0,0,0.4);
}

.mdi-spin-hover {
  transition: transform 0.5s ease, color 0.3s ease;
  color: #02044e;
}
</style>
