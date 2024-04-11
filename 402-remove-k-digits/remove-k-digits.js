/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let stack = [];
    for(let i of num){
        while(k>0 &&stack.length>0 && i<stack[stack.length-1]) {
            stack.pop();
            k--;
        }
        stack.push(i);
    }
    while(k>0){
        stack.pop();
        k--;
    }
    const result = stack.join('').replace(/^0+/,'');
    return result ==='' ? '0': result;
};