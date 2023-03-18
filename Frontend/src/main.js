import { createApp } from 'vue';

import router from './routes' 
import store from './store.js'
import App from './App.vue';
import BaseDialog from './components/UI/BaseDialog.vue';
import BaseButton from './components/UI/BaseButton.vue';


const app = createApp(App)
app.use(router)
app.use(store)

app.component('base-button',BaseButton)
app.component('base-dialog',BaseDialog)

app.mount('#app');
