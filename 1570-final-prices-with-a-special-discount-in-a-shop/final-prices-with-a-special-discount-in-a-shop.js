/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
     let stack = [];

    for(let i =0;i<prices.length;i++){
       let discount = null;
        for(let j = i+1; j<prices.length;j++){
      if(prices[i]>=prices[j]){
          discount = prices[i] - prices[j];
          break;
      }
        }
        
        stack.push(discount===null ? prices[i] :discount);
    }
    return stack;
};