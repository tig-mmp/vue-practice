import { createApp } from "vue";
import App from "./App.vue";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.min.css";

import PrimeVue from "primevue/config";
const app = createApp(App);

app.use(PrimeVue);
app.mount("#app");
