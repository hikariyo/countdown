import { createApp } from 'vue'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import App from './App.vue'
import './style.css'

dayjs.extend(duration)

createApp(App).mount('#app')
