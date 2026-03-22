var a = [1, 2, 3, 4, [5, 6], 7, [8, 9]];

for(var i =0; i< a.length;i++){
    if(Array.isArray(a[i])){
        for(var j=0;j<a[i].length;j++){
            console.log(a[i][j]);
        }
    }else{
        console.log(a[i]);
    }
}