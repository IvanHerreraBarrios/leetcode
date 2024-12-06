var dailyTemperatures = function(temperatures) {
    let result = []
    let erase = []
    let largestNumbers = []
    let length = temperatures.length
    result[length-1] = 0

    if(temperatures[length-2] >= temperatures[length-1]){
        result[length-2] = 0
        largestNumbers.unshift(length-2)
    } else {
        result[length-2] = 1
        largestNumbers.unshift(length-1)
        largestNumbers.unshift(length-2)
    }


    for(let i=length-3; i >= 0; i--){
        let position = 0
        let ban = true
        for(let n=0; n < largestNumbers.length; n++){
            let largestIndex = largestNumbers[n]
            if(temperatures[i] < temperatures[largestIndex] && ban){
                position = largestIndex - i
                ban = false
            }
            if(temperatures[i] >= temperatures[largestIndex]){
                console.log(temperatures[i], temperatures[largestIndex])
                erase.push(largestIndex)
                console.log(erase)
            }
        }

        for(let e=0; e < erase.length; e++){
            index = largestNumbers.indexOf(erase[e])
            largestNumbers.splice(index, 1)
        }
        result[i] = position
        largestNumbers.unshift(i)
        postion = 0
        ban = true   
        erase = []
    }
    return result
};