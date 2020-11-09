import {
    createApp
} from 'vue';
import App from './App.vue';
import Router from "./router";
import TheHeader from './components/Base/TheHeader.vue';
import HomePagePanel from './views/HomePagePanel.vue';

import Highlight from '@/tools/highlight.js';

import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import Card from "primevue/card"
import InputText from 'primevue/inputtext';
import TieredMenu from 'primevue/tieredmenu';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';

import '@/assets/css/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const app = createApp(App);
app.component('TheHeader', TheHeader);
app.component('HomePagePanel', HomePagePanel);

app.component('Button', Button);
app.component('Menubar', Menubar);
app.component('Card', Card);
app.component('InputText', InputText);
app.component('TieredMenu', TieredMenu);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);

app.use(Highlight);

app.use(Router).mount('#app');