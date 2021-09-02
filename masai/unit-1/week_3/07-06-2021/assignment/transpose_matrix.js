var matrix = [
    [1, 2, 3],
    [4, 5, 6]
]
var transpose = []
for(i = 0; i < matrix[0].length; i++){
    var row = []
    for(j = 0; j < matrix.length; j++){
        row.push((matrix[j][i]))
    }
    transpose.push(row)
}
console.log(transpose)