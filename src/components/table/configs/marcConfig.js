exports.fields = [
    {
        name: "ID",
        field: "_id",
    },
    {
        name: "Марка авто",
        field: "name",
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
    url: 'admin/get/marcs'
}

exports.btn = {
    title: "Добавть марку авто",
    url: "/marca/create"
}