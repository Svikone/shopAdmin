exports.fields = [
    {
        name: "ID",
        field: "_id",
    },
    {
        name: "Марка авто",
        field: "name",
    }
    
]

exports.api = {
    url: 'admin/get/marcs'
}

exports.btn = {
    title: "Добавть марку авто",
    url: "/marca/create"
}