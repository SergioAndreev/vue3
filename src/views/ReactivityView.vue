<template>
  <h1>This is an about page</h1>
  <div class="about">
    <Reactivity></Reactivity>
    <Reactivity></Reactivity>
  </div>
</template>

<script setup lang="ts">
import Reactivity from '../components/ReactivityRef.vue'
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
