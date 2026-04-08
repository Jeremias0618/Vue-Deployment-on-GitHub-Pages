<script setup lang="ts">
// Página de inicio: resumen breve del sitio
</script>

<template>
  <section class="page">
    <h1>Home</h1>
    <p class="lead">
      Welcome. This is the home page of the app deployed with Vue, Vite, and GitHub Pages.
    </p>
    <p>
      Use the navigation above to open your profile or explore other sections as you add them.
    </p>
  </section>
</template>

<style scoped>
.page {
  max-width: 42rem;
  margin: 0 auto;
  text-align: center;
}

.lead {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.85);
}

@media (prefers-color-scheme: light) {
  .lead {
    color: rgba(33, 53, 71, 0.85);
  }
}
</style>
