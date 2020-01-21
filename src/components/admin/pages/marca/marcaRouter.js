import marca from './marca.vue'
import create from './components/create.vue'
import table from '../../../table/table.vue'
import update from '../marca/components/update.vue'



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
        {
            path: 'update/:id',
            component: update
        },
    ]
}