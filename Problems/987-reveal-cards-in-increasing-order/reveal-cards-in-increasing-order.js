/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    
    if(!deck || deck<2)
        return deck;
    
    const sortedarray = deck.sort((a,b)=> b-a);
    
    const result = [];
    
    for (let i of sortedarray){
        if(result.length<2){
            result.unshift(i);
            continue;
        }
        result.unshift(result.pop());
        result.unshift(i);
    } 
    return result;
};