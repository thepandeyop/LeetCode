/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */

class TrieNode{
    constructor(word){
        this.children = {};
        this.isEnd = false;
    }
}
class Trie{
    constructor(word){
        this.root = new TrieNode();
    }
    
    insert(word){
     let temp = this.root;  
        for(let i=0;i<word.length;i++){
         if(! temp.children[word[i]]){
             temp.children[word[i]] = new TrieNode(word[i]);
         }   
            temp = temp.children[word[i]];
        }
        temp.isEnd = true;
        temp.isCompleteWord = word;
    }
    
    search(word){
     let temp = this.root; 
          for(let i=0;i<word.length;i++){
            if(! temp.children[word[i]]) return word;
              
              temp = temp.children[word[i]];
              if(temp.isEnd){
                  return temp.isCompleteWord;
              }
        }
        return word;
    }
}



 var replaceWords = function(dictionary, sentence) {
     let arr = sentence.split(' ');
     let trie = new Trie();
     for(let word of dictionary){
         trie.insert(word);
     }
     for(let i =0;i<arr.length;i++){
         arr[i] = trie.search(arr[i]);
     }
     return arr.join(' ');
};
