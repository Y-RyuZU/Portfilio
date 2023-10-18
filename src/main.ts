import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import router from './router'

// Tailwind
import '@/assets/styles/main.scss';

const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
// app.mixin({
//     mounted() {
//         // コンポーネント名を取得
//         const componentName = this.$options.name;
//         if (componentName) {
//             // ケバブケースに変換
//             const kebabCaseName = componentName.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
//             // クラス名として適用
//             this.$el.classList.add(kebabCaseName);
//         }
//     }
// });


app.mount('#app')
