var id = [50,45,84,15,20];

/* Technique 1*/
// id = [];
/* Technique 2*/
// id.length = 0;
/* Technique 3*/
// while(id.length > 0){
//     id.pop();
// }
/* Technique 4*/
id.splice(0, id.length);
console.log(id)