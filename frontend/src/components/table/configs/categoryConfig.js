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
        field: "url_img",
    },

]

exports.api = {
    url: 'category/get/all'
}

exports.btn = {
    title: "Добавть категорию",
    url: "/category/create"
}