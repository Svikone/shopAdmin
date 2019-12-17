exports.fields = [
    {
        name: "ID",
        field: "_id",
    },
    {
        name: "Название детали",
        field: "name",
    },
    {
        name: "Марка",
        field: "marca",
    },
    {
        name: "Модель",
        field: "model",
    },
    {
        name: "Каталог",
        field: "catalog",
    },
    {
        name: "Цена",
        field: "price",
    },
    {
        name: "Страна производитель",
        field: "country",
    }
]

exports.api = {
    url: 'catalog/get/all'
}

exports.btn = {
    title: "Добавть каталог",
    url: "/catalog/create"
}