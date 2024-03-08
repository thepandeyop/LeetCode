/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let resultObj = {};

    for(const obj of [...arr1, ...arr2]){
        const id = obj.id;
        if(resultObj[id]){
            resultObj[id] = {...resultObj[id], ...obj};
        }else{
            resultObj[id] = obj;
        }
    }

    return Object.values(resultObj);
};