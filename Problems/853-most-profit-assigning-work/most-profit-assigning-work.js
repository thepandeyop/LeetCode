/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
   let jobpro = [];
    for(let i =0;i<difficulty.length;i++){
        jobpro.push([difficulty[i], profit[i]]);
    }
    
    worker.sort((a,b)=>a-b);
    jobpro.sort((a,b)=>a[0] - b[0]);
    
    let netprofit =0;
    let maxprofit =0;
    
    
    for(let j=0;j<worker.length;j++){
        for(let i=0;i<jobpro.length;i++){
            if(worker[j]>=jobpro[i][0]){
                 maxprofit = Math.max(maxprofit, jobpro[i][1]);
            }
            else{
                break;
            }
            
        }
        netprofit += maxprofit;
    }
    return netprofit;
    
};