<script setup>
import { RouterLink } from 'vue-router'

import programImage from '@/assets/BSDMIA.png'
</script>

<template>
  <div class="program-page">
    <div class="container">
      <router-link to="/#programs" class="back-link">&larr; Back to Home</router-link>
      
      <div class="program-header">
        <h1>Bachelor of Science in Digital Media and Interactive Arts (BSDMIA)</h1>
        <p class="college-name">College of Computer Studies</p>
        <p class="description">
          Focused on creativity, applied arts, and digital media technologies.
        </p>
      </div>

      <div class="program-image-section">
        <template v-if="programImage">
          <img :src="programImage" alt="BSDMIA Program Image" class="program-detail-img" />
        </template>
        <template v-else>
          <div class="detail-image-placeholder">
            <span>Insert Program Feature Image Here</span>
          </div>
        </template>
      </div>

      <div class="program-details">
        <h2>Program Overview</h2>
        <p>
          The BSDMIA program equips students with technical and creative skills in digital animation, game development, interactive media design, and multimedia production.
        </p>

        <h2>Key Areas of Study</h2>
        <ul>
          <li>2D and 3D Digital Animation</li>
          <li>Game Design & Development</li>
          <li>Interactive User Experience (UX/UI) Design</li>
          <li>Digital Video & Audio Production</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.program-page {
  padding: 3rem 1.5rem;
  background-color: #f8fafc;
  min-height: calc(100vh - 140px);
}
.container {
  max-width: 900px;
  margin: 0 auto;
  background: white;
  padding: 3rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
}
.back-link {
  display: inline-block;
  color: #000000;
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 2rem;
  font-size: 0.9rem;
}
.back-link:hover { text-decoration: underline; }
.program-header { margin-bottom: 2rem; }
.program-header h1 { font-size: 2rem; color: #0f172a; margin-bottom: 0.5rem; font-weight: 700; }
.college-name { color: #64748b; font-size: 0.95rem; margin-bottom: 1rem; font-weight: 500; }
.description { color: #334155; font-size: 1.05rem; line-height: 1.6; }
.program-image-section {
  width: 100%;
  height: 320px;
  margin-bottom: 2.5rem;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #cbd5e1;
  background-color: #f1f5f9;
}
.program-detail-img { width: 100%; height: 100%; object-fit: cover; }
.detail-image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  font-weight: 500;
  font-size: 0.95rem;
  background: #f8fafc;
}
.program-details h2 { font-size: 1.3rem; color: #0f172a; margin-top: 2rem; margin-bottom: 0.75rem; font-weight: 600; }
.program-details p, .program-details li { color: #475569; line-height: 1.7; font-size: 0.98rem; }
.program-details ul { padding-left: 1.5rem; margin-top: 0.5rem; }
.program-details li { margin-bottom: 0.4rem; }
</style>