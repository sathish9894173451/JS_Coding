// 6.Difference Between const and ObjectFreeze?
// Const
const month = 'july';
// month = 'feb';
console.log(month) // We will get TypeError because const will not re-assign

// ObjectFreeze
let person ={
    name:"sathish"
}
Object.freeze(person);
person.name = "kumar"
console.log(person.name) // o/p -Sathish - we cannot get any error because we freezed the object and adding it in that.So that object is freezed and also not giving any error

// 7.How to merge the objects?
const arr1 = {a:1, b:2}
const arr2 = {b:3, c:4}
// 1st method
const merged = {...arr1, ...arr2}
console.log(merged); //op: {a: 1, b: 3, c: 4}
//2nd method
const merged1 = Object.assign(arr1,arr2)
console.log(merged1); //op: {a: 1, b: 3, c: 4}
