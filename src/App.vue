<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink, RouterView } from 'vue-router'

const route = useRoute()
const showNav = computed(() => route.name !== 'landing')
</script>

<template>
  <div class="layout">
    <header v-if="showNav" class="header">
      <nav class="nav" aria-label="Main">
        <RouterLink class="nav-link" to="/" active-class="nav-link--active" exact-active-class="nav-link--active">
          Start
        </RouterLink>
        <RouterLink class="nav-link" to="/home" active-class="nav-link--active">
          Home
        </RouterLink>
        <RouterLink class="nav-link" to="/profile" active-class="nav-link--active">
          Profile
        </RouterLink>
      </nav>
    </header>
    <main class="main" :class="{ 'main--padded': showNav }">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  padding: 0.75rem 0;
}

@media (prefers-color-scheme: light) {
  .header {
    border-bottom-color: rgba(0, 0, 0, 0.08);
  }
}

.nav {
  display: flex;
  gap: 1.25rem;
  justify-content: center;
  flex-wrap: wrap;
}

.nav-link {
  font-weight: 600;
  padding: 0.35rem 0.5rem;
  border-radius: 6px;
  transition: background-color 0.2s;
}

.nav-link:hover {
  background-color: rgba(100, 108, 255, 0.12);
}

.nav-link--active {
  color: #42b883;
}

.main--padded {
  padding: 2rem 0 3rem;
}
</style>
