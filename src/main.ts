import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import naive from 'naive-ui'

// Create vue app
const app = createApp(App)

// Use motion plugin
app.use(naive)

// Mount app to page
app.mount('#app')
