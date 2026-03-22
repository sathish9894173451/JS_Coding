//17.Filter a given object based on certain conditon and return the corresponding object?
const input ={
    "studentList":[
        {
            "name":"sathish",
            "id":56,
            "mail":"sathish@gmail.com"
        },
        {
            "name":"sathish",
            "id":5,
            "mail":"sathish@gmail.com"
        }
    ]
}
const op = input.studentList.filter((item) => {
    return item.id > 50 ? item : ''
})
console.log(op); 