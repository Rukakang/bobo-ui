import {createRouter, createWebHashHistory} from "vue-router";
import Home from './views/Home.vue'//typescript只能理解.ts文件，无法理解.vue文件
import Doc from './views/Doc.vue';
import SwitchDemo from './components/SwitchDemo.vue';

const history = createWebHashHistory();
export const router = createRouter({
    history,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Doc,children:[
                {path: 'switch',component:SwitchDemo}
            ]}
    ]
});