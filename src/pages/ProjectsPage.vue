<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
const lightboxImage = ref(null)

const projects = [
  {
    id: 1,
    icon: '🏢',
    title: 'Visitor Management System',
    year: '2024',
    description: `Developed a full stack visitor management system with secure authentication.
Implemented RESTful APIs for visitor data handling, reporting, and PDF export.
Built configurable reporting modules with selectable columns and themes.
Designed responsive, component-based UI using Vue 3.
Implemented rule-based visitor validation with real-time UI feedback (toast notifications).
Built dashboards to track total visitors and blacklisted entries.

Impact: Enabled automated visitor tracking and reporting, reducing manual processing and improving data accuracy.`,
    features: [
      'User authentication (Login & Sign Up)',
      'Custom report configuration (columns & themes)',
      'PDF report generation with configurable layouts',
      'Secure RESTful API integration',
      'Responsive UI using Vue 3 component-based architecture',
    ],
    tech: ['Vue 3', '.NET Core', 'SQL Server'],
    github: 'https://github.com/iizzaafa',
    images: [
      '/images/dashboard.png',
      '/images/addvisitor.png',
      '/images/export pdf.png',
      '/images/visitorlist.png',
      '/images/login.png',
    ],
  },
]

const scrollCarousel = (projectId, direction) => {
  const container = document.getElementById(`carousel-${projectId}`)
  if (!container) return
  const scrollAmount = container.clientWidth * 0.7
  if (direction === 'prev') container.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
  else container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
}
</script>

<template>
  <!-- MAIN SECTION WITH DARK PURPLE BACKGROUND -->
  <div
    class="projects-section"
    :style="{ backgroundColor: theme.current.value.colors['purple-dark'] }"
    id="projects"
  >
    <section class="hero">
      <h1>My Projects 💻</h1>
    </section>

    <div class="projects-showcase">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <!-- HEADER -->
        <div class="card-header">
          <div class="header-icon">{{ project.icon }}</div>
          <div class="header-info">
            <h3>{{ project.title }}</h3>
            <span class="tech-stack-label">{{ project.tech.join(' | ') }}</span>
            <span class="project-year">{{ project.year }}</span>
          </div>
        </div>

        <!-- DESCRIPTION -->
        <p class="project-description">{{ project.description }}</p>

        <!-- CAROUSEL -->
        <div class="carousel-wrapper">
          <button class="carousel-btn prev" @click="scrollCarousel(project.id, 'prev')">‹</button>
          <div class="project-images-carousel" :id="`carousel-${project.id}`">
            <div
              v-for="(img, idx) in project.images"
              :key="idx"
              class="carousel-item"
              @click="lightboxImage = img"
            >
              <img :src="img" alt="Project Image" />
            </div>
          </div>
          <button class="carousel-btn next" @click="scrollCarousel(project.id, 'next')">›</button>
        </div>

        <!-- FEATURES -->
        <div class="project-features">
          <h4>Features:</h4>
          <ul>
            <li v-for="feature in project.features" :key="feature">✓ {{ feature }}</li>
          </ul>
        </div>

      </div>
    </div>

    <!-- LIGHTBOX -->
    <div v-if="lightboxImage" class="lightbox" @click="lightboxImage = null">
      <img :src="lightboxImage" alt="Preview" />
    </div>
  </div>
</template>

<style scoped>
.projects-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

/* HERO */
.hero {
  text-align: center;
  margin-bottom: 3rem;
}

.hero h1 {
  font-size: 2.5rem;
  color: #fff;
}

.hero p {
  color: #e0e0e0;
  font-size: 1.1rem;
}

/* PROJECT CARD */
.project-card {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
}

.project-card:hover {
  box-shadow: 0 12px 24px rgba(0,0,0,0.3);
  transform: translateY(-4px);
}

.card-header {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
}

.header-icon {
  font-size: 2.5rem;
}

.header-info h3 {
  margin: 0;
  color: #fff;
}

.tech-stack-label,
.project-year {
  display: block;
  font-size: 0.9rem;
  color: #e0e0e0;
  margin: 0.25rem 0;
}

/* DESCRIPTION */
.project-description {
  white-space: pre-line;
  color: #f0f0f0;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.carousel-wrapper {
  position: relative;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}

.carousel-btn {
  position: absolute;
  top: 50%; /* vertically center */
  transform: translateY(-50%); /* center exactly */
  background: #010101; /* solid button */
  color: #5e2ea6; /* arrow color */
  border: none;
  font-size: 2rem;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
}

.carousel-btn.prev {
  left: -20px; /* slightly outside left edge of carousel */
}

.carousel-btn.next {
  right: -20px; /* slightly outside right edge */
}

.carousel-btn:hover {
  background: #000000;
  transform: translateY(-50%) scale(1.1);
}

/* Responsive: move buttons closer on small screens */
@media (max-width: 768px) {
  .carousel-btn.prev {
    left: 0;
  }
  .carousel-btn.next {
    right: 0;
  }
  .carousel-btn {
    width: 30px;
    height: 30px;
    font-size: 1.5rem;
  }
}

.project-images-carousel {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: 0.5rem;
  gap: 0.5rem;
}

/* hide scrollbar */
.project-images-carousel::-webkit-scrollbar {
  display: none;
}
.project-images-carousel {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.carousel-item {
  flex: 0 0 auto;
  width: 250px;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s;
}

.carousel-item img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

.carousel-item:hover {
  transform: scale(1.05);
}

/* CAROUSEL BUTTONS */
.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.3);
  color: #fff;
  border: none;
  font-size: 2rem;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 10;
}

.carousel-btn.prev {
  left: -20px;
}

.carousel-btn.next {
  right: -20px;
}

.carousel-btn:hover {
  background: rgba(255,255,255,0.6);
}

/* FEATURES */
.project-features h4 {
  color: #fff;
  margin-bottom: 0.5rem;
}

.project-features li {
  color: #e0e0e0;
  margin-bottom: 0.25rem;
}

/* GITHUB BUTTON */
.explore-btn {
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background: #fff;
  color: #5e2ea6;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s;
}

.explore-btn:hover {
  background: #e0e0e0;
  transform: translateX(2px);
}

/* LIGHTBOX */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  cursor: pointer;
}

.lightbox img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 12px;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .carousel-item {
    width: 180px;
    height: 120px;
  }
}

@media (max-width: 768px) {
  .carousel-item {
    width: 140px;
    height: 100px;
  }
  .carousel-btn.prev {
    left: 0;
  }
  .carousel-btn.next {
    right: 0;
  }
}
</style>
