// import './style/style.scss'
// import 'lodash'
// import jq from 'jquery'
import App from './App.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
console.log(123123123);

const routes = [
    { path: '/foo', component: () => import('./Hellow.vue') },
]
const router = new VueRouter({
    routes
})
new Vue({
    el: '#app',
    router,
    render: h => h('App'),
    components: { App }
})
