exports.fields = [
    {
        name: "ID",
        field: "_id",
    },
    {
        name: "Категория",
        field: "category",
    },
    {
        name: "Категория на русском",
        field: "category_ru",
    },
    {
        name: "Изображение",
        type: 'img',
        field: "url_img",
    },
    {
        name: "",
        type: 'update'
    },
    {
        name: "",
        type: 'close',
        field: "_id"
    }

]

exports.api = {
    url: 'category/get/all'
}

exports.btn = {
    title: "Добавть категорию",
    url: "/category/create"
}