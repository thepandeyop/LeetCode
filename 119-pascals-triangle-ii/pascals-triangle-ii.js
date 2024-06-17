/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
   let currow = [];
    currow.push(1);
    for(let i=1;i<=rowIndex;i++){
        let newrow= [];
        newrow.push(1);
        for(let j=1;j<i;j++){
            let sum = currow[j-1]+currow[j];
            newrow.push(sum);
        }
        newrow.push(1);
        currow = newrow;
        
    }
    return currow;
};