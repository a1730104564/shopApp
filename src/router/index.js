import Vue from 'vue'
import Router from 'vue-router'
import startPage from '@/components/login/startPage.vue'
import signRegister from '@/components/login/signRegister.vue'
import forgetPwd from '@/components/login/forgetPwd.vue'
import shopping from '@/components/shopping/shopping.vue'
import shoppingcart from '@/components/shopping/shoppingcart.vue'
import shoppingindex from '@/components/shopping/shoppingindex.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: 'login'},
    {path: '/login', component: startPage},
    {path: '/signRegister/:type', component: signRegister},
    {path: '/forgetPwd/:id', component: forgetPwd},
    {path: '/shopping', component: shopping},
    {path: '/shopping/cart', component: shoppingcart},
    {path: '/shopping/index', component: shoppingindex}
  ]
})
