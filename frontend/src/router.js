import {createRouter, createWebHistory} from 'vue-router';

import Category from './components/Category/Category.vue';


const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/category', component: Category},
    ]
});


export default router;