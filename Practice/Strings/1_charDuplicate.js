var string = "Strinssshhhgggguuu";
function removeDuplicate(string){
    let count = {};
    let duplicate = "";
    for(let i=0; i < string.length; i++) {
        let char = string[i].toLowerCase();
        if(count[char] == undefined){
            count[char] = 1;
        }else{
            count[char]++;
        }   
    }
    for (let key in count){
            if(count[key] > 1){
                duplicate += key + count[key]
            }
        }
    return duplicate;
}
console.log(removeDuplicate(string))