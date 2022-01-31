import {createApp} from 'vue';
import App from './App.vue';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.min.css';


import PrimeVue from 'primevue/config';
const app = createApp(App).mount('#app');

app.use(PrimeVue);