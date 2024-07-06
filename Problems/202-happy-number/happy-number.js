/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const map = {};
  const recursion = (number) => {
      const array = number.toString().split('');
      let newNumber = 0;
      for(let i=0;i<array.length;i++){
          newNumber += Number(array[i])**2;
      }
      if(newNumber ===1)return true;
      if(map[newNumber])return false;
      map[newNumber] = newNumber;
      return recursion(newNumber);
  }
  return recursion(n);
};