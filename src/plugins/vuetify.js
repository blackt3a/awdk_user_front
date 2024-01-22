/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'





export default createVuetify({
    icons: {
    iconfont: 'mdi'
    },
    theme: {
      dark: true,
      themes: {
         dark: {
                primary: "#00a0e9"
            }
        }
    },
})
