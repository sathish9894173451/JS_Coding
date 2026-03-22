function romanToInteger(s){
    const roman = {'I': 1,'V':5,'X':10,'L':50,'C':100,'D':'500','M':1000}
    let total =0;
    for(let i=0; i < s.length;i++){
        let current = roman[s[i]]
        let next = roman[s[i]]

        
        if(next > current){
            total -= current
        }else{
            total += current
        }
    }
    return total;
}
// console.log(romanToInteger('III'))
console.log(romanToInteger("IV"));     // Output: 4
// console.log(romanToInteger("IX"));     // Output: 9
// console.log(romanToInteger("LVIII"));       // Output: 58
// If next is greater than current, we subtract current from total.
// This handles cases like "IV" (4) → (5 - 1) or "IX" (9) → (10 - 1).