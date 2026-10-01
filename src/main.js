import { createApp } from 'vue'
import App from './App.vue'

// The one global stylesheet, imported here so every component shares it.
import './assets/styles.css'

createApp(App).mount('#app')
