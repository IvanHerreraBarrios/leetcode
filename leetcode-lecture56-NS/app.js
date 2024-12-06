var longestPalindrome = function(s) {
    var start = 0
    var end = 0
    var n = s.length
    var num = 0
    for(let i=0; i < n; i++){
        const lenExpandSubstrLeft = expandAroundCenter(s, i, i)
        const lenExpandSubstrRight = expandAroundCenter(s, i, i+1)
        num = Math.max(lenExpandSubstrLeft, lenExpandSubstrRight)
        if(num > end - start){
            start = i - Math.floor((num-1) / 2)
            end = i - Math.floor(num / 2)
        }
    }
    return s.slice(start, end + 1)
};

function expandAroundCenter(s, left, right){
    var leftSub = left
    var rightSub = right
    var len = s.length
    while(leftSub >= 0 && rightSub < len && s[leftSub] === s[rightSub]){
        leftSub--
        rightSub++
    }
    return rightSub - leftSub - 1
}