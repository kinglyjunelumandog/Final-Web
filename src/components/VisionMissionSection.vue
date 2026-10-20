<script setup>
</script>

<template>
  <section id="vision-mission" class="page-section alt-bg">
    <div class="container">
      <h2>Vision & Mission</h2>
      <div class="vm-grid">
        <div class="vm-card">
          <h3>Vision</h3>
          <p>The College of Computer Studies is founded on the vision of academic excellence in Information Technology Education and responsive to the needs of the total person and the world.</p>
        </div>
        <div class="vm-card">
          <h3>Mission</h3>
          <p>A College of the future with a mission to educate students with the Christian principles and practices of computer studies, preparing them to advance studies, careers in software development, computing systems technology, information management, and for a lifetime learning.</p>
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
  margin-bottom: 3rem;
}
.vm-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
.vm-card {
  background: white;
  padding: 2.5rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
}
.vm-card h3 {
  font-size: 1.4rem;
  color: #0f172a;
  margin-bottom: 1rem;
  font-weight: 700;
}
.vm-card p {
  color: #475569;
  line-height: 1.6;
}
</style>