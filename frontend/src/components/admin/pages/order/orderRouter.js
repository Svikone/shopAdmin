import order from './order.vue'
// import create from './components/create.vue'
import table from '../../../table/table.vue'
import orderViewTable from './components/orderViewTable.vue'




export default {
    path: '/order',
    navm: 'order',
    component: order,
    children: [
        // {
        //     path: 'create',
        //     component: create
        // },
        {
            path: '',
            component: table
        },
        {
            path: 'view/:id',
            component: orderViewTable
        },
    ]
}