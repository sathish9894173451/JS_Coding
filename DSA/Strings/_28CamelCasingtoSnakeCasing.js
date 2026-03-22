var name1 = "sathishKumar"; 

// function casingLetter() { 
//     return (this.name1 = this.name1.replace(/[A-Z]/g,(letter) => `_${letter.toLowerCase()}`));
// };
// casingLetter(); //sathish_kumar

// without inbuilt function
snakeCase = ""
for(let i=0; i< name1.length;i++){
    if(name1[i] === name1[i].toUpperCase()){
        snakeCase += '_' + name1[i].toLowerCase() //`_ ${name1[i].toLowerCase()}`
    }else{
        snakeCase += name1[i]
    }
}
console.log("snakeCase", snakeCase) //sathish_kumar