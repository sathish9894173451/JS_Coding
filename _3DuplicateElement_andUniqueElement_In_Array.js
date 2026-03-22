// 3.Duplicate and unique element in given array?
const duplicateArray = [5,10,15,5,10,20];
// Find duplicate in array 
const duplicate = duplicateArray.filter((ele, index, arr) => arr.indexOf(ele) !== index)
console.log('duplicate', duplicate)
// | Index | Element | `arr.indexOf(ele)` | `index` | `indexOf != index` | Keep in Result? |
// | ----- | ------- | ------------------ | ------- | ------------------ | --------------- |
// | 0     | 5       | 0                  | 0       | false              | ❌ No            |
// | 1     | 10      | 1                  | 1       | false              | ❌ No            |
// | 2     | 15      | 2                  | 2       | false              | ❌ No            |
// | 3     | 5       | 0                  | 3       | true               | ✅ Yes           |
// | 4     | 10      | 1                  | 4       | true               | ✅ Yes           |
// | 5     | 20      | 5                  | 5       | false              | ❌ No            |

// Remove duplicate in array
const duplicate1 = duplicateArray.filter((ele, index, arr) => arr.indexOf(ele) === index)
console.log("duplicate1",duplicate1);
// Another way using return
const duplicate2 = duplicateArray.filter((ele, index, arr) => {
    return arr.indexOf(ele) === index})
console.log("duplicate1",duplicate2);
// | Index | Element | `arr.indexOf(ele)` | `index` | Keep in Result? |
// | ----- | ------- | ------------------ | ------- | --------------- |
// | 0     | 5       | 0                  | 0       | ✅ Yes           |
// | 1     | 10      | 1                  | 1       | ✅ Yes           |
// | 2     | 15      | 2                  | 2       | ✅ Yes           |
// | 3     | 5       | 0                  | 3       | ❌ No            |
// | 4     | 10      | 1                  | 4       | ❌ No            |
// | 5     | 20      | 5                  | 5       | ✅ Yes           |


// | Code                         | Purpose                                               |
// | ---------------------------- | ----------------------------------------------------- |
// | `arr.indexOf(ele) !== index` | Finds **duplicates** (excluding first occurrence)     |
// | `arr.indexOf(ele) === index` | Keeps **first occurrences only** (removes duplicates) |

// Without inbuilt function
const duplicateArray1 = [5, 10, 15, 5, 10, 20];

const duplicates = []
const count = {}

for(let i=0; i < duplicateArray1.length; i++){
    const item = duplicateArray1[i];
    console.log('count[item]', count[item])
    if(count[item] === undefined){
        count[item] = 1
    }else{
        count[item]++
    }

    if(count[item] === 2){
        duplicates.push(item)
    }
}
console.log("duplicates", duplicates)