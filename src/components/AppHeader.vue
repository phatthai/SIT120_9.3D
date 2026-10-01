<script setup>
// Both the page list and the page on screen come down from App.vue.
defineProps({
  pages: {
    type: Array,
    required: true
  },
  currentView: {
    type: String,
    required: true
  }
})

// The header never switches pages itself. It tells App.vue which page
// was clicked, and App.vue changes currentView.
const emit = defineEmits(['navigate'])
</script>

<template>
  <header class="site-header">
    <div class="container header-inner">
      <a class="logo" href="#home" @click.prevent="emit('navigate', 'home')">Kerbside</a>

      <nav class="nav" aria-label="Main">
        <a
          v-for="page in pages"
          :key="page.id"
          :href="'#' + page.id"
          :class="{ active: page.id === currentView }"
          :aria-current="page.id === currentView ? 'page' : null"
          @click.prevent="emit('navigate', page.id)"
        >{{ page.label }}</a>
      </nav>
    </div>
  </header>
</template>
