import {createRouter, createWebHistory} from 'vue-router';

import Category from '../components/Category/Category.vue';
import Index from '../components/index.vue';
import register from '../components/auth/register.vue';
import login from '../components/auth/login.vue';
import logout from '../components/auth/logout.vue';
import Product from '../components/product/Product.vue';


const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/category', component: Category},
        {path: '/', component: Index},
        {path: '/register', component: register},
        {path: '/login', component: login},
        {path: '/logout', component: logout},
        {path: '/product', component: Product},
    ]
});
router.afterEach(() => {
    if(window.location.href !='http://localhost:8080/login' && window.location.href !='http://localhost:8080/register' && localStorage.getItem('user') === null) {
        window.location.replace("http://localhost:8080/login");
        alert('please sign in or press register');
      }
})
export default router;

