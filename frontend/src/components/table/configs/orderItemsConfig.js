exports.fields = [
    {
        name: "ID",
        field: "_id",
    },
    {
        name: "Продукт",
        field: "product_id",
    },
    {
        name: "Цена за еденицу",
        field: "price",
    },
    {
        name: "Вся цена",
        field: "full_price",
    },
    {
        name: "Количество",
        field: "number",
    }
    
]

exports.api = {
    url: 'admin/get/marcs'
}

exports.btn = {
    title: "back",
    url: "/marca/create"
}
