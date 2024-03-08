var TimeLimitedCache = function() {
    this.memory= new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let isthere=false;
    if(this.memory.has(key)){
        isthere=true;
        clearTimeout(this.memory.get(key)[1]);
    }
    const timeoutID=setTimeout(()=>{
        this.memory.delete(key);
    },duration)
    this.memory.set(key,[value,timeoutID]);
    return isthere;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if(this.memory.has(key)) return this.memory.get(key)[0];
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.memory.size;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */