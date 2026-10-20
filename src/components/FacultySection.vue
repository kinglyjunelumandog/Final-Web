<script setup>
import { ref, computed } from 'vue'
import quijanoImg from '@/assets/quijano.png'
import beldiaImg from '@/assets/beldia.jpg'
import cambroneroImg from '@/assets/cambronero.jpg'
import pajarImg from '@/assets/pajar.jpg'
import taasanImg from '@/assets/taasan.jpg'

const activeFilter = ref('All')

const facultyList = ref([
  { name: 'LEO PAULO B. BELDIA', title: 'BSIT and BSIS Program', program: 'BSIT', image: beldiaImg },
  { name: 'PEDRO PETER RHYS B. CAMBRONERO, MSCS', title: 'BSCS Program', program: 'BSCS', image: cambroneroImg },
  { name: 'LENNON D. PAJAR', title: 'Computer Laboratory Coordinator', program: 'BSIT', image: pajarImg },
  { name: 'A.M.P. LATTER P. TAASAN', title: 'Computer Laboratory Technician', program: 'BSIT', image: taasanImg }
])

const filteredFaculty = computed(() => {
  if (activeFilter.value === 'All') {
    return facultyList.value
  }
  return facultyList.value.filter(function(faculty) {
    return faculty.program === activeFilter.value
  })
})

function setFilter(filterName) {
  activeFilter.value = filterName
}
</script>

<template>
  <section id="faculty" class="page-section alt-bg">
    <div class="container">
      <span class="tagline">TEACHING AS A WAY OF LIFE</span>
      <h2>Faculty & Staff</h2>
      <p class="section-subtitle">College of Computer Studies</p>
      
      <div class="dean-spotlight">
        <h3 class="dean-category-title">Dean</h3>
        <div class="dean-card-single">
          <div class="dean-img-box">
            <img :src="quijanoImg" alt="Dean Ma. Christina A. Quijano" />
          </div>
          <h3>MA. CHRISTINA A. QUIJANO, MSCS</h3>
          <p>Dean</p>
        </div>
      </div>

      <div class="filter-bar">
        <button 
          v-for="filterName in ['All', 'BSIT', 'BSCS', 'BSDMIA', 'BLIS']" 
          :key="filterName"
          :class="['filter-btn', { active: activeFilter === filterName }]"
          @click="setFilter(filterName)"
        >
          {{ filterName === 'All' ? 'All Faculty' : filterName }}
        </button>
      </div>

      <h3 class="section-group-title">Department Head and Faculty</h3>
      <div class="faculty-grid">
        <div v-for="fac in filteredFaculty" :key="fac.name" class="faculty-card">
          <div class="faculty-avatar">
            <img :src="fac.image" :alt="fac.name" class="fac-img" />
          </div>
          <h3>{{ fac.name }}</h3>
          <p>{{ fac.title }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-section {
  padding: 5rem 1.5rem;
}
.alt-bg {
  background-color: #f8fafc;
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
.tagline {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: #64748b;
  text-transform: uppercase;
  display: block;
  text-align: center;
  margin-bottom: 0.5rem;
}
.section-subtitle {
  text-align: center;
  color: #64748b;
  font-size: 1rem;
  margin-bottom: 3rem;
}
.dean-spotlight {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
}
.dean-category-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1rem;
  text-align: center;
}
.dean-card-single, .faculty-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  padding-bottom: 1.5rem;
}
.dean-card-single {
  width: 100%;
  max-width: 260px;
}
.dean-img-box, .faculty-avatar {
  width: 100%;
  height: 280px;
  overflow: hidden;
  background: #f8fafc; 
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dean-img-box img, .fac-img {
  width: 100%;
  height: 100%;
  object-fit: contain; 
}
.dean-card-single h3, .faculty-card h3 {
  font-size: 0.95rem;
  color: #0f172a;
  margin: 0 1rem 0.3rem;
  font-weight: 700;
}
.dean-card-single p, .faculty-card p {
  color: #64748b;
  font-size: 0.82rem;
  margin: 0 1rem;
}
.filter-bar {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}
.filter-btn {
  background: #ffffff;
  border: 1px solid #cbd5e1;
  color: #334155;
  padding: 0.5rem 1.2rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.filter-btn:hover {
  background: #f1f5f9;
}
.filter-btn.active {
  background: #000000;
  color: #ffffff;
  border-color: #000000;
}
.section-group-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: #1e293b;
  margin: 2rem 0 1.25rem;
  text-align: center;
  border-top: 1px solid #e2e8f0;
  padding-top: 2rem;
}
.faculty-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 260px));
  justify-content: center;
  gap: 1.5rem;
}
.faculty-card {
  width: 100%;
}
</style>