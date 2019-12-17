exports.fields = [
    {
        name: "ID",
        field: "_id",
        type: "link",
        url: "order/view"
    },
    {
        name: "Статус заказа",
        field: "status_confirm",
    },
    {
        name: "Статус оплаты",
        field: "status_payment",
    },
    {
        name: "Имя",
        field: "user_name",
    },
    {
        name: "Телефон",
        field: "phone",
    }
    // {
    //     name: "Продукт",
    //     field: "product_id",
    // },
    // {
    //     name: "Цена за еденицу",
    //     field: "price",
    // },
    // {
    //     name: "Вся цена",
    //     field: "full_price",
    // },
    // {
    //     name: "Количество",
    //     field: "number",
    // }
    
]

exports.api = {
    url: 'admin/get/marcs'
}

exports.btn = {
    title: "back",
    url: "/marca/create"
}
