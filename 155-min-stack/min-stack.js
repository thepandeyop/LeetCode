
var MinStack = function() {
    this.stack = [];

};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push({
        value: x,
        min: this.stack.length ===0 ? x: Math.min(x, this.getMin()),
    });
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
};


/**
 * @return {number}
 */
MinStack.prototype.top = function() {
return this.stack[this.stack.length -1].value;    
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length -1].min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */