import model from './model.vue'
import create from './components/create.vue'
import table from './components/table.vue'



export default {
    path: '/model',
    navm: 'model',
    component: model,
    children: [
        {
            path: 'create',
            component: create
        },
        {
            path: '',
            component: table
        },
    ]
}