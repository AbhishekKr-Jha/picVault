import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// import ToastPlugin from 'vue-toast-notification';
import VueToast from 'vue-toast-notification'
// Import one of the available themes
import 'vue-toast-notification/dist/theme-default.css';
// import 'vue-toast-notification/dist/theme-bootstrap.css';



const app = createApp(App)


// app.use(ToastPlugin);
app.use(VueToast, {
    position: 'top', // Set the position of toasts
      duration: 3000, // Optional: Set duration
  })
app.mount('#app')





// import Vue from 'vue';
// import App from './App.vue';
// import VueToast from 'vue-toast-notification';

// // Import Toast CSS Theme
// import 'vue-toast-notification/dist/theme-bootstrap.css';

// // Use Toast Plugin
// Vue.use(VueToast);

// new Vue({
//   render: h => h(App),
// }).$mount('#app');

