function sum(matrix) {
    var sum = 0
    for(r=0; r<matrix.length; r++) {
        for(c=0; c<matrix[r].length; c++) {
            sum+= matrix[r][c]
        }
    }
    return sum
}