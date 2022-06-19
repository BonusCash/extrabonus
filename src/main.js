import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";

import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Toast from "primevue/toast";
import Sidebar from "primevue/sidebar";
import Dropdown from "primevue/dropdown";
import Tag from "primevue/tag";
import Textarea from "primevue/textarea";
import Divider from "primevue/divider";
import Card from "primevue/card";
import Rating from "primevue/rating";
import Carousel from "primevue/carousel";
import Password from "primevue/password";
import Checkbox from "primevue/checkbox";

const app = createApp(App);

app.use(router);

app.use(PrimeVue, { ripple: true });

app.use(ToastService);
app.component("pv-data-table", DataTable);
app.component("pv-column", Column);
app.component("pv-button", Button);
app.component("pv-toolbar", Toolbar);
app.component("pv-dialog", Dialog);
app.component("pv-input-text", InputText);
app.component("pv-toast", Toast);
app.component("pv-sidebar", Sidebar);
app.component("pv-dropdown", Dropdown);
app.component("pv-tag", Tag);
app.component("pv-textarea", Textarea);
app.component("pv-divider", Divider);
app.component("pv-card", Card);
app.component("pv-rating", Rating);
app.component("pv-carousel", Carousel);
app.component("pv-password", Password);
app.component("pv-check-box", Checkbox);

app.mount("#app");
