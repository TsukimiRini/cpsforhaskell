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
import IconTransfer from "@/components/Icons/IconTransfer.vue";
import IconCancel from "@/components/Icons/IconCancel.vue";

// plugins
import Highlight from '@/tools/highlight.js';
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';

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
import SelectButton from 'primevue/selectbutton';
import Sidebar from 'primevue/sidebar';
import Textarea from 'primevue/textarea';
import Chips from 'primevue/chips';
import Editor from 'primevue/editor';
import Dialog from 'primevue/dialog';
import AutoComplete from 'primevue/autocomplete';

// css
import '@/assets/css/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

VMdEditor.use(githubTheme);
const app = createApp(App);
app.component('TheHeader', TheHeader);
app.directive("click-outside", {
    mounted: function (el, binding) {
        console.log(binding)
        // Define ourClickEventHandler
        const ourClickEventHandler = event => {
            if (!el.contains(event.target) && el !== event.target) {
                // as we are attaching an click event listern to the document (below)
                // ensure the events target is outside the element or a child of it
                binding.value(event); // before binding it
            }
        };
        // attached the handler to the element so we can remove it later easily
        el.__vueClickEventHandler__ = ourClickEventHandler;

        // attaching ourClickEventHandler to a listener on the document here
        document.addEventListener("click", ourClickEventHandler);
    },
    unmounted: function (el) {
        // Remove Event Listener
        document.removeEventListener("click", el.__vueClickEventHandler__);
    }
});

app.component('IconBase', IconBase);
app.component('IconInfo', IconInfo);
app.component('IconFilter', IconFilter);
app.component('IconFavor', IconFavor);
app.component('IconTransfer', IconTransfer);
app.component('IconCancel', IconCancel);

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
app.directive('tooltip', Tooltip);
app.component('SelectButton', SelectButton);
app.component('Sidebar', Sidebar);
app.component('Textarea', Textarea);
app.component('Chips', Chips);
app.component('Editor', Editor);
app.component('Dialog', Dialog);
app.component('AutoComplete', AutoComplete);

app.use(Highlight);
app.use(VMdEditor);

app.use(Router).mount('#app');