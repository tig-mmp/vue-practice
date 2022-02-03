import { createApp } from "vue";
import App from "./App.vue";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.min.css";

const app = createApp(App);

import PrimeVue from "primevue/config";
app.use(PrimeVue);

app.mount("#app");
