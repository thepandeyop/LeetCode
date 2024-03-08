/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cauhe = {};
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if(key in cauhe)return cauhe[key];
    
    const result = fn.apply(this,args);
    cauhe[key] = result;
    return result;
    }
}

const memorization = memoize(function(a,b) {
    return a + b;
})



/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */