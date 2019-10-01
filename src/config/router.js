import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/home/Home';
import Signup from '@/components/auth/Signup';
import Signin from '@/components/auth/Signin';

Vue.use(VueRouter);

const routes = [{
    name: 'home',
    path: '/',
    component: Home
},{
    name: 'signin',
    path: '/signin',
    component: Signin
}, {
    name: 'signup',
    path: '/signup',
    component: Signup
}];

export default new VueRouter({
    mode: 'history',
    routes
}); 