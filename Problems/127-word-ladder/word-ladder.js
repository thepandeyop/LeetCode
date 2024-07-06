/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(startWord, targetWord, words) {
    const wordSet = new Set(words);
    if (!wordSet.has(targetWord)) {
        return 0;
    }

    const queue = [];
    queue.push(startWord);
    const visited = new Set();
    let steps = 1;

    while (queue.length > 0) {
        const size = queue.length;

        for (let i = 0; i < size; ++i) {
            let currentWord = queue.shift();
            if (currentWord === targetWord) {
                return steps;
            }

            for (let j = 0; j < currentWord.length; ++j) {
                for (let k = 0; k < 26; ++k) {
                    const char = String.fromCharCode(97 + k);
                    let newWord = currentWord.split('');
                    newWord[j] = char;
                    newWord = newWord.join('');
                    if (!visited.has(newWord) && wordSet.has(newWord)) {
                        queue.push(newWord);
                        visited.add(newWord);
                    }
                }
            }
        }
        ++steps;
    }
    return 0;
};
