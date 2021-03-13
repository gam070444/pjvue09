import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
import 'firebase/firestore'
import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// Initialize Cloud Firestore through Firebase

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyDgfrXvorsVgobu6qdqbXDP5sgC9SJvNDw",
    authDomain: "gamvue09.firebaseapp.com",
    projectId: "gamvue09",
    storageBucket: "gamvue09.appspot.com",
    messagingSenderId: "286995518684",
    appId: "1:286995518684:web:de77446c539c293a7d1019",
  }
  firebase.initializeApp(firebaseConfig);
}
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')