var input = "12345";

function patternDesign(input){
    let lengthofArray = input.length;

    for(let i =0; i < lengthofArray; i++){
        let line = '';
        for(let j = 0; j < lengthofArray; j++){
            if(j === i || j === lengthofArray - i - 1){
                line += input[j];
            }else{
                line += ' ';
            }
            
        }
        console.log(line) 
    }
}
patternDesign(input);