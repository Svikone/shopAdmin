exports.fields = [
    {
        name: "ID",
        field: "_id",
    },
    {
        name: "Модель авто",
        field: "name",
    },
    {
        name: "Марка авто",
        field: "marca",
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
    url: 'model/get'
}

exports.btn = {
    title: "Добавть модель авто",
    url: "/model/create"
}