/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
      people.sort((a, b)=> a-b);
        let resultBoats = 0,
            left = 0,
            right = people.length-1;
        while(left <= right){
                let sum = people[left] + people[right];
                if(sum <= limit){//both can fit in the boat
                    resultBoats+=1;
                    left++;
                    right--;
                }else if(sum > limit){//choose the heavy person
                    resultBoats+=1;
                    right--;
                }
        }
        return resultBoats;
};