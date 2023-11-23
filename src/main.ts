import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import AppCheckbox from '@/components/AppCheckbox.vue'
import AppColorPicker from '@/components/AppColorPicker.vue'
import AppTooltip from '@/components/AppTooltip.vue'

const app = createApp(App)

app.use(createPinia())
app
  .component('AppCheckbox', AppCheckbox)
  .component('AppColorPicker', AppColorPicker)
  .component('AppTooltip', AppTooltip)
app.mount('#app')
