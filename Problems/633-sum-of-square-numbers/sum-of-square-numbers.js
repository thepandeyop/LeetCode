/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let a = 0;
    let b =  Math.ceil(Math.sqrt(c));
    while(a<=b){
        let t = a*a + b*b;
        if(t==c) return true;
    
    else if(t<c){
        a++;
    }else {
        b--;
    }
    }
    return false;
};