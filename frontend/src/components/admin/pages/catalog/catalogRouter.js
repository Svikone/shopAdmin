import catalog from './catalog.vue'
import create from './components/create.vue'
// import table from './components/table.vue'
import table from '../../../table/table.vue'


export default {
    path: '/catalog',
    navm: 'catalog',
    component: catalog,
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