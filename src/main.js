import './assets/main.css'
import './assets/reset.css'
import './assets/adaptation.css'

import { createPinia } from "pinia";


import { createApp } from 'vue'
import App from './App.vue'



createApp(App).use(createPinia()).mount('#app')


