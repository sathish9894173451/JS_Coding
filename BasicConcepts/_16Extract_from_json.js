//16.How can you extract a few fields from the given JSON object and form a new array?
const input = {
    "students": [
        {
            name:"sathish",
            age : 26,
            email:"sathis997@gmail.com"
        },
        {
            name:"kumar",
            age : 26,
            email:"sathis997344@gmail.com"
        },
        {
            name:"G",
            age : 26,
            email:"sathis99347@gmail.com"
        }
    ]
}
const op = input.students.map((item) =>{
    var stdObj = {
        name : item.name,
        email: item.email
    }
    return stdObj
})

console.log(op);