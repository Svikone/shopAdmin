import Router from 'vue-router'
import Vue from 'vue'
import admin from './components/admin/admin.vue'
import marca from './components/admin/pages/marca.vue'


Vue.use(Router) 

export default new Router({
    routes: [
        {
            path: '/',
            navm: 'admin',
            component: admin,
            children: [
                {
                    path: '/marca',
                    navm: 'marca',
                    component: marca,
                }
            ]
        }
    ]
})