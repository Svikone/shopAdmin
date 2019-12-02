import Router from 'vue-router'
import Vue from 'vue'
import admin from './components/admin/admin.vue'
import marca from './components/admin/pages/marca.vue'
import model from './components/admin/pages/model.vue'
import category from './components/admin/pages/category.vue'




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
                },
                {
                    path: '/model',
                    navm: 'model',
                    component: model,
                },
                {
                    path: '/category',
                    navm: 'category',
                    component: category,
                }
            ]
        }
    ]
})