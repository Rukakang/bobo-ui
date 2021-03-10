import { createApp } from 'vue'
import App from './App.vue'
import './index.scss';
import {createWebHashHistory,createRouter} from 'vue-router';
import Home from './views/Home.vue'//typescript只能理解.ts文件，无法理解.vue文件
import Doc from './views/Doc.vue';

const history = createWebHashHistory();
const router = createRouter({
    history,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Doc}
    ]
});

const app = createApp(App);
app.use(router)
app.mount('#app')