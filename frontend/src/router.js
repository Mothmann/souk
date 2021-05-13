import {createRouter, createWebHistory} from 'vue-router';

import Category from './components/Category/Category.vue';
import Index from './components/index.vue';
import CRUD from './components/crud.vue';
import register from './components/auth/register.vue'


const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/category', component: Category},
        {path : '/crud', component: CRUD},
        {path: '/', component: Index},
        {path: '/register', component: register},
    ]
});


export default router;