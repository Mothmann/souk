import {createRouter, createWebHistory} from 'vue-router';

import AddCategory from './components/AddCategory.vue';


const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/category', component: AddCategory},
    ]
});


export default router;