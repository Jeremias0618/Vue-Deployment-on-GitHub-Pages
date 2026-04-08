<script setup lang="ts">
import { RouterLink } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
</script>

<template>
  <div class="landing">
    <div>
      <a href="https://vite.dev" target="_blank" rel="noreferrer">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
        <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>

    <HelloWorld msg="Vite + Vue" />

    <nav class="actions" aria-label="App sections">
      <RouterLink to="/home" class="action-btn"> Home </RouterLink>
      <RouterLink to="/profile" class="action-btn"> Profile </RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.landing {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 4rem);
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}

.action-btn {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.4em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  color: rgba(255, 255, 255, 0.87);
  cursor: pointer;
  transition: border-color 0.25s, background-color 0.2s;
  text-decoration: none;
  display: inline-block;
}

.action-btn:hover {
  border-color: #646cff;
}

@media (prefers-color-scheme: light) {
  .action-btn {
    background-color: #f9f9f9;
    color: #213547;
  }
}
</style>
