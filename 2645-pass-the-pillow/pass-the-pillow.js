/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    let totalround = Math.floor(time/(n-1));
     let extra = time %(n-1); // reminder
    
    if(totalround%2==0){
        return extra +1;
    }
    else{
        return n-extra;
    }
    
};