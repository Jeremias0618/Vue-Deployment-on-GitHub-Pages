<script setup lang="ts">
// Página de perfil: datos de ejemplo (sustituir por datos reales o API)
const displayName = 'Demo user'
const handle = '@demo'
</script>

<template>
  <section class="page">
    <h1>Profile</h1>
    <div class="card profile-card">
      <div class="avatar" aria-hidden="true">{{ displayName.charAt(0) }}</div>
      <h2 class="name">{{ displayName }}</h2>
      <p class="handle">{{ handle }}</p>
      <p class="bio">
        This is a placeholder profile.
      </p>
    </div>
  </section>
</template>

<style scoped>
.page {
  max-width: 28rem;
  margin: 0 auto;
  text-align: center;
}

.profile-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.avatar {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #646cff, #42b883);
  color: #fff;
  font-size: 1.75rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}

.name {
  margin: 0.5rem 0 0;
  font-size: 1.5rem;
}

.handle {
  margin: 0;
  opacity: 0.8;
  font-size: 0.95rem;
}

.bio {
  margin: 1rem 0 0;
  line-height: 1.6;
  text-align: center;
}
</style>
