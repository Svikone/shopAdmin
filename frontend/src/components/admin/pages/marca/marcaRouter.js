import marca from './marca.vue'
import create from './components/create.vue'
import table from './components/table.vue'

export default {
    path: '/marca',
    navm: 'marca',
    component: marca,
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