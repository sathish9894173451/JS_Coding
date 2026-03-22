// Remove unbalanced parentheses in a given expression.
//     Eg.) Input  : ((abc)((de))
//          Output : ((abc)(de))
var input = "((abc)((de))"
function removeExtraBracket(expression){
    let stack = [];
    let indexesToRemove = new Set();
    
    // First pass: Identify unbalanced '('
    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === '(') {
            stack.push(i);
        } else if (expression[i] === ')') {
            if (stack.length) {
                stack.pop();
            } else {
                indexesToRemove.add(i);
            }
        }
    }
    
    // Add remaining unbalanced '(' indexes to remove
    while (stack.length) {
        indexesToRemove.add(stack.pop());
    }
    
    // Construct the valid expression
    return expression.split('').filter((_, i) => !indexesToRemove.has(i)).join('');
}
console.log(removeExtraBracket(input));
