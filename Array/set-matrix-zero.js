function setMatrixZero(matrix){
    var columns = new Set()
    var rows = new Set()
    for(var i = 0; i < matrix.length; i++){
        for (var j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] == 0){
                rows.add(i)
                columns.add(j)
            }
        }
    }
    for(var i = 0; i < matrix.length; i++){
        for (var j = 0; j < matrix[i].length; j++){
            if(rows.has(i) || columns.has(j)){
                matrix[i][j] = 0
            }
        }
    }
    return matrix
}

var matrix = [[1,1,1],[1,0,1],[1,1,1]]
let result = setMatrixZero(matrix)
console.log(result)