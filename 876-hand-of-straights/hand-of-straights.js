var isNStraightHand = function(hand, groupSize) {
    let n = hand.length;
    if(hand%groupSize){
        return false;
    }
    const map = new Map();
    for(let i=0;i<n;i++){
        if(map.has(hand[i])){
            map.set(hand[i],map.get(hand[i])+1);
        } else {
            map.set(hand[i],1);
        }
    }
    const sortHand = hand.sort((a,b)=>a-b);
    for(let i=0;i<n;i++){
        let num=sortHand[i];
        let curSize=0;
        if(!map.has(num)){
            continue;
        }
        while(curSize<groupSize&&map.has(num)){
            curSize++;
            map.set(num,map.get(num)-1);
            if(map.get(num)===0){
                map.delete(num);
            }
            num++;
        }
        if(curSize<groupSize)
            return false;
    }
    if(map.size===0)
        return true;
    false;
};