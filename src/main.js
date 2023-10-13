import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import "vue-toastification/dist/index.css"
import Toast from "vue-toastification"
import router from "./router"
import { createPinia } from 'pinia'
var app = createApp(App)


const options = {
    // You can set your default options here
};

app.use(Toast, options)
app.use(router)
app.use(createPinia())
app.mount('#app')


