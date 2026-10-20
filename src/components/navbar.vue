<!-- src/components/Navbar.vue -->
<script setup>
import { RouterLink } from 'vue-router'
import logoImg from '@/assets/logo.jpg'
</script>

<template>
  <header class="navbar-header">
    <div class="navbar-container">
      <RouterLink to="/" class="navbar-brand">
        <img :src="logoImg" alt="CPU Warriors Logo" class="brand-logo" />
        <div class="brand-text">
          <span class="brand-title">CPU Warriors</span>
          <span class="brand-subtitle">College of Computer Studies</span>
        </div>
      </RouterLink>

      <nav class="navbar-nav">
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <RouterLink to="/#about" class="nav-link">About College</RouterLink>
        <RouterLink to="/#programs" class="nav-link">Programs Offered</RouterLink>
        <RouterLink to="/#faculty" class="nav-link">Faculty & Staff</RouterLink>
        <RouterLink to="/#news" class="nav-link">News & Events</RouterLink>
        <RouterLink to="/#partnerships" class="nav-link">Partnerships</RouterLink>
        <RouterLink to="/#contact" class="nav-link contact-btn">Contact Us</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #0b0f19;
  border-bottom: 1px solid #1e293b;
  width: 100%;
}

.navbar-container {
  width: 100%;
  padding: 0.75rem 2rem; /* Adjusted padding to push logo to the left edge */
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
}

.brand-logo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-title {
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
}

.brand-subtitle {
  font-size: 0.7rem;
  color: #94a3b8;
}

.navbar-nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-link {
  color: #cbd5e1;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #ffffff;
}

.contact-btn {
  background-color: #ffffff;
  color: #0f172a !important;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 600;
  transition: background-color 0.2s;
}

.contact-btn:hover {
  background-color: #e2e8f0;
}
</style>