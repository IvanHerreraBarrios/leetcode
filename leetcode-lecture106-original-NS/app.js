//472

var findAllConcatenatedWordsInADict = function(words) {
    const result = []
    for(let i=0; i < words.length; i++){
        if(findWord(i, words[i], words)){
            result.push(words[i])
        }
    }
    return result
};

function findWord(idx, word, words){
    if(word.length === 0) return true

    for(let i=0; i < words.length; i++){
        if(idx !== i && word.startsWith(words[i])){
            const substr = word.substring(words[i].length)
            if(findWord(idx, substr, words)){
                return true
            }
        }
    }
    return false
}