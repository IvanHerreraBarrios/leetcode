var convert = function(s, numRows) {
    if(numRows === 1) return s
    const mat = []
    for(let i=0; i < numRows; i++){
        mat[i] = []
    }
    let r = 0
    let c = 0
    let down = true
    for(let i=0; i <s.length; i++){
        mat[r][c] = s[i]
        if(down && r === numRows - 1){
            down = false
        } else if(!down && r === 0){
            down = true
        }

        if(down){
            r++
        } else {
            r--
            c++
        }
    }

    let result = ""
    for(let i=0; i < mat.length; i++){
        for(let j=0; j < mat[i].length; j++){
            if(mat[i][j]) result += mat[i][j]
        }
    }

    return result
};