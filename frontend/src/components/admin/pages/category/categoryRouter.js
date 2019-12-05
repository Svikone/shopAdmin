import category from './category.vue'
import create from './components/create.vue'
import table from './components/table.vue'

export default {
    path: '/category',
    navm: 'category',
    component: category,
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