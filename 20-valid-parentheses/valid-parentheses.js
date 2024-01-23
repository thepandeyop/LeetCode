/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let para ='() {} []';
    let i =0;

    while(i<s.length){
        stack.push(s[i]);
        i++;

        let open = stack[stack.length-2];
        let close = stack[stack.length-1];

        let final = open + close;
        if(   para.includes(final)){
stack.pop();
stack.pop();

        }
 
    } 
return  stack.length===0;
};