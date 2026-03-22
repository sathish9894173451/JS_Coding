//Finding elements in the array 
var arr = [10,20,30,40,50];
var target = 30;

function linearSearch(arr, target){
    for(i = 0; i < arr.length; i++){
        if(target === arr[i]){
            return target
            // return i
        }
    }
    // return -1;
}
console.log(linearSearch(arr, target)) //op : 30