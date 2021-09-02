var m1 = [
    [1, 2, 3],
    [5, 6, 7],
    [7, 8, 9]
]
var m2 = [
    [2, 1, 2],
    [1, 2, 1],
    [2, 1, 2]
]
var sum_matrix  =[]
for(r=0; r<m1.length; r++) {
    var sum_row = []
    for (c=0; c<m1[0].length; c++) {
        sum_row.push(m1[r][c] + m2[r][c])
    }
    sum_matrix.push(sum_row)
}
console.log(sum_matrix)

