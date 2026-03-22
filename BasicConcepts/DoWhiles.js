//Diff bet while loop and do-while loop?
// Ans: While loop is used to check the condition first and execute 
// but do-while is used to execute the code first and then it will check the condition.

let i = 0;
while( i <= 10){
    console.log("The Number is"+i)
    i++;
}

// Below is do while code.It execute the previous i value 1st and checking the condition
do{
    console.log("The Number is in Do-while"+i)
}while(i <= 10)