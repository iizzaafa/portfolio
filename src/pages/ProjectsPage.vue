
<script setup>
const projects = [
  {
    id: 1,
    icon: '🏢',
    title: 'Visitor Management System',
    year: '2024',
    description:
      'Enterprise-grade visitor management system designed to manage access control, reporting, and secure identity verification.',
    features: [
      'User authentication (Login & Sign Up)',
      'Custom report configuration (columns & themes)',
      'PDF report generation with configurable layouts',
      'Secure RESTful API integration',
      'Responsive UI using Vue 3 component-based architecture',
    ],
    tech: ['Vue 3', '.NET Core', 'SQL Server'],
    github: 'https://github.com/iizzaafa',
  },
]
</script>
<template>
  <div class="projects-design3 mt-n9" id="projects">
      <section class="hero mb-n6">
        <h1>My Projects 💻</h1>
        <p>
          A collection of full-stack applications and enterprise systems I’ve
          developed.
        </p>
      </section>

      <!-- PROJECT LIST -->
        <div class="projects-showcase">
          <div
            v-for="(project, index) in projects"
            :key="project.id"
            class="showcase-item"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="timeline-dot"></div>

            <div class="showcase-card">
              <!-- HEADER -->
              <div class="card-header">
                <div class="header-icon">{{ project.icon }}</div>
                <div class="header-info">
                  <h3>{{ project.title }}</h3>
                  <span class="project-year">{{ project.year }}</span>
                </div>
              </div>

              <!-- DESCRIPTION -->
              <p class="project-description">
                {{ project.description }}
              </p>

              <!-- FEATURES -->
              <div class="project-features">
                <div
                  v-for="feature in project.features"
                  :key="feature"
                  class="feature-item"
                >
                  <span class="feature-icon">✓</span>
                  <span>{{ feature }}</span>
                </div>
              </div>

              <!-- FOOTER -->
              <div class="card-footer">
                <div class="tech-stack">
                  <span
                    v-for="tech in project.tech"
                    :key="tech"
                    class="tech-pill"
                  >
                    {{ tech }}
                  </span>
                </div>

                <!-- GitHub Link -->
                <a
                  class="explore-btn"
                  :href="project.github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More ↗
                </a>
              </div>
            </div>
          </div>
        </div>
  </div>
</template>

<style scoped>
/* HEADER */
.header {
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo-icon {
  width: 45px;
  height: 45px;
  background: #1d1d1d;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
}

.logo h2 {
  margin: 0;
  font-size: 1.125rem;
}

.logo p {
  margin: 0;
  font-size: 0.8125rem;
  color: #666;
}

/* NAV */
.nav {
  display: flex;
  gap: 2rem;
}

.nav a {
  text-decoration: none;
  color: #666;
  font-weight: 500;
  transition: color 0.3s;
}

.nav a:hover,
.nav a.active {
  color: #1d1d1d;
}

.nav a.active {
  border-bottom: 2px solid #1d1d1d;
  padding-bottom: 0.25rem;
}

/* MAIN */
.main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* HERO */
.hero {
  text-align: center;
  padding: 4rem 0;
}

.section-overline {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: #999;
  margin-bottom: 1rem;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.15rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
}

.showcase-item {
  animation: slideUp 0.6s ease forwards;
  opacity: 0;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* CARD */
.showcase-card {
  background: white;
  border: 1px solid #e5e5e5;
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.showcase-card:hover {
  border-color: #1d1d1d;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);
  transform: translateY(-8px);
}

.card-header {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.header-icon {
  font-size: 2.5rem;
}

.project-year {
  font-size: 0.8rem;
  color: #999;
}

/* CONTENT */
.project-description {
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 1.5rem;
}

.project-features {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
}

.feature-item {
  display: flex;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: #666;
}

.feature-icon {
  font-weight: 700;
  color: #1d1d1d;
}

/* FOOTER */
.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  border-top: 1px solid #e5e5e5;
  padding-top: 1.5rem;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-pill {
  background: #f5f5f7;
  padding: 0.35rem 0.75rem;
  border-radius: 16px;
  font-size: 0.7rem;
  font-weight: 600;
}

/* BUTTON */
.explore-btn {
  background: #1d1d1d;
  color: white;
  text-decoration: none;
  padding: 0.5rem 1.25rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.explore-btn:hover {
  background: #000;
  transform: translateX(2px);
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .header {
    flex-direction: column;
    gap: 1rem;
  }

  .nav {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .hero h1 {
    font-size: 2rem;
  }
}
</style>


