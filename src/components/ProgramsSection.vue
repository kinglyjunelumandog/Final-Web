<script setup>
import { ref } from 'vue'

const programs = ref([
  { code: 'BSIT', title: 'Bachelor of Science in Information Technology', desc: 'Focuses on bridging the gap between computer science and business management information systems.', link: '/programs/bsit' },
  { code: 'BSCS', title: 'Bachelor of Science in Computer Science', desc: 'Designed for students who want to study computing in depth, focusing on software and hardware.', link: '/programs/bscs' },
  { code: 'BSDMIA', title: 'Bachelor of Science in Digital Media and Interactive Arts', desc: 'Focused on creativity, applied arts, and digital media technologies.', link: '/programs/bsdmia' },
  { code: 'BLIS', title: 'Bachelor of Library and Information Science', desc: 'Prepares students for careers in information development, management, and digital curation.', link: '/programs/blis' }
])
</script>

<template>
  <section id="programs" class="page-section">
    <div class="container">
      <h2>Programs Offered</h2>
      <p class="section-subtitle">Explore our degree programs</p>
      
      <div class="programs-grid">
        <div v-for="prog in programs" :key="prog.code" class="program-card">
          <span class="prog-code">{{ prog.code }}</span>
          <h3>{{ prog.title }}</h3>
          <p>{{ prog.desc }}</p>
          <router-link :to="prog.link" class="learn-more-link">Learn More &rarr;</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-section {
  padding: 5rem 1.5rem;
}
.container {
  max-width: 1100px;
  margin: 0 auto;
}
.page-section h2 {
  font-size: 2.2rem;
  color: #0f172a;
  text-align: center;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.section-subtitle {
  text-align: center;
  color: #64748b;
  font-size: 1rem;
  margin-bottom: 3rem;
}
.programs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}
.program-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
}
.prog-code {
  font-size: 0.75rem;
  font-weight: 700;
  background: #f1f5f9;
  color: #0f172a;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  width: fit-content;
  margin-bottom: 1rem;
}
.program-card h3 {
  font-size: 1.15rem;
  color: #0f172a;
  margin-bottom: 0.75rem;
  font-weight: 600;
}
.program-card p {
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
}
.learn-more-link {
  color: #0f172a;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
}
.learn-more-link:hover {
  text-decoration: underline;
}
</style>