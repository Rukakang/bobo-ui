import { createApp } from 'vue'
import App from './App.vue'
import './index.css';
import {createWebHashHistory,createRouter} from 'vue-router';
import Bobo from './components/Bobo.vue'//typescript只能理解.ts文件，无法理解.vue文件
import Bobo2 from './components/Bobo2.vue';

const history = createWebHashHistory();
const router = createRouter({
    history,
    routes:[
        {path:'/',component:Bobo},
        {path:'/xxx',component:Bobo2}
    ]
});

const app = createApp(App);
app.use(router)
app.mount('#app')