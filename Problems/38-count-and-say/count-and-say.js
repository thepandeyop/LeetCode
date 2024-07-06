/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n === 1) {
        return '1';
    }
    const helper = (val) => {
        const arr = [];
        let count = 0;
        let key = '';
        for(let i = 0 ; i < val.length; i++) {
            key = val[i];
            count = 0;
            while(key === val[i]) {
                count++;
                i++;
            }
            i--;
            arr.push(count, key);
        }
        return arr.join('');
    };
    let result = '1';
    while(n > 1) {
        result = helper(result);
        n--;
    }
    return result;
};