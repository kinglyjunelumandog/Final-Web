<script setup>
import { ref } from 'vue'

const newsList = ref([
  { type: 'Announcement', title: 'Final Examination Schedule', desc: 'Please refer to the departmental bulletin for the final examination schedule.', date: 'October 2026' },
  { type: 'Event', title: 'CCS Annual IT Days & Coding Hackathon', desc: 'Join us for a week of programming competitions, system exhibits, and tech talks from industry leaders.', date: 'November 2026' },
  { type: 'News', title: 'CPU CCS Students Win Regional Hackathon', desc: 'Our student delegation brought home top honors in the regional software development competition.', date: 'September 2026' }
])
</script>

<template>
  <section id="news" class="page-section">
    <div class="container">
      <h2>News, Events, and Announcements</h2>
      <p class="section-subtitle">Stay updated with the latest college happenings</p>
      <div class="news-grid">
        <div v-for="item in newsList" :key="item.title" class="news-card">
          <span class="badge">{{ item.type }}</span>
          <h3>{{ item.title }}</h3>         
          <p>{{ item.desc }}</p>
          <span class="date">{{ item.date }}</span>
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
.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}
.news-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
}
.badge {
  font-size: 0.75rem;
  font-weight: 700;
  background: #f1f5f9;
  color: #0f172a;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  width: fit-content;
  margin-bottom: 0.75rem;
}
.news-card h3 {
  font-size: 1.15rem;
  color: #0f172a;
  margin-bottom: 0.5rem;
  font-weight: 600;
}
.news-card p {
  color: #64748b;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}
.date {
  font-size: 0.8rem;
  color: #94a3b8;
}
</style>