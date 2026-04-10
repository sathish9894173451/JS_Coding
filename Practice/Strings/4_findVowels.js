var word = "hello"

function findvowels(word){
    let vowelCount = 0;
    let consonentCount = 0;
    let char = ""
    for(let i=0; i < word.length; i++){
        char = word[i];
        if('aeiou'.includes(char)){
            vowelCount++;
        }else{
            consonentCount++;
        }
    }
    return {
        vowels : vowelCount,
        consonent : consonentCount
    }
    
}
console.log(findvowels(word));