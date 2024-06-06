var TrieNode = function() {
    this.children = {};
    this.isLeaf = false;
};

var Trie = function() {
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let temp = this.root;
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!(char in temp.children)) {
            temp.children[char] = new TrieNode();
        }
        temp = temp.children[char];
    }
    temp.isLeaf = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
        let character = word[i];
        if (!(character in current.children)) {
            return false;
        }
        current = current.children[character];
    }
    return current.isLeaf;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let current = this.root;
    for (let i = 0; i < prefix.length; i++) {
        let character = prefix[i];
        if (!(character in current.children)) {
            return false;
        }
        current = current.children[character];
    }
    return true;
};
