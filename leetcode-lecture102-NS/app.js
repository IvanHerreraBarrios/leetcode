var sumSubarrayMins = function(arr) {
    let sum = 0
    for(let i=0; i < arr.length; i++){
        min = arr[i]
        for(let j=i; j < arr.length; j++){
            if(arr[j] < min) {
                min = arr[j]
            }
            sum = sum + min 
        }
    }
    return sum % (Math.pow(10, 9) + 7)
};

/* 4,3,2,1    */