/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
//
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import vuetify from '@/plugins/vuetify'
import App from './App.vue'
import router from './router'
// Composables
import utils from './utils'


import zhCN from '@/assets/zh-CN.json'
import enUS from '@/assets/en-US.json'



const i18n = createI18n({
    locale: 'zh-CN',
    messages: {
        'zh-CN': zhCN,
        'en-US': enUS
    }
});



const app = createApp(App)

app.config.productionTip = false
app.config.globalProperties.utils = utils
app.use(vuetify)
app.use(i18n)
app.use(router)
app.mount('#app')
