<script setup>
import { ref } from 'vue'

const contactForm = ref({
  name: '',
  email: '',
  message: ''
})

function handleContactSubmit() {
  alert('Thank you! Your message has been sent to the College of Computer Studies.')
  contactForm.value.name = ''
  contactForm.value.email = ''
  contactForm.value.message = ''
}
</script>

<template>
  <section id="contact" class="page-section alt-bg">
    <div class="container">
      <h2>Contact Us</h2>
      <p class="section-subtitle">We would love to hear from you</p>
      <div class="contact-grid">
        <div class="contact-info-card">
          <h3>Get in Touch</h3>
          <p>Have inquiries about our programs, admissions, or department activities? Reach out to us through the details below.</p>
          <ul class="contact-details-list">
            <li><strong>Location:</strong> Central Philippine University, Jaro, Iloilo City</li>
            <li><strong>Email:</strong> ccs@cpu.edu.ph</li>
            <li><strong>Office Hours:</strong> Monday – Friday, 8:00 AM – 5:00 PM</li>
          </ul>
        </div>
        <form class="contact-form" @submit.prevent="handleContactSubmit">
          <h3>Send us a Message</h3>
          <div class="form-group">
            <label>Your Name</label>
            <input type="text" v-model="contactForm.name" required placeholder="Full name" />
          </div>
          <div class="form-group">
            <label>Email Address</label>
            <input type="email" v-model="contactForm.email" required placeholder="Email address" />
          </div>
          <div class="form-group">
            <label>Message</label>
            <textarea rows="4" v-model="contactForm.message" required placeholder="Your message..."></textarea>
          </div>
          <button type="submit" class="submit-btn">Send Message</button>
        </form>
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
.section-subtitle {
  text-align: center;
  color: #64748b;
  font-size: 1rem;
  margin-bottom: 3rem;
}
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
.contact-info-card, .contact-form {
  background: white;
  padding: 2.5rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
}
.contact-info-card h3, .contact-form h3 {
  font-size: 1.3rem;
  color: #0f172a;
  margin-bottom: 1rem;
  font-weight: 700;
}
.contact-info-card p, .contact-details-list li {
  color: #475569;
  line-height: 1.6;
  font-size: 0.95rem;
}
.contact-details-list {
  list-style: none;
  padding: 0;
}
.contact-details-list li {
  margin-bottom: 1rem;
}
.form-group {
  margin-bottom: 1.25rem;
}
.form-group label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: #334155;
  margin-bottom: 0.5rem;
}
.form-group input, .form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 0.95rem;
  background: #f8fafc;
  outline: none;
  transition: border-color 0.2s;
}
.form-group input:focus, .form-group textarea:focus {
  border-color: #000000;
  background: #ffffff;
}
.submit-btn {
  background: #000000;
  color: #ffffff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  width: 100%;
  cursor: pointer;
  transition: background 0.2s;
}
.submit-btn:hover {
  background: #3f3f46;
}
</style>