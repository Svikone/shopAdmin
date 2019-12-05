import Router from 'vue-router'
import Vue from 'vue'
import admin from './components/admin/admin.vue'
import modelRouter from './components/admin/pages/model/modelRouter'
import categorylRouter from './components/admin/pages/category/categoryRouter'
import marcaRouter from './components/admin/pages/marca/marcaRouter'
import catalogRouter from './components/admin/pages/catalog/catalogRouter'

Vue.use(Router) 

export default new Router({
    routes: [
        {
            path: '/',
            navm: 'admin',
            component: admin,
            
            children: [
                    modelRouter,
                    categorylRouter,
                    marcaRouter,
                    catalogRouter
            ]
        },

    ]
})