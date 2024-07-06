/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let para = { '(': ')', '{': '}', '[': ']' };

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        if (para[char]) {
            stack.push(char);
        } else {
            let lastOpen = stack.pop();
            if (para[lastOpen] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
};
