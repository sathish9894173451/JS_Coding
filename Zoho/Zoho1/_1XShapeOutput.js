var input = "12345";

function printPattern(input){
    const len = input.length;

    for(let i = 0; i < len ; i++){
        let line = '';
        for (let j = 0; j < len ; j++){
            if(j === i || j === len - i - 1){
                // console.log("j is", j ,"i is", i)
                line += input[j];
            }else{
                line += ' ';
            }
        }
        console.log(line)
    }
}

printPattern(input)
