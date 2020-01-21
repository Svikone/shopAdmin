import model from './model.vue'
import create from './components/create.vue'
import table from '../../../table/table.vue'
import update from './components/update.vue'

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
        {
            path: 'update/:id',
            component: update
        },
    ]
}