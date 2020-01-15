exports.fields = [
    {
        name: "ID",
        field: "_id",
    },
    {
        name: "Продукт",
        field: "name",
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
    url: 'order/by/id'
}

exports.btn = {
    title: "back",
    url: "/marca/create"
}
