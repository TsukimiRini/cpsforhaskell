import {
    createApp
} from 'vue';
import App from './App.vue';
import Router from "./router";

// base components
import TheHeader from './components/Base/TheHeader.vue';

// icons
import IconBase from "@/components/Icons/IconBase.vue";
import IconInfo from "@/components/Icons/IconInfo.vue";
import IconFilter from "@/components/Icons/IconFilter.vue";
import IconFavor from "@/components/Icons/IconFavor.vue";

// plugins
import Highlight from '@/tools/highlight.js';

// UI library
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import Card from "primevue/card"
import InputText from 'primevue/inputtext';
import TieredMenu from 'primevue/tieredmenu';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import ScrollPanel from 'primevue/scrollpanel';
import Dropdown from 'primevue/dropdown';
import Tooltip from 'primevue/tooltip';

// css
import '@/assets/css/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const app = createApp(App);
app.component('TheHeader', TheHeader);

app.component('IconBase', IconBase);
app.component('IconInfo', IconInfo);
app.component('IconFilter', IconFilter);
app.component('IconFavor', IconFavor);

app.component('Button', Button);
app.component('Menubar', Menubar);
app.component('Card', Card);
app.component('InputText', InputText);
app.component('TieredMenu', TieredMenu);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);
app.component('Accordion', Accordion);
app.component('AccordionTab', AccordionTab);
app.component('ScrollPanel', ScrollPanel);
app.component('Dropdown', Dropdown);
app.directive('tooltip',Tooltip);

app.use(Highlight);

app.use(Router).mount('#app');