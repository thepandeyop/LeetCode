var commonChars = function(words) {
    let chararr=[]
    for(let x of words){
        let carr = new Array(26).fill(0)
        for(let i=0;i<x.length;i++){
            carr[x.charCodeAt(i)-97]++            
        }
        chararr.push(carr)
    }
    let i=0
    let res=[]
    while(i<26){
        let min=99999
        for(let x of chararr){
            if(x[i]<min)min=x[i]
        }
        res[i]=min
        i++
    }
    let out=[]
    for(let i=0;i<26;i++){
        for(let y=0;y<res[i];y++){
            out.push(String.fromCharCode(i+97))
        }
    }
    return out
};